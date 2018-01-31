import * as _ from "../index";
declare module "../index" {
    interface LoDashStatic {
        /**
         * This method is like `_.xor` except that it accepts `iteratee` which is
         * invoked for each element of each `arrays` to generate the criterion by which
         * uniqueness is computed. The iteratee is invoked with one argument: (value).
         *
         * @category Array
         * @param [arrays] The arrays to inspect.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns the new array of values.
         * @example
         *
         * _.xorBy([2.1, 1.2], [4.3, 2.4], Math.floor);
         * // => [1.2, 4.3]
         *
         * // using the `_.property` iteratee shorthand
         * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
         * // => [{ 'x': 2 }]
         */
        xorBy<T>(
            arrays: List<T> | null | undefined,
            iteratee?: ValueIteratee<T>
        ): T[];

        /**
         * @see _.xorBy
         */
        xorBy<T>(
            arrays: List<T> | null | undefined,
            arrays2: List<T> | null | undefined,
            iteratee?: ValueIteratee<T>
        ): T[];

        /**
         * @see _.xorBy
         */
        xorBy<T>(
            arrays: List<T> | null | undefined,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            ...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined>
        ): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.xor
         */
        xorBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            iteratee?: ValueIteratee<T>
        ): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.xorBy
         */
        xorBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            iteratee?: ValueIteratee<T>
        ): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.xorBy
         */
        xorBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            ...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined>
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.xorBy
         */
        xorBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            iteratee?: ValueIteratee<T>
        ): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.xorBy
         */
        xorBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            iteratee?: ValueIteratee<T>
        ): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.xorBy
         */
        xorBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            ...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined>
        ): LoDashExplicitWrapper<T[]>;
    }
}