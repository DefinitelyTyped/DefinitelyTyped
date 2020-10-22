// Type definitions for keyv 3.1
// Project: https://github.com/lukechilds/keyv
// Definitions by: AryloYeung <https://github.com/Arylo>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="node" />
import { EventEmitter } from 'events';

declare class Keyv<TValue = any> extends EventEmitter {
    /**
     * @param opts The options object is also passed through to the storage adapter. Check your storage adapter docs for any extra options.
     */
    constructor(opts?: Keyv.Options<TValue>);
    /**
     * @param uri The connection string URI.
     *
     * Merged into the options object as options.uri.
     * @param opts The options object is also passed through to the storage adapter. Check your storage adapter docs for any extra options.
     */
    constructor(uri?: string, opts?: Keyv.Options<TValue>);

    /** Returns the value. */
    get(key: string): Promise<TValue | undefined>;
    /**
     * Set a value.
     *
     * By default keys are persistent. You can set an expiry TTL in milliseconds.
     */
    set(key: string, value: TValue, ttl?: number): Promise<true>;
    /**
     * Deletes an entry.
     *
     * Returns `true` if the key existed, `false` if not.
     */
    delete(key: string): Promise<boolean>;
    /** Delete all entries in the current namespace. */
    clear(): Promise<void>;
}

declare namespace Keyv {
    interface Options<TValue> {
        /** Namespace for the current instance. */
        namespace?: string;
        /** A custom serialization function. */
        serialize?: (data: TValue) => string;
        /** A custom deserialization function. */
        deserialize?: (data: string) => TValue;
        /** The connection string URI. */
        uri?: string;
        /** The storage adapter instance to be used by Keyv. */
        store?: Store<TValue>;
        /** Default TTL. Can be overridden by specififying a TTL on `.set()`. */
        ttl?: number;
        /** Specify an adapter to use. e.g `'redis'` or `'mongodb'`. */
        adapter?: 'redis' | 'mongodb' | 'mongo' | 'sqlite' | 'postgresql' | 'postgres' | 'mysql';

        [key: string]: any;
    }

    interface Store<TValue> {
        get(key: string): TValue | Promise<TValue | undefined> | undefined;
        set(key: string, value: TValue, ttl?: number): any;
        delete(key: string): boolean | Promise<boolean>;
        clear(): void | Promise<void>;
    }
}

export = Keyv;
