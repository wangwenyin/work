$(document).ready(function() {

  var echart1 = echarts.init($('.echart1')[0]);
  var echart2 = echarts.init($('.echart2')[0]);

  var option1 = {
    title: {
      text: '功能区完成投资情况排名',
      textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#3b3b3b',
      },
      top: 20,
      left: 16
    },
    tooltip: {
      trigger: 'item'
    },
    grid: {
      left: '5%',
      right: '5%',
      bottom: '3%',
      top: '30%',
      containLabel: true
    },
    legend: {
      data: [
        {name: '已完成投资额', textStyle: {color: "#04c4ab"}},
        {name: '计划投资额', textStyle: {color: "#fbc11f"}}
      ],
      top: 52,
      right: 13,
      itemWidth: 8,
      itemHeight: 8,
      borderRadius: 0
    },
    color: ['#04c4ab', '#fbc11f'],
    xAxis: {
      type: 'value',
      data: [0, 100, 200, 300, 400],
      axisLabel: {
        textStyle: {
          color: '#d5e3ea'
        }
      },
      axisLine: {
        lineStyle: {
          color: '#d5e3ea',
          opacity: 0.5
        }
      },
      splitLine: {
        show: false
      }
    },
    yAxis: {
      type: 'category',
      data: ['开发区', '保税区', '生态城', '东疆保税区', '高新区'],
      axisTick: {
        show: false
      },
      axisLabel: {
        textStyle: {
          color: '#999'
        }
      },
      axisLine: {
        lineStyle: {
          color: '#d5e3ea',
          opacity: 0.5
        }
      }
    },
    series: [
      {
        name: '已完成投资额',
        data: [270, 330, 100, 60, 100],
        type: 'bar',
        barWidth: 12,
        barGap: 0
      },
      {
        name: '计划投资额',
        data: [290, 380, 350, 150, 200],
        type: 'bar',
        barWidth: 12,
        barGap: 0
      }
    ]
  };

  var option2 = {
    title: {
      text: '街镇完成投资--TOP5',
      textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#3b3b3b',
      },
      top: 20,
      left: 16
    },
    tooltip: {
      trigger: 'item'
    },
    grid: {
      left: '5%',
      right: '5%',
      bottom: '3%',
      top: '30%',
      containLabel: true
    },
    legend: {
      data: [
        {name: '已完成投资额', textStyle: {color: "#349cf8"}},
        {name: '计划投资额', textStyle: {color: "#fd9c62"}}
      ],
      top: 52,
      right: 13,
      itemWidth: 8,
      itemHeight: 8,
      borderRadius: 0
    },
    color: ['#349cf8', '#fd9c62'],
    xAxis: {
      type: 'value',
      data: [0, 100, 200, 300, 400],
      axisLabel: {
        textStyle: {
          color: '#d5e3ea'
        }
      },
      axisLine: {
        lineStyle: {
          color: '#d5e3ea',
          opacity: 0.5
        }
      },
      splitLine: {
        show: false
      }
    },
    yAxis: {
      type: 'category',
      data: ['太古街', '古林街', '大港街', '汉沽街', '塘沽街'],
      axisTick: {
        show: false
      },
      axisLabel: {
        textStyle: {
          color: '#999'
        }
      },
      axisLine: {
        lineStyle: {
          color: '#d5e3ea',
          opacity: 0.5
        }
      }
    },
    series: [
      {
        name: '已完成投资额',
        data: [200, 210, 180, 200, 270],
        type: 'bar',
        barWidth: 12,
        barGap: 0
      },
      {
        name: '计划投资额',
        data: [200, 350, 360, 350, 300],
        type: 'bar',
        barWidth: 12,
        barGap: 0
      }
    ]
  };
  echart1.setOption(option1);
  echart2.setOption(option2);
  
  // 下拉框
  $('select').searchableSelect();

  // 右侧轮播
  $('.banner').bxSlider({
    mode: 'vertical',
    auto: true,
    controls: false,
    pager: false,
    autoHover: true
  });

  getDate();
  function getDate() {
    var fmtDate = formatDate();
    $('.fmtDate').html(fmtDate);
    
    setInterval(function () {
      fmtDate = formatDate();
      $('.fmtDate').html(fmtDate)
    }, 1000*60);
    
    function formatDate() {
      var date = new Date();
      var Y = date.getFullYear() + '年';
      var M = date.getMonth() + 1 + '月';
      var D = date.getDate() + '日';
      var h = date.getHours() + ':';
      var m = date.getMinutes() < 10 ? '0' + date.getMinutes() + '分' : date.getMinutes() + '分';
      
      return Y+M+D+h+m
    }
  }

  // 层叠轮播图
	var cArr = ["p1","p2","p3", "p4", "p5"];
  var timer = null;

	// 自动轮播
  timer = setInterval(nextImg,3000);

  // 鼠标移出时开始定时器
	$(".carousel").mouseleave( function (){
		timer = setInterval(nextImg,3000);
  })
  
  //鼠标移入时清除定时器
	$(".carousel").mouseover( function (){
		clearInterval(timer);
	})
  
	$(".next").click(function(){
		nextImg();
  })
    
	$(".prev").click(function(){
    prevImg();
  })
  
	//上一张
	function prevImg(){
    // 向数组开头添加元素
    cArr.unshift(cArr[cArr.length - 1]); 
    // 删除数组最后一个元素 
    cArr.pop();  
    // each循环，当前处理的元素移除所有的class，然后添加数组索引i的class
		$(".list li").each(function(i,e){
			$(e).removeClass().addClass(cArr[i]);
		})
  }
  
	//下一张
	function nextImg(){
    // 向数组末尾添加元素
		cArr.push(cArr[0]);  
		cArr.shift();  
		$(".list li").each(function(i,e){
			$(e).removeClass().addClass(cArr[i]);
		})
  }

	//点击class为p2的元素触发上一张照片的函数
	$(document).on("click",".p2",function (){
		prevImg()
		return false;
  });

  //点击class为p3的元素触发下一张照片的函数
	$(document).on("click",".p4",function (){
		nextImg();
		return false;
  });
  // 阻止a标签默认行为
	$(document).on("click",".p3",function (){
		return false;
	});
})