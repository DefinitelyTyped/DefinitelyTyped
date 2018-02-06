// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    interface SortedIndexBy {
        /**
         * This method is like `_.sortedIndex` except that it accepts `iteratee`
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
         * var dict = { 'thirty': 30, 'forty': 40, 'fifty': 50 };
         *
         * _.sortedIndexBy(['thirty', 'fifty'], 'forty', _.propertyOf(dict));
         * // => 1
         *
         * // using the `_.property` iteratee shorthand
         * _.sortedIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, 'x');
         * // => 0
         */
        (): SortedIndexBy;
        /**
         * This method is like `_.sortedIndex` except that it accepts `iteratee`
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
         * var dict = { 'thirty': 30, 'forty': 40, 'fifty': 50 };
         *
         * _.sortedIndexBy(['thirty', 'fifty'], 'forty', _.propertyOf(dict));
         * // => 1
         *
         * // using the `_.property` iteratee shorthand
         * _.sortedIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, 'x');
         * // => 0
         */
        <T>(iteratee: _.ValueIteratee<T>): SortedIndexBy1x1<T>;
        /**
         * This method is like `_.sortedIndex` except that it accepts `iteratee`
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
         * var dict = { 'thirty': 30, 'forty': 40, 'fifty': 50 };
         *
         * _.sortedIndexBy(['thirty', 'fifty'], 'forty', _.propertyOf(dict));
         * // => 1
         *
         * // using the `_.property` iteratee shorthand
         * _.sortedIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, 'x');
         * // => 0
         */
        <T>(iteratee: _.ValueIteratee<T>, value: T): SortedIndexBy1x2<T>;
        /**
         * This method is like `_.sortedIndex` except that it accepts `iteratee`
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
         * var dict = { 'thirty': 30, 'forty': 40, 'fifty': 50 };
         *
         * _.sortedIndexBy(['thirty', 'fifty'], 'forty', _.propertyOf(dict));
         * // => 1
         *
         * // using the `_.property` iteratee shorthand
         * _.sortedIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, 'x');
         * // => 0
         */
        <T>(iteratee: _.ValueIteratee<T>, value: T, array: _.List<T> | null | undefined): number;
    }
    interface SortedIndexBy1x1<T> {
        /**
         * This method is like `_.sortedIndex` except that it accepts `iteratee`
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
         * var dict = { 'thirty': 30, 'forty': 40, 'fifty': 50 };
         *
         * _.sortedIndexBy(['thirty', 'fifty'], 'forty', _.propertyOf(dict));
         * // => 1
         *
         * // using the `_.property` iteratee shorthand
         * _.sortedIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, 'x');
         * // => 0
         */
        (): SortedIndexBy1x1<T>;
        /**
         * This method is like `_.sortedIndex` except that it accepts `iteratee`
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
         * var dict = { 'thirty': 30, 'forty': 40, 'fifty': 50 };
         *
         * _.sortedIndexBy(['thirty', 'fifty'], 'forty', _.propertyOf(dict));
         * // => 1
         *
         * // using the `_.property` iteratee shorthand
         * _.sortedIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, 'x');
         * // => 0
         */
        (value: T): SortedIndexBy1x2<T>;
        /**
         * This method is like `_.sortedIndex` except that it accepts `iteratee`
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
         * var dict = { 'thirty': 30, 'forty': 40, 'fifty': 50 };
         *
         * _.sortedIndexBy(['thirty', 'fifty'], 'forty', _.propertyOf(dict));
         * // => 1
         *
         * // using the `_.property` iteratee shorthand
         * _.sortedIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, 'x');
         * // => 0
         */
        (value: T, array: _.List<T> | null | undefined): number;
    }
    interface SortedIndexBy1x2<T> {
        /**
         * This method is like `_.sortedIndex` except that it accepts `iteratee`
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
         * var dict = { 'thirty': 30, 'forty': 40, 'fifty': 50 };
         *
         * _.sortedIndexBy(['thirty', 'fifty'], 'forty', _.propertyOf(dict));
         * // => 1
         *
         * // using the `_.property` iteratee shorthand
         * _.sortedIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, 'x');
         * // => 0
         */
        (): SortedIndexBy1x2<T>;
        /**
         * This method is like `_.sortedIndex` except that it accepts `iteratee`
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
         * var dict = { 'thirty': 30, 'forty': 40, 'fifty': 50 };
         *
         * _.sortedIndexBy(['thirty', 'fifty'], 'forty', _.propertyOf(dict));
         * // => 1
         *
         * // using the `_.property` iteratee shorthand
         * _.sortedIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, 'x');
         * // => 0
         */
        (array: _.List<T> | null | undefined): number;
    }
}

declare const sortedIndexBy: Lodash.SortedIndexBy;
export = sortedIndexBy;
