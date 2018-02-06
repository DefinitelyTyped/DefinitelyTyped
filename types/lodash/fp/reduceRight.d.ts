import _ = require("../index");

declare namespace Lodash {
    interface ReduceRight {
        (): ReduceRight;
        <TResult>(accumulator: TResult): ReduceRight1x1<T, TResult>;
        <T, TResult>(accumulator: TResult, collection: T[] | null | undefined): ReduceRight1x2<T, TResult>;
        <T, TResult>(accumulator: TResult, collection: T[] | null | undefined, callback: _.MemoListIterator<T, TResult, T[]>): TResult;
        <T, TResult>(accumulator: TResult, collection: _.List<T> | null | undefined): ReduceRight2x2<T, TResult>;
        <T, TResult>(accumulator: TResult, collection: _.List<T> | null | undefined, callback: _.MemoListIterator<T, TResult, _.List<T>>): TResult;
        <T extends object, TResult>(accumulator: TResult, collection: T | null | undefined): ReduceRight3x2<T, TResult>;
        <T extends object, TResult>(accumulator: TResult, collection: T | null | undefined, callback: _.MemoObjectIterator<T[keyof T], TResult, T>): TResult;
        <T, TResult>(accumulator: TResult, collection: _.NumericDictionary<T> | null | undefined): ReduceRight4x2<T, TResult>;
        <T, TResult>(accumulator: TResult, collection: _.NumericDictionary<T> | null | undefined, callback: _.MemoListIterator<T, TResult, _.NumericDictionary<T>>): TResult;
    }
    interface ReduceRight1x1<T, TResult> {
        (): ReduceRight1x1<T, TResult>;
        (collection: T[] | null | undefined): ReduceRight1x2<T, TResult>;
        (collection: T[] | null | undefined, callback: _.MemoListIterator<T, TResult, T[]>): TResult;
        (collection: _.List<T> | null | undefined): ReduceRight2x2<T, TResult>;
        (collection: _.List<T> | null | undefined, callback: _.MemoListIterator<T, TResult, _.List<T>>): TResult;
        (collection: T | null | undefined): ReduceRight3x2<T, TResult>;
        (collection: T | null | undefined, callback: _.MemoObjectIterator<T[keyof T], TResult, T>): TResult;
        (collection: _.NumericDictionary<T> | null | undefined): ReduceRight4x2<T, TResult>;
        (collection: _.NumericDictionary<T> | null | undefined, callback: _.MemoListIterator<T, TResult, _.NumericDictionary<T>>): TResult;
    }
    interface ReduceRight1x2<T, TResult> {
        (): ReduceRight1x2<T, TResult>;
        (callback: _.MemoListIterator<T, TResult, T[]>): TResult;
    }
    interface ReduceRight2x2<T, TResult> {
        (): ReduceRight2x2<T, TResult>;
        (callback: _.MemoListIterator<T, TResult, _.List<T>>): TResult;
    }
    interface ReduceRight3x2<T extends object, TResult> {
        (): ReduceRight3x2<T, TResult>;
        (callback: _.MemoObjectIterator<T[keyof T], TResult, T>): TResult;
    }
    interface ReduceRight4x2<T, TResult> {
        (): ReduceRight4x2<T, TResult>;
        (callback: _.MemoListIterator<T, TResult, _.NumericDictionary<T>>): TResult;
    }
}

declare const reduceRight: Lodash.ReduceRight;
export = reduceRight;
