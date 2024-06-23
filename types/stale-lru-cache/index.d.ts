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
        callback: Cache.OptionsCallback<K, V>,
    ): void;
}

declare namespace Cache {
    type OptionsCallback<K, V> = (error: any, value?: V, options?: string | SetOptions<K, V>) => void;
    type RevalidationCallback<K, V> = (key: K, callback: OptionsCallback<K, V>) => void;

    interface CacheOptions<K, V> {
        maxAge?: number | undefined;
        staleWhileRevalidate?: number | undefined;
        revalidate?: RevalidationCallback<K, V> | undefined;
        maxSize?: number | undefined;
        getSize?(value: V, key: K): number;
    }

    interface SetOptions<K, V> {
        maxAge?: number | undefined;
        staleWhileRevalidate?: number | undefined;
        revalidate?: RevalidationCallback<K, V> | undefined;
    }
}

export = Cache;
