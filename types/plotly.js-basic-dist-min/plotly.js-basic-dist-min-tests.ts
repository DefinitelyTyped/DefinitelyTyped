import * as Plotly from 'plotly.js-basic-dist-min';

const data: Array<Partial<Plotly.PlotData>> = [
    {
        type: 'bar',
        labels: ['Eve', 'Cain', 'Seth', 'Enos', 'Noam', 'Abel', 'Awan', 'Enoch', 'Azura'],
        parents: ['', 'Eve', 'Eve', 'Seth', 'Seth', 'Eve', 'Eve', 'Awan', 'Eve'],
        values: [65, 14, 12, 10, 2, 6, 6, 4, 4],
        marker: { line: { width: 2 } },
    },
];

const layout = {
    margin: { l: 0, r: 0, b: 0, t: 0 },
};
Plotly.newPlot('myDiv', data, layout, {
    plotlyServerURL: 'https://chart-studio.plotly.com/',
    showSendToCloud: true,
    showEditInChartStudio: true,
});
