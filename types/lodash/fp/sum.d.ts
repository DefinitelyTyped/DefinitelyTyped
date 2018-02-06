import _ = require("../index");

declare namespace Lodash {
    interface Sum {
        /**
         * Computes the sum of the values in `array`.
         *
         * @category Math
         * @param array The array to iterate over.
         * @returns Returns the sum.
         * @example
         *
         * _.sum([4, 2, 8, 6]);
         * // => 20
         */
        (): Sum;
        /**
         * Computes the sum of the values in `array`.
         *
         * @category Math
         * @param array The array to iterate over.
         * @returns Returns the sum.
         * @example
         *
         * _.sum([4, 2, 8, 6]);
         * // => 20
         */
        (collection: _.List<any> | null | undefined): number;
    }
}

declare const sum: Lodash.Sum;
export = sum;
