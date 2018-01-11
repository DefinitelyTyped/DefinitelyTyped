import { Chart, ChartData } from 'chart.js';

// alternative:
// import chartjs = require('chart.js');
// => chartjs.Chart

const chart: Chart = new Chart(new CanvasRenderingContext2D(), {
    type: 'bar',
    data: {
        labels: ['group 1'],
        datasets: [
            {
                backgroundColor: '#000000',
                borderWidth: 1,
                label: 'test',
                data: [1]
            }
        ]
    },
    options: {
        hover: {
            intersect: true
        },
        tooltips: {
            filter: data => Number(data.yLabel) > 0,
            intersect: true,
            itemSort: (a, b) => Math.random() - 0.5,
            position: "average",
            caretPadding: 2,
            displayColors: true,
            borderColor: "rgba(0,0,0,0)",
            borderWidth: 1,
        },
        scales: {
            xAxes: [{
                ticks: {
                    callback: Math.floor
                },
                gridLines: {
                    display: false,
                    borderDash: [5, 15],
                    borderDashOffset: 2,
                    zeroLineBorderDash: [5, 15],
                    zeroLineBorderDashOffset: 2
                }
            }]
        },
        plugins: { arbitraryPlugin: {option: "value"} }
    }
});
chart.update();

console.log(chart.ctx && chart.ctx.font);
console.log(chart.canvas && chart.canvas.tagName);
if (chart.chartArea) {
    console.log(chart.chartArea.top);
    console.log(chart.chartArea.right);
    console.log(chart.chartArea.bottom);
    console.log(chart.chartArea.left);
}
