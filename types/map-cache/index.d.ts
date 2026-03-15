/**
 * Basic cache object for storing key-value pairs.
 */
declare class MapCache {
    constructor();

    /** The internal cache object */
    cache: { [key: string]: any };

    /** Set a value on the cache */
    set(key: string, value: any): this;

    /** Get a value from the cache */
    get(key: string): any;

    /** Check if a key exists in the cache */
    has(key: string): boolean;

    /** Delete a key from the cache */
    del(key: string): boolean;
}

export = MapCache;
