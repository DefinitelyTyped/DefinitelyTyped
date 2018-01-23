declare namespace _ {
    interface LoDashStatic {
        /**
         * This method is like _.indexOf except that it iterates over elements of array from right to left.
         *
         * @param array The array to search.
         * @param value The value to search for.
         * @param fromIndex The index to search from or true to perform a binary search on a sorted array.
         * @return Returns the index of the matched value, else -1.
         */
        lastIndexOf<T>(
            array: List<T> | null | undefined,
            value: T,
            fromIndex?: true|number
        ): number;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.indexOf
         */
        lastIndexOf<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            value: T,
            fromIndex?: true|number
        ): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.indexOf
         */
        lastIndexOf<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            value: T,
            fromIndex?: true|number
        ): LoDashExplicitWrapper<number>;
    }
}