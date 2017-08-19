// Type definitions for nes 6.2.1
// Project: https://github.com/hapijs/nes
// Definitions by: Ivo Stratev <https://github.com/NoHomey>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/* + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + +
 +                                                                           +
 +                                                                           +
 +                                                                           +
 +                      WARNING: BACKWARDS INCOMPATIBLE                      +
 +                                                                           +
 +                                                                           +
 +                                                                           +
 + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + *
 *
 * Removal of Nes.Server.  No longer need to cast to Nes.Server as Hapi.Server
 *      has been modified directly.
 * Removal of Nes.Request.  Same reason as Nes.Server
 * Move Nes.Socket from class to just an interface as it is not mentioned
 *      publically in docs.  Perhaps this should be included though?  Add
 *      failing test demonstrating use if so.
 */

import * as Hapi from 'hapi';
import NesClient = require('nes/client');

declare module 'hapi' {
    interface Server {
        broadcast(message: any, options?: nes.ServerBroadcastOptions): void;
        subscription(path: string, options?: nes.ServerSubscriptionOptions): void;
        publish(path: string, message: any, options?: nes.ServerPublishOptions): void;
        eachSocket(each: (socket: nes.Socket) => void, options?: nes.ServerEachSocketOptions): void;
    }

    interface Request {
        socket: nes.Socket;
    }
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

    interface Socket {
        id: string;
        app: Object;
        auth: nes.SocketAuthObject;
        disconect(callback?: () => void): void;
        send(message: any, callback?: (err?: any) => void): void;
        publish(path: string, message: any, callback?: (err?: any) => void): void;
        revoke(path: string, message: any, callback?: (err?: any) => void): void;
    }

    /**
     * TODO (if possible) use a drier, more robust way of doing this that
     * allows for:
     *      * the export to have be of type Hapi.PluginFunction whilst
     *      * also exposing the Client type
     *      * exporting the NesClient as the Client class without having to
     *          duplicate the constructor definition
     *      * and all the type exports from the NesClient namespace (Handler,
     *          ClientOptions, ClientConnectOptions, ClientRequestOptions,
     *          ClientSubscribeFlags)
     */

    interface Client extends NesClient {}

    interface Handler extends NesClient.Handler {}

    interface ClientOptions extends NesClient.ClientOptions {}

    interface ClientConnectOptions extends NesClient.ClientConnectOptions {}

    interface ClientRequestOptions extends NesClient.ClientRequestOptions {}

    interface ClientSubscribeFlags extends NesClient.ClientSubscribeFlags {}
}

interface NesClassExports {
    Client: {
        new(url: string, options?: NesClient.ClientOptions): NesClient;
    };
}

interface NesAllExports extends NesClassExports, Hapi.PluginFunction<{}> {}

declare var nes: NesAllExports;

export = nes;
