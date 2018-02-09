import * as stream from "stream";
import * as url from "url";
import * as http from "http";
import * as Podium from "podium";
import {ApplicationState, PluginsStates, RequestAuth, RequestEvents, RequestInfo, RequestRoute, ResponseObject, ResponseValue, Server, Util} from "hapi";

/**
 * An object containing the values of params, query, and payload before any validation modifications made. Only set when input validation is performed.
 * For context [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-requestorig)
 */
export interface RequestOrig {
    params: object;
    query: object;
    payload: object;
}

export interface RequestLog {
    request: string;
    timestamp: number;
    tags: string[];
    data: string | object;
    channel: string;
}

/**
 * The request object is created internally for each incoming request. It is not the same object received from the node
 * HTTP server callback (which is available via [request.raw.req](https://github.com/hapijs/hapi/blob/master/API.md#request.raw)). The request properties change throughout
 * the request [lifecycle](https://github.com/hapijs/hapi/blob/master/API.md#request-lifecycle).
 */
export interface Request extends Podium {

    /**
     * Application-specific state. Provides a safe place to store application data without potential conflicts with the framework. Should not be used by plugins which should use plugins[name].
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-requestapp)
     */
    app: ApplicationState;

    /**
     * Authentication information:
     * * artifacts - an artifact object received from the authentication strategy and used in authentication-related actions.
     * * credentials - the credential object received during the authentication process. The presence of an object does not mean successful authentication.
     * * error - the authentication error is failed and mode set to 'try'.
     * * isAuthenticated - true if the request has been successfully authenticated, otherwise false.
     * * isAuthorized - true is the request has been successfully authorized against the route authentication access configuration. If the route has not access rules defined or if the request failed authorization, set to false.
     * * mode - the route authentication mode.
     * * strategy - the name of the strategy used.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-requestauth)
     */
    readonly auth: RequestAuth;

    /**
     * Access: read only and the public podium interface.
     * The request.events supports the following events:
     * * 'peek' - emitted for each chunk of payload data read from the client connection. The event method signature is function(chunk, encoding).
     * * 'finish' - emitted when the request payload finished reading. The event method signature is function ().
     * * 'disconnect' - emitted when a request errors or aborts unexpectedly.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-requestevents)
     */
    events: RequestEvents;

    /**
     * The raw request headers (references request.raw.req.headers).
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-requestheaders)
     */
    readonly headers: Util.Dictionary<string>;

    /**
     * Request information:
     * * acceptEncoding - the request preferred encoding.
     * * cors - if CORS is enabled for the route, contains the following:
     * * isOriginMatch - true if the request 'Origin' header matches the configured CORS restrictions. Set to false if no 'Origin' header is found or if it does not match. Note that this is only available after the 'onRequest' extension point as CORS is configured per-route and no routing decisions are made at that point in the request lifecycle.
     * * host - content of the HTTP 'Host' header (e.g. 'example.com:8080').
     * * hostname - the hostname part of the 'Host' header (e.g. 'example.com').
     * * id - a unique request identifier (using the format '{now}:{connection.info.id}:{5 digits counter}').
     * * received - request reception timestamp.
     * * referrer - content of the HTTP 'Referrer' (or 'Referer') header.
     * * remoteAddress - remote client IP address.
     * * remotePort - remote client port.
     * * responded - request response timestamp (0 is not responded yet).
     * Note that the request.info object is not meant to be modified.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-requestinfo)
     */
    readonly info: RequestInfo;

    /**
     * An array containing the logged request events.
     * Note that this array will be empty if route log.collect is set to false.
     */
    readonly logs: RequestLog[];

    /**
     * The request method in lower case (e.g. 'get', 'post').
     */
    readonly method: Util.HTTP_METHODS_PARTIAL_LOWERCASE;

    /**
     * The parsed content-type header. Only available when payload parsing enabled and no payload error occurred.
     */
    readonly mime: string;

    /**
     * An object containing the values of params, query, and payload before any validation modifications made. Only set when input validation is performed.
     */
    readonly orig: RequestOrig;

    /**
     * An object where each key is a path parameter name with matching value as described in [Path parameters](https://github.com/hapijs/hapi/blob/master/API.md#path-parameters).
     */
    readonly params: Util.Dictionary<string>;

    /**
     * An array containing all the path params values in the order they appeared in the path.
     */
    readonly paramsArray: string[];

    /**
     * The request URI's pathname component.
     */
    readonly path: string;

    /**
     * The request payload based on the route payload.output and payload.parse settings.
     * TODO check this typing and add references / links.
     */
    readonly payload: stream.Readable | Buffer | string | object;

    /**
     * Plugin-specific state. Provides a place to store and pass request-level plugin data. The plugins is an object where each key is a plugin name and the value is the state.
     */
    plugins: PluginsStates;

    /**
     * An object where each key is the name assigned by a route pre-handler methods function. The values are the raw values provided to the continuation function as argument. For the wrapped response object, use responses.
     */
    readonly pre: Util.Dictionary<object>;

    /**
     * Access: read / write (see limitations below).
     * The response object when set. The object can be modified but must not be assigned another object. To replace the response with another from within an extension point, use reply(response) to override with a different response. Contains null when no response has been set (e.g. when a request terminates prematurely when the client disconnects).
     */
    response: ResponseObject | null;

    /**
     * Same as pre but represented as the response object created by the pre method.
     */
    readonly preResponses: Util.Dictionary<object>;

    /**
     * By default the object outputted from node's URL parse() method. Might also be set indirectly via request.setUrl in which case it may be a string (if url is set to an object with the query attribute as an unparsed string).
     */
    readonly query: any;

    /**
     * An object containing the Node HTTP server objects. Direct interaction with these raw objects is not recommended.
     * * req - the node request object.
     * * res - the node response object.
     */
    readonly raw: {
        req: http.IncomingMessage;
        res: http.ServerResponse;
    };

    /**
     * The request route information object and method
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-requestroute)
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-requestrouteauthaccessrequest)
     */
    readonly route: RequestRoute;

    /**
     * Access: read only and the public server interface.
     * The server object.
     */
    server: Server;

    /**
     * An object containing parsed HTTP state information (cookies) where each key is the cookie name and value is the matching cookie content after processing using any registered cookie definition.
     */
    readonly state: Util.Dictionary<any>;

    /**
     * The parsed request URI.
     */
    readonly url: url.Url;

    /**
     * Returns a response which you can pass into the reply interface where:
     * @param source - the value to set as the source of the reply interface, optional.
     * @param options - options for the method, optional.
     * @return ResponseObject
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-requestgenerateresponsesource-options)
     */
    generateResponse(source: string | object | null, options?: {variety?: string; prepare?: (response: ResponseObject) => Promise<ResponseObject>; marshal?: (response: ResponseObject) => Promise<ResponseValue>; close?: (response: ResponseObject) => {}; }): ResponseObject;

    /**
     * Logs request-specific events. When called, the server emits a 'request' event which can be used by other listeners or plugins. The arguments are:
     * @param tags - a string or an array of strings (e.g. ['error', 'database', 'read']) used to identify the event. Tags are used instead of log levels and provide a much more expressive mechanism for describing and filtering events.
     * @param data - (optional) an message string or object with the application data being logged. If data is a function, the function signature is function() and it called once to generate (return value) the actual data emitted to the listeners.
     * Any logs generated by the server internally will be emitted only on the 'request-internal' channel and will include the event.internal flag set to true.
     * @return void
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-requestlogtags-data)
     */
    log(tags: string | string[], data?: string | object | (() => string | object)): void;

    /**
     * Changes the request method before the router begins processing the request where:
     * @param method - is the request HTTP method (e.g. 'GET').
     * @return void
     * Can only be called from an 'onRequest' extension method.
     * [See docs](https://hapijs.com/api/17.0.1#-requestsetmethodmethod)
     */
    setMethod(method: Util.HTTP_METHODS_PARTIAL): void;

    /**
     * Changes the request URI before the router begins processing the request where:
     * Can only be called from an 'onRequest' extension method.
     * @param url - the new request URI. If url is a string, it is parsed with node's URL parse() method with parseQueryString set to true. url can also be set to an object compatible with node's URL parse() method output.
     * @param stripTrailingSlash - if true, strip the trailing slash from the path. Defaults to false.
     * @return void
     * [See docs](https://hapijs.com/api/17.0.1#-requestseturlurl-striptrailingslash)
     */
    setUrl(url: string | url.URL, stripTrailingSlash?: boolean): void;

}
