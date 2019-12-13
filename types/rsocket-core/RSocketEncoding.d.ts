/// <reference types="node" />

import { Encodable } from 'rsocket-types';

/**
 * Commonly used subset of the allowed Node Buffer Encoder types.
 */
export interface Encoder<T extends Encodable> {
  byteLength: (value: Encodable) => number;
  encode: (value: Encodable, buffer: Buffer, start: number, end: number) => number;
  decode: (buffer: Buffer, start: number, end: number) => T;
}

/**
 * The Encoders object specifies how values should be serialized/deserialized
 * to/from binary.
 */
export interface Encoders<T extends Encodable> {
  data: Encoder<T>;
  dataMimeType: Encoder<string>;
  message: Encoder<string>;
  metadata: Encoder<T>;
  metadataMimeType: Encoder<string>;
  resumeToken: Encoder<T>;
}

export const UTF8Encoder: Encoder<string>;

export const BufferEncoder: Encoder<Buffer>;

/**
 * Encode all values as UTF8 strings.
 */
export const Utf8Encoders: Encoders<string>;

/**
 * Encode all values as buffers.
 */
export const BufferEncoders: Encoders<Buffer>;
