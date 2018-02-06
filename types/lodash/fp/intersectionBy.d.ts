// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    interface IntersectionBy {
        /**
         * This method is like `_.intersection` except that it accepts `iteratee`
         * which is invoked for each element of each `arrays` to generate the criterion
         * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
         *
         * @category Array
         * @param [arrays] The arrays to inspect.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns the new array of shared values.
         * @example
         *
         * _.intersectionBy([2.1, 1.2], [4.3, 2.4], Math.floor);
         * // => [2.1]
         *
         * // using the `_.property` iteratee shorthand
         * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
         * // => [{ 'x': 1 }]
         */
        (): IntersectionBy;
        /**
         * This method is like `_.intersection` except that it accepts `iteratee`
         * which is invoked for each element of each `arrays` to generate the criterion
         * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
         *
         * @category Array
         * @param [arrays] The arrays to inspect.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns the new array of shared values.
         * @example
         *
         * _.intersectionBy([2.1, 1.2], [4.3, 2.4], Math.floor);
         * // => [2.1]
         *
         * // using the `_.property` iteratee shorthand
         * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
         * // => [{ 'x': 1 }]
         */
        <T1, T2>(iteratee: _.ValueIteratee<T1 | T2>): IntersectionBy1x1<T1, T2>;
        /**
         * This method is like `_.intersection` except that it accepts `iteratee`
         * which is invoked for each element of each `arrays` to generate the criterion
         * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
         *
         * @category Array
         * @param [arrays] The arrays to inspect.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns the new array of shared values.
         * @example
         *
         * _.intersectionBy([2.1, 1.2], [4.3, 2.4], Math.floor);
         * // => [2.1]
         *
         * // using the `_.property` iteratee shorthand
         * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
         * // => [{ 'x': 1 }]
         */
        <T1, T2>(iteratee: _.ValueIteratee<T1 | T2>, array: _.List<T1> | null): IntersectionBy1x2<T1, T2>;
        /**
         * This method is like `_.intersection` except that it accepts `iteratee`
         * which is invoked for each element of each `arrays` to generate the criterion
         * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
         *
         * @category Array
         * @param [arrays] The arrays to inspect.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns the new array of shared values.
         * @example
         *
         * _.intersectionBy([2.1, 1.2], [4.3, 2.4], Math.floor);
         * // => [2.1]
         *
         * // using the `_.property` iteratee shorthand
         * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
         * // => [{ 'x': 1 }]
         */
        <T1, T2>(iteratee: _.ValueIteratee<T1 | T2>, array: _.List<T1> | null, values: _.List<T2>): T1[];
    }
    interface IntersectionBy1x1<T1, T2> {
        /**
         * This method is like `_.intersection` except that it accepts `iteratee`
         * which is invoked for each element of each `arrays` to generate the criterion
         * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
         *
         * @category Array
         * @param [arrays] The arrays to inspect.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns the new array of shared values.
         * @example
         *
         * _.intersectionBy([2.1, 1.2], [4.3, 2.4], Math.floor);
         * // => [2.1]
         *
         * // using the `_.property` iteratee shorthand
         * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
         * // => [{ 'x': 1 }]
         */
        (): IntersectionBy1x1<T1, T2>;
        /**
         * This method is like `_.intersection` except that it accepts `iteratee`
         * which is invoked for each element of each `arrays` to generate the criterion
         * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
         *
         * @category Array
         * @param [arrays] The arrays to inspect.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns the new array of shared values.
         * @example
         *
         * _.intersectionBy([2.1, 1.2], [4.3, 2.4], Math.floor);
         * // => [2.1]
         *
         * // using the `_.property` iteratee shorthand
         * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
         * // => [{ 'x': 1 }]
         */
        (array: _.List<T1> | null): IntersectionBy1x2<T1, T2>;
        /**
         * This method is like `_.intersection` except that it accepts `iteratee`
         * which is invoked for each element of each `arrays` to generate the criterion
         * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
         *
         * @category Array
         * @param [arrays] The arrays to inspect.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns the new array of shared values.
         * @example
         *
         * _.intersectionBy([2.1, 1.2], [4.3, 2.4], Math.floor);
         * // => [2.1]
         *
         * // using the `_.property` iteratee shorthand
         * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
         * // => [{ 'x': 1 }]
         */
        (array: _.List<T1> | null, values: _.List<T2>): T1[];
    }
    interface IntersectionBy1x2<T1, T2> {
        /**
         * This method is like `_.intersection` except that it accepts `iteratee`
         * which is invoked for each element of each `arrays` to generate the criterion
         * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
         *
         * @category Array
         * @param [arrays] The arrays to inspect.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns the new array of shared values.
         * @example
         *
         * _.intersectionBy([2.1, 1.2], [4.3, 2.4], Math.floor);
         * // => [2.1]
         *
         * // using the `_.property` iteratee shorthand
         * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
         * // => [{ 'x': 1 }]
         */
        (): IntersectionBy1x2<T1, T2>;
        /**
         * This method is like `_.intersection` except that it accepts `iteratee`
         * which is invoked for each element of each `arrays` to generate the criterion
         * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
         *
         * @category Array
         * @param [arrays] The arrays to inspect.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns the new array of shared values.
         * @example
         *
         * _.intersectionBy([2.1, 1.2], [4.3, 2.4], Math.floor);
         * // => [2.1]
         *
         * // using the `_.property` iteratee shorthand
         * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
         * // => [{ 'x': 1 }]
         */
        (values: _.List<T2>): T1[];
    }
}

declare const intersectionBy: Lodash.IntersectionBy;
export = intersectionBy;
