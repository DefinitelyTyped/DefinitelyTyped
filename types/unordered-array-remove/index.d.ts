// Type definitions for unordered-array-remove 1.0
// Project: https://github.com/mafintosh/unordered-array-remove
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = arrayRemove;

/**
 * Efficiently remove an element from an unordered array without doing a splice.
 *
 * This works by popping the last element (which is fast because it doesn't need
 * shift all array elements) and overwriting the removed index with this element.
 *
 * @param array The array to remove the element at index.
 * @param index The index to remove the element at.
 * @returns The removed element or `undefined` in case the index was out of bounds.
 *
 * @example
 * import remove = require('unordered-array-remove');
 *
 * const list = ['a', 'b', 'c', 'd', 'e'];
 * remove(list, 2); // remove 'c'
 * console.log(list); // returns ['a', 'b', 'e', 'd'] (no 'c')
 */
declare function arrayRemove<T>(array: T[], index: number): T | undefined;
