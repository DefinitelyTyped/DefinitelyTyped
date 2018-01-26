import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * This method is like `_.sortBy` except that it allows specifying the sort
         * orders of the iteratees to sort by. If `orders` is unspecified, all values
         * are sorted in ascending order. Otherwise, specify an order of "desc" for
         * descending or "asc" for ascending sort order of corresponding values.
         *
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]] The iteratees to sort by.
         * @param [orders] The sort orders of `iteratees`.
         * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
         * @returns Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 34 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 36 }
         * ];
         *
         * // sort by `user` in ascending order and by `age` in descending order
         * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        orderBy<T>(
            collection: List<T> | null | undefined,
            iteratees?: Many<ListIterator<T, NotVoid>>,
            orders?: Many<boolean|string>
        ): T[];

        /**
         * @see _.orderBy
         */
        orderBy<T>(
            collection: List<T> | null | undefined,
            iteratees?: Many<ListIteratee<T>>,
            orders?: Many<boolean|string>
        ): T[];

        /**
         * @see _.orderBy
         */
        orderBy<T extends object>(
            collection: T | null | undefined,
            iteratees?: Many<ObjectIterator<T, NotVoid>>,
            orders?: Many<boolean|string>
        ): Array<T[keyof T]>;

        /**
         * @see _.orderBy
         */
        orderBy<T extends object>(
            collection: T | null | undefined,
            iteratees?: Many<ObjectIteratee<T>>,
            orders?: Many<boolean|string>
        ): Array<T[keyof T]>;

        /**
         * @see _.orderBy
         */
        orderBy<T>(
            collection: NumericDictionary<T> | null | undefined,
            iteratees?: Many<NumericDictionaryIterator<T, NotVoid>>,
            orders?: Many<boolean|string>
        ): T[];

        /**
         * @see _.orderBy
         */
        orderBy<T>(
            collection: NumericDictionary<T> | null | undefined,
            iteratees?: Many<NumericDictionaryIteratee<T>>,
            orders?: Many<boolean|string>
        ): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.orderBy
         */
        orderBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            iteratees?: Many<ListIterator<T, NotVoid>>,
            orders?: Many<boolean|string>
        ): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.orderBy
         */
        orderBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            iteratees?: Many<ListIteratee<T>>,
            orders?: Many<boolean|string>
        ): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.orderBy
         */
        orderBy<T extends object>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            iteratees?: Many<ObjectIterator<T, NotVoid>>,
            orders?: Many<boolean|string>
        ): LoDashImplicitWrapper<Array<T[keyof T]>>;

        /**
         * @see _.orderBy
         */
        orderBy<T extends object>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            iteratees?: Many<ObjectIteratee<T>>,
            orders?: Many<boolean|string>
        ): LoDashImplicitWrapper<Array<T[keyof T]>>;

        /**
         * @see _.orderBy
         */
        orderBy<T>(
            this: LoDashImplicitWrapper<NumericDictionary<T> | null | undefined>,
            iteratees?: Many<NumericDictionaryIterator<T, NotVoid>>,
            orders?: Many<boolean|string>
        ): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.orderBy
         */
        orderBy<T>(
            this: LoDashImplicitWrapper<NumericDictionary<T> | null | undefined>,
            iteratees?: Many<NumericDictionaryIteratee<T>>,
            orders?: Many<boolean|string>
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.orderBy
         */
        orderBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            iteratees?: Many<ListIterator<T, NotVoid>>,
            orders?: Many<boolean|string>
        ): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.orderBy
         */
        orderBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            iteratees?: Many<ListIteratee<T>>,
            orders?: Many<boolean|string>
        ): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.orderBy
         */
        orderBy<T extends object>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            iteratees?: Many<ObjectIterator<T, NotVoid>>,
            orders?: Many<boolean|string>
        ): LoDashExplicitWrapper<Array<T[keyof T]>>;

        /**
         * @see _.orderBy
         */
        orderBy<T extends object>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            iteratees?: Many<ObjectIteratee<T>>,
            orders?: Many<boolean|string>
        ): LoDashExplicitWrapper<Array<T[keyof T]>>;

        /**
         * @see _.orderBy
         */
        orderBy<T>(
            this: LoDashExplicitWrapper<NumericDictionary<T> | null | undefined>,
            iteratees?: Many<NumericDictionaryIterator<T, NotVoid>>,
            orders?: Many<boolean|string>
        ): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.orderBy
         */
        orderBy<T>(
            this: LoDashExplicitWrapper<NumericDictionary<T> | null | undefined>,
            iteratees?: Many<NumericDictionaryIteratee<T>>,
            orders?: Many<boolean|string>
        ): LoDashExplicitWrapper<T[]>;
    }
}