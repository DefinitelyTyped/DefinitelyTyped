// Type definitions for D3JS d3-array module 2.5
// Project: https://github.com/d3/d3-array, https://d3js.org/d3-array
// Definitions by: Alex Ford <https://github.com/gustavderdrache>
//                 Boris Yankov <https://github.com/borisyankov>
//                 Tom Wanzek <https://github.com/tomwanzek>
//                 denisname <https://github.com/denisname>
//                 Hugues Stefanski <https://github.com/ledragon>
//                 Nathan Bierema <https://github.com/Methuselah96>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

// Last module patch version validated against: 2.5.1

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
 * Return the minimum value in the array using natural order.
 */
export function min(iterable: Iterable<string>): string | undefined;

/**
 * Return the minimum value in the array using natural order.
 */
export function min<T extends Numeric>(iterable: Iterable<T>): T | undefined;
/**
 * Return the minimum value in the array using natural order.
 */
export function min<T>(
    iterable: Iterable<T>,
    accessor: (datum: T, index: number, array: Iterable<T>) => string | undefined | null
): string | undefined;
/**
 * Return the minimum value in the array using natural order.
 */
export function min<T, U extends Numeric>(
    iterable: Iterable<T>,
    accessor: (datum: T, index: number, array: Iterable<T>) => U | undefined | null
): U | undefined;

/**
 * Return the index of the minimum value in the array using natural order.
 */
export function minIndex<T>(iterable: Iterable<T>): number;
/**
 * Return the index of the minimum value in the array using natural order and a projection function to map values.
 */
export function minIndex<TDatum, U>(
    iterable: Iterable<TDatum>,
    accessor: (datum: TDatum, index: number, array: Iterable<TDatum>) => U | undefined | null
): number;
/**
 * Return the index of the minimum value in the array using natural order.
 */
export function minIndex<T>(iterable: Iterable<T>): number;

/**
 * Return the maximum value in the array of strings using natural order.
 */
export function max(iterable: Iterable<string>): string | undefined;
/**
 * Return the maximum value in the array of numbers using natural order.
 */
export function max<T extends Numeric>(iterable: Iterable<T>): T | undefined;
/**
 * Return the maximum value in the array using natural order and a projection function to map values to strings.
 */
export function max<T>(
    iterable: Iterable<T>,
    accessor: (datum: T, index: number, array: Iterable<T>) => string | undefined | null
): string | undefined;
/**
 * Return the maximum value in the array using natural order and a projection function to map values to easily-sorted values.
 */
export function max<T, U extends Numeric>(
    iterable: Iterable<T>,
    accessor: (datum: T, index: number, array: Iterable<T>) => U | undefined | null
): U | undefined;

/**
 * Return the index of the maximum value in the array using natural order.
 */
export function maxIndex<T>(iterable: Iterable<T>): number;
/**
 * Return the index of the maximum value in the array using natural order and a projection function to map values.
 */
export function maxIndex<TDatum, U>(
    iterable: Iterable<TDatum>,
    accessor: (datum: TDatum, index: number, array: Iterable<TDatum>) => U | undefined | null
): number;

/**
 * Return the min and max simultaneously.
 */
export function extent(iterable: Iterable<string>): [string, string] | [undefined, undefined];
/**
 * Return the min and max simultaneously.
 */
export function extent<T extends Numeric>(iterable: Iterable<T>): [T, T] | [undefined, undefined];
/**
 * Return the min and max simultaneously.
 */
export function extent<T>(
    iterable: Iterable<T>,
    accessor: (datum: T, index: number, array: Iterable<T>) => string | undefined | null
): [string, string] | [undefined, undefined];
/**
 * Return the min and max simultaneously.
 */
export function extent<T, U extends Numeric>(
    iterable: Iterable<T>,
    accessor: (datum: T, index: number, array: Iterable<T>) => U | undefined | null
): [U, U] | [undefined, undefined];

/**
 * Compute the sum of an array of numbers.
 */
export function sum<T extends Numeric>(iterable: Iterable<T | undefined | null>): number;
/**
 * Compute the sum of an array, using the given accessor to convert values to numbers.
 */
export function sum<T>(
    iterable: Iterable<T>,
    accessor: (datum: T, index: number, array: Iterable<T>) => number | undefined | null
): number;

/**
 * Return the mean of an array of numbers
 */
export function mean<T extends Numeric>(iterable: Iterable<T | undefined | null>): number | undefined;
/**
 * Return the mean of an array of numbers
 */
export function mean<T>(
    iterable: Iterable<T>,
    accessor: (datum: T, index: number, array: Iterable<T>) => number | undefined | null
): number | undefined;

/**
 * Return the median of an array of numbers
 */
export function median<T extends Numeric>(iterable: Iterable<T | undefined | null>): number | undefined;
/**
 * Return the median of an array of numbers
 */
export function median<T>(
    iterable: Iterable<T>,
    accessor: (element: T, i: number, array: Iterable<T>) => number | undefined | null
): number | undefined;

/**
 * Returns the cumulative sum of the given iterable of numbers, as a Float64Array of the same length.
 * If the iterable contains no numbers, returns zeros.
 * An optional accessor function may be specified, which is equivalent to calling Array.from before computing the cumulative sum.
 * This method ignores undefined and NaN values; this is useful for ignoring missing data.
 */
export function cumsum<T extends Numeric>(iterable: Iterable<T | undefined | null>): Float64Array;
/**
 * Returns the cumulative sum of the given iterable of numbers, as a Float64Array of the same length.
 * If the iterable contains no numbers, returns zeros.
 * An optional accessor function may be specified, which is equivalent to calling Array.from before computing the cumulative sum.
 * This method ignores undefined and NaN values; this is useful for ignoring missing data.
 */
export function cumsum<T>(
    iterable: Iterable<T>,
    accessor: (element: T, i: number, array: Iterable<T>) => number | undefined | null
): Float64Array;

/**
 * Returns the p-quantile of the given iterable of numbers, where p is a number in the range [0, 1].
 *
 * An optional accessor function may be specified, which is equivalent to calling array.map(accessor) before computing the quantile.
 */
export function quantile<T extends Numeric>(iterable: Iterable<T | undefined | null>, p: number): number | undefined;
/**
 * Returns the p-quantile of the given iterable of numbers, where p is a number in the range [0, 1].
 *
 * An optional accessor function may be specified, which is equivalent to calling array.map(accessor) before computing the quantile.
 */
export function quantile<T>(
    iterable: Iterable<T>,
    p: number,
    accessor: (element: T, i: number, array: Iterable<T>) => number | undefined | null
): number | undefined;

/**
 * Similar to quantile, but expects the input to be a sorted array of values.
 * In contrast with quantile, the accessor is only called on the elements needed to compute the quantile.
 */
export function quantileSorted<T extends Numeric>(
    array: Array<T | undefined | null>,
    p: number
): number | undefined;
/**
 * Similar to quantile, but expects the input to be a sorted array of values.
 * In contrast with quantile, the accessor is only called on the elements needed to compute the quantile.
 */
export function quantileSorted<T>(
    array: T[],
    p: number,
    accessor: (element: T, i: number, array: T[]) => number | undefined | null
): number | undefined;

/**
 * Returns an unbiased estimator of the population variance of the given iterable of numbers using Welford’s algorithm.
 * If the iterable has fewer than two numbers, returns undefined.
 * An optional accessor function may be specified, which is equivalent to calling Array.from before computing the variance.
 * This method ignores undefined and NaN values; this is useful for ignoring missing data.
 */
export function variance<T extends Numeric>(iterable: Iterable<T | undefined | null>): number | undefined;
/**
 * Returns an unbiased estimator of the population variance of the given iterable of numbers using Welford’s algorithm.
 * If the iterable has fewer than two numbers, returns undefined.
 * An optional accessor function may be specified, which is equivalent to calling Array.from before computing the variance.
 * This method ignores undefined and NaN values; this is useful for ignoring missing data.
 */
export function variance<T>(
    iterable: Iterable<T>,
    accessor: (datum: T, index: number, array: Iterable<T>) => number | undefined | null
): number | undefined;

/**
 * Compute the standard deviation, defined as the square root of the bias-corrected variance, of the given array of numbers.
 */
export function deviation<T extends Numeric>(iterable: Iterable<T | undefined | null>): number | undefined;
/**
 * Compute the standard deviation, defined as the square root of the bias-corrected variance, of the given array,
 * using the given accessor to convert values to numbers.
 */
export function deviation<T>(
    iterable: Iterable<T>,
    accessor: (datum: T, index: number, array: Iterable<T>) => number | undefined | null
): number | undefined;

/**
 * Returns a full precision summation of the given values.
 * Although slower, d3.fsum can replace d3.sum wherever greater precision is needed. Uses d3.Adder.
 */
export function fsum<T extends Numeric>(values: Iterable<T | undefined | null>): number;
/**
 * Returns a full precision summation of the given values.
 * Although slower, d3.fsum can replace d3.sum wherever greater precision is needed. Uses d3.Adder.
 */
export function fsum<T>(
    values: Iterable<T>,
    accessor: (datum: T, index: number, array: Iterable<T>) => number | undefined | null
): number;

export class Adder {
    /**
     * Creates a full precision adder for IEEE 754 floating point numbers, setting its initial value to 0.
     */
    constructor();

    /**
     * Adds the specified number to the adder’s current value and returns the adder.
     */
    add(number: number): Adder;

    /**
     * Returns the IEEE 754 double precision representation of the adder’s current value.
     * Most useful as the short-hand notation +adder.
     */
    valueOf(): number;
}

// --------------------------------------------------------------------------------------
// Searching Arrays
// --------------------------------------------------------------------------------------

/**
 * Returns the least element of the specified iterable.
 */
export function least<T>(iterable: Iterable<T>): T | undefined;
/**
 * Returns the least element of the specified iterable according to the specified comparator.
 */
export function least<T>(iterable: Iterable<T>, comparator: (a: T, b: T) => number): T | undefined;
/**
 * Returns the least element of the specified iterable according to the specified accessor.
 */
export function least<T, U>(iterable: Iterable<T>, accessor: (a: T) => U): T | undefined;

/**
 * Returns the index of the least element of the specified iterable according to the specified comparator.
 */
export function leastIndex<T>(iterable: Iterable<T>): number | undefined;
/**
 * Returns the index of the least element of the specified iterable according to the specified comparator.
 */
export function leastIndex<T>(iterable: Iterable<T>, comparator: (a: T, b: T) => number): number | undefined;
/**
 * Returns the index of the least element of the specified iterable according to the specified accessor.
 */
export function leastIndex<T, U>(iterable: Iterable<T>, accessor: (a: T) => U): number | undefined;

/**
 * Returns the greatest element of the specified iterable according to the specified comparator or accessor.
 * If the given iterable contains no comparable elements (i.e., the comparator returns NaN when comparing each element to itself), returns undefined.
 * If comparator is not specified, it defaults to ascending.
 */
export function greatest<T>(iterable: Iterable<T>): T | undefined;
/**
 * Returns the greatest element of the specified iterable according to the specified comparator or accessor.
 * If the given iterable contains no comparable elements (i.e., the comparator returns NaN when comparing each element to itself), returns undefined.
 * If comparator is not specified, it defaults to ascending.
 */
export function greatest<T>(iterable: Iterable<T>, comparator: (a: T, b: T) => number): T | undefined;
/**
 * Returns the greatest element of the specified iterable according to the specified comparator or accessor.
 * If the given iterable contains no comparable elements (i.e., the comparator returns NaN when comparing each element to itself), returns undefined.
 * If comparator is not specified, it defaults to ascending.
 */
export function greatest<T, U>(iterable: Iterable<T>, accessor: (a: T) => U): T | undefined;

/**
 * Returns the index of the greatest element of the specified iterable according to the specified comparator or accessor.
 * If the given iterable contains no comparable elements (i.e., the comparator returns NaN when comparing each element to itself), returns -1.
 * If comparator is not specified, it defaults to ascending.
 */
export function greatestIndex<T>(iterable: Iterable<T>): number | undefined;
/**
 * Returns the index of the greatest element of the specified iterable according to the specified comparator or accessor.
 * If the given iterable contains no comparable elements (i.e., the comparator returns NaN when comparing each element to itself), returns -1.
 * If comparator is not specified, it defaults to ascending.
 */
export function greatestIndex<T>(iterable: Iterable<T>, comparator: (a: T, b: T) => number): number | undefined;
/**
 * Returns the index of the greatest element of the specified iterable according to the specified comparator or accessor.
 * If the given iterable contains no comparable elements (i.e., the comparator returns NaN when comparing each element to itself), returns -1.
 * If comparator is not specified, it defaults to ascending.
 */
export function greatestIndex<T, U>(iterable: Iterable<T>, accessor: (a: T) => U): number | undefined;

export function bisectLeft(array: ArrayLike<number>, x: number, lo?: number, hi?: number): number;
export function bisectLeft(array: ArrayLike<string>, x: string, lo?: number, hi?: number): number;
export function bisectLeft(array: ArrayLike<Date>, x: Date, lo?: number, hi?: number): number;

export function bisectRight(array: ArrayLike<number>, x: number, lo?: number, hi?: number): number;
export function bisectRight(array: ArrayLike<string>, x: string, lo?: number, hi?: number): number;
export function bisectRight(array: ArrayLike<Date>, x: Date, lo?: number, hi?: number): number;

export const bisect: typeof bisectRight;

export interface Bisector<T, U> {
    left(array: ArrayLike<T>, x: U, lo?: number, hi?: number): number;
    right(array: ArrayLike<T>, x: U, lo?: number, hi?: number): number;
}

export function bisector<T, U>(comparator: (a: T, b: U) => number): Bisector<T, U>;
export function bisector<T, U>(accessor: (x: T) => U): Bisector<T, U>;

/**
 * Rearranges items so that all items in the [left, k] are the smallest. The k-th element will have the (k - left + 1)-th smallest value in [left, right].
 *
 * @param array The array to partially sort (in place).
 * @param k The middle index for partial sorting.
 */
export function quickselect<T>(array: ArrayLike<T>, k: number): T[];
/**
 * Rearranges items so that all items in the [left, k] are the smallest. The k-th element will have the (k - left + 1)-th smallest value in [left, right].
 *
 * @param array The array to partially sort (in place).
 * @param k The middle index for partial sorting.
 * @param left The left index of the range to sort.
 */
export function quickselect<T>(array: ArrayLike<T>, k: number, left: number): T[];
/**
 * Rearranges items so that all items in the [left, k] are the smallest. The k-th element will have the (k - left + 1)-th smallest value in [left, right].
 *
 * @param array The array to partially sort (in place).
 * @param k The middle index for partial sorting.
 * @param left The left index of the range to sort.
 * @param right The right index.
 */
export function quickselect<T>(array: ArrayLike<T>, k: number, left: number, right: number): T[];
/**
 * Rearranges items so that all items in the [left, k] are the smallest. The k-th element will have the (k - left + 1)-th smallest value in [left, right].
 *
 * @param array The array to partially sort (in place).
 * @param k The middle index for partial sorting.
 * @param left The left index of the range to sort.
 * @param right The right index.
 * @param compare The compare function.
 */
export function quickselect<T>(array: ArrayLike<T>, k: number, left: number, right: number, compare: (a: Primitive | undefined, b: Primitive | undefined) => number): T[];

// NB. this is limited to primitive values due to D3's use of the <, >, and >= operators. Results get weird for object instances.
/**
 * Compares two primitive values for sorting (in ascending order).
 */
export function ascending(a: Primitive | undefined, b: Primitive | undefined): number;

// NB. this is limited to primitive values due to D3's use of the <, >, and >= operators. Results get weird for object instances.
/**
 * Compares two primitive values for sorting (in descending order).
 */
export function descending(a: Primitive | undefined, b: Primitive | undefined): number;

// --------------------------------------------------------------------------------------
// Transforming Arrays
// --------------------------------------------------------------------------------------

/**
 * Groups the specified array of values into a Map from key to array of value.
 * @param iterable The array to group.
 * @param key The key function.
 */
export function group<TObject, TKey>(iterable: Iterable<TObject>, key: (value: TObject) => TKey): Map<TKey, TObject[]>;
/**
 * Groups the specified array of values into a Map from key to array of value.
 * @param iterable The array to group.
 * @param key1 The first key function.
 * @param key2 The second key function.
 */
export function group<TObject, TKey1, TKey2>(
    iterable: Iterable<TObject>,
    key1: (value: TObject) => TKey1,
    key2: (value: TObject) => TKey2
): Map<TKey1, Map<TKey2, TObject[]>>;
/**
 * Groups the specified array of values into a Map from key to array of value.
 * @param iterable The array to group.
 * @param key1 The first key function.
 * @param key2 The second key function.
 * @param key3 The third key function.
 */
export function group<TObject, TKey1, TKey2, TKey3>(
    iterable: Iterable<TObject>,
    key1: (value: TObject) => TKey1,
    key2: (value: TObject) => TKey2,
    key3: (value: TObject) => TKey3
): Map<TKey1, Map<TKey2, Map<TKey3, TObject[]>>>;

/**
 * Equivalent to group, but returns nested arrays instead of nested maps.
 * @param iterable The array to group.
 * @param key The key function.
 */
export function groups<TObject, TKey>(
    iterable: Iterable<TObject>,
    key: (value: TObject) => TKey
): Array<[TKey, TObject[]]>;
/**
 * Equivalent to group, but returns nested arrays instead of nested maps.
 * @param iterable The array to group.
 * @param key1 The first key function.
 * @param key2 The second key function.
 */
export function groups<TObject, TKey1, TKey2>(
    iterable: Iterable<TObject>,
    key1: (value: TObject) => TKey1,
    key2: (value: TObject) => TKey2
): Array<[TKey1, Array<[TKey2, TObject[]]>]>;
/**
 * Equivalent to group, but returns nested arrays instead of nested maps.
 * @param iterable The array to group.
 * @param key1 The first key function.
 * @param key2 The second key function.
 * @param key3 The third key function.
 */
export function groups<TObject, TKey1, TKey2, TKey3>(
    iterable: Iterable<TObject>,
    key1: (value: TObject) => TKey1,
    key2: (value: TObject) => TKey2,
    key3: (value: TObject) => TKey3
): Array<[TKey1, Array<[TKey2, Array<[TKey3, TObject[]]>]>]>;

/**
 * Groups and reduces the specified array of values into a Map from key to value.
 *
 * @param iterable The array to group.
 * @param reduce The reduce function.
 * @param key The key function.
 */
export function rollup<TObject, TReduce, TKey>(
    iterable: Iterable<TObject>,
    reduce: (value: TObject[]) => TReduce,
    key: (value: TObject) => TKey
): Map<TKey, TReduce>;
/**
 * Groups and reduces the specified array of values into a Map from key to value.
 *
 * @param iterable The array to group.
 * @param reduce The reduce function.
 * @param key1 The first key function.
 * @param key2 The second key function.
 */
export function rollup<TObject, TReduce, TKey1, TKey2>(
    iterable: Iterable<TObject>,
    reduce: (value: TObject[]) => TReduce,
    key1: (value: TObject) => TKey1,
    key2: (value: TObject) => TKey2
): Map<TKey1, Map<TKey2, TReduce>>;
/**
 * Groups and reduces the specified array of values into a Map from key to value.
 *
 * @param iterable The array to group.
 * @param reduce The reduce function.
 * @param key1 The first key function.
 * @param key2 The second key function.
 * @param key3 The third key function.
 */
export function rollup<TObject, TReduce, TKey1, TKey2, TKey3>(
    iterable: Iterable<TObject>,
    reduce: (value: TObject[]) => TReduce,
    key1: (value: TObject) => TKey1,
    key2: (value: TObject) => TKey2,
    key3: (value: TObject) => TKey3
): Map<TKey1, Map<TKey2, Map<TKey3, TReduce>>>;

/**
 * Equivalent to rollup, but returns nested arrays instead of nested maps.
 *
 * @param iterable The array to group.
 * @param reduce The reduce function.
 * @param key The key function.
 */
export function rollups<TObject, TReduce, TKey>(
    iterable: Iterable<TObject>,
    reduce: (value: TObject[]) => TReduce,
    key: (value: TObject) => TKey
): Array<[TKey, TReduce]>;
/**
 * Equivalent to rollup, but returns nested arrays instead of nested maps.
 *
 * @param iterable The array to group.
 * @param reduce The reduce function.
 * @param key1 The first key function.
 * @param key2 The second key function.
 */
export function rollups<TObject, TReduce, TKey1, TKey2>(
    iterable: Iterable<TObject>,
    reduce: (value: TObject[]) => TReduce,
    key1: (value: TObject) => TKey1,
    key2: (value: TObject) => TKey2
): Array<[TKey1, Array<[TKey2, TReduce]>]>;
/**
 * Equivalent to rollup, but returns nested arrays instead of nested maps.
 *
 * @param iterable The array to group.
 * @param reduce The reduce function.
 * @param key1 The first key function.
 * @param key2 The second key function.
 * @param key3 The third key function.
 */
export function rollups<TObject, TReduce, TKey1, TKey2, TKey3>(
    iterable: Iterable<TObject>,
    reduce: (value: TObject[]) => TReduce,
    key1: (value: TObject) => TKey1,
    key2: (value: TObject) => TKey2,
    key3: (value: TObject) => TKey3
): Array<[TKey1, Array<[TKey2, Array<[TKey3, TReduce]>]>]>;

/**
 * Returns the number of valid number values (i.e., not null, NaN, or undefined) in the specified iterable; accepts an accessor.
 *
 * @param iterable Input array.
 */
export function count<TObject>(iterable: Iterable<TObject>): number;
/**
 * Returns the number of valid number values (i.e., not null, NaN, or undefined) in the specified iterable; accepts an accessor.
 *
 * @param iterable Input array.
 * @param accessor Accesor method.
 */
export function count<TObject>(
    iterable: Iterable<TObject>,
    accessor: (a: TObject, b: TObject) => number | null | undefined
): number;

/**
 * Returns the Cartesian product of the two arrays a and b.
 * For each element i in the specified array a and each element j in the specified array b, in order,
 * it creates a two-element array for each pair.
 *
 * @param a First input array.
 * @param b Second input array.
 */
export function cross<S, T>(a: Iterable<S>, b: Iterable<T>): Array<[S, T]>;

/**
 * Returns the Cartesian product of the two arrays a and b.
 * For each element i in the specified array a and each element j in the specified array b, in order,
 * invokes the specified reducer function passing the element i and element j.
 *
 * @param a First input array.
 * @param b Second input array.
 * @param reducer A reducer function taking as input an element from "a" and "b" and returning a reduced value.
 */
export function cross<S, T, U>(a: Iterable<S>, b: Iterable<T>, reducer: (a: S, b: T) => U): U[];

/**
 * Merges the specified arrays into a single array.
 */
export function merge<T>(iterables: Iterable<Iterable<T>>): T[];

/**
 * For each adjacent pair of elements in the specified array, returns a new array of tuples of elements i and i - 1.
 * Returns the empty array if the input array has fewer than two elements.
 *
 * @param iterable Array of input elements
 */
export function pairs<T>(iterable: Iterable<T>): Array<[T, T]>;
/**
 * For each adjacent pair of elements in the specified array, in order, invokes the specified reducer function passing the element i and element i - 1.
 * Returns the resulting array of pair-wise reduced elements.
 * Returns the empty array if the input array has fewer than two elements.
 *
 * @param iterable Array of input elements
 * @param reducer A reducer function taking as input to adjacent elements of the input array and returning a reduced value.
 */
export function pairs<T, U>(iterable: Iterable<T>, reducer: (a: T, b: T) => U): U[];

/**
 * Returns a permutation of the specified source object (or array) using the specified iterable of keys.
 * The returned array contains the corresponding property of the source object for each key in keys, in order.
 * For example, `permute(["a", "b", "c"], [1, 2, 0]) // ["b", "c", "a"]`
 *
 * It is acceptable to have more keys than source elements, and for keys to be duplicated or omitted.
 */
export function permute<T>(source: { [key: number]: T; }, keys: Iterable<number>): T[];
/**
 * Extract the values from an object into an array with a stable order. For example:
 * `var object = {yield: 27, year: 1931, site: "University Farm"};`
 * `d3.permute(object, ["site", "yield"]); // ["University Farm", 27]`
 */
export function permute<T, K extends keyof T>(source: T, keys: Iterable<K>): Array<T[K]>;

/**
 * Randomizes the order of the specified array using the Fisher–Yates shuffle.
 */
export function shuffle<T>(array: T[], lo?: number, hi?: number): T[];
export function shuffle(array: Int8Array, lo?: number, hi?: number): Int8Array;
export function shuffle(array: Uint8Array, lo?: number, hi?: number): Uint8Array;
export function shuffle(array: Uint8ClampedArray, lo?: number, hi?: number): Uint8ClampedArray;
export function shuffle(array: Int16Array, lo?: number, hi?: number): Int16Array;
export function shuffle(array: Uint16Array, lo?: number, hi?: number): Uint16Array;
export function shuffle(array: Int32Array, lo?: number, hi?: number): Int32Array;
export function shuffle(array: Uint32Array, lo?: number, hi?: number): Uint32Array;
export function shuffle(array: Float32Array, lo?: number, hi?: number): Float32Array;
export function shuffle(array: Float64Array, lo?: number, hi?: number): Float64Array;

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
 * Generates a 0-based numeric sequence. The output range does not include 'stop'.
 */
export function range(stop: number): number[];
/**
 * Generates a numeric sequence starting from the given start and stop values. 'step' defaults to 1. The output range does not include 'stop'.
 */
export function range(start: number, stop: number, step?: number): number[];

/**
 * Transpose a matrix provided in Array of Arrays format.
 */
export function transpose<T>(matrix: ArrayLike<ArrayLike<T>>): T[][];

/**
 * Returns an array of arrays, where the ith array contains the ith element from each of the argument arrays.
 * The returned array is truncated in length to the shortest array in arrays. If arrays contains only a single array, the returned array
 * contains one-element arrays. With no arguments, the returned array is empty.
 */
export function zip<T>(...arrays: Array<ArrayLike<T>>): T[][];

// --------------------------------------------------------------------------------------
// Histogram
// --------------------------------------------------------------------------------------

export interface Bin<Datum, Value extends number | Date | undefined> extends Array<Datum> {
    x0: Value | undefined;
    x1: Value | undefined;
}

/**
 * Type definition for threshold generator which returns the count of recommended thresholds
 */
export type ThresholdCountGenerator<Value extends number | undefined = number | undefined> =
    (values: ArrayLike<Value>, min: number, max: number) => number;

/**
 * Type definition for threshold generator which returns an array of recommended numbers thresholds
 */
export type ThresholdNumberArrayGenerator<Value extends number | undefined> =
    (values: ArrayLike<Value>, min: number, max: number) => Value[];

/**
 * Type definition for threshold generator which returns an array of recommended dates thresholds
 */
export type ThresholdDateArrayGenerator<Value extends Date | undefined> =
    (values: ArrayLike<Value>, min: Date, max: Date) => Value[];

export interface HistogramCommon<Datum, Value extends number | Date | undefined> {
    (data: ArrayLike<Datum>): Array<Bin<Datum, Value>>;

    value(): (d: Datum, i: number, data: ArrayLike<Datum>) => Value;
    value(valueAccessor: (d: Datum, i: number, data: ArrayLike<Datum>) => Value): this;
}

export interface HistogramGeneratorDate<Datum, Value extends Date | undefined> extends HistogramCommon<Datum, Date> {
    domain(): (values: ArrayLike<Value>) => [Date, Date];
    domain(domain: [Date, Date]): this;
    domain(domainAccessor: (values: ArrayLike<Value>) => [Date, Date]): this;

    thresholds(): ThresholdDateArrayGenerator<Value>;
    /**
     * Set the array of values to be used as thresholds in determining the bins.
     *
     * Any threshold values outside the domain are ignored. The first bin.x0 is always equal to the minimum domain value,
     * and the last bin.x1 is always equal to the maximum domain value.
     *
     * @param thresholds Array of threshold values used for binning. The elements must
     * be of the same type as the materialized values of the histogram.
     */
    thresholds(thresholds: ArrayLike<Value>): this;
    /**
     * Set a threshold accessor function, which returns the array of values to be used as
     * thresholds in determining the bins.
     *
     * Any threshold values outside the domain are ignored. The first bin.x0 is always equal to the minimum domain value,
     * and the last bin.x1 is always equal to the maximum domain value.
     *
     * @param thresholds A function which accepts as arguments the array of materialized values, and
     * optionally the domain minimum and maximum. The function calculates and returns the array of values to be used as
     * thresholds in determining the bins.
     */
    thresholds(thresholds: ThresholdDateArrayGenerator<Value>): this;
}

export interface HistogramGeneratorNumber<Datum, Value extends number | undefined> extends HistogramCommon<Datum, Value> {
    domain(): (values: Iterable<Value>) => [number, number] | [undefined, undefined];
    domain(domain: [number, number]): this;
    domain(domainAccessor: (values: Iterable<Value>) => [number, number] | [undefined, undefined]): this;

    thresholds(): ThresholdCountGenerator<Value> | ThresholdNumberArrayGenerator<Value>;
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
     * optionally the domain minimum and maximum. The function calculates and returns the suggested
     * number of bins.
     */
    thresholds(count: ThresholdCountGenerator<Value>): this;
    /**
     * Set the array of values to be used as thresholds in determining the bins.
     *
     * Any threshold values outside the domain are ignored. The first bin.x0 is always equal to the minimum domain value,
     * and the last bin.x1 is always equal to the maximum domain value.
     *
     * @param thresholds Array of threshold values used for binning. The elements must
     * be of the same type as the materialized values of the histogram.
     */
    thresholds(thresholds: ArrayLike<Value>): this;
    /**
     * Set a threshold accessor function, which returns the array of values to be used as
     * thresholds in determining the bins.
     *
     * Any threshold values outside the domain are ignored. The first bin.x0 is always equal to the minimum domain value,
     * and the last bin.x1 is always equal to the maximum domain value.
     *
     * @param thresholds A function which accepts as arguments the array of materialized values, and
     * optionally the domain minimum and maximum. The function calculates and returns the array of values to be used as
     * thresholds in determining the bins.
     */
    thresholds(thresholds: ThresholdNumberArrayGenerator<Value>): this;
}

/**
 * @deprecated. Use bin instead.
 */
export function histogram(): HistogramGeneratorNumber<number, number>;

/**
 * @deprecated Use bin instead.
 */
export function histogram<Datum, Value extends number | undefined>(): HistogramGeneratorNumber<Datum, Value>;

/**
 * @deprecated Use bin instead.
 */
export function histogram<Datum, Value extends Date | undefined>(): HistogramGeneratorDate<Datum, Value>;

export function bin(): HistogramGeneratorNumber<number, number>;
export function bin<Datum, Value extends number | undefined>(): HistogramGeneratorNumber<Datum, Value>;
export function bin<Datum, Value extends Date | undefined>(): HistogramGeneratorDate<Datum, Value>;

// --------------------------------------------------------------------------------------
// Histogram Thresholds
// --------------------------------------------------------------------------------------

export function thresholdFreedmanDiaconis(values: ArrayLike<number | undefined>, min: number, max: number): number; // of type ThresholdCountGenerator

export function thresholdScott(values: ArrayLike<number | undefined>, min: number, max: number): number; // of type ThresholdCountGenerator

export function thresholdSturges(values: ArrayLike<number | undefined>): number; // of type ThresholdCountGenerator
