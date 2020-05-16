// Type definitions for datastore-level 0.14
// Project: https://github.com/ipfs/js-datastore-level#readme
// Definitions by: Carson Farmer <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />
// TypeScript Version: 3.6

import { LevelUp } from 'levelup';
import { Datastore, Batch } from 'interface-datastore';
import { AbstractLevelDOWN, AbstractIterator, AbstractBatch } from 'abstract-leveldown';

export interface LevelDatastoreBatch<Value = Buffer> extends Batch<Value> {
    ops: Array<AbstractBatch<string, Value>>;
}

/**
 * A datastore backed by leveldb.
 */
export interface LevelDatastore<Value = Buffer> extends Datastore<Value> {
    db: LevelUp<AbstractLevelDOWN<string, Value>, AbstractIterator<string, Value>>;
    batch(): LevelDatastoreBatch<Value>;
}

export interface LevelDatastoreOptions {
    db?: (location: string, options?: any) => LevelUp;
    [key: string]: any;
}

export interface LevelDatastoreConstructor {
    new (path: string, options?: LevelDatastoreOptions): LevelDatastore;
    (path: string, options?: LevelDatastoreOptions): LevelDatastore;
}

declare const LevelDatastore: LevelDatastoreConstructor;
export default LevelDatastore;
