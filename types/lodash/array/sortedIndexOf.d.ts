declare namespace _ {
    interface LoDashStatic {
        /**
         * This method is like `_.indexOf` except that it performs a binary
         * search on a sorted `array`.
         *
         * @category Array
         * @param array The array to search.
         * @param value The value to search for.
         * @returns Returns the index of the matched value, else `-1`.
         * @example
         *
         * _.sortedIndexOf([1, 1, 2, 2], 2);
         * // => 2
         */
        sortedIndexOf<T>(
            array: List<T> | null | undefined,
            value: T
        ): number;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.sortedIndexOf
         */
        sortedIndexOf<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            value: T
        ): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.sortedIndexOf
         */
        sortedIndexOf<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            value: T
        ): LoDashExplicitWrapper<number>;
    }
}