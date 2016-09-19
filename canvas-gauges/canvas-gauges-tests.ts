/// <reference path="canvas-gauges.d.ts" />

import {
    LinearGaugeOptions,
    RadialGaugeOptions,
    LinearGauge,
    RadialGauge
} from 'canvas-gauges';

let linearOptions: LinearGaugeOptions = {
    renderTo: document.createElement('canvas')
};
let radialOptions: RadialGaugeOptions = {
    renderTo: 'gauge-id'
};

new LinearGauge(linearOptions);
new RadialGauge(radialOptions);

console.log(document.gauges.length);
