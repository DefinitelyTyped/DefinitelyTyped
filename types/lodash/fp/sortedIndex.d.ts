// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface SortedIndex {
    /**
     * Uses a binary search to determine the lowest index at which `value` should
     * be inserted into `array` in order to maintain its sort order.
     *
     * @category Array
     * @param array The sorted array to inspect.
     * @param value The value to evaluate.
     * @returns Returns the index at which `value` should be inserted into `array`.
     * @example
     *
     * _.sortedIndex([30, 50], 40);
     * // => 1
     *
     * _.sortedIndex([4, 5], 4);
     * // => 0
     */
    (): SortedIndex;
    /**
     * Uses a binary search to determine the lowest index at which `value` should
     * be inserted into `array` in order to maintain its sort order.
     *
     * @category Array
     * @param array The sorted array to inspect.
     * @param value The value to evaluate.
     * @returns Returns the index at which `value` should be inserted into `array`.
     * @example
     *
     * _.sortedIndex([30, 50], 40);
     * // => 1
     *
     * _.sortedIndex([4, 5], 4);
     * // => 0
     */
    <T>(value: T): SortedIndex1x1<T>;
    /**
     * Uses a binary search to determine the lowest index at which `value` should
     * be inserted into `array` in order to maintain its sort order.
     *
     * @category Array
     * @param array The sorted array to inspect.
     * @param value The value to evaluate.
     * @returns Returns the index at which `value` should be inserted into `array`.
     * @example
     *
     * _.sortedIndex([30, 50], 40);
     * // => 1
     *
     * _.sortedIndex([4, 5], 4);
     * // => 0
     */
    <T>(value: T, array: _.List<T> | null | undefined): number;
}
interface SortedIndex1x1<T> {
    /**
     * Uses a binary search to determine the lowest index at which `value` should
     * be inserted into `array` in order to maintain its sort order.
     *
     * @category Array
     * @param array The sorted array to inspect.
     * @param value The value to evaluate.
     * @returns Returns the index at which `value` should be inserted into `array`.
     * @example
     *
     * _.sortedIndex([30, 50], 40);
     * // => 1
     *
     * _.sortedIndex([4, 5], 4);
     * // => 0
     */
    (): SortedIndex1x1<T>;
    /**
     * Uses a binary search to determine the lowest index at which `value` should
     * be inserted into `array` in order to maintain its sort order.
     *
     * @category Array
     * @param array The sorted array to inspect.
     * @param value The value to evaluate.
     * @returns Returns the index at which `value` should be inserted into `array`.
     * @example
     *
     * _.sortedIndex([30, 50], 40);
     * // => 1
     *
     * _.sortedIndex([4, 5], 4);
     * // => 0
     */
    (array: _.List<T> | null | undefined): number;
}

declare const sortedIndex: SortedIndex;
declare namespace sortedIndex {}
export = sortedIndex;
