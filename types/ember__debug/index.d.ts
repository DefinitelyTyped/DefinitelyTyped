// Type definitions for non-npm package @ember/debug 4.0
// Project: https://emberjs.com/api/ember/4.0/modules/@ember%2Fdebug
// Definitions by: Chris Krycho <https://github.com/chriskrycho>
//                 Dan Freeman <https://github.com/dfreeman>
//                 James C. Davis <https://github.com/jamescdavis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.4

/**
 * Define an assertion that will throw an exception if the condition is not met.
 */
export function assert(desc: string): never;
export function assert(desc: string, test: unknown): asserts test;

/**
 * Display a debug notice.
 */
export function debug(message: string): void;

/**
 * Allows for runtime registration of handler functions that override the default deprecation behavior.
 * Deprecations are invoked by calls to [Ember.deprecate](http://emberjs.com/api/classes/Ember.html#method_deprecate).
 * The following example demonstrates its usage by registering a handler that throws an error if the
 * message contains the word "should", otherwise defers to the default handler.
 */
export function registerDeprecationHandler(
    handler: (
        message: string,
        options: { id: string; until: string } | undefined,
        next: (message: string, options?: { id: string; until: string }) => void,
    ) => void,
): void;
/**
 * Allows for runtime registration of handler functions that override the default warning behavior.
 * Warnings are invoked by calls made to [Ember.warn](http://emberjs.com/api/classes/Ember.html#method_warn).
 * The following example demonstrates its usage by registering a handler that does nothing overriding Ember's
 * default warning behavior.
 */
export function registerWarnHandler(
    handler: (
        message: string,
        options: { id: string } | undefined,
        next: (message: string, options?: { id: string }) => void,
    ) => void,
): void;

/**
 * Run a function meant for debugging.
 */
export function runInDebug(func: () => unknown): void;

/**
 * Display a warning with the provided message.
 */
export function warn(message: string, test: boolean, options: { id: string }): void;
export function warn(message: string, options: { id: string }): void;

/**
 * Display a deprecation warning with the provided message and a stack trace
 * (Chrome and Firefox only).
 *
 * In a production build, this method is defined as an empty function (NOP).
 * Uses of this method in Ember itself are stripped from the ember.prod.js build.
 *
 * @param message A description of the deprecation.
 * @param test If falsy, the deprecation will be displayed.
 * @param options The deprecation options.
 */
export function deprecate(
    message: string,
    test: boolean,
    options: {
        /**
         * A unique id for this deprecation. The id can be used by Ember debugging
         * tools to change the behavior (raise, log or silence) for that specific
         * deprecation. The id should be namespaced by dots, e.g.
         * `"view.helper.select"`.
         */
        id: string;
        /**
         * The version of Ember when this deprecation warning will be removed.
         */
        until: string;
        /**
         * An optional url to the transition guide on the emberjs.com website.
         */
        url?: string | undefined;
        /**
         * A namespace for the deprecation, usually the package name.
         */
        for: string;
        /**
         * Describes when the deprecation became available and enabled.
         */
        since: Available | Enabled;
    },
): void;

export interface Available { available: string; }
export interface Enabled extends Available { enabled: string; }
