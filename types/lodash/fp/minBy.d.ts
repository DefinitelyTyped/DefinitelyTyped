// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface MinBy {
    /**
     * This method is like `_.min` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @category Math
     * @param array The array to iterate over.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns the minimum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.minBy(objects, function(o) { return o.a; });
     * // => { 'n': 1 }
     *
     * // using the `_.property` iteratee shorthand
     * _.minBy(objects, 'n');
     * // => { 'n': 1 }
     */
    (): MinBy;
    /**
     * This method is like `_.min` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @category Math
     * @param array The array to iterate over.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns the minimum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.minBy(objects, function(o) { return o.a; });
     * // => { 'n': 1 }
     *
     * // using the `_.property` iteratee shorthand
     * _.minBy(objects, 'n');
     * // => { 'n': 1 }
     */
    <T>(iteratee: _.ValueIteratee<T>): MinBy1x1<T>;
    /**
     * This method is like `_.min` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @category Math
     * @param array The array to iterate over.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns the minimum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.minBy(objects, function(o) { return o.a; });
     * // => { 'n': 1 }
     *
     * // using the `_.property` iteratee shorthand
     * _.minBy(objects, 'n');
     * // => { 'n': 1 }
     */
    <T>(iteratee: _.ValueIteratee<T>, collection: _.List<T> | null | undefined): T | undefined;
}
interface MinBy1x1<T> {
    /**
     * This method is like `_.min` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @category Math
     * @param array The array to iterate over.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns the minimum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.minBy(objects, function(o) { return o.a; });
     * // => { 'n': 1 }
     *
     * // using the `_.property` iteratee shorthand
     * _.minBy(objects, 'n');
     * // => { 'n': 1 }
     */
    (): MinBy1x1<T>;
    /**
     * This method is like `_.min` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @category Math
     * @param array The array to iterate over.
     * @param [iteratee=_.identity] The iteratee invoked per element.
     * @returns Returns the minimum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.minBy(objects, function(o) { return o.a; });
     * // => { 'n': 1 }
     *
     * // using the `_.property` iteratee shorthand
     * _.minBy(objects, 'n');
     * // => { 'n': 1 }
     */
    (collection: _.List<T> | null | undefined): T | undefined;
}

declare const minBy: MinBy;
declare namespace minBy {}
export = minBy;
