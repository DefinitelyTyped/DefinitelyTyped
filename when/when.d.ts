// Type definitions for When 2.4.0
// Project: https://github.com/cujojs/when
// Definitions by: Derek Cicerone <https://github.com/derekcicerone>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module When {

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

        ensure(onFulfilledOrRejected: Function): Promise<T>;

        inspect(): Snapshot<T>;

        otherwise<U>(onRejected?: (reason: any) => Promise<U>): Promise<U>;
        otherwise<U>(onRejected?: (reason: any) => U): Promise<U>;

        then<U>(onFulfilled: (value: T) => Promise<U>, onRejected?: (reason: any) => Promise<U>, onProgress?: (update: any) => void): Promise<U>;
        then<U>(onFulfilled: (value: T) => Promise<U>, onRejected?: (reason: any) => U, onProgress?: (update: any) => void): Promise<U>;
        then<U>(onFulfilled: (value: T) => U, onRejected?: (reason: any) => Promise<U>, onProgress?: (update: any) => void): Promise<U>;
        then<U>(onFulfilled: (value: T) => U, onRejected?: (reason: any) => U, onProgress?: (update: any) => void): Promise<U>;
    }

    interface Snapshot<T> {
        state: string;
        value?: T;
        reason?: any;
    }
}
