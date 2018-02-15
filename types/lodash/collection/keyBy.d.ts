import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * Creates an object composed of keys generated from the results of running each element of collection through
         * iteratee. The corresponding value of each key is the last element responsible for generating the key. The
         * iteratee function is bound to thisArg and invoked with three arguments:
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
        keyBy(
            collection: string | null | undefined,
            iteratee?: StringIterator<PropertyName>
        ): Dictionary<string>;

        /**
         * @see _.keyBy
         */
        keyBy<T>(
            collection: List<T> | null | undefined,
            iteratee?: ListIterateeCustom<T, PropertyName>
        ): Dictionary<T>;

        /**
         * @see _.keyBy
         */
        keyBy<T extends object>(
            collection: T | null | undefined,
            iteratee?: ObjectIterateeCustom<T, PropertyName>
        ): Dictionary<T[keyof T]>;

        /**
         * @see _.keyBy
         */
        keyBy<T>(
            collection: NumericDictionary<T> | null | undefined,
            iteratee?: NumericDictionaryIterateeCustom<T, PropertyName>
        ): Dictionary<T>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.keyBy
         */
        keyBy(
            this: LoDashImplicitWrapper<string | null | undefined>,
            iteratee?: StringIterator<PropertyName>
        ): LoDashImplicitWrapper<Dictionary<string>>;

        /**
         * @see _.keyBy
         */
        keyBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            iteratee?: ListIterateeCustom<T, PropertyName>
        ): LoDashImplicitWrapper<Dictionary<T>>;

        /**
         * @see _.keyBy
         */
        keyBy<T extends object>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            iteratee?: ObjectIterateeCustom<T, PropertyName>
        ): LoDashImplicitWrapper<Dictionary<T[keyof T]>>;

        /**
         * @see _.keyBy
         */
        keyBy<T>(
            this: LoDashImplicitWrapper<NumericDictionary<T> | null | undefined>,
            iteratee?: NumericDictionaryIterateeCustom<T, PropertyName>
        ): LoDashImplicitWrapper<Dictionary<T>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.keyBy
         */
        keyBy(
            this: LoDashExplicitWrapper<string | null | undefined>,
            iteratee?: StringIterator<PropertyName>
        ): LoDashExplicitWrapper<Dictionary<string>>;

        /**
         * @see _.keyBy
         */
        keyBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            iteratee?: ListIterateeCustom<T, PropertyName>
        ): LoDashExplicitWrapper<Dictionary<T>>;

        /**
         * @see _.keyBy
         */
        keyBy<T extends object>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            iteratee?: ObjectIterateeCustom<T, PropertyName>
        ): LoDashExplicitWrapper<Dictionary<T[keyof T]>>;

        /**
         * @see _.keyBy
         */
        keyBy<T>(
            this: LoDashExplicitWrapper<NumericDictionary<T> | null | undefined>,
            iteratee?: NumericDictionaryIterateeCustom<T, PropertyName>
        ): LoDashExplicitWrapper<Dictionary<T>>;
    }
}