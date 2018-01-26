import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * This method is like `_.flatMap` except that it recursively flattens the
         * mapped results up to `depth` times.
         *
         * @since 4.7.0
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratee=_.identity] The function invoked per iteration.
         * @param [depth=1] The maximum recursion depth.
         * @returns Returns the new flattened array.
         * @example
         *
         * function duplicate(n) {
         *   return [[[n, n]]];
         * }
         *
         * _.flatMapDepth([1, 2], duplicate, 2);
         * // => [[1, 1], [2, 2]]
         */
        flatMapDepth<T>(
            collection: List<ListOfRecursiveArraysOrValues<T> | T> | Dictionary<ListOfRecursiveArraysOrValues<T> | T> | NumericDictionary<ListOfRecursiveArraysOrValues<T> | T> | null | undefined
        ): T[];

        /**
         * @see _.flatMapDepth
         */
        flatMapDepth<T, TResult>(
            collection: List<T> | null | undefined,
            iteratee: ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>,
            depth?: number
        ): TResult[];

        /**
         * @see _.flatMapDepth
         */
        flatMapDepth<T, TResult>(
            collection: NumericDictionary<T> | null | undefined,
            iteratee: NumericDictionaryIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>,
            depth?: number
        ): TResult[];

        /**
         * @see _.flatMapDepth
         */
        flatMapDepth<T extends object, TResult>(
            collection: T | null | undefined,
            iteratee: ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>,
            depth?: number
        ): TResult[];

        /**
         * @see _.flatMapDepth
         */
        flatMapDepth(
            collection: object | null | undefined,
            iteratee: string,
            depth?: number
        ): any[];

        /**
         * @see _.flatMapDepth
         */
        flatMapDepth(
            collection: object | null | undefined,
            iteratee: object,
            depth?: number
        ): boolean[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.flatMapDepth
         */
        flatMapDepth<T>(
            this: LoDashImplicitWrapper<List<ListOfRecursiveArraysOrValues<T> | T> | Dictionary<ListOfRecursiveArraysOrValues<T> | T> | NumericDictionary<ListOfRecursiveArraysOrValues<T> | T> | null | undefined>
        ): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.flatMapDepth
         */
        flatMapDepth<T, TResult>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            iteratee: ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>,
            depth?: number
        ): LoDashImplicitWrapper<TResult[]>;

        /**
         * @see _.flatMapDepth
         */
        flatMapDepth<T, TResult>(
            this: LoDashImplicitWrapper<NumericDictionary<T> | null | undefined>,
            iteratee: NumericDictionaryIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>,
            depth?: number
        ): LoDashImplicitWrapper<TResult[]>;

        /**
         * @see _.flatMapDepth
         */
        flatMapDepth<T extends object, TResult>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            iteratee: ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>,
            depth?: number
        ): LoDashImplicitWrapper<TResult[]>;

        /**
         * @see _.flatMapDepth
         */
        flatMapDepth(
            this: LoDashImplicitWrapper<object | null | undefined>,
            iteratee: string,
            depth?: number
        ): LoDashImplicitWrapper<any[]>;

        /**
         * @see _.flatMapDepth
         */
        flatMapDepth(
            this: LoDashImplicitWrapper<object | null | undefined>,
            iteratee: object,
            depth?: number
        ): LoDashImplicitWrapper<boolean[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.flatMapDepth
         */
        flatMapDepth<T>(
            this: LoDashExplicitWrapper<List<ListOfRecursiveArraysOrValues<T> | T> | Dictionary<ListOfRecursiveArraysOrValues<T> | T> | NumericDictionary<ListOfRecursiveArraysOrValues<T> | T> | null | undefined>
        ): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.flatMapDepth
         */
        flatMapDepth<T, TResult>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            iteratee: ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>,
            depth?: number
        ): LoDashExplicitWrapper<TResult[]>;

        /**
         * @see _.flatMapDepth
         */
        flatMapDepth<T, TResult>(
            this: LoDashExplicitWrapper<NumericDictionary<T> | null | undefined>,
            iteratee: NumericDictionaryIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>,
            depth?: number
        ): LoDashExplicitWrapper<TResult[]>;

        /**
         * @see _.flatMapDepth
         */
        flatMapDepth<T extends object, TResult>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            iteratee: ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>,
            depth?: number
        ): LoDashExplicitWrapper<TResult[]>;

        /**
         * @see _.flatMapDepth
         */
        flatMapDepth(
            this: LoDashExplicitWrapper<object | null | undefined>,
            iteratee: string,
            depth?: number
        ): LoDashExplicitWrapper<any[]>;

        /**
         * @see _.flatMapDepth
         */
        flatMapDepth(
            this: LoDashExplicitWrapper<object | null | undefined>,
            iteratee: object,
            depth?: number
        ): LoDashExplicitWrapper<boolean[]>;
    }
}