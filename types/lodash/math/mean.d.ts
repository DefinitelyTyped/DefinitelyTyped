import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
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
        mean(
            collection: List<any> | null | undefined
        ): number;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.mean
         */
        mean(): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.mean
         */
        mean(): LoDashExplicitWrapper<number>;
    }
}