type _ByteLengthQueuingStrategy = typeof globalThis extends { onmessage: any } ? {}
    : import("stream/web").ByteLengthQueuingStrategy;
type _CompressionStream = typeof globalThis extends { onmessage: any } ? {}
    : import("stream/web").CompressionStream;
type _CountQueuingStrategy = typeof globalThis extends { onmessage: any } ? {}
    : import("stream/web").CountQueuingStrategy;
type _DecompressionStream = typeof globalThis extends { onmessage: any } ? {}
    : import("stream/web").DecompressionStream;
type _ReadableByteStreamController = typeof globalThis extends { onmessage: any } ? {}
    : import("stream/web").ReadableByteStreamController;
type _ReadableStream<R = any> = typeof globalThis extends { onmessage: any } ? {}
    : import("stream/web").ReadableStream<R>;
type _ReadableStreamBYOBReader = typeof globalThis extends { onmessage: any } ? {}
    : import("stream/web").ReadableStreamBYOBReader;
type _ReadableStreamBYOBRequest = typeof globalThis extends { onmessage: any } ? {}
    : import("stream/web").ReadableStreamBYOBRequest;
type _ReadableStreamDefaultController<R = any> = typeof globalThis extends { onmessage: any } ? {}
    : import("stream/web").ReadableStreamDefaultController<R>;
type _ReadableStreamDefaultReader<R = any> = typeof globalThis extends { onmessage: any } ? {}
    : import("stream/web").ReadableStreamDefaultReader<R>;
type _TextDecoderStream = typeof globalThis extends { onmessage: any } ? {}
    : import("stream/web").TextDecoderStream;
type _TextEncoderStream = typeof globalThis extends { onmessage: any } ? {}
    : import("stream/web").TextEncoderStream;
type _TransformStream<I = any, O = any> = typeof globalThis extends { onmessage: any } ? {}
    : import("stream/web").TransformStream<I, O>;
type _TransformStreamDefaultController<O = any> = typeof globalThis extends { onmessage: any } ? {}
    : import("stream/web").TransformStreamDefaultController<O>;
type _WritableStream<W = any> = typeof globalThis extends { onmessage: any } ? {}
    : import("stream/web").WritableStream<W>;
type _WritableStreamDefaultController = typeof globalThis extends { onmessage: any } ? {}
    : import("stream/web").WritableStreamDefaultController;
type _WritableStreamDefaultWriter<W = any> = typeof globalThis extends { onmessage: any } ? {}
    : import("stream/web").WritableStreamDefaultWriter<W>;

declare module "stream/web" {
    type BufferSource = NonSharedArrayBufferView | ArrayBuffer;
    interface ReadableWritablePair<R = any, W = any> {
        readable: ReadableStream<R>;
        writable: WritableStream<W>;
    }
    interface StreamPipeOptions {
        preventAbort?: boolean;
        preventCancel?: boolean;
        preventClose?: boolean;
        signal?: AbortSignal;
    }
    interface ReadableStreamGenericReader {
        readonly closed: Promise<void>;
        cancel(reason?: any): Promise<void>;
    }
    type ReadableStreamController<T> = ReadableStreamDefaultController<T> | ReadableByteStreamController;
    interface ReadableStreamReadValueResult<T> {
        done: false;
        value: T;
    }
    interface ReadableStreamReadDoneResult<T> {
        done: true;
        value: T | undefined;
    }
    type ReadableStreamReadResult<T> = ReadableStreamReadValueResult<T> | ReadableStreamReadDoneResult<T>;
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
    interface TransformerCancelCallback {
        (reason: any): void | PromiseLike<void>;
    }
    type ReadableStreamType = "bytes";
    interface UnderlyingByteSource {
        autoAllocateChunkSize?: number;
        cancel?: UnderlyingSourceCancelCallback;
        pull?: (controller: ReadableByteStreamController) => void | PromiseLike<void>;
        start?: (controller: ReadableByteStreamController) => any;
        type: "bytes";
    }
    interface UnderlyingDefaultSource<R = any> {
        cancel?: UnderlyingSourceCancelCallback;
        pull?: (controller: ReadableStreamDefaultController<R>) => void | PromiseLike<void>;
        start?: (controller: ReadableStreamDefaultController<R>) => any;
        type?: undefined;
    }
    interface UnderlyingSource<R = any> {
        autoAllocateChunkSize?: number;
        cancel?: UnderlyingSourceCancelCallback;
        pull?: UnderlyingSourcePullCallback<R>;
        start?: UnderlyingSourceStartCallback<R>;
        type?: ReadableStreamType;
    }
    interface UnderlyingSink<W = any> {
        abort?: UnderlyingSinkAbortCallback;
        close?: UnderlyingSinkCloseCallback;
        start?: UnderlyingSinkStartCallback;
        type?: undefined;
        write?: UnderlyingSinkWriteCallback<W>;
    }
    interface ReadableStreamAsyncIterator<T> extends NodeJS.AsyncIterator<T, NodeJS.BuiltinIteratorReturn, unknown> {
        [Symbol.asyncIterator](): ReadableStreamAsyncIterator<T>;
    }
    interface ReadableStreamIteratorOptions {
        preventCancel?: boolean;
    }
    interface ReadableStream<R = any> {
        readonly locked: boolean;
        cancel(reason?: any): Promise<void>;
        getReader(options: { mode: "byob" }): ReadableStreamBYOBReader;
        getReader(): ReadableStreamDefaultReader<R>;
        getReader(options?: ReadableStreamGetReaderOptions): ReadableStreamReader<R>;
        pipeThrough<T>(transform: ReadableWritablePair<T, R>, options?: StreamPipeOptions): ReadableStream<T>;
        pipeTo(destination: WritableStream<R>, options?: StreamPipeOptions): Promise<void>;
        tee(): [ReadableStream<R>, ReadableStream<R>];
        values(options?: ReadableStreamIteratorOptions): ReadableStreamAsyncIterator<R>;
        [Symbol.asyncIterator](options?: ReadableStreamIteratorOptions): ReadableStreamAsyncIterator<R>;
    }
    var ReadableStream: {
        prototype: ReadableStream;
        new(
            underlyingSource: UnderlyingByteSource,
            strategy?: { highWaterMark?: number },
        ): ReadableStream<NonSharedUint8Array>;
        new<R = any>(underlyingSource: UnderlyingDefaultSource<R>, strategy?: QueuingStrategy<R>): ReadableStream<R>;
        new<R = any>(underlyingSource?: UnderlyingSource<R>, strategy?: QueuingStrategy<R>): ReadableStream<R>;
        from<T>(iterable: Iterable<T> | AsyncIterable<T>): ReadableStream<T>;
    };
    type ReadableStreamReaderMode = "byob";
    interface ReadableStreamGetReaderOptions {
        mode?: ReadableStreamReaderMode;
    }
    type ReadableStreamReader<T> = ReadableStreamDefaultReader<T> | ReadableStreamBYOBReader;
    interface ReadableStreamDefaultReader<R = any> extends ReadableStreamGenericReader {
        read(): Promise<ReadableStreamReadResult<R>>;
        releaseLock(): void;
    }
    interface ReadableStreamBYOBReaderReadOptions {
        min?: number;
    }
    interface ReadableStreamBYOBReader extends ReadableStreamGenericReader {
        read<T extends ArrayBufferView>(
            view: T,
            options?: ReadableStreamBYOBReaderReadOptions,
        ): Promise<ReadableStreamReadResult<T>>;
        releaseLock(): void;
    }
    var ReadableStreamDefaultReader: {
        prototype: ReadableStreamDefaultReader;
        new<R = any>(stream: ReadableStream<R>): ReadableStreamDefaultReader<R>;
    };
    var ReadableStreamBYOBReader: {
        prototype: ReadableStreamBYOBReader;
        new(stream: ReadableStream<NonSharedUint8Array>): ReadableStreamBYOBReader;
    };
    interface ReadableStreamBYOBRequest {
        readonly view: NonSharedArrayBufferView | null;
        respond(bytesWritten: number): void;
        respondWithNewView(view: NonSharedArrayBufferView): void;
    }
    var ReadableStreamBYOBRequest: {
        prototype: ReadableStreamBYOBRequest;
        new(): ReadableStreamBYOBRequest;
    };
    interface ReadableByteStreamController {
        readonly byobRequest: ReadableStreamBYOBRequest | null;
        readonly desiredSize: number | null;
        close(): void;
        enqueue(chunk: NonSharedArrayBufferView): void;
        error(e?: any): void;
    }
    var ReadableByteStreamController: {
        prototype: ReadableByteStreamController;
        new(): ReadableByteStreamController;
    };
    interface ReadableStreamDefaultController<R = any> {
        readonly desiredSize: number | null;
        close(): void;
        enqueue(chunk?: R): void;
        error(e?: any): void;
    }
    var ReadableStreamDefaultController: {
        prototype: ReadableStreamDefaultController;
        new(): ReadableStreamDefaultController;
    };
    interface Transformer<I = any, O = any> {
        flush?: TransformerFlushCallback<O>;
        readableType?: undefined;
        start?: TransformerStartCallback<O>;
        transform?: TransformerTransformCallback<I, O>;
        cancel?: TransformerCancelCallback;
        writableType?: undefined;
    }
    interface TransformStream<I = any, O = any> {
        readonly readable: ReadableStream<O>;
        readonly writable: WritableStream<I>;
    }
    var TransformStream: {
        prototype: TransformStream;
        new<I = any, O = any>(
            transformer?: Transformer<I, O>,
            writableStrategy?: QueuingStrategy<I>,
            readableStrategy?: QueuingStrategy<O>,
        ): TransformStream<I, O>;
    };
    interface GenericTransformStream {
        readonly readable: ReadableStream;
        readonly writable: WritableStream;
    }
    interface TransformStreamDefaultController<O = any> {
        readonly desiredSize: number | null;
        enqueue(chunk?: O): void;
        error(reason?: any): void;
        terminate(): void;
    }
    var TransformStreamDefaultController: {
        prototype: TransformStreamDefaultController;
        new(): TransformStreamDefaultController;
    };
    interface WritableStream<W = any> {
        readonly locked: boolean;
        abort(reason?: any): Promise<void>;
        close(): Promise<void>;
        getWriter(): WritableStreamDefaultWriter<W>;
    }
    var WritableStream: {
        prototype: WritableStream;
        new<W = any>(underlyingSink?: UnderlyingSink<W>, strategy?: QueuingStrategy<W>): WritableStream<W>;
    };
    interface WritableStreamDefaultWriter<W = any> {
        readonly closed: Promise<void>;
        readonly desiredSize: number | null;
        readonly ready: Promise<void>;
        abort(reason?: any): Promise<void>;
        close(): Promise<void>;
        releaseLock(): void;
        write(chunk?: W): Promise<void>;
    }
    var WritableStreamDefaultWriter: {
        prototype: WritableStreamDefaultWriter;
        new<W = any>(stream: WritableStream<W>): WritableStreamDefaultWriter<W>;
    };
    interface WritableStreamDefaultController {
        readonly signal: AbortSignal;
        error(e?: any): void;
    }
    var WritableStreamDefaultController: {
        prototype: WritableStreamDefaultController;
        new(): WritableStreamDefaultController;
    };
    interface QueuingStrategy<T = any> {
        highWaterMark?: number;
        size?: QueuingStrategySize<T>;
    }
    interface QueuingStrategySize<T = any> {
        (chunk: T): number;
    }
    interface QueuingStrategyInit {
        highWaterMark: number;
    }
    interface ByteLengthQueuingStrategy extends QueuingStrategy<ArrayBufferView> {
        readonly highWaterMark: number;
        readonly size: QueuingStrategySize<ArrayBufferView>;
    }
    var ByteLengthQueuingStrategy: {
        prototype: ByteLengthQueuingStrategy;
        new(init: QueuingStrategyInit): ByteLengthQueuingStrategy;
    };
    interface CountQueuingStrategy extends QueuingStrategy {
        readonly highWaterMark: number;
        readonly size: QueuingStrategySize;
    }
    var CountQueuingStrategy: {
        prototype: CountQueuingStrategy;
        new(init: QueuingStrategyInit): CountQueuingStrategy;
    };
    interface TextEncoderCommon {
        readonly encoding: string;
    }
    interface TextEncoderStream extends GenericTransformStream, TextEncoderCommon {
        readonly readable: ReadableStream<NonSharedUint8Array>;
        readonly writable: WritableStream<string>;
    }
    var TextEncoderStream: {
        prototype: TextEncoderStream;
        new(): TextEncoderStream;
    };
    interface TextDecoderCommon {
        readonly encoding: string;
        readonly fatal: boolean;
        readonly ignoreBOM: boolean;
    }
    interface TextDecoderOptions {
        fatal?: boolean;
        ignoreBOM?: boolean;
    }
    interface TextDecoderStream extends GenericTransformStream, TextDecoderCommon {
        readonly readable: ReadableStream<string>;
        readonly writable: WritableStream<BufferSource>;
    }
    var TextDecoderStream: {
        prototype: TextDecoderStream;
        new(label?: string, options?: TextDecoderOptions): TextDecoderStream;
    };
    type CompressionFormat = "deflate" | "deflate-raw" | "gzip";
    interface CompressionStream extends GenericTransformStream {
        readonly readable: ReadableStream<NonSharedUint8Array>;
        readonly writable: WritableStream<BufferSource>;
    }
    var CompressionStream: {
        prototype: CompressionStream;
        new(format: CompressionFormat): CompressionStream;
    };
    interface DecompressionStream extends GenericTransformStream {
        readonly readable: ReadableStream<NonSharedUint8Array>;
        readonly writable: WritableStream<BufferSource>;
    }
    var DecompressionStream: {
        prototype: DecompressionStream;
        new(format: CompressionFormat): DecompressionStream;
    };
    global {
        interface ByteLengthQueuingStrategy extends _ByteLengthQueuingStrategy {}
        var ByteLengthQueuingStrategy: typeof globalThis extends { onmessage: any; ByteLengthQueuingStrategy: infer T }
            ? T
            : typeof import("stream/web").ByteLengthQueuingStrategy;
        interface CompressionStream extends _CompressionStream {}
        var CompressionStream: typeof globalThis extends {
            onmessage: any;
            CompressionStream: infer T;
        } ? T
            : typeof import("stream/web").CompressionStream;
        interface CountQueuingStrategy extends _CountQueuingStrategy {}
        var CountQueuingStrategy: typeof globalThis extends { onmessage: any; CountQueuingStrategy: infer T } ? T
            : typeof import("stream/web").CountQueuingStrategy;
        interface DecompressionStream extends _DecompressionStream {}
        var DecompressionStream: typeof globalThis extends {
            onmessage: any;
            DecompressionStream: infer T;
        } ? T
            : typeof import("stream/web").DecompressionStream;
        interface ReadableByteStreamController extends _ReadableByteStreamController {}
        var ReadableByteStreamController: typeof globalThis extends
            { onmessage: any; ReadableByteStreamController: infer T } ? T
            : typeof import("stream/web").ReadableByteStreamController;
        interface ReadableStream<R = any> extends _ReadableStream<R> {}
        var ReadableStream: typeof globalThis extends { onmessage: any; ReadableStream: infer T } ? T
            : typeof import("stream/web").ReadableStream;
        interface ReadableStreamBYOBReader extends _ReadableStreamBYOBReader {}
        var ReadableStreamBYOBReader: typeof globalThis extends { onmessage: any; ReadableStreamBYOBReader: infer T }
            ? T
            : typeof import("stream/web").ReadableStreamBYOBReader;
        interface ReadableStreamBYOBRequest extends _ReadableStreamBYOBRequest {}
        var ReadableStreamBYOBRequest: typeof globalThis extends { onmessage: any; ReadableStreamBYOBRequest: infer T }
            ? T
            : typeof import("stream/web").ReadableStreamBYOBRequest;
        interface ReadableStreamDefaultController<R = any> extends _ReadableStreamDefaultController<R> {}
        var ReadableStreamDefaultController: typeof globalThis extends
            { onmessage: any; ReadableStreamDefaultController: infer T } ? T
            : typeof import("stream/web").ReadableStreamDefaultController;
        interface ReadableStreamDefaultReader<R = any> extends _ReadableStreamDefaultReader<R> {}
        var ReadableStreamDefaultReader: typeof globalThis extends
            { onmessage: any; ReadableStreamDefaultReader: infer T } ? T
            : typeof import("stream/web").ReadableStreamDefaultReader;
        interface TextDecoderStream extends _TextDecoderStream {}
        var TextDecoderStream: typeof globalThis extends { onmessage: any; TextDecoderStream: infer T } ? T
            : typeof import("stream/web").TextDecoderStream;
        interface TextEncoderStream extends _TextEncoderStream {}
        var TextEncoderStream: typeof globalThis extends { onmessage: any; TextEncoderStream: infer T } ? T
            : typeof import("stream/web").TextEncoderStream;
        interface TransformStream<I = any, O = any> extends _TransformStream<I, O> {}
        var TransformStream: typeof globalThis extends { onmessage: any; TransformStream: infer T } ? T
            : typeof import("stream/web").TransformStream;
        interface TransformStreamDefaultController<O = any> extends _TransformStreamDefaultController<O> {}
        var TransformStreamDefaultController: typeof globalThis extends
            { onmessage: any; TransformStreamDefaultController: infer T } ? T
            : typeof import("stream/web").TransformStreamDefaultController;
        interface WritableStream<W = any> extends _WritableStream<W> {}
        var WritableStream: typeof globalThis extends { onmessage: any; WritableStream: infer T } ? T
            : typeof import("stream/web").WritableStream;
        interface WritableStreamDefaultController extends _WritableStreamDefaultController {}
        var WritableStreamDefaultController: typeof globalThis extends
            { onmessage: any; WritableStreamDefaultController: infer T } ? T
            : typeof import("stream/web").WritableStreamDefaultController;
        interface WritableStreamDefaultWriter<W = any> extends _WritableStreamDefaultWriter<W> {}
        var WritableStreamDefaultWriter: typeof globalThis extends
            { onmessage: any; WritableStreamDefaultWriter: infer T } ? T
            : typeof import("stream/web").WritableStreamDefaultWriter;
    }
    /** @deprecated Use an explicit callback type instead. */
    // TODO: this isn't an IDL type and was being used incorrectly; remove in a future major update
    interface ReadableByteStreamControllerCallback {
        (controller: ReadableByteStreamController): void | PromiseLike<void>;
    }
    /** @deprecated Use the appropriate callback type instead. */
    // TODO: this isn't an IDL type and was being used incorrectly; remove in a future major version
    interface ReadableStreamErrorCallback {
        (reason: any): void | PromiseLike<void>;
    }
}
declare module "node:stream/web" {
    export * from "stream/web";
}
