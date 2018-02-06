import _ = require("../index");

declare namespace Lodash {
    interface Transform {
        /**
         * An alternative to _.reduce; this method transforms object to a new accumulator object which is the result of
         * running each of its own enumerable properties through iteratee, with each invocation potentially mutating
         * the accumulator object. The iteratee is bound to thisArg and invoked with four arguments: (accumulator,
         * value, key, object). Iteratee functions may exit iteration early by explicitly returning false.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param accumulator The custom accumulator value.
         * @param thisArg The this binding of iteratee.
         * @return Returns the accumulated value.
         */
        (): Transform;
        /**
         * An alternative to _.reduce; this method transforms object to a new accumulator object which is the result of
         * running each of its own enumerable properties through iteratee, with each invocation potentially mutating
         * the accumulator object. The iteratee is bound to thisArg and invoked with four arguments: (accumulator,
         * value, key, object). Iteratee functions may exit iteration early by explicitly returning false.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param accumulator The custom accumulator value.
         * @param thisArg The this binding of iteratee.
         * @return Returns the accumulated value.
         */
        <T, TResult>(iteratee: _.MemoVoidArrayIterator<T, TResult[]>): Transform1x1<T, TResult>;
        /**
         * An alternative to _.reduce; this method transforms object to a new accumulator object which is the result of
         * running each of its own enumerable properties through iteratee, with each invocation potentially mutating
         * the accumulator object. The iteratee is bound to thisArg and invoked with four arguments: (accumulator,
         * value, key, object). Iteratee functions may exit iteration early by explicitly returning false.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param accumulator The custom accumulator value.
         * @param thisArg The this binding of iteratee.
         * @return Returns the accumulated value.
         */
        <T, TResult>(iteratee: _.MemoVoidArrayIterator<T, TResult[]>, accumulator: TResult[]): Transform1x2<T, TResult>;
        /**
         * An alternative to _.reduce; this method transforms object to a new accumulator object which is the result of
         * running each of its own enumerable properties through iteratee, with each invocation potentially mutating
         * the accumulator object. The iteratee is bound to thisArg and invoked with four arguments: (accumulator,
         * value, key, object). Iteratee functions may exit iteration early by explicitly returning false.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param accumulator The custom accumulator value.
         * @param thisArg The this binding of iteratee.
         * @return Returns the accumulated value.
         */
        <T, TResult>(iteratee: _.MemoVoidArrayIterator<T, TResult[]>, accumulator: TResult[], object: T[]): TResult[];
        /**
         * An alternative to _.reduce; this method transforms object to a new accumulator object which is the result of
         * running each of its own enumerable properties through iteratee, with each invocation potentially mutating
         * the accumulator object. The iteratee is bound to thisArg and invoked with four arguments: (accumulator,
         * value, key, object). Iteratee functions may exit iteration early by explicitly returning false.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param accumulator The custom accumulator value.
         * @param thisArg The this binding of iteratee.
         * @return Returns the accumulated value.
         */
        <T, TResult>(iteratee: _.MemoVoidArrayIterator<T, _.Dictionary<TResult>>): Transform2x1<T, TResult>;
        /**
         * An alternative to _.reduce; this method transforms object to a new accumulator object which is the result of
         * running each of its own enumerable properties through iteratee, with each invocation potentially mutating
         * the accumulator object. The iteratee is bound to thisArg and invoked with four arguments: (accumulator,
         * value, key, object). Iteratee functions may exit iteration early by explicitly returning false.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param accumulator The custom accumulator value.
         * @param thisArg The this binding of iteratee.
         * @return Returns the accumulated value.
         */
        <T, TResult>(iteratee: _.MemoVoidArrayIterator<T, _.Dictionary<TResult>>, accumulator: _.Dictionary<TResult>): Transform2x2<T, TResult>;
        /**
         * An alternative to _.reduce; this method transforms object to a new accumulator object which is the result of
         * running each of its own enumerable properties through iteratee, with each invocation potentially mutating
         * the accumulator object. The iteratee is bound to thisArg and invoked with four arguments: (accumulator,
         * value, key, object). Iteratee functions may exit iteration early by explicitly returning false.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param accumulator The custom accumulator value.
         * @param thisArg The this binding of iteratee.
         * @return Returns the accumulated value.
         */
        <T, TResult>(iteratee: _.MemoVoidArrayIterator<T, _.Dictionary<TResult>>, accumulator: _.Dictionary<TResult>, object: T[]): _.Dictionary<TResult>;
        /**
         * An alternative to _.reduce; this method transforms object to a new accumulator object which is the result of
         * running each of its own enumerable properties through iteratee, with each invocation potentially mutating
         * the accumulator object. The iteratee is bound to thisArg and invoked with four arguments: (accumulator,
         * value, key, object). Iteratee functions may exit iteration early by explicitly returning false.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param accumulator The custom accumulator value.
         * @param thisArg The this binding of iteratee.
         * @return Returns the accumulated value.
         */
        <T, TResult>(iteratee: _.MemoVoidDictionaryIterator<T, _.Dictionary<TResult>>): Transform3x1<T, TResult>;
        /**
         * An alternative to _.reduce; this method transforms object to a new accumulator object which is the result of
         * running each of its own enumerable properties through iteratee, with each invocation potentially mutating
         * the accumulator object. The iteratee is bound to thisArg and invoked with four arguments: (accumulator,
         * value, key, object). Iteratee functions may exit iteration early by explicitly returning false.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param accumulator The custom accumulator value.
         * @param thisArg The this binding of iteratee.
         * @return Returns the accumulated value.
         */
        <T, TResult>(iteratee: _.MemoVoidDictionaryIterator<T, _.Dictionary<TResult>>, accumulator: _.Dictionary<TResult>): Transform3x2<T, TResult>;
        /**
         * An alternative to _.reduce; this method transforms object to a new accumulator object which is the result of
         * running each of its own enumerable properties through iteratee, with each invocation potentially mutating
         * the accumulator object. The iteratee is bound to thisArg and invoked with four arguments: (accumulator,
         * value, key, object). Iteratee functions may exit iteration early by explicitly returning false.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param accumulator The custom accumulator value.
         * @param thisArg The this binding of iteratee.
         * @return Returns the accumulated value.
         */
        <T, TResult>(iteratee: _.MemoVoidDictionaryIterator<T, _.Dictionary<TResult>>, accumulator: _.Dictionary<TResult>, object: _.Dictionary<T>): _.Dictionary<TResult>;
        /**
         * An alternative to _.reduce; this method transforms object to a new accumulator object which is the result of
         * running each of its own enumerable properties through iteratee, with each invocation potentially mutating
         * the accumulator object. The iteratee is bound to thisArg and invoked with four arguments: (accumulator,
         * value, key, object). Iteratee functions may exit iteration early by explicitly returning false.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param accumulator The custom accumulator value.
         * @param thisArg The this binding of iteratee.
         * @return Returns the accumulated value.
         */
        <T, TResult>(iteratee: _.MemoVoidDictionaryIterator<T, TResult[]>): Transform4x1<T, TResult>;
        /**
         * An alternative to _.reduce; this method transforms object to a new accumulator object which is the result of
         * running each of its own enumerable properties through iteratee, with each invocation potentially mutating
         * the accumulator object. The iteratee is bound to thisArg and invoked with four arguments: (accumulator,
         * value, key, object). Iteratee functions may exit iteration early by explicitly returning false.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param accumulator The custom accumulator value.
         * @param thisArg The this binding of iteratee.
         * @return Returns the accumulated value.
         */
        <T, TResult>(iteratee: _.MemoVoidDictionaryIterator<T, TResult[]>, accumulator: TResult[]): Transform4x2<T, TResult>;
        /**
         * An alternative to _.reduce; this method transforms object to a new accumulator object which is the result of
         * running each of its own enumerable properties through iteratee, with each invocation potentially mutating
         * the accumulator object. The iteratee is bound to thisArg and invoked with four arguments: (accumulator,
         * value, key, object). Iteratee functions may exit iteration early by explicitly returning false.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param accumulator The custom accumulator value.
         * @param thisArg The this binding of iteratee.
         * @return Returns the accumulated value.
         */
        <T, TResult>(iteratee: _.MemoVoidDictionaryIterator<T, TResult[]>, accumulator: TResult[], object: _.Dictionary<T>): TResult[];
    }
    interface Transform1x1<T, TResult> {
        /**
         * An alternative to _.reduce; this method transforms object to a new accumulator object which is the result of
         * running each of its own enumerable properties through iteratee, with each invocation potentially mutating
         * the accumulator object. The iteratee is bound to thisArg and invoked with four arguments: (accumulator,
         * value, key, object). Iteratee functions may exit iteration early by explicitly returning false.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param accumulator The custom accumulator value.
         * @param thisArg The this binding of iteratee.
         * @return Returns the accumulated value.
         */
        (): Transform1x1<T, TResult>;
        /**
         * An alternative to _.reduce; this method transforms object to a new accumulator object which is the result of
         * running each of its own enumerable properties through iteratee, with each invocation potentially mutating
         * the accumulator object. The iteratee is bound to thisArg and invoked with four arguments: (accumulator,
         * value, key, object). Iteratee functions may exit iteration early by explicitly returning false.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param accumulator The custom accumulator value.
         * @param thisArg The this binding of iteratee.
         * @return Returns the accumulated value.
         */
        (accumulator: TResult[]): Transform1x2<T, TResult>;
        /**
         * An alternative to _.reduce; this method transforms object to a new accumulator object which is the result of
         * running each of its own enumerable properties through iteratee, with each invocation potentially mutating
         * the accumulator object. The iteratee is bound to thisArg and invoked with four arguments: (accumulator,
         * value, key, object). Iteratee functions may exit iteration early by explicitly returning false.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param accumulator The custom accumulator value.
         * @param thisArg The this binding of iteratee.
         * @return Returns the accumulated value.
         */
        (accumulator: TResult[], object: T[]): TResult[];
    }
    interface Transform1x2<T, TResult> {
        /**
         * An alternative to _.reduce; this method transforms object to a new accumulator object which is the result of
         * running each of its own enumerable properties through iteratee, with each invocation potentially mutating
         * the accumulator object. The iteratee is bound to thisArg and invoked with four arguments: (accumulator,
         * value, key, object). Iteratee functions may exit iteration early by explicitly returning false.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param accumulator The custom accumulator value.
         * @param thisArg The this binding of iteratee.
         * @return Returns the accumulated value.
         */
        (): Transform1x2<T, TResult>;
        /**
         * An alternative to _.reduce; this method transforms object to a new accumulator object which is the result of
         * running each of its own enumerable properties through iteratee, with each invocation potentially mutating
         * the accumulator object. The iteratee is bound to thisArg and invoked with four arguments: (accumulator,
         * value, key, object). Iteratee functions may exit iteration early by explicitly returning false.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param accumulator The custom accumulator value.
         * @param thisArg The this binding of iteratee.
         * @return Returns the accumulated value.
         */
        (object: T[]): TResult[];
    }
    interface Transform2x1<T, TResult> {
        /**
         * An alternative to _.reduce; this method transforms object to a new accumulator object which is the result of
         * running each of its own enumerable properties through iteratee, with each invocation potentially mutating
         * the accumulator object. The iteratee is bound to thisArg and invoked with four arguments: (accumulator,
         * value, key, object). Iteratee functions may exit iteration early by explicitly returning false.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param accumulator The custom accumulator value.
         * @param thisArg The this binding of iteratee.
         * @return Returns the accumulated value.
         */
        (): Transform2x1<T, TResult>;
        /**
         * An alternative to _.reduce; this method transforms object to a new accumulator object which is the result of
         * running each of its own enumerable properties through iteratee, with each invocation potentially mutating
         * the accumulator object. The iteratee is bound to thisArg and invoked with four arguments: (accumulator,
         * value, key, object). Iteratee functions may exit iteration early by explicitly returning false.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param accumulator The custom accumulator value.
         * @param thisArg The this binding of iteratee.
         * @return Returns the accumulated value.
         */
        (accumulator: _.Dictionary<TResult>): Transform2x2<T, TResult>;
        /**
         * An alternative to _.reduce; this method transforms object to a new accumulator object which is the result of
         * running each of its own enumerable properties through iteratee, with each invocation potentially mutating
         * the accumulator object. The iteratee is bound to thisArg and invoked with four arguments: (accumulator,
         * value, key, object). Iteratee functions may exit iteration early by explicitly returning false.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param accumulator The custom accumulator value.
         * @param thisArg The this binding of iteratee.
         * @return Returns the accumulated value.
         */
        (accumulator: _.Dictionary<TResult>, object: T[]): _.Dictionary<TResult>;
    }
    interface Transform2x2<T, TResult> {
        /**
         * An alternative to _.reduce; this method transforms object to a new accumulator object which is the result of
         * running each of its own enumerable properties through iteratee, with each invocation potentially mutating
         * the accumulator object. The iteratee is bound to thisArg and invoked with four arguments: (accumulator,
         * value, key, object). Iteratee functions may exit iteration early by explicitly returning false.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param accumulator The custom accumulator value.
         * @param thisArg The this binding of iteratee.
         * @return Returns the accumulated value.
         */
        (): Transform2x2<T, TResult>;
        /**
         * An alternative to _.reduce; this method transforms object to a new accumulator object which is the result of
         * running each of its own enumerable properties through iteratee, with each invocation potentially mutating
         * the accumulator object. The iteratee is bound to thisArg and invoked with four arguments: (accumulator,
         * value, key, object). Iteratee functions may exit iteration early by explicitly returning false.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param accumulator The custom accumulator value.
         * @param thisArg The this binding of iteratee.
         * @return Returns the accumulated value.
         */
        (object: T[]): _.Dictionary<TResult>;
    }
    interface Transform3x1<T, TResult> {
        /**
         * An alternative to _.reduce; this method transforms object to a new accumulator object which is the result of
         * running each of its own enumerable properties through iteratee, with each invocation potentially mutating
         * the accumulator object. The iteratee is bound to thisArg and invoked with four arguments: (accumulator,
         * value, key, object). Iteratee functions may exit iteration early by explicitly returning false.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param accumulator The custom accumulator value.
         * @param thisArg The this binding of iteratee.
         * @return Returns the accumulated value.
         */
        (): Transform3x1<T, TResult>;
        /**
         * An alternative to _.reduce; this method transforms object to a new accumulator object which is the result of
         * running each of its own enumerable properties through iteratee, with each invocation potentially mutating
         * the accumulator object. The iteratee is bound to thisArg and invoked with four arguments: (accumulator,
         * value, key, object). Iteratee functions may exit iteration early by explicitly returning false.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param accumulator The custom accumulator value.
         * @param thisArg The this binding of iteratee.
         * @return Returns the accumulated value.
         */
        (accumulator: _.Dictionary<TResult>): Transform3x2<T, TResult>;
        /**
         * An alternative to _.reduce; this method transforms object to a new accumulator object which is the result of
         * running each of its own enumerable properties through iteratee, with each invocation potentially mutating
         * the accumulator object. The iteratee is bound to thisArg and invoked with four arguments: (accumulator,
         * value, key, object). Iteratee functions may exit iteration early by explicitly returning false.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param accumulator The custom accumulator value.
         * @param thisArg The this binding of iteratee.
         * @return Returns the accumulated value.
         */
        (accumulator: _.Dictionary<TResult>, object: _.Dictionary<T>): _.Dictionary<TResult>;
    }
    interface Transform3x2<T, TResult> {
        /**
         * An alternative to _.reduce; this method transforms object to a new accumulator object which is the result of
         * running each of its own enumerable properties through iteratee, with each invocation potentially mutating
         * the accumulator object. The iteratee is bound to thisArg and invoked with four arguments: (accumulator,
         * value, key, object). Iteratee functions may exit iteration early by explicitly returning false.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param accumulator The custom accumulator value.
         * @param thisArg The this binding of iteratee.
         * @return Returns the accumulated value.
         */
        (): Transform3x2<T, TResult>;
        /**
         * An alternative to _.reduce; this method transforms object to a new accumulator object which is the result of
         * running each of its own enumerable properties through iteratee, with each invocation potentially mutating
         * the accumulator object. The iteratee is bound to thisArg and invoked with four arguments: (accumulator,
         * value, key, object). Iteratee functions may exit iteration early by explicitly returning false.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param accumulator The custom accumulator value.
         * @param thisArg The this binding of iteratee.
         * @return Returns the accumulated value.
         */
        (object: _.Dictionary<T>): _.Dictionary<TResult>;
    }
    interface Transform4x1<T, TResult> {
        /**
         * An alternative to _.reduce; this method transforms object to a new accumulator object which is the result of
         * running each of its own enumerable properties through iteratee, with each invocation potentially mutating
         * the accumulator object. The iteratee is bound to thisArg and invoked with four arguments: (accumulator,
         * value, key, object). Iteratee functions may exit iteration early by explicitly returning false.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param accumulator The custom accumulator value.
         * @param thisArg The this binding of iteratee.
         * @return Returns the accumulated value.
         */
        (): Transform4x1<T, TResult>;
        /**
         * An alternative to _.reduce; this method transforms object to a new accumulator object which is the result of
         * running each of its own enumerable properties through iteratee, with each invocation potentially mutating
         * the accumulator object. The iteratee is bound to thisArg and invoked with four arguments: (accumulator,
         * value, key, object). Iteratee functions may exit iteration early by explicitly returning false.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param accumulator The custom accumulator value.
         * @param thisArg The this binding of iteratee.
         * @return Returns the accumulated value.
         */
        (accumulator: TResult[]): Transform4x2<T, TResult>;
        /**
         * An alternative to _.reduce; this method transforms object to a new accumulator object which is the result of
         * running each of its own enumerable properties through iteratee, with each invocation potentially mutating
         * the accumulator object. The iteratee is bound to thisArg and invoked with four arguments: (accumulator,
         * value, key, object). Iteratee functions may exit iteration early by explicitly returning false.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param accumulator The custom accumulator value.
         * @param thisArg The this binding of iteratee.
         * @return Returns the accumulated value.
         */
        (accumulator: TResult[], object: _.Dictionary<T>): TResult[];
    }
    interface Transform4x2<T, TResult> {
        /**
         * An alternative to _.reduce; this method transforms object to a new accumulator object which is the result of
         * running each of its own enumerable properties through iteratee, with each invocation potentially mutating
         * the accumulator object. The iteratee is bound to thisArg and invoked with four arguments: (accumulator,
         * value, key, object). Iteratee functions may exit iteration early by explicitly returning false.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param accumulator The custom accumulator value.
         * @param thisArg The this binding of iteratee.
         * @return Returns the accumulated value.
         */
        (): Transform4x2<T, TResult>;
        /**
         * An alternative to _.reduce; this method transforms object to a new accumulator object which is the result of
         * running each of its own enumerable properties through iteratee, with each invocation potentially mutating
         * the accumulator object. The iteratee is bound to thisArg and invoked with four arguments: (accumulator,
         * value, key, object). Iteratee functions may exit iteration early by explicitly returning false.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param accumulator The custom accumulator value.
         * @param thisArg The this binding of iteratee.
         * @return Returns the accumulated value.
         */
        (object: _.Dictionary<T>): TResult[];
    }
}

declare const transform: Lodash.Transform;
export = transform;
