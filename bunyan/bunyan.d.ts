// Type definitions for node-bunyan
// Project: https://github.com/trentm/node-bunyan
// Definitions by: Alex Mikhalev <https://github.com/amikhalev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />


import { EventEmitter } from 'events';

declare class Logger extends EventEmitter {
    constructor(options: LoggerOptions);
    addStream(stream: Stream): void;
    addSerializers(serializers: Serializers): void;
    child(options: LoggerOptions, simple?: boolean): Logger;
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

interface LoggerOptions {
    name: string;
    streams?: Stream[];
    level?: string | number;
    stream?: NodeJS.WritableStream;
    serializers?: Serializers;
    src?: boolean;
}

interface Serializers {
    [key: string]: (input: any) => string;
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

declare export var stdSerializers: Serializers;

declare export var TRACE: number;
declare export var DEBUG: number;
declare export var INFO: number;
declare export var WARN: number;
declare export var ERROR: number;
declare export var FATAL: number;

declare export function resolveLevel(value: number | string): number;

declare export function createLogger(options: LoggerOptions): Logger;

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

declare export function safeCycles(): (key: string, value: any) => any;
