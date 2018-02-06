import _ = require("../index");

declare namespace Lodash {
    interface FlatMapDepth {
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
        (): FlatMapDepth;
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
        (depth: number): FlatMapDepth1x1;
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
        <T>(depth: number, collection: _.List<T> | null | undefined): FlatMapDepth1x2<T>;
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
        <T, TResult>(depth: number, collection: _.List<T> | null | undefined, iteratee: _.ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>): TResult[];
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
        <T>(depth: number, collection: _.NumericDictionary<T> | null | undefined): FlatMapDepth2x2<T>;
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
        <T, TResult>(depth: number, collection: _.NumericDictionary<T> | null | undefined, iteratee: _.NumericDictionaryIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>): TResult[];
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
        <T extends object>(depth: number, collection: T | null | undefined): FlatMapDepth3x2<T>;
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
        <T extends object, TResult>(depth: number, collection: T | null | undefined, iteratee: _.ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>): TResult[];
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
        (depth: number, collection: object | null | undefined): FlatMapDepth4x2;
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
        (depth: number, collection: object | null | undefined, iteratee: string): any[];
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
        (depth: number, collection: object | null | undefined, iteratee: object): boolean[];
    }
    interface FlatMapDepth1x1 {
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
        (): FlatMapDepth1x1;
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
        <T>(collection: _.List<T> | null | undefined): FlatMapDepth1x2<T>;
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
        <T, TResult>(collection: _.List<T> | null | undefined, iteratee: _.ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>): TResult[];
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
        <T>(collection: _.NumericDictionary<T> | null | undefined): FlatMapDepth2x2<T>;
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
        <T, TResult>(collection: _.NumericDictionary<T> | null | undefined, iteratee: _.NumericDictionaryIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>): TResult[];
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
        <T extends object>(collection: T | null | undefined): FlatMapDepth3x2<T>;
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
        <T extends object, TResult>(collection: T | null | undefined, iteratee: _.ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>): TResult[];
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
        (collection: object | null | undefined): FlatMapDepth4x2;
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
        (collection: object | null | undefined, iteratee: string): any[];
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
        (collection: object | null | undefined): FlatMapDepth5x2;
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
        (collection: object | null | undefined, iteratee: object): boolean[];
    }
    interface FlatMapDepth1x2<T> {
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
        (): FlatMapDepth1x2<T>;
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
        <TResult>(iteratee: _.ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>): TResult[];
    }
    interface FlatMapDepth2x2<T> {
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
        (): FlatMapDepth2x2<T>;
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
        <TResult>(iteratee: _.NumericDictionaryIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>): TResult[];
    }
    interface FlatMapDepth3x2<T extends object> {
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
        (): FlatMapDepth3x2<T>;
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
        <TResult>(iteratee: _.ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>): TResult[];
    }
    interface FlatMapDepth4x2 {
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
        (): FlatMapDepth4x2;
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
        (iteratee: string): any[];
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
        (iteratee: object): boolean[];
    }
}

declare const flatMapDepth: Lodash.FlatMapDepth;
export = flatMapDepth;
