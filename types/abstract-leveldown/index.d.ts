// Type definitions for abstract-leveldown 5.0
// Project: https://github.com/Level/abstract-leveldown
// Definitions by: Meirion Hughes <https://github.com/MeirionHughes>
//                 Daniel Byrne <https://github.com/danwbyrne>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface AbstractOptions {
  readonly [k: string]: any;
}

export type ErrorCallback = (err: Error | undefined) => void;
export type ErrorValueCallback<V> = (err: Error | undefined, value: V) => void;
export type ErrorKeyValueCallback<K, V> = (err: Error | undefined, key: K, value: V) => void;

export interface AbstractOpenOptions extends AbstractOptions {
  createIfMissing?: boolean;
  errorIfExists?: boolean;
}

export interface AbstractGetOptions extends AbstractOptions {
  asBuffer?: boolean;
}

export interface AbstractLevelDOWN<K, V> extends AbstractOptions {
  open(cb: ErrorCallback): void;
  open(options: AbstractOpenOptions, cb: ErrorCallback): void;

  close(cb: ErrorCallback): void;

  get(key: K, cb: ErrorValueCallback<V>): void;
  get(key: K, options: AbstractGetOptions, cb: ErrorValueCallback<V>): void;

  put(key: K, value: V, cb: ErrorCallback): void;
  put(key: K, value: V, options: AbstractOptions, cb: ErrorCallback): void;

  del(key: K, cb: ErrorCallback): void;
  del(key: K, options: AbstractOptions, cb: ErrorCallback): void;

  batch(): AbstractChainedBatch<K, V>;
  batch(array: ReadonlyArray<AbstractBatch<K, V>>, cb: ErrorCallback): AbstractChainedBatch<K, V>;
  batch(array: ReadonlyArray<AbstractBatch<K, V>>, options: AbstractOptions, cb: ErrorCallback): AbstractChainedBatch<K, V>;

  iterator(options?: AbstractIteratorOptions<K>): AbstractIterator<K, V>;
}

export interface AbstractLevelDOWNConstructor {
  new (location: string): AbstractLevelDOWN<any, any>;
  (location: string): AbstractLevelDOWN<any, any>;
}

export interface AbstractIteratorOptions<K> extends AbstractOptions {
  gt?: K;
  gte?: K;
  lt?: K;
  lte?: K;
  reverse?: boolean;
  limit?: number;
  keys?: boolean;
  values?: boolean;
  keyAsBuffer?: boolean;
  valueAsBuffer?: boolean;
}

export type AbstractBatch<K, V> = PutBatch<K, V> | DelBatch<K, V>;

export interface PutBatch<K, V> {
  readonly type: 'put';
  readonly key: K;
  readonly value: V;
}

export interface DelBatch<K, V> {
  readonly type: 'del';
  readonly key: K;
}

export interface AbstractChainedBatch<K, V> extends AbstractChainedBatchConstructor, AbstractOptions {
  put: (key: K, value: V) => this;
  del: (key: K) => this;
  clear: () => this;
  write(cb: ErrorCallback): any;
  write(options: any, cb: ErrorCallback): any;
}

export interface AbstractChainedBatchConstructor {
  new(db: any): AbstractChainedBatch<any, any>;
  (db: any): AbstractChainedBatch<any, any>;
}

export interface AbstractIterator<K, V> extends AbstractChainedBatchConstructor {
  db: AbstractLevelDOWN<K, V>;
  next(cb: ErrorKeyValueCallback<K, V>): this;
  end(cb: ErrorCallback): void;
}

export interface AbstractIteratorConstructor {
  new(db: any): AbstractIterator<any, any>;
  (db: any): AbstractIterator<any, any>;
}

export const AbstractLevelDOWN: AbstractLevelDOWNConstructor;
export const AbstractIterator: AbstractIteratorConstructor;
export const AbstractChainedBatch: AbstractChainedBatchConstructor;
