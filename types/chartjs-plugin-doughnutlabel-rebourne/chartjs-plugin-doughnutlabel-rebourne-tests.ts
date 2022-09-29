import { Chart } from 'chart.js';
import * as DoughnutLabel from 'chartjs-plugin-doughnutlabel-rebourne';

// Example taken from https://github.com/alexkuc/chartjs-plugin-doughnutlabel-rebourne/blob/master/samples/index.js
// And extended to use all the options
Chart.defaults.plugins.doughnutlabel = {
    paddingPercentage: 0.1,
    color: '#000',
    font: {
        family: 'Arial',
        lineHeight: 1.2,
        size: '12',
        style: 'normal',
        weight: 'normal',
    },
    display: true,
    api: 'afterBuildTicks',
};

const DEFAULT_COLORS1 = ['#f08700', '#f49f0a', '#efca08', '#00a6a6', '#bbdef0'];
const ctx = new CanvasRenderingContext2D();

const typedLabel: DoughnutLabel.Label = {
    // hide this label
    display: false,
    text: '95%',
    font: {
        family: 'Arial',
        lineHeight: '1.2',
        size: 12,
        style: 'normal',
        weight: 'normal',
    },
    color: 'green',
};
const chart = new Chart(ctx, {
    type: 'doughnut',
    plugins: [DoughnutLabel],
    data: {
        datasets: [
            {
                data: [4000, 3000, 2000, 1000],
                backgroundColor: DEFAULT_COLORS1,
                label: 'Dataset 1',
            },
        ],
        labels: ['Item one', 'Item two', 'Item three', 'Item four'],
    },
    options: {
        responsive: true,
        animation: {
            animateScale: true,
            animateRotate: true,
        },
        plugins: {
            legend: {
                display: false,
                position: 'top',
            },
            title: {
                display: true,
                font: {
                    size: 20,
                },
                text: 'Multiple lines of text',
            },
            doughnutlabel: {
                paddingPercentage: 0.1,
                color: '#000',
                font: {
                    family: 'Arial',
                    lineHeight: 1.2,
                    size: 42,
                    style: 'normal',
                    weight: 'normal',
                },
                display: true,
                api: 'beforeDatasetDraw',
                labels: [
                    {
                        text: 'The title',
                    },
                    {
                        text: () => 'The subtitle',
                        font: {
                            size: '50',
                            // @ts-expect-error
                            style: 'wrong-style',
                        },
                        color: 'grey',
                    },
                    {
                        text: 10001,
                        font: {
                            size: 30,
                        },
                        color: 'blue',
                    },
                    {
                        text: () => 10002,
                        font: {
                            size: 30,
                        },
                        color: 'red',
                    },
                    typedLabel,
                ],
            },
        },
    },
});
