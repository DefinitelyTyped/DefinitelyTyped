import AGServer = require('socketcluster-server/server');
import WebSocket = require('ws');

import { AGAuthEngine } from './auth';
import { CallIdGenerator, ClientOptions, ProtocolVersions, States } from './clientsocket';

declare class AGTransport {
    readonly CONNECTING: 'connecting';
    readonly OPEN: 'open';
    readonly CLOSED: 'closed';

    state: States;

    auth: AGAuthEngine;
    codec: AGServer.CodecEngine;

    options: ClientOptions;
    wsOptions?: WebSocket.ClientOptions;

    protocolVersion: ProtocolVersions;

    connectTimeout: number;

    pingTimeout: number;
    pingTimeoutDisabled: boolean;

    callIdGenerator: CallIdGenerator;

    authTokenName: string;

    isBufferingBatch: boolean;

    socket: WebSocket;

    constructor(
        authEngine: AGAuthEngine,
        codecEngine: AGServer.CodecEngine,
        options: ClientOptions,
        wsOptions?: WebSocket.ClientOptions,
        handlers?: AGTransport.TransportHandlers,
    );

    uri(): string;

    clearAllListeners(): void;

    startBatch(): void;
    flushBatch(): void;
    cancelBatch(): void;

    close(code?: number, reason?: string): void;

    transmitObject(eventObject: AGTransport.EventObject): number | null;
    transmit(event: string, data: any, options: AGTransport.TransmitOptions): Promise<void>;

    invokeRaw(
        event: string,
        data: any,
        options: AGTransport.InvokeOptions,
        callback?: AGTransport.EventObjectCallback,
    ): number | null;
    invoke<T>(event: string, data: T, options: AGTransport.InvokeOptions): Promise<T>;

    cancelPendingResponse(cid: number): void;

    decode(message: any): any;
    encode(object: any): any;

    send(data: any): void;
    serializeObject(object: any): any;
    sendObject(object: any): void;
}

export = AGTransport;

declare namespace AGTransport {
    interface TransportHandlers {
        onOpen: (value?: OnOpenValue) => void;
        onOpenAbort: (value: OnOpenAbortValue) => void;
        onClose: (value: OnCloseValue) => void;
        onEvent: (value: OnEventValue) => void;
        onError: (value: OnErrorValue) => void;
        onInboundInvoke: (value: OnInboundInvokeValue) => void;
        onInboundTransmit: (value: OnInboundTransmitValue) => void;
    }

    interface OnOpenValue {
        id: string;
        pingTimeout: number;
        isAuthenticated: boolean;
        authToken: object | null;
    }

    interface OnOpenAbortValue {
        code: number;
        reason: string;
    }

    interface OnCloseValue {
        code: number;
        reason: string;
    }

    interface OnEventValue {
        event: string;
        data: any;
    }

    interface OnErrorValue {
        error: Error;
    }

    interface OnInboundInvokeValue {
        procedure: string;
        data: any;
    }

    interface OnInboundTransmitValue {
        event: string;
        data: any;
    }

    interface EventObject {
        event: string;
        data: any;
        callback?: EventObjectCallback;
        cid?: number;
        timeout?: NodeJS.Timer;
    }

    interface TransmitOptions {
        force?: boolean;
    }

    interface InvokeOptions {
        force?: boolean;
        noTimeout?: boolean;
        ackTimeout?: number;
    }

    type EventObjectCallback = (error: Error, eventObject: EventObject) => void;
}
