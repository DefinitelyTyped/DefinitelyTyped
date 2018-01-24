import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * The opposite of _.mapValues; this method creates an object with the same values as object and keys generated
         * by running each own enumerable property of object through iteratee.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param thisArg The this binding of iteratee.
         * @return Returns the new mapped object.
         */
        mapKeys<T>(
            object: List<T> | null | undefined,
            iteratee?: ListIteratee<T>
        ): Dictionary<T>;

        /**
         * @see _.mapKeys
         */
        mapKeys<T>(
            object: Dictionary<T> | null | undefined,
            iteratee?: DictionaryIteratee<T>
        ): Dictionary<T>;

        /**
         * @see _.mapKeys
         */
        mapKeys(
            object: object | null | undefined,
            iteratee?: ObjectIteratee<any>
        ): Dictionary<any>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.mapKeys
         */
        mapKeys<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            iteratee?: ListIteratee<T>
        ): LoDashImplicitWrapper<Dictionary<T>>;

        /**
         * @see _.mapKeys
         */
        mapKeys<T>(
            this: LoDashImplicitWrapper<Dictionary<T> | null | undefined>,
            iteratee?: DictionaryIteratee<T>
        ): LoDashImplicitWrapper<Dictionary<T>>;

        /**
         * @see _.mapKeys
         */
        mapKeys(
            this: LoDashImplicitWrapper<object | null | undefined>,
            iteratee?: ObjectIteratee<any>
        ): LoDashImplicitWrapper<Dictionary<any>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.mapKeys
         */
        mapKeys<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            iteratee?: ListIteratee<T>
        ): LoDashExplicitWrapper<Dictionary<T>>;

        /**
         * @see _.mapKeys
         */
        mapKeys<T>(
            this: LoDashExplicitWrapper<Dictionary<T> | null | undefined>,
            iteratee?: DictionaryIteratee<T>
        ): LoDashExplicitWrapper<Dictionary<T>>;

        /**
         * @see _.mapKeys
         */
        mapKeys(
            this: LoDashExplicitWrapper<object | null | undefined>,
            iteratee?: ObjectIteratee<any>
        ): LoDashExplicitWrapper<Dictionary<any>>;
    }
}