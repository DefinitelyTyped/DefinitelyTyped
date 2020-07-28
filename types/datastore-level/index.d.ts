// Type definitions for datastore-level 1.1
// Project: https://github.com/ipfs/js-datastore-level#readme
// Definitions by: Carson Farmer <https://github.com/carsonfarmer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />
// TypeScript Version: 3.6

import { LevelUp } from 'levelup';
import { Batch, Adapter } from 'interface-datastore';
import { AbstractLevelDOWN, AbstractIterator, AbstractBatch } from 'abstract-leveldown';

interface LevelDatastoreBatch<Value = Buffer> extends Batch<Value> {
    ops: Array<AbstractBatch<string, Value>>;
}

/**
 * A datastore backed by leveldb.
 */
interface LevelDatastore<Value = Buffer> extends Adapter<Value> {
    db: LevelUp<AbstractLevelDOWN<string, Value>, AbstractIterator<string, Value>>;
    batch(): LevelDatastoreBatch<Value>;
}

interface LevelDatastoreOptions {
    db?: (location: string, options?: any) => LevelUp;
    [key: string]: any;
}

interface LevelDatastoreConstructor {
    new (path: string, options?: LevelDatastoreOptions): LevelDatastore;
    (path: string, options?: LevelDatastoreOptions): LevelDatastore;
}

declare const LevelDatastore: LevelDatastoreConstructor;
export = LevelDatastore;
