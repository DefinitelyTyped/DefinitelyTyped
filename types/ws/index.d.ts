// Type definitions for ws 3.2
// Project: https://github.com/websockets/ws
// Definitions by: Paul Loyd <https://github.com/loyd>
//                 Matt Silverlock <https://github.com/elithrar>
//                 Margus Lamp <https://github.com/mlamp>
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

    constructor(address: string, options?: WebSocket.ClientOptions);
    constructor(address: string, protocols?: string | string[], options?: WebSocket.ClientOptions);

    close(code?: number, data?: string): void;
    pause(): void;
    resume(): void;
    ping(data?: any, mask?: boolean, failSilently?: boolean): void;
    pong(data?: any, mask?: boolean, failSilently?: boolean): void;
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
    on(event: 'close', listener: (code: number, reason: string) => void): this;
    on(event: 'error', listener: (err: Error) => void): this;
    on(event: 'headers', listener: (headers: {}, request: http.IncomingMessage) => void): this;
    on(event: 'message', listener: (data: WebSocket.Data) => void): this;
    on(event: 'open' , listener: () => void): this;
    on(event: 'ping' | 'pong', listener: (data: Buffer) => void): this;
    on(event: 'unexpected-response', listener: (request: http.ClientRequest, response: http.IncomingMessage) => void): this;
    on(event: string | symbol, listener: (...args: any[]) => void): this;

    addListener(event: 'close', listener: (code: number, message: string) => void): this;
    addListener(event: 'error', listener: (err: Error) => void): this;
    addListener(event: 'headers', listener: (headers: {}, request: http.IncomingMessage) => void): this;
    addListener(event: 'message', listener: (data: WebSocket.Data) => void): this;
    addListener(event: 'open' , listener: () => void): this;
    addListener(event: 'ping' | 'pong', listener: (data: Buffer) => void): this;
    addListener(event: 'unexpected-response', listener: (request: http.ClientRequest, response: http.IncomingMessage) => void): this;
    addListener(event: string | symbol, listener: (...args: any[]) => void): this;
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

    interface ClientOptions {
        protocol?: string;
        handshakeTimeout?: number;
        perMessageDeflate?: boolean | PerMessageDeflateOptions;
        localAddress?: string;
        protocolVersion?: number;
        headers?: { [key: string]: string };
        origin?: string;
        agent?: http.Agent;
        host?: string;
        family?: number;
        checkServerIdentity?(servername: string, cert: CertMeta): boolean;
        rejectUnauthorized?: boolean;
        passphrase?: string;
        ciphers?: string;
        cert?: CertMeta;
        key?: CertMeta;
        pfx?: string | Buffer;
        ca?: CertMeta;
    }

    interface PerMessageDeflateOptions {
        serverNoContextTakeover?: boolean;
        clientNoContextTakeover?: boolean;
        serverMaxWindowBits?: number;
        clientMaxWindowBits?: number;
        level?: number;
        memLevel?: number;
        threshold?: number;
        concurrencyLimit?: number;
    }

    interface ServerOptions {
        host?: string;
        port?: number;
        backlog?: number;
        server?: http.Server | https.Server;
        verifyClient?: VerifyClientCallbackAsync | VerifyClientCallbackSync;
        handleProtocols?: any;
        path?: string;
        noServer?: boolean;
        clientTracking?: boolean;
        perMessageDeflate?: boolean | PerMessageDeflateOptions;
        maxPayload?: number;
    }

    // WebSocket Server
    class Server extends events.EventEmitter {
        options: ServerOptions;
        path: string;
        clients: Set<WebSocket>;

        constructor(options?: ServerOptions, callback?: () => void);

        close(cb?: (err?: Error) => void): void;
        handleUpgrade(request: http.IncomingMessage, socket: net.Socket,
            upgradeHead: Buffer, callback: (client: WebSocket) => void): void;
        shouldHandle(request: http.IncomingMessage): boolean;

        // Events
        on(event: 'connection', cb: (socket: WebSocket, request: http.IncomingMessage) => void): this;
        on(event: 'error', cb: (error: Error) => void): this;
        on(event: 'headers', cb: (headers: string[], request: http.IncomingMessage) => void): this;
        on(event: 'listening', cb: () => void): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;

        addListener(event: 'connection', cb: (client: WebSocket) => void): this;
        addListener(event: 'error', cb: (err: Error) => void): this;
        addListener(event: 'headers', cb: (headers: string[], request: http.IncomingMessage) => void): this;
        addListener(event: 'listening', cb: () => void): this;
        addListener(event: string | symbol, listener: (...args: any[]) => void): this;
    }
}

export = WebSocket;
