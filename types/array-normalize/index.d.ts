export = normalize;

/**
 * Normalize array to unit length, that is 0..1 range, in-place.
 * See [feature scaling](https://en.wikipedia.org/wiki/Feature_scaling).
 *
 * @param array The array to normalize.
 * @param [stride=1] The `array` stride for n-dimensions, ie. for 2d data layout is `[x, y, x, y, ...]`.
 * Every dimension is normalized independently, eg. 2d array is normalized to unit square `[0, 0, 1, 1]`.
 * @param bounds `bounds` box can predefine min/max to skip bounds detection.
 *
 * @example
 * import normalize = require('array-normalize')
 *
 * normalize([0, 50, 100]) // [0, .5, 1]
 * normalize([0, 0, .1, .2, 1, 2], 2) // [0, 0, .1, .1, 1, 1]
 * normalize([0, .25, 1, .25], 2, [0, .5, 1, .5]) // [0, .5, 1, .5])
 */
declare function normalize(array: MutableArrayLike<number>, stride?: number, bounds?: ReadonlyArray<number>): number[];

interface MutableArrayLike<T> {
    length: number;
    [n: number]: T;
}
