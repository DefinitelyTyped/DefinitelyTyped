// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface ReduceRight {
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    (): ReduceRight;
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    <T, TResult>(callback: _.MemoIteratorCappedRight<T, TResult>): ReduceRight1x1<T, TResult>;
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    <TResult>(callback: _.__, accumulator: TResult): ReduceRight1x2<TResult>;
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    <T, TResult>(callback: _.MemoIteratorCappedRight<T, TResult>, accumulator: TResult): ReduceRight1x3<T, TResult>;
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    <T>(callback: _.__, accumulator: _.__, collection: T[] | null | undefined): ReduceRight1x4<T>;
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    <T, TResult>(callback: _.MemoIteratorCappedRight<T, TResult>, accumulator: _.__, collection: T[] | null | undefined): ReduceRight1x5<TResult>;
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    <T, TResult>(callback: _.__, accumulator: TResult, collection: T[] | null | undefined): ReduceRight1x6<T, TResult>;
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    <T, TResult>(callback: _.MemoIteratorCappedRight<T, TResult>, accumulator: TResult, collection: T[] | _.List<T> | null | undefined): TResult;
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    <T>(callback: _.__, accumulator: _.__, collection: _.List<T> | null | undefined): ReduceRight2x4<T>;
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    <T, TResult>(callback: _.MemoIteratorCappedRight<T, TResult>, accumulator: _.__, collection: _.List<T> | null | undefined): ReduceRight2x5<TResult>;
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    <T, TResult>(callback: _.__, accumulator: TResult, collection: _.List<T> | null | undefined): ReduceRight2x6<T, TResult>;
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    <T extends object, TResult>(callback: _.MemoIteratorCappedRight<T[keyof T], TResult>): ReduceRight3x1<T, TResult>;
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    <T extends object, TResult>(callback: _.MemoIteratorCappedRight<T[keyof T], TResult>, accumulator: TResult): ReduceRight3x3<T, TResult>;
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    <T extends object>(callback: _.__, accumulator: _.__, collection: T | null | undefined): ReduceRight3x4<T>;
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    <T extends object, TResult>(callback: _.MemoIteratorCappedRight<T[keyof T], TResult>, accumulator: _.__, collection: T | null | undefined): ReduceRight3x5<TResult>;
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    <T extends object, TResult>(callback: _.__, accumulator: TResult, collection: T | null | undefined): ReduceRight3x6<T, TResult>;
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    <T extends object, TResult>(callback: _.MemoIteratorCappedRight<T[keyof T], TResult>, accumulator: TResult, collection: T | null | undefined): TResult;
}
interface ReduceRight1x1<T, TResult> {
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    (): ReduceRight1x1<T, TResult>;
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    (accumulator: TResult): ReduceRight1x3<T, TResult>;
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    (accumulator: _.__, collection: T[] | null | undefined): ReduceRight1x5<TResult>;
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    (accumulator: TResult, collection: T[] | _.List<T> | null | undefined): TResult;
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    (accumulator: _.__, collection: _.List<T> | null | undefined): ReduceRight2x5<TResult>;
}
interface ReduceRight1x2<TResult> {
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    (): ReduceRight1x2<TResult>;
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    <T>(callback: _.MemoIteratorCappedRight<T, TResult>): ReduceRight1x3<T, TResult>;
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    <T>(callback: _.__, collection: T[] | null | undefined): ReduceRight1x6<T, TResult>;
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    <T>(callback: _.MemoIteratorCappedRight<T, TResult>, collection: T[] | _.List<T> | null | undefined): TResult;
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    <T>(callback: _.__, collection: _.List<T> | null | undefined): ReduceRight2x6<T, TResult>;
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    <T extends object>(callback: _.MemoIteratorCappedRight<T[keyof T], TResult>): ReduceRight3x3<T, TResult>;
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    <T extends object>(callback: _.__, collection: T | null | undefined): ReduceRight3x6<T, TResult>;
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    <T extends object>(callback: _.MemoIteratorCappedRight<T[keyof T], TResult>, collection: T | null | undefined): TResult;
}
interface ReduceRight1x3<T, TResult> {
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    (): ReduceRight1x3<T, TResult>;
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    (collection: T[] | _.List<T> | null | undefined): TResult;
}
interface ReduceRight1x4<T> {
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    (): ReduceRight1x4<T>;
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    <TResult>(callback: _.MemoIteratorCappedRight<T, TResult>): ReduceRight1x5<TResult>;
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    <TResult>(callback: _.__, accumulator: TResult): ReduceRight1x6<T, TResult>;
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    <TResult>(callback: _.MemoIteratorCappedRight<T, TResult>, accumulator: TResult): TResult;
}
interface ReduceRight1x5<TResult> {
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    (): ReduceRight1x5<TResult>;
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    (accumulator: TResult): TResult;
}
interface ReduceRight1x6<T, TResult> {
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    (): ReduceRight1x6<T, TResult>;
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    (callback: _.MemoIteratorCappedRight<T, TResult>): TResult;
}
interface ReduceRight2x4<T> {
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    (): ReduceRight2x4<T>;
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    <TResult>(callback: _.MemoIteratorCappedRight<T, TResult>): ReduceRight2x5<TResult>;
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    <TResult>(callback: _.__, accumulator: TResult): ReduceRight2x6<T, TResult>;
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    <TResult>(callback: _.MemoIteratorCappedRight<T, TResult>, accumulator: TResult): TResult;
}
interface ReduceRight2x5<TResult> {
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    (): ReduceRight2x5<TResult>;
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    (accumulator: TResult): TResult;
}
interface ReduceRight2x6<T, TResult> {
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    (): ReduceRight2x6<T, TResult>;
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    (callback: _.MemoIteratorCappedRight<T, TResult>): TResult;
}
interface ReduceRight3x1<T, TResult> {
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    (): ReduceRight3x1<T, TResult>;
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    (accumulator: TResult): ReduceRight3x3<T, TResult>;
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    (accumulator: _.__, collection: T | null | undefined): ReduceRight3x5<TResult>;
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    (accumulator: TResult, collection: T | null | undefined): TResult;
}
interface ReduceRight3x3<T, TResult> {
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    (): ReduceRight3x3<T, TResult>;
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    (collection: T | null | undefined): TResult;
}
interface ReduceRight3x4<T> {
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    (): ReduceRight3x4<T>;
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    <TResult>(callback: _.MemoIteratorCappedRight<T[keyof T], TResult>): ReduceRight3x5<TResult>;
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    <TResult>(callback: _.__, accumulator: TResult): ReduceRight3x6<T, TResult>;
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    <TResult>(callback: _.MemoIteratorCappedRight<T[keyof T], TResult>, accumulator: TResult): TResult;
}
interface ReduceRight3x5<TResult> {
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    (): ReduceRight3x5<TResult>;
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    (accumulator: TResult): TResult;
}
interface ReduceRight3x6<T, TResult> {
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    (): ReduceRight3x6<T, TResult>;
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    (callback: _.MemoIteratorCappedRight<T[keyof T], TResult>): TResult;
}

declare const reduceRight: ReduceRight;
export = reduceRight;
