// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

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
    <T, TResult>(iteratee: (value: T) => _.ListOfRecursiveArraysOrValues<TResult> | TResult): FlatMapDepth1x1<T, TResult>;
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
    (iteratee: _.__, depth: number): FlatMapDepth1x2;
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
    <T, TResult>(iteratee: (value: T) => _.ListOfRecursiveArraysOrValues<TResult> | TResult, depth: number): FlatMapDepth1x3<T, TResult>;
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
    <T>(iteratee: _.__, depth: _.__, collection: _.List<T> | null | undefined): FlatMapDepth1x4<T>;
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
    <T, TResult>(iteratee: (value: T) => _.ListOfRecursiveArraysOrValues<TResult> | TResult, depth: _.__, collection: _.List<T> | null | undefined): FlatMapDepth1x5<TResult>;
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
    <T>(iteratee: _.__, depth: number, collection: _.List<T> | null | undefined): FlatMapDepth1x6<T>;
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
    <T, TResult>(iteratee: (value: T) => _.ListOfRecursiveArraysOrValues<TResult> | TResult, depth: number, collection: _.List<T> | null | undefined): TResult[];
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
    <T extends object, TResult>(iteratee: (value: T[keyof T]) => _.ListOfRecursiveArraysOrValues<TResult> | TResult): FlatMapDepth2x1<T, TResult>;
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
    <T extends object, TResult>(iteratee: (value: T[keyof T]) => _.ListOfRecursiveArraysOrValues<TResult> | TResult, depth: number): FlatMapDepth2x3<T, TResult>;
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
    <T extends object>(iteratee: _.__, depth: _.__, collection: T | null | undefined): FlatMapDepth2x4<T>;
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
    <T extends object, TResult>(iteratee: (value: T[keyof T]) => _.ListOfRecursiveArraysOrValues<TResult> | TResult, depth: _.__, collection: T | null | undefined): FlatMapDepth2x5<TResult>;
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
    <T extends object>(iteratee: _.__, depth: number, collection: T | null | undefined): FlatMapDepth2x6<T>;
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
    <T extends object, TResult>(iteratee: (value: T[keyof T]) => _.ListOfRecursiveArraysOrValues<TResult> | TResult, depth: number, collection: T | null | undefined): TResult[];
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
    (iteratee: string): FlatMapDepth3x1;
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
    (iteratee: string, depth: number): FlatMapDepth3x3;
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
    (iteratee: _.__, depth: _.__, collection: object | null | undefined): FlatMapDepth3x4;
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
    (iteratee: string, depth: _.__, collection: object | null | undefined): FlatMapDepth3x5;
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
    (iteratee: _.__, depth: number, collection: object | null | undefined): FlatMapDepth3x6;
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
    (iteratee: object): FlatMapDepth4x1;
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
    (iteratee: object, depth: number): FlatMapDepth4x3;
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
    (iteratee: object, depth: _.__, collection: object | null | undefined): FlatMapDepth4x5;
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
    (depth: number): FlatMapDepth1x3<T, TResult>;
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
    (depth: _.__, collection: _.List<T> | null | undefined): FlatMapDepth1x5<TResult>;
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
}
interface FlatMapDepth1x2 {
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
    (): FlatMapDepth1x2;
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
    <T, TResult>(iteratee: (value: T) => _.ListOfRecursiveArraysOrValues<TResult> | TResult): FlatMapDepth1x3<T, TResult>;
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
    <T>(iteratee: _.__, collection: _.List<T> | null | undefined): FlatMapDepth1x6<T>;
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
    <T, TResult>(iteratee: (value: T) => _.ListOfRecursiveArraysOrValues<TResult> | TResult, collection: _.List<T> | null | undefined): TResult[];
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
    <T extends object, TResult>(iteratee: (value: T[keyof T]) => _.ListOfRecursiveArraysOrValues<TResult> | TResult): FlatMapDepth2x3<T, TResult>;
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
    <T extends object>(iteratee: _.__, collection: T | null | undefined): FlatMapDepth2x6<T>;
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
    <T extends object, TResult>(iteratee: (value: T[keyof T]) => _.ListOfRecursiveArraysOrValues<TResult> | TResult, collection: T | null | undefined): TResult[];
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
    (iteratee: string): FlatMapDepth3x3;
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
    (iteratee: _.__, collection: object | null | undefined): FlatMapDepth3x6;
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
    (iteratee: string, collection: object | null | undefined): any[];
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
    (iteratee: object): FlatMapDepth4x3;
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
    (iteratee: object, collection: object | null | undefined): boolean[];
}
interface FlatMapDepth1x3<T, TResult> {
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
    (): FlatMapDepth1x3<T, TResult>;
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
}
interface FlatMapDepth1x4<T> {
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
    (): FlatMapDepth1x4<T>;
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
    <TResult>(iteratee: (value: T) => _.ListOfRecursiveArraysOrValues<TResult> | TResult): FlatMapDepth1x5<TResult>;
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
    (iteratee: _.__, depth: number): FlatMapDepth1x6<T>;
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
    <TResult>(iteratee: (value: T) => _.ListOfRecursiveArraysOrValues<TResult> | TResult, depth: number): TResult[];
}
interface FlatMapDepth1x5<TResult> {
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
    (): FlatMapDepth1x5<TResult>;
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
    <T>(depth: number): TResult[];
}
interface FlatMapDepth1x6<T> {
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
    (): FlatMapDepth1x6<T>;
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
    <TResult>(iteratee: (value: T) => _.ListOfRecursiveArraysOrValues<TResult> | TResult): TResult[];
}
interface FlatMapDepth2x1<T, TResult> {
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
    (): FlatMapDepth2x1<T, TResult>;
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
    (depth: number): FlatMapDepth2x3<T, TResult>;
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
    (depth: _.__, collection: T | null | undefined): FlatMapDepth2x5<TResult>;
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
interface FlatMapDepth2x3<T, TResult> {
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
    (): FlatMapDepth2x3<T, TResult>;
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
interface FlatMapDepth2x4<T> {
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
    (): FlatMapDepth2x4<T>;
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
    <TResult>(iteratee: (value: T[keyof T]) => _.ListOfRecursiveArraysOrValues<TResult> | TResult): FlatMapDepth2x5<TResult>;
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
    (iteratee: _.__, depth: number): FlatMapDepth2x6<T>;
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
    <TResult>(iteratee: (value: T[keyof T]) => _.ListOfRecursiveArraysOrValues<TResult> | TResult, depth: number): TResult[];
}
interface FlatMapDepth2x5<TResult> {
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
    (): FlatMapDepth2x5<TResult>;
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
    <T extends object>(depth: number): TResult[];
}
interface FlatMapDepth2x6<T> {
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
    (): FlatMapDepth2x6<T>;
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
    <TResult>(iteratee: (value: T[keyof T]) => _.ListOfRecursiveArraysOrValues<TResult> | TResult): TResult[];
}
interface FlatMapDepth3x1 {
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
    (): FlatMapDepth3x1;
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
    (depth: number): FlatMapDepth3x3;
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
    (depth: _.__, collection: object | null | undefined): FlatMapDepth3x5;
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
interface FlatMapDepth3x3 {
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
    (): FlatMapDepth3x3;
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
interface FlatMapDepth3x4 {
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
    (): FlatMapDepth3x4;
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
    (iteratee: string): FlatMapDepth3x5;
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
    (iteratee: _.__, depth: number): FlatMapDepth3x6;
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
    (iteratee: string, depth: number): any[];
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
    (iteratee: object): FlatMapDepth4x5;
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
    (iteratee: object, depth: number): boolean[];
}
interface FlatMapDepth3x5 {
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
    (): FlatMapDepth3x5;
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
    (depth: number): any[];
}
interface FlatMapDepth3x6 {
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
    (): FlatMapDepth3x6;
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
    (depth: number): FlatMapDepth4x3;
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
    (depth: _.__, collection: object | null | undefined): FlatMapDepth4x5;
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
interface FlatMapDepth4x3 {
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
    (): FlatMapDepth4x3;
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
interface FlatMapDepth4x5 {
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
    (): FlatMapDepth4x5;
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
    (depth: number): boolean[];
}

declare const flatMapDepth: FlatMapDepth;
export = flatMapDepth;
