// Type definitions for datastore-core 0.7
// Project: https://github.com/ipfs/js-datastore-core#readme
// Definitions by: Carson Farmer <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.6

import { Datastore, Key } from 'interface-datastore';

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
    datastore: Datastore<Value>;
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
        constructor(length: number)
        name: string;
        param: number;
        _padding: string;
        fun(str: string): string;
        toString(): string;
    }
    class Prefix extends Shard { }
    class Suffix extends Shard { }
    class NextToLast extends Shard { }
    function readShardFun(path: string, store: Datastore): Promise<Shard>;
    function parseShardFun(str: string): Shard;
}

/**
 * A datastore shim, that wraps around a given datastore, changing
 * the way keys look to the user, for example namespacing
 * keys, reversing them, etc.
 */
export interface KeytransformDatastore<Value = Buffer> extends Datastore<Value> {
    child: Datastore<Value>;
    transform: Transform;
}

export interface KeytransformDatastoreConstructor {
    new <Value = Buffer>(child: Datastore<Value>, transform: Transform): KeytransformDatastore<Value>;
}

export const KeytransformDatastore: KeytransformDatastoreConstructor;

/**
 * A datastore that can combine multiple stores inside various
 * key prefixs.
 */
export interface MountDatastore extends Datastore<any> {
    mounts: Array<Mount<any>>;
}

export interface MountDatastoreConstructor {
    new(mounts: Array<Mount<any>>): MountDatastore;
}

export const MountDatastore: MountDatastoreConstructor;

/**
 * Wraps a given datastore into a keytransform which
 * makes a given prefix transparent.
 *
 * For example, if the prefix is `new Key(/hello)` a call
 * to `store.put(new Key('/world'), mydata)` would store the data under
 * `/hello/world`.
 *
 */
export interface NamespaceDatastore<Value = Buffer> extends KeytransformDatastore<Value> {
    prefix: Key;
}

export interface NamespaceDatastoreConstructor {
    new(child: Datastore<any>, prefix: Key): NamespaceDatastore;
}

export const NamespaceDatastore: NamespaceDatastoreConstructor;

/**
 * A datastore that can combine multiple stores. Puts and deletes
 * will write through to all datastores. Has and get will
 * try each store sequentially. Query will always try the
 * last one first.
 *
 */
export interface TieredDatastore extends Datastore<any> {
    stores: Array<Datastore<any>>;
}

export interface TieredDatastoreConstructor {
    new(stores: Array<Datastore<any>>): TieredDatastore;
}

export const TieredDatastore: TieredDatastoreConstructor;

/**
 * Backend independent abstraction of go-ds-flatfs.
 *
 * Wraps another datastore such that all values are stored
 * sharded according to the given sharding function.
 */
export interface ShardingDatastore<Value = Buffer> extends Datastore<Value> {
    child: KeytransformDatastore<Value>;
    shard: shard.Shard;
}

export interface ShardingDatastoreConstructor {
    new <Value = Buffer>(stores: Array<Datastore<Value>>): ShardingDatastore<Value>;
    createOrOpen<Value = Buffer>(store: Datastore<Value>, shard: shard.Shard): Promise<ShardingDatastore<Value>>;
    open<Value = Buffer>(store: Datastore<Value>): Promise<ShardingDatastore<Value>>;
    create<Value = Buffer>(store: Datastore<Value>, shard: shard.Shard): Promise<ShardingDatastore<Value>>;
}

export const ShardingDatastore: ShardingDatastoreConstructor;
