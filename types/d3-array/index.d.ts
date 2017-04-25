// Type definitions for D3JS d3-array module 1.2
// Project: https://github.com/d3/d3-array
// Definitions by: Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>, Tom Wanzek <https://github.com/tomwanzek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Last module patch version validated against: 1.2.0

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
export interface Numeric {
    valueOf(): number;
}

// --------------------------------------------------------------------------------------
// Descriptive Statistics
// --------------------------------------------------------------------------------------

/**
 * Return the maximum value in the array of strings using natural order.
 */
export function max(array: string[]): string | undefined;

/**
 * Return the maximum value in the array of numbers using natural order.
 */
export function max<T extends Numeric>(array: T[]): T | undefined;

/**
 * Return the maximum value in the array using natural order and a projection function to map values to strings.
 */
export function max<T>(array: T[], accessor: (datum: T, index: number, array: T[]) => string | undefined | null): string | undefined;

/**
 * Return the maximum value in the array using natural order and a projection function to map values to easily-sorted values.
 */
export function max<T, U extends Numeric>(array: T[], accessor: (datum: T, index: number, array: T[]) => U | undefined | null): U | undefined;

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
export function min<T>(array: T[], accessor: (datum: T, index: number, array: T[]) => string | undefined | null): string | undefined;

/**
 * Return the minimum value in the array using natural order.
 */
export function min<T, U extends Numeric>(array: T[], accessor: (datum: T, index: number, array: T[]) => U | undefined | null): U | undefined;

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
export function extent<T>(array: T[], accessor: (datum: T, index: number, array: T[]) => string | undefined | null): [string, string] | [undefined, undefined];

/**
 * Return the min and max simultaneously.
 */
export function extent<T, U extends Numeric>(array: T[], accessor: (datum: T, index: number, array: T[]) => U | undefined | null): [U, U] | [undefined, undefined];

/**
 * Return the mean of an array of numbers
 */
export function mean<T extends Numeric>(array: Array<T | undefined | null>): number | undefined;
export function mean<T>(array: T[], accessor: (datum: T, index: number, array: T[]) => number | undefined | null): number | undefined;

/**
 * Return the median of an array of numbers
 */
export function median<T extends Numeric>(array: Array<T | undefined | null>): number | undefined;
export function median<T>(array: T[], accessor: (element: T, i: number, array: T[]) => number | undefined | null): number | undefined;

/**
 * Returns the p-quantile of an array of numbers
 */
export function quantile<T extends Numeric>(array: Array<T | undefined | null>, p: number): number | undefined;
export function quantile<T>(array: T[], p: number, accessor: (element: T, i: number, array: T[]) => number | undefined | null): number | undefined;

/**
 * Compute the sum of an array of numbers.
 */
export function sum<T extends Numeric>(array: Array<T | undefined | null>): number;

/**
 * Compute the sum of an array, using the given accessor to convert values to numbers.
 */
export function sum<T>(array: T[], accessor: (datum: T, index: number, array: T[]) => number | undefined | null): number;

/**
 * Compute the standard deviation, defined as the square root of the bias-corrected variance, of the given array of numbers.
 */
export function deviation<T extends Numeric>(array: Array<T | undefined | null>): number | undefined;

/**
 * Compute the standard deviation, defined as the square root of the bias-corrected variance, of the given array,
 * using the given accessor to convert values to numbers.
 */
export function deviation<T>(array: T[], accessor: (datum: T, index: number, array: T[]) => number | undefined | null): number | undefined;

/**
 * Compute an unbiased estimator of the population variance of the given array of numbers.
 */
export function variance<T extends Numeric>(array: Array<T | undefined | null>): number | undefined;

/**
 * Compute an unbiased estimator of the population variance of the given array,
 * using the given accessor to convert values to numbers.
 */
export function variance<T>(array: T[], accessor: (datum: T, index: number, array: T[]) => number | undefined | null): number | undefined;

// --------------------------------------------------------------------------------------
// Searching Arrays
// --------------------------------------------------------------------------------------

export function scan(array: number[], comparator?: (a: number, b: number) => number): number | undefined;
export function scan<T>(array: T[], comparator: (a: T, b: T) => number): number | undefined;

export function bisectLeft(array: number[], x: number, lo?: number, hi?: number): number;
export function bisectLeft(array: string[], x: string, lo?: number, hi?: number): number;
export function bisectLeft(array: Date[], x: Date, lo?: number, hi?: number): number;

export function bisectRight(array: number[], x: number, lo?: number, hi?: number): number;
export function bisectRight(array: string[], x: string, lo?: number, hi?: number): number;
export function bisectRight(array: Date[], x: Date, lo?: number, hi?: number): number;

export const bisect: typeof bisectRight;

export interface Bisector<T, U> {
    left(array: T[], x: U, lo?: number, hi?: number): number;
    right(array: T[], x: U, lo?: number, hi?: number): number;
}

export function bisector<T, U>(comparator: (a: T, b: U) => number): Bisector<T, U>;
export function bisector<T, U>(accessor: (x: T) => U): Bisector<T, U>;

// NB. this is limited to primitive values due to D3's use of the <, >, and >= operators. Results get weird for object instances.
/**
 * Compares two primitive values for sorting (in ascending order).
 */
export function ascending(a: Primitive | undefined, b: Primitive | undefined): number;

// NB. this is limited to primitive values due to D3's use of the <, >, and >= operators. Results get weird for object instances.
/**
 * Compares two primitive values for sorting (in ascending order).
 */
export function descending(a: Primitive | undefined, b: Primitive | undefined): number;

// --------------------------------------------------------------------------------------
// Transforming Arrays
// --------------------------------------------------------------------------------------

/**
 * Returns the Cartesian product of the two arrays a and b.
 * For each element i in the specified array a and each element j in the specified array b, in order,
 * it creates a two-element array for each pair.
 *
 * @param a First input array.
 * @param b Second input array.
 */
export function cross<S, T>(a: S[], b: T[]): Array<[S, T]>;

/**
 * Returns the Cartesian product of the two arrays a and b.
 * For each element i in the specified array a and each element j in the specified array b, in order,
 * invokes the specified reducer function passing the element i and element j.
 *
 * @param a First input array.
 * @param b Second input array.
 * @param reducer A reducer function taking as input an element from "a" and "b" and returning a reduced value.
 */
export function cross<S, T, U>(a: S[], b: T[], reducer: (a: S, b: T) => U): U[];

/**
 * Merges the specified arrays into a single array.
 */
export function merge<T>(arrays: T[][]): T[];

/**
 * For each adjacent pair of elements in the specified array, returns a new array of tuples of elements i and i - 1.
 * Returns the empty array if the input array has fewer than two elements.
 *
 * @param array Array of input elements
 */
export function pairs<T>(array: T[]): Array<[T, T]>;
/**
 * For each adjacent pair of elements in the specified array, in order, invokes the specified reducer function passing the element i and element i - 1.
 * Returns the resulting array of pair-wise reduced elements.
 * Returns the empty array if the input array has fewer than two elements.
 *
 * @param array Array of input elements
 * @param reducer A reducer function taking as input to adjecent elements of the input array and returning a reduced value.
 */
export function pairs<T, U>(array: T[], reducer: (a: T, b: T) => U): U[];

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
 * Each value is a power of ten multiplied by 1, 2 or 5. See also d3.tickIncrement, d3.tickStep and linear.ticks.
 *
 * Ticks are inclusive in the sense that they may include the specified start and stop values if (and only if) they are exact,
 * nicely-rounded values consistent with the inferred step. More formally, each returned tick t satisfies start ≤ t and t ≤ stop.
 *
 * @param start Start value for ticks
 * @param stop Stop value for ticks
 * @param count count + 1 is the approximate number of ticks to be returned by d3.ticks.
 */
export function ticks(start: number, stop: number, count: number): number[];

/**
 * Returns the difference between adjacent tick values if the same arguments were passed to d3.ticks:
 * a nicely-rounded value that is a power of ten multiplied by 1, 2 or 5.
 *
 * Like d3.tickStep, except requires that start is always less than or equal to step, and if the tick step for the given start,
 * stop and count would be less than one, returns the negative inverse tick step instead.
 *
 * This method is always guaranteed to return an integer, and is used by d3.ticks to avoid guarantee that the returned tick values
 * are represented as precisely as possible in IEEE 754 floating point.
 *
 * @param start Start value for ticks
 * @param stop Stop value for ticks
 * @param count count + 1 is the approximate number of ticks to be returned by d3.ticks.
 */
export function tickIncrement(start: number, stop: number, count: number): number;

/**
 * Returns the difference between adjacent tick values if the same arguments were passed to d3.ticks:
 * a nicely-rounded value that is a power of ten multiplied by 1, 2 or 5.
 *
 * Note that due to the limited precision of IEEE 754 floating point, the returned value may not be exact decimals;
 * use d3-format to format numbers for human consumption.
 *
 * @param start Start value for ticks
 * @param stop Stop value for ticks
 * @param count count + 1 is the approximate number of ticks to be returned by d3.ticks.
 */
export function tickStep(start: number, stop: number, count: number): number;

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

export interface Bin<Datum, Value extends number | Date> extends Array<Datum> {
    x0: Value;
    x1: Value;
}

/**
 * Type definition for threshold generator which returns the count of recommended thresholds
 */
export type ThresholdCountGenerator = (values: number[], min?: number, max?: number) => number;

/**
 * Type definition for threshold generator which returns an array of recommended thresholds
 */
export type ThresholdArrayGenerator<Value extends number | Date> = (values: Value[], min?: Value, max?: Value) => Value[];

export interface HistogramGenerator<Datum, Value extends number | Date> {
    (data: Datum[]): Array<Bin<Datum, Value>>;
    value(): (d: Datum, i: number, data: Datum[]) => Value;
    value(valueAccessor: (d: Datum, i: number, data: Datum[]) => Value): this;
    domain(): (values: Value[]) => [Value, Value];
    domain(domain: [Value, Value]): this;
    domain(domainAccessor: (values: Value[]) => [Value, Value]): this;
    thresholds(): ThresholdCountGenerator | ThresholdArrayGenerator<Value>;
    /**
     * Divide the domain uniformly into approximately count bins. IMPORTANT: This threshold
     * setting approach only works, when the materialized values are numbers!
     *
     * Any threshold values outside the domain are ignored. The first bin.x0 is always equal to the minimum domain value,
     * and the last bin.x1 is always equal to the maximum domain value.
     *
     * @param count The desired number of uniform bins.
     */
    thresholds(count: number): this;
    /**
     * Set a threshold accessor function, which returns the desired number of bins.
     * Divides the domain uniformly into approximately count bins. IMPORTANT: This threshold
     * setting approach only works, when the materialized values are numbers!
     *
     * Any threshold values outside the domain are ignored. The first bin.x0 is always equal to the minimum domain value,
     * and the last bin.x1 is always equal to the maximum domain value.
     *
     * @param count A function which accepts as arguments the array of materialized values, and
     * optionally the domain minimum and maximum. The function calcutates and returns the suggested
     * number of bins.
     */
    thresholds(count: ThresholdCountGenerator): this;
    /**
     * Set the array of values to be used as thresholds in determining the bins.
     *
     * Any threshold values outside the domain are ignored. The first bin.x0 is always equal to the minimum domain value,
     * and the last bin.x1 is always equal to the maximum domain value.
     *
     * @param thresholds Array of threshold values used for binning. The elements must
     * be of the same type as the materialized values of the histogram.
     */
    thresholds(thresholds: Value[]): this;
    /**
     * Set a threshold accessor function, which returns the array of values to be used as
     * thresholds in determining the bins.
     *
     * Any threshold values outside the domain are ignored. The first bin.x0 is always equal to the minimum domain value,
     * and the last bin.x1 is always equal to the maximum domain value.
     *
     * @param thresholds A function which accepts as arguments the array of materialized values, and
     * optionally the domain minimum and maximum. The function calcutates and returns the array of values to be used as
     * thresholds in determining the bins.
     */
    thresholds(thresholds: ThresholdArrayGenerator<Value>): this;
}

export function histogram(): HistogramGenerator<number, number>;
export function histogram<Datum, Value extends number | Date>(): HistogramGenerator<Datum, Value>;

// --------------------------------------------------------------------------------------
// Histogram Thresholds
// --------------------------------------------------------------------------------------

export function thresholdFreedmanDiaconis(values: number[], min: number, max: number): number; // of type ThresholdCountGenerator

export function thresholdScott(values: number[], min: number, max: number): number; // of type ThresholdCountGenerator

export function thresholdSturges(values: number[]): number; // of type ThresholdCountGenerator
