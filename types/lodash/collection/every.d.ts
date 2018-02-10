import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * Checks if predicate returns truthy for all elements of collection. Iteration is stopped once predicate
         * returns falsey. The predicate is invoked with three arguments: (value, index|key, collection).
         *
         * @param collection The collection to iterate over.
         * @param predicate The function invoked per iteration.
         * @return Returns true if all elements pass the predicate check, else false.
         */
        every<T>(
            collection: List<T> | null | undefined,
            predicate?: ListIterateeCustom<T, boolean>
        ): boolean;

        /**
         * @see _.every
         */
        every<T>(
            collection: NumericDictionary<T> | null | undefined,
            predicate?: NumericDictionaryIterateeCustom<T, boolean>
        ): boolean;

        /**
         * @see _.every
         */
        every<T extends object>(
            collection: T | null | undefined,
            predicate?: ObjectIterateeCustom<T, boolean>
        ): boolean;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.every
         */
        every<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            predicate?: ListIterateeCustom<T, boolean>
        ): boolean;

        /**
         * @see _.every
         */
        every<T extends object>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            predicate?: ObjectIterateeCustom<T, boolean>
        ): boolean;

        /**
         * @see _.every
         */
        every<T>(
            this: LoDashImplicitWrapper<NumericDictionary<T> | null | undefined>,
            predicate?: NumericDictionaryIterateeCustom<T, boolean>
        ): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.every
         */
        every<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            predicate?: ListIterateeCustom<T, boolean>
        ): LoDashExplicitWrapper<boolean>;

        /**
         * @see _.every
         */
        every<T extends object>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            predicate?: ObjectIterateeCustom<T, boolean>
        ): LoDashExplicitWrapper<boolean>;

        /**
         * @see _.every
         */
        every<T>(
            this: LoDashExplicitWrapper<NumericDictionary<T> | null | undefined>,
            predicate?: NumericDictionaryIterateeCustom<T, boolean>
        ): LoDashExplicitWrapper<boolean>;
    }
}