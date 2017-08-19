// Type definitions for stale-lru-cache 5.1
// Project: https://github.com/cyberthom/stale-lru-cache
// Definitions by: Joona Heikkilä <https://github.com/cxcorp/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class Cache<K, V> {
    constructor(options?: Cache.CacheOptions<K, V>);
    delete(key: K): boolean;
    get(key: K): V | undefined;
    set(key: K, value: V, options?: string | Cache.SetOptions<K, V>): boolean;
    has(key: K): boolean;
    isStale(key: K): boolean;
    keys(): K[];
    reset(): void;
    size(): number;
    values(): V[];
    wrap(
        key: K,
        revalidate: Cache.RevalidationCallback<K, V>,
        callback: Cache.OptionsCallback<K, V>
    ): void;
}

declare namespace Cache {
    type OptionsCallback<K, V> = (error: any, value?: V, options?: string | SetOptions<K, V>) => void;
    type RevalidationCallback<K, V> = (key: K, callback: OptionsCallback<K, V>) => void;

    interface CacheOptions<K, V> {
        maxAge?: number;
        staleWhileRevalidate?: number;
        revalidate?: RevalidationCallback<K, V>;
        maxSize?: number;
        getSize?(value: V, key: K): number;
    }

    interface SetOptions<K, V> {
        maxAge?: number;
        staleWhileRevalidate?: number;
        revalidate?: RevalidationCallback<K, V>;
    }
}

export = Cache;
