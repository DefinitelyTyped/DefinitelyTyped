import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * This method is like `_.intersection` except that it accepts `iteratee`
         * which is invoked for each element of each `arrays` to generate the criterion
         * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
         *
         * @category Array
         * @param [arrays] The arrays to inspect.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns the new array of shared values.
         * @example
         *
         * _.intersectionBy([2.1, 1.2], [4.3, 2.4], Math.floor);
         * // => [2.1]
         *
         * // using the `_.property` iteratee shorthand
         * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
         * // => [{ 'x': 1 }]
         */
        intersectionBy<T1, T2>(
            array: List<T1> | null,
            values: List<T2>,
            iteratee: ValueIteratee<T1 | T2>
        ): T1[];

        /**
         * @see _.intersectionBy
         */
        intersectionBy<T1, T2, T3>(
            array: List<T1> | null,
            values1: List<T2>,
            values2: List<T3>,
            iteratee: ValueIteratee<T1 | T2 | T3>
        ): T1[];

        /**
         * @see _.intersectionBy
         */
        intersectionBy<T1, T2, T3, T4>(
            array: List<T1> | null | undefined,
            values1: List<T2>,
            values2: List<T3>,
            ...values: Array<List<T4> | ValueIteratee<T1 | T2 | T3 | T4>>
        ): T1[];

        /**
         * @see _.intersectionBy
         */
        intersectionBy<T>(
            array?: List<T> | null,
            ...values: Array<List<T>>
        ): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.intersectionBy
         */
        intersectionBy<T1, T2>(
            this: LoDashImplicitWrapper<List<T1> | null | undefined>,
            values: List<T2>,
            iteratee: ValueIteratee<T1 | T2>
        ): LoDashImplicitWrapper<T1[]>;

        /**
         * @see _.intersectionBy
         */
        intersectionBy<T1, T2, T3>(
            this: LoDashImplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            iteratee: ValueIteratee<T1 | T2 | T3>
        ): LoDashImplicitWrapper<T1[]>;

        /**
         * @see _.intersectionBy
         */
        intersectionBy<T1, T2, T3, T4>(
            this: LoDashImplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            ...values: Array<List<T4> | ValueIteratee<T1 | T2 | T3 | T4>>
        ): LoDashImplicitWrapper<T1[]>;

        /**
         * @see _.intersectionBy
         */
        intersectionBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            ...values: Array<List<T>>
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.intersectionBy
         */
        intersectionBy<T1, T2>(
            this: LoDashExplicitWrapper<List<T1> | null | undefined>,
            values: List<T2>,
            iteratee: ValueIteratee<T1 | T2>
        ): LoDashExplicitWrapper<T1[]>;

        /**
         * @see _.intersectionBy
         */
        intersectionBy<T1, T2, T3>(
            this: LoDashExplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            iteratee: ValueIteratee<T1 | T2 | T3>
        ): LoDashExplicitWrapper<T1[]>;

        /**
         * @see _.intersectionBy
         */
        intersectionBy<T1, T2, T3, T4>(
            this: LoDashExplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            ...values: Array<List<T4> | ValueIteratee<T1 | T2 | T3 | T4>>
        ): LoDashExplicitWrapper<T1[]>;

        /**
         * @see _.intersectionBy
         */
        intersectionBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            ...values: Array<List<T>>
        ): LoDashExplicitWrapper<T[]>;
    }
}