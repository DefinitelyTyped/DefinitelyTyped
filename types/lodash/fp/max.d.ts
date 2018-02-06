import _ = require("../index");

declare namespace Lodash {
    interface Max {
        /**
          * Computes the maximum value of `array`. If `array` is empty or falsey
          * `undefined` is returned.
          *
          * @category Math
          * @param array The array to iterate over.
          * @returns Returns the maximum value.
          */
        (): Max;
        /**
          * Computes the maximum value of `array`. If `array` is empty or falsey
          * `undefined` is returned.
          *
          * @category Math
          * @param array The array to iterate over.
          * @returns Returns the maximum value.
          */
        <T>(collection: _.List<T> | null | undefined): T | undefined;
    }
}

declare const max: Lodash.Max;
export = max;
