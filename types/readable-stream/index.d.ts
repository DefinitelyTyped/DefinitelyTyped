// Type definitions for readable-stream 2.3
// Project: https://github.com/nodejs/readable-stream
// Definitions by: TeamworkGuy2 <https://github.com/TeamworkGuy2>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import * as stream from "stream";
import * as SafeBuffer from "safe-buffer";
import { StringDecoder } from "string_decoder";

declare class _Readable extends stream.Readable {
    // static ReadableState: _Readable.ReadableState;
    _readableState: _Readable.ReadableState;
    destroyed: boolean;

    constructor(options?: _Readable.ReadableOptions);

    destroy(err?: Error, callback?: (error: Error | null) => void): this;
    _undestroy(): void;
}

declare namespace _Readable {
    // ==== BufferList ====
    interface Entry<D> {
        data: D;
        next: Entry<D> | null;
    }

    interface BufferList<D extends SafeBuffer.Buffer = SafeBuffer.Buffer> {
        head: Entry<D>;
        tail: Entry<D>;
        length: number;

        push(v: D): void;
        unshift(v: D): void;
        shift(): D;
        clear(): void;
        join(s: any): string;
        concat(n: number): D;
    }

    // ==== destroy ====
    interface Destroy {
        destroy(this: Readable | Writable, error: Error | null, callback?: (error: Error | null) => void): Readable | Writable;
        undestroy(this: Readable | Writable): void;
    }

    // ==== _stream_duplex ====
    type DuplexOptions = ReadableOptions & WritableOptions & {
        allowHalfOpen?: boolean;
        readable?: boolean;
        writable?: boolean;
        read?(this: Duplex, size: number): void;
        write?(this: Duplex, chunk: any, encoding: BufferEncoding, callback: (error?: Error | null) => void): void;
        writev?(this: Duplex, chunks: Array<{ chunk: any, encoding: BufferEncoding }>, callback: (error?: Error | null) => void): void;
        final?(this: Duplex, callback: (error?: Error | null) => void): void;
        destroy?(this: Duplex, error: Error | null, callback: (error: Error | null) => void): void;
    };

    class Duplex extends Writable implements /*extends*/_Readable, stream.Duplex {
        /**
         * This is a dummy function required to retain type compatibility to node.
         * @deprecated DO NOT USE
         */
        static from(source: any): any;
        allowHalfOpen: boolean;
        destroyed: boolean;
        // Readable
        readable: boolean;
        readonly readableHighWaterMark: number;
        readonly readableLength: number;
        readonly readableObjectMode: boolean;
        _readableState: ReadableState;

        _read(size?: number): void;
        read(size?: number): any;
        setEncoding(enc: BufferEncoding): this;
        resume(): this;
        pause(): this;
        isPaused(): boolean;
        unpipe(dest?: NodeJS.WritableStream): this;
        unshift(chunk: any): boolean;
        wrap(oldStream: NodeJS.ReadableStream): this;
        push(chunk: any, encoding?: BufferEncoding): boolean;
        _destroy(err: Error | null, callback: (error: Error | null) => void): void;
        destroy(err?: Error, callback?: (error: Error | null) => void): this;
        pipe<S extends NodeJS.WritableStream>(dest: S, pipeOpts?: { end?: boolean }): S;
        addListener(ev: string | symbol, fn: (...args: any[]) => void): this;
        on(ev: string | symbol, fn: (...args: any[]) => void): this;

        _undestroy(): void;
        [Symbol.asyncIterator](): AsyncIterableIterator<any>;
        // end-Readable

        constructor(options?: DuplexOptions);
    }

    // ==== _stream_passthrough ====
    class PassThrough extends Transform implements stream.PassThrough {
        constructor(options?: TransformOptions);

        _transform<T>(chunk: T, encoding: BufferEncoding | null | undefined, callback: (error: any, data: T) => void): void;
    }

    // ==== _stream_readable ====
    interface ReadableStateOptions {
        defaultEncoding?: BufferEncoding;
        encoding?: BufferEncoding;
        highWaterMark?: number;
        objectMode?: boolean;
        readableObjectMode?: boolean;
        readableHighWaterMark?: number;
    }

    interface ReadableState {
        objectMode: boolean;
        highWaterMark: number;
        buffer: BufferList<any>;
        length: number;
        pipes: any; // NodeJS.WritableStream | any[]; // TODO
        pipesCount: number;
        flowing: any;
        ended: boolean;
        endEmitted: boolean;
        reading: boolean;
        sync: boolean;
        needReadable: boolean;
        emittedReadable: boolean;
        readableListening: boolean;
        resumeScheduled: boolean;
        destroyed: boolean;
        awaitDrain: number;
        defaultEncoding: BufferEncoding;
        readingMore: boolean;
        decoder: StringDecoder | null;
        encoding: BufferEncoding | null;

        // new (options: ReadableStateOptions, stream: _Readable): ReadableState;
    }

    type ReadableOptions = ReadableStateOptions & {
        read?(this: _Readable, size: number): void;
        destroy?(this: _Readable, error: Error | null, callback: (error: Error | null) => void): void;
    };

    class Readable extends _Readable {
        constructor(options?: ReadableOptions);
    }

    // ==== _stream_transform ====
    type TransformOptions = DuplexOptions & {
        read?(this: Transform, size: number): void;
        write?(this: Transform, chunk: any, encoding: BufferEncoding, callback: (error?: Error | null) => void): void;
        writev?(this: Transform, chunks: Array<{ chunk: any, encoding: BufferEncoding }>, callback: (error?: Error | null) => void): void;
        final?(this: Transform, callback: (error?: Error | null) => void): void;
        destroy?(this: Transform, error: Error | null, callback: (error: Error | null) => void): void;
        transform?(this: Transform, chunk: any, encoding: BufferEncoding, callback: (error?: Error, data?: any) => void): void;
        flush?(this: Transform, callback: (er: any, data: any) => void): void;
    };

    class Transform extends Duplex implements stream.Transform {
        _transformState: {
            afterTransform: (this: Transform, er: any, data: any) => void | boolean;
            needTransform: boolean;
            transforming: boolean;
            writecb: ((err: any) => any) | null;
            writechunk: any; // TODO
            writeencoding: BufferEncoding | null;
        };

        constructor(options?: TransformOptions);

        _transform(chunk: any, encoding: BufferEncoding, callback: (error?: Error, data?: any) => void): void;
        _flush(callback: (error?: Error, data?: any) => void): void;
    }

    // ==== _stream_writable ====
    interface CorkedRequest {
        next: any;
        entry: any;
        finish(): void;
    }

    interface BufferRequest {
        chunk: any; // TODO
        encoding: BufferEncoding;
        isBuf: boolean;
        callback: (error?: Error | null) => void;
        next: BufferRequest | null;
    }

    interface WritableStateOptions {
        decodeStrings?: boolean;
        defaultEncoding?: BufferEncoding;
        highWaterMark?: number;
        objectMode?: boolean;
        writableObjectMode?: boolean;
        writableHighWaterMark?: number;
    }

    interface WritableState {
        buffer: BufferRequest[];
        objectMode: boolean;
        highWaterMark: number;
        finalCalled: boolean;
        needDrain: boolean;
        ending: boolean;
        ended: boolean;
        finished: boolean;
        destroyed: boolean;
        decodeStrings: boolean;
        defaultEncoding: BufferEncoding;
        length: number;
        writing: boolean;
        corked: number;
        sync: boolean;
        bufferProcessing: boolean;
        writelen: number;
        pendingcb: number;
        prefinished: boolean;
        errorEmitted: boolean;
        bufferedRequestCount: number;
        writecb: ((err?: Error | null) => void) | null;
        onwrite: (er?: Error | null) => any;
        bufferedRequest: BufferRequest | null;
        lastBufferedRequest: BufferRequest | null;
        corkedRequestsFree: CorkedRequest;

        // new (options: WritableStateOptions, stream: Writable): WritableState;

        getBuffer(): BufferRequest[];
    }

    type WritableOptions = WritableStateOptions & {
        write?(this: Writable, chunk: any, encoding: BufferEncoding, callback: (error?: Error | null) => void): void;
        writev?(this: Writable, chunk: ArrayLike<{ chunk: any; encoding: BufferEncoding }>, callback: (error?: Error | null) => void): void;
        destroy?(this: Writable, error: Error | null, callback: (error: Error | null) => void): void;
        final?(this: Writable, callback: (error?: Error | null) => void): void;
    };

    class Writable extends stream.Writable {
        // static WritableState: WritableState;
        // private static realHasInstance: (obj: any) => boolean;
        destroyed: boolean;
        _writableState: WritableState;

        constructor(options?: WritableOptions);

        destroy(error?: Error, callback?: (error?: Error | null) => void): this;
        _undestroy(): void;
    }

    class Stream extends _Readable {
        constructor(options?: ReadableOptions);
    }

    // if (process.env.READABLE_STREAM === 'disable' && Stream)
    let NodeBaseExport: stream.Readable & {
        Readable: stream.Readable;
        Writable: stream.Writable;
        Duplex: stream.Duplex;
        Transform: stream.Transform;
        PassThrough: stream.PassThrough;
        Stream: stream;
    };
}

export = _Readable;
export as namespace _Readable;
