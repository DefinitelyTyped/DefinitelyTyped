import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
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
        sum(collection: List<any> | null | undefined): number;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.sum
         */
        sum(): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.sum
         */
        sum(): LoDashExplicitWrapper<number>;
    }
}