declare module "node:stream/iter" {
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
        (chunks: Uint8Array[] | null, options: TransformCallbackOptions): TransformResult | null;
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
