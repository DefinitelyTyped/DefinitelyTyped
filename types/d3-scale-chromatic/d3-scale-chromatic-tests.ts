/**
 * Typescript definition tests for d3/d3-scale-chromatic module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3ScaleChromatic from 'd3-scale-chromatic';

// -----------------------------------------------------------------------
// Categorical
// -----------------------------------------------------------------------
let accent: string = d3ScaleChromatic.schemeAccent[0]; // #7fc97f
let dark: string = d3ScaleChromatic.schemeDark2[0]; // #1b9e77
let paired: string = d3ScaleChromatic.schemePaired[0]; // #a6cee3
let pastel1: string = d3ScaleChromatic.schemePastel1[0]; // #fbb4ae
let pastel2: string = d3ScaleChromatic.schemePastel2[0]; // #b3e2cd
let set1: string = d3ScaleChromatic.schemeSet1[0]; // #e41a1c
let set2: string = d3ScaleChromatic.schemeSet2[0]; // #66c2a5
let set3: string = d3ScaleChromatic.schemeSet3[0]; // #8dd3c7

// -----------------------------------------------------------------------
// Diverging
// -----------------------------------------------------------------------
let BrBG: string = d3ScaleChromatic.interpolateBrBG(0); // rgb(84, 48, 5)
let PRGn: string = d3ScaleChromatic.interpolatePRGn(0); // rgb(64, 0, 75)
let PiYG: string = d3ScaleChromatic.interpolatePiYG(0); // rgb(142, 1, 82)
let PuOr: string = d3ScaleChromatic.interpolatePuOr(0); // rgb(127, 59, 8)
let RdBu: string = d3ScaleChromatic.interpolateRdBu(0); // rgb(103, 0, 31)
let RdGy: string = d3ScaleChromatic.interpolateRdGy(0); // rgb(103, 0, 31)
let RdYlBu: string = d3ScaleChromatic.interpolateRdYlBu(0); // rgb(103, 0, 31)
let RdYlGn: string = d3ScaleChromatic.interpolateRdYlGn(0); // rgb(103, 0, 31)
let Spectral: string = d3ScaleChromatic.interpolateSpectral(0); // rgb(158, 1, 66)

// -----------------------------------------------------------------------
// Sequential
// -----------------------------------------------------------------------
let Blue: string = d3ScaleChromatic.interpolateBlues(1); // rgb(8, 48, 107)
let Green: string = d3ScaleChromatic.interpolateGreens(1); // rgb(0, 68, 27)
let Grey: string = d3ScaleChromatic.interpolateGreys(1); // rgb(0, 0, 0)
let Orange: string = d3ScaleChromatic.interpolateOranges(1); // rgb(127, 39, 4)
let Purple: string = d3ScaleChromatic.interpolatePurples(1); // rgb(63, 0, 125)
let Red: string = d3ScaleChromatic.interpolateReds(1); // rgb(103, 0, 13)

// -----------------------------------------------------------------------
// Sequential(Multi-Hue)
// -----------------------------------------------------------------------
let BuGn: string = d3ScaleChromatic.interpolateBuGn(1); // rgb(0, 68, 27)
let BuPu: string = d3ScaleChromatic.interpolateBuPu(1); // rgb(77, 0, 75)
let GnBu: string = d3ScaleChromatic.interpolateGnBu(1); // rgb(8, 64, 129)
let OrRd: string = d3ScaleChromatic.interpolateOrRd(1); // rgb(127, 0, 0)
let PuBuGn: string = d3ScaleChromatic.interpolatePuBuGn(1); // rgb(1, 70, 54)
let PuBu: string = d3ScaleChromatic.interpolatePuBu(1); // rgb(2, 56, 88)
let PuRd: string = d3ScaleChromatic.interpolatePuRd(1); // rgb(103, 0, 31)
let RdPu: string = d3ScaleChromatic.interpolateRdPu(1); // rgb(73, 0, 106)
let YlGnBu: string = d3ScaleChromatic.interpolateYlGnBu(1); // rgb(8, 29, 88)
let YlGn: string = d3ScaleChromatic.interpolateYlGn(1); // rgb(0, 69, 41)
let YlOrBr: string = d3ScaleChromatic.interpolateYlOrBr(1); // rgb(102, 37, 6)
let YlOrRd: string = d3ScaleChromatic.interpolateYlOrRd(1); // rgb(128, 0, 38)
