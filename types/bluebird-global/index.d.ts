// Type definitions for bluebird 3.5
// Project: https://github.com/petkaantonov/bluebird
// Definitions by: d-ph <https://github.com/d-ph>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/*
 * 1. Why use `bluebird-global` instead of `bluebird`?
 *
 * If you want to leverage the fact, that bluebird polyfills the global Promise in the browser, then
 * you need to tell TypeScript about this. The following declaration file does exactly that.
 *
 * 1.1. Why you might not want to use `bluebird-global` instead of `bluebird`.
 *
 * Because of how these typings tell TypeScript about bluebird's Promise methods, it is not
 * possible to cast global Promises to Bluebird promises in your code. In other words, you won't
 * be able to do the following (even though it's possible at the runtime):
 *
 *   let bluebirdPromise: Bluebird<string> = new Promise<string>(() => { return 'Lorem ipsum'; });
 *
 * If you need to, you can walk-around this by constructing a new Bluebird promise over an instance
 * of the global Promise, like so:
 *
 *   let bluebirdPromise: Bluebird<string> = Bluebird.resolve(
 *     new Promise<string>(() => { return 'Lorem ipsum'; })
 *   );
 *
 * So the bottom line is: if you use these typings, then be mindful when you try to mix the global
 * Promises with the Bluebird promises. You can avoid this problem by just settling on using either
 * of them and not both of them at the same time.
 *
 * 1.2. Further limitations of `bluebird-global` typings: the return type of Bluebird's methods.
 *
 * Due to the fact of how bluebird-specific methods are exposed on the global Promise, the
 * return type of those methods is Bluebird<T> instead of Promise<T>. This is relevant in the
 * following case:
 *
 *   function createDelayedPromise(): Promise<void> {
 *     return Promise.delay(250);
 *   }
 *
 * Since Promise.delay() returns a Bluebird<void> and the function is typed to return a Promise<void>,
 * an implicit cast is performed from Bluebird<void> to Promise<void>. And since an instance
 * of Bluebird isn't and instance of Promise (due to how `bluebird-global` works), this implicit
 * cast fails to compile. In order to walk-around this problem, the following explicit cast should
 * be used:
 *
 *   function createDelayedPromise(): Promise<void> {
 *     return <Promise<void>> Promise.delay(250);
 *   }
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
 * c) if you're `--target`ing "es5", then you'll need to include the "es2015.iterable" lib typings to
 *    let the bluebird.d.ts compile (requirement for Map, Iterable & friends). This is only for the
 *    compile-time, since bluebird doesn't require these es6 features to be present in the runtime.
 *    To summarise: when targeting "es5", make sure you have the follwing "lib" config in your tsconfig.json:
 *
 *    {
 *      "compilerOptions": {
 *        "lib": [
 *          "es5",
 *          "es2015.iterable",
 *          "dom"
 *          (more, if you need...)
 *        ],
 *      }
 *    }
 *
 * 3. Why so much effort?
 *
 * If a promise-polyfilling library wants to play nicely with TypeScript, it needs to augment
 * the Promise<T> and PromiseConstructor interfaces defined in the standard ts library.
 * For various reasons this couldn't be done in The `bluebird` typings.
 *
 * 4. Contributors: After changing this file please manually test these cases (via altering ./tsconfig.json ):
 *   a. target es5, with the following `lib` keys: "es5", "es2015.iterable", "dom"
 *   b. target es6, no `lib` key
 *   c. target es5, latest "es20xx", e.g. "es2017"
 *   d. target es6, latest "es20xx", e.g. "es2017"
 */

/*
 * @todo When dropping TS 2.x support, uncomment the following triple-slash directives and
 * remove the copy&paste from this file (marked with #std-lib-copy&paste-to-remove)
 *
 * TS 2.x support should be dropped once bluebird's typings stop compiling on 2.x (i.e.
 * once bluebird's typings stop supporting TS 2.x)
 */
/* /// <reference lib="es5" /> */
/* /// <reference lib="es2015.promise" /> */
/* /// <reference lib="es2018.promise" /> */

import Bluebird = require("bluebird");

declare global {
    /*
     * Patch all instance method
     */
    interface Promise<T> {
        all: Bluebird<T>["all"];
        any: Bluebird<T>["any"];
        asCallback: Bluebird<T>["asCallback"];
        bind: Bluebird<T>["bind"];
        call: Bluebird<T>["call"];
        cancel: Bluebird<T>["cancel"];
        // catch: Bluebird<T>["catch"]; // Provided by lib.es5.d.ts
        caught: Bluebird<T>["caught"];
        delay: Bluebird<T>["delay"];
        disposer: Bluebird<T>["disposer"];
        done: Bluebird<T>["done"];
        each: Bluebird<T>["each"];
        error: Bluebird<T>["error"];
        filter: Bluebird<T>["filter"];
        // finally: Bluebird<T>["finally"]; // Provided by lib.es2018.promise.d.ts
        get: Bluebird<T>["get"];
        isCancelled: Bluebird<T>["isCancelled"];
        isFulfilled: Bluebird<T>["isFulfilled"];
        isPending: Bluebird<T>["isPending"];
        isRejected: Bluebird<T>["isRejected"];
        isResolved: Bluebird<T>["isResolved"];
        lastly: Bluebird<T>["lastly"];
        map: Bluebird<T>["map"];
        mapSeries: Bluebird<T>["mapSeries"];
        nodeify: Bluebird<T>["nodeify"];
        props: Bluebird<T>["props"];
        race: Bluebird<T>["race"];
        reason: Bluebird<T>["reason"];
        reduce: Bluebird<T>["reduce"];
        reflect: Bluebird<T>["reflect"];
        return: Bluebird<T>["return"];
        some: Bluebird<T>["some"];
        spread: Bluebird<T>["spread"];
        suppressUnhandledRejections: Bluebird<T>["suppressUnhandledRejections"];
        tap: Bluebird<T>["tap"];
        tapCatch: Bluebird<T>["tapCatch"];
        // then: Bluebird<T>["then"]; // Provided by lib.es5.d.ts
        thenReturn: Bluebird<T>["thenReturn"];
        thenThrow: Bluebird<T>["thenThrow"];
        catchReturn: Bluebird<T>["catchReturn"];
        catchThrow: Bluebird<T>["catchThrow"];
        throw: Bluebird<T>["throw"];
        timeout: Bluebird<T>["timeout"];
        toJSON: Bluebird<T>["toJSON"];
        toString: Bluebird<T>["toString"];
        value: Bluebird<T>["value"];

        /*
         * Copy&paste ::then and ::catch from lib.es5.promise.d.ts, because Bluebird's typings are not
         * in line with the standard lib.
         *
         * #std-lib-copy&paste-to-remove
         *
         * @todo See the comment near the top of the file about code marked with #std-lib-copy&paste-to-remove
         */
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
            onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
        ): Promise<TResult1 | TResult2>;
        catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;

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
         * See comments above `then` for the reason why this is needed. Taken from es2018.promise.d.ts.
         *
         * #std-lib-copy&paste-to-remove
         *
         * @todo See the comment near the top of the file about code marked with #std-lib-copy&paste-to-remove
         */
        finally(onfinally?: (() => void) | undefined | null): Promise<T>;
    }

    /*
     * Patch all static methods and the constructor
     */
    interface PromiseConstructor {
        new <T>(callback: (resolve: (thenableOrResult?: T | PromiseLike<T>) => void, reject: (error?: any) => void, onCancel?: (callback: () => void) => void) => void): Promise<T>;

        // all: typeof Bluebird.all; // Provided by lib.es2015.d.ts
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
        // race: typeof Bluebird.race; // Provided by lib.es2015.d.ts
        reduce: typeof Bluebird.reduce;
        // reject: typeof Bluebird.reject; // Provided by lib.es2015.d.ts
        // resolve: typeof Bluebird.resolve; // Provided by lib.es2015.d.ts
        some: typeof Bluebird.some;
        try: typeof Bluebird.try;
        using: typeof Bluebird.using;

        /*
         * Copy&paste from lib.es2015.promise.d.ts, because Bluebird's typings are not in line with the standard lib.
         *
         * #std-lib-copy&paste-to-remove
         *
         * @todo See the comment near the top of the file about code marked with #std-lib-copy&paste-to-remove
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
     *
     * #std-lib-copy&paste-to-remove
     *
     * @todo See the comment near the top of the file about code marked with #std-lib-copy&paste-to-remove
     */
    var Promise: PromiseConstructor;
}
