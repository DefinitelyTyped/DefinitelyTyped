// Type definitions for Mongoose-Promise 4.5.4
// Project: http://mongoosejs.com/
// Definitions by: simonxca <https://github.com/simonxca>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.2

/// <reference types="mongoose" />
/// <reference types="mpromise" />

/*
 * http://mongoosejs.com/docs/api.html#promise-js
 *
 * mongoose.d.ts uses global.Promise by default. This is the MongooseJS
 * mpromise implementation (which are deprecated). If you still want to
 * use it, install these definitions in your project.
 */
import mpromise = require('mpromise');
declare module 'mongoose' {

  type Promise<T> = MongoosePromise<T>;

  /*
   * mpromise definitions.
   * Callback signatures are from the mPromise type definitions.
   */
  class MongoosePromise<T> extends mpromise<T, any> {
    /**
     * Promise constructor.
     * Promises are returned from executed queries.
     * @param fn a function which will be called when the promise
     *   is resolved that accepts fn(err, ...){} as signature
     * @event err Emits when the promise is rejected
     * @event complete Emits when the promise is fulfilled
     * @deprecated Mongoose 5.0 will use native promises by default (or bluebird, if native
     *   promises are not present) but still support plugging in your own ES6-compatible
     *   promises library. Mongoose 5.0 will not support mpromise.
     */
    constructor(fn?: (err: any, ...args: T[]) => void);

    /**
   * Adds a single function as a listener to both err and complete.
   * It will be executed with traditional node.js argument position when the promise is resolved.
   * @deprecated Use onResolve instead.
   */
    addBack(listener: (err: any, ...args: T[]) => void): this;

    /**
     * Adds a listener to the complete (success) event.
     * @deprecated Adds a listener to the complete (success) event.
     */
    addCallback(listener: (...args: T[]) => void): this;

    /**
     * Adds a listener to the err (rejected) event.
     * @deprecated Use onReject instead.
     */
    addErrback(listener: (err: any) => void): this;

    /** ES6-style .catch() shorthand */
    catch<TRes>(onReject?: (err: any) => void | TRes | PromiseLike<TRes>): MongoosePromise<TRes>;

    /**
     * Signifies that this promise was the last in a chain of then()s: if a handler passed
     * to the call to then which produced this promise throws, the exception will go uncaught.
     */
    end(): void;

    /**
     * Rejects this promise with err.
     * If the promise has already been fulfilled or rejected, not action is taken.
     * Differs from #reject by first casting err to an Error if it is not instanceof Error.
     */
    error(err: any): this;

    /**
     * Adds listener to the event.
     * If event is either the success or failure event and the event has already been emitted,
     * thelistener is called immediately and passed the results of the original emitted event.
     */
    on(event: string, listener: Function): this;

    /**
     * Rejects this promise with reason.
     * If the promise has already been fulfilled or rejected, not action is taken.
     */
    reject(reason: any): this;

    /**
     * Resolves this promise to a rejected state if err is passed or a fulfilled state if no err is passed.
     * If the promise has already been fulfilled or rejected, not action is taken.
     * err will be cast to an Error if not already instanceof Error.
     * NOTE: overrides mpromise#resolve to provide error casting.
     * @param err error or null
     * @param val value to fulfill the promise with
     */
    resolve(err?: any, ...args: T[]): this;

    /**
     * Creates a new promise and returns it. If onFulfill or onReject are passed, they are added as
     * SUCCESS/ERROR callbacks to this promise after the nextTick.
     * Conforms to promises/A+ specification.
     */
    then<TRes>(onFulfill: (...values: T[]) => TRes | PromiseLike<TRes>,
      onReject?: (err: any) => TRes | PromiseLike<TRes>): MongoosePromise<TRes>;

    /**
     * Fulfills this promise with passed arguments. Alias of mpromise#fulfill.
     * @deprecated Use fulfill instead.
     */
    complete(...args: T[]): this;

    /** Fulfills this promise with passed arguments. */
    fulfill(...args: T[]): this;

    /** ES6-style promise constructor wrapper around mpromise. */
    static ES6<TRes>(resolver: (
      complete: (...args: TRes[]) => void | TRes | PromiseLike<TRes>,
      error: (e: any) => void | TRes | PromiseLike<TRes>
    ) => void): MongoosePromise<TRes>;
  }
}
