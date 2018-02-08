// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

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
    <T, TResult>(iteratee: _.MemoVoidArrayIterator<T, TResult[]>, accumulator: ReadonlyArray<TResult>): Transform1x2<T, TResult>;
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
    <T, TResult>(iteratee: _.MemoVoidArrayIterator<T, TResult[]>, accumulator: ReadonlyArray<TResult>, object: ReadonlyArray<T>): TResult[];
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
    <T, TResult>(iteratee: _.MemoVoidArrayIterator<T, _.Dictionary<TResult>>, accumulator: _.Dictionary<TResult>, object: ReadonlyArray<T>): _.Dictionary<TResult>;
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
    <T, TResult>(iteratee: _.MemoVoidIteratorCapped<T, _.Dictionary<TResult>>): Transform3x1<T, TResult>;
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
    <T, TResult>(iteratee: _.MemoVoidIteratorCapped<T, _.Dictionary<TResult>>, accumulator: _.Dictionary<TResult>): Transform3x2<T, TResult>;
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
    <T, TResult>(iteratee: _.MemoVoidIteratorCapped<T, _.Dictionary<TResult>>, accumulator: _.Dictionary<TResult>, object: _.Dictionary<T>): _.Dictionary<TResult>;
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
    <T, TResult>(iteratee: _.MemoVoidIteratorCapped<T, TResult[]>): Transform4x1<T, TResult>;
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
    <T, TResult>(iteratee: _.MemoVoidIteratorCapped<T, TResult[]>, accumulator: ReadonlyArray<TResult>): Transform4x2<T, TResult>;
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
    <T, TResult>(iteratee: _.MemoVoidIteratorCapped<T, TResult[]>, accumulator: ReadonlyArray<TResult>, object: _.Dictionary<T>): TResult[];
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
    (accumulator: ReadonlyArray<TResult>): Transform1x2<T, TResult>;
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
    (accumulator: ReadonlyArray<TResult>, object: ReadonlyArray<T>): TResult[];
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
    (object: ReadonlyArray<T>): TResult[];
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
    (accumulator: _.Dictionary<TResult>, object: ReadonlyArray<T>): _.Dictionary<TResult>;
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
    (object: ReadonlyArray<T>): _.Dictionary<TResult>;
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
    (accumulator: ReadonlyArray<TResult>): Transform4x2<T, TResult>;
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
    (accumulator: ReadonlyArray<TResult>, object: _.Dictionary<T>): TResult[];
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

declare const transform: Transform;
declare namespace transform {}
export = transform;
