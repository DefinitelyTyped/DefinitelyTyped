/**
 * Typescript definition tests for d3/d3-hsv module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import {hsv, HSVColor} from 'd3-hsv';
import {rgb, RGBColor} from 'd3-color';

let c: RGBColor;
let cHSV: HSVColor;
let displayable: boolean;
let cString: string;

// hsv signature
cHSV = hsv(120, 0.4, 0.5);
cHSV = hsv(120, 0.4, 0.5, 0.5);

// specifier signature
cHSV = hsv('rgb(255, 255, 255)');
cHSV = hsv('rgb(10%, 20%, 30%)');
cHSV = hsv('rgba(255, 255, 255, 0.4)');
cHSV = hsv('rgba(10%, 20%, 30%, 0.4)');
cHSV = hsv('hsl(120, 50%, 20%)');
cHSV = hsv('hsla(120, 50%, 20%, 0.4)');
cHSV = hsv('#ffeeaa');
cHSV = hsv('#fea');
cHSV = hsv('steelblue');

// color signature
c = rgb('steelblue');
cHSV = hsv(c);
cHSV = hsv(cHSV);

// method signatures
cHSV = cHSV.brighter();
cHSV = cHSV.brighter(0.2);
cHSV = cHSV.darker();
cHSV = cHSV.darker(0.2);
displayable = cHSV.displayable();
cString = cHSV.toString();
console.log('Channels = (h : %d, s: %d, v: %d)', cHSV.h, cHSV.s, cHSV.v);
console.log('Opacity = %d', cHSV.opacity);
