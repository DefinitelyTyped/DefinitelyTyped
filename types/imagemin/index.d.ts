// Type definitions for imagemin 7.0
// Project: https://github.com/imagemin/imagemin#readme
// Definitions by: Jeff Chan <https://github.com/hkjeffchan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare function imagemin(input: string[], options?: imagemin.Options): Promise<imagemin.Result[]>

declare namespace imagemin {
  type Plugin = (input: Buffer) => Promise<Buffer>;

  interface Options {
    destination: string;
    plugins: ReadonlyArray<Plugin>;
    glob?: boolean;
  }

  interface Result {
    data: Buffer;
    sourcePath: string;
    destinationPath: string;
  }

  interface BufferOptions {
    plugins: ReadonlyArray<Plugin>;
  }

  function buffer(buffer: Buffer, options?: BufferOptions): Promise<Buffer>;
}

export = imagemin;
