// Type definitions for d3-contour 1.1
// Project: https://d3js.org/d3-contour/
// Definitions by: Tom Wanzek <https://github.com/tomwanzek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Last module patch version validated against: 1.1.0

import { MultiPolygon } from 'geojson';
import { ThresholdArrayGenerator, ThresholdCountGenerator } from 'd3-array';

export interface ContourMultiPolygon extends MultiPolygon {
    value: number;
}

/**
 * A contour generator
 */
export interface Contours {
    (values: number[]): ContourMultiPolygon[];
    size(): [number, number];
    size(size: [number, number]): this;
    smooth():boolean;
    smooth(smooth: boolean): this;
    thresholds(): ThresholdCountGenerator | ThresholdArrayGenerator<number>;
    thresholds(count: number): this;
    thresholds(thresholds: number[]): this;
    thresholds(thresholds: ThresholdCountGenerator): this;
    thresholds(thresholds: ThresholdArrayGenerator<number>): this;
}

/**
 * Construct a new contour generator with the default settings.
 */
export function contours(): Contours;

/**
 * A contour generator for density estimates.
 */
export interface ContourDensity<Datum> {
    (data: Datum[]): ContourMultiPolygon[];
    x(): (d: Datum) => number;
    x(x: (d: Datum) => number): this;
    y(): (d: Datum) => number;
    y(y: (d: Datum) => number): this;
    size(): [number, number];
    size(size: [number, number]): this;
    cellSize(): number;
    cellSize(cellSize: number): this;
    thresholds(): ThresholdCountGenerator | ThresholdArrayGenerator<number>;
    thresholds(count: number): this;
    thresholds(thresholds: number[]): this;
    thresholds(thresholds: ThresholdCountGenerator): this;
    thresholds(thresholds: ThresholdArrayGenerator<number>): this;
    bandwidth(): number;
    bandwidth(bandwidth: number): this;
}

/**
 * Construct a new density estimator with the default settings.
 */
export function contourDensity(): ContourDensity<[number, number]>;
/**
 * Construct a new density estimator with the default settings.
 */
export function contourDensity<Datum>(): ContourDensity<Datum>;
