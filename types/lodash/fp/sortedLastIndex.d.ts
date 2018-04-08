// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface SortedLastIndex {
    /**
     * This method is like `_.sortedIndex` except that it returns the highest
     * index at which `value` should be inserted into `array` in order to
     * maintain its sort order.
     *
     * @category Array
     * @param array The sorted array to inspect.
     * @param value The value to evaluate.
     * @returns Returns the index at which `value` should be inserted into `array`.
     * @example
     *
     * _.sortedLastIndex([4, 5], 4);
     * // => 1
     */
    (): SortedLastIndex;
    /**
     * This method is like `_.sortedIndex` except that it returns the highest
     * index at which `value` should be inserted into `array` in order to
     * maintain its sort order.
     *
     * @category Array
     * @param array The sorted array to inspect.
     * @param value The value to evaluate.
     * @returns Returns the index at which `value` should be inserted into `array`.
     * @example
     *
     * _.sortedLastIndex([4, 5], 4);
     * // => 1
     */
    <T>(value: T): SortedLastIndex1x1<T>;
    /**
     * This method is like `_.sortedIndex` except that it returns the highest
     * index at which `value` should be inserted into `array` in order to
     * maintain its sort order.
     *
     * @category Array
     * @param array The sorted array to inspect.
     * @param value The value to evaluate.
     * @returns Returns the index at which `value` should be inserted into `array`.
     * @example
     *
     * _.sortedLastIndex([4, 5], 4);
     * // => 1
     */
    <T>(value: T, array: _.List<T> | null | undefined): number;
}
interface SortedLastIndex1x1<T> {
    /**
     * This method is like `_.sortedIndex` except that it returns the highest
     * index at which `value` should be inserted into `array` in order to
     * maintain its sort order.
     *
     * @category Array
     * @param array The sorted array to inspect.
     * @param value The value to evaluate.
     * @returns Returns the index at which `value` should be inserted into `array`.
     * @example
     *
     * _.sortedLastIndex([4, 5], 4);
     * // => 1
     */
    (): SortedLastIndex1x1<T>;
    /**
     * This method is like `_.sortedIndex` except that it returns the highest
     * index at which `value` should be inserted into `array` in order to
     * maintain its sort order.
     *
     * @category Array
     * @param array The sorted array to inspect.
     * @param value The value to evaluate.
     * @returns Returns the index at which `value` should be inserted into `array`.
     * @example
     *
     * _.sortedLastIndex([4, 5], 4);
     * // => 1
     */
    (array: _.List<T> | null | undefined): number;
}

declare const sortedLastIndex: SortedLastIndex;
export = sortedLastIndex;
