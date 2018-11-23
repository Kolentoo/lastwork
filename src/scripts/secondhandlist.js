$(function(){
    // page
    $("#pager").zPager({
        totalData: 60
    });
    $("#pager2").zPager({
        url:'pageData.json',
        htmlBox: $('#wraper'),
        btnShow: false
        // ,
        // dataRender: function(data){
        // 	console.log(data+'---data-2');
        // }
    });
    if($('.pg-prev').get(0)){
        $('.pg-prev').text('上一页');
    }

    if($('.pg-next').get(0)){
        $('.pg-next').text('下一页');
    }


    selectbox();
    
    




    
});

function selectbox(){
    $('.mainlist').on('click',function(){
        var o = $(this);
        var os = o.siblings();
        var oindex = o.index();
        os.removeClass('mainliston');
        o.addClass('mainliston')
    })
}