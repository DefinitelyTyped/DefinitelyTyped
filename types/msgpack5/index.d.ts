// Type definitions for msgpack5 v3.4.0
// Project: https://github.com/mcollina/msgpack5/
// Definitions by: Wonshik Kim <https://github.com/wokim/>, Kei Son <https://github.com/heycalmdown/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import stream = require('stream');
import bl = require('bl');
  
interface MsgPackOptions {
  forceFloat64?: boolean;
  compatibilityMode?: boolean;
}

declare namespace msgpack5 {
  interface EncodeDecodeOptions {
    header?: boolean;
  }

  class Base extends stream.Transform {}  
  class Encoder extends Base {}
  class Decoder extends Base {}

  interface MessagePack {
    encode(obj: any): bl;
    decode(buf: Buffer): any;
    decode(buf: bl): any;
    register<T>(type: number, $constructor: any, encode: (obj: T) => Buffer, decode: (data: Buffer) => T): MessagePack;
    registerEncoder<T>(check: (obj: T) => boolean, encode: (obj: T) => Buffer): MessagePack;
    registerDecoder(type: number, decode: (data: Buffer) => any): MessagePack;
    encoder(opts?: EncodeDecodeOptions): Encoder;
    decoder(opts?: EncodeDecodeOptions): Decoder;
  }
}

declare function msgpack5(opts?: MsgPackOptions): msgpack5.MessagePack;

export = msgpack5;
