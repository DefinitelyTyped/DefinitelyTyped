
 /// <reference types="node" />

 import { Encodable } from 'rsocket-types';
import {byteLength} from './RSocketBufferUtils';

/**
 * Commonly used subset of the allowed Node Buffer Encoder types.
 */
export declare type Encoder<T extends Encodable> = {
  byteLength: (value: Encodable) => number,
  encode: (value: Encodable, buffer: Buffer, start: number, end: number) => number,
  decode: (buffer: Buffer, start: number, end: number) => T
};

/**
 * The Encoders object specifies how values should be serialized/deserialized
 * to/from binary.
 */
export declare type Encoders<T extends Encodable> = {
  data: Encoder<T>,
  dataMimeType: Encoder<string>,
  message: Encoder<string>,
  metadata: Encoder<T>,
  metadataMimeType: Encoder<string>,
  resumeToken: Encoder<T>
};

export declare const UTF8Encoder: Encoder<string>

export declare const BufferEncoder: Encoder<Buffer>

/**
 * Encode all values as UTF8 strings.
 */
export declare const Utf8Encoders: Encoders<string>

/**
 * Encode all values as buffers.
 */
export declare const BufferEncoders: Encoders<Buffer>
