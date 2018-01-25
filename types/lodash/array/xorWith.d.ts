import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * This method is like `_.xor` except that it accepts `comparator` which is
         * invoked to compare elements of `arrays`. The comparator is invoked with
         * two arguments: (arrVal, othVal).
         *
         * @category Array
         * @param [arrays] The arrays to inspect.
         * @param [comparator] The comparator invoked per element.
         * @returns Returns the new array of values.
         * @example
         *
         * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
         * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
         *
         * _.xorWith(objects, others, _.isEqual);
         * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
         */
        xorWith<T>(
            arrays: List<T> | null | undefined,
            comparator?: Comparator<T>
        ): T[];

        /**
         * @see _.xorWith
         */
        xorWith<T>(
            arrays: List<T> | null | undefined,
            arrays2: List<T> | null | undefined,
            comparator?: Comparator<T>
        ): T[];

        /**
         * @see _.xorWith
         */
        xorWith<T>(
            arrays: List<T> | null | undefined,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            ...comparator: Array<Comparator<T> | List<T> | null | undefined>
        ): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.xorWith
         */
        xorWith<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            comparator?: Comparator<T>
        ): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.xorWith
         */
        xorWith<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            comparator?: Comparator<T>
        ): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.xorWith
         */
        xorWith<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            ...comparator: Array<Comparator<T> | List<T> | null | undefined>
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.xorWith
         */
        xorWith<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            comparator?: Comparator<T>
        ): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.xorWith
         */
        xorWith<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            comparator?: Comparator<T>
        ): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.xorWith
         */
        xorWith<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            ...comparator: Array<Comparator<T> | List<T> | null | undefined>
        ): LoDashExplicitWrapper<T[]>;
    }
}