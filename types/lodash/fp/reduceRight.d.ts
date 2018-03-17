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
    <T, TResult>(callback: _.MemoIteratorCappedRight<T, TResult>, accumulator: TResult): ReduceRight1x2<T, TResult>;
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
    <T extends object, TResult>(callback: _.MemoIteratorCappedRight<T[keyof T], TResult>): ReduceRight3x1<T, TResult>;
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    <T extends object, TResult>(callback: _.MemoIteratorCappedRight<T[keyof T], TResult>, accumulator: TResult): ReduceRight3x2<T, TResult>;
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
    (accumulator: TResult): ReduceRight1x2<T, TResult>;
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    (accumulator: TResult, collection: T[] | _.List<T> | null | undefined): TResult;
}
interface ReduceRight1x2<T, TResult> {
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    (): ReduceRight1x2<T, TResult>;
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
interface ReduceRight3x1<T extends object, TResult> {
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
    (accumulator: TResult): ReduceRight3x2<T, TResult>;
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
interface ReduceRight3x2<T extends object, TResult> {
    /**
    * This method is like _.reduce except that it iterates over elements of a collection from
    * right to left.
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return The accumulated value.
    **/
    (): ReduceRight3x2<T, TResult>;
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

declare const reduceRight: ReduceRight;
export = reduceRight;
