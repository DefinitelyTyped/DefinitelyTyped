// import {line,bar,pie,radar,scatter,kline} from 'fundcharts'

import * as FundChart from 'fundcharts';
import {} from 'fundcharts/react';
import {} from 'fundcharts/vue';
// import './js/FundCharts-tooltips'
const _xaxis = ['07-11', '08-11', '09-11', '09-22', '10-11', '11-11', '12-11'];
const bardata = [[1, 2, 3, 4, 3.5, 3, 4]];
const testline = new FundChart.line({
    id: 'line',
    xaxis: ['09-11', '09-22', '10-11'],
    yaxisfunc(data) {
        return (data * 100).toFixed(2) + '%';
    },
    datas: [[1, 2, 3, 4]], // 或设置为data: [1, 2, 3, 4], 但v0.9.1起不推荐
    colors: ['#0000ff'],
    // hover(index, values, xaxis) {},
    // handleTextX: (ctx, xArr) => {
    //     // 处理x轴文字
    //     // 增加x轴刻度
    //     // let _chartWidth = testline._chart.width - testline.opts.chartLeft - testline.opts.chartRight;
    //     // ctx.textAlign = 'center';
    //     // ctx.textBaseline = 'middle';
    //     // ctx.font = '10px Arial';
    //     // ctx.fillStyle = '#333';
    //     // for (let i in xArr) {
    //     //   ctx.fillText(xArr[i].toString(), Number(i)*(_chartWidth / (xArr.length - 1) ) + testline.opts.chartLeft, testline._chart.height - 13);
    //     // }
    // },
});

const testbar = new FundChart.bar({
    id: 'bar',
    xaxis: ['09-11', '09-22', '10-11'],
    datas: [[1, 2, 3]], // 或设置为data: [1, 2, 3], 但v0.9.1起不推荐
    onFinish() {
        const drawer = testbar.drawer;
        const yaxis = drawer.yaxis;
        const _chart2 = new FundChart.line({
            // line chart
            id: 'kline1Canvas',
            xaxis: _xaxis,
            chartLeft: 55,
            chartRight: 40,
            chartTop: 10,
            noGradient: true,
            noAnimation: true,
            range: {
                min: yaxis.min,
                max: yaxis.max,
            },
            datas: bardata,
            colors: ['#71b7f9'],
        });

        _chart2.init(true);
        _chart2._chart = testbar._chart;
        _chart2.$el = testbar.$el;
        _chart2.canvas = testbar.canvas;
        _chart2.ctx = testbar.ctx;
        _chart2.drawer.setDataset();
        _chart2.drawer.drawLine();
        testbar._chart2 = _chart2;
    },
});

const testpie = new FundChart.pie({
    id: 'pie',
    datas: [0.1, 0.2, 0.3, 0.4],
    colors: ['#0000ff'],
});

const testradar = new FundChart.radar({
    id: 'radar',
    datas: [[1, 2, 3, 4, 3.5, 3]], // 或设置为data: [1, 2, 3, 4, 3.5, 3], 但v0.9.1起不推荐
});

const testscatter = new FundChart.scatter({
    id: 'scatter',
    datas: [
        // 或设置为data: [[1, 2], [3, 4], [3, 5.5], [3.5, 4.4], [5, 6], [7, 3]], 但v0.9.1起不推荐
        [
            [1, 2],
            [3, 4],
            [3, 5.5],
            [3.5, 4.4],
            [5, 6],
            [7, 3],
        ],
    ],
});

const testkline = new FundChart.kline({
    id: 'kline',
    xaxis: ['1-1', '1-2', '1-3', '1-4', '1-5', '1-6'],
    datas: [
        [1, 2, 0.5, 2.1],
        [3, 4, 2, 4],
        [3, 5.5, 3, 6],
        [4.4, 3.5, 3, 5],
        [5, 6, 4, 7],
        [7, 3, 3, 7],
    ],
});

testline.init();
testbar.init();
testpie.init();
testradar.init();
testscatter.init();
testkline.init();
