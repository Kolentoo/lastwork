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
    // if($('.pg-prev').get(0)){
    //     $('.pg-prev').text('上一页');
    // }

    // if($('.pg-next').get(0)){
    //     $('.pg-next').text('下一页');
    // }


    selectbox();
    toggleshow();
    saveoption();
    cleanoption();
    changemj();
    bigpic();
    conditional();
    



    
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
    
    $('.saveoption').on('click',function(){
        var newarr = [];
        $('.selectbox').find('.selectlist').each(function(a,b){
            var newitem = $(b).find('.mainliston').text();
            if(newitem!='不限'){
                newarr.push(newitem);
            }
        })

        console.log(newarr)
        if(newarr.length>0){
            $('.choosenbox').children().remove();
            newarr.map(function(current,index,arr){
                $('.choosenbox').append(
                    '<li class="choosenlist fl">'+
                        '<span class="s1">'+current+'</span>'+
                        '<i class="list-close pointer"></i>'+
                    '</li>'
                )
            })

            $('.list-close').on('click',function(){
                var o = $(this);
                var op = o.parent('.choosenlist');
                op.addClass('hide');
            })

        }

        
    })
}

// 清除条件
function cleanoption(){
    $('.cleanoption').on('click',function(){
        $('.choosenbox').remove();
    })
}

// 单位转换
function changemj(){
    $('.sizecon').on('click',function(){
        var op = $(this).parent();
        op.find('.yc').toggleClass('sizeon');
        op.find('.mi').toggleClass('sizeon');
        if($(this).hasClass('sizeunit')){
            if(op.find('.mi').hasClass('sizeon')){

            
                var thisp = $(this).parents('.maincon');
                var mlist = thisp.find('.mainlist');
                mlist.each(function(a,b){

                    var btxt = $(b).text();
                    $(b).text(btxt.replace('ft²','m²'))
                    
                })
            }else{
                            
                var thisp = $(this).parents('.maincon');
                var mlist = thisp.find('.mainlist');
                mlist.each(function(a,b){

                    var btxt = $(b).text();
                    $(b).text(btxt.replace('m²','ft²'))
                    
                })
            }
        }
    })
}

// 视图切换
function bigpic(){
    $('.bigpic').on('click',function(){
        var txt = $(this).find('.s3');
        if(txt.text()==='大图'){
            txt.text('列表')
        }else{
            txt.text('大图')
        }
    })
}

// 条件切换
function conditional(){
    $('.optionbtn').on('click',function(){
        var up = $(this).find('.list-chooseup');
        var down = $(this).find('.list-choosedown');
        if(!up.hasClass('list-chooseup2')&&!down.hasClass('list-choosedown2')){
            up.addClass('list-chooseup2');
            down.removeClass('list-choosedown2');
        }else if(up.hasClass('list-chooseup2')&&!down.hasClass('list-choosedown2')){
            up.removeClass('list-chooseup2');
            down.addClass('list-choosedown2');
        }else{
            up.removeClass('list-chooseup2');
            down.removeClass('list-choosedown2');
        }
    })
}

