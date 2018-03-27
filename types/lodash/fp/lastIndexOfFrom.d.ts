// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface LastIndexOf {
    /**
     * This method is like _.indexOf except that it iterates over elements of array from right to left.
     *
     * @param array The array to search.
     * @param value The value to search for.
     * @param fromIndex The index to search from or true to perform a binary search on a sorted array.
     * @return Returns the index of the matched value, else -1.
     */
    (): LastIndexOf;
    /**
     * This method is like _.indexOf except that it iterates over elements of array from right to left.
     *
     * @param array The array to search.
     * @param value The value to search for.
     * @param fromIndex The index to search from or true to perform a binary search on a sorted array.
     * @return Returns the index of the matched value, else -1.
     */
    <T>(value: T): LastIndexOf1x1<T>;
    /**
     * This method is like _.indexOf except that it iterates over elements of array from right to left.
     *
     * @param array The array to search.
     * @param value The value to search for.
     * @param fromIndex The index to search from or true to perform a binary search on a sorted array.
     * @return Returns the index of the matched value, else -1.
     */
    <T>(value: T, fromIndex: true|number): LastIndexOf1x2<T>;
    /**
     * This method is like _.indexOf except that it iterates over elements of array from right to left.
     *
     * @param array The array to search.
     * @param value The value to search for.
     * @param fromIndex The index to search from or true to perform a binary search on a sorted array.
     * @return Returns the index of the matched value, else -1.
     */
    <T>(value: T, fromIndex: true|number, array: _.List<T> | null | undefined): number;
}
interface LastIndexOf1x1<T> {
    /**
     * This method is like _.indexOf except that it iterates over elements of array from right to left.
     *
     * @param array The array to search.
     * @param value The value to search for.
     * @param fromIndex The index to search from or true to perform a binary search on a sorted array.
     * @return Returns the index of the matched value, else -1.
     */
    (): LastIndexOf1x1<T>;
    /**
     * This method is like _.indexOf except that it iterates over elements of array from right to left.
     *
     * @param array The array to search.
     * @param value The value to search for.
     * @param fromIndex The index to search from or true to perform a binary search on a sorted array.
     * @return Returns the index of the matched value, else -1.
     */
    (fromIndex: true|number): LastIndexOf1x2<T>;
    /**
     * This method is like _.indexOf except that it iterates over elements of array from right to left.
     *
     * @param array The array to search.
     * @param value The value to search for.
     * @param fromIndex The index to search from or true to perform a binary search on a sorted array.
     * @return Returns the index of the matched value, else -1.
     */
    (fromIndex: true|number, array: _.List<T> | null | undefined): number;
}
interface LastIndexOf1x2<T> {
    /**
     * This method is like _.indexOf except that it iterates over elements of array from right to left.
     *
     * @param array The array to search.
     * @param value The value to search for.
     * @param fromIndex The index to search from or true to perform a binary search on a sorted array.
     * @return Returns the index of the matched value, else -1.
     */
    (): LastIndexOf1x2<T>;
    /**
     * This method is like _.indexOf except that it iterates over elements of array from right to left.
     *
     * @param array The array to search.
     * @param value The value to search for.
     * @param fromIndex The index to search from or true to perform a binary search on a sorted array.
     * @return Returns the index of the matched value, else -1.
     */
    (array: _.List<T> | null | undefined): number;
}

declare const lastIndexOfFrom: LastIndexOf;
export = lastIndexOfFrom;
