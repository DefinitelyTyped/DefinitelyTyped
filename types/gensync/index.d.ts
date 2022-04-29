// Type definitions for gensync 1.0
// Project: https://github.com/loganfsmyth/gensync
// Definitions by: Jake Bailey <https://github.com/jakebailey>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.0

import { GensyncGenerator, Operation, Options } from '.';

/**
 * Returns a function that can be "awaited" (with `yield*`) in another `gensync` generator
 * function, or executed via
 *
 *   - `.sync(...args)` - Returns the computed value, or throws.
 *   - `.async(...args)` - Returns a promise for the computed value.
 *   - `.errback(...args, (err, result) => {})` - Calls the callback with the computed value, or error.
 * @param generatorFnOrOptions A generator function, or options for an existing sync/async function
 */
declare function gensync<A extends unknown[], R, E = unknown>(
    generatorFnOrOptions: ((...args: A) => Generator<GensyncGenerator, R>) | Options<A, R, E>,
): Operation<A, R, E>;

declare namespace gensync {
    /**
     * A generator produced by `gensync`, which can only "await" (with `yield*`) other
     * generators produced by `gensync`.
     */
    type GensyncGenerator<R = unknown> = Generator<GensyncGenerator, R>;

    /**
     * Given a `gensync` generator, produces the "awaited" type of that generator
     * when "yield*"'d in another `gensync` generator.
     */
    type GensyncAwaited<T> = T extends GensyncGenerator<infer U> ? U : never;

    /**
     * A function that can be "awaited" (with `yield*`) in another `gensync` generator,
     * or executed via
     *
     *   - `.sync(...args)` - Returns the computed value, or throws.
     *   - `.async(...args)` - Returns a promise for the computed value.
     *   - `.errback(...args, (err, result) => {})` - Calls the callback wit
     */
    interface Operation<A extends unknown[], R, E = unknown> {
        (...args: A): GensyncGenerator<R>;
        sync(...args: A): R;
        async(...args: A): Promise<R>;
        errback(...args: [...A, (err: E, result: R) => void]): void;
    }

    interface Options<A extends unknown[], R, E = unknown> {
        /**
         * A function that will be called when `.sync()` is called on the `gensync()`
         * result, or when the result is passed to `yield*` in another generator that
         * is being run synchronously.
         *
         * Also called for `.async()` calls if no async handlers are provided.
         */
        sync: (...args: A) => R;

        /**
         * A function that will be called when `.async()` or `.errback()` is called on
         * the `gensync()` result, or when the result is passed to `yield*` in another
         * generator that is being run asynchronously.
         *
         * Must not be specified with `errback`.
         */
        async?: (...args: A) => Promise<R>;

        /**
         * A function that will be called when `.async()` or `.errback()` is called on
         * the `gensync()` result, or when the result is passed to `yield*` in another
         * generator that is being run asynchronously.
         *
         * This option allows for simpler compatibility with many existing Node APIs,
         * and also avoids introducing the extra even loop turns that promises introduce
         * to access the result value.
         *
         * Must not be specified with `async`.
         */
        errback?: (...args: [...A, (err: E, result: R) => void]) => void;

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
    }

    // "all" and "race"'s types are pretty much copied from Promise.all and Promise.race,
    // replacing Awaited with GensyncAwaited.

    /**
     * `Promise.all`-like combinator that works with an iterable of generator objects
     * that could be passed to `yield*` within a gensync generator.
     * @param args An array of gensync generators
     * @returns A new gensync generator
     */
    function all<T extends readonly GensyncGenerator[] | []>(
        args: T,
    ): GensyncGenerator<{ -readonly [P in keyof T]: GensyncAwaited<T[P]> }>;

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
    function race<T extends readonly GensyncGenerator[] | []>(args: T): GensyncGenerator<GensyncAwaited<T[number]>>;

    /**
     * `Promise.race`-like combinator that works with an iterable of generator objects
     * that could be passed to `yield*` within a gensync generator.
     * @param args An iterable of gensync generators
     * @returns A new gensync generator
     */
    function race<T>(args: Iterable<GensyncGenerator<T>>): GensyncGenerator<T>;
}

export = gensync;
