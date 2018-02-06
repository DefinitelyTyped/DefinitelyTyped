import _ = require("../index");

declare namespace Lodash {
    interface Reduce {
        (): Reduce;
        <TResult>(accumulator: TResult): Reduce1x1<T, TResult>;
        <T, TResult>(accumulator: TResult, collection: T[] | null | undefined): Reduce1x2<T, TResult>;
        <T, TResult>(accumulator: TResult, collection: T[] | null | undefined, callback: _.MemoListIterator<T, TResult, T[]>): TResult;
        <T, TResult>(accumulator: TResult, collection: _.List<T> | null | undefined): Reduce2x2<T, TResult>;
        <T, TResult>(accumulator: TResult, collection: _.List<T> | null | undefined, callback: _.MemoListIterator<T, TResult, _.List<T>>): TResult;
        <T extends object, TResult>(accumulator: TResult, collection: T | null | undefined): Reduce3x2<T, TResult>;
        <T extends object, TResult>(accumulator: TResult, collection: T | null | undefined, callback: _.MemoObjectIterator<T[keyof T], TResult, T>): TResult;
        <T, TResult>(accumulator: TResult, collection: _.NumericDictionary<T> | null | undefined): Reduce4x2<T, TResult>;
        <T, TResult>(accumulator: TResult, collection: _.NumericDictionary<T> | null | undefined, callback: _.MemoListIterator<T, TResult, _.NumericDictionary<T>>): TResult;
    }
    interface Reduce1x1<T, TResult> {
        (): Reduce1x1<T, TResult>;
        (collection: T[] | null | undefined): Reduce1x2<T, TResult>;
        (collection: T[] | null | undefined, callback: _.MemoListIterator<T, TResult, T[]>): TResult;
        (collection: _.List<T> | null | undefined): Reduce2x2<T, TResult>;
        (collection: _.List<T> | null | undefined, callback: _.MemoListIterator<T, TResult, _.List<T>>): TResult;
        (collection: T | null | undefined): Reduce3x2<T, TResult>;
        (collection: T | null | undefined, callback: _.MemoObjectIterator<T[keyof T], TResult, T>): TResult;
        (collection: _.NumericDictionary<T> | null | undefined): Reduce4x2<T, TResult>;
        (collection: _.NumericDictionary<T> | null | undefined, callback: _.MemoListIterator<T, TResult, _.NumericDictionary<T>>): TResult;
    }
    interface Reduce1x2<T, TResult> {
        (): Reduce1x2<T, TResult>;
        (callback: _.MemoListIterator<T, TResult, T[]>): TResult;
    }
    interface Reduce2x2<T, TResult> {
        (): Reduce2x2<T, TResult>;
        (callback: _.MemoListIterator<T, TResult, _.List<T>>): TResult;
    }
    interface Reduce3x2<T extends object, TResult> {
        (): Reduce3x2<T, TResult>;
        (callback: _.MemoObjectIterator<T[keyof T], TResult, T>): TResult;
    }
    interface Reduce4x2<T, TResult> {
        (): Reduce4x2<T, TResult>;
        (callback: _.MemoListIterator<T, TResult, _.NumericDictionary<T>>): TResult;
    }
}

declare const reduce: Lodash.Reduce;
export = reduce;
