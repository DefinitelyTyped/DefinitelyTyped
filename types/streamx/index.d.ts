/// <reference types="node" />

import { EventEmitter } from "events";
import { Readable as NodeJSReadable, Stream as NodeJSStream, Writable as NodeJSWritable } from "stream";

export interface AbortSignalLike {
    addEventListener: (type: "abort", listener: (this: AbortSignalLike, event: any) => any) => void;
}

export type AnyStream = NodeJSStream | Stream;
export type AnyWritable<TType = any, TMap = TType, TByte = TMap> =
    | NodeJSWritable
    | Writable<TType, TMap, TByte>
    | Duplex<TType, TByte, TMap, TByte>;
export type AnyReadable<TType = any, TMap = TType, TByte = TMap> = NodeJSReadable | Readable<TType, TMap, TByte>;

export interface Callback {
    (err?: Error | null): void;
}

export interface ResultCallback<T> {
    (err?: Error | null, result?: T): void;
}

export interface StreamOptions<TStream extends Stream<TByteType>, TByteType = any> {
    highWaterMark?: number | undefined;
    byteLength?: ByteLengthFunction<TStream, TByteType> | undefined;
    open?: ((this: TStream, cb: Callback) => void) | undefined;
    destroy?: ((this: TStream, cb: Callback) => void) | undefined;
    predestroy?: ((this: TStream, cb: Callback) => void) | undefined;
    signal?: AbortSignalLike | undefined;
}

/* eslint-disable-next-line @typescript-eslint/consistent-type-definitions -- cause: https://github.com/microsoft/TypeScript/issues/15300 */
export type StreamEvents = {
    open: () => void;
    close: () => void;
    error: (error: Error) => void;
};

export type Events = { [event: string]: (...args: any[]) => void } | undefined;
export type EventName<TEvents extends Events> = TEvents extends undefined ? string | symbol : keyof TEvents;
export type EventListener<TEvents extends Events, TEvent extends string | symbol | number> = TEvents extends undefined
    ? (...args: any[]) => void
    : TEvent extends keyof TEvents ? TEvents[TEvent]
    : (...args: any[]) => void;

export class Stream<
    TByteType = any,
    TReadable extends boolean = false,
    TWritable extends boolean = false,
    TEvents extends StreamEvents = StreamEvents,
> extends EventEmitter {
    constructor(opts?: StreamOptions<Stream<TByteType>, TByteType>);
    _open(cb: Callback): void;
    _destroy(cb: Callback): void;
    _predestroy(cb: Callback): void;
    readonly readable: TReadable;
    readonly writable: TWritable;
    readonly destroyed: boolean;
    readonly destroying: boolean;
    destroy(error?: Error | null): void;

    addListener<TEvent extends EventName<TEvents>>(event: TEvent, listener: EventListener<TEvents, TEvent>): this;
    on<TEvent extends EventName<TEvents>>(event: TEvent, listener: EventListener<TEvents, TEvent>): this;
    once<TEvent extends EventName<TEvents>>(event: TEvent, listener: EventListener<TEvents, TEvent>): this;
    removeListener<TEvent extends EventName<TEvents>>(event: TEvent, listener: EventListener<TEvents, TEvent>): this;
    off<TEvent extends EventName<TEvents>>(event: TEvent, listener: EventListener<TEvents, TEvent>): this;
    removeAllListeners(event?: EventName<TEvents>): this;
    setMaxListeners(n: number): this;
    getMaxListeners(): number;
    listeners<TEvent extends EventName<TEvents>>(event: TEvent): Array<EventListener<TEvents, TEvent>>;
    rawListeners<TEvent extends EventName<TEvents>>(event: TEvent): Array<EventListener<TEvents, TEvent>>;
    emit<TEvent extends EventName<TEvents>>(
        event: TEvent,
        ...rest: Parameters<EventListener<TEvents, TEvent>>
    ): boolean;
    listenerCount(event: EventName<TEvents>): number;

    // Added in Node 6...
    prependListener<TEvent extends EventName<TEvents>>(event: TEvent, listener: EventListener<TEvents, TEvent>): this;
    prependOnceListener<TEvent extends EventName<TEvents>>(
        event: TEvent,
        listener: EventListener<TEvents, TEvent>,
    ): this;
    eventNames(): Array<string | symbol>;
}

export type MapFunction<TThis, TIn, TOut> = ((this: TThis, input: TIn) => TOut) | null | undefined;
export type ByteLengthFunction<TThis, TData> = ((this: TThis, data: TData) => number) | null | undefined;

export interface BaseReadableOptions<
    TStream extends Readable<TType, TMapType, TByteType, any, any>,
    TType,
    TMapType,
    TByteType,
> extends StreamOptions<TStream, TByteType> {
    read?: ((this: TStream, cb: ResultCallback<TType>) => void) | undefined;
    byteLengthReadable?: ByteLengthFunction<TStream, TByteType> | undefined;
}

export type ReadableOptions<
    TStream extends Readable<TType, TMapType, TByteType, any, any>,
    TType,
    TMapType,
    TByteType,
    TMapFallback = any,
> =
    & BaseReadableOptions<TStream, TType, TMapType, TByteType>
    & (
        | {}
        | {
            map?: TMapFallback | undefined;
            mapReadable: MapFunction<TStream, TType, TMapType>;
        }
        | {
            map: MapFunction<TStream, TType, TMapType>;
        }
    );

type FromType<TData> = TData extends Readable ? TData
    : TData extends Iterable<infer TType> ? Readable<TType>
    : TData extends AsyncIterable<infer TType> ? Readable<TType>
    : Readable<TData>;

export type ReadableEvents<TMapType> = StreamEvents & {
    piping: (writable: Writable<TMapType>) => void;
    readable: () => void;
    data: (data: TMapType) => void;
    end: () => void;
};

export class Readable<
    TType = any,
    TMapType = TType,
    TByteType = TMapType,
    TReadable extends boolean = true,
    TWritable extends boolean = false,
    TEvents extends ReadableEvents<TMapType> = ReadableEvents<TMapType>,
> extends Stream<TByteType, TReadable, TWritable, TEvents> {
    constructor(opts?: ReadableOptions<Readable<TType, TMapType>, TType, TMapType, TByteType>);
    _read(cb: ResultCallback<TType>): void;
    pipe<TTarget extends AnyWritable<TMapType, any, any> = AnyWritable<TMapType, any, any>>(
        dest: TTarget,
        cb?: Callback,
    ): TTarget;
    read(): TMapType;
    push(data: TType | null): boolean;
    unshift(data: TType | null): void;
    resume(): this;
    pause(): this;

    static from<TInput = any>(input?: TInput): FromType<TInput>;
    static isPaused(rs: Readable): boolean;
    static isBackpressured(rs: Readable): boolean;
    [Symbol.asyncIterator]: () => AsyncIterator<TType>;
}

export interface BaseWritableOptions<
    TStream extends Writable<TType, TMapType, TByteType, any, any>,
    TType,
    TMapType,
    TByteType,
> extends StreamOptions<TStream, TByteType> {
    writev?: ((this: TStream, batch: TMapType[], cb: Callback) => void) | undefined;
    write?: ((this: TStream, data: TMapType, cb: Callback) => void) | undefined;
    final?: ((this: TStream, cb: Callback) => void) | undefined;
    byteLengthWritable?: ByteLengthFunction<TStream, TByteType> | undefined;
}

export type WritableOptions<
    TStream extends Writable<TType, TMapType, TByteType, any, any>,
    TType,
    TMapType,
    TByteType,
    TMapFallback = any,
> =
    & BaseWritableOptions<TStream, TType, TMapType, TByteType>
    & (
        | {}
        | {
            map?: TMapFallback | undefined;
            mapWritable: MapFunction<TStream, TType, TMapType>;
        }
        | {
            map: MapFunction<TStream, TType, TMapType>;
        }
    );

export type WritableEvents<TType> = StreamEvents & {
    /* tslint:disable-next-line use-default-type-parameter */
    pipe: (readable: Readable<any, TType>) => void;
    finish: () => void;
    drain: () => void;
};

export class Writable<
    TType = any,
    TMapType = TType,
    TByteType = TType,
    TReadable extends boolean = false,
    TWritable extends boolean = true,
    TEvents extends WritableEvents<TType> = WritableEvents<TType>,
> extends Stream<TByteType, TReadable, TWritable, TEvents> {
    constructor(opts?: WritableOptions<Writable<TType, TMapType, TByteType>, TType, TMapType, TByteType>);
    _writev(batch: TMapType[], cb: Callback): void;
    _write(data: TMapType, cb: Callback): void;
    _final(cb: Callback): void;
    write(data: TType): boolean;
    end(data?: TType | Callback): void;
    static isBackpressured(ws: Writable): boolean;
}

export type DuplexOptions<
    TStream extends Duplex<TWriteType, TReadType, TInternal, TByteType, TReadable, TWritable>,
    TWriteType = any,
    TReadType = TWriteType,
    TInternal = TWriteType,
    TByteType = TWriteType | TReadType,
    TReadable extends boolean = boolean,
    TWritable extends boolean = boolean,
> =
    & BaseReadableOptions<TStream, TInternal, TReadType, TByteType>
    & BaseWritableOptions<TStream, TWriteType, TInternal, TInternal>
    & {
        map?: MapFunction<TStream, TByteType, TByteType> | undefined;
        mapReadable?: MapFunction<TStream, TInternal, TReadType> | undefined;
        mapWritable?: MapFunction<TStream, TWriteType, TInternal> | undefined;
    };

export type DuplexEvents<TWriteType, TReadType> = ReadableEvents<TReadType> & WritableEvents<TWriteType>;

export class Duplex<
    TWriteType = any,
    TReadType = TWriteType,
    TInternal = TWriteType,
    TByteType = TWriteType | TReadType,
    TReadable extends boolean = true,
    TWritable extends boolean = true,
    TEvents extends DuplexEvents<TWriteType, TReadType> = DuplexEvents<TWriteType, TReadType>,
> extends Readable<TInternal, TReadType, TByteType, TReadable, TWritable, TEvents>
    implements Writable<TWriteType, TInternal, TByteType, TReadable, TWritable, TEvents>
{
    constructor(
        opts?: DuplexOptions<
            Duplex<TWriteType, TReadType, TInternal, TByteType, TReadable, TWritable>,
            TWriteType,
            TReadType,
            TInternal,
            TByteType,
            TReadable,
            TWritable
        >,
    );
    _writev(batch: TInternal[], cb: Callback): void;
    _write(data: TInternal, cb: Callback): void;
    _final(cb: Callback): void;
    write(data: TWriteType): boolean;
    end(data?: TWriteType | Callback): void;
}

export interface TransformOptions<
    TStream extends Transform<TWriteType, TReadType, TInternal, TByteType, TReadable, TWritable>,
    TWriteType = any,
    TReadType = TWriteType,
    TInternal = TWriteType,
    TByteType = TWriteType | TReadType,
    TReadable extends boolean = true,
    TWritable extends boolean = true,
> extends DuplexOptions<TStream, TWriteType, TReadType, TInternal, TByteType, TReadable, TWritable> {
    transform?: ((this: TStream, data: TWriteType, cb: ResultCallback<TReadType>) => void) | undefined;
    flush?: ((this: TStream, cb: Callback) => void) | undefined;
}

export class Transform<
    TWriteType = any,
    TReadType = TWriteType,
    TInternal = TWriteType,
    TByteType = TWriteType | TReadType,
    TReadable extends boolean = true,
    TWritable extends boolean = true,
> extends Duplex<TWriteType, TReadType, TInternal, TByteType, TReadable, TWritable> {
    constructor(
        opts?: TransformOptions<
            Transform<TWriteType, TReadType, TInternal, TByteType, TReadable, TWritable>,
            TWriteType,
            TReadType,
            TInternal,
            TByteType,
            TReadable,
            TWritable
        >,
    );
    _transform(data: TWriteType, cb: ResultCallback<TReadType>): void;
    _flush(cb: Callback): void;
}

export class PassThrough<TRead = any, TWrite = any> extends Transform<TRead, TWrite> {
    constructor(opts?: TransformOptions<Transform<TRead, TWrite>, TRead, TWrite>);
}

export function isStream(input: object): input is AnyStream;
export function isStreamx(input: object): input is Stream;

export {};
