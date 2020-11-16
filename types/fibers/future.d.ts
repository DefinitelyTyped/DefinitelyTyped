type FutureResolveFunction<T> = (err: Error, val: T) => void;
type FutureOrFutureArray = Future<any> | Array<Future<any>>;

// In the future we can use this to extend the type of FutureObject if typescript
// support for dynamic types improves
// https://stackoverflow.com/questions/44323441/changing-property-name-in-typescript-mapped-type
// type FutureObjectFunctions<O> = {[K in keyof O]: O[K] extends ((...args: infer P) => infer R) ?
//     (...args: P) => Future<R> : never};
//
// type FutureObjectProperties<O> = {[K in keyof O]: O[K] extends (...args: any[]) => any ? never: O[K]};

declare global {
    type FutureObject<T> = T & any;
    type FutureFunction<T> = (...args: any[]) => Future<T>;

    interface Function {
        /**
         * Returns a future-function which, when run, starts running the target
         * function and returns a future for the result.
         *
         * Example usage:
         * var funcy = function(arg) {
         *   return arg+1;
         * }.future();
         *
         * funcy(1).wait(); // returns 2
         */
        future<T = any>(detach?: boolean): FutureFunction<T>;
    }
}

interface FutureConstructor {
    new <T> (): Future<T>;
    /**
     * Wrap a node-style async function to return a future in place of using a callback.
     * A node-style async function is usually in the form (...args: any, cb: (err?: Error, ...cbArgs: any) => any) => any
     *
     * If a single function is passed, a future-returning function is created. If an object is passed a
     * new object is returned with all functions wrapped.
     *
     * The value that is returned from the invocation of the underlying function is assigned to the
     * property `_` on the future. This is useful for functions like `execFile` which take a callback,
     * but also return meaningful information.
     *
     * @param fnOrObject - the function or object to wrap
     * @param multi - indicates that this callback will return more than 1 argument after `err`. For example,
     *         `child_process.exec()` returns [err, stdout, stderr]
     * @param suffix - appends a string to every method that was overridden.
     *   If you passed an object. Default is 'Future'.
     *
     * Example usage: Future.wrap(asyncFunction)(arg1).wait()
     */
    wrap<T>(fnOrObject: (...args: any[]) => T, multi?: boolean, suffix?: string): FutureFunction<T>;
    wrap<O extends object>(fnOrObject: O, multi?: boolean, suffix?: string): FutureObject<O>;
    // wrap<O = object, T = FutureObject>(fnOrObject: O, multi?: boolean, suffix?: string): FutureObject & FunctionProperties<O>;

    /**
     * Invoke a function(s) that will be run in its own fiber context and return a future to its return
     * value.
     *
     * @description Run a function(s) in a future context, and return a future to their return value. This is useful
     * for instances where you want a closure to be able to `.wait()`. This also lets you wait for
     * mulitple parallel opertions to run.
     *
     * Example:
     * Future.task(function() {
     *   // You can safely `wait` on stuff here
     * }).detach();
     */
    task<T>(fn: (...args: any[]) => T): Future<T>;
    task<T = any>(fn1: Function, fn2: Function, ...fns: Function[]): Future<T[]>;

    /**
     * Wait on a series of futures and then return. If the futures throw an exception this function
     * /won't/ throw it back. You can get the value of the future by calling get() on it directly. If
     * you want to wait on a single future you're better off calling future.wait() on the instance.
     *
     * Example usage: Future.wait(aFuture, anotherFuture)
     */
    wait(...futures: FutureOrFutureArray[]): void;

    /**
     * Support for converting a Future to and from ES6 Promises.
     * @see Future#promise
     */
    fromPromise<R>(promise: Promise<R>): Future<R>;
}

interface Future<T> {
    /**
     * Return the value of this future. If the future hasn't resolved yet this will throw an error.
     */
    get(): T;

    /**
     * Differs from its functional counterpart in that it actually resolves the future. Thus if the
     * future threw, future.wait() will throw.
     *
     * @see get
     */
    wait(): T;

    /**
     * Mark this future as returned. All pending callbacks will be invoked immediately.
     *
     * value - the value to return when get() or wait() is called.
     *
     * Example usage: aFuture.return(value)
     */
    return<T>(value?: T): void;

    /**
     * Throw from this future as returned. All pending callbacks will be invoked immediately.
     * Note that execution will continue normally after running this method,
     * so make sure you exit appropriately after running throw()
     *
     * error - the error to throw when get() or wait() is called.
     *
     * Example usage: aFuture.throw(new Error("Something borked"))
     */
    throw(err: Error): void;

    /**
     * "detach" this future. Basically this is useful if you want to run a task in a future, you
     * aren't interested in its return value, but if it throws you don't want the exception to be
     * lost. If this fiber throws, an exception will be thrown to the event loop and node will
     * probably fall down.
     */
    detach(): void;

    /**
     * Returns whether or not this future has resolved yet.
     */
    isResolved(): boolean;

    /**
     * Returns a node-style function which will mark this future as resolved when called.
     *
     * Example usage:
     *   var errback = aFuture.resolver();
     *   asyncFunction(arg1, arg2, etc, errback)
     *   var result = aFuture.wait();
     */
    resolver(): FutureResolveFunction<T>;

    /**
     * Waits for this future to resolve and then invokes a callback.
     *
     * If only one argument is passed it is a standard function(err, val){} errback.
     *
     * If two arguments are passed, the first argument is a future which will be thrown to in the case
     * of error, and the second is a function(val){} callback.
     */
    resolve(errback: FutureResolveFunction<T>): this;
    resolve(future: Future<any>, callback: (val: T) => void): this;

    /**
     * Resolve only in the case of success
     */
    resolveSuccess(cb: (val: T) => void): this;

    /**
     * Propogate results to another future.
     *
     * Example usage: future1.proxy(future2) // future2 gets automatically resolved with however future1 resolves
     */
    proxy(future: Future<T>): void;

    /**
     * Propogate only errors to an another future or array of futures.
     */
    proxyErrors(futures: FutureOrFutureArray): this;

    /**
     * Support for converting a Future to and from ES6 Promises.
     * @see FutureConstructor#fromPromise
     */
    promise(): Promise<T>;
}

declare const Future: FutureConstructor;
export = Future;
