import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * Creates an array of values by running each element in collection through iteratee. The iteratee is bound to
         * thisArg and invoked with three arguments: (value, index|key, collection).
         *
         * If a property name is provided for iteratee the created _.property style callback returns the property value
         * of the given element.
         *
         * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
         * elements that have a matching property value, else false.
         *
         * If an object is provided for iteratee the created _.matches style callback returns true for elements that
         * have the properties of the given object, else false.
         *
         * Many lodash methods are guarded to work as iteratees for methods like _.every, _.filter, _.map, _.mapValues,
         * _.reject, and _.some.
         *
         * The guarded methods are:
         * ary, callback, chunk, clone, create, curry, curryRight, drop, dropRight, every, fill, flatten, invert, max,
         * min, parseInt, slice, sortBy, take, takeRight, template, trim, trimLeft, trimRight, trunc, random, range,
         * sample, some, sum, uniq, and words
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param thisArg The this binding of iteratee.
         * @return Returns the new mapped array.
         */
        map<T, TResult>(
            collection: List<T> | null | undefined,
            iteratee: ListIterator<T, TResult>
        ): TResult[];

        /**
         * @see _.map
         */
        map<T>(collection: List<T> | Dictionary<T> | null | undefined): T[];

        /**
         * @see _.map
         */
        map<T, TResult>(
            collection: Dictionary<T> | null | undefined,
            iteratee: DictionaryIterator<T, TResult>
        ): TResult[];

        /** @see _.map */
        map<T, K extends keyof T>(
            collection: List<T> | Dictionary<T> | null | undefined,
            iteratee: K
        ): Array<T[K]>;

        /** @see _.map */
        map<T, TResult>(
            collection: NumericDictionary<T> | null | undefined,
            iteratee?: NumericDictionaryIterator<T, TResult>
        ): TResult[];

        /**
         * @see _.map
         */
        map<T, TResult>(
            collection: List<T>|Dictionary<T>|NumericDictionary<T> | null | undefined,
            iteratee?: string
        ): TResult[];

        /**
         * @see _.map
         */
        map<T>(
            collection: List<T>|Dictionary<T>|NumericDictionary<T> | null | undefined,
            iteratee?: object
        ): boolean[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.map
         */
        map<T, TResult>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            iteratee: ListIterator<T, TResult>
        ): LoDashImplicitWrapper<TResult[]>;

        /**
         * @see _.map
         */
        map<T>(this: LoDashImplicitWrapper<List<T> | Dictionary<T> | null | undefined>): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.map
         */
        map<T, TResult>(
            this: LoDashImplicitWrapper<Dictionary<T> | null | undefined>,
            iteratee: DictionaryIterator<T, TResult>
        ): LoDashImplicitWrapper<TResult[]>;

        /** @see _.map */
        map<T, K extends keyof T>(
            this: LoDashImplicitWrapper<List<T> | Dictionary<T> | null | undefined>,
            iteratee: K
        ): LoDashImplicitWrapper<Array<T[K]>>;

        /** @see _.map */
        map<T, TResult>(
            this: LoDashImplicitWrapper<NumericDictionary<T> | null | undefined>,
            iteratee?: NumericDictionaryIterator<T, TResult>
        ): LoDashImplicitWrapper<TResult[]>;

        /**
         * @see _.map
         */
        map<T, TResult>(
            this: LoDashImplicitWrapper<List<T> | Dictionary<T> | NumericDictionary<T> | null | undefined>,
            iteratee?: string
        ): LoDashImplicitWrapper<TResult[]>;

        /**
         * @see _.map
         */
        map<T>(
            this: LoDashImplicitWrapper<List<T> | Dictionary<T> | NumericDictionary<T> | null | undefined>,
            iteratee?: object
        ): LoDashImplicitWrapper<boolean[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.map
         */
        map<T, TResult>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            iteratee: ListIterator<T, TResult>
        ): LoDashExplicitWrapper<TResult[]>;

        /**
         * @see _.map
         */
        map<T>(this: LoDashExplicitWrapper<List<T> | Dictionary<T> | null | undefined>): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.map
         */
        map<T, TResult>(
            this: LoDashExplicitWrapper<Dictionary<T> | null | undefined>,
            iteratee: DictionaryIterator<T, TResult>
        ): LoDashExplicitWrapper<TResult[]>;

        /** @see _.map */
        map<T, K extends keyof T>(
            this: LoDashExplicitWrapper<List<T> | Dictionary<T> | null | undefined>,
            iteratee: K
        ): LoDashExplicitWrapper<Array<T[K]>>;

        /**
         * @see _.map
         */
        map<T, TResult>(
            this: LoDashExplicitWrapper<NumericDictionary<T> | null | undefined>,
            iteratee?: NumericDictionaryIterator<T, TResult>
        ): LoDashExplicitWrapper<TResult[]>;

        /**
         * @see _.map
         */
        map<T, TResult>(
            this: LoDashExplicitWrapper<List<T> | Dictionary<T> | NumericDictionary<T> | null | undefined>,
            iteratee?: string
        ): LoDashExplicitWrapper<TResult[]>;

        /**
         * @see _.map
         */
        map<T>(
            this: LoDashExplicitWrapper<List<T> | Dictionary<T> | NumericDictionary<T> | null | undefined>,
            iteratee?: object
        ): LoDashExplicitWrapper<boolean[]>;
    }
}