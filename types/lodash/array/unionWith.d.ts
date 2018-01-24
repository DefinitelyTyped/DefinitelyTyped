import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * This method is like `_.union` except that it accepts `comparator` which
         * is invoked to compare elements of `arrays`. The comparator is invoked
         * with two arguments: (arrVal, othVal).
         *
         * @category Array
         * @param [arrays] The arrays to inspect.
         * @param [comparator] The comparator invoked per element.
         * @returns Returns the new array of combined values.
         * @example
         *
         * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
         * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
         *
         * _.unionWith(objects, others, _.isEqual);
         * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
         */
        unionWith<T>(
            arrays: List<T> | null | undefined,
            comparator?: Comparator<T>
        ): T[];

        /**
         * @see _.unionBy
         */
        unionWith<T>(
            arrays: List<T> | null | undefined,
            arrays2: List<T> | null | undefined,
            comparator?: Comparator<T>
        ): T[];

        /**
         * @see _.unionWith
         */
        unionWith<T>(
            arrays: List<T> | null | undefined,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            ...comparator: Array<Comparator<T> | List<T> | null | undefined>
        ): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.unionWith
         */
        unionWith<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            comparator?: Comparator<T>
        ): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.unionWith
         */
        unionWith<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            comparator?: Comparator<T>
        ): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.unionWith
         */
        unionWith<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            ...comparator: Array<Comparator<T> | List<T> | null | undefined>
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.unionWith
         */
        unionWith<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            comparator?: Comparator<T>
        ): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.unionWith
         */
        unionWith<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            comparator?: Comparator<T>
        ): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.unionWith
         */
        unionWith<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            ...comparator: Array<Comparator<T> | List<T> | null | undefined>
        ): LoDashExplicitWrapper<T[]>;
    }
}