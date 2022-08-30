// Type definitions for hapi 17.8
// Project: https://github.com/hapijs/hapi
// Definitions by: Rafael Souza Fijalkowski <https://github.com/rafaelsouzaf>
//                 Justin Simms <https://github.com/jhsimms>
//                 Simon Schick <https://github.com/SimonSchick>
//                 Rodrigo Saboya <https://github.com/saboya>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/* + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + +
 +                                                                           +
 +                                                                           +
 +                                                                           +
 +                      WARNING: BACKWARDS INCOMPATIBLE                      +
 +                                                                           +
 +                                                                           +
 +                                                                           +
 + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + */

/// <reference types='node' />

import * as Boom from 'boom';
import * as http from 'http';
import * as https from 'https';
import * as Shot from 'shot';
import * as stream from 'stream';
import * as url from 'url';
import * as zlib from 'zlib';

import { MimosOptions } from 'mimos';
import { SealOptions, SealOptionsSub } from 'iron';
import { ValidationOptions, SchemaMap, Schema } from 'joi';
import Podium = require('podium');
import { PolicyOptionVariants, EnginePrototypeOrObject, PolicyOptions, EnginePrototype, Policy } from 'catbox';

/* + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + +
 +                                                                           +
 +                                                                           +
 +                                                                           +
 +                      Plugin                                               +
 +                                                                           +
 +                                                                           +
 +                                                                           +
 + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + */

/**
 * one of
 * a single plugin name string.
 * an array of plugin name strings.
 * an object where each key is a plugin name and each matching value is a
 * {@link https://www.npmjs.com/package/semver version range string} which must match the registered
 *  plugin version.
 */
export type Dependencies = string | string[] | {
    [key: string]: string;
};

/**
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverregistrations)
 */

/* tslint:disable-next-line:no-empty-interface */
export interface PluginsListRegistered {
}

/**
 * An object of the currently registered plugins where each key is a registered plugin name and the value is an
 * object containing:
 * * version - the plugin version.
 * * name - the plugin name.
 * * options - (optional) options passed to the plugin during registration.
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverregistrations)
 */
export interface PluginRegistered {
    /**
     * the plugin version.
     */
    version: string;

    /**
     * the plugin name.
     */
    name: string;

    /**
     * options used to register the plugin.
     */
    options: object;
}

/* tslint:disable-next-line:no-empty-interface */
export interface PluginsStates {
}

/* tslint:disable-next-line:no-empty-interface */
export interface PluginSpecificConfiguration {
}

export interface PluginNameVersion {
    /**
     * (required) the plugin name string. The name is used as a unique key. Published plugins (e.g. published in the npm
     * registry) should use the same name as the name field in their 'package.json' file. Names must be
     * unique within each application.
     */
    name: string;

    /**
     * optional plugin version. The version is only used informatively to enable other plugins to find out the versions loaded. The version should be the same as the one specified in the plugin's
     * 'package.json' file.
     */
    version?: string | undefined;
}

export interface PluginPackage {
    /**
     * Alternatively, the name and version can be included via the pkg property containing the 'package.json' file for the module which already has the name and version included
     */
    pkg: any;
}

/**
 * Plugins provide a way to organize application code by splitting the server logic into smaller components. Each
 * plugin can manipulate the server through the standard server interface, but with the added ability to sandbox
 * certain properties. For example, setting a file path in one plugin doesn't affect the file path set
 * in another plugin.
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#plugins)
 *
 * The type T is the type of the plugin options.
 */
export interface PluginBase<T> {
    /**
     * (required) the registration function with the signature async function(server, options) where:
     * * server - the server object with a plugin-specific server.realm.
     * * options - any options passed to the plugin during registration via server.register().
     */
    register: (server: Server, options: T) => void | Promise<void>;

    /** (optional) if true, allows the plugin to be registered multiple times with the same server. Defaults to false. */
    multiple?: boolean | undefined;

    /** (optional) a string or an array of strings indicating a plugin dependency. Same as setting dependencies via server.dependency(). */
    dependencies?: Dependencies | undefined;

    /**
     * Allows defining semver requirements for node and hapi.
     * @default Allows all.
     */
    requirements?: {
        node?: string | undefined;
        hapi?: string | undefined;
    } | undefined;

    /** once - (optional) if true, will only register the plugin once per server. If set, overrides the once option passed to server.register(). Defaults to no override. */
    once?: boolean | undefined;
}

export type Plugin<T> = PluginBase<T> & (PluginNameVersion | PluginPackage);

/* + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + +
 +                                                                           +
 +                                                                           +
 +                                                                           +
 +                      Request                                              +
 +                                                                           +
 +                                                                           +
 +                                                                           +
 + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + */

/**
 * User extensible types user credentials.
 */
// tslint:disable-next-line:no-empty-interface
export interface UserCredentials {
}

/**
 * User extensible types app credentials.
 */
// tslint:disable-next-line:no-empty-interface
export interface AppCredentials {
}

/**
 * User-extensible type for request.auth credentials.
 */
export interface AuthCredentials {
    /**
     * The application scopes to be granted.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsauthaccessscope)
     */
    scope?: string[] | undefined;
    /**
     * If set, will only work with routes that set `access.entity` to `user`.
     */
    user?: UserCredentials | undefined;

    /**
     * If set, will only work with routes that set `access.entity` to `app`.
     */
    app?: AppCredentials | undefined;
}

/**
 * Authentication information:
 * * artifacts - an artifact object received from the authentication strategy and used in authentication-related actions.
 * * credentials - the credential object received during the authentication process. The presence of an object does not mean successful authentication.
 * * error - the authentication error is failed and mode set to 'try'.
 * * isAuthenticated - true if the request has been successfully authenticated, otherwise false.
 * * isAuthorized - true is the request has been successfully authorized against the route authentication access configuration. If the route has not access rules defined or if the request failed
 * authorization, set to false.
 * * mode - the route authentication mode.
 * * strategy - the name of the strategy used.
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-requestauth)
 */
export interface RequestAuth {
    /** an artifact object received from the authentication strategy and used in authentication-related actions. */
    artifacts: object;
    /** the credential object received during the authentication process. The presence of an object does not mean successful authentication. */
    credentials: AuthCredentials;
    /** the authentication error is failed and mode set to 'try'. */
    error: Error;
    /** true if the request has been successfully authenticated, otherwise false. */
    isAuthenticated: boolean;
    /**
     * true is the request has been successfully authorized against the route authentication access configuration. If the route has not access rules defined or if the request failed authorization,
     * set to false.
     */
    isAuthorized: boolean;
    /** the route authentication mode. */
    mode: string;
    /** the name of the strategy used. */
    strategy: string;
}

/**
 * 'peek' - emitted for each chunk of payload data read from the client connection. The event method signature is function(chunk, encoding).
 * 'finish' - emitted when the request payload finished reading. The event method signature is function ().
 * 'disconnect' - emitted when a request errors or aborts unexpectedly.
 * For context [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-requestevents)
 */
export type RequestEventType = 'peek' | 'finish' | 'disconnect';

/**
 * Access: read only and the public podium interface.
 * The request.events supports the following events:
 * * 'peek' - emitted for each chunk of payload data read from the client connection. The event method signature is function(chunk, encoding).
 * * 'finish' - emitted when the request payload finished reading. The event method signature is function ().
 * * 'disconnect' - emitted when a request errors or aborts unexpectedly.
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-requestevents)
 */
export interface RequestEvents extends Podium {
    /**
     * Access: read only and the public podium interface.
     * The request.events supports the following events:
     * * 'peek' - emitted for each chunk of payload data read from the client connection. The event method signature is function(chunk, encoding).
     * * 'finish' - emitted when the request payload finished reading. The event method signature is function ().
     * * 'disconnect' - emitted when a request errors or aborts unexpectedly.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-requestevents)
     */
    on(criteria: 'peek', listener: PeekListener): void;

    on(criteria: 'finish' | 'disconnect', listener: (data: undefined) => void): void;

    /**
     * Access: read only and the public podium interface.
     * The request.events supports the following events:
     * * 'peek' - emitted for each chunk of payload data read from the client connection. The event method signature is function(chunk, encoding).
     * * 'finish' - emitted when the request payload finished reading. The event method signature is function ().
     * * 'disconnect' - emitted when a request errors or aborts unexpectedly.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-requestevents)
     */
    once(criteria: 'peek', listener: PeekListener): void;

    once(criteria: 'finish' | 'disconnect', listener: (data: undefined) => void): void;
}

/**
 * Request information:
 * * acceptEncoding - the request preferred encoding.
 * * cors - if CORS is enabled for the route, contains the following:
 * * isOriginMatch - true if the request 'Origin' header matches the configured CORS restrictions. Set to false if no 'Origin' header is found or if it does not match. Note that this is only
 * available after the 'onRequest' extension point as CORS is configured per-route and no routing decisions are made at that point in the request lifecycle.
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
export interface RequestInfo {
    /** the request preferred encoding. */
    acceptEncoding: string;
    /** if CORS is enabled for the route, contains the following: */
    cors: {
        /**
         * true if the request 'Origin' header matches the configured CORS restrictions. Set to false if no 'Origin' header is found or if it does not match. Note that this is only available after
         * the 'onRequest' extension point as CORS is configured per-route and no routing decisions are made at that point in the request lifecycle.
         */
        isOriginMatch?: boolean | undefined;
    };
    /** content of the HTTP 'Host' header (e.g. 'example.com:8080'). */
    host: string;
    /** the hostname part of the 'Host' header (e.g. 'example.com'). */
    hostname: string;
    /** a unique request identifier (using the format '{now}:{connection.info.id}:{5 digits counter}') */
    id: string;
    /** request reception timestamp. */
    received: number;
    /** content of the HTTP 'Referrer' (or 'Referer') header. */
    referrer: string;
    /** remote client IP address. */
    remoteAddress: string;
    /** remote client port. */
    remotePort: string;
    /** request response timestamp (0 is not responded yet). */
    responded: number;
}

/**
 * The request route information object, where:
 * * method - the route HTTP method.
 * * path - the route path.
 * * vhost - the route vhost option if configured.
 * * realm - the active realm associated with the route.
 * * settings - the route options object with all defaults applied.
 * * fingerprint - the route internal normalized string representing the normalized path.
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-requestroute)
 */
export interface RequestRoute {
    /** the route HTTP method. */
    method: Util.HTTP_METHODS_PARTIAL;

    /** the route path. */
    path: string;

    /** the route vhost option if configured. */
    vhost?: string | string[] | undefined;

    /** the active realm associated with the route. */
    realm: ServerRealm;

    /** the route options object with all defaults applied. */
    settings: RouteOptions;

    /** the route internal normalized string representing the normalized path. */
    fingerprint: string;

    auth: {
        /**
         * Validates a request against the route's authentication access configuration, where:
         * @param request - the request object.
         * @return Return value: true if the request would have passed the route's access requirements.
         * Note that the route's authentication mode and strategies are ignored. The only match is made between the request.auth.credentials scope and entity information and the route access
         *     configuration. If the route uses dynamic scopes, the scopes are constructed against the request.query, request.params, request.payload, and request.auth.credentials which may or may
         *     not match between the route and the request's route. If this method is called using a request that has not been authenticated (yet or not at all), it will return false if the route
         *     requires any authentication.
         * [See docs](https://hapijs.com/api/17.0.1#-requestrouteauthaccessrequest)
         */
        access(request: Request): boolean;
    };
}

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

export interface RequestQuery {
    [key: string]: string | string[];
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
     * * isAuthorized - true is the request has been successfully authorized against the route authentication access configuration. If the route has not access rules defined or if the request failed
     * authorization, set to false.
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
     * * isOriginMatch - true if the request 'Origin' header matches the configured CORS restrictions. Set to false if no 'Origin' header is found or if it does not match. Note that this is only
     * available after the 'onRequest' extension point as CORS is configured per-route and no routing decisions are made at that point in the request lifecycle.
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
     * An object where each key is the name assigned by a route pre-handler methods function. The values are the raw values provided to the continuation function as argument. For the wrapped response
     * object, use responses.
     */
    readonly pre: Util.Dictionary<any>;

    /**
     * Access: read / write (see limitations below).
     * The response object when set. The object can be modified but must not be assigned another object. To replace the response with another from within an extension point, use reply(response) to
     * override with a different response. Contains null when no response has been set (e.g. when a request terminates prematurely when the client disconnects).
     */
    response: ResponseObject | Boom | null;

    /**
     * Same as pre but represented as the response object created by the pre method.
     */
    readonly preResponses: Util.Dictionary<any>;

    /**
     * By default the object outputted from node's URL parse() method. Might also be set indirectly via request.setUrl in which case it may be a string (if url is set to an object with the query
     * attribute as an unparsed string).
     */
    readonly query: RequestQuery | string;

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
     * Returns `true` when the request is active and processing should continue and `false` when the
     *  request terminated early or completed its lifecycle. Useful when request processing is a
     * resource-intensive operation and should be terminated early if the request is no longer active
     * (e.g. client disconnected or aborted early).
     */
    active(): boolean;

    /**
     * Returns a response which you can pass into the reply interface where:
     * @param source - the value to set as the source of the reply interface, optional.
     * @param options - options for the method, optional.
     * @return ResponseObject
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-requestgenerateresponsesource-options)
     */
    /* tslint:disable-next-line:max-line-length */
    generateResponse(source: string | object | null, options?: { variety?: string | undefined; prepare?: ((response: ResponseObject) => Promise<ResponseObject>) | undefined; marshal?: ((response: ResponseObject) => Promise<ResponseValue>) | undefined; close?: ((response: ResponseObject) => void) | undefined; }): ResponseObject;

    /**
     * Logs request-specific events. When called, the server emits a 'request' event which can be used by other listeners or plugins. The arguments are:
     * @param tags - a string or an array of strings (e.g. ['error', 'database', 'read']) used to identify the event. Tags are used instead of log levels and provide a much more expressive mechanism
     *     for describing and filtering events.
     * @param data - (optional) an message string or object with the application data being logged. If data is a function, the function signature is function() and it called once to generate (return
     *     value) the actual data emitted to the listeners. Any logs generated by the server internally will be emitted only on the 'request-internal' channel and will include the event.internal flag
     *     set to true.
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
     * @param url - the new request URI. If url is a string, it is parsed with node's URL parse() method with parseQueryString set to true. url can also be set to an object compatible with node's URL
     *     parse() method output.
     * @param stripTrailingSlash - if true, strip the trailing slash from the path. Defaults to false.
     * @return void
     * [See docs](https://hapijs.com/api/17.0.1#-requestseturlurl-striptrailingslash)
     */
    setUrl(url: string | url.Url, stripTrailingSlash?: boolean): void;
}

/* + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + +
 +                                                                           +
 +                                                                           +
 +                                                                           +
 +                      Response                                             +
 +                                                                           +
 +                                                                           +
 +                                                                           +
 + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + */

/**
 * Access: read only and the public podium interface.
 * The response.events object supports the following events:
 * * 'peek' - emitted for each chunk of data written back to the client connection. The event method signature is function(chunk, encoding).
 * * 'finish' - emitted when the response finished writing but before the client response connection is ended. The event method signature is function ().
 * [See docs](https://hapijs.com/api/17.0.1#-responseevents)
 */
export interface ResponseEvents extends Podium {
    /**
     * 'peek' - emitted for each chunk of data written back to the client connection. The event method signature is function(chunk, encoding).
     * 'finish' - emitted when the response finished writing but before the client response connection is ended. The event method signature is function ().
     */
    on(criteria: 'peek', listener: PeekListener): void;

    on(criteria: 'finish', listener: (data: undefined) => void): void;

    /**
     * 'peek' - emitted for each chunk of data written back to the client connection. The event method signature is function(chunk, encoding).
     * 'finish' - emitted when the response finished writing but before the client response connection is ended. The event method signature is function ().
     */
    once(criteria: 'peek', listener: PeekListener): void;

    once(criteria: 'finish', listener: (data: undefined) => void): void;
}

/**
 * Object where:
 *  * append - if true, the value is appended to any existing header value using separator. Defaults to false.
 *  * separator - string used as separator when appending to an existing value. Defaults to ','.
 *  * override - if false, the header value is not set if an existing value present. Defaults to true.
 *  * duplicate - if false, the header value is not modified if the provided value is already included. Does not apply when append is false or if the name is 'set-cookie'. Defaults to true.
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responseheadername-value-options)
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#response-object)
 */
export interface ResponseObjectHeaderOptions {
    append?: boolean | undefined;
    separator?: string | undefined;
    override?: boolean | undefined;
    duplicate?: boolean | undefined;
}

/**
 * The response object contains the request response value along with various HTTP headers and flags. When a lifecycle
 * method returns a value, the value is wrapped in a response object along with some default flags (e.g. 200 status
 * code). In order to customize a response before it is returned, the h.response() method is provided.
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#response-object)
 * TODO, check extending from Podium is correct.  Extending because of "The response object supports the following events" [See docs](https://hapijs.com/api/17.0.1#-responseevents)
 */
export interface ResponseObject extends Podium {
    /**
     * Default value: {}.
     * Application-specific state. Provides a safe place to store application data without potential conflicts with the framework. Should not be used by plugins which should use plugins[name].
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responseapp)
     */
    app: ApplicationState;

    /**
     * Access: read only and the public podium interface.
     * The response.events object supports the following events:
     * * 'peek' - emitted for each chunk of data written back to the client connection. The event method signature is function(chunk, encoding).
     * * 'finish' - emitted when the response finished writing but before the client response connection is ended. The event method signature is function ().
     * [See docs](https://hapijs.com/api/17.0.1#-responseevents)
     */
    readonly events: ResponseEvents;

    /**
     * Default value: {}.
     * An object containing the response headers where each key is a header field name and the value is the string header value or array of string.
     * Note that this is an incomplete list of headers to be included with the response. Additional headers will be added once the response is prepared for transmission.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responseheaders)
     */
    readonly headers: Util.Dictionary<string | string[]>;

    /**
     * Default value: {}.
     * Plugin-specific state. Provides a place to store and pass request-level plugin data. plugins is an object where each key is a plugin name and the value is the state.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responseplugins)
     */
    plugins: PluginsStates;

    /**
     * Object containing the response handling flags.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responsesettings)
     */
    readonly settings: ResponseSettings;

    /**
     * The raw value returned by the lifecycle method.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responsesource)
     */
    readonly source: Lifecycle.ReturnValue;

    /**
     * Default value: 200.
     * The HTTP response status code.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responsestatuscode)
     */
    readonly statusCode: number;

    /**
     * A string indicating the type of source with available values:
     * * 'plain' - a plain response such as string, number, null, or simple object.
     * * 'buffer' - a Buffer.
     * * 'stream' - a Stream.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responsevariety)
     */
    readonly variety: 'plain' | 'buffer' | 'stream';

    /**
     * Sets the HTTP 'Content-Length' header (to avoid chunked transfer encoding) where:
     * @param length - the header value. Must match the actual payload size.
     * @return Return value: the current response object.
     * [See docs](https://hapijs.com/api/17.0.1#-responsebyteslength)
     */
    bytes(length: number): ResponseObject;

    /**
     * Sets the 'Content-Type' HTTP header 'charset' property where:
     * @param charset - the charset property value.
     * @return Return value: the current response object.
     * [See docs](https://hapijs.com/api/17.0.1#-responsecharsetcharset)
     */
    charset(charset: string): ResponseObject;

    /**
     * Sets the HTTP status code where:
     * @param statusCode - the HTTP status code (e.g. 200).
     * @return Return value: the current response object.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responsecodestatuscode)
     */
    code(statusCode: number): ResponseObject;

    /**
     * Sets the HTTP status message where:
     * @param httpMessage - the HTTP status message (e.g. 'Ok' for status code 200).
     * @return Return value: the current response object.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responsemessagehttpmessage)
     */
    message(httpMessage: string): ResponseObject;

    /**
     * Sets the HTTP status code to Created (201) and the HTTP 'Location' header where:
     * @param uri - an absolute or relative URI used as the 'Location' header value.
     * @return Return value: the current response object.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responsecreateduri)
     */
    created(uri: string): ResponseObject;

    /**
     * Sets the string encoding scheme used to serial data into the HTTP payload where:
     * @param encoding  the encoding property value (see node Buffer encoding [See docs](https://nodejs.org/api/buffer.html#buffer_buffers_and_character_encodings)).
     *  * 'ascii' - for 7-bit ASCII data only. This encoding is fast and will strip the high bit if set.
     *  * 'utf8' - Multibyte encoded Unicode characters. Many web pages and other document formats use UTF-8.
     *  * 'utf16le' - 2 or 4 bytes, little-endian encoded Unicode characters. Surrogate pairs (U+10000 to U+10FFFF) are supported.
     *  * 'ucs2' - Alias of 'utf16le'.
     *  * 'base64' - Base64 encoding. When creating a Buffer from a string, this encoding will also correctly accept "URL and Filename Safe Alphabet" as specified in RFC4648, Section 5.
     *  * 'latin1' - A way of encoding the Buffer into a one-byte encoded string (as defined by the IANA in RFC1345, page 63, to be the Latin-1 supplement block and C0/C1 control codes).
     *  * 'binary' - Alias for 'latin1'.
     *  * 'hex' - Encode each byte as two hexadecimal characters.
     * @return Return value: the current response object.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responseencodingencoding)
     */
    encoding(encoding: 'ascii' | 'utf8' | 'utf16le' | 'ucs2' | 'base64' | 'latin1' | 'binary' | 'hex'): ResponseObject;

    /**
     * Sets the representation entity tag where:
     * @param tag - the entity tag string without the double-quote.
     * @param options - (optional) settings where:
     *  * weak - if true, the tag will be prefixed with the 'W/' weak signifier. Weak tags will fail to match identical tags for the purpose of determining 304 response status. Defaults to false.
     *  * vary - if true and content encoding is set or applied to the response (e.g 'gzip' or 'deflate'), the encoding name will be automatically added to the tag at transmission time (separated by
     *     a '-' character). Ignored when weak is true. Defaults to true.
     * @return Return value: the current response object.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responseetagtag-options)
     */
    etag(tag: string, options?: {weak: boolean, vary: boolean}): ResponseObject;

    /**
     * Sets an HTTP header where:
     * @param name - the header name.
     * @param value - the header value.
     * @param options - (optional) object where:
     *  * append - if true, the value is appended to any existing header value using separator. Defaults to false.
     *  * separator - string used as separator when appending to an existing value. Defaults to ','.
     *  * override - if false, the header value is not set if an existing value present. Defaults to true.
     *  * duplicate - if false, the header value is not modified if the provided value is already included. Does not apply when append is false or if the name is 'set-cookie'. Defaults to true.
     *  @return Return value: the current response object.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responseheadername-value-options)
     */
    header(name: string, value: string, options?: ResponseObjectHeaderOptions): ResponseObject;

    /**
     * Sets the HTTP 'Location' header where:
     * @param uri - an absolute or relative URI used as the 'Location' header value.
     * @return Return value: the current response object.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responselocationuri)
     */
    location(uri: string): ResponseObject;

    /**
     * Sets an HTTP redirection response (302) and decorates the response with additional methods, where:
     * @param uri - an absolute or relative URI used to redirect the client to another resource.
     * @return Return value: the current response object.
     * Decorates the response object with the response.temporary(), response.permanent(), and response.rewritable() methods to easily change the default redirection code (302).
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responseredirecturi)
     */
    redirect(uri: string): ResponseObject;

    /**
     * Sets the JSON.stringify() replacer argument where:
     * @param method - the replacer function or array. Defaults to none.
     * @return Return value: the current response object.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responsereplacermethod)
     */
    replacer(method: Json.StringifyReplacer): ResponseObject;

    /**
     * Sets the JSON.stringify() space argument where:
     * @param count - the number of spaces to indent nested object keys. Defaults to no indentation.
     * @return Return value: the current response object.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responsespacescount)
     */
    spaces(count: number): ResponseObject;

    /**
     * Sets an HTTP cookie where:
     * @param name - the cookie name.
     * @param value - the cookie value. If no options.encoding is defined, must be a string. See server.state() for supported encoding values.
     * @param options - (optional) configuration. If the state was previously registered with the server using server.state(), the specified keys in options are merged with the default server
     *     definition.
     * @return Return value: the current response object.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responsestatename-value-options)
     */
    state(name: string, value: object | string, options?: ServerStateCookieOptions): ResponseObject;

    /**
     * Sets a string suffix when the response is process via JSON.stringify() where:
     * @param suffix - the string suffix.
     * @return Return value: the current response object.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responsesuffixsuffix)
     */
    suffix(suffix: string): ResponseObject;

    /**
     * Overrides the default route cache expiration rule for this response instance where:
     * @param msec - the time-to-live value in milliseconds.
     * @return Return value: the current response object.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responsettlmsec)
     */
    ttl(msec: number): ResponseObject;

    /**
     * Sets the HTTP 'Content-Type' header where:
     * @param mimeType - is the mime type.
     * @return Return value: the current response object.
     * Should only be used to override the built-in default for each response type.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responsetypemimetype)
     */
    type(mimeType: string): ResponseObject;

    /**
     * Clears the HTTP cookie by setting an expired value where:
     * @param name - the cookie name.
     * @param options - (optional) configuration for expiring cookie. If the state was previously registered with the server using server.state(), the specified options are merged with the server
     *     definition.
     * @return Return value: the current response object.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responseunstatename-options)
     */
    unstate(name: string, options?: ServerStateCookieOptions): ResponseObject;

    /**
     * Adds the provided header to the list of inputs affected the response generation via the HTTP 'Vary' header where:
     * @param header - the HTTP request header name.
     * @return Return value: the current response object.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responsevaryheader)
     */
    vary(header: string): ResponseObject;

    /**
     * Marks the response object as a takeover response.
     * @return Return value: the current response object.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responsetakeover)
     */
    takeover(): ResponseObject;

    /**
     * Sets the status code to 302 or 307 (based on the response.rewritable() setting) where:
     * @param isTemporary - if false, sets status to permanent. Defaults to true.
     * @return Return value: the current response object.
     * Only available after calling the response.redirect() method.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responsetemporaryistemporary)
     */
    temporary(isTemporary: boolean): ResponseObject;

    /**
     * Sets the status code to 301 or 308 (based on the response.rewritable() setting) where:
     * @param isPermanent - if false, sets status to temporary. Defaults to true.
     * @return Return value: the current response object.
     * Only available after calling the response.redirect() method.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responsepermanentispermanent)
     */
    permanent(isPermanent: boolean): ResponseObject;

    /**
     * Sets the status code to 301/302 for rewritable (allows changing the request method from 'POST' to 'GET') or 307/308 for non-rewritable (does not allow changing the request method from 'POST'
     * to 'GET'). Exact code based on the response.temporary() or response.permanent() setting. Arguments:
     * @param isRewritable - if false, sets to non-rewritable. Defaults to true.
     * @return Return value: the current response object.
     * Only available after calling the response.redirect() method.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responserewritableisrewritable)
     */
    rewritable(isRewritable: boolean): ResponseObject;
}

/**
 * Object containing the response handling flags.
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responsesettings)
 */
export interface ResponseSettings {
    /**
     * Defaults value: true.
     * If true and source is a Stream, copies the statusCode and headers properties of the stream object to the outbound response.
     */
    readonly passThrough: boolean;

    /**
     * Default value: null (use route defaults).
     * Override the route json options used when source value requires stringification.
     */
    readonly stringify: Json.StringifyArguments;

    /**
     * Default value: null (use route defaults).
     * If set, overrides the route cache with an expiration value in milliseconds.
     */
    readonly ttl: number;

    /**
     * Default value: false.
     * If true, a suffix will be automatically added to the 'ETag' header at transmission time (separated by a '-' character) when the HTTP 'Vary' header is present.
     */
    varyEtag: boolean;
}

/**
 * See more about Lifecycle
 * https://github.com/hapijs/hapi/blob/master/API.md#request-lifecycle
 *
 */

export type ResponseValue = string | object;

export interface AuthenticationData {
    credentials: AuthCredentials;
    artifacts?: object | undefined;
}

export interface Auth {
    readonly isAuth: true;
    readonly error?: Error | null | undefined;
    readonly data?: AuthenticationData | undefined;
}

/**
 * The response toolkit is a collection of properties and utilities passed to every [lifecycle method](https://github.com/hapijs/hapi/blob/master/API.md#lifecycle-methods)
 * It is somewhat hard to define as it provides both utilities for manipulating responses as well as other information. Since the
 * toolkit is passed as a function argument, developers can name it whatever they want. For the purpose of this
 * document the h notation is used. It is named in the spirit of the RethinkDB r method, with h for hapi.
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#response-toolkit)
 */
export interface ResponseToolkit {
    /**
     * A response symbol. When returned by a lifecycle method, the request lifecycle skips to the finalizing step
     * without further interaction with the node response stream. It is the developer's responsibility to write
     * and end the response directly via [request.raw.res](https://github.com/hapijs/hapi/blob/master/API.md#request.raw).
     */
    readonly abandon: symbol;

    /**
     * A response symbol. When returned by a lifecycle method, the request lifecycle skips to the finalizing step after
     * calling request.raw.res.end()) to close the the node response stream.
     */
    readonly close: symbol;

    /**
     * A response symbol. Provides access to the route or server context set via the route [bind](https://github.com/hapijs/hapi/blob/master/API.md#route.options.bind)
     * option or [server.bind()](https://github.com/hapijs/hapi/blob/master/API.md#server.bind()).
     */
    readonly context: any;

    /**
     * A response symbol. When returned by a lifecycle method, the request lifecycle continues without changing the response.
     */
    readonly continue: symbol;

    /**
     * The [server realm](https://github.com/hapijs/hapi/blob/master/API.md#server.realm) associated with the matching
     * route. Defaults to the root server realm in the onRequest step.
     */
    readonly realm: ServerRealm;

    /**
     * Access: read only and public request interface.
     * The [request] object. This is a duplication of the request lifecycle method argument used by
     * [toolkit decorations](https://github.com/hapijs/hapi/blob/master/API.md#server.decorate()) to access the current request.
     */
    readonly request: Readonly<Request>;

    /**
     * Used by the [authentication] method to pass back valid credentials where:
     * @param data - an object with:
     * * credentials - (required) object representing the authenticated entity.
     * * artifacts - (optional) authentication artifacts object specific to the authentication scheme.
     * @return Return value: an internal authentication object.
     */
    authenticated(data: AuthenticationData): Auth;

    /**
     * Sets the response 'ETag' and 'Last-Modified' headers and checks for any conditional request headers to decide if
     * the response is going to qualify for an HTTP 304 (Not Modified). If the entity values match the request
     * conditions, h.entity() returns a response object for the lifecycle method to return as its value which will
     * set a 304 response. Otherwise, it sets the provided entity headers and returns undefined.
     * The method argumetns are:
     * @param options - a required configuration object with:
     * * etag - the ETag string. Required if modified is not present. Defaults to no header.
     * * modified - the Last-Modified header value. Required if etag is not present. Defaults to no header.
     * * vary - same as the response.etag() option. Defaults to true.
     * @return Return value: - a response object if the response is unmodified. - undefined if the response has changed.
     * If undefined is returned, the developer must return a valid lifecycle method value. If a response is returned,
     * it should be used as the return value (but may be customize using the response methods).
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-hentityoptions)
     */
    entity(options?: {etag?: string | undefined, modified?: string | undefined, vary?: boolean | undefined}): ResponseObject | undefined;

    /**
     * Redirects the client to the specified uri. Same as calling h.response().redirect(uri).
     * @param url
     * @return Returns a response object.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-hredirecturi)
     */
    redirect(uri?: string): ResponseObject;

    /**
     * Wraps the provided value and returns a response object which allows customizing the response
     * (e.g. setting the HTTP status code, custom headers, etc.), where:
     * @param value - (optional) return value. Defaults to null.
     * @return Returns a response object.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-hresponsevalue)
     */
    response(value?: ResponseValue): ResponseObject;

    /**
     * Sets a response cookie using the same arguments as response.state().
     * @param name of the cookie
     * @param value of the cookie
     * @param (optional) ServerStateCookieOptions object.
     * @return Return value: none.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-hstatename-value-options)
     */
    state(name: string, value: string | object, options?: ServerStateCookieOptions): void;

    /**
     * Used by the [authentication] method to indicate authentication failed and pass back the credentials received where:
     * @param error - (required) the authentication error.
     * @param data - (optional) an object with:
     * * credentials - (required) object representing the authenticated entity.
     * * artifacts - (optional) authentication artifacts object specific to the authentication scheme.
     * @return void.
     * The method is used to pass both the authentication error and the credentials. For example, if a request included
     * expired credentials, it allows the method to pass back the user information (combined with a 'try'
     * authentication mode) for error customization.
     * There is no difference between throwing the error or passing it with the h.unauthenticated() method is no credentials are passed, but it might still be helpful for code clarity.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-hunauthenticatederror-data)
     */
    unauthenticated(error: Error, data?: AuthenticationData): void;

    /**
     * Clears a response cookie using the same arguments as
     * @param name of the cookie
     * @param options (optional) ServerStateCookieOptions object.
     * @return void.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-hunstatename-options)
     */
    unstate(name: string, options?: ServerStateCookieOptions): void;
}

/* + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + +
 +                                                                           +
 +                                                                           +
 +                                                                           +
 +                      Route                                                +
 +                                                                           +
 +                                                                           +
 +                                                                           +
 + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + */

export type RouteOptionsAccessScope = false | string | string[];

export type RouteOptionsAccessEntity = 'any' | 'user' | 'app';

export interface RouteOptionsAccessScopeObject {
    scope: RouteOptionsAccessScope;
}

export interface RouteOptionsAccessEntityObject {
    entity: RouteOptionsAccessEntity;
}

export type RouteOptionsAccessObject =
    RouteOptionsAccessScopeObject
    | RouteOptionsAccessEntityObject
    | (RouteOptionsAccessScopeObject & RouteOptionsAccessEntityObject);

/**
 * Route Authentication Options
 */
export interface RouteOptionsAccess {
    /**
     * Default value: none.
     * An object or array of objects specifying the route access rules. Each rule is evaluated against an incoming request and access is granted if at least one of the rules matches. Each rule object
     * must include at least one of scope or entity.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsauthaccess)
     */
    access?: RouteOptionsAccessObject | RouteOptionsAccessObject[] | undefined;

    /**
     * Default value: false (no scope requirements).
     * The application scope required to access the route. Value can be a scope string or an array of scope strings. When authenticated, the credentials object scope property must contain at least
     * one of the scopes defined to access the route. If a scope string begins with a + character, that scope is required. If a scope string begins with a ! character, that scope is forbidden. For
     * example, the scope ['!a', '+b', 'c', 'd'] means the incoming request credentials' scope must not include 'a', must include 'b', and must include one of 'c' or 'd'. You may also access
     * properties on the request object (query, params, payload, and credentials) to populate a dynamic scope by using the '{' and '}' characters around the property name, such as 'user-{params.id}'.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsauthaccessscope)
     */
    scope?: RouteOptionsAccessScope | undefined;

    /**
     * Default value: 'any'.
     * The required authenticated entity type. If set, must match the entity value of the request authenticated credentials. Available values:
     * * 'any' - the authentication can be on behalf of a user or application.
     * * 'user' - the authentication must be on behalf of a user which is identified by the presence of a 'user' attribute in the credentials object returned by the authentication strategy.
     * * 'app' - the authentication must be on behalf of an application which is identified by the lack of presence of a user attribute in the credentials object returned by the authentication
     * strategy.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsauthaccessentity)
     */
    entity?: RouteOptionsAccessEntity | undefined;

    /**
     * Default value: 'required'.
     * The authentication mode. Available values:
     * * 'required' - authentication is required.
     * * 'optional' - authentication is optional - the request must include valid credentials or no credentials at all.
     * * 'try' - similar to 'optional', any request credentials are attempted authentication, but if the credentials are invalid, the request proceeds regardless of the authentication error.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsauthmode)
     */
    mode?: 'required' | 'optional' | 'try' | undefined;

    /**
     * Default value: false, unless the scheme requires payload authentication.
     * If set, the incoming request payload is authenticated after it is processed. Requires a strategy with payload authentication support (e.g. Hawk). Cannot be set to a value other than 'required'
     * when the scheme sets the authentication options.payload to true. Available values:
     * * false - no payload authentication.
     * * 'required' - payload authentication required.
     * * 'optional' - payload authentication performed only when the client includes payload authentication information (e.g. hash attribute in Hawk).
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsauthpayload)
     */
    payload?: false | 'required' | 'optional' | undefined;

    /**
     * Default value: the default strategy set via server.auth.default().
     * An array of string strategy names in the order they should be attempted. Cannot be used together with strategy.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsauthstrategies)
     */
    strategies?: string[] | undefined;

    /**
     * Default value: the default strategy set via server.auth.default().
     * A string strategy names. Cannot be used together with strategies.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsauthstrategy)
     */
    strategy?: string | undefined;
}

/**
 * Values are:
 * * * 'default' - no privacy flag.
 * * * 'public' - mark the response as suitable for public caching.
 * * * 'private' - mark the response as suitable only for private caching.
 * * expiresIn - relative expiration expressed in the number of milliseconds since the item was saved in the cache. Cannot be used together with expiresAt.
 * * expiresAt - time of day expressed in 24h notation using the 'HH:MM' format, at which point all cache records for the route expire. Cannot be used together with expiresIn.
 * * statuses - an array of HTTP response status code numbers (e.g. 200) which are allowed to include a valid caching directive.
 * * otherwise - a string with the value of the 'Cache-Control' header when caching is disabled.
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionscache)
 */
export type RouteOptionsCache = {
    privacy?: 'default' | 'public' | 'private' | undefined;
    statuses?: number[] | undefined;
    otherwise?: string | undefined;
} & (
    {
        expiresIn?: number | undefined;
        expiresAt?: undefined;
    } | {
    expiresIn?: undefined;
    expiresAt?: string | undefined;
} | {
    expiresIn?: undefined;
    expiresAt?: undefined;
}
    );

/**
 * Default value: false (no CORS headers).
 * The Cross-Origin Resource Sharing protocol allows browsers to make cross-origin API calls. CORS is required by web applications running inside a browser which are loaded from a different domain
 * than the API server. To enable, set cors to true, or to an object with the following options:
 * * origin - an array of allowed origin servers strings ('Access-Control-Allow-Origin'). The array can contain any combination of fully qualified origins along with origin strings containing a
 * wildcard '*' character, or a single '*' origin string. If set to 'ignore', any incoming Origin header is ignored (present or not) and the 'Access-Control-Allow-Origin' header is set to '*'.
 * Defaults to any origin ['*'].
 * * maxAge - number of seconds the browser should cache the CORS response ('Access-Control-Max-Age'). The greater the value, the longer it will take before the browser checks for changes in policy.
 * Defaults to 86400 (one day).
 * * headers - a strings array of allowed headers ('Access-Control-Allow-Headers'). Defaults to ['Accept', 'Authorization', 'Content-Type', 'If-None-Match'].
 * * additionalHeaders - a strings array of additional headers to headers. Use this to keep the default headers in place.
 * * exposedHeaders - a strings array of exposed headers ('Access-Control-Expose-Headers'). Defaults to ['WWW-Authenticate', 'Server-Authorization'].
 * * additionalExposedHeaders - a strings array of additional headers to exposedHeaders. Use this to keep the default headers in place.
 * * credentials - if true, allows user credentials to be sent ('Access-Control-Allow-Credentials'). Defaults to false.
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionscors)
 */
export interface RouteOptionsCors {
    /**
     * an array of allowed origin servers strings ('Access-Control-Allow-Origin'). The array can contain any combination of fully qualified origins along with origin strings containing a wildcard '*'
     * character, or a single '*' origin string. If set to 'ignore', any incoming Origin header is ignored (present or not) and the 'Access-Control-Allow-Origin' header is set to '*'. Defaults to any
     * origin ['*'].
     */
    origin?: string[] | '*' | 'ignore' | undefined;
    /**
     * number of seconds the browser should cache the CORS response ('Access-Control-Max-Age'). The greater the value, the longer it will take before the browser checks for changes in policy.
     * Defaults to 86400 (one day).
     */
    maxAge?: number | undefined;
    /**
     * a strings array of allowed headers ('Access-Control-Allow-Headers'). Defaults to ['Accept', 'Authorization', 'Content-Type', 'If-None-Match'].
     */
    headers?: string[] | undefined;
    /**
     * a strings array of additional headers to headers. Use this to keep the default headers in place.
     */
    additionalHeaders?: string[] | undefined;
    /**
     * a strings array of exposed headers ('Access-Control-Expose-Headers'). Defaults to ['WWW-Authenticate', 'Server-Authorization'].
     */
    exposedHeaders?: string[] | undefined;
    /**
     * a strings array of additional headers to exposedHeaders. Use this to keep the default headers in place.
     */
    additionalExposedHeaders?: string[] | undefined;
    /**
     * if true, allows user credentials to be sent ('Access-Control-Allow-Credentials'). Defaults to false.
     */
    credentials?: boolean | undefined;
}

/**
 * The value must be one of:
 * * 'data' - the incoming payload is read fully into memory. If parse is true, the payload is parsed (JSON, form-decoded, multipart) based on the 'Content-Type' header. If parse is false, a raw
 * Buffer is returned.
 * * 'stream' - the incoming payload is made available via a Stream.Readable interface. If the payload is 'multipart/form-data' and parse is true, field values are presented as text while files are
 * provided as streams. File streams from a 'multipart/form-data' upload will also have a hapi property containing the filename and headers properties. Note that payload streams for multipart
 * payloads are a synthetic interface created on top of the entire mutlipart content loaded into memory. To avoid loading large multipart payloads into memory, set parse to false and handle the
 * multipart payload in the handler using a streaming parser (e.g. pez).
 * * 'file' - the incoming payload is written to temporary file in the directory specified by the uploads settings. If the payload is 'multipart/form-data' and parse is true, field values are
 * presented as text while files are saved to disk. Note that it is the sole responsibility of the application to clean up the files generated by the framework. This can be done by keeping track of
 * which files are used (e.g. using the request.app object), and listening to the server 'response' event to perform cleanup. For context [See
 * docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionspayloadoutput)
 */
export type PayloadOutput = 'data' | 'stream' | 'file';

/**
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionspayloadcompression)
 */
export type PayloadCompressionDecoderSettings = object;

/**
 * Determines how the request payload is processed.
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionspayload)
 */
export interface RouteOptionsPayload {
    /**
     * Default value: allows parsing of the following mime types:
     * * application/json
     * * application/*+json
     * * application/octet-stream
     * * application/x-www-form-urlencoded
     * * multipart/form-data
     * * text/*
     * A string or an array of strings with the allowed mime types for the endpoint. Use this settings to limit the set of allowed mime types. Note that allowing additional mime types not listed
     * above will not enable them to be parsed, and if parse is true, the request will result in an error response.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionspayloadallow)
     */
    allow?: string | string[] | undefined;

    /**
     * Default value: none.
     * An object where each key is a content-encoding name and each value is an object with the desired decoder settings. Note that encoder settings are set in compression.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionspayloadcompression)
     */
    compression?: Util.Dictionary<PayloadCompressionDecoderSettings> | undefined;

    /**
     * Default value: 'application/json'.
     * The default content type if the 'Content-Type' request header is missing.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionspayloaddefaultcontenttype)
     */
    defaultContentType?: string | undefined;

    /**
     * Default value: 'error' (return a Bad Request (400) error response).
     * A failAction value which determines how to handle payload parsing errors.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionspayloadfailaction)
     */
    failAction?: Lifecycle.FailAction | undefined;

    /**
     * Default value: 1048576 (1MB).
     * Limits the size of incoming payloads to the specified byte count. Allowing very large payloads may cause the server to run out of memory.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionspayloadmaxbytes)
     */
    maxBytes?: number | undefined;

    /**
     * Default value: none.
     * Overrides payload processing for multipart requests. Value can be one of:
     * * false - disable multipart processing.
     * an object with the following required options:
     * * output - same as the output option with an additional value option:
     * * * annotated - wraps each multipart part in an object with the following keys: // TODO type this?
     * * * * headers - the part headers.
     * * * * filename - the part file name.
     * * * * payload - the processed part payload.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionspayloadmultipart)
     */
    multipart?: false | {
        output: PayloadOutput | 'annotated';
    } | undefined;

    /**
     * Default value: 'data'.
     * The processed payload format. The value must be one of:
     * * 'data' - the incoming payload is read fully into memory. If parse is true, the payload is parsed (JSON, form-decoded, multipart) based on the 'Content-Type' header. If parse is false, a raw
     * Buffer is returned.
     * * 'stream' - the incoming payload is made available via a Stream.Readable interface. If the payload is 'multipart/form-data' and parse is true, field values are presented as text while files
     * are provided as streams. File streams from a 'multipart/form-data' upload will also have a hapi property containing the filename and headers properties. Note that payload streams for multipart
     * payloads are a synthetic interface created on top of the entire mutlipart content loaded into memory. To avoid loading large multipart payloads into memory, set parse to false and handle the
     * multipart payload in the handler using a streaming parser (e.g. pez).
     * * 'file' - the incoming payload is written to temporary file in the directory specified by the uploads settings. If the payload is 'multipart/form-data' and parse is true, field values are
     * presented as text while files are saved to disk. Note that it is the sole responsibility of the application to clean up the files generated by the framework. This can be done by keeping track
     * of which files are used (e.g. using the request.app object), and listening to the server 'response' event to perform cleanup.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionspayloadoutput)
     */
    output?: PayloadOutput | undefined;

    /**
     * Default value: none.
     * A mime type string overriding the 'Content-Type' header value received.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionspayloadoverride)
     */
    override?: string | undefined;

    /**
     * Default value: true.
     * Determines if the incoming payload is processed or presented raw. Available values:
     * * true - if the request 'Content-Type' matches the allowed mime types set by allow (for the whole payload as well as parts), the payload is converted into an object when possible. If the
     * format is unknown, a Bad Request (400) error response is sent. Any known content encoding is decoded.
     * * false - the raw payload is returned unmodified.
     * * 'gunzip' - the raw payload is returned unmodified after any known content encoding is decoded.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionspayloadparse)
     */
    parse?: boolean | 'gunzip' | undefined;

    /**
     * Default value: to 10000 (10 seconds).
     * Payload reception timeout in milliseconds. Sets the maximum time allowed for the client to transmit the request payload (body) before giving up and responding with a Request Timeout (408)
     * error response. Set to false to disable.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionspayloadtimeout)
     */
    timeout?: false | number | undefined;

    /**
     * Default value: os.tmpdir().
     * The directory used for writing file uploads.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionspayloaduploads)
     */
    uploads?: string | undefined;
}

/**
 * For context [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionspre)
 */
export type RouteOptionsPreArray = RouteOptionsPreAllOptions[];

/**
 * For context [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionspre)
 */
export type RouteOptionsPreAllOptions = RouteOptionsPreObject | RouteOptionsPreObject[] | Lifecycle.Method;

/**
 * An object with:
 * * method - a lifecycle method.
 * * assign - key name used to assign the response of the method to in request.pre and request.preResponses.
 * * failAction - A failAction value which determine what to do when a pre-handler method throws an error. If assign is specified and the failAction setting is not 'error', the error will be assigned.
 * For context [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionspre)
 */
export interface RouteOptionsPreObject {
    /**
     * a lifecycle method.
     */
    method: Lifecycle.Method;
    /**
     * key name used to assign the response of the method to in request.pre and request.preResponses.
     */
    assign?: string | undefined;
    /**
     * A failAction value which determine what to do when a pre-handler method throws an error. If assign is specified and the failAction setting is not 'error', the error will be assigned.
     */
    failAction?: Lifecycle.FailAction | undefined;
}

export type ValidationObject = SchemaMap;

export type RouteOptionsResponseSchema =
    boolean
    | ValidationObject
    | Schema
    | ((value: object | Buffer | string, options: ValidationOptions) => Promise<any>);

/**
 * Processing rules for the outgoing response.
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsresponse)
 */
export interface RouteOptionsResponse {
    /**
     * Default value: 200.
     * The default HTTP status code when the payload is considered empty. Value can be 200 or 204. Note that a 200 status code is converted to a 204 only at the time of response transmission (the
     * response status code will remain 200 throughout the request lifecycle unless manually set).
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsresponseemptystatuscode)
     */
    emptyStatusCode?: 200 | 204 | undefined;

    /**
     * Default value: 'error' (return an Internal Server Error (500) error response).
     * A failAction value which defines what to do when a response fails payload validation.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsresponsefailaction)
     */
    failAction?: Lifecycle.FailAction | undefined;

    /**
     * Default value: false.
     * If true, applies the validation rule changes to the response payload.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsresponsemodify)
     */
    modify?: boolean | undefined;

    /**
     * Default value: none.
     * [joi](https://github.com/hapijs/joi) options object pass to the validation function. Useful to set global options such as stripUnknown or abortEarly (the complete list is available here). If a
     * custom validation function is defined via schema or status then options can an arbitrary object that will be passed to this function as the second argument.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsresponseoptions)
     */
    options?: ValidationOptions | undefined; // TODO needs validation

    /**
     * Default value: true.
     * If false, payload range support is disabled.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsresponseranges)
     */
    ranges?: boolean | undefined;

    /**
     * Default value: 100 (all responses).
     * The percent of response payloads validated (0 - 100). Set to 0 to disable all validation.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsresponsesample)
     */
    sample?: number | undefined;

    /**
     * Default value: true (no validation).
     * The default response payload validation rules (for all non-error responses) expressed as one of:
     * * true - any payload allowed (no validation).
     * * false - no payload allowed.
     * * a joi validation object. The options along with the request context ({ headers, params, query, payload, app, auth }) are passed to the validation function.
     * * a validation function using the signature async function(value, options) where:
     * * * value - the pending response payload.
     * * * options - The options along with the request context ({ headers, params, query, payload, app, auth }).
     * * * if the function returns a value and modify is true, the value is used as the new response. If the original response is an error, the return value is used to override the original error
     * output.payload. If an error is thrown, the error is processed according to failAction.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsresponseschema)
     */
    schema?: RouteOptionsResponseSchema | undefined;

    /**
     * Default value: none.
     * Validation schemas for specific HTTP status codes. Responses (excluding errors) not matching the listed status codes are validated using the default schema.
     * status is set to an object where each key is a 3 digit HTTP status code and the value has the same definition as schema.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsresponsestatus)
     */
    status?: Util.Dictionary<RouteOptionsResponseSchema> | undefined;
}

/**
 * @see https://www.w3.org/TR/referrer-policy/
 */
export type ReferrerPolicy = '' | 'no-referrer' | 'no-referrer-when-downgrade' | 'unsafe-url' |
    'same-origin' | 'origin' |  'strict-origin' | 'origin-when-cross-origin' | 'strict-origin-when-cross-origin';

/**
 * Default value: false (security headers disabled).
 * Sets common security headers. To enable, set security to true or to an object with the following options:
 * * hsts - controls the 'Strict-Transport-Security' header, where:
 * * * true - the header will be set to max-age=15768000. This is the default value.
 * * * a number - the maxAge parameter will be set to the provided value.
 * * * an object with the following fields:
 * * * * maxAge - the max-age portion of the header, as a number. Default is 15768000.
 * * * * includeSubDomains - a boolean specifying whether to add the includeSubDomains flag to the header.
 * * * * preload - a boolean specifying whether to add the 'preload' flag (used to submit domains inclusion in Chrome's HTTP Strict Transport Security (HSTS) preload list) to the header.
 * * xframe - controls the 'X-Frame-Options' header, where:
 * * * true - the header will be set to 'DENY'. This is the default value.
 * * * 'deny' - the headers will be set to 'DENY'.
 * * * 'sameorigin' - the headers will be set to 'SAMEORIGIN'.
 * * * an object for specifying the 'allow-from' rule, where:
 * * * * rule - one of:
 * * * * * 'deny'
 * * * * * 'sameorigin'
 * * * * * 'allow-from'
 * * * * source - when rule is 'allow-from' this is used to form the rest of the header, otherwise this field is ignored. If rule is 'allow-from' but source is unset, the rule will be automatically
 * changed to 'sameorigin'.
 * * xss - boolean that controls the 'X-XSS-PROTECTION' header for Internet Explorer. Defaults to true which sets the header to equal '1; mode=block'.
 *       Note: this setting can create a security vulnerability in versions of Internet Exploere below 8, as well as unpatched versions of IE8. See here and here for more information. If you actively
 * support old versions of IE, it may be wise to explicitly set this flag to false.
 * * noOpen - boolean controlling the 'X-Download-Options' header for Internet Explorer, preventing downloads from executing in your context. Defaults to true setting the header to 'noopen'.
 * * noSniff - boolean controlling the 'X-Content-Type-Options' header. Defaults to true setting the header to its only and default option, 'nosniff'.
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionssecurity)
 */
export interface RouteOptionsSecureObject {
    /**
     * hsts - controls the 'Strict-Transport-Security' header
     */
    hsts?: boolean | number | {
        /**
         * the max-age portion of the header, as a number. Default is 15768000.
         */
        maxAge: number;
        /**
         * a boolean specifying whether to add the includeSubDomains flag to the header.
         */
        includeSubdomains: boolean;
        /**
         * a boolean specifying whether to add the 'preload' flag (used to submit domains inclusion in Chrome's HTTP Strict Transport Security (HSTS) preload list) to the header.
         */
        preload: boolean;
    } | undefined;
    /**
     * controls the 'X-Frame-Options' header
     */
    xframe?: true | 'deny' | 'sameorigin' | {
        /**
         * an object for specifying the 'allow-from' rule,
         */
        rule: 'deny' | 'sameorigin' | 'allow-from';
        /**
         * when rule is 'allow-from' this is used to form the rest of the header, otherwise this field is ignored. If rule is 'allow-from' but source is unset, the rule will be automatically changed
         * to 'sameorigin'.
         */
        source: string;
    } | undefined;
    /**
     * boolean that controls the 'X-XSS-PROTECTION' header for Internet Explorer. Defaults to true which sets the header to equal '1; mode=block'.
     * Note: this setting can create a security vulnerability in versions of Internet Exploere below 8, as well as unpatched versions of IE8. See here and here for more information. If you actively
     * support old versions of IE, it may be wise to explicitly set this flag to false.
     */
    xss: boolean;
    /**
     * boolean controlling the 'X-Download-Options' header for Internet Explorer, preventing downloads from executing in your context. Defaults to true setting the header to 'noopen'.
     */
    noOpen?: boolean | undefined;
    /**
     * boolean controlling the 'X-Content-Type-Options' header. Defaults to true setting the header to its only and default option, 'nosniff'.
     */
    noSniff?: boolean | undefined;

    /**
     * Controls the `Referrer-Policy` header, which has the following possible values.
     * @default false Header will not be send.
     */
    referrer?: false | ReferrerPolicy | undefined;
}

export type RouteOptionsSecure = boolean | RouteOptionsSecureObject;

/**
 * Default value: { headers: true, params: true, query: true, payload: true, failAction: 'error' }.
 * Request input validation rules for various request components.
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsvalidate)
 */
export interface RouteOptionsValidate {
    /**
     * Default value: none.
     * An optional object with error fields copied into every validation error response.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsvalidateerrorfields)
     */
    errorFields?: object | undefined;

    /**
     * Default value: 'error' (return a Bad Request (400) error response).
     * A failAction value which determines how to handle failed validations. When set to a function, the err argument includes the type of validation error under err.output.payload.validation.source.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsvalidatefailaction)
     */
    failAction?: Lifecycle.FailAction | undefined;

    /**
     * Default value: true (no validation).
     * Validation rules for incoming request headers:
     * * true - any headers allowed (no validation performed).
     * * a joi validation object.
     * * a validation function using the signature async function(value, options) where:
     * * * value - the request.headers object containing the request headers.
     * * * options - options.
     * * * if a value is returned, the value is used as the new request.headers value and the original value is stored in request.orig.headers. Otherwise, the headers are left unchanged. If an error
     * is thrown, the error is handled according to failAction. Note that all header field names must be in lowercase to match the headers normalized by node.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsvalidateheaders)
     */
    headers?: RouteOptionsResponseSchema | undefined;

    /**
     * Default value: none.
     * An options object passed to the joi rules or the custom validation methods. Used for setting global options such as stripUnknown or abortEarly (the complete list is available here).
     * If a custom validation function (see headers, params, query, or payload above) is defined then options can an arbitrary object that will be passed to this function as the second parameter.
     * The values of the other inputs (i.e. headers, query, params, payload, app, and auth) are added to the options object under the validation context (accessible in rules as
     * Joi.ref('$query.key')).
     * Note that validation is performed in order (i.e. headers, params, query, and payload) and if type casting is used (e.g. converting a string to a number), the value of inputs not yet validated
     * will reflect the raw, unvalidated and unmodified values. If the validation rules for headers, params, query, and payload are defined at both the server routes level and at the route level, the
     * individual route settings override the routes defaults (the rules are not merged).
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsvalidateparams)
     */
    options?: ValidationOptions | object | undefined;

    /**
     * Default value: true (no validation).
     * Validation rules for incoming request path parameters, after matching the path against the route, extracting any parameters, and storing them in request.params, where:
     * * true - any path parameter value allowed (no validation performed).
     * * a joi validation object.
     * * a validation function using the signature async function(value, options) where:
     * * * value - the request.params object containing the request path parameters.
     * * * options - options.
     * if a value is returned, the value is used as the new request.params value and the original value is stored in request.orig.params. Otherwise, the path parameters are left unchanged. If an
     * error is thrown, the error is handled according to failAction. Note that failing to match the validation rules to the route path parameters definition will cause all requests to fail.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsvalidateparams)
     */
    params?: RouteOptionsResponseSchema | undefined;

    /**
     * Default value: true (no validation).
     * Validation rules for incoming request payload (request body), where:
     * * true - any payload allowed (no validation performed). false - no payload allowed.
     * * a joi validation object. Note that empty payloads are represented by a null value. If a validation schema is provided and empty payload are allowed, the schema must be explicitly defined by
     * setting the rule to a joi schema with null allowed (e.g. Joi.object({  keys here  }).allow(null)).
     * * a validation function using the signature async function(value, options) where:
     * * * value - the request.query object containing the request query parameters.
     * * * options - options.
     * if a value is returned, the value is used as the new request.payload value and the original value is stored in request.orig.payload. Otherwise, the payload is left unchanged. If an error is
     * thrown, the error is handled according to failAction. Note that validating large payloads and modifying them will cause memory duplication of the payload (since the original is kept), as well
     * as the significant performance cost of validating large amounts of data.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsvalidatepayload)
     */
    payload?: RouteOptionsResponseSchema | undefined;

    /**
     * Default value: true (no validation).
     * Validation rules for incoming request URI query component (the key-value part of the URI between '?' and '#'). The query is parsed into its individual key-value pairs, decoded, and stored in
     * request.query prior to validation. Where:
     * * true - any query parameter value allowed (no validation performed). false - no query parameter value allowed.
     * * a joi validation object.
     * * a validation function using the signature async function(value, options) where:
     * * * value - the request.query object containing the request query parameters.
     * * * options - options.
     * if a value is returned, the value is used as the new request.query value and the original value is stored in request.orig.query. Otherwise, the query parameters are left unchanged. If an error
     * is thrown, the error is handled according to failAction. Note that changes to the query parameters will not be reflected in request.url.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsvalidatequery)
     */
    query?: RouteOptionsResponseSchema | undefined;
}

/**
 * For context [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionscompression)
 * For context [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverencoderencoding-encoder)
 */
export type RouteCompressionEncoderSettings = object;

/**
 * Empty interface to allow for user-defined augmentations.
 */
/* tslint:disable-next-line:no-empty-interface */
export interface RouteOptionsApp {
}

/**
 * Each route can be customized to change the default behavior of the request lifecycle.
 * For context [See docs](https://github.com/hapijs/hapi/blob/master/API.md#route-options)
 */
export interface RouteOptions {
    /**
     * Application-specific route configuration state. Should not be used by plugins which should use options.plugins[name] instead.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsapp)
     */
    app?: RouteOptionsApp | undefined;

    /**
     * Route authentication configuration. Value can be:
     * false to disable authentication if a default strategy is set.
     * a string with the name of an authentication strategy registered with server.auth.strategy(). The strategy will be set to 'required' mode.
     * an authentication configuration object.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsapp)
     */
    auth?: false | string | RouteOptionsAccess | undefined;

    /**
     * Default value: null.
     * An object passed back to the provided handler (via this) when called. Ignored if the method is an arrow function.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsbind)
     */
    bind?: object | null | undefined;

    /**
     * Default value: { privacy: 'default', statuses: [200], otherwise: 'no-cache' }.
     * If the route method is 'GET', the route can be configured to include HTTP caching directives in the response. Caching can be customized using an object with the following options:
     * privacy - determines the privacy flag included in client-side caching using the 'Cache-Control' header. Values are:
     * * * 'default' - no privacy flag.
     * * * 'public' - mark the response as suitable for public caching.
     * * * 'private' - mark the response as suitable only for private caching.
     * * expiresIn - relative expiration expressed in the number of milliseconds since the item was saved in the cache. Cannot be used together with expiresAt.
     * * expiresAt - time of day expressed in 24h notation using the 'HH:MM' format, at which point all cache records for the route expire. Cannot be used together with expiresIn.
     * * statuses - an array of HTTP response status code numbers (e.g. 200) which are allowed to include a valid caching directive.
     * * otherwise - a string with the value of the 'Cache-Control' header when caching is disabled.
     * The default Cache-Control: no-cache header can be disabled by setting cache to false.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionscache)
     */
    cache?: false | RouteOptionsCache | undefined;

    /**
     * An object where each key is a content-encoding name and each value is an object with the desired encoder settings. Note that decoder settings are set in compression.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionscompression)
     */
    compression?: Util.Dictionary<RouteCompressionEncoderSettings> | undefined;

    /**
     * Default value: false (no CORS headers).
     * The Cross-Origin Resource Sharing protocol allows browsers to make cross-origin API calls. CORS is required by web applications running inside a browser which are loaded from a different
     * domain than the API server. To enable, set cors to true, or to an object with the following options:
     * * origin - an array of allowed origin servers strings ('Access-Control-Allow-Origin'). The array can contain any combination of fully qualified origins along with origin strings containing a
     * wildcard '*' character, or a single '*' origin string. If set to 'ignore', any incoming Origin header is ignored (present or not) and the 'Access-Control-Allow-Origin' header is set to '*'.
     * Defaults to any origin ['*'].
     * * maxAge - number of seconds the browser should cache the CORS response ('Access-Control-Max-Age'). The greater the value, the longer it will take before the browser checks for changes in
     * policy. Defaults to 86400 (one day).
     * * headers - a strings array of allowed headers ('Access-Control-Allow-Headers'). Defaults to ['Accept', 'Authorization', 'Content-Type', 'If-None-Match'].
     * * additionalHeaders - a strings array of additional headers to headers. Use this to keep the default headers in place.
     * * exposedHeaders - a strings array of exposed headers ('Access-Control-Expose-Headers'). Defaults to ['WWW-Authenticate', 'Server-Authorization'].
     * * additionalExposedHeaders - a strings array of additional headers to exposedHeaders. Use this to keep the default headers in place.
     * * credentials - if true, allows user credentials to be sent ('Access-Control-Allow-Credentials'). Defaults to false.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionscors)
     */
    cors?: boolean | RouteOptionsCors | undefined;

    /**
     * Default value: none.
     * Route description used for generating documentation (string).
     * This setting is not available when setting server route defaults using server.options.routes.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsdescription)
     */
    description?: string | undefined;

    /**
     * Default value: none.
     * Route-level request extension points by setting the option to an object with a key for each of the desired extension points ('onRequest' is not allowed), and the value is the same as the
     * server.ext(events) event argument.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsext)
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#request-lifecycle)
     */
    ext?: {
        [key in RouteRequestExtType]?: RouteExtObject | RouteExtObject[];
    } | undefined;

    /**
     * Default value: { relativeTo: '.' }.
     * Defines the behavior for accessing files:
     * * relativeTo - determines the folder relative paths are resolved against.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsfiles)
     */
    files?: {
        relativeTo: string;
    } | undefined;

    /**
     * Default value: none.
     * The route handler function performs the main business logic of the route and sets the response. handler can be assigned:
     * * a lifecycle method.
     * * an object with a single property using the name of a handler type registred with the server.handler() method. The matching property value is passed as options to the registered handler
     * generator. Note: handlers using a fat arrow style function cannot be bound to any bind property. Instead, the bound context is available under h.context.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionshandler)
     */
    handler?: Lifecycle.Method | object | undefined;

    /**
     * Default value: none.
     * An optional unique identifier used to look up the route using server.lookup(). Cannot be assigned to routes added with an array of methods.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsid)
     */
    id?: string | undefined;

    /**
     * Default value: false.
     * If true, the route cannot be accessed through the HTTP listener but only through the server.inject() interface with the allowInternals option set to true. Used for internal routes that should
     * not be accessible to the outside world.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsisinternal)
     */
    isInternal?: boolean | undefined;

    /**
     * Default value: none.
     * Optional arguments passed to JSON.stringify() when converting an object or error response to a string payload or escaping it after stringification. Supports the following:
     * * replacer - the replacer function or array. Defaults to no action.
     * * space - number of spaces to indent nested object keys. Defaults to no indentation.
     * * suffix - string suffix added after conversion to JSON string. Defaults to no suffix.
     * * escape - calls Hoek.jsonEscape() after conversion to JSON string. Defaults to false.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsjson)
     */
    json?: Json.StringifyArguments | undefined;

    /**
     * Default value: none.
     * Enables JSONP support by setting the value to the query parameter name containing the function name used to wrap the response payload.
     * For example, if the value is 'callback', a request comes in with 'callback=me', and the JSON response is '{ "a":"b" }', the payload will be 'me({ "a":"b" });'. Cannot be used with stream
     * responses. The 'Content-Type' response header is set to 'text/javascript' and the 'X-Content-Type-Options' response header is set to 'nosniff', and will override those headers even if
     * explicitly set by response.type().
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsjsonp)
     */
    jsonp?: string | undefined;

    /**
     * Default value: { collect: false }.
     * Request logging options:
     * collect - if true, request-level logs (both internal and application) are collected and accessible via request.logs.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionslog)
     */
    log?: {
        collect: boolean;
    } | undefined;

    /**
     * Default value: none.
     * Route notes used for generating documentation (string or array of strings).
     * This setting is not available when setting server route defaults using server.options.routes.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsnotes)
     */
    notes?: string | string[] | undefined;

    /**
     * Determines how the request payload is processed.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionspayload)
     */
    payload?: RouteOptionsPayload | undefined;

    /**
     * Default value: {}.
     * Plugin-specific configuration. plugins is an object where each key is a plugin name and the value is the plugin configuration.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsplugins)
     */
    plugins?: PluginSpecificConfiguration | undefined;

    /**
     * Default value: none.
     * The pre option allows defining methods for performing actions before the handler is called. These methods allow breaking the handler logic into smaller, reusable components that can be shared
     * ascross routes, as well as provide a cleaner error handling of prerequisite operations (e.g. load required reference data from a database). pre is assigned an ordered array of methods which
     * are called serially in order. If the pre array contains another array of methods as one of its elements, those methods are called in parallel. Note that during parallel execution, if any of
     * the methods error, return a takeover response, or abort signal, the other parallel methods will continue to execute but will be ignored once completed. pre can be assigned a mixed array of:
     * * an array containing the elements listed below, which are executed in parallel.
     * * an object with:
     * * * method - a lifecycle method.
     * * * assign - key name used to assign the response of the method to in request.pre and request.preResponses.
     * * * failAction - A failAction value which determine what to do when a pre-handler method throws an error. If assign is specified and the failAction setting is not 'error', the error will be
     * assigned.
     * * a method function - same as including an object with a single method key.
     * Note that pre-handler methods do not behave the same way other lifecycle methods do when a value is returned. Instead of the return value becoming the new response payload, the value is used
     * to assign the corresponding request.pre and request.preResponses properties. Otherwise, the handling of errors, takeover response response, or abort signal behave the same as any other
     * lifecycle methods.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionspre)
     */
    pre?: RouteOptionsPreArray | undefined;

    /**
     * Processing rules for the outgoing response.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsresponse)
     */
    response?: RouteOptionsResponse | undefined;

    /**
     * Default value: false (security headers disabled).
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionssecurity)
     */
    security?: RouteOptionsSecure | undefined;

    /**
     * Default value: { parse: true, failAction: 'error' }.
     * HTTP state management (cookies) allows the server to store information on the client which is sent back to the server with every request (as defined in RFC 6265). state supports the following
     * options: parse - determines if incoming 'Cookie' headers are parsed and stored in the request.state object. failAction - A failAction value which determines how to handle cookie parsing
     * errors. Defaults to 'error' (return a Bad Request (400) error response).
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsstate)
     */
    state?: {
        parse?: boolean | undefined;
        failAction?: Lifecycle.FailAction | undefined;
    } | undefined;

    /**
     * Default value: none.
     * Route tags used for generating documentation (array of strings).
     * This setting is not available when setting server route defaults using server.options.routes.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionstags)
     */
    tags?: string[] | undefined;

    /**
     * Default value: { server: false }.
     * Timeouts for processing durations.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionstimeout)
     */
    timeout?: {
        /**
         * Response timeout in milliseconds. Sets the maximum time allowed for the server to respond to an incoming request before giving up and responding with a Service Unavailable (503) error
         * response.
         */
        server?: boolean | number | undefined;

        /**
         * Default value: none (use node default of 2 minutes).
         * By default, node sockets automatically timeout after 2 minutes. Use this option to override this behavior. Set to false to disable socket timeouts.
         */
        socket?: boolean | number | undefined;
    } | undefined;

    /**
     * Default value: { headers: true, params: true, query: true, payload: true, failAction: 'error' }.
     * Request input validation rules for various request components.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsvalidate)
     */
    validate?: RouteOptionsValidate | undefined;
}

/* + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + +
 +                                                                           +
 +                                                                           +
 +                                                                           +
 +                      Server                                               +
 +                                                                           +
 +                                                                           +
 +                                                                           +
 + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + */

/**
 * The scheme options argument passed to server.auth.strategy() when instantiation a strategy.
 * For context [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverauthschemename-scheme)
 */
export type ServerAuthSchemeOptions = object;

/**
 * the method implementing the scheme with signature function(server, options) where:
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverauthschemename-scheme)
 * @param server - a reference to the server object the scheme is added to.
 * @param options - (optional) the scheme options argument passed to server.auth.strategy() when instantiation a strategy.
 */
export type ServerAuthScheme = (server: Server, options?: ServerAuthSchemeOptions) => ServerAuthSchemeObject;

/* tslint:disable-next-line:no-empty-interface */
export interface ServerAuthSchemeObjectApi {
}

/**
 * The scheme method must return an object with the following
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#authentication-scheme)
 */
export interface ServerAuthSchemeObject {
    /**
     * optional object which is exposed via the [server.auth.api](https://github.com/hapijs/hapi/blob/master/API.md#server.auth.api) object.
     */
    api?: ServerAuthSchemeObjectApi | undefined;

    /**
     * A lifecycle method function called for each incoming request configured with the authentication scheme. The
     * method is provided with two special toolkit methods for returning an authenticated or an unauthenticate result:
     * * h.authenticated() - indicate request authenticated successfully.
     * * h.unauthenticated() - indicate request failed to authenticate.
     * @param request the request object.
     * @param h the ResponseToolkit
     * @return the Lifecycle.ReturnValue
     */
    authenticate(request: Request, h: ResponseToolkit): Lifecycle.ReturnValue;

    /**
     * A lifecycle method to authenticate the request payload.
     * When the scheme payload() method returns an error with a message, it means payload validation failed due to bad
     * payload. If the error has no message but includes a scheme name (e.g. Boom.unauthorized(null, 'Custom')),
     * authentication may still be successful if the route auth.payload configuration is set to 'optional'.
     * @param request the request object.
     * @param h the ResponseToolkit
     * @return the Lifecycle.ReturnValue
     */
    payload?(request: Request, h: ResponseToolkit): Lifecycle.ReturnValue;

    /**
     * A lifecycle method to decorate the response with authentication headers before the response headers or payload is written.
     * @param request the request object.
     * @param h the ResponseToolkit
     * @return the Lifecycle.ReturnValue
     */
    response?(request: Request, h: ResponseToolkit): Lifecycle.ReturnValue;

    /**
     * a method used to verify the authentication credentials provided
     * are still valid (e.g. not expired or revoked after the initial authentication).
     * the method throws an `Error` when the credentials passed are no longer valid (e.g. expired or
     * revoked). Note that the method does not have access to the original request, only to the
     * credentials and artifacts produced by the `authenticate()` method.
     */
    verify?(auth: RequestAuth): Promise<void>;

    /**
     * An object with the following keys:
     * * payload
     */
    options?: {
        /**
         * if true, requires payload validation as part of the scheme and forbids routes from disabling payload auth validation. Defaults to false.
         */
        payload?: boolean | undefined;
    } | undefined;
}

/**
 * An authentication configuration object using the same format as the route auth handler options.
 * For reference [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverauthdefaultoptions)
 */
/* tslint:disable-next-line:no-empty-interface */
export interface ServerAuthConfig extends RouteOptionsAccess {
}

export interface ServerAuth {
    /**
     * An object where each key is an authentication strategy name and the value is the exposed strategy API.
     * Available only when the authentication scheme exposes an API by returning an api key in the object
     * returned from its implementation function.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverauthapi)
     */
    api: Util.Dictionary<ServerAuthSchemeObjectApi>;

    /**
     * Contains the default authentication configuration is a default strategy was set via
     * [server.auth.default()](https://github.com/hapijs/hapi/blob/master/API.md#server.auth.default()).
     */
    readonly settings: {
        default: ServerAuthConfig;
    };

    /**
     * Sets a default strategy which is applied to every route where:
     * @param options - one of:
     * * a string with the default strategy name
     * * an authentication configuration object using the same format as the route auth handler options.
     * @return void.
     * The default does not apply when a route config specifies auth as false, or has an authentication strategy
     * configured (contains the strategy or strategies authentication settings). Otherwise, the route authentication
     * config is applied to the defaults.
     * Note that if the route has authentication configured, the default only applies at the time of adding the route,
     * not at runtime. This means that calling server.auth.default() after adding a route with some authentication
     * config will have no impact on the routes added prior. However, the default will apply to routes added
     * before server.auth.default() is called if those routes lack any authentication config.
     * The default auth strategy configuration can be accessed via server.auth.settings.default. To obtain the active
     * authentication configuration of a route, use server.auth.lookup(request.route).
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverauthdefaultoptions)
     */
    default(options: string | ServerAuthConfig): void;

    /**
     * Registers an authentication scheme where:
     * @param name the scheme name.
     * @param scheme - the method implementing the scheme with signature function(server, options) where:
     * * server - a reference to the server object the scheme is added to.
     * * options - (optional) the scheme options argument passed to server.auth.strategy() when instantiation a strategy.
     * @return void.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverauthschemename-scheme)
     */
    scheme(name: string, scheme: ServerAuthScheme): void;

    /**
     * Registers an authentication strategy where:
     * @param name - the strategy name.
     * @param scheme - the scheme name (must be previously registered using server.auth.scheme()).
     * @param options - scheme options based on the scheme requirements.
     * @return Return value: none.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverauthstrategyname-scheme-options)
     */
    strategy(name: string, scheme: string, options?: object): void;

    /**
     * Tests a request against an authentication strategy where:
     * @param strategy - the strategy name registered with server.auth.strategy().
     * @param request - the request object.
     * @return Return value: the authentication credentials object if authentication was successful, otherwise throws an error.
     * Note that the test() method does not take into account the route authentication configuration. It also does not
     * perform payload authentication. It is limited to the basic strategy authentication execution. It does not
     * include verifying scope, entity, or other route properties.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-await-serverauthteststrategy-request)
     */
    test(strategy: string, request: Request): Promise<AuthCredentials>;

    /**
     * Verify a request's authentication credentials against an authentication strategy.
     * Returns nothing if verification was successful, otherwise throws an error.
     *
     * Note that the `verify()` method does not take into account the route authentication configuration
     * or any other information from the request other than the `request.auth` object. It also does not
     * perform payload authentication. It is limited to verifying that the previously valid credentials
     * are still valid (e.g. have not been revoked or expired). It does not include verifying scope,
     * entity, or other route properties.
     */
    verify(request: Request): Promise<void>;
}

export type CachePolicyOptions<T> = PolicyOptionVariants<T> & {
    /**
     * @default '_default'
     */
    cache?: string | undefined;
    segment?: string | undefined;
};

/**
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-servercacheoptions)
 */
export interface ServerCache {
    /**
     * Provisions a cache segment within the server cache facility where:
     * @param options - [catbox policy](https://github.com/hapijs/catbox#policy) configuration where:
     * * expiresIn - relative expiration expressed in the number of milliseconds since the item was saved in the cache. Cannot be used together with expiresAt.
     * * expiresAt - time of day expressed in 24h notation using the 'HH:MM' format, at which point all cache records expire. Uses local time. Cannot be used together with expiresIn.
     * * generateFunc - a function used to generate a new cache item if one is not found in the cache when calling get(). The method's signature is async function(id, flags) where:
     * - `id` - the `id` string or object provided to the `get()` method.
     * - `flags` - an object used to pass back additional flags to the cache where:
     * - `ttl` - the cache ttl value in milliseconds. Set to `0` to skip storing in the cache. Defaults to the cache global policy.
     * * staleIn - number of milliseconds to mark an item stored in cache as stale and attempt to regenerate it when generateFunc is provided. Must be less than expiresIn.
     * * staleTimeout - number of milliseconds to wait before checking if an item is stale.
     * * generateTimeout - number of milliseconds to wait before returning a timeout error when the generateFunc function takes too long to return a value. When the value is eventually returned, it
     *     is stored in the cache for future requests. Required if generateFunc is present. Set to false to disable timeouts which may cause all get() requests to get stuck forever.
     * * generateOnReadError - if false, an upstream cache read error will stop the cache.get() method from calling the generate function and will instead pass back the cache error. Defaults to true.
     * * generateIgnoreWriteError - if false, an upstream cache write error when calling cache.get() will be passed back with the generated value when calling. Defaults to true.
     * * dropOnError - if true, an error or timeout in the generateFunc causes the stale value to be evicted from the cache. Defaults to true.
     * * pendingGenerateTimeout - number of milliseconds while generateFunc call is in progress for a given id, before a subsequent generateFunc call is allowed. Defaults to 0 (no blocking of
     *     concurrent generateFunc calls beyond staleTimeout).
     * * cache - the cache name configured in server.cache. Defaults to the default cache.
     * * segment - string segment name, used to isolate cached items within the cache partition. When called within a plugin, defaults to '!name' where 'name' is the plugin name. When called within a
     *     server method, defaults to '#name' where 'name' is the server method name. Required when called outside of a plugin.
     * * shared - if true, allows multiple cache provisions to share the same segment. Default to false.
     * @return Catbox Policy.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-servercacheoptions)
     */
    <T, O extends CachePolicyOptions<T> = CachePolicyOptions<T>>(options: O): Policy<T, O>;

    /**
     * Provisions a server cache as described in server.cache where:
     * @param options - same as the server cache configuration options.
     * @return Return value: none.
     * Note that if the server has been initialized or started, the cache will be automatically started to match the state of any other provisioned server cache.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-await-servercacheprovisionoptions)
     */
    provision(options: ServerOptionsCache): Promise<void>;
}

/**
 * an event name string.
 * an event options object.
 * a podium emitter object.
 * For context [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-servereventevents)
 */
export type ServerEventsApplication = string | ServerEventsApplicationObject | Podium;

/**
 * Object that it will be used in Event
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-servereventevents)
 */
export interface ServerEventsApplicationObject {
    /** the event name string (required). */
    name: string;
    /** a string or array of strings specifying the event channels available. Defaults to no channel restrictions (event updates can specify a channel or not). */
    channels?: string | string[] | undefined;
    /**
     * if true, the data object passed to server.events.emit() is cloned before it is passed to the listeners (unless an override specified by each listener). Defaults to false (data is passed as-is).
     */
    clone?: boolean | undefined;
    /**
     * if true, the data object passed to server.event.emit() must be an array and the listener method is called with each array element passed as a separate argument (unless an override specified
     * by each listener). This should only be used when the emitted data structure is known and predictable. Defaults to false (data is emitted as a single argument regardless of its type).
     */
    spread?: boolean | undefined;
    /**
     * if true and the criteria object passed to server.event.emit() includes tags, the tags are mapped to an object (where each tag string is the key and the value is true) which is appended to
     * the arguments list at the end. A configuration override can be set by each listener. Defaults to false.
     */
    tags?: boolean | undefined;
    /**
     * if true, the same event name can be registered multiple times where the second registration is ignored. Note that if the registration config is changed between registrations, only the first
     * configuration is used. Defaults to false (a duplicate registration will throw an error).
     */
    shared?: boolean | undefined;
}

/**
 * A criteria object with the following optional keys (unless noted otherwise):
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-servereventsoncriteria-listener)
 *
 * The type parameter T is the type of the name of the event.
 */
export interface ServerEventCriteria<T> {
    /** (required) the event name string. */
    name: T;
    /**
     * a string or array of strings specifying the event channels to subscribe to. If the event registration specified a list of allowed channels, the channels array must match the allowed
     * channels. If channels are specified, event updates without any channel designation will not be included in the subscription. Defaults to no channels filter.
     */
    channels?: string | string[] | undefined;
    /** if true, the data object passed to server.event.emit() is cloned before it is passed to the listener method. Defaults to the event registration option (which defaults to false). */
    clone?: boolean | undefined;
    /**
     * a positive integer indicating the number of times the listener can be called after which the subscription is automatically removed. A count of 1 is the same as calling server.events.once().
     * Defaults to no limit.
     */
    count?: number | undefined;
    /**
     * filter - the event tags (if present) to subscribe to which can be one of:
     * * a tag string.
     * * an array of tag strings.
     * * an object with the following:
     * * * tags - a tag string or array of tag strings.
     * * * all - if true, all tags must be present for the event update to match the subscription. Defaults to false (at least one matching tag).
     */
    filter?: string | string[] | {tags: string | string[], all?: boolean | undefined} | undefined;
    /**
     * if true, and the data object passed to server.event.emit() is an array, the listener method is called with each array element passed as a separate argument. This should only be used
     * when the emitted data structure is known and predictable. Defaults to the event registration option (which defaults to false).
     */
    spread?: boolean | undefined;
    /**
     * if true and the criteria object passed to server.event.emit() includes tags, the tags are mapped to an object (where each tag string is the key and the value is true) which is appended
     * to the arguments list at the end. Defaults to the event registration option (which defaults to false).
     */
    tags?: boolean | undefined;
}

export interface LogEvent {
    /** the event timestamp. */
    timestamp: string;
    /** an array of tags identifying the event (e.g. ['error', 'http']) */
    tags: string[];
    /** set to 'internal' for internally generated events, otherwise 'app' for events generated by server.log() */
    channel: 'internal' | 'app';
    /** the request identifier. */
    request: string;
    /** event-specific information. Available when event data was provided and is not an error. Errors are passed via error. */
    data: object;
    /** the error object related to the event if applicable. Cannot appear together with data */
    error: object;
}

export interface RequestEvent {
    /** the event timestamp. */
    timestamp: string;
    /** an array of tags identifying the event (e.g. ['error', 'http']) */
    tags: string[];
    /** set to 'internal' for internally generated events, otherwise 'app' for events generated by server.log() */
    channel: 'internal' | 'app' | 'error';
    /** event-specific information. Available when event data was provided and is not an error. Errors are passed via error. */
    data: object;
    /** the error object related to the event if applicable. Cannot appear together with data */
    error: object;
}

export type LogEventHandler = (event: LogEvent, tags: { [key: string]: true }) => void;
export type RequestEventHandler = (request: Request, event: RequestEvent, tags: { [key: string]: true }) => void;
export type ResponseEventHandler = (request: Request) => void;
export type RouteEventHandler = (route: RequestRoute) => void;
export type StartEventHandler = () => void;
export type StopEventHandler = () => void;

export interface PodiumEvent<K extends string, T> {
    emit(criteria: K, listener: (value: T) => void): void;

    on(criteria: K, listener: (value: T) => void): void;

    once(criteria: K, listener: (value: T) => void): void;

    once(criteria: K): Promise<T>;

    removeListener(criteria: K, listener: Podium.Listener): this;

    removeAllListeners(criteria: K): this;

    hasListeners(criteria: K): this;
}

/**
 * Access: podium public interface.
 * The server events emitter. Utilizes the podium with support for event criteria validation, channels, and filters.
 * Use the following methods to interact with server.events:
 * [server.event(events)](https://github.com/hapijs/hapi/blob/master/API.md#server.event()) - register application events.
 * [server.events.emit(criteria, data)](https://github.com/hapijs/hapi/blob/master/API.md#server.events.emit()) - emit server events.
 * [server.events.on(criteria, listener)](https://github.com/hapijs/hapi/blob/master/API.md#server.events.on()) - subscribe to all events.
 * [server.events.once(criteria, listener)](https://github.com/hapijs/hapi/blob/master/API.md#server.events.once()) - subscribe to
 * Other methods include: server.events.removeListener(name, listener), server.events.removeAllListeners(name), and server.events.hasListeners(name).
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverevents)
 */
export interface ServerEvents extends Podium {
    /**
     * Subscribe to an event where:
     * @param criteria - the subscription criteria which must be one of:
     * * event name string which can be any of the built-in server events
     * * a custom application event registered with server.event().
     * * a criteria object
     * @param listener - the handler method set to receive event updates. The function signature depends on the event argument, and the spread and tags options.
     * @return Return value: none.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-servereventsoncriteria-listener)
     * See ['log' event](https://github.com/hapijs/hapi/blob/master/API.md#-log-event)
     * See ['request' event](https://github.com/hapijs/hapi/blob/master/API.md#-request-event)
     * See ['response' event](https://github.com/hapijs/hapi/blob/master/API.md#-response-event)
     * See ['route' event](https://github.com/hapijs/hapi/blob/master/API.md#-route-event)
     * See ['start' event](https://github.com/hapijs/hapi/blob/master/API.md#-start-event)
     * See ['stop' event](https://github.com/hapijs/hapi/blob/master/API.md#-stop-event)
     */
    on(criteria: 'log' | ServerEventCriteria<'log'>, listener: LogEventHandler): void;

    on(criteria: 'request' | ServerEventCriteria<'request'>, listener: RequestEventHandler): void;

    on(criteria: 'response' | ServerEventCriteria<'response'>, listener: ResponseEventHandler): void;

    on(criteria: 'route' | ServerEventCriteria<'route'>, listener: RouteEventHandler): void;

    on(criteria: 'start' | ServerEventCriteria<'start'>, listener: StartEventHandler): void;

    on(criteria: 'stop' | ServerEventCriteria<'stop'>, listener: StopEventHandler): void;

    /**
     * Same as calling [server.events.on()](https://github.com/hapijs/hapi/blob/master/API.md#server.events.on()) with the count option set to 1.
     * @param criteria - the subscription criteria which must be one of:
     * * event name string which can be any of the built-in server events
     * * a custom application event registered with server.event().
     * * a criteria object
     * @param listener - the handler method set to receive event updates. The function signature depends on the event argument, and the spread and tags options.
     * @return Return value: none.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-servereventsoncecriteria-listener)
     */
    once(criteria: 'log' | ServerEventCriteria<'log'>, listener: LogEventHandler): void;

    once(criteria: 'request' | ServerEventCriteria<'request'>, listener: RequestEventHandler): void;

    once(criteria: 'response' | ServerEventCriteria<'response'>, listener: ResponseEventHandler): void;

    once(criteria: 'route' | ServerEventCriteria<'route'>, listener: RouteEventHandler): void;

    once(criteria: 'start' | ServerEventCriteria<'start'>, listener: StartEventHandler): void;

    once(criteria: 'stop' | ServerEventCriteria<'stop'>, listener: StopEventHandler): void;

    /**
     * Same as calling server.events.on() with the count option set to 1.
     * @param criteria - the subscription criteria which must be one of:
     * * event name string which can be any of the built-in server events
     * * a custom application event registered with server.event().
     * * a criteria object
     * @return Return value: a promise that resolves when the event is emitted.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-await-servereventsoncecriteria)
     */
    once(criteria: string | ServerEventCriteria<string>): Promise<any>;

    /**
     * The follow method is only mentioned in Hapi API. The doc about that method can be found [here](https://github.com/hapijs/podium/blob/master/API.md#podiumremovelistenername-listener)
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverevents)
     */
    removeListener(name: string, listener: Podium.Listener): Podium;

    /**
     * The follow method is only mentioned in Hapi API. The doc about that method can be found [here](https://github.com/hapijs/podium/blob/master/API.md#podiumremovealllistenersname)
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverevents)
     */
    removeAllListeners(name: string): Podium;

    /**
     * The follow method is only mentioned in Hapi API. The doc about that method can be found [here](https://github.com/hapijs/podium/blob/master/API.md#podiumhaslistenersname)
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverevents)
     */
    hasListeners(name: string): boolean;
}

/**
 * The extension point event name. The available extension points include the request extension points as well as the following server extension points:
 * 'onPreStart' - called before the connection listeners are started.
 * 'onPostStart' - called after the connection listeners are started.
 * 'onPreStop' - called before the connection listeners are stopped.
 * 'onPostStop' - called after the connection listeners are stopped.
 * For context [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverextevents)
 * For context [See docs](https://github.com/hapijs/hapi/blob/master/API.md#request-lifecycle)
 */
export type ServerExtType = 'onPreStart' | 'onPostStart' | 'onPreStop' | 'onPostStop';
export type RouteRequestExtType = 'onPreAuth'
    | 'onCredentials'
    | 'onPostAuth'
    | 'onPreHandler'
    | 'onPostHandler'
    | 'onPreResponse';

export type ServerRequestExtType =
    RouteRequestExtType
    | 'onRequest';

/**
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverextevents)
 * Registers an extension function in one of the request lifecycle extension points where:
 * @param events - an object or array of objects with the following:
 * * type - (required) the extension point event name. The available extension points include the request extension points as well as the following server extension points:
 * * * 'onPreStart' - called before the connection listeners are started.
 * * * 'onPostStart' - called after the connection listeners are started.
 * * * 'onPreStop' - called before the connection listeners are stopped.
 * * * 'onPostStop' - called after the connection listeners are stopped.
 * * method - (required) a function or an array of functions to be executed at a specified point during request processing. The required extension function signature is:
 * * * server extension points: async function(server) where:
 * * * * server - the server object.
 * * * * this - the object provided via options.bind or the current active context set with server.bind().
 * * * request extension points: a lifecycle method.
 * * options - (optional) an object with the following:
 * * * before - a string or array of strings of plugin names this method must execute before (on the same event). Otherwise, extension methods are executed in the order added.
 * * * after - a string or array of strings of plugin names this method must execute after (on the same event). Otherwise, extension methods are executed in the order added.
 * * * bind - a context object passed back to the provided method (via this) when called. Ignored if the method is an arrow function.
 * * * sandbox - if set to 'plugin' when adding a request extension points the extension is only added to routes defined by the current plugin. Not allowed when configuring route-level extensions, or
 *     when adding server extensions. Defaults to 'server' which applies to any route added to the server the extension is added to.
 * @return void
 */
export interface ServerExtEventsObject {
    /**
     * (required) the extension point event name. The available extension points include the request extension points as well as the following server extension points:
     * * 'onPreStart' - called before the connection listeners are started.
     * * 'onPostStart' - called after the connection listeners are started.
     * * 'onPreStop' - called before the connection listeners are stopped.
     */
    type: ServerExtType;
    /**
     * (required) a function or an array of functions to be executed at a specified point during request processing. The required extension function signature is:
     * * server extension points: async function(server) where:
     * * * server - the server object.
     * * * this - the object provided via options.bind or the current active context set with server.bind().
     * * request extension points: a lifecycle method.
     */
    method: ServerExtPointFunction | ServerExtPointFunction[];
    options?: ServerExtOptions | undefined;
}

export interface RouteExtObject {
    method: Lifecycle.Method;
    options?: ServerExtOptions | undefined;
}

/**
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverextevents)
 * Registers an extension function in one of the request lifecycle extension points where:
 * @param events - an object or array of objects with the following:
 * * type - (required) the extension point event name. The available extension points include the request extension points as well as the following server extension points:
 * * * 'onPreStart' - called before the connection listeners are started.
 * * * 'onPostStart' - called after the connection listeners are started.
 * * * 'onPreStop' - called before the connection listeners are stopped.
 * * * 'onPostStop' - called after the connection listeners are stopped.
 * * method - (required) a function or an array of functions to be executed at a specified point during request processing. The required extension function signature is:
 * * * server extension points: async function(server) where:
 * * * * server - the server object.
 * * * * this - the object provided via options.bind or the current active context set with server.bind().
 * * * request extension points: a lifecycle method.
 * * options - (optional) an object with the following:
 * * * before - a string or array of strings of plugin names this method must execute before (on the same event). Otherwise, extension methods are executed in the order added.
 * * * after - a string or array of strings of plugin names this method must execute after (on the same event). Otherwise, extension methods are executed in the order added.
 * * * bind - a context object passed back to the provided method (via this) when called. Ignored if the method is an arrow function.
 * * * sandbox - if set to 'plugin' when adding a request extension points the extension is only added to routes defined by the current plugin. Not allowed when configuring route-level extensions, or
 *     when adding server extensions. Defaults to 'server' which applies to any route added to the server the extension is added to.
 * @return void
 */
export interface ServerExtEventsRequestObject {
    /**
     * (required) the extension point event name. The available extension points include the request extension points as well as the following server extension points:
     * * 'onPreStart' - called before the connection listeners are started.
     * * 'onPostStart' - called after the connection listeners are started.
     * * 'onPreStop' - called before the connection listeners are stopped.
     * * 'onPostStop' - called after the connection listeners are stopped.
     */
    type: ServerRequestExtType;
    /**
     * (required) a function or an array of functions to be executed at a specified point during request processing. The required extension function signature is:
     * * server extension points: async function(server) where:
     * * * server - the server object.
     * * * this - the object provided via options.bind or the current active context set with server.bind().
     * * request extension points: a lifecycle method.
     */
    method: Lifecycle.Method | Lifecycle.Method[];
    /**
     * (optional) an object with the following:
     * * before - a string or array of strings of plugin names this method must execute before (on the same event). Otherwise, extension methods are executed in the order added.
     * * after - a string or array of strings of plugin names this method must execute after (on the same event). Otherwise, extension methods are executed in the order added.
     * * bind - a context object passed back to the provided method (via this) when called. Ignored if the method is an arrow function.
     * * sandbox - if set to 'plugin' when adding a request extension points the extension is only added to routes defined by the current plugin. Not allowed when configuring route-level extensions,
     * or when adding server extensions. Defaults to 'server' which applies to any route added to the server the extension is added to.
     */
    options?: ServerExtOptions | undefined;
}

export type ServerExtPointFunction = (server: Server) => void;

/**
 * An object with the following:
 * * before - a string or array of strings of plugin names this method must execute before (on the same event). Otherwise, extension methods are executed in the order added.
 * * after - a string or array of strings of plugin names this method must execute after (on the same event). Otherwise, extension methods are executed in the order added.
 * * bind - a context object passed back to the provided method (via this) when called. Ignored if the method is an arrow function.
 * * sandbox - if set to 'plugin' when adding a request extension points the extension is only added to routes defined by the current plugin. Not allowed when configuring route-level extensions, or
 * when adding server extensions. Defaults to 'server' which applies to any route added to the server the extension is added to. For context [See
 * docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverextevents)
 */
export interface ServerExtOptions {
    /**
     * a string or array of strings of plugin names this method must execute before (on the same event). Otherwise, extension methods are executed in the order added.
     */
    before?: string | string[] | undefined;
    /**
     * a string or array of strings of plugin names this method must execute after (on the same event). Otherwise, extension methods are executed in the order added.
     */
    after?: string | string[] | undefined;
    /**
     * a context object passed back to the provided method (via this) when called. Ignored if the method is an arrow function.
     */
    bind?: object | undefined;
    /**
     * if set to 'plugin' when adding a request extension points the extension is only added to routes defined by the current plugin. Not allowed when configuring route-level extensions, or when
     * adding server extensions. Defaults to 'server' which applies to any route added to the server the extension is added to.
     */
    sandbox?: 'server' | 'plugin' | undefined;
}

/**
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverinfo)
 * An object containing information about the server where:
 */
export interface ServerInfo {
    /**
     * a unique server identifier (using the format '{hostname}:{pid}:{now base36}').
     */
    id: string;

    /**
     * server creation timestamp.
     */
    created: number;

    /**
     * server start timestamp (0 when stopped).
     */
    started: number;

    /**
     * the connection [port](https://github.com/hapijs/hapi/blob/master/API.md#server.options.port) based on the following rules:
     *  * before the server has been started: the configured port value.
     *  * after the server has been started: the actual port assigned when no port is configured or was set to 0.
     */
    port: number | string;

    /**
     * The [host](https://github.com/hapijs/hapi/blob/master/API.md#server.options.host) configuration value.
     */
    host: string;

    /**
     * the active IP address the connection was bound to after starting. Set to undefined until the server has been
     * started or when using a non TCP port (e.g. UNIX domain socket).
     */
    address: undefined | string;

    /**
     *  the protocol used:
     * * 'http' - HTTP.
     * * 'https' - HTTPS.
     * * 'socket' - UNIX domain socket or Windows named pipe.
     */
    protocol: 'http' | 'https' | 'socket';

    /**
     * a string representing the connection (e.g. 'http://example.com:8080' or 'socket:/unix/domain/socket/path'). Contains
     * the uri value if set, otherwise constructed from the available settings. If no port is configured or is set
     * to 0, the uri will not include a port component until the server is started.
     */
    uri: string;
}

/**
 * An object with:
 * * method - (optional) the request HTTP method (e.g. 'POST'). Defaults to 'GET'.
 * * url - (required) the request URL. If the URI includes an authority (e.g. 'example.com:8080'), it is used to automatically set an HTTP 'Host' header, unless one was specified in headers.
 * * headers - (optional) an object with optional request headers where each key is the header name and the value is the header content. Defaults to no additions to the default shot headers.
 * * payload - (optional) an string, buffer or object containing the request payload. In case of an object it will be converted to a string for you. Defaults to no payload. Note that payload
 * processing defaults to 'application/json' if no 'Content-Type' header provided.
 * * credentials - (optional) an credentials object containing authentication information. The credentials are used to bypass the default authentication strategies, and are validated directly as if
 * they were received via an authentication scheme. Defaults to no credentials.
 * * artifacts - (optional) an artifacts object containing authentication artifact information. The artifacts are used to bypass the default authentication strategies, and are validated directly as
 * if they were received via an authentication scheme. Ignored if set without credentials. Defaults to no artifacts.
 * * app - (optional) sets the initial value of request.app, defaults to {}.
 * * plugins - (optional) sets the initial value of request.plugins, defaults to {}.
 * * allowInternals - (optional) allows access to routes with config.isInternal set to true. Defaults to false.
 * * remoteAddress - (optional) sets the remote address for the incoming connection.
 * * simulate - (optional) an object with options used to simulate client request stream conditions for testing:
 * * error - if true, emits an 'error' event after payload transmission (if any). Defaults to false.
 * * close - if true, emits a 'close' event after payload transmission (if any). Defaults to false.
 * * end - if false, does not end the stream. Defaults to true.
 * * split - indicates whether the request payload will be split into chunks. Defaults to undefined, meaning payload will not be chunked.
 * * validate - (optional) if false, the options inputs are not validated. This is recommended for run-time usage of inject() to make it perform faster where input validation can be tested
 * separately.
 * For context [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-await-serverinjectoptions)
 * For context [Shot module](https://github.com/hapijs/shot)
 */
export interface ServerInjectOptions extends Shot.RequestOptions {
    /**
     * an credentials object containing authentication information. The credentials are used to bypass the default authentication strategies, and are validated directly as if they were received via
     * an authentication scheme. Defaults to no credentials.
     */
    credentials?: AuthCredentials | undefined;
    /**
     * (an artifacts object containing authentication artifact information. The artifacts are used to bypass the default authentication strategies, and are validated directly as if they were received
     * via an authentication scheme. Ignored if set without credentials. Defaults to no artifacts.
     */
    artifacts?: object | undefined;
    /**
     * sets the initial value of request.app, defaults to {}.
     */
    app?: ApplicationState | undefined;
    /**
     * sets the initial value of request.plugins, defaults to {}.
     */
    plugins?: PluginsStates | undefined;
    /**
     * allows access to routes with config.isInternal set to true. Defaults to false.
     */
    allowInternals?: boolean | undefined;
}

/**
 * A response object with the following properties:
 * * statusCode - the HTTP status code.
 * * headers - an object containing the headers set.
 * * payload - the response payload string.
 * * rawPayload - the raw response payload buffer.
 * * raw - an object with the injection request and response objects:
 * * req - the simulated node request object.
 * * res - the simulated node response object.
 * * result - the raw handler response (e.g. when not a stream or a view) before it is serialized for transmission. If not available, the value is set to payload. Useful for inspection and reuse of
 * the internal objects returned (instead of parsing the response string).
 * * request - the request object.
 * For context [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-await-serverinjectoptions)
 * For context [Shot module](https://github.com/hapijs/shot)
 */
export interface ServerInjectResponse extends Shot.ResponseObject {
    /**
     * the raw handler response (e.g. when not a stream or a view) before it is serialized for transmission. If not available, the value is set to payload. Useful for inspection and reuse of the
     * internal objects returned (instead of parsing the response string).
     */
    result: object | undefined;
    /**
     * the request object.
     */
    request: Request;
}

/**
 * The method function with a signature async function(...args, [flags]) where:
 * * ...args - the method function arguments (can be any number of arguments or none).
 * * flags - when caching is enabled, an object used to set optional method result flags:
 * * * ttl - 0 if result is valid but cannot be cached. Defaults to cache policy.
 * For reference [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-servermethodname-method-options)
 */
export type ServerMethod = (...args: any[]) => any;

/**
 * The same cache configuration used in server.cache().
 * The generateTimeout option is required.
 * For reference [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-servermethodname-method-options)
 * For reference [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-servercacheoptions)
 */
export interface ServerMethodCache extends PolicyOptions<any> {
    generateTimeout: number | false;
}

/**
 * Configuration object:
 * * bind - a context object passed back to the method function (via this) when called. Defaults to active context (set via server.bind() when the method is registered. Ignored if the method is an
 * arrow function.
 * * cache - the same cache configuration used in server.cache(). The generateTimeout option is required.
 * * generateKey - a function used to generate a unique key (for caching) from the arguments passed to the method function (the flags argument is not passed as input). The server will automatically
 * generate a unique key if the function's arguments are all of types 'string', 'number', or 'boolean'. However if the method uses other types of arguments, a key generation function must be provided
 * which takes the same arguments as the function and returns a unique string (or null if no key can be generated). For reference [See
 * docs](https://github.com/hapijs/hapi/blob/master/API.md#-servermethodname-method-options)
 */
export interface ServerMethodOptions {
    /**
     * a context object passed back to the method function (via this) when called. Defaults to active context (set via server.bind() when the method is registered. Ignored if the method is an arrow
     * function.
     */
    bind?: object | undefined;
    /**
     * the same cache configuration used in server.cache(). The generateTimeout option is required.
     */
    cache?: ServerMethodCache | undefined;
    /**
     * a function used to generate a unique key (for caching) from the arguments passed to the method function (the flags argument is not passed as input). The server will automatically generate a
     * unique key if the function's arguments are all of types 'string', 'number', or 'boolean'. However if the method uses other types of arguments, a key generation function must be provided which
     * takes the same arguments as the function and returns a unique string (or null if no key can be generated).
     */
    generateKey?(...args: any[]): string | null;
}

/**
 * An object or an array of objects where each one contains:
 * * name - the method name.
 * * method - the method function.
 * * options - (optional) settings.
 * For reference [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-servermethodmethods)
 */
export interface ServerMethodConfigurationObject {
    /**
     * the method name.
     */
    name: string;
    /**
     * the method function.
     */
    method: ServerMethod;
    /**
     * (optional) settings.
     */
    options?: ServerMethodOptions | undefined;
}

/**
 * hapi uses catbox for its cache implementation which includes support for common storage solutions (e.g. Redis,
 * MongoDB, Memcached, Riak, among others). Caching is only utilized if methods and plugins explicitly store their state in the cache.
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-cache)
 */
export interface ServerOptionsCache extends PolicyOptions<any> {
    /** a class, a prototype function, or a catbox engine object. */
    engine?: EnginePrototypeOrObject | undefined;

    /**
     * an identifier used later when provisioning or configuring caching for server methods or plugins. Each cache name must be unique. A single item may omit the name option which defines
     * the default cache. If every cache includes a name, a default memory cache is provisioned as well.
     */
    name?: string | undefined;

    /** if true, allows multiple cache users to share the same segment (e.g. multiple methods using the same cache storage container). Default to false. */
    shared?: boolean | undefined;

    /** (optional) string used to isolate cached data. Defaults to 'hapi-cache'. */
    partition?: string | undefined;

    /** other options passed to the catbox strategy used. Other options are only passed to catbox when engine above is a class or function and ignored if engine is a catbox engine object). */
    [s: string]: any;
}

export interface ServerOptionsCompression {
    minBytes: number;
}

/**
 * Empty interface to allow for custom augmentation.
 */
/* tslint:disable-next-line:no-empty-interface */
export interface ServerOptionsApp {
}

/**
 * The server options control the behavior of the server object. Note that the options object is deeply cloned
 * (with the exception of listener which is shallowly copied) and should not contain any values that are unsafe to perform deep copy on.
 * All options are optionals.
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-server-options)
 */
export interface ServerOptions {
    /**
     * Default value: '0.0.0.0' (all available network interfaces).
     * Sets the hostname or IP address the server will listen on. If not configured, defaults to host if present, otherwise to all available network interfaces. Set to '127.0.0.1' or 'localhost' to
     * restrict the server to only those coming from the same host.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serveroptionsaddress)
     */
    address?: string | undefined;

    /**
     * Default value: {}.
     * Provides application-specific configuration which can later be accessed via server.settings.app. The framework does not interact with this object. It is simply a reference made available
     * anywhere a server reference is provided. Note the difference between server.settings.app which is used to store static configuration values and server.app which is meant for storing run-time
     * state.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serveroptionsapp)
     */
    app?: ServerOptionsApp | undefined;

    /**
     * Default value: true.
     * Used to disable the automatic initialization of the listener. When false, indicates that the listener will be started manually outside the framework.
     * Cannot be set to true along with a port value.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serveroptionsautolisten)
     */
    autoListen?: boolean | undefined;

    /**
     * Default value: { engine: require('catbox-memory' }.
     * Sets up server-side caching providers. Every server includes a default cache for storing application state. By default, a simple memory-based cache is created which has limited capacity and
     * capabilities. hapi uses catbox for its cache implementation which includes support for common storage solutions (e.g. Redis, MongoDB, Memcached, Riak, among others). Caching is only utilized
     * if methods and plugins explicitly store their state in the cache. The server cache configuration only defines the storage container itself. The configuration can be assigned one or more
     * (array):
     * * a class or prototype function (usually obtained by calling require() on a catbox strategy such as require('catbox-redis')). A new catbox client will be created internally using this
     * function.
     * * a configuration object with the following:
     * * * engine - a class, a prototype function, or a catbox engine object.
     * * * name - an identifier used later when provisioning or configuring caching for server methods or plugins. Each cache name must be unique. A single item may omit the name option which defines
     * the default cache. If every cache includes a name, a default memory cache is provisioned as well.
     * * * shared - if true, allows multiple cache users to share the same segment (e.g. multiple methods using the same cache storage container). Default to false.
     * * * partition - (optional) string used to isolate cached data. Defaults to 'hapi-cache'.
     * * * other options passed to the catbox strategy used. Other options are only passed to catbox when engine above is a class or function and ignored if engine is a catbox engine object).
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serveroptionscache)
     */
    cache?: EnginePrototype<any> | ServerOptionsCache | ServerOptionsCache[] | undefined;

    /**
     * Default value: { minBytes: 1024 }.
     * Defines server handling of content encoding requests. If false, response content encoding is disabled and no compression is performed by the server.
     */
    compression?: boolean | ServerOptionsCompression | undefined;

    /**
     * Default value: { request: ['implementation'] }.
     * Determines which logged events are sent to the console. This should only be used for development and does not affect which events are actually logged internally and recorded. Set to false to
     * disable all console logging, or to an object with:
     * * log - a string array of server log tags to be displayed via console.error() when the events are logged via server.log() as well as internally generated server logs. Defaults to no output.
     * * request - a string array of request log tags to be displayed via console.error() when the events are logged via request.log() as well as internally generated request logs. For example, to
     * display all errors, set the option to ['error']. To turn off all console debug messages set it to false. To display all request logs, set it to '*'. Defaults to uncaught errors thrown in
     * external code (these errors are handled automatically and result in an Internal Server Error response) or runtime errors due to developer error. For example, to display all errors, set the log
     * or request to ['error']. To turn off all output set the log or request to false. To display all server logs, set the log or request to '*'. To disable all debug information, set debug to
     * false.
     */
    debug?: false | {
        log?: string[] | false | undefined;
        request?: string[] | false | undefined;
    } | undefined;

    /**
     * Default value: the operating system hostname and if not available, to 'localhost'.
     * The public hostname or IP address. Used to set server.info.host and server.info.uri and as address is none provided.
     */
    host?: string | undefined;

    /**
     * Default value: none.
     * An optional node HTTP (or HTTPS) http.Server object (or an object with a compatible interface).
     * If the listener needs to be manually started, set autoListen to false.
     * If the listener uses TLS, set tls to true.
     */
    listener?: http.Server | undefined;

    /**
     * Default value: { sampleInterval: 0 }.
     * Server excessive load handling limits where:
     * * sampleInterval - the frequency of sampling in milliseconds. When set to 0, the other load options are ignored. Defaults to 0 (no sampling).
     * * maxHeapUsedBytes - maximum V8 heap size over which incoming requests are rejected with an HTTP Server Timeout (503) response. Defaults to 0 (no limit).
     * * maxRssBytes - maximum process RSS size over which incoming requests are rejected with an HTTP Server Timeout (503) response. Defaults to 0 (no limit).
     * * maxEventLoopDelay - maximum event loop delay duration in milliseconds over which incoming requests are rejected with an HTTP Server Timeout (503) response. Defaults to 0 (no limit).
     */
    load?: {
        /** the frequency of sampling in milliseconds. When set to 0, the other load options are ignored. Defaults to 0 (no sampling). */
        sampleInterval?: number | undefined;

        /**
         * Max concurrent requests.
         */
        concurrent?: number | undefined;

        /** maximum V8 heap size over which incoming requests are rejected with an HTTP Server Timeout (503) response. Defaults to 0 (no limit). */
        maxHeapUsedBytes?: number | undefined;
        /**
         * maximum process RSS size over which incoming requests are rejected with an HTTP Server Timeout (503) response. Defaults to 0 (no limit).
         */
        maxRssBytes?: number | undefined;
        /**
         * maximum event loop delay duration in milliseconds over which incoming requests are rejected with an HTTP Server Timeout (503) response.
         * Defaults to 0 (no limit).
         */
        maxEventLoopDelay?: number | undefined;
    } | undefined;

    /**
     * Default value: none.
     * Options passed to the mimos module when generating the mime database used by the server (and accessed via server.mime):
     * * override - an object hash that is merged into the built in mime information specified here. Each key value pair represents a single mime object. Each override value must contain:
     * * key - the lower-cased mime-type string (e.g. 'application/javascript').
     * * value - an object following the specifications outlined here. Additional values include:
     * * * type - specify the type value of result objects, defaults to key.
     * * * predicate - method with signature function(mime) when this mime type is found in the database, this function will execute to allows customizations.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serveroptionsmime)
     */
    mime?: MimosOptions | undefined;

    /**
     * Default value: {}.
     * Plugin-specific configuration which can later be accessed via server.settings.plugins. plugins is an object where each key is a plugin name and the value is the configuration. Note the
     * difference between server.settings.plugins which is used to store static configuration values and server.plugins which is meant for storing run-time state.
     */
    plugins?: PluginSpecificConfiguration | undefined;

    /**
     * Default value: 0 (an ephemeral port).
     * The TCP port the server will listen to. Defaults the next available port when the server is started (and assigned to server.info.port).
     * If port is a string containing a '/' character, it is used as a UNIX domain socket path. If it starts with '\.\pipe', it is used as a Windows named pipe.
     */
    port?: number | string | undefined;

    /**
     * Default value: { isCaseSensitive: true, stripTrailingSlash: false }.
     * Controls how incoming request URIs are matched against the routing table:
     * * isCaseSensitive - determines whether the paths '/example' and '/EXAMPLE' are considered different resources. Defaults to true.
     * * stripTrailingSlash - removes trailing slashes on incoming paths. Defaults to false.
     */
    router?: {
        isCaseSensitive?: boolean | undefined;
        stripTrailingSlash?: boolean | undefined;
    } | undefined;

    /**
     * Default value: none.
     * A route options object used as the default configuration for every route.
     */
    routes?: RouteOptions | undefined;

    /**
     * Default value:
     * {
     *     strictHeader: true,
     *     ignoreErrors: false,
     *     isSecure: true,
     *     isHttpOnly: true,
     *     isSameSite: 'Strict',
     *     encoding: 'none'
     * }
     * Sets the default configuration for every state (cookie) set explicitly via server.state() or implicitly (without definition) using the state configuration object.
     */
    // TODO I am not sure if I need to use all the server.state() definition (like the default value) OR only the options below. The v16 use "any" here.
    // state?: ServerStateCookieOptions;
    state?: {
        strictHeader?: boolean | undefined,
        ignoreErrors?: boolean | undefined,
        isSecure?: boolean | undefined,
        isHttpOnly?: boolean | undefined,
        isSameSite?: false | 'Strict' | 'Lax' | undefined,
        encoding?: 'none' | 'base64' | 'base64json' | 'form' | 'iron' | undefined
    } | undefined;

    /**
     * Default value: none.
     * Used to create an HTTPS connection. The tls object is passed unchanged to the node HTTPS server as described in the node HTTPS documentation.
     */
    tls?: boolean | https.ServerOptions | undefined;

    /**
     * Default value: constructed from runtime server information.
     * The full public URI without the path (e.g. 'http://example.com:8080'). If present, used as the server server.info.uri, otherwise constructed from the server settings.
     */
    uri?: string | undefined;
}

/**
 * The realm object contains sandboxed server settings specific to each plugin or authentication strategy. When registering a plugin or an authentication scheme, a server object reference is provided
 * with a new server.realm container specific to that registration. It allows each plugin to maintain its own settings without leaking and affecting other plugins. For example, a plugin can set a
 * default file path for local resources without breaking other plugins' configured paths. When calling server.bind(), the active realm's settings.bind property is set which is then used by routes
 * and extensions added at the same level (server root or plugin).
 *
 * https://github.com/hapijs/hapi/blob/master/API.md#server.realm
 */
export interface ServerRealm {
    /** when the server object is provided as an argument to the plugin register() method, modifiers provides the registration preferences passed the server.register() method and includes: */
    modifiers: {
        /** routes preferences: */
        route: {
            /**
             * the route path prefix used by any calls to server.route() from the server. Note that if a prefix is used and the route path is set to '/', the resulting path will not include
             * the trailing slash.
             */
            prefix: string;
            /** the route virtual host settings used by any calls to server.route() from the server. */
            vhost: string;
        }
    };
    /** the realm of the parent server object, or null for the root server. */
    parent: ServerRealm | null;
    /** the active plugin name (empty string if at the server root). */
    plugin: string;
    /** the plugin options object passed at registration. */
    pluginOptions: object;
    /** plugin-specific state to be shared only among activities sharing the same active state. plugins is an object where each key is a plugin name and the value is the plugin state. */
    plugins: PluginsStates;
    /** settings overrides */
    settings: {
        files: {
            relativeTo: string;
        };
        bind: object;
    };
}

/**
 * Registration options (different from the options passed to the registration function):
 * * once - if true, subsequent registrations of the same plugin are skipped without error. Cannot be used with plugin options. Defaults to false. If not set to true, an error will be thrown the
 * second time a plugin is registered on the server.
 * * routes - modifiers applied to each route added by the plugin:
 * * * prefix - string added as prefix to any route path (must begin with '/'). If a plugin registers a child plugin the prefix is passed on to the child or is added in front of the child-specific
 * prefix.
 * * * vhost - virtual host string (or array of strings) applied to every route. The outer-most vhost overrides the any nested configuration.
 * For reference [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-await-serverregisterplugins-options)
 */
export interface ServerRegisterOptions {
    /**
     * if true, subsequent registrations of the same plugin are skipped without error. Cannot be used with plugin options. Defaults to false. If not set to true, an error will be thrown the second
     * time a plugin is registered on the server.
     */
    once?: boolean | undefined;
    /**
     * modifiers applied to each route added by the plugin:
     */
    routes?: {
        /**
         * string added as prefix to any route path (must begin with '/'). If a plugin registers a child plugin the prefix is passed on to the child or is added in front of the child-specific prefix.
         */
        prefix: string;
        /**
         * virtual host string (or array of strings) applied to every route. The outer-most vhost overrides the any nested configuration.
         */
        vhost?: string | string[] | undefined;
    } | undefined;
}

/**
 * An object with the following:
 * * plugin - a plugin object.
 * * options - (optional) options passed to the plugin during registration.
 * * once - if true, subsequent registrations of the same plugin are skipped without error. Cannot be used with plugin options. Defaults to false. If not set to true, an error will be thrown the
 * second time a plugin is registered on the server.
 * * routes - modifiers applied to each route added by the plugin:
 * * * prefix - string added as prefix to any route path (must begin with '/'). If a plugin registers a child plugin the prefix is passed on to the child or is added in front of the child-specific
 * prefix.
 * * * vhost - virtual host string (or array of strings) applied to every route. The outer-most vhost overrides the any nested configuration.
 * For reference [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-await-serverregisterplugins-options)
 *
 * The type parameter T is the type of the plugin configuration options.
 */
export interface ServerRegisterPluginObject<T> extends ServerRegisterOptions {
    /**
     * a plugin object.
     */
    plugin: Plugin<T>;
    /**
     * options passed to the plugin during registration.
     */
    options?: T | undefined;
}

export interface ServerRegisterPluginObjectArray<T, U, V, W, X, Y, Z> extends Array<ServerRegisterPluginObject<T>
                                                                                    | ServerRegisterPluginObject<U>
                                                                                    | ServerRegisterPluginObject<V>
                                                                                    | ServerRegisterPluginObject<W>
                                                                                    | ServerRegisterPluginObject<X>
                                                                                    | ServerRegisterPluginObject<Y>
                                                                                    | ServerRegisterPluginObject<Z>
                                                                                    | undefined> {
    0: ServerRegisterPluginObject<T>;
    1?: ServerRegisterPluginObject<U> | undefined;
    2?: ServerRegisterPluginObject<V> | undefined;
    3?: ServerRegisterPluginObject<W> | undefined;
    4?: ServerRegisterPluginObject<X> | undefined;
    5?: ServerRegisterPluginObject<Y> | undefined;
    6?: ServerRegisterPluginObject<Z> | undefined;
}

/* tslint:disable-next-line:no-empty-interface */
export interface HandlerDecorations {
}

/**
 * A route configuration object or an array of configuration objects where each object contains:
 * * path - (required) the absolute path used to match incoming requests (must begin with '/'). Incoming requests are compared to the configured paths based on the server's router configuration. The
 * path can include named parameters enclosed in {} which will be matched against literal values in the request as described in Path parameters.
 * * method - (required) the HTTP method. Typically one of 'GET', 'POST', 'PUT', 'PATCH', 'DELETE', or 'OPTIONS'. Any HTTP method is allowed, except for 'HEAD'. Use '*' to match against any HTTP
 * method (only when an exact match was not found, and any match with a specific method will be given a higher priority over a wildcard match). Can be assigned an array of methods which has the same
 * result as adding the same route with different methods manually.
 * * vhost - (optional) a domain string or an array of domain strings for limiting the route to only requests with a matching host header field. Matching is done against the hostname part of the
 * header only (excluding the port). Defaults to all hosts.
 * * handler - (required when handler is not set) the route handler function called to generate the response after successful authentication and validation.
 * * options - additional route options. The options value can be an object or a function that returns an object using the signature function(server) where server is the server the route is being
 * added to and this is bound to the current realm's bind option.
 * * rules - route custom rules object. The object is passed to each rules processor registered with server.rules(). Cannot be used if route.options.rules is defined.
 * For context [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverrouteroute)
 */
export interface ServerRoute {
    /**
     * (required) the absolute path used to match incoming requests (must begin with '/'). Incoming requests are compared to the configured paths based on the server's router configuration. The path
     * can include named parameters enclosed in {} which will be matched against literal values in the request as described in Path parameters. For context [See
     * docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverrouteroute) For context [See docs](https://github.com/hapijs/hapi/blob/master/API.md#path-parameters)
     */
    path: string;

    /**
     * (required) the HTTP method. Typically one of 'GET', 'POST', 'PUT', 'PATCH', 'DELETE', or 'OPTIONS'. Any HTTP method is allowed, except for 'HEAD'. Use '*' to match against any HTTP method
     * (only when an exact match was not found, and any match with a specific method will be given a higher priority over a wildcard match). Can be assigned an array of methods which has the same
     * result as adding the same route with different methods manually.
     */
    method: Util.HTTP_METHODS_PARTIAL | Util.HTTP_METHODS_PARTIAL[] | string | string[];

    /**
     * (optional) a domain string or an array of domain strings for limiting the route to only requests with a matching host header field. Matching is done against the hostname part of the header
     * only (excluding the port). Defaults to all hosts.
     */
    vhost?: string | string[] | undefined;

    /**
     * (required when handler is not set) the route handler function called to generate the response after successful authentication and validation.
     */
    handler?: Lifecycle.Method | HandlerDecorations | undefined;

    /**
     * additional route options. The options value can be an object or a function that returns an object using the signature function(server) where server is the server the route is being added to
     * and this is bound to the current realm's bind option.
     */
    options?: RouteOptions | ((server: Server) => RouteOptions) | undefined;

    /**
     * route custom rules object. The object is passed to each rules processor registered with server.rules(). Cannot be used if route.options.rules is defined.
     */
    rules?: object | undefined;
}

/**
 * Optional cookie settings
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverstatename-options)
 */
export interface ServerStateCookieOptions {
    /** time-to-live in milliseconds. Defaults to null (session time-life - cookies are deleted when the browser is closed). */
    ttl?: number | null | undefined;
    /** sets the 'Secure' flag. Defaults to true. */
    isSecure?: boolean | undefined;
    /** sets the 'HttpOnly' flag. Defaults to true. */
    isHttpOnly?: boolean | undefined;
    /**
     * sets the 'SameSite' flag. The value must be one of:
     *  * false - no flag.
     *  * 'Strict' - sets the value to 'Strict' (this is the default value).
     *  * 'Lax' - sets the value to 'Lax'.
     */
    isSameSite?: false | 'Strict' | 'Lax' | undefined;
    /** the path scope. Defaults to null (no path). */
    path?: string | null | undefined;
    /** the domain scope. Defaults to null (no domain). */
    domain?: string | null | undefined;

    /**
     * if present and the cookie was not received from the client or explicitly set by the route handler, the
     * cookie is automatically added to the response with the provided value. The value can be
     * a function with signature async function(request) where:
     */
    autoValue?(request: Request): void;

    /**
     * encoding performs on the provided value before serialization. Options are:
     *  * 'none' - no encoding. When used, the cookie value must be a string. This is the default value.
     *  * 'base64' - string value is encoded using Base64.
     *  * 'base64json' - object value is JSON-stringified then encoded using Base64.
     *  * 'form' - object value is encoded using the x-www-form-urlencoded method.
     *  * 'iron' - Encrypts and sign the value using iron.
     */
    encoding?: 'none' | 'base64' | 'base64json' | 'form' | 'iron' | undefined;
    /**
     * an object used to calculate an HMAC for cookie integrity validation. This does not provide privacy, only a mean
     * to verify that the cookie value was generated by the server. Redundant when 'iron' encoding is used. Options are:
     *  * integrity - algorithm options. Defaults to require('iron').defaults.integrity.
     *  * password - password used for HMAC key generation (must be at least 32 characters long).
     */
    sign?: {
        integrity?: SealOptionsSub | undefined;
        password: string;
    } | undefined;
    /** password used for 'iron' encoding (must be at least 32 characters long). */
    password?: string | undefined;
    /** options for 'iron' encoding. Defaults to require('iron').defaults. */
    iron?: SealOptions | undefined;
    /** if true, errors are ignored and treated as missing cookies. */
    ignoreErrors?: boolean | undefined;
    /** if true, automatically instruct the client to remove invalid cookies. Defaults to false. */
    clearInvalid?: boolean | undefined;
    /** if false, allows any cookie value including values in violation of RFC 6265. Defaults to true. */
    strictHeader?: boolean | undefined;
    /** used by proxy plugins (e.g. h2o2). */
    passThrough?: any;
}

/**
 * A single object or an array of object where each contains:
 * * name - the cookie name.
 * * value - the cookie value.
 * * options - cookie configuration to override the server settings.
 */
export interface ServerStateFormat {
    name: string;
    value: string;
    options: ServerStateCookieOptions;
}

/**
 * For context [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverstatename-options)
 * For context [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serveroptionsstate)
 */
export interface ServerState {
    /**
     * The server cookies manager.
     * Access: read only and statehood public interface.
     */
    readonly states: object;

    /**
     * The server cookies manager settings. The settings are based on the values configured in [server.options.state](https://github.com/hapijs/hapi/blob/master/API.md#server.options.state).
     */
    readonly settings: ServerStateCookieOptions;

    /**
     * An object containing the configuration of each cookie added via [server.state()](https://github.com/hapijs/hapi/blob/master/API.md#server.state()) where each key is the
     * cookie name and value is the configuration object.
     */
    readonly cookies: {
        [key: string]: ServerStateCookieOptions;
    };

    /**
     * An array containing the names of all configued cookies.
     */
    readonly names: string[];

    /**
     * Same as calling [server.state()](https://github.com/hapijs/hapi/blob/master/API.md#server.state()).
     */
    add(name: string, options?: ServerStateCookieOptions): void;

    /**
     * Formats an HTTP 'Set-Cookie' header based on the server.options.state where:
     * @param cookies - a single object or an array of object where each contains:
     * * name - the cookie name.
     * * value - the cookie value.
     * * options - cookie configuration to override the server settings.
     * @return Return value: a header string.
     * Note that this utility uses the server configuration but does not change the server state. It is provided for manual cookie formating (e.g. when headers are set manually).
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-async-serverstatesformatcookies)
     */
    format(cookies: ServerStateFormat | ServerStateFormat[]): Promise<string>;

    /**
     * Parses an HTTP 'Cookies' header based on the server.options.state where:
     * @param header - the HTTP header.
     * @return Return value: an object where each key is a cookie name and value is the parsed cookie.
     * Note that this utility uses the server configuration but does not change the server state. It is provided for manual cookie parsing (e.g. when server parsing is disabled).
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-async-serverstatesparseheader)
     */
    parse(header: string): Promise<Util.Dictionary<string>>;
}

/**
 * The method function can have a defaults object or function property. If the property is set to an object, that object is used as the default route config for routes using this handler.
 * If the property is set to a function, the function uses the signature function(method) and returns the route default configuration.
 */
export interface HandlerDecorationMethod {
    (route: RouteOptions, options: any): Lifecycle.Method;
    defaults?: RouteOptions | ((method: any) => RouteOptions) | undefined;
}

/**
 * The general case for decorators added via server.decorate.
 */
export type DecorationMethod<T> = (this: T, ...args: any[]) => any;

/**
 * An empty interface to allow typings of custom plugin properties.
 */
/* tslint:disable-next-line:no-empty-interface */
export interface PluginProperties {
}

export interface ServerMethods extends Util.Dictionary<ServerMethod> {
}

export type DecorateName = string | symbol;

/**
 * The server object is the main application container. The server manages all incoming requests along with all
 * the facilities provided by the framework. Each server supports a single connection (e.g. listen to port 80).
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#server)
 */
export class Server {
    /**
     * Creates a new server object
     * @param options server configuration object.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serveroptions)
     */
    constructor(options?: ServerOptions);

    /**
     * Provides a safe place to store server-specific run-time application data without potential conflicts with
     * the framework internals. The data can be accessed whenever the server is accessible.
     * Initialized with an empty object.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverapp)
     */
    app: ApplicationState;

    /**
     * Server Auth: properties and methods
     */
    readonly auth: ServerAuth;

    /**
     * Links another server to the initialize/start/stop state of the current server by calling the
     * controlled server `initialize()`/`start()`/`stop()` methods whenever the current server methods
     * are called, where:
     */
    control(server: Server): void;

    /**
     * Provides access to the decorations already applied to various framework interfaces. The object must not be
     * modified directly, but only through server.decorate.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverdecorations)
     */
    readonly decorations: {
        /**
         * decorations on the request object.
         */
        request: string[],
        /**
         * decorations on the response toolkit.
         */
        toolkit: string[],
        /**
         * decorations on the server object.
         */
        server: string[]
    };

    /**
     * Register custom application events where:
     * @param events must be one of:
     * * an event name string.
     * * an event options object with the following optional keys (unless noted otherwise):
     * * * name - the event name string (required).
     * * * channels - a string or array of strings specifying the event channels available. Defaults to no channel restrictions (event updates can specify a channel or not).
     * * * clone - if true, the data object passed to server.events.emit() is cloned before it is passed to the listeners (unless an override specified by each listener). Defaults to false (data is
     *     passed as-is).
     * * * spread - if true, the data object passed to server.event.emit() must be an array and the listener method is called with each array element passed as a separate argument (unless an override
     *     specified by each listener). This should only be used when the emitted data structure is known and predictable. Defaults to false (data is emitted as a single argument regardless of its
     *     type).
     * * * tags - if true and the criteria object passed to server.event.emit() includes tags, the tags are mapped to an object (where each tag string is the key and the value is true) which is
     *     appended to the arguments list at the end. A configuration override can be set by each listener. Defaults to false.
     * * * shared - if true, the same event name can be registered multiple times where the second registration is ignored. Note that if the registration config is changed between registrations, only
     *     the first configuration is used. Defaults to false (a duplicate registration will throw an error).
     * * a podium emitter object.
     * * an array containing any of the above.
     * @return Return value: none.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverevents)
     */
    event(events: ServerEventsApplication | ServerEventsApplication[]): void;

    /**
     * Access: podium public interface.
     * The server events emitter. Utilizes the podium with support for event criteria validation, channels, and filters.
     * Use the following methods to interact with server.events:
     * [server.events.emit(criteria, data)](https://github.com/hapijs/hapi/blob/master/API.md#server.events.emit()) - emit server events.
     * [server.events.on(criteria, listener)](https://github.com/hapijs/hapi/blob/master/API.md#server.events.on()) - subscribe to all events.
     * [server.events.once(criteria, listener)](https://github.com/hapijs/hapi/blob/master/API.md#server.events.once()) - subscribe to
     * Other methods include: server.events.removeListener(name, listener), server.events.removeAllListeners(name), and server.events.hasListeners(name).
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverevents)
     */
    events: ServerEvents;

    /**
     * An object containing information about the server where:
     * * id - a unique server identifier (using the format '{hostname}:{pid}:{now base36}').
     * * created - server creation timestamp.
     * * started - server start timestamp (0 when stopped).
     * * port - the connection port based on the following rules:
     * * host - The host configuration value.
     * * address - the active IP address the connection was bound to after starting. Set to undefined until the server has been started or when using a non TCP port (e.g. UNIX domain socket).
     * * protocol - the protocol used:
     * * 'http' - HTTP.
     * * 'https' - HTTPS.
     * * 'socket' - UNIX domain socket or Windows named pipe.
     * * uri - a string representing the connection (e.g. 'http://example.com:8080' or 'socket:/unix/domain/socket/path'). Contains the uri value if set, otherwise constructed from the available
     * settings. If no port is configured or is set to 0, the uri will not include a port component until the server is started.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverinfo)
     */
    readonly info: ServerInfo;

    /**
     * Access: read only and listener public interface.
     * The node HTTP server object.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverlistener)
     */
    listener: http.Server;

    /**
     * An object containing the process load metrics (when load.sampleInterval is enabled):
     * * eventLoopDelay - event loop delay milliseconds.
     * * heapUsed - V8 heap usage.
     * * rss - RSS memory usage.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverload)
     */
    readonly load: {
        /**
         * event loop delay milliseconds.
         */
        eventLoopDelay: number;

        /**
         * Max concurrent requests.
         */
        concurrent: number
        /**
         * V8 heap usage.
         */
        heapUsed: number;
        /**
         * RSS memory usage.
         */
        rss: number;
    };

    /**
     * Server methods are functions registered with the server and used throughout the application as a common utility.
     * Their advantage is in the ability to configure them to use the built-in cache and share across multiple request
     * handlers without having to create a common module.
     * sever.methods is an object which provides access to the methods registered via server.method() where each
     * server method name is an object property.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-servermethods
     */
    readonly methods: ServerMethods;

    /**
     * Provides access to the server MIME database used for setting content-type information. The object must not be
     * modified directly but only through the [mime](https://github.com/hapijs/hapi/blob/master/API.md#server.options.mime) server setting.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-servermime)
     */
    mime: any;

    /**
     * An object containing the values exposed by each registered plugin where each key is a plugin name and the values
     * are the exposed properties by each plugin using server.expose(). Plugins may set the value of
     * the server.plugins[name] object directly or via the server.expose() method.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverplugins)
     */
    plugins: PluginProperties;

    /**
     * The realm object contains sandboxed server settings specific to each plugin or authentication strategy. When
     * registering a plugin or an authentication scheme, a server object reference is provided with a new server.realm
     * container specific to that registration. It allows each plugin to maintain its own settings without leaking
     * and affecting other plugins.
     * For example, a plugin can set a default file path for local resources without breaking other plugins' configured
     * paths. When calling server.bind(), the active realm's settings.bind property is set which is then used by
     * routes and extensions added at the same level (server root or plugin).
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverrealm)
     */
    readonly realm: ServerRealm;

    /**
     * An object of the currently registered plugins where each key is a registered plugin name and the value is
     * an object containing:
     * * version - the plugin version.
     * * name - the plugin name.
     * * options - (optional) options passed to the plugin during registration.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverregistrations)
     */
    readonly registrations: PluginsListRegistered;

    /**
     * The server configuration object after defaults applied.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serversettings)
     */
    readonly settings: ServerOptions;

    /**
     * The server cookies manager.
     * Access: read only and statehood public interface.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverstates)
     */
    readonly states: ServerState;

    /**
     * A string indicating the listener type where:
     * * 'socket' - UNIX domain socket or Windows named pipe.
     * * 'tcp' - an HTTP listener.
     */
    readonly type: 'socket' | 'tcp';

    /**
     * The hapi module version number.
     */
    readonly version: string;

    /**
     * Sets a global context used as the default bind object when adding a route or an extension where:
     * @param context - the object used to bind this in lifecycle methods such as the route handler and extension methods. The context is also made available as h.context.
     * @return Return value: none.
     * When setting a context inside a plugin, the context is applied only to methods set up by the plugin. Note that the context applies only to routes and extensions added after it has been set.
     *     Ignored if the method being bound is an arrow function.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverbindcontext)
     */
    bind(context: object): void;

    /**
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-servercacheoptions)
     */
    cache: ServerCache;

    /**
     * Registers a custom content decoding compressor to extend the built-in support for 'gzip' and 'deflate' where:
     * @param encoding - the decoder name string.
     * @param decoder - a function using the signature function(options) where options are the encoding specific options configured in the route payload.compression configuration option, and the
     *     return value is an object compatible with the output of node's zlib.createGunzip().
     * @return Return value: none.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverdecoderencoding-decoder)
     */
    decoder(encoding: string, decoder: ((options: PayloadCompressionDecoderSettings) => zlib.Gunzip)): void;

    /**
     * Extends various framework interfaces with custom methods where:
     * @param type - the interface being decorated. Supported types:
     * 'handler' - adds a new handler type to be used in routes handlers.
     * 'request' - adds methods to the Request object.
     * 'server' - adds methods to the Server object.
     * 'toolkit' - adds methods to the response toolkit.
     * @param property - the object decoration key name.
     * @param method - the extension function or other value.
     * @param options - (optional) supports the following optional settings:
     * apply - when the type is 'request', if true, the method function is invoked using the signature function(request) where request is the current request object and the returned value is assigned
     *     as the decoration. extend - if true, overrides an existing decoration. The method must be a function with the signature function(existing) where: existing - is the previously set
     *     decoration method value. must return the new decoration function or value. cannot be used to extend handler decorations.
     * @return void;
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverdecoratetype-property-method-options)
     */
    decorate(type: 'handler', property: DecorateName, method: HandlerDecorationMethod, options?: {apply?: boolean | undefined, extend?: boolean | undefined}): void;
    decorate(type: 'request', property: DecorateName, method: (existing: ((...args: any[]) => any)) => (request: Request) => DecorationMethod<Request>, options: {apply: true, extend: true}): void;
    decorate(type: 'request', property: DecorateName, method: (request: Request) => DecorationMethod<Request>, options: {apply: true, extend?: boolean | undefined}): void;
    decorate(type: 'request', property: DecorateName, method: DecorationMethod<Request>, options?: {apply?: boolean | undefined, extend?: boolean | undefined}): void;
    decorate(type: 'toolkit', property: DecorateName, method: (existing: ((...args: any[]) => any)) => DecorationMethod<ResponseToolkit>, options: {apply?: boolean | undefined, extend: true}): void;
    decorate(type: 'toolkit', property: DecorateName, method: DecorationMethod<ResponseToolkit>, options?: {apply?: boolean | undefined, extend?: boolean | undefined}): void;
    decorate(type: 'server', property: DecorateName, method: (existing: ((...args: any[]) => any)) => DecorationMethod<Server>, options: {apply?: boolean | undefined, extend: true}): void;
    decorate(type: 'server', property: DecorateName, method: DecorationMethod<Server>, options?: {apply?: boolean | undefined, extend?: boolean | undefined}): void;

    /**
     * Used within a plugin to declare a required dependency on other plugins where:
     * @param dependencies - plugins which must be registered in order for this plugin to operate. Plugins listed must be registered before the server is
     *     initialized or started.
     * @param after - (optional) a function that is called after all the specified dependencies have been registered and before the server starts. The function is only called if the server is
     *     initialized or started. The function signature is async function(server) where: server - the server the dependency() method was called on.
     * @return Return value: none.
     * The after method is identical to setting a server extension point on 'onPreStart'.
     * If a circular dependency is detected, an exception is thrown (e.g. two plugins each has an after function to be called after the other).
     * The method does not provide version dependency which should be implemented using npm peer dependencies.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverdependencydependencies-after)
     */
    dependency(dependencies: Dependencies, after?: ((server: Server) => Promise<void>)): void;

    /**
     * Registers a custom content encoding compressor to extend the built-in support for 'gzip' and 'deflate' where:
     * @param encoding - the encoder name string.
     * @param encoder - a function using the signature function(options) where options are the encoding specific options configured in the route compression option, and the return value is an object
     *     compatible with the output of node's zlib.createGzip().
     * @return Return value: none.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverencoderencoding-encoder)
     */
    encoder(encoding: string, encoder: ((options: RouteCompressionEncoderSettings) => zlib.Gzip)): void;

    /**
     * Used within a plugin to expose a property via server.plugins[name] where:
     * @param key - the key assigned (server.plugins[name][key]).
     * @param value - the value assigned.
     * @return Return value: none.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverexposekey-value)
     */
    expose(key: string, value: any): void;

    /**
     * Merges an object into to the existing content of server.plugins[name] where:
     * @param obj - the object merged into the exposed properties container.
     * @return Return value: none.
     * Note that all the properties of obj are deeply cloned into server.plugins[name], so avoid using this method
     * for exposing large objects that may be expensive to clone or singleton objects such as database client
     * objects. Instead favor server.expose(key, value), which only copies a reference to value.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverexposeobj)
     */
    expose(obj: object): void;

    /**
     * Registers an extension function in one of the request lifecycle extension points where:
     * @param events - an object or array of objects with the following:
     * * type - (required) the extension point event name. The available extension points include the request extension points as well as the following server extension points:
     * * * 'onPreStart' - called before the connection listeners are started.
     * * * 'onPostStart' - called after the connection listeners are started.
     * * * 'onPreStop' - called before the connection listeners are stopped.
     * * * 'onPostStop' - called after the connection listeners are stopped.
     * * method - (required) a function or an array of functions to be executed at a specified point during request processing. The required extension function signature is:
     * * * server extension points: async function(server) where:
     * * * * server - the server object.
     * * * * this - the object provided via options.bind or the current active context set with server.bind().
     * * * request extension points: a lifecycle method.
     * * options - (optional) an object with the following:
     * * * before - a string or array of strings of plugin names this method must execute before (on the same event). Otherwise, extension methods are executed in the order added.
     * * * after - a string or array of strings of plugin names this method must execute after (on the same event). Otherwise, extension methods are executed in the order added.
     * * * bind - a context object passed back to the provided method (via this) when called. Ignored if the method is an arrow function.
     * * * sandbox - if set to 'plugin' when adding a request extension points the extension is only added to routes defined by the current plugin. Not allowed when configuring route-level
     *     extensions, or when adding server extensions. Defaults to 'server' which applies to any route added to the server the extension is added to.
     * @return void
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverextevents)
     */
    ext(events: ServerExtEventsObject | ServerExtEventsObject[] | ServerExtEventsRequestObject | ServerExtEventsRequestObject[]): void;

    /**
     * Registers a single extension event using the same properties as used in server.ext(events), but passed as arguments.
     * @return Return value: none.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverextevent-method-options)
     */
    ext(event: ServerExtType, method: ServerExtPointFunction, options?: ServerExtOptions): void;
    ext(event: ServerRequestExtType, method: Lifecycle.Method, options?: ServerExtOptions): void;

    /**
     * Initializes the server (starts the caches, finalizes plugin registration) but does not start listening on the connection port.
     * @return Return value: none.
     * Note that if the method fails and throws an error, the server is considered to be in an undefined state and
     * should be shut down. In most cases it would be impossible to fully recover as the various plugins, caches, and
     * other event listeners will get confused by repeated attempts to start the server or make assumptions about the
     * healthy state of the environment. It is recommended to abort the process when the server fails to start properly.
     * If you must try to resume after an error, call server.stop() first to reset the server state.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-await-serverinitialize)
     */
    initialize(): Promise<void>;

    /**
     * Injects a request into the server simulating an incoming HTTP request without making an actual socket connection. Injection is useful for testing purposes as well as for invoking routing logic
     * internally without the overhead and limitations of the network stack. The method utilizes the shot module for performing injections, with some additional options and response properties:
     * @param options - can be assigned a string with the requested URI, or an object with:
     * * method - (optional) the request HTTP method (e.g. 'POST'). Defaults to 'GET'.
     * * url - (required) the request URL. If the URI includes an authority (e.g. 'example.com:8080'), it is used to automatically set an HTTP 'Host' header, unless one was specified in headers.
     * * headers - (optional) an object with optional request headers where each key is the header name and the value is the header content. Defaults to no additions to the default shot headers.
     * * payload - (optional) an string, buffer or object containing the request payload. In case of an object it will be converted to a string for you. Defaults to no payload. Note that payload
     *     processing defaults to 'application/json' if no 'Content-Type' header provided.
     * * credentials - (optional) an credentials object containing authentication information. The credentials are used to bypass the default authentication strategies, and are validated directly as
     *     if they were received via an authentication scheme. Defaults to no credentials.
     * * artifacts - (optional) an artifacts object containing authentication artifact information. The artifacts are used to bypass the default authentication strategies, and are validated directly
     *     as if they were received via an authentication scheme. Ignored if set without credentials. Defaults to no artifacts.
     * * app - (optional) sets the initial value of request.app, defaults to {}.
     * * plugins - (optional) sets the initial value of request.plugins, defaults to {}.
     * * allowInternals - (optional) allows access to routes with config.isInternal set to true. Defaults to false.
     * * remoteAddress - (optional) sets the remote address for the incoming connection.
     * * simulate - (optional) an object with options used to simulate client request stream conditions for testing:
     * * error - if true, emits an 'error' event after payload transmission (if any). Defaults to false.
     * * close - if true, emits a 'close' event after payload transmission (if any). Defaults to false.
     * * end - if false, does not end the stream. Defaults to true.
     * * split - indicates whether the request payload will be split into chunks. Defaults to undefined, meaning payload will not be chunked.
     * * validate - (optional) if false, the options inputs are not validated. This is recommended for run-time usage of inject() to make it perform faster where input validation can be tested
     *     separately.
     * @return Return value: a response object with the following properties:
     * * statusCode - the HTTP status code.
     * * headers - an object containing the headers set.
     * * payload - the response payload string.
     * * rawPayload - the raw response payload buffer.
     * * raw - an object with the injection request and response objects:
     * * req - the simulated node request object.
     * * res - the simulated node response object.
     * * result - the raw handler response (e.g. when not a stream or a view) before it is serialized for transmission. If not available, the value is set to payload. Useful for inspection and reuse
     *     of the internal objects returned (instead of parsing the response string).
     * * request - the request object.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-await-serverinjectoptions)
     */
    inject(options: string | ServerInjectOptions): Promise<ServerInjectResponse>;

    /**
     * Logs server events that cannot be associated with a specific request. When called the server emits a 'log' event which can be used by other listeners or plugins to record the information or
     * output to the console. The arguments are:
     * @param tags - (required) a string or an array of strings (e.g. ['error', 'database', 'read']) used to identify the event. Tags are used instead of log levels and provide a much more expressive
     *     mechanism for describing and filtering events. Any logs generated by the server internally include the 'hapi' tag along with event-specific information.
     * @param data - (optional) an message string or object with the application data being logged. If data is a function, the function signature is function() and it called once to generate (return
     *     value) the actual data emitted to the listeners. If no listeners match the event, the data function is not invoked.
     * @param timestamp - (optional) an timestamp expressed in milliseconds. Defaults to Date.now() (now).
     * @return Return value: none.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverlogtags-data-timestamp)
     */
    log(tags: string | string[], data?: string | object | (() => any), timestamp?: number): void;

    /**
     * Looks up a route configuration where:
     * @param id - the route identifier.
     * @return Return value: the route information if found, otherwise null.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverlookupid)
     */
    lookup(id: string): RequestRoute | null;

    /**
     * Looks up a route configuration where:
     * @param method - the HTTP method (e.g. 'GET', 'POST').
     * @param path - the requested path (must begin with '/').
     * @param host - (optional) hostname (to match against routes with vhost).
     * @return Return value: the route information if found, otherwise null.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-servermatchmethod-path-host)
     */
    match(method: Util.HTTP_METHODS, path: string, host?: string): RequestRoute | null;

    /**
     * Registers a server method where:
     * @param name - a unique method name used to invoke the method via server.methods[name].
     * @param method - the method function with a signature async function(...args, [flags]) where:
     * * ...args - the method function arguments (can be any number of arguments or none).
     * * flags - when caching is enabled, an object used to set optional method result flags:
     * * * ttl - 0 if result is valid but cannot be cached. Defaults to cache policy.
     * @param options - (optional) configuration object:
     * * bind - a context object passed back to the method function (via this) when called. Defaults to active context (set via server.bind() when the method is registered. Ignored if the method is
     *     an arrow function.
     * * cache - the same cache configuration used in server.cache(). The generateTimeout option is required.
     * * generateKey - a function used to generate a unique key (for caching) from the arguments passed to the method function (the flags argument is not passed as input). The server will
     *     automatically generate a unique key if the function's arguments are all of types 'string', 'number', or 'boolean'. However if the method uses other types of arguments, a key generation
     *     function must be provided which takes the same arguments as the function and returns a unique string (or null if no key can be generated).
     * @return Return value: none.
     * Method names can be nested (e.g. utils.users.get) which will automatically create the full path under server.methods (e.g. accessed via server.methods.utils.users.get).
     * When configured with caching enabled, server.methods[name].cache is assigned an object with the following properties and methods: - await drop(...args) - a function that can be used to clear
     *     the cache for a given key. - stats - an object with cache statistics, see catbox for stats documentation.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-servermethodname-method-options)
     */
    method(name: string, method: ServerMethod, options?: ServerMethodOptions): void;

    /**
     * Registers a server method function as described in server.method() using a configuration object where:
     * @param methods - an object or an array of objects where each one contains:
     * * name - the method name.
     * * method - the method function.
     * * options - (optional) settings.
     * @return Return value: none.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-servermethodmethods)
     */
    method(methods: ServerMethodConfigurationObject | ServerMethodConfigurationObject[]): void;

    /**
     * Sets the path prefix used to locate static resources (files and view templates) when relative paths are used where:
     * @param relativeTo - the path prefix added to any relative file path starting with '.'.
     * @return Return value: none.
     * Note that setting a path within a plugin only applies to resources accessed by plugin methods. If no path is set, the server default route configuration files.relativeTo settings is used. The
     *     path only applies to routes added after it has been set.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverpathrelativeto)
     */
    path(relativeTo: string): void;

    /**
     * Registers a plugin where:
     * @param plugins - one or an array of:
     * * a plugin object.
     * * an object with the following:
     * * * plugin - a plugin object.
     * * * options - (optional) options passed to the plugin during registration.
     * * * once, routes - (optional) plugin-specific registration options as defined below.
     * @param options - (optional) registration options (different from the options passed to the registration function):
     * * once - if true, subsequent registrations of the same plugin are skipped without error. Cannot be used with plugin options. Defaults to false. If not set to true, an error will be thrown the
     *     second time a plugin is registered on the server.
     * * routes - modifiers applied to each route added by the plugin:
     * * * prefix - string added as prefix to any route path (must begin with '/'). If a plugin registers a child plugin the prefix is passed on to the child or is added in front of the
     *     child-specific prefix.
     * * * vhost - virtual host string (or array of strings) applied to every route. The outer-most vhost overrides the any nested configuration.
     * @return Return value: none.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-await-serverregisterplugins-options)
     */
     /* tslint:disable-next-line:no-unnecessary-generics */
    register<T>(plugin: ServerRegisterPluginObject<T>, options?: ServerRegisterOptions): Promise<void>;
    /* tslint:disable-next-line:no-unnecessary-generics */
    register<T, U, V, W, X, Y, Z>(plugins: ServerRegisterPluginObjectArray<T, U, V, W, X, Y, Z>, options?: ServerRegisterOptions): Promise<void>;
    register(plugins: Array<ServerRegisterPluginObject<any>>, options?: ServerRegisterOptions): Promise<void>;
    /* tslint:disable-next-line:unified-signatures */
    register(plugins: Plugin<any> | Array<Plugin<any>>, options?: ServerRegisterOptions): Promise<void>;

    /**
     * Adds a route where:
     * @param route - a route configuration object or an array of configuration objects where each object contains:
     * * path - (required) the absolute path used to match incoming requests (must begin with '/'). Incoming requests are compared to the configured paths based on the server's router configuration.
     *     The path can include named parameters enclosed in {} which will be matched against literal values in the request as described in Path parameters.
     * * method - (required) the HTTP method. Typically one of 'GET', 'POST', 'PUT', 'PATCH', 'DELETE', or 'OPTIONS'. Any HTTP method is allowed, except for 'HEAD'. Use '*' to match against any HTTP
     *     method (only when an exact match was not found, and any match with a specific method will be given a higher priority over a wildcard match). Can be assigned an array of methods which has
     *     the same result as adding the same route with different methods manually.
     * * vhost - (optional) a domain string or an array of domain strings for limiting the route to only requests with a matching host header field. Matching is done against the hostname part of the
     *     header only (excluding the port). Defaults to all hosts.
     * * handler - (required when handler is not set) the route handler function called to generate the response after successful authentication and validation.
     * * options - additional route options. The options value can be an object or a function that returns an object using the signature function(server) where server is the server the route is being
     *     added to and this is bound to the current realm's bind option.
     * * rules - route custom rules object. The object is passed to each rules processor registered with server.rules(). Cannot be used if route.options.rules is defined.
     * @return Return value: none.
     * Note that the options object is deeply cloned (with the exception of bind which is shallowly copied) and cannot contain any values that are unsafe to perform deep copy on.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverrouteroute)
     */
    route(route: ServerRoute | ServerRoute[]): void;

    /**
     * Defines a route rules processor for converting route rules object into route configuration where:
     * @param processor - a function using the signature function(rules, info) where:
     * * rules -
     * * info - an object with the following properties:
     * * * method - the route method.
     * * * path - the route path.
     * * * vhost - the route virtual host (if any defined).
     * * returns a route config object.
     * @param options - optional settings:
     * * validate - rules object validation:
     * * * schema - joi schema.
     * * * options - optional joi validation options. Defaults to { allowUnknown: true }.
     * Note that the root server and each plugin server instance can only register one rules processor. If a route is added after the rules are configured, it will not include the rules config.
     *     Routes added by plugins apply the rules to each of the parent realms' rules from the root to the route's realm. This means the processor defined by the plugin override the config generated
     *     by the root processor if they overlap. The route config overrides the rules config if the overlap.
     * @return void
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverrulesprocessor-options)
     */
    rules(processor: (rules: object, info: {method: string, path: string, vhost?: string | undefined}) => object, options?: {validate: object}): void; // TODO needs implementation

    /**
     * Starts the server by listening for incoming requests on the configured port (unless the connection was configured with autoListen set to false).
     * @return Return value: none.
     * Note that if the method fails and throws an error, the server is considered to be in an undefined state and should be shut down. In most cases it would be impossible to fully recover as the
     *     various plugins, caches, and other event listeners will get confused by repeated attempts to start the server or make assumptions about the healthy state of the environment. It is
     *     recommended to abort the process when the server fails to start properly. If you must try to resume after an error, call server.stop() first to reset the server state. If a started server
     *     is started again, the second call to server.start() is ignored. No events will be emitted and no extension points invoked.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-await-serverstart)
     */
    start(): Promise<void>;

    /**
     * HTTP state management uses client cookies to persist a state across multiple requests.
     * @param name - the cookie name string.
     * @param options - are the optional cookie settings
     * @return Return value: none.
     * State defaults can be modified via the server default state configuration option.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverstatename-options)
     */
    state(name: string, options?: ServerStateCookieOptions): void;

    /**
     * Stops the server's listener by refusing to accept any new connections or requests (existing connections will continue until closed or timeout), where:
     * @param options - (optional) object with:
     * * timeout - overrides the timeout in millisecond before forcefully terminating a connection. Defaults to 5000 (5 seconds).
     * @return Return value: none.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-await-serverstopoptions)
     */
    stop(options?: {timeout: number}): Promise<void>;

    /**
     * Returns a copy of the routing table where:
     * @param host - (optional) host to filter routes matching a specific virtual host. Defaults to all virtual hosts.
     * @return Return value: an array of routes where each route contains:
     * * settings - the route config with defaults applied.
     * * method - the HTTP method in lower case.
     * * path - the route path.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-servertablehost)
     */
    table(host?: string): RequestRoute[];
}

/* + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + +
 +                                                                           +
 +                                                                           +
 +                                                                           +
 +                      Utils                                                +
 +                                                                           +
 +                                                                           +
 +                                                                           +
 + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + */

/**
 *  User-extensible type for application specific state.
 */
 /* tslint:disable-next-line:no-empty-interface */
export interface ApplicationState {
}

export type PeekListener = (chunk: string, encoding: string) => void;

export namespace Json {
    /**
     * @see {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#The_replacer_parameter}
     */
    type StringifyReplacer = ((key: string, value: any) => any) | Array<(string | number)> | undefined;

    /**
     * Any value greater than 10 is truncated.
     */
    type StringifySpace = number | string;

    /**
     * For context [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionsjson)
     */
    interface StringifyArguments {
        /** the replacer function or array. Defaults to no action. */
        replacer?: StringifyReplacer | undefined;
        /** number of spaces to indent nested object keys. Defaults to no indentation. */
        space?: StringifySpace | undefined;
        /* string suffix added after conversion to JSON string. Defaults to no suffix. */
        suffix?: string | undefined;
        /* calls Hoek.jsonEscape() after conversion to JSON string. Defaults to false. */
        escape?: boolean | undefined;
    }
}

export namespace Lifecycle {
    /**
     * Lifecycle methods are the interface between the framework and the application. Many of the request lifecycle steps:
     * extensions, authentication, handlers, pre-handler methods, and failAction function values are lifecyle methods
     * provided by the developer and executed by the framework.
     * Each lifecycle method is a function with the signature await function(request, h, [err]) where:
     * * request - the request object.
     * * h - the response toolkit the handler must call to set a response and return control back to the framework.
     * * err - an error object availble only when the method is used as a failAction value.
     */
    type Method = (request: Request, h: ResponseToolkit, err?: Error) => ReturnValue;

    /**
     * Each lifecycle method must return a value or a promise that resolves into a value. If a lifecycle method returns
     * without a value or resolves to an undefined value, an Internal Server Error (500) error response is sent.
     * The return value must be one of:
     * - Plain value: null, string, number, boolean
     * - Buffer object
     * - Error object: plain Error OR a Boom object.
     * - Stream object
     * - any object or array
     * - a toolkit signal:
     * - a toolkit method response:
     * - a promise object that resolve to any of the above values
     * For more info please [See docs](https://github.com/hapijs/hapi/blob/master/API.md#lifecycle-methods)
     */
    type ReturnValue = ReturnValueTypes | (Promise<ReturnValueTypes>);
    type ReturnValueTypes =
        (null | string | number | boolean) |
        (Buffer) |
        (Error | Boom) |
        (stream.Stream) |
        (object | object[]) |
        symbol |
        ResponseToolkit;

    /**
     * Various configuration options allows defining how errors are handled. For example, when invalid payload is received or malformed cookie, instead of returning an error, the framework can be
     * configured to perform another action. When supported the failAction option supports the following values:
     * * 'error' - return the error object as the response.
     * * 'log' - report the error but continue processing the request.
     * * 'ignore' - take no action and continue processing the request.
     * * a lifecycle method with the signature async function(request, h, err) where:
     * * * request - the request object.
     * * * h - the response toolkit.
     * * * err - the error object.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-failaction-configuration)
     */
    type FailAction = 'error' | 'log' | 'ignore' | Method;
}

export namespace Util {
    interface Dictionary<T> {
        [key: string]: T;
    }

    type HTTP_METHODS_PARTIAL_LOWERCASE = 'get' | 'post' | 'put' | 'patch' | 'delete' | 'options';
    type HTTP_METHODS_PARTIAL =
        'GET'
        | 'POST'
        | 'PUT'
        | 'PATCH'
        | 'DELETE'
        | 'OPTIONS'
        | HTTP_METHODS_PARTIAL_LOWERCASE;
    type HTTP_METHODS = 'HEAD' | 'head' | HTTP_METHODS_PARTIAL;
}
