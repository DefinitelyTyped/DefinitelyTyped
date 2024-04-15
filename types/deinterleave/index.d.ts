export = deinterleave;

/**
 * Rearrange source elements so that it has planar layout:
 *
 * `[a,b,c, a,b,c, ...]` → `[a,a,a,..., b,b,b,..., c,c,c]`
 *
 * @param src The array to rearrange.
 * @param [stride=2] Indicates number of elements per group, eg. in case of audio buffer it is number of channels.
 *
 * @example
 * import deinterleave = require('deinterleave')
 *
 * const array = [1,0,1,0,1,0,1,0]
 * deinterleave(array, 2)
 *
 * // array is [1,1,1,1,0,0,0,0]
 */
declare function deinterleave<TArr extends MutableArrayLike<unknown>>(src: TArr, stride?: number): TArr;

interface MutableArrayLike<T> {
    length: number;
    [n: number]: T;
}
