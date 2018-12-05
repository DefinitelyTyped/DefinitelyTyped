// Type definitions for signalr-no-jquery 0.1
// Project: https://github.com/DVLP/signalr-no-jquery/
// Definitions by: Martin Gjoshevski <https://github.com/gjoshevski>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export function hubConnection(url?: string, options?: Options): Connection;

export function signalR(url?: string, qs?: any, logging?: any): any;

export interface Connection {
    id: string;
    proxies: { [hubName: string]: any };
    transport: {
        name: string,
        supportsKeepAlive: SupportsKeepAliveHandler
    };

   /**
    * Creates a new proxy object for the given hub connection that can be used to invoke
    * methods on server hubs and handle client method invocation requests from the server.
    *
    * @param hubName The name of the hub on the server to create the proxy for.
    */
    createHubProxy(hubName: string): Proxy;

    start(options?: any, callback?: any): any;
}

export interface Proxy {
    state: any;
    connection: Connection;
    hubName: string;
    init(connection: Connection, hubName: string): void;
    hasSubscriptions(): boolean;
   /**
    * Wires up a callback to be invoked when a invocation request is received from the server hub.
    *
    * @param eventName The name of the hub event to register the callback for.
    * @param callback The callback to be invoked.
    */
    on(eventName: string, callback: (...msg: any[]) => void): Proxy;
   /**
    * Removes the callback invocation request from the server hub for the given event name.
    *
    * @param eventName The name of the hub event to unregister the callback for.
    * @param callback The callback to be invoked.
    */
    off(eventName: string, callback: (...msg: any[]) => void): Proxy;
   /**
    * Invokes a server hub method with the given arguments.
    *
    * @param methodName The name of the server hub method.
    */
    invoke(methodName: string, ...args: any[]): Promise<any>;
}

export interface Options {
    qs?: string;
    logging?: boolean;
    useDefaultPath?: boolean;
}

export type SupportsKeepAliveHandler = () => boolean;
