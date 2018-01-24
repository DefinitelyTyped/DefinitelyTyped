import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * This method is like _.findKey except that it iterates over elements of a collection in the opposite order.
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
         * @param object The object to search.
         * @param predicate The function invoked per iteration.
         * @param thisArg The this binding of predicate.
         * @return Returns the key of the matched element, else undefined.
         */
        findLastKey<T>(
            object: T | null | undefined,
            predicate?: ObjectIteratee<T>
        ): string | undefined;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.findLastKey
         */
        findLastKey<T>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            predicate?: ObjectIteratee<T>
        ): string | undefined;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.findLastKey
         */
        findLastKey<T>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            predicate?: ObjectIteratee<T>
        ): LoDashExplicitWrapper<string | undefined>;
    }
}