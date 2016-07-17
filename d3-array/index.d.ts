// Type definitions for D3JS d3-array module
// Project: https://github.com/d3/d3-array
// Definitions by: Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>, Tom Wanzek <https://github.com/tomwanzek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// --------------------------------------------------------------------------
// Shared Types and Interfaces
// --------------------------------------------------------------------------


/**
 * Administrivia: JavaScript primitive types and Date
 */
export type Primitive = number | string | boolean | Date;

/**
 * Administrivia: anything with a valueOf(): number method is comparable, so we allow it in numeric operations
 */
interface Numeric {
    valueOf(): number;
}


// --------------------------------------------------------------------------------------
// Descriptive Statistics
// --------------------------------------------------------------------------------------


/**
 * Return the maximum value in the array of numbers using natural order.
 */
export function max(array: number[]): number | undefined;

/**
 * Return the maximum value in the array of strings using natural order.
 */
export function max(array: string[]): string | undefined;

/**
 * Return the maximum value in the array of numbers using natural order.
 */
export function max<T extends Numeric>(array: T[]): T | undefined;

/**
 * Return the maximum value in the array using natural order and a projection function to map values to numbers.
 */
export function max<T>(array: T[], accessor: (datum: T, index: number, array: T[]) => number): number | undefined;

/**
 * Return the maximum value in the array using natural order and a projection function to map values to strings.
 */
export function max<T>(array: T[], accessor: (datum: T, index: number, array: T[]) => string): string | undefined;

/**
 * Return the maximum value in the array using natural order and a projection function to map values to easily-sorted values.
 */
export function max<T, U extends Numeric>(array: T[], accessor: (datum: T, index: number, array: T[]) => U): U | undefined;

/**
 * Return the minimum value in the array using natural order.
 */
export function min(array: number[]): number | undefined;

/**
 * Return the minimum value in the array using natural order.
 */
export function min(array: string[]): string | undefined;

/**
 * Return the minimum value in the array using natural order.
 */
export function min<T extends Numeric>(array: T[]): T | undefined;

/**
 * Return the minimum value in the array using natural order.
 */
export function min<T>(array: T[], accessor: (datum: T, index: number, array: T[]) => number): number | undefined;

/**
 * Return the minimum value in the array using natural order.
 */
export function min<T>(array: T[], accessor: (datum: T, index: number, array: T[]) => string): string | undefined;

/**
 * Return the minimum value in the array using natural order.
 */
export function min<T, U extends Numeric>(array: T[], accessor: (datum: T, index: number, array: T[]) => U): U | undefined;



/**
 * Return the min and max simultaneously.
 */
export function extent(array: number[]): [number, number] | [undefined, undefined];

/**
 * Return the min and max simultaneously.
 */
export function extent(array: string[]): [string, string] | [undefined, undefined];

/**
 * Return the min and max simultaneously.
 */
export function extent<T extends Numeric>(array: T[]): [T, T] | [undefined, undefined];

/**
 * Return the min and max simultaneously.
 */
export function extent<T extends Numeric>(array: Array<T | Primitive>): [T | Primitive, T | Primitive] | [undefined, undefined];

/**
 * Return the min and max simultaneously.
 */
export function extent<T>(array: T[], accessor: (datum: T, index: number, array: T[]) => number): [number, number] | [undefined, undefined];

/**
 * Return the min and max simultaneously.
 */
export function extent<T>(array: T[], accessor: (datum: T, index: number, array: T[]) => string): [string, string] | [undefined, undefined];

/**
 * Return the min and max simultaneously.
 */
export function extent<T, U extends Numeric>(array: T[], accessor: (datum: T, index: number, array: T[]) => U): [U | Primitive, U | Primitive] | [undefined, undefined];

/**
 * Return the mean of an array of numbers
 */
export function mean(array: number[]): number | undefined;
export function mean<T>(array: T[], accessor: (datum: T, index: number, array: T[]) => number): number | undefined;

/**
 * Return the median of an array of numbers
 */
export function median(array: number[]): number | undefined;
export function median<T>(array: T[], accessor: (element: T, i: number, array: T[]) => number): number | undefined;

/**
 * Returns the p-quantile of an array of numbers
 */
export function quantile(array: number[], p: number): number | undefined;
export function quantile<T>(array: T[], p: number, accessor: (element: T, i: number, array: T[]) => number): number | undefined;

/**
 * Compute the sum of an array of numbers.
 */
export function sum(array: number[]): number;

/**
 * Compute the sum of an array, using the given accessor to convert values to numbers.
 */
export function sum<T>(array: T[], accessor: (datum: T, index: number, array: T[]) => number): number;

/**
 * Compute the standard deviation, defined as the square root of the bias-corrected variance, of the given array of numbers.
 */
export function deviation(array: number[]): number | undefined;

/**
 * Compute the standard deviation, defined as the square root of the bias-corrected variance, of the given array, 
 * using the given accessor to convert values to numbers.
 */
export function deviation<T>(array: T[], accessor: (datum: T, index: number, array: T[]) => number): number | undefined;

/**
 * Compute an unbiased estimator of the population variance of the given array of numbers.
 */
export function variance(array: number[]): number | undefined;

/**
 * Compute an unbiased estimator of the population variance of the given array,
 * using the given accessor to convert values to numbers.
 */
export function variance<T>(array: T[], accessor: (datum: T, index: number, array: T[]) => number): number | undefined;


// --------------------------------------------------------------------------------------
// Searching Arrrays
// --------------------------------------------------------------------------------------

export function scan<T>(array: T[], comparator: (a: T, b: T) => number): number;

export function bisectLeft(array: number[], x: number, lo?: number, hi?: number): number;
export function bisectLeft(array: string[], x: string, lo?: number, hi?: number): number;

export var bisect: typeof bisectRight;

export function bisectRight<T>(array: T[], x: T, lo?: number, hi?: number): number;

export function bisector<T, U>(accessor: (x: T) => U): {
    left: (array: T[], x: U, lo?: number, hi?: number) => number;
    right: (array: T[], x: U, lo?: number, hi?: number) => number;
}

export function bisector<T, U>(comparator: (a: T, b: U) => number): {
    left: (array: T[], x: U, lo?: number, hi?: number) => number;
    right: (array: T[], x: U, lo?: number, hi?: number) => number;
}

// NB. this is limited to primitive values due to D3's use of the <, >, and >= operators. Results get weird for object instances.
/**
 * Compares two primitive values for sorting (in ascending order).
 */
export function ascending(a: Primitive, b: Primitive): number;

// NB. this is limited to primitive values due to D3's use of the <, >, and >= operators. Results get weird for object instances.
/**
 * Compares two primitive values for sorting (in ascending order).
 */
export function descending(a: Primitive, b: Primitive): number;

// --------------------------------------------------------------------------------------
// Transforming  Arrays
// --------------------------------------------------------------------------------------


/**
 * Merges the specified arrays into a single array.
 */
export function merge<T>(arrays: T[][]): T[];

/**
 * For each adjacent pair of elements in the specified array, returns a new array of tuples of elements i and i - 1.
 * Returns the empty array if the input array has fewer than two elements.
 */
export function pairs<T>(array: T[]): Array<[T, T]>;

/**
 * Given the specified array, return an array corresponding to the list of indices in 'keys'.
 */
export function permute<T>(array: { [key: number]: T }, keys: number[]): T[];

/**
 * Given the specified object, return an array corresponding to the list of property names in 'keys'.
 */
export function permute<T>(object: { [key: string]: T }, keys: string[]): T[];


/**
 * Generates a 0-based numeric sequence. The output range does not include 'stop'.
 */
export function range(stop: number): number[];

/**
 * Generates a numeric sequence starting from the given start and stop values. 'step' defaults to 1. The output range does not include 'stop'.
 */
export function range(start: number, stop: number, step?: number): number[];


/**
 * Randomizes the order of the specified array using the Fisher–Yates shuffle.
 */
export function shuffle<T>(array: T[], lo?: number, hi?: number): T[];

/**
 * Generate an array of approximately count + 1 uniformly-spaced, nicely-rounded values between start and stop (inclusive). 
 */
export function ticks(start: number, stop: number, count: number): number[];

/**
 * Generate an array of with the differences between adjecent ticks, had the same arguments
 * been passed to ticks(start, stop, count)
 */
export function tickStep(start: number, stop: number, count: number): number[];


/**
 * Transpose a matrix provided in Array of Arrays format.
 */
export function transpose<T>(matrix: T[][]): T[][];


/**
 * Returns an array of arrays, where the ith array contains the ith element from each of the argument arrays.
 * The returned array is truncated in length to the shortest array in arrays. If arrays contains only a single array, the returned array 
 * contains one-element arrays. With no arguments, the returned array is empty.
 */
export function zip<T>(...arrays: T[][]): T[][];

// --------------------------------------------------------------------------------------
// Histogram
// --------------------------------------------------------------------------------------

export interface Bin<T> extends Array<T> {
    x0: number;
    x1: number;
}

/**
 * Type definition for threshold generator which returns the count of recommended thresholds
 */
export type ThresholdCountGenerator = (values: number[], min?: number, max?: number) => number;

/**
 * Type definition for threshold generator which returns an array of recommended thresholds
 */
export type ThresholdArrayGenerator = (values: number[], min?: number, max?: number) => number[];



export interface HistogramGenerator<T> {
    (data: T[]): Array<Bin<T>>;
    value(): (d: T, i: number, data: T[]) => number;
    value(valueAccessor: (d: T, i: number, data: T[]) => number): HistogramGenerator<T>;
    domain(): (values: number[]) => [number, number];
    domain(domainAccessor: (values: number[]) => [number, number]): HistogramGenerator<T>;
    thresholds(): ThresholdCountGenerator | ThresholdArrayGenerator;
    thresholds(count: number): HistogramGenerator<T>;
    thresholds(thresholds: number[]): HistogramGenerator<T>;
    thresholds(thresholds: ThresholdCountGenerator): HistogramGenerator<T>;
    thresholds(thresholds: ThresholdArrayGenerator): HistogramGenerator<T>;
}

export function histogram(): HistogramGenerator<number>;
export function histogram<T>(): HistogramGenerator<T>;

// --------------------------------------------------------------------------------------
// Histogram Thresholds
// --------------------------------------------------------------------------------------

export function thresholdFreedmanDiaconis(values: number[], min: number, max: number): number; // of type ThresholdCountGenerator

export function thresholdScott(values: number[], min: number, max: number): number; // of type ThresholdCountGenerator

export function thresholdSturges(values: number[]): number; // of type ThresholdCountGenerator

