// Type definitions for line-by-line 0.1
// Project: https://github.com/Osterjour/line-by-line
// Definitions by: Evgeny Tomsen <https://github.com/etomsen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="node" />

import { EventEmitter } from "events";

export = LineByLineReader;

interface LineByLineReader extends EventEmitter {
    /**
     * subscribe to an event emitted by reader
     * @param listener A void function with one param
     */
    on(event: LineByLineReaderEvent, listener: (value: any) => void): this;
    /**
     * Pauses the reader
     */
    pause(): void;
    /**
     * Resumes the reader
     */
    resume(): void;
    /**
     * Finishes the reader
     */
    end(): void;
    /**
     * Closes the file stream
     */
    close(): void;
}

interface LineByLineReaderOptions {
    encoding?: string;
    skipEmptyLines?: boolean;
    start?: number;
}

interface LineByLineReaderConstructor {
    /**
     * Constructs a new LineByLineReader object
     * @param filename filename to read
     * @param options Optional. {@link LineByLineReaderOptions}
     */
    new (filename: string, options?: LineByLineReaderOptions): LineByLineReader;
    readonly prototype: LineByLineReader;
}

type LineByLineReaderEvent = "line" | "end" | "error";

declare const LineByLineReader: LineByLineReaderConstructor;
