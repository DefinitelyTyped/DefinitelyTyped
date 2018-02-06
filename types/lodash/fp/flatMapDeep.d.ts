import _ = require("../index");

declare namespace Lodash {
    interface FlatMapDeep {
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
        (): FlatMapDeep;
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
        <T, TResult>(iteratee: _.ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>): FlatMapDeep1x1<T, TResult>;
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
        <T, TResult>(iteratee: _.ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>, collection: _.List<T> | null | undefined): TResult[];
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
        <T, TResult>(iteratee: _.NumericDictionaryIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>): FlatMapDeep2x1<T, TResult>;
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
        <T, TResult>(iteratee: _.NumericDictionaryIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>, collection: _.NumericDictionary<T> | null | undefined): TResult[];
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
        <T extends object, TResult>(iteratee: _.ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>): FlatMapDeep3x1<T, TResult>;
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
        <T extends object, TResult>(iteratee: _.ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>, collection: T | null | undefined): TResult[];
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
        (iteratee: string): FlatMapDeep4x1;
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
        (iteratee: string, collection: object | null | undefined): any[];
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
        (iteratee: object): FlatMapDeep5x1;
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
        (iteratee: object, collection: object | null | undefined): boolean[];
    }
    interface FlatMapDeep1x1<T, TResult> {
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
        (): FlatMapDeep1x1<T, TResult>;
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
        (collection: _.List<T> | null | undefined): TResult[];
    }
    interface FlatMapDeep2x1<T, TResult> {
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
        (): FlatMapDeep2x1<T, TResult>;
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
        (collection: _.NumericDictionary<T> | null | undefined): TResult[];
    }
    interface FlatMapDeep3x1<T extends object, TResult> {
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
        (): FlatMapDeep3x1<T, TResult>;
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
        (collection: T | null | undefined): TResult[];
    }
    interface FlatMapDeep4x1 {
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
        (): FlatMapDeep4x1;
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
        (collection: object | null | undefined): any[];
    }
    interface FlatMapDeep5x1 {
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
        (): FlatMapDeep5x1;
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
        (collection: object | null | undefined): boolean[];
    }
}

declare const flatMapDeep: Lodash.FlatMapDeep;
export = flatMapDeep;
