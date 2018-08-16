$(function(){
    var h = $('body').height(),
        w = $('body').width();
    $('.main').width(w - 40)
    $('.main').height(h-40)
    $(window).resize(function(){
        var h = $('body').height(),
            w = $('body').width();
        $('.main').width(w - 40)
        $('.main').height(h-40)
    })

    layui.use('laydate', function(){
        var laydate = layui.laydate;
        laydate.render({
            elem: '#test11'
            ,format: 'yyyy年MM月dd日'
        });
    })  

})