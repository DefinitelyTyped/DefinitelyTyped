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

import { Plugin } from "hapi";
import NesClient = require("nes/client");

declare module "hapi" {
    interface Server {
        broadcast(message: any, options?: nes.ServerBroadcastOptions): void;
        subscription(path: string, options?: nes.ServerSubscriptionOptions): void;
        publish(path: string, message: any, options?: nes.ServerPublishOptions): void;
        eachSocket(each: (socket: nes.Socket) => void, options?: nes.ServerEachSocketOptions): void;
    }
}

declare module "hapi" {
    interface Request {
        socket: nes.Socket;
    }
}

declare namespace nes {
    interface SocketAuthObject {
        isAuthenticated: boolean;
        credentials: any;
        artifacts: any;
    }

    interface ServerBroadcastOptions {
        user: any;
    }

    interface ServerSubscriptionOptionsFilterOptions {
        socket: Socket;
        credentials?: any;
        params?: any;
    }

    interface ServerSubscriptionOptionsAuthOptions {
        mode?: "required" | "optional" | undefined;
        scope?: string | string[] | undefined;
        entity?: "user" | "app" | "any" | undefined;
        index?: boolean | undefined;
    }

    export type ServerOnSubscribeWithParams = (socket: Socket, path: string, params: any) => Promise<any>;
    export type ServerOnSubscribeWithoutParams = (socket: Socket, path: string) => Promise<any>;
    export type ServerOnSubscribe = ServerOnSubscribeWithParams | ServerOnSubscribeWithoutParams;

    export type ServerOnUnSubscribeWithParams = (socket: Socket, path: string, params: any) => void;
    export type ServerOnUnSubscribeWithoutParams = (socket: Socket, path: string) => void;
    export type ServerOnUnSubscribe = ServerOnUnSubscribeWithParams | ServerOnUnSubscribeWithoutParams;

    interface ServerSubscriptionOptions {
        filter?:
            | ((
                path: string,
                message: any,
                options: ServerSubscriptionOptionsFilterOptions,
                next: (isMatch: boolean, override?: any) => void,
            ) => void)
            | undefined;
        auth?: boolean | ServerSubscriptionOptionsAuthOptions | undefined;
        onSubscribe?: ServerOnSubscribe | undefined;
        onUnsubscribe?: ServerOnUnSubscribe | undefined;
    }

    interface ServerPublishOptions {
        internal?: any;
        user?: any;
    }

    interface ServerEachSocketOptions {
        subscription?: string | undefined;
        user?: any;
    }

    interface Socket {
        id: string;
        app: Object;
        auth: nes.SocketAuthObject;
        disconnect(): Promise<any>;
        send(message: any): Promise<any>;
        publish(path: string, message: any): Promise<any>;
        revoke(path: string, message: any): Promise<any>;
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

declare var nes: NesClassExports & Plugin<{}>;

export = nes;
