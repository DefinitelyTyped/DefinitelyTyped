import _ = require("../index");

declare namespace Lodash {
    interface Uniq {
        /**
         * Creates a duplicate-free version of an array, using
         * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
         * for equality comparisons, in which only the first occurrence of each element
         * is kept.
         *
         * @category Array
         * @param array The array to inspect.
         * @returns Returns the new duplicate free array.
         * @example
         *
         * _.uniq([2, 1, 2]);
         * // => [2, 1]
         */
        (): Uniq;
        /**
         * Creates a duplicate-free version of an array, using
         * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
         * for equality comparisons, in which only the first occurrence of each element
         * is kept.
         *
         * @category Array
         * @param array The array to inspect.
         * @returns Returns the new duplicate free array.
         * @example
         *
         * _.uniq([2, 1, 2]);
         * // => [2, 1]
         */
        <T>(array: _.List<T> | null | undefined): T[];
    }
}

declare const uniq: Lodash.Uniq;
export = uniq;
