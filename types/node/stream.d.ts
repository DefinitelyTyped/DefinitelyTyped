declare module "stream" {
    import * as events from "events";

    class internal extends events.EventEmitter {
        pipe<T extends NodeJS.WritableStream>(destination: T, options?: { end?: boolean; }): T;
    }

    namespace internal {
        class Stream extends internal {
            constructor(opts?: ReadableOptions);
        }

        interface ReadableOptions {
            highWaterMark?: number;
            encoding?: BufferEncoding;
            objectMode?: boolean;
            read?(this: Readable, size: number): void;
            destroy?(this: Readable, error: Error | null, callback: (error: Error | null) => void): void;
            autoDestroy?: boolean;
        }

        interface ReadableEventMap {
            "close": () => void;
            "data": (chunk: any) => void;
            "end": () => void;
            "error": (err: Error) => void;
            "pause": () => void;
            "readable": () => void;
            "resume": () => void;
        }

        class Readable extends Stream implements NodeJS.ReadableStream {
            /**
             * A utility method for creating Readable Streams out of iterators.
             */
            static from(iterable: Iterable<any> | AsyncIterable<any>, options?: ReadableOptions): Readable;

            readable: boolean;
            readonly readableEncoding: BufferEncoding | null;
            readonly readableEnded: boolean;
            readonly readableFlowing: boolean | null;
            readonly readableHighWaterMark: number;
            readonly readableLength: number;
            readonly readableObjectMode: boolean;
            destroyed: boolean;
            constructor(opts?: ReadableOptions);
            _read(size: number): void;
            read(size?: number): any;
            setEncoding(encoding: BufferEncoding): this;
            pause(): this;
            resume(): this;
            isPaused(): boolean;
            unpipe(destination?: NodeJS.WritableStream): this;
            unshift(chunk: any, encoding?: BufferEncoding): void;
            wrap(oldStream: NodeJS.ReadableStream): this;
            push(chunk: any, encoding?: BufferEncoding): boolean;
            _destroy(error: Error | null, callback: (error?: Error | null) => void): void;
            destroy(error?: Error): void;

            /**
             * Event emitter
             * The defined events on documents including:
             * 1. close
             * 2. data
             * 3. end
             * 4. error
             * 5. pause
             * 6. readable
             * 7. resume
             */
            addListener<K extends keyof ReadableEventMap>(event: K, listener: ReadableEventMap[K]): this;
            addListener(event: string | symbol, listener: (...args: any[]) => void): this;

            emit<K extends keyof ReadableEventMap>(event: K, ...args: ReadableEventMap[K] extends (...args: infer P) => any ? P : never): boolean;
            emit(event: string | symbol, ...args: any[]): boolean;

            on<K extends keyof ReadableEventMap>(event: K, listener: ReadableEventMap[K]): this;
            on(event: string | symbol, listener: (...args: any[]) => void): this;

            once<K extends keyof ReadableEventMap>(event: K, listener: ReadableEventMap[K]): this;
            once(event: string | symbol, listener: (...args: any[]) => void): this;

            prependListener<K extends keyof ReadableEventMap>(event: K, listener: ReadableEventMap[K]): this;
            prependListener(event: string | symbol, listener: (...args: any[]) => void): this;

            prependOnceListener<K extends keyof ReadableEventMap>(event: K, listener: ReadableEventMap[K]): this;
            prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;

            removeListener<K extends keyof ReadableEventMap>(event: K, listener: ReadableEventMap[K]): this;
            removeListener(event: string | symbol, listener: (...args: any[]) => void): this;

            off<K extends keyof ReadableEventMap>(event: K, listener: ReadableEventMap[K]): this;
            off(event: string | symbol, listener: (...args: any[]) => void): this;

            listeners<K extends keyof ReadableEventMap>(event: K): Array<ReadableEventMap[K]>;
            listeners(event: string | symbol): Function[];

            [Symbol.asyncIterator](): AsyncIterableIterator<any>;
        }

        interface WritableOptions {
            highWaterMark?: number;
            decodeStrings?: boolean;
            defaultEncoding?: BufferEncoding;
            objectMode?: boolean;
            emitClose?: boolean;
            write?(this: Writable, chunk: any, encoding: BufferEncoding, callback: (error?: Error | null) => void): void;
            writev?(this: Writable, chunks: Array<{ chunk: any, encoding: BufferEncoding }>, callback: (error?: Error | null) => void): void;
            destroy?(this: Writable, error: Error | null, callback: (error: Error | null) => void): void;
            final?(this: Writable, callback: (error?: Error | null) => void): void;
            autoDestroy?: boolean;
        }

        interface WritableEventMap {
            "close": () => void;
            "drain": () => void;
            "error": (err: Error) => void;
            "finish": () => void;
            "pipe": (src: Readable) => void;
            "unpipe": (src: Readable) => void;
        }

        class Writable extends Stream implements NodeJS.WritableStream {
            readonly writable: boolean;
            readonly writableEnded: boolean;
            readonly writableFinished: boolean;
            readonly writableHighWaterMark: number;
            readonly writableLength: number;
            readonly writableObjectMode: boolean;
            readonly writableCorked: number;
            destroyed: boolean;
            constructor(opts?: WritableOptions);
            _write(chunk: any, encoding: BufferEncoding, callback: (error?: Error | null) => void): void;
            _writev?(chunks: Array<{ chunk: any, encoding: BufferEncoding }>, callback: (error?: Error | null) => void): void;
            _destroy(error: Error | null, callback: (error?: Error | null) => void): void;
            _final(callback: (error?: Error | null) => void): void;
            write(chunk: any, cb?: (error: Error | null | undefined) => void): boolean;
            write(chunk: any, encoding: BufferEncoding, cb?: (error: Error | null | undefined) => void): boolean;
            setDefaultEncoding(encoding: BufferEncoding): this;
            end(cb?: () => void): void;
            end(chunk: any, cb?: () => void): void;
            end(chunk: any, encoding: BufferEncoding, cb?: () => void): void;
            cork(): void;
            uncork(): void;
            destroy(error?: Error): void;

            /*
             * Event emitter
             * The defined events on documents including:
             * 1. close
             * 2. drain
             * 3. error
             * 4. finish
             * 5. pipe
             * 6. unpipe
             */
            addListener<K extends keyof WritableEventMap>(event: K, listener: WritableEventMap[K]): this;
            addListener(event: string | symbol, listener: (...args: any[]) => void): this;

            emit<K extends keyof WritableEventMap>(event: K, ...args: WritableEventMap[K] extends (...args: infer P) => any ? P : never): boolean;
            emit(event: string | symbol, ...args: any[]): boolean;

            on<K extends keyof WritableEventMap>(event: K, listener: WritableEventMap[K]): this;
            on(event: string | symbol, listener: (...args: any[]) => void): this;

            once<K extends keyof WritableEventMap>(event: K, listener: WritableEventMap[K]): this;
            once(event: string | symbol, listener: (...args: any[]) => void): this;

            prependListener<K extends keyof WritableEventMap>(event: K, listener: WritableEventMap[K]): this;
            prependListener(event: string | symbol, listener: (...args: any[]) => void): this;

            prependOnceListener<K extends keyof WritableEventMap>(event: K, listener: WritableEventMap[K]): this;
            prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;

            removeListener<K extends keyof WritableEventMap>(event: K, listener: WritableEventMap[K]): this;
            removeListener(event: string | symbol, listener: (...args: any[]) => void): this;

            off<K extends keyof WritableEventMap>(event: K, listener: WritableEventMap[K]): this;
            off(event: string | symbol, listener: (...args: any[]) => void): this;

            listeners<K extends keyof WritableEventMap>(event: K): Array<WritableEventMap[K]>;
            listeners(event: string | symbol): Function[];
        }

        interface DuplexOptions extends ReadableOptions, WritableOptions {
            allowHalfOpen?: boolean;
            readableObjectMode?: boolean;
            writableObjectMode?: boolean;
            readableHighWaterMark?: number;
            writableHighWaterMark?: number;
            writableCorked?: number;
            read?(this: Duplex, size: number): void;
            write?(this: Duplex, chunk: any, encoding: BufferEncoding, callback: (error?: Error | null) => void): void;
            writev?(this: Duplex, chunks: Array<{ chunk: any, encoding: BufferEncoding }>, callback: (error?: Error | null) => void): void;
            final?(this: Duplex, callback: (error?: Error | null) => void): void;
            destroy?(this: Duplex, error: Error | null, callback: (error: Error | null) => void): void;
        }

        interface DuplexEventMap extends ReadableEventMap, WritableEventMap {}

        // Note: Duplex extends both Readable and Writable.
        class Duplex extends Readable implements Writable {
            readonly writable: boolean;
            readonly writableEnded: boolean;
            readonly writableFinished: boolean;
            readonly writableHighWaterMark: number;
            readonly writableLength: number;
            readonly writableObjectMode: boolean;
            readonly writableCorked: number;
            constructor(opts?: DuplexOptions);
            _write(chunk: any, encoding: BufferEncoding, callback: (error?: Error | null) => void): void;
            _writev?(chunks: Array<{ chunk: any, encoding: BufferEncoding }>, callback: (error?: Error | null) => void): void;
            _destroy(error: Error | null, callback: (error: Error | null) => void): void;
            _final(callback: (error?: Error | null) => void): void;
            write(chunk: any, encoding?: BufferEncoding, cb?: (error: Error | null | undefined) => void): boolean;
            write(chunk: any, cb?: (error: Error | null | undefined) => void): boolean;
            setDefaultEncoding(encoding: BufferEncoding): this;
            end(cb?: () => void): void;
            end(chunk: any, cb?: () => void): void;
            end(chunk: any, encoding?: BufferEncoding, cb?: () => void): void;
            cork(): void;
            uncork(): void;

            addListener<K extends keyof DuplexEventMap>(event: K, listener: DuplexEventMap[K]): this;
            addListener(event: string | symbol, listener: (...args: any[]) => void): this;

            emit<K extends keyof DuplexEventMap>(event: K, ...args: DuplexEventMap[K] extends (...args: infer P) => any ? P : never): boolean;
            emit(event: string | symbol, ...args: any[]): boolean;

            on<K extends keyof DuplexEventMap>(event: K, listener: DuplexEventMap[K]): this;
            on(event: string | symbol, listener: (...args: any[]) => void): this;

            once<K extends keyof DuplexEventMap>(event: K, listener: DuplexEventMap[K]): this;
            once(event: string | symbol, listener: (...args: any[]) => void): this;

            prependListener<K extends keyof DuplexEventMap>(event: K, listener: DuplexEventMap[K]): this;
            prependListener(event: string | symbol, listener: (...args: any[]) => void): this;

            prependOnceListener<K extends keyof DuplexEventMap>(event: K, listener: DuplexEventMap[K]): this;
            prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;

            removeListener<K extends keyof DuplexEventMap>(event: K, listener: DuplexEventMap[K]): this;
            removeListener(event: string | symbol, listener: (...args: any[]) => void): this;

            off<K extends keyof DuplexEventMap>(event: K, listener: DuplexEventMap[K]): this;
            off(event: string | symbol, listener: (...args: any[]) => void): this;

            listeners<K extends keyof DuplexEventMap>(event: K): Array<DuplexEventMap[K]>;
            listeners(event: string | symbol): Function[];
        }

        type TransformCallback = (error?: Error | null, data?: any) => void;

        interface TransformOptions extends DuplexOptions {
            read?(this: Transform, size: number): void;
            write?(this: Transform, chunk: any, encoding: BufferEncoding, callback: (error?: Error | null) => void): void;
            writev?(this: Transform, chunks: Array<{ chunk: any, encoding: BufferEncoding }>, callback: (error?: Error | null) => void): void;
            final?(this: Transform, callback: (error?: Error | null) => void): void;
            destroy?(this: Transform, error: Error | null, callback: (error: Error | null) => void): void;
            transform?(this: Transform, chunk: any, encoding: BufferEncoding, callback: TransformCallback): void;
            flush?(this: Transform, callback: TransformCallback): void;
        }

        class Transform extends Duplex {
            constructor(opts?: TransformOptions);
            _transform(chunk: any, encoding: BufferEncoding, callback: TransformCallback): void;
            _flush(callback: TransformCallback): void;
        }

        class PassThrough extends Transform { }

        interface FinishedOptions {
            error?: boolean;
            readable?: boolean;
            writable?: boolean;
        }
        function finished(stream: NodeJS.ReadableStream | NodeJS.WritableStream | NodeJS.ReadWriteStream, options: FinishedOptions, callback: (err?: NodeJS.ErrnoException | null) => void): () => void;
        function finished(stream: NodeJS.ReadableStream | NodeJS.WritableStream | NodeJS.ReadWriteStream, callback: (err?: NodeJS.ErrnoException | null) => void): () => void;
        namespace finished {
            function __promisify__(stream: NodeJS.ReadableStream | NodeJS.WritableStream | NodeJS.ReadWriteStream, options?: FinishedOptions): Promise<void>;
        }

        function pipeline<T extends NodeJS.WritableStream>(stream1: NodeJS.ReadableStream, stream2: T, callback?: (err: NodeJS.ErrnoException | null) => void): T;
        function pipeline<T extends NodeJS.WritableStream>(stream1: NodeJS.ReadableStream, stream2: NodeJS.ReadWriteStream, stream3: T, callback?: (err: NodeJS.ErrnoException | null) => void): T;
        function pipeline<T extends NodeJS.WritableStream>(
            stream1: NodeJS.ReadableStream,
            stream2: NodeJS.ReadWriteStream,
            stream3: NodeJS.ReadWriteStream,
            stream4: T,
            callback?: (err: NodeJS.ErrnoException | null) => void,
        ): T;
        function pipeline<T extends NodeJS.WritableStream>(
            stream1: NodeJS.ReadableStream,
            stream2: NodeJS.ReadWriteStream,
            stream3: NodeJS.ReadWriteStream,
            stream4: NodeJS.ReadWriteStream,
            stream5: T,
            callback?: (err: NodeJS.ErrnoException | null) => void,
        ): T;
        function pipeline(
            streams: ReadonlyArray<NodeJS.ReadableStream | NodeJS.WritableStream | NodeJS.ReadWriteStream>,
            callback?: (err: NodeJS.ErrnoException | null) => void,
        ): NodeJS.WritableStream;
        function pipeline(
            stream1: NodeJS.ReadableStream,
            stream2: NodeJS.ReadWriteStream | NodeJS.WritableStream,
            ...streams: Array<NodeJS.ReadWriteStream | NodeJS.WritableStream | ((err: NodeJS.ErrnoException | null) => void)>,
        ): NodeJS.WritableStream;
        namespace pipeline {
            function __promisify__(stream1: NodeJS.ReadableStream, stream2: NodeJS.WritableStream): Promise<void>;
            function __promisify__(stream1: NodeJS.ReadableStream, stream2: NodeJS.ReadWriteStream, stream3: NodeJS.WritableStream): Promise<void>;
            function __promisify__(stream1: NodeJS.ReadableStream, stream2: NodeJS.ReadWriteStream, stream3: NodeJS.ReadWriteStream, stream4: NodeJS.WritableStream): Promise<void>;
            function __promisify__(
                stream1: NodeJS.ReadableStream,
                stream2: NodeJS.ReadWriteStream,
                stream3: NodeJS.ReadWriteStream,
                stream4: NodeJS.ReadWriteStream,
                stream5: NodeJS.WritableStream,
            ): Promise<void>;
            function __promisify__(streams: ReadonlyArray<NodeJS.ReadableStream | NodeJS.WritableStream | NodeJS.ReadWriteStream>): Promise<void>;
            function __promisify__(
                stream1: NodeJS.ReadableStream,
                stream2: NodeJS.ReadWriteStream | NodeJS.WritableStream,
                ...streams: Array<NodeJS.ReadWriteStream | NodeJS.WritableStream>,
            ): Promise<void>;
        }

        interface Pipe {
            close(): void;
            hasRef(): boolean;
            ref(): void;
            unref(): void;
        }
    }

    export = internal;
}
