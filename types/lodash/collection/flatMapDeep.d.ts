import * as _ from "../index";
declare module "../index" {
    interface LoDashStatic {
        /**
         * This method is like `_.flatMap` except that it recursively flattens the
         * mapped results.
         *
         * @since 4.7.0
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratee=_.identity] The function invoked per iteration.
         * @returns Returns the new flattened array.
         * @example
         *
         * function duplicate(n) {
         *   return [[[n, n]]];
         * }
         *
         * _.flatMapDeep([1, 2], duplicate);
         * // => [1, 1, 2, 2]
         */
        flatMapDeep<T>(
            collection: List<ListOfRecursiveArraysOrValues<T> | T> | Dictionary<ListOfRecursiveArraysOrValues<T> | T> | NumericDictionary<ListOfRecursiveArraysOrValues<T> | T> | null | undefined
        ): T[];

        /**
         * @see _.flatMapDeep
         */
        flatMapDeep<T, TResult>(
            collection: List<T> | null | undefined,
            iteratee: ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>
        ): TResult[];

        /**
         * @see _.flatMapDeep
         */
        flatMapDeep<T, TResult>(
            collection: NumericDictionary<T> | null | undefined,
            iteratee: NumericDictionaryIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>
        ): TResult[];

        /**
         * @see _.flatMapDeep
         */
        flatMapDeep<T extends object, TResult>(
            collection: T | null | undefined,
            iteratee: ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>
        ): TResult[];

        /**
         * @see _.flatMapDeep
         */
        flatMapDeep(
            collection: object | null | undefined,
            iteratee: string
        ): any[];

        /**
         * @see _.flatMapDeep
         */
        flatMapDeep(
            collection: object | null | undefined,
            iteratee: object
        ): boolean[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.flatMapDeep
         */
        flatMapDeep<T>(
            this: LoDashImplicitWrapper<List<ListOfRecursiveArraysOrValues<T> | T> | Dictionary<ListOfRecursiveArraysOrValues<T> | T> | NumericDictionary<ListOfRecursiveArraysOrValues<T> | T> | null | undefined>
        ): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.flatMapDeep
         */
        flatMapDeep<T, TResult>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            iteratee: ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>
        ): LoDashImplicitWrapper<TResult[]>;

        /**
         * @see _.flatMapDeep
         */
        flatMapDeep<T, TResult>(
            this: LoDashImplicitWrapper<NumericDictionary<T> | null | undefined>,
            iteratee: NumericDictionaryIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>
        ): LoDashImplicitWrapper<TResult[]>;

        /**
         * @see _.flatMapDeep
         */
        flatMapDeep<T extends object, TResult>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            iteratee: ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>
        ): LoDashImplicitWrapper<TResult[]>;

        /**
         * @see _.flatMapDeep
         */
        flatMapDeep(
            this: LoDashImplicitWrapper<object | null | undefined>,
            iteratee: string
        ): LoDashImplicitWrapper<any[]>;

        /**
         * @see _.flatMapDeep
         */
        flatMapDeep(
            this: LoDashImplicitWrapper<object | null | undefined>,
            iteratee: object
        ): LoDashImplicitWrapper<boolean[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.flatMapDeep
         */
        flatMapDeep<T>(
            this: LoDashExplicitWrapper<List<ListOfRecursiveArraysOrValues<T> | T> | Dictionary<ListOfRecursiveArraysOrValues<T> | T> | NumericDictionary<ListOfRecursiveArraysOrValues<T> | T> | null | undefined>
        ): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.flatMapDeep
         */
        flatMapDeep<T, TResult>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            iteratee: ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>
        ): LoDashExplicitWrapper<TResult[]>;

        /**
         * @see _.flatMapDeep
         */
        flatMapDeep<T, TResult>(
            this: LoDashExplicitWrapper<NumericDictionary<T> | null | undefined>,
            iteratee: NumericDictionaryIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>
        ): LoDashExplicitWrapper<TResult[]>;

        /**
         * @see _.flatMapDeep
         */
        flatMapDeep<T extends object, TResult>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            iteratee: ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>
        ): LoDashExplicitWrapper<TResult[]>;

        /**
         * @see _.flatMapDeep
         */
        flatMapDeep(
            this: LoDashExplicitWrapper<object | null | undefined>,
            iteratee: string
        ): LoDashExplicitWrapper<any[]>;

        /**
         * @see _.flatMapDeep
         */
        flatMapDeep(
            this: LoDashExplicitWrapper<object | null | undefined>,
            iteratee: object
        ): LoDashExplicitWrapper<boolean[]>;
    }
}