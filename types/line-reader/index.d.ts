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

interface Reader {
    hasNextLine(): boolean;
    nextLine(cb: (err: Error, line?: string) => void): void;
    close(cb: (err: Error) => void): void;
    isOpen(): boolean;
    isClosed(): boolean;
    getReadStream(): NodeJS.ReadableStream;
}

interface LineReader {
    open(): Function;
    open(file: string | NodeJS.ReadableStream, options: LineReaderOptions, cb: (err: Error, reader: Reader) => void): void;
    open(file: string | NodeJS.ReadableStream, cb: (err: Error, reader: Reader) => void): void;

    eachLine(): Function; // For Promise.promisify;
    eachLine(file: string | NodeJS.ReadableStream, options: LineReaderOptions, cb: (line: string, last: boolean, continueCb?: Function) => void, errCb?: (err?: Error) => void): LineReader;
    eachLine(file: string | NodeJS.ReadableStream, cb: (line: string, last: boolean, continueCb?: Function) => void, errCb?: (err?: Error) => void): LineReader;
}

declare module "line-reader" {
    var lr: LineReader;
    export = lr;
}
