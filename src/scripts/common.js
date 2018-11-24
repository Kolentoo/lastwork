$(function(){
    
    var img = document.querySelectorAll("img[data-src]")
	for(var i = 0; i < img.length; i++) {
		img[i].style.opacity = "0"
	}
	Limg()

    window.onscroll = function(){
        Limg()
    }

	window.onresize=function(){  
        sizechange();
   }  
   	
	commonTop();
	commonBottom();
	sizechange();

});

// lazyload
function Limg() {
	var viewHeight = document.documentElement.clientHeight // 可视区域的高度
	var t = document.documentElement.scrollTop || document.body.scrollTop;
	var limg = document.querySelectorAll("img[data-src]")
	// Array.prototype.forEach.call()是一种快速的方法访问forEach，并将空数组的this换成想要遍历的list
	Array.prototype.forEach.call(limg, function(item, index) {
		var rect
		if(item.getAttribute("data-src") === "")
			return
		//getBoundingClientRect用于获取某个元素相对于视窗的位置集合。集合中有top, right, bottom, left等属性。
		rect = item.getBoundingClientRect()
		// 图片一进入可视区，动态加载
		if(rect.bottom >= 0 && rect.top < viewHeight) {
			(function() {
				var img = new Image()
				img.src = item.getAttribute("data-src")
				item.src = img.src
				//给图片添加过渡效果，让图片显示
				var j = 0
				setInterval(function() {
					j += 0.2
					if(j <= 1) {
						item.style.opacity = j
						return
					}
				}, 100)
				item.removeAttribute('data-src')
			})()
		}
	})
}

function commonTop(){
	if($('.top-box').get(0)){
		$('.top-box').append(
		'<div class="common-top">'+
		'<div class="common-con clearfix changesize">'+
			'<a class="block logo-box fl" href="" >'+
				'<img class="logo vm g10" src="./images/index/logo.png" alt="">'+
			'</a>'+
			'<ul class="menubox clearfix fl">'+
				'<li class="menulist fl"><a href=""><span class="s1">首页</span></a></li>'+
				'<li class="menulist fl">'+
					'<a href="" class="block">'+
						'<span class="s1">二手房</span>'+
						'<i class="icon-down-white"></i>'+
					'</a>'+
				'</li>'+
				'<li class="menulist fl"><a href=""><span class="s1">学区找房</span></a></li>'+
				'<li class="menulist fl"><a href=""><span class="s1">地图找房</span></a></li>'+
				'<li class="menulist fl">'+
					'<a href="" class="block">'+
						'<span class="s1">楼盘找房</span>'+
						'<i class="icon-down-white"></i>'+
					'</a>'+
				'</li>'+
				'<li class="menulist fl"><a href=""><span class="s1">专题</span></a></li>'+
				'<li class="menulist fl"><a href=""><span class="s1">团购</span></a></li>'+
				'<li class="menulist fl"><a href=""><span class="s1">生态圈</span></a></li>'+
				'<li class="menulist fl"><a href=""><span class="s1">经济看点</span></a></li>'+
				'<li class="menulist fl"><a href=""><span class="s1">咨询新闻</span></a></li>'+
			'</ul>'+
			'<div class="login-box fl">'+
				'<i class="icon-login"></i>'+
				'<a class="register" href="">注册</a><span class="line"></span><a href="">登录</a>'+
			'</div>'+
			'<div class="language fr">'+
				'<div class="current-language">'+
					'<span class="s1">中文</span>'+
					'<i class="icon-down-white"></i>'+
				'</div>'+
			'</div>'+
		'</div>'+
		'</div>'+

		'<div class="userbox">'+
		'<div class="user-txt clearfix changesize">'+
		'<div class="location fl pointer">'+
			'<i class="icon-location"></i>'+
			'<span class="s1">温哥华</span>'+
		'</div>'+

		'<div class="saling fl">'+
			'<i class="icon-salehouse"></i>'+
			'<span class="salehouse">在售房源<em>298720</em>套</span>'+
		'</div>'+

		'<div class="search-box fl">'+
	'<input type="text" class="searchinput" placeholder="MLS ® 编号/门牌号/街道名称">'+
	'<p class="search-btn pointer tc"><em>搜索</em></p>'+
'</div>'+

'<div class="morechoose fl">'+
	'<i class="icon-rightarrow2"></i>'+
	'<a href="">别墅</a>'+
	'<a href="">联排</a>'+
	'<a href="">公寓</a>'+
'</div>'+

'<div class="app fr tc">'+
	'<a href="" class="block">'+
		'<span class="s1">APP下载</span>'+
		'<i class="icon-phone vm"></i>'+
	'</a>'+
'</div>'+
'<p class="phonenum fr">国内:400-969-3269</p>'+
'</div>'+
'</div>'
)
	}
}

function commonBottom(){
	if($('.bottom-box').get(0)){
		$('.bottom-box').append(
			'<div class="company-show"></div>'+
			'<div class="bottom"></div>'
		)
	}
}

function sizechange(){
    var winWidth = window.innerWidth;
    if(winWidth<1460){
        $('.changesize').addClass('small');

    }else{
        $('.changesize').removeClass('small');
    }
}

