var gulp = require('gulp');//引入gulp
var htmlmin = require('gulp-htmlmin');//html压缩
var uglify = require('gulp-uglify');//引入gulp-uglify模块，用于压缩JS
var watchPath = require('gulp-watch-path');//引入gulp-watch-path
var rename = require('gulp-rename');//引入gulp-rename
var connect   = require('gulp-connect');//热加载
var plumber=require('gulp-plumber');//检测错误
var Replace = require('gulp-replace');
var processhtml = require('gulp-processhtml');


var date = new Date().getTime();
gulp.task('clean',function(){
    return gulp.src('dist/**',{read:false})
        .pipe(clean());
});
function errrHandler( e ){
    // 控制台发声,错误时beep一下
    gutil.beep();
    gutil.log(e);
    this.emit('end');
}

// js压缩
//'jsmin'为我们自定义的任务名，匿名函数为'jsmin'具体任务
gulp.task('jsmin', function(){
    // 'script/*.js'是即将压缩的js文件
    gulp.src('src/scripts/*.js')
        //uglify()是调用的压缩方法，去压缩js
        .pipe(uglify())
        //给压缩后的文件，添加min后缀名
        // .pipe(rename({suffix: ''}))
        //gulp.dest是将压缩后的文件另存为哪的方法，如存到newScript文件夹中
        .pipe(gulp.dest('dist/scripts'))
        .pipe(connect.reload());     
});

//css压缩
// 获取 cleancss 模块（用于压缩 CSS）
var cleanCSS = require('gulp-clean-css');
// 压缩 css 文件
// 在命令行使用 gulp cssmin 启动此任务
gulp.task('cssmin', function() {
        // 1. 找到文件
    gulp.src('src/styles/*.css')
        // 2. 压缩文件
        .pipe(cleanCSS())
        // 3. 另存压缩后的文件
        .pipe(gulp.dest('dist/styles'))
        .pipe(connect.reload());   
});

gulp.task('htmlmin', function () {
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: false,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: false,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: false,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: false,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    gulp.src(['index/*.htm','index/*.html'])       
        .pipe(plumber({errorHandler:errrHandler}))     
        .pipe(Replace(/_VERSION_/gi, date))
        .pipe(processhtml())
        .pipe(htmlmin(options))
        .pipe(gulp.dest('dist'));
});

// 图片压缩
var imageMin = require('gulp-imagemin');
gulp.task('imgmin',function(){
    gulp.src('src/images/*.*')
        .pipe(imageMin({progressive: true}))
        .pipe(gulp.dest('dist/images'))
        .pipe(connect.reload());   
});


// 在命令行使用 gulp auto 启动此任务
gulp.task('auto', function () {
    // 监听文件修改，当文件被修改则执行 script 任务
    gulp.watch('src/scripts/*.js', ['jsmin']);
    gulp.watch('src/styles/*.css', ['cssmin']);
    gulp.watch('src/images/*.*', ['imgmin']);
    gulp.watch('src/*.html', ['reload']);
});

// 创建热加载任务
gulp.task('reload',function(){
    gulp.src('src/*')
        .pipe(connect.reload())
})

// gulp服务器
gulp.task('server',function(){
    connect.server({
        root:'src',
        livereload:true,
        port:84
    })
})

// 默认任务
gulp.task('default',['server','auto']);


//除了cnpm install 还需要cnpm install gulp -g
gulp.task('compress',function(){  
    gulp.start('cssmin','htmlmin','jsmin','imgmin');
});


