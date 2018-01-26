import _ = require("..");
declare module ".." {
    interface LoDashStatic {
        /**
         * This method is like _.zip except that it accepts an iteratee to specify how grouped values should be
         * combined. The iteratee is bound to thisArg and invoked with four arguments: (accumulator, value, index,
         * group).
         * @param [arrays] The arrays to process.
         * @param [iteratee] The function to combine grouped values.
         * @param [thisArg] The `this` binding of `iteratee`.
         * @return Returns the new array of grouped elements.
         */
        zipWith<T>(
            ...arrays: Array<List<T> | null | undefined>
        ): T[][];

        /**
         * @see _.zipWith
         */
        zipWith<T, TResult>(
            arrays: List<T> | null | undefined,
            iteratee: (value1: T) => TResult
        ): TResult[];

        /**
         * @see _.zipWith
         */
        zipWith<T, TResult>(
            arrays: List<T> | null | undefined,
            arrays2: List<T> | null | undefined,
            iteratee: (value1: T, value2: T) => TResult
        ): TResult[];

        /**
         * @see _.zipWith
         */
        zipWith<T, TResult>(
            arrays: List<T> | null | undefined,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            iteratee: (value1: T, value2: T, value3: T) => TResult
        ): TResult[];

        /**
         * @see _.zipWith
         */
        zipWith<T, TResult>(
            arrays: List<T> | null | undefined,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            arrays4: List<T> | null | undefined,
            iteratee: (value1: T, value2: T, value3: T, value4: T) => TResult
        ): TResult[];

        /**
         * @see _.zipWith
         */
        zipWith<T, TResult>(
            arrays: List<T> | null | undefined,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            arrays4: List<T> | null | undefined,
            arrays5: List<T> | null | undefined,
            iteratee: (value1: T, value2: T, value3: T, value4: T, value5: T) => TResult
        ): TResult[];

        zipWith<T, TResult>(
            ...iteratee: Array<((...group: T[]) => TResult) | List<T> | null | undefined>
        ): TResult[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.zipWith
         */
        zipWith<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            ...arrays: Array<List<T> | null | undefined>
        ): LoDashImplicitWrapper<T[][]>;

        /**
         * @see _.zipWith
         */
        zipWith<T, TResult>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            iteratee: (value1: T) => TResult
        ): LoDashImplicitWrapper<TResult[]>;

        /**
         * @see _.zipWith
         */
        zipWith<T, TResult>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            iteratee: (value1: T, value2: T) => TResult
        ): LoDashImplicitWrapper<TResult[]>;

        /**
         * @see _.zipWith
         */
        zipWith<T, TResult>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            iteratee: (value1: T, value2: T, value3: T) => TResult
        ): LoDashImplicitWrapper<TResult[]>;

        /**
         * @see _.zipWith
         */
        zipWith<T, TResult>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            arrays4: List<T> | null | undefined,
            iteratee: (value1: T, value2: T, value3: T, value4: T) => TResult
        ): LoDashImplicitWrapper<TResult[]>;

        /**
         * @see _.zipWith
         */
        zipWith<T, TResult>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            arrays4: List<T> | null | undefined,
            arrays5: List<T> | null | undefined,
            ...iteratee: Array<((...group: T[]) => TResult) | List<T> | null | undefined>
        ): LoDashImplicitWrapper<TResult[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.zipWith
         */
        zipWith<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            ...arrays: Array<List<T> | null | undefined>
        ): LoDashExplicitWrapper<T[][]>;

        /**
         * @see _.zipWith
         */
        zipWith<T, TResult>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            iteratee: (value1: T) => TResult
        ): LoDashExplicitWrapper<TResult[]>;

        /**
         * @see _.zipWith
         */
        zipWith<T, TResult>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            iteratee: (value1: T, value2: T) => TResult
        ): LoDashExplicitWrapper<TResult[]>;

        /**
         * @see _.zipWith
         */
        zipWith<T, TResult>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            iteratee: (value1: T, value2: T, value3: T) => TResult
        ): LoDashExplicitWrapper<TResult[]>;

        /**
         * @see _.zipWith
         */
        zipWith<T, TResult>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            arrays4: List<T> | null | undefined,
            iteratee: (value1: T, value2: T, value3: T, value4: T) => TResult
        ): LoDashExplicitWrapper<TResult[]>;

        /**
         * @see _.zipWith
         */
        zipWith<T, TResult>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            arrays4: List<T> | null | undefined,
            arrays5: List<T> | null | undefined,
            ...iteratee: Array<((...group: T[]) => TResult) | List<T> | null | undefined>
        ): LoDashExplicitWrapper<TResult[]>;
    }
}