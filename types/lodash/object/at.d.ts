declare namespace _ {
    interface LoDashStatic {
        /**
         * Creates an array of elements corresponding to the given keys, or indexes, of collection. Keys may be
         * specified as individual arguments or as arrays of keys.
         *
         * @param object The object to iterate over.
         * @param props The property names or indexes of elements to pick, specified individually or in arrays.
         * @return Returns the new array of picked elements.
         */
        at<T>(
            object: List<T> | Dictionary<T> | null | undefined,
            ...props: PropertyPath[]
        ): T[];

        /**
         * @see _.at
         */
        at<T extends object>(
            object: T | null | undefined,
            ...props: Array<Many<keyof T>>
        ): Array<T[keyof T]>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.at
         */
        at<T>(
            this: LoDashImplicitWrapper<List<T> | Dictionary<T> | null | undefined>,
            ...props: PropertyPath[]
        ): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.at
         */
        at<T extends object>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            ...props: Array<Many<keyof T>>
        ): LoDashImplicitWrapper<Array<T[keyof T]>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.at
         */
        at<T>(
            this: LoDashExplicitWrapper<List<T> | Dictionary<T> | null | undefined>,
            ...props: PropertyPath[]
        ): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.at
         */
        at<T extends object>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            ...props: Array<Many<keyof T>>
        ): LoDashExplicitWrapper<Array<T[keyof T]>>;
    }
}