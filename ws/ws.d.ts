// Type definitions for ws
// Project: https://github.com/einaros/ws
// Definitions by: Paul Loyd <https://github.com/loyd>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "ws" {
    import events = require('events');
    import http   = require('http');
    import net    = require('net');

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

        CONNECTING: number;
        OPEN: number;
        CLOSING: number;
        CLOSED: number;

        onopen: (event: {target: WebSocket}) => void;
        onerror: (err: Error) => void;
        onclose: (event: {wasClean: boolean; code: number; reason: string; target: WebSocket}) => void;
        onmessage: (event: {data: any; type: string; target: WebSocket}) => void;

        constructor(address: string, options?: {
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
        });

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
        on(event: 'error', cb: (err: Error) => void): WebSocket;
        on(event: 'close', cb: (code: number, message: string) => void): WebSocket;
        on(event: 'message', cb: (data: any, flags: {binary: boolean}) => void): WebSocket;
        on(event: 'ping', cb: (data: any, flags: {binary: boolean}) => void): WebSocket;
        on(event: 'pong', cb: (data: any, flags: {binary: boolean}) => void): WebSocket;
        on(event: 'open', cb: () => void): WebSocket;
        on(event: string, listener: () => void): WebSocket;
        
        addListener(event: 'error', cb: (err: Error) => void): WebSocket;
        addListener(event: 'close', cb: (code: number, message: string) => void): WebSocket;
        addListener(event: 'message', cb: (data: any, flags: {binary: boolean}) => void): WebSocket;
        addListener(event: 'ping', cb: (data: any, flags: {binary: boolean}) => void): WebSocket;
        addListener(event: 'pong', cb: (data: any, flags: {binary: boolean}) => void): WebSocket;
        addListener(event: 'open', cb: () => void): WebSocket;
        addListener(event: string, listener: () => void): WebSocket;
    }

    module WebSocket {
        export interface IServerOptions {
            host?: string;
            port?: number;
            server?: http.Server;
            verifyClient?: {
                (info: {origin: string; secure: boolean; req: http.ServerRequest}): boolean;
                (info: {origin: string; secure: boolean; req: http.ServerRequest},
                                                 callback: (res: boolean) => void): void;
            };
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

            close(): void;
            handleUpgrade(request: http.ServerRequest, socket: net.Socket,
                          upgradeHead: Buffer, callback: (client: WebSocket) => void): void;

            // Events
            on(event: 'error', cb: (err: Error) => void): Server;
            on(event: 'headers', cb: (headers: string[]) => void): Server;
            on(event: 'connection', cb: (client: WebSocket) => void): Server;
            on(event: string, listener: () => void): Server;
            
            addListener(event: 'error', cb: (err: Error) => void): Server;
            addListener(event: 'headers', cb: (headers: string[]) => void): Server;
            addListener(event: 'connection', cb: (client: WebSocket) => void): Server;
            addListener(event: string, listener: () => void): Server;
        }

        export function createServer(options?: IServerOptions,
            connectionListener?: (client: WebSocket) => void): Server;
        export function connect(address: string, openListener?: Function): void;
        export function createConnection(address: string, openListener?: Function): void;
    }

    export = WebSocket;
}
