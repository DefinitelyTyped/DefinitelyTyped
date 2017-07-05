// Type definitions for ws 3.0
// Project: https://github.com/websockets/ws
// Definitions by: Paul Loyd <https://github.com/loyd>
//                 Matt Silverlock <https://github.com/elithrar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as events from 'events';
import * as http from 'http';
import * as https from 'https';
import * as net from 'net';

// WebSocket socket.
declare class WebSocket extends events.EventEmitter {
    static CONNECTING: number;
    static OPEN: number;
    static CLOSING: number;
    static CLOSED: number;

    binaryType: string;
    bufferedAmount: number;
    bytesReceived: number;
    extensions: {};
    protocol: string;
    protocolVersion: number;
    readyState: number;
    url: string;

    CONNECTING: number;
    OPEN: number;
    CLOSING: number;
    CLOSED: number;

    onopen: (event: { target: WebSocket }) => void;
    onerror: (err: Error) => void;
    onclose: (event: { wasClean: boolean; code: number; reason: string; target: WebSocket }) => void;
    onmessage: (event: { data: WebSocket.Data; type: string; target: WebSocket }) => void;

    constructor(address: string, options?: WebSocket.IClientOptions);
    constructor(address: string, protocols?: string | string[], options?: WebSocket.IClientOptions);

    close(code?: number, data?: any): void;
    pause(): void;
    resume(): void;
    ping(data?: any, options?: { mask?: boolean; binary?: boolean }, dontFail?: boolean): void;
    pong(data?: any, options?: { mask?: boolean; binary?: boolean }, dontFail?: boolean): void;
    send(data: any, cb?: (err: Error) => void): void;
    send(data: any, options: { mask?: boolean; binary?: boolean }, cb?: (err: Error) => void): void;
    stream(options: { mask?: boolean; binary?: boolean }, cb?: (err: Error, final: boolean) => void): void;
    stream(cb?: (err: Error, final: boolean) => void): void;
    terminate(): void;

    // HTML5 WebSocket events
    addEventListener(method: 'message', cb?: (event: { data: any; type: string; target: WebSocket }) => void): void;
    addEventListener(method: 'close', cb?: (event: {
        wasClean: boolean; code: number;
        reason: string; target: WebSocket
    }) => void): void;
    addEventListener(method: 'error', cb?: (err: Error) => void): void;
    addEventListener(method: 'open', cb?: (event: { target: WebSocket }) => void): void;
    addEventListener(method: string, listener?: () => void): void;

    // Events
    on(event: 'error', cb: (err: Error) => void): this;
    on(event: 'close', cb: (code: number, message: string) => void): this;
    on(event: 'headers', cb: (headers: {}, request: http.IncomingMessage) => void): this;
    on(event: 'message', cb: (data: WebSocket.Data) => void): this;
    on(event: 'ping', cb: (data: Buffer) => void): this;
    on(event: 'pong', cb: (data: Buffer) => void): this;
    on(event: 'open', cb: () => void): this;
    on(event: 'unexpected-response', cb: (request: http.ClientRequest, response: http.IncomingMessage) => void): this;
    on(event: string, listener: () => void): this;

    addListener(event: 'error', cb: (err: Error) => void): this;
    addListener(event: 'close', cb: (code: number, message: string) => void): this;
    addListener(event: 'headers', cb: (headers: {}, request: http.IncomingMessage) => void): this;
    addListener(event: 'message', cb: (data: WebSocket.Data, flags: { binary: boolean }) => void): this;
    addListener(event: 'ping', cb: (data: Buffer, flags: { binary: boolean }) => void): this;
    addListener(event: 'pong', cb: (data: Buffer, flags: { binary: boolean }) => void): this;
    addListener(event: 'open', cb: () => void): this;
    addListener(event: 'unexpected-response', cb: (request: http.ClientRequest, response: http.IncomingMessage) => void): this;
    addListener(event: string, listener: () => void): this;
}

declare namespace WebSocket {
    /**
     * Data represents the message payload received over the WebSocket.
     */
    type Data = string | Buffer | ArrayBuffer | Buffer[];

    /**
     * CertMeta represents the accepted types for certificate & key data.
     */
    type CertMeta = string | string[] | Buffer | Buffer[];

    /**
     * VerifyClientCallbackSync is a synchronous callback used to inspect the
     * incoming message. The return value (boolean) of the function determines
     * whether or not to accept the handshake.
     */
    type VerifyClientCallbackSync = (info: { origin: string; secure: boolean; req: http.IncomingMessage }) => boolean;

    /**
     * VerifyClientCallbackAsync is an asynchronous callback used to inspect the
     * incoming message. The return value (boolean) of the function determines
     * whether or not to accept the handshake.
     */
    type VerifyClientCallbackAsync = (info: { origin: string; secure: boolean; req: http.IncomingMessage }
        , callback: (res: boolean, code?: number, message?: string) => void) => void;

    export interface IClientOptions {
        protocol?: string;
        perMessageDeflate?: boolean | IPerMessageDeflateOptions;
        localAddress?: string;
        protocolVersion?: number;
        headers?: { [key: string]: string };
        origin?: string;
        agent?: http.Agent;
        host?: string;
        family?: number;
        checkServerIdentity?: Function;
        rejectUnauthorized?: boolean;
        passphrase?: string;
        ciphers?: string;
        cert?: CertMeta;
        key?: CertMeta;
        pfx?: string | Buffer;
        ca?: CertMeta;
    }

    export interface IPerMessageDeflateOptions {
        serverNoContextTakeover?: boolean;
        clientNoContextTakeover?: boolean;
        serverMaxWindowBits?: number;
        clientMaxWindowBits?: number;
        memLevel?: number;
    }

    export interface IServerOptions {
        host?: string;
        port?: number;
        backlog?: number;
        server?: http.Server | https.Server;
        verifyClient?: VerifyClientCallbackAsync | VerifyClientCallbackSync;
        handleProtocols?: any;
        path?: string;
        noServer?: boolean;
        clientTracking?: boolean;
        perMessageDeflate?: boolean | IPerMessageDeflateOptions;
        maxPayload?: number;
    }

    // WebSocket Server
    export class Server extends events.EventEmitter {
        options: IServerOptions;
        path: string;
        clients: WebSocket[];

        constructor(options?: IServerOptions, callback?: Function);

        close(cb?: (err?: any) => void): void;
        handleUpgrade(request: http.IncomingMessage, socket: net.Socket,
            upgradeHead: Buffer, callback: (client: WebSocket) => void): void;
        shouldHandle(request: http.IncomingMessage): boolean

        // Events
        on(event: 'connection', cb: (client: WebSocket, request: http.IncomingMessage) => void): this;
        on(event: 'error', cb: (err: Error) => void): this;
        on(event: 'headers', cb: (headers: string[], request: http.IncomingMessage) => void): this;
        on(event: 'listening', cb: () => void): this;
        on(event: string, listener: () => void): this;

        addListener(event: 'connection', cb: (client: WebSocket) => void): this;
        addListener(event: 'error', cb: (err: Error) => void): this;
        addListener(event: 'headers', cb: (headers: string[], request: http.IncomingMessage) => void): this;
        addListener(event: 'listening', cb: () => void): this;
        addListener(event: string, listener: () => void): this;
    }

    export function createServer(options?: IServerOptions,
        connectionListener?: (client: WebSocket) => void): Server;
    export function connect(address: string, openListener?: Function): void;
    export function createConnection(address: string, openListener?: Function): void;
}

export = WebSocket;
