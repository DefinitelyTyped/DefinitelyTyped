// Type definitions for datastore-level 0.14
// Project: https://github.com/ipfs/js-datastore-level#readme
// Definitions by: Carson Farmer <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />
// TypeScript Version: 3.6

import { LevelUp } from 'levelup';
import { Datastore } from 'interface-datastore';
import { AbstractLevelDOWN, AbstractIterator } from 'abstract-leveldown'

/**
 * A datastore backed by leveldb.
 */
export interface LevelDatastore<Value = Buffer> extends Datastore<Value> {
    db: LevelUp<AbstractLevelDOWN<string, Value>, AbstractIterator<string, Value>>
}

export interface LevelDatastoreOptions {
    db?: (location: string, options?: any) => LevelUp;
    [key: string]: any;
}

export interface LevelDatastoreConstructor<Value = Buffer> {
    new <Value>(path: string, options?: LevelDatastoreOptions): LevelDatastore<Value>;
    <Value>(path: string, options?: LevelDatastoreOptions): LevelDatastore<Value>;
}

declare const LevelDatastore: LevelDatastoreConstructor;
export default LevelDatastore;
