// Type definitions for nes 6.2.1
// Project: https://github.com/hapijs/nes
// Definitions by: Ivo Stratev <https://github.com/NoHomey>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as Hapi from 'hapi';

declare module 'hapi' {
    interface Server {
        broadcast(message: any, options?: nes.ServerBroadcastOptions): void;
        subscription(path: string, options?: nes.ServerSubscriptionOptions): void;
        publish(path: string, message: any, options?: nes.ServerPublishOptions): void;
        eachSocket(each: (socket: SocketClass) => void, options?: nes.ServerEachSocketOptions): void;
    }
}

declare class SocketClass {
    id: any;
    app: Object;
    auth: nes.SocketAuthObject;
    disconect(callback?: () => void): void;
    send(message: any, callback?: (err?: any) => void): void;
    publish(path: string, message: any, callback?: (err?: any) => void): void;
    revoke(path: string, message: any, callback?: (err?: any) => void): void;
}

declare class RequestClass extends Hapi.Request {
    socket: SocketClass;
}

declare class ClientClass {
    onError: (err: any) => void;
    onConnect: () => void;
    onDisconnect: () => void;
    onUpdate: (message: any) => void;
    connect(options: nes.ClientConnectOptions, callback: (err?: any) => void): void;
    connect(callback: (err?: any) => void): void;
    disconnect(): void;
    id: any;
    request(options: string | nes.ClientRequestOptions, callback: (err: any, payload: any, statusCode?: number, headers?: Object) => void): void;
    message(message: any, callback: (err: any, message: any) => void): void;
    subscribe(path: string, handler: nes.Handler, callback: (err?: any) => void): void;
    unsubscribe(path: string, handler: nes.Handler, callback: (err?: any) => void): void;
    subscriptions(): string[];
    overrideReconnectionAuth(auth: any): void;
}

declare module nes {
    interface Handler {
        (message: any, flags: nes.ClientSubscribeFlags): void;
    }

    interface SocketAuthObject {
        isAuthenticated: boolean;
        credentials: any;
        artifacts: any;
    }

    interface ServerBroadcastOptions {
        user: any
    }

    interface ServerSubscriptionOptionsFilterOptions {
        socket: Socket;
        credentials?: any;
        params?: any;
    }

    interface ServerSubscriptionOptionsAuthOptions {
        mode?: 'required' | 'optional';
        scope?: string | string[];
        entity?: 'user' | 'app' | 'any';
        index?: boolean;
    }

    export type ServerOnSubscribeWithParams = (socket: Socket, path: string, params: any, next: (err?: any) => void) => void;
    export type ServerOnSubscribeWithoutParams = (socket: Socket, path: string, next: (err?: any) => void) => void;
    export type ServerOnSubscribe = ServerOnSubscribeWithParams | ServerOnSubscribeWithoutParams;

    export type ServerOnUnSubscribeWithParams = (socket: Socket, path: string, params: any, next: () => void) => void;
    export type ServerOnUnSubscribeWithoutParams = (socket: Socket, path: string, next: () => void) => void;
    export type ServerOnUnSubscribe = ServerOnUnSubscribeWithParams | ServerOnUnSubscribeWithoutParams;

    interface ServerSubscriptionOptions {
        filter?: (path: string, message: any, options: ServerSubscriptionOptionsFilterOptions, next: (isMatch: boolean, override?: any) => void) => void;
        auth?: boolean | ServerSubscriptionOptionsAuthOptions;
        onSubscribe?: ServerOnSubscribe;
        onUnsubscribe?: ServerOnUnSubscribe;
    }

    interface ServerPublishOptions {
        internal?: any;
        user?: any;
    }

    interface ServerEachSocketOptions {
        subscription?: string;
        user?: any;
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

    interface Socket extends SocketClass {
    }

    interface Server extends Hapi.Server {
    }

    interface Request extends RequestClass {
    }

    interface Client extends ClientClass {
    }
}

interface NesResources {
    Socket: {
        new(): SocketClass;
    };

    Server: {
        new(): Hapi.Server;
    };

    Request: {
        new(): RequestClass;
    };

    Client: {
        new(url: string, options?: nes.ClientOptions): ClientClass;
    };
}

// TODO fix this.  See test/client-require.ts test case.
declare module 'nes/client' {
    var nesClient: NesResources;

    export = nesClient;

    // export {
    //     ClientClass,
    //     // ClientConnectOptions,
    //     // ClientRequestOptions,
    //     // ClientSubscribeFlags
    // };
}

interface NesExports extends NesResources, Hapi.PluginFunction<{}> {}

declare var nes: NesExports;

export = nes;
