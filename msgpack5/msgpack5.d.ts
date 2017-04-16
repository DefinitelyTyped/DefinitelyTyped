// Type definitions for msgpack5 v1.3.2
// Project: https://github.com/mcollina/msgpack5/
// Definitions by: Wonshik Kim <https://github.com/wokim/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />
/// <reference path="../bl/bl.d.ts" />

declare module "msgpack5" {
  import stream = require('stream');
  import bl = require('bl');
  
  interface Options {
    header?: boolean;
    msgpack?: any;
  }

  class Base extends stream.Transform {
    protected _header: boolean;
    protected _msgpack: any;
  }  

  class Encoder extends Base {
    constructor(opts?: Options);
    public _transform(obj: any, enc: any, done: Function): void;
  }

  class Decoder extends Base {
    constructor(opts?: Options);
    public _chunks: bl;
    public _length: number;
    public _transform(buf: any, enc: any, done: Function): void;
  }

  interface MessagePack {
    (): {
      encode(obj: any): bl;
      decode<T>(buf: Buffer): T;
      decode<T>(buf: bl): T;
      register(type: number, $constructor: any, encode: (obj: any) => Buffer, decode: (data: Buffer) => any): MessagePack;
      registerEncoder(check: (obj: any) => boolean, encode: (obj: any) => Buffer): MessagePack;
      registerDecoder(type: number, decode: (data: Buffer) => any): MessagePack;
      encoder(opts?: Options): Encoder;
      decoder(opts?: Options): Decoder;
    };
  }

  var msgpack: MessagePack;
  export = msgpack;
}