// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface PullAllWith {
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    (): PullAllWith;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    <T>(comparator: _.Comparator<T>): PullAllWith1x1<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    <T>(comparator: _.__, values: _.List<T>): PullAllWith1x2<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    <T>(comparator: _.Comparator<T>, values: _.List<T>): PullAllWith1x3<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    <T>(comparator: _.__, values: _.__, array: ReadonlyArray<T>): PullAllWith1x4<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    <T>(comparator: _.Comparator<T>, values: _.__, array: ReadonlyArray<T>): PullAllWith1x5<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    <T>(comparator: _.__, values: _.List<T>, array: ReadonlyArray<T>): PullAllWith1x6<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    <T>(comparator: _.Comparator<T>, values: _.List<T>, array: ReadonlyArray<T>): T[];
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    <T>(comparator: _.__, values: _.__, array: _.List<T>): PullAllWith2x4<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    <T>(comparator: _.Comparator<T>, values: _.__, array: _.List<T>): PullAllWith2x5<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    <T>(comparator: _.__, values: _.List<T>, array: _.List<T>): PullAllWith2x6<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    <T>(comparator: _.Comparator<T>, values: _.List<T>, array: _.List<T>): _.List<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    <T1, T2>(comparator: _.Comparator2<T1, T2>): PullAllWith3x1<T1, T2>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    <T2>(comparator: _.__, values: _.List<T2>): PullAllWith3x2<T2>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    <T1, T2>(comparator: _.Comparator2<T1, T2>, values: _.List<T2>): PullAllWith3x3<T1>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    <T1>(comparator: _.__, values: _.__, array: ReadonlyArray<T1>): PullAllWith3x4<T1>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    <T1, T2>(comparator: _.Comparator2<T1, T2>, values: _.__, array: ReadonlyArray<T1>): PullAllWith3x5<T1, T2>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    <T1, T2>(comparator: _.__, values: _.List<T2>, array: ReadonlyArray<T1>): PullAllWith3x6<T1, T2>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    <T1, T2>(comparator: _.Comparator2<T1, T2>, values: _.List<T2>, array: ReadonlyArray<T1>): T1[];
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    <T1>(comparator: _.__, values: _.__, array: _.List<T1>): PullAllWith4x4<T1>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    <T1, T2>(comparator: _.Comparator2<T1, T2>, values: _.__, array: _.List<T1>): PullAllWith4x5<T1, T2>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    <T1, T2>(comparator: _.__, values: _.List<T2>, array: _.List<T1>): PullAllWith4x6<T1, T2>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    <T1, T2>(comparator: _.Comparator2<T1, T2>, values: _.List<T2>, array: _.List<T1>): _.List<T1>;
}
interface PullAllWith1x1<T> {
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    (): PullAllWith1x1<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    (values: _.List<T>): PullAllWith1x3<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    (values: _.__, array: ReadonlyArray<T>): PullAllWith1x5<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    (values: _.List<T>, array: ReadonlyArray<T>): T[];
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    (values: _.__, array: _.List<T>): PullAllWith2x5<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    (values: _.List<T>, array: _.List<T>): _.List<T>;
}
interface PullAllWith1x2<T> {
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    (): PullAllWith1x2<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    (comparator: _.Comparator<T>): PullAllWith1x3<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    (comparator: _.__, array: ReadonlyArray<T>): PullAllWith1x6<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    (comparator: _.Comparator<T>, array: ReadonlyArray<T>): T[];
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    (comparator: _.__, array: _.List<T>): PullAllWith2x6<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    (comparator: _.Comparator<T>, array: _.List<T>): _.List<T>;
}
interface PullAllWith1x3<T> {
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    (): PullAllWith1x3<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    (array: ReadonlyArray<T>): T[];
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    (array: _.List<T>): _.List<T>;
}
interface PullAllWith1x4<T> {
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    (): PullAllWith1x4<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    (comparator: _.Comparator<T>): PullAllWith1x5<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    (comparator: _.__, values: _.List<T>): PullAllWith1x6<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    (comparator: _.Comparator<T>, values: _.List<T>): T[];
}
interface PullAllWith1x5<T> {
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    (): PullAllWith1x5<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    (values: _.List<T>): T[];
}
interface PullAllWith1x6<T> {
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    (): PullAllWith1x6<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    (comparator: _.Comparator<T>): T[];
}
interface PullAllWith2x4<T> {
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    (): PullAllWith2x4<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    (comparator: _.Comparator<T>): PullAllWith2x5<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    (comparator: _.__, values: _.List<T>): PullAllWith2x6<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    (comparator: _.Comparator<T>, values: _.List<T>): _.List<T>;
}
interface PullAllWith2x5<T> {
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    (): PullAllWith2x5<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    (values: _.List<T>): _.List<T>;
}
interface PullAllWith2x6<T> {
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    (): PullAllWith2x6<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    (comparator: _.Comparator<T>): _.List<T>;
}
interface PullAllWith3x1<T1, T2> {
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    (): PullAllWith3x1<T1, T2>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    (values: _.List<T2>): PullAllWith3x3<T1>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    (values: _.__, array: ReadonlyArray<T1>): PullAllWith3x5<T1, T2>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    (values: _.List<T2>, array: ReadonlyArray<T1>): T1[];
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    (values: _.__, array: _.List<T1>): PullAllWith4x5<T1, T2>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    (values: _.List<T2>, array: _.List<T1>): _.List<T1>;
}
interface PullAllWith3x2<T2> {
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    (): PullAllWith3x2<T2>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    <T1>(comparator: _.Comparator2<T1, T2>): PullAllWith3x3<T1>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    <T1>(comparator: _.__, array: ReadonlyArray<T1>): PullAllWith3x6<T1, T2>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    <T1>(comparator: _.Comparator2<T1, T2>, array: ReadonlyArray<T1>): T1[];
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    <T1>(comparator: _.__, array: _.List<T1>): PullAllWith4x6<T1, T2>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    <T1>(comparator: _.Comparator2<T1, T2>, array: _.List<T1>): _.List<T1>;
}
interface PullAllWith3x3<T1> {
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    (): PullAllWith3x3<T1>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    <T2>(array: ReadonlyArray<T1>): T1[];
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    <T2>(array: _.List<T1>): _.List<T1>;
}
interface PullAllWith3x4<T1> {
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    (): PullAllWith3x4<T1>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    <T2>(comparator: _.Comparator2<T1, T2>): PullAllWith3x5<T1, T2>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    <T2>(comparator: _.__, values: _.List<T2>): PullAllWith3x6<T1, T2>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    <T2>(comparator: _.Comparator2<T1, T2>, values: _.List<T2>): T1[];
}
interface PullAllWith3x5<T1, T2> {
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    (): PullAllWith3x5<T1, T2>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    (values: _.List<T2>): T1[];
}
interface PullAllWith3x6<T1, T2> {
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    (): PullAllWith3x6<T1, T2>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    (comparator: _.Comparator2<T1, T2>): T1[];
}
interface PullAllWith4x4<T1> {
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    (): PullAllWith4x4<T1>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    <T2>(comparator: _.Comparator2<T1, T2>): PullAllWith4x5<T1, T2>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    <T2>(comparator: _.__, values: _.List<T2>): PullAllWith4x6<T1, T2>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    <T2>(comparator: _.Comparator2<T1, T2>, values: _.List<T2>): _.List<T1>;
}
interface PullAllWith4x5<T1, T2> {
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    (): PullAllWith4x5<T1, T2>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    (values: _.List<T2>): _.List<T1>;
}
interface PullAllWith4x6<T1, T2> {
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    (): PullAllWith4x6<T1, T2>;
    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which is
     * invoked to compare elements of array to values. The comparator is invoked with
     * two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    (comparator: _.Comparator2<T1, T2>): _.List<T1>;
}

declare const pullAllWith: PullAllWith;
export = pullAllWith;
