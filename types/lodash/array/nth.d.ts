declare namespace _ {
    interface LoDashStatic {
        /**
         * Gets the element at index `n` of `array`. If `n` is negative, the nth element from the end is returned.
         *
         * @param array array The array to query.
         * @param value The index of the element to return.
         * @return Returns the nth element of `array`.
         */
        nth<T>(
            array: List<T> | null | undefined,
            n?: number
        ): T | undefined;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.nth
         */
        nth<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            n?: number
        ): T | undefined;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.nth
         */
        nth<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            n?: number
        ): LoDashExplicitWrapper<T | undefined>;
    }
}