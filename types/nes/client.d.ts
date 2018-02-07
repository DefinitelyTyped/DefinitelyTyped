// Type definitions for nes 7.0.0
// Project: https://github.com/hapijs/nes
// Definitions by: Ivo Stratev <https://github.com/NoHomey>
//                 Rodrigo Saboya <https://github.com/saboya>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class Client {
    constructor(url: string, options?: Client.ClientOptions);
    onError: (err: any) => void;
    onConnect: () => void;
    onDisconnect: () => void;
    onUpdate: (message: any) => void;
    connect(options: Client.ClientConnectOptions): Promise<any>;
    connect(): Promise<any>;
    disconnect(): Promise<any>;
    id: any;  // can be `null | number` but also the "socket" value from websocket message data.
    request(options: string | Client.ClientRequestOptions): Promise<any>;
    message(message: any): Promise<any>;
    subscribe(path: string, handler: Client.Handler): Promise<any>;
    unsubscribe(path: string, handler: Client.Handler): Promise<any>;
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
