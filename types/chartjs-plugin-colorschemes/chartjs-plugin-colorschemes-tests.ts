import * as Chart from 'chart.js';
import { ColorSchemesOptions } from 'chartjs-plugin-colorschemes';

// https://github.com/nagix/chartjs-plugin-colorschemes/blob/master/src/plugins/plugin.colorschemes.js#L12
const defaults: ColorSchemesOptions = {
    scheme: 'brewer.Paired12',
    fillAlpha: 0.5,
    reverse: false,
    override: false,
};

// Supports global defaults
Chart.defaults.global.plugins = {
    colorschemes: defaults,
};

const ctx = new CanvasRenderingContext2D();
const chartData = {};

// Supports chart options
// https://github.com/nagix/chartjs-plugin-colorschemes#usage
let chart = new Chart(ctx, {
    type: 'bar',
    data: chartData,
    options: {
        plugins: {
            colorschemes: defaults,
        },
    },
});

// Supports custom function
// https://github.com/nagix/chartjs-plugin-colorschemes#custom-function
const customColorFunction = (schemeColors: string[]) => {
    const myColors = ['#ff0000', '#00ff00', '#0000ff']; // define/generate own colors

    // extend the color scheme with own colors
    Array.prototype.push.apply(schemeColors, myColors);

    return schemeColors; // optional: this is not needed if the array is modified in place
};

chart = new Chart(ctx, {
    type: 'bar',
    data: chartData,
    options: {
        plugins: {
            colorschemes: {
                scheme: 'brewer.Paired12',
                custom: customColorFunction,
            },
        },
    },
});
