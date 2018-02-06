import _ = require("../index");

declare namespace Lodash {
    interface FlatMap {
        (): FlatMap;
        <T, TResult>(iteratee: _.ListIterator<T, _.Many<TResult>>): FlatMap1x1<T, TResult>;
        <T, TResult>(iteratee: _.ListIterator<T, _.Many<TResult>>, collection: _.List<T> | null | undefined): TResult[];
        <T, TResult>(iteratee: _.NumericDictionaryIterator<T, _.Many<TResult>>): FlatMap2x1<T, TResult>;
        <T, TResult>(iteratee: _.NumericDictionaryIterator<T, _.Many<TResult>>, collection: _.NumericDictionary<T> | null | undefined): TResult[];
        <T extends object, TResult>(iteratee: _.ObjectIterator<T, _.Many<TResult>>): FlatMap3x1<T, TResult>;
        <T extends object, TResult>(iteratee: _.ObjectIterator<T, _.Many<TResult>>, collection: T | null | undefined): TResult[];
        (iteratee: string): FlatMap4x1;
        (iteratee: string, collection: object | null | undefined): any[];
        (iteratee: object): FlatMap5x1;
        (iteratee: object, collection: object | null | undefined): boolean[];
    }
    interface FlatMap1x1<T, TResult> {
        (): FlatMap1x1<T, TResult>;
        (collection: _.List<T> | null | undefined): TResult[];
    }
    interface FlatMap2x1<T, TResult> {
        (): FlatMap2x1<T, TResult>;
        (collection: _.NumericDictionary<T> | null | undefined): TResult[];
    }
    interface FlatMap3x1<T extends object, TResult> {
        (): FlatMap3x1<T, TResult>;
        (collection: T | null | undefined): TResult[];
    }
    interface FlatMap4x1 {
        (): FlatMap4x1;
        (collection: object | null | undefined): any[];
    }
    interface FlatMap5x1 {
        (): FlatMap5x1;
        (collection: object | null | undefined): boolean[];
    }
}

declare const flatMap: Lodash.FlatMap;
export = flatMap;
