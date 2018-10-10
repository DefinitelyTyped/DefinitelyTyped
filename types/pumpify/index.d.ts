// Type definitions for pumpify 1.4
// Project: https://github.com/mafintosh/pumpify
// Definitions by: Justin Beckwith <https://github.com/JustinBeckwith>
//                 Ankur Oberoi <https://github.com/aoberoi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Stream, Writable, Readable, Duplex } from 'stream';
import * as duplexify from 'duplexify';

declare class Pumpify extends Duplex implements duplexify.Duplexify {
  constructor(...streams: Stream[]);
  constructor(streams: Stream[]);
  setPipeline(...streams: Stream[]): void;
  setPipeline(streams: Stream[]): void;

  // Duplexify members
  setWritable(writable: Writable): void;
  setReadable(readable: Readable): void;
}

interface PumpifyFactoryOptions {
  autoDestroy: boolean;
  destroy: boolean;
  objectMode: boolean;
  highWaterMark: number;
}

declare namespace Pumpify {
  let obj: typeof Pumpify;
  function ctor(opts: PumpifyFactoryOptions): typeof Pumpify;
}

export = Pumpify;
