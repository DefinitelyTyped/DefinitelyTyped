// Type definitions for readable-stream 2.3
// Project: https://github.com/nodejs/readable-stream
// Definitions by: TeamworkGuy2 <https://github.com/TeamworkGuy2>
//                   markdreyer <https://github.com/markdreyer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import * as SafeBuffer from "safe-buffer";

declare class StringDecoder {
    constructor(encoding?: BufferEncoding | string);
    write(buffer: Buffer): string;
    end(buffer?: Buffer): string;
}

declare class _Readable {
    readable: boolean;
    readonly readableFlowing: boolean | null;
    readonly readableHighWaterMark: number;
    readonly readableLength: number;
    _read(size: number): void;
    read(size?: number): any;
    setEncoding(encoding: string): this;
    pause(): this;
    resume(): this;
    isPaused(): boolean;
    unpipe(destination?: _Readable.Writable): this;
    unshift(chunk: any): void;
    wrap(oldStream: _Readable.Readable): this;
    push(chunk: any, encoding?: string): boolean;
    _destroy(error: Error | null, callback: (error: Error | null) => void): void;
    destroy(error?: Error): void;

    /**
     * Event emitter
     * The defined events on documents including:
     * 1. close
     * 2. data
     * 3. end
     * 4. readable
     * 5. error
     */
    addListener(event: "close", listener: () => void): this;
    addListener(event: "data", listener: (chunk: any) => void): this;
    addListener(event: "end", listener: () => void): this;
    addListener(event: "readable", listener: () => void): this;
    addListener(event: "error", listener: (err: Error) => void): this;
    addListener(event: string | symbol, listener: (...args: any[]) => void): this;

    emit(event: "close"): boolean;
    emit(event: "data", chunk: any): boolean;
    emit(event: "end"): boolean;
    emit(event: "readable"): boolean;
    emit(event: "error", err: Error): boolean;
    emit(event: string | symbol, ...args: any[]): boolean;

    on(event: "close", listener: () => void): this;
    on(event: "data", listener: (chunk: any) => void): this;
    on(event: "end", listener: () => void): this;
    on(event: "readable", listener: () => void): this;
    on(event: "error", listener: (err: Error) => void): this;
    on(event: string | symbol, listener: (...args: any[]) => void): this;

    once(event: "close", listener: () => void): this;
    once(event: "data", listener: (chunk: any) => void): this;
    once(event: "end", listener: () => void): this;
    once(event: "readable", listener: () => void): this;
    once(event: "error", listener: (err: Error) => void): this;
    once(event: string | symbol, listener: (...args: any[]) => void): this;

    prependListener(event: "close", listener: () => void): this;
    prependListener(event: "data", listener: (chunk: any) => void): this;
    prependListener(event: "end", listener: () => void): this;
    prependListener(event: "readable", listener: () => void): this;
    prependListener(event: "error", listener: (err: Error) => void): this;
    prependListener(event: string | symbol, listener: (...args: any[]) => void): this;

    prependOnceListener(event: "close", listener: () => void): this;
    prependOnceListener(event: "data", listener: (chunk: any) => void): this;
    prependOnceListener(event: "end", listener: () => void): this;
    prependOnceListener(event: "readable", listener: () => void): this;
    prependOnceListener(event: "error", listener: (err: Error) => void): this;
    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;

    removeListener(event: "close", listener: () => void): this;
    removeListener(event: "data", listener: (chunk: any) => void): this;
    removeListener(event: "end", listener: () => void): this;
    removeListener(event: "readable", listener: () => void): this;
    removeListener(event: "error", listener: (err: Error) => void): this;
    removeListener(event: string | symbol, listener: (...args: any[]) => void): this;

    [Symbol.asyncIterator](): AsyncIterableIterator<any>;

    // static ReadableState: _Readable.ReadableState;
    _readableState: _Readable.ReadableState;
    destroyed: boolean;

    constructor(options?: _Readable.ReadableOptions);

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

    class Duplex extends Writable implements /*extends*/_Readable, Duplex {
        /**
         * This is a dummy function required to retain type compatibility to node.
         * @deprecated DO NOT USE
         */
        static from(source: any): any;
        allowHalfOpen: boolean;
        destroyed: boolean;
        // Readable
        readable: boolean;
        readonly readableEncoding: BufferEncoding | null;
        readonly readableEnded: boolean;
        readonly readableFlowing: boolean | null;
        readonly readableHighWaterMark: number;
        readonly readableLength: number;
        readonly readableObjectMode: boolean;
        readonly writableObjectMode: boolean;
        _readableState: ReadableState;

        _read(size?: number): void;
        read(size?: number): any;
        setEncoding(enc: BufferEncoding): this;
        resume(): this;
        pause(): this;
        isPaused(): boolean;
        unpipe(dest?: Writable): this;
        unshift(chunk: any): boolean;
        wrap(oldStream: Readable): this;
        push(chunk: any, encoding?: BufferEncoding): boolean;
        _destroy(err: Error | null, callback: (error: Error | null) => void): void;
        destroy(err?: Error, callback?: (error: Error | null) => void): this;
        pipe<S extends Writable>(dest: S, pipeOpts?: { end?: boolean }): S;
        addListener(ev: string | symbol, fn: (...args: any[]) => void): this;
        on(ev: string | symbol, fn: (...args: any[]) => void): this;

        _undestroy(): void;
        [Symbol.asyncIterator](): AsyncIterableIterator<any>;
        // end-Readable

        constructor(options?: DuplexOptions);
    }

    // ==== _stream_passthrough ====
    class PassThrough extends Transform {
        constructor(options?: TransformOptions);

        _transform<T>(chunk: T, encoding: BufferEncoding | string | null | undefined, callback: (error?: Error, data?: T) => void): void;
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
        pipes: any;
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

    class Transform extends Duplex {
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
        write?(this: Writable, chunk: any, encoding: BufferEncoding | string, callback: (error?: Error | null) => void): void;
        writev?(this: Writable, chunk: ArrayLike<{ chunk: any; encoding: BufferEncoding | string }>, callback: (error?: Error | null) => void): void;
        destroy?(this: Writable, error: Error | null, callback: (error: Error | null) => void): void;
        final?(this: Writable, callback: (error?: Error | null) => void): void;
    };

    class Writable extends Stream {
        writable: boolean;
        readonly writableHighWaterMark: number;
        readonly writableLength: number;
        constructor(opts?: WritableOptions);
        _write(chunk: any, encoding: string, callback: (error?: Error | null) => void): void;
        _writev?(chunks: Array<{ chunk: any, encoding: string }>, callback: (error?: Error | null) => void): void;
        _destroy(error: Error | null, callback: (error: Error | null) => void): void;
        _final(callback: (error?: Error | null) => void): void;
        write(chunk: any, cb?: (error: Error | null | undefined) => void): boolean;
        write(chunk: any, encoding?: string, cb?: (error: Error | null | undefined) => void): boolean;
        setDefaultEncoding(encoding: string): this;
        end(cb?: () => void): void;
        end(chunk: any, cb?: () => void): void;
        end(chunk: any, encoding?: string, cb?: () => void): void;
        cork(): void;
        uncork(): void;
        destroy(error?: Error): void;

        /**
         * Event emitter
         * The defined events on documents including:
         * 1. close
         * 2. drain
         * 3. error
         * 4. finish
         * 5. pipe
         * 6. unpipe
         */
        addListener(event: "close", listener: () => void): this;
        addListener(event: "drain", listener: () => void): this;
        addListener(event: "error", listener: (err: Error) => void): this;
        addListener(event: "finish", listener: () => void): this;
        addListener(event: "pipe", listener: (src: Readable) => void): this;
        addListener(event: "unpipe", listener: (src: Readable) => void): this;
        addListener(event: string | symbol, listener: (...args: any[]) => void): this;

        emit(event: "close"): boolean;
        emit(event: "drain"): boolean;
        emit(event: "error", err: Error): boolean;
        emit(event: "finish"): boolean;
        emit(event: "pipe", src: Readable): boolean;
        emit(event: "unpipe", src: Readable): boolean;
        emit(event: string | symbol, ...args: any[]): boolean;

        on(event: "close", listener: () => void): this;
        on(event: "drain", listener: () => void): this;
        on(event: "error", listener: (err: Error) => void): this;
        on(event: "finish", listener: () => void): this;
        on(event: "pipe", listener: (src: Readable) => void): this;
        on(event: "unpipe", listener: (src: Readable) => void): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;

        once(event: "close", listener: () => void): this;
        once(event: "drain", listener: () => void): this;
        once(event: "error", listener: (err: Error) => void): this;
        once(event: "finish", listener: () => void): this;
        once(event: "pipe", listener: (src: Readable) => void): this;
        once(event: "unpipe", listener: (src: Readable) => void): this;
        once(event: string | symbol, listener: (...args: any[]) => void): this;

        prependListener(event: "close", listener: () => void): this;
        prependListener(event: "drain", listener: () => void): this;
        prependListener(event: "error", listener: (err: Error) => void): this;
        prependListener(event: "finish", listener: () => void): this;
        prependListener(event: "pipe", listener: (src: Readable) => void): this;
        prependListener(event: "unpipe", listener: (src: Readable) => void): this;
        prependListener(event: string | symbol, listener: (...args: any[]) => void): this;

        prependOnceListener(event: "close", listener: () => void): this;
        prependOnceListener(event: "drain", listener: () => void): this;
        prependOnceListener(event: "error", listener: (err: Error) => void): this;
        prependOnceListener(event: "finish", listener: () => void): this;
        prependOnceListener(event: "pipe", listener: (src: Readable) => void): this;
        prependOnceListener(event: "unpipe", listener: (src: Readable) => void): this;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;

        removeListener(event: "close", listener: () => void): this;
        removeListener(event: "drain", listener: () => void): this;
        removeListener(event: "error", listener: (err: Error) => void): this;
        removeListener(event: "finish", listener: () => void): this;
        removeListener(event: "pipe", listener: (src: Readable) => void): this;
        removeListener(event: "unpipe", listener: (src: Readable) => void): this;
        removeListener(event: string | symbol, listener: (...args: any[]) => void): this;

        // static WritableState: WritableState;
        // private static realHasInstance: (obj: any) => boolean;
        destroyed: boolean;
        _writableState: WritableState;

        _undestroy(): void;
    }

    class Stream extends _Readable {
        constructor(options?: ReadableOptions);
        pipe<T extends Writable>(destination: T, options?: { end?: boolean; }): T;
    }
}

export = _Readable;
export as namespace _Readable;
