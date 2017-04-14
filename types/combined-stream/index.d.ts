// Type definitions for combined-stream 1.0
// Project: https://github.com/felixge/node-combined-stream
// Definitions by: Felix Geisendörfer <https://github.com/felixge>, Tomek Łaziuk <https://github.com/tlaziuk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Stream } from "stream";

declare class CombinedStream extends Stream implements CombinedStream.Options {
    readonly writable: boolean;
    readonly readable: boolean;
    readonly dataSize: number;
    maxDataSize: number;
    pauseStreams: boolean;
    append(stream: NodeJS.ReadableStream | NodeJS.WritableStream | Buffer | string): this;
    write(data: any): void;
    pause(): void;
    resume(): void;
    end(): void;
    destroy(): void;

    // private properties
    _released: boolean;
    // @TODO it should be a type of Array<'delayed-stream' instance | Buffer | string>
    _streams: Array<Stream | Buffer | string>;
    _currentStream: Stream | Buffer | string | null;
    _getNext(): void;
    _pipeNext(): void;
    _handleErrors(stream: NodeJS.EventEmitter): void;
    _reset(): void;
    _checkDataSize(): void;
    _updateDataSize(): void;
    _emitError(error: Error): void;

    // events
    on(event: "close" | "end" | "resume" | "pause", cb: () => void): this;
    on(event: "error", cb: (err: Error) => void): this;
    on(event: "data", cb: (data: any) => void): this;
    once(event: "close" | "end" | "resume" | "pause", cb: () => void): this;
    once(event: "error", cb: (err: Error) => void): this;
    once(event: "data", cb: (data: any) => void): this;
}

declare namespace CombinedStream {
    interface Options {
        maxDataSize?: number;
        pauseStreams?: boolean;
    }

    function create(options?: Options): CombinedStream;

    function isStreamLike(stream: any): stream is Stream;
}

export = CombinedStream;
