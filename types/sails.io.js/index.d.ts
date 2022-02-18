// Type definitions for sails.io.js 1.0.1
// Project: http://sailsjs.org/documentation/reference/web-sockets/socket-client
// Definitions by: Arvitaly <https://github.com/arvitaly>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="socket.io-client"/>

declare namespace SailsIOJS {
    interface SDKInfo {
        version?: string | undefined;
        language?: string | undefined;
        platform?: 'browser' | 'node' | undefined;
        versionString?: string | undefined;
    }
    interface ClientSails {
        url?: string | undefined;
        autoConnect?: boolean | undefined;
        headers?: { [index: string]: string } | undefined;
        transports?: Array<'websocket' | 'polling'> | undefined;
        rejectUnauthorized?: boolean | undefined;
        reconnection?: boolean | undefined;
        reconnectionAttempts?: number | undefined;
        reconnectionDelay?: number | undefined;
        reconnectionDelayMax?: number | undefined;
        useCORSRouteToGetCookie?: boolean | undefined;
        query?: string | undefined;
        path?: string | undefined;
        // All logs are disabled when `io.sails.environment = 'production'`
        environment?: 'production' | string | undefined;
        connect(url?: string, config?: ConnectConfig): Socket;
        initialConnectionHeaders?: InitialConnectionHeaders | undefined;
        strict?: boolean | undefined;
        sdk?: SDKInfo | undefined;
    }
    interface ConnectConfig {
        initialConnectionHeaders?: InitialConnectionHeaders | undefined;
    }
    interface InitialConnectionHeaders {
        nosession?: boolean | undefined;
        [key: string]: unknown;
    }
    interface Client {
        socket: Socket;
        sails: ClientSails;
    }
    interface Headers {
        [index: string]: string;
    }
    interface RequestOptions {
        url: string;
        method?: string | undefined;
        headers?: Headers | undefined;
        params?: any;
        data?: any;
    }
    interface JWR {
        headers: Headers;
        statusCode: number;
        body: any;
        error?: Error | undefined;
        toString: () => string;
        toPOJO: () => {
            body: any;
            headers: Headers;
            statusCode: number;
        };
        pipe: () => Error;
    }
    type RequestCallback = (body: any, jwr: JWR) => any;
    type Data = object | string;
    interface Socket {
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
        on(event: string, cb: (...args: any[]) => any): Socket;
        on(event: 'connect', cb: () => any): Socket;
        on(event: 'disconnect', cb: () => any): Socket;
        on(event: 'reconnecting', cb: (numAttempts: number) => any): Socket;
        on(event: 'reconnect', cb: (transport: string, numAttempts: number) => any): Socket;
        on(event: 'error', cb: (err: any) => any): Socket;
        off(event: string, cb: (...args: any[]) => any): Socket;
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
