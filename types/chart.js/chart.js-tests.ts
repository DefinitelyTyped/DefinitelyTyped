import { Chart, LinearChartData } from 'chart.js';

//alternative:
//import chartjs = require('chart.js');
// => chartjs.Chart

var chart = new Chart(new CanvasRenderingContext2D(), {
    type: 'bar',
    data: <LinearChartData> {
        labels: ['group 1'],
        datasets: [
            {
                label: 'test',
                data: [1]
            }
        ]
    },
    options: {
        scales: {
            xAxes: [{
                gridLines: { display: false }
            }]
        }
    }
});
chart.update();
