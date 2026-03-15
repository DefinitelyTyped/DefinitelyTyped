/**
 * A cache for managing named caches of key-value pairs.
 */
declare class FragmentCache {
    constructor(caches?: { [name: string]: any });

    /** Object storing all cache instances */
    caches: { [name: string]: any };

    /** Get or create a cache by name */
    cache(cacheName: string): any;

    /** Set a value in a named cache */
    set(cacheName: string, key: string, val: any): this;

    /** Get a cache or a value from a cache */
    get(name: string, key?: string): any;

    /** Check if a key exists in a named cache */
    has(cacheName: string, key?: string): boolean;
}

export = FragmentCache;
