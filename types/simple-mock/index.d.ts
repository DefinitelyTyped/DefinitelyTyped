// Type definitions for simple-mock v0.8.0
// Project: https://github.com/jupiter/simple-mock
// Definitions by: Leon Yu <https://github.com/leonyu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare namespace Simple {
  type Fn<T> = {
    (...args: any[]): T
  }

  export interface Static {
    /**
     * Restores all current mocks.
     */
    restore(): void;

    /**
     * Use this if you need to restore only a single mock value or function on an object.
     */
    restore(obj: any, key: string): void;

    /**
     * Wraps fn in a spy and sets this on the obj, restorable with all mocks.
     */
    mock<T>(obj: any, key: string, fn: Fn<T>): Stub<T>;

    /**
     * Sets the value on this object. E.g. mock(config, 'title', 'test') is the same as config.title = 'test', but restorable with all mocks.
     */
    mock<T>(obj: any, key: string, mockValue: T): T;

    /**
     * If obj has already has this function, it is wrapped in a spy. The resulting spy can be turned into a stub by further configuration. Restores with all mocks.
     */
    mock(obj: any, key: string): Stub<any>;
    mock<T>(obj: any, key: string): Stub<T>;

    /**
     * Wraps fn in a spy.
     */
    spy<T>(fn: Fn<T>): Spy<T>;
    /**
     * Wraps fn in a spy.
     */
    mock<T>(fn: Fn<T>): Spy<T>;

    /**
     * Returns a stub function that is also a spy.
     */
    stub(): Stub<any>;
    stub<T>(): Stub<T>;

    /**
     * Returns a stub function that is also a spy.
     */
    mock(): Stub<any>;
    mock<T>(): Stub<T>;

    Promise?: PromiseConstructorLike;
  }

  interface Calls<T> {
    /**
     * an array of arguments received on the call
     */
    args: any[];
    /**
     * first argument
     */
    arg: any;
    /**
     * the context (this) of the call
     */
    context: any;
    /**
     * the value returned by the wrapped function
     */
    returned: T;
    /**
     * the error thrown by the wrapped function
     */
    threw: Error;
    /**
     * autoincrementing number, can be compared to evaluate call order
     */
    k: number;
  }

  export interface Spy<T>{
    (...args: any[]): T;

    called: boolean;
    /**
     * Number of times the function was called.
     */
    callCount: number;
    calls: Calls<T>[];
    firstCall: Calls<T>;
    /**
     * The last call object. (This is often also the first and only call.)
     */
    lastCall: Calls<T>;
    /**
     * Resets all counts and properties to the original state.
     */
    reset(): void;
  }

  export interface Action<T> {
    /**
     * arguments to call back with
     */
    cbArgs: ArrayLike<any>;
    returnValue: T;
    throwError: Error;
  }

  export interface Stub<T> extends Spy<T> {
    /**
     * Configures this stub to call this function, returning its return value.
     * Subsequent calls of this on the same stub (chainable) will queue up different behaviours for each subsequent call of the stub.
     */
    callFn<R>(fn: Fn<R>): Stub<R>;

    /**
     * Configures this stub to call the original, unstubbed function, returning its return value.
     * Subsequent calls of this on the same stub (chainable) will queue up different behaviours for each subsequent call of the stub.
     */
    callOriginal(): Stub<T>;

    /**
     * Configures this stub to return with this value.
     * Subsequent calls of this on the same stub (chainable) will queue up different behaviours for each subsequent call of the stub.
     */
    returnWith<R>(val: R): Stub<R>;

    /**
     * Configures this stub to throw this error.
     * Subsequent calls of this on the same stub (chainable) will queue up different behaviours for each subsequent call of the stub.
     */
    throwWith(err: Error): Stub<T>;

    /**
     * Configures this stub to call back with the arguments passed. It will use either the last argument as callback, or the argument at cbArgumentIndex.
     * Subsequent calls of this on the same stub (chainable) will queue up different behaviours for each subsequent call of the stub.
     */
    callback(...args: any[]): Stub<T>;
    /**
     * Configures this stub to call back with the arguments passed. It will use either the last argument as callback, or the argument at cbArgumentIndex.
     * Subsequent calls of this on the same stub (chainable) will queue up different behaviours for each subsequent call of the stub.
     */
    callbackWith(...args: any[]): Stub<T>;

    /**
     * Configures this stub to call back with the arguments passed. It will use either the last argument as callback, or the argument at cbArgumentIndex.
     * Subsequent calls of this on the same stub (chainable) will queue up different behaviours for each subsequent call of the stub.
     */
    callbackAtIndex(cbArgumentIndex: number, ...args: any[]): Stub<T>;
    /**
     * Configures this stub to call back with the arguments passed. It will use either the last argument as callback, or the argument at cbArgumentIndex.
     * Subsequent calls of this on the same stub (chainable) will queue up different behaviours for each subsequent call of the stub.
     */
    callbackArgWith(cbArgumentIndex: number, ...args: any[]): Stub<T>;


    /**
     * Configures the last configured function or callback to be called in this context, i.e. this will be obj.
     */
    inThisContext(obj: any): Stub<T>;

    /**
     * Configures the stub to return a Promise (where available] resolving to this value. Same as stub.returnWith(Promise.resolve(val)).
     * You can use a custom Promise-conforming library, i.e. simple.Promise = require('bluebird') or simple.Promise = $q.
     */
    resolveWith<V>(val: V): Stub<PromiseLike<V>>;

    /**
     * Configures the stub to return a Promise (where available) rejecting with this error. Same as stub.returnWith(Promise.reject(val)).
     * You can use a custom Promise-conforming library, i.e. simple.Promise = require('bluebird') or simple.Promise = $q.
     */
    rejectWith<V>(val: V): Stub<PromiseLike<V>>;

    /**
     * Configures this stub to use the specified array of actions.
     */
    withActions(actions?: Action<T>[]): Stub<T>;

    /**
     * Configures the stub to enable looping.
     */
    withLoop(): Stub<T>;

    /**
     * Configures the stub to disable looping.
     */
    noLoop(): Stub<T>;

    /**
     * An array of behaviours.
     * Note: modifying this array directly is not supported, rather use stub.withActions(actions) if you need to add actions.
     */
    actions: Action<T>[];

    /**
     * setting whether the queue of actions for this stub should repeat.
     * @default true
     */
    loop: boolean;
  }
}

declare var Simple: Simple.Static;
export = Simple;

