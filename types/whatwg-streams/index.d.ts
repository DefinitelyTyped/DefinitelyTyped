// Type definitions for Streams API
// Project: https://github.com/whatwg/streams
// Definitions by: Kagami Sascha Rosylight <https://github.com/saschanaz>
//                 Konstantin Simon Maria Möllers <https://github.com/ksm2>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export interface ReadableStreamSource<R = ArrayBufferView> {
    start?(controller: ReadableStreamDefaultController<R>): void | Promise<void>;
    pull?(controller: ReadableStreamDefaultController<R>): void | Promise<void>;
    cancel?(reason: string): void | Promise<void>;
}

export interface ReadableByteStreamSource<R = ArrayBufferView> {
    start?(controller: ReadableByteStreamController<R>): void | Promise<void>;
    pull?(controller: ReadableByteStreamController<R>): void | Promise<void>;
    cancel?(reason: string): void | Promise<void>;

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

    locked: boolean;

    cancel(reason: string): Promise<void>;
    getReader(): ReadableStreamDefaultReader<R>;
    getReader({ mode }: { mode: "byob" }): ReadableStreamBYOBReader<R>;
    pipeThrough<T extends ReadableStream<any>>({ writable, readable }: WritableReadablePair<WritableStream<R>, T>, options?: PipeOptions): T;
    pipeTo(dest: WritableStream, options?: PipeOptions): Promise<void>;
    tee(): [ReadableStream<R>, ReadableStream<R>];
}

declare class ReadableStreamDefaultReader<R = ArrayBufferView> {
    constructor(stream: ReadableStream<R>);

    closed: Promise<void>;

    cancel(reason: string): Promise<void>;
    read(): Promise<IteratorResult<R>>;
    releaseLock(): void;
}

declare class ReadableStreamBYOBReader<R = ArrayBufferView> {
    constructor(stream: ReadableStream);

    closed: Promise<void>;

    cancel(reason: string): Promise<void>;
    read(view: R): Promise<IteratorResult<R>>;
    releaseLock(): void;
}

declare class ReadableStreamDefaultController<R = ArrayBufferView> {
    constructor(stream: ReadableStream, underlyingSource: ReadableStreamSource<R>, size: number, highWaterMark: number);

    desiredSize: number;

    close(): void;
    enqueue(chunk: R): number;
    error(e: any): void;
}

declare class ReadableByteStreamController<R = ArrayBufferView> {
    constructor(stream: ReadableStream<R>, underlyingSource: ReadableStreamSource<R>, highWaterMark: number);

    byobRequest: ReadableStreamBYOBRequest<R>;
    desiredSize: number;

    close(): void;
    enqueue(chunk: R): number;
    error(e: any): void;
}

declare class ReadableStreamBYOBRequest<R = ArrayBufferView> {
    constructor(controller: ReadableByteStreamController<R>, view: R);

    view: R;

    respond(bytesWritten: number): void;
    respondWithNewView(view: R): void;
}

interface WritableStreamSink<W = ArrayBufferView> {
    start?(controller: WritableStreamDefaultController<W>): void | Promise<void>;
    write?(chunk: W, controller?: WritableStreamDefaultController<W>): any;
    close?(controller: WritableStreamDefaultController<W>): void | Promise<void>;
    abort?(reason: string): void | Promise<void>;
}

declare class WritableStream<W = ArrayBufferView> {
    constructor(underlyingSink?: WritableStreamSink<W>, strategy?: QueuingStrategy<W>);

    locked: boolean;

    abort(reason: string): Promise<void>;
    getWriter(): WritableStreamDefaultWriter<W>;
}

declare class WritableStreamDefaultWriter<W = ArrayBufferView> {
    constructor(stream: WritableStream<W>);

    closed: Promise<void>;
    desiredSize: number | null;
    ready: Promise<void>;

    abort(reason: string): Promise<void>;
    close(): Promise<void>;
    releaseLock(): void;
    write(chunk: W): Promise<void>;
}

declare class WritableStreamDefaultController<W = ArrayBufferView> {
    constructor(stream: WritableStream<W>, underlyingSink: WritableStreamSink<W>, size: number, highWaterMark: number);

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
  start?(controller: TransformStreamDefaultController<W>): void | Promise<void>;
  transform?(chunk: R, controller: TransformStreamDefaultController<W>): void | Promise<void>;
  flush?(controller: TransformStreamDefaultController<W>): void | Promise<void>;
}

declare class TransformStream<R, W> implements WritableReadablePair<WritableStream<W>, ReadableStream<R>> {
  constructor(transformer?: TransformStreamTransformer<R, W>, writableStrategy?: QueuingStrategy<W>, readableStrategy?: QueuingStrategy<R>);

  readonly readable: ReadableStream<R>;
  readonly writable: WritableStream<W>;
}

declare class TransformStreamDefaultController<W> {
  enqueue(chunk: W): void;
  error(reason: any): void;
  terminate(): void;

  readonly desiredSize: number;
}
