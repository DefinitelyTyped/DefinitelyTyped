import * as Plotly from 'plotly.js';

const data: Plotly.BarData[] = [
  {
    x: ['giraffes', 'orangutans', 'monkeys'],
    y: [20, 14, 23],
    type: 'bar'
  }
];

Plotly.newPlot('test', data);
