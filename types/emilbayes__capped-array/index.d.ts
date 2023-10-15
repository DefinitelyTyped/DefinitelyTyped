// Type definitions for @emilbayes/capped-array 1.0
// Project: https://github.com/emilbayes/capped-array#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = CappedArray;

/**
 * `CappedArray` inherited from `Array`.
 *
 * @example
 * import CappedArray = require('@emilbayes/capped-array')
 *
 * const arr = new CappedArray(2) // max 2 elements
 *
 * arr.push('foo')
 * arr.deleted // === 0
 * arr.length // === 1
 * arr.size // === 2
 *
 * arr.push('bar')
 * arr.deleted // === 0
 * arr.length // === 2
 * arr.size // === 2
 *
 * arr.push('baz')
 * arr.deleted // === 1
 * arr.length // === 2
 * arr.size // === 2
 * // arr is now ['bar', 'baz']
 */
declare class CappedArray<T> extends Array<T> {
    /**
     * Create a new `CappedArray`.
     *
     * @param size The maximum size of the array.
     */
    constructor(size: number);
    /**
     * The maximum size of the capped array.
     */
    readonly size: number;
    /**
     * This property is updated on each mutation (`push`, `unshift`) that might have delete elements.
     */
    readonly deleted: number;
}
