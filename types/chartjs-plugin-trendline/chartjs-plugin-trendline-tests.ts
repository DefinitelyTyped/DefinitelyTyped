import * as Chart from 'chart.js';
import { TrendlineLinearOptions } from 'chartjs-plugin-trendline';

const defaults: TrendlineLinearOptions = {
    style: 'rgba(255,105,180,0.8)',
    lineStyle: 'solid',
    width: 2,
    projection: true,
};

Chart.defaults.global.plugins = {
    trendlineLinear: defaults,
};

const ctx = new CanvasRenderingContext2D();

const chartData = {};

let chart = new Chart(ctx, {
    type: 'line',
    data: chartData,
    options: {
        plugins: {
            trendlineLinear: defaults,
        },
    },
});

chart = new Chart(ctx, {
    type: 'line',
    data: chartData,
    options: {
        plugins: {
            trendlineLinear: {
                style: 'rgba(255,255,255,0.1)',
                lineStyle: 'dotted',
                width: 4,
                projection: false,
            },
        },
    },
});
