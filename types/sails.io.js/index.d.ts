// Type definitions for sails.io.js 1.0.1
// Project: http://sailsjs.org/documentation/reference/web-sockets/socket-client
// Definitions by: Arvitaly <https://github.com/arvitaly>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="socket.io-client"/>

declare namespace SailsIOJS {
    export interface SDKInfo {
        version?: string;
        language?: string;
        platform?: "browser" | "node";
        versionString?: string;
    }
    export interface ClientSails {
        url?: string;
        autoConnect?: boolean;
        headers?: { [index: string]: string };
        transports?: Array<"websocket" | "polling">;
        rejectUnauthorized?: boolean;
        reconnection?: boolean;
        reconnectionAttempts?: number;
        reconnectionDelay?: number;
        reconnectionDelayMax?: number;
        useCORSRouteToGetCookie?: boolean;
        query?: string;
        path?: string;
        // All logs are disabled when `io.sails.environment = 'production'`
        environment?: "production" | string;
        connect(url?: string, config?: ConnectConfig): Socket;
        initialConnectionHeaders?: InitialConnectionHeaders;
        strict?: boolean;
        sdk?: SDKInfo;
    }
    export interface ConnectConfig {
        initialConnectionHeaders?: InitialConnectionHeaders
    }
    export interface InitialConnectionHeaders {
        nosession?: boolean;
    }
    export interface Client {
        socket: Socket;
        sails: ClientSails;
    }
    export interface Headers { [index: string]: string }
    export interface RequestOptions {
        url: string;
        method?: string;
        headers?: Headers;
        params?: any;
        data?: any;
    }
    export interface JWR {
        headers: Headers;
        statusCode: number;
        body: any;
        error?: Error;
        toString: () => string;
        toPOJO: () => {
            body: any;
            headers: Headers;
            statusCode: number;
        }
        pipe: () => Error;
    }
    export type RequestCallback = {
        (body: any, jwr: JWR): any;
    }
    export type Data = Object;
    export interface Socket {
        get(url: string, data?: Data): void;
        get(url: string, cb?: RequestCallback): void;
        get(url: string, data: Data, cb: RequestCallback): void;
        post(url: string, data?: Data): void;
        post(url: string, cb?: RequestCallback): void;
        post(url: string, data: Data, cb: RequestCallback): void;
        put(url: string, data?: Data): void;
        put(url: string, cb?: RequestCallback): void;
        put(url: string, data: Data, cb: RequestCallback): void;
        delete(url: string, data?: Data): void;
        delete(url: string, cb?: RequestCallback): void;
        delete(url: string, data: Data, cb: RequestCallback): void;
        request(options: RequestOptions, cb?: RequestCallback): void;
        on(event: string, cb: (...args: Array<any>) => any): Socket;
        on(event: "connect", cb: () => any): Socket;
        on(event: "disconnect", cb: () => any): Socket;
        on(event: "reconnecting", cb: (numAttempts: number) => any): Socket;
        on(event: "reconnect", cb: (transport: string, numAttempts: number) => any): Socket;
        on(event: "error", cb: (err: any) => any): Socket;
        off(event: string, cb: () => any): Socket
        removeAllListeners(): Socket;
        isConnecting(): boolean;
        isConnected(): boolean;
        reconnect(): Socket;
        mightBeAboutToAutoConnect(): boolean;
        replay(): Socket;
    }
}
declare function SailsIOJS(client: SocketIOClientStatic): SailsIOJS.Client;
export = SailsIOJS;
