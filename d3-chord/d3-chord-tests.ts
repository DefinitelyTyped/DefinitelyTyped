/**
 * Typescript definition tests for d3/d3-chord module
 * 
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3Chord from 'd3-chord';
import { select, Selection } from 'd3-selection';
import { ascending } from 'd3-array';


// ---------------------------------------------------------------------
// Preparatory Steps
// ---------------------------------------------------------------------

let context: CanvasRenderingContext2D;

let chords: d3Chord.Chords;
let chordGroups: Array<d3Chord.ChordGroup>;
let chord: d3Chord.Chord;
let chordSubgroup: d3Chord.ChordSubgroup;

let num: number;
let matrix: number[][] = [
    [11975, 5871, 8916, 2868],
    [1951, 10048, 2060, 6171],
    [8010, 16145, 8090, 8045],
    [1013, 990, 940, 6907]
]; // From Circos Table Viewer example http://mkweb.bcgsc.ca/circos/guide/tables/

let comparatorFn: (a: number, b: number) => number;

let subgroupAccessor: (this: SVGPathElement, d: d3Chord.Chord, ...args: any[]) => d3Chord.ChordSubgroup;
let numAccessor: (this: SVGPathElement, d: d3Chord.ChordSubgroup, ...args: any[]) => number;

// ---------------------------------------------------------------------
// Test Chord
// ---------------------------------------------------------------------

// Test supporting interfaces ==========================================


let length: number = chords.length;

chordGroups = chords.groups;

num = chordGroups[0].startAngle;
num = chordGroups[0].endAngle;
num = chordGroups[0].value;
num = chordGroups[0].index;

chord = chords[0];

chordSubgroup = chord.source;
chordSubgroup = chord.target;

num = chordSubgroup.startAngle;
num = chordSubgroup.endAngle;
num = chordSubgroup.value;
num = chordSubgroup.index;

// chord() create ChordLayout  generator ===============================

let chordLayout: d3Chord.ChordLayout;
chordLayout = d3Chord.chord();

// Configure ChordLayout generator =====================================

// padAngle() ----------------------------------------------------------

chordLayout = chordLayout.padAngle(0.05);
num = chordLayout.padAngle();

// sortGroups() --------------------------------------------------------

chordLayout = chordLayout.sortGroups(ascending);
chordLayout = chordLayout.sortGroups(null);
comparatorFn = chordLayout.sortGroups();

// sortSubgroups() -----------------------------------------------------

chordLayout = chordLayout.sortSubgroups(ascending);
chordLayout = chordLayout.sortSubgroups(null);
comparatorFn = chordLayout.sortSubgroups();


// sortChords() --------------------------------------------------------

chordLayout = chordLayout.sortChords(ascending);
chordLayout = chordLayout.sortChords(null);
comparatorFn = chordLayout.sortChords();

// Use ChordLayout generator ===========================================

chords = chordLayout(matrix);

// ---------------------------------------------------------------------
// Test Ribbon
// ---------------------------------------------------------------------

// ribbon() create RibbonGenerator =====================================

let canvasRibbon: d3Chord.RibbonGenerator<any, d3Chord.Chord, d3Chord.ChordSubgroup>;
canvasRibbon = d3Chord.ribbon();

let svgRibbon: d3Chord.RibbonGenerator<SVGPathElement, d3Chord.Chord, d3Chord.ChordSubgroup>;

svgRibbon = d3Chord.ribbon<SVGPathElement, d3Chord.Chord, d3Chord.ChordSubgroup>();

// Configure RibbonGenerator ===========================================

// context() -----------------------------------------------------------

canvasRibbon = canvasRibbon.context(context);
context = canvasRibbon.context();

svgRibbon = svgRibbon.context(null);

// source() -----------------------------------------------------------

svgRibbon = svgRibbon.source(function (d) {
    return d.source; // datum is of type Chord
});

subgroupAccessor = svgRibbon.source();

// target() -----------------------------------------------------------

svgRibbon = svgRibbon.target(function (d) {
    return d.target; // datum is of type Chord
});

subgroupAccessor = svgRibbon.target();


// radius() -----------------------------------------------------------

canvasRibbon = canvasRibbon.radius(30);

svgRibbon = svgRibbon.radius(function (d) {
    console.log('SVGPathElement createSVGPathSegCurvetoCubicAbs method:', this.createSVGPathSegCurvetoCubicAbs); // this type SVGPathElement
    console.log('Subgroup startAngle', d.startAngle); // datum is of type Chord
    return 30;
});

numAccessor = svgRibbon.radius();

// startAngle() ---------------------------------------------------------

canvasRibbon = canvasRibbon.startAngle(0);

svgRibbon = svgRibbon.startAngle(function (d) {
    console.log('SVGPathElement createSVGPathSegCurvetoCubicAbs method:', this.createSVGPathSegCurvetoCubicAbs); // this type SVGPathElement
    return d.startAngle; // datum is of type ChordSubgroup
});

numAccessor = svgRibbon.startAngle();

// endAngle() -----------------------------------------------------------

canvasRibbon = canvasRibbon.endAngle(Math.PI);

svgRibbon = svgRibbon.endAngle(function (d) {
    console.log('SVGPathElement createSVGPathSegCurvetoCubicAbs method:', this.createSVGPathSegCurvetoCubicAbs); // this type SVGPathElement
    return d.endAngle; // datum is of type ChordSubgroup
});

numAccessor = svgRibbon.endAngle();

// Use RibbonGenerator =================================================

// use canvas
canvasRibbon(chords[0]); // render ribbon for first chord

// use svg

let ribbonPaths: Selection<SVGPathElement, d3Chord.Chord, SVGGElement, d3Chord.Chords>;

ribbonPaths = select<SVGGElement, any>('g')
    .datum(chords)
    .selectAll()
    .data(function (chords) { return chords; })
    .enter().append<SVGPathElement>('path')
    .attr('d', svgRibbon);