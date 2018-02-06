// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

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
        <T, TResult>(iteratee: (value: T) => _.ListOfRecursiveArraysOrValues<TResult | TResult>): FlatMapDepth1x1<T, TResult>;
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
        <T, TResult>(iteratee: (value: T) => _.ListOfRecursiveArraysOrValues<TResult | TResult>, depth: number): FlatMapDepth1x2<T, TResult>;
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
        <T, TResult>(iteratee: (value: T) => _.ListOfRecursiveArraysOrValues<TResult | TResult>, depth: number, collection: _.List<T> | null | undefined): TResult[];
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
        <T, TResult>(iteratee: (value: T) => _.ListOfRecursiveArraysOrValues<TResult | TResult>, depth: number, collection: _.NumericDictionary<T> | null | undefined): TResult[];
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
        <T extends object, TResult>(iteratee: (value: T[keyof T]) => _.ListOfRecursiveArraysOrValues<TResult | TResult>): FlatMapDepth3x1<T, TResult>;
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
        <T extends object, TResult>(iteratee: (value: T[keyof T]) => _.ListOfRecursiveArraysOrValues<TResult | TResult>, depth: number): FlatMapDepth3x2<T, TResult>;
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
        <T extends object, TResult>(iteratee: (value: T[keyof T]) => _.ListOfRecursiveArraysOrValues<TResult | TResult>, depth: number, collection: T | null | undefined): TResult[];
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
        (iteratee: string): FlatMapDepth4x1;
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
        (iteratee: string, depth: number): FlatMapDepth4x2;
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
        (iteratee: string, depth: number, collection: object | null | undefined): any[];
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
        (iteratee: object): FlatMapDepth5x1;
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
        (iteratee: object, depth: number): FlatMapDepth5x2;
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
        (iteratee: object, depth: number, collection: object | null | undefined): boolean[];
    }
    interface FlatMapDepth1x1<T, TResult> {
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
        (): FlatMapDepth1x1<T, TResult>;
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
        (depth: number): FlatMapDepth1x2<T, TResult>;
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
        (depth: number, collection: _.List<T> | null | undefined): TResult[];
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
        (depth: number): FlatMapDepth1x2<T, TResult>;
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
        (depth: number, collection: _.NumericDictionary<T> | null | undefined): TResult[];
    }
    interface FlatMapDepth1x2<T, TResult> {
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
        (): FlatMapDepth1x2<T, TResult>;
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
        (collection: _.List<T> | null | undefined): TResult[];
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
        (collection: _.NumericDictionary<T> | null | undefined): TResult[];
    }
    interface FlatMapDepth3x1<T extends object, TResult> {
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
        (): FlatMapDepth3x1<T, TResult>;
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
        (depth: number): FlatMapDepth3x2<T, TResult>;
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
        (depth: number, collection: T | null | undefined): TResult[];
    }
    interface FlatMapDepth3x2<T extends object, TResult> {
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
        (): FlatMapDepth3x2<T, TResult>;
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
        (collection: T | null | undefined): TResult[];
    }
    interface FlatMapDepth4x1 {
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
        (): FlatMapDepth4x1;
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
        (depth: number): FlatMapDepth4x2;
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
        (depth: number, collection: object | null | undefined): any[];
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
        (collection: object | null | undefined): any[];
    }
    interface FlatMapDepth5x1 {
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
        (): FlatMapDepth5x1;
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
        (depth: number): FlatMapDepth5x2;
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
        (depth: number, collection: object | null | undefined): boolean[];
    }
    interface FlatMapDepth5x2 {
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
        (): FlatMapDepth5x2;
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
        (collection: object | null | undefined): boolean[];
    }
}

declare const flatMapDepth: Lodash.FlatMapDepth;
export = flatMapDepth;
