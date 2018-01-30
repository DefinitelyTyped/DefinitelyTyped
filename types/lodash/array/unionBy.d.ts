import * as _ from "../index";
declare module "../index" {
    interface LoDashStatic {
        /**
         * This method is like `_.union` except that it accepts `iteratee` which is
         * invoked for each element of each `arrays` to generate the criterion by which
         * uniqueness is computed. The iteratee is invoked with one argument: (value).
         *
         * @param arrays The arrays to inspect.
         * @param iteratee The iteratee invoked per element.
         * @return Returns the new array of combined values.
         */
        unionBy<T>(
            arrays: List<T> | null | undefined,
            iteratee?: ValueIteratee<T>
        ): T[];

        /**
         * @see _.unionBy
         */
        unionBy<T>(
            arrays1: List<T> | null | undefined,
            arrays2: List<T> | null | undefined,
            iteratee?: ValueIteratee<T>
        ): T[];

        /**
         * @see _.unionBy
         */
        unionBy<T>(
            arrays1: List<T> | null | undefined,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            iteratee?: ValueIteratee<T>
        ): T[];

        /**
         * @see _.unionBy
         */
        unionBy<T>(
            arrays1: List<T> | null | undefined,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            arrays4: List<T> | null | undefined,
            iteratee?: ValueIteratee<T>
        ): T[];

        /**
         * @see _.unionBy
         */
        unionBy<T>(
            arrays1: List<T> | null | undefined,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            arrays4: List<T> | null | undefined,
            arrays5: List<T> | null | undefined,
            ...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined>
        ): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.unionBy
         */
        unionBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            iteratee?: ValueIteratee<T>
        ): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.unionBy
         */
        unionBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            iteratee?: ValueIteratee<T>
        ): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.unionBy
         */
        unionBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            iteratee?: ValueIteratee<T>
        ): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.unionBy
         */
        unionBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            arrays4: List<T> | null | undefined,
            iteratee?: ValueIteratee<T>
        ): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.unionBy
         */
        unionBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            arrays4: List<T> | null | undefined,
            arrays5: List<T> | null | undefined,
            ...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined>
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.unionBy
         */
        unionBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            iteratee?: ValueIteratee<T>
        ): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.unionBy
         */
        unionBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            iteratee?: ValueIteratee<T>
        ): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.unionBy
         */
        unionBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            iteratee?: ValueIteratee<T>
        ): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.unionBy
         */
        unionBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            arrays4: List<T> | null | undefined,
            iteratee?: ValueIteratee<T>
        ): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.unionBy
         */
        unionBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            arrays4: List<T> | null | undefined,
            arrays5: List<T> | null | undefined,
            ...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined>
        ): LoDashExplicitWrapper<T[]>;
    }
}