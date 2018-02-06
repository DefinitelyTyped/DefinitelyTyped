import _ = require("../index");

declare namespace Lodash {
    interface Min {
        /**
         * Computes the minimum value of `array`. If `array` is empty or falsey
         * `undefined` is returned.
         *
         * @category Math
         * @param array The array to iterate over.
         * @returns Returns the minimum value.
         */
        (): Min;
        /**
         * Computes the minimum value of `array`. If `array` is empty or falsey
         * `undefined` is returned.
         *
         * @category Math
         * @param array The array to iterate over.
         * @returns Returns the minimum value.
         */
        <T>(collection: _.List<T> | null | undefined): T | undefined;
    }
}

declare const min: Lodash.Min;
export = min;
