declare module 'node:stream' {
    import Stream = require('stream');
    export = Stream;
}

declare module 'stream' {
    import EventEmitter = require('node:events');

    class internal extends EventEmitter {
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
            addListener(event: "close", listener: () => void): this;
            addListener(event: "data", listener: (chunk: any) => void): this;
            addListener(event: "end", listener: () => void): this;
            addListener(event: "error", listener: (err: Error) => void): this;
            addListener(event: "pause", listener: () => void): this;
            addListener(event: "readable", listener: () => void): this;
            addListener(event: "resume", listener: () => void): this;
            addListener(event: string | symbol, listener: (...args: any[]) => void): this;

            emit(event: "close"): boolean;
            emit(event: "data", chunk: any): boolean;
            emit(event: "end"): boolean;
            emit(event: "error", err: Error): boolean;
            emit(event: "pause"): boolean;
            emit(event: "readable"): boolean;
            emit(event: "resume"): boolean;
            emit(event: string | symbol, ...args: any[]): boolean;

            on(event: "close", listener: () => void): this;
            on(event: "data", listener: (chunk: any) => void): this;
            on(event: "end", listener: () => void): this;
            on(event: "error", listener: (err: Error) => void): this;
            on(event: "pause", listener: () => void): this;
            on(event: "readable", listener: () => void): this;
            on(event: "resume", listener: () => void): this;
            on(event: string | symbol, listener: (...args: any[]) => void): this;

            once(event: "close", listener: () => void): this;
            once(event: "data", listener: (chunk: any) => void): this;
            once(event: "end", listener: () => void): this;
            once(event: "error", listener: (err: Error) => void): this;
            once(event: "pause", listener: () => void): this;
            once(event: "readable", listener: () => void): this;
            once(event: "resume", listener: () => void): this;
            once(event: string | symbol, listener: (...args: any[]) => void): this;

            prependListener(event: "close", listener: () => void): this;
            prependListener(event: "data", listener: (chunk: any) => void): this;
            prependListener(event: "end", listener: () => void): this;
            prependListener(event: "error", listener: (err: Error) => void): this;
            prependListener(event: "pause", listener: () => void): this;
            prependListener(event: "readable", listener: () => void): this;
            prependListener(event: "resume", listener: () => void): this;
            prependListener(event: string | symbol, listener: (...args: any[]) => void): this;

            prependOnceListener(event: "close", listener: () => void): this;
            prependOnceListener(event: "data", listener: (chunk: any) => void): this;
            prependOnceListener(event: "end", listener: () => void): this;
            prependOnceListener(event: "error", listener: (err: Error) => void): this;
            prependOnceListener(event: "pause", listener: () => void): this;
            prependOnceListener(event: "readable", listener: () => void): this;
            prependOnceListener(event: "resume", listener: () => void): this;
            prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;

            removeListener(event: "close", listener: () => void): this;
            removeListener(event: "data", listener: (chunk: any) => void): this;
            removeListener(event: "end", listener: () => void): this;
            removeListener(event: "error", listener: (err: Error) => void): this;
            removeListener(event: "pause", listener: () => void): this;
            removeListener(event: "readable", listener: () => void): this;
            removeListener(event: "resume", listener: () => void): this;
            removeListener(event: string | symbol, listener: (...args: any[]) => void): this;

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
            writableCorked?: number;
            read?(this: Duplex, size: number): void;
            write?(this: Duplex, chunk: any, encoding: BufferEncoding, callback: (error?: Error | null) => void): void;
            writev?(this: Duplex, chunks: Array<{ chunk: any, encoding: BufferEncoding }>, callback: (error?: Error | null) => void): void;
            final?(this: Duplex, callback: (error?: Error | null) => void): void;
            destroy?(this: Duplex, error: Error | null, callback: (error: Error | null) => void): void;
        }

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

        type PipelineSourceFunction<T> = () => Iterable<T> | AsyncIterable<T>;
        type PipelineSource<T> = Iterable<T> | AsyncIterable<T> | NodeJS.ReadableStream | PipelineSourceFunction<T>;
        type PipelineTransform<S extends PipelineTransformSource<any>, U> =
            NodeJS.ReadWriteStream |
            ((source: S extends (...args: any[]) => Iterable<infer ST> | AsyncIterable<infer ST> ?
                AsyncIterable<ST> : S) => AsyncIterable<U>);
        type PipelineTransformSource<T> = PipelineSource<T> | PipelineTransform<any, T>;

        type PipelineDestinationIterableFunction<T> = (source: AsyncIterable<T>) => AsyncIterable<any>;
        type PipelineDestinationPromiseFunction<T, P> = (source: AsyncIterable<T>) => Promise<P>;

        type PipelineDestination<S extends PipelineTransformSource<any>, P> =
            S extends PipelineTransformSource<infer ST> ?
                (NodeJS.WritableStream | PipelineDestinationIterableFunction<ST> | PipelineDestinationPromiseFunction<ST, P>) : never;
        type PipelineCallback<S extends PipelineDestination<any, any>> =
            S extends PipelineDestinationPromiseFunction<any, infer P> ? (err: NodeJS.ErrnoException | null, value: P) => void :
                (err: NodeJS.ErrnoException | null) => void;
        type PipelinePromise<S extends PipelineDestination<any, any>> =
            S extends PipelineDestinationPromiseFunction<any, infer P> ? Promise<P> : Promise<void>;

        function pipeline<A extends PipelineSource<any>,
            B extends PipelineDestination<A, any>>(
            source: A,
            destination: B,
            callback?: PipelineCallback<B>
        ): B extends NodeJS.WritableStream ? B : NodeJS.WritableStream;
        function pipeline<A extends PipelineSource<any>,
            T1 extends PipelineTransform<A, any>,
            B extends PipelineDestination<T1, any>>(
            source: A,
            transform1: T1,
            destination: B,
            callback?: PipelineCallback<B>
        ): B extends NodeJS.WritableStream ? B : NodeJS.WritableStream;
        function pipeline<A extends PipelineSource<any>,
            T1 extends PipelineTransform<A, any>,
            T2 extends PipelineTransform<T1, any>,
            B extends PipelineDestination<T2, any>>(
            source: A,
            transform1: T1,
            transform2: T2,
            destination: B,
            callback?: PipelineCallback<B>
        ): B extends NodeJS.WritableStream ? B : NodeJS.WritableStream;
        function pipeline<A extends PipelineSource<any>,
            T1 extends PipelineTransform<A, any>,
            T2 extends PipelineTransform<T1, any>,
            T3 extends PipelineTransform<T2, any>,
            B extends PipelineDestination<T3, any>>(
            source: A,
            transform1: T1,
            transform2: T2,
            transform3: T3,
            destination: B,
            callback?: PipelineCallback<B>
        ): B extends NodeJS.WritableStream ? B : NodeJS.WritableStream;
        function pipeline<A extends PipelineSource<any>,
            T1 extends PipelineTransform<A, any>,
            T2 extends PipelineTransform<T1, any>,
            T3 extends PipelineTransform<T2, any>,
            T4 extends PipelineTransform<T3, any>,
            B extends PipelineDestination<T4, any>>(
            source: A,
            transform1: T1,
            transform2: T2,
            transform3: T3,
            transform4: T4,
            destination: B,
            callback?: PipelineCallback<B>
        ): B extends NodeJS.WritableStream ? B : NodeJS.WritableStream;
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
            function __promisify__<A extends PipelineSource<any>,
                B extends PipelineDestination<A, any>>(
                source: A,
                destination: B
            ): PipelinePromise<B>;
            function __promisify__<A extends PipelineSource<any>,
                T1 extends PipelineTransform<A, any>,
                B extends PipelineDestination<T1, any>>(
                source: A,
                transform1: T1,
                destination: B
            ): PipelinePromise<B>;
            function __promisify__<A extends PipelineSource<any>,
                T1 extends PipelineTransform<A, any>,
                T2 extends PipelineTransform<T1, any>,
                B extends PipelineDestination<T2, any>>(
                source: A,
                transform1: T1,
                transform2: T2,
                destination: B
            ): PipelinePromise<B>;
            function __promisify__<A extends PipelineSource<any>,
                T1 extends PipelineTransform<A, any>,
                T2 extends PipelineTransform<T1, any>,
                T3 extends PipelineTransform<T2, any>,
                B extends PipelineDestination<T3, any>>(
                source: A,
                transform1: T1,
                transform2: T2,
                transform3: T3,
                destination: B
            ): PipelinePromise<B>;
            function __promisify__<A extends PipelineSource<any>,
                T1 extends PipelineTransform<A, any>,
                T2 extends PipelineTransform<T1, any>,
                T3 extends PipelineTransform<T2, any>,
                T4 extends PipelineTransform<T3, any>,
                B extends PipelineDestination<T4, any>>(
                source: A,
                transform1: T1,
                transform2: T2,
                transform3: T3,
                transform4: T4,
                destination: B
            ): PipelinePromise<B>;

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
