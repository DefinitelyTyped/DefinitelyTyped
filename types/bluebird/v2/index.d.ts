// ES6 model with generics overload was sourced and trans-multiplied from es6-promises.d.ts
// By: Campredon <https://github.com/fdecampredon/>

// Warning: recommended to use `tsc > v0.9.7` (critical bugs in earlier generic code):
// - https://github.com/DefinitelyTyped/DefinitelyTyped/issues/1563

// Note: replicate changes to all overloads in both definition and test file
// Note: keep both static and instance members inline (so similar)

// TODO fix remaining TODO annotations in both definition and test

// TODO verify support to have no return statement in handlers to get a Promise<void> (more overloads?)

declare var Promise: PromiseConstructor;

interface PromiseCancelHandlerSetter {
    (handler: () => void): void;
}

interface PromiseConstructor {
    /**
     * Create a new promise. The passed in function will receive functions
     * `resolve` and `reject` as its arguments which can be called to seal the
     * fate of the created promise.
     *
     * If configured appropriately, it will also receive an `onCancel`
     * function that can be used to configure a promise cancellation handler.
     */
    new<T>(
        callback: (
            resolve: (thenableOrResult?: T | PromiseLike<T>) => void,
            reject: (error: any) => void,
            onCancel?: PromiseCancelHandlerSetter,
        ) => void,
    ): Promise<T>;
    Promise: typeof Promise;

    config(options: {
        warnings?: boolean | { wForgottenReturn?: boolean | undefined } | undefined;
        longStackTraces?: boolean | undefined;
        cancellation?: boolean | undefined;
        monitoring?: boolean | undefined;
    }): void;

    // Ideally, we'd define e.g. "export class RangeError extends Error {}",
    // but as Error is defined as an interface (not a class), TypeScript doesn't
    // allow extending Error, only implementing it.
    // However, if we want to catch() only a specific error type, we need to pass
    // a constructor function to it. So, as a workaround, we define them here as such.
    RangeError(): RangeError;
    CancellationError(): Promise.CancellationError;
    TimeoutError(): Promise.TimeoutError;
    TypeError(): Promise.TypeError;
    RejectionError(): Promise.RejectionError;
    OperationalError(): Promise.OperationalError;

    /**
     * Changes how bluebird schedules calls a-synchronously.
     *
     * @param scheduler Should be a function that asynchronously schedules
     *                  the calling of the passed in function
     */
    setScheduler(scheduler: (callback: (...args: any[]) => void) => void): void;

    /**
     * Start the chain of promises with `Promise.try`. Any synchronous exceptions will be turned into rejections on the returned promise.
     *
     * Note about second argument: if it's specifically a true array, its values become respective arguments for the function call. Otherwise it is passed as is as the first argument for the function call.
     *
     * Alias for `attempt();` for compatibility with earlier ECMAScript version.
     */
    try<T>(fn: () => T | PromiseLike<T>, args?: any[], ctx?: any): Promise<T>;

    attempt<T>(fn: () => T | PromiseLike<T>, args?: any[], ctx?: any): Promise<T>;

    /**
     * Returns a new function that wraps the given function `fn`. The new function will always return a promise that is fulfilled with the original functions return values or rejected with thrown exceptions from the original function.
     * This method is convenient when a function can sometimes return synchronously or throw synchronously.
     */
    method(fn: Function): Function;

    /**
     * Create a promise that is resolved with the given `value`. If `value` is a thenable or promise, the returned promise will assume its state.
     */
    resolve<T>(value: T | PromiseLike<T>): Promise<T>;
    resolve(): Promise<void>;

    /**
     * Create a promise that is rejected with the given `reason`.
     */
    reject(reason: any): Promise<any>;
    reject<T>(reason: any): Promise<T>;

    /**
     * Create a promise with undecided fate and return a `PromiseResolver` to control it. See resolution?: Promise(#promise-resolution).
     */
    defer<T>(): Promise.Resolver<T>;

    /**
     * Cast the given `value` to a trusted promise. If `value` is already a trusted `Promise`, it is returned as is. If `value` is not a thenable, a fulfilled is: Promise returned with `value` as its fulfillment value. If `value` is a thenable (Promise-like object, like those returned by jQuery's `$.ajax`), returns a trusted that: Promise assimilates the state of the thenable.
     */
    cast<T>(value: T | PromiseLike<T>): Promise<T>;

    /**
     * Sugar for `Promise.resolve(undefined).bind(thisArg);`. See `.bind()`.
     */
    bind(thisArg: any): Promise<void>;

    /**
     * See if `value` is a trusted Promise.
     */
    is(value: any): boolean;

    /**
     * Call this right after the library is loaded to enabled long stack traces. Long stack traces cannot be disabled after being enabled, and cannot be enabled after promises have alread been created. Long stack traces imply a substantial performance penalty, around 4-5x for throughput and 0.5x for latency.
     */
    longStackTraces(): void;

    /**
     * Returns a promise that will be fulfilled with `value` (or `undefined`) after given `ms` milliseconds. If `value` is a promise, the delay will start counting down when it is fulfilled and the returned promise will be fulfilled with the fulfillment value of the `value` promise.
     */
    // TODO enable more overloads
    delay<T>(ms: number, value: T | PromiseLike<T>): Promise<T>;
    delay(ms: number): Promise<void>;

    /**
     * Returns a function that will wrap the given `nodeFunction`. Instead of taking a callback, the returned function will return a promise whose fate is decided by the callback behavior of the given node function. The node function should conform to node.js convention of accepting a callback as last argument and calling that callback with error as the first argument and success value on the second argument.
     *
     * If the `nodeFunction` calls its callback with multiple success values, the fulfillment value will be an array of them.
     *
     * If you pass a `receiver`, the `nodeFunction` will be called as a method on the `receiver`.
     */
    promisify<T>(func: (callback: (err: any, result: T) => void) => void, receiver?: any): () => Promise<T>;
    promisify<T, A1>(
        func: (arg1: A1, callback: (err: any, result: T) => void) => void,
        receiver?: any,
    ): (arg1: A1) => Promise<T>;
    promisify<T, A1, A2>(
        func: (arg1: A1, arg2: A2, callback: (err: any, result: T) => void) => void,
        receiver?: any,
    ): (arg1: A1, arg2: A2) => Promise<T>;
    promisify<T, A1, A2, A3>(
        func: (arg1: A1, arg2: A2, arg3: A3, callback: (err: any, result: T) => void) => void,
        receiver?: any,
    ): (arg1: A1, arg2: A2, arg3: A3) => Promise<T>;
    promisify<T, A1, A2, A3, A4>(
        func: (arg1: A1, arg2: A2, arg3: A3, arg4: A4, callback: (err: any, result: T) => void) => void,
        receiver?: any,
    ): (arg1: A1, arg2: A2, arg3: A3, arg4: A4) => Promise<T>;
    promisify<T, A1, A2, A3, A4, A5>(
        func: (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, callback: (err: any, result: T) => void) => void,
        receiver?: any,
    ): (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5) => Promise<T>;
    promisify(nodeFunction: Function, receiver?: any): Function;

    /**
     * Promisifies the entire object by going through the object's properties and creating an async equivalent of each function on the object and its prototype chain. The promisified method name will be the original method name postfixed with `Async`. Returns the input object.
     *
     * Note that the original methods on the object are not overwritten but new methods are created with the `Async`-postfix. For example, if you `promisifyAll()` the node.js `fs` object use `fs.statAsync()` to call the promisified `stat` method.
     */
    // TODO how to model promisifyAll?
    promisifyAll(target: Object, options?: Promise.PromisifyAllOptions): any;

    /**
     * Returns a promise that is resolved by a node style callback function.
     */
    fromNode(
        resolver: (callback: (err: any, result?: any) => void) => void,
        options?: { multiArgs?: boolean | undefined },
    ): Promise<any>;
    fromCallback(
        resolver: (callback: (err: any, result?: any) => void) => void,
        options?: { multiArgs?: boolean | undefined },
    ): Promise<any>;

    /**
     * Returns a function that can use `yield` to run asynchronous code synchronously. This feature requires the support of generators which are drafted in the next version of the language. Node version greater than `0.11.2` is required and needs to be executed with the `--harmony-generators` (or `--harmony`) command-line switch.
     */
    // TODO fix coroutine GeneratorFunction
    coroutine<T>(generatorFunction: Function): Function;

    /**
     * Spawn a coroutine which may yield promises to run asynchronous code synchronously. This feature requires the support of generators which are drafted in the next version of the language. Node version greater than `0.11.2` is required and needs to be executed with the `--harmony-generators` (or `--harmony`) command-line switch.
     */
    // TODO fix spawn GeneratorFunction
    spawn<T>(generatorFunction: Function): Promise<T>;

    /**
     * This is relevant to browser environments with no module loader.
     *
     * Release control of the `Promise` namespace to whatever it was before this library was loaded. Returns a reference to the library namespace so you can attach it to something else.
     */
    noConflict(): typeof Promise;

    /**
     * Add `handler` as the handler to call when there is a possibly unhandled rejection. The default handler logs the error stack to stderr or `console.error` in browsers.
     *
     * Passing no value or a non-function will have the effect of removing any kind of handling for possibly unhandled rejections.
     */
    onPossiblyUnhandledRejection(handler: (reason: any) => any): void;

    /**
     * Given an array, or a promise of an array, which contains promises (or a mix of promises and values) return a promise that is fulfilled when all the items in the array are fulfilled. The promise's fulfillment value is an array with fulfillment values at respective positions to the original array. If any promise in the array rejects, the returned promise is rejected with the rejection reason.
     */
    // TODO enable more overloads
    // promise of array with promises of value
    all<T>(values: PromiseLike<PromiseLike<T>[]>): Promise<T[]>;
    // promise of array with values
    all<T>(values: PromiseLike<T[]>): Promise<T[]>;
    // array with promises of value
    all<T>(values: PromiseLike<T>[]): Promise<T[]>;
    // array with promises of different types
    all<T1, T2, T3, T4, T5>(
        values: [PromiseLike<T1>, PromiseLike<T2>, PromiseLike<T3>, PromiseLike<T4>, PromiseLike<T5>],
    ): Promise<[T1, T2, T3, T4, T5]>;
    all<T1, T2, T3, T4>(
        values: [PromiseLike<T1>, PromiseLike<T2>, PromiseLike<T3>, PromiseLike<T4>],
    ): Promise<[T1, T2, T3, T4]>;
    all<T1, T2, T3>(values: [PromiseLike<T1>, PromiseLike<T2>, PromiseLike<T3>]): Promise<[T1, T2, T3]>;
    all<T1, T2>(values: [PromiseLike<T1>, PromiseLike<T2>]): Promise<[T1, T2]>;
    // array with values
    all<T>(values: T[]): Promise<T[]>;

    /**
     * Like ``Promise.all`` but for object properties instead of array items. Returns a promise that is fulfilled when all the properties of the object are fulfilled. The promise's fulfillment value is an object with fulfillment values at respective keys to the original object. If any promise in the object rejects, the returned promise is rejected with the rejection reason.
     *
     * If `object` is a trusted `Promise`, then it will be treated as a promise for object rather than for its properties. All other objects are treated for their properties as is returned by `Object.keys` - the object's own enumerable properties.
     *
     * *The original object is not modified.*
     */
    // TODO verify this is correct
    // trusted promise for object
    props(object: Promise<Object>): Promise<Object>;
    // object
    props(object: Object): Promise<Object>;

    /**
     * Given an array, or a promise of an array, which contains promises (or a mix of promises and values) return a promise that is fulfilled when all the items in the array are either fulfilled or rejected. The fulfillment value is an array of ``PromiseInspection`` instances at respective positions in relation to the input array.
     *
     * *original: The array is not modified. The input array sparsity is retained in the resulting array.*
     */
    // promise of array with promises of value
    settle<T>(values: PromiseLike<PromiseLike<T>[]>): Promise<Promise.Inspection<T>[]>;
    // promise of array with values
    settle<T>(values: PromiseLike<T[]>): Promise<Promise.Inspection<T>[]>;
    // array with promises of value
    settle<T>(values: PromiseLike<T>[]): Promise<Promise.Inspection<T>[]>;
    // array with values
    settle<T>(values: T[]): Promise<Promise.Inspection<T>[]>;

    /**
     * Like `Promise.some()`, with 1 as `count`. However, if the promise fulfills, the fulfillment value is not an array of 1 but the value directly.
     */
    // promise of array with promises of value
    any<T>(values: PromiseLike<PromiseLike<T>[]>): Promise<T>;
    // promise of array with values
    any<T>(values: PromiseLike<T[]>): Promise<T>;
    // array with promises of value
    any<T>(values: PromiseLike<T>[]): Promise<T>;
    // array with values
    any<T>(values: T[]): Promise<T>;

    /**
     * Given an array, or a promise of an array, which contains promises (or a mix of promises and values) return a promise that is fulfilled or rejected as soon as a promise in the array is fulfilled or rejected with the respective rejection reason or fulfillment value.
     *
     * **Note** If you pass empty array or a sparse array with no values, or a promise/thenable for such, it will be forever pending.
     */
    // promise of array with promises of value
    race<T>(values: PromiseLike<PromiseLike<T>[]>): Promise<T>;
    // promise of array with values
    race<T>(values: PromiseLike<T[]>): Promise<T>;
    // array with promises of value
    race<T>(values: PromiseLike<T>[]): Promise<T>;
    // array with values
    race<T>(values: T[]): Promise<T>;

    /**
     * Initiate a competetive race between multiple promises or values (values will become immediately fulfilled promises). When `count` amount of promises have been fulfilled, the returned promise is fulfilled with an array that contains the fulfillment values of the winners in order of resolution.
     *
     * If too many promises are rejected so that the promise can never become fulfilled, it will be immediately rejected with an array of rejection reasons in the order they were thrown in.
     *
     * *The original array is not modified.*
     */
    // promise of array with promises of value
    some<T>(values: PromiseLike<PromiseLike<T>[]>, count: number): Promise<T[]>;
    // promise of array with values
    some<T>(values: PromiseLike<T[]>, count: number): Promise<T[]>;
    // array with promises of value
    some<T>(values: PromiseLike<T>[], count: number): Promise<T[]>;
    // array with values
    some<T>(values: T[], count: number): Promise<T[]>;

    /**
     * Like `Promise.all()` but instead of having to pass an array, the array is generated from the passed variadic arguments.
     */
    // variadic array with promises of value
    join<T>(...values: PromiseLike<T>[]): Promise<T[]>;
    // variadic array with values
    join<T>(...values: T[]): Promise<T[]>;

    /**
     * Map an array, or a promise of an array, which contains a promises (or a mix of promises and values) with the given `mapper` function with the signature `(item, index, arrayLength)` where `item` is the resolved value of a respective promise in the input array. If any promise in the input array is rejected the returned promise is rejected as well.
     *
     * If the `mapper` function returns promises or thenables, the returned promise will wait for all the mapped results to be resolved as well.
     *
     * *The original array is not modified.*
     */
    // promise of array with promises of value
    map<T, U>(
        values: PromiseLike<PromiseLike<T>[]>,
        mapper: (item: T, index: number, arrayLength: number) => U | PromiseLike<U>,
        options?: Promise.ConcurrencyOption,
    ): Promise<U[]>;

    // promise of array with values
    map<T, U>(
        values: PromiseLike<T[]>,
        mapper: (item: T, index: number, arrayLength: number) => U | PromiseLike<U>,
        options?: Promise.ConcurrencyOption,
    ): Promise<U[]>;

    // array with promises of value
    map<T, U>(
        values: PromiseLike<T>[],
        mapper: (item: T, index: number, arrayLength: number) => U | PromiseLike<U>,
        options?: Promise.ConcurrencyOption,
    ): Promise<U[]>;

    // array with values
    map<T, U>(
        values: T[],
        mapper: (item: T, index: number, arrayLength: number) => U | PromiseLike<U>,
        options?: Promise.ConcurrencyOption,
    ): Promise<U[]>;

    /**
     * Similar to `map` with concurrency set to 1 but guaranteed to execute in sequential order
     *
     * If the `mapper` function returns promises or thenables, the returned promise will wait for all the mapped results to be resolved as well.
     *
     * *The original array is not modified.*
     */
    // promise of array with promises of value
    mapSeries<R, U>(
        values: PromiseLike<PromiseLike<R>[]>,
        mapper: (item: R, index: number, arrayLength: number) => U | PromiseLike<U>,
    ): Promise<U[]>;

    // promise of array with values
    mapSeries<R, U>(
        values: PromiseLike<R[]>,
        mapper: (item: R, index: number, arrayLength: number) => U | PromiseLike<U>,
    ): Promise<U[]>;

    // array with promises of value
    mapSeries<R, U>(
        values: PromiseLike<R>[],
        mapper: (item: R, index: number, arrayLength: number) => U | PromiseLike<U>,
    ): Promise<U[]>;

    // array with values
    mapSeries<R, U>(
        values: R[],
        mapper: (item: R, index: number, arrayLength: number) => U | PromiseLike<U>,
    ): Promise<U[]>;

    /**
     * Reduce an array, or a promise of an array, which contains a promises (or a mix of promises and values) with the given `reducer` function with the signature `(total, current, index, arrayLength)` where `item` is the resolved value of a respective promise in the input array. If any promise in the input array is rejected the returned promise is rejected as well.
     *
     * If the reducer function returns a promise or a thenable, the result for the promise is awaited for before continuing with next iteration.
     *
     * *The original array is not modified. If no `intialValue` is given and the array doesn't contain at least 2 items, the callback will not be called and `undefined` is returned. If `initialValue` is given and the array doesn't have at least 1 item, `initialValue` is returned.*
     */
    // promise of array with promises of value
    reduce<T, U>(
        values: PromiseLike<PromiseLike<T>[]>,
        reducer: (total: U, current: T, index: number, arrayLength: number) => U | PromiseLike<U>,
        initialValue?: U,
    ): Promise<U>;

    // promise of array with values
    reduce<T, U>(
        values: PromiseLike<T[]>,
        reducer: (total: U, current: T, index: number, arrayLength: number) => U | PromiseLike<U>,
        initialValue?: U,
    ): Promise<U>;

    // array with promises of value
    reduce<T, U>(
        values: PromiseLike<T>[],
        reducer: (total: U, current: T, index: number, arrayLength: number) => U | PromiseLike<U>,
        initialValue?: U,
    ): Promise<U>;

    // array with values
    reduce<T, U>(
        values: T[],
        reducer: (total: U, current: T, index: number, arrayLength: number) => U | PromiseLike<U>,
        initialValue?: U,
    ): Promise<U>;

    /**
     * Filter an array, or a promise of an array, which contains a promises (or a mix of promises and values) with the given `filterer` function with the signature `(item, index, arrayLength)` where `item` is the resolved value of a respective promise in the input array. If any promise in the input array is rejected the returned promise is rejected as well.
     *
     * The return values from the filtered functions are coerced to booleans, with the exception of promises and thenables which are awaited for their eventual result.
     *
     * *The original array is not modified.
     */
    // promise of array with promises of value
    filter<T>(
        values: PromiseLike<PromiseLike<T>[]>,
        filterer: (item: T, index: number, arrayLength: number) => boolean | PromiseLike<boolean>,
        option?: Promise.ConcurrencyOption,
    ): Promise<T[]>;

    // promise of array with values
    filter<T>(
        values: PromiseLike<T[]>,
        filterer: (item: T, index: number, arrayLength: number) => boolean | PromiseLike<boolean>,
        option?: Promise.ConcurrencyOption,
    ): Promise<T[]>;

    // array with promises of value
    filter<T>(
        values: PromiseLike<T>[],
        filterer: (item: T, index: number, arrayLength: number) => boolean | PromiseLike<boolean>,
        option?: Promise.ConcurrencyOption,
    ): Promise<T[]>;

    // array with values
    filter<T>(
        values: T[],
        filterer: (item: T, index: number, arrayLength: number) => boolean | PromiseLike<boolean>,
        option?: Promise.ConcurrencyOption,
    ): Promise<T[]>;

    /**
     * Iterate over an array, or a promise of an array, which contains promises (or a mix of promises and values) with the given iterator function with the signature (item, index, value) where item is the resolved value of a respective promise in the input array. Iteration happens serially. If any promise in the input array is rejected the returned promise is rejected as well.
     *
     * Resolves to the original array unmodified, this method is meant to be used for side effects. If the iterator function returns a promise or a thenable, the result for the promise is awaited for before continuing with next iteration.
     */
    // promise of array with promises of value
    each<T, U>(
        values: PromiseLike<PromiseLike<T>[]>,
        iterator: (item: T, index: number, arrayLength: number) => U | PromiseLike<U>,
    ): Promise<T[]>;
    // array with promises of value
    each<T, U>(
        values: PromiseLike<T>[],
        iterator: (item: T, index: number, arrayLength: number) => U | PromiseLike<U>,
    ): Promise<T[]>;
    // array with values OR promise of array with values
    each<T, U>(
        values: T[] | PromiseLike<T[]>,
        iterator: (item: T, index: number, arrayLength: number) => U | PromiseLike<U>,
    ): Promise<T[]>;
}

interface Promise<T> extends PromiseLike<T>, Promise.Inspection<T> {
    /**
     * Promises/A+ `.then()` with progress handler. Returns a new promise chained from this promise. The new promise will be rejected or resolved dedefer on the passed `fulfilledHandler`, `rejectedHandler` and the state of this promise.
     */
    then<U>(
        onFulfill: (value: T) => U | PromiseLike<U>,
        onReject?: (error: any) => U | PromiseLike<U>,
        onProgress?: (note: any) => any,
    ): Promise<U>;
    then<U>(
        onFulfill: (value: T) => U | PromiseLike<U>,
        onReject?: (error: any) => void | PromiseLike<void>,
        onProgress?: (note: any) => any,
    ): Promise<U>;

    /**
     * This is a catch-all exception handler, shortcut for calling `.then(null, handler)` on this promise. Any exception happening in a `.then`-chain will propagate to nearest `.catch` handler.
     *
     * Alias `.caught();` for compatibility with earlier ECMAScript version.
     */
    catch(onReject?: (error: any) => T | PromiseLike<T> | void | PromiseLike<void>): Promise<T>;
    caught(onReject?: (error: any) => T | PromiseLike<T> | void | PromiseLike<void>): Promise<T>;

    catch<U>(onReject?: (error: any) => U | PromiseLike<U>): Promise<U | T>;
    caught<U>(onReject?: (error: any) => U | PromiseLike<U>): Promise<U | T>;

    /**
     * This extends `.catch` to work more like catch-clauses in languages like Java or C#. Instead of manually checking `instanceof` or `.name === "SomeError"`, you may specify a number of error constructors which are eligible for this catch handler. The catch handler that is first met that has eligible constructors specified, is the one that will be called.
     *
     * This method also supports predicate-based filters. If you pass a predicate function instead of an error constructor, the predicate will receive the error as an argument. The return result of the predicate will be used determine whether the error handler should be called.
     *
     * Alias `.caught();` for compatibility with earlier ECMAScript version.
     */
    catch(
        predicate: (error: any) => boolean,
        onReject: (error: any) => T | PromiseLike<T> | void | PromiseLike<void>,
    ): Promise<T>;
    caught(
        predicate: (error: any) => boolean,
        onReject: (error: any) => T | PromiseLike<T> | void | PromiseLike<void>,
    ): Promise<T>;

    catch<U>(predicate: (error: any) => boolean, onReject: (error: any) => U | PromiseLike<U>): Promise<U | T>;
    caught<U>(predicate: (error: any) => boolean, onReject: (error: any) => U | PromiseLike<U>): Promise<U | T>;

    catch(ErrorClass: Function, onReject: (error: any) => T | PromiseLike<T> | void | PromiseLike<void>): Promise<T>;
    caught(ErrorClass: Function, onReject: (error: any) => T | PromiseLike<T> | void | PromiseLike<void>): Promise<T>;

    catch<U>(ErrorClass: Function, onReject: (error: any) => U | PromiseLike<U>): Promise<U | T>;
    caught<U>(ErrorClass: Function, onReject: (error: any) => U | PromiseLike<U>): Promise<U | T>;

    /**
     * Like `.catch` but instead of catching all types of exceptions, it only catches those that don't originate from thrown errors but rather from explicit rejections.
     */
    error<U>(onReject: (reason: any) => PromiseLike<U>): Promise<U>;
    error<U>(onReject: (reason: any) => U): Promise<U>;

    /**
     * Pass a handler that will be called regardless of this promise's fate. Returns a new promise chained from this promise. There are special semantics for `.finally()` in that the final value cannot be modified from the handler.
     *
     * Alias `.lastly();` for compatibility with earlier ECMAScript version.
     */
    finally<U>(handler: () => U | PromiseLike<U>): Promise<T>;

    lastly<U>(handler: () => U | PromiseLike<U>): Promise<T>;

    /**
     * Create a promise that follows this promise, but is bound to the given `thisArg` value. A bound promise will call its handlers with the bound value set to `this`. Additionally promises derived from a bound promise will also be bound promises with the same `thisArg` binding as the original promise.
     */
    bind(thisArg: any): Promise<T>;

    /**
     * Like `.then()`, but any unhandled rejection that ends up here will be thrown as an error.
     */
    done<U>(
        onFulfilled?: (value: T) => PromiseLike<U>,
        onRejected?: (error: any) => U | PromiseLike<U>,
        onProgress?: (note: any) => any,
    ): void;
    done<U>(
        onFulfilled?: (value: T) => U,
        onRejected?: (error: any) => U | PromiseLike<U>,
        onProgress?: (note: any) => any,
    ): void;

    /**
     * Like `.finally()`, but not called for rejections.
     */
    tap<U>(onFulFill: (value: T) => U | PromiseLike<U>): Promise<T>;

    /**
     * Shorthand for `.then(null, null, handler);`. Attach a progress handler that will be called if this promise is progressed. Returns a new promise chained from this promise.
     */
    progressed(handler: (note: any) => any): Promise<T>;

    /**
     * Same as calling `Promise.delay(this, ms)`. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.
     */
    delay(ms: number): Promise<T>;

    /**
     * Returns a promise that will be fulfilled with this promise's fulfillment value or rejection reason. However, if this promise is not fulfilled or rejected within `ms` milliseconds, the returned promise is rejected with a `Promise.TimeoutError` instance.
     *
     * You may specify a custom error message with the `message` parameter.
     */
    timeout(ms: number, message?: string): Promise<T>;

    /**
     * Register a node-style callback on this promise. When this promise is is either fulfilled or rejected, the node callback will be called back with the node.js convention where error reason is the first argument and success value is the second argument. The error argument will be `null` in case of success.
     * Returns back this promise instead of creating a new one. If the `callback` argument is not a function, this method does not do anything.
     */
    nodeify(callback: (err: any, value?: T) => void, options?: Promise.SpreadOption): Promise<T>;
    nodeify(...sink: any[]): Promise<T>;

    /**
     * Marks this promise as cancellable. Promises by default are not cancellable after v0.11 and must be marked as such for `.cancel()` to have any effect. Marking a promise as cancellable is infectious and you don't need to remark any descendant promise.
     */
    cancellable(): Promise<T>;

    /**
     * Cancel this promise. The cancellation will propagate to farthest cancellable ancestor promise which is still pending.
     *
     * That ancestor will then be rejected with a `CancellationError` (get a reference from `Promise.CancellationError`) object as the rejection reason.
     *
     * In a promise rejection handler you may check for a cancellation by seeing if the reason object has `.name === "Cancel"`.
     *
     * Promises are by default not cancellable. Use `.cancellable()` to mark a promise as cancellable.
     */
    // TODO what to do with this?
    cancel<U>(reason?: any): Promise<U>;

    /**
     * Like `.then()`, but cancellation of the the returned promise or any of its descendant will not propagate cancellation to this promise or this promise's ancestors.
     */
    fork<U>(
        onFulfilled?: (value: T) => U | PromiseLike<U>,
        onRejected?: (error: any) => U | PromiseLike<U>,
        onProgress?: (note: any) => any,
    ): Promise<U>;

    /**
     * Create an uncancellable promise based on this promise.
     */
    uncancellable(): Promise<T>;

    /**
     * See if this promise can be cancelled.
     */
    isCancellable(): boolean;

    /**
     * See if this `promise` has been fulfilled.
     */
    isFulfilled(): boolean;

    /**
     * See if this `promise` has been rejected.
     */
    isRejected(): boolean;

    /**
     * See if this `promise` is still defer.
     */
    isPending(): boolean;

    /**
     * See if this `promise` is resolved -> either fulfilled or rejected.
     */
    isResolved(): boolean;

    /**
     * Get the fulfillment value of the underlying promise. Throws if the promise isn't fulfilled yet.
     *
     * throws `TypeError`
     */
    value(): T;

    /**
     * Get the rejection reason for the underlying promise. Throws if the promise isn't rejected yet.
     *
     * throws `TypeError`
     */
    reason(): any;

    /**
     * Synchronously inspect the state of this `promise`. The `PromiseInspection` will represent the state of the promise as snapshotted at the time of calling `.inspect()`.
     */
    inspect(): Promise.Inspection<T>;

    /**
     * This is a convenience method for doing:
     *
     * <code>
     * promise.then(function(obj){
     *     return obj[propertyName].call(obj, arg...);
     * });
     * </code>
     */
    call(propertyName: string, ...args: any[]): Promise<any>;

    /**
     * This is a convenience method for doing:
     *
     * <code>
     * promise.then(function(obj){
     *     return obj[propertyName];
     * });
     * </code>
     */
    // TODO find way to fix get()
    // get<U>(propertyName: string): Promise<U>;

    /**
     * Convenience method for:
     *
     * <code>
     * .then(function() {
     *    return value;
     * });
     * </code>
     *
     * in the case where `value` doesn't change its value. That means `value` is bound at the time of calling `.return()`
     *
     * Alias `.thenReturn();` for compatibility with earlier ECMAScript version.
     */
    return(): Promise<any>;
    thenReturn(): Promise<any>;
    return<U>(value: U): Promise<U>;
    thenReturn<U>(value: U): Promise<U>;

    /**
     * Convenience method for:
     *
     * <code>
     * .then(function() {
     *    throw reason;
     * });
     * </code>
     * Same limitations apply as with `.return()`.
     *
     * Alias `.thenThrow();` for compatibility with earlier ECMAScript version.
     */
    throw(reason: Error): Promise<T>;
    thenThrow(reason: Error): Promise<T>;

    /**
     * Convert to String.
     */
    toString(): string;

    /**
     * This is implicitly called by `JSON.stringify` when serializing the object. Returns a serialized representation of the `Promise`.
     */
    toJSON(): Object;

    /**
     * Like calling `.then`, but the fulfillment value or rejection reason is assumed to be an array, which is flattened to the formal parameters of the handlers.
     */
    // TODO how to model instance.spread()? like Q?
    spread<U>(onFulfill: Function, onReject?: (reason: any) => U | PromiseLike<U>): Promise<U>;
    /*
     // TODO or something like this?
     spread<U, W>(onFulfill: (...values: W[]) => PromiseLike<U>, onReject?: (reason: any) => PromiseLike<U>): Promise<U>;
     spread<U, W>(onFulfill: (...values: W[]) => PromiseLike<U>, onReject?: (reason: any) => U): Promise<U>;
     spread<U, W>(onFulfill: (...values: W[]) => U, onReject?: (reason: any) => PromiseLike<U>): Promise<U>;
     spread<U, W>(onFulfill: (...values: W[]) => U, onReject?: (reason: any) => U): Promise<U>;
     */
    /**
     * Same as calling `Promise.all(thisPromise)`. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.
     */
    // TODO type inference from array-resolving promise?
    all<U>(): Promise<U[]>;

    /**
     * Same as calling `Promise.props(thisPromise)`. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.
     */
    // TODO how to model instance.props()?
    props(): Promise<Object>;

    /**
     * Same as calling `Promise.settle(thisPromise)`. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.
     */
    // TODO type inference from array-resolving promise?
    settle<U>(): Promise<Promise.Inspection<U>[]>;

    /**
     * Same as calling `Promise.any(thisPromise)`. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.
     */
    // TODO type inference from array-resolving promise?
    any<U>(): Promise<U>;

    /**
     * Same as calling `Promise.some(thisPromise)`. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.
     */
    // TODO type inference from array-resolving promise?
    some<U>(count: number): Promise<U[]>;

    /**
     * Same as calling `Promise.race(thisPromise, count)`. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.
     */
    // TODO type inference from array-resolving promise?
    race<U>(): Promise<U>;

    /**
     * Same as calling `Promise.map(thisPromise, mapper)`. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.
     */
    // TODO type inference from array-resolving promise?
    map<Q, U>(
        mapper: (item: Q, index: number, arrayLength: number) => U | PromiseLike<U>,
        options?: Promise.ConcurrencyOption,
    ): Promise<U[]>;

    /**
     * Same as `Promise.mapSeries(thisPromise, mapper)`.
     */
    // TODO type inference from array-resolving promise?
    mapSeries<Q, U>(mapper: (item: Q, index: number, arrayLength: number) => U | PromiseLike<U>): Promise<U[]>;

    /**
     * Same as calling `Promise.reduce(thisPromise, Function reducer, initialValue)`. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.
     */
    // TODO type inference from array-resolving promise?
    reduce<Q, U>(
        reducer: (memo: U, item: Q, index: number, arrayLength: number) => U | PromiseLike<U>,
        initialValue?: U,
    ): Promise<U>;

    /**
     * Same as calling ``Promise.filter(thisPromise, filterer)``. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.
     */
    // TODO type inference from array-resolving promise?
    filter<U>(
        filterer: (item: U, index: number, arrayLength: number) => boolean | PromiseLike<boolean>,
        options?: Promise.ConcurrencyOption,
    ): Promise<U[]>;

    /**
     * Same as calling ``Promise.each(thisPromise, iterator)``. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.
     */
    each<T, U>(iterator: (item: T, index: number, arrayLength: number) => U | PromiseLike<U>): Promise<T[]>;
}

/**
 * Don't use variable namespace such as variables, functions, and classes.
 * If you use this namespace, it will conflict in es6.
 */
declare namespace Promise {
    export interface RangeError extends Error {
    }
    export interface CancellationError extends Error {
    }
    export interface TimeoutError extends Error {
    }
    export interface TypeError extends Error {
    }
    export interface RejectionError extends Error {
    }
    export interface OperationalError extends Error {
    }

    export interface ConcurrencyOption {
        concurrency: number;
    }
    export interface SpreadOption {
        spread: boolean;
    }
    export interface PromisifyAllOptions {
        suffix?: string | undefined;
        filter?: ((name: string, func: Function, target?: any, passesDefaultFilter?: boolean) => boolean) | undefined;
        // The promisifier gets a reference to the original method and should return a function which returns a promise
        promisifier?: ((originalMethod: Function) => () => PromiseLike<any>) | undefined;
    }

    export interface Resolver<T> {
        /**
         * Returns a reference to the controlled promise that can be passed to clients.
         */
        promise: Promise<T>;

        /**
         * Resolve the underlying promise with `value` as the resolution value. If `value` is a thenable or a promise, the underlying promise will assume its state.
         */
        resolve(value: T): void;
        resolve(): void;

        /**
         * Reject the underlying promise with `reason` as the rejection reason.
         */
        reject(reason: any): void;

        /**
         * Progress the underlying promise with `value` as the progression value.
         */
        progress(value: any): void;

        /**
         * Gives you a callback representation of the `PromiseResolver`. Note that this is not a method but a property. The callback accepts error object in first argument and success values on the 2nd parameter and the rest, I.E. node js conventions.
         *
         * If the the callback is called with multiple success values, the resolver fullfills its promise with an array of the values.
         */
        // TODO specify resolver callback
        callback: (err: any, value: T, ...values: T[]) => void;
    }

    export interface Inspection<T> {
        /**
         * See if the underlying promise was fulfilled at the creation time of this inspection object.
         */
        isFulfilled(): boolean;

        /**
         * See if the underlying promise was rejected at the creation time of this inspection object.
         */
        isRejected(): boolean;

        /**
         * See if the underlying promise was defer at the creation time of this inspection object.
         */
        isPending(): boolean;

        /**
         * Get the fulfillment value of the underlying promise. Throws if the promise wasn't fulfilled at the creation time of this inspection object.
         *
         * throws `TypeError`
         */
        value(): T;

        /**
         * Get the rejection reason for the underlying promise. Throws if the promise wasn't rejected at the creation time of this inspection object.
         *
         * throws `TypeError`
         */
        reason(): any;
    }
}

// eslint-disable-next-line @definitelytyped/no-declare-current-package
declare module "bluebird" {
    export = Promise;
}
