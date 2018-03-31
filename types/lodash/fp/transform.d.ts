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
    <TResult>(p1: _.__, accumulator: ReadonlyArray<TResult>): Transform1x2<TResult>;
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
    <T, TResult>(iteratee: _.MemoVoidIteratorCapped<T, TResult[]>, accumulator: ReadonlyArray<TResult>): Transform1x3<T, TResult>;
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
    <T>(p1: _.__, p2: _.__, object: ReadonlyArray<T>): Transform1x4<T>;
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
    <T, TResult>(iteratee: _.MemoVoidIteratorCapped<T, TResult[]>, p2: _.__, object: ReadonlyArray<T>): Transform1x5<TResult>;
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
    <T, TResult>(p1: _.__, accumulator: ReadonlyArray<TResult>, object: ReadonlyArray<T>): Transform1x6<T, TResult>;
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
    <TResult>(p1: _.__, accumulator: _.Dictionary<TResult>): Transform2x2<TResult>;
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
    <T, TResult>(iteratee: _.MemoVoidIteratorCapped<T, _.Dictionary<TResult>>, accumulator: _.Dictionary<TResult>): Transform2x3<T, TResult>;
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
    <T, TResult>(iteratee: _.MemoVoidIteratorCapped<T, _.Dictionary<TResult>>, p2: _.__, object: ReadonlyArray<T>): Transform2x5<TResult>;
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
    <T, TResult>(p1: _.__, accumulator: _.Dictionary<TResult>, object: ReadonlyArray<T>): Transform2x6<T, TResult>;
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
    <T>(p1: _.__, p2: _.__, object: _.Dictionary<T>): Transform3x4<T>;
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
    <T, TResult>(iteratee: _.MemoVoidIteratorCapped<T, _.Dictionary<TResult>>, p2: _.__, object: _.Dictionary<T>): Transform3x5<TResult>;
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
    <T, TResult>(p1: _.__, accumulator: _.Dictionary<TResult>, object: _.Dictionary<T>): Transform3x6<T, TResult>;
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
    <T, TResult>(iteratee: _.MemoVoidIteratorCapped<T, TResult[]>, p2: _.__, object: _.Dictionary<T>): Transform4x5<TResult>;
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
    <T, TResult>(p1: _.__, accumulator: ReadonlyArray<TResult>, object: _.Dictionary<T>): Transform4x6<T, TResult>;
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
    (accumulator: ReadonlyArray<TResult>): Transform1x3<T, TResult>;
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
    (p1: _.__, object: ReadonlyArray<T>): Transform1x5<TResult>;
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
    (p1: _.__, object: _.Dictionary<T>): Transform4x5<TResult>;
}
interface Transform1x2<TResult> {
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
    (): Transform1x2<TResult>;
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
    <T>(iteratee: _.MemoVoidIteratorCapped<T, TResult[]>): Transform1x3<T, TResult>;
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
    <T>(p1: _.__, object: ReadonlyArray<T>): Transform1x6<T, TResult>;
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
    <T>(iteratee: _.MemoVoidIteratorCapped<T, TResult[]>, object: ReadonlyArray<T> | _.Dictionary<T>): TResult[];
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
    <T>(p1: _.__, object: _.Dictionary<T>): Transform4x6<T, TResult>;
}
interface Transform1x3<T, TResult> {
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
    (): Transform1x3<T, TResult>;
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
interface Transform1x4<T> {
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
    (): Transform1x4<T>;
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
    <TResult>(iteratee: _.MemoVoidIteratorCapped<T, TResult[]>): Transform1x5<TResult>;
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
    <TResult>(p1: _.__, accumulator: ReadonlyArray<TResult>): Transform1x6<T, TResult>;
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
    <TResult>(iteratee: _.MemoVoidIteratorCapped<T, TResult[]>, accumulator: ReadonlyArray<TResult>): TResult[];
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
    <TResult>(iteratee: _.MemoVoidIteratorCapped<T, _.Dictionary<TResult>>): Transform2x5<TResult>;
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
    <TResult>(p1: _.__, accumulator: _.Dictionary<TResult>): Transform2x6<T, TResult>;
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
    <TResult>(iteratee: _.MemoVoidIteratorCapped<T, _.Dictionary<TResult>>, accumulator: _.Dictionary<TResult>): _.Dictionary<TResult>;
}
interface Transform1x5<TResult> {
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
    (): Transform1x5<TResult>;
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
    <T>(accumulator: ReadonlyArray<TResult>): TResult[];
}
interface Transform1x6<T, TResult> {
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
    (): Transform1x6<T, TResult>;
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
    (iteratee: _.MemoVoidIteratorCapped<T, TResult[]>): TResult[];
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
    (accumulator: _.Dictionary<TResult>): Transform2x3<T, TResult>;
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
    (p1: _.__, object: ReadonlyArray<T>): Transform2x5<TResult>;
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
    (p1: _.__, object: _.Dictionary<T>): Transform3x5<TResult>;
}
interface Transform2x2<TResult> {
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
    (): Transform2x2<TResult>;
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
    <T>(iteratee: _.MemoVoidIteratorCapped<T, _.Dictionary<TResult>>): Transform2x3<T, TResult>;
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
    <T>(p1: _.__, object: ReadonlyArray<T>): Transform2x6<T, TResult>;
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
    <T>(iteratee: _.MemoVoidIteratorCapped<T, _.Dictionary<TResult>>, object: ReadonlyArray<T> | _.Dictionary<T>): _.Dictionary<TResult>;
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
    <T>(p1: _.__, object: _.Dictionary<T>): Transform3x6<T, TResult>;
}
interface Transform2x3<T, TResult> {
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
    (): Transform2x3<T, TResult>;
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
interface Transform2x5<TResult> {
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
    (): Transform2x5<TResult>;
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
    <T>(accumulator: _.Dictionary<TResult>): _.Dictionary<TResult>;
}
interface Transform2x6<T, TResult> {
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
    (): Transform2x6<T, TResult>;
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
    (iteratee: _.MemoVoidIteratorCapped<T, _.Dictionary<TResult>>): _.Dictionary<TResult>;
}
interface Transform3x4<T> {
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
    (): Transform3x4<T>;
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
    <TResult>(iteratee: _.MemoVoidIteratorCapped<T, _.Dictionary<TResult>>): Transform3x5<TResult>;
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
    <TResult>(p1: _.__, accumulator: _.Dictionary<TResult>): Transform3x6<T, TResult>;
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
    <TResult>(iteratee: _.MemoVoidIteratorCapped<T, _.Dictionary<TResult>>, accumulator: _.Dictionary<TResult>): _.Dictionary<TResult>;
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
    <TResult>(iteratee: _.MemoVoidIteratorCapped<T, TResult[]>): Transform4x5<TResult>;
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
    <TResult>(p1: _.__, accumulator: ReadonlyArray<TResult>): Transform4x6<T, TResult>;
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
    <TResult>(iteratee: _.MemoVoidIteratorCapped<T, TResult[]>, accumulator: ReadonlyArray<TResult>): TResult[];
}
interface Transform3x5<TResult> {
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
    (): Transform3x5<TResult>;
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
    <T>(accumulator: _.Dictionary<TResult>): _.Dictionary<TResult>;
}
interface Transform3x6<T, TResult> {
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
    (): Transform3x6<T, TResult>;
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
    (iteratee: _.MemoVoidIteratorCapped<T, _.Dictionary<TResult>>): _.Dictionary<TResult>;
}
interface Transform4x5<TResult> {
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
    (): Transform4x5<TResult>;
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
    <T>(accumulator: ReadonlyArray<TResult>): TResult[];
}
interface Transform4x6<T, TResult> {
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
    (): Transform4x6<T, TResult>;
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
    (iteratee: _.MemoVoidIteratorCapped<T, TResult[]>): TResult[];
}

declare const transform: Transform;
export = transform;
