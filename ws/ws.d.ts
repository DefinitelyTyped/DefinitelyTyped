// Type definitions for ws
// Project: https://github.com/einaros/ws
// Definitions by: Paul Loyd <https://github.com/loyd>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "ws" {
    import * as events from 'events';
    import * as http from 'http';
    import * as https from 'https';
    import * as net from 'net';

    class WebSocket extends events.EventEmitter {
        static CONNECTING: number;
        static OPEN: number;
        static CLOSING: number;
        static CLOSED: number;

        bytesReceived: number;
        readyState: number;
        protocolVersion: string;
        url: string;
        supports: any;
        upgradeReq: http.ServerRequest;
        protocol: string;

        CONNECTING: number;
        OPEN: number;
        CLOSING: number;
        CLOSED: number;

        onopen: (event: {target: WebSocket}) => void;
        onerror: (err: Error) => void;
        onclose: (event: {wasClean: boolean; code: number; reason: string; target: WebSocket}) => void;
        onmessage: (event: {data: any; type: string; target: WebSocket}) => void;

        constructor(address: string, options?: WebSocket.IClientOptions);
        constructor(address: string, protocols?: string | string[], options?: WebSocket.IClientOptions);

        close(code?: number, data?: any): void;
        pause(): void;
        resume(): void;
        ping(data?: any, options?: {mask?: boolean; binary?: boolean}, dontFail?: boolean): void;
        pong(data?: any, options?: {mask?: boolean; binary?: boolean}, dontFail?: boolean): void;
        send(data: any, cb?: (err: Error) => void): void;
        send(data: any, options: {mask?: boolean; binary?: boolean}, cb?: (err: Error) => void): void;
        stream(options: {mask?: boolean; binary?: boolean}, cb?: (err: Error, final: boolean) => void): void;
        stream(cb?: (err: Error, final: boolean) => void): void;
        terminate(): void;

        // HTML5 WebSocket events
        addEventListener(method: 'message', cb?: (event: {data: any; type: string; target: WebSocket}) => void): void;
        addEventListener(method: 'close', cb?: (event: {wasClean: boolean; code: number;
                                                        reason: string; target: WebSocket}) => void): void;
        addEventListener(method: 'error', cb?: (err: Error) => void): void;
        addEventListener(method: 'open', cb?: (event: {target: WebSocket}) => void): void;
        addEventListener(method: string, listener?: () => void): void;

        // Events
        on(event: 'error', cb: (err: Error) => void): this;
        on(event: 'close', cb: (code: number, message: string) => void): this;
        on(event: 'message', cb: (data: any, flags: {binary: boolean}) => void): this;
        on(event: 'ping', cb: (data: any, flags: {binary: boolean}) => void): this;
        on(event: 'pong', cb: (data: any, flags: {binary: boolean}) => void): this;
        on(event: 'open', cb: () => void): this;
        on(event: string, listener: () => void): this;

        addListener(event: 'error', cb: (err: Error) => void): this;
        addListener(event: 'close', cb: (code: number, message: string) => void): this;
        addListener(event: 'message', cb: (data: any, flags: {binary: boolean}) => void): this;
        addListener(event: 'ping', cb: (data: any, flags: {binary: boolean}) => void): this;
        addListener(event: 'pong', cb: (data: any, flags: {binary: boolean}) => void): this;
        addListener(event: 'open', cb: () => void): this;
        addListener(event: string, listener: () => void): this;
    }

    namespace WebSocket {
                
        type VerifyClientCallbackSync = (info: {origin: string; secure: boolean; req: http.ServerRequest}) => boolean;
        type VerifyClientCallbackAsync = (info: {origin: string; secure: boolean; req: http.ServerRequest}
                                            , callback: (res: boolean) => void) => void;
        
        export interface IClientOptions {
            protocol?: string;
            agent?: http.Agent;
            headers?: {[key: string]: string};
            protocolVersion?: any;
            host?: string;
            origin?: string;
            pfx?: any;
            key?: any;
            passphrase?: string;
            cert?: any;
            ca?: any[];
            ciphers?: string;
            rejectUnauthorized?: boolean;
        }
        
        export interface IServerOptions {
            host?: string;
            port?: number;
            server?: http.Server | https.Server;
            verifyClient?: VerifyClientCallbackAsync | VerifyClientCallbackSync;
            handleProtocols?: any;
            path?: string;
            noServer?: boolean;
            disableHixie?: boolean;
            clientTracking?: boolean;
        }

        export class Server extends events.EventEmitter {
            options: IServerOptions;
            path: string;
            clients: WebSocket[];

            constructor(options?: IServerOptions, callback?: Function);

            close(cb?: () => {}): void;
            handleUpgrade(request: http.ServerRequest, socket: net.Socket,
                          upgradeHead: Buffer, callback: (client: WebSocket) => void): void;

            // Events
            on(event: 'error', cb: (err: Error) => void): this;
            on(event: 'headers', cb: (headers: string[]) => void): this;
            on(event: 'connection', cb: (client: WebSocket) => void): this;
            on(event: string, listener: () => void): this;

            addListener(event: 'error', cb: (err: Error) => void): this;
            addListener(event: 'headers', cb: (headers: string[]) => void): this;
            addListener(event: 'connection', cb: (client: WebSocket) => void): this;
            addListener(event: string, listener: () => void): this;
        }

        export function createServer(options?: IServerOptions,
            connectionListener?: (client: WebSocket) => void): Server;
        export function connect(address: string, openListener?: Function): void;
        export function createConnection(address: string, openListener?: Function): void;
    }

    export = WebSocket;
}
