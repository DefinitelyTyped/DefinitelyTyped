import _ = require("../index");

declare namespace Lodash {
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
        <T, TResult>(callback: _.MemoIteratorCapped<T, TResult>): ReduceRight1x1<T, TResult>;
        /**
        * This method is like _.reduce except that it iterates over elements of a collection from
        * right to left.
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param accumulator Initial value of the accumulator.
        * @return The accumulated value.
        **/
        <T, TResult>(callback: _.MemoIteratorCapped<T, TResult>, accumulator: TResult): ReduceRight1x2<T, TResult>;
        /**
        * This method is like _.reduce except that it iterates over elements of a collection from
        * right to left.
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param accumulator Initial value of the accumulator.
        * @return The accumulated value.
        **/
        <T, TResult>(callback: _.MemoIteratorCapped<T, TResult>, accumulator: TResult, collection: T[] | null | undefined): TResult;
        /**
        * This method is like _.reduce except that it iterates over elements of a collection from
        * right to left.
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param accumulator Initial value of the accumulator.
        * @return The accumulated value.
        **/
        <T, TResult>(callback: _.MemoIteratorCapped<T, TResult>, accumulator: TResult, collection: _.List<T> | null | undefined): TResult;
        /**
        * This method is like _.reduce except that it iterates over elements of a collection from
        * right to left.
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param accumulator Initial value of the accumulator.
        * @return The accumulated value.
        **/
        <T extends object, TResult>(callback: _.MemoIteratorCapped<T[keyof T], TResult>): ReduceRight3x1<T, TResult>;
        /**
        * This method is like _.reduce except that it iterates over elements of a collection from
        * right to left.
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param accumulator Initial value of the accumulator.
        * @return The accumulated value.
        **/
        <T extends object, TResult>(callback: _.MemoIteratorCapped<T[keyof T], TResult>, accumulator: TResult): ReduceRight3x2<T, TResult>;
        /**
        * This method is like _.reduce except that it iterates over elements of a collection from
        * right to left.
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param accumulator Initial value of the accumulator.
        * @return The accumulated value.
        **/
        <T extends object, TResult>(callback: _.MemoIteratorCapped<T[keyof T], TResult>, accumulator: TResult, collection: T | null | undefined): TResult;
        /**
        * This method is like _.reduce except that it iterates over elements of a collection from
        * right to left.
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param accumulator Initial value of the accumulator.
        * @return The accumulated value.
        **/
        <T, TResult>(callback: _.MemoIteratorCapped<T, TResult>, accumulator: TResult, collection: _.NumericDictionary<T> | null | undefined): TResult;
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
        (accumulator: TResult, collection: T[] | null | undefined): TResult;
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
        (accumulator: TResult, collection: _.List<T> | null | undefined): TResult;
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
        (accumulator: TResult, collection: _.NumericDictionary<T> | null | undefined): TResult;
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
        (collection: T[] | null | undefined): TResult;
        /**
        * This method is like _.reduce except that it iterates over elements of a collection from
        * right to left.
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param accumulator Initial value of the accumulator.
        * @return The accumulated value.
        **/
        (collection: _.List<T> | null | undefined): TResult;
        /**
        * This method is like _.reduce except that it iterates over elements of a collection from
        * right to left.
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param accumulator Initial value of the accumulator.
        * @return The accumulated value.
        **/
        (collection: _.NumericDictionary<T> | null | undefined): TResult;
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
}

declare const reduceRight: Lodash.ReduceRight;
export = reduceRight;
