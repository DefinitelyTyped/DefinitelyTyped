// Type definitions for nes 6.4.2
// Project: https://github.com/hapijs/nes
// Definitions by: Ivo Stratev <https://github.com/NoHomey>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class Client {
    constructor(url: string, options?: Client.ClientOptions);
    onError: (err: any) => void;
    onConnect: () => void;
    onDisconnect: () => void;
    onUpdate: (message: any) => void;
    connect(options: Client.ClientConnectOptions, callback: (err?: any) => void): void;
    connect(callback: (err?: any) => void): void;
    disconnect(): void;
    id: any;  // can be `null | number` but also the "socket" value from websocket message data.
    request(options: string | Client.ClientRequestOptions, callback: (err: any, payload: any, statusCode?: number, headers?: Object) => void): void;
    message(message: any, callback: (err: any, message: any) => void): void;
    subscribe(path: string, handler: Client.Handler, callback: (err?: any) => void): void;
    unsubscribe(path: string, handler: Client.Handler, callback: (err?: any) => void): void;
    subscriptions(): string[];
    overrideReconnectionAuth(auth: any): void;
}

declare namespace Client {
    interface Handler {
        (message: any, flags: Client.ClientSubscribeFlags): void;
    }

    interface ClientOptions {
        ws?: any;
        timeout?: number | boolean;
    }

    interface ClientConnectOptions {
        auth?: any;
        delay?: number;
        maxDelay?: number;
        retries?: number;
        timeout?: number;
    }

    interface ClientRequestOptions {
        path: string;
        method?: string;
        headers?: Object;
        payload?: any;
    }

    interface ClientSubscribeFlags {
        revoked?: boolean;
    }
}

export = Client;
