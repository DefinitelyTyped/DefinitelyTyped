declare namespace _ {
    interface LoDashStatic {
        /**
         * This method is like _.unzip except that it accepts an iteratee to specify how regrouped values should be
         * combined. The iteratee is bound to thisArg and invoked with four arguments: (accumulator, value, index,
         * group).
         *
         * @param array The array of grouped elements to process.
         * @param iteratee The function to combine regrouped values.
         * @param thisArg The this binding of iteratee.
         * @return Returns the new array of regrouped elements.
         */
        unzipWith<T, TResult>(
            array: List<List<T>> | null | undefined,
            iteratee: (...values: T[]) => TResult
        ): TResult[];

        /**
         * @see _.unzipWith
         */
        unzipWith<T>(
            array: List<List<T>> | null | undefined
        ): T[][];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.unzipWith
         */
        unzipWith<T, TResult>(
            this: LoDashImplicitWrapper<List<List<T>> | null | undefined>,
            iteratee: (...values: T[]) => TResult
        ): LoDashImplicitWrapper<TResult[]>;

        /**
         * @see _.unzipWith
         */
        unzipWith<T>(
            this: LoDashImplicitWrapper<List<List<T>> | null | undefined>
        ): LoDashImplicitWrapper<T[][]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.unzipWith
         */
        unzipWith<T, TResult>(
            this: LoDashExplicitWrapper<List<List<T>> | null | undefined>,
            iteratee: (...values: T[]) => TResult
        ): LoDashExplicitWrapper<TResult[]>;

        /**
         * @see _.unzipWith
         */
        unzipWith<T>(
            this: LoDashExplicitWrapper<List<List<T>> | null | undefined>
        ): LoDashExplicitWrapper<T[][]>;
    }
}