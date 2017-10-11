// Type definitions for memory-cache
// Project: https://github.com/ptarjan/node-cache
// Definitions by: Jeff Goddard <https://github.com/jedigo>
//                 Travis Thieman <https://github.com/thieman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Originally imported from: https://github.com/soywiz/typescript-node-definitions/memory-cache.d.ts

declare class CacheClass<K, V> {
    public put(key: K, value: V, time?: number, timeoutCallback?: (key: K, value: V) => void): V;
    public get(key: K): V;
    public del(key: K): void;
    public clear(): void;

    public size(): number;
    public memsize(): number;

    public debug(bool: boolean): void;
    public hits(): number;
    public misses(): number;
    public keys(): any;
}

export declare let Cache: typeof CacheClass;

export declare function put<V>(key: any, value: V, time?: number, timeoutCallback?: (key: any, value: any) => void): V;
export declare function get(key: any): any;
export declare function del(key: any): void;
export declare function clear(): void;

export declare function size(): number;
export declare function memsize(): number;

export declare function debug(bool: boolean): void;
export declare function hits(): number;
export declare function misses(): number;
export declare function keys(): any;
