// 谣言浏览量top5
const maxData = 1800000;

function renderChart5() {
  const dom = document.getElementById("chart5");
  const chart = echarts.init(dom);
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
        snap: false,
      },
      formatter: function(data) {
        const dataIndex = data[0].dataIndex;
        return [Data_RumourTop20[dataIndex][1], '<br>浏览量 : ', Data_RumourTop20[dataIndex][2], '评论量 : ', Data_RumourTop20[dataIndex][3]].join('')
      },
      textStyle: {
        fontFamily: 'gbk',
      }
    },
    legend: {
      data: ['view', 'comment'],
      show: false,
    },
    grid: {
      containLabel: true,
      left: 10,
      top: '0',
      bottom: '0',
      right: 80,
    },
    xAxis: [{
      splitLine: {show: false},
      axisLabel: {show: false},
      axisTick: {show: false},
      axisLine: {show: false},
    }, {
      splitLine: {show: false},
      axisLabel: {show: false},
      axisTick: {show: false},
      axisLine: {show: false},
      min: 0,
      max: 5000,
    }],
    yAxis: [{
      data: Data_RumourTop20.slice(0, 5).map(function() { return '' }),
      inverse: true,
      axisLine: {show: false},
      axisTick: {show: false},
      axisLabel: {
        show: false,
      },
      axisPointer: {
        label: {
          show: false,
        }
      }
    }],
    series: [{
      name: 'view',
      type: 'pictorialBar',
      symbol: Data_Pic,
      symbolRepeat: true,
      symbolMargin: '8%',
      symbolSize: 20,
      data: Data_RumourTop20.slice(0, 5).map(function(data) { return Number(data[2]) }),
      label: {
        normal: {
          show: true,
          position: 'right',
          offset: [10, 0],
          textStyle: {
            fontSize: 14,
            fontFamily: 'gbk',
            color: 'RGB(65, 88, 119)',
          }
        }
      }
    }, {
      name: 'comment',
      type: 'pictorialBar',
      symbol: Data_Comment_Pic,
      symbolRepeat: true,
      symbolMargin: '8%',
      symbolSize: 20,
      barGap: '10%',
      data: Data_RumourTop20.slice(0, 5).map(function (data) { return Number(data[3]); }),
      xAxisIndex: 1,
      label: {
        normal: {
          show: true,
          position: 'right',
          offset: [10, 0],
          textStyle: {
            fontSize: 14,
            fontFamily: 'gbk',
            color: 'RGB(65, 88, 119)',
          }
        }
      }
    }]
  };
  chart.setOption(option, true);
}
