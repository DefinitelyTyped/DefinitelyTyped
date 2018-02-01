// Type definitions for bluebird 3.5
// Project: https://github.com/petkaantonov/bluebird
// Definitions by: d-ph <https://github.com/d-ph>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/*
 * 1. Why use `bluebird-global` instead of `bluebird`?
 *
 * If you want to leverage the fact, that bluebird polyfills the global Promise in the browser, then
 * you need to tell TypeScript about this. The following declaration file does exactly that.
 *
 * 2. How to use it?
 *
 * It should just work, but there are a couple of points to be wary about:
 *
 * a) If you already use `compilerOptions.types` in your `tsconfig.json`, then add `bluebird-global`
 *    to the list:
 *
 *    {
 *      "compilerOptions": {
 *        "types": [
 *          (other types ...)
 *
 *          "bluebird-global"
 *        ],
 *      }
 *    }
 *
 * b) Be aware, that you still need to get the global Promise symbol to be replaced with bluebird.js
 *    in the runtime. Do this by either importing bluebird.js via a `<script />` tag in your html or
 *    via importing it in your js entry file AND assigning it to the global Promise symbol.
 *
 * 3. Why so much effort?
 *
 * If a promise-polyfilling library wants to play nicely with TypeScript, it needs to augment
 * the Promise<T> and PromiseConstructor interfaces defined in the standard ts library.
 * For various reasons this couldn't be done in The `bluebird` typings.
 *
 * 4. Contributors: After changing this file please manually test these cases (via altering ./tsconfig.json ):
 *   a. target es5, no `lib` key
 *   b. target es6, no `lib` key
 *   c. target es5, latest "es20xx", e.g. "es2017"
 *   d. target es6, latest "es20xx", e.g. "es2017"
 */

import * as Bluebird from "bluebird";

declare global {
    /*
     * Patch all instance method
     */
    interface Promise<T> {
        all: typeof Bluebird.prototype.all;
        any: typeof Bluebird.prototype.any;
        asCallback: typeof Bluebird.prototype.asCallback;
        bind: typeof Bluebird.prototype.bind;
        call: typeof Bluebird.prototype.call;
        cancel: typeof Bluebird.prototype.cancel;
        // catch: typeof Bluebird.prototype.catch;
        caught: typeof Bluebird.prototype.caught;
        delay: typeof Bluebird.prototype.delay;
        disposer: typeof Bluebird.prototype.disposer;
        done: typeof Bluebird.prototype.done;
        each: typeof Bluebird.prototype.each;
        error: typeof Bluebird.prototype.error;
        filter: typeof Bluebird.prototype.filter;
        // finally: typeof Bluebird.prototype.finally;
        get: typeof Bluebird.prototype.get;
        isCancelled: typeof Bluebird.prototype.isCancelled;
        isFulfilled: typeof Bluebird.prototype.isFulfilled;
        isPending: typeof Bluebird.prototype.isPending;
        isRejected: typeof Bluebird.prototype.isRejected;
        isResolved: typeof Bluebird.prototype.isResolved;
        lastly: typeof Bluebird.prototype.lastly;
        map: typeof Bluebird.prototype.map;
        mapSeries: typeof Bluebird.prototype.mapSeries;
        nodeify: typeof Bluebird.prototype.nodeify;
        props: typeof Bluebird.prototype.props;
        race: typeof Bluebird.prototype.race;
        reason: typeof Bluebird.prototype.reason;
        reduce: typeof Bluebird.prototype.reduce;
        reflect: typeof Bluebird.prototype.reflect;
        return: typeof Bluebird.prototype.return;
        some: typeof Bluebird.prototype.some;
        spread: typeof Bluebird.prototype.spread;
        suppressUnhandledRejections: typeof Bluebird.prototype.suppressUnhandledRejections;
        tap: typeof Bluebird.prototype.tap;
        tapCatch: typeof Bluebird.prototype.tapCatch;
        // then: typeof Bluebird.prototype.then;
        thenReturn: typeof Bluebird.prototype.thenReturn;
        thenThrow: typeof Bluebird.prototype.thenThrow;
        catchReturn: typeof Bluebird.prototype.catchReturn;
        catchThrow: typeof Bluebird.prototype.catchThrow;
        throw: typeof Bluebird.prototype.throw;
        timeout: typeof Bluebird.prototype.timeout;
        toJSON: typeof Bluebird.prototype.toJSON;
        toString: typeof Bluebird.prototype.toString;
        value: typeof Bluebird.prototype.value;

        /*
         * Copy&paste ::then and ::catch from lib.es2015.promise.d.ts, because Bluebird's typings are not
         * in line with the standard lib.
         *
         * This is only needed for es5 target, which doesn't include the lib.es2015.promise.d.ts typings.
         *
         * @todo Make Bluebird's typings be in line with the standard lib.
         */
        then(onfulfilled?: ((value: T) => T | PromiseLike<T>) | undefined | null, onrejected?: ((reason: any) => T | PromiseLike<T>) | undefined | null): Promise<T>;
        then<TResult>(onfulfilled: ((value: T) => T | PromiseLike<T>) | undefined | null, onrejected: (reason: any) => TResult | PromiseLike<TResult>): Promise<T | TResult>;
        then<TResult>(onfulfilled: (value: T) => TResult | PromiseLike<TResult>, onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<TResult>;
        then<TResult1, TResult2>(onfulfilled: (value: T) => TResult1 | PromiseLike<TResult1>, onrejected: (reason: any) => TResult2 | PromiseLike<TResult2>): Promise<TResult1 | TResult2>;
        catch(onrejected?: ((reason: any) => T | PromiseLike<T>) | undefined | null): Promise<T>;
        catch<TResult>(onrejected: (reason: any) => TResult | PromiseLike<TResult>): Promise<T | TResult>;

        /*
         * TypeScript disallows adding overrides via `catch: typeof Bluebird.prototype.catch`. Copy&paste them then.
         *
         * @todo Duplication of code is never ideal. See whether there's a better way of achieving this.
         */
        catch(predicate: (error: any) => boolean, onReject: (error: any) => T | PromiseLike<T> | void | PromiseLike<void>): Bluebird<T>;
        catch<U>(predicate: (error: any) => boolean, onReject: (error: any) => U | PromiseLike<U>): Bluebird<U | T>;
        catch<E extends Error>(ErrorClass: new (...args: any[]) => E, onReject: (error: E) => T | PromiseLike<T> | void | PromiseLike<void>): Bluebird<T>;
        catch<E extends Error, U>(ErrorClass: new (...args: any[]) => E, onReject: (error: E) => U | PromiseLike<U>): Bluebird<U | T>;
        catch(predicate: Object, onReject: (error: any) => T | PromiseLike<T> | void | PromiseLike<void>): Bluebird<T>;
        catch<U>(predicate: Object, onReject: (error: any) => U | PromiseLike<U>): Bluebird<U | T>;

        /*
         * See comments above `then` for the reason why this is needed. Taken from esnext.promise.d.ts.
         */
        finally(onfinally?: (() => void) | undefined | null): Bluebird<T>;
    }

    /*
     * Patch all static methods and the constructor
     */
    interface PromiseConstructor {
        new <T>(callback: (resolve: (thenableOrResult?: T | PromiseLike<T>) => void, reject: (error?: any) => void, onCancel?: (callback: () => void) => void) => void): Promise<T>;

        // all: typeof Bluebird.all;
        any: typeof Bluebird.any;
        attempt: typeof Bluebird.attempt;
        bind: typeof Bluebird.bind;
        cast: typeof Bluebird.cast;
        config: typeof Bluebird.config;
        coroutine: typeof Bluebird.coroutine;
        defer: typeof Bluebird.defer;
        delay: typeof Bluebird.delay;
        each: typeof Bluebird.each;
        filter: typeof Bluebird.filter;
        fromCallback: typeof Bluebird.fromCallback;
        fromNode: typeof Bluebird.fromNode;
        is: typeof Bluebird.is;
        join: typeof Bluebird.join;
        longStackTraces: typeof Bluebird.longStackTraces;
        map: typeof Bluebird.map;
        mapSeries: typeof Bluebird.mapSeries;
        method: typeof Bluebird.method;
        onPossiblyUnhandledRejection: typeof Bluebird.onPossiblyUnhandledRejection;
        promisify: typeof Bluebird.promisify;
        promisifyAll: typeof Bluebird.promisifyAll;
        props: typeof Bluebird.props;
        // race: typeof Bluebird.race;
        reduce: typeof Bluebird.reduce;
        // reject: typeof Bluebird.reject;
        // resolve: typeof Bluebird.resolve;
        some: typeof Bluebird.some;
        try: typeof Bluebird.try;
        using: typeof Bluebird.using;

        /*
         * Copy&paste from lib.es2015.promise.d.ts, because Bluebird's typings are not in line with the standard lib.
         *
         * This is only needed for es5 target, which doesn't include the lib.es2015.promise.d.ts typings.
         *
         * @todo Make Bluebird's typings be in line with the standard lib.
         */
        all<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike <T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>, T9 | PromiseLike<T9>, T10 | PromiseLike<T10>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]>;
        all<T1, T2, T3, T4, T5, T6, T7, T8, T9>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike <T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>, T9 | PromiseLike<T9>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9]>;
        all<T1, T2, T3, T4, T5, T6, T7, T8>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike <T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8]>;
        all<T1, T2, T3, T4, T5, T6, T7>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike <T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>]): Promise<[T1, T2, T3, T4, T5, T6, T7]>;
        all<T1, T2, T3, T4, T5, T6>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike <T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>]): Promise<[T1, T2, T3, T4, T5, T6]>;
        all<T1, T2, T3, T4, T5>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike <T4>, T5 | PromiseLike<T5>]): Promise<[T1, T2, T3, T4, T5]>;
        all<T1, T2, T3, T4>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike <T4>]): Promise<[T1, T2, T3, T4]>;
        all<T1, T2, T3>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>]): Promise<[T1, T2, T3]>;
        all<T1, T2>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>]): Promise<[T1, T2]>;
        all<T>(values: (T | PromiseLike<T>)[]): Promise<T[]>;
        race<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>, T9 | PromiseLike<T9>, T10 | PromiseLike<T10>]): Promise<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10>;
        race<T1, T2, T3, T4, T5, T6, T7, T8, T9>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>, T9 | PromiseLike<T9>]): Promise<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9>;
        race<T1, T2, T3, T4, T5, T6, T7, T8>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>]): Promise<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8>;
        race<T1, T2, T3, T4, T5, T6, T7>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>]): Promise<T1 | T2 | T3 | T4 | T5 | T6 | T7>;
        race<T1, T2, T3, T4, T5, T6>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>]): Promise<T1 | T2 | T3 | T4 | T5 | T6>;
        race<T1, T2, T3, T4, T5>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>]): Promise<T1 | T2 | T3 | T4 | T5>;
        race<T1, T2, T3, T4>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>]): Promise<T1 | T2 | T3 | T4>;
        race<T1, T2, T3>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>]): Promise<T1 | T2 | T3>;
        race<T1, T2>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>]): Promise<T1 | T2>;
        race<T>(values: (T | PromiseLike<T>)[]): Promise<T>;
        reject(reason: any): Promise<never>;
        reject<T>(reason: any): Promise<T>;
        resolve<T>(value: T | PromiseLike<T>): Promise<T>;
        resolve(): Promise<void>;
    }

    /*
     * Declare the `Promise` variable. This is needed for es5 only and is a no-op for all other targets.
     */
    var Promise: PromiseConstructor;
}
