/**
 * Created by Administrator on 2017/4/27.
 */


/**
 * h_ring()函数   离职识别分析，离职去向分析 的圆饼
 * obj.idname 表示使用这个图的ID  目前未用到，三个页面都只用默认的'leave-ring'ID
 * color 是根据数据的数量判断饼状图的颜色顺序 离职识别分析四种，判断data的长度，离职去向分析为五个城市，以此判断
 * obj.data 为整个圆饼图需要显示的数据
 */
function h_ring(obj) {   //这是圆圈形状的图标
    if (obj == undefined) {
        obj = {};
    }
    var chart = document.getElementById(obj.idname || 'leave-ring');
    var echart = echarts.init(chart);
    var color = new Array;
    if(obj.data.length == 5){
        color = ['#e66440', '#f2883b','#9aabd2', '#68738c', '#3c424f'];
    }else{
        color = ['#e66440', '#f2883b', '#68738c', '#3c424f'];
    }
    option = {
        tooltip: {
            trigger: 'item',
            position: function (pos, params, dom, rect, size) {
                // 鼠标在左侧时 tooltip 显示到右侧，鼠标在右侧时 tooltip 显示到左侧。
                var obj = {top: 60};
                obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 5;
                return obj;
            },
            formatter: "{a} <br/>{b} : {d}%"
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['20%', '55%'],
                center: ['50%', '50%'],
                color: color,
                label: {
                    normal: {
                        position: 'outside',
                        formatter: "{d}%",
                        textStyle: {
                            color: '#666',
                            // fontWeight: 'bold',
                            fontSize: 12
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        lineStyle:{
                            type : 'dotted'
                        },
                        length : 8,
                        length2 : 8

                    }
                },
                data: obj.data || [
                    {value: 335, name: '直接访问'},
                    {value: 310, name: '邮件营销'},
                    {value: 234, name: '联盟广告'},
                    {value: 135, name: '视频广告'}
                ]
            }
        ]
    };
    echart.setOption(option);
    // $(".base-chara").css("display","flex");
}
/*
* 工作效能象限图颜色
* */
function potency_ring(obj) {   //这是圆圈形状的图标
    if (obj == undefined) {
        obj = {};
    }
    var chart = document.getElementById(obj.idname || 'leave-ring');
    var echart = echarts.init(chart);
    var color = new Array;
    option = {
        tooltip: {
            trigger: 'item',
            position: function (pos, params, dom, rect, size) {
                // 鼠标在左侧时 tooltip 显示到右侧，鼠标在右侧时 tooltip 显示到左侧。
                var obj = {top: 60};
                obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 5;
                return obj;
            },
            formatter: "{a} <br/>{b} : {d}%"
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['20%', '55%'],
                center: ['50%', '50%'],
                color: ['#e66440', '#f2883b','#d7d7d7', '#68738c', '#3c424f'],
                label: {
                    normal: {
                        position: 'outside',
                        formatter: "{d}%",
                        textStyle: {
                            color: '#666',
                            // fontWeight: 'bold',
                            fontSize: 12
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        lineStyle:{
                            type : 'dotted'
                        },
                        length : 8,
                        length2 : 8

                    }
                },
                data: obj.data || [
                    {value: 335, name: '直接访问'},
                    {value: 310, name: '邮件营销'},
                    {value: 234, name: '联盟广告'},
                    {value: 135, name: '视频广告'}
                ]
            }
        ]
    };
    echart.setOption(option);
    // $(".base-chara").css("display","flex");
}

/*
用工规范三个页面使用的柱状图
* obj 为传递进来的数据的总对象
* obj.nameone 代表异常名称   obj.data 代表红色显示的 数值
* obj.idname 代表使用这个echarts图标的 div 的ID
* judeScreen() 根据屏幕判断总人数显示的位置
* */

function h_columar(obj) { //这是长方形柱状图
    if (obj == undefined) {
        obj = {};
    }
    var chart = document.getElementById(obj.idname || 'h-columnar');
    var echart = echarts.init(chart);
    var titleStyle = {
        color: '#666666',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontFamily: 'sans-serif',
        fontSize: 12,
    }
    option = {
        title: [
            {
                subtext: '单位 ：%',
                x: "left",
                y: "-18",
            },
            {
                text: "总人数",
                x: 'left',
                y: judeScreen(),
                textStyle: titleStyle
            }
        ],
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: [
            {x: '12%', y: '20%',width:'87%',height:"55%"},

        ],
        xAxis: [{
            type: 'category',
            "splitLine": {
                "show": false
            },
            "axisTick": {
                "show": false
            },
            "splitArea": {
                "show": false
            },
            data: obj.dataname || ['装维', '装维', '装维', '装维', '装维'],
            axisLabel: {
                formatter: function(value, index) {
                    //return value + "\n\n" + data.barData[1].data[index] + "人";
                    return value+"\n\n"+obj.totNum[index];
                },
                textStyle: {
                    fontFamily: "微软雅黑",
                    fontSize: 12,
                },
                interval: 0
            }



    }],
        yAxis: [{
            "type": "value",
            splitLine: {
                show: true
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitArea: {
                show: true
            }
        }],
        series: [{
            name: obj.nameone || "初始人数",
            type: 'bar',
            barWidth: 14,
            itemStyle: {
                normal: {
                    color: '#df5e39',
                    "barBorderRadius": 0,
                    "label": {
                        "show": false,

                    }
                }
            },
            z: 10,
            data: obj.data || [23, 25, 35, 40, 60],

        },
            {
                "type": "bar",
                "name" : "总人数",
                "itemStyle": {
                    "normal": {
                        "color": "#3c424f",
                        "barBorderRadius": 0,
                        "label": {
                            "show": obj.topshow || false,
                            "position": "top",

                        },

                    }
                },
                barWidth: 14,
                barGap: '-100%',
                "data": [100,100,100,100,100]
            }]
    };

    echart.setOption(option);
    // $(".base-chara").css("display","flex");
}

/*
 人员流动性分析前两个页面 有预警值的 柱状图
 * obj 为传递进来的数据的总对象
 * obj.nameone 代表异常名称   obj.data 代表红色显示的 数值
 * obj.idname 代表使用这个echarts图标的 div 的ID
 * judeScreen() 根据屏幕判断总人数显示的位置
 * obj.earlyLine[0] 代表预警值，传递进来的是一个数组，所以只取第一个值
 * */
function early_columar(obj) { //这是长方形柱状图
    if (obj == undefined) {
        obj = {};
    }
    var chart = document.getElementById(obj.idname || 'h-columnar');
    var echart = echarts.init(chart);
    var titleStyle = {
        color: '#666666',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontFamily: 'sans-serif',
        fontSize: 12,
    }
    option = {
        title: [
            {
                subtext: '单位 ：%',
                x: "left",
                y: "-18",
            },
            {
                text: "总人数",
                x: 'left',
                y: judeScreen(),
                textStyle: titleStyle
            }
        ],
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: [
            {x: '12%', y: '20%',width:'87%',height:"55%"},

        ],
        xAxis: [{
            type: 'category',
            "splitLine": {
                "show": false
            },
            "axisTick": {
                "show": false
            },
            "splitArea": {
                "show": false
            },

            data: obj.dataname || ['装维', '装维', '装维', '装维', '装维'],
            axisLabel: {
                formatter: function(value, index) {
                    //return value + "\n\n" + data.barData[1].data[index] + "人";
                    return value+"\n\n"+obj.totNum[index];
                },
                textStyle: {
                    fontFamily: "微软雅黑",
                    fontSize: 12,
                },
                interval: 0
            }
        }],
        yAxis: [{
            "type": "value",
            splitLine: {
                show: true
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitArea: {
                show: true
            }
        }],
        series: [{
            name: obj.nameone || "初始人数",
            type: 'bar',
            barWidth: 14,
            z: 10,
            itemStyle: {
                normal: {
                    color: '#df5e39',
                    "barBorderRadius": 0,
                    "label": {
                        "show": false,

                    }
                }
            },
            data: obj.data || [23, 25, 35, 40, 60],
            markLine: {
                silent: true,
                symbol: 'none',
                label: {
                    normal: {
                        show: false
                    }
                },
                lineStyle: {
                    normal: {
                        color: '#e66440',
                        type: 'dashed',
                        //width: 2
                    }
                },
                data: [{
                    yAxis: obj.earlyLine[0]
                }]
            }

        },
            {
                name : "总人数",
                "type": "bar",
                barWidth: 14,
                "itemStyle": {
                    "normal": {
                        "color": "#3c424f",
                    }
                },
                barGap: '-100%',
                "data": [100,100,100,100,100]

            }]
    };

    echart.setOption(option);
    // $(".base-chara").css("display","flex");
}
//
/*
 这是对比的柱状图
 * obj 为传递进来的数据的总对象
 * obj.nameone 代表异常名称   obj.data 代表红色显示的 数值
 * obj.nametwo 代表黑色柱子名称  obj.rightData 代表黑色柱子的数值
 * obj.idname 代表使用这个echarts图标的 div 的ID
 * */
function columnar(obj) {
    if (obj == undefined) {
        obj = {};
    }
    var chart = document.getElementById(obj.idname || 'h-columnar');
    var echart = echarts.init(chart);
    option = {
        title: {
            subtext: '单位 ：人数',
            x: "left",
            y: "-18",
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: obj.dataname || ['新虹桥', '中山公园', '虹桥', '镇宁路', '天山古北'],
            axisTick: {
                show: false
            },
            "axisLabel":{
                interval: 0
            },
        }],
        yAxis: [{
            type: 'value',
            axisLabel: {
                formatter: '{value}'
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitArea: {
                show: obj.splitArea || false
            }
        }],
        series: [{
            name: obj.nameone || '包租费',
            type: 'bar',
            barWidth: 13,
            itemStyle: {
                normal: {
                    color: "#e66440"
                }
            },
            // color : ["#e66440","#2a303e"],
            data: obj.leftData || [20, 12, 31, 34, 31]
        }, {
            name: obj.nametwo || '装修费',
            type: 'bar',
            barWidth: 13,
            itemStyle: {
                normal: {
                    color: "#2a303e"
                }
            },
            data: obj.rightData || [10, 20, 5, 9, 3]
        }]
    };
    echart.setOption(option);
    // $(".base-chara").css("display","flex");
}

/*
 * 这是离职识别分析柱状图
 * 传入两个data 显示数据为人数 不以百分比显示 以人数显示 1
 */
function leavecolumnar(obj) {
    if (obj == undefined) {
        obj = {};
    }
    var chart = document.getElementById(obj.idname || 'h-columnar');
    var echart = echarts.init(chart);
    option = {
        title: {
            subtext: '单位 ：人数',
            x: "left",
            y: "-18",
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: obj.dataname || ['新虹桥', '中山公园', '虹桥', '镇宁路', '天山古北'],
            axisTick: {
                show: false
            },
            "axisLabel":{
                interval: 0
            },
        }],
        yAxis: [{
            type: 'value',
            axisLabel: {
                formatter: '{value}'
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitArea: {
                show: obj.splitArea || false
            }
        }],
        series: [{
            name: obj.nameone || '可能要离职人数',
            type: 'bar',
            barWidth: 13,
            z: 10,
            itemStyle: {
                normal: {
                    color: "#e66440"
                }
            },
            // color : ["#e66440","#2a303e"],
            data: obj.leftData || [20, 12, 31, 34, 31]
        }, {
            name: obj.nametwo || '总人数',
            type: 'bar',
            barWidth: 13,
            barGap: '-100%',
            itemStyle: {
                normal: {
                    color: "#2a303e"
                }
            },
            data: obj.rightData || [10, 20, 5, 9, 3]
        }]
    };
    echart.setOption(option);
    // $(".base-chara").css("display","flex");
}

function h_region(data, obj, callback) {
    //进入页面加载时循环创建左侧点击二级分类

    for (var i = 0; i < data.length; i++) {
        $("." + obj.leftDrop).append("<p>" + data[i].region2 + "</p>");
    }
    var leftval = $("." + obj.leftDrop + " p").eq(0).html(); //代表左侧点击进入时的第一个值，也是左侧获取的值
    var rightval, //代表右侧获取的值
        leftvalindex = 0,
        rightindex;
    $("." + obj.leftDrop + " p").eq(0).addClass("leftdropstyle");
    if (data[0].region3.length == 0) {
        $("." + obj.rightDrop).append("<p>全部" + data[0].region2 + "</p>");
    } else if (data[0].region3.length == 1 && data[0].region3 != "全部") {
        $("." + obj.rightDrop).append("<p>全部" + data[0].region2 + "</p>");
    } else {
        //进入列表后循环创建第一个左侧选择的右侧详细列表
        for (var j = 0; j < data[0].region3.length; j++) {
            $("." + obj.rightDrop).append("<p>" + data[0].region3[j] + "</p>");
        }
    }

    $("." + obj.rightDrop + " p").eq(0).addClass("rightdropstyle");
    //点击左侧大区域选择的点击事件
    var lefHeight = $(".base-area-leftDrop").height();
    $("." + obj.leftDrop + " p").on("click", function () {
        var index = $(this).index();
        $("." + obj.rightDrop).html("");
        $("." + obj.leftDrop + " p").eq(index).addClass("leftdropstyle").siblings().removeClass("leftdropstyle");
        leftval = $("." + obj.leftDrop + " p").eq(index).html();

        // 判断右侧第一个岗位人员上面显示是否为全部人员，是就去掉全部，不是就加上全部
        if (data[index].region3.length == 0) {
            $("." + obj.rightDrop).append("<p>全部" + data[index].region2 + "</p>");
        } else if (data[index].region3.length == 1 && data[index].region3 != "全部") {
            $("." + obj.rightDrop).append("<p>全部" + data[index].region2 + "</p>");
        } else {
            //点击时创建相对应点击左侧的详细列表
            for (var j = 0; j < data[index].region3.length; j++) {
                $("." + obj.rightDrop).append("<p>" + data[index].region3[j] + "</p>");
            }
        }
        // $(".base-area-leftDrop").height("auto");
        //判断左侧是否点击过，若点击过就将 样式：rightdropstyle 附上 若不是则将左侧默认的第一个值设置为空
        if (leftvalindex == index) {
            $("." + obj.rightDrop + " p").eq(rightindex).addClass("rightdropstyle");
        } else {
            rightval = "";
        }
        leftvalindex = index;
        $("." + obj.rightDrop + " p").eq(0).addClass("rightdropstyle");

        //这是根据右侧数据多少来判断左侧高度
        if ($(".base-area-leftDrop").height() <= $(".base-area-rightDrop").height()) {
            $(".base-area-leftDrop").height($(".base-area-rightDrop").height());
        }else{
            $(".base-area-leftDrop").height("auto");
        }
    });
    setItem("getArea", leftval);
    //这是点击右侧详细列表时的所获取的值，点击时需要响应的发送请求，回调函数 obj.rightDrop 代表右侧大盒子的类名
    $(".base-area-rightDrop").on("click", "p", function () {
        var index = $(this).index();
        $("." + obj.rightDrop + " p").eq(index).addClass("rightdropstyle").siblings().removeClass("rightdropstyle");
        // rightindex = index;
        rightval = $("." + obj.rightDrop + " p").eq(index).html();
        if(rightval == "全部"){
            if(leftval == "全部"){
                $("#region").html(data[0].region1);
            }else {
                $("#region").html(leftval);

            }
        }else{
            $("#region").html(rightval);
        }
        //在此可定义回调函数 并返回获取点击的值
        $("#droplDown").stop().slideUp();
        $("." + obj.developDrop + " .icon-xiala").removeClass("icon-shangla");
        $(".base-header").removeClass("backgroundOne");
        $(".base-area-closedrop").fadeOut();

        //这个是储存区域的具体详细信息的缓存
        setItem("getArea", leftval);
        setItem("getArea1", rightval);
        callback(leftval, rightval, getItem("getPost"), getItem("getDate"));

    });

    $("#daysDate").on("click", function () {
        $(this).addClass("leftdropstyle").siblings().removeClass("leftdropstyle");
        // changeMonths(true);
    });
    $("#monthDate").on("click", function () {
        $(this).addClass("leftdropstyle").siblings().removeClass("leftdropstyle");
        // changeMonths(false);
    });

    //这是点击下面遮罩层区域让选择消失，表示取消选择
    $(".base-area-closedrop").on("touchend", function () {  //这是点击选择区域消失
        $("#droplDown").stop().slideUp();
        $("." + obj.developDrop + " .icon-xiala").removeClass("icon-shangla");
        $(".base-header").removeClass("backgroundOne");
        $(this).css("display", "none");
    });

    $(".base-closedrop").on("touchend", function () { //这是点击各种人员消失
        $("#personnelDown").stop().slideUp();
        $("." + obj.developDrop + " .icon-xiala").removeClass("icon-shangla");
        $(".base-header").removeClass("backgroundTwo");
        $(this).css("display", "none");
    });

    $(".data-closedrop").on("touchend", function () { //这是点击选择时间消失
        $("#dateDropDown").stop().slideUp();
        $("." + obj.developDrop + " .icon-xiala").removeClass("icon-shangla");
        $(".base-header").removeClass("backgroundThree");
        $(this).css("display", "none");

    })

}

//这是点击加载人员下拉的函数
function createPersonnel(data, obj, callback) {
    var leftvalPost;
    //进入页面加载时循环创建左侧点击二级分类 obj.leftDrop代表左边下拉盒子类名  data是传递进来渲染的数据
    for (var i = 0; i < data.length; i++) {
        $("." + obj.leftDrop).append("<p>" + data[i] + "</p>");
    }
    leftvalPost = $("." + obj.leftDrop + " p").eq(0).html();
    $("." + obj.leftDrop + " p").eq(0).addClass("leftdropstyle");
    setItem("getPost", leftvalPost);
    //点击左侧大区域选择的点击事件  这是在岗人员的点击事件
    $(".base-leftDrop p").on("touchend", function () {
        var index = $(this).index();
        leftvalPost = $("." + obj.leftDrop + " p").eq(index).html();
        $("#" + obj.overallId).stop().fadeToggle();
        $(".base-header").removeClass("backgroundTwo");
        $("." + obj.developDrop + " .icon-xiala").removeClass("icon-shangla");
        $("." + obj.leftDrop + " p").eq(index).addClass("leftdropstyle").siblings().removeClass("leftdropstyle");
        $(".base-closedrop").fadeOut();
        $("#post").html(leftvalPost);
        setItem("getPost", leftvalPost);
        callback(getItem("getArea"), getItem("getArea1"), getItem("getPost"), getItem("getDate"));

    });

    //这是点击下面遮罩层区域让选择消失，表示取消选择 obj.developDrop代表下拉父元素的类名
    $(".base-area-closedrop").on("touchend", function () {  //这是点击选择区域消失
        $("#droplDown").stop().slideUp();
        $("." + obj.developDrop + " .icon-xiala").removeClass("icon-shangla");
        $(".base-header").removeClass("backgroundOne");
        $(".base-area-closedrop").fadeOut();
    });

    $(".base-closedrop").on("touchend", function () { //这是点击各种人员消失
        $("#personnelDown").stop().slideUp();
        $("." + obj.developDrop + " .icon-xiala").removeClass("icon-shangla");
        $(".base-header").removeClass("backgroundTwo");
        $(".base-closedrop").fadeOut();
    });

    $(".data-closedrop").on("touchend", function () { //这是点击选择时间消失
        $("#dateDropDown").stop().slideUp();
        $("." + obj.developDrop + " .icon-xiala").removeClass("icon-shangla");
        $(".base-header").removeClass("backgroundThree");
        $(".data-closedrop").fadeOut();

    })
}


//这是点击顶部三个区块的点击事件  让相对应的三个区域
$(".base-header div").on("click", function () {

    var index = $(this).index();
    var i = $(".base-header .icon-xiala").index();

    //判断点击区块的索引让相对应的选择区显示
    if (index == 0) {  //显示的是 省市级 的区域条件查询
        // console.log($("#droplDown").css("display"));
        $(".base-area-closedrop").stop().fadeToggle();
        $("#droplDown").slideToggle().parent().siblings().children().css("display", "none");
        $(".base-header").toggleClass("backgroundOne");
        $(".base-header").removeClass("backgroundTwo");
        $(".base-header").removeClass("backgroundThree");
        // $(".base-header").css("border-bottom","none");
        $(".base-lhead span").toggleClass("icon-shangla").parent().siblings().children().removeClass("icon-shangla");


    } else if (index == 1) { //显示的是岗位人员的条件查询

        $(".base-closedrop").stop().fadeToggle();
        $("#personnelDown").slideToggle().parent().siblings().children().css("display", "none");
        $(".base-header").toggleClass("backgroundTwo");
        $(".base-header").removeClass("backgroundOne");
        $(".base-header").removeClass("backgroundThree");
        // $(".base-header").css("border-bottom","none");
        $(".base-chead span").toggleClass("icon-shangla").parent().siblings().children().removeClass("icon-shangla");
        // console.log(index);
    } else if (index == 2) {  //点击显示时间控件
        $(".data-closedrop").stop().fadeToggle();
        $("#dateDropDown").slideToggle().parent().siblings().children().css("display", "none");
        $(".base-header").toggleClass("backgroundThree");
        $(".base-header").removeClass("backgroundTwo");
        $(".base-header").removeClass("backgroundOne");
        // $("#daysDate").addClass("leftdropstyle").siblings().removeClass("leftdropstyle");
        $(".base-rhead span").toggleClass("icon-shangla").parent().siblings().children().removeClass("icon-shangla");
    }


});


//这是点击让时间选择框消失的函数
$(".data-closedrop").on("click", function () {
    $(".base-rhead .icon-xiala").removeClass("icon-shangla");
    $(".base-header").css("border-bottom", "1px solid #D7D7D7");
    $(".base-header").css("background-image", "");
    $("#dateDropDown").stop().slideUp();
    $("#personnelDown").stop().slideUp();
    $(this).fadeOut();

})


function h_scale(obj) { //这是页面展示时进度条的显示 三级页面使用
    //使用 jquery 的 animate为相对应的进度条赋值
    
    $("#" + obj.idname + " ." + obj.leftname).animate({"width": obj.lchar + "%"}, 400);
    $("#" + obj.idname + " ." + obj.centername).animate({"width": obj.zchar + "%"}, 400);

    //第一个使用 定时器为其按时加载其中时间
    $("#"+ obj.numId1).html("("+obj.lchar + "%"+")");
    $("#"+ obj.numId2).html("("+obj.zchar + "%"+")");
    $("#"+ obj.numId3).html("("+obj.rchar + "%"+")");

    // //第三个因其不确定，判断是否传递第三个的数值 若没有第三个，则不执行
    if (obj.rchar != undefined) {
        $("#" + obj.idname + " ." + obj.rightname).animate({"width": obj.rchar + "%"}, 400);
    }


}

//这是二级页面要用的进度条的函数
function stage_scale(obj) {
    //使用 jquery 的 animate为相对应的进度条赋值
    $("#" + obj.idname + " ." + obj.leftname).animate({"width": obj.lchar + "%"}, 400);
    $("#" + obj.idname + " ." + obj.centername).animate({"width": obj.zchar + "%"}, 400);

}

//这是没有赋值的进度条，二级页面使用
function h_scale1(obj) { //这是页面展示时进度条的显示
    $("#" + obj.idname + " ." + obj.leftname).animate({"width": obj.lchar + "%"}, 400);
    $("#" + obj.idname + " ." + obj.centername).animate({"width": obj.zchar + "%"}, 400);

}

//这是工作效能图的进度条百分比函数
function jonPotency(obj) {

    $(".potency-rate1 #num-span1").html("("+obj.num1 + "%)");
    $(".potency-rate2 #num-span2").html("("+obj.num2 + "%)");
    $(".potency-rate3 #num-span3").html("("+obj.num3 + "%)");
    $(".potency-rate4 #num-span4").html("("+obj.num4 + "%)");
    $(".potency-rate5 #num-span5").html("("+obj.num5 + "%)");

}

//这是404报错页面的js
function dataError(text) {
    text = text || '检查网络 重新起航';
    var arrhtml = '<div class="base-dataFree">' +
        ' <div class="base-dataImage"></div> ' +
        '<div class="base-dataTitle">网络的小船，说翻就翻!</div> ' +
        '<div class="base-dataTitles">' + text + '</div>' +
        ' <button class="base-btnRefresh">刷新</button> ' +
        '</div>';
    $("body").append(arrhtml);
    $(".base-btnRefresh").on("touchend", function () {
        $(".base-dataFree").css("display", "none");
        window.location.reload();
    })
}


//这是在岗时长的函数
function postDuaration() {
    $(".post-timeShow span").eq(1).addClass("post-timeclick");
    var txt;
    $(".post-posttime").on("touchend", function () {
        $(".post-timeShow").stop().fadeToggle();
        $(".post-closetime").stop().fadeToggle();
        $(".post-posttime .icon-xiala").toggleClass("icon-shangla");

    })
    $(".post-closetime").on("touchend", function () {
        $(".post-timeShow").stop().fadeToggle();
        $(".post-closetime").stop().fadeToggle();
        $(".post-posttime .icon-xiala").toggleClass("icon-shangla");
    })
    $(".post-timeShow").on("touchend", "span", function () {
        $(this).addClass("post-timeclick").siblings().removeClass("post-timeclick");
        var index = $(this).index();
        txt = $(this).html();
        $(".post-timeShow").stop().fadeToggle();
        $(".post-closetime").stop().fadeToggle();
        $(".post-posttime .icon-xiala").toggleClass("icon-shangla");
        $("#post_abnormal_ranking").html(txt);
        var sendText = $.trim(txt);
        if(sendText == "0 小时"){
            sendText = "0小时";
        }
        postAbnormalRanking(sendText);
    })
}


//这是对比的柱状图（三根柱子）
function columnar_three(obj) {
    if (obj == undefined) {
        obj = {};
    }
    var chart = document.getElementById(obj.idname || 'h-columnar');
    var echart = echarts.init(chart);
    option = {
        title: {
            subtext: obj.title || '单位 ：人数',
            x: "left",
            y: "-18",
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: obj.dataname,
            axisTick: {
                show: false
            },
            "axisLabel":{
                interval: 0
            },
        }],
        yAxis: [{
            type: 'value',
            axisLabel: {
                formatter: '{value}'
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitArea: {
                show: obj.splitArea || false
            }
        }],
        series: [{
            name: obj.nameone,
            type: 'bar',
            barWidth: 13,
            itemStyle : {
                normal :{
                    color : "#e66440"
                }
            },
            data: obj.leftData
        }, {
            name: obj.nametwo,
            type: 'bar',
            barWidth: 13,
            itemStyle : {
                normal :{
                    color : "#f2883b"
                }
            },
            data: obj.rightData
        }, {
            name: obj.namethree,
            type: 'bar',
            barWidth: 13,
            itemStyle : {
                normal :{
                    color : "#3c424f"
                }
            },
            data: obj.threeData
        }]
    };
    echart.setOption(option);
}


//这是对比的柱状图(五根柱子)
function columnar_five(obj) {
    if (obj == undefined) {
        obj = {};
    }
    var chart = document.getElementById(obj.idname || 'h-columnar');
    var echart = echarts.init(chart);
    option = {
        title: {
            subtext: obj.title || '单位 ：人数',
            x: "left",
            y: "-18",
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: obj.dataname,
            axisTick: {
                show: false
            },
            "axisLabel":{
                interval: 0
            },
        }],
        yAxis: [{
            type: 'value',
            axisLabel: {
                formatter: '{value}'
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitArea: {
                show: obj.splitArea || false
            }
        }],
        series: [{
            name: "高效",
            type: 'bar',
            barWidth: 7,
            itemStyle: {
                normal: {
                    color: "#e66440"
                }
            },
            data: obj.leftData
        }, {
            name: "勤奋",
            type: 'bar',
            barWidth: 7,
            itemStyle: {
                normal: {
                    color: "#f2883b"
                }
            },
            data: obj.rightData
        }, {
            name: "普通",
            type: 'bar',
            barWidth: 7,
            itemStyle: {
                normal: {
                    color: "#d7d7d7"
                }
            },
            data: obj.threeData
        }, {
            name: "低效",
            type: 'bar',
            barWidth: 7,
            itemStyle: {
                normal: {
                    color: "#68738c"
                }
            },
            data: obj.fourData
        }, {
            name: "慵懒",
            type: 'bar',
            barWidth: 7,
            itemStyle: {
                normal: {
                    color: "#3c424f"
                }
            },
            data: obj.fiveData
        }]
    };
    echart.setOption(option);
}

//这是对比的柱状图对比
function columnar_two(obj) {
    if (obj == undefined) {
        obj = {};
    }
    var chart = document.getElementById(obj.idname || 'h-columnar');
    var echart = echarts.init(chart);
    option = {
        title: {
            subtext: '单位 ：人数',
            x: "left",
            y: "-18",
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: obj.dataname || ['新虹桥', '中山公园', '虹桥', '镇宁路', '天山古北'],
            axisTick: {
                show: false
            },
            "axisLabel":{
                interval: 0
            },
        }],
        yAxis: [{
            type: 'value',
            axisLabel: {
                formatter: '{value}'
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitArea: {
                show: obj.splitArea || false
            }
        }],
        series: [{
            name: obj.nameone || '包租费',
            type: 'bar',
            barWidth: 13,
            itemStyle: {
                normal: {
                    color: "#e66440"
                }
            },
            // color : ["#e66440","#2a303e"],
            data: obj.leftData || [20, 12, 31, 34, 31]
        }, {
            name: obj.nametwo || '装修费',
            type: 'bar',
            barWidth: 13,
            itemStyle: {
                normal: {
                    color: "#2a303e"
                }
            },
            data: obj.rightData || [10, 20, 5, 9, 3]
        }]
    };
    echart.setOption(option);
}

//这是当数据为403时调用的函数
function addPoint(id,id2) {
    $("#"+id).children().css("display","none");
    var point = '<div class="base-moreData" id="'+id2+'">未获取到数据</div>';
    $("#"+id2).css("display","block");
    $("#"+id).append(point);
    // alert(id2 + "403添加");
}
function removePoint(id,id2) {
    $("#"+id2).remove();
    $("#"+id2).css("display","none");
    // alert(id2 + "403移除");
    $("#"+id).children().css("display","block");
    // $(".base-chara").css("display","flex");
    // $(".map-chara").css("display","flex");
}


//存储localStorage判断安卓还是ios使用的方法
function setItem(key, value) {

    if (checkAndroid()) {
        window.getDataFromNative.setItem(key, value);
    } else {
        localStorage.setItem(key, value);
    }

}

function getItem(key) {

    if (checkAndroid()) {
        return window.getDataFromNative.getItem(key);
    } else {
        return localStorage.getItem(key);
    }

}

function clear(key) {

    if (checkAndroid()) {
        window.getDataFromNative.clear(key);
    } else {
        localStorage.clear(key);
    }

}
function removeItem(key) {

    if (checkAndroid()) {
        window.getDataFromNative.removeItem(key);
    } else {
        localStorage.removeItem(key);
    }

}

//判断移动端屏幕大小的函数
function judeScreen() {
    if(document.documentElement.clientWidth >= 414){
        return '85.6%'
    }else if(document.documentElement.clientWidth >= 360){
        return '86.3%'
    }else if(document.documentElement.clientWidth >= 320){
        return '87.5%'
    }
}


//对比页面添加无数据
function addDataFree() {
    $(".base-moreData-contrast").css("display","block");
    $(".columar-area-point").css("display","none");
}
//对比页面去掉无数据
function removeDataFree() {
    $(".columar-area-point").css("display","block");
    $(".base-moreData-contrast").css("display","none");
}