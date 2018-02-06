import _ = require("../index");

declare namespace Lodash {
    interface FlatMapDeep {
        (): FlatMapDeep;
        <T, TResult>(iteratee: _.ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>): FlatMapDeep1x1<T, TResult>;
        <T, TResult>(iteratee: _.ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>, collection: _.List<T> | null | undefined): TResult[];
        <T, TResult>(iteratee: _.NumericDictionaryIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>): FlatMapDeep2x1<T, TResult>;
        <T, TResult>(iteratee: _.NumericDictionaryIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>, collection: _.NumericDictionary<T> | null | undefined): TResult[];
        <T extends object, TResult>(iteratee: _.ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>): FlatMapDeep3x1<T, TResult>;
        <T extends object, TResult>(iteratee: _.ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>, collection: T | null | undefined): TResult[];
        (iteratee: string): FlatMapDeep4x1;
        (iteratee: string, collection: object | null | undefined): any[];
        (iteratee: object): FlatMapDeep5x1;
        (iteratee: object, collection: object | null | undefined): boolean[];
    }
    interface FlatMapDeep1x1<T, TResult> {
        (): FlatMapDeep1x1<T, TResult>;
        (collection: _.List<T> | null | undefined): TResult[];
    }
    interface FlatMapDeep2x1<T, TResult> {
        (): FlatMapDeep2x1<T, TResult>;
        (collection: _.NumericDictionary<T> | null | undefined): TResult[];
    }
    interface FlatMapDeep3x1<T extends object, TResult> {
        (): FlatMapDeep3x1<T, TResult>;
        (collection: T | null | undefined): TResult[];
    }
    interface FlatMapDeep4x1 {
        (): FlatMapDeep4x1;
        (collection: object | null | undefined): any[];
    }
    interface FlatMapDeep5x1 {
        (): FlatMapDeep5x1;
        (collection: object | null | undefined): boolean[];
    }
}

declare const flatMapDeep: Lodash.FlatMapDeep;
export = flatMapDeep;
