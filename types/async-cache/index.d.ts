import { Options as LRUOptions } from "lru-cache";

export = AsyncCache;

declare const AsyncCache: AsyncCacheFactory;

interface AsyncCacheFactory {
    <T>(options: AsyncCache.Options<T>): AsyncCache.Cache<T>;
    new<T>(options: AsyncCache.Options<T>): AsyncCache.Cache<T>;
}

declare namespace AsyncCache {
    interface Cache<T> {
        readonly itemCount: number;

        get(key: string, cb: (error: any, value: T) => void): void;
        keys(): string[];
        set(key: string, value: T, maxAge?: number): boolean;
        reset(): void;
        has(key: string): boolean;
        del(key: string): void;
        peek(key: string): T | undefined;
    }

    interface Options<T> extends LRUOptions<string, T> {
        load(key: string, callback: (error: any, asyncValue: T, maxAge?: number) => void): void;
    }
}
