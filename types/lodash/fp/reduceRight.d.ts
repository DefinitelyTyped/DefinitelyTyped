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
        <TResult>(accumulator: TResult): ReduceRight1x1<TResult>;
        /**
        * This method is like _.reduce except that it iterates over elements of a collection from
        * right to left.
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param accumulator Initial value of the accumulator.
        * @return The accumulated value.
        **/
        <T, TResult>(accumulator: TResult, collection: T[] | null | undefined): ReduceRight1x2<T, TResult>;
        /**
        * This method is like _.reduce except that it iterates over elements of a collection from
        * right to left.
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param accumulator Initial value of the accumulator.
        * @return The accumulated value.
        **/
        <T, TResult>(accumulator: TResult, collection: T[] | null | undefined, callback: _.MemoListIterator<T, TResult, T[]>): TResult;
        /**
        * This method is like _.reduce except that it iterates over elements of a collection from
        * right to left.
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param accumulator Initial value of the accumulator.
        * @return The accumulated value.
        **/
        <T, TResult>(accumulator: TResult, collection: _.List<T> | null | undefined): ReduceRight2x2<T, TResult>;
        /**
        * This method is like _.reduce except that it iterates over elements of a collection from
        * right to left.
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param accumulator Initial value of the accumulator.
        * @return The accumulated value.
        **/
        <T, TResult>(accumulator: TResult, collection: _.List<T> | null | undefined, callback: _.MemoListIterator<T, TResult, _.List<T>>): TResult;
        /**
        * This method is like _.reduce except that it iterates over elements of a collection from
        * right to left.
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param accumulator Initial value of the accumulator.
        * @return The accumulated value.
        **/
        <T extends object, TResult>(accumulator: TResult, collection: T | null | undefined): ReduceRight3x2<T, TResult>;
        /**
        * This method is like _.reduce except that it iterates over elements of a collection from
        * right to left.
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param accumulator Initial value of the accumulator.
        * @return The accumulated value.
        **/
        <T extends object, TResult>(accumulator: TResult, collection: T | null | undefined, callback: _.MemoObjectIterator<T[keyof T], TResult, T>): TResult;
        /**
        * This method is like _.reduce except that it iterates over elements of a collection from
        * right to left.
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param accumulator Initial value of the accumulator.
        * @return The accumulated value.
        **/
        <T, TResult>(accumulator: TResult, collection: _.NumericDictionary<T> | null | undefined): ReduceRight4x2<T, TResult>;
        /**
        * This method is like _.reduce except that it iterates over elements of a collection from
        * right to left.
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param accumulator Initial value of the accumulator.
        * @return The accumulated value.
        **/
        <T, TResult>(accumulator: TResult, collection: _.NumericDictionary<T> | null | undefined, callback: _.MemoListIterator<T, TResult, _.NumericDictionary<T>>): TResult;
    }
    interface ReduceRight1x1<TResult> {
        /**
        * This method is like _.reduce except that it iterates over elements of a collection from
        * right to left.
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param accumulator Initial value of the accumulator.
        * @return The accumulated value.
        **/
        (): ReduceRight1x1<TResult>;
        /**
        * This method is like _.reduce except that it iterates over elements of a collection from
        * right to left.
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param accumulator Initial value of the accumulator.
        * @return The accumulated value.
        **/
        <T>(collection: T[] | null | undefined): ReduceRight1x2<T, TResult>;
        /**
        * This method is like _.reduce except that it iterates over elements of a collection from
        * right to left.
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param accumulator Initial value of the accumulator.
        * @return The accumulated value.
        **/
        <T>(collection: T[] | null | undefined, callback: _.MemoListIterator<T, TResult, T[]>): TResult;
        /**
        * This method is like _.reduce except that it iterates over elements of a collection from
        * right to left.
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param accumulator Initial value of the accumulator.
        * @return The accumulated value.
        **/
        <T>(collection: _.List<T> | null | undefined): ReduceRight2x2<T, TResult>;
        /**
        * This method is like _.reduce except that it iterates over elements of a collection from
        * right to left.
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param accumulator Initial value of the accumulator.
        * @return The accumulated value.
        **/
        <T>(collection: _.List<T> | null | undefined, callback: _.MemoListIterator<T, TResult, _.List<T>>): TResult;
        /**
        * This method is like _.reduce except that it iterates over elements of a collection from
        * right to left.
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param accumulator Initial value of the accumulator.
        * @return The accumulated value.
        **/
        <T extends object>(collection: T | null | undefined): ReduceRight3x2<T, TResult>;
        /**
        * This method is like _.reduce except that it iterates over elements of a collection from
        * right to left.
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param accumulator Initial value of the accumulator.
        * @return The accumulated value.
        **/
        <T extends object>(collection: T | null | undefined, callback: _.MemoObjectIterator<T[keyof T], TResult, T>): TResult;
        /**
        * This method is like _.reduce except that it iterates over elements of a collection from
        * right to left.
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param accumulator Initial value of the accumulator.
        * @return The accumulated value.
        **/
        <T>(collection: _.NumericDictionary<T> | null | undefined): ReduceRight4x2<T, TResult>;
        /**
        * This method is like _.reduce except that it iterates over elements of a collection from
        * right to left.
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param accumulator Initial value of the accumulator.
        * @return The accumulated value.
        **/
        <T>(collection: _.NumericDictionary<T> | null | undefined, callback: _.MemoListIterator<T, TResult, _.NumericDictionary<T>>): TResult;
    }
    interface ReduceRight1x2<T> {
        /**
        * This method is like _.reduce except that it iterates over elements of a collection from
        * right to left.
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param accumulator Initial value of the accumulator.
        * @return The accumulated value.
        **/
        (): ReduceRight1x2<T>;
        /**
        * This method is like _.reduce except that it iterates over elements of a collection from
        * right to left.
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param accumulator Initial value of the accumulator.
        * @return The accumulated value.
        **/
        <TResult>(callback: _.MemoListIterator<T, TResult, T[]>): TResult;
    }
    interface ReduceRight2x2<T> {
        /**
        * This method is like _.reduce except that it iterates over elements of a collection from
        * right to left.
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param accumulator Initial value of the accumulator.
        * @return The accumulated value.
        **/
        (): ReduceRight2x2<T>;
        /**
        * This method is like _.reduce except that it iterates over elements of a collection from
        * right to left.
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param accumulator Initial value of the accumulator.
        * @return The accumulated value.
        **/
        <TResult>(callback: _.MemoListIterator<T, TResult, _.List<T>>): TResult;
    }
    interface ReduceRight3x2<T extends object> {
        /**
        * This method is like _.reduce except that it iterates over elements of a collection from
        * right to left.
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param accumulator Initial value of the accumulator.
        * @return The accumulated value.
        **/
        (): ReduceRight3x2<T>;
        /**
        * This method is like _.reduce except that it iterates over elements of a collection from
        * right to left.
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param accumulator Initial value of the accumulator.
        * @return The accumulated value.
        **/
        <TResult>(callback: _.MemoObjectIterator<T[keyof T], TResult, T>): TResult;
    }
    interface ReduceRight4x2<T> {
        /**
        * This method is like _.reduce except that it iterates over elements of a collection from
        * right to left.
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param accumulator Initial value of the accumulator.
        * @return The accumulated value.
        **/
        (): ReduceRight4x2<T>;
        /**
        * This method is like _.reduce except that it iterates over elements of a collection from
        * right to left.
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param accumulator Initial value of the accumulator.
        * @return The accumulated value.
        **/
        <TResult>(callback: _.MemoListIterator<T, TResult, _.NumericDictionary<T>>): TResult;
    }
}

declare const reduceRight: Lodash.ReduceRight;
export = reduceRight;
