// Type definitions for node-bunyan
// Project: https://github.com/trentm/node-bunyan
// Definitions by: Alex Mikhalev <https://github.com/amikhalev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { EventEmitter } from 'events';

declare class Logger extends EventEmitter {
    constructor(options: Logger.LoggerOptions);
    addStream(stream: Logger.Stream): void;
    addSerializers(serializers: Logger.Serializers | Logger.StdSerializers): void;
    child(options: Logger.LoggerOptions, simple?: boolean): Logger;
    child(obj: Object, simple?: boolean): Logger;
    reopenFileStreams(): void;

    level(): string | number;
    level(value: number | string): void;
    levels(name: number | string, value: number | string): void;

    fields: any;
    src: boolean;

    trace(error: Error, format?: any, ...params: any[]): void;
    trace(buffer: Buffer, format?: any, ...params: any[]): void;
    trace(obj: Object, format?: any, ...params: any[]): void;
    trace(format: string, ...params: any[]): void;
    debug(error: Error, format?: any, ...params: any[]): void;
    debug(buffer: Buffer, format?: any, ...params: any[]): void;
    debug(obj: Object, format?: any, ...params: any[]): void;
    debug(format: string, ...params: any[]): void;
    info(error: Error, format?: any, ...params: any[]): void;
    info(buffer: Buffer, format?: any, ...params: any[]): void;
    info(obj: Object, format?: any, ...params: any[]): void;
    info(format: string, ...params: any[]): void;
    warn(error: Error, format?: any, ...params: any[]): void;
    warn(buffer: Buffer, format?: any, ...params: any[]): void;
    warn(obj: Object, format?: any, ...params: any[]): void;
    warn(format: string, ...params: any[]): void;
    error(error: Error, format?: any, ...params: any[]): void;
    error(buffer: Buffer, format?: any, ...params: any[]): void;
    error(obj: Object, format?: any, ...params: any[]): void;
    error(format: string, ...params: any[]): void;
    fatal(error: Error, format?: any, ...params: any[]): void;
    fatal(buffer: Buffer, format?: any, ...params: any[]): void;
    fatal(obj: Object, format?: any, ...params: any[]): void;
    fatal(format: string, ...params: any[]): void;
}

declare namespace Logger {
  const TRACE: number;
  const DEBUG: number;
  const INFO: number;
  const WARN: number;
  const ERROR: number;
  const FATAL: number;

  const stdSerializers: StdSerializers;

  function createLogger(options: LoggerOptions): Logger;

  function safeCycles(): (key: string, value: any) => any;

  function resolveLevel(value: number | string): number;

  interface Stream {
    type?: string;
    level?: number | string;
    path?: string;
    stream?: NodeJS.WritableStream | Stream;
    closeOnExit?: boolean;
    period?: string;
    count?: number;
  }

  interface LoggerOptions {
    name: string;
    streams?: Stream[];
    level?: string | number;
    stream?: NodeJS.WritableStream;
    serializers?: Serializers | StdSerializers;
    src?: boolean;
    [custom: string]: any;
  }

  interface Serializer {
    (input:any): any;
  }

  interface Serializers {
    [key: string]: Serializer
  }

  interface StdSerializers {
    err: Serializer;
    res: Serializer;
    req: Serializer;
  }

  interface RingBufferOptions {
    limit?: number;
  }

  class RingBuffer extends EventEmitter {
    constructor(options: RingBufferOptions);

    writable: boolean;
    records: any[];

    write(record: any): void;
    end(record?: any): void;
    destroy(): void;
    destroySoon(): void;
  }
}

export = Logger;
