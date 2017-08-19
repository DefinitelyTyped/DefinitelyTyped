// Type definitions for msgpack-lite 0.1
// Project: https://github.com/kawanet/msgpack-lite
// Definitions by: Endel Dreyer <https://github.com/endel/>, Edmund Fokschaner <https://github.com/efokschaner>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import * as stream from 'stream';

/**
 * encode from JS Object to MessagePack
 */
export function encode(input: any, options?: EncoderOptions): Buffer;

/**
 * decode from MessagePack to JS Object
 */
export function decode(input: Buffer | Uint8Array | number[], options?: DecoderOptions): any;

/**
 * create a stream that encodes from JS Object to MessagePack
 */
export function createEncodeStream(options?: EncoderOptions & stream.TransformOptions ): EncodeStream;

/**
 * create a stream that decodes from MessagePack (Buffer) to JS Object
 */
export function createDecodeStream(options?: DecoderOptions & stream.TransformOptions): DecodeStream;

/**
 * Codecs allow for Custom Extension Types
 * Register a custom extension type number to serialize/deserialize your own class instances.
 * https://github.com/kawanet/msgpack-lite#custom-extension-types-codecs
 * If you wish to modify the default built-in codec, you can access it at msgpack.codec.preset
 */
export function createCodec(options?: CodecOptions): Codec;

/**
 * The default built-in codec
 */
export const codec: {
  /**
   * The default built-in codec
   */
  preset: Codec;
};

export interface Codec {
  /**
   * Register a custom extension to serialize your own class instances
   *
   * @param etype an integer within the range of 0 and 127 (0x0 and 0x7F)
   * @param Class the constructor of the type you wish to serialize
   * @param packer a function that converts an instance of T to bytes
   */
  addExtPacker<T>(
    etype: number,
    Class: new(...args: any[]) => T,
    packer: (t: T) => Buffer | Uint8Array): void;

  /**
   * Register a custom extension to deserialize your own class instances
   *
   * @param etype an integer within the range of 0 and 127 (0x0 and 0x7F)
   * @param unpacker a function that converts bytes to an instance of T
   */
  addExtUnpacker<T>(etype: number, unpacker: (data: Buffer | Uint8Array) => T): void;
}

export interface Encoder {
  bufferish: any;
  maxBufferSize: number;
  minBufferSize: number;
  offset: number;
  start: number;
  write(chunk: any): void;
  fetch(): void;
  flush(): void;
  push(chunk: any): void;
  pull(): number;
  read(): number;
  reserve(length: number): number;
  send(buffer: Buffer): void;
  encode(chunk: any): void;
  end(chunk: any): void;
}

export interface Decoder {
  bufferish: any;
  offset: number;
  fetch(): void;
  flush(): void;
  pull(): number;
  read(): number;
  write(chunk: any): void;
  reserve(length: number): number;
  decode(chunk: any): void;
  push(chunk: any): void;
  end(chunk: any): void;
}

export interface EncodeStream extends stream.Transform {
  encoder: Encoder;
}

export interface DecodeStream extends stream.Transform {
  decoder: Decoder;
}

export interface CodecOptions {
  /**
   * It includes the preset extensions for JavaScript native objects.
   * @see https://github.com/kawanet/msgpack-lite#extension-types
   * @default false
   */
  preset?: boolean;
  /**
   * It runs a validation of the value before writing it into buffer.
   * This is the default behavior for some old browsers which do not support ArrayBuffer object.
   * @default varies
   */
  safe?: boolean;
  /**
   * It uses raw formats instead of bin and str.
   * Set true for compatibility with msgpack's old spec.
   * @see https://github.com/kawanet/msgpack-lite#compatibility-mode
   * @default false
   */
  raw?: boolean;
  /**
   * It decodes msgpack's int64/uint64 formats with int64-buffer object.
   * int64-buffer is a cutom integer type with 64 bits of precision instead
   * of the built-in IEEE-754 53 bits. See https://github.com/kawanet/int64-buffer
   * @default false
   */
  int64?: boolean;
  /**
   * It ties msgpack's bin format with ArrayBuffer object, instead of Buffer object.
   * @default false
   */
  binarraybuffer?: boolean;
  /**
   * It returns Uint8Array object when encoding, instead of Buffer object.
   */
  uint8array?: boolean;
}

export interface EncoderOptions {
  codec?: Codec;
}

export interface DecoderOptions {
  codec?: Codec;
}
