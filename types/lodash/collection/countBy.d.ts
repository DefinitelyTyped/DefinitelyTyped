import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * Creates an object composed of keys generated from the results of running each element of collection through
         * iteratee. The corresponding value of each key is the number of times the key was returned by iteratee. The
         * iteratee is bound to thisArg and invoked with three arguments:
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
        countBy<T>(
            collection: string | null | undefined,
            iteratee?: StringIterator<T>
        ): Dictionary<number>;

        /**
         * @see _.countBy
         */
        countBy<T>(
            collection: List<T> | null | undefined,
            iteratee?: ListIteratee<T>
        ): Dictionary<number>;

        /**
         * @see _.countBy
         */
        countBy<T>(
            collection: NumericDictionary<T> | null | undefined,
            iteratee?: NumericDictionaryIteratee<T>
        ): Dictionary<number>;

        /**
         * @see _.countBy
         */
        countBy<T extends object>(
            collection: T | null | undefined,
            iteratee?: ObjectIteratee<T>
        ): Dictionary<number>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.countBy
         */
        countBy<T>(
            this: LoDashImplicitWrapper<string | null | undefined>,
            iteratee?: StringIterator<T>
        ): LoDashImplicitWrapper<Dictionary<number>>;

        /**
         * @see _.countBy
         */
        countBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            iteratee?: ListIteratee<T>
        ): LoDashImplicitWrapper<Dictionary<number>>;

        /**
         * @see _.countBy
         */
        countBy<T extends object>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            iteratee?: ObjectIteratee<T>
        ): LoDashImplicitWrapper<Dictionary<number>>;

        /**
         * @see _.countBy
         */
        countBy<T>(
            this: LoDashImplicitWrapper<NumericDictionary<T> | null | undefined>,
            iteratee?: NumericDictionaryIteratee<T>
        ): LoDashImplicitWrapper<Dictionary<number>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.countBy
         */
        countBy<T>(
            this: LoDashExplicitWrapper<string | null | undefined>,
            iteratee?: StringIterator<T>
        ): LoDashExplicitWrapper<Dictionary<number>>;

        /**
         * @see _.countBy
         */
        countBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            iteratee?: ListIteratee<T>
        ): LoDashExplicitWrapper<Dictionary<number>>;

        /**
         * @see _.countBy
         */
        countBy<T extends object>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            iteratee?: ObjectIteratee<T>
        ): LoDashExplicitWrapper<Dictionary<number>>;

        /**
         * @see _.countBy
         */
        countBy<T>(
            this: LoDashExplicitWrapper<NumericDictionary<T> | null | undefined>,
            iteratee?: NumericDictionaryIteratee<T>
        ): LoDashExplicitWrapper<Dictionary<number>>;
    }
}