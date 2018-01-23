declare namespace _ {
    interface LoDashStatic {
        /**
         * Gets n random elements at unique keys from collection up to the size of collection.
         *
         * @param collection The collection to sample.
         * @param n The number of elements to sample.
         * @return Returns the random elements.
         */
        sampleSize<T>(
            collection: List<T>|Dictionary<T>|NumericDictionary<T> | null | undefined,
            n?: number
        ): T[];

        /**
         * @see _.sampleSize
         */
        sampleSize<T extends object>(
            collection: T | null | undefined,
            n?: number
        ): Array<T[keyof T]>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.sampleSize
         */
        sampleSize<T>(
            this: LoDashImplicitWrapper<List<T>|Dictionary<T>|NumericDictionary<T> | null | undefined>,
            n?: number
        ): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.sampleSize
         */
        sampleSize<T extends object>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            n?: number
        ): LoDashImplicitWrapper<Array<T[keyof T]>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.sampleSize
         */
        sampleSize<T>(
            this: LoDashExplicitWrapper<List<T>|Dictionary<T>|NumericDictionary<T> | null | undefined>,
            n?: number
        ): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.sampleSize
         */
        sampleSize<T extends object>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            n?: number
        ): LoDashExplicitWrapper<Array<T[keyof T]>>;
    }
}