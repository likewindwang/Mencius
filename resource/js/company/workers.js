$(function(){
    var h = $('body').height(),
        w = $('body').width();
    $('.main').width(w - 80)
    $('.main').height(h-80)
    $(window).resize(function(){
        var h = $('body').height(),
            w = $('body').width();
        $('.main').width(w-80)
        $('.main').height(h-80)
    })

    // 调用layui日期
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
    // 调用layui表格
    layui.use('table', function(){
        var table = layui.table;
        table.render({
          elem: '#test'
          ,height:'full-200'
          ,skin:'line'
          ,data:[{name:'1',sex:'男',city:'2015',sign:'未填写',id:'1000',score:'2017-08-25 16:06'},
              {name:'2',sex:'女',city:'2016',sign:'未填写',id:'1001',score:'2017-08-25 16:06'},
              {name:'3',sex:'男',city:'2017',sign:'未填写',id:'1002',score:'2017-08-25 16:06'},
              {name:'4',sex:'男',city:'2018',sign:'未填写',id:'1003',score:'2017-08-25 16:06'},
              {name:'5',sex:'男',city:'2019',sign:'未填写',id:'1004',score:'2017-08-25 16:06'},
              {name:'6',sex:'女',city:'2020',sign:'未填写',id:'1005',score:'2017-08-25 16:06'},
              {name:'7',sex:'女',city:'2021',sign:'未填写',id:'1006',score:'2017-08-25 16:06'},
              {name:'8',sex:'女',city:'2022',sign:'未填写',id:'1007',score:'2017-08-25 16:06'},
              {name:'9',sex:'女',city:'2023',sign:'未填写',id:'1008',score:'2017-08-25 16:06'},
              {name:'10',sex:'女',city:'2015',sign:'未填写',id:'1009',score:'2017-08-25 16:06'},
              {name:'7',sex:'女',city:'2021',sign:'未填写',id:'1006',score:'2017-08-25 16:06'},
              {name:'8',sex:'女',city:'2022',sign:'未填写',id:'1007',score:'2017-08-25 16:06'},
              {name:'9',sex:'女',city:'2023',sign:'未填写',id:'1008',score:'2017-08-25 16:06'},
              {name:'10',sex:'女',city:'2015',sign:'未填写',id:'1009',score:'2017-08-25 16:06'},
              {name:'7',sex:'女',city:'2021',sign:'未填写',id:'1006',score:'2017-08-25 16:06'},
              {name:'8',sex:'女',city:'2022',sign:'未填写',id:'1007',score:'2017-08-25 16:06'},
              {name:'9',sex:'女',city:'2023',sign:'未填写',id:'1008',score:'2017-08-25 16:06'},
              {name:'10',sex:'女',city:'2015',sign:'未填写',id:'1009',score:'2017-08-25 16:06'},
              {name:'7',sex:'女',city:'2021',sign:'未填写',id:'1006',score:'2017-08-25 16:06'},
              {name:'8',sex:'女',city:'2022',sign:'未填写',id:'1007',score:'2017-08-25 16:06'},
              {name:'9',sex:'女',city:'2023',sign:'未填写',id:'1008',score:'2017-08-25 16:06'},
              {name:'10',sex:'女',city:'2015',sign:'未填写',id:'1009',score:'2017-08-25 16:06'}
          ]
          ,cols: [[
            {width:'6%', type:'checkbox'}
            ,{field:'id', width:'10%', title: 'ID'}
            ,{field:'name', width:'10%', title: '姓名',style:'color: #676767;'}
            ,{field:'sex', width:'10%', title: '性别'}
            ,{field:'city', width:'10%', title: '部门'}
            ,{field:'sign', title: '入职时间', width: '20%'}
            ,{field:'score', width:'20%', title: '离职时间'}
            ,{field:'classify', width:'12.8%', title: '操作',templet:'#titleTpr'}
          ]]
          ,page: true
          ,limit: 30
        });
        //监听表格复选框选择
        table.on('checkbox(demo)', function(obj){
            console.log(obj)
        });
        //监听工具条
        table.on('tool(demo)', function(obj){
            var data = obj.data;
            // 查看的提示框
            if(obj.event === 'detail'){
                // layer.msg('ID：'+ data.id + ' 的查看操作');
                console.log(data)
                layui.use('layer', function(){ //独立版的layer无需执行这一句
                    var $ = layui.jquery, layer = layui.layer; //独立版的layer无需执行这一句
                        layer.open({
                            type: 1
                            ,title: ['查看信息','border-bottom: 0 !important;font-weight: bold;font-size:13px;color:#656565;background-color: #ffffff !important;'] //不显示标题栏
                            ,closeBtn: 1
                            ,area: ['400px', '500px']
                            ,shade: 0.4
                            ,id: 'LAY_layuipro7' //设定一个id，防止重复弹出
                            ,btn: ['确定']
                            ,btnAlign: 'c'
                            ,moveType: 1 //拖拽模式，0或者1
                            // ,content:'../../../html/iframes/company/check-layer.html'
                            ,content:'<div class="check-panl" style="height:100%;margin:0 20px;"><ul class="person-detail"><li class="person-id" style="height: 30px;line-height: 30px;padding-left: 5px;">ID: <span>'+data.id+'</span></li><li class="person-name" style="height: 30px;line-height: 30px;padding-left: 5px;">姓名： <span>'+data.name+'</span></li><li class="person-sex" style="height: 30px;line-height: 30px;padding-left: 5px;">性别：<span>'+data.sex+'</span></li><li class="person-deplt" style="height: 30px;line-height: 30px;padding-left: 5px;">部门： <span>'+data.city+'</span></li><li class="person-inDate" style="height: 30px;line-height: 30px;padding-left: 5px;">入职时间： <span>'+data.sign+'</span></li><li class="person-outDate" style="height: 30px;line-height: 30px;padding-left: 5px;">离职时间： <span>'+data.score+'</span></li></ul></div>'
                        });            
                })  
                    
                    
                                                   
            } else if(obj.event === 'del'){
                // 删除的提示框
                layer.confirm('真的删除行么', function(index){
                    obj.del();
                    layer.close(index);
                });
                // 编辑的提示框
            } else if(obj.event === 'edit'){
                layer.alert('编辑行：<br>'+ JSON.stringify(data))
            }
        });
        
        var $ = layui.$, active = {
            getCheckData: function(){ //获取选中数据
                var checkStatus = table.checkStatus('idTest')
                    ,data = checkStatus.data;
                layer.alert(JSON.stringify(data));
            }
            ,getCheckLength: function(){ //获取选中数目
                var checkStatus = table.checkStatus('idTest')
                    ,data = checkStatus.data;
                layer.msg('选中了：'+ data.length + ' 个');
            }
            ,isAll: function(){ //验证是否全选
                var checkStatus = table.checkStatus('idTest');
                layer.msg(checkStatus.isAll ? '全选': '未全选')
            }
        };
        
        // $('.demoTable .layui-btn').on('click', function(){
        //     var type = $(this).data('type');
        //     active[type] ? active[type].call(this) : '';
        // });        
      });    
})
