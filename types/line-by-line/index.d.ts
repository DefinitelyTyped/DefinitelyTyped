// Type definitions for line-by-line 0.1
// Project: https://github.com/Osterjour/line-by-line
// Definitions by: Sean Roach <https://github.com/TheEdgyDev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { EventEmitter } from 'events';
import { Readable } from 'stream';

interface LineByLineReaderOptions {
    /** The encoding to use. */
    encoding?: 'ascii' | 'utf8' | 'utf16le' | 'ucs2' | 'base64' | 'latin1' | 'binary' | 'hex';
    /** If set to true, empty lines do not emit the "line" event. */
    skipEmptyLines?: boolean;
}

interface LineByLineReaderFileOptions extends LineByLineReaderOptions {
    /** The `end` position in bytes to read from the file. */
    end?: number;
    /** The `start` position in bytes to read from the file. */
    start?: number;
}

declare class LineByLineReader extends EventEmitter {
    /**
     * Constructs a new `LineByLineReader` from a path to a file.
     * @param filePath The path to the file to read.
     * @param options Optional. The options used when constructing the new `LineByLineReader` object.
     */
    constructor(filePath: string, options?: LineByLineReaderFileOptions);
    /**
     * Constructs a new `LineByLineReader` from a readable stream.
     * @param stream The stream to read.
     * @param options Optional. The options used when constructing the new `LineByLineReader` object.
     */
    constructor(stream: Readable, options?: LineByLineReaderOptions);

    /**
     * Stops emitting "line" events, closes the file or stream, and emits the "end" event.
     */
    close(): void;

    /**
     * Emitted if all lines are read.
     * @param event
     * @param listener
     */
    on(event: 'end', listener: () => void): this;
    /**
     * Emitted if an error occured.
     * @param event
     * @param listener A listener that receives the error object.
     */
    on(event: 'error', listener: (err: any) => void): this;
    /**
     * Emitted on every line read.
     * @param event
     * @param listener A listener that receives the line without the line terminator.
     */
    on(event: 'line', listener: (line: string) => void): this;

    /**
     * Call this method to stop emitting "line" events.
     */
    pause(): void;

    /**
     * After calling this method, "line" events get emitted again.
     */
    resume(): void;
}

export = LineByLineReader;
