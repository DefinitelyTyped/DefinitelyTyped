import _ = require("../index");

declare namespace Lodash {
    interface IndexOf {
        /**
         * Gets the index at which the first occurrence of `value` is found in `array`
         * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
         * for equality comparisons. If `fromIndex` is negative, it's used as the offset
         * from the end of `array`. If `array` is sorted providing `true` for `fromIndex`
         * performs a faster binary search.
         *
         * @category Array
         * @param array The array to search.
         * @param value The value to search for.
         * @param [fromIndex=0] The index to search from.
         * @returns Returns the index of the matched value, else `-1`.
         * @example
         *
         * _.indexOf([1, 2, 1, 2], 2);
         * // => 1
         *
         * // using `fromIndex`
         * _.indexOf([1, 2, 1, 2], 2, 2);
         * // => 3
         */
        (): IndexOf;
        /**
         * Gets the index at which the first occurrence of `value` is found in `array`
         * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
         * for equality comparisons. If `fromIndex` is negative, it's used as the offset
         * from the end of `array`. If `array` is sorted providing `true` for `fromIndex`
         * performs a faster binary search.
         *
         * @category Array
         * @param array The array to search.
         * @param value The value to search for.
         * @param [fromIndex=0] The index to search from.
         * @returns Returns the index of the matched value, else `-1`.
         * @example
         *
         * _.indexOf([1, 2, 1, 2], 2);
         * // => 1
         *
         * // using `fromIndex`
         * _.indexOf([1, 2, 1, 2], 2, 2);
         * // => 3
         */
        (fromIndex: boolean|number): IndexOf1x1;
        /**
         * Gets the index at which the first occurrence of `value` is found in `array`
         * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
         * for equality comparisons. If `fromIndex` is negative, it's used as the offset
         * from the end of `array`. If `array` is sorted providing `true` for `fromIndex`
         * performs a faster binary search.
         *
         * @category Array
         * @param array The array to search.
         * @param value The value to search for.
         * @param [fromIndex=0] The index to search from.
         * @returns Returns the index of the matched value, else `-1`.
         * @example
         *
         * _.indexOf([1, 2, 1, 2], 2);
         * // => 1
         *
         * // using `fromIndex`
         * _.indexOf([1, 2, 1, 2], 2, 2);
         * // => 3
         */
        <T>(fromIndex: boolean|number, array: _.List<T> | null | undefined): IndexOf1x2<T>;
        /**
         * Gets the index at which the first occurrence of `value` is found in `array`
         * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
         * for equality comparisons. If `fromIndex` is negative, it's used as the offset
         * from the end of `array`. If `array` is sorted providing `true` for `fromIndex`
         * performs a faster binary search.
         *
         * @category Array
         * @param array The array to search.
         * @param value The value to search for.
         * @param [fromIndex=0] The index to search from.
         * @returns Returns the index of the matched value, else `-1`.
         * @example
         *
         * _.indexOf([1, 2, 1, 2], 2);
         * // => 1
         *
         * // using `fromIndex`
         * _.indexOf([1, 2, 1, 2], 2, 2);
         * // => 3
         */
        <T>(fromIndex: boolean|number, array: _.List<T> | null | undefined, value: T): number;
    }
    interface IndexOf1x1 {
        /**
         * Gets the index at which the first occurrence of `value` is found in `array`
         * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
         * for equality comparisons. If `fromIndex` is negative, it's used as the offset
         * from the end of `array`. If `array` is sorted providing `true` for `fromIndex`
         * performs a faster binary search.
         *
         * @category Array
         * @param array The array to search.
         * @param value The value to search for.
         * @param [fromIndex=0] The index to search from.
         * @returns Returns the index of the matched value, else `-1`.
         * @example
         *
         * _.indexOf([1, 2, 1, 2], 2);
         * // => 1
         *
         * // using `fromIndex`
         * _.indexOf([1, 2, 1, 2], 2, 2);
         * // => 3
         */
        (): IndexOf1x1;
        /**
         * Gets the index at which the first occurrence of `value` is found in `array`
         * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
         * for equality comparisons. If `fromIndex` is negative, it's used as the offset
         * from the end of `array`. If `array` is sorted providing `true` for `fromIndex`
         * performs a faster binary search.
         *
         * @category Array
         * @param array The array to search.
         * @param value The value to search for.
         * @param [fromIndex=0] The index to search from.
         * @returns Returns the index of the matched value, else `-1`.
         * @example
         *
         * _.indexOf([1, 2, 1, 2], 2);
         * // => 1
         *
         * // using `fromIndex`
         * _.indexOf([1, 2, 1, 2], 2, 2);
         * // => 3
         */
        <T>(array: _.List<T> | null | undefined): IndexOf1x2<T>;
        /**
         * Gets the index at which the first occurrence of `value` is found in `array`
         * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
         * for equality comparisons. If `fromIndex` is negative, it's used as the offset
         * from the end of `array`. If `array` is sorted providing `true` for `fromIndex`
         * performs a faster binary search.
         *
         * @category Array
         * @param array The array to search.
         * @param value The value to search for.
         * @param [fromIndex=0] The index to search from.
         * @returns Returns the index of the matched value, else `-1`.
         * @example
         *
         * _.indexOf([1, 2, 1, 2], 2);
         * // => 1
         *
         * // using `fromIndex`
         * _.indexOf([1, 2, 1, 2], 2, 2);
         * // => 3
         */
        <T>(array: _.List<T> | null | undefined, value: T): number;
    }
    interface IndexOf1x2<T> {
        /**
         * Gets the index at which the first occurrence of `value` is found in `array`
         * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
         * for equality comparisons. If `fromIndex` is negative, it's used as the offset
         * from the end of `array`. If `array` is sorted providing `true` for `fromIndex`
         * performs a faster binary search.
         *
         * @category Array
         * @param array The array to search.
         * @param value The value to search for.
         * @param [fromIndex=0] The index to search from.
         * @returns Returns the index of the matched value, else `-1`.
         * @example
         *
         * _.indexOf([1, 2, 1, 2], 2);
         * // => 1
         *
         * // using `fromIndex`
         * _.indexOf([1, 2, 1, 2], 2, 2);
         * // => 3
         */
        (): IndexOf1x2<T>;
        /**
         * Gets the index at which the first occurrence of `value` is found in `array`
         * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
         * for equality comparisons. If `fromIndex` is negative, it's used as the offset
         * from the end of `array`. If `array` is sorted providing `true` for `fromIndex`
         * performs a faster binary search.
         *
         * @category Array
         * @param array The array to search.
         * @param value The value to search for.
         * @param [fromIndex=0] The index to search from.
         * @returns Returns the index of the matched value, else `-1`.
         * @example
         *
         * _.indexOf([1, 2, 1, 2], 2);
         * // => 1
         *
         * // using `fromIndex`
         * _.indexOf([1, 2, 1, 2], 2, 2);
         * // => 3
         */
        (value: T): number;
    }
}

declare const indexOfFrom: Lodash.IndexOf;
export = indexOfFrom;
