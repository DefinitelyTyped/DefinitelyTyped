// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    interface SortedLastIndexBy {
        /**
         * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
         * which is invoked for `value` and each element of `array` to compute their
         * sort ranking. The iteratee is invoked with one argument: (value).
         *
         * @category Array
         * @param array The sorted array to inspect.
         * @param value The value to evaluate.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns the index at which `value` should be inserted into `array`.
         * @example
         *
         * // using the `_.property` iteratee shorthand
         * _.sortedLastIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, 'x');
         * // => 1
         */
        (): SortedLastIndexBy;
        /**
         * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
         * which is invoked for `value` and each element of `array` to compute their
         * sort ranking. The iteratee is invoked with one argument: (value).
         *
         * @category Array
         * @param array The sorted array to inspect.
         * @param value The value to evaluate.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns the index at which `value` should be inserted into `array`.
         * @example
         *
         * // using the `_.property` iteratee shorthand
         * _.sortedLastIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, 'x');
         * // => 1
         */
        <T>(iteratee: _.ValueIteratee<T>): SortedLastIndexBy1x1<T>;
        /**
         * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
         * which is invoked for `value` and each element of `array` to compute their
         * sort ranking. The iteratee is invoked with one argument: (value).
         *
         * @category Array
         * @param array The sorted array to inspect.
         * @param value The value to evaluate.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns the index at which `value` should be inserted into `array`.
         * @example
         *
         * // using the `_.property` iteratee shorthand
         * _.sortedLastIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, 'x');
         * // => 1
         */
        <T>(iteratee: _.ValueIteratee<T>, value: T): SortedLastIndexBy1x2<T>;
        /**
         * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
         * which is invoked for `value` and each element of `array` to compute their
         * sort ranking. The iteratee is invoked with one argument: (value).
         *
         * @category Array
         * @param array The sorted array to inspect.
         * @param value The value to evaluate.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns the index at which `value` should be inserted into `array`.
         * @example
         *
         * // using the `_.property` iteratee shorthand
         * _.sortedLastIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, 'x');
         * // => 1
         */
        <T>(iteratee: _.ValueIteratee<T>, value: T, array: _.List<T> | null | undefined): number;
    }
    interface SortedLastIndexBy1x1<T> {
        /**
         * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
         * which is invoked for `value` and each element of `array` to compute their
         * sort ranking. The iteratee is invoked with one argument: (value).
         *
         * @category Array
         * @param array The sorted array to inspect.
         * @param value The value to evaluate.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns the index at which `value` should be inserted into `array`.
         * @example
         *
         * // using the `_.property` iteratee shorthand
         * _.sortedLastIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, 'x');
         * // => 1
         */
        (): SortedLastIndexBy1x1<T>;
        /**
         * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
         * which is invoked for `value` and each element of `array` to compute their
         * sort ranking. The iteratee is invoked with one argument: (value).
         *
         * @category Array
         * @param array The sorted array to inspect.
         * @param value The value to evaluate.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns the index at which `value` should be inserted into `array`.
         * @example
         *
         * // using the `_.property` iteratee shorthand
         * _.sortedLastIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, 'x');
         * // => 1
         */
        (value: T): SortedLastIndexBy1x2<T>;
        /**
         * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
         * which is invoked for `value` and each element of `array` to compute their
         * sort ranking. The iteratee is invoked with one argument: (value).
         *
         * @category Array
         * @param array The sorted array to inspect.
         * @param value The value to evaluate.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns the index at which `value` should be inserted into `array`.
         * @example
         *
         * // using the `_.property` iteratee shorthand
         * _.sortedLastIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, 'x');
         * // => 1
         */
        (value: T, array: _.List<T> | null | undefined): number;
    }
    interface SortedLastIndexBy1x2<T> {
        /**
         * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
         * which is invoked for `value` and each element of `array` to compute their
         * sort ranking. The iteratee is invoked with one argument: (value).
         *
         * @category Array
         * @param array The sorted array to inspect.
         * @param value The value to evaluate.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns the index at which `value` should be inserted into `array`.
         * @example
         *
         * // using the `_.property` iteratee shorthand
         * _.sortedLastIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, 'x');
         * // => 1
         */
        (): SortedLastIndexBy1x2<T>;
        /**
         * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
         * which is invoked for `value` and each element of `array` to compute their
         * sort ranking. The iteratee is invoked with one argument: (value).
         *
         * @category Array
         * @param array The sorted array to inspect.
         * @param value The value to evaluate.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns the index at which `value` should be inserted into `array`.
         * @example
         *
         * // using the `_.property` iteratee shorthand
         * _.sortedLastIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, 'x');
         * // => 1
         */
        (array: _.List<T> | null | undefined): number;
    }
}

declare const sortedLastIndexBy: Lodash.SortedLastIndexBy;
export = sortedLastIndexBy;
