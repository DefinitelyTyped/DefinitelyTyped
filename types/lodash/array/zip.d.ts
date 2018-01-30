import * as _ from "../index";
declare module "../index" {
    interface LoDashStatic {
        /**
         * Creates an array of grouped elements, the first of which contains the first elements of the given arrays,
         * the second of which contains the second elements of the given arrays, and so on.
         *
         * @param arrays The arrays to process.
         * @return Returns the new array of grouped elements.
         */
        zip<T1, T2>(arrays1: List<T1>, arrays2: List<T2>): Array<[T1, T2]>;

        /**
         * @see _.zip
         */
        zip<T1, T2, T3>(arrays1: List<T1>, arrays2: List<T2>, arrays3: List<T3>): Array<[T1, T2, T3]>;

        /**
         * @see _.zip
         */
        zip<T1, T2, T3, T4>(arrays1: List<T1>, arrays2: List<T2>, arrays3: List<T3>, arrays4: List<T4>): Array<[T1, T2, T3, T4]>;

        /**
         * @see _.zip
         */
        zip<T1, T2, T3, T4, T5>(arrays1: List<T1>, arrays2: List<T2>, arrays3: List<T3>, arrays4: List<T4>, arrays5: List<T5>): Array<[T1, T2, T3, T4, T5]>;

        /**
         * @see _.zip
         */
        zip<T>(...arrays: Array<List<T> | null | undefined>): T[][];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.zip
         */
        zip<T1, T2>(
            this: LoDashImplicitWrapper<List<T1>>,
            arrays2: List<T2>,
        ): LoDashImplicitWrapper<Array<[T1, T2]>>;

        /**
         * @see _.zip
         */
        zip<T1, T2, T3>(
            this: LoDashImplicitWrapper<List<T1>>,
            arrays2: List<T2>,
            arrays3: List<T3>,
        ): LoDashImplicitWrapper<Array<[T1, T2, T3]>>;

        /**
         * @see _.zip
         */
        zip<T1, T2, T3, T4>(
            this: LoDashImplicitWrapper<List<T1>>,
            arrays2: List<T2>,
            arrays3: List<T3>,
            arrays4: List<T4>,
        ): LoDashImplicitWrapper<Array<[T1, T2, T3, T4]>>;

        /**
         * @see _.zip
         */
        zip<T1, T2, T3, T4, T5>(
            this: LoDashImplicitWrapper<List<T1>>,
            arrays2: List<T2>,
            arrays3: List<T3>,
            arrays4: List<T4>,
            arrays5: List<T5>,
        ): LoDashImplicitWrapper<Array<[T1, T2, T3, T4, T5]>>;

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
        zip<T1, T2>(
            this: LoDashExplicitWrapper<List<T1>>,
            arrays2: List<T2>,
        ): LoDashExplicitWrapper<Array<[T1, T2]>>;

        /**
         * @see _.zip
         */
        zip<T1, T2, T3>(
            this: LoDashExplicitWrapper<List<T1>>,
            arrays2: List<T2>,
            arrays3: List<T3>,
        ): LoDashExplicitWrapper<Array<[T1, T2, T3]>>;

        /**
         * @see _.zip
         */
        zip<T1, T2, T3, T4>(
            this: LoDashExplicitWrapper<List<T1>>,
            arrays2: List<T2>,
            arrays3: List<T3>,
            arrays4: List<T4>,
        ): LoDashExplicitWrapper<Array<[T1, T2, T3, T4]>>;

        /**
         * @see _.zip
         */
        zip<T1, T2, T3, T4, T5>(
            this: LoDashExplicitWrapper<List<T1>>,
            arrays2: List<T2>,
            arrays3: List<T3>,
            arrays4: List<T4>,
            arrays5: List<T5>,
        ): LoDashExplicitWrapper<Array<[T1, T2, T3, T4, T5]>>;

        /**
         * @see _.zip
         */
        zip<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            ...arrays: Array<List<T> | null | undefined>
        ): LoDashExplicitWrapper<T[][]>;
    }
}