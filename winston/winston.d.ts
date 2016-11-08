// Type definitions for winston
// Project: https://github.com/flatiron/winston
// Definitions by: bonnici <https://github.com/bonnici>, Peter Harris <https://github.com/codeanimal>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/winston.d.ts

/// <reference path="../node/node.d.ts" />

///******************
///  Winston v2.2.x
///******************

declare module "winston" {
  export var transports: Transports;
  export var Transport: TransportStatic;
  export var Logger: LoggerStatic;
  export var Container: ContainerStatic;
  export var loggers: ContainerInstance;
  export var defaultLogger: LoggerInstance;

  export var exception: Exception;

  export var exitOnError: boolean;
  export var level: string;

  export var log: LogMethod;
                
  export type CLILoggingLevel = 'error' | 'warn' | 'help' | 'data' | 'info' | 'debug' | 'prompt' | 'verbose' | 'input' | 'silly';
  export type NPMLoggingLevel = 'error' | 'warn' | 'info' | 'verbose' | 'debug' | 'silly';
  export type SyslogLoggingLevel = 'emerg' | 'alert' | 'crit' | 'error' | 'warning' | 'notice' | 'info' | 'debug';

  export var silly: LeveledLogMethod;
  export var debug: LeveledLogMethod;
  export var verbose: LeveledLogMethod;
  export var info: LeveledLogMethod;
  export var warn: LeveledLogMethod;
  export var error: LeveledLogMethod;

  export function query(options: QueryOptions, callback?: (err: Error, results: any) => void): any;
  export function query(callback: (err: Error, results: any) => void): any;
  export function stream(options?: any): NodeJS.ReadableStream;
  export function handleExceptions(...transports: TransportInstance[]): void;
  export function unhandleExceptions(...transports: TransportInstance[]): void;
  export function add(transport: TransportInstance, options?: TransportOptions, created?: boolean): LoggerInstance;
  export function clear(): void;
  export function remove(transport: string): LoggerInstance;
  export function remove(transport: TransportInstance): LoggerInstance;
  export function startTimer(): ProfileHandler;
  export function profile(id: string, msg?: string, meta?: any, callback?: (err: Error, level: string, msg: string, meta: any) => void): LoggerInstance;
  export function addColors(target: any): any;
  export function setLevels(target: any): any;
  export function cli(): LoggerInstance;
  export function close(): void;
  export function configure(options: LoggerOptions): void;

  export interface ExceptionProcessInfo {
    pid: number;
    uid?: number;
    gid?: number;
    cwd: string;
    execPath: string;
    version: string;
    argv: string;
    memoryUsage: NodeJS.MemoryUsage;
  }

  export interface ExceptionOsInfo {
    loadavg: [number, number, number];
    uptime: number;
  }

  export interface ExceptionTrace {
    column: number;
    file: string;
    "function": string;
    line: number;
    method: string;
    native: boolean;
  }

  export interface ExceptionAllInfo {
    date: Date;
    process: ExceptionProcessInfo;
    os: ExceptionOsInfo;
    trace: Array<ExceptionTrace>;
    stack: Array<string>;
  }

  export interface Exception {
    getAllInfo(err: Error): ExceptionAllInfo;
    getProcessInfo(): ExceptionProcessInfo;
    getOsInfo(): ExceptionOsInfo;
    getTrace(err: Error): Array<ExceptionTrace>;
  }

  export interface MetadataRewriter {
    (level: string, msg: string, meta: any): any;
  }

  export interface MetadataFilter {
    (level: string, msg: string, meta: any): string | {msg: any; meta: any;};
  }

  export interface LoggerStatic {
    new (options?: LoggerOptions): LoggerInstance;
  }

  export interface LoggerInstance extends NodeJS.EventEmitter {
    rewriters: Array<MetadataRewriter>;
    filters: Array<MetadataFilter>;
    transports: Array<TransportInstance>;

    extend(target: any): LoggerInstance;

    log: LogMethod;

    silly: LeveledLogMethod;
    debug: LeveledLogMethod;
    verbose: LeveledLogMethod;
    info: LeveledLogMethod;
    warn: LeveledLogMethod;
    error: LeveledLogMethod;

    query(options: QueryOptions, callback?: (err: Error, results: any) => void): any;
    query(callback: (err: Error, results: any) => void): any;
    stream(options?: any): NodeJS.ReadableStream;
    close(): void;
    handleExceptions(...transports: TransportInstance[]): void;
    unhandleExceptions(...transports: TransportInstance[]): void;
    add(transport: TransportInstance, options?: TransportOptions, created?: boolean): LoggerInstance;
    clear(): void;
    remove(transport: TransportInstance): LoggerInstance;
    startTimer(): ProfileHandler;
    profile(id: string, msg?: string, meta?: any, callback?: (err: Error, level: string, msg: string, meta: any) => void): LoggerInstance;
    configure(options: LoggerOptions): void;
    setLevels(target: any): any;
    cli(): LoggerInstance;

    level: string;
  }

  export interface LoggerOptions {
    transports?: TransportInstance[];
    rewriters?: TransportInstance[];
    exceptionHandlers?: TransportInstance[];
    handleExceptions?: boolean;

    /**
     * @type {(boolean|(err: Error) => void)}
     */
    exitOnError?: any;

    // TODO: Need to make instances specific,
    //       and need to get options for each instance.
    //       Unfortunately, the documentation is unhelpful.
    [optionName: string]: any;
  }

  export interface TransportStatic {
    new (options?: TransportOptions): TransportInstance;
  }

  export interface TransportInstance extends TransportStatic, NodeJS.EventEmitter {
    formatQuery(query: (string|Object)): (string|Object);
    normalizeQuery(options: QueryOptions): QueryOptions;
    formatResults(results: (Object|Array<any>), options?: Object): (Object|Array<any>);
    logException(msg: string, meta: Object, callback: () => void): void;
  }

  export interface ConsoleTransportInstance extends TransportInstance {
    new (options?: ConsoleTransportOptions): ConsoleTransportInstance;
  }

  export interface DailyRotateFileTransportInstance extends TransportInstance {
    new (options?: DailyRotateFileTransportOptions): DailyRotateFileTransportInstance;
  }

  export interface FileTransportInstance extends TransportInstance {
    new (options?: FileTransportOptions): FileTransportInstance;
    close(): void;
  }

  export interface HttpTransportInstance extends TransportInstance {
    new (options?: HttpTransportOptions): HttpTransportInstance;
  }

  export interface MemoryTransportInstance extends TransportInstance {
    new (options?: MemoryTransportOptions): MemoryTransportInstance;
  }

  export interface WebhookTransportInstance extends TransportInstance {
    new (options?: WebhookTransportOptions): WebhookTransportInstance;
  }

  export interface WinstonModuleTrasportInstance extends TransportInstance {
    new (options?: WinstonModuleTransportOptions): WinstonModuleTrasportInstance;
  }

  export interface ContainerStatic {
    new (options: LoggerOptions): ContainerInstance;
  }

  export interface ContainerInstance extends ContainerStatic {
    get(id: string, options?: LoggerOptions): LoggerInstance;
    add(id: string, options: LoggerOptions): LoggerInstance;
    has(id: string): boolean;
    close(id: string): void;
    options: LoggerOptions;
    loggers: any;
    default: LoggerOptions;
  }

  export interface Transports {
    File: FileTransportInstance;
    Console: ConsoleTransportInstance;
    Loggly: WinstonModuleTrasportInstance;
    DailyRotateFile: DailyRotateFileTransportInstance;
    Http: HttpTransportInstance;
    Memory: MemoryTransportInstance;
    Webhook: WebhookTransportInstance;
  }

  export type TransportOptions = ConsoleTransportOptions|DailyRotateFileTransportOptions|FileTransportOptions|HttpTransportOptions|MemoryTransportOptions|WebhookTransportOptions|WinstonModuleTransportOptions;

  export interface GenericTransportOptions {
    level?: string;
    silent?: boolean;
    raw?: boolean;
    name?: string;
    formatter?: Function;
    handleExceptions?: boolean;
    exceptionsLevel?: string;
    humanReadableUnhandledException?: boolean;
  }

  export interface GenericTextTransportOptions {
    json?: boolean;
    colorize?: boolean;
    colors?: any;
    prettyPrint?: boolean;
    timestamp?: (Function|boolean);
    showLevel?: boolean;
    label?: string;
    depth?: number;
    stringify?: Function;
  }

  export interface GenericNetworkTransportOptions {
    host?: string;
    port?: number;
    auth?: {
      username: string;
      password: string;
    };
    path?: string;
  }

  export interface ConsoleTransportOptions extends GenericTransportOptions, GenericTextTransportOptions {
    logstash?: boolean;
    debugStdout?: boolean;
  }

  export interface DailyRotateFileTransportOptions extends GenericTransportOptions, GenericTextTransportOptions {
    logstash?: boolean;
    maxsize?: number;
    maxFiles?: number;
    eol?: string;
    maxRetries?: number;
    datePattern?: string;
    filename?: string;
    dirname?: string;
    options?: {
      flags?: string;
      highWaterMark?: number;
    };
    stream?: NodeJS.WritableStream;
  }

  export interface FileTransportOptions extends GenericTransportOptions, GenericTextTransportOptions {
    logstash?: boolean;
    maxsize?: number;
    rotationFormat?: boolean;
    zippedArchive?: boolean;
    maxFiles?: number;
    eol?: string;
    tailable?: boolean;
    maxRetries?: number;
    filename?: string;
    dirname?: string;
    options?: {
      flags?: string;
      highWaterMark?: number;
    };
    stream?: NodeJS.WritableStream;
  }

  export interface HttpTransportOptions extends GenericTransportOptions, GenericNetworkTransportOptions {
    ssl?: boolean;
  }

  export interface MemoryTransportOptions extends GenericTransportOptions, GenericTextTransportOptions {
  }

  export interface WebhookTransportOptions extends GenericTransportOptions, GenericNetworkTransportOptions {
    method?: string;
    ssl?: {
      key?: any;
      cert?: any;
      ca: any;
    };
  }

  export interface WinstonModuleTransportOptions extends GenericTransportOptions {
    [optionName: string]: any;
  }

  export interface QueryOptions {
    rows?: number;
    limit?: number;
    start?: number;
    from?: Date;
    until?: Date;
    order?: "asc" | "desc";
    fields: any;
  }

  export interface ProfileHandler {
    logger: LoggerInstance;
    start: Date;
    done: (msg: string) => LoggerInstance;
  }

  interface LogMethod {
    (level: string, msg: string, callback: LogCallback): LoggerInstance;
    (level: string, msg: string, meta: any, callback: LogCallback): LoggerInstance;
    (level: string, msg: string, ... meta: any[]): LoggerInstance;
  }

  interface LeveledLogMethod {
    (msg: string, callback: LogCallback): LoggerInstance;
    (msg: string, meta: any, callback: LogCallback): LoggerInstance;
    (msg: string, ... meta: any[]): LoggerInstance;
  }

  interface LogCallback {
    (error?: any, level?: string, msg?: string, meta?:any): void;
  }
}
