declare namespace _ {
    interface LoDashStatic {
        /**
         * Iterates over elements of collection invoking iteratee for each element. The iteratee is bound to thisArg
         * and invoked with three arguments:
         * (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.
         *
         * Note: As with other "Collections" methods, objects with a "length" property are iterated like arrays. To
         * avoid this behavior _.forIn or _.forOwn may be used for object iteration.
         *
         * @alias _.each
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param thisArg The this binding of iteratee.
         */
        forEach<T>(
            collection: T[],
            iteratee?: ArrayIterator<T, any>
        ): T[];

        /**
         * @see _.forEach
         */
        forEach(
            collection: string,
            iteratee?: StringIterator<any>
        ): string;

        /**
         * @see _.forEach
         */
        forEach<T>(
            collection: List<T>,
            iteratee?: ListIterator<T, any>
        ): List<T>;

        /**
         * @see _.forEach
         */
        forEach<T extends object>(
            collection: T,
            iteratee?: ObjectIterator<T, any>
        ): T;

        /**
         * @see _.forEach
         */
        forEach<T, TArray extends T[] | null | undefined>(
            collection: TArray & (T[] | null | undefined),
            iteratee?: ArrayIterator<T, any>
        ): TArray;

        /**
         * @see _.forEach
         */
        forEach<TString extends string | null | undefined>(
            collection: TString,
            iteratee?: StringIterator<any>
        ): TString;

        /**
         * @see _.forEach
         */
        forEach<T, TList extends List<T> | null | undefined>(
            collection: TList & (List<T> | null | undefined),
            iteratee?: ListIterator<T, any>
        ): TList;

        /**
         * @see _.forEach
         */
        forEach<T extends object>(
            collection: T | null | undefined,
            iteratee?: ObjectIterator<T, any>
        ): T | null | undefined;
    }

    interface LoDashWrapper<TValue> {
        /**
         * @see _.forEach
         */
        forEach<T>(
            this: LoDashWrapper<T[] | null | undefined>,
            iteratee?: ArrayIterator<T, any>
        ): this;

        /**
         * @see _.forEach
         */
        forEach(
            this: LoDashWrapper<string | null | undefined>,
            iteratee?: StringIterator<any>
        ): this;

        /**
         * @see _.forEach
         */
        forEach<T>(
            this: LoDashWrapper<List<T> | null | undefined>,
            iteratee?: ListIterator<T, any>
        ): this;

        /**
         * @see _.forEach
         */
        forEach<T extends object>(
            this: LoDashWrapper<T | null | undefined>,
            iteratee?: ObjectIterator<T, any>
        ): this;
    }
}