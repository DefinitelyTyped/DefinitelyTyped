// Type definitions for lambda-log 2.2
// Project: https://github.com/KyleRoss/node-lambda-log
// Definitions by: Andrés Reyes Monge <https://github.com/armonge>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8
/// <reference types="node" />

import { WriteStream } from "fs";
import { Console } from "console";
import { EventEmitter } from "events";

export interface LogRecordOptions {
    level: string;
    msg: string;
    meta?: any;
    tags?: string[];
}

export interface LogRecord {
    msg: string;
    meta: any;
    _logLevel: string;
    _tags: string[];
}

export class LogMessage {
    level: string;
    msg: string;

    meta?: any;
    tags?: string[];

    constructor(logRecordOptions: LogRecordOptions, opts: LambdaLogOptions);

    value: LogRecord;
    log: LogRecord;
    throw: undefined;

    toJSON(format?: boolean): string;

    static isError(val: any): boolean;
}

export interface LambdaLogOptions {
    meta?: any;
    // Global tags array to include with every log
    tags?: string[];
    // Optional function which will run for every log to inject dynamic metadata
    dynamicMeta?: (message: LogMessage) => any;
    // Enable debugging mode (log.debug messages)
    debug?: boolean;
    // Enable development mode which pretty-prints the log object to the console
    dev?: boolean;
    // Disables logging to the console (used for testing)
    silent?: boolean;
    // Optional replacer function for `JSON.stringify`
    replacer?: (key: string, value: any) => any;
    // Optional stream to write stdout messages to
    stdoutStream?: WriteStream;
    // Optional stream to write stderr messages to
    stderrStream?: WriteStream;
}

export interface LogLevels {
    info: "info";
    warn: "warn";
    error: "error";
    debug: "log" | false;
    [key: string]: any;
}

export class LambdaLog extends EventEmitter {
    LambdaLog: LambdaLog;
    options: LambdaLogOptions;
    console: Console;

    private _logLevels;
    private _levels;

    [key: string]: any;

    constructor(options?: LambdaLogOptions, levels?: any);

    log(level: string, msg: string, meta?: object, tags?: string[]): LogMessage;
    info(msg: string, meta?: object, tags?: string[]): LogMessage;
    warn(msg: string, meta?: object, tags?: string[]): LogMessage;
    error(msg: string | Error, meta?: object, tags?: string[]): LogMessage;
    debug(msg: string, meta?: object, tags?: string[]): LogMessage;

    assert(
        test: any,
        msg: string,
        meta?: object,
        tags?: string[]
    ): boolean | LogMessage;
}

export function log(
    level: string,
    msg: string,
    meta?: object,
    tags?: string[]
): LogMessage;
export function info(msg: string, meta?: object, tags?: string[]): LogMessage;
export function warn(msg: string, meta?: object, tags?: string[]): LogMessage;
export function error(
    msg: string | Error,
    meta?: object,
    tags?: string[]
): LogMessage;
export function assert(
    test: any,
    msg: string,
    meta?: object,
    tags?: string[]
): LogMessage;
export function debug(msg: string, meta?: object, tags?: string[]): LogMessage;
export const options: LambdaLogOptions;
