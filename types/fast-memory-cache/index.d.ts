declare class MemoryCache {
    constructor();
    get(key: string): any;
    set(key: string, value: any, expireTime?: number): void;
    delete(key: string): void;
    clear(): void;
}

export = MemoryCache;
