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
    <T, TResult>(iteratee: _.MemoVoidIteratorCapped<T, TResult[]>): Transform1x1<T, TResult>;
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
    <T, TResult>(iteratee: _.MemoVoidIteratorCapped<T, TResult[]>, accumulator: ReadonlyArray<TResult>): Transform1x2<T, TResult>;
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
    <T, TResult>(iteratee: _.MemoVoidIteratorCapped<T, TResult[]>, accumulator: ReadonlyArray<TResult>, object: ReadonlyArray<T> | _.Dictionary<T>): TResult[];
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
    <T, TResult>(iteratee: _.MemoVoidIteratorCapped<T, _.Dictionary<TResult>>): Transform2x1<T, TResult>;
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
    <T, TResult>(iteratee: _.MemoVoidIteratorCapped<T, _.Dictionary<TResult>>, accumulator: _.Dictionary<TResult>): Transform2x2<T, TResult>;
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
    <T, TResult>(iteratee: _.MemoVoidIteratorCapped<T, _.Dictionary<TResult>>, accumulator: _.Dictionary<TResult>, object: ReadonlyArray<T> | _.Dictionary<T>): _.Dictionary<TResult>;
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
    (accumulator: ReadonlyArray<TResult>, object: ReadonlyArray<T> | _.Dictionary<T>): TResult[];
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
    (object: ReadonlyArray<T> | _.Dictionary<T>): TResult[];
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
    (accumulator: _.Dictionary<TResult>, object: ReadonlyArray<T> | _.Dictionary<T>): _.Dictionary<TResult>;
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
    (object: ReadonlyArray<T> | _.Dictionary<T>): _.Dictionary<TResult>;
}

declare const transform: Transform;
export = transform;
