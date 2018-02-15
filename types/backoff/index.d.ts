// Type definitions for backoff 2.5
// Project: https://github.com/MathieuTurcotte/node-backoff#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4
/// <reference types="node" />
import { EventEmitter } from 'events';

/**
 * Constructs a Fibonacci backoff (10, 10, 20, 30, 50, etc.).
 *
 * @param options.randomisationFactor: defaults to 0, must be between 0 and 1
 * @param options.initialDelay: defaults to 100 ms
 * @param options.maxDelay: defaults to 10000 ms
 *
 * With these values, the backoff delay will increase from 100 ms to 10000 ms. The
 * randomisation factor controls the range of randomness and must be between 0
 * and 1. By default, no randomisation is applied on the backoff delay.
 */
export function fibonacci(options?: Options): Backoff;

/**
 * Constructs an exponential backoff (10, 20, 40, 80, etc.).
 *
 * @param options.randomisationFactor: defaults to 0, must be between 0 and 1
 * @param options.initialDelay: defaults to 100 ms
 * @param options.maxDelay: defaults to 10000 ms
 * @param options.factor: defaults to 2, must be greater than 1
 *
 * With these values, the backoff delay will increase from 100 ms to 10000 ms. The
 * randomisation factor controls the range of randomness and must be between 0
 * and 1. By default, no randomisation is applied on the backoff delay.
 */
export function exponential(options?: ExponentialOptions): Backoff;

export interface Options {
    randomisationFactor?: number;
    initialDelay?: number;
    maxDelay?: number;
}

export interface ExponentialOptions extends Options {
    factor?: number;
}

/**
 * Constructs a `FunctionCall` instance for the given function. The wrapped
 * function will get retried until it succeds or reaches the maximum number
 * of backoffs. In both cases, the callback function will be invoked with the
 * last result returned by the wrapped function.
 *
 * It is the caller's responsability to initiate the call by invoking the
 * `start` method on the returned `FunctionCall` instance.
 *
 * @param wrappedFunction: function to call in a backoff handler, i.e. the wrapped function
 * @param args: function's arguments
 * @param callback: function's callback accepting an error as its first argument
 *
 */
export function call<R1, R2, R3, E>(wrappedFunction: (cb: (err: E, r1: R1, r2: R2, r3: R3) => void) => void,
                                    callback: (error: E, r1: R1, r2: R2, r3: R3) => void): TypedFunctionCall<undefined[], E, R1, R2, R3>;
export function call<R1, R2, E>(wrappedFunction: (cb: (err: E, r1: R1, r2: R2) => void) => void,
                                callback: (error: E, r1: R1, r2: R2) => void): TypedFunctionCall<undefined[], E, R1, R2>;
export function call<R1, E>(wrappedFunction: (cb: (err: E, r1: R1) => void) => void,
                            callback: (error: E, r1: R1) => void): TypedFunctionCall<undefined[], E, R1>;
export function call<E>(wrappedFunction: (cb: (err: E) => void) => void,
                        callback: (err: E) => void): TypedFunctionCall<undefined[], E>;
export function call<T1, R1, R2, R3, E>(wrappedFunction: (t1: T1, cb: (err: E, r1: R1, r2: R2, r3: R3) => void) => void,
                                        t1: T1,
                                        callback: (error: E, r1: R1, r2: R2, r3: R3) => void): TypedFunctionCall<[T1], E, R1, R2, R3>;
export function call<T1, R1, R2, E>(wrappedFunction: (t1: T1, cb: (err: E, r1: R1, r2: R2) => void) => void,
                                    t1: T1,
                                    callback: (error: E, r1: R1, r2: R2) => void): TypedFunctionCall<[T1], E, R1, R2>;
export function call<T1, R1, E>(wrappedFunction: (t1: T1, cb: (err: E, r1: R1) => void) => void,
                                t1: T1,
                                callback: (error: E, r1: R1) => void): TypedFunctionCall<[T1], E, R1>;
export function call<T1, E>(wrappedFunction: (t1: T1, cb: (err: E) => void) => void,
                            t1: T1,
                            callback: (err: E) => void): TypedFunctionCall<[T1], E>;
export function call<T1, T2, R1, R2, R3, E>(wrappedFunction: (t1: T1, t2: T2, cb: (err: E, r1: R1, r2: R2, r3: R3) => void) => void,
                                            t1: T1, t2: T2,
                                            callback: (error: E, r1: R1, r2: R2, r3: R3) => void): TypedFunctionCall<[T1, T2], E, R1, R2, R3>;
export function call<T1, T2, R1, R2, E>(wrappedFunction: (t1: T1, t2: T2, cb: (err: E, r1: R1, r2: R2) => void) => void,
                                        t1: T1, t2: T2,
                                        callback: (error: E, r1: R1, r2: R2) => void): TypedFunctionCall<[T1, T2], E, R1, R2>;
export function call<T1, T2, R1, E>(wrappedFunction: (t1: T1, t2: T2, cb: (err: E, r1: R1) => void) => void,
                                    t1: T1, t2: T2,
                                    callback: (error: E, r1: R1) => void): TypedFunctionCall<[T1, T2], E, R1>;
export function call<T1, T2, E>(wrappedFunction: (t1: T1, t2: T2, cb: (err: E) => void) => void,
                                t1: T1, t2: T2,
                                callback: (err: E) => void): TypedFunctionCall<[T1, T2], E>;
export function call<T1, T2, T3, R1, R2, R3, E>(wrappedFunction: (t1: T1, t2: T2, t3: T3, cb: (err: E, r1: R1, r2: R2, r3: R3) => void) => void,
                                                t1: T1, t2: T2, t3: T3,
                                                callback: (error: E, r1: R1, r2: R2, r3: R3) => void): TypedFunctionCall<[T1, T2, T3], E, R1, R2, R3>;
export function call<T1, T2, T3, R1, R2, E>(wrappedFunction: (t1: T1, t2: T2, t3: T3, cb: (err: E, r1: R1, r2: R2) => void) => void,
                                            t1: T1, t2: T2, t3: T3,
                                            callback: (error: E, r1: R1, r2: R2) => void): TypedFunctionCall<[T1, T2, T3], E, R1, R2>;
export function call<T1, T2, T3, R1, E>(wrappedFunction: (t1: T1, t2: T2, t3: T3, cb: (err: E, r1: R1) => void) => void,
                                        t1: T1, t2: T2, t3: T3,
                                        callback: (error: E, r1: R1) => void): TypedFunctionCall<[T1, T2, T3], E, R1>;
export function call<T1, T2, T3, E>(wrappedFunction: (t1: T1, t2: T2, t3: T3, cb: (err: E) => void) => void,
                                    t1: T1, t2: T2, t3: T3,
                                    callback: (err: E) => void): TypedFunctionCall<[T1, T2, T3], E>;
export function call(wrappedFunction: (...args: any[]) => void, ...args: any[]): FunctionCallAny;

export class Backoff extends EventEmitter {
    /**
     * Constructs a new backoff object from a specific backoff strategy. The backoff
     * strategy must implement the `BackoffStrategy`interface defined bellow.
     *
     * @param strategy: the backoff strategy to use
     */
    constructor(strategy: BackoffStrategy);

    /**
     * Sets a limit on the maximum number of backoffs that can be performed before
     * a fail event gets emitted and the backoff instance is reset. By default, there
     * is no limit on the number of backoffs that can be performed.
     *
     * @param numberOfBackoffs: maximum number of backoffs before the fail event gets
     * emitted, must be greater than 0
     */
    failAfter(numberOfBackoffs: number): void;

    /**
     * Starts a backoff operation. If provided, the error parameter will be emitted
     * as the last argument of the `backoff` and `fail` events to let the listeners
     * know why the backoff operation was attempted.
     *
     * An error will be thrown if a backoff operation is already in progress.
     *
     * In practice, this method should be called after a failed attempt to perform a
     * sensitive operation (connecting to a database, downloading a resource over the
     * network, etc.).
     */
    backoff(error?: any): void;

    /**
     * Resets the backoff delay to the initial backoff delay and stop any backoff
     * operation in progress. After reset, a backoff instance can and should be
     * reused.
     *
     * In practice, this method should be called after having successfully completed
     * the sensitive operation guarded by the backoff instance or if the client code
     * request to stop any reconnection attempt.
     */
    reset(): void;

    /**
     * Emitted when a backoff operation is started. Signals to the client how long
     * the next backoff delay will be.
     * @param number: number of backoffs since last reset, starting at 0
     * @param delay: backoff delay in milliseconds
     * @param err: optional error parameter passed to `backoff.backoff([err])`
     */
    addListener(event: 'backoff', listener: (number: number, delay: number, error?: any) => void): this;
    /**
     * Emitted when a backoff operation is done. Signals that the failing operation
     * should be retried.
     *
     * @param number: number of backoffs since last reset, starting at 0
     * @param delay: backoff delay in milliseconds
     */
    addListener(event: 'ready', listener: (number: number, delay: number) => void): this;
    /**
     * Emitted when the maximum number of backoffs is reached. This event will only
     * be emitted if the client has set a limit on the number of backoffs by calling
     * `backoff.failAfter(numberOfBackoffs)`. The backoff instance is automatically
     * reset after this event is emitted.
     *
     * @param err: optional error parameter passed to `backoff.backoff([err])`
     */
    addListener(event: 'fail', listener: (error?: any) => void): this;
    on(event: 'backoff', listener: (number: number, delay: number, error?: any) => void): this;
    on(event: 'ready', listener: (number: number, delay: number) => void): this;
    on(event: 'fail', listener: (error?: any) => void): this;
    once(event: 'backoff', listener: (number: number, delay: number, error?: any) => void): this;
    once(event: 'ready', listener: (number: number, delay: number) => void): this;
    once(event: 'fail', listener: (error?: any) => void): this;
    prependListener(event: 'backoff', listener: (number: number, delay: number, error?: any) => void): this;
    prependListener(event: 'ready', listener: (number: number, delay: number) => void): this;
    prependListener(event: 'fail', listener: (error?: any) => void): this;
    prependOnceListener(event: 'backoff', listener: (number: number, delay: number, error?: any) => void): this;
    prependOnceListener(event: 'ready', listener: (number: number, delay: number) => void): this;
    prependOnceListener(event: 'fail', listener: (error?: any) => void): this;
    removeListener(event: 'backoff', listener: (number: number, delay: number, error?: any) => void): this;
    removeListener(event: 'ready', listener: (number: number, delay: number) => void): this;
    removeListener(event: 'fail', listener: (error?: any) => void): this;
    removeAllListeners(event?: 'backoff' | 'ready' | 'fail'): this;
    listeners(event: 'backoff'): Array<(number: number, delay: number, error?: any) => void>;
    listeners(event: 'ready'): Array<(number: number, delay: number) => void>;
    listeners(event: 'fail'): Array<(error?: any) => void>;
    emit(event: 'backoff', number: number, delay: number, error?: any): boolean;
    emit(event: 'ready', number: number, delay: number): boolean;
    emit(event: 'fail', error?: any): boolean;
    eventNames(): Array<'backoff' | 'ready' | 'fail'>;
    listenerCount(type: 'backoff' | 'ready' | 'fail'): number;
}

export abstract class BackoffStrategy {
    /**
     * The options are the following.
     *
     * @param options.randomisationFactor: defaults to 0, must be between 0 and 1
     * @param options.initialDelay: defaults to 100 ms
     * @param options.maxDelay: defaults to 10000 ms
     */
    constructor(options?: Options);
    getMaxDelay(): number;
    getInitialDelay(): number;

    /**
     * Computes and returns the next backoff delay.
     */
    next(): number;

    /**
     * Resets the backoff delay to its initial value.
     */
    reset(): void;
    protected abstract next_(): number;
    protected abstract reset_(): void;
}

/**
 * Exponential (10, 20, 40, 80, etc.) backoff strategy implementation.
 */
export class ExponentialStrategy extends BackoffStrategy {
    /**
     * The options are the following.
     *
     * @param options.randomisationFactor: defaults to 0, must be between 0 and 1
     * @param options.initialDelay: defaults to 100 ms
     * @param options.maxDelay: defaults to 10000 ms
     * @param options.factor: defaults to 2, must be greater than 1
     */
    constructor(options?: ExponentialOptions);
    /**
     * Computes and returns the next backoff delay.
     */
    next(): number;
    /**
     * Resets the backoff delay to its initial value.
     */
    reset(): void;
    protected next_(): number;
    protected reset_(): number;
}

/**
 * Fibonacci (10, 10, 20, 30, 50, etc.) backoff strategy implementation.
 */
export class FibonacciStrategy extends BackoffStrategy {
    /**
     * The options are the following.
     *
     * @param options.randomisationFactor: defaults to 0, must be between 0 and 1
     * @param options.initialDelay: defaults to 100 ms
     * @param options.maxDelay: defaults to 10000 ms
     */
    constructor(options?: Options);
    next(): number;
    reset(): void;
    protected next_(): number;
    protected reset_(): number;
}

/**
 * This class manages the calling of an asynchronous function within a backoff
 * loop.
 *
 * This class should rarely be instantiated directly since the factory method
 * `backoff.call(fn, [args, ...], callback)` offers a more convenient and safer
 * way to create `FunctionCall` instances.
 */
export const FunctionCall: FunctionCallConstructor;

/**
 * Constructs a function handler for the given asynchronous function.
 *
 * @param fn: asynchronous function to call
 * @param args: an array containing fn's args
 * @param callback: fn's callback
 */
export interface FunctionCallConstructor {
    new <R1, R2, R3, E>(wrappedFunction: (cb: (err: E, r1: R1, r2: R2, r3: R3) => void) => void,
                        args: undefined[],
                        callback: (error: E, r1: R1, r2: R2, r3: R3) => void): TypedFunctionCall<undefined[], E, R1, R2, R3>;
    new <R1, R2, E>(wrappedFunction: (cb: (err: E, r1: R1, r2: R2) => void) => void,
                    args: undefined[],
                    callback: (error: E, r1: R1, r2: R2) => void): TypedFunctionCall<undefined[], E, R1, R2>;
    new <R1, E>(wrappedFunction: (cb: (err: E, r1: R1) => void) => void,
                args: undefined[],
                callback: (error: E, r1: R1) => void): TypedFunctionCall<undefined[], E, R1>;
    new <E>(wrappedFunction: (cb: (err: E) => void) => void,
            args: undefined[],
            callback: (err: E) => void): TypedFunctionCall<undefined[], E>;

    new <T1, R1, R2, R3, E>(wrappedFunction: (t1: T1, cb: (err: E, r1: R1, r2: R2, r3: R3) => void) => void,
                            args: [T1],
                            callback: (error: E, r1: R1, r2: R2, r3: R3) => void): TypedFunctionCall<[T1], E, R1, R2, R3>;
    new <T1, R1, R2, E>(wrappedFunction: (t1: T1, cb: (err: E, r1: R1, r2: R2) => void) => void,
                        args: [T1],
                        callback: (error: E, r1: R1, r2: R2) => void): TypedFunctionCall<[T1], E, R1, R2>;
    new <T1, R1, E>(wrappedFunction: (t1: T1, cb: (err: E, r1: R1) => void) => void,
                    args: [T1],
                    callback: (error: E, r1: R1) => void): TypedFunctionCall<[T1], E, R1>;
    new <T1, E>(wrappedFunction: (t1: T1, cb: (err: E) => void) => void,
                args: [T1],
                callback: (err: E) => void): TypedFunctionCall<[T1], E>;

    new <T1, T2, R1, R2, R3, E>(wrappedFunction: (t1: T1, t2: T2, cb: (err: E, r1: R1, r2: R2, r3: R3) => void) => void,
                                args: [T1, T2],
                                callback: (error: E, r1: R1, r2: R2, r3: R3) => void): TypedFunctionCall<[T1, T2], E, R1, R2, R3>;
    new <T1, T2, R1, R2, E>(wrappedFunction: (t1: T1, t2: T2, cb: (err: E, r1: R1, r2: R2) => void) => void,
                            args: [T1, T2],
                            callback: (error: E, r1: R1, r2: R2) => void): TypedFunctionCall<[T1, T2], E, R1, R2>;
    new <T1, T2, R1, E>(wrappedFunction: (t1: T1, t2: T2, cb: (err: E, r1: R1) => void) => void,
                        args: [T1, T2],
                        callback: (error: E, r1: R1) => void): TypedFunctionCall<[T1, T2], E, R1>;
    new <T1, T2, E>(wrappedFunction: (t1: T1, t2: T2, cb: (err: E) => void) => void,
                    args: [T1, T2],
                    callback: (err: E) => void): TypedFunctionCall<[T1, T2], E>;

    new <T1, T2, T3, R1, R2, R3, E>(wrappedFunction: (t1: T1, t2: T2, t3: T3, cb: (err: E, r1: R1, r2: R2, r3: R3) => void) => void,
                                    args: [T1, T2, T3],
                                    callback: (error: E, r1: R1, r2: R2, r3: R3) => void): TypedFunctionCall<[T1, T2, T3], E, R1, R2, R3>;
    new <T1, T2, T3, R1, R2, E>(wrappedFunction: (t1: T1, t2: T2, t3: T3, cb: (err: E, r1: R1, r2: R2) => void) => void,
                                args: [T1, T2, T3],
                                callback: (error: E, r1: R1, r2: R2) => void): TypedFunctionCall<[T1, T2, T3], E, R1, R2>;
    new <T1, T2, T3, R1, E>(wrappedFunction: (t1: T1, t2: T2, t3: T3, cb: (err: E, r1: R1) => void) => void,
                            args: [T1, T2, T3],
                            callback: (error: E, r1: R1) => void): TypedFunctionCall<[T1, T2, T3], E, R1>;
    new <T1, T2, T3, E>(wrappedFunction: (t1: T1, t2: T2, t3: T3, cb: (err: E) => void) => void,
                        args: [T1, T2, T3],
                        callback: (err: E) => void): TypedFunctionCall<[T1, T2, T3], E>;

    new (wrappedFunction: (...args: any[]) => void,
         args: any[],
         callback: (error: any, ...resArgs: any[]) => void): FunctionCallAny;
}

export type TypedFunctionCall<T, E, R1 = undefined, R2 = undefined, R3 = undefined> = FunctionCall<T> & FunctionCallArgs<E, R1, R2, R3>;
export type FunctionCallAny = FunctionCall<any[]> & FunctionCallArgsAny;

export interface FunctionCall<T> extends EventEmitter {
    /**
     * Returns whether the call is pending, i.e. hasn't been started.
     */
    isPending(): boolean;

    /**
     * Returns whether the call is in progress.
     */
    isRunning(): boolean;

    /**
     * Returns whether the call is completed.
     */
    isCompleted(): boolean;

    /**
     * Returns whether the call is aborted.
     */
    isAborted(): boolean;

    /**
     * Sets the backoff strategy to use. This method should be called before
     * `call.start()` otherwise an exception will be thrown.
     *
     * @param strategy: strategy instance to use, defaults to `FibonacciStrategy`.
     */
    setStrategy(strategy: BackoffStrategy): this;

    /**
     * Sets the maximum number of backoffs before the call is aborted. By default,
     * there is no limit on the number of backoffs that can be performed.
     *
     * This method should be called before `call.start()` otherwise an exception will
     * be thrown.
     *
     * @param maxNumberOfBackoffs: maximum number of backoffs before the call is aborted
     */
    failAfter(maxNumberOfBackoffs: number): this;

    /**
     * Sets the predicate which will be invoked to determine whether a given error
     * should be retried or not, e.g. a network error would be retriable while a type
     * error would stop the function call. By default, all errors are considered to be
     * retriable.
     *
     * This method should be called before `call.start()` otherwise an exception will
     * be thrown.
     *
     * @param predicate: a function which takes in as its argument the error returned
     * by the wrapped function and determines whether it is retriable.
     */
    retryIf(predicate: (error: any) => boolean): this;

    /**
     * Returns the number of times the wrapped function call was retried. For a
     * wrapped function that succeeded immediately, this would return 0. This
     * method can be called at any point in time during the call life cycle, i.e.
     * before, during and after the wrapped function invocation.
     */
    getNumRetries(): number;

    /**
     * Initiates the call the wrapped function. This method should only be called
     * once otherwise an exception will be thrown.
     */
    start(): void;

    /**
     * Aborts the call and causes the completion callback to be invoked with an abort
     * error if the call was pending or running; does nothing otherwise. This method
     * can safely be called multiple times.
     */
    abort(): void;

    /**
     * Emitted each time the wrapped function is called.
     * @param args: wrapped function's arguments
     */
    addListener(event: 'call', listener: (args: T) => void): this;

    /**
     * Emitted each time a backoff operation is started.
     *
     * @param number: backoff number, starts at 0
     * @param delay: backoff delay in milliseconds
     * @param err: the error that triggered the backoff operation
     */
    addListener(event: 'backoff', listener: (number: number, delay: number, error?: any) => void): this;

    /**
     * Emitted when a call is aborted.
     */
    addListener(event: 'abort', listener: () => void): this;
    on(event: 'call', listener: (args: T) => void): this;
    on(event: 'backoff', listener: (number: number, delay: number, error?: any) => void): this;
    on(event: 'abort', listener: () => void): this;
    once(event: 'call', listener: (args: T) => void): this;
    once(event: 'backoff', listener: (number: number, delay: number, error?: any) => void): this;
    once(event: 'abort', listener: () => void): this;
    prependListener(event: 'call', listener: (args: T) => void): this;
    prependListener(event: 'backoff', listener: (number: number, delay: number, error?: any) => void): this;
    prependListener(event: 'abort', listener: () => void): this;
    prependOnceListener(event: 'call', listener: (args: T) => void): this;
    prependOnceListener(event: 'backoff', listener: (number: number, delay: number, error?: any) => void): this;
    prependOnceListener(event: 'abort', listener: () => void): this;
    removeListener(event: 'call', listener: (args: T) => void): this;
    removeListener(event: 'backoff', listener: (number: number, delay: number, error?: any) => void): this;
    removeListener(event: 'abort', listener: () => void): this;
    removeAllListeners(event?: 'call' | 'callback' | 'backoff' | 'abort'): this;
    listeners(event: 'call'): Array<(args: T) => void>;
    listeners(event: 'backoff'): Array<(number: number, delay: number, error?: any) => void>;
    listeners(event: 'abort'): Array<() => void>;
    emit(event: 'call', args: T): boolean;
    emit(event: 'backoff', number: number, delay: number, error?: any): boolean;
    emit(event: 'abort'): boolean;
    eventNames(): Array<'call' | 'callback' | 'backoff' | 'abort'>;
    listenerCount(type: 'call' | 'callback' | 'backoff' | 'abort'): number;
}

// Waiting for https://github.com/Microsoft/TypeScript/pull/17884
export interface FunctionCallArgs<E, R1 = undefined, R2 = undefined, R3 = undefined> {
    /**
     * Returns an array containing the last arguments passed to the completion callback
     * of the wrapped function. For example, to get the error code returned by the last
     * call, one would do the following.
     *
     * ``` js
     * var results = call.getLastResult();
     * // The error code is the first parameter of the callback.
     * var error = results[0];
     * ```
     *
     * Note that if the call was aborted, it will contain the abort error and not the
     * last error returned by the wrapped function.
     */
    getLastResult(): [E, R1, R2, R3];
    /**
     * Emitted each time the wrapped function invokes its callback
     * @param results: wrapped function's return values
     */
    addListener(event: 'callback', listener: (results: [E, R1, R2, R3]) => void): this;
    on(event: 'callback', listener: (results: [E, R1, R2, R3]) => void): this;
    once(event: 'callback', listener: (results: [E, R1, R2, R3]) => void): this;
    prependListener(event: 'callback', listener: (results: [E, R1, R2, R3]) => void): this;
    prependOnceListener(event: 'callback', listener: (results: [E, R1, R2, R3]) => void): this;
    removeListener(event: 'callback', listener: (results: [E, R1, R2, R3]) => void): this;
    listeners(event: 'callback'): Array<(results: [E, R1, R2, R3]) => void>;
    emit(event: 'callback', results: [E, R1, R2, R3]): boolean;
}

export interface FunctionCallArgsAny {
    /**
     * Returns an array containing the last arguments passed to the completion callback
     * of the wrapped function. For example, to get the error code returned by the last
     * call, one would do the following.
     *
     * ``` js
     * var results = call.getLastResult();
     * // The error code is the first parameter of the callback.
     * var error = results[0];
     * ```
     *
     * Note that if the call was aborted, it will contain the abort error and not the
     * last error returned by the wrapped function.
     */
    getLastResult(): any[];
    /**
     * Emitted each time the wrapped function invokes its callback
     * @param results: wrapped function's return values
     */
    addListener(event: 'callback', listener: (results: any[]) => void): this;
    on(event: 'callback', listener: (results: any[]) => void): this;
    once(event: 'callback', listener: (results: any[]) => void): this;
    prependListener(event: 'callback', listener: (results: any[]) => void): this;
    prependOnceListener(event: 'callback', listener: (results: any[]) => void): this;
    removeListener(event: 'callback', listener: (results: any[]) => void): this;
    listeners(event: 'callback'): Array<(results: any[]) => void>;
    emit(event: 'callback', results: any[]): boolean;
}
