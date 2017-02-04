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

    /**
     * Returns a boolean: is the `trace` level enabled?
     * 
     * This is equivalent to `log.isTraceEnabled()` or `log.isEnabledFor(TRACE)` in log4j.
     */
    trace(): boolean;

    /**
     * Special case to log an `Error` instance to the record.
     * This adds an `err` field with exception details
     * (including the stack) and sets `msg` to the exception
     * message or you can specify the `msg`.
     */
    trace(error: Error, format?: any, ...params: any[]): void;

    trace(buffer: Buffer, format?: any, ...params: any[]): void;

    /**
     * Uses `util.format` for msg formatting.
     */
    trace(format: string | number, ...params: any[]): void;

    /**
     * The first field can optionally be a "fields" object, which
     * is merged into the log record.
     * 
     * To pass in an Error *and* other fields, use the `err`
     * field name for the Error instance.
     */
    trace(obj: Object, format?: any, ...params: any[]): void;

    /**
     * Returns a boolean: is the `debug` level enabled?
     * 
     * This is equivalent to `log.isDebugEnabled()` or `log.isEnabledFor(DEBUG)` in log4j.
     */
    debug(): boolean;

    /**
     * Special case to log an `Error` instance to the record.
     * This adds an `err` field with exception details
     * (including the stack) and sets `msg` to the exception
     * message or you can specify the `msg`.
     */
    debug(error: Error, format?: any, ...params: any[]): void;

    debug(buffer: Buffer, format?: any, ...params: any[]): void;

    /**
     * Uses `util.format` for msg formatting.
     */
    debug(format: string | number, ...params: any[]): void;

    /**
     * The first field can optionally be a "fields" object, which
     * is merged into the log record.
     * 
     * To pass in an Error *and* other fields, use the `err`
     * field name for the Error instance.
     */
    debug(obj: Object, format?: any, ...params: any[]): void;

    /**
     * Returns a boolean: is the `info` level enabled?
     * 
     * This is equivalent to `log.isInfoEnabled()` or `log.isEnabledFor(INFO)` in log4j.
     */
    info(): boolean;

    /**
     * Special case to log an `Error` instance to the record.
     * This adds an `err` field with exception details
     * (including the stack) and sets `msg` to the exception
     * message or you can specify the `msg`.
     */
    info(error: Error, format?: any, ...params: any[]): void;

    info(buffer: Buffer, format?: any, ...params: any[]): void;

    /**
     * Uses `util.format` for msg formatting.
     */
    info(format: string | number, ...params: any[]): void;

    /**
     * The first field can optionally be a "fields" object, which
     * is merged into the log record.
     * 
     * To pass in an Error *and* other fields, use the `err`
     * field name for the Error instance.
     */
    info(obj: Object, format?: any, ...params: any[]): void;

    /**
     * Returns a boolean: is the `warn` level enabled?
     * 
     * This is equivalent to `log.isWarnEnabled()` or `log.isEnabledFor(WARN)` in log4j.
     */
    warn(): boolean;

    /**
     * Special case to log an `Error` instance to the record.
     * This adds an `err` field with exception details
     * (including the stack) and sets `msg` to the exception
     * message or you can specify the `msg`.
     */
    warn(error: Error, format?: any, ...params: any[]): void;

    warn(buffer: Buffer, format?: any, ...params: any[]): void;

    /**
     * Uses `util.format` for msg formatting.
     */
    warn(format: string | number, ...params: any[]): void;

    /**
     * The first field can optionally be a "fields" object, which
     * is merged into the log record.
     * 
     * To pass in an Error *and* other fields, use the `err`
     * field name for the Error instance.
     */
    warn(obj: Object, format?: any, ...params: any[]): void;

    /**
     * Returns a boolean: is the `error` level enabled?
     * 
     * This is equivalent to `log.isErrorEnabled()` or `log.isEnabledFor(ERROR)` in log4j.
     */
    error(): boolean;

    /**
     * Special case to log an `Error` instance to the record.
     * This adds an `err` field with exception details
     * (including the stack) and sets `msg` to the exception
     * message or you can specify the `msg`.
     */
    error(error: Error, format?: any, ...params: any[]): void;

    error(buffer: Buffer, format?: any, ...params: any[]): void;

    /**
     * Uses `util.format` for msg formatting.
     */
    error(format: string | number, ...params: any[]): void;

    /**
     * The first field can optionally be a "fields" object, which
     * is merged into the log record.
     * 
     * To pass in an Error *and* other fields, use the `err`
     * field name for the Error instance.
     */
    error(obj: Object, format?: any, ...params: any[]): void;

    /**
     * Returns a boolean: is the `fatal` level enabled?
     * 
     * This is equivalent to `log.isFatalEnabled()` or `log.isEnabledFor(FATAL)` in log4j.
     */
    fatal(): boolean;

    /**
     * Special case to log an `Error` instance to the record.
     * This adds an `err` field with exception details
     * (including the stack) and sets `msg` to the exception
     * message or you can specify the `msg`.
     */
    fatal(error: Error, format?: any, ...params: any[]): void;

    fatal(buffer: Buffer, format?: any, ...params: any[]): void;

    /**
     * Uses `util.format` for msg formatting.
     */
    fatal(format: string | number, ...params: any[]): void;

    /**
     * The first field can optionally be a "fields" object, which
     * is merged into the log record.
     * 
     * To pass in an Error *and* other fields, use the `err`
     * field name for the Error instance.
     */
    fatal(obj: Object, format?: any, ...params: any[]): void;
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
