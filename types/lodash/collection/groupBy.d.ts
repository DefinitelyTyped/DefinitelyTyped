import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * Creates an object composed of keys generated from the results of running each element of collection through
         * iteratee. The corresponding value of each key is an array of the elements responsible for generating the
         * key. The iteratee is bound to thisArg and invoked with three arguments:
         * (value, index|key, collection).
         *
         * If a property name is provided for iteratee the created _.property style callback returns the property
         * value of the given element.
         *
         * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
         * elements that have a matching property value, else false.
         *
         * If an object is provided for iteratee the created _.matches style callback returns true for elements that
         * have the properties of the given object, else false.
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param thisArg The this binding of iteratee.
         * @return Returns the composed aggregate object.
         */
        groupBy(
            collection: string | null | undefined,
            iteratee?: StringIterator<NotVoid>
        ): Dictionary<string[]>;

        /**
         * @see _.groupBy
         */
        groupBy<T>(
            collection: List<T> | null | undefined,
            iteratee?: ListIteratee<T>
        ): Dictionary<T[]>;

        /**
         * @see _.groupBy
         */
        groupBy<T>(
            collection: NumericDictionary<T> | null | undefined,
            iteratee?: NumericDictionaryIteratee<T>
        ): Dictionary<T[]>;

        /**
         * @see _.groupBy
         */
        groupBy<T extends object>(
            collection: T | null | undefined,
            iteratee?: ObjectIteratee<T>
        ): Dictionary<Array<T[keyof T]>>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.groupBy
         */
        groupBy(
            this: LoDashImplicitWrapper<string | null | undefined>,
            iteratee?: StringIterator<NotVoid>
        ): LoDashImplicitWrapper<Dictionary<string[]>>;

        /**
         * @see _.groupBy
         */
        groupBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            iteratee?: ListIteratee<T>
        ): LoDashImplicitWrapper<Dictionary<T[]>>;

        /**
         * @see _.groupBy
         */
        groupBy<T extends object>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            iteratee?: ObjectIteratee<T>
        ): LoDashImplicitWrapper<Dictionary<Array<T[keyof T]>>>;

        /**
         * @see _.groupBy
         */
        groupBy<T>(
            this: LoDashImplicitWrapper<NumericDictionary<T> | null | undefined>,
            iteratee?: NumericDictionaryIteratee<T>
        ): LoDashImplicitWrapper<Dictionary<T[]>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.groupBy
         */
        groupBy(
            this: LoDashExplicitWrapper<string | null | undefined>,
            iteratee?: StringIterator<NotVoid>
        ): LoDashExplicitWrapper<Dictionary<string[]>>;

        /**
         * @see _.groupBy
         */
        groupBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            iteratee?: ListIteratee<T>
        ): LoDashExplicitWrapper<Dictionary<T[]>>;

        /**
         * @see _.groupBy
         */
        groupBy<T>(
            this: LoDashExplicitWrapper<NumericDictionary<T> | null | undefined>,
            iteratee?: NumericDictionaryIteratee<T>
        ): LoDashExplicitWrapper<Dictionary<T[]>>;

        /**
         * @see _.groupBy
         */
        groupBy<T extends object>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            iteratee?: ObjectIteratee<T>
        ): LoDashExplicitWrapper<Dictionary<Array<T[keyof T]>>>;
    }
}