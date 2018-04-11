// Type definitions for nsqjs 0.9
// Project: https://github.com/dudleycarr/nsqjs
// Definitions by: Robert Kania <https://github.com/cezaryrk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as events from 'events';

export class Message extends events.EventEmitter {
    static BACKOFF: string;
    static RESPOND: string;
    static FINISH: number;
    static REQUEUE: number;
    static TOUCH: number;

    readonly id: string;
    body: any;
    hasResponded: boolean;
    timestamp: number;

    constructor(id: string, timestamp: number, attempts: number, body: any,
                requeueDelay: number, msgTimeout: number, maxMsgTimeout: number);

    json(): any;

    timeUntilTimeout(hard?: boolean): number;

    finish(): any;

    requeue(delay?: number, backoff?: boolean): any;

    touch(): any;

    respond(responseType: number, wireData: Buffer): any;

    on(event: "backoff", listener: () => void): this;
    on(event: "respond", listener: (responseType: number, wireData: Buffer) => void): this;
}

export class Writer extends events.EventEmitter {
    readonly nsqdHost: string;
    readonly nsqdPort: number;

    static READY: string;
    static CLOSED: string;
    static ERROR: string;

    constructor(nsqdHost: string, nsqdPort: number, options?: ConnectionConfigOptions);

    connect(): any;

    publish(topic: string, msgs: any, listener?: (err: Error) => void): any;

    close(): any;

    on(event: "ready" | "closed", listener: () => void): this;
    on(event: "error", listener: (err: Error) => void): this;
}

export class Reader extends events.EventEmitter {
    static ERROR: string;
    static MESSAGE: string;
    static DISCARD: string;
    static NSQD_CONNECTED: string;
    static NSQD_CLOSED: string;

    constructor(topic: string, channel: any, options?: ReaderConnectionConfigOptions);

    connect(): any;

    close(): any;

    pause(): any;

    unpause(): any;

    isPaused(): boolean;

    queryLookupd(): any;

    connectToNSQD(host: string, port: number): any;

    handleMessage(message: any): any;

    on(event: "nsqd_connected" | "nsqd_closed", listener: (host: string, port: number) => void): this;
    on(event: "message" | "discard", listener: (message: Message) => void): this;
    on(event: "error", listener: (err: Error) => void): this;
}

export interface ConnectionConfigOptions {
    authSecret?: string;
    clientId?: string;
    deflate?: boolean;
    deflateLevel?: number;
    heartbeatInterval?: number;
    maxInFlight?: number;
    messageTimeout?: number;
    outputBufferSize?: number;
    outputBufferTimeout?: number;
    requeueDelay?: number;
    sampleRate?: number;
    snappy?: boolean;
    tls?: boolean;
    tlsVerification?: boolean;
}

export interface ReaderConnectionConfigOptions extends ConnectionConfigOptions {
    lookupdHTTPAddresses?: string | string[];
    lookupdPollInterval?: number;
    lookupdPollJitter?: number;
    name?: string;
    nsqdTCPAddresses?: string | string[];
    maxAttempts?: number;
    maxBackoffDuration?: number;
}
