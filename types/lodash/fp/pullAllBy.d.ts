// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface PullAllBy {
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    (): PullAllBy;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    <T>(iteratee: _.ValueIteratee<T>): PullAllBy1x1<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    <T>(p1: _.__, values: _.List<T>): PullAllBy1x2<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    <T>(iteratee: _.ValueIteratee<T>, values: _.List<T>): PullAllBy1x3<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    <T>(p1: _.__, p2: _.__, array: ReadonlyArray<T>): PullAllBy1x4<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    <T>(iteratee: _.ValueIteratee<T>, p2: _.__, array: ReadonlyArray<T>): PullAllBy1x5<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    <T>(p1: _.__, values: _.List<T>, array: ReadonlyArray<T>): PullAllBy1x6<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    <T>(iteratee: _.ValueIteratee<T>, values: _.List<T>, array: ReadonlyArray<T>): T[];
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    <T>(p1: _.__, p2: _.__, array: _.List<T>): PullAllBy2x4<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    <T>(iteratee: _.ValueIteratee<T>, p2: _.__, array: _.List<T>): PullAllBy2x5<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    <T>(p1: _.__, values: _.List<T>, array: _.List<T>): PullAllBy2x6<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    <T>(iteratee: _.ValueIteratee<T>, values: _.List<T>, array: _.List<T>): _.List<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    <T1, T2>(iteratee: _.ValueIteratee<T1 | T2>): PullAllBy3x1<T1, T2>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    <T2>(p1: _.__, values: _.List<T2>): PullAllBy3x2<T2>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    <T1, T2>(iteratee: _.ValueIteratee<T1 | T2>, values: _.List<T2>): PullAllBy3x3<T1>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    <T1>(p1: _.__, p2: _.__, array: ReadonlyArray<T1>): PullAllBy3x4<T1>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    <T1, T2>(iteratee: _.ValueIteratee<T1 | T2>, p2: _.__, array: ReadonlyArray<T1>): PullAllBy3x5<T1, T2>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    <T1, T2>(p1: _.__, values: _.List<T2>, array: ReadonlyArray<T1>): PullAllBy3x6<T1, T2>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    <T1, T2>(iteratee: _.ValueIteratee<T1 | T2>, values: _.List<T2>, array: ReadonlyArray<T1>): T1[];
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    <T1>(p1: _.__, p2: _.__, array: _.List<T1>): PullAllBy4x4<T1>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    <T1, T2>(iteratee: _.ValueIteratee<T1 | T2>, p2: _.__, array: _.List<T1>): PullAllBy4x5<T1, T2>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    <T1, T2>(p1: _.__, values: _.List<T2>, array: _.List<T1>): PullAllBy4x6<T1, T2>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    <T1, T2>(iteratee: _.ValueIteratee<T1 | T2>, values: _.List<T2>, array: _.List<T1>): _.List<T1>;
}
interface PullAllBy1x1<T> {
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    (): PullAllBy1x1<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    (values: _.List<T>): PullAllBy1x3<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    (p1: _.__, array: ReadonlyArray<T>): PullAllBy1x5<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    (values: _.List<T>, array: ReadonlyArray<T>): T[];
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    (p1: _.__, array: _.List<T>): PullAllBy2x5<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    (values: _.List<T>, array: _.List<T>): _.List<T>;
}
interface PullAllBy1x2<T> {
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    (): PullAllBy1x2<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    (iteratee: _.ValueIteratee<T>): PullAllBy1x3<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    (p1: _.__, array: ReadonlyArray<T>): PullAllBy1x6<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    (iteratee: _.ValueIteratee<T>, array: ReadonlyArray<T>): T[];
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    (p1: _.__, array: _.List<T>): PullAllBy2x6<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    (iteratee: _.ValueIteratee<T>, array: _.List<T>): _.List<T>;
}
interface PullAllBy1x3<T> {
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    (): PullAllBy1x3<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    (array: ReadonlyArray<T>): T[];
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    (array: _.List<T>): _.List<T>;
}
interface PullAllBy1x4<T> {
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    (): PullAllBy1x4<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    (iteratee: _.ValueIteratee<T>): PullAllBy1x5<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    (p1: _.__, values: _.List<T>): PullAllBy1x6<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    (iteratee: _.ValueIteratee<T>, values: _.List<T>): T[];
}
interface PullAllBy1x5<T> {
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    (): PullAllBy1x5<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    (values: _.List<T>): T[];
}
interface PullAllBy1x6<T> {
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    (): PullAllBy1x6<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    (iteratee: _.ValueIteratee<T>): T[];
}
interface PullAllBy2x4<T> {
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    (): PullAllBy2x4<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    (iteratee: _.ValueIteratee<T>): PullAllBy2x5<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    (p1: _.__, values: _.List<T>): PullAllBy2x6<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    (iteratee: _.ValueIteratee<T>, values: _.List<T>): _.List<T>;
}
interface PullAllBy2x5<T> {
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    (): PullAllBy2x5<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    (values: _.List<T>): _.List<T>;
}
interface PullAllBy2x6<T> {
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    (): PullAllBy2x6<T>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    (iteratee: _.ValueIteratee<T>): _.List<T>;
}
interface PullAllBy3x1<T1, T2> {
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    (): PullAllBy3x1<T1, T2>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    (values: _.List<T2>): PullAllBy3x3<T1>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    (p1: _.__, array: ReadonlyArray<T1>): PullAllBy3x5<T1, T2>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    (values: _.List<T2>, array: ReadonlyArray<T1>): T1[];
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    (p1: _.__, array: _.List<T1>): PullAllBy4x5<T1, T2>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    (values: _.List<T2>, array: _.List<T1>): _.List<T1>;
}
interface PullAllBy3x2<T2> {
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    (): PullAllBy3x2<T2>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    <T1>(iteratee: _.ValueIteratee<T1 | T2>): PullAllBy3x3<T1>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    <T1>(p1: _.__, array: ReadonlyArray<T1>): PullAllBy3x6<T1, T2>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    <T1>(iteratee: _.ValueIteratee<T1 | T2>, array: ReadonlyArray<T1>): T1[];
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    <T1>(p1: _.__, array: _.List<T1>): PullAllBy4x6<T1, T2>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    <T1>(iteratee: _.ValueIteratee<T1 | T2>, array: _.List<T1>): _.List<T1>;
}
interface PullAllBy3x3<T1> {
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    (): PullAllBy3x3<T1>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    <T2>(array: ReadonlyArray<T1>): T1[];
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    <T2>(array: _.List<T1>): _.List<T1>;
}
interface PullAllBy3x4<T1> {
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    (): PullAllBy3x4<T1>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    <T2>(iteratee: _.ValueIteratee<T1 | T2>): PullAllBy3x5<T1, T2>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    <T2>(p1: _.__, values: _.List<T2>): PullAllBy3x6<T1, T2>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    <T2>(iteratee: _.ValueIteratee<T1 | T2>, values: _.List<T2>): T1[];
}
interface PullAllBy3x5<T1, T2> {
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    (): PullAllBy3x5<T1, T2>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    (values: _.List<T2>): T1[];
}
interface PullAllBy3x6<T1, T2> {
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    (): PullAllBy3x6<T1, T2>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    (iteratee: _.ValueIteratee<T1 | T2>): T1[];
}
interface PullAllBy4x4<T1> {
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    (): PullAllBy4x4<T1>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    <T2>(iteratee: _.ValueIteratee<T1 | T2>): PullAllBy4x5<T1, T2>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    <T2>(p1: _.__, values: _.List<T2>): PullAllBy4x6<T1, T2>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    <T2>(iteratee: _.ValueIteratee<T1 | T2>, values: _.List<T2>): _.List<T1>;
}
interface PullAllBy4x5<T1, T2> {
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    (): PullAllBy4x5<T1, T2>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    (values: _.List<T2>): _.List<T1>;
}
interface PullAllBy4x6<T1, T2> {
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    (): PullAllBy4x6<T1, T2>;
    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to to generate the criterion
     * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @category Array
     * @param array The array to modify.
     * @param values The values to remove.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    (iteratee: _.ValueIteratee<T1 | T2>): _.List<T1>;
}

declare const pullAllBy: PullAllBy;
export = pullAllBy;
