import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * This method is like _.find except that it returns the index of the first element predicate returns truthy
         * for instead of the element itself.
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
         * @param array The array to search.
         * @param predicate The function invoked per iteration.
         * @param fromIndex The index to search from.
         * @return Returns the index of the found element, else -1.
         */
        findIndex<T>(
            array: List<T> | null | undefined,
            predicate?: ListIterateeCustom<T, boolean>,
            fromIndex?: number
        ): number;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.findIndex
         */
        findIndex<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            predicate?: ListIterateeCustom<T, boolean>,
            fromIndex?: number
        ): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.findIndex
         */
        findIndex<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            predicate?: ListIterateeCustom<T, boolean>,
            fromIndex?: number
        ): LoDashExplicitWrapper<number>;
    }
}