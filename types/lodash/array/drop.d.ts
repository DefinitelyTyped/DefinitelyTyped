declare namespace _ {
    interface LoDashStatic {
        /**
         * Creates a slice of array with n elements dropped from the beginning.
         *
         * @param array The array to query.
         * @param n The number of elements to drop.
         * @return Returns the slice of array.
         */
        drop<T>(array: List<T> | null | undefined, n?: number): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.drop
         */
        drop<T>(this: LoDashImplicitWrapper<List<T> | null | undefined>, n?: number): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.drop
         */
        drop<T>(this: LoDashExplicitWrapper<List<T> | null | undefined>, n?: number): LoDashExplicitWrapper<T[]>;
    }
}