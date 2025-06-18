export = rangeExclusive;

/**
 * Generate a closed range of numbers `[a, b)` with step size `d`
 *
 * @example
 * import rangeExclusive = require('range-exclusive')
 *
 * rangeExclusive(10) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
 * rangeExclusive(3, 9, 3) // [3, 6]
 * rangeExclusive(7, 5, -1) // [7, 6]
 */
declare function rangeExclusive(stop: number): number[];
declare function rangeExclusive(
    /** @default 1 */
    start: number,
    stop: number,
    /** @default 1 */
    // tslint:disable-next-line unified-signatures
    stepSize?: number,
): number[];
