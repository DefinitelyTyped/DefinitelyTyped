import _ = require("../index");

declare namespace Lodash {
    interface Mean {
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
        (): Mean;
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
        (collection: _.List<any> | null | undefined): number;
    }
}

declare const mean: Lodash.Mean;
export = mean;
