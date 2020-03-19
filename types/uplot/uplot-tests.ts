import UPlot, { Data } from 'uplot';

const data: Data = [
    [1546300800, 1546387200], // x-values (timestamps)
    [35, 71], // y-values (series 1)
    [90, 15], // y-values (series 2)
];

const plot = new UPlot(
    {
        title: 'My Chart',
        id: 'chart1',
        class: 'my-chart',
        width: 800,
        height: 600,
        series: [
            {},
            {
                // initial toggled state (optional)
                show: true,

                spanGaps: false,

                // in-legend display
                label: 'RAM',
                value: (self, rawValue) => '$' + rawValue.toFixed(2),

                // series style
                stroke: 'red',
                width: 1,
                fill: 'rgba(255, 0, 0, 0.3)',
                dash: [10, 5],
            },
        ],
    },
    data,
    document.body,
);

plot.redraw();
