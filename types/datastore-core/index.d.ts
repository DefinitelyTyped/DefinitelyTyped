// Type definitions for datastore-core 1.1
// Project: https://github.com/ipfs/js-datastore-core#readme
// Definitions by: Carson Farmer <https://github.com/carsonfarmer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.6

import { Adapter, Key, Options } from 'interface-datastore';

/**
 * Transform function object to converting back-and-forth between key spaces.
 */
export interface Transform {
    /**
     * Forward transform function.
     * @param key Input key.
     * @example
     * // Forward prefix transform
     * const convert = (key: Key) => new Key('/abc').child(key)
     */
    convert(key: Key): Key;
    /**
     * Inverse transform function.
     * @param key Input key.
     * @example
     * // Inverse prefix transform
     * const invert = (key: Key) => Key.withNamespaces(key.list().slice(1))
     */
    invert(key: Key): Key;
}

/**
 * Mount information for child a datastore.
 */
export interface Mount<Value = Buffer> {
    /**
     * The child datastore.
     */
    datastore: Adapter<Value>;
    /**
     * The mount prefix.
     */
    prefix: Key;
}

export namespace shard {
    const README_FN = '_README';
    const SHARDING_FN = 'SHARDING';
    const PREFIX = '/repo/flatfs/shard/';
    const readme: string;
    class Shard {
        constructor(length: number);
        name: string;
        param: number;
        _padding: string;
        fun(str: string): string;
        toString(): string;
    }
    class Prefix extends Shard {}
    class Suffix extends Shard {}
    class NextToLast extends Shard {}
    function readShardFun(path: string, store: Adapter): Promise<Shard>;
    function parseShardFun(str: string): Shard;
}

/**
 * A datastore shim, that wraps around a given datastore, changing
 * the way keys look to the user, for example namespacing
 * keys, reversing them, etc.
 */
export class KeytransformDatastore<Value = Buffer> extends Adapter<Value> {
    constructor(child: Adapter<Value>, transform: Transform);
    child: Adapter<Value>;
    transform: Transform;
    open(): Promise<void>;
    close(): Promise<void>;
    put(key: Key, val: Value, options?: Options): Promise<void>;
    get(key: Key, options?: Options): Promise<Value>;
    has(key: Key): Promise<boolean>;
    delete(key: Key, options?: Options): Promise<void>;
}

/**
 * A datastore that can combine multiple stores inside various
 * key prefixs.
 */
export class MountDatastore<Value = Buffer> extends Adapter<Value> {
    constructor(mounts: Array<Mount<Value>>);
    mounts: Array<Mount<any>>;
    open(): Promise<void>;
    close(): Promise<void>;
    put(key: Key, val: Value, options?: Options): Promise<void>;
    get(key: Key, options?: Options): Promise<Value>;
    has(key: Key): Promise<boolean>;
    delete(key: Key, options?: Options): Promise<void>;
}

/**
 * Wraps a given datastore into a keytransform which
 * makes a given prefix transparent.
 *
 * For example, if the prefix is `new Key(/hello)` a call
 * to `store.put(new Key('/world'), mydata)` would store the data under
 * `/hello/world`.
 *
 */
export class NamespaceDatastore<Value = Buffer> extends KeytransformDatastore<Value> {
    constructor(child: Adapter<Value>, prefix: Key);
    prefix: Key;
}

/**
 * A datastore that can combine multiple stores. Puts and deletes
 * will write through to all datastores. Has and get will
 * try each store sequentially. Query will always try the
 * last one first.
 *
 */
export class TieredDatastore<Value = Buffer> extends Adapter<Value> {
    constructor(stores: Array<Adapter<Value>>);
    stores: Array<Adapter<Value>>;
    open(): Promise<void>;
    close(): Promise<void>;
    put(key: Key, val: Value, options?: Options): Promise<void>;
    get(key: Key, options?: Options): Promise<Value>;
    has(key: Key): Promise<boolean>;
    delete(key: Key, options?: Options): Promise<void>;
}

/**
 * Backend independent abstraction of go-ds-flatfs.
 *
 * Wraps another datastore such that all values are stored
 * sharded according to the given sharding function.
 */
export class ShardingDatastore<Value = Buffer> extends Adapter<Value> {
    constructor(stores: Array<Adapter<Value>>);
    child: KeytransformDatastore<Value>;
    shard: shard.Shard;
    open(): Promise<void>;
    close(): Promise<void>;
    put(key: Key, val: Value, options?: Options): Promise<void>;
    get(key: Key, options?: Options): Promise<Value>;
    has(key: Key): Promise<boolean>;
    delete(key: Key, options?: Options): Promise<void>;
    static createOrOpen<Value = Buffer>(store: Adapter<Value>, shard: shard.Shard): Promise<ShardingDatastore<Value>>;
    static open<Value = Buffer>(store: Adapter<Value>): Promise<ShardingDatastore<Value>>;
    static create<Value = Buffer>(store: Adapter<Value>, shard: shard.Shard): Promise<ShardingDatastore<Value>>;
}
