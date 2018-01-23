declare namespace _ {
    interface LoDashStatic {
        /**
         * Creates a slice of array excluding elements dropped from the end. Elements are dropped until predicate
         * returns falsey. The predicate is bound to thisArg and invoked with three arguments: (value, index, array).
         *
         * If a property name is provided for predicate the created _.property style callback returns the property
         * value of the given element.
         *
         * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
         * elements that have a matching property value, else false.
         *
         * If an object is provided for predicate the created _.matches style callback returns true for elements that
         * match the properties of the given object, else false.
         *
         * @param array The array to query.
         * @param predicate The function invoked per iteration.
         * @param thisArg The this binding of predicate.
         * @return Returns the slice of array.
         */
        dropRightWhile<T>(
            array: List<T> | null | undefined,
            predicate?: ListIteratee<T>
        ): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.dropRightWhile
         */
        dropRightWhile<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            predicate?: ListIteratee<T>
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.dropRightWhile
         */
        dropRightWhile<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            predicate?: ListIteratee<T>
        ): LoDashExplicitWrapper<T[]>;
    }
}