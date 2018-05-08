/**
 * Typescript definition tests for d3/d3-scale-chromatic module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3ScaleChromatic from 'd3-scale-chromatic';

// -----------------------------------------------------------------------
// Preparatory Steps
// -----------------------------------------------------------------------

let colorInterpolator: ((t: number) => string);
let simpleScheme: ReadonlyArray<string>;
let nestedScheme: ReadonlyArray<ReadonlyArray<string>>;

// -----------------------------------------------------------------------
// Categorical
// -----------------------------------------------------------------------

simpleScheme = d3ScaleChromatic.schemeCategory10;
simpleScheme = d3ScaleChromatic.schemeAccent;
simpleScheme = d3ScaleChromatic.schemeDark2;
simpleScheme = d3ScaleChromatic.schemePaired;
simpleScheme = d3ScaleChromatic.schemePastel1;
simpleScheme = d3ScaleChromatic.schemePastel2;
simpleScheme = d3ScaleChromatic.schemeSet1;
simpleScheme = d3ScaleChromatic.schemeSet2;
simpleScheme = d3ScaleChromatic.schemeSet3;

const category10: string = d3ScaleChromatic.schemeCategory10[0]; // #1f77b4
const accent: string = d3ScaleChromatic.schemeAccent[0]; // #7fc97f
const dark: string = d3ScaleChromatic.schemeDark2[0]; // #1b9e77
const paired: string = d3ScaleChromatic.schemePaired[0]; // #a6cee3
const pastel1: string = d3ScaleChromatic.schemePastel1[0]; // #fbb4ae
const pastel2: string = d3ScaleChromatic.schemePastel2[0]; // #b3e2cd
const set1: string = d3ScaleChromatic.schemeSet1[0]; // #e41a1c
const set2: string = d3ScaleChromatic.schemeSet2[0]; // #66c2a5
const set3: string = d3ScaleChromatic.schemeSet3[0]; // #8dd3c7

// -----------------------------------------------------------------------
// Diverging
// -----------------------------------------------------------------------

colorInterpolator = d3ScaleChromatic.interpolateBrBG;
colorInterpolator = d3ScaleChromatic.interpolatePRGn;
colorInterpolator = d3ScaleChromatic.interpolatePiYG;
colorInterpolator = d3ScaleChromatic.interpolatePuOr;
colorInterpolator = d3ScaleChromatic.interpolateRdBu;
colorInterpolator = d3ScaleChromatic.interpolateRdGy;
colorInterpolator = d3ScaleChromatic.interpolateRdYlBu;
colorInterpolator = d3ScaleChromatic.interpolateRdYlGn;
colorInterpolator = d3ScaleChromatic.interpolateSpectral;

const BrBG: string = d3ScaleChromatic.interpolateBrBG(0); // rgb(84, 48, 5)
const PRGn: string = d3ScaleChromatic.interpolatePRGn(0); // rgb(64, 0, 75)
const PiYG: string = d3ScaleChromatic.interpolatePiYG(0); // rgb(142, 1, 82)
const PuOr: string = d3ScaleChromatic.interpolatePuOr(0); // rgb(127, 59, 8)
const RdBu: string = d3ScaleChromatic.interpolateRdBu(0); // rgb(103, 0, 31)
const RdGy: string = d3ScaleChromatic.interpolateRdGy(0); // rgb(103, 0, 31)
const RdYlBu: string = d3ScaleChromatic.interpolateRdYlBu(0); // rgb(103, 0, 31)
const RdYlGn: string = d3ScaleChromatic.interpolateRdYlGn(0); // rgb(103, 0, 31)
const Spectral: string = d3ScaleChromatic.interpolateSpectral(0); // rgb(158, 1, 66)

nestedScheme = d3ScaleChromatic.schemeBrBG;
nestedScheme = d3ScaleChromatic.schemePRGn;
nestedScheme = d3ScaleChromatic.schemePiYG;
nestedScheme = d3ScaleChromatic.schemePuOr;
nestedScheme = d3ScaleChromatic.schemeRdBu;
nestedScheme = d3ScaleChromatic.schemeRdGy;
nestedScheme = d3ScaleChromatic.schemeRdYlBu;
nestedScheme = d3ScaleChromatic.schemeRdYlGn;
nestedScheme = d3ScaleChromatic.schemeSpectral;

const schemeBrBG: string = d3ScaleChromatic.schemeBrBG[3][0]; // #d8b365
const schemePRGn: string = d3ScaleChromatic.schemePRGn[3][0]; // #af8dc3
const schemePiYG: string = d3ScaleChromatic.schemePiYG[3][0]; // #e9a3c9
const schemePuOr: string = d3ScaleChromatic.schemePuOr[3][0]; // #998ec3
const schemeRdBu: string = d3ScaleChromatic.schemeRdBu[3][0]; // #ef8a62
const schemeRdGy: string = d3ScaleChromatic.schemeRdGy[3][0]; // #ef8a62
const schemeRdYlBu: string = d3ScaleChromatic.schemeRdYlBu[3][0]; // #fc8d59
const schemeRdYlGn: string = d3ScaleChromatic.schemeRdYlGn[3][0]; // #fc8d59
const schemeSpectral: string = d3ScaleChromatic.schemeSpectral[3][0]; // #fc8d59

// -----------------------------------------------------------------------
// Sequential
// -----------------------------------------------------------------------

colorInterpolator = d3ScaleChromatic.interpolateBlues;
colorInterpolator = d3ScaleChromatic.interpolateGreens;
colorInterpolator = d3ScaleChromatic.interpolateGreys;
colorInterpolator = d3ScaleChromatic.interpolateOranges;
colorInterpolator = d3ScaleChromatic.interpolatePurples;
colorInterpolator = d3ScaleChromatic.interpolateReds;

const Blue: string = d3ScaleChromatic.interpolateBlues(1); // rgb(8, 48, 107)
const Green: string = d3ScaleChromatic.interpolateGreens(1); // rgb(0, 68, 27)
const Grey: string = d3ScaleChromatic.interpolateGreys(1); // rgb(0, 0, 0)
const Orange: string = d3ScaleChromatic.interpolateOranges(1); // rgb(127, 39, 4)
const Purple: string = d3ScaleChromatic.interpolatePurples(1); // rgb(63, 0, 125)
const Red: string = d3ScaleChromatic.interpolateReds(1); // rgb(103, 0, 13)

nestedScheme = d3ScaleChromatic.schemeBlues;
nestedScheme = d3ScaleChromatic.schemeGreens;
nestedScheme = d3ScaleChromatic.schemeGreys;
nestedScheme = d3ScaleChromatic.schemeOranges;
nestedScheme = d3ScaleChromatic.schemePurples;
nestedScheme = d3ScaleChromatic.schemeReds;

const schemeBlues: string = d3ScaleChromatic.schemeBlues[3][0]; // #deebf7
const schemeGreens: string = d3ScaleChromatic.schemeGreens[3][0]; // #e5f5e0
const schemeGreys: string = d3ScaleChromatic.schemeGreys[3][0]; // #f0f0f0
const schemeOranges: string = d3ScaleChromatic.schemeOranges[3][0]; // #fee6ce
const schemePurples: string = d3ScaleChromatic.schemePurples[3][0]; // #efedf5
const schemeReds: string = d3ScaleChromatic.schemeReds[3][0]; // #fee0d2

// -----------------------------------------------------------------------
// Sequential(Multi-Hue)
// -----------------------------------------------------------------------

colorInterpolator = d3ScaleChromatic.interpolateViridis;
colorInterpolator = d3ScaleChromatic.interpolateMagma;
colorInterpolator = d3ScaleChromatic.interpolateInferno;
colorInterpolator = d3ScaleChromatic.interpolatePlasma;
colorInterpolator = d3ScaleChromatic.interpolateRainbow;
colorInterpolator = d3ScaleChromatic.interpolateWarm;
colorInterpolator = d3ScaleChromatic.interpolateCool;
colorInterpolator = d3ScaleChromatic.interpolateCubehelixDefault;
colorInterpolator = d3ScaleChromatic.interpolateBuGn;
colorInterpolator = d3ScaleChromatic.interpolateBuPu;
colorInterpolator = d3ScaleChromatic.interpolateGnBu;
colorInterpolator = d3ScaleChromatic.interpolateOrRd;
colorInterpolator = d3ScaleChromatic.interpolatePuBuGn;
colorInterpolator = d3ScaleChromatic.interpolatePuBu;
colorInterpolator = d3ScaleChromatic.interpolatePuRd;
colorInterpolator = d3ScaleChromatic.interpolateRdPu;
colorInterpolator = d3ScaleChromatic.interpolateYlGnBu;
colorInterpolator = d3ScaleChromatic.interpolateYlGn;
colorInterpolator = d3ScaleChromatic.interpolateYlOrBr;
colorInterpolator = d3ScaleChromatic.interpolateYlOrRd;

const BuGn: string = d3ScaleChromatic.interpolateBuGn(1); // rgb(0, 68, 27)
const BuPu: string = d3ScaleChromatic.interpolateBuPu(1); // rgb(77, 0, 75)
const GnBu: string = d3ScaleChromatic.interpolateGnBu(1); // rgb(8, 64, 129)
const OrRd: string = d3ScaleChromatic.interpolateOrRd(1); // rgb(127, 0, 0)
const PuBuGn: string = d3ScaleChromatic.interpolatePuBuGn(1); // rgb(1, 70, 54)
const PuBu: string = d3ScaleChromatic.interpolatePuBu(1); // rgb(2, 56, 88)
const PuRd: string = d3ScaleChromatic.interpolatePuRd(1); // rgb(103, 0, 31)
const RdPu: string = d3ScaleChromatic.interpolateRdPu(1); // rgb(73, 0, 106)
const YlGnBu: string = d3ScaleChromatic.interpolateYlGnBu(1); // rgb(8, 29, 88)
const YlGn: string = d3ScaleChromatic.interpolateYlGn(1); // rgb(0, 69, 41)
const YlOrBr: string = d3ScaleChromatic.interpolateYlOrBr(1); // rgb(102, 37, 6)
const YlOrRd: string = d3ScaleChromatic.interpolateYlOrRd(1); // rgb(128, 0, 38)

nestedScheme = d3ScaleChromatic.schemeBuGn;
nestedScheme = d3ScaleChromatic.schemeBuPu;
nestedScheme = d3ScaleChromatic.schemeGnBu;
nestedScheme = d3ScaleChromatic.schemeOrRd;
nestedScheme = d3ScaleChromatic.schemePuBuGn;
nestedScheme = d3ScaleChromatic.schemePuBu;
nestedScheme = d3ScaleChromatic.schemePuRd;
nestedScheme = d3ScaleChromatic.schemeRdPu;
nestedScheme = d3ScaleChromatic.schemeYlGnBu;
nestedScheme = d3ScaleChromatic.schemeYlGn;
nestedScheme = d3ScaleChromatic.schemeYlOrBr;
nestedScheme = d3ScaleChromatic.schemeYlOrRd;

const schemeBuGn: string = d3ScaleChromatic.schemeBuGn[3][0]; // #e5f5f9
const schemeBuPu: string = d3ScaleChromatic.schemeBuPu[3][0]; // #e0ecf4
const schemeGnBu: string = d3ScaleChromatic.schemeGnBu[3][0]; // #e0f3db
const schemeOrRd: string = d3ScaleChromatic.schemeOrRd[3][0]; // #fee8c8
const schemePuBuGn: string = d3ScaleChromatic.schemePuBuGn[3][0]; // #ece2f0
const schemePuBu: string = d3ScaleChromatic.schemePuBu[3][0]; // #ece7f2
const schemePuRd: string = d3ScaleChromatic.schemePuRd[3][0]; // #e7e1ef
const schemeRdPu: string = d3ScaleChromatic.schemeRdPu[3][0]; // #fde0dd
const schemeYlGnBu: string = d3ScaleChromatic.schemeYlGnBu[3][0]; // #edf8b1
const schemeYlGn: string = d3ScaleChromatic.schemeYlGn[3][0]; // #f7fcb9
const schemeYlOrBr: string = d3ScaleChromatic.schemeYlOrBr[3][0]; // #fff7bc
const schemeYlOrRd: string = d3ScaleChromatic.schemeYlOrRd[3][0]; // #ffeda0
