declare namespace _ {
    interface LoDashStatic {
        /**
        * This method is like _.find except that it iterates over elements of a collection from
        * right to left.
        * @param collection Searches for a value in this list.
        * @param predicate The function called per iteration.
        * @param fromIndex The index to search from.
        * @return The found element, else undefined.
        **/
        findLast<T, S extends T>(
            collection: List<T> | null | undefined,
            predicate: ListIteratorTypeGuard<T, S>,
            fromIndex?: number
        ): S|undefined;

        /**
         * @see _.findLast
         */
        findLast<T>(
            collection: List<T> | null | undefined,
            predicate?: ListIterateeCustom<T, boolean>,
            fromIndex?: number
        ): T|undefined;

        /**
         * @see _.findLast
         */
        findLast<T extends object, S extends T[keyof T]>(
            collection: T | null | undefined,
            predicate: ObjectIteratorTypeGuard<T, S>,
            fromIndex?: number
        ): S|undefined;

        /**
         * @see _.findLast
         */
        findLast<T extends object>(
            collection: T | null | undefined,
            predicate?: ObjectIterateeCustom<T, boolean>,
            fromIndex?: number
        ): T[keyof T]|undefined;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.findLast
         */
        findLast<T, S extends T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            predicate: ListIteratorTypeGuard<T, S>,
            fromIndex?: number
        ): S | undefined;

        /**
         * @see _.findLast
         */
        findLast<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            predicate?: ListIterateeCustom<T, boolean>,
            fromIndex?: number
        ): T | undefined;

        /**
         * @see _.findLast
         */
        findLast<T extends object, S extends T[keyof T]>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            predicate: ObjectIteratorTypeGuard<T, S>,
            fromIndex?: number
        ): S|undefined;

        /**
         * @see _.findLast
         */
        findLast<T extends object>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            predicate?: ObjectIterateeCustom<T, boolean>,
            fromIndex?: number
        ): T[keyof T]|undefined;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.findLast
         */
        findLast<T, S extends T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            predicate: ListIteratorTypeGuard<T, S>,
            fromIndex?: number
        ): LoDashExplicitWrapper<S | undefined>;

        /**
         * @see _.findLast
         */
        findLast<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            predicate?: ListIterateeCustom<T, boolean>,
            fromIndex?: number
        ): LoDashExplicitWrapper<T | undefined>;

        /**
         * @see _.findLast
         */
        findLast<T extends object, S extends T[keyof T]>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            predicate: ObjectIteratorTypeGuard<T, S>,
            fromIndex?: number
        ): LoDashExplicitWrapper<S|undefined>;

        /**
         * @see _.findLast
         */
        findLast<T extends object>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            predicate?: ObjectIterateeCustom<T, boolean>,
            fromIndex?: number
        ): LoDashExplicitWrapper<T[keyof T]|undefined>;
    }
}