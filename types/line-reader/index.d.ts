// Type definitions for line-reader
// Project: https://github.com/nickewing/line-reader
// Definitions by: Sam Saint-Pettersen <https://github.com/stpettersens>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

interface LineReaderOptions {
    separator?: any;
    encoding?: string;
    bufferSize?: number;
}

interface LineReader {
    eachLine(): Function; // For Promise.promisify;
    open(): Function;
    eachLine(file: string | NodeJS.ReadableStream, cb: (line: string, last?: boolean, cb?: Function) => void): LineReader;
    eachLine(file: string | NodeJS.ReadableStream, options: LineReaderOptions, cb: (line: string, last?: boolean, cb?: Function) => void): LineReader;
    open(file: string | NodeJS.ReadableStream, cb: (err: Error, reader: LineReader) => void): void;
    open(file: string | NodeJS.ReadableStream, options: LineReaderOptions, cb: (err: Error, reader: LineReader) => void): void;
    hasNextLine(): boolean;
    nextLine(cb: (err: Error, line: string) => void): void;
    close(cb: (err: Error) => void): void;
}

declare module "line-reader" {
    var lr: LineReader;
    export = lr;
}
