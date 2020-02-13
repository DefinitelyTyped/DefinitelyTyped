/// <reference types="node" />
/// <reference types="lodash" />
/// <reference types="benchmark" />
/// <reference types="async" />
/// <reference path="./async.d.ts" />
/// <reference path="./benchmark.d.ts" />

declare namespace adone {
    const _null: symbol;
    export { _null as null };
    export function noop(): void;
    export function identity<T>(x: T): T;
    export function truly(): true;
    export function falsely(): false;
    export const ok: "ok";
    export const bad: "bad";
    export function log(...args: any[]): void;
    export function logFatal(...args: any[]): void;
    export function logError(...args: any[]): void;
    export function logWarn(...args: any[]): void;
    export function logInfo(...args: any[]): void;
    export function logDebug(...args: any[]): void;
    export function logTrace(...args: any[]): void;
    export function o(...props: any[]): object;
    export const Date: typeof global.Date;
    export const hrtime: typeof global.process.hrtime;
    export const setTimeout: typeof global.setTimeout;
    export const setInterval: typeof global.setInterval;
    export const setImmediate: typeof global.setImmediate;
    export const clearTimeout: typeof global.clearTimeout;
    export const clearInterval: typeof global.clearInterval;
    export const clearImmediate: typeof global.clearImmediate;

    namespace I {
        interface LazifyOptions {
            /**
             * Whether the new properties are configurable, false by default
             */
            configurable?: boolean;

            /**
             * Whether the new properties are writable, false by default
             */
            writable?: boolean;

            /**
             * A custom mapper for values, by default returns the exported object (module.exports),
             * but if the object is a transpiled es module and the default export is defined,
             * it returns the default export
             *
             * @param key property
             * @param mod module.exports
             */
            mapper?(key: string, mod: any): any;
        }
    }

    /**
     * Extends the given object(or creates a new one) with the given lazyfied properties
     */
    export function lazify(modules: object, obj?: object, require?: (path: string) => any, options?: I.LazifyOptions): object;

    /**
     * Defines or extends the private part of the given object with the given lazyfied properties
     */
    export function lazifyPrivate(modules: object, obj?: object, require?: (path: string) => any, options?: I.LazifyOptions): object;

    /**
     * Defines the private part of the given object with the given modules
     */
    export function definePrivate(modules: object, obj: object): object;

    /**
     * Returns the private part of the given object
     */
    export function private(obj: object): any;

    namespace I {
        interface Tag {
            set(Class: object, tag: string): void;
            has(obj: object, tag: string): boolean;
            define(tag: string, predicate?: string): void;
        }
    }
    export const tag: I.Tag;
    export function getAssetAbsolutePath(relPath: string): string;
    export function loadAsset(relPath: string): string | Buffer;
    export function require(path: string): object;
    export const package: object;

    export function sprintf(format: string, ...args: any[]): string;

    namespace I {
        interface Runtime {
            term: object; // TODO
            logger: object; // TODO
            app: object; // TODO
        }
    }

    export const runtime: I.Runtime;

    export const ROOT_PATH: string;
    export const ETC_PATH: string;
    export const configuration: object;
    export const EMPTY_BUFFER: Buffer;

    export const assert: assertion.I.AssertFunction;
    export const expect: assertion.I.ExpectFunction;

    export const std: typeof nodestd;

    export const lodash: _.LoDashStatic;

    export const benchmark: typeof tbenchmark;

    export const async: typeof tasync;
}
