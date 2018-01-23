declare namespace _ {
    interface LoDashStatic {
        /**
         * Gets all but the first element of array.
         *
         * @param array The array to query.
         * @return Returns the slice of array.
         */
        tail<T>(array: List<T> | null | undefined): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.tail
         */
        tail<T>(this: LoDashImplicitWrapper<List<T> | null | undefined>): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.tail
         */
        tail<T>(this: LoDashExplicitWrapper<List<T> | null | undefined>): LoDashExplicitWrapper<T[]>;
    }
}