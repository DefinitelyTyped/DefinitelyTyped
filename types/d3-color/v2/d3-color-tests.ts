/**
 * Typescript definition tests for d3/d3-color module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3Color from 'd3-color';

// Signature tests for 'color', rgb and hsl

let c: d3Color.RGBColor | d3Color.HSLColor | null;
let cRGB: d3Color.RGBColor;
let cHSL: d3Color.HSLColor;
let displayable: boolean;
let cString: string;
let nil: null;

c = d3Color.color('oops');
c = d3Color.color('steelblue');
c = d3Color.color('rgba(20, 100, 200, 0.5)');
c = d3Color.color(d3Color.rgb(0, 0, 0));

cRGB = d3Color.color('hsl(60, 100%, 20%, 0.5)')!.rgb();

cRGB = d3Color.rgb(20, 100, 200);
cRGB = d3Color.rgb(20, 100, 200, 0.5);
cRGB = d3Color.rgb('steelblue');
cRGB = d3Color.rgb('rgba(20, 100, 200, 0.5)');
cRGB = d3Color.rgb(c);
cRGB = cRGB.brighter();
cRGB = cRGB.brighter(0.2);
cRGB = cRGB.darker();
cRGB = cRGB.darker(0.2);
cRGB = cRGB.copy();
cRGB = cRGB.copy({ r: 0.5 });
cRGB = cRGB.rgb();
displayable = cRGB.displayable();
cString = cRGB.toString();
cString = cRGB.hex();
cString = cRGB.formatHex();
cString = cRGB.formatHsl();
cString = cRGB.formatRgb();
console.log('Channels = (r : %d, g: %d, b: %d)', cRGB.r, cRGB.g, cRGB.b);
console.log('Opacity = %d', cRGB.opacity);

cHSL = d3Color.hsl(60, 1, 0.2);
cHSL = d3Color.hsl(60, 1, 0.2, 0.5);
cHSL = d3Color.hsl('steelblue');
cHSL = d3Color.hsl('rgba(20, 100, 200, 0.5)');
cHSL = d3Color.hsl(c);
cHSL = cHSL.brighter();
cHSL = cHSL.brighter(0.2);
cHSL = cHSL.darker();
cHSL = cHSL.darker(0.2);
cHSL = cHSL.copy();
cHSL = cHSL.copy({ opacity: 0.5 });
cRGB = cHSL.rgb();
displayable = cHSL.displayable();
cString = cHSL.toString();
cString = cHSL.hex();
cString = cHSL.formatHex();
cString = cHSL.formatHsl();
cString = cHSL.formatRgb();
console.log('Channels = (h : %d, s: %d, l: %d)', cHSL.h, cHSL.s, cHSL.l);
console.log('Opacity = %d', cHSL.opacity);

// Signature tests for Lab

let cLab: d3Color.LabColor;

cLab = d3Color.lab(120, 40, 50);
cLab = d3Color.lab(120, 40, 50, 0.5);
cLab = d3Color.lab('steelblue');
cLab = d3Color.lab('rgba(20, 100, 200, 0.5)');
cLab = d3Color.lab(c);
cLab = cLab.brighter();
cLab = cLab.brighter(0.2);
cLab = cLab.darker();
cLab = cLab.darker(0.2);
cLab = cLab.copy();
cLab = cLab.copy({ a: 0.5 });
cRGB = cLab.rgb();
displayable = cLab.displayable();
cString = cLab.toString();
cString = cLab.hex();
cString = cLab.formatHex();
cString = cLab.formatHsl();
cString = cLab.formatRgb();
console.log('Channels = (l : %d, a: %d, b: %d)', cLab.l, cLab.a, cLab.b);
console.log('Opacity = %d', cLab.opacity);

// Signature tests for Gray
cLab = d3Color.gray(120);
cLab = d3Color.gray(120, 0.5);

// Signature tests for HCL

let cHcl: d3Color.HCLColor;

cHcl = d3Color.hcl(120, 40, 50);
cHcl = d3Color.hcl(120, 40, 50, 0.5);
cHcl = d3Color.hcl('steelblue');
cHcl = d3Color.hcl('rgba(20, 100, 200, 0.5)');
cHcl = d3Color.hcl(c);
cHcl = cHcl.brighter();
cHcl = cHcl.brighter(0.2);
cHcl = cHcl.darker();
cHcl = cHcl.darker(0.2);
cHcl = cHcl.copy();
cHcl = cHcl.copy({ h: 1 });
cRGB = cHcl.rgb();
displayable = cHcl.displayable();
cString = cHcl.toString();
cString = cHcl.hex();
cString = cHcl.formatHex();
cString = cHcl.formatHsl();
cString = cHcl.formatRgb();
console.log('Channels = (h : %d, c: %d, l: %d)', cHcl.h, cHcl.c, cHcl.l);
console.log('Opacity = %d', cHcl.opacity);

cHcl = d3Color.lch(40, 50, 120);
cHcl = d3Color.lch(40, 50, 120, 0.5);
cHcl = d3Color.lch('steelblue');
cHcl = d3Color.lch('rgba(20, 100, 200, 0.5)');
cHcl = d3Color.lch(c);

// Signature tests for Cubehelix

let cCubehelix: d3Color.CubehelixColor;

cCubehelix = d3Color.cubehelix(20, 100, 200);
cCubehelix = d3Color.cubehelix(20, 100, 200, 0.5);
cCubehelix = d3Color.cubehelix('steelblue');
cCubehelix = d3Color.cubehelix('rgba(20, 100, 200, 0.5)');
cCubehelix = d3Color.cubehelix(c);
cCubehelix = cCubehelix.brighter();
cCubehelix = cCubehelix.brighter(0.2);
cCubehelix = cCubehelix.darker();
cCubehelix = cCubehelix.darker(0.2);
cCubehelix = cCubehelix.copy();
cCubehelix = cCubehelix.copy({ opacity: 1 });
cRGB = cCubehelix.rgb();
displayable = cCubehelix.displayable();
cString = cCubehelix.toString();
cString = cCubehelix.hex();
cString = cCubehelix.formatHex();
cString = cCubehelix.formatHsl();
cString = cCubehelix.formatRgb();
console.log('Channels = (h : %d, s: %d, l: %d)', cCubehelix.h, cCubehelix.s, cCubehelix.l);
console.log('Opacity = %d', cCubehelix.opacity);

// Prototype, instanceof and typeguard

declare let color: d3Color.RGBColor | d3Color.HSLColor | d3Color.LabColor | d3Color.HCLColor | d3Color.CubehelixColor | null;

if (color instanceof d3Color.rgb) {
    cRGB = color;
} else if (color instanceof d3Color.hsl) {
    cHSL = color;
} else if (color instanceof d3Color.lab) {
    cLab = color;
} else if (color instanceof d3Color.hcl) {
    cHcl = color;
} else if (color instanceof d3Color.cubehelix) {
    cCubehelix = color;
} else if (color === null) {
    nil = color;
}

if (color instanceof d3Color.color) {
    console.log(color.toString(), color.darker());
} else {
    nil = color;
}
