$(function(){
    // 初次进入页面时，默认显示第一个页面
    // $('#iframe').attr('src','../../html/iframes/company/workers.html')
    // 计算设备屏幕的宽高来适应性的展示
    var h = $('body').height(),
        w = $('body').width();
    $('.main').height(h-60)
    $('.main-right').width($('.main').width()-200)
    // 手动更改浏览器宽高，计算自适应宽高
    $(window).resize(function(){
        var h = $('body').height(),
            w = $('body').width();
        $('.main').height(h-60)
        $('.main-right').width($('.main').width()-200)
    })
    // layui调用时需要的js
    layui.use('element', function(){
        var element = layui.element; //导航的hover效果、二级菜单等功能，需要依赖element模块
        
        //监听导航点击
        // element.on('nav(demo)', function(elem){
        //     //console.log(elem)
        //     layer.msg(elem.text());
        // });
    });
    $('a').on('click', function(){
        // console.log(this.className)
        // console.log(this.className.split('-')[0])
        // console.log(this.className.split('-')[1])
        // console.log(this)
        if(this.className != '' && this.className){
            $('#iframe').attr('src', './iframes/' + this.className.split('-')[0] + '/' + this.className.split('-')[1] + '.html')
        }
    })
    function ttt(){
        alert('1')
    }
})