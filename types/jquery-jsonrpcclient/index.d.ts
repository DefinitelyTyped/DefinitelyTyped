// Type definitions for jquery.jsonrpc 0.7.0
// Project: https://github.com/Textalk/jquery.jsonrpcclient.js
// Definitions by: Maksim Karelov <https://github.com/Ty3uK>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

interface JsonRpcClientOptions extends JQueryAjaxSettings {
    ajaxUrl: string;
    headers?: {[key:string]: any};
    socketUrl?: string;
    onmessage?: (ev: MessageEvent) => void;
    onopen?: (ev: Event) => void;
    onclose?: (ev: CloseEvent) => void;
    onerror?: (ev: Event) => void;
    getSockect?: (onmessageCb: () => void) => WebSocket;

    /**
     * Sets timeout for calls in milliseconds.
     * Works with WebSocket as well as AJAX.
     */
    timeout?: number;
}

interface JsonRpcClient {
    /**
    * @fn call
    * @memberof JsonRpcClient
    *
    * @param {string}       method     The method to run on JSON-RPC server.
    * @param {object|array} params     The params; an array or object.
    * @param {function}     successCb  A callback for successful request.
    * @param {function}     errorCb    A callback for error.
    *
    * @return {object} Returns the deferred object that $.ajax returns or {null} for websockets
    */
    call(method: string, params: Object | Array<any>, successCb: (result: any) => void, errorCb: (result: any) => void): JQueryDeferred<JQueryXHR>;
        
    /**
    * Notify sends a command to the server that won't need a response.  In http, there is probably
    * an empty response - that will be dropped, but in ws there should be no response at all.
    *
    * This is very similar to call, but has no id and no handling of callbacks.
    *
    * @fn notify
    * @memberof JsonRpcClient
    *
    * @param {string} method       The method to run on JSON-RPC server.
    * @param {object|array} params The params; an array or object.
    *
    * @return {object} Returns the deferred object that $.ajax returns or {null} for websockets
    */
    notify(method: string, params: Object | Array<any>): JQueryDeferred<JQueryXHR>;

    /**
    * Make a batch-call by using a callback.
    *
    * The callback will get an object "batch" as only argument.  On batch, you can call the methods
    * "call" and "notify" just as if it was a normal JsonRpcClient object, and all calls will be
    * sent as a batch call then the callback is done.
    *
    * @fn batch
    * @memberof JsonRpcClient
    *
    * @param {function} callback   This function will get a batch handler to run call and notify on.
    * @param {function} allDoneCb  A callback function to call after all results have been handled.
    * @param {function} errorCb    A callback function to call if there is an error from the server.
    *                    Note, that batch calls should always get an overall success, and the
    *                    only error
    */
    batch(callback: (batch: JsonRpcClient) => void, allDoneCb: (result: any) => void, errorCb: (error: any) => void): void;
}

interface JsonRpcClientFactory {
    /**
    * @fn new
    * @memberof JsonRpcClient
    *
    * @param {object} options An object stating the backends:
    *                ajaxUrl    A url (relative or absolute) to a http(s) backend.
    *                headers    An object that will be passed along to $.ajax in options.headers
    *                xhrFields  An object that will be passed along to $.ajax in options.xhrFields
    *                socketUrl  A url (relative of absolute) to a ws(s) backend.
    *                onmessage  A socket message handler for other messages (non-responses).
    *                onopen     A socket onopen handler. (Not used for custom getSocket.)
    *                onclose    A socket onclose handler. (Not used for custom getSocket.)
    *                onerror    A socket onerror handler. (Not used for custom getSocket.)
    *                getSocket  A function returning a WebSocket or null.
    *                           It must take an onmessage_cb and bind it to the onmessage event
    *                           (or chain it before/after some other onmessage handler).
    *                           Or, it could return null if no socket is available.
    *                           The returned instance must have readyState <= 1, and if less than 1,
    *                           react to onopen binding.
    *                timeout    (optional) A number of ms to wait before timing out and failing a
    *                           call. If specified a setTimeout will be used to keep track of calls
    *                           made through a websocket.
    */
    new (options?: JsonRpcClientOptions): JsonRpcClient;
}

interface JQueryStatic {
    JsonRpcClient: JsonRpcClientFactory;
}
