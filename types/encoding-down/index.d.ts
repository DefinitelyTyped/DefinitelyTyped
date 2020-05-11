// Type definitions for encoding-down 5.0
// Project: https://github.com/Level/encoding-down
// Definitions by: Meirion Hughes <https://github.com/MeirionHughes>
//                 Daniel Byrne <https://github.com/danwbyrne>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

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

import { CodecOptions, CodecEncoder } from 'level-codec';

interface EncodingDown<K = any, V = any> extends AbstractLevelDOWN<K, V> {
  get(key: K, cb: ErrorValueCallback<V>): void;
  get(key: K, options: EncodingDown.GetOptions, cb: ErrorValueCallback<V>): void;

  put(key: K, value: V, cb: ErrorCallback): void;
  put(key: K, value: V, options: EncodingDown.PutOptions, cb: ErrorCallback): void;

  del(key: K, cb: ErrorCallback): void;
  del(key: K, options: EncodingDown.DelOptions, cb: ErrorCallback): void;

  batch(): EncodingDown.ChainedBatch;
  batch(array: AbstractBatch[], cb: ErrorCallback): EncodingDown.ChainedBatch;
  batch(array: AbstractBatch[], options: EncodingDown.BatchOptions, cb: ErrorCallback): EncodingDown.ChainedBatch;

  iterator(options?: EncodingDown.IteratorOptions): AbstractIterator<any, any>;
}

declare namespace EncodingDown {
  interface GetOptions extends AbstractGetOptions, CodecOptions {}
  interface PutOptions extends AbstractOptions, CodecOptions {}
  interface DelOptions extends AbstractOptions, CodecOptions {}
  interface BatchOptions extends AbstractOptions, CodecOptions {}
  interface IteratorOptions extends AbstractIteratorOptions, CodecOptions {}
  interface ChainedBatch<K = any, V = any> extends AbstractChainedBatch<K, V> {
    write(cb: any): any;
    write(options: CodecOptions & AbstractOptions, cb: any): any;
  }
  interface Constructor {
    // tslint:disable-next-line:no-unnecessary-generics
    <K = any, V = any>(db: AbstractLevelDOWN, options?: CodecOptions): EncodingDown<K, V>;
    // tslint:disable-next-line:no-unnecessary-generics
    new <K = any, V = any>(db: AbstractLevelDOWN, options?: CodecOptions): EncodingDown<K, V>;
  }
}

declare const EncodingDown: EncodingDown.Constructor;
export default EncodingDown;
