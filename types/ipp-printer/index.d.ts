// Type definitions for ipp-printer 1.0
// Project: https://github.com/watson/ipp-printer
// Definitions by: Matt Smith <https://github.com/mattsmithcode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as http from 'http';
import { Readable } from 'node:stream';

export interface Attribute {
    name: string;
    tag: number;
    value: string | number | Date;
}

export interface AttributeGroup {
    attributes: Attribute[];
    tag: number;
}

export class Job extends Readable {
    compression: string;
    createdAt: Date;
    id: number;
    name: string;
    state: number;
    uri: string;
    userName: string;

    attributes(filter?: ReadonlyArray<string>): Attribute[];
    pause(): this;
    resume(): this;
    setEncoding(encoding: BufferEncoding): this;
    unpipe(destination?: NodeJS.WritableStream): this;
    wrap(oldStream: NodeJS.ReadableStream): this;
}

export interface Operation {
    version: { major: number, minor: number };
    operationId: number;
    requestId: number;
    groups: AttributeGroup[];
}

export interface Options {
    fallback?: boolean;
    name?: string;
    port?: number;
    server?: http.Server;
    uri?: string;
    zeroconf?: boolean;
}

export default class Printer {
    constructor(opts?: Options | string);
    fallback: boolean;
    jobs: Job[];
    name: string;
    port: number;
    server: http.Server;
    started: Date;
    state: number;
    uri: string;

    on(event: 'job', handler: (job: Job) => void): Printer;
    on(event: 'operation', handler: (operation: Operation) => void): Printer;
}
