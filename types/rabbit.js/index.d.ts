/// <reference types="node" />

import events = require("events");
import stream = require("stream");

export declare function createContext(url?: string): Context;

export declare class Context extends events.EventEmitter {
    public socket<T>(type: string, options?: SocketOptions): T;
    public close(callback: Function): any;
}

export interface SocketOptions {
    prefetch?: any;
    expiration?: any;
    persistent?: any;
    topic?: any;
    task?: any;
    routing?: any;
}

export interface Socket {
    connect(destination: string, callback?: Function): any;
    setsockopt(opt: string, value: string): any;
    close(): any;
}

export declare class PubSocket extends stream.Writable implements Socket {
    constructor(channel: string, opts: SocketOptions);
    connect(destination: string, callback?: Function): any;
    setsockopt(opt: string, value: string): any;
    close(): any;

    publish(topic: string, chunk: string, encoding?: string): any;
    publish(topic: string, chunk: Buffer, encoding?: string): any;
}

export declare class SubSocket extends stream.Readable implements Socket {
    constructor(channel: string, opts: SocketOptions);
    connect(source: string, callback?: Function): any;
    connect(source: string, topic?: string, callback?: Function): any;
    setsockopt(opt: string, value: string): any;
    close(): any;
}

export declare class PushSocket extends stream.Writable implements Socket {
    constructor(channel: string, opts: SocketOptions);
    connect(destination: string, callback?: Function): any;
    setsockopt(opt: string, value: string): any;
    close(): any;
}

export declare class PullSocket extends stream.Readable implements Socket {
    constructor(channel: string, opts: SocketOptions);
    connect(source: string, callback?: Function): any;
    setsockopt(opt: string, value: string): any;
    close(): any;
}

export declare class WorkerSocket extends stream.Readable implements Socket {
    constructor(channel: string, opts: SocketOptions);
    connect(source: string, callback?: Function): any;
    setsockopt(opt: string, value: string): any;
    close(): any;

    ack(): any;
    requeue(): any;
    discard(): any;
}

export interface RequestMessage {
    properties: { correlationId: number };
    content: any;
}

export declare class ReqSocket extends stream.Duplex implements Socket {
    constructor(channel: string, opts: SocketOptions);
    connect(destination: string, callback?: Function): any;
    setsockopt(opt: string, value: string): any;
    close(): any;

    handleReply(msg: RequestMessage): any;
}

export declare class RepSocket extends stream.Duplex implements Socket {
    constructor(channel: string, opts: SocketOptions);
    connect(source: string, callback?: Function): any;
    setsockopt(opt: string, value: string): any;
    close(): any;

    requeue(): any;
    discard(): any;
}

export declare class TaskSocket extends stream.Writable implements Socket {
    constructor(channel: string, opts: SocketOptions);
    connect(destination: string, callback?: Function): any;
    setsockopt(opt: string, value: string): any;
    close(): any;

    post(task: string, chunk: string, encoding?: string): any;
    post(task: string, chunk: Buffer, encoding?: string): any;
}
