// Type definitions for ws 7.2
// Project: https://github.com/websockets/ws
// Definitions by: Paul Loyd <https://github.com/loyd>
//                 Matt Silverlock <https://github.com/elithrar>
//                 Margus Lamp <https://github.com/mlamp>
//                 Philippe D'Alva <https://github.com/TitaneBoy>
//                 Orblazer <https://github.com/orblazer>
//                 reduckted <https://github.com/reduckted>
//                 teidesu <https://github.com/teidesu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as events from 'events';
import * as http from 'http';
import * as https from 'https';
import * as net from 'net';
import * as url from 'url';
import * as zlib from 'zlib';
import * as stream from 'stream';

// WebSocket socket.
declare class WebSocket extends events.EventEmitter {
    static CONNECTING: number;
    static OPEN: number;
    static CLOSING: number;
    static CLOSED: number;

    binaryType: string;
    bufferedAmount: number;
    extensions: string;
    protocol: string;
    readyState: number;
    url: string;

    CONNECTING: number;
    OPEN: number;
    CLOSING: number;
    CLOSED: number;

    onopen: (event: WebSocket.OpenEvent) => void;
    onerror: (event: WebSocket.ErrorEvent) => void;
    onclose: (event: WebSocket.CloseEvent) => void;
    onmessage: (event: WebSocket.MessageEvent) => void;

    constructor(address: string | url.URL, options?: WebSocket.ClientOptions);
    constructor(address: string | url.URL, protocols?: string | string[], options?: WebSocket.ClientOptions);

    close(code?: number, data?: string): void;
    ping(data?: any, mask?: boolean, cb?: (err: Error) => void): void;
    pong(data?: any, mask?: boolean, cb?: (err: Error) => void): void;
    send(data: any, cb?: (err?: Error) => void): void;
    send(data: any, options: { mask?: boolean; binary?: boolean; compress?: boolean; fin?: boolean }, cb?: (err?: Error) => void): void;
    terminate(): void;

    // HTML5 WebSocket events
    addEventListener(method: 'message', cb?: (event: { data: any; type: string; target: WebSocket }) => void): void;
    addEventListener(method: 'close', cb?: (event: {
        wasClean: boolean; code: number;
        reason: string; target: WebSocket
    }) => void): void;
    addEventListener(method: 'error', cb?: (event: {error: any, message: any, type: string, target: WebSocket }) => void): void;
    addEventListener(method: 'open', cb?: (event: { target: WebSocket }) => void): void;
    addEventListener(method: string, listener?: () => void): void;

    removeEventListener(method: 'message', cb?: (event: { data: any; type: string; target: WebSocket }) => void): void;
    removeEventListener(method: 'close', cb?: (event: {
        wasClean: boolean; code: number;
        reason: string; target: WebSocket
    }) => void): void;
    removeEventListener(method: 'error', cb?: (event: {error: any, message: any, type: string, target: WebSocket }) => void): void;
    removeEventListener(method: 'open', cb?: (event: { target: WebSocket }) => void): void;
    removeEventListener(method: string, listener?: () => void): void;

    // Events
    on(event: 'close', listener: (this: WebSocket, code: number, reason: string) => void): this;
    on(event: 'error', listener: (this: WebSocket, err: Error) => void): this;
    on(event: 'upgrade', listener: (this: WebSocket, request: http.IncomingMessage) => void): this;
    on(event: 'message', listener: (this: WebSocket, data: WebSocket.Data) => void): this;
    on(event: 'open' , listener: (this: WebSocket) => void): this;
    on(event: 'ping' | 'pong', listener: (this: WebSocket, data: Buffer) => void): this;
    on(event: 'unexpected-response', listener: (this: WebSocket, request: http.ClientRequest, response: http.IncomingMessage) => void): this;
    on(event: string | symbol, listener: (this: WebSocket, ...args: any[]) => void): this;

    addListener(event: 'close', listener: (code: number, message: string) => void): this;
    addListener(event: 'error', listener: (err: Error) => void): this;
    addListener(event: 'upgrade', listener: (request: http.IncomingMessage) => void): this;
    addListener(event: 'message', listener: (data: WebSocket.Data) => void): this;
    addListener(event: 'open' , listener: () => void): this;
    addListener(event: 'ping' | 'pong', listener: (data: Buffer) => void): this;
    addListener(event: 'unexpected-response', listener: (request: http.ClientRequest, response: http.IncomingMessage) => void): this;
    addListener(event: string | symbol, listener: (...args: any[]) => void): this;

    removeListener(event: 'close', listener: (code: number, message: string) => void): this;
    removeListener(event: 'error', listener: (err: Error) => void): this;
    removeListener(event: 'upgrade', listener: (request: http.IncomingMessage) => void): this;
    removeListener(event: 'message', listener: (data: WebSocket.Data) => void): this;
    removeListener(event: 'open' , listener: () => void): this;
    removeListener(event: 'ping' | 'pong', listener: (data: Buffer) => void): this;
    removeListener(event: 'unexpected-response', listener: (request: http.ClientRequest, response: http.IncomingMessage) => void): this;
    removeListener(event: string | symbol, listener: (...args: any[]) => void): this;
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
        , callback: (res: boolean, code?: number, message?: string, headers?: http.OutgoingHttpHeaders) => void) => void;

    interface ClientOptions {
        protocol?: string;
        followRedirects?: boolean;
        handshakeTimeout?: number;
        maxRedirects?: number;
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
        maxPayload?: number;
    }

    interface PerMessageDeflateOptions {
        serverNoContextTakeover?: boolean;
        clientNoContextTakeover?: boolean;
        serverMaxWindowBits?: number;
        clientMaxWindowBits?: number;
        zlibDeflateOptions?: {
            flush?: number;
            finishFlush?: number;
            chunkSize?: number;
            windowBits?: number;
            level?: number;
            memLevel?: number;
            strategy?: number;
            dictionary?: Buffer | Buffer[] | DataView;
            info?: boolean;
        };
        zlibInflateOptions?: zlib.ZlibOptions;
        threshold?: number;
        concurrencyLimit?: number;
    }

    interface OpenEvent {
        target: WebSocket;
    }

    interface ErrorEvent {
        error: any;
        message: string;
        type: string;
        target: WebSocket;
    }

    interface CloseEvent {
        wasClean: boolean;
        code: number;
        reason: string;
        target: WebSocket;
    }

    interface MessageEvent {
        data: Data;
        type: string;
        target: WebSocket;
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

    interface AddressInfo {
        address: string;
        family: string;
        port: number;
    }

    // WebSocket Server
    class Server extends events.EventEmitter {
        options: ServerOptions;
        path: string;
        clients: Set<WebSocket>;

        constructor(options?: ServerOptions, callback?: () => void);

        address(): AddressInfo | string;
        close(cb?: (err?: Error) => void): void;
        handleUpgrade(request: http.IncomingMessage, socket: net.Socket,
            upgradeHead: Buffer, callback: (client: WebSocket) => void): void;
        shouldHandle(request: http.IncomingMessage): boolean;

        // Events
        on(event: 'connection', cb: (this: Server, socket: WebSocket, request: http.IncomingMessage) => void): this;
        on(event: 'error', cb: (this: Server, error: Error) => void): this;
        on(event: 'headers', cb: (this: Server, headers: string[], request: http.IncomingMessage) => void): this;
        on(event: 'close' | 'listening', cb: (this: Server) => void): this;
        on(event: string | symbol, listener: (this: Server, ...args: any[]) => void): this;

        addListener(event: 'connection', cb: (client: WebSocket) => void): this;
        addListener(event: 'error', cb: (err: Error) => void): this;
        addListener(event: 'headers', cb: (headers: string[], request: http.IncomingMessage) => void): this;
        addListener(event: 'close' | 'listening', cb: () => void): this;
        addListener(event: string | symbol, listener: (...args: any[]) => void): this;
    }

    // WebSocket stream
    function createWebSocketStream(websocket: WebSocket, options: stream.DuplexOptions): stream.Duplex;
}

export = WebSocket;
