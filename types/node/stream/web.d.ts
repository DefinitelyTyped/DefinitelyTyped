declare module 'stream/web' {
    // stub module, pending copy&paste from .d.ts or manual impl
    // copy from lib.dom.d.ts
    interface ReadableWritablePair<R = any, W = any> {
        readable: ReadableStream<R>;
        /**
         * Provides a convenient, chainable way of piping this readable stream
         * through a transform stream (or any other { writable, readable }
         * pair). It simply pipes the stream into the writable side of the
         * supplied pair, and returns the readable side for further use.
         *
         * Piping a stream will lock it for the duration of the pipe, preventing
         * any other consumer from acquiring a reader.
         */
        writable: WritableStream<W>;
    }
    interface StreamPipeOptions {
        preventAbort?: boolean;
        preventCancel?: boolean;
        /**
         * Pipes this readable stream to a given writable stream destination.
         * The way in which the piping process behaves under various error
         * conditions can be customized with a number of passed options. It
         * returns a promise that fulfills when the piping process completes
         * successfully, or rejects if any errors were encountered.
         *
         * Piping a stream will lock it for the duration of the pipe, preventing
         * any other consumer from acquiring a reader.
         *
         * Errors and closures of the source and destination streams propagate
         * as follows:
         *
         * An error in this source readable stream will abort destination,
         * unless preventAbort is truthy. The returned promise will be rejected
         * with the source's error, or with any error that occurs during
         * aborting the destination.
         *
         * An error in destination will cancel this source readable stream,
         * unless preventCancel is truthy. The returned promise will be rejected
         * with the destination's error, or with any error that occurs during
         * canceling the source.
         *
         * When this source readable stream closes, destination will be closed,
         * unless preventClose is truthy. The returned promise will be fulfilled
         * once this process completes, unless an error is encountered while
         * closing the destination, in which case it will be rejected with that
         * error.
         *
         * If destination starts out closed or closing, this source readable
         * stream will be canceled, unless preventCancel is true. The returned
         * promise will be rejected with an error indicating piping to a closed
         * stream failed, or with any error that occurs during canceling the
         * source.
         *
         * The signal option can be set to an AbortSignal to allow aborting an
         * ongoing pipe operation via the corresponding AbortController. In this
         * case, this source readable stream will be canceled, and destination
         * aborted, unless the respective options preventCancel or preventAbort
         * are set.
         */
        preventClose?: boolean;
        signal?: AbortSignal;
    }
    interface ReadableStreamGenericReader {
        readonly closed: Promise<undefined>;
        cancel(reason?: any): Promise<void>;
    }
    interface ReadableStreamReadValueResult<T> {
        done: false;
        value: T;
    }
    interface ReadableStreamReadDoneResult<T> {
        done: true;
        value?: T;
    }
    type ReadableStreamController<T> = ReadableStreamDefaultController<T>;
    type ReadableStreamReadResult<T> = ReadableStreamReadValueResult<T> | ReadableStreamReadDoneResult<T>;

    interface ReadableByteStreamControllerCallback {
        (controller: ReadableByteStreamController): void | PromiseLike<void>;
    }
    interface UnderlyingSinkAbortCallback {
        (reason?: any): void | PromiseLike<void>;
    }
    interface UnderlyingSinkCloseCallback {
        (): void | PromiseLike<void>;
    }
    interface UnderlyingSinkStartCallback {
        (controller: WritableStreamDefaultController): any;
    }
    interface UnderlyingSinkWriteCallback<W> {
        (chunk: W, controller: WritableStreamDefaultController): void | PromiseLike<void>;
    }
    interface UnderlyingSourceCancelCallback {
        (reason?: any): void | PromiseLike<void>;
    }
    interface UnderlyingSourcePullCallback<R> {
        (controller: ReadableStreamController<R>): void | PromiseLike<void>;
    }
    interface UnderlyingSourceStartCallback<R> {
        (controller: ReadableStreamController<R>): any;
    }
    interface TransformerFlushCallback<O> {
        (controller: TransformStreamDefaultController<O>): void | PromiseLike<void>;
    }
    interface TransformerStartCallback<O> {
        (controller: TransformStreamDefaultController<O>): any;
    }
    interface TransformerTransformCallback<I, O> {
        (chunk: I, controller: TransformStreamDefaultController<O>): void | PromiseLike<void>;
    }
    interface UnderlyingByteSource {
        autoAllocateChunkSize?: number;
        cancel?: ReadableStreamErrorCallback;
        pull?: ReadableByteStreamControllerCallback;
        start?: ReadableByteStreamControllerCallback;
        type: 'bytes';
    }
    interface UnderlyingSource<R = any> {
        cancel?: UnderlyingSourceCancelCallback;
        pull?: UnderlyingSourcePullCallback<R>;
        start?: UnderlyingSourceStartCallback<R>;
        type?: undefined;
    }
    interface UnderlyingSink<W = any> {
        abort?: UnderlyingSinkAbortCallback;
        close?: UnderlyingSinkCloseCallback;
        start?: UnderlyingSinkStartCallback;
        type?: undefined;
        write?: UnderlyingSinkWriteCallback<W>;
    }
    interface ReadableStreamErrorCallback {
        (reason: any): void | PromiseLike<void>;
    }
    /**
     * This Streams API interface represents a readable stream of byte data.
     *
     * @see https://nodejs.org/api/webstreams.html#class-readablestream
     * @since v16.5.0
     */
    interface ReadableStream<R = any> {
        readonly locked: boolean;
        cancel(reason?: any): Promise<void>;
        // FIXME error TS2430: Interface 'ReadableStream<R>' incorrectly extends interface 'import("stream/web").ReadableStream<R>'
        // getReader(): ReadableStreamDefaultReader<R>;
        // getReader(options: { mode: 'byob' }): ReadableStreamBYOBReader;
        // getReader(options?: { mode?: 'byob' }): ReadableStreamReader<R>;
        pipeThrough<T>(transform: ReadableWritablePair<T, R>, options?: StreamPipeOptions): ReadableStream<T>;
        pipeTo(destination: WritableStream<R>, options?: StreamPipeOptions): Promise<void>;
        tee(): [ReadableStream<R>, ReadableStream<R>];
        values(options?: { preventCancel?: boolean }): AsyncIterableIterator<R>;
        [Symbol.asyncIterator](): AsyncIterableIterator<R>;
    }
    const ReadableStream: {
        prototype: ReadableStream;
        new (
            underlyingSource: UnderlyingByteSource,
            strategy?: QueuingStrategy<Uint8Array>,
        ): ReadableStream<Uint8Array>;
        new <R = any>(underlyingSource?: UnderlyingSource<R>, strategy?: QueuingStrategy<R>): ReadableStream<R>;
    };
    interface ReadableStreamDefaultReader<R = any> extends ReadableStreamGenericReader {
        read(): Promise<ReadableStreamReadResult<R>>;
        releaseLock(): void;
    }
    const ReadableStreamDefaultReader: {
        prototype: ReadableStreamDefaultReader;
        new <R = any>(stream: ReadableStream<R>): ReadableStreamDefaultReader<R>;
    };
    /**
     * The `ReadableStreamBYOBReader` is an alternative consumer for
     * byte-oriented {@link ReadableStream}s (those that are created with
     * `underlyingSource.type` set equal to 'bytes' when the `ReadableStream`
     * was created).
     *
     * The BYOB is short for "bring your own buffer". This is a pattern that
     * allows for more efficient reading of byte-oriented data that avoids
     * extraneous copying.
     *
     * @see https://nodejs.org/api/webstreams.html#class-readablestreambyobreader
     * @since v16.5.0
     */
    interface ReadableStreamBYOBReader extends ReadableStreamGenericReader {
        read<T extends ArrayBufferView>(view: T): Promise<ReadableStreamReadResult<T>>;
        releaseLock(): void;
    }
    const ReadableStreamBYOBReader: {
        prototype: ReadableStreamBYOBReader;
        new (stream: ReadableStream): ReadableStreamBYOBReader;
    };
    type ReadableStreamReader<T> = ReadableStreamDefaultReader<T> | ReadableStreamBYOBReader;
    /**
     * When using {@link ReadableByteStreamController} in byte-oriented streams, and when using the {@link ReadableStreamBYOBReader},
     * the `readableByteStreamController.byobRequest` property provides access to a `ReadableStreamBYOBRequest` instance
     * that represents the current read request. The object is used to gain access to the `Buffer`/`ArrayBuffer`/`TypedArray`
     * that has been provided for the read request to fill, and provides methods for signaling that the data has been provided.
     *
     * @see https://nodejs.org/api/webstreams.html#class-readablestreambyobrequest
     * @since v16.5.0
     */
    interface ReadableStreamBYOBRequest {
        readonly view: ArrayBufferView | null;
        respond(bytesWritten: number): void;
        respondWithNewView(view: ArrayBufferView): void;
    }
    const ReadableStreamBYOBRequest: {
        prototype: ReadableStreamBYOBRequest;
        new (): ReadableStreamBYOBRequest;
    };
    interface ReadableByteStreamController {
        readonly byobRequest: undefined;
        readonly desiredSize: number | null;
        close(): void;
        enqueue(chunk: ArrayBufferView): void;
        error(error?: any): void;
    }
    const ReadableByteStreamController: {
        prototype: ReadableByteStreamController;
        new (): ReadableByteStreamController;
    };
    interface ReadableStreamDefaultController<R = any> {
        readonly desiredSize: number | null;
        close(): void;
        enqueue(chunk?: R): void;
        error(e?: any): void;
    }
    const ReadableStreamDefaultController: {
        prototype: ReadableStreamDefaultController;
        new (): ReadableStreamDefaultController;
    };
    interface Transformer<I = any, O = any> {
        flush?: TransformerFlushCallback<O>;
        readableType?: undefined;
        start?: TransformerStartCallback<O>;
        transform?: TransformerTransformCallback<I, O>;
        writableType?: undefined;
    }
    /**
     * A TransformStream consists of a {@link ReadableStream} and a
     * {@link WritableStream} that are connected such that the data written to
     * the `WritableStream` is received, and potentially transformed, before
     * being pushed into the `ReadableStream`'s queue.
     *
     * @see https://nodejs.org/api/webstreams.html#class-transformstream
     * @since v16.5.0
     */
    interface TransformStream<I = any, O = any> {
        readonly readable: ReadableStream<O>;
        readonly writable: WritableStream<I>;
    }
    const TransformStream: {
        prototype: TransformStream;
        new <I = any, O = any>(
            transformer?: Transformer<I, O>,
            writableStrategy?: QueuingStrategy<I>,
            readableStrategy?: QueuingStrategy<O>,
        ): TransformStream<I, O>;
    };
    /**
     * The `TransformStreamDefaultController` manages the internal state of the {@link TransformStream}.
     *
     * @see https://nodejs.org/api/webstreams.html#class-transformstreamdefaultcontroller
     * @since v16.5.0
     */
    interface TransformStreamDefaultController<O = any> {
        readonly desiredSize: number | null;
        enqueue(chunk?: O): void;
        error(reason?: any): void;
        terminate(): void;
    }
    const TransformStreamDefaultController: {
        prototype: TransformStreamDefaultController;
        new (): TransformStreamDefaultController;
    };
    /**
     * This Streams API interface provides a standard abstraction for writing
     * streaming data to a destination, known as a sink. This object comes with
     * built-in back pressure and queuing.
     *
     * @see https://nodejs.org/api/webstreams.html#class-writablestream
     * @since v16.5.0
     */
    interface WritableStream<W = any> {
        readonly locked: boolean;
        abort(reason?: any): Promise<void>;
        close(): Promise<void>;
        getWriter(): WritableStreamDefaultWriter<W>;
    }
    const WritableStream: {
        prototype: WritableStream;
        new <W = any>(underlyingSink?: UnderlyingSink<W>, strategy?: QueuingStrategy<W>): WritableStream<W>;
    };
    /**
     * This Streams API interface is the object returned by
     * WritableStream.getWriter() and once created locks the < writer to the
     * WritableStream ensuring that no other streams can write to the underlying
     * sink.
     */
    interface WritableStreamDefaultWriter<W = any> {
        readonly closed: Promise<undefined>;
        readonly desiredSize: number | null;
        readonly ready: Promise<undefined>;
        abort(reason?: any): Promise<void>;
        close(): Promise<void>;
        releaseLock(): void;
        write(chunk?: W): Promise<void>;
    }
    const WritableStreamDefaultWriter: {
        prototype: WritableStreamDefaultWriter;
        new <W = any>(stream: WritableStream<W>): WritableStreamDefaultWriter<W>;
    };
    /**
     * This Streams API interface represents a controller allowing control of a
     * WritableStream's state. When constructing a WritableStream, the
     * underlying sink is given a corresponding WritableStreamDefaultController
     * instance to manipulate.
     *
     * @see https://nodejs.org/api/webstreams.html#class-writablestreamdefaultcontroller
     * @since v18.0.0
     */
    interface WritableStreamDefaultController {
        error(e?: any): void;
    }
    const WritableStreamDefaultController: {
        prototype: WritableStreamDefaultController;
        new (): WritableStreamDefaultController;
    };
    interface QueuingStrategy<T = any> {
        highWaterMark?: number;
        size?: QueuingStrategySize<T>;
    }
    interface QueuingStrategySize<T = any> {
        (chunk?: T): number;
    }
    interface QueuingStrategyInit {
        /**
         * Creates a new ByteLengthQueuingStrategy with the provided high water
         * mark.
         *
         * Note that the provided high water mark will not be validated ahead of
         * time. Instead, if it is negative, NaN, or not a number, the resulting
         * ByteLengthQueuingStrategy will cause the corresponding stream
         * constructor to throw.
         */
        highWaterMark: number;
    }
    /**
     * This Streams API interface provides a built-in byte length queuing
     * strategy that can be used when constructing streams.
     *
     * @see https://nodejs.org/api/webstreams.html#class-bytelengthqueuingstrategy
     * @since v16.5.0
     */
    interface ByteLengthQueuingStrategy extends QueuingStrategy<ArrayBufferView> {
        readonly highWaterMark: number;
        readonly size: QueuingStrategySize<ArrayBufferView>;
    }
    const ByteLengthQueuingStrategy: {
        prototype: ByteLengthQueuingStrategy;
        new (init: QueuingStrategyInit): ByteLengthQueuingStrategy;
    };
    /**
     * This Streams API interface provides a built-in byte length queuing
     * strategy that can be used when constructing streams.
     *
     * @see https://nodejs.org/api/webstreams.html#class-countqueuingstrategy
     * @since v16.5.0
     */
    interface CountQueuingStrategy extends QueuingStrategy {
        readonly highWaterMark: number;
        readonly size: QueuingStrategySize;
    }
    const CountQueuingStrategy: {
        prototype: CountQueuingStrategy;
        new (init: QueuingStrategyInit): CountQueuingStrategy;
    };
    /**
     * @see https://nodejs.org/api/webstreams.html#class-textencoderstream
     * @since v16.6.0
     */
    interface TextEncoderStream {
        /** Returns "utf-8". */
        readonly encoding: 'utf-8';
        readonly readable: ReadableStream<Uint8Array>;
        readonly writable: WritableStream<string>;
        readonly [Symbol.toStringTag]: string;
    }
    const TextEncoderStream: {
        prototype: TextEncoderStream;
        new (): TextEncoderStream;
    };
    interface TextDecoderOptions {
        fatal?: boolean;
        ignoreBOM?: boolean;
    }
    type BufferSource = ArrayBufferView | ArrayBuffer;
    /**
     * @see https://nodejs.org/api/webstreams.html#class-textdecoderstream
     * @since v16.6.0
     */
    interface TextDecoderStream {
        /** Returns encoding's name, lower cased. */
        readonly encoding: string;
        /** Returns `true` if error mode is "fatal", and `false` otherwise. */
        readonly fatal: boolean;
        /** Returns `true` if ignore BOM flag is set, and `false` otherwise. */
        readonly ignoreBOM: boolean;
        readonly readable: ReadableStream<string>;
        readonly writable: WritableStream<BufferSource>;
        readonly [Symbol.toStringTag]: string;
    }
    const TextDecoderStream: {
        prototype: TextDecoderStream;
        new (label?: string, options?: TextDecoderOptions): TextDecoderStream;
    };
    /**
     * @see https://nodejs.org/api/webstreams.html#class-compressionstream
     * @since v17.0.0
     */
    interface CompressionStream<R = any, W = any> {
        readable: ReadableStream<R>;
        writable: WritableStream<W>;
    }
    const CompressionStream: {
        prototype: CompressionStream;
        new (format: 'deflate' | 'gzip'): CompressionStream;
    };
    /**
     * @see https://nodejs.org/api/webstreams.html#class-decompressionstream
     * @since v17.0.0
     */
    interface DecompressionStream<R = any, W = any> {
        readable: ReadableStream<R>;
        writable: WritableStream<W>;
    }
    const DecompressionStream: {
        prototype: DecompressionStream;
        new (format: 'deflate' | 'gzip'): DecompressionStream;
    };

    import {
        ReadableStream as _ReadableStream,
        ReadableStreamDefaultReader as _ReadableStreamDefaultReader,
        ReadableStreamBYOBReader as _ReadableStreamBYOBReader,
        ReadableStreamBYOBRequest as _ReadableStreamBYOBRequest,
        WritableStream as _WritableStream,
        WritableStreamDefaultWriter as _WritableStreamDefaultWriter,
        WritableStreamDefaultController as _WritableStreamDefaultController,
        TransformStream as _TransformStream,
        TransformStreamDefaultController as _TransformStreamDefaultController,
        ByteLengthQueuingStrategy as _ByteLengthQueuingStrategy,
        CountQueuingStrategy as _CountQueuingStrategy,
        TextEncoderStream as _TextEncoderStream,
        TextDecoderStream as _TextDecoderStream,
        CompressionStream as _CompressionStream,
        DecompressionStream as _DecompressionStream,
    } from 'stream/web';

    global {
        /**
         * `ReadableStream` class is a global reference for `require('node:stream/web').ReadableStream`
         *
         * @see https://nodejs.org/api/webstreams.html#class-readablestream
         * @since v18.0.0
         */
        interface ReadableStream<R = any> extends _ReadableStream<R> {}
        var ReadableStream: typeof globalThis extends { onmessage: any; ReadableStream: infer T }
            ? T
            : typeof _ReadableStream;
        /**
         * `ReadableStreamDefaultReader` class is a global reference for `require('node:stream/web').ReadableStreamDefaultReader`
         *
         * @see https://nodejs.org/api/webstreams.html#class-readablestreamdefaultreader
         * @since v18.0.0
         */
        interface ReadableStreamDefaultReader<R = any> extends _ReadableStreamDefaultReader<R> {}
        var ReadableStreamDefaultReader: typeof globalThis extends {
            onmessage: any;
            ReadableStreamDefaultReader: infer T;
        }
            ? T
            : typeof _ReadableStreamDefaultReader;
        /**
         * `ReadableStreamBYOBReader` class is a global reference for `require('node:stream/web').ReadableStreamBYOBReader`
         *
         * @see https://nodejs.org/api/webstreams.html#class-readablestreambyobreader
         * @since v18.0.0
         */
        var ReadableStreamBYOBReader: typeof globalThis extends { onmessage: any; ReadableStreamBYOBReader: infer T }
            ? T
            : typeof _ReadableStreamBYOBReader;
        /**
         * `ReadableStreamBYOBRequest` class is a global reference for `require('node:stream/web').ReadableStreamBYOBRequest`
         *
         * @see https://nodejs.org/api/webstreams.html#class-readablestreambyobrequest
         * @since v18.0.0
         */
        var ReadableStreamBYOBRequest: typeof globalThis extends { onmessage: any; ReadableStreamBYOBRequest: infer T }
            ? T
            : typeof _ReadableStreamBYOBRequest;
        /**
         * `WritableStream` class is a global reference for `require('node:stream/web').WritableStream`
         *
         * @see https://nodejs.org/api/webstreams.html#class-writablestream
         * @since v18.0.0
         */
        interface WritableStream<W = any> extends _WritableStream<W> {}
        var WritableStream: typeof globalThis extends { onmessage: any; WritableStream: infer T }
            ? T
            : typeof _WritableStream;
        /**
         * `WritableStreamDefaultWriter` class is a global reference for `require('node:stream/web').WritableStreamDefaultWriter`
         *
         * @see https://nodejs.org/api/webstreams.html#class-writablestreamdefaultwriter
         * @since v18.0.0
         */
        interface WritableStreamDefaultWriter<W = any> extends _WritableStreamDefaultWriter<W> {}
        var WritableStreamDefaultWriter: typeof globalThis extends {
            onmessage: any;
            WritableStreamDefaultWriter: infer T;
        }
            ? T
            : typeof _WritableStreamDefaultWriter;
        /**
         * `WritableStreamDefaultController` class is a global reference for `require('node:stream/web').WritableStreamDefaultController`
         *
         * @see https://nodejs.org/api/webstreams.html#class-writablestreamdefaultcontroller
         * @since v18.0.0
         */
        var WritableStreamDefaultController: typeof globalThis extends {
            onmessage: any;
            WritableStreamDefaultController: infer T;
        }
            ? T
            : typeof _WritableStreamDefaultController;
        /**
         * `TransformStream` class is a global reference for `require('node:stream/web').TransformStream`
         *
         * @see https://nodejs.org/api/webstreams.html#class-transformstream
         * @since v18.0.0
         */
        interface TransformStream<I = any, O = any> extends _TransformStream<I, O> {}
        var TransformStream: typeof globalThis extends { onmessage: any; TransformStream: infer T }
            ? T
            : typeof _TransformStream;
        /**
         * `TransformStreamDefaultController` class is a global reference for `require('node:stream/web').TransformStreamDefaultController`
         *
         * @see https://nodejs.org/api/webstreams.html#class-transformstreamdefaultcontroller
         * @since v18.0.0
         */
        interface TransformStreamDefaultController<O = any> extends _TransformStreamDefaultController<O> {}
        var TransformStreamDefaultController: typeof globalThis extends {
            onmessage: any;
            TransformStreamDefaultController: infer T;
        }
            ? T
            : typeof _TransformStreamDefaultController;
        /**
         * `ByteLengthQueuingStrategy` class is a global reference for `require('node:stream/web').ByteLengthQueuingStrategy`
         *
         * @see https://nodejs.org/api/webstreams.html#class-bytelengthqueuingstrategy
         * @since v18.0.0
         */
        var ByteLengthQueuingStrategy: typeof globalThis extends { onmessage: any; ByteLengthQueuingStrategy: infer T }
            ? T
            : typeof _ByteLengthQueuingStrategy;
        /**
         * `CountQueuingStrategy` class is a global reference for `require('node:stream/web').CountQueuingStrategy`
         *
         * @see https://nodejs.org/api/webstreams.html#class-countqueuingstrategy
         * @since v18.0.0
         */
        var CountQueuingStrategy: typeof globalThis extends { onmessage: any; CountQueuingStrategy: infer T }
            ? T
            : typeof _CountQueuingStrategy;
        /**
         * `TextEncoderStream` class is a global reference for `require('node:stream/web').TextEncoderStream`
         *
         * @see https://nodejs.org/api/webstreams.html#class-textencoderstream
         * @since v18.0.0
         */
        var TextEncoderStream: typeof globalThis extends { onmessage: any; TextEncoderStream: infer T }
            ? T
            : typeof _TextEncoderStream;
        /**
         * `TextDecoderStream` class is a global reference for `require('node:stream/web').TextDecoderStream`
         *
         * @see https://nodejs.org/api/webstreams.html#class-textdecoderstream
         * @since v18.0.0
         */
        var TextDecoderStream: typeof globalThis extends { onmessage: any; TextDecoderStream: infer T }
            ? T
            : typeof _TextDecoderStream;
        /**
         * `CompressionStream` class is a global reference for `require('node:stream/web').CompressionStream`
         *
         * @see https://nodejs.org/api/webstreams.html#class-compressionstream
         * @since v18.0.0
         */
        // FIXME error TS2320: Interface 'CompressionStream<R, W>' cannot simultaneously extend types 'GenericTransformStream' and 'CompressionStream<R, W>'
        // interface CompressionStream<R = any, W = any> extends _CompressionStream<R, W> {}
        // var CompressionStream: typeof globalThis extends { onmessage: any; CompressionStream: infer T }
        //     ? T
        //     : typeof _CompressionStream;
        /**
         * `DecompressionStream` class is a global reference for `require('node:stream/web').DecompressionStream`
         *
         * @see https://nodejs.org/api/webstreams.html#class-decompressionstream
         * @since v18.0.0
         */
        // interface DecompressionStream<R = any, W = any> extends _DecompressionStream<R, W> {}
        // var DecompressionStream: typeof globalThis extends { onmessage: any; DecompressionStream: infer T }
        //     ? T
        //     : typeof _DecompressionStream;
    }
}
declare module 'node:stream/web' {
    export * from 'stream/web';
}
