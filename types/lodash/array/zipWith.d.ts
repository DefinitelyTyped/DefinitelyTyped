import _ = require("../index");
declare module "../index" {
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
        zipWith<T, TResult>(
            arrays: List<T>,
            iteratee: (value1: T) => TResult
        ): TResult[];

        /**
         * @see _.zipWith
         */
        zipWith<T1, T2, TResult>(
            arrays1: List<T1>,
            arrays2: List<T2>,
            iteratee: (value1: T1, value2: T2) => TResult
        ): TResult[];

        /**
         * @see _.zipWith
         */
        zipWith<T1, T2, T3, TResult>(
            arrays1: List<T1>,
            arrays2: List<T2>,
            arrays3: List<T3>,
            iteratee: (value1: T1, value2: T2, value3: T3) => TResult
        ): TResult[];

        /**
         * @see _.zipWith
         */
        zipWith<T1, T2, T3, T4, TResult>(
            arrays1: List<T1>,
            arrays2: List<T2>,
            arrays3: List<T3>,
            arrays4: List<T4>,
            iteratee: (value1: T1, value2: T2, value3: T3, value4: T4) => TResult
        ): TResult[];

        /**
         * @see _.zipWith
         */
        zipWith<T1, T2, T3, T4, T5, TResult>(
            arrays1: List<T1>,
            arrays2: List<T2>,
            arrays3: List<T3>,
            arrays4: List<T4>,
            arrays5: List<T5>,
            iteratee: (value1: T1, value2: T2, value3: T3, value4: T4, value5: T5) => TResult
        ): TResult[];

        /**
         * @see _.zipWith
         */
        zipWith<T, TResult>(
            ...iteratee: Array<((...group: T[]) => TResult) | List<T> | null | undefined>
        ): TResult[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.zipWith
         */
        zipWith<T, TResult>(
            this: LoDashImplicitWrapper<List<T>>,
            iteratee: (value1: T) => TResult
        ): LoDashImplicitWrapper<TResult[]>;

        /**
         * @see _.zipWith
         */
        zipWith<T1, T2, TResult>(
            this: LoDashImplicitWrapper<List<T1>>,
            arrays2: List<T2>,
            iteratee: (value1: T1, value2: T2) => TResult
        ): LoDashImplicitWrapper<TResult[]>;

        /**
         * @see _.zipWith
         */
        zipWith<T1, T2, T3, TResult>(
            this: LoDashImplicitWrapper<List<T1>>,
            arrays2: List<T2>,
            arrays3: List<T3>,
            iteratee: (value1: T1, value2: T2, value3: T3) => TResult
        ): LoDashImplicitWrapper<TResult[]>;

        /**
         * @see _.zipWith
         */
        zipWith<T1, T2, T3, T4, TResult>(
            this: LoDashImplicitWrapper<List<T1>>,
            arrays2: List<T2>,
            arrays3: List<T3>,
            arrays4: List<T4>,
            iteratee: (value1: T1, value2: T2, value3: T3, value4: T4) => TResult
        ): LoDashImplicitWrapper<TResult[]>;

        /**
         * @see _.zipWith
         */
        zipWith<T1, T2, T3, T4, T5, TResult>(
            this: LoDashImplicitWrapper<List<T1>>,
            arrays2: List<T2>,
            arrays3: List<T3>,
            arrays4: List<T4>,
            arrays5: List<T5>,
            iteratee: (value1: T1, value2: T2, value3: T3, value4: T4, value5: T5) => TResult
        ): LoDashImplicitWrapper<TResult[]>;

        /**
         * @see _.zipWith
         */
        zipWith<T, TResult>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            ...iteratee: Array<((...group: T[]) => TResult) | List<T> | null | undefined>
        ): LoDashImplicitWrapper<TResult[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.zipWith
         */
        zipWith<T, TResult>(
            this: LoDashExplicitWrapper<List<T>>,
            iteratee: (value1: T) => TResult
        ): LoDashExplicitWrapper<TResult[]>;

        /**
         * @see _.zipWith
         */
        zipWith<T1, T2, TResult>(
            this: LoDashExplicitWrapper<List<T1>>,
            arrays2: List<T2>,
            iteratee: (value1: T1, value2: T2) => TResult
        ): LoDashExplicitWrapper<TResult[]>;

        /**
         * @see _.zipWith
         */
        zipWith<T1, T2, T3, TResult>(
            this: LoDashExplicitWrapper<List<T1>>,
            arrays2: List<T2>,
            arrays3: List<T3>,
            iteratee: (value1: T1, value2: T2, value3: T3) => TResult
        ): LoDashExplicitWrapper<TResult[]>;

        /**
         * @see _.zipWith
         */
        zipWith<T1, T2, T3, T4, TResult>(
            this: LoDashExplicitWrapper<List<T1>>,
            arrays2: List<T2>,
            arrays3: List<T3>,
            arrays4: List<T4>,
            iteratee: (value1: T1, value2: T2, value3: T3, value4: T4) => TResult
        ): LoDashExplicitWrapper<TResult[]>;

        /**
         * @see _.zipWith
         */
        zipWith<T1, T2, T3, T4, T5, TResult>(
            this: LoDashExplicitWrapper<List<T1>>,
            arrays2: List<T2>,
            arrays3: List<T3>,
            arrays4: List<T4>,
            arrays5: List<T5>,
            iteratee: (value1: T1, value2: T2, value3: T3, value4: T4, value5: T5) => TResult
        ): LoDashExplicitWrapper<TResult[]>;

        /**
         * @see _.zipWith
         */
        zipWith<T, TResult>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            ...iteratee: Array<((...group: T[]) => TResult) | List<T> | null | undefined>
        ): LoDashExplicitWrapper<TResult[]>;
    }
}