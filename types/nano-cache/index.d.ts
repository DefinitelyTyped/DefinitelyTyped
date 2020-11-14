// Type definitions for nano-cache 1.1
// Project: https://github.com/akhoury/nano-cache
// Definitions by: Ross Coundon <https://github.com/rcoundon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface SIZE {
    GB: number;
    MB: number;
    KB: number;
}

interface Defaults {
    ttl?: number;
    limit?: number;
    bytes: number;
    compress: boolean;
    minFreeMem: number;
    maxEvictBytes: number;
}

interface Info {
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
}

interface Stats {
    count: number;
    age: number;
    hits: number;
    evictions: number;
    misses: number;
    bytes: number;
}

interface Options {
    ttl?: number;
    limit?: number;
    bytes?: number;
    compress?: boolean;
    minFreeMem?: number;
    maxEvictBytes?: number;
}

declare class NanoCache {
    constructor(options?: Options);
    get(key: unknown): unknown;
    set(key: unknown, value: unknown, options?: Options): void;
    delete(key: unknown): unknown;
    clear(): void;
    clearExpired(): void;
    isTTLExpired(key: unknown): boolean;
    isLimitReached(key: unknown): boolean;
    info(key: unknown): Info;
    stats(): Stats;
    static SIZE: SIZE;
    static DEFAULTS: Defaults;
    static singleton: NanoCache;
}

export = NanoCache;
