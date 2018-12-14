// Type definitions for rocksdb 3.0
// Project: https://github.com/Level/rocksdb
// Definitions by: Meirion Hughes <https://github.com/MeirionHughes>
//                 Daniel Byrne <https://github.com/danwbyrne>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import {
  AbstractLevelDOWN,
  AbstractIteratorOptions,
  AbstractIterator,
  AbstractOpenOptions,
  AbstractGetOptions,
  ErrorCallback,
  ErrorValueCallback,
  AbstractChainedBatch,
  AbstractBatch,
  AbstractOptions
} from 'abstract-leveldown';

interface RocksDB extends AbstractLevelDOWN<RocksDB.Bytes, RocksDB.Bytes> {
  open(cb: ErrorCallback): void;
  open(options: RocksDB.OpenOptions, cb: ErrorCallback): void;

  get(key: RocksDB.Bytes, cb: ErrorValueCallback<RocksDB.Bytes>): void;
  get(key: RocksDB.Bytes, options: RocksDB.GetOptions, cb: ErrorValueCallback<RocksDB.Bytes>): void;

  put(key: RocksDB.Bytes, value: RocksDB.Bytes, cb: ErrorCallback): void;
  put(key: RocksDB.Bytes, value: RocksDB.Bytes, options: RocksDB.PutOptions, cb: ErrorCallback): void;

  del(key: RocksDB.Bytes, cb: ErrorCallback): void;
  del(key: RocksDB.Bytes, options: RocksDB.DelOptions, cb: ErrorCallback): void;

  batch(): AbstractChainedBatch<RocksDB.Bytes, RocksDB.Bytes>;
  batch(array: AbstractBatch[], cb: ErrorCallback): AbstractChainedBatch<RocksDB.Bytes, RocksDB.Bytes>;
  batch(array: AbstractBatch[], options: RocksDB.BatchOptions, cb: ErrorCallback): AbstractChainedBatch<RocksDB.Bytes, RocksDB.Bytes>;

  approximateSize(start: RocksDB.Bytes, end: RocksDB.Bytes, cb: RocksDB.ErrorSizeCallback): void;
  compactRange(start: RocksDB.Bytes, end: RocksDB.Bytes, cb: ErrorCallback): void;
  getProperty(property: string): string;
  destroy(location: string, cb: ErrorCallback): void;
  repair(location: string, cb: ErrorCallback): void;
  iterator(options?: RocksDB.IteratorOptions): RocksDB.Iterator;
}

declare namespace RocksDB {
  type Bytes = string | Buffer;
  type ErrorSizeCallback = (err: Error | undefined, size: number) => void;
  // tslint:disable-next-line:no-empty-interface
  interface OpenOptions extends AbstractOpenOptions {}

  interface GetOptions extends AbstractGetOptions {
    fillCache?: boolean;
  }

  interface PutOptions extends AbstractOptions {
    sync?: boolean;
  }

  interface DelOptions extends AbstractOptions {
    sync?: boolean;
  }

  interface BatchOptions extends AbstractOptions {
    sync?: boolean;
  }

  interface IteratorOptions extends AbstractIteratorOptions<Bytes> {
    fillCache?: boolean;
  }

  interface Iterator extends AbstractIterator<Bytes, Bytes> {
    seek(key: Bytes): void;
    binding: any;
    cache: any;
    finished: any;
    fastFuture: any;
  }

  interface Constructor {
    new(location: string): RocksDB;
    (location: string): RocksDB;
  }
}

declare const RocksDB: RocksDB.Constructor;
export default RocksDB;
