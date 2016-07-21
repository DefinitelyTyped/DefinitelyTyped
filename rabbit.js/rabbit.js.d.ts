// Type definitions for rabbit.js v0.4.2
// Project: https://github.com/squaremo/rabbit.js
// Definitions by: Wonshik Kim <https://github.com/wokim>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "rabbit.js" {
  import events = require('events');
  import stream = require('stream');

  export function createContext(url?: string): Context;

  export class Context extends events.EventEmitter {
    public socket<T>(type: string, options?: SocketOptions):T;
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

  export class PubSocket extends stream.Writable implements Socket {
    constructor(channel: string, opts: SocketOptions);
    connect(destination: string, callback?: Function): any;
    setsockopt(opt: string, value: string): any;
    close(): any;

    publish(topic: string, chunk: string, encoding?: string): any;
    publish(topic: string, chunk: Buffer, encoding?: string): any;
  }

  export class SubSocket extends stream.Readable implements Socket {
    constructor(channel: string, opts: SocketOptions);
    connect(source: string, callback?: Function): any;
    connect(source: string, topic?: string, callback?: Function): any;
    setsockopt(opt: string, value: string): any;
    close(): any;
  }

  export class PushSocket extends stream.Writable implements Socket {
    constructor(channel: string, opts: SocketOptions);
    connect(destination: string, callback?: Function): any;
    setsockopt(opt: string, value: string): any;
    close(): any;
  }

  export class PullSocket extends stream.Readable implements Socket {
    constructor(channel: string, opts: SocketOptions);
    connect(source: string, callback?: Function): any;
    setsockopt(opt: string, value: string): any;
    close(): any;
  }

  export class WorkerSocket extends stream.Readable implements Socket {
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

  export class ReqSocket extends stream.Duplex implements Socket {
    constructor(channel: string, opts: SocketOptions);
    connect(destination: string, callback?: Function): any;
    setsockopt(opt: string, value: string): any;
    close(): any;

    handleReply(msg: RequestMessage): any;
  }

  export class RepSocket extends stream.Duplex implements Socket {
    constructor(channel: string, opts: SocketOptions);
    connect(source: string, callback?: Function): any;
    setsockopt(opt: string, value: string): any;
    close(): any;

    requeue(): any;
    discard(): any;
  }

  export class TaskSocket extends stream.Writable implements Socket {
    constructor(channel: string, opts: SocketOptions);
    connect(destination: string, callback?: Function): any;
    setsockopt(opt: string, value: string): any;
    close(): any;

    post(task: string, chunk: string, encoding?: string): any;
    post(task: string, chunk: Buffer, encoding?: string): any;
  }
}
