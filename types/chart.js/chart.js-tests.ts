import { BorderWidth, Chart, Point, ChartColor } from 'chart.js';
import moment = require('moment');

// alternative:
// import chartjs = require('chart.js');
// => chartjs.Chart

const plugin = {
    afterDraw: (chartInstance: Chart, easing: Chart.Easing, options?: any) => { },
};

const ctx = new CanvasRenderingContext2D();

const chart: Chart = new Chart(ctx, {
    type: 'bar',
    plugins: [plugin, plugin],
    data: {
        labels: ['group 1', 'group 2'],
        datasets: [
            {
                backgroundColor: '#000000',
                hoverBackgroundColor: ctx.createLinearGradient(0, 0, 0, 100),
                hoverBorderColor: ctx.createLinearGradient(0, 0, 0, 100),
                borderWidth: 1,
                label: 'test',
                data: [1, null, 3],
            },
            {
                backgroundColor: '#ff0000',
                borderWidth: { top: 1, right: 1, bottom: 0, left: 1 },
                label: 'test',
                data: [1, 3, 5],
                barThickness: 'flex',
                minBarLength: 2,
            }
        ],
    },
    options: {
        hover: {
            axis: 'xy',
            mode: 'nearest',
            animationDuration: 400,
            intersect: true,
        },
        onHover(ev: MouseEvent, points: any[]) {
            return;
        },
        title: {
            text: ['foo', 'bar'],
        },
        tooltips: {
            filter: data => Number(data.yLabel) > 0,
            intersect: true,
            mode: 'index',
            axis: 'x',
            itemSort: (a, b, data) => Math.random() - 0.5,
            position: 'average',
            caretPadding: 2,
            displayColors: true,
            borderColor: 'rgba(0,0,0,0)',
            borderWidth: 1,
            titleAlign: 'center',
            callbacks: {
                title: ([point]) => (point.label ? point.label.substring(0, 2) : 'title'),
                label(tooltipItem) {
                    const { value, x, y, label } = tooltipItem;
                    return `${label}(${x}, ${y}) = ${value}`;
                },
            },
        },
        scales: {
            xAxes: [
                {
                    ticks: {
                        callback: (value) => {
                            if (value === 10) {
                                return Math.floor(value);
                            }

                            if (value === 20) {
                                return `${value}`;
                            }

                            if (value === 30) {
                                return undefined;
                            }

                            return null;
                        },
                        sampleSize: 10,
                    },
                    gridLines: {
                        display: false,
                        borderDash: [5, 15],
                        borderDashOffset: 2,
                        zeroLineBorderDash: [5, 15],
                        zeroLineBorderDashOffset: 2,
                        lineWidth: [1, 2, 3],
                    },
                },
            ],
        },
        elements: {
            rectangle: {
                backgroundColor(ctx) {
                    if (ctx.dataset && typeof ctx.dataset.backgroundColor === "function") {
                        return ctx.dataset.backgroundColor(ctx);
                    }

                    if (ctx.dataset && Array.isArray(ctx.dataset.backgroundColor)) {
                        return ctx.dataset.backgroundColor[0] || "red";
                    }

                    if (!ctx.dataset) {
                        return "red";
                    }

                    return (ctx.dataset.backgroundColor as ChartColor | string) || "red";
                }
            }
        },
        legend: {
            align: 'center',
            display: true,
            labels: {
                usePointStyle: true,
                padding: 40,
            },
        },
        devicePixelRatio: 2,
        plugins: {
            bar: false,
            foo: {},
        },
    },
});
chart.update({ duration: 500, lazy: false, easing: 'linear' });

console.log(chart.getDatasetMeta(0));

console.log(chart.ctx && chart.ctx.font);
console.log(chart.canvas && chart.canvas.tagName);
if (chart.chartArea) {
    console.log(chart.chartArea.top);
    console.log(chart.chartArea.right);
    console.log(chart.chartArea.bottom);
    console.log(chart.chartArea.left);
}

// Testing dataset visibility
chart.isDatasetVisible(0); // $ExpectType boolean
chart.setDatasetVisibility(0, false); // $ExpectType void
chart.isDatasetVisible(0); // $ExpectType boolean
chart.getVisibleDatasetCount(); // $ExpectType number

// Testing custom legends
chart.config.options = {
    ...chart.config.options,
    legend: {
        display: false,
    },
    legendCallback: () => 'legend replacement',
};
chart.update();
const customLegend = chart.generateLegend();
console.log(customLegend === 'legend replacement');

// Testing radial chart
const tickOptions: Chart.LinearTickOptions = {
    max: 100,
    stepSize: 33,
    display: false,
    beginAtZero: true,
};
const scaleOptions: Chart.RadialLinearScale = {
    animate: false,
    position: 'chartArea',
    angleLines: {
        display: true,
        color: 'rgba(0, 0, 0, 0.1)',
        lineWidth: 1,
        borderDash: [],
        borderDashOffset: 0.0
    },
    pointLabels: {
        callback: () => 'pointLabels callback',
        fontColor: '#666',
        fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        fontSize: 10,
        fontStyle: 'normal',
        lineHeight: 1.2
    },
    ticks: tickOptions,
    display: false,
    gridLines: {
        display: true,
        circular: false,
        color: 'rgba(0, 0, 0, 0.1)',
        borderDash: [],
        borderDashOffset: 0.0,
        lineWidth: 1,
        drawBorder: true,
        drawOnChartArea: true,
        drawTicks: true,
        tickMarkLength: 10,
        zeroLineWidth: 1,
        zeroLineColor: 'rgba(0, 0, 0, 0.25)',
        zeroLineBorderDash: [],
        zeroLineBorderDashOffset: 0.0,
        offsetGridLines: false,
        z: 9
    }
};
const radarChartOptions: Chart.RadialChartOptions = {
    legend: { display: false },
    scale: scaleOptions,
    responsive: true,
};
const chartConfig: Chart.ChartConfiguration = {
    type: 'radar',
    data: {
        labels: ['#apples', '#pears', '#apricots', '#acorns', '#amigas', '#orics'],
        datasets: [
            {
                label: 'test',
                lineTension: 0.15,
                data: [1, 1, 2, 3, 5],
                backgroundColor: '#37738353',
                borderColor: '#37738353',
                borderWidth: 3,
                borderCapStyle: 'round',
                fill: true,
            },
        ],
    },
    options: {
        ...radarChartOptions,
        elements: {
            line: {
                borderDash: [1, 2, 3, 4]
            }
        }
    },
};
const radialChart: Chart = new Chart(new CanvasRenderingContext2D(), chartConfig);
radialChart.update();

console.log(radialChart.ctx && radialChart.ctx.font);
console.log(radialChart.canvas && radialChart.canvas.tagName);
if (radialChart.chartArea) {
    console.log(radialChart.chartArea.top);
    console.log(radialChart.chartArea.right);
    console.log(radialChart.chartArea.bottom);
    console.log(radialChart.chartArea.left);
}

// http://www.chartjs.org/docs/latest/configuration/tooltip.html#position-modes
Chart.Tooltip.positioners.custom = (elements: any[], eventPosition: Point) => {
    return {
        x: eventPosition.x,
        y: eventPosition.y + 10,
    };
};

if (radialChart.width !== null && radialChart.height !== null) {
    console.log('area', radialChart.width * radialChart.height);
}
if (radialChart.aspectRatio !== null) {
    console.log(radialChart.aspectRatio * 2);
}
console.log(radialChart.options === radialChart.config.options);

const chartWithScriptedOptions = new Chart(new CanvasRenderingContext2D(), {
    type: "bar",
    data: {
        labels: ["a", "b", "c", "d", "e"],
        datasets: [{
            label: "test",
            data: [1, 3, 5, 4, 2],
            backgroundColor: ({ dataset, dataIndex }): ChartColor => {
                if (dataset === undefined || dataset.data === undefined || dataIndex === undefined) {
                    return "black";
                }
                const value = dataset.data[dataIndex];
                if (typeof value !== "number") {
                    return "black";
                }
                return value > 3 ? "red" : "green";
            },
            borderWidth: ({ dataset, dataIndex }): BorderWidth => {
                if (dataset === undefined || dataset.data === undefined || dataIndex === undefined) {
                    return 1;
                }
                return { top: 1, right: 1, bottom: 0, left: 1 };
            }
        }],
    }
});

// linear scale
const linearScaleChart: Chart = new Chart(ctx, {
    type: 'bar',
    data: {
        datasets: [{
            backgroundColor: '#000',
            borderColor: '#f00',
            data: [],
            type: 'line',
        }]
    },
    options: {
        scales: {
            displayFormats: {
                month: 'MMM YYYY',
            },
            xAxes: [{
                type: 'time',
                adapters: {
                    date: {
                        locale: 'de'
                    }
                },
                distribution: 'series',
                ticks: {
                    source: 'data',
                    autoSkip: true,
                    sampleSize: 1,
                }
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Closing price ($)'
                },
                afterBuildTicks: (scale, ticks) => {
                    return [Math.max(...ticks), 10, Math.min(...ticks)];
                }
            }]
        },
        tooltips: {
            intersect: false,
            mode: 'index',
        }
    }
});

// custom tooltips
const customTooltipsPieChart = new Chart(ctx, {
    type: 'pie',
    data: {},
    options: {
        tooltips: {
            enabled: false,
            custom: (tooltipModel) => {
                const firstColor = tooltipModel.labelColors[0];
                console.log(firstColor.borderColor);
                console.log(firstColor.backgroundColor);
            },
        },
    },
});

// chart with right-to-left (rtl) legend and tooltip
const rtlTooltipsLegendsLineChart = new Chart(ctx, {
    type: 'line',
    data: {},
    options: {
        legend: {
            rtl: true,
            textDirection: 'rtl',
        },
        tooltips: {
            rtl: true,
            textDirection: 'rtl',
        },
    },
});

// platform global values
Chart.platform.disableCSSInjection = true;

// Chart instances in the global namespace
for (const id in Chart.instances) {
    Chart.instances[id].resize();
}

// default global static values
Chart.defaults.global.defaultFontColor = '#544615';
Chart.defaults.global.defaultFontFamily = 'Arial';
Chart.defaults.global.tooltips.backgroundColor = '#0a2c54';
Chart.defaults.global.tooltips.cornerRadius = 2;
Chart.defaults.global.tooltips.displayColors = false;
Chart.defaults.global.defaultColor = ctx.createLinearGradient(0, 0, 0, 100);

// Update Chart defaults using scaleService
Chart.scaleService.updateScaleDefaults('time', {
    gridLines: {
        drawBorder: false,
        drawOnChartArea: false,
        drawTicks: false,
    },
    ticks: {
        padding: 20,
    },
});

const doughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [
            {
                backgroundColor: '#ff0000',
                borderColor: '#000000',
                borderWidth: 3,
                data: [1, 3, 5]
            }
        ]
    }
});

// Testing Model properties
if (doughnutChart.getDatasetMeta(0).data.length > 0) {
    const doughnutChartModel = doughnutChart.getDatasetMeta(0).data[0]._model;
    console.log(doughnutChartModel.backgroundColor);
    console.log(doughnutChartModel.borderAlign);
    console.log(doughnutChartModel.borderColor);
    console.log(doughnutChartModel.borderWidth);
    console.log(doughnutChartModel.circumference);
    console.log(doughnutChartModel.controlPointNextX);
    console.log(doughnutChartModel.controlPointNextY);
    console.log(doughnutChartModel.controlPointPreviousX);
    console.log(doughnutChartModel.controlPointPreviousY);
    console.log(doughnutChartModel.endAngle);
    console.log(doughnutChartModel.hitRadius);
    console.log(doughnutChartModel.innerRadius);
    console.log(doughnutChartModel.outerRadius);
    console.log(doughnutChartModel.pointStyle);
    console.log(doughnutChartModel.radius);
    console.log(doughnutChartModel.skip);
    console.log(doughnutChartModel.startAngle);
    console.log(doughnutChartModel.steppedLine);
    console.log(doughnutChartModel.tension);
    console.log(doughnutChartModel.x);
    console.log(doughnutChartModel.y);
    console.log(doughnutChartModel.base);
    console.log(doughnutChartModel.head);

    const doughnutChartView = doughnutChart.getDatasetMeta(0).data[0]._view;
    console.log(doughnutChartView.backgroundColor);
    console.log(doughnutChartView.borderAlign);
    console.log(doughnutChartView.borderColor);
    console.log(doughnutChartView.borderWidth);
    console.log(doughnutChartView.circumference);
    console.log(doughnutChartView.controlPointNextX);
    console.log(doughnutChartView.controlPointNextY);
    console.log(doughnutChartView.controlPointPreviousX);
    console.log(doughnutChartView.controlPointPreviousY);
    console.log(doughnutChartView.endAngle);
    console.log(doughnutChartView.hitRadius);
    console.log(doughnutChartView.innerRadius);
    console.log(doughnutChartView.outerRadius);
    console.log(doughnutChartView.pointStyle);
    console.log(doughnutChartView.radius);
    console.log(doughnutChartView.skip);
    console.log(doughnutChartView.startAngle);
    console.log(doughnutChartView.steppedLine);
    console.log(doughnutChartView.tension);
    console.log(doughnutChartView.x);
    console.log(doughnutChartView.y);
    console.log(doughnutChartView.base);
    console.log(doughnutChartView.head);
}

// Testing DoughnutModel properties
if (doughnutChart.getDatasetMeta(0).data.length > 0) {
    const doughnutChartModel = doughnutChart.getDatasetMeta(0).data[0]._model as Chart.DoughnutModel;
    console.log(doughnutChartModel.backgroundColor);
    console.log(doughnutChartModel.borderAlign);
    console.log(doughnutChartModel.borderColor);
    console.log(doughnutChartModel.borderWidth);
    console.log(doughnutChartModel.circumference);
    console.log(doughnutChartModel.endAngle);
    console.log(doughnutChartModel.innerRadius);
    console.log(doughnutChartModel.outerRadius);
    console.log(doughnutChartModel.startAngle);
    console.log(doughnutChartModel.x);
    console.log(doughnutChartModel.y);

    const doughnutChartView = doughnutChart.getDatasetMeta(0).data[0]._view as Chart.DoughnutModel;
    console.log(doughnutChartView.backgroundColor);
    console.log(doughnutChartView.borderAlign);
    console.log(doughnutChartView.borderColor);
    console.log(doughnutChartView.borderWidth);
    console.log(doughnutChartView.circumference);
    console.log(doughnutChartView.endAngle);
    console.log(doughnutChartView.innerRadius);
    console.log(doughnutChartView.outerRadius);
    console.log(doughnutChartView.startAngle);
    console.log(doughnutChartView.x);
    console.log(doughnutChartView.y);
}

// Time Cartesian Axis
const timeAxisChartData: Chart.ChartData = {
    datasets: [{
        data: [
            { x: new Date(), y: 1 },
            { y: new Date(), t: 1 },
            { t: new Date(), y: 1 },
            { x: moment(), y: 1 },
            { y: moment(), t: 1 },
            { t: moment(), y: 1 },
        ]
    }]
};

// Labels
const timeLabelsChartData: Chart.ChartData = {
    labels: [
        'a', 'b', 'c',
        1, 2, 3,
        new Date(), new Date(), new Date(),
        moment(), moment(), moment(),
    ],
};

const event = new MouseEvent('click');
chart.getElementsAtEvent(event);
chart.getElementsAtXAxis(event);

// Number array chart data
const chartWithNumberArrayData: Chart = new Chart(ctx, {
    type: 'bar',
    data: {
        datasets: [{
            backgroundColor: '#000',
            borderColor: '#f00',
            data: [
                [1, 2],
                [3, 4],
                [5, 6]
            ],
            type: 'line',
        }]
    },
    options: {
        scales: {
            displayFormats: {
                month: 'MMM YYYY',
            },
            xAxes: [{
                type: 'time',
                distribution: 'series',
                ticks: {
                    source: 'data',
                    autoSkip: true,
                    sampleSize: 1,
                }
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Closing price ($)'
                },
                afterBuildTicks: (scale, ticks) => {
                    return [Math.max(...ticks), 10, Math.min(...ticks)];
                }
            }]
        },
        tooltips: {
            intersect: false,
            mode: 'index',
        }
    }
});

// Category axes
const categoryXAxe: Chart.ChartXAxe = {
    type: 'category',
    labels: ['label1', 'label2'],
};

// Testing plugin service static methods
const plugins = Chart.plugins.getAll();
console.log(plugins);
const foo = plugins.find(plugin => plugin.id === 'foo');
console.log(foo);
const pluginCount = Chart.plugins.count();
console.log(pluginCount);
const notify = Chart.plugins.notify(chart, 'beforeInit', []);
console.log(notify);
const pluginDescriptors = Chart.plugins.descriptors(chart);
console.log(pluginDescriptors);

Chart.plugins.clear();
console.log(Chart.plugins.getAll());
