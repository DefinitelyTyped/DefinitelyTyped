/// <reference path="canvas-gauges.d.ts" />

let linearOptions: LinearGaugeOptions = {
    renderTo: document.createElement('canvas')
};
let radialOptions: RadialGaugeOptions = {
    renderTo: 'gauge-id'
};

new LinearGauge(linearOptions);
new RadialGauge(radialOptions);
