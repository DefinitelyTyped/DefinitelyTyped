import * as _ from "../index";
declare module "../index" {
    interface LoDashStatic {
        /**
         * Creates an array of unique `array` values not included in the other
         * provided arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
         * for equality comparisons.
         *
         * @category Array
         * @param [values] The arrays to inspect.
         * @param [comparator] The comparator invoked per element.
         * @returns Returns the new array of filtered values.
         * @example
         *
         * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
         * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];

         * _.intersectionWith(objects, others, _.isEqual);
         * // => [{ 'x': 1, 'y': 2 }]
         */
        intersectionWith<T1, T2>(
            array: List<T1> | null | undefined,
            values: List<T2>,
            comparator: Comparator2<T1, T2>
        ): T1[];

        /**
         * @see _.intersectionWith
         */
        intersectionWith<T1, T2, T3>(
            array: List<T1> | null | undefined,
            values1: List<T2>,
            values2: List<T3>,
            comparator: Comparator2<T1, T2 | T3>
        ): T1[];

        /**
         * @see _.intersectionWith
         */
        intersectionWith<T1, T2, T3, T4>(
            array: List<T1> | null | undefined,
            values1: List<T2>,
            values2: List<T3>,
            ...values: Array<List<T4> | Comparator2<T1, T2 | T3 | T4>>
        ): T1[];

        /**
         * @see _.intersectionWith
         */
        intersectionWith<T>(
            array?: List<T> | null,
            ...values: Array<List<T>>
        ): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.intersectionWith
         */
        intersectionWith<T1, T2>(
            this: LoDashImplicitWrapper<List<T1> | null | undefined>,
            values: List<T2>,
            comparator: Comparator2<T1, T2>
        ): LoDashImplicitWrapper<T1[]>;

        /**
         * @see _.intersectionWith
         */
        intersectionWith<T1, T2, T3>(
            this: LoDashImplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            comparator: Comparator2<T1, T2 | T3>
        ): LoDashImplicitWrapper<T1[]>;

        /**
         * @see _.intersectionWith
         */
        intersectionWith<T1, T2, T3, T4>(
            this: LoDashImplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            ...values: Array<List<T4> | Comparator2<T1, T2 | T3 | T4>>,
        ): LoDashImplicitWrapper<T1[]>;

        /**
         * @see _.intersectionWith
         */
        intersectionWith<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            ...values: Array<List<T>>
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.intersectionWith
         */
        intersectionWith<T1, T2>(
            this: LoDashExplicitWrapper<List<T1> | null | undefined>,
            values: List<T2>,
            comparator: Comparator2<T1, T2>
        ): LoDashExplicitWrapper<T1[]>;

        /**
         * @see _.intersectionWith
         */
        intersectionWith<T1, T2, T3>(
            this: LoDashExplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            comparator: Comparator2<T1, T2 | T3>
        ): LoDashExplicitWrapper<T1[]>;

        /**
         * @see _.intersectionWith
         */
        intersectionWith<T1, T2, T3, T4>(
            this: LoDashExplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            ...values: Array<List<T4> | Comparator2<T1, T2 | T3 | T4>>,
        ): LoDashExplicitWrapper<T1[]>;

        /**
         * @see _.intersectionWith
         */
        intersectionWith<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            ...values: Array<List<T>>
        ): LoDashExplicitWrapper<T[]>;
    }
}