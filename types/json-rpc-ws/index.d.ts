// Type definitions for json-rpc-ws v4.0.0
// Project: https://www.npmjs.com/package/json-rpc-ws
// Definitions by: Nicolas Penin <https://github.com/npenin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as ws from '@types/ws'

export declare function createServer<TConnection extends Connection>(): Server<TConnection>;
export declare function createClient<TConnection extends Connection>(): Client<TConnection>;

/**
 * json-rpc-ws server
 *
 * @constructor
 * @extends {Base}
 * @public
 */
export declare interface Server<TConnection extends Connection> extends Base<TConnection>
{
    /**
     * Start the server
     *
     * @param {Object} options - optional options to pass to the ws server.
     * @param {function} callback - optional callback which is called once the server has started listening.
     * @public
     */
    start(options?: ws.IServerOptions, callback?: () => void): void;
    server: ws.Server;
    /**
     * Stop the server
     *
     * @todo param {function} callback - called after the server has stopped
     * @public
     */
    stop(): void;
}

/**
 * json-rpc-ws module
 *
 * @param {Object} WebSocket object to use
 * @param {Boolean} browser - true if WebSocket is from the browser
 * @returns {Object} Client - json-rpc-ws client
 */
export declare interface Client<TConnection extends Connection> extends Base<TConnection>
{
    /**
     * Connect to a json-rpc-ws server
     *
     * @param {String} address - url to connect to i.e. `ws://foo.com/`.
     * @param {function} callback - optional callback to call once socket is connected
     * @public
     */
    connect(url: string, connected: () => void): void;

    /**
     * Test whether we have a connection or not
     *
     * @returns {Boolean} whether or not we have a connection
     * @public
     */
    isConnected(): boolean;

    /**
     * Return the current connection (there can be only one)
     *
     * @returns {Object} current connection
     * @public
     */
    getConnection(): TConnection;

    /**
     * Close the current connection
     *
     * @param {function} callback - called when the connection has been closed
     * @public
     */
    disconnect(callback: Function): void;
}
export declare interface Base<TConnection extends Connection>
{
    /**
     * Add a handler function for a given method
     *
     * @param {String} method - name of the method to add handler for.
     * @param {function} handler - function to be passed params for given method.
     * @todo enforce handler w/ two-param callback
     * @public
     */
    expose<ParamType, ParamCallbackType>(eventName: string, handler: handler<TConnection, ParamType, ParamCallbackType>): void;
    /**
     * Send a method request through a specific connection
     *
     * @param {String} id - connection id to send the request through
     * @param {String} method - name of method
     * @param {Array} params - optional parameters for method
     * @param {replyCallback} callback - optional reply handler
     * @public
     */
    send<ParamType, ParamCallbackType>(eventName: string, params?: ParamType, callback?: replyCallback<ParamCallbackType>): void;
    send<ParamType>(eventName: string, params: ParamType): void;
    /**
     * Connected event handler
     *
     * @param {Object} socket - new socket connection
     * @private
     */
    connected(socket: ws): void;
    /**
     * Disconnected event handler
     *
     * @param {Object} connection - connection object that has been closed
     * @private
     */
    disconnected(connection: TConnection): void;
    /**
     * Test if a handler exists for a given method
     *
     * @param {String} method - name of method
     * @returns {Boolean} whether or not there are any handlers for the given method
     * @public
     */
    hasHandler(method: string): boolean;

    /**
     * Get handler for a given method
     *
     * @param {String} method - name of method
     * @returns {Array}  - handler for given method
     * @public
     */
    getHandler<ParamType, ParamCallbackType>(method: string): handler<TConnection, ParamType, ParamCallbackType>;
    /**
     * Get a connection by id
     *
     * @param {id} id - id of the connection to get
     * @returns {Connection} - Connection
     * @public
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
