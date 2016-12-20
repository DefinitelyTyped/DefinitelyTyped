import {
    LinearGaugeOptions,
    RadialGaugeOptions,
    LinearGauge,
    RadialGauge
} from 'canvas-gauges';

let linearOptions: LinearGaugeOptions = {
    renderTo: document.createElement('canvas'),
    fontNumbersStyle: 'italic'
};
let radialOptions: RadialGaugeOptions = {
    renderTo: 'gauge-id',
    fontNumbersWeight: 'bold'
};

new LinearGauge(linearOptions);
new RadialGauge(radialOptions);

console.log(document.gauges.length);
