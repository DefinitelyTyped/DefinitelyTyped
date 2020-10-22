// Type definitions for mitm v1.3.0
// Project: https://github.com/moll/node-mitm
// Definitions by: Alejandro Sánchez <https://github.com/alejo90>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference types="node"/>

declare module 'mitm' {
    import * as http from 'http';
    import * as net from 'net';

    interface SocketOptions {
        port: number;
        host?: string;
        localAddress?: string;
        localPort?: string;
        family?: number;
        allowHalfOpen?: boolean;
    }

    interface BypassableSocket extends net.Socket {
        bypass(): void
    }

    type SocketConnectCallback = (socket: BypassableSocket, opts: SocketOptions) => void;

    type SocketConnectionCallback = (socket: net.Socket, opts: SocketOptions) => void;

    type HttpCallback = (request: http.IncomingMessage, response: http.ServerResponse) => void;

    type Event = 'connect' | 'connection' | 'request';

    type Callback = SocketConnectCallback | SocketConnectionCallback | HttpCallback;

    interface Mitm {
        disable(): void;
        on(event: Event, callback: Callback): void;
        on(event: 'connect', callback: SocketConnectCallback): void;
        on(event: 'connection', callback: SocketConnectionCallback): void;
        on(event: 'request', callback: HttpCallback): void;
    }

    function _(): Mitm;
    export = _;
}
