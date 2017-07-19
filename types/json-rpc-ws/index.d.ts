// Type definitions for json-rpc-ws v4.0.0
// Project: https://www.npmjs.com/package/json-rpc-ws
// Definitions by: Nicolas Penin <https://github.com/npenin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="ws" />
import * as ws from 'ws'

export declare function createServer<TConnection extends Connection>(): Server<TConnection>;
export declare function createClient<TConnection extends Connection>(): Client<TConnection>;

export declare class Server<TConnection extends Connection> extends Base<TConnection>
{
    constructor();

    /**
     * Start the server
     */
    start(options?: ws.IServerOptions, callback?: () => void): void;
    server: ws.Server;
    /**
     * Stop the server
     */
    stop(): void;
}

export declare class Client<TConnection extends Connection> extends Base<TConnection>
{
    constructor(WebSocket: ws, browser?: boolean);

    /**
     * Connect to a json-rpc-ws server
     */
    connect(url: string, connected: () => void): void;

    /**
     * Test whether we have a connection or not
     */
    isConnected(): boolean;

    /**
     * Return the current connection (there can be only one)
     */
    getConnection(): TConnection;

    /**
     * Close the current connection
     */
    disconnect(callback: Function): void;
}
export declare class Base<TConnection extends Connection>
{
    /**
     * Add a handler function for a given method
     */
    expose<ParamType, ParamCallbackType>(eventName: string, handler: handler<TConnection, ParamType, ParamCallbackType>): void;
    /**
     * Send a method request through a specific connection
     */
    send<ParamType, ParamCallbackType>(eventName: string, params?: ParamType, callback?: replyCallback<ParamCallbackType>): void;
    send<ParamType>(eventName: string, params: ParamType): void;
    /**
     * Connected event handler
     */
    connected(socket: ws): void;
    /**
     * Disconnected event handler
     */
    disconnected(connection: TConnection): void;
    /**
     * Test if a handler exists for a given method
     */
    hasHandler(method: string): boolean;

    /**
     * Get handler for a given method
     */
    getHandler<ParamType, ParamCallbackType>(method: string): handler<TConnection, ParamType, ParamCallbackType>;
    /**
     * Get a connection by id
     */
    getConnection(id: string): Connection;
    /**
     * Shut down all existing connections
     *
     * @public
     */
    hangup(): void;
    // connections: { [id: string]: TConnection };
    // requestHandlers: { [id: string]: handler<TConnection, any, any>[] }
}

export declare interface Connection
{
    id: string;
    socket: ws;
    parent: Base<any>;
    responseHandlers: { [id: string]: replyCallback<any> };
    sendRaw<ParamType>(payload: Payload<ParamType>): void;
    processPayload<ParamType>(payload: Payload<ParamType>): void;
    sendResult(id: string, error?: any, result?: any): void;
    sendMethod<ParamType, ParamCallbackType>(method: string, params: ParamType, callback?: replyCallback<ParamCallbackType>): void
    sendError(error: any, id?: string, data?: any): void;
    close(error?: any): void;
    hangup(callback?: Function): void;
    message(data: any): void;
}

export declare interface Payload<ParamType>
{
    jsonrpc?: '2.0';
    id: string;
    method: string;
    params?: ParamType;
    result?: any;
    error?: any;
}


export declare type handler<TConnection extends Connection, ParamType, ParamCallbackType> = (this: TConnection, params: ParamType, reply: replyCallback<ParamCallbackType>) => void;
export declare type replyCallback<ParamType> = (error: any, params?: ParamType) => void;

/**
 * Returns a valid jsonrpc2.0 error reply
 *
 * @param {String} type - type of error
 * @param {Number|String|null} id - optional id for reply message
 * @param {Any} data - optional data attribute for error message
 * @returns {Object|null} mreply object that can be sent back
 */
export function Errors(type: string, id: string | number | null, data: any): Object | null;


