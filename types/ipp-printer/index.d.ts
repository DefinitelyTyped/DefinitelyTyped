/// <reference types="node" />

import * as http from "http";
import { Readable } from "node:stream";

declare class Printer {
    constructor(opts?: Printer.Options | string);
    fallback: boolean;
    jobs: Printer.Job[];
    name: string;
    port: number;
    server: http.Server;
    started: Date;
    state: number;
    uri: string;

    on(event: "job", handler: (job: Printer.Job) => void): Printer;
    on(event: "operation", handler: (operation: Printer.Operation) => void): Printer;
}

declare namespace Printer {
    interface Attribute {
        name: string;
        tag: number;
        value: string | number | Date;
    }

    interface AttributeGroup {
        attributes: Attribute[];
        tag: number;
    }

    class Job extends Readable {
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

    interface Operation {
        version: { major: number; minor: number };
        operationId: number;
        requestId: number;
        groups: AttributeGroup[];
    }

    interface Options {
        fallback?: boolean;
        name?: string;
        port?: number;
        server?: http.Server;
        uri?: string;
        zeroconf?: boolean;
    }
}

export = Printer;
