// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    interface SortedLastIndexOf {
        /**
         * This method is like `_.lastIndexOf` except that it performs a binary
         * search on a sorted `array`.
         *
         * @category Array
         * @param array The array to search.
         * @param value The value to search for.
         * @returns Returns the index of the matched value, else `-1`.
         * @example
         *
         * _.sortedLastIndexOf([1, 1, 2, 2], 2);
         * // => 3
         */
        (): SortedLastIndexOf;
        /**
         * This method is like `_.lastIndexOf` except that it performs a binary
         * search on a sorted `array`.
         *
         * @category Array
         * @param array The array to search.
         * @param value The value to search for.
         * @returns Returns the index of the matched value, else `-1`.
         * @example
         *
         * _.sortedLastIndexOf([1, 1, 2, 2], 2);
         * // => 3
         */
        <T>(value: T): SortedLastIndexOf1x1<T>;
        /**
         * This method is like `_.lastIndexOf` except that it performs a binary
         * search on a sorted `array`.
         *
         * @category Array
         * @param array The array to search.
         * @param value The value to search for.
         * @returns Returns the index of the matched value, else `-1`.
         * @example
         *
         * _.sortedLastIndexOf([1, 1, 2, 2], 2);
         * // => 3
         */
        <T>(value: T, array: _.List<T> | null | undefined): number;
    }
    interface SortedLastIndexOf1x1<T> {
        /**
         * This method is like `_.lastIndexOf` except that it performs a binary
         * search on a sorted `array`.
         *
         * @category Array
         * @param array The array to search.
         * @param value The value to search for.
         * @returns Returns the index of the matched value, else `-1`.
         * @example
         *
         * _.sortedLastIndexOf([1, 1, 2, 2], 2);
         * // => 3
         */
        (): SortedLastIndexOf1x1<T>;
        /**
         * This method is like `_.lastIndexOf` except that it performs a binary
         * search on a sorted `array`.
         *
         * @category Array
         * @param array The array to search.
         * @param value The value to search for.
         * @returns Returns the index of the matched value, else `-1`.
         * @example
         *
         * _.sortedLastIndexOf([1, 1, 2, 2], 2);
         * // => 3
         */
        (array: _.List<T> | null | undefined): number;
    }
}

declare const sortedLastIndexOf: Lodash.SortedLastIndexOf;
export = sortedLastIndexOf;
