$(function(){
    bannerSwiper();
    sizecheck();
    dataTable();
    indexTab();
    schoolTab();

    window.onresize=function(){  
        sizecheck();
   }  

});

// swiper
function bannerSwiper(){
    // swiper1
    var mySwiper1 = new Swiper('.container1',{
        pagination: '.pag1',
        loop:true,
        grabCursor: true,
        paginationClickable: true
    })

    // swiper2
    var mySwiper2 = new Swiper('.container2',{
        pagination: '.pag2',
        loop:true,
        grabCursor: true,
        paginationClickable: true
    })

    $('.icon-prev').on('click', function(e){
        e.preventDefault()
        mySwiper2.swipePrev()
    })

    $('.icon-next').on('click', function(e){
        e.preventDefault()
        mySwiper2.swipeNext()
    })

    $('.newhouse').find('.tab-list').on('click',function(){
        var o = $(this);
        var os = o.siblings();
        os.removeClass('tab-on');
        o.addClass('tab-on');
        var oindex = o.index();
        if(oindex>0){
            var newindex = oindex/2
        }else{
            var newindex = 0
        }
        mySwiper2.swipeTo(newindex, 500, false);
    });

    // swiper3
    var mySwiper3 = new Swiper('.container3',{
        loop:true,
        grabCursor: true,
        paginationClickable: true
    })

    $('.icon-left').on('click', function(e){
        e.preventDefault()
        mySwiper3.swipePrev()
    })

    $('.icon-right').on('click', function(e){
        e.preventDefault()
        mySwiper3.swipeNext()
    })

    // swiper4
    var mySwiper4 = new Swiper('.container4',{
        pagination: '.pag4',
        loop:true,
        grabCursor: true,
        paginationClickable: true
    })
}

// sizecontrol
function sizecheck(){
    var winWidth = window.innerWidth;
    if(winWidth<1460){
        $('.changesize').addClass('small');

        // 精选学区房
        $('.schoolhouse').addClass('smallschoolhouse');
        $('.slast').addClass('hide');

        //图表房产行情
        $('.datatable').addClass('smalldatatable');

        // 地产资讯
        $('.consultation').addClass('smallconsultation');

        // 进程
        $('.progress-group').addClass('smallprogress-group');
    }else{
        $('.changesize').removeClass('small');

        $('.schoolhouse').removeClass('smallschoolhouse');
        $('.slast').removeClass('hide');

        $('.datatable').removeClass('smalldatatable');

        $('.consultation').removeClass('smallconsultation');

        $('.progress-group').removeClass('smallprogress-group');
    }
}

// table
function dataTable(){
    var chart1 = echarts.init(document.getElementById('main1'));

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: ''
        },
        tooltip: {},
        legend: {
            data:['销量']
        },
        xAxis: {
            data: ["2016-03","2016-05","2016-07","2017-09","2016-11","2017-01"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    chart1.setOption(option);

    // 绘制饼状图。
    echarts.init(document.getElementById('main2')).setOption({
        title: {text: ''},
        series: {
            type: 'pie',
            data: [
                {name: '渠道1', value: 1212},
                {name: '渠道2', value: 2323},
                {name: '渠道3', value: 1919}
            ]
        }
    });



    var chart1 = echarts.init(document.getElementById('main3'));

    var option = {
        title: {
            text: ''
        },
        tooltip: {},
        legend: {
            data:['销量']
        },
        xAxis: {
            data: ["2016-03","2016-05","2016-07","2017-09","2016-11","2017-01"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [60, 10, 36, 10, 10, 20]
        }]
    };

    chart1.setOption(option);

    echarts.init(document.getElementById('main4')).setOption({
        title: {text: ''},
        series: {
            type: 'pie',
            data: [
                {name: '渠道1', value: 1212},
                {name: '渠道2', value: 2323},
                {name: '渠道3', value: 1919}
            ]
        }
    });


    var chart1 = echarts.init(document.getElementById('main5'));
    var option = {
        title: {
            text: ''
        },
        tooltip: {},
        legend: {
            data:['销量']
        },
        xAxis: {
            data: ["2016-03","2016-05","2016-07","2017-09","2016-11","2017-01"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [60, 10, 15, 50, 90, 20]
        }]
    };

    chart1.setOption(option);

    echarts.init(document.getElementById('main6')).setOption({
        title: {text: ''},
        series: {
            type: 'pie',
            data: [
                {name: '渠道1', value: 1212},
                {name: '渠道2', value: 2323},
                {name: '渠道3', value: 1919}
            ]
        }
    });
}

//首页切换
function indexTab(){
    $('.johome').find('.tab-list').on('click',function(){
        var o = $(this);
        var oindex = o.index();
        var os = o.siblings();
        os.removeClass('tab-on');
        o.addClass('tab-on');

        if(oindex>0){
            var newindex = oindex/2
        }else{
            var newindex = 0
        }

        // 最新挂牌房源切换
        var house1 = $('.housebox').find('.housecon').eq(newindex);
        var house2 = house1.siblings();
        house1.removeClass('hide');
        house2.addClass('hide');

        // 图表切换
        var data1 = $('.datatable').find('.datacon').eq(newindex);
        var data2 = data1.siblings();
        data1.removeClass('hide');
        data2.addClass('hide');

        // 学区房 
        var houseinfo1 = $('.houseinfo').eq(newindex);
        var houseinfo2 = houseinfo1.siblings();
        houseinfo1.removeClass('hide');
        houseinfo2.addClass('hide');
    })
}

// 学区房左侧切换
function schoolTab(){
    $('.ranklist').on('click',function(){
        var o = $(this);
        var oindex = o.index();
        var os = o.siblings();
        os.removeClass('rankon');
        o.addClass('rankon');
    })
}