// Type definitions for When 2.4.0
// Project: https://github.com/cujojs/when
// Definitions by: Derek Cicerone <https://github.com/derekcicerone>, Wim Looman <https://github.com/Nemo157>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare function When<T>(value: When.Promise<T>): When.Promise<T>;
declare function When<T>(value: When.Thenable<T>): When.Promise<T>;
declare function When<T>(value: T): When.Promise<T>;

declare function When<T, U>(value: When.Promise<T>, transform: (val: T) => U): When.Promise<U>;
declare function When<T, U>(value: When.Thenable<T>, transform: (val: T) => U): When.Promise<U>;
declare function When<T, U>(value: T, transform: (val: T) => U): When.Promise<U>;

declare module When {
    function attempt<T>(f: () => T): Promise<T>;

    function attempt<T, A>(f: (a: A) => T, a: Promise<A>): Promise<T>;
    function attempt<T, A>(f: (a: A) => T, a: A): Promise<T>;

    function attempt<T, A, B>(f: (a: A, b: B) => T, a: Promise<A>, b: Promise<B>): Promise<T>;
    function attempt<T, A, B>(f: (a: A, b: B) => T, a: Promise<A>, b: B): Promise<T>;
    function attempt<T, A, B>(f: (a: A, b: B) => T, a: A, b: Promise<B>): Promise<T>;
    function attempt<T, A, B>(f: (a: A, b: B) => T, a: A, b: B): Promise<T>;

    function attempt<T, A, B, C>(f: (a: A, b: B, c: C) => T, a: Promise<A>, b: Promise<B>, c: Promise<C>): Promise<T>;
    function attempt<T, A, B, C>(f: (a: A, b: B, c: C) => T, a: Promise<A>, b: Promise<B>, c: C): Promise<T>;
    function attempt<T, A, B, C>(f: (a: A, b: B, c: C) => T, a: Promise<A>, b: B, c: Promise<C>): Promise<T>;
    function attempt<T, A, B, C>(f: (a: A, b: B, c: C) => T, a: Promise<A>, b: B, c: C): Promise<T>;
    function attempt<T, A, B, C>(f: (a: A, b: B, c: C) => T, a: A, b: Promise<B>, c: Promise<C>): Promise<T>;
    function attempt<T, A, B, C>(f: (a: A, b: B, c: C) => T, a: A, b: Promise<B>, c: C): Promise<T>;
    function attempt<T, A, B, C>(f: (a: A, b: B, c: C) => T, a: A, b: B, c: Promise<C>): Promise<T>;
    function attempt<T, A, B, C>(f: (a: A, b: B, c: C) => T, a: A, b: B, c: C): Promise<T>;

    function lift<T>(f: () => T): () => Promise<T>;
    function lift<T, A>(f: (a: A) => T): (a: Promise<A>) => Promise<T>;
    function lift<T, A, B>(f: (a: A, b: B) => T): (a: Promise<A>, b: Promise<B>) => Promise<T>;
    function lift<T, A, B, C>(f: (a: A, b: B, c: C) => T): (a: Promise<A>, b: Promise<B>, c: Promise<C>) => Promise<T>;

    function promise<T>(resolver: (resolve: (value: T) => void, reject: (reason: any) => void) => void): Promise<T>;

    function reject<T>(reason: any): Promise<T>;

    /**
     * Return a promise that will resolve only once all the supplied promisesOrValues
     * have resolved. The resolution value of the returned promise will be an array
     * containing the resolution values of each of the promisesOrValues.
     * @memberOf when
     *
     * @param promisesOrValues array of anything, may contain a mix
     *      of {@link Promise}s and values
     */
    function all<T>(promisesOrValues: any[]): Promise<T>;

    /**
     * Creates a {promise, resolver} pair, either or both of which
     * may be given out safely to consumers.
     * The resolver has resolve, reject, and progress.  The promise
     * has then plus extended promise API.
     */
    function defer<T>(): Deferred<T>;

    /**
     * Joins multiple promises into a single returned promise.
     * @return a promise that will fulfill when *all* the input promises
     * have fulfilled, or will reject when *any one* of the input promises rejects.
     */
    function join<T>(...promises: Promise<T>[]): Promise<T[]>;
    /**
     * Joins multiple promises into a single returned promise.
     * @return a promise that will fulfill when *all* the input promises
     * have fulfilled, or will reject when *any one* of the input promises rejects.
     */
    function join<T>(...promises: any[]): Promise<T[]>;

    /**
     * Returns a resolved promise. The returned promise will be
     *  - fulfilled with promiseOrValue if it is a value, or
     *  - if promiseOrValue is a promise
     *    - fulfilled with promiseOrValue's value after it is fulfilled
     *    - rejected with promiseOrValue's reason after it is rejected
     */
    function resolve<T>(promise: Promise<T>): Promise<T>;
    function resolve<T>(foreign: Thenable<T>): Promise<T>;
    function resolve<T>(value?: T): Promise<T>;

    interface Deferred<T> {
        notify(update: any): void;
        promise: Promise<T>;
        reject(reason: any): void;
        resolve(value?: T): void;
        resolve(value?: Promise<T>): void;
    }

    interface Promise<T> {
        catch<U>(onRejected?: (reason: any) => Promise<U>): Promise<U>;
        catch<U>(onRejected?: (reason: any) => U): Promise<U>;

        catch<U>(filter: (reason: any) => boolean, onRejected?: (reason: any) => Promise<U>): Promise<U>;
        catch<U>(filter: (reason: any) => boolean, onRejected?: (reason: any) => U): Promise<U>;

        // Make sure you test any usage of these overloads, exceptionType must
        // be a constructor with prototype set to an instance of Error.
        catch<U>(exceptionType: any, onRejected?: (reason: any) => Promise<U>): Promise<U>;
        catch<U>(exceptionType: any, onRejected?: (reason: any) => U): Promise<U>;

        finally(onFulfilledOrRejected: Function): Promise<T>;

        ensure(onFulfilledOrRejected: Function): Promise<T>;

        inspect(): Snapshot<T>;

        yield<U>(value: Promise<U>): Promise<U>;
        yield<U>(value: U): Promise<U>;

        else(value: T): Promise<T>;
        orElse(value: T): Promise<T>;

        tap(onFulfilledSideEffect: (value: T) => void): Promise<T>;

        delay(milliseconds: number): Promise<T>;

        timeout(milliseconds: number, reason?: any): Promise<T>;

        with(thisArg: any): Promise<T>;
        withThis(thisArg: any): Promise<T>;

        otherwise<U>(onRejected?: (reason: any) => Promise<U>): Promise<U>;
        otherwise<U>(onRejected?: (reason: any) => U): Promise<U>;

        otherwise<U>(predicate: (reason: any) => boolean, onRejected?: (reason: any) => Promise<U>): Promise<U>;
        otherwise<U>(predicate: (reason: any) => boolean, onRejected?: (reason: any) => U): Promise<U>;

        // Make sure you test any usage of these overloads, exceptionType must
        // be a constructor with prototype set to an instance of Error.
        otherwise<U>(exceptionType: any, onRejected?: (reason: any) => Promise<U>): Promise<U>;
        otherwise<U>(exceptionType: any, onRejected?: (reason: any) => U): Promise<U>;

        then<U>(onFulfilled: (value: T) => Promise<U>, onRejected?: (reason: any) => Promise<U>, onProgress?: (update: any) => void): Promise<U>;
        then<U>(onFulfilled: (value: T) => Promise<U>, onRejected?: (reason: any) => U, onProgress?: (update: any) => void): Promise<U>;
        then<U>(onFulfilled: (value: T) => U, onRejected?: (reason: any) => Promise<U>, onProgress?: (update: any) => void): Promise<U>;
        then<U>(onFulfilled: (value: T) => U, onRejected?: (reason: any) => U, onProgress?: (update: any) => void): Promise<U>;

        done<U>(onFulfilled: (value: T) => void, onRejected?: (reason: any) => void): void;

        fold<U, V>(combine: (value1: T, value2: V) => Promise<U>, value2: V): Promise<U>;
        fold<U, V>(combine: (value1: T, value2: V) => Promise<U>, value2: Promise<V>): Promise<U>;

        fold<U, V>(combine: (value1: T, value2: V) => U, value2: V): Promise<U>;
        fold<U, V>(combine: (value1: T, value2: V) => U, value2: Promise<V>): Promise<U>;
    }

    interface Thenable<T> {
        then<U>(onFulfilled: (value: T) => U, onRejected?: (reason: any) => U): Thenable<U>;
    }

    interface Snapshot<T> {
        state: string;
        value?: T;
        reason?: any;
    }
}

declare module "when" {
    export = When;
}

declare module "when/node" {
    import when = require('when');

    function lift<TResult>(fn: (callback: (err: any, result: TResult) => void) => void): () => when.Promise<TResult>;
    function lift<TArg1, TResult>(fn: (arg1: TArg1, callback: (err: any, result: TResult) => void) => void): (arg1: when.Promise<TArg1>) => when.Promise<TResult>;
    function lift<TArg1, TArg2, TResult>(fn: (arg1: TArg1, arg2: TArg2, callback: (err: any, result: TResult) => void) => void): (arg1: when.Promise<TArg1>, arg2: when.Promise<TArg2>) => when.Promise<TResult>;
    function lift<TArg1, TArg2, TArg3, TResult>(fn: (arg1: TArg1, arg2: TArg2, arg3: TArg3, callback: (err: any, result: TResult) => void) => void): (arg1: when.Promise<TArg1>, arg2: when.Promise<TArg2>, arg3: when.Promise<TArg3>) => when.Promise<TResult>;


    function liftAll(srcApi: any, transform?: (destApi: any, liftedFunc: Function, name: string) => any, destApi?: any): any;


    function call<TResult>(fn: (callback: (err: any, result: TResult) => void) => void): when.Promise<TResult>;

    function call<TArg1, TResult>(fn: (arg1: TArg1, callback: (err: any, result: TResult) => void) => void, arg1: TArg1): when.Promise<TResult>;
    function call<TArg1, TResult>(fn: (arg1: TArg1, callback: (err: any, result: TResult) => void) => void, arg1: when.Promise<TArg1>): when.Promise<TResult>;

    function call<TArg1, TArg2, TResult>(fn: (arg1: TArg1, arg2: TArg2, callback: (err: any, result: TResult) => void) => void, arg1: TArg1, arg2: TArg2): when.Promise<TResult>;
    function call<TArg1, TArg2, TResult>(fn: (arg1: TArg1, arg2: TArg2, callback: (err: any, result: TResult) => void) => void, arg1: when.Promise<TArg1>, arg2: TArg2): when.Promise<TResult>;
    function call<TArg1, TArg2, TResult>(fn: (arg1: TArg1, arg2: TArg2, callback: (err: any, result: TResult) => void) => void, arg1: TArg1, arg2: when.Promise<TArg2>): when.Promise<TResult>;
    function call<TArg1, TArg2, TResult>(fn: (arg1: TArg1, arg2: TArg2, callback: (err: any, result: TResult) => void) => void, arg1: when.Promise<TArg1>, arg2: when.Promise<TArg2>): when.Promise<TResult>;

    function call<TArg1, TArg2, TArg3, TResult>(fn: (arg1: TArg1, arg2: TArg2, arg3: TArg3, callback: (err: any, result: TResult) => void) => void, arg1: TArg1, arg2: TArg2, arg3: TArg3): when.Promise<TResult>;
    function call<TArg1, TArg2, TArg3, TResult>(fn: (arg1: TArg1, arg2: TArg2, arg3: TArg3, callback: (err: any, result: TResult) => void) => void, arg1: TArg1, arg2: TArg2, arg3: when.Promise<TArg3>): when.Promise<TResult>;
    function call<TArg1, TArg2, TArg3, TResult>(fn: (arg1: TArg1, arg2: TArg2, arg3: TArg3, callback: (err: any, result: TResult) => void) => void, arg1: TArg1, arg2: when.Promise<TArg2>, arg3: TArg3): when.Promise<TResult>;
    function call<TArg1, TArg2, TArg3, TResult>(fn: (arg1: TArg1, arg2: TArg2, arg3: TArg3, callback: (err: any, result: TResult) => void) => void, arg1: TArg1, arg2: when.Promise<TArg2>, arg3: when.Promise<TArg3>): when.Promise<TResult>;
    function call<TArg1, TArg2, TArg3, TResult>(fn: (arg1: TArg1, arg2: TArg2, arg3: TArg3, callback: (err: any, result: TResult) => void) => void, arg1: when.Promise<TArg1>, arg2: TArg2, arg3: TArg3): when.Promise<TResult>;
    function call<TArg1, TArg2, TArg3, TResult>(fn: (arg1: TArg1, arg2: TArg2, arg3: TArg3, callback: (err: any, result: TResult) => void) => void, arg1: when.Promise<TArg1>, arg2: TArg2, arg3: when.Promise<TArg3>): when.Promise<TResult>;
    function call<TArg1, TArg2, TArg3, TResult>(fn: (arg1: TArg1, arg2: TArg2, arg3: TArg3, callback: (err: any, result: TResult) => void) => void, arg1: when.Promise<TArg1>, arg2: when.Promise<TArg2>, arg3: TArg3): when.Promise<TResult>;
    function call<TArg1, TArg2, TArg3, TResult>(fn: (arg1: TArg1, arg2: TArg2, arg3: TArg3, callback: (err: any, result: TResult) => void) => void, arg1: when.Promise<TArg1>, arg2: when.Promise<TArg2>, arg3: when.Promise<TArg3>): when.Promise<TResult>;


    function apply<TResult>(fn: (callback: (err: any, result: TResult) => void) => void, args: any[]): when.Promise<TResult>;
    function apply<TResult>(fn: (arg1: any, callback: (err: any, result: TResult) => void) => void, args: any[]): when.Promise<TResult>;
    function apply<TResult>(fn: (arg1: any, arg2: any, callback: (err: any, result: TResult) => void) => void, args: any[]): when.Promise<TResult>;
    function apply<TResult>(fn: (arg1: any, arg2: any, arg3: any, callback: (err: any, result: TResult) => void) => void, args: any[]): when.Promise<TResult>;


    function liftCallback<TArg>(callback: (err: any, arg: TArg) => void): (value: when.Promise<TArg>) => when.Promise<TArg>;


    function bindCallback<TArg>(arg: when.Promise<TArg>, callback: (err: any, arg: TArg) => void): when.Promise<TArg>;


    interface Resolver<T> {
        reject(reason: any): void;
        resolve(value?: T): void;
        resolve(value?: when.Promise<T>): void;
    }

    function createCallback<TArg>(resolver: Resolver<TArg>): (err: any, arg: TArg) => void;
}
