// Type definitions for @ronomon/hash-table 2.0
// Project: https://github.com/ronomon/hash-table#readme
// Definitions by: airglow923 <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = ronomon__hash_table;

declare class ronomon__hash_table {
  constructor(
    keySize: number,
    valueSize: number,
    elementsMin: number,
    elementsMax: number
  );

  cache(
    key: Buffer,
    keyOffset: number,
    value: Buffer,
    valueOffset: number
  ): number;

  exist(key: Buffer, keyOffset: number): number;

  get(
    key: Buffer,
    keyOffset: number,
    value: Buffer,
    valueOffset: number
  ): number;

  set(
    key: Buffer,
    keyOffset: number,
    value: Buffer,
    valueOffset: number
  ): number;

  unset(key: Buffer, keyOffset: number): number;

  static BUCKETS_MAX: number;

  static BUCKETS_MIN: number;

  static BUFFERS_MAX: number;

  static BUFFERS_MIN: number;

  static BUFFER_MAX: number;

  static ELEMENTS_MAX: number;

  static ELEMENTS_MIN: number;

  static ERROR_MAXIMUM_CAPACITY_EXCEEDED: string;

  static ERROR_MODE: string;

  static ERROR_SET: string;

  static KEY_MAX: number;

  static KEY_MIN: number;

  static VALUE_MAX: number;

  static VALUE_MIN: number;

  static bucket(keySize: number, valueSize: number): number;

  static buckets(elements: number, buffers: number): number;

  static buffers(keySize: number, valueSize: number, elements: number): number;

  static capacity(elements: number): number;
}
