export = rangeInclusive;

/**
 * Generate a closed range of numbers `[a, b]` with step size `d`.
 *
 * @example
 * import rangeInclusive = require('range-inclusive')
 *
 * rangeInclusive(10) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * rangeInclusive(3, 9, 3) // [3, 6, 9]
 * rangeInclusive(7, 5, -1) // [7, 6, 5]
 */
declare function rangeInclusive(stop: number): number[];
declare function rangeInclusive(
    /** @default 1 */
    start: number,
    stop: number,
    /** @default 1 */
    // tslint:disable-next-line unified-signatures
    stepSize?: number,
): number[];
