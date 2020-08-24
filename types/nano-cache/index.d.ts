// Type definitions for nano-cache 1.1.2
// Project: https://github.com/akhoury/nano-cache
// Definitions by: Ross Coundon <https://github.com/rcoundon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface SIZE {
    GB: number;
    MB: number;
    KB: number;
}

type Defaults = {
    ttl?: number;
    limit?: number;
    bytes: number;
    compress: boolean;
    minFreeMem: number;
    maxEvictBytes: number;
}

type Info = {
    key: string;
    hits: number;
    accessed: number;
    updated: number;
    expires: number;
    value: unknown;
    bytes: number;
    ttl: number;
    compressed: boolean;
    cost: number;
    limit: number;
};
type Stats = {
    count: number;
    age: number;
    hits: number;
    evictions: number;
    misses: number;
    bytes: number;
};
type Options = {
    ttl?: number;
    limit?: number;
    bytes?: number;
    compress?: boolean;
    minFreeMem?: number;
    maxEvictBytes?: number;
};

declare class NanoCache {
    constructor(options?: Options);
    get<T>(key: T): unknown;
    set<T>(key: T, value: unknown, options?: Options): void;
    delete<T>(key: T): unknown;
    clear(): void;
    clearExpired(): void;
    isTTLExpired<T>(key: T): boolean;
    isLimitReached<T>(key: T): boolean;
    info<T>(key: T): Info;
    stats(): Stats;
    static SIZE: SIZE;
    static DEFAULTS: Defaults;
}

declare module 'nano-cache' {
    export = NanoCache;
}
