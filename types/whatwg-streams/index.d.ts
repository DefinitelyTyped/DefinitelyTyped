// Type definitions for Streams API
// Project: https://github.com/whatwg/streams
// Definitions by: Kagami Sascha Rosylight <https://github.com/saschanaz>
//                 Konstantin Simon Maria Möllers <https://github.com/ksm2>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export interface ReadableStreamSource<R = ArrayBufferView> {
    start?(controller: ReadableStreamDefaultController<R>): void | Promise<void>;
    pull?(controller: ReadableStreamDefaultController<R>): void | Promise<void>;
    cancel?(reason: any): void | Promise<void>;
}

export interface ReadableByteStreamSource<R = ArrayBufferView> {
    start?(controller: ReadableByteStreamController<R>): void | Promise<void>;
    pull?(controller: ReadableByteStreamController<R>): void | Promise<void>;
    cancel?(reason: any): void | Promise<void>;

    type: "bytes";
    autoAllocateChunkSize?: number;
}

export interface QueuingStrategy<T = ArrayBufferView> {
    size?(chunk: T): number;
    highWaterMark?: number;
}

export interface PipeOptions {
    preventClose?: boolean;
    preventAbort?: boolean;
    preventCancel?: boolean;
}

export interface WritableReadablePair<T extends WritableStream<any>, U extends ReadableStream<any>> {
    writable: T;
    readable: U;
}

declare class ReadableStream<R = ArrayBufferView> {
    constructor(underlyingSource?: ReadableStreamSource<R>, strategy?: QueuingStrategy<R>);
    constructor(underlyingSource?: ReadableByteStreamSource<R>, strategy?: QueuingStrategy<R>);

    readonly locked: boolean;

    cancel(reason: any): Promise<void>;
    getReader(): ReadableStreamDefaultReader<R>;
    getReader({ mode }: { mode: "byob" }): ReadableStreamBYOBReader<R>;
    pipeThrough<T extends ReadableStream<any>>({ writable, readable }: WritableReadablePair<WritableStream<R>, T>, options?: PipeOptions): T;
    pipeTo(dest: WritableStream<R>, options?: PipeOptions): Promise<void>;
    tee(): [ReadableStream<R>, ReadableStream<R>];
}

declare class ReadableStreamDefaultReader<R = ArrayBufferView> {
    constructor(stream: ReadableStream<R>);

    readonly closed: Promise<void>;

    cancel(reason: any): Promise<void>;
    read(): Promise<IteratorResult<R>>;
    releaseLock(): void;
}

declare class ReadableStreamBYOBReader<R = ArrayBufferView> {
    constructor(stream: ReadableStream<R>);

    readonly closed: Promise<void>;

    cancel(reason: any): Promise<void>;
    read<T extends ArrayBufferView>(view: T): Promise<IteratorResult<T>>;
    releaseLock(): void;
}

declare class ReadableStreamDefaultController<R = ArrayBufferView> {
    readonly desiredSize: number;

    close(): void;
    enqueue(chunk: R): void;
    error(e: any): void;
}

declare class ReadableByteStreamController<R = ArrayBufferView> {
    readonly byobRequest: ReadableStreamBYOBRequest<R>;
    readonly desiredSize: number;

    close(): void;
    enqueue(chunk: R): void;
    error(e: any): void;
}

declare class ReadableStreamBYOBRequest<R = ArrayBufferView> {
    readonly view: R;

    respond(bytesWritten: number): void;
    respondWithNewView(view: R): void;
}

interface WritableStreamSink<W = ArrayBufferView> {
    start?(controller: WritableStreamDefaultController<W>): void | Promise<void>;
    write?(chunk: W, controller?: WritableStreamDefaultController<W>): any;
    close?(controller: WritableStreamDefaultController<W>): void | Promise<void>;
    abort?(reason: any): void | Promise<void>;
}

declare class WritableStream<W = ArrayBufferView> {
    constructor(underlyingSink?: WritableStreamSink<W>, strategy?: QueuingStrategy<W>);

    readonly locked: boolean;

    abort(reason: any): Promise<void>;
    getWriter(): WritableStreamDefaultWriter<W>;
}

declare class WritableStreamDefaultWriter<W = ArrayBufferView> {
    constructor(stream: WritableStream<W>);

    readonly closed: Promise<void>;
    readonly desiredSize: number | null;
    readonly ready: Promise<void>;

    abort(reason: any): Promise<void>;
    close(): Promise<void>;
    releaseLock(): void;
    write(chunk: W): Promise<void>;
}

declare class WritableStreamDefaultController<W = ArrayBufferView> {
    error(e: any): void;
}

declare class ByteLengthQueuingStrategy<T = ArrayBufferView> {
    constructor({ highWaterMark }: { highWaterMark: number });

    size(chunk: T): number | undefined;
}

declare class CountQueuingStrategy {
    constructor({ highWaterMark }: { highWaterMark: number });

    size(): 1;
}

declare interface TransformStreamTransformer<R, W> {
    start?(controller: TransformStreamDefaultController<R>): void | Promise<void>;
    transform?(chunk: W, controller: TransformStreamDefaultController<R>): void | Promise<void>;
    flush?(controller: TransformStreamDefaultController<R>): void | Promise<void>;
}

declare class TransformStream<R, W> implements WritableReadablePair<WritableStream<W>, ReadableStream<R>> {
    constructor(transformer?: TransformStreamTransformer<R, W>, writableStrategy?: QueuingStrategy<W>, readableStrategy?: QueuingStrategy<R>);

    readonly readable: ReadableStream<R>;
    readonly writable: WritableStream<W>;
}

declare class TransformStreamDefaultController<R> {
    enqueue(chunk: R): void;
    error(reason: any): void;
    terminate(): void;

    readonly desiredSize: number;
}
