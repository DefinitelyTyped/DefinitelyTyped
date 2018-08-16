/**
 * Typescript definition tests for d3/d3-hsv module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import { hsv, HSVColor, interpolateHsv, interpolateHsvLong } from 'd3-hsv';
import { rgb, hcl, RGBColor } from 'd3-color';

let cRGB: RGBColor;
let cHSV: HSVColor;
let displayable: boolean;
let cString: string;
let iString: (t: number) => string;
let nil: null;

// Hsv signature

cHSV = hsv(120, 0.4, 0.5);
cHSV = hsv(120, 0.4, 0.5, 0.5);

// Specifier signature

cHSV = hsv('rgb(255, 255, 255)');
cHSV = hsv('rgb(10%, 20%, 30%)');
cHSV = hsv('rgba(255, 255, 255, 0.4)');
cHSV = hsv('rgba(10%, 20%, 30%, 0.4)');
cHSV = hsv('hsl(120, 50%, 20%)');
cHSV = hsv('hsla(120, 50%, 20%, 0.4)');
cHSV = hsv('#ffeeaa');
cHSV = hsv('#fea');
cHSV = hsv('steelblue');
cHSV = hsv('');

// Color signature

cRGB = rgb('steelblue');
cHSV = hsv(cRGB);
cHSV = hsv(cHSV);

// Method signatures

cHSV = cHSV.brighter();
cHSV = cHSV.brighter(0.2);
cHSV = cHSV.darker();
cHSV = cHSV.darker(0.2);
displayable = cHSV.displayable();
cString = cHSV.toString();
cString = cHSV.hex();
console.log('Channels = (h : %d, s: %d, v: %d)', cHSV.h, cHSV.s, cHSV.v);
console.log('Opacity = %d', cHSV.opacity);

// Interpolator

iString = interpolateHsv('seagreen', 'steelblue');
iString = interpolateHsv(rgb('seagreen'), hcl('steelblue'));
iString = interpolateHsv(rgb('seagreen'), hsv('steelblue'));

iString = interpolateHsvLong('seagreen', 'steelblue');
iString = interpolateHsvLong(rgb('seagreen'), hcl('steelblue'));
iString = interpolateHsvLong(rgb('seagreen'), hsv('steelblue'));

// Prototype, instanceof and type guard

declare let color: RGBColor | HSVColor | null;

if (color instanceof rgb) {
    cRGB = color;
} else if (color instanceof hsv) {
    cHSV = color;
} else {
    nil = color;
}
