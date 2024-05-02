declare module "stream/web" {
    interface ReadableWritablePair<R = any, W = any> {
        /**
         * The ReadableStream to which transform.writable will push the potentially modified data it receives from this ReadableStream.
         */
        readable: ReadableStream<R>;
        /**
         * The WritableStream to which this ReadableStream's data will be written.
         */
        writable: WritableStream<W>;
    }
    interface StreamPipeOptions {
        /**
         * When `true`, errors in this `ReadableStream` will not cause `transform.writable` to be aborted.
         */
        preventAbort?: boolean;
        /**
         * When `true`, errors in the destination `transform.writable` do not cause this `ReadableStream` to be canceled.
         */
        preventCancel?: boolean;
        /**
         * When `true`, closing this `ReadableStream` does not cause `transform.writable` to be closed.
         */
        preventClose?: boolean;
        /**
         * Allows the transfer of data to be canceled using an {@link AbortController}.
         */
        signal?: AbortSignal;
    }
    interface ReadableStreamGenericReader {
        readonly closed: Promise<undefined>;
        cancel(reason?: any): Promise<void>;
    }
    interface ReadableStreamDefaultReadValueResult<T> {
        done: boolean;
        value: ArrayBuffer;
    }
    interface ReadableStreamDefaultReadDoneResult {
        done: true;
        value?: undefined;
    }
    type ReadableStreamController<T> = ReadableStreamDefaultController<T>;
    type ReadableStreamDefaultReadResult<T> =
        | ReadableStreamDefaultReadValueResult<T>
        | ReadableStreamDefaultReadDoneResult;
    interface ReadableStreamReadValueResult<T> {
        done: false;
        value: T;
    }
    interface ReadableStreamReadDoneResult<T> {
        done: true;
        value?: T;
    }
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
        type: "bytes";
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
    interface ReadableStream<R = any> {
        /**
         * The `readableStream.locked` property is `false` by default, and is switched to `true`
         * while there is an active reader consuming the stream's data.
         * @since v16.5.0
         */
        readonly locked: boolean;
        /**
         * @since v16.5.0
         * @returns A promise fulfilled with `undefined` once cancelation has been completed.
         */
        cancel(reason?: any): Promise<void>;
        /**
         * ```js
         * import { ReadableStream } from 'node:stream/web';
         *
         * const stream = new ReadableStream();
         *
         * const reader = stream.getReader();
         *
         * console.log(await reader.read());
         * ```
         *
         * Causes the `readableStream.locked` to be `true`.
         * @since v16.5.0
         */
        getReader(): ReadableStreamDefaultReader<R>;
        getReader(options: { mode: "byob" }): ReadableStreamBYOBReader;
        /**
         * Connects this {@link ReadableStream} to the pair of <ReadableStream> and <WritableStream> provided in the transform argument such that the data from this <ReadableStream> is written in to transform.writable, possibly transformed, then pushed to transform.readable. Once the pipeline is configured, transform.readable is returned.
         *
         * Causes the readableStream.locked to be true while the pipe operation is active.
         */
        pipeThrough<T>(transform: ReadableWritablePair<T, R>, options?: StreamPipeOptions): ReadableStream<T>;
        /**
         * Causes the `readableStream.locked` to be `true` while the pipe operation is active.
         * @since v16.5.0
         * @param A {@link WritableStream} to which this `ReadableStream`'s data will be written.
         * @returns A promise fulfilled with `undefined`
         */
        pipeTo(destination: WritableStream<R>, options?: StreamPipeOptions): Promise<void>;
        /**
         * Returns a pair of new {@link ReadableStream} instances to which this `ReadableStream`'s data will be forwarded. Each will receive the same data.
         *
         * Causes the `readableStream.locked` to be `true`.
         * @since v16.5.0
         */
        tee(): [ReadableStream<R>, ReadableStream<R>];
        /**
         * Creates and returns an async iterator usable for consuming this `ReadableStream`'s data.
         *
         * Causes the `readableStream.locked` to be `true` while the async iterator is active.
         * 
         * ```js
         * import { Buffer } from 'node:buffer';
         *
         * const stream = new ReadableStream(getSomeSource());
         *
         * for await (const chunk of stream.values({ preventCancel: true }))
         *   console.log(Buffer.from(chunk).toString());
         * ```
         * @since v16.5.0
         */
        values(options?: { preventCancel?: boolean }): AsyncIterableIterator<R>;
      }
    const ReadableStream: {
        prototype: ReadableStream;
        /**
         * A utility method that creates a new {@link ReadableStream} from an iterable.
         *
         * import { ReadableStream } from 'node:stream/web';
         *
         * async function* asyncIterableGenerator() {
         *   yield 'a';
         *   yield 'b';
         *   yield 'c';
         * }
         *
         * const stream = ReadableStream.from(asyncIterableGenerator());
         *
         * for await (const chunk of stream)
         *   console.log(chunk); // Prints: 'a', 'b', 'c'
         * ```
         * @since v20.6.0
         * @param iterable Object implementing the `Symbol.asyncIterator` or `Symbol.iterator` iterable protocol.
         */
        from<T>(iterable: Iterable<T> | AsyncIterable<T>): ReadableStream<T>;
        new(underlyingSource: UnderlyingByteSource, strategy?: QueuingStrategy<Uint8Array>): ReadableStream<Uint8Array>;
        new<R = any>(underlyingSource?: UnderlyingSource<R>, strategy?: QueuingStrategy<R>): ReadableStream<R>;
    };
    /**
     * Creates a new <ReadableStreamDefaultReader> that is locked to the given <ReadableStream>.
     */
    interface ReadableStreamDefaultReader<R = any> extends ReadableStreamGenericReader {
        /**
         * Cancels the {@link ReadableStream} and returns a promise that is fulfilled when the underlying stream has been canceled.
         * @returns A promise fulfilled with `undefined`.
         * @since v16.5.0
         */
        cancel(reason?: any): Promise<undefined>;
        /**
         * Fulfilled with `undefined` when the associated {@link ReadableStream} is closed or rejected if the stream errors or the reader's 
         * lock is released before the stream finishes closing.
         * @since v16.5.0
         */
        readonly closed: Promise<any>;
        /**
         * Requests the next chunk of data from the underlying <ReadableStream> and returns a promise that is fulfilled with the data once it is available.
         * @since v16.5.0
         */
        read(): Promise<ReadableStreamDefaultReadResult<R>>;
        /**
         * Releases this reader's lock on the underlying {@link ReadableStream}.
         * @since v16.5.0 
         */
        releaseLock(): void;
    }
    interface ReadableStreamBYOBReader extends ReadableStreamGenericReader {
        read<T extends ArrayBufferView>(view: T): Promise<ReadableStreamReadResult<T>>;
        releaseLock(): void;
    }
    const ReadableStreamDefaultReader: {
        prototype: ReadableStreamDefaultReader;
        new<R = any>(stream: ReadableStream<R>): ReadableStreamDefaultReader<R>;
    };
    const ReadableStreamBYOBReader: any;
    const ReadableStreamBYOBRequest: any;
    interface ReadableByteStreamController {
        readonly byobRequest: undefined;
        readonly desiredSize: number | null;
        close(): void;
        enqueue(chunk: ArrayBufferView): void;
        error(error?: any): void;
    }
    const ReadableByteStreamController: {
        prototype: ReadableByteStreamController;
        new(): ReadableByteStreamController;
    };
    interface ReadableStreamDefaultController<R = any> {
        readonly desiredSize: number | null;
        close(): void;
        enqueue(chunk?: R): void;
        error(e?: any): void;
    }
    const ReadableStreamDefaultController: {
        prototype: ReadableStreamDefaultController;
        new(): ReadableStreamDefaultController;
    };
    interface Transformer<I = any, O = any> {
        flush?: TransformerFlushCallback<O>;
        readableType?: undefined;
        start?: TransformerStartCallback<O>;
        transform?: TransformerTransformCallback<I, O>;
        writableType?: undefined;
    }
    interface TransformStream<I = any, O = any> {
        readonly readable: ReadableStream<O>;
        readonly writable: WritableStream<I>;
    }
    const TransformStream: {
        prototype: TransformStream;
        new<I = any, O = any>(
            transformer?: Transformer<I, O>,
            writableStrategy?: QueuingStrategy<I>,
            readableStrategy?: QueuingStrategy<O>,
        ): TransformStream<I, O>;
    };
    interface TransformStreamDefaultController<O = any> {
        /**
         * The amount of data required to fill the readable side's queue.
         * @since v16.5.0
         */
        readonly desiredSize: number | null;
        /**
         * Appends a chunk of data to the readable side's queue.
         * @since v16.5.0
         */
        enqueue(chunk?: O): void;
        /**
         * Signals to both the readable and writable side that an error has occurred while
         * processing the transform data, causing both sides to be abruptly closed.
         * @since v16.5.0
         */
        error(reason?: any): void;
        /**
         * Closes the readable side of the transport and causes the writable side to be
         * abruptly closed with an error.
         * @since v16.5.0
         */ 
        terminate(): void;
    }
    /**
     * The `TransformStreamDefaultController` manages the internal state of the `TransformStream`.
     * @since v16.5.0
     */
    const TransformStreamDefaultController: {
        prototype: TransformStreamDefaultController;
        new(): TransformStreamDefaultController;
    };
    /**
     * This Streams API interface provides a standard abstraction for writing
     * streaming data to a destination, known as a sink. This object comes with
     * built-in back pressure and queuing.
     */
    interface WritableStream<W = any> {
        /**
         * The `writableStream.locked` property is `false` by default, and is switched
         * to `true` while there is an active writer attached to this `WritableStream`.
         * @since v16.5.0
         */
        readonly locked: boolean;
        /**
         * Abruptly terminates the `WritableStream`. All queued writes will be canceled
         * with their associated promises rejected.
         * @since v16.5.0
         * @returns A promise fulfilled with `undefined`.
         */
        abort(reason?: any): Promise<undefined>;
        /**
         * Closes the `WritableStream` when no additional writes are expected.
         * @since v16.5.0
         * @returns A promise fulfilled with `undefined`.
         */
        close(): Promise<undefined>;
        /**
         * Creates and returns a new writer instance that can be used to write data into
         * the `WritableStream`.
         * @since v16.5.0
         */
        getWriter(): WritableStreamDefaultWriter<W>;
    }
    /**
     * @since v16.5.0
     */
    const WritableStream: {
        prototype: WritableStream;
        new<W = any>(underlyingSink?: UnderlyingSink<W>, strategy?: QueuingStrategy<W>): WritableStream<W>;
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
        /**
         * Creates a new WritableStreamDefaultWriter that is locked to the given WritableStream.
         */
        new<W = any>(stream: WritableStream<W>): WritableStreamDefaultWriter<W>;
    };
    interface WritableStreamDefaultController {
        /**
         * Called by user-code to signal that an error has occurred while processing the `WritableStream` data.
         * When called, the {@link WritableStream} will be aborted, with currently pending writes canceled.
         * @since v16.5.0
         */
        error(error?: any): void;
        /**
         * An `AbortSignal` that can be used to cancel pending write or close operations when a {@link WritableStream} is aborted.
         */
        readonly signal: AbortSignal;
    }
    /**
     * The `WritableStreamDefaultController` manages the {@link WritableStream}'s internal state.
     * @since v16.5.0
     */
    const WritableStreamDefaultController: {
        prototype: WritableStreamDefaultController;
        new(): WritableStreamDefaultController;
    };
    interface QueuingStrategy<T = any> {
        highWaterMark?: number;
        size?: QueuingStrategySize<T>;
    }
    interface QueuingStrategySize<T = any> {
        (chunk?: T): number;
    }
    interface QueuingStrategyInit {
        highWaterMark: number;
    }
    interface ByteLengthQueuingStrategy extends QueuingStrategy<ArrayBufferView> {
        /**
         * @since v16.5.0
         */
        readonly highWaterMark: number;
        /**
         * @since v16.5.0
         */
        readonly size: QueuingStrategySize<ArrayBufferView>;
    }
    /**
     * @since v16.5.0
     */
    const ByteLengthQueuingStrategy: {
        prototype: ByteLengthQueuingStrategy;
        new(init: QueuingStrategyInit): ByteLengthQueuingStrategy;
    };
    interface CountQueuingStrategy extends QueuingStrategy {
        /**
         * @since v16.5.0
         */
        readonly highWaterMark: number;
        /**
         * @since v16.5.0
         */
        readonly size: QueuingStrategySize;
    }
    /**
     * @since v16.5.0
     */
    const CountQueuingStrategy: {
        prototype: CountQueuingStrategy;
        new(init: QueuingStrategyInit): CountQueuingStrategy;
    };
    interface TextEncoderStream {
        /**
         * The encoding supported by the `TextEncoderStream` instance.
         * @since v16.6.0
         */
        readonly encoding: string;
        /**
         * @since v16.6.0
         */
        readonly readable: ReadableStream;
        /**
         * @since v16.6.0
         */
        readonly writable: WritableStream;
    }
    /**
     * @since v16.6.0
     */
    const TextEncoderStream: {
        prototype: TextEncoderStream;
        new(): TextEncoderStream;
    };
    interface TextDecoderOptions {
        /**
         * `true` if decoding failures are fatal.
         */
        fatal?: boolean;
        /**
         * When `true`, the `TextDecoderStream` will include the byte order mark in the decoded result.
         * When `false`, the byte order mark will be removed from the output. This option is only used 
         * when encoding is `'utf-8'`, `'utf-16be'`, or `'utf-16le'`.
         * @default false
         */
        ignoreBOM?: boolean;
    }
    type BufferSource = ArrayBufferView | ArrayBuffer;
    interface TextDecoderStream {
        /**
         * The encoding supported by the `TextDecoderStream` instance.
         * @since v16.6.0
         */
        readonly encoding: string;
        /**
         * The value will be `true` if decoding errors result in a `TypeError` being thrown.
         * @since v16.6.0
         */
        readonly fatal: boolean;
        /**
         * The value will be `true` if the decoding result will include the byte order mark.
         * @since v16.6.0
         */
        readonly ignoreBOM: boolean;
        /**
         * @since v16.6.0
         */
        readonly readable: ReadableStream;
        /**
         * @since v16.6.0
         */
        readonly writable: WritableStream;
    }
    /**
     * @since v16.6.0
     */
    const TextDecoderStream: {
        prototype: TextDecoderStream;
        new(encoding?: string, options?: TextDecoderOptions): TextDecoderStream;
    };
    type Format = "deflate" | "deflate-raw" | "gzip";
    interface CompressionStream<R = any, W = any> {
        /**
         * @since v17.0.0
         */
        readonly readable: ReadableStream<R>;
        /**
         * @since v17.0.0
         */
        readonly writable: WritableStream<W>;
    }
    /**
     * @since v17.0.0
     */      
    const CompressionStream: {
        prototype: CompressionStream;
        new<R = any, W = any>(format: Format): CompressionStream<R, W>;
    };
    interface DecompressionStream<R = any, W = any> {
        /**
         * @since v17.0.0
         */
        readonly readable: ReadableStream<R>;
        /**
         * @since v17.0.0
         */
        readonly writable: WritableStream<W>;
    }
    /**
     * @since v17.0.0
     */      
    const DecompressionStream: {
        prototype: DecompressionStream;
        new<R = any, W = any>(format: Format): DecompressionStream<R, W>;
    };
}
declare module "node:stream/web" {
    export * from "stream/web";
}
