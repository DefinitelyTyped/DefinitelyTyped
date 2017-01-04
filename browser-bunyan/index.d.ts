// Type definitions for browser-bunyan 0.4
// Project: https://github.com/philmander/browser-bunyan
// Definitions by: Paul Lockwood <https://github.com/PaulLockwood>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Essentially a copy of type definitions for bunyan with ConsoleFormattedStream() added

/// <reference types="node" />

import { EventEmitter } from 'events';

// browser-bunyan specific
export function ConsoleFormattedStream(): void;

declare class Logger extends EventEmitter {
    constructor(options: LoggerOptions);
    addStream(stream: Stream): void;
    addSerializers(serializers: Serializers | StdSerializers): void;
    child(options: LoggerOptions, simple?: boolean): Logger;
    child(obj: any, simple?: boolean): Logger | any;
    reopenFileStreams(): void;

    level(): string | number;
    level(value: number | string): void;
    levels(name: number | string, value: number | string): void;

    fields: any;
    src: boolean;

    trace(obj: Error | Buffer | any, format?: any, ...params: any[]): void;
    trace(format: string, ...params: any[]): void;

    debug(obj: Error | Buffer | any, format?: any, ...params: any[]): void;
    debug(format: string, ...params: any[]): void;

    info(obj: Error | Buffer | any, format?: any, ...params: any[]): void;
    info(format: string, ...params: any[]): void;

    warn(obj: Error | Buffer | any, format?: any, ...params: any[]): void;
    warn(format: string, ...params: any[]): void;

    error(obj: Error | Buffer | any, format?: any, ...params: any[]): void;
    error(format: string, ...params: any[]): void;

    fatal(obj: Error | Buffer | any, format?: any, ...params: any[]): void;
    fatal(format: string, ...params: any[]): void;
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

type Serializer = (input: any) => any;

interface Serializers {
    [key: string]: Serializer;
}

interface StdSerializers {
    err: Serializer;
    res: Serializer;
    req: Serializer;
}

interface Stream {
    type?: string;
    level?: number | string;
    path?: string;
    stream?: NodeJS.WritableStream | Stream;
    closeOnExit?: boolean;
    period?: string;
    count?: number;
}

export declare var stdSerializers: StdSerializers;

export declare var TRACE: number;
export declare var DEBUG: number;
export declare var INFO: number;
export declare var WARN: number;
export declare var ERROR: number;
export declare var FATAL: number;

export declare function resolveLevel(value: number | string): number;

export declare function createLogger(options: LoggerOptions): Logger;

declare class RingBuffer extends EventEmitter {
    constructor(options: RingBufferOptions);

    writable: boolean;
    records: any[];

    write(record: any): void;
    end(record?: any): void;
    destroy(): void;
    destroySoon(): void;
}

interface RingBufferOptions {
    limit?: number;
}

export declare function safeCycles(): (key: string, value: any) => any;
