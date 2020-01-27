// Type definitions for wav 1.0
// Project: https://github.com/TooTallNate/node-wav#readme
// Definitions by: Matthew Peveler <https://github.com/MasterOdin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Transform, TransformOptions } from "stream";
import { WriteStream } from 'fs';

export interface Format {
  audioFormat: number;
  endianness: 'LE' | 'BE';
  channels: number;
  sampleRate: number;
  byteRate: number;
  blockAlign: number;
  bitDepth: number;
  signed: boolean;
}

export interface UnknownChunk {
  id: string;
  data: any;
}

export class Reader extends Transform {
    constructor(opts?: TransformOptions);

    addListener(event: "format", listener: (format: Format) => void): this;
    addListener(event: "chunk", listener: (unknownChunk: UnknownChunk) => void): this;
    addListener(event: string, listener: (...args: any[]) => void): this;

    on(event: "format", listener: (format: Format) => void): this;
    on(event: "chunk", listener: (unknownChunk: UnknownChunk) => void): this;
    on(event: string, listener: (...args: any[]) => void): this;
}

export interface WriterOptions extends TransformOptions {
  format?: number;
  channels?: number;
  sampleRate?: number;
  bitDepth?: number;
}

export class Writer extends Transform {
  endianness: 'LE';
  format: number;
  channels: number;
  sampleRate: number;
  bitDepth: number;
  bytesProcessed: number;

  constructor(opts?: WriterOptions);

  addListener(event: "header", listener: (header: Buffer) => void): this;
  addListener(event: string, listener: (...args: any[]) => void): this;

  on(event: "header", listener: (header: Buffer) => void): this;
  on(event: string, listener: (...args: any[]) => void): this;
}

export class FileWriter extends Writer {
  path: string;
  file: WriteStream;

  constructor(path: string, opts?: WriterOptions);

  addListener(event: "done", listener: () => void): this;
  addListener(event: string, listener: (...args: any[]) => void): this;

  on(event: "done", listener: () => void): this;
  on(event: string, listener: (...args: any[]) => void): this;
}
