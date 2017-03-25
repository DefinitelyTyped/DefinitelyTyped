// Type definitions for RSVP 3.3.3
// Project: https://github.com/tildeio/rsvp.js
// Definitions by: Taylor Brown <https://github.com/Taytay>, Mikael Kohlmyr <https://github.com/mkohlmyr>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Some of this file was taken from the type definitions for es6-promise https://github.com/borisyankov/DefinitelyTyped/blob/master/es6-promise/es6-promise.d.ts
// Credit for that file goes to: François de Campredon <https://github.com/fdecampredon/>

// Some of this file was taken from the type definitions for Q : https://github.com/borisyankov/DefinitelyTyped/blob/master/q/Q.d.ts
// Credit for that file goes to: Barrie Nemetchek <https://github.com/bnemetchek>, Andrew Gaspar <https://github.com/AndrewGaspar/>, John Reilly <https://github.com/johnnyreilly>

declare module RSVP {

    interface Thenable<R> {
        then<U>(onFulfilled?:(value:R) => Thenable<U>, onRejected?:(error:any) => Thenable<U>): Thenable<U>;
        then<U>(onFulfilled?:(value:R) => Thenable<U>, onRejected?:(error:any) => U): Thenable<U>;
        then<U>(onFulfilled?:(value:R) => Thenable<U>, onRejected?:(error:any) => void): Thenable<U>;
        then<U>(onFulfilled?:(value:R) => U, onRejected?:(error:any) => Thenable<U>): Thenable<U>;
        then<U>(onFulfilled?:(value:R) => U, onRejected?:(error:any) => U): Thenable<U>;
        then<U>(onFulfilled?:(value:R) => U, onRejected?:(error:any) => void): Thenable<U>;
    }

    interface Deferred<T> {
        promise: Promise<T>;
        resolve(value: T): void;
        reject(reason: any): void;
    }

    class Promise<R> implements Thenable<R> {
        /**
         * If you call resolve in the body of the callback passed to the constructor,
         * your promise is fulfilled with result object passed to resolve.
         * If you call reject your promise is rejected with the object passed to resolve.
         * For consistency and debugging (eg stack traces), obj should be an instanceof Error.
         * Any errors thrown in the constructor callback will be implicitly passed to reject().
         */
        constructor(callback:(resolve:(result?:R) => void, reject:(error:any) => void) => void, label? : string);

        /**
         * If you call resolve in the body of the callback passed to the constructor,
         * your promise will be fulfilled/rejected with the outcome of thenable passed to resolve.
         * If you call reject your promise is rejected with the object passed to resolve.
         * For consistency and debugging (eg stack traces), obj should be an instanceof Error.
         * Any errors thrown in the constructor callback will be implicitly passed to reject().
         */
        constructor(callback:(resolve:(thenable?:Thenable<R>) => void, reject:(error:any) => void) => void, label? : string);

        /**
         * onFulfilled is called when/if "promise" resolves. onRejected is called when/if "promise" rejects.
         * Both are optional, if either/both are omitted the next onFulfilled/onRejected in the chain is called.
         * Both callbacks have a single parameter , the fulfillment value or rejection reason.
         * "then" returns a new promise equivalent to the value you return from onFulfilled/onRejected after being passed through Promise.resolve.
         * If an error is thrown in the callback, the returned promise rejects with that error.
         *
         * @param onFulfilled called when/if "promise" resolves
         * @param onRejected called when/if "promise" rejects
         */
        then<U>(onFulfilled?:(value:R) => Thenable<U>, onRejected?:(error:any) => Thenable<U>):Promise<U>;

        /**
         * onFulfilled is called when/if "promise" resolves. onRejected is called when/if "promise" rejects.
         * Both are optional, if either/both are omitted the next onFulfilled/onRejected in the chain is called.
         * Both callbacks have a single parameter , the fulfillment value or rejection reason.
         * "then" returns a new promise equivalent to the value you return from onFulfilled/onRejected after being passed through Promise.resolve.
         * If an error is thrown in the callback, the returned promise rejects with that error.
         *
         * @param onFulfilled called when/if "promise" resolves
         * @param onRejected called when/if "promise" rejects
         */
        then<U>(onFulfilled?:(value:R) => Thenable<U>, onRejected?:(error:any) => U):Promise<U>;

        /**
         * onFulfilled is called when/if "promise" resolves. onRejected is called when/if "promise" rejects.
         * Both are optional, if either/both are omitted the next onFulfilled/onRejected in the chain is called.
         * Both callbacks have a single parameter , the fulfillment value or rejection reason.
         * "then" returns a new promise equivalent to the value you return from onFulfilled/onRejected after being passed through Promise.resolve.
         * If an error is thrown in the callback, the returned promise rejects with that error.
         *
         * @param onFulfilled called when/if "promise" resolves
         * @param onRejected called when/if "promise" rejects
         */
        then<U>(onFulfilled?:(value:R) => Thenable<U>, onRejected?:(error:any) => void):Promise<U>;

        /**
         * onFulfilled is called when/if "promise" resolves. onRejected is called when/if "promise" rejects.
         * Both are optional, if either/both are omitted the next onFulfilled/onRejected in the chain is called.
         * Both callbacks have a single parameter , the fulfillment value or rejection reason.
         * "then" returns a new promise equivalent to the value you return from onFulfilled/onRejected after being passed through Promise.resolve.
         * If an error is thrown in the callback, the returned promise rejects with that error.
         *
         * @param onFulfilled called when/if "promise" resolves
         * @param onRejected called when/if "promise" rejects
         */
        then<U>(onFulfilled?:(value:R) => U, onRejected?:(error:any) => Thenable<U>):Promise<U>;

        /**
         * onFulfilled is called when/if "promise" resolves. onRejected is called when/if "promise" rejects.
         * Both are optional, if either/both are omitted the next onFulfilled/onRejected in the chain is called.
         * Both callbacks have a single parameter , the fulfillment value or rejection reason.
         * "then" returns a new promise equivalent to the value you return from onFulfilled/onRejected after being passed through Promise.resolve.
         * If an error is thrown in the callback, the returned promise rejects with that error.
         *
         * @param onFulfilled called when/if "promise" resolves
         * @param onRejected called when/if "promise" rejects
         */
        then<U>(onFulfilled?:(value:R) => U, onRejected?:(error:any) => U):Promise<U>;

        /**
         * onFulfilled is called when/if "promise" resolves. onRejected is called when/if "promise" rejects.
         * Both are optional, if either/both are omitted the next onFulfilled/onRejected in the chain is called.
         * Both callbacks have a single parameter , the fulfillment value or rejection reason.
         * "then" returns a new promise equivalent to the value you return from onFulfilled/onRejected after being passed through Promise.resolve.
         * If an error is thrown in the callback, the returned promise rejects with that error.
         *
         * @param onFulfilled called when/if "promise" resolves
         * @param onRejected called when/if "promise" rejects
         */
        then<U>(onFulfilled?:(value:R) => U, onRejected?:(error:any) => void):Promise<U>;

        /**
         * Sugar for promise.then(undefined, onRejected)
         *
         * @param onRejected called when/if "promise" rejects
         */
        catch<U>(onRejected?:(error:any) => Thenable<U>):Promise<U>;

        /**
         * Sugar for promise.then(undefined, onRejected)
         *
         * @param onRejected called when/if "promise" rejects
         */
        catch<U>(onRejected?:(error:any) => U):Promise<U>;

        /**
         * Sugar for promise.then(undefined, onRejected)
         *
         * @param onRejected called when/if "promise" rejects
         */
        catch<U>(onRejected?:(error:any) => void):Promise<U>;

        finally(finallyCallback: () => any): Promise<R>;

        static all<T>(promises: Thenable<T>[]): Promise<T[]>;
        static all<T>(promises: any[]): Promise<T[]>;
        static race<R>(promises:Promise<R>[]):Promise<R>;

        /**
         @method resolve
         @param {Any} value value that the returned promise will be resolved with
         @param {String} label optional string for identifying the returned promise.
         Useful for tooling.
         @return {Promise} a promise that will become fulfilled with the given
         `value`
         */
        static resolve<T>(object: Thenable<T>): Promise<T>;
        static resolve<T>(object: T): Promise<T>;

        /**
         @method cast (Deprecated in favor of resolve
         @param {Any} value value that the returned promise will be resolved with
         @param {String} label optional string for identifying the returned promise.
         Useful for tooling.
         @return {Promise} a promise that will become fulfilled with the given
         `value`
         */
        static cast<T>(object: Thenable<T>, label? : string): Promise<T>;
        static cast<T>(object: T, label? : string): Promise<T>;

        /**
         `RSVP.Promise.reject` returns a promise rejected with the passed `reason`.
         */
        static reject(reason?: any): Promise<any>;
    }

    interface PromiseState<T> {
        state: string /* "fulfilled", "rejected", "pending" */;
        value?: T;
        reason?: any;
    }

    interface InstrumentEvent{
        guid:string;      // guid of promise. Must be globally unique, not just within the implementation
        childGuid:string; // child of child promise (for chained via `then`)
        eventName:string; // one of ['created', 'chained', 'fulfilled', 'rejected']
        detail:any;    // fulfillment value or rejection reason, if applicable
        label:string;     // label passed to promise's constructor
        timeStamp:number; // milliseconds elapsed since 1 January 1970 00:00:00 UTC up until now
    }

    export function on(eventName : string, callback: (value:any)=>void) : void;
    export function on(eventName : "error", errorHandler: (reason:any)=>void): void;
    export function on(eventName : "created", listener: (event:InstrumentEvent)=>void): void;
    export function on(eventName : "chained", listener: (event:InstrumentEvent)=>void): void;
    export function on(eventName : "fulfilled", listener: (event:InstrumentEvent)=>void): void;
    export function on(eventName : "rejected", listener: (event:InstrumentEvent)=>void): void;

    export function configure(configName : string, value : any): void;
    export function configure(configName : "instrument", shouldInstrument : boolean): void;

    /**
     * configure('onerror', handler) is deprecated in favor of on('error', handler)
     * @param configName
     * @param errorHandler
     */
    export function configure(configName : "onerror", errorHandler : (reason:any)=>void): void;

    /**
     * Make a promise that fulfills when every item in the array fulfills, and rejects if (and when) any item rejects.
     * the array passed to all can be a mixture of promise-like objects and other objects.
     * The fulfillment value is an array (in order) of fulfillment values. The rejection value is the first rejection value.
     */
    export function all<T>(promises: Thenable<T>[]): Promise<T[]>;
    export function all<T>(promises: any[]): Promise<T[]>;
    /**
     * Make a promise that fulfills when every item in the array fulfills, and rejects if (and when) any item rejects.
     * the array passed to all can be a mixture of promise-like objects and other objects.
     * The fulfillment value is an array (in order) of fulfillment values. The rejection value is the first rejection value.
     * The key difference to the all() function is that both the fulfillment value and the argument to the hash() function
     * are object literals. This allows you to simply reference the results directly off the returned object without
     * having to remember the initial order like you would with all().
     *
     */
    export function hash<T>(promises: { [key: string]: Thenable<T> }): Promise<{ [key: string]: T }>;
    export function hash<T>(promises: { [key: string]: any }): Promise<{ [key: string]: T }>;

    /**
     `RSVP.map` is similar to JavaScript's native `map` method, except that it
     waits for all promises to become fulfilled before running the `mapFn` on
     each item in given to `promises`. `RSVP.map` returns a promise that will
     become fulfilled with the result of running `mapFn` on the values the promises
     become fulfilled with.
     */
    export function map<T>(promises: Thenable<T>[], mapFn : (item:any)=>any, label? : string): Promise<T[]>;
    export function map<T>(promises: any[], mapFn : (item:any)=>any, label? : string): Promise<T[]>;


    /**
     * `RSVP.allSettled` is similar to `RSVP.all`, but instead of implementing
     * a fail-fast method, it waits until all the promises have returned and
     * shows you all the results. This is useful if you want to handle multiple
     * promises' failure states together as a set.
     */
    export function allSettled<T>(promises: Thenable<T>[]): Promise<PromiseState<T>[]>;
    export function allSettled<T>(promises: any[]): Promise<PromiseState<T>[]>;

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
    export function hashSettled<T>(promises: Thenable<T>[]): Promise<PromiseState<T>[]>;
    export function hashSettled<T>(promises: any[]): Promise<PromiseState<T>[]>;

    /**
     * Make a Promise that fulfills when any item fulfills, and rejects if any item rejects.
     */
    function race<R>(promises:Promise<R>[]):Promise<R>;

    /**
     * `RSVP.denodeify` takes a "node-style" function and returns a function that
     * will return an `RSVP.Promise`. You can use `denodeify` in Node.js or the
     *  browser when you'd prefer to use promises over using callbacks. For example,
     * `denodeify` transforms the following:
     */
    export function denodeify<T>(nodeFunction: Function, ...args: any[]): (...args: any[]) => Promise<T>;

    /**
     * Favor the Promise Constructor instead (if possible)
     *
     */
    export function defer<T>(): Deferred<T>;


    /**
     `RSVP.Promise.reject` returns a promise rejected with the passed `reason`.
     */
    export function reject(reason?: any): Promise<any>;

    /**
     `RSVP.Promise.resolve` returns a promise that will become resolved with the
     passed `value`.
     */
    export function resolve<T>(object: Thenable<T>): Promise<T>;
    export function resolve<T>(object: T): Promise<T>;

    /**
     * `RSVP.filter` is similar to JavaScript's native `filter` method, except that it
     * waits for all promises to become fulfilled before running the `filterFn` on
     * each item in given to `promises`. `RSVP.filter` returns a promise that will
     * become fulfilled with the result of running `filterFn` on the values the
     * promises become fulfilled with.
     */
    export function filter<T>(promises: Thenable<T>[], filterFn:(value:any)=>any): Promise<T[]>;

    /**
     `RSVP.rethrow` will rethrow an error on the next turn of the JavaScript event
     loop in order to aid debugging.

     Promises A+ specifies that any exceptions that occur with a promise must be
     caught by the promises implementation and bubbled to the last handler. For
     this reason, it is recommended that you always specify a second rejection
     handler function to `then`. However, `RSVP.rethrow` will throw the exception
     outside of the promise, so it bubbles up to your console if in the browser,
     or domain/cause uncaught exception in Node. `rethrow` will also throw the
     error again so the error can be handled by the promise per the spec.
     */
    export function rethrow(reason : any):void;

}


declare module "rsvp" {
    export = RSVP;
}
