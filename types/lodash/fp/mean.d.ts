// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

type Mean =
    /**
     * Computes the mean of the values in `array`.
     *
     * @category Math
     * @param array The array to iterate over.
     * @returns Returns the mean.
     * @example
     *
     * _.mean([4, 2, 8, 6]);
     * // => 5
     */
    (collection: _.List<any> | null | undefined) => number;

declare const mean: Mean;
export = mean;
