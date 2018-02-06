import _ = require("../index");

declare namespace Lodash {
    interface Transform {
        (): Transform;
        <TResult>(accumulator: TResult[]): Transform1x1<T, TResult>;
        <T, TResult>(accumulator: TResult[], object: T[]): Transform1x2<T, TResult>;
        <T, TResult>(accumulator: TResult[], object: T[], iteratee: _.MemoVoidArrayIterator<T, TResult[]>): TResult[];
        <TResult>(accumulator: _.Dictionary<TResult>): Transform2x1<T, TResult>;
        <T, TResult>(accumulator: _.Dictionary<TResult>, object: T[]): Transform2x2<T, TResult>;
        <T, TResult>(accumulator: _.Dictionary<TResult>, object: T[], iteratee: _.MemoVoidArrayIterator<T, _.Dictionary<TResult>>): _.Dictionary<TResult>;
        <T, TResult>(accumulator: _.Dictionary<TResult>, object: _.Dictionary<T>): Transform3x2<T, TResult>;
        <T, TResult>(accumulator: _.Dictionary<TResult>, object: _.Dictionary<T>, iteratee: _.MemoVoidDictionaryIterator<T, _.Dictionary<TResult>>): _.Dictionary<TResult>;
        <T, TResult>(accumulator: TResult[], object: _.Dictionary<T>): Transform4x2<T, TResult>;
        <T, TResult>(accumulator: TResult[], object: _.Dictionary<T>, iteratee: _.MemoVoidDictionaryIterator<T, TResult[]>): TResult[];
    }
    interface Transform1x1<T, TResult> {
        (): Transform1x1<T, TResult>;
        (object: T[]): Transform1x2<T, TResult>;
        (object: T[], iteratee: _.MemoVoidArrayIterator<T, TResult[]>): TResult[];
        (object: _.Dictionary<T>): Transform4x2<T, TResult>;
        (object: _.Dictionary<T>, iteratee: _.MemoVoidDictionaryIterator<T, TResult[]>): TResult[];
    }
    interface Transform1x2<T, TResult> {
        (): Transform1x2<T, TResult>;
        (iteratee: _.MemoVoidArrayIterator<T, TResult[]>): TResult[];
    }
    interface Transform2x1<T, TResult> {
        (): Transform2x1<T, TResult>;
        (object: T[]): Transform2x2<T, TResult>;
        (object: T[], iteratee: _.MemoVoidArrayIterator<T, _.Dictionary<TResult>>): _.Dictionary<TResult>;
        (object: _.Dictionary<T>): Transform3x2<T, TResult>;
        (object: _.Dictionary<T>, iteratee: _.MemoVoidDictionaryIterator<T, _.Dictionary<TResult>>): _.Dictionary<TResult>;
    }
    interface Transform2x2<T, TResult> {
        (): Transform2x2<T, TResult>;
        (iteratee: _.MemoVoidArrayIterator<T, _.Dictionary<TResult>>): _.Dictionary<TResult>;
    }
    interface Transform3x2<T, TResult> {
        (): Transform3x2<T, TResult>;
        (iteratee: _.MemoVoidDictionaryIterator<T, _.Dictionary<TResult>>): _.Dictionary<TResult>;
    }
    interface Transform4x2<T, TResult> {
        (): Transform4x2<T, TResult>;
        (iteratee: _.MemoVoidDictionaryIterator<T, TResult[]>): TResult[];
    }
}

declare const transform: Lodash.Transform;
export = transform;
