import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * Creates a slice of array with elements taken from the end. Elements are taken until predicate returns
         * falsey. The predicate is bound to thisArg and invoked with three arguments: (value, index, array).
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
         * @param array The array to query.
         * @param predicate The function invoked per iteration.
         * @param thisArg The this binding of predicate.
         * @return Returns the slice of array.
         */
        takeRightWhile<T>(
            array: List<T> | null | undefined,
            predicate?: ListIteratee<T>
        ): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.takeRightWhile
         */
        takeRightWhile<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            predicate?: ListIteratee<T>
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.takeRightWhile
         */
        takeRightWhile<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            predicate?: ListIteratee<T>
        ): LoDashExplicitWrapper<T[]>;
    }
}