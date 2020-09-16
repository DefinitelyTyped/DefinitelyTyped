// Type definitions for fast-memory-cache 2.0
// Project: https://github.com/mdevils/fast-memory-cache
// Definitions by: Anna Botcharowa <https://github.com/RobinTail>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class MemoryCache {
    constructor();
    get(key: string): any;
    set(key: string, value: any, expireTime?: number): void;
    delete(key: string): void;
    clear(): void;
}

export = MemoryCache;
