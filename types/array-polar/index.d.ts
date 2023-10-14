// Type definitions for array-polar 1.0
// Project: https://github.com/dfcreative/array-polar#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = toPolar;

/**
 * Convert array with cartesian coordinates to polar.
 *
 * `array` is modified in-place, so do slice if you need immutable behaviour.
 *
 * @param array A 2-dimensional array with `[x, y, x, y, ...]` layout.
 * @param [center=[0,0]] The center point to convert the `array`, so that result is `[r, θ, r, θ, ...]` `array`.
 * You may want to calculate `center` as average or median of data.
 *
 * @example
 * import polar = require('array-polar')
 *
 * const polarCoords = polar([0,1, 1,0]) // [1,0, 1,Math.PI/2]
 */
declare function toPolar<TArr extends MutableArrayLike<number>>(array: TArr, center?: readonly [number, number]): TArr;

declare namespace toPolar {
    const polar: typeof toPolar;
    /**
     * Convert array with polar coordinates to cartesian.
     *
     * `array` is modified in-place, so do slice if you need immutable behaviour.
     *
     * @param array A 2-dimensional array with `[x, y, x, y, ...]` layout.
     * @param [center=[0,0]] The center point to convert the `array`, so that result is `[r, θ, r, θ, ...]` `array`.
     * You may want to calculate `center` as average or median of data.
     *
     * @example
     * import polar = require('array-polar')
     *
     * const cartesianCoords = polar.cartesian([1,0, 1,Math.PI/2]) // [0,1, 1,0]
     */
    function cartesian<TArr extends MutableArrayLike<number>>(array: TArr, center?: readonly [number, number]): TArr;
}

interface MutableArrayLike<T> {
    length: number;
    [n: number]: T;
}
