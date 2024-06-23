export = reorder;

/**
 * Reorder elements within array by index. Mutates original array in-place.
 *
 * @param array The array to shuffle.
 * @param index The indexes according to which to shuffle elements in `array`. Should contain unique indexes.
 * @param [stride=1] Indicate groups of elements to shuffle.
 *
 * @example
 * import reorder = require('array-rearrange')
 *
 * const arr = reorder([9,8,7,6], [3,2,1,0]) // [6,7,8,9]
 * const arr2 = reorder([3,3, 2,2, 1,1], [2,1,0]) // [1,1, 2,2, 3,3]
 */
declare function reorder<TArr extends MutableArrayLike<unknown>>(
    array: TArr,
    index: MutableArrayLike<number>,
    stride?: number,
): TArr;

interface MutableArrayLike<T> {
    length: number;
    [n: number]: T;
}
