declare module "node:stream/iter" {
    import { Abortable } from "node:events";
    import { Readable, Writable } from "node:stream";
    // Symbols and custom typedefs
    const broadcastProtocol: unique symbol;
    const drainableProtocol: unique symbol;
    const shareProtocol: unique symbol;
    const shareSyncProtocol: unique symbol;
    const toAsyncStreamable: unique symbol;
    const toStreamable: unique symbol;
    type Source =
        | string
        | ArrayBufferLike
        | ArrayBufferView
        | Iterable<SyncSource>
        | AsyncIterable<Source>
        | Streamable
        | AsyncStreamable;
    type SyncSource = string | ArrayBufferLike | ArrayBufferView | Iterable<SyncSource> | Streamable;
    type Transform = StatelessTransformFn | StatefulTransform;
    type SyncTransform = SyncStatelessTransformFn | SyncStatefulTransform;
    type TransformResult =
        | string
        | ArrayBufferLike
        | ArrayBufferView
        | Iterable<SyncTransformResult>
        | AsyncIterable<TransformResult>;
    type SyncTransformResult = string | ArrayBufferLike | ArrayBufferView | Iterable<SyncTransformResult>;
    interface AsyncStreamable {
        [toAsyncStreamable](): Source;
    }
    interface Broadcastable {
        [broadcastProtocol](options: BroadcastOptions): Broadcast;
    }
    interface Drainable {
        [drainableProtocol](): Promise<boolean> | null;
    }
    interface Shareable {
        [shareProtocol](options: ShareOptions): Share;
    }
    interface Streamable {
        [toStreamable](): SyncSource;
    }
    interface SyncShareable {
        [shareSyncProtocol](options: ShareSyncOptions): SyncShare;
    }
    // IDL dictionaries, enums, typedefs
    type BackpressurePolicy = "strict" | "block" | "drop-oldest" | "drop-newest";
    type ByteReadableStream = AsyncIterable<Uint8Array[]>;
    type SyncByteReadableStream = Iterable<Uint8Array[]>;
    interface WriteOptions {
        signal?: AbortSignal;
    }
    interface PushStreamOptions {
        highWaterMark?: number;
        backpressure?: BackpressurePolicy;
        signal?: AbortSignal;
    }
    interface PullOptions {
        signal?: AbortSignal;
    }
    interface PipeToOptions {
        signal?: AbortSignal;
        preventClose?: boolean;
        preventFail?: boolean;
    }
    interface PipeToSyncOptions {
        preventClose?: boolean;
        preventFail?: boolean;
    }
    interface ConsumeOptions {
        signal?: AbortSignal;
        limit?: number;
    }
    interface ConsumeSyncOptions {
        limit?: number;
    }
    interface TextConsumeOptions extends ConsumeOptions {
        encoding?: string;
    }
    interface TextConsumeSyncOptions extends ConsumeSyncOptions {
        encoding?: string;
    }
    interface MergeOptions {
        signal?: AbortSignal;
    }
    interface BroadcastOptions {
        highWaterMark?: number;
        backpressure?: BackpressurePolicy;
        signal?: AbortSignal;
    }
    interface ShareOptions {
        highWaterMark?: number;
        backpressure?: BackpressurePolicy;
        signal?: AbortSignal;
    }
    interface ShareSyncOptions {
        highWaterMark?: number;
        backpressure?: BackpressurePolicy;
    }
    interface DuplexDirectionOptions {
        highWaterMark?: number;
        backpressure?: BackpressurePolicy;
    }
    interface DuplexOptions {
        highWaterMark?: number;
        backpressure?: BackpressurePolicy;
        a?: DuplexDirectionOptions;
        b?: DuplexDirectionOptions;
        signal?: AbortSignal;
    }
    interface TransformCallbackOptions {
        signal: AbortSignal;
    }
    interface StatelessTransformFn {
        (
            chunks: Uint8Array[] | null,
            options: TransformCallbackOptions,
        ): Promise<TransformResult | null> | TransformResult | null;
    }
    interface SyncStatelessTransformFn {
        (chunks: Uint8Array[] | null): SyncTransformResult | null;
    }
    interface StatefulTransform {
        transform(
            source: AsyncIterable<Uint8Array[] | null>,
            options: TransformCallbackOptions,
        ): AsyncIterable<TransformResult>;
    }
    interface SyncStatefulTransform {
        transform(source: Iterable<Uint8Array[] | null>): Iterable<SyncTransformResult>;
    }
    // IDL interfaces
    interface PushWriter extends Writer, Drainable {}
    interface PushStreamResult {
        writer: PushWriter;
        readable: ByteReadableStream;
    }
    interface BroadcastWriter extends Writer, Drainable {}
    interface BroadcastResult {
        writer: BroadcastWriter;
        broadcast: Broadcast;
    }
    interface Writer extends Disposable, AsyncDisposable {
        readonly desiredSize: number | null;
        write(chunk: Uint8Array | string, options?: WriteOptions): Promise<void>;
        writev(chunks: Array<Uint8Array | string>, options?: WriteOptions): Promise<void>;
        writeSync(chunk: Uint8Array | string): boolean;
        writevSync(chunks: Array<Uint8Array | string>): boolean;
        end(options?: WriteOptions): Promise<number>;
        endSync(): number;
        fail(reason?: any): void;
    }
    interface PartialWriter extends Partial<Writer> {
        write(chunk: Uint8Array | string, options?: WriteOptions): Promise<void>;
    }
    interface SyncWriter extends Disposable {
        readonly desiredSize: number | null;
        writeSync(chunk: Uint8Array | string): number;
        writevSync(chunks: Array<Uint8Array | string>): number;
        endSync(): number;
        fail(reason?: any): void;
    }
    interface PartialSyncWriter extends Partial<SyncWriter> {
        writeSync(chunk: Uint8Array | string): number;
    }
    interface Broadcast extends Disposable {
        readonly consumerCount: number;
        readonly bufferSize: number;
        push(...args: any[]): ByteReadableStream;
        cancel(reason?: any): void;
    }
    interface Share extends Disposable {
        readonly consumerCount: number;
        readonly bufferSize: number;
        pull(...args: any[]): ByteReadableStream;
        cancel(reason?: any): void;
    }
    interface SyncShare extends Disposable {
        readonly consumerCount: number;
        readonly bufferSize: number;
        pull(...args: any): SyncByteReadableStream;
        cancel(reason?: any): void;
    }
    interface DuplexChannel extends AsyncDisposable {
        readonly writer: Writer;
        readonly readable: ByteReadableStream;
        close(): Promise<void>;
    }
    // Push stream creation
    function push(...transforms: Transform[]): PushStreamResult;
    function push(...args: [...transforms: Transform[], options: PushStreamOptions]): PushStreamResult;
    // Stream factories
    function from(input: Source): ByteReadableStream;
    function fromSync(input: SyncSource): SyncByteReadableStream;
    // Pull pipelines
    function pull(source: Source, ...transforms: Transform[]): ByteReadableStream;
    function pull(
        source: Source,
        ...args: [...transforms: Transform[], options: PullOptions]
    ): ByteReadableStream;
    function pullSync(source: SyncSource, ...transforms: SyncTransform[]): SyncByteReadableStream;
    // Pipe operations
    function pipeTo(source: Source, writer: PartialWriter, options?: PipeToOptions): Promise<number>;
    function pipeTo(source: Source, ...args: [...transforms: Transform[], writer: PartialWriter]): Promise<number>;
    function pipeTo(
        source: Source,
        ...args: [...transforms: Transform[], writer: PartialWriter, options: PipeToOptions]
    ): Promise<number>;
    function pipeToSync(source: SyncSource, writer: PartialSyncWriter, options?: PipeToSyncOptions): number;
    function pipeToSync(
        source: SyncSource,
        ...args: [...transforms: SyncTransform[], writer: PartialSyncWriter]
    ): number;
    function pipeToSync(
        source: SyncSource,
        ...args: [...transforms: SyncTransform[], writer: PartialSyncWriter, options: PipeToSyncOptions]
    ): number;
    // Consumers
    function bytes(source: Source, options?: ConsumeOptions): Promise<Uint8Array>;
    function bytesSync(source: SyncSource, options?: ConsumeSyncOptions): Uint8Array;
    function text(source: Source, options?: TextConsumeOptions): Promise<string>;
    function textSync(source: SyncSource, options?: TextConsumeSyncOptions): string;
    function arrayBuffer(source: Source, options?: ConsumeOptions): Promise<ArrayBuffer>;
    function arrayBufferSync(source: SyncSource, options?: ConsumeSyncOptions): ArrayBuffer;
    function array(source: Source, options?: ConsumeOptions): Promise<Uint8Array[]>;
    function arraySync(source: SyncSource, options?: ConsumeSyncOptions): Uint8Array[];
    // Utilities
    function tap(callback: StatelessTransformFn): StatelessTransformFn;
    function tapSync(callback: SyncStatelessTransformFn): SyncStatelessTransformFn;
    function merge(...sources: Source[]): ByteReadableStream;
    function merge(...args: [...sources: Source[], options: MergeOptions]): ByteReadableStream;
    function ondrain(drainable: any): Promise<boolean> | null;
    // Multi-consumer
    function broadcast(options?: BroadcastOptions): BroadcastResult;
    function share(source: Source, options?: ShareOptions): Share;
    function shareSync(source: SyncSource, options?: ShareSyncOptions): SyncShare;
    // Duplex
    function duplex(options?: DuplexOptions): [DuplexChannel, DuplexChannel];
    // Node.js-specific extensions
    namespace Broadcast {
        /**
         * Create a `Broadcast` from an existing source. The source is consumed
         * automatically and pushed to all subscribers.
         * @since v25.9.0
         * @param options Same as `broadcast()`.
         */
        function from(
            input: ByteReadableStream | SyncByteReadableStream | Broadcastable,
            options?: BroadcastOptions,
        ): BroadcastResult;
    }
    namespace Share {
        /**
         * Create a `Share` from an existing source.
         * @since v25.9.0
         * @param options Same as `share()`.
         */
        function from(input: ByteReadableStream | SyncByteReadableStream | Shareable, options?: ShareOptions): Share;
    }
    namespace SyncShare {
        /**
         * @since v25.9.0
         */
        function from(input: SyncByteReadableStream | SyncShareable, options?: ShareSyncOptions): SyncShare;
    }
    /**
     * Converts a classic Readable stream (or duck-typed equivalent) into a
     * stream/iter async iterable source that can be passed to `from()`,
     * `pull()`, `text()`, etc.
     *
     * If the object implements the `toAsyncStreamable` protocol (as
     * `stream.Readable` does), that protocol is used. Otherwise, the function
     * duck-types on `read()` and `on()` (EventEmitter) and wraps the stream with
     * a batched async iterator.
     *
     * The result is cached per instance -- calling `fromReadable()` twice with the
     * same stream returns the same iterable.
     *
     * For object-mode or encoded Readable streams, chunks are automatically
     * normalized to `Uint8Array`.
     *
     * ```js
     * import { Readable } from 'node:stream';
     * import { fromReadable, text } from 'node:stream/iter';
     *
     * const readable = new Readable({
     *   read() { this.push('hello world'); this.push(null); },
     * });
     *
     * const result = await text(fromReadable(readable));
     * console.log(result); // 'hello world'
     * ```
     * @since v26.1.0
     * @experimental
     * @param readable A classic Readable stream or any object
     * with `read()` and `on()` methods.
     * @returns A stream/iter async iterable source.
     */
    function fromReadable(readable: NodeJS.ReadableStream): ByteReadableStream;
    interface FromWritableOptions {
        backpressure?: BackpressurePolicy | undefined;
    }
    /**
     * Creates a stream/iter Writer adapter from a classic Writable stream (or
     * duck-typed equivalent). The adapter can be passed to `pipeTo()` as a
     * destination.
     *
     * Since all writes on a classic Writable are fundamentally asynchronous,
     * the synchronous Writer methods (`writeSync`, `writevSync`, `endSync`) always
     * return `false` or `-1`, deferring to the async path. The per-write
     * `options.signal` parameter from the Writer interface is also ignored.
     *
     * The result is cached per instance -- calling `fromWritable()` twice with the
     * same stream returns the same Writer.
     *
     * For duck-typed streams that do not expose `writableHighWaterMark`,
     * `writableLength`, or similar properties, sensible defaults are used.
     * Object-mode writables (if detectable) are rejected since the Writer
     * interface is bytes-only.
     *
     * ```js
     * import { Writable } from 'node:stream';
     * import { from, fromWritable, pipeTo } from 'node:stream/iter';
     *
     * const writable = new Writable({
     *   write(chunk, encoding, cb) { console.log(chunk.toString()); cb(); },
     * });
     *
     * await pipeTo(from('hello world'),
     *              fromWritable(writable, { backpressure: 'block' }));
     * ```
     * @since v26.1.0
     * @experimental
     * @param writable A classic Writable stream or any object
     * with `write()` and `on()` methods.
     * @returns A stream/iter Writer adapter.
     */
    function fromWritable(writable: NodeJS.WritableStream, options?: FromWritableOptions): Writer;
    interface ToReadableOptions extends Abortable {
        highWaterMark?: number | undefined;
    }
    /**
     * Creates a byte-mode `stream.Readable` from an `AsyncIterable<Uint8Array[]>`
     * (the native batch format used by the stream/iter API). Each `Uint8Array` in a
     * yielded batch is pushed as a separate chunk into the Readable.
     *
     * ```js
     * import { createWriteStream } from 'node:fs';
     * import { from, pull, toReadable } from 'node:stream/iter';
     * import { compressGzip } from 'node:zlib/iter';
     *
     * const source = pull(from('hello world'), compressGzip());
     * const readable = toReadable(source);
     *
     * readable.pipe(createWriteStream('output.gz'));
     * ```
     * @since v26.1.0
     * @experimental
     * @param source An `AsyncIterable<Uint8Array[]>` source, such as
     * the return value of `pull()` or `from()`.
     */
    function toReadable(source: Source, options?: ToReadableOptions): Readable;
    interface ToReadableSyncOptions {
        highWaterMark?: number | undefined;
    }
    /**
     * Creates a byte-mode `stream.Readable` from a synchronous
     * `Iterable<Uint8Array[]>`. The `_read()` method pulls from the iterator
     * synchronously, so data is available immediately via `readable.read()`.
     *
     * ```js
     * import { fromSync, toReadableSync } from 'node:stream/iter';
     *
     * const source = fromSync('hello world');
     * const readable = toReadableSync(source);
     *
     * console.log(readable.read().toString()); // 'hello world'
     * ```
     * @since v26.1.0
     * @experimental
     * @param source An `Iterable<Uint8Array[]>` source, such as the
     * return value of `pullSync()` or `fromSync()`.
     */
    function toReadableSync(source: SyncSource, options?: ToReadableSyncOptions): Readable;
    /**
     * Creates a classic `stream.Writable` backed by a stream/iter Writer.
     *
     * Each `_write()` / `_writev()` call attempts the Writer's synchronous method
     * first (`writeSync` / `writevSync`), falling back to the async method if the
     * sync path returns `false` or throws. Similarly, `_final()` tries `endSync()`
     * before `end()`. When the sync path succeeds, the callback is deferred via
     * `queueMicrotask` to preserve the async resolution contract.
     *
     * The Writable's `highWaterMark` is set to `Number.MAX_SAFE_INTEGER` to
     * effectively disable its internal buffering, allowing the underlying Writer
     * to manage backpressure directly.
     *
     * ```js
     * import { push, toWritable } from 'node:stream/iter';
     *
     * const { writer, readable } = push();
     * const writable = toWritable(writer);
     *
     * writable.write('hello');
     * writable.end();
     * ```
     * @since v26.1.0
     * @experimental
     * @param writer A stream/iter Writer. Only the `write()` method is
     * required; `end()`, `fail()`, `writeSync()`, `writevSync()`, `endSync()`,
     * and `writev()` are optional.
     */
    function toWritable(writer: PartialWriter): Writable;
    namespace Stream {
        export {
            array,
            arrayBuffer,
            arrayBufferSync,
            arraySync,
            broadcast,
            broadcastProtocol,
            bytes,
            bytesSync,
            drainableProtocol,
            duplex,
            from,
            fromSync,
            merge,
            ondrain,
            pipeTo,
            pipeToSync,
            pull,
            pullSync,
            push,
            share,
            shareProtocol,
            shareSync,
            shareSyncProtocol,
            tap,
            tapSync,
            text,
            textSync,
            toAsyncStreamable,
            toStreamable,
        };
    }
}
declare module "stream/iter" {
    export * from "node:stream/iter";
}
