/**
 * Configuration object for creating a new HAMT map with custom hash and key comparison functions.
 */
export interface HamtConfig<K = any> {
    /** Custom hash function for keys */
    hash?: ((key: K) => number) | undefined;
    /** Custom key equality comparison function */
    keyEq?: ((a: K, b: K) => boolean) | undefined;
}

/**
 * A Hash Array Mapped Trie (HAMT) map implementation.
 * This is a persistent data structure that supports efficient updates and lookups.
 */
export interface HamtMap<K = any, V = any> extends Iterable<[K, V]> {
    /** Check if the map is empty */
    isEmpty(): boolean;

    /** Get the number of entries in the map */
    count(): number;

    /** Get the number of entries in the map (alias for count) */
    readonly size: number;

    /** Get a value by key */
    get(key: K): V | undefined;

    /** Get a value by key using a custom hash */
    getHash(hash: number, key: K): V | undefined;

    /** Get a value by key, returning alt if not found */
    tryGet(alt: V, key: K): V;

    /** Get a value by key using a custom hash, returning alt if not found */
    tryGetHash(alt: V, hash: number, key: K): V;

    /** Check if a key exists in the map */
    has(key: K): boolean;

    /** Check if a key exists in the map using a custom hash */
    hasHash(hash: number, key: K): boolean;

    /** Set a value for a key, returning a new map */
    set(key: K, value: V): HamtMap<K, V>;

    /** Set a value for a key using a custom hash, returning a new map */
    setHash(hash: number, key: K, value: V): HamtMap<K, V>;

    /** Modify a value for a key using a function, returning a new map */
    modify(key: K, f: (value: V | undefined) => V): HamtMap<K, V>;

    /** Modify a value for a key using a function and custom hash, returning a new map */
    modifyHash(hash: number, key: K, f: (value: V | undefined) => V): HamtMap<K, V>;

    /** Remove a key from the map, returning a new map */
    remove(key: K): HamtMap<K, V>;

    /** Remove a key from the map, returning a new map (alias for remove) */
    delete(key: K): HamtMap<K, V>;

    /** Remove a key from the map using a custom hash, returning a new map */
    removeHash(hash: number, key: K): HamtMap<K, V>;

    /** Remove a key from the map using a custom hash, returning a new map (alias for removeHash) */
    deleteHash(hash: number, key: K): HamtMap<K, V>;

    /** Begin mutation mode for efficient batch operations */
    beginMutation(): HamtMap<K, V>;

    /** End mutation mode */
    endMutation(): HamtMap<K, V>;

    /** Execute a function in mutation context for efficient batch operations */
    mutate(f: (map: HamtMap<K, V>) => HamtMap<K, V>): HamtMap<K, V>;

    /** Fold over all entries in the map */
    fold<Z>(f: (acc: Z, value: V, key: K) => Z, initial: Z): Z;

    /** Execute a function for each entry in the map */
    forEach(f: (value: V, key: K, map: HamtMap<K, V>) => void): void;

    /** Get an iterator for all entries [key, value] */
    entries(): IterableIterator<[K, V]>;

    /** Get an iterator for all keys */
    keys(): IterableIterator<K>;

    /** Get an iterator for all values */
    values(): IterableIterator<V>;
}

/** A pre-created empty HAMT map */
export const empty: HamtMap<any, any>;

/** Create a new empty HAMT map */
export function make<K = any>(config?: HamtConfig<K>): HamtMap<K, any>;

/** Check if a map is empty */
export function isEmpty(map: HamtMap<any, any>): boolean;

/** Get a value by key */
export function get<K, V>(key: K, map: HamtMap<K, V>): V | undefined;

/** Get a value by key using a custom hash */
export function getHash<K, V>(hash: number, key: K, map: HamtMap<K, V>): V | undefined;

/** Get a value by key, returning alt if not found */
export function tryGet<K, V>(alt: V, key: K, map: HamtMap<K, V>): V;

/** Get a value by key using a custom hash, returning alt if not found */
export function tryGetHash<K, V>(alt: V, hash: number, key: K, map: HamtMap<K, V>): V;

/** Check if a key exists in the map */
export function has<K>(key: K, map: HamtMap<K, any>): boolean;

/** Set a value for a key, returning a new map */
export function set<K, V>(key: K, value: V, map: HamtMap<K, V>): HamtMap<K, V>;

/** Set a value for a key using a custom hash, returning a new map */
export function setHash<K, V>(hash: number, key: K, value: V, map: HamtMap<K, V>): HamtMap<K, V>;

/** Modify a value for a key using a function, returning a new map */
export function modify<K, V>(f: (value: V | undefined) => V, key: K, map: HamtMap<K, V>): HamtMap<K, V>;

/** Modify a value for a key using a function and custom hash, returning a new map */
export function modifyHash<K, V>(
    f: (value: V | undefined) => V,
    hash: number,
    key: K,
    map: HamtMap<K, V>,
): HamtMap<K, V>;

/** Remove a key from the map, returning a new map */
export function remove<K, V>(key: K, map: HamtMap<K, V>): HamtMap<K, V>;

/** Remove a key from the map using a custom hash, returning a new map */
export function removeHash<K, V>(hash: number, key: K, map: HamtMap<K, V>): HamtMap<K, V>;

/** Begin mutation mode for efficient batch operations */
export function beginMutation<K, V>(map: HamtMap<K, V>): HamtMap<K, V>;

/** End mutation mode */
export function endMutation<K, V>(map: HamtMap<K, V>): HamtMap<K, V>;

/** Execute a function in mutation context for efficient batch operations */
export function mutate<K, V>(f: (map: HamtMap<K, V>) => HamtMap<K, V>, map: HamtMap<K, V>): HamtMap<K, V>;

/** Get the number of entries in the map */
export function count(map: HamtMap<any, any>): number;

/** Fold over all entries in the map */
export function fold<K, V, Z>(f: (acc: Z, value: V, key: K) => Z, initial: Z, map: HamtMap<K, V>): Z;

/** Execute a function for each entry in the map */
export function forEach<K, V>(f: (value: V, key: K, map: HamtMap<K, V>) => void, map: HamtMap<K, V>): void;

/** Get an iterator for all entries [key, value] */
export function entries<K, V>(map: HamtMap<K, V>): IterableIterator<[K, V]>;

/** Get an iterator for all keys */
export function keys<K>(map: HamtMap<K, any>): IterableIterator<K>;

/** Get an iterator for all values */
export function values<V>(map: HamtMap<any, V>): IterableIterator<V>;

/** Compute a hash for a value */
export function hash(value: any): number;

// Global/ambient declarations for DefinitelyTyped testing
declare global {
    interface HamtConfig<K = any> {
        /** Custom hash function for keys */
        hash?: ((key: K) => number) | undefined;
        /** Custom key equality comparison function */
        keyEq?: ((a: K, b: K) => boolean) | undefined;
    }

    interface HamtMap<K = any, V = any> extends Iterable<[K, V]> {
        /** Check if the map is empty */
        isEmpty(): boolean;

        /** Get the number of entries in the map */
        count(): number;

        /** Get the number of entries in the map (alias for count) */
        readonly size: number;

        /** Get a value by key */
        get(key: K): V | undefined;

        /** Get a value by key using a custom hash */
        getHash(hash: number, key: K): V | undefined;

        /** Get a value by key, returning alt if not found */
        tryGet(alt: V, key: K): V;

        /** Get a value by key using a custom hash, returning alt if not found */
        tryGetHash(alt: V, hash: number, key: K): V;

        /** Check if a key exists in the map */
        has(key: K): boolean;

        /** Check if a key exists in the map using a custom hash */
        hasHash(hash: number, key: K): boolean;

        /** Set a value for a key, returning a new map */
        set(key: K, value: V): HamtMap<K, V>;

        /** Set a value for a key using a custom hash, returning a new map */
        setHash(hash: number, key: K, value: V): HamtMap<K, V>;

        /** Modify a value for a key using a function, returning a new map */
        modify(key: K, f: (value: V | undefined) => V): HamtMap<K, V>;

        /** Modify a value for a key using a function and custom hash, returning a new map */
        modifyHash(hash: number, key: K, f: (value: V | undefined) => V): HamtMap<K, V>;

        /** Remove a key from the map, returning a new map */
        remove(key: K): HamtMap<K, V>;

        /** Remove a key from the map, returning a new map (alias for remove) */
        delete(key: K): HamtMap<K, V>;

        /** Remove a key from the map using a custom hash, returning a new map */
        removeHash(hash: number, key: K): HamtMap<K, V>;

        /** Remove a key from the map using a custom hash, returning a new map (alias for removeHash) */
        deleteHash(hash: number, key: K): HamtMap<K, V>;

        /** Begin mutation mode for efficient batch operations */
        beginMutation(): HamtMap<K, V>;

        /** End mutation mode */
        endMutation(): HamtMap<K, V>;

        /** Execute a function in mutation context for efficient batch operations */
        mutate(f: (map: HamtMap<K, V>) => HamtMap<K, V>): HamtMap<K, V>;

        /** Fold over all entries in the map */
        fold<Z>(f: (acc: Z, value: V, key: K) => Z, initial: Z): Z;

        /** Execute a function for each entry in the map */
        forEach(f: (value: V, key: K, map: HamtMap<K, V>) => void): void;

        /** Get an iterator for all entries [key, value] */
        entries(): IterableIterator<[K, V]>;

        /** Get an iterator for all keys */
        keys(): IterableIterator<K>;

        /** Get an iterator for all values */
        values(): IterableIterator<V>;
    }

    /** A pre-created empty HAMT map */
    const empty: HamtMap<any, any>;

    /** Create a new empty HAMT map */
    function make<K = any>(config?: HamtConfig<K>): HamtMap<K, any>;

    /** Check if a map is empty */
    function isEmpty(map: HamtMap<any, any>): boolean;

    /** Get a value by key */
    function get<K, V>(key: K, map: HamtMap<K, V>): V | undefined;

    /** Get a value by key using a custom hash */
    function getHash<K, V>(hash: number, key: K, map: HamtMap<K, V>): V | undefined;

    /** Get a value by key, returning alt if not found */
    function tryGet<K, V>(alt: V, key: K, map: HamtMap<K, V>): V;

    /** Get a value by key using a custom hash, returning alt if not found */
    function tryGetHash<K, V>(alt: V, hash: number, key: K, map: HamtMap<K, V>): V;

    /** Check if a key exists in the map */
    function has<K>(key: K, map: HamtMap<K, any>): boolean;

    /** Set a value for a key, returning a new map */
    function set<K, V>(key: K, value: V, map: HamtMap<K, V>): HamtMap<K, V>;

    /** Set a value for a key using a custom hash, returning a new map */
    function setHash<K, V>(hash: number, key: K, value: V, map: HamtMap<K, V>): HamtMap<K, V>;

    /** Modify a value for a key using a function, returning a new map */
    function modify<K, V>(f: (value: V | undefined) => V, key: K, map: HamtMap<K, V>): HamtMap<K, V>;

    /** Modify a value for a key using a function and custom hash, returning a new map */
    function modifyHash<K, V>(f: (value: V | undefined) => V, hash: number, key: K, map: HamtMap<K, V>): HamtMap<K, V>;

    /** Remove a key from the map, returning a new map */
    function remove<K, V>(key: K, map: HamtMap<K, V>): HamtMap<K, V>;

    /** Remove a key from the map using a custom hash, returning a new map */
    function removeHash<K, V>(hash: number, key: K, map: HamtMap<K, V>): HamtMap<K, V>;

    /** Begin mutation mode for efficient batch operations */
    function beginMutation<K, V>(map: HamtMap<K, V>): HamtMap<K, V>;

    /** End mutation mode */
    function endMutation<K, V>(map: HamtMap<K, V>): HamtMap<K, V>;

    /** Execute a function in mutation context for efficient batch operations */
    function mutate<K, V>(f: (map: HamtMap<K, V>) => HamtMap<K, V>, map: HamtMap<K, V>): HamtMap<K, V>;

    /** Get the number of entries in the map */
    function count(map: HamtMap<any, any>): number;

    /** Fold over all entries in the map */
    function fold<K, V, Z>(f: (acc: Z, value: V, key: K) => Z, initial: Z, map: HamtMap<K, V>): Z;

    /** Execute a function for each entry in the map */
    function forEach<K, V>(f: (value: V, key: K, map: HamtMap<K, V>) => void, map: HamtMap<K, V>): void;

    /** Get an iterator for all entries [key, value] */
    function entries<K, V>(map: HamtMap<K, V>): IterableIterator<[K, V]>;

    /** Get an iterator for all keys */
    function keys<K>(map: HamtMap<K, any>): IterableIterator<K>;

    /** Get an iterator for all values */
    function values<V>(map: HamtMap<any, V>): IterableIterator<V>;

    /** Compute a hash for a value */
    function hash(value: any): number;
}
