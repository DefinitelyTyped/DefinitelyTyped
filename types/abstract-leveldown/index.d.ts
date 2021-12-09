// Type definitions for abstract-leveldown 5.0
// Project: https://github.com/Level/abstract-leveldown
// Definitions by: Meirion Hughes <https://github.com/MeirionHughes>
//                 Daniel Byrne <https://github.com/danwbyrne>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export interface AbstractOptions {
  readonly [k: string]: any;
}

export type ErrorCallback = (err: Error | undefined) => void;
export type ErrorValueCallback<V> = (err: Error | undefined, value: V) => void;
export type ErrorKeyValueCallback<K, V> = (err: Error | undefined, key: K, value: V) => void;

export interface AbstractOpenOptions extends AbstractOptions {
  createIfMissing?: boolean | undefined;
  errorIfExists?: boolean | undefined;
}

export interface AbstractGetOptions extends AbstractOptions {
  asBuffer?: boolean | undefined;
}

export interface AbstractLevelDOWN<K = any, V = any> extends AbstractOptions {
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
  batch(
    array: ReadonlyArray<AbstractBatch<K, V>>,
    options: AbstractOptions,
    cb: ErrorCallback,
  ): AbstractChainedBatch<K, V>;

  iterator(options?: AbstractIteratorOptions<K>): AbstractIterator<K, V>;
}

export interface AbstractLevelDOWNConstructor {
  // tslint:disable-next-line no-unnecessary-generics
  new <K = any, V = any>(location: string): AbstractLevelDOWN<K, V>;
  // tslint:disable-next-line no-unnecessary-generics
  <K = any, V = any>(location: string): AbstractLevelDOWN<K, V>;
}

export interface AbstractIteratorOptions<K = any> extends AbstractOptions {
  gt?: K | undefined;
  gte?: K | undefined;
  lt?: K | undefined;
  lte?: K | undefined;
  reverse?: boolean | undefined;
  limit?: number | undefined;
  keys?: boolean | undefined;
  values?: boolean | undefined;
  keyAsBuffer?: boolean | undefined;
  valueAsBuffer?: boolean | undefined;
}

export type AbstractBatch<K = any, V = any> = PutBatch<K, V> | DelBatch<K, V>;

export interface PutBatch<K = any, V = any> {
  readonly type: 'put';
  readonly key: K;
  readonly value: V;
}

export interface DelBatch<K = any, V = any> {
  readonly type: 'del';
  readonly key: K;
}

export interface AbstractChainedBatch<K = any, V = any> extends AbstractOptions {
  put: (key: K, value: V) => this;
  del: (key: K) => this;
  clear: () => this;
  write(cb: ErrorCallback): any;
  write(options: any, cb: ErrorCallback): any;
}

export interface AbstractChainedBatchConstructor {
  // tslint:disable-next-line no-unnecessary-generics
  new <K = any, V = any>(db: any): AbstractChainedBatch<K, V>;
  // tslint:disable-next-line no-unnecessary-generics
  <K = any, V = any>(db: any): AbstractChainedBatch<K, V>;
}

export interface AbstractIterator<K, V> extends AbstractOptions {
  db: AbstractLevelDOWN<K, V>;
  next(cb: ErrorKeyValueCallback<K, V>): this;
  end(cb: ErrorCallback): void;
}

export interface AbstractIteratorConstructor {
  // tslint:disable-next-line no-unnecessary-generics
  new <K = any, V = any>(db: any): AbstractIterator<K, V>;
  // tslint:disable-next-line no-unnecessary-generics
  <K = any, V = any>(db: any): AbstractIterator<K, V>;
}

export const AbstractLevelDOWN: AbstractLevelDOWNConstructor;
export const AbstractIterator: AbstractIteratorConstructor;
export const AbstractChainedBatch: AbstractChainedBatchConstructor;
