import _ = require("../index");

declare namespace Lodash {
    interface FlatMapDepth {
        (): FlatMapDepth;
        (depth: number): FlatMapDepth1x1<T, TResult>;
        <T>(depth: number, collection: _.List<T> | null | undefined): FlatMapDepth1x2<T, TResult>;
        <T, TResult>(depth: number, collection: _.List<T> | null | undefined, iteratee: _.ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>): TResult[];
        <T>(depth: number, collection: _.NumericDictionary<T> | null | undefined): FlatMapDepth2x2<T, TResult>;
        <T, TResult>(depth: number, collection: _.NumericDictionary<T> | null | undefined, iteratee: _.NumericDictionaryIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>): TResult[];
        <T extends object>(depth: number, collection: T | null | undefined): FlatMapDepth3x2<T, TResult>;
        <T extends object, TResult>(depth: number, collection: T | null | undefined, iteratee: _.ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>): TResult[];
        (depth: number, collection: object | null | undefined): FlatMapDepth4x2;
        (depth: number, collection: object | null | undefined, iteratee: string): any[];
        (depth: number, collection: object | null | undefined, iteratee: object): boolean[];
    }
    interface FlatMapDepth1x1<T, TResult> {
        (): FlatMapDepth1x1<T, TResult>;
        (collection: _.List<T> | null | undefined): FlatMapDepth1x2<T, TResult>;
        (collection: _.List<T> | null | undefined, iteratee: _.ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>): TResult[];
        (collection: _.NumericDictionary<T> | null | undefined): FlatMapDepth2x2<T, TResult>;
        (collection: _.NumericDictionary<T> | null | undefined, iteratee: _.NumericDictionaryIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>): TResult[];
        (collection: T | null | undefined): FlatMapDepth3x2<T, TResult>;
        (collection: T | null | undefined, iteratee: _.ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>): TResult[];
        (collection: object | null | undefined): FlatMapDepth4x2;
        (collection: object | null | undefined, iteratee: string): any[];
        (collection: object | null | undefined): FlatMapDepth5x2;
        (collection: object | null | undefined, iteratee: object): boolean[];
    }
    interface FlatMapDepth1x2<T, TResult> {
        (): FlatMapDepth1x2<T, TResult>;
        (iteratee: _.ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>): TResult[];
    }
    interface FlatMapDepth2x2<T, TResult> {
        (): FlatMapDepth2x2<T, TResult>;
        (iteratee: _.NumericDictionaryIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>): TResult[];
    }
    interface FlatMapDepth3x2<T extends object, TResult> {
        (): FlatMapDepth3x2<T, TResult>;
        (iteratee: _.ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>): TResult[];
    }
    interface FlatMapDepth4x2 {
        (): FlatMapDepth4x2;
        (iteratee: string): any[];
        (iteratee: object): boolean[];
    }
}

declare const flatMapDepth: Lodash.FlatMapDepth;
export = flatMapDepth;
