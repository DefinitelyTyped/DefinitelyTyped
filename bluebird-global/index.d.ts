// Type definitions for bluebird 3.0
// Project: https://github.com/petkaantonov/bluebird
// Definitions by: d-ph <https://github.com/d-ph>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*
 * 1. Why use `bluebird-global` instead of `bluebird`?
 *
 * If you want to leverage the fact, that bluebird polyfills the global Promise in the browser, then
 * you need to tell TypeScript about this. The following declaration file does exactly that.
 *
 * 2. How to use it?
 *
 * Add `bluebird-global` to the `types` array in your `tsconfig.json` like this:
 *
 * {
 *   "compilerOptions": {
 *     "types": [
 *       "bluebird-global"
 *     ],
 *   }
 * }
 *
 * 3. Why so much effort?
 *
 * If a promise-polyfilling library wants to play nicely with TypeScript, it needs to augment
 * the Promise<T> and PromiseConstructor interfaces defined in the standard ts library.
 * For various reasons this couldn't be done in The `bluebird` typings.
 *
 */

import * as Bluebird from "bluebird";

declare global {

    /*
     * Patch all instance method
     */
    interface Promise<T> extends Bluebird<T> {}

    /*
     * Patch all static methods and the constructor
     */
    interface PromiseConstructor {
        new <T>(callback: (resolve: (thenableOrResult?: T | Bluebird.Thenable<T>) => void, reject: (error?: any) => void, onCancel?: (callback: () => void) => void) => void): Promise<T>;

        try: typeof Bluebird.try;
        attempt: typeof Bluebird.attempt;
        method: typeof Bluebird.method;
        resolve: typeof Bluebird.resolve;
        reject: typeof Bluebird.reject;
        defer: typeof Bluebird.defer;
        cast: typeof Bluebird.cast;
        bind: typeof Bluebird.bind;
        is: typeof Bluebird.is;
        longStackTraces: typeof Bluebird.longStackTraces;
        delay: typeof Bluebird.delay;
        promisify: typeof Bluebird.promisify;
        promisifyAll: typeof Bluebird.promisifyAll;
        fromNode: typeof Bluebird.fromNode;
        fromCallback: typeof Bluebird.fromCallback;
        coroutine: typeof Bluebird.coroutine;
        onPossiblyUnhandledRejection: typeof Bluebird.onPossiblyUnhandledRejection;
        all: typeof Bluebird.all;
        props: typeof Bluebird.props;
        any: typeof Bluebird.any;
        race: typeof Bluebird.race;
        some: typeof Bluebird.some;
        join: typeof Bluebird.join;
        map: typeof Bluebird.map;
        reduce: typeof Bluebird.reduce;
        filter: typeof Bluebird.filter;
        each: typeof Bluebird.each;
        mapSeries: typeof Bluebird.mapSeries;
        using: typeof Bluebird.using;
        config: typeof Bluebird.config;
    }

    /*
     * Declare the `Promise` variable. This is needed for es5 only and is a no-op for all other targets.
     */
    var Promise: PromiseConstructor;

}

