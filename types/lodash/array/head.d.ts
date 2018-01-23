declare namespace _ {
    interface LoDashStatic {
        /**
         * Gets the first element of array.
         *
         * @alias _.first
         *
         * @param array The array to query.
         * @return Returns the first element of array.
         */
        head<T>(array: List<T> | null | undefined): T | undefined;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.head
         */
        head<T>(this: LoDashImplicitWrapper<List<T> | null | undefined>): T | undefined;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.head
         */
        head<T>(this: LoDashExplicitWrapper<List<T> | null | undefined>): LoDashExplicitWrapper<T | undefined>;
    }
}