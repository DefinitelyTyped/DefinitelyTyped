// Type definitions for memory-cache
// Project: http://github.com/ptarjan/node-cache
// Definitions by: Jeff Goddard <https://github.com/jedigo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/memory-cache.d.ts


export declare function put(key: any, value: any, time?: number, timeoutCallback?: (key: any) => void): void;
export declare function get(key: any): any;
export declare function del(key: any): void;
export declare function clear(): void;

export declare function size(): number;
export declare function memsize(): number;

export declare function debug(bool: boolean): void;
export declare function hits(): number;
export declare function misses(): number;
export declare function keys(): any;
