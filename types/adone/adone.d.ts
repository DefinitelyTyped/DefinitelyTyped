/// <reference types="node" />

declare const _null: symbol;
export { _null as null };
export function noop(): void;
export function identity<T>(x: T): T;
export function truly(): true;
export function falsely(): false;
export const ok: "OK";
export const bad: "BAD";
export const exts: [".js", ".tjs", ".ajs"];
export function log(...args: any[]): void;
export function fatal(...args: any[]): void;
export function error(...args: any[]): void;
export function warn(...args: any[]): void;
export function info(...args: any[]): void;
export function debug(...args: any[]): void;
export function trace(...args: any[]): void;
export function o(...props: any[]): object;
export const Date: typeof global.Date;
export const hrtime: typeof global.process.hrtime;
export const setTimeout: typeof global.setTimeout;
export const setInterval: typeof global.setInterval;
export const setImmediate: typeof global.setImmediate;
export const clearTimeout: typeof global.clearTimeout;
export const clearInterval: typeof global.clearInterval;
export const clearImmediate: typeof global.clearImmediate;
interface LazifyOptions {
    configurable: boolean;
}
export function lazify(modules: object, obj?: object, require?: (path: string) => any, options?: LazifyOptions): object;
interface Tag {
    set(Class: object, tag: string): void;
    has(obj: object, tag: string): boolean;
    define(tag: string, predicate?: string): void;
    SUBSYSTEM: symbol;
    APPLICATION: symbol;
    TRANSFORM: symbol;
    CORE_STREAM: symbol;
    LOGGER: symbol;
    LONG: symbol;
    BIGNUMBER: symbol;
    EXBUFFER: symbol;
    EXDATE: symbol;
    CONFIGURATION: symbol;
    GENESIS_NETRON: symbol;
    GENESIS_PEER: symbol;
    NETRON: symbol;
    NETRON_PEER: symbol;
    NETRON_ADAPTER: symbol;
    NETRON_DEFINITION: symbol;
    NETRON_DEFINITIONS: symbol;
    NETRON_REFERENCE: symbol;
    NETRON_INTERFACE: symbol;
    NETRON_STUB: symbol;
    NETRON_REMOTESTUB: symbol;
    NETRON_STREAM: symbol;
    FAST_STREAM: symbol;
    FAST_FS_STREAM: symbol;
    FAST_FS_MAP_STREAM: symbol;
}
export const tag: Tag;
export function run(App: object, ignoreArgs?: boolean): Promise<void>;
export function bind(libName: string): object;
export function getAssetAbsolutePath(relPath: string): string;
export function loadAsset(relPath: string): string | Buffer;
export function require(path: string): object;
export const package: object;

import * as std from "./glosses/std";
export { std };

export * from "./glosses/common";
export * from "./glosses/math";
export * from "./glosses/utils";
export * from "./glosses/assertion";
export * from "./glosses/promise";
export * from "./glosses/shani";

import "./glosses/shani-global";

export const assert: adone.assertion.I.AssertFunction;
export const expect: adone.assertion.I.ExpectFunction;

export as namespace adone;
