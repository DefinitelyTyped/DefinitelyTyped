// Type definitions for nsqjs 0.12
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
    body: Buffer;
    hasResponded: boolean;
    attempts: number;
    timestamp: number;

    constructor(rawMessage: Buffer, requeueDelay: number, msgTimeout: number, maxMsgTimeout: number);

    json(): any;

    timeUntilTimeout(hard?: boolean): number | null;

    finish(): void;

    requeue(delay?: number, backoff?: boolean): void;

    touch(): void;

    respond(responseType: number, wireData: Buffer): void;

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

    connect(): void;

    publish(topic: string, msgs: string|Buffer|object|string[]|Buffer[]|object[], callback?: (err?: Error) => void): void;

    deferPublish(topic: string, msgs: string|Buffer|object|string[]|Buffer[]|object[], timeMs: number, callback?: (err?: Error) => void): void;

    close(): void;

    on(event: "ready" | "closed", listener: () => void): this;
    on(event: "error", listener: (err: Error) => void): this;
}

export class Reader extends events.EventEmitter {
    static ERROR: string;
    static MESSAGE: string;
    static READY: string;
    static NOT_READY: string;
    static DISCARD: string;
    static NSQD_CONNECTED: string;
    static NSQD_CLOSED: string;

    constructor(topic: string, channel: string, options?: ReaderConnectionConfigOptions);

    connect(): void;

    close(): void;

    pause(): void;

    unpause(): void;

    isPaused(): boolean;

    queryLookupd(): void;

    connectToNSQD(host: string, port: number): void;

    handleMessage(message: Message): void;

    on(event: "ready" | "not_ready", listener: () => void): this;
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
    idleTimeout?: number;
}

export interface ReaderConnectionConfigOptions extends ConnectionConfigOptions {
    lookupdHTTPAddresses?: string | string[];
    lookupdPollInterval?: number;
    lookupdPollJitter?: number;
    lowRdyTimeout?: number;
    name?: string;
    nsqdTCPAddresses?: string | string[];
    maxAttempts?: number;
    maxBackoffDuration?: number;
}
