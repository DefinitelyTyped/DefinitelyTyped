/// <reference path="plotly.js.d.ts" />

import * as Plotly from 'plotly.js';

var data = [
  {
    x: ['giraffes', 'orangutans', 'monkeys'],
    y: [20, 14, 23],
    type: 'bar'
  }
];

Plotly.newPlot('test', data);
