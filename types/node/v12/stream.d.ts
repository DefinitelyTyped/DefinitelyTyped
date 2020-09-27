declare module "stream" {
    import * as events from "events";

    class internal<TChunk = NodeJS.BufferOrString> extends events.EventEmitter {
        pipe<TStream extends NodeJS.WritableStream<TChunk>>(destination: TStream, options?: { end?: boolean; }): TStream;
    }

    namespace internal {
        class Stream<TChunk = NodeJS.BufferOrString> extends internal<TChunk> { }

        interface ReadableOptions<TChunk = NodeJS.BufferOrString> {
            highWaterMark?: number;
            encoding?: BufferEncoding;
            objectMode?: boolean;
            read?(this: Readable<TChunk>, size: number): void;
            destroy?(this: Readable<TChunk>, error: Error | null, callback: (error: Error | null) => void): void;
            autoDestroy?: boolean;
        }

        class Readable<TChunk = NodeJS.BufferOrString> extends Stream<TChunk> implements NodeJS.ReadableStream<TChunk> {
            /**
             * A utility method for creating Readable Streams out of iterators.
             */
            static from<TChunk = string>(iterable: Iterable<TChunk> | AsyncIterable<TChunk>, options?: ReadableOptions<TChunk>): Readable<TChunk>;

            readable: boolean;
            readonly readableEncoding: BufferEncoding | null;
            readonly readableEnded: boolean;
            readonly readableFlowing: boolean | null;
            readonly readableHighWaterMark: number;
            readonly readableLength: number;
            readonly readableObjectMode: boolean;
            destroyed: boolean;
            constructor(opts?: ReadableOptions<TChunk>);
            _read(size: number): void;
            read(size?: number): any;
            setEncoding(encoding: BufferEncoding): this;
            pause(): this;
            resume(): this;
            isPaused(): boolean;
            unpipe(destination?: NodeJS.WritableStream<TChunk>): this;
            unshift(chunk: TChunk | null, encoding?: BufferEncoding): void;
            wrap(oldStream: NodeJS.ReadableStream<TChunk>): this;
            push(chunk: TChunk | null, encoding?: BufferEncoding): boolean;
            _destroy(error: Error | null, callback: (error?: Error | null) => void): void;
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
            addListener(event: "data", listener: (chunk: TChunk) => void): this;
            addListener(event: "end", listener: () => void): this;
            addListener(event: "readable", listener: () => void): this;
            addListener(event: "error", listener: (err: Error) => void): this;
            addListener(event: string | symbol, listener: (...args: any[]) => void): this;

            emit(event: "close"): boolean;
            emit(event: "data", chunk: TChunk): boolean;
            emit(event: "end"): boolean;
            emit(event: "readable"): boolean;
            emit(event: "error", err: Error): boolean;
            emit(event: string | symbol, ...args: any[]): boolean;

            on(event: "close", listener: () => void): this;
            on(event: "data", listener: (chunk: TChunk) => void): this;
            on(event: "end", listener: () => void): this;
            on(event: "readable", listener: () => void): this;
            on(event: "error", listener: (err: Error) => void): this;
            on(event: string | symbol, listener: (...args: any[]) => void): this;

            once(event: "close", listener: () => void): this;
            once(event: "data", listener: (chunk: TChunk) => void): this;
            once(event: "end", listener: () => void): this;
            once(event: "readable", listener: () => void): this;
            once(event: "error", listener: (err: Error) => void): this;
            once(event: string | symbol, listener: (...args: any[]) => void): this;

            prependListener(event: "close", listener: () => void): this;
            prependListener(event: "data", listener: (chunk: TChunk) => void): this;
            prependListener(event: "end", listener: () => void): this;
            prependListener(event: "readable", listener: () => void): this;
            prependListener(event: "error", listener: (err: Error) => void): this;
            prependListener(event: string | symbol, listener: (...args: any[]) => void): this;

            prependOnceListener(event: "close", listener: () => void): this;
            prependOnceListener(event: "data", listener: (chunk: TChunk) => void): this;
            prependOnceListener(event: "end", listener: () => void): this;
            prependOnceListener(event: "readable", listener: () => void): this;
            prependOnceListener(event: "error", listener: (err: Error) => void): this;
            prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;

            removeListener(event: "close", listener: () => void): this;
            removeListener(event: "data", listener: (chunk: TChunk) => void): this;
            removeListener(event: "end", listener: () => void): this;
            removeListener(event: "readable", listener: () => void): this;
            removeListener(event: "error", listener: (err: Error) => void): this;
            removeListener(event: string | symbol, listener: (...args: any[]) => void): this;

            [Symbol.asyncIterator](): AsyncIterableIterator<any>;
        }

        interface WritableOptions<TChunk = NodeJS.BufferOrString> {
            highWaterMark?: number;
            decodeStrings?: boolean;
            defaultEncoding?: BufferEncoding;
            objectMode?: boolean;
            emitClose?: boolean;
            write?(this: Writable<TChunk>, chunk: TChunk, encoding: BufferEncoding, callback: (error?: Error | null) => void): void;
            writev?(this: Writable<TChunk>, chunks: Array<{ chunk: TChunk, encoding: BufferEncoding }>, callback: (error?: Error | null) => void): void;
            destroy?(this: Writable<TChunk>, error: Error | null, callback: (error: Error | null) => void): void;
            final?(this: Writable<TChunk>, callback: (error?: Error | null) => void): void;
            autoDestroy?: boolean;
        }

        class Writable<TChunk = NodeJS.BufferOrString> extends Stream<TChunk> implements NodeJS.WritableStream<TChunk> {
            readonly writable: boolean;
            readonly writableEnded: boolean;
            readonly writableFinished: boolean;
            readonly writableHighWaterMark: number;
            readonly writableLength: number;
            readonly writableObjectMode: boolean;
            destroyed: boolean;
            constructor(opts?: WritableOptions<TChunk>);
            _write(chunk: TChunk, encoding: BufferEncoding, callback: (error?: Error | null) => void): void;
            _writev?(chunks: Array<{ chunk: TChunk; encoding: BufferEncoding }>, callback: (error?: Error | null) => void): void;
            _destroy(error: Error | null, callback: (error?: Error | null) => void): void;
            _final(callback: (error?: Error | null) => void): void;
            write(chunk: TChunk, cb?: (error: Error | null | undefined) => void): boolean;
            write(chunk: TChunk, encoding: BufferEncoding, cb?: (error: Error | null | undefined) => void,
            ): boolean;
            setDefaultEncoding(encoding: BufferEncoding): this;
            end(cb?: () => void): void;
            end(chunk: TChunk, cb?: () => void): void;
            end(chunk: TChunk, encoding: BufferEncoding, cb?: () => void): void;
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
            addListener(event: "pipe", listener: (src: Readable<TChunk>) => void): this;
            addListener(event: "unpipe", listener: (src: Readable<TChunk>) => void): this;
            addListener(event: string | symbol, listener: (...args: any[]) => void): this;

            emit(event: "close"): boolean;
            emit(event: "drain"): boolean;
            emit(event: "error", err: Error): boolean;
            emit(event: "finish"): boolean;
            emit(event: "pipe", src: Readable<TChunk>): boolean;
            emit(event: "unpipe", src: Readable<TChunk>): boolean;
            emit(event: string | symbol, ...args: any[]): boolean;

            on(event: "close", listener: () => void): this;
            on(event: "drain", listener: () => void): this;
            on(event: "error", listener: (err: Error) => void): this;
            on(event: "finish", listener: () => void): this;
            on(event: "pipe", listener: (src: Readable<TChunk>) => void): this;
            on(event: "unpipe", listener: (src: Readable<TChunk>) => void): this;
            on(event: string | symbol, listener: (...args: any[]) => void): this;

            once(event: "close", listener: () => void): this;
            once(event: "drain", listener: () => void): this;
            once(event: "error", listener: (err: Error) => void): this;
            once(event: "finish", listener: () => void): this;
            once(event: "pipe", listener: (src: Readable<TChunk>) => void): this;
            once(event: "unpipe", listener: (src: Readable<TChunk>) => void): this;
            once(event: string | symbol, listener: (...args: any[]) => void): this;

            prependListener(event: "close", listener: () => void): this;
            prependListener(event: "drain", listener: () => void): this;
            prependListener(event: "error", listener: (err: Error) => void): this;
            prependListener(event: "finish", listener: () => void): this;
            prependListener(event: "pipe", listener: (src: Readable<TChunk>) => void): this;
            prependListener(event: "unpipe", listener: (src: Readable<TChunk>) => void): this;
            prependListener(event: string | symbol, listener: (...args: any[]) => void): this;

            prependOnceListener(event: "close", listener: () => void): this;
            prependOnceListener(event: "drain", listener: () => void): this;
            prependOnceListener(event: "error", listener: (err: Error) => void): this;
            prependOnceListener(event: "finish", listener: () => void): this;
            prependOnceListener(event: "pipe", listener: (src: Readable<TChunk>) => void): this;
            prependOnceListener(event: "unpipe", listener: (src: Readable<TChunk>) => void): this;
            prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;

            removeListener(event: "close", listener: () => void): this;
            removeListener(event: "drain", listener: () => void): this;
            removeListener(event: "error", listener: (err: Error) => void): this;
            removeListener(event: "finish", listener: () => void): this;
            removeListener(event: "pipe", listener: (src: Readable<TChunk>) => void): this;
            removeListener(event: "unpipe", listener: (src: Readable<TChunk>) => void): this;
            removeListener(event: string | symbol, listener: (...args: any[]) => void): this;
        }

        interface DuplexOptions<TChunkIn = NodeJS.BufferOrString, TChunkOut = NodeJS.BufferOrString> extends ReadableOptions<TChunkOut>, WritableOptions<TChunkIn> {
            allowHalfOpen?: boolean;
            readableObjectMode?: boolean;
            writableObjectMode?: boolean;
            readableHighWaterMark?: number;
            writableHighWaterMark?: number;
            read?(this: Duplex<TChunkIn, TChunkOut>, size: number): void;
            write?(this: Duplex<TChunkIn, TChunkOut>, chunk: TChunkIn, encoding: BufferEncoding, callback: (error?: Error | null) => void): void;
            writev?(this: Duplex<TChunkIn, TChunkOut>, chunks: Array<{ chunk: TChunkIn, encoding: BufferEncoding }>, callback: (error?: Error | null) => void): void;
            final?(this: Duplex<TChunkIn, TChunkOut>, callback: (error?: Error | null) => void): void;
            destroy?(this: Duplex<TChunkIn, TChunkOut>, error: Error | null, callback: (error: Error | null) => void): void;
        }

        // Note: Duplex extends both Readable and Writable.
        class Duplex<TChunkIn = NodeJS.BufferOrString, TChunkOut = NodeJS.BufferOrString> extends Readable<TChunkOut> implements Writable<TChunkIn> {
            readonly writable: boolean;
            readonly writableEnded: boolean;
            readonly writableFinished: boolean;
            readonly writableHighWaterMark: number;
            readonly writableLength: number;
            readonly writableObjectMode: boolean;
            constructor(opts?: DuplexOptions<TChunkIn, TChunkOut>);
            _write(chunk: TChunkIn, encoding: BufferEncoding, callback: (error?: Error | null) => void): void;
            _writev?(chunks: Array<{ chunk: TChunkIn, encoding: BufferEncoding }>, callback: (error?: Error | null) => void): void;
            _destroy(error: Error | null, callback: (error: Error | null) => void): void;
            _final(callback: (error?: Error | null) => void): void;
            write(chunk: TChunkIn, encoding?: BufferEncoding, cb?: (error: Error | null | undefined) => void): boolean;
            write(chunk: TChunkIn, cb?: (error: Error | null | undefined) => void): boolean;
            setDefaultEncoding(encoding: BufferEncoding): this;
            end(cb?: () => void): void;
            end(chunk: TChunkIn, cb?: () => void): void;
            end(chunk: TChunkIn, encoding?: BufferEncoding, cb?: () => void): void;
            cork(): void;
            uncork(): void;
        }

        type TransformCallback<TChunk = NodeJS.BufferOrString> = (error?: Error | null, data?: TChunk) => void;

        interface TransformOptions<TChunkIn = NodeJS.BufferOrString, TChunkOut = NodeJS.BufferOrString> extends DuplexOptions<TChunkIn, TChunkOut> {
            read?(this: Transform<TChunkIn, TChunkOut>, size: number): void;
            write?(this: Transform<TChunkIn, TChunkOut>, chunk: TChunkIn, encoding: BufferEncoding, callback: (error?: Error | null) => void): void;
            writev?(this: Transform<TChunkIn, TChunkOut>, chunks: Array<{ chunk: TChunkIn, encoding: BufferEncoding }>, callback: (error?: Error | null) => void): void;
            final?(this: Transform<TChunkIn, TChunkOut>, callback: (error?: Error | null) => void): void;
            destroy?(this: Transform<TChunkIn, TChunkOut>, error: Error | null, callback: (error: Error | null) => void): void;
            transform?(this: Transform<TChunkIn, TChunkOut>, chunk: TChunkIn, encoding: BufferEncoding, callback: TransformCallback<TChunkOut>): void;
            flush?(this: Transform<TChunkIn, TChunkOut>, callback: TransformCallback<TChunkOut>): void;
        }

        class Transform<TChunkIn = NodeJS.BufferOrString, TChunkOut = NodeJS.BufferOrString> extends Duplex<TChunkIn, TChunkOut> {
            constructor(opts?: TransformOptions<TChunkIn, TChunkOut>);
            _transform(chunk: TChunkIn, encoding: BufferEncoding, callback: TransformCallback<TChunkOut>): void;
            _flush(callback: TransformCallback<TChunkOut>): void;
        }

        class PassThrough<TChunkIn = NodeJS.BufferOrString, TChunkOut = NodeJS.BufferOrString> extends Transform<TChunkIn, TChunkOut> { }

        interface FinishedOptions {
            error?: boolean;
            readable?: boolean;
            writable?: boolean;
        }
        function finished(
            stream: NodeJS.ReadableStream<any> | NodeJS.WritableStream<any> | NodeJS.ReadWriteStream<any, any>, options: FinishedOptions, callback: (err?: NodeJS.ErrnoException | null) => void
        ): () => void;
        function finished(
            stream: NodeJS.ReadableStream<any> | NodeJS.WritableStream<any> | NodeJS.ReadWriteStream<any, any>, callback: (err?: NodeJS.ErrnoException | null) => void
        ): () => void;
        namespace finished {
            function __promisify__(stream: NodeJS.ReadableStream<any> | NodeJS.WritableStream<any> | NodeJS.ReadWriteStream<any, any>, options?: FinishedOptions): Promise<void>;
        }

        function pipeline<TChunk = NodeJS.BufferOrString>(
            stream1: NodeJS.ReadableStream<TChunk>,
            stream2: NodeJS.WritableStream<TChunk>,
            callback?: (err: NodeJS.ErrnoException | null) => void
        ): NodeJS.WritableStream<TChunk>;
        function pipeline<TChunkIn = NodeJS.BufferOrString, TChunkOut = NodeJS.BufferOrString>(
            stream1: NodeJS.ReadableStream<TChunkIn>,
            stream2: NodeJS.ReadWriteStream<TChunkIn, TChunkOut>,
            stream3: NodeJS.WritableStream<TChunkOut>,
            callback?: (err: NodeJS.ErrnoException | null) => void
        ): NodeJS.WritableStream<TChunkOut>;
        function pipeline<TChunkIn = NodeJS.BufferOrString, TChunkMid = NodeJS.BufferOrString, TChunkOut = NodeJS.BufferOrString>(
            stream1: NodeJS.ReadableStream<TChunkIn>,
            stream2: NodeJS.ReadWriteStream<TChunkIn, TChunkMid>,
            stream3: NodeJS.ReadWriteStream<TChunkMid, TChunkOut>,
            stream4: NodeJS.WritableStream<TChunkOut>,
            callback?: (err: NodeJS.ErrnoException | null) => void,
        ): NodeJS.WritableStream<TChunkOut>;
        function pipeline<TChunkIn = NodeJS.BufferOrString, TChunkMid1 = NodeJS.BufferOrString, TChunkMid2 = NodeJS.BufferOrString, TChunkOut = NodeJS.BufferOrString>(
            stream1: NodeJS.ReadableStream<TChunkIn>,
            stream2: NodeJS.ReadWriteStream<TChunkIn, TChunkMid1>,
            stream3: NodeJS.ReadWriteStream<TChunkMid1, TChunkMid2>,
            stream4: NodeJS.ReadWriteStream<TChunkMid2, TChunkOut>,
            stream5: NodeJS.WritableStream<TChunkOut>,
            callback?: (err: NodeJS.ErrnoException | null) => void,
        ): NodeJS.WritableStream<TChunkOut>;
        function pipeline<TChunkIn = NodeJS.BufferOrString, TChunkOut = NodeJS.BufferOrString>(
            streams: [
                NodeJS.ReadableStream<TChunkIn>,
                NodeJS.ReadWriteStream<TChunkIn, any> | NodeJS.WritableStream<TChunkIn>,
                ...Array<NodeJS.ReadWriteStream<any, any> | NodeJS.WritableStream<TChunkOut>>
            ],
            callback?: (err: NodeJS.ErrnoException | null) => void
        ): NodeJS.WritableStream<TChunkOut>;
        function pipeline<TChunkIn = NodeJS.BufferOrString, TChunkOut = NodeJS.BufferOrString>(
            stream1: NodeJS.ReadableStream<TChunkIn>,
            stream2: NodeJS.ReadWriteStream<TChunkIn, any> | NodeJS.WritableStream<TChunkIn>,
            ...streams: Array<NodeJS.ReadWriteStream<any, any> | NodeJS.WritableStream<TChunkOut> | ((err: NodeJS.ErrnoException | null) => void)>,
        ): NodeJS.WritableStream<TChunkOut>;
        namespace pipeline {
            function __promisify__<TChunk = NodeJS.BufferOrString>(
                stream1: NodeJS.ReadableStream<TChunk>,
                stream2: NodeJS.WritableStream<TChunk>
            ): Promise<void>;
            function __promisify__<TChunkIn = NodeJS.BufferOrString, TChunkOut = NodeJS.BufferOrString>(
                stream1: NodeJS.ReadableStream<TChunkIn>,
                stream2: NodeJS.ReadWriteStream<TChunkIn, TChunkOut>,
                stream3: NodeJS.WritableStream<TChunkOut>
            ): Promise<void>;
            function __promisify__<TChunkIn = NodeJS.BufferOrString, TChunkMid = NodeJS.BufferOrString, TChunkOut = NodeJS.BufferOrString>(
                stream1: NodeJS.ReadableStream<TChunkIn>,
                stream2: NodeJS.ReadWriteStream<TChunkIn, TChunkMid>,
                stream3: NodeJS.ReadWriteStream<TChunkMid, TChunkOut>,
                stream4: NodeJS.WritableStream<TChunkOut>
            ): Promise<void>;
            function __promisify__<TChunkIn = NodeJS.BufferOrString, TChunkMid1 = NodeJS.BufferOrString, TChunkMid2 = NodeJS.BufferOrString, TChunkOut = NodeJS.BufferOrString>(
                stream1: NodeJS.ReadableStream<TChunkIn>,
                stream2: NodeJS.ReadWriteStream<TChunkIn, TChunkMid1>,
                stream3: NodeJS.ReadWriteStream<TChunkMid1, TChunkMid2>,
                stream4: NodeJS.ReadWriteStream<TChunkMid2, TChunkOut>,
                stream5: NodeJS.WritableStream<TChunkOut>,
            ): Promise<void>;
            function __promisify__<TChunkIn = NodeJS.BufferOrString, TChunkOut = NodeJS.BufferOrString>(
                streams: [
                    NodeJS.ReadableStream<TChunkIn>,
                    NodeJS.ReadWriteStream<TChunkIn, any> | NodeJS.WritableStream<TChunkIn>,
                    ...Array<NodeJS.ReadWriteStream<any, any> | NodeJS.ReadWriteStream<any, TChunkOut> | NodeJS.WritableStream<TChunkOut>>
                ]
            ): Promise<void>;
            function __promisify__<TChunkIn = NodeJS.BufferOrString, TChunkOut = NodeJS.BufferOrString>(
                stream1: NodeJS.ReadableStream<TChunkIn>,
                stream2: NodeJS.ReadWriteStream<TChunkIn, any> | NodeJS.WritableStream<TChunkIn>,
                ...streams: Array<NodeJS.ReadWriteStream<any, any> | NodeJS.ReadWriteStream<any, TChunkOut> | NodeJS.WritableStream<TChunkOut>>,
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
