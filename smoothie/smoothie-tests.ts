/// <reference path="smoothie.d.ts" />

// Smoothie supports browserify
import Smoothie = require('smoothie');

var canvas: HTMLCanvasElement = document.createElement('canvas');

document.body.appendChild(canvas);

var series: Smoothie.TimeSeries   = new Smoothie.TimeSeries(),
	chart: Smoothie.SmoothieChart = new Smoothie.SmoothieChart({
    grid : {
        strokeStyle : '#404040'
    },
    maxValue :    1,
    minValue :    0
});

chart.addTimeSeries(series, {
    strokeStyle : '#FFFFFF',
    fillStyle   : 'rgba(64, 64, 64, 0.25)',
    lineWidth   : 2
});

var DELAY: number = 500;

chart.streamTo(canvas, DELAY);
chart.addTimeSeries(series);

setInterval(() =>
	series.append(Date.now(), Math.random()),
	DELAY);
