/// <reference types="node"/>

declare module "mitm" {
    import * as http from "http";
    import * as net from "net";

    interface SocketOptions {
        port: number;
        host?: string | undefined;
        localAddress?: string | undefined;
        localPort?: string | undefined;
        family?: number | undefined;
        allowHalfOpen?: boolean | undefined;
    }

    interface BypassableSocket extends net.Socket {
        bypass(): void;
    }

    type SocketConnectCallback = (socket: BypassableSocket, opts: SocketOptions) => void;

    type SocketConnectionCallback = (socket: net.Socket, opts: SocketOptions) => void;

    type HttpCallback = (request: http.IncomingMessage, response: http.ServerResponse) => void;

    type Event = "connect" | "connection" | "request";

    type Callback = SocketConnectCallback | SocketConnectionCallback | HttpCallback;

    interface Mitm {
        disable(): void;
        on(event: Event, callback: Callback): void;
        on(event: "connect", callback: SocketConnectCallback): void;
        on(event: "connection", callback: SocketConnectionCallback): void;
        on(event: "request", callback: HttpCallback): void;
    }

    function _(): Mitm;
    export = _;
}
