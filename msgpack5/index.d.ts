// Type definitions for msgpack5 v3.4.0
// Project: https://github.com/mcollina/msgpack5/
// Definitions by: Wonshik Kim <https://github.com/wokim/>
// Definitions by: Kei Son <https://github.com/heycalmdown/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import stream = require('stream');
import bl = require('bl');
  
interface Options {
  forceFloat64: boolean;
  compatibilityMode: boolean;
}

declare namespace msgpack5 {
  interface Options {
    header?: boolean;
    msgpack?: any;
  }

  class Base extends stream.Transform {
    protected _header: any;
    protected _msgpack: any;
  }  

  class Encoder extends Base {
    constructor(opts?: Options);
    public _transform(obj: any, enc: any, done: Function): any;
  }

  class Decoder extends Base {
    constructor(opts?: Options);
    public _chunks: bl;
    public _length: number;
    public _transform(buf: any, enc: any, done: Function): any;
  }

  interface MessagePack {
    encode(obj: any): bl;
    decode<T>(buf: Buffer): T;
    decode<T>(buf: bl): T;
    register(type: number, $constructor: any, encode: (obj: any) => Buffer, decode: (data: Buffer) => any): any;
    registerEncoder(check: (obj: any) => boolean, encode: (obj: any) => Buffer): any;
    registerDecoder(type: number, decode: (data: Buffer) => any): any;
    encoder(opts?: Options): Encoder;
    decoder(opts?: Options): Decoder;
  }
}

declare function msgpack5(opts?: Options): msgpack5.MessagePack;

export = msgpack5;
