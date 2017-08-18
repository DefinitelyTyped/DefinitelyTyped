// Type definitions for nsqjs 0.8.4
// Project: https://github.com/dudleycarr/nsqjs
// Definitions by: Robert Kania <https://github.com/cezaryrk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as events from 'events';

export = nsqjs


declare namespace nsqjs {


    export enum RESPONSE_TYPE {
        FINISH = 0,
        REQUEUE = 1,
        TOUCH = 2
    }

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

        requeue(delay: number, backoff: string): any;

        touch(): any;

        respond(responseType: RESPONSE_TYPE, wireData: any): any;

    }

    export class Writer extends events.EventEmitter {

        readonly nsqdHost: string
        readonly nsqdPort: number

        static READY: string;
        static CLOSED: string;
        static ERROR: string;

        constructor(nsqdHost: string, nsqdPort: number, options?: IConnectionConfigOptions);

        connect(): any;

        publish(topic: string, msgs: any, listener?: (err: Error) => void): any;

        close(): any;

        on(event: string, listener: Function): this;
        on(event: "ready", listener: () => void): void;
        on(event: "closed", listener: () => void): void;
        on(event: "error", listener: (err: Error) => void): void;
        on(event: "connection_error", listener: (err: Error) => void): void;

    }

    export class Reader extends events.EventEmitter {

        static ERROR: string;
        static MESSAGE: string;
        static DISCARD: string;
        static NSQD_CONNECTED: string;
        static NSQD_CLOSED: string;

        constructor(topic: string, channel: any, options?: IReaderConnectionConfigOptions);

        connect(): any;

        close(): any;

        pause(): any;

        unpause(): any;

        isPaused(): boolean;

        queryLookupd(): any;

        connectToNSQD(host: string, port: number): any;

        handleMessage(message: any): any;

        on(event: string, listener: Function): this;
        on(event: "nsqd_connected", listener: (host: string, port: number) => void): void;
        on(event: "nsqd_closed", listener: (host: string, port: number) => void): void;
        on(event: "message", listener: (message: Message) => void): void;
        on(event: "discard", listener: (message: Message) => void): void;
        on(event: "error", listener: (err: Error) => void): void;
        on(event: "connection_error", listener: (err: Error) => void): void;


    }


    interface IConnectionConfigOptions {
        authSecret?: string,
        clientId?: string,
        deflate?: boolean,
        deflateLevel?: number,
        heartbeatInterval?: number,
        maxInFlight?: number,
        messageTimeout?: number,
        outputBufferSize?: number,
        outputBufferTimeout?: number,
        requeueDelay?: number,
        sampleRate?: number,
        snappy?: boolean,
        tls?: boolean,
        tlsVerification?: boolean
    }

    interface IReaderConnectionConfigOptions extends IConnectionConfigOptions {
        lookupdHTTPAddresses?: string | string[],
        lookupdPollInterval?: number,
        lookupdPollJitter?: number,
        name?: string,
        nsqdTCPAddresses?: string | string[],
        maxAttempts?: number,
        maxBackoffDuration?: number
    }


}
