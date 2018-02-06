import _ = require("../index");

declare namespace Lodash {
    interface SortedUniq {
        /**
         * This method is like `_.uniq` except that it's designed and optimized
         * for sorted arrays.
         *
         * @category Array
         * @param array The array to inspect.
         * @returns Returns the new duplicate free array.
         * @example
         *
         * _.sortedUniq([1, 1, 2]);
         * // => [1, 2]
         */
        (): SortedUniq;
        /**
         * This method is like `_.uniq` except that it's designed and optimized
         * for sorted arrays.
         *
         * @category Array
         * @param array The array to inspect.
         * @returns Returns the new duplicate free array.
         * @example
         *
         * _.sortedUniq([1, 1, 2]);
         * // => [1, 2]
         */
        <T>(array: _.List<T> | null | undefined): T[];
    }
}

declare const sortedUniq: Lodash.SortedUniq;
export = sortedUniq;
