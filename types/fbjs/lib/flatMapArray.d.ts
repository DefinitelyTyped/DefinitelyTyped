/**
 * Applies a function to every item in an array and concatenates the resulting
 * arrays into a single flat array.
 *
 * @param {array} array
 * @param {function} fn
 * @return {array}
 */
declare function flatMapArray<TValue, TNext>(
    array: Array<TValue>,
    fn: (value: TValue, index: number) => Array<TNext>,
): Array<TNext>;

declare namespace flatMapArray {}

export = flatMapArray;
