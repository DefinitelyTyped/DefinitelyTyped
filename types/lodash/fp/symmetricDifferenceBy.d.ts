// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    interface XorBy {
        /**
         * This method is like `_.xor` except that it accepts `iteratee` which is
         * invoked for each element of each `arrays` to generate the criterion by which
         * uniqueness is computed. The iteratee is invoked with one argument: (value).
         *
         * @category Array
         * @param [arrays] The arrays to inspect.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns the new array of values.
         * @example
         *
         * _.xorBy([2.1, 1.2], [4.3, 2.4], Math.floor);
         * // => [1.2, 4.3]
         *
         * // using the `_.property` iteratee shorthand
         * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
         * // => [{ 'x': 2 }]
         */
        (): XorBy;
        /**
         * This method is like `_.xor` except that it accepts `iteratee` which is
         * invoked for each element of each `arrays` to generate the criterion by which
         * uniqueness is computed. The iteratee is invoked with one argument: (value).
         *
         * @category Array
         * @param [arrays] The arrays to inspect.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns the new array of values.
         * @example
         *
         * _.xorBy([2.1, 1.2], [4.3, 2.4], Math.floor);
         * // => [1.2, 4.3]
         *
         * // using the `_.property` iteratee shorthand
         * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
         * // => [{ 'x': 2 }]
         */
        <T>(iteratee: _.ValueIteratee<T>): XorBy1x1<T>;
        /**
         * This method is like `_.xor` except that it accepts `iteratee` which is
         * invoked for each element of each `arrays` to generate the criterion by which
         * uniqueness is computed. The iteratee is invoked with one argument: (value).
         *
         * @category Array
         * @param [arrays] The arrays to inspect.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns the new array of values.
         * @example
         *
         * _.xorBy([2.1, 1.2], [4.3, 2.4], Math.floor);
         * // => [1.2, 4.3]
         *
         * // using the `_.property` iteratee shorthand
         * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
         * // => [{ 'x': 2 }]
         */
        <T>(iteratee: _.ValueIteratee<T>, arrays: _.List<T> | null | undefined): XorBy1x2<T>;
        /**
         * This method is like `_.xor` except that it accepts `iteratee` which is
         * invoked for each element of each `arrays` to generate the criterion by which
         * uniqueness is computed. The iteratee is invoked with one argument: (value).
         *
         * @category Array
         * @param [arrays] The arrays to inspect.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns the new array of values.
         * @example
         *
         * _.xorBy([2.1, 1.2], [4.3, 2.4], Math.floor);
         * // => [1.2, 4.3]
         *
         * // using the `_.property` iteratee shorthand
         * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
         * // => [{ 'x': 2 }]
         */
        <T>(iteratee: _.ValueIteratee<T>, arrays: _.List<T> | null | undefined, arrays2: _.List<T> | null | undefined): T[];
    }
    interface XorBy1x1<T> {
        /**
         * This method is like `_.xor` except that it accepts `iteratee` which is
         * invoked for each element of each `arrays` to generate the criterion by which
         * uniqueness is computed. The iteratee is invoked with one argument: (value).
         *
         * @category Array
         * @param [arrays] The arrays to inspect.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns the new array of values.
         * @example
         *
         * _.xorBy([2.1, 1.2], [4.3, 2.4], Math.floor);
         * // => [1.2, 4.3]
         *
         * // using the `_.property` iteratee shorthand
         * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
         * // => [{ 'x': 2 }]
         */
        (): XorBy1x1<T>;
        /**
         * This method is like `_.xor` except that it accepts `iteratee` which is
         * invoked for each element of each `arrays` to generate the criterion by which
         * uniqueness is computed. The iteratee is invoked with one argument: (value).
         *
         * @category Array
         * @param [arrays] The arrays to inspect.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns the new array of values.
         * @example
         *
         * _.xorBy([2.1, 1.2], [4.3, 2.4], Math.floor);
         * // => [1.2, 4.3]
         *
         * // using the `_.property` iteratee shorthand
         * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
         * // => [{ 'x': 2 }]
         */
        (arrays: _.List<T> | null | undefined): XorBy1x2<T>;
        /**
         * This method is like `_.xor` except that it accepts `iteratee` which is
         * invoked for each element of each `arrays` to generate the criterion by which
         * uniqueness is computed. The iteratee is invoked with one argument: (value).
         *
         * @category Array
         * @param [arrays] The arrays to inspect.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns the new array of values.
         * @example
         *
         * _.xorBy([2.1, 1.2], [4.3, 2.4], Math.floor);
         * // => [1.2, 4.3]
         *
         * // using the `_.property` iteratee shorthand
         * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
         * // => [{ 'x': 2 }]
         */
        (arrays: _.List<T> | null | undefined, arrays2: _.List<T> | null | undefined): T[];
    }
    interface XorBy1x2<T> {
        /**
         * This method is like `_.xor` except that it accepts `iteratee` which is
         * invoked for each element of each `arrays` to generate the criterion by which
         * uniqueness is computed. The iteratee is invoked with one argument: (value).
         *
         * @category Array
         * @param [arrays] The arrays to inspect.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns the new array of values.
         * @example
         *
         * _.xorBy([2.1, 1.2], [4.3, 2.4], Math.floor);
         * // => [1.2, 4.3]
         *
         * // using the `_.property` iteratee shorthand
         * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
         * // => [{ 'x': 2 }]
         */
        (): XorBy1x2<T>;
        /**
         * This method is like `_.xor` except that it accepts `iteratee` which is
         * invoked for each element of each `arrays` to generate the criterion by which
         * uniqueness is computed. The iteratee is invoked with one argument: (value).
         *
         * @category Array
         * @param [arrays] The arrays to inspect.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns the new array of values.
         * @example
         *
         * _.xorBy([2.1, 1.2], [4.3, 2.4], Math.floor);
         * // => [1.2, 4.3]
         *
         * // using the `_.property` iteratee shorthand
         * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
         * // => [{ 'x': 2 }]
         */
        (arrays2: _.List<T> | null | undefined): T[];
    }
}

declare const symmetricDifferenceBy: Lodash.XorBy;
export = symmetricDifferenceBy;
