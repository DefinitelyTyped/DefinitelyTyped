// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
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
    type SortedUniq = <T>(array: _.List<T> | null | undefined) => T[];
}

declare const sortedUniq: Lodash.SortedUniq;
export = sortedUniq;
