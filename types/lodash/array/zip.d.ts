declare namespace _ {
    interface LoDashStatic {
        /**
         * Creates an array of grouped elements, the first of which contains the first elements of the given arrays,
         * the second of which contains the second elements of the given arrays, and so on.
         *
         * @param arrays The arrays to process.
         * @return Returns the new array of grouped elements.
         */
        zip<T>(...arrays: Array<List<T> | null | undefined>): T[][];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.zip
         */
        zip<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            ...arrays: Array<List<T> | null | undefined>
        ): LoDashImplicitWrapper<T[][]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.zip
         */
        zip<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            ...arrays: Array<List<T> | null | undefined>
        ): LoDashExplicitWrapper<T[][]>;
    }
}