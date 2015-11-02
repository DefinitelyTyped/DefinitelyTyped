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
    // Helper interfaces
    module _ {
        interface Fn0<T> { (): T }
        interface Fn1<A1, T> { (a1: A1): T }
        interface Fn2<A1, A2, T> { (a1: A1, a2: A2): T }
        interface Fn3<A1, A2, A3, T> { (a1: A1, a2: A2, a3: A3): T }
        interface Fn4<A1, A2, A3, A4, T> { (a1: A1, a2: A2, a3: A3, a4: A4): T }
        interface Fn5<A1, A2, A3, A4, A5, T> { (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5): T }
        interface Fn6<A1, A2, A3, A4, A5, A6, T> { (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6): T }

        interface LiftedFn0<T> extends Fn0<Promise<T>> { }
        interface LiftedFn1<A1, T> extends Fn1<A1 | Promise<A1>, Promise<T>> { }
        interface LiftedFn2<A1, A2, T> extends Fn2<A1 | Promise<A1>, A2 | Promise<A2>, Promise<T>> { }
        interface LiftedFn3<A1, A2, A3, T> extends Fn3<A1 | Promise<A1>, A2 | Promise<A2>, A3 | Promise<A3>, Promise<T>> { }
        interface LiftedFn4<A1, A2, A3, A4, T> extends Fn4<A1 | Promise<A1>, A2 | Promise<A2>, A3 | Promise<A3>, A4 | Promise<A4>, Promise<T>> { }
        interface LiftedFn5<A1, A2, A3, A4, A5, T> extends Fn5<A1 | Promise<A1>, A2 | Promise<A2>, A3 | Promise<A3>, A4 | Promise<A4>, A5 | Promise<A5>, Promise<T>> { }

        interface NodeCallback<T> { (err: any, result: T): void }

        interface NodeFn0<T> extends _.Fn1<NodeCallback<T>, void> { }
        interface NodeFn1<A1, T> extends _.Fn2<A1, NodeCallback<T>, void> { }
        interface NodeFn2<A1, A2, T> extends _.Fn3<A1, A2, NodeCallback<T>, void> { }
        interface NodeFn3<A1, A2, A3, T> extends _.Fn4<A1, A2, A3, NodeCallback<T>, void> { }
        interface NodeFn4<A1, A2, A3, A4, T> extends _.Fn5<A1, A2, A3, A4, NodeCallback<T>, void> { }
        interface NodeFn5<A1, A2, A3, A4, A5, T> extends _.Fn6<A1, A2, A3, A4, A5, NodeCallback<T>, void> { }
    }

    function attempt<T>(
        f: _.Fn0<T>
    ): Promise<T>;

    function attempt<A1, T>(
        f: _.Fn1<A1, T>,
        arg1: A1 | Promise<A1>
    ): Promise<T>;

    function attempt<A1, A2, T>(
        f: _.Fn2<A1, A2, T>,
        arg1: A1 | Promise<A1>,
        arg2: A2 | Promise<A2>
    ): Promise<T>;

    function attempt<A1, A2, A3, T>(
        f: _.Fn3<A1, A2, A3, T>,
        arg1: A1 | Promise<A1>,
        arg2: A2 | Promise<A2>,
        arg3: A3 | Promise<A3>
    ): Promise<T>;

    function attempt<A1, A2, A3, A4, T>(
        f: _.Fn4<A1, A2, A3, A4, T>,
        arg1: A1 | Promise<A1>,
        arg2: A2 | Promise<A2>,
        arg3: A3 | Promise<A3>,
        arg4: A4 | Promise<A4>
    ): Promise<T>;

    function attempt<A1, A2, A3, A4, A5, T>(
        f: _.Fn5<A1, A2, A3, A4, A5, T>,
        arg1: A1 | Promise<A1>,
        arg2: A2 | Promise<A2>,
        arg3: A3 | Promise<A3>,
        arg4: A4 | Promise<A4>,
        arg5: A5 | Promise<A5>
    ): Promise<T>;


    function lift<T>(f: _.Fn0<T>): _.LiftedFn0<T>;
    function lift<A1, T>(f: _.Fn1<A1, T>): _.LiftedFn1<A1, T>;
    function lift<A1, A2, T>(f: _.Fn2<A1, A2, T>): _.LiftedFn2<A1, A2, T>;
    function lift<A1, A2, A3, T>(f: _.Fn3<A1, A2, A3, T>): _.LiftedFn3<A1, A2, A3, T>;
    function lift<A1, A2, A3, A4, T>(f: _.Fn4<A1, A2, A3, A4, T>): _.LiftedFn4<A1, A2, A3, A4, T>;
    function lift<A1, A2, A3, A4, A5, T>(f: _.Fn5<A1, A2, A3, A4, A5, T>): _.LiftedFn5<A1, A2, A3, A4, A5, T>;

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
     * Describes the status of a promise.
     * state may be one of:
     * "fulfilled" - the promise has resolved
     * "pending" - the promise is still pending to resolve/reject
     * "rejected" - the promise has rejected
     */
    interface Descriptor<T> {
        state: string;
        value?: T;
        reason?: any;
    }

    /**
     * Returns a promise for an array containing the same number of elements as the input array.
     * Each element is a descriptor object describing of the outcome of the corresponding element in the input.
     * The returned promise will only reject if array itself is a rejected promise. Otherwise,
     * it will always fulfill with an array of descriptors. This is in contrast to when.all,
     * which will reject if any element of array rejects.
     * @memberOf when
     *
     * @param promisesOrValues array of anything, may contain a mix
     *      of {@link Promise}s and values
     */
    function settle<T>(promisesOrValues: any[]): Promise<Descriptor<T>[]>;

    /**
     * Generates a potentially infinite stream of promises by repeatedly calling f until predicate becomes true.
     * @memberOf when
     * @param f function that, given a seed, returns the next value or a promise for it.
     * @param predicate function that receives the current iteration value, and should return truthy when the iterating should stop
     * @param handler function that receives each value as it is produced by f. It may return a promise to delay the next iteration.
     * @param seed initial value provided to the handler, and first f invocation. May be a promise.
     */
    function iterate<U>(f: (seed: U) => U | Promise<U>,
                        predicate: (value: U) => boolean,
                        handler: (value: U) => Promise<any> | void,
                        seed: U | Promise<U>): Promise<U>;


    /**
     * Similar to when/iterate, when.unfold generates a potentially infinite stream of promises by repeatedly calling
     * unspool until predicate becomes true. when.unfold allows you to thread additional state information through the iteration.
     * @memberOf when
     * @param unspool function that, given a seed, returns a [valueToSendToHandler, newSeed] pair.
     * May return an array, array of promises, promise for an array, or promise for an array of promises.
     * @param predicate function that receives the current seed, and should return truthy when the unfold should stop
     * @param handler function that receives the valueToSendToHandler of the current iteration.
     * This function can process valueToSendToHandler in whatever way you need.
     * It may return a promise to delay the next iteration of the unfold.
     * @param seed initial value provided to the first unspool invocation. May be a promise.
     */
    function unfold<T, U>(unspool: (seed: U) => [T | Promise<T>, U | Promise<U>] | Promise<[T | Promise<T>, U | Promise<U>]>,
                          predicate: (value: U) => boolean | Promise<boolean>,
                          handler: (value: T) => Promise<any> | void,
                          seed: U | Promise<U>): Promise<void>;

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
        catch<U>(onRejected?: (reason: any) => U | Promise<U>): Promise<U>;

        catch<U>(filter: (reason: any) => boolean, onRejected?: (reason: any) => U | Promise<U>): Promise<U>;

        // Make sure you test any usage of these overloads, exceptionType must
        // be a constructor with prototype set to an instance of Error.
        catch<U>(exceptionType: any, onRejected?: (reason: any) => U | Promise<U>): Promise<U>;

        finally(onFulfilledOrRejected: Function): Promise<T>;

        ensure(onFulfilledOrRejected: Function): Promise<T>;

        inspect(): Snapshot<T>;

        yield<U>(value: U | Promise<U>): Promise<U>;

        else(value: T): Promise<T>;
        orElse(value: T): Promise<T>;

        tap(onFulfilledSideEffect: (value: T) => void): Promise<T>;

        delay(milliseconds: number): Promise<T>;

        timeout(milliseconds: number, reason?: any): Promise<T>;

        with(thisArg: any): Promise<T>;
        withThis(thisArg: any): Promise<T>;

        otherwise<U>(onRejected?: (reason: any) => U | Promise<U>): Promise<U>;

        otherwise<U>(predicate: (reason: any) => boolean, onRejected?: (reason: any) => U | Promise<U>): Promise<U>;

        // Make sure you test any usage of these overloads, exceptionType must
        // be a constructor with prototype set to an instance of Error.
        otherwise<U>(exceptionType: any, onRejected?: (reason: any) => U | Promise<U>): Promise<U>;

        then<U>(onFulfilled: (value: T) => U | Promise<U>, onRejected?: (reason: any) => U | Promise<U>, onProgress?: (update: any) => void): Promise<U>;

        spread<T>(onFulfilled: _.Fn0<Promise<T> | T>): Promise<T>;
        spread<A1, T>(onFulfilled: _.Fn1<A1, Promise<T> | T>): Promise<T>;
        spread<A1, A2, T>(onFulfilled: _.Fn2<A1, A2, Promise<T> | T>): Promise<T>;
        spread<A1, A2, A3, T>(onFulfilled: _.Fn3<A1, A2, A3, Promise<T> | T>): Promise<T>;
        spread<A1, A2, A3, A4, T>(onFulfilled: _.Fn4<A1, A2, A3, A4, Promise<T> | T>): Promise<T>;
        spread<A1, A2, A3, A4, A5, T>(onFulfilled: _.Fn5<A1, A2, A3, A4, A5, Promise<T> | T>): Promise<T>;

        done<U>(onFulfilled: (value: T) => void, onRejected?: (reason: any) => void): void;

        fold<U, V>(combine: (value1: T, value2: V) => U | Promise<U>, value2: V | Promise<V>): Promise<U>;
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
    import _ = when._;

    function lift<T>(fn: _.NodeFn0<T>): _.LiftedFn0<T>;
    function lift<A1, T>(fn: _.NodeFn1<A1, T>): _.LiftedFn1<A1, T>;
    function lift<A1, A2, T>(fn: _.NodeFn2<A1, A2, T>): _.LiftedFn2<A1, A2, T>;
    function lift<A1, A2, A3, T>(fn: _.NodeFn3<A1, A2, A3, T>): _.LiftedFn3<A1, A2, A3, T>;
    function lift<A1, A2, A3, A4, T>(fn: _.NodeFn4<A1, A2, A3, A4, T>): _.LiftedFn4<A1, A2, A3, A4, T>;
    function lift<A1, A2, A3, A4, A5, T>(fn: _.NodeFn5<A1, A2, A3, A4, A5, T>): _.LiftedFn5<A1, A2, A3, A4, A5, T>;


    function call<T>(
        fn: _.NodeFn0<T>
    ): when.Promise<T>;

    function call<A1, T>(
        fn: _.NodeFn1<A1, T>,
        arg1: A1 | when.Promise<A1>
    ): when.Promise<T>;

    function call<A1, A2, T>(
        fn: _.NodeFn2<A1, A2, T>,
        arg1: A1 | when.Promise<A1>,
        arg2: A2 | when.Promise<A2>
    ): when.Promise<T>;

    function call<A1, A2, A3, T>(
        fn: _.NodeFn3<A1, A2, A3, T>,
        arg1: A1 | when.Promise<A1>,
        arg2: A2 | when.Promise<A2>,
        arg3: A3 | when.Promise<A3>
    ): when.Promise<T>;

    function call<A1, A2, A3, A4, T>(
        fn: _.NodeFn4<A1, A2, A3, A4, T>,
        arg1: A1 | when.Promise<A1>,
        arg2: A2 | when.Promise<A2>,
        arg3: A3 | when.Promise<A3>,
        arg4: A4 | when.Promise<A4>
    ): when.Promise<T>;

    function call<A1, A2, A3, A4, A5, T>(
        fn: _.NodeFn5<A1, A2, A3, A4, A5, T>,
        arg1: A1 | when.Promise<A1>,
        arg2: A2 | when.Promise<A2>,
        arg3: A3 | when.Promise<A3>,
        arg4: A4 | when.Promise<A4>,
        arg5: A5 | when.Promise<A5>
    ): when.Promise<T>;


    function apply<T>(fn: _.NodeFn0<T>, args: any[]): when.Promise<T>;
    function apply<T>(fn: _.NodeFn1<any, T>, args: any[]): when.Promise<T>;
    function apply<T>(fn: _.NodeFn2<any, any, T>, args: any[]): when.Promise<T>;
    function apply<T>(fn: _.NodeFn3<any, any, any, T>, args: any[]): when.Promise<T>;
    function apply<T>(fn: _.NodeFn4<any, any, any, any, T>, args: any[]): when.Promise<T>;
    function apply<T>(fn: _.NodeFn5<any, any, any, any, any, T>, args: any[]): when.Promise<T>;


    function liftAll(srcApi: any, transform?: (destApi: any, liftedFunc: Function, name: string) => any, destApi?: any): any;


    function liftCallback<TArg>(callback: (err: any, arg: TArg) => void): (value: when.Promise<TArg>) => when.Promise<TArg>;


    function bindCallback<TArg>(arg: when.Promise<TArg>, callback: (err: any, arg: TArg) => void): when.Promise<TArg>;


    interface Resolver<T> {
        reject(reason: any): void;
        resolve(value?: T): void;
        resolve(value?: when.Promise<T>): void;
    }

    function createCallback<TArg>(resolver: Resolver<TArg>): (err: any, arg: TArg) => void;
}
