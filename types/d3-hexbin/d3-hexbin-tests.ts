/**
 * Typescript definition tests for d3/d3-hexbin module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3Hexbin from 'd3-hexbin';

// ----------------------------------------------------------------------------
// Preparatory Steps
// ----------------------------------------------------------------------------

interface Point {
    x: number;
    y: number;
}

let num: number;
let str: string;
let centers: Array<[number, number]>;
let extent: [[number, number], [number, number]];
let size: [number, number];

let hexbin: d3Hexbin.Hexbin<[number, number]>;
let hexbinBins: Array<d3Hexbin.HexbinBin<[number, number]>>;
const data: Array<[number, number]> = [[10, 20], [30, 10]];

let pointHexbin: d3Hexbin.Hexbin<Point>;
let pointHexbinBins: Array<d3Hexbin.HexbinBin<Point>>;
const pointData: Point[] = [{x: 10, y: 20}, {x: 30, y: 10}];

let pointAccessor: (d: Point) => number;

// ----------------------------------------------------------------------------
// Hexbin
// ----------------------------------------------------------------------------

// Create Hexbin ==============================================================

// with default data type [number, number] ------------------------------------

hexbin = d3Hexbin.hexbin();

// with custom data type ------------------------------------------------------

pointHexbin = d3Hexbin.hexbin<Point>();

// Configure Hexbin ===========================================================

// x(...) ---------------------------------------------------------------------

pointHexbin = pointHexbin.x(d => d.x);

pointAccessor = pointHexbin.x();

// y(...) ---------------------------------------------------------------------

pointHexbin = pointHexbin.y(d => d.y);

pointAccessor = pointHexbin.x();

// hexagon(...) ---------------------------------------------------------------

str = hexbin.hexagon();

// centers(...) ---------------------------------------------------------------

centers = hexbin.centers();

// mesh(...) ------------------------------------------------------------------

str = hexbin.mesh();

// radius(...) ----------------------------------------------------------------

hexbin = hexbin.radius(20);

num = hexbin.radius();

// extent(...) ----------------------------------------------------------------

hexbin = hexbin.extent([[0, 0], [1, 1]]);

extent = hexbin.extent();

// size(...) ------------------------------------------------------------------

hexbin = hexbin.size([1, 1]);

size = hexbin.size();

// Use Hexbin =================================================================

hexbinBins = hexbin(data);
num = hexbinBins[0].x;
num = hexbinBins[0].y;

pointHexbinBins = pointHexbin(pointData);
num = pointHexbinBins[0].x;
num = pointHexbinBins[0].y;
