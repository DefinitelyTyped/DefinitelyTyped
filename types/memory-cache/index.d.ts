// Type definitions for memory-cache 0.2
// Project: https://github.com/ptarjan/node-cache
// Definitions by: Jeff Goddard <https://github.com/jedigo>
//                 Travis Thieman <https://github.com/thieman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Originally imported from: https://github.com/soywiz/typescript-node-definitions/memory-cache.d.ts

export class CacheClass<K, V> {
    put(key: K, value: V, time?: number, timeoutCallback?: (key: K, value: V) => void): V;
    get(key: K): V | null;
    del(key: K): void;
    clear(): void;

    size(): number;
    memsize(): number;

    debug(bool: boolean): void;
    hits(): number;
    misses(): number;
    keys(): K[];

    /**
     * @returns The new size of the cache
     * @see {@link https://github.com/ptarjan/node-cache#importjson--functionjson-string-options--skipduplicates-boolean-}
     */
    importJson(json: string, options?: { skipDuplicates?: boolean | undefined }): number;
    /**
     * @returns A JSON string representing all the cache data
     */
    exportJson(): string;
}

export const Cache: typeof CacheClass;

export function put<V>(key: any, value: V, time?: number, timeoutCallback?: (key: any, value: any) => void): V;
export function get(key: any): any;
export function del(key: any): void;
export function clear(): void;

export function size(): number;
export function memsize(): number;

export function debug(bool: boolean): void;
export function hits(): number;
export function misses(): number;
export function keys(): any[];

/**
 * @returns The new size of the cache
 * @see {@link https://github.com/ptarjan/node-cache#importjson--functionjson-string-options--skipduplicates-boolean-}
 */
export function importJson(json: string, options?: { skipDuplicates?: boolean | undefined }): number;
/**
 * @returns A JSON string representing all the cache data
 */
export function exportJson(): string;
