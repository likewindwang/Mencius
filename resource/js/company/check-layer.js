$(function(){
    var sectionData = ['经理部','市场部','运营部','产品部','研发部']
    // layui日期组件的调用
    layui.use(['form','laydate'], function(){
        var form = layui.form,
            laydate = layui.laydate,
            table = layui.table;

        laydate.render({
            elem: '#test1-1'
            ,lang: 'en'
        })
        laydate.render({
            elem: '#test1-2'
            ,lang: 'en'
        })
    })
    // 在列表点击后传过来的值
    var getParams = JSON.parse(decodeURI(window.location.search.split('?')[1]))
    // 将穿过来的值渲染至DOM
    for(var k in getParams){
        $('.person-'+k+'').val(getParams[k])
        // if(k == 'section'){
        //     $('.person-'+k+'').val(getParams[k])
        // }else{
        //     $('.person-'+k+'').val(getParams[k])
        // }
    }
    // 下拉选择（部门）



})