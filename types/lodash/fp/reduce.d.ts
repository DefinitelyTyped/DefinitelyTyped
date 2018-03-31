// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface Reduce {
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    (): Reduce;
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    <T, TResult>(callback: _.MemoIteratorCapped<T, TResult>): Reduce1x1<T, TResult>;
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    <TResult>(p1: _.__, accumulator: TResult): Reduce1x2<TResult>;
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    <T, TResult>(callback: _.MemoIteratorCapped<T, TResult>, accumulator: TResult): Reduce1x3<T, TResult>;
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    <T>(p1: _.__, p2: _.__, collection: T[] | null | undefined): Reduce1x4<T>;
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    <T, TResult>(callback: _.MemoIteratorCapped<T, TResult>, p2: _.__, collection: T[] | null | undefined): Reduce1x5<TResult>;
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    <T, TResult>(p1: _.__, accumulator: TResult, collection: T[] | null | undefined): Reduce1x6<T, TResult>;
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    <T, TResult>(callback: _.MemoIteratorCapped<T, TResult>, accumulator: TResult, collection: T[] | _.List<T> | null | undefined): TResult;
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    <T>(p1: _.__, p2: _.__, collection: _.List<T> | null | undefined): Reduce2x4<T>;
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    <T, TResult>(callback: _.MemoIteratorCapped<T, TResult>, p2: _.__, collection: _.List<T> | null | undefined): Reduce2x5<TResult>;
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    <T, TResult>(p1: _.__, accumulator: TResult, collection: _.List<T> | null | undefined): Reduce2x6<T, TResult>;
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    <T extends object, TResult>(callback: _.MemoIteratorCapped<T[keyof T], TResult>): Reduce3x1<T, TResult>;
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    <T extends object, TResult>(callback: _.MemoIteratorCapped<T[keyof T], TResult>, accumulator: TResult): Reduce3x3<T, TResult>;
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    <T extends object>(p1: _.__, p2: _.__, collection: T | null | undefined): Reduce3x4<T>;
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    <T extends object, TResult>(callback: _.MemoIteratorCapped<T[keyof T], TResult>, p2: _.__, collection: T | null | undefined): Reduce3x5<TResult>;
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    <T extends object, TResult>(p1: _.__, accumulator: TResult, collection: T | null | undefined): Reduce3x6<T, TResult>;
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    <T extends object, TResult>(callback: _.MemoIteratorCapped<T[keyof T], TResult>, accumulator: TResult, collection: T | null | undefined): TResult;
}
interface Reduce1x1<T, TResult> {
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    (): Reduce1x1<T, TResult>;
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    (accumulator: TResult): Reduce1x3<T, TResult>;
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    (p1: _.__, collection: T[] | null | undefined): Reduce1x5<TResult>;
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    (accumulator: TResult, collection: T[] | _.List<T> | null | undefined): TResult;
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    (p1: _.__, collection: _.List<T> | null | undefined): Reduce2x5<TResult>;
}
interface Reduce1x2<TResult> {
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    (): Reduce1x2<TResult>;
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    <T>(callback: _.MemoIteratorCapped<T, TResult>): Reduce1x3<T, TResult>;
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    <T>(p1: _.__, collection: T[] | null | undefined): Reduce1x6<T, TResult>;
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    <T>(callback: _.MemoIteratorCapped<T, TResult>, collection: T[] | _.List<T> | null | undefined): TResult;
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    <T>(p1: _.__, collection: _.List<T> | null | undefined): Reduce2x6<T, TResult>;
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    <T extends object>(callback: _.MemoIteratorCapped<T[keyof T], TResult>): Reduce3x3<T, TResult>;
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    <T extends object>(p1: _.__, collection: T | null | undefined): Reduce3x6<T, TResult>;
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    <T extends object>(callback: _.MemoIteratorCapped<T[keyof T], TResult>, collection: T | null | undefined): TResult;
}
interface Reduce1x3<T, TResult> {
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    (): Reduce1x3<T, TResult>;
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    (collection: T[] | _.List<T> | null | undefined): TResult;
}
interface Reduce1x4<T> {
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    (): Reduce1x4<T>;
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    <TResult>(callback: _.MemoIteratorCapped<T, TResult>): Reduce1x5<TResult>;
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    <TResult>(p1: _.__, accumulator: TResult): Reduce1x6<T, TResult>;
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    <TResult>(callback: _.MemoIteratorCapped<T, TResult>, accumulator: TResult): TResult;
}
interface Reduce1x5<TResult> {
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    (): Reduce1x5<TResult>;
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    <T>(accumulator: TResult): TResult;
}
interface Reduce1x6<T, TResult> {
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    (): Reduce1x6<T, TResult>;
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    (callback: _.MemoIteratorCapped<T, TResult>): TResult;
}
interface Reduce2x4<T> {
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    (): Reduce2x4<T>;
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    <TResult>(callback: _.MemoIteratorCapped<T, TResult>): Reduce2x5<TResult>;
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    <TResult>(p1: _.__, accumulator: TResult): Reduce2x6<T, TResult>;
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    <TResult>(callback: _.MemoIteratorCapped<T, TResult>, accumulator: TResult): TResult;
}
interface Reduce2x5<TResult> {
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    (): Reduce2x5<TResult>;
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    <T>(accumulator: TResult): TResult;
}
interface Reduce2x6<T, TResult> {
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    (): Reduce2x6<T, TResult>;
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    (callback: _.MemoIteratorCapped<T, TResult>): TResult;
}
interface Reduce3x1<T, TResult> {
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    (): Reduce3x1<T, TResult>;
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    (accumulator: TResult): Reduce3x3<T, TResult>;
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    (p1: _.__, collection: T | null | undefined): Reduce3x5<TResult>;
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    (accumulator: TResult, collection: T | null | undefined): TResult;
}
interface Reduce3x3<T, TResult> {
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    (): Reduce3x3<T, TResult>;
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    (collection: T | null | undefined): TResult;
}
interface Reduce3x4<T> {
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    (): Reduce3x4<T>;
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    <TResult>(callback: _.MemoIteratorCapped<T[keyof T], TResult>): Reduce3x5<TResult>;
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    <TResult>(p1: _.__, accumulator: TResult): Reduce3x6<T, TResult>;
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    <TResult>(callback: _.MemoIteratorCapped<T[keyof T], TResult>, accumulator: TResult): TResult;
}
interface Reduce3x5<TResult> {
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    (): Reduce3x5<TResult>;
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    <T extends object>(accumulator: TResult): TResult;
}
interface Reduce3x6<T, TResult> {
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    (): Reduce3x6<T, TResult>;
    /**
    * Reduces a collection to a value which is the accumulated result of running each
    * element in the collection through the callback, where each successive callback execution
    * consumes the return value of the previous execution. If accumulator is not provided the
    * first element of the collection will be used as the initial accumulator value. The callback
    * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param accumulator Initial value of the accumulator.
    * @return Returns the accumulated value.
    **/
    (callback: _.MemoIteratorCapped<T[keyof T], TResult>): TResult;
}

declare const reduce: Reduce;
export = reduce;
