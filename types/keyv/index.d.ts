// Type definitions for keyv 3.0
// Project: https://github.com/lukechilds/keyv
// Definitions by: AryloYeung <https://github.com/Arylo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1
/// <reference types="node" />
interface KeyvOptions {
    /** Namespace for the current instance. */
    namespace?: string;
    /** A custom serialization function. */
    serialize?: (data: any) => string;
    /** A custom deserialization function. */
    deserialize?: (data: string) => any;
    /** The connection string URI. */
    uri?: string;
    /** The storage adapter instance to be used by Keyv. */
    store?: any;
    /** Default TTL. Can be overridden by specififying a TTL on `.set()`. */
    ttl?: number;
    /** Specify an adapter to use. e.g `'redis'` or `'mongodb'`. */
    adapter?: string;
}

declare class Keyv extends NodeJS.EventEmitter {
    /**
     * @param opts The options object is also passed through to the storage adapter. Check your storage adapter docs for any extra options.
     */
    constructor(opts?: KeyvOptions);
    /**
     * @param uri The connection string URI.
     *
     * Merged into the options object as options.uri.
     * @param opts The options object is also passed through to the storage adapter. Check your storage adapter docs for any extra options.
     */
    constructor(uri?: string, opts?: KeyvOptions);
    /** Returns the namespace of a key */
    _getKeyPrefix(key: string): string;

    /** Returns the value. */
    get(key: string): Promise<any>;
    /**
     * Set a value.
     *
     * By default keys are persistent. You can set an expiry TTL in milliseconds.
     */
    set(key: string, value: any, ttl?: number): (Promise<boolean> | undefined);
    /**
     * Deletes an entry.
     *
     * Returns `true` if the key existed, `false` if not.
     */
    delete(key: string): Promise<boolean>;
    /** Delete all entries in the current namespace. */
    clear(): Promise<void>;
}

export = Keyv;
