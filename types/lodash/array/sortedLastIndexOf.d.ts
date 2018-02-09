import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * This method is like `_.lastIndexOf` except that it performs a binary
         * search on a sorted `array`.
         *
         * @category Array
         * @param array The array to search.
         * @param value The value to search for.
         * @returns Returns the index of the matched value, else `-1`.
         * @example
         *
         * _.sortedLastIndexOf([1, 1, 2, 2], 2);
         * // => 3
         */
        sortedLastIndexOf<T>(
            array: List<T> | null | undefined,
            value: T
        ): number;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.sortedLastIndexOf
         */
        sortedLastIndexOf<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            value: T
        ): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.sortedLastIndexOf
         */
        sortedLastIndexOf<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            value: T
        ): LoDashExplicitWrapper<number>;
    }
}