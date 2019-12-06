// Type definitions for datastore-level 0.14
// Project: https://github.com/ipfs/js-datastore-level#readme
// Definitions by: Carson Farmer <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />
// TypeScript Version: 3.6

import { LevelUp } from 'levelup';
import { Key, Datastore, Batch, Query, Result } from 'interface-datastore';
import { ErrorCallback } from 'abstract-leveldown';

/**
 * A datastore backed by leveldb.
 */
export interface LevelDatastore<Value = Buffer> extends Datastore<Value> {
    open(): Promise<void>;
    put(key: Key, val: Value): Promise<void>;
    get(key: Key): Promise<Value>;
    has(key: Key): Promise<boolean>;
    delete(key: Key): Promise<void>;
    batch(): Batch<Value>;
    query(q: Query<Value>): AsyncIterable<Result<Value>>;
    close(): Promise<void>;
}

export interface LevelDatastoreOptions {
    db: (location: string, options?: any, cb?: ErrorCallback) => LevelUp;
    [key: string]: any;
}

export interface LevelDatastoreConstructor<Value = Buffer> {
    new(path: string, options?: LevelDatastoreOptions): LevelDatastore<Value>;
    (path: string, options?: LevelDatastoreOptions): LevelDatastore<Value>;
}

declare const LevelDatastore: LevelDatastoreConstructor;
export default LevelDatastore;
