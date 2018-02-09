import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The
         * predicate is bound to thisArg and invoked with three arguments: (value, index|key, collection).
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
         * @param collection The collection to iterate over.
         * @param predicate The function invoked per iteration.
         * @param thisArg The this binding of predicate.
         * @return Returns the new filtered array.
         */
        filter(
            collection: string | null | undefined,
            predicate?: StringIterator<boolean>
        ): string[];

        /**
         * @see _.filter
         */
        filter<T, S extends T>(
            collection: List<T> | null | undefined,
            predicate: ListIteratorTypeGuard<T, S>
        ): S[];

        /**
         * @see _.filter
         */
        filter<T>(
            collection: List<T> | null | undefined,
            predicate?: ListIterateeCustom<T, boolean>
        ): T[];

        /**
         * @see _.filter
         */
        filter<T extends object, S extends T[keyof T]>(
            collection: T | null | undefined,
            predicate: ObjectIteratorTypeGuard<T, S>
        ): S[];

        /**
         * @see _.filter
         */
        filter<T extends object>(
            collection: T | null | undefined,
            predicate?: ObjectIterateeCustom<T, boolean>
        ): Array<T[keyof T]>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.filter
         */
        filter(
            this: LoDashImplicitWrapper<string | null | undefined>,
            predicate?: StringIterator<boolean>
        ): LoDashImplicitWrapper<string[]>;

        /**
         * @see _.filter
         */
        filter<T, S extends T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            predicate: ListIteratorTypeGuard<T, S>
        ): LoDashImplicitWrapper<S[]>;

        /**
         * @see _.filter
         */
        filter<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            predicate?: ListIterateeCustom<T, boolean>
        ): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.filter
         */
        filter<T extends object, S extends T[keyof T]>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            predicate: ObjectIteratorTypeGuard<T, S>
        ): LoDashImplicitWrapper<S[]>;

        /**
         * @see _.filter
         */
        filter<T extends object>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            predicate?: ObjectIterateeCustom<T, boolean>
        ): LoDashImplicitWrapper<Array<T[keyof T]>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.filter
         */
        filter(
            this: LoDashExplicitWrapper<string | null | undefined>,
            predicate?: StringIterator<boolean>
        ): LoDashExplicitWrapper<string[]>;

        /**
         * @see _.filter
         */
        filter<T, S extends T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            predicate: ListIteratorTypeGuard<T, S>
        ): LoDashExplicitWrapper<S[]>;

        /**
         * @see _.filter
         */
        filter<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            predicate?: ListIterateeCustom<T, boolean>
        ): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.filter
         */
        filter<T extends object, S extends T[keyof T]>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            predicate: ObjectIteratorTypeGuard<T, S>
        ): LoDashExplicitWrapper<S[]>;

        /**
         * @see _.filter
         */
        filter<T extends object>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            predicate?: ObjectIterateeCustom<T, boolean>
        ): LoDashExplicitWrapper<Array<T[keyof T]>>;
    }
}