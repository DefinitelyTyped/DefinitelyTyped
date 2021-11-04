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

const linearGauge = new LinearGauge(linearOptions);
const radialGauge = new RadialGauge(radialOptions);

linearGauge.on('init', () => {});
linearGauge.on('render', () => {});
linearGauge.on('destroy', () => {});
linearGauge.on('animationStart', () => {});
linearGauge.on('animate', (percent, value) => console.log(percent, value));
linearGauge.on('animationEnd', () => {});
linearGauge.on('beforePlate', () => {});
linearGauge.on('beforeHighlights', () => {});
linearGauge.on('beforeMinorTicks', () => {});
linearGauge.on('beforeMajorTicks', () => {});
linearGauge.on('beforeNumbers', () => {});
linearGauge.on('beforeTitle', () => {});
linearGauge.on('beforeUnits', () => {});
linearGauge.on('beforeProgressBar', () => {});
linearGauge.on('beforeValueBox', () => {});
linearGauge.on('beforeNeedle', () => {});

radialGauge.on('init', () => {});
radialGauge.on('render', () => {});
radialGauge.on('destroy', () => {});
radialGauge.on('animationStart', () => {});
radialGauge.on('animate', (percent, value) => console.log(percent, value));
radialGauge.on('animationEnd', () => {});
radialGauge.on('beforePlate', () => {});
radialGauge.on('beforeHighlights', () => {});
radialGauge.on('beforeMinorTicks', () => {});
radialGauge.on('beforeMajorTicks', () => {});
radialGauge.on('beforeNumbers', () => {});
radialGauge.on('beforeTitle', () => {});
radialGauge.on('beforeUnits', () => {});
radialGauge.on('beforeProgressBar', () => {});
radialGauge.on('beforeValueBox', () => {});
radialGauge.on('beforeNeedle', () => {});

console.log(document.gauges.length);
