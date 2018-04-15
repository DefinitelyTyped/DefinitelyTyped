// Type definitions for chrome-trace-event 0.1
// Project: https://github.com/baz/foo (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: Mohsen Azimi <https://github.com/mohsen1>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import "node";
import { Readable as ReadableStream } from "stream";

export interface Fields {
    cat: string;
    args: object;
    [otherFields: string]: string | object;
}

export interface TracerOptions {
    parent?: {
        fields?: Fields;
    };
    fields?: Fields;
    objectMode?: null | boolean;
    noStream?: boolean;

}

/**
 * trace-event - A library to create a trace of your node app per
 * Google's Trace Event format:
 * // JSSTYLED
 *      https://docs.google.com/document/d/1CvAClvFfyA5R-PhYUmn5OOQtYMH4h6I0nSsKchNAySU
 */
export class Tracer extends ReadableStream {
    public counter: number;

    constructor(options:  TracerOptions);

    /**
     * If in no streamMode in order to flush out the trace
     * you need to call flush.
     */
    flush(): void;

    child(fields: Fields): Tracer;
    begin(...args: any[]): void;
    end(...args: any[]): void;
    completeEvent(...args: any[]): void;
    instantEvent(...args: any[]): void;
    mkEventFunc(phase: string): (fields: Fields) => void;
}
