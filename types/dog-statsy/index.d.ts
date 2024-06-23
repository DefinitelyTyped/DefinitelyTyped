/// <reference types="node" />

import * as dgram from "node:dgram";
import * as EventEmitter from "node:events";

export = Client;

declare class Client extends EventEmitter {
    constructor(options: Client.Options);

    /**
     * Send a gauge value.
     */
    gauge(name: string, val: number, tags?: readonly string[] | null): void;

    /**
     * Send a meter value.
     */
    meter(name: string, val: number, tags?: readonly string[] | null): void;

    /**
     * Send a set value.
     */
    set(name: string, val: number, tags?: readonly string[] | null): void;

    /**
     * Send a counter value with optional sample rate.
     */
    count(name: string, val: number, sample?: number | null, tags?: readonly string[] | null): void;

    /**
     * Increment counter by `val` or `1`.
     */
    incr(name: string, val?: number | null, tags?: readonly string[] | null): void;

    /**
     * Decrement counter by `val` or `1`.
     */
    decr(name: string, val?: number | null, tags?: readonly string[] | null): void;

    /**
     * Send a histogram value or omit the value to return a completion function.
     */
    histogram(name: string): () => void;
    histogram(name: string, val: number, tags?: readonly string[] | null): void;

    /**
     * Send a timer value or omit the value to return a completion function.
     */
    timer(name: string): () => void;
    timer(name: string, val: number, tags?: readonly string[] | null): void;

    /**
     * Creates a trace object that generates stats on this client.
     *
     * @param name The name of the new trace, prefix for all its stats.
     * @param tags The default tags set to all stats of the trace.
     * @param now The start time of the trace.
     */
    trace(name: string, tags?: readonly string[] | null, now?: Date | null): Client.Trace;

    /**
     * Set the buffer flush interval as a number of milliseconds.
     *
     * @param msec The time interval for buffer flushes, or a falsy value to disable buffer flushing.
     */
    setFlushInterval(msec?: number | null): void;

    /**
     * Closes the underlying socket, preventing the client from sending messages.
     */
    close(): void;

    /**
     * Flush buffered data, this method is a no-op if buffering is disabled.
     */
    flush(): void;

    addListener(event: "close" | "connect", listener: () => void): this;
    addListener(event: "error", listener: (err: Error) => void): this;
    addListener(event: "message", listener: (msg: Buffer, rinfo: dgram.RemoteInfo) => void): this;
    addListener(event: string | symbol, listener: (...args: any[]) => void): this;
    emit(event: "close" | "connect"): boolean;
    emit(event: "error", err: Error): boolean;
    emit(event: "message", msg: Buffer, rinfo: dgram.RemoteInfo): boolean;
    emit(event: string | symbol, ...args: any[]): boolean;
    on(event: "close" | "connect", listener: () => void): this;
    on(event: "error", listener: (err: Error) => void): this;
    on(event: "message", listener: (msg: Buffer, rinfo: dgram.RemoteInfo) => void): this;
    on(event: string | symbol, listener: (...args: any[]) => void): this;
    once(event: "close" | "connect", listener: () => void): this;
    once(event: "error", listener: (err: Error) => void): this;
    once(event: "message", listener: (msg: Buffer, rinfo: dgram.RemoteInfo) => void): this;
    once(event: string | symbol, listener: (...args: any[]) => void): this;
    prependListener(event: "close" | "connect", listener: () => void): this;
    prependListener(event: "error", listener: (err: Error) => void): this;
    prependListener(event: "message", listener: (msg: Buffer, rinfo: dgram.RemoteInfo) => void): this;
    prependListener(event: string | symbol, listener: (...args: any[]) => void): this;
    prependOnceListener(event: "close" | "connect", listener: () => void): this;
    prependOnceListener(event: "error", listener: (err: Error) => void): this;
    prependOnceListener(event: "message", listener: (msg: Buffer, rinfo: dgram.RemoteInfo) => void): this;
    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;
}

declare namespace Client {
    interface Options {
        /**
         * @default 'localhost'
         */
        host?: string;
        /**
         * @default 8125
         */
        port?: number;
        /**
         * Optional prefix for a message, will be concatenated with a `'.'`.
         */
        prefix?: string;
        /**
         * Array of tags to include in every call.
         * @default []
         */
        tags?: readonly string[];
        /**
         * The buffer size. Use `0` to send the data immediately.
         * @default 1024
         */
        bufferSize?: number;
        /**
         * Only valid when `bufferSize` is defined. It will flush the buffer after the
         * interval in milliseconds (if not empty).
         */
        flushInterval?: number;
    }

    interface Trace {
        /**
         * Adds a step to a trace.
         */
        step(step: string, tags?: readonly string[] | null, now?: Date | null): void;

        /**
         * Completes a trace.
         */
        complete(now?: Date | null): void;
    }
}
