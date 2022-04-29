// Type definitions for gensync 1.0
// Project: https://github.com/loganfsmyth/gensync
// Definitions by: Jake Bailey <https://github.com/jakebailey>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.0

import { GensyncFunction, GensyncGenerator, OptionsWithAsync, OptionsWithErrback } from '.';

/**
 * Returns a function that can be "await"-ed in another `gensync` generator
 * function, or executed via
 *
 *   - `.sync(...args)` - Returns the computed value, or throws.
 *   - `.async(...args)` - Returns a promise for the computed value.
 *   - `.errback(...args, (err, result) => {})` - Calls the callback with the computed value, or error.
 * @param fn A generator function
 */
declare function gensync<A extends unknown[], R>(
    fn: (...args: A) => Generator<GensyncGenerator, R>,
): GensyncFunction<A, R>;

/**
 * Returns a function that can be "await"-ed in another `gensync` generator
 * function, or executed via
 *
 *   - `.sync(...args)` - Returns the computed value, or throws.
 *   - `.async(...args)` - Returns a promise for the computed value.
 *   - `.errback(...args, (err, result) => {})` - Calls the callback with the computed value, or error.
 * @param opts Options for an existing sync/async function.
 */
// Disabled to document function versus option parameter.
// tslint:disable-next-line:unified-signatures
declare function gensync<A extends unknown[], R>(opts: OptionsWithAsync<A, R>): GensyncFunction<A, R>;

/**
 * Returns a function that can be "await"-ed in another `gensync` generator
 * function, or executed via
 *
 *   - `.sync(...args)` - Returns the computed value, or throws.
 *   - `.async(...args)` - Returns a promise for the computed value.
 *   - `.errback(...args, (err, result) => {})` - Calls the callback with the computed value, or error.
 * @param opts Options for an existing sync/async function.
 */
declare function gensync<A extends unknown[], R, E = unknown>(
    opts: OptionsWithErrback<A, R, E>,
): GensyncFunction<A, R, E>;

declare namespace gensync {
    // Branded to enforce that generator functions passed to gensync only yield
    // from generators returned by gensync.
    type GensyncGenerator<R = unknown> = Generator<GensyncGenerator<never>, R> & { __gensyncBrand: never };

    interface GensyncFunction<A extends unknown[], R, E = unknown> {
        (...args: A): GensyncGenerator<R>;
        sync(...args: A): R;
        async(...args: A): Promise<R>;
        errback(...args: [...A, (err: E, result: R) => void]): void;
    }

    interface SharedOptions<A extends unknown[], R> {
        /**
         * A string name to apply to the returned function. If no value is provided,
         * the name of `errback`/`async`/`sync` functions will be used, with any
         * `Sync` or `Async` suffix stripped off. If the callback is simply named
         * with ES6 inference (same name as the options property), the name is ignored.
         */
        name?: string | undefined;
        /**
         * A number for the length to set on the returned function. If no value
         * is provided, the length will be carried over from the `sync` function's
         * `length` value.
         */
        arity?: number | undefined;
        /**
         * A function that will be called when `.sync()` is called on the `gensync()`
         * result, or when the result is passed to `yield*` in another generator that
         * is being run synchronously.
         *
         * Also called for `.async()` calls if no async handlers are provided.
         */
        sync: (...args: A) => R;
    }

    interface OptionsWithAsync<A extends unknown[], R> extends SharedOptions<A, R> {
        /**
         * A function that will be called when `.async()` or `.errback()` is called on
         * the `gensync()` result, or when the result is passed to `yield*` in another
         * generator that is being run asynchronously.
         */
        async?: (...args: A) => Promise<R> | undefined;
    }

    interface OptionsWithErrback<A extends unknown[], R, E = unknown> extends SharedOptions<A, R> {
        /**
         * A function that will be called when `.async()` or `.errback()` is called on
         * the `gensync()` result, or when the result is passed to `yield*` in another
         * generator that is being run asynchronously.
         *
         * This option allows for simpler compatibility with many existing Node APIs,
         * and also avoids introducing the extra even loop turns that promises introduce
         * to access the result value.
         */
        errback?: ((...args: [...A, (err: E, result: R) => void]) => void) | undefined;
    }

    type GensyncReturn<T> = T extends GensyncGenerator<infer U> ? U : never;

    /**
     * `Promise.all`-like combinator that works with an iterable of generator objects
     * that could be passed to `yield*` within a gensync generator.
     * @param args An array of gensync generators
     * @returns A new gensync generator
     */
    function all<T extends readonly GensyncGenerator[] | []>(
        args: T,
    ): GensyncGenerator<{ -readonly [P in keyof T]: GensyncReturn<T[P]> }>;

    /**
     * `Promise.all`-like combinator that works with an iterable of generator objects
     * that could be passed to `yield*` within a gensync generator.
     * @param args An iterable of gensync generators
     * @returns A new gensync generator
     */
    function all<T>(args: Iterable<GensyncGenerator<T>>): GensyncGenerator<T[]>;

    /**
     * `Promise.race`-like combinator that works with an iterable of generator objects
     * that could be passed to `yield*` within a gensync generator.
     * @param args An array of gensync generators
     * @returns A new gensync generator
     */
    function race<T extends readonly GensyncGenerator[] | []>(args: T): GensyncGenerator<GensyncReturn<T[number]>>;

    /**
     * `Promise.race`-like combinator that works with an iterable of generator objects
     * that could be passed to `yield*` within a gensync generator.
     * @param args An array of gensync generators
     * @returns A new gensync generator
     */
    function race<T>(args: Iterable<GensyncGenerator<T>>): GensyncGenerator<T>;
}

export = gensync;
