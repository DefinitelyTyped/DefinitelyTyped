import * as _ from "../index";
declare module "../index" {
    interface LoDashStatic {
        /**
        * Creates an array of elements split into two groups, the first of which contains elements predicate returns truthy for,
        * while the second of which contains elements predicate returns falsey for.
        * The predicate is bound to thisArg and invoked with three arguments: (value, index|key, collection).
        *
        * If a property name is provided for predicate the created _.property style callback
        * returns the property value of the given element.
        *
        * If a value is also provided for thisArg the created _.matchesProperty style callback
        * returns true for elements that have a matching property value, else false.
        *
        * If an object is provided for predicate the created _.matches style callback returns
        * true for elements that have the properties of the given object, else false.
        *
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param thisArg The this binding of predicate.
        * @return Returns the array of grouped elements.
        **/
        partition<T>(
            collection: List<T> | null | undefined,
            callback: ValueIteratee<T>
        ): [T[], T[]];

        /**
         * @see _.partition
         */
        partition<T extends object>(
            collection: T | null | undefined,
            callback: ValueIteratee<T[keyof T]>
        ): [Array<T[keyof T]>, Array<T[keyof T]>];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.partition
         */
        partition<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            callback: ValueIteratee<T>
        ): LoDashImplicitWrapper<[T[], T[]]>;

        /**
         * @see _.partition
         */
        partition<T>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            callback: ValueIteratee<T[keyof T]>
        ): LoDashImplicitWrapper<[Array<T[keyof T]>, Array<T[keyof T]>]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.partition
         */
        partition<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            callback: ValueIteratee<T>
        ): LoDashExplicitWrapper<[T[], T[]]>;

        /**
         * @see _.partition
         */
        partition<T>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            callback: ValueIteratee<T[keyof T]>
        ): LoDashExplicitWrapper<[Array<T[keyof T]>, Array<T[keyof T]>]>;
    }
}