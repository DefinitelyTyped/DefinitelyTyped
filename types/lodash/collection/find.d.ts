import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * Iterates over elements of collection, returning the first element predicate returns truthy for.
         * The predicate is bound to thisArg and invoked with three arguments: (value, index|key, collection).
         *
         * If a property name is provided for predicate the created _.property style callback returns the property
         * value of the given element.
         *
         * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
         * elements that have a matching property value, else false.
         *
         * If an object is provided for predicate the created _.matches style callback returns true for elements that
         * have the properties of the given object, else false.
         *
         * @param collection The collection to search.
         * @param predicate The function invoked per iteration.
         * @param fromIndex The index to search from.
         * @return Returns the matched element, else undefined.
         */
        find<T, S extends T>(
            collection: List<T> | null | undefined,
            predicate: ListIteratorTypeGuard<T, S>,
            fromIndex?: number
        ): S|undefined;

        /**
         * @see _.find
         */
        find<T>(
            collection: List<T> | null | undefined,
            predicate?: ListIterateeCustom<T, boolean>,
            fromIndex?: number
        ): T|undefined;

        /**
         * @see _.find
         */
        find<T extends object, S extends T[keyof T]>(
            collection: T | null | undefined,
            predicate: ObjectIteratorTypeGuard<T, S>,
            fromIndex?: number
        ): S|undefined;

        /**
         * @see _.find
         */
        find<T extends object>(
            collection: T | null | undefined,
            predicate?: ObjectIterateeCustom<T, boolean>,
            fromIndex?: number
        ): T[keyof T]|undefined;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.find
         */
        find<T, S extends T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            predicate: ListIteratorTypeGuard<T, S>,
            fromIndex?: number
        ): S|undefined;

        /**
         * @see _.find
         */
        find<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            predicate?: ListIterateeCustom<T, boolean>,
            fromIndex?: number
        ): T|undefined;

        /**
         * @see _.find
         */
        find<T extends object, S extends T[keyof T]>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            predicate: ObjectIteratorTypeGuard<T, S>,
            fromIndex?: number
        ): S|undefined;

        /**
         * @see _.find
         */
        find<T extends object>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            predicate?: ObjectIterateeCustom<T, boolean>,
            fromIndex?: number
        ): T[keyof T]|undefined;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.find
         */
        find<T, S extends T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            predicate: ListIteratorTypeGuard<T, S>,
            fromIndex?: number
        ): LoDashExplicitWrapper<S|undefined>;

        /**
         * @see _.find
         */
        find<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            predicate?: ListIterateeCustom<T, boolean>,
            fromIndex?: number
        ): LoDashExplicitWrapper<T|undefined>;

        /**
         * @see _.find
         */
        find<T extends object, S extends T[keyof T]>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            predicate: ObjectIteratorTypeGuard<T, S>,
            fromIndex?: number
        ): LoDashExplicitWrapper<S|undefined>;

        /**
         * @see _.find
         */
        find<T extends object>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            predicate?: ObjectIterateeCustom<T, boolean>,
            fromIndex?: number
        ): LoDashExplicitWrapper<T[keyof T]|undefined>;
    }
}