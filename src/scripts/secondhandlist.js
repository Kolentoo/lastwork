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
    toggleshow();
    saveoption();
    
    




    
});

// 筛选
function selectbox(){
    $('.mainlist').on('click',function(){
        var o = $(this);
        var os = o.siblings();
        var oindex = o.index();
        os.removeClass('mainliston');
        o.addClass('mainliston')
    })
}

// 收起更多
function toggleshow(){
    $('.morebtn').on('click',function(){
        if($(this).find('em').text()==='更多'){
            $(this).find('em').text('收起');
        }else{
            $(this).find('em').text('更多');
        }
        
        $('.selectbox').toggleClass('selectboxon');
    })
}

// 保存条件
function saveoption(){
    var newarr = [];
    $('.saveoption').on('click',function(){
        $('.selectbox').find('.selectlist').each(function(a,b){
            var newitem = $(b).find('.mainliston').text();
            if(newitem!='不限'){
                newarr.push(newitem);
            }
        })

        console.log(newarr)
        if(newarr.length>0){

        newarr.each(function(c,d){
            console.log(d)
            // $('.choosenbox').append(
            //     '<li class="choosenlist fl">'+
            //         '<span class="s1">'+d+'</span>'+
            //         '<i class="list-close pointer"></i>'+
            //     '</li>'
            // )
        })

        }
        
    })
}