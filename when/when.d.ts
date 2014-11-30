// Type definitions for When 2.4.0
// Project: https://github.com/cujojs/when
// Definitions by: Derek Cicerone <https://github.com/derekcicerone>
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
        // Make sure you test any usage of these overloads, exceptionType must
        // be a constructor with prototype set to an instance of Error.
        catch<U>(exceptionType: any, onRejected?: (reason: any) => Promise<U>): Promise<U>;
        catch<U>(exceptionType: any, onRejected?: (reason: any) => U): Promise<U>;

        catch<U>(filter: (reason: any) => boolean, onRejected?: (reason: any) => Promise<U>): Promise<U>;
        catch<U>(filter: (reason: any) => boolean, onRejected?: (reason: any) => U): Promise<U>;

        catch<U>(onRejected?: (reason: any) => Promise<U>): Promise<U>;
        catch<U>(onRejected?: (reason: any) => U): Promise<U>;

        ensure(onFulfilledOrRejected: Function): Promise<T>;

        inspect(): Snapshot<T>;

        otherwise<U>(onRejected?: (reason: any) => Promise<U>): Promise<U>;
        otherwise<U>(onRejected?: (reason: any) => U): Promise<U>;

        then<U>(onFulfilled: (value: T) => Promise<U>, onRejected?: (reason: any) => Promise<U>, onProgress?: (update: any) => void): Promise<U>;
        then<U>(onFulfilled: (value: T) => Promise<U>, onRejected?: (reason: any) => U, onProgress?: (update: any) => void): Promise<U>;
        then<U>(onFulfilled: (value: T) => U, onRejected?: (reason: any) => Promise<U>, onProgress?: (update: any) => void): Promise<U>;
        then<U>(onFulfilled: (value: T) => U, onRejected?: (reason: any) => U, onProgress?: (update: any) => void): Promise<U>;
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
