// Type definitions for nes 6.2.1
// Project: https://github.com/hapijs/nes
// Definitions by: Ivo Stratev <https://github.com/NoHomey>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as Hapi from 'hapi';
import NesClient = require('nes/client');

declare module 'hapi' {
    interface Server {
        broadcast(message: any, options?: nes.ServerBroadcastOptions): void;
        subscription(path: string, options?: nes.ServerSubscriptionOptions): void;
        publish(path: string, message: any, options?: nes.ServerPublishOptions): void;
        eachSocket(each: (socket: SocketClass) => void, options?: nes.ServerEachSocketOptions): void;
    }

    interface Request {
        socket: SocketClass;
    }
}

declare class SocketClass {
    id: string;
    app: Object;
    auth: nes.SocketAuthObject;
    disconect(callback?: () => void): void;
    send(message: any, callback?: (err?: any) => void): void;
    publish(path: string, message: any, callback?: (err?: any) => void): void;
    revoke(path: string, message: any, callback?: (err?: any) => void): void;
}

declare module nes {
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

    interface Socket extends SocketClass {}

    interface Server extends Hapi.Server {}

    interface Request extends Hapi.Request {}

    interface Client extends NesClient {}

    interface Handler extends NesClient.Handler {}

    interface ClientOptions extends NesClient.ClientOptions {}

    interface ClientConnectOptions extends NesClient.ClientConnectOptions {}

    interface ClientRequestOptions extends NesClient.ClientRequestOptions {}

    interface ClientSubscribeFlags extends NesClient.ClientSubscribeFlags {}
}

// TODO there must be a drier cleaner way of doing this that allows for the
// export to have be of type Hapi.PluginFunction whilst also exposing the
// type and class of Client, Request, etc.
interface NesClassExports {
    Socket: {
        new(): SocketClass;
    };

    Server: {
        new(): Hapi.Server;
    };

    Request: {
        new(): Hapi.Request;
    };

    Client: {
        new(url: string, options?: NesClient.ClientOptions): NesClient;
    };
}

interface NesAllExports extends NesClassExports, Hapi.PluginFunction<{}> {}

declare var nes: NesAllExports;

export = nes;
