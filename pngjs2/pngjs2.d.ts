// Type definitions for pngjs2 1.2.0
// Project: https://www.npmjs.com/package/pngjs2
// Definitions by: Elisée Maurer <https://sparklinlabs.com/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "pngjs2" {
  import fs = require("fs");
  import events = require("events");
  import stream = require("stream");

  interface PNGOptions {
    width?: number;
    height?: number;
    checkCRC?: boolean;
    deflateChunkSize?: number;
    deflateLevel?: number;
    deflateStrategy?: number;
    deflateFactory?: any;
    filterType?: number|number[];
    colorType?: number;
    inputHasAlpha?: boolean;
  }
  
  interface PNGMetadata {
    width: number;
    height: number;
    palette: boolean;
    color: boolean;
    alpha: boolean;
    interlace: boolean;
  }

  export class PNG extends stream.Writable {
    constructor(options?: PNGOptions);

    width: number;
    height: number;
    data: Buffer;
    gamma: number;

    on(event: string, callback: Function): PNG;
    on(event: "metadata", callback: (metadata: PNGMetadata) => void): PNG;
    on(event: "parsed", callback: (data: Buffer) => void): PNG;
    on(event: "error", callback: (err: Error) => void): PNG;

    parse(data: string|Buffer, callback?: (err: Error, data: Buffer) => void): PNG;
    pack(): PNG;
    pipe(destination: fs.WriteStream): PNG;

    static bitblt(src: PNG, dst: PNG, srcX: number, srcY: number,
                           width: number, height: number, deltaX: number, deltaY: number): void;

    // This method's signature is wrong in 1.2.0, see https://github.com/lukeapage/pngjs2/pull/29
    // Use the static version in the meantime
    /*bitblt(dst: PNG, srcX: number, srcY: number,
             width: number, height: number, deltaX: number, deltaY: number): void;*/
  }
  
  export namespace PNG {
    namespace sync {
      function read(buffer: string|Buffer, options?: PNGOptions): PNG;
    }
  }
}
