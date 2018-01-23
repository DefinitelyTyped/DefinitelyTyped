declare namespace _ {
    interface LoDashStatic {
        /**
         * This method is like _.difference except that it accepts iteratee which is invoked for each element of array
         * and values to generate the criterion by which uniqueness is computed. The iteratee is invoked with one
         * argument: (value).
         *
         * @param array The array to inspect.
         * @param values The values to exclude.
         * @param iteratee The iteratee invoked per element.
         * @returns Returns the new array of filtered values.
         */
        differenceBy<T1, T2>(
            array: List<T1> | null | undefined,
            values: List<T2>,
            iteratee: ValueIteratee<T1 | T2>
        ): T1[];

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3>(
            array: List<T1> | null | undefined,
            values1: List<T2>,
            values2: List<T3>,
            iteratee: ValueIteratee<T1 | T2 | T3>
        ): T1[];

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3, T4>(
            array: List<T1> | null | undefined,
            values1: List<T2>,
            values2: List<T3>,
            values3: List<T4>,
            iteratee: ValueIteratee<T1 | T2 | T3 | T4>
        ): T1[];

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3, T4, T5>(
            array: List<T1> | null | undefined,
            values1: List<T2>,
            values2: List<T3>,
            values3: List<T4>,
            values4: List<T5>,
            iteratee: ValueIteratee<T1 | T2 | T3 | T4 | T5>
        ): T1[];

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3, T4, T5, T6>(
            array: List<T1> | null | undefined,
            values1: List<T2>,
            values2: List<T3>,
            values3: List<T4>,
            values4: List<T5>,
            values5: List<T6>,
            iteratee: ValueIteratee<T1 | T2 | T3 | T4 | T5 | T6>
        ): T1[];

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3, T4, T5, T6, T7>(
            array: List<T1> | null | undefined,
            values1: List<T2>,
            values2: List<T3>,
            values3: List<T4>,
            values4: List<T5>,
            values5: List<T6>,
            ...values: Array<List<T7> | ValueIteratee<T1 | T2 | T3 | T4 | T5 | T6 | T7>>
        ): T1[];

        /**
         * @see _.differenceBy
         */
        differenceBy<T>(
            array: List<T> | null | undefined,
            ...values: Array<List<T>>
        ): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2>(
            this: LoDashImplicitWrapper<List<T1> | null | undefined>,
            values: List<T2>,
            iteratee: ValueIteratee<T1 | T2>
        ): LoDashImplicitWrapper<T1[]>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3>(
            this: LoDashImplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            iteratee: ValueIteratee<T1 | T2 | T3>
        ): LoDashImplicitWrapper<T1[]>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3, T4>(
            this: LoDashImplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            values3: List<T4>,
            iteratee: ValueIteratee<T1 | T2 | T3 | T4>
        ): LoDashImplicitWrapper<T1[]>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3, T4, T5>(
            this: LoDashImplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            values3: List<T4>,
            values4: List<T5>,
            iteratee: ValueIteratee<T1 | T2 | T3 | T4 | T5>
        ): LoDashImplicitWrapper<T1[]>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3, T4, T5, T6>(
            this: LoDashImplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            values3: List<T4>,
            values4: List<T5>,
            values5: List<T6>,
            iteratee: ValueIteratee<T1 | T2 | T3 | T4 | T5 | T6>
        ): LoDashImplicitWrapper<T1[]>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3, T4, T5, T6, T7>(
            this: LoDashImplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            values3: List<T4>,
            values4: List<T5>,
            values5: List<T6>,
            ...values: Array<List<T7> | ValueIteratee<T1 | T2 | T3 | T4 | T5 | T6 | T7>>
        ): LoDashImplicitWrapper<T1[]>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            ...values: Array<List<T>>
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2>(
            this: LoDashExplicitWrapper<List<T1> | null | undefined>,
            values: List<T2>,
            iteratee: ValueIteratee<T1 | T2>
        ): LoDashExplicitWrapper<T1[]>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3>(
            this: LoDashExplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            iteratee: ValueIteratee<T1 | T2 | T3>
        ): LoDashExplicitWrapper<T1[]>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3, T4>(
            this: LoDashExplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            values3: List<T4>,
            iteratee: ValueIteratee<T1 | T2 | T3 | T4>
        ): LoDashExplicitWrapper<T1[]>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3, T4, T5>(
            this: LoDashExplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            values3: List<T4>,
            values4: List<T5>,
            iteratee: ValueIteratee<T1 | T2 | T3 | T4 | T5>
        ): LoDashExplicitWrapper<T1[]>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3, T4, T5, T6>(
            this: LoDashExplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            values3: List<T4>,
            values4: List<T5>,
            values5: List<T6>,
            iteratee: ValueIteratee<T1 | T2 | T3 | T4 | T5 | T6>
        ): LoDashExplicitWrapper<T1[]>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3, T4, T5, T6, T7>(
            this: LoDashExplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            values3: List<T4>,
            values4: List<T5>,
            values5: List<T6>,
            ...values: Array<List<T7> | ValueIteratee<T1 | T2 | T3 | T4 | T5 | T6 | T7>>
        ): LoDashExplicitWrapper<T1[]>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            ...values: Array<List<T>>
        ): LoDashExplicitWrapper<T[]>;
    }
}