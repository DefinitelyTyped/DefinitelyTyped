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

        all: typeof Bluebird.all;
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
        race: typeof Bluebird.race;
        reduce: typeof Bluebird.reduce;
        reject: typeof Bluebird.reject;
        resolve: typeof Bluebird.resolve;
        some: typeof Bluebird.some;
        try: typeof Bluebird.try;
        using: typeof Bluebird.using;
    }

    /*
     * Declare the `Promise` variable. This is needed for es5 only and is a no-op for all other targets.
     */
    var Promise: PromiseConstructor;
}
