import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * Creates an array of elements, sorted in ascending order by the results of
         * running each element in a collection through each iteratee. This method
         * performs a stable sort, that is, it preserves the original sort order of
         * equal elements. The iteratees are invoked with one argument: (value).
         *
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]]
         *  The iteratees to sort by, specified individually or in arrays.
         * @returns Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 36 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 34 }
         * ];
         *
         * _.sortBy(users, function(o) { return o.user; });
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         *
         * _.sortBy(users, ['user', 'age']);
         * // => objects for [['barney', 34], ['barney', 36], ['fred', 42], ['fred', 48]]
         *
         * _.sortBy(users, 'user', function(o) {
         *   return Math.floor(o.age / 10);
         * });
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        sortBy<T>(
            collection: List<T> | null | undefined,
            ...iteratees: Array<Many<ListIteratee<T>>>
        ): T[];

        /**
         * @see _.sortBy
         */
        sortBy<T extends object>(
            collection: T | null | undefined,
            ...iteratees: Array<Many<ObjectIteratee<T>>>
        ): Array<T[keyof T]>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.sortBy
         */
        sortBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            ...iteratees: Array<Many<ListIteratee<T>>>
        ): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.sortBy
         */
        sortBy<T extends object>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            ...iteratees: Array<Many<ObjectIteratee<T>>>
        ): LoDashImplicitWrapper<Array<T[keyof T]>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.sortBy
         */
        sortBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            ...iteratees: Array<Many<ListIteratee<T>>>
        ): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.sortBy
         */
        sortBy<T extends object>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            ...iteratees: Array<Many<ObjectIteratee<T>>>
        ): LoDashExplicitWrapper<Array<T[keyof T]>>;
    }
}