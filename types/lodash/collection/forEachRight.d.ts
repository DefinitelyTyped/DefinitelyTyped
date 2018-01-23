declare namespace _ {
    interface LoDashStatic {
        /**
         * This method is like _.forEach except that it iterates over elements of collection from right to left.
         *
         * @alias _.eachRight
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function called per iteration.
         * @param thisArg The this binding of callback.
         */
        forEachRight<T>(
            collection: T[],
            iteratee?: ArrayIterator<T, any>
        ): T[];

        /**
         * @see _.forEachRight
         */
        forEachRight(
            collection: string,
            iteratee?: StringIterator<any>
        ): string;

        /**
         * @see _.forEachRight
         */
        forEachRight<T>(
            collection: List<T>,
            iteratee?: ListIterator<T, any>
        ): List<T>;

        /**
         * @see _.forEachRight
         */
        forEachRight<T extends object>(
            collection: T,
            iteratee?: ObjectIterator<T, any>
        ): T;

        /**
         * @see _.forEachRight
         */
        forEachRight<T, TArray extends T[] | null | undefined>(
            collection: TArray & (T[] | null | undefined),
            iteratee?: ArrayIterator<T, any>
        ): TArray;

        /**
         * @see _.forEachRight
         */
        forEachRight<TString extends string | null | undefined>(
            collection: TString,
            iteratee?: StringIterator<any>
        ): TString;

        /**
         * @see _.forEachRight
         */
        forEachRight<T, TList extends List<T> | null | undefined>(
            collection: TList & (List<T> | null | undefined),
            iteratee?: ListIterator<T, any>
        ): TList;

        /**
         * @see _.forEachRight
         */
        forEachRight<T extends object>(
            collection: T | null | undefined,
            iteratee?: ObjectIterator<T, any>
        ): T | null | undefined;
    }

    interface LoDashWrapper<TValue> {
        /**
         * @see _.forEachRight
         */
        forEachRight<T>(
            this: LoDashWrapper<T[] | null | undefined>,
            iteratee?: ArrayIterator<T, any>
        ): this;

        /**
         * @see _.forEachRight
         */
        forEachRight(
            this: LoDashWrapper<string | null | undefined>,
            iteratee?: StringIterator<any>
        ): this;

        /**
         * @see _.forEachRight
         */
        forEachRight<T>(
            this: LoDashWrapper<List<T> | null | undefined>,
            iteratee?: ListIterator<T, any>
        ): this;

        /**
         * @see _.forEachRight
         */
        forEachRight<T extends object>(
            this: LoDashWrapper<T | null | undefined>,
            iteratee?: ObjectIterator<T, any>
        ): this;
    }
}