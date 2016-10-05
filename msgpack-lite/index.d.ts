// Type definitions for msgpack-lite 0.1.20
// Project: https://github.com/kawanet/msgpack-lite
// Definitions by: Endel Dreyer <https://github.com/endel/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />
declare module "msgpack-lite" {
  import { Transform } from "stream";

  namespace MsgpackLite {
    interface BufferOptions { codec: any; }

    interface Encoder {
      bufferish: any;
      maxBufferSize: number;
      minBufferSize: number;
      offset: number;
      start: number;
      write: (chunk: any) => void;
      fetch: () => void;
      flush: () => void;
      push: (chunk: any) => void;
      pull: () => number;
      read: () => number;
      reserve: (length: number) => number;
      send: (buffer: Buffer) => void;
      encode: (chunk: any) => void;
      end: (chunk: any) => void;
    }

    interface Decoder {
      bufferish: any;
      offset: number;
      fetch: () => void;
      flush: () => void;
      pull: () => number;
      read: () => number;
      write: (chunk: any) => void;
      reserve: (length: number) => number;
      decode: (chunk: any) => void;
      push: (chunk: any) => void;
      end: (chunk: any) => void;
    }

    interface EncodeStream extends Transform {
      encoder: Encoder;
    }
    interface DecodeStream extends Transform {
      decoder: Decoder;
    }

    interface Codec {
      new (options?: any): Codec;
      options: any;
      init (): void;
    }

    export function encode(input: any, options?: BufferOptions): any;
    export function decode(input: Buffer | Uint8Array | Array<number>, options?: BufferOptions): any;
    export function createEncodeStream (): EncodeStream;
    export function createDecodeStream (): DecodeStream;
    export function createCodec (options?: any): Codec;
    export function codec (): { preset: Codec };
  }

  export = MsgpackLite;
}
