/**
 * Typescript definition tests for d3/d3-contour module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3Contour from 'd3-contour';
import {
    range,
    thresholdSturges,
    ThresholdArrayGenerator,
    ThresholdCountGenerator
} from 'd3-array';
import { geoPath } from 'd3-geo';
import { randomNormal } from 'd3-random';

// -----------------------------------------------------------------------------
// Preparatory Steps
// -----------------------------------------------------------------------------

// Some test setup is based on Contour Plot II Golstein-Price function at https://bl.ocks.org/mbostock/f48ff9c1af4d637c9a518727f5fdfef5

const n = 256;
const m = 256;
const values: number[] = new Array(n * m);
for (let j = 0.5, k = 0; j < m; ++j) {
    for (let i = 0.5; i < n; ++i, ++k) {
        values[k] = goldsteinPrice(i / n * 4 - 2, 1 - j / m * 3);
    }
}

function goldsteinPrice(x: number, y: number) {
    return (1 + Math.pow(x + y + 1, 2) * (19 - 14 * x + 3 * x * x - 14 * y + 6 * x * x + 3 * y * y))
        * (30 + Math.pow(2 * x - 3 * y, 2) * (18 - 32 * x + 12 * x * x + 48 * y - 36 * x * y + 27 * y * y));
}

let size: [number, number];
let boolFlag: boolean;
const thresholdArrayGen: ThresholdArrayGenerator<number> = (values: number[], min: number, max: number) => {
    let thresholds: number[];
    thresholds = [values[1], values[2], values[4]];
    return thresholds;
};

let thresholdGenerator: ThresholdArrayGenerator<number> | ThresholdCountGenerator;
let pathStringMaybe: string | null;
let num: number;

const pathSolo = geoPath<any, d3Contour.ContourMultiPolygon>();

// -----------------------------------------------------------------------------
// Test Contour Generator
// -----------------------------------------------------------------------------

// Get contour generator -------------------------------------------------------

let contGen: d3Contour.Contours = d3Contour.contours();

// Configure contour generator =================================================

// size(...) -------------------------------------------------------------------

// set with chainability
contGen = contGen.size([n, m]);

size = contGen.size();

// smooth(...) -----------------------------------------------------------------

// set with chainability
contGen = contGen.smooth(true);

boolFlag = contGen.smooth();

// thresholds(...) -------------------------------------------------------------

// set with count
contGen = contGen.thresholds(10);

// set with array
const thresholds1 = range(1, 21)
    .map(p => Math.pow(2, p));
contGen = contGen.thresholds(thresholds1);

// set with threshold array generator

contGen = contGen.thresholds(thresholdArrayGen); // mock

// set with threshold count generator

contGen = contGen.thresholds(thresholdSturges);

// get
thresholdGenerator = contGen.thresholds();

// Use contour generator =======================================================

pathStringMaybe = pathSolo(contGen(values)[0]);

// -----------------------------------------------------------------------------
// Test Contour Generator for Density Estimates
// -----------------------------------------------------------------------------

interface CustomDatum {
    x: number;
    y: number;
}

// Get contour generator -------------------------------------------------------

let contDensDefault: d3Contour.ContourDensity<[number, number]> = d3Contour.contourDensity();
let contDensCustom: d3Contour.ContourDensity<CustomDatum> = d3Contour.contourDensity<CustomDatum>();

// Configure contour generator =================================================

// x(...) ----------------------------------------------------------------------

// set with chainability
contDensCustom = contDensCustom.x((datum) => {
    const d: CustomDatum = datum; // check passed in argument type
    return d.x;
});

// get
const xAcc: (d: CustomDatum) => number = contDensCustom.x();

// y(...) ----------------------------------------------------------------------

// set with chainability
contDensCustom = contDensCustom.y((datum) => {
    const d: CustomDatum = datum; // check passed in argument type
    return d.y;
});

// get
const yAcc: (d: CustomDatum) => number = contDensCustom.y();

// size(...) -------------------------------------------------------------------

// set with chainability
contDensCustom = contDensCustom.size([900, 600]);

size = contDensCustom.size();

// cellSize(...) -----------------------------------------------------------------

// set with chainability
contDensCustom = contDensCustom.cellSize(3);

num = contDensCustom.cellSize();

// thresholds(...) -------------------------------------------------------------

// set with count
contDensCustom = contDensCustom.thresholds(10);

// set with array
contDensCustom = contDensCustom.thresholds([0.1, 0.25, 0.5, 0.75, 1]);

// set with threshold array generator
contDensCustom = contDensCustom.thresholds(thresholdArrayGen); // mock

// set with threshold count generator
contDensCustom = contDensCustom.thresholds(thresholdSturges);

// get
thresholdGenerator = contDensCustom.thresholds();

// bandwidth(...) --------------------------------------------------------------
// set with chainability
contDensCustom = contDensCustom.bandwidth(40);
// get
num = contDensCustom.bandwidth();

// Use contour generator =======================================================

const indNorm: CustomDatum[] = [];
const rX = randomNormal();
const rY = randomNormal(1, 2);
for (let i = 0; i < 1000; i++) {
    indNorm.push({
        x: rX(),
        y: rY()
    });
}

pathStringMaybe = pathSolo(contDensCustom(indNorm)[0]);
