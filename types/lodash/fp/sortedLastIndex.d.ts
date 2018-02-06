import _ = require("../index");

declare namespace Lodash {
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
}

declare const sortedLastIndex: Lodash.SortedLastIndex;
export = sortedLastIndex;
