// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface SumBy {
    /**
     * This method is like `_.sum` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be summed.
     * The iteratee is invoked with one argument: (value).
     *
     * @category Math
     * @param array The array to iterate over.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns the sum.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.sumBy(objects, function(o) { return o.n; });
     * // => 20
     *
     * // using the `_.property` iteratee shorthand
     * _.sumBy(objects, 'n');
     * // => 20
     */
    (): SumBy;
    /**
     * This method is like `_.sum` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be summed.
     * The iteratee is invoked with one argument: (value).
     *
     * @category Math
     * @param array The array to iterate over.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns the sum.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.sumBy(objects, function(o) { return o.n; });
     * // => 20
     *
     * // using the `_.property` iteratee shorthand
     * _.sumBy(objects, 'n');
     * // => 20
     */
    <T>(iteratee: ((value: T) => number) | string): SumBy1x1<T>;
    /**
     * This method is like `_.sum` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be summed.
     * The iteratee is invoked with one argument: (value).
     *
     * @category Math
     * @param array The array to iterate over.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns the sum.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.sumBy(objects, function(o) { return o.n; });
     * // => 20
     *
     * // using the `_.property` iteratee shorthand
     * _.sumBy(objects, 'n');
     * // => 20
     */
    <T>(iteratee: ((value: T) => number) | string, collection: _.List<T> | null | undefined): number;
}
interface SumBy1x1<T> {
    /**
     * This method is like `_.sum` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be summed.
     * The iteratee is invoked with one argument: (value).
     *
     * @category Math
     * @param array The array to iterate over.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns the sum.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.sumBy(objects, function(o) { return o.n; });
     * // => 20
     *
     * // using the `_.property` iteratee shorthand
     * _.sumBy(objects, 'n');
     * // => 20
     */
    (): SumBy1x1<T>;
    /**
     * This method is like `_.sum` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be summed.
     * The iteratee is invoked with one argument: (value).
     *
     * @category Math
     * @param array The array to iterate over.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns the sum.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.sumBy(objects, function(o) { return o.n; });
     * // => 20
     *
     * // using the `_.property` iteratee shorthand
     * _.sumBy(objects, 'n');
     * // => 20
     */
    (collection: _.List<T> | null | undefined): number;
}

declare const sumBy: SumBy;
export = sumBy;
