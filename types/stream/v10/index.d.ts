// Type definitions for Node.js 10.17
// Project: http://nodejs.org/
// Definitions by: Microsoft TypeScript <https://github.com/Microsoft>
//                 DefinitelyTyped <https://github.com/DefinitelyTyped>
//                 Alberto Schiabel <https://github.com/jkomyno>
//                 Alexander T. <https://github.com/a-tarasyuk>
//                 Alvis HT Tang <https://github.com/alvis>
//                 Andrew Makarov <https://github.com/r3nya>
//                 Bruno Scheufler <https://github.com/brunoscheufler>
//                 Chigozirim C. <https://github.com/smac89>
//                 Deividas Bakanas <https://github.com/DeividasBakanas>
//                 Eugene Y. Q. Shen <https://github.com/eyqs>
//                 Flarna <https://github.com/Flarna>
//                 Hannes Magnusson <https://github.com/Hannes-Magnusson-CK>
//                 Hoàng Văn Khải <https://github.com/KSXGitHub>
//                 Huw <https://github.com/hoo29>
//                 Kelvin Jin <https://github.com/kjin>
//                 Klaus Meinhardt <https://github.com/ajafff>
//                 Lishude <https://github.com/islishude>
//                 Mariusz Wiktorczyk <https://github.com/mwiktorczyk>
//                 Mohsen Azimi <https://github.com/mohsen1>
//                 Nicolas Even <https://github.com/n-e>
//                 Nikita Galkin <https://github.com/galkin>
//                 Parambir Singh <https://github.com/parambirs>
//                 Sebastian Silbermann <https://github.com/eps1lon>
//                 Simon Schick <https://github.com/SimonSchick>
//                 Thomas den Hollander <https://github.com/ThomasdenH>
//                 Wilco Bakker <https://github.com/WilcoBakker>
//                 wwwy3y3 <https://github.com/wwwy3y3>
//                 Zane Hannan AU <https://github.com/ZaneHannanAU>
//                 Jeremie Rodriguez <https://github.com/jeremiergz>
//                 Samuel Ainsworth <https://github.com/samuela>
//                 Kyle Uehlein <https://github.com/kuehlein>
//                 Jordi Oliveras Rovira <https://github.com/j-oliveras>
//                 Thanik Bhongbhibhat <https://github.com/bhongy>
//                 Minh Son Nguyen <https://github.com/nguymin4>
//                 ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference lib="es2015.symbol" />

declare global {
    interface AsyncIterableIterator<T> {}
    interface SymbolConstructor {
        readonly asyncIterator: symbol;
    }
}

import * as buffer from 'buffer';
import 'node/events';
import { EventEmitter as EventEmitter_ } from 'events';
import { ErrnoException as ErrnoException_ } from 'node';

declare namespace internal {
    interface ReadableStream extends NodeJS.ReadableStream {}

    interface WritableStream extends NodeJS.WritableStream {}

    interface ReadWriteStream extends NodeJS.ReadWriteStream {}

    interface ReadableOptions {
        highWaterMark?: number;
        encoding?: string;
        objectMode?: boolean;
        read?(this: Readable, size: number): void;
        destroy?(this: Readable, error: Error | null, callback: (error: Error | null) => void): void;
    }

    class Readable extends Stream implements ReadableStream {
        readable: boolean;
        readonly readableFlowing: boolean | null;
        readonly readableHighWaterMark: number;
        readonly readableLength: number;
        constructor(opts?: ReadableOptions);
        _read(size: number): void;
        read(size?: number): any;
        setEncoding(encoding: string): this;
        pause(): this;
        resume(): this;
        isPaused(): boolean;
        unpipe(destination?: WritableStream): this;
        unshift(chunk: any): void;
        wrap(oldStream: ReadableStream): this;
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
    }

    interface WritableOptions {
        highWaterMark?: number;
        decodeStrings?: boolean;
        objectMode?: boolean;
        write?(this: Writable, chunk: any, encoding: string, callback: (error?: Error | null) => void): void;
        writev?(this: Writable, chunks: Array<{ chunk: any, encoding: string }>, callback: (error?: Error | null) => void): void;
        destroy?(this: Writable, error: Error | null, callback: (error: Error | null) => void): void;
        final?(this: Writable, callback: (error?: Error | null) => void): void;
    }

    class Writable extends Stream implements WritableStream {
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
    }

    interface DuplexOptions extends ReadableOptions, WritableOptions {
        allowHalfOpen?: boolean;
        readableObjectMode?: boolean;
        writableObjectMode?: boolean;
        readableHighWaterMark?: number;
        writableHighWaterMark?: number;
        read?(this: Duplex, size: number): void;
        write?(this: Duplex, chunk: any, encoding: string, callback: (error?: Error | null) => void): void;
        writev?(this: Duplex, chunks: Array<{ chunk: any, encoding: string }>, callback: (error?: Error | null) => void): void;
        final?(this: Duplex, callback: (error?: Error | null) => void): void;
        destroy?(this: Duplex, error: Error | null, callback: (error: Error | null) => void): void;
    }

    // Note: Duplex extends both Readable and Writable.
    class Duplex extends Readable implements Writable {
        writable: boolean;
        readonly writableHighWaterMark: number;
        readonly writableLength: number;
        constructor(opts?: DuplexOptions);
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
    }

    type TransformCallback = (error?: Error, data?: any) => void;

    interface TransformOptions extends DuplexOptions {
        read?(this: Transform, size: number): void;
        write?(this: Transform, chunk: any, encoding: string, callback: (error?: Error | null) => void): void;
        writev?(this: Transform, chunks: Array<{ chunk: any, encoding: string }>, callback: (error?: Error | null) => void): void;
        final?(this: Transform, callback: (error?: Error | null) => void): void;
        destroy?(this: Transform, error: Error | null, callback: (error: Error | null) => void): void;
        transform?(this: Transform, chunk: any, encoding: string, callback: TransformCallback): void;
        flush?(this: Transform, callback: TransformCallback): void;
    }

    class Transform extends Duplex {
        constructor(opts?: TransformOptions);
        _transform(chunk: any, encoding: string, callback: TransformCallback): void;
        _flush(callback: TransformCallback): void;
    }

    class PassThrough extends Transform { }

    interface FinishedOptions {
        error?: boolean;
        readable?: boolean;
        writable?: boolean;
    }
    function finished(stream: ReadableStream | WritableStream | ReadWriteStream, options: FinishedOptions, callback: (err?: ErrnoException_ | null) => void): () => void;
    function finished(stream: ReadableStream | WritableStream | ReadWriteStream, callback: (err?: ErrnoException_ | null) => void): () => void;
    namespace finished {
        function __promisify__(stream: ReadableStream | WritableStream | ReadWriteStream, options?: FinishedOptions): Promise<void>;
    }

    function pipeline<T extends WritableStream>(stream1: ReadableStream, stream2: T, callback?: (err: ErrnoException_ | null) => void): T;
    function pipeline<T extends WritableStream>(stream1: ReadableStream, stream2: ReadWriteStream, stream3: T, callback?: (err: ErrnoException_ | null) => void): T;
    function pipeline<T extends WritableStream>(
        stream1: ReadableStream,
        stream2: ReadWriteStream,
        stream3: ReadWriteStream,
        stream4: T,
        callback?: (err: ErrnoException_ | null) => void,
    ): T;
    function pipeline<T extends WritableStream>(
        stream1: ReadableStream,
        stream2: ReadWriteStream,
        stream3: ReadWriteStream,
        stream4: ReadWriteStream,
        stream5: T,
        callback?: (err: ErrnoException_ | null) => void,
    ): T;
    function pipeline(
        streams: ReadonlyArray<ReadableStream | WritableStream | ReadWriteStream>,
        callback?: (err: ErrnoException_ | null) => void,
    ): WritableStream;
    function pipeline(
        stream1: ReadableStream,
        stream2: ReadWriteStream | WritableStream,
        ...streams: Array<ReadWriteStream | WritableStream | ((err: ErrnoException_ | null) => void)>,
    ): WritableStream;
    namespace pipeline {
        function __promisify__(stream1: ReadableStream, stream2: WritableStream): Promise<void>;
        function __promisify__(stream1: ReadableStream, stream2: ReadWriteStream, stream3: WritableStream): Promise<void>;
        function __promisify__(stream1: ReadableStream, stream2: ReadWriteStream, stream3: ReadWriteStream, stream4: WritableStream): Promise<void>;
        function __promisify__(
            stream1: ReadableStream,
            stream2: ReadWriteStream,
            stream3: ReadWriteStream,
            stream4: ReadWriteStream,
            stream5: WritableStream,
        ): Promise<void>;
        function __promisify__(streams: ReadonlyArray<ReadableStream | WritableStream | ReadWriteStream>): Promise<void>;
        function __promisify__(
            stream1: ReadableStream,
            stream2: ReadWriteStream | WritableStream,
            ...streams: Array<ReadWriteStream | WritableStream>,
        ): Promise<void>;
    }

    interface Pipe {
        close(): void;
        hasRef(): boolean;
        ref(): void;
        unref(): void;
    }

    export import Stream = internal;
}

declare class internal extends EventEmitter_ {
    pipe<T extends internal.WritableStream>(destination: T, options?: { end?: boolean; }): T;
}

export = internal;

declare global {
    namespace NodeJS {
        interface ReadableStream extends EventEmitter_ {
            readable: boolean;
            read(size?: number): string | buffer.Buffer;
            setEncoding(encoding: string): this;
            pause(): this;
            resume(): this;
            isPaused(): boolean;
            pipe<T extends internal.WritableStream>(destination: T, options?: { end?: boolean; }): T;
            unpipe(destination?: internal.WritableStream): this;
            unshift(chunk: string): void;
            unshift(chunk: buffer.Buffer): void;
            wrap(oldStream: internal.ReadableStream): this;
            [Symbol.asyncIterator](): AsyncIterableIterator<string | buffer.Buffer>;
        }

        interface WritableStream extends EventEmitter_ {
            writable: boolean;
            write(buffer: buffer.Buffer | string, cb?: Function): boolean;
            write(str: string, encoding?: string, cb?: Function): boolean;
            end(cb?: Function): void;
            end(buffer: buffer.Buffer, cb?: Function): void;
            end(str: string, cb?: Function): void;
            end(str: string, encoding?: string, cb?: Function): void;
        }

        interface ReadWriteStream extends internal.ReadableStream, internal.WritableStream { }

        interface Socket extends internal.ReadWriteStream {
            isTTY?: true;
        }
    }
}
