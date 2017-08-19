// Type definitions for RSVP 3.3.3
// Project: https://github.com/tildeio/rsvp.js
// Definitions by: Taylor Brown <https://github.com/Taytay>
//                 Mikael Kohlmyr <https://github.com/mkohlmyr>
//                 Theron Cross <https://github.com/theroncross>
//                 Chris Krycho <https://github.com/chriskrycho>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

// Some of this file was taken from the type definitions for es6-promise https://github.com/borisyankov/DefinitelyTyped/blob/master/es6-promise/es6-promise.d.ts
// Credit for that file goes to: François de Campredon <https://github.com/fdecampredon/>

// Some of this file was taken from the type definitions for Q : https://github.com/borisyankov/DefinitelyTyped/blob/master/q/Q.d.ts
// Credit for that file goes to: Barrie Nemetchek <https://github.com/bnemetchek>, Andrew Gaspar <https://github.com/AndrewGaspar/>, John Reilly <https://github.com/johnnyreilly>

declare namespace RSVP {
    type Resolution<T, U, C> = (value: T) => U | Thenable<U, C>;
    type Rejection<T, C, D> = (error: C) => D | Thenable<T, D>;

    interface Thenable<T, C> {
        then(label?: string): Thenable<T, C>;
        then<U>(onFulfillment: Resolution<T, U, C>, label?: string): Thenable<U, C>;
        then<U, D>(
            onFulfillment: Resolution<T, U, C>,
            onRejected: Rejection<T, C, D>,
            label?: string
        ): Thenable<U, D>;
    }

    interface Catchable<C> {
        catch(label?: string): Catchable<C>;
        catch<D>(onRejection: (error: C) => D, label?: string): Catchable<D>;
    }

    interface Deferred<T, C> {
        promise: Promise<T, C>;
        resolve(value: T): void;
        reject(reason: C): void;
    }

    type PromiseStates = 'fulfilled' | 'rejected' | 'pending';
    interface IPromiseState<T, C> {
        state: PromiseStates;
        value: T;
        reason: C;
    }

    class Resolved<T, C> implements IPromiseState<T, C> {
        state: 'fulfilled';
        value: T;
        reason: never;
    }

    class Rejected<T, C> implements IPromiseState<T, C> {
        state: 'rejected';
        value: never;
        reason: C;
    }

    class Pending<T, C> implements IPromiseState<T, C> {
        state: 'pending';
        value: never;
        reason: never;
    }

    type PromiseState<T, C> = Resolved<T, C> | Rejected<C, C> | Pending<T, C>;

    type PromiseHash<T, C> = { [P in keyof T]: Thenable<T[P], C> | T[P] };

    type SettledHash<T, C> = { [P in keyof T]: PromiseState<T[P], C> };

    interface InstrumentEvent {
        guid: string; // guid of promise. Must be globally unique, not just within the implementation
        childGuid: string; // child of child promise (for chained via `then`)
        eventName: string; // one of ['created', 'chained', 'fulfilled', 'rejected']
        detail: any; // fulfillment value or rejection reason, if applicable
        label: string; // label passed to promise's constructor
        timeStamp: number; // milliseconds elapsed since 1 January 1970 00:00:00 UTC up until now
    }

    interface ObjectWithEventMixins {
        on(
            eventName: 'created' | 'chained' | 'fulfilled' | 'rejected',
            listener: (event: InstrumentEvent) => void
        ): void;
        on(eventName: 'error', errorHandler: (reason: any) => void): void;
        on(eventName: string, callback: (value: any) => void): void;
        off(eventName: string, callback?: (value: any) => void): void;
        trigger(eventName: string, options?: any, label?: string): void;
    }

    class Promise<T, C> implements Thenable<T, C>, Catchable<C> {
        /**
          * If you call resolve in the body of the callback passed to the constructor,
          * your promise is fulfilled with result object passed to resolve.
          * If you call reject your promise is rejected with the object passed to reject.
          * For consistency and debugging (eg stack traces), obj should be an instanceof Error.
          * Any errors thrown in the constructor callback will be implicitly passed to reject().
          */
        constructor(
            callback: (
                resolve: (result?: T | Thenable<T, never>) => void,
                reject: (error: C | Thenable<never, C>) => void
            ) => void,
            label?: string
        );

        /**
          * onFulfillment is called when/if "promise" resolves. onRejected is called when/if "promise" rejects.
          * Both are optional, if either/both are omitted the next onFulfillment/onRejected in the chain is called.
          * Both callbacks have a single parameter , the fulfillment value or rejection reason.
          * "then" returns a new promise equivalent to the value you return from onFulfillment/onRejected after being passed through Promise.resolve.
          * If an error is thrown in the callback, the returned promise rejects with that error.
          *
          * @param onFulfillment called when/if "promise" resolves
          * @param onRejected called when/if "promise" rejects
          * @param label useful for tooling
          */
        then<U, D>(
            onFulfillment: Resolution<T, U, C>,
            onRejected: Rejection<T, C, D>,
            label?: string
        ): Promise<U, D>;
        then<U>(onFulfillment: Resolution<T, U, C>, label?: string): Promise<U, C>;
        then(label?: string): Promise<T, C>;

        /**
          * Sugar for promise.then(undefined, onRejected)
          */
        catch(label?: string): Promise<T, C>;
        catch<D>(onRejection: Rejection<T, C, D>, label?: string): Promise<T, D>;

        finally(finallyCallback: Function): Promise<T, C>;

        /**
             * `RSVP.Promise.all` accepts an array of promises, and returns a new promise which
             * is fulfilled with an array of fulfillment values for the passed promises, or
             * rejected with the reason of the first passed promise to be rejected. It casts all
             * elements of the passed iterable to promises as it runs this algorithm.
             */
        static all<T, C>(promises: Thenable<T, C>[], label?: string): Promise<T[], C>;

        /**
          * `RSVP.Promise.race` returns a new promise which is settled in the same way as the
          * first passed promise to settle.
          *
          * `RSVP.Promise.race` is deterministic in that only the state of the first
          * settled promise matters. For example, even if other promises given to the
          * `promises` array argument are resolved, but the first settled promise has
          * become rejected before the other promises became fulfilled, the returned
          * promise will become rejected.
          */
        static race<T, C>(promises: Promise<T, C>[]): Promise<T, C>;

        /**
          * Returns a promise that will become resolved with the passed `value`
          */
        static resolve<T>(value: T, label?: string): Promise<T, never>;

        /**
          * Deprecated in favor of resolve
          */
        static cast<T>(value: T, label?: string): Promise<T, never>;

        /**
          * Returns a promise rejected with the passed `reason`.
          */
        static reject<C>(reason: C): Promise<never, C>;
    }

    export namespace EventTarget {
        /** `RSVP.EventTarget.mixin` extends an object with EventTarget methods. */
        function mixin(object: object): ObjectWithEventMixins;

        /** Registers a callback to be executed when `eventName` is triggered */
        function on(
            eventName: 'created' | 'chained' | 'fulfilled' | 'rejected',
            listener: (event: InstrumentEvent) => void
        ): void;
        function on(eventName: 'error', errorHandler: (reason: any) => void): void;
        function on(eventName: string, callback: (value: any) => void): void;

        /**
         * You can use `off` to stop firing a particular callback for an event.
         *
         * If you don't pass a `callback` argument to `off`, ALL callbacks for the
         * event will not be executed when the event fires.
         */
        function off(eventName: string, callback?: (value: any) => void): void;

        /**
         * Use `trigger` to fire custom events.
         *
         * You can also pass a value as a second argument to `trigger` that will be
         * passed as an argument to all event listeners for the event
         */
        function trigger(eventName: string, options?: any, label?: string): void;
    }

    export function configure(
        configName: 'instrument' | 'instrument-with-stack',
        shouldInstrument: boolean
    ): void;
    export function configure(configName: string, value: any): void;

    /**
     * Make a promise that fulfills when every item in the array fulfills, and rejects if (and when) any item rejects.
     * the array passed to all can be a mixture of promise-like objects and other objects.
     * The fulfillment value is an array (in order) of fulfillment values. The rejection value is the first rejection value.
     */
    export function all<T, C>(promises: Thenable<T, C>[]): Promise<T[], C>;

    /**
     *  `RSVP.hash` is similar to `RSVP.all`, but takes an object instead of an array
     *  for its `promises` argument.
     *
     *  Returns a promise that is fulfilled when all the given promises have been
     *  fulfilled, or rejected if any of them become rejected. The returned promise
     *  is fulfilled with a hash that has the same key names as the `promises` object
     *  argument. If any of the values in the object are not promises, they will
     *  simply be copied over to the fulfilled object.
     *
     *  If any of the `promises` given to `RSVP.hash` are rejected, the first promise
     *  that is rejected will be given as the reason to the rejection handler.
     */
    export function hash<T, C>(promises: PromiseHash<T, C>): Promise<T, C>;

    /**
     * `RSVP.map` is similar to JavaScript's native `map` method. `mapFn` is eagerly called
     * meaning that as soon as any promise resolves its value will be passed to `mapFn`.
     * `RSVP.map` returns a promise that will become fulfilled with the result of running
     * `mapFn` on the values the promises become fulfilled with.
     *
     * If any of the `promises` given to `RSVP.map` are rejected, the first promise
     * that is rejected will be given as an argument to the returned promise's
     * rejection handler.
     */
    export function map<T, U, C>(
        promises: Thenable<T, C>[],
        mapFn: (item: T) => U,
        label?: string
    ): Promise<U[], C>;

    /**
     * `RSVP.allSettled` is similar to `RSVP.all`, but instead of implementing
     * a fail-fast method, it waits until all the promises have returned and
     * shows you all the results. This is useful if you want to handle multiple
     * promises' failure states together as a set.
     */
    export function allSettled<T, C>(promises: Thenable<T, C>[]): Promise<PromiseState<T, C>[], C>;

    /**
     * `RSVP.hashSettled` is similar to `RSVP.allSettled`, but takes an object
     * instead of an array for its `promises` argument.
     *
     * Unlike `RSVP.all` or `RSVP.hash`, which implement a fail-fast method,
     * but like `RSVP.allSettled`, `hashSettled` waits until all the
     * constituent promises have returned and then shows you all the results
     * with their states and values/reasons. This is useful if you want to
     * handle multiple promises' failure states together as a set.
     */
    export function hashSettled<T, C>(promises: PromiseHash<T, C>): Promise<SettledHash<T, C>, C>;

    /**
     * Make a Promise that fulfills when any item fulfills, and rejects if any item rejects.
     */
    function race<T, C>(promises: Promise<T, C>[]): Promise<T, C>;

    /**
    * `RSVP.denodeify` takes a "node-style" function and returns a function that
    *  will return an `RSVP.Promise`. You can use `denodeify` in Node.js or the
    *  browser when you'd prefer to use promises over using callbacks. For example,
    * `denodeify` transforms the following:
    *
    * ```
    * let fs = require('fs');
    *
    * fs.readFile('myfile.txt', function(err, data){
    *   if (err) return handleError(err);
    *   handleData(data);
    * });
    * ```
    *
    * into:
    *
    * ```
    * let fs = require('fs');
    * let readFile = RSVP.denodeify(fs.readFile);
    *
    * readFile('myfile.txt').then(handleData, handleError);
    * ```
    *
    * If the node function has multiple success parameters, then denodeify just
    * returns the first one:
    *
    * ```
    * let request = RSVP.denodeify(require('request'));
    *
    * request('http://example.com').then(function(res) {
    *   // ...
    * });
    * ```
    *
    * However, if you need all success parameters, setting denodeify's second
    * parameter to true causes it to return all success parameters as an array:
    *
    * ```
    * let request = RSVP.denodeify(require('request'), true);
    *
    * request('http://example.com').then(function(result) {
    *   // result[0] -> res
    *   // result[1] -> body
    * });
    * ```
    *
    * Or if you pass it an array with names it returns the parameters as a hash:
    *
    * ```
    * let request = RSVP.denodeify(require('request'), ['res', 'body']);
    *
    * request('http://example.com').then(function(result) {
    *   // result.res
    *   // result.body
    * });
    * ```
    */
    export function denodeify<A, T, C>(
        nodeFunction: Function,
        options: boolean | string[]
    ): (...args: A[]) => Promise<T, C>;

    /**
     * `RSVP.defer` returns an object similar to jQuery's `$.Deferred`.
     * `RSVP.defer` should be used when porting over code reliant on `$.Deferred`'s
     * interface. New code should use the `RSVP.Promise` constructor instead.
     *
     * The object returned from `RSVP.defer` is a plain object with three properties:
     * * promise - an `RSVP.Promise`.
     * * reject - a function that causes the `promise` property on this object to become rejected
     * * resolve - a function that causes the `promise` property on this object to become fulfilled.
     */
    export function defer<T, C>(label?: string): Deferred<T, C>;

    /**
     * `RSVP.Promise.reject` returns a promise rejected with the passed `reason`.
     */
    export function reject<C>(reason: C): Promise<never, C>;

    /**
     * `RSVP.Promise.resolve` returns a promise that will become resolved with the
     * passed `value`.
     */
    export function resolve<T>(value: T): Promise<T, never>;

    /**
     * `RSVP.filter` is similar to JavaScript's native `filter` method, except that it
     * waits for all promises to become fulfilled before running the `filterFn` on
     * each item in given to `promises`. `RSVP.filter` returns a promise that will
     * become fulfilled with the result of running `filterFn` on the values the
     * promises become fulfilled with.
     */
    export function filter<T, C>(
        promises: Thenable<T, C>[],
        filterFn: (value: T) => boolean | Promise<any, any>
    ): Promise<T[], C>;

    /**
     * `RSVP.rethrow` will rethrow an error on the next turn of the JavaScript event
     * loop in order to aid debugging.
     *
     * Promises A+ specifies that any exceptions that occur with a promise must be
     * caught by the promises implementation and bubbled to the last handler. For
     * this reason, it is recommended that you always specify a second rejection
     * handler function to `then`. However, `RSVP.rethrow` will throw the exception
     * outside of the promise, so it bubbles up to your console if in the browser,
     * or domain/cause uncaught exception in Node. `rethrow` will also throw the
     * error again so the error can be handled by the promise per the spec.
     */
    export function rethrow<C>(reason: C): void;
}

export default RSVP;
