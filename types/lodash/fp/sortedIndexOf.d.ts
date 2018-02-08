// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface SortedIndexOf {
    /**
     * This method is like `_.indexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @category Array
     * @param array The array to search.
     * @param value The value to search for.
     * @returns Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedIndexOf([1, 1, 2, 2], 2);
     * // => 2
     */
    (): SortedIndexOf;
    /**
     * This method is like `_.indexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @category Array
     * @param array The array to search.
     * @param value The value to search for.
     * @returns Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedIndexOf([1, 1, 2, 2], 2);
     * // => 2
     */
    <T>(value: T): SortedIndexOf1x1<T>;
    /**
     * This method is like `_.indexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @category Array
     * @param array The array to search.
     * @param value The value to search for.
     * @returns Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedIndexOf([1, 1, 2, 2], 2);
     * // => 2
     */
    <T>(value: T, array: _.List<T> | null | undefined): number;
}
interface SortedIndexOf1x1<T> {
    /**
     * This method is like `_.indexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @category Array
     * @param array The array to search.
     * @param value The value to search for.
     * @returns Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedIndexOf([1, 1, 2, 2], 2);
     * // => 2
     */
    (): SortedIndexOf1x1<T>;
    /**
     * This method is like `_.indexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @category Array
     * @param array The array to search.
     * @param value The value to search for.
     * @returns Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedIndexOf([1, 1, 2, 2], 2);
     * // => 2
     */
    (array: _.List<T> | null | undefined): number;
}

declare const sortedIndexOf: SortedIndexOf;
declare namespace sortedIndexOf {}
export = sortedIndexOf;
