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
          ,height:'full-140' // 差值，充满，并且距离底部的距离
          ,skin:'line'
          ,data:[{name:'赵老大',sex:'男',section:'2015',inTime:'2010-03-21',id:'1000',outTime:'2017-08-25'},
              {name:'赵小二',sex:'女',section:'2016',inTime:'2010-03-21',id:'1001',outTime:'2017-08-25'},
              {name:'赵三儿',sex:'男',section:'2017',inTime:'2010-03-21',id:'1002',outTime:'2017-08-25'},
              {name:'钱进',sex:'男',section:'2018',inTime:'2010-03-21',id:'1003',outTime:'2017-08-25'},
              {name:'周油',sex:'男',section:'2019',inTime:'2010-03-21',id:'1004',outTime:'2017-08-25'},
              {name:'吴凯',sex:'女',section:'2020',inTime:'2010-03-21',id:'1005',outTime:'2017-08-25'},
              {name:'张飞',sex:'女',section:'2021',inTime:'2010-03-21',id:'1006',outTime:'2017-08-25'},
              {name:'张懿德',sex:'女',section:'2022',inTime:'2010-03-21',id:'1007',outTime:'2017-08-25'},
              {name:'司马老儿',sex:'女',section:'2023',inTime:'2010-03-21',id:'1008',outTime:'2017-08-25'},
              {name:'孔明',sex:'女',section:'2015',inTime:'2010-03-21',id:'1009',outTime:'2017-08-25'},
              {name:'卧龙',sex:'女',section:'2021',inTime:'2010-03-21',id:'1006',outTime:'2017-08-25'},
              {name:'飞将军',sex:'女',section:'2022',inTime:'2010-03-21',id:'1007',outTime:'2017-08-25'},
              {name:'蒙毅',sex:'女',section:'2023',inTime:'2010-03-21',id:'1008',outTime:'2017-08-25'},
              {name:'伙头军',sex:'女',section:'2015',inTime:'2010-03-21',id:'1009',outTime:'2017-08-25'},
              {name:'齐天大圣',sex:'女',section:'2021',inTime:'2010-03-21',id:'1006',outTime:'2017-08-25'},
              {name:'方天画戟',sex:'女',section:'2022',inTime:'2010-03-21',id:'1007',outTime:'2017-08-25'},
              {name:'丈八蛇矛',sex:'女',section:'2023',inTime:'2010-03-21',id:'1008',outTime:'2017-08-25'},
              {name:'长枪依在',sex:'女',section:'2015',inTime:'2010-03-21',id:'1009',outTime:'2017-08-25'},
              {name:'大杀四方',sex:'女',section:'2021',inTime:'2010-03-21',id:'1006',outTime:'2017-08-25'},
              {name:'断头台',sex:'女',section:'2022',inTime:'2010-03-21',id:'1007',outTime:'2017-08-25'},
              {name:'天音波',sex:'女',section:'2023',inTime:'2010-03-21',id:'1008',outTime:'2017-08-25'},
              {name:'狂风绝息斩',sex:'女',section:'2015',inTime:'2010-03-21',id:'1009',outTime:'2017-08-25'}
          ]
          ,cols: [[
            {width:'6%', type:'checkbox'}
            ,{field:'id', width:'10%', title: 'ID'}
            ,{field:'name', width:'10%', title: '姓名',style:'color: #676767;'}
            ,{field:'sex', width:'10%', title: '性别'}
            ,{field:'section', width:'10%', title: '部门'}
            ,{field:'inTime', title: '入职时间', width: '20%'}
            ,{field:'outTime', width:'20%', title: '离职时间'}
            ,{field:'classify', width:'12.8%', title: '操作',templet:'#titleTpr'}
          ]]
          ,page: true
          ,limit: 10
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
                // console.log(data)
                layui.use(['layer', 'form'], function(){ //独立版的layer无需执行这一句
                    var $ = layui.jquery, layer = layui.layer, form = layui.form; //独立版的layer无需执行这一句
                    layer.open({
                            type: 2
                            ,title: ['查看信息'] //不显示标题栏
                            ,closeBtn: 1
                            ,area: ['400px', '500px']
                            ,shade: 0.4
                            ,id: 'LAY_layuipro7' //设定一个id，防止重复弹出
                            ,btn: ['确定']
                            ,btnAlign: 'c'
                            ,moveType: 1 //拖拽模式，0或者1
                            ,content:'../../../html/iframes/company/check-layer.html?'+encodeURI(JSON.stringify(data))
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
                // layer.alert('编辑行：<br>'+ JSON.stringify(data))
                layui.use(['form','layer','laydate'], function(){ //独立版的layer无需执行这一句
                    var $ = layui.jquery, form = layui.form, layer = layui.layer, laydate = layui.laydate; //独立版的layer无需执行这一句
                        laydate.render({
                            elem: '#maskCalendarIn'
                            ,lang: 'en'
                        })
                        laydate.render({
                            elem: '#maskCalendarOut'
                            ,lang: 'en'
                        })
                        layer.open({
                            type: 2 // type为1content是拼接字符串，为2是页面链接
                            ,title: ['编辑信息'] //不显示标题栏
                            ,closeBtn: 1
                            ,area: ['400px', '500px']
                            ,shade: 0.4
                            ,id: 'LAY_layuipro7' //设定一个id，防止重复弹出
                            ,btn: ['确定']
                            ,btnAlign: 'c'
                            ,moveType: 1 //拖拽模式，0或者1
                            ,content:'../../../html/iframes/company/check-layer.html?'+encodeURI(JSON.stringify(data))
                            // ,content:'<div class="check-panl" style="height:100%;margin:0 20px;"><ul class="person-detail"><li style="display:none;">ID:<span>'+data.id+'</span></li><li><div class="text-box" style="margin-top:10px;"><label class="layui-form-label" style="padding-left:0;text-align:left;line-height:13px;">姓名</label><div class="layui-input-block" style="margin-left:0;"><input type="text" name="title" lay-verify="title" autocomplete="off" placeholder="'+data.name+'" class="layui-input" style="width:160px;height:30px;"></div></div></li><li><div class="text-box" style="margin-top:10px;"><label class="layui-form-label" style="padding-left:0;text-align:left;line-height:13px;">性别</label><div class="layui-input-block" style="margin-left:0;"><input type="text" name="title" lay-verify="title" autocomplete="off" placeholder="'+data.sex+'" class="layui-input" style="width:160px;height:30px;"></div></div></li><li><div class="text-box" style="margin-top:10px;"><label class="layui-form-label" style="padding-left:0;text-align:left;line-height:13px;">部门</label><div class="layui-input-block" style="margin-left:0;"><input type="text" name="title" lay-verify="title" autocomplete="off" placeholder="'+data.section+'" class="layui-input" style="width:160px;height:30px;"></div></div></li><li><div class="text-box" style="margin-top:10px;"><label class="layui-form-label" style="padding-left:0;text-align:left;line-height:13px;">入职时间</label><div class="layui-input-block" style="margin-left:0;"><input type="text" name="title" lay-verify="title" autocomplete="off" placeholder="'+data.inTime+'" class="layui-input" id="maskCalendarIn" style="width:160px;height:30px;"></div></div></li><li><div class="text-box" style="margin-top:10px;"><label class="layui-form-label" style="padding-left:0;text-align:left;line-height:13px;">离职时间</label><div class="layui-input-block" style="margin-left:0;"><input type="text" name="title" lay-verify="title" autocomplete="off" placeholder="'+data.outTime+'" class="layui-input" id="maskCalendarOut" style="width:160px;height:30px;"></div></div></li></ul></div>'
                        });            
                })                
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
