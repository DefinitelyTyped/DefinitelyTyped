/**
 * Concats an array of arrays into a single flat array.
 *
 * @param {array} array
 * @return {array}
 */
declare function concatAllArray<T>(array: Array<T | null | void>): Array<T>;

declare namespace concatAllArray {}

export = concatAllArray;
