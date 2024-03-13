/// <reference types="node" />

import { EventEmitter } from "events";

export class Connection extends EventEmitter {
    constructor(...args: any[]);

    api(command: any, args: string[], cb?: () => void): void;

    auth(cb: () => void): void;

    bgapi(command: any, args: string[], jobid?: any, cb?: () => void): void;

    connected(): any;

    disconnect(): void;

    events(type: "json" | "plain" | "xml", events: string, cb?: () => void): void;

    execute(app: any, arg?: string, uuid?: string, cb?: () => void): any;

    executeAsync(app: any, arg?: string, uuid?: string, cb?: () => void): any;

    filter(header: any, value: any, cb?: () => void): void;

    filterDelete(header: any, value: any, cb?: () => void): void;

    getInfo(): any;

    message(options: any, cb?: () => void): void;

    originate(options: any, cb?: () => void): void;

    recvEvent(cb?: () => void): void;

    recvEventTimed(ms: any, cb?: () => void): void;

    send(command: any, args: any): void;

    sendEvent(event: any, cb?: () => void): void;

    sendRecv(command: any, args: any, cb?: () => void): void;

    setAsyncExecute(value: any): void;

    setEventLock(value: any): void;

    show(item: any, format: any, cb?: () => void): void;

    socketDescriptor(): any;

    subscribe(events: any, cb?: () => void): void;
}

export interface Header {
    name: string;

    value: string;
}

export class Event {
    constructor(type: any, subclass: any);

    headers: Header[];

    addBody(value: any): any;

    addHeader(name: any, value: any): any;

    delHeader(name: any): any;

    firstHeader(): any;

    getBody(): any;

    getHeader(name: any): string;

    getType(): any;

    nextHeader(): any;

    serialize(format: any): any;

    setPriority(priority: any): void;

    static readonly PRIORITY: {
        HIGH: string;
        LOW: string;
        NORMAL: string;
    };
}
export class Parser {
    constructor(socket: any);
}
export class Server extends EventEmitter {
    constructor(opts: any, readycb?: () => void);

    close(callback: any): void;
}
export function eslSetLogLevel(level: any): void;

export function setLogLevel(level: any): void;
