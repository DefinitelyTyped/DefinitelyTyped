// Type definitions for hapi 16.1
// Project: https://github.com/hapijs/hapi
// Definitions by: Jason Swearingen <https://github.com/jasonswearingen>, AJP <https://github.com/AJamesPhillips>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

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
 * Removal of IPromise replaced with Promise
 * Removal of IReplyStrict<>
 * Removal of IReply replaced with different interfaces like:
 *      ReplyWithContinue
 *      ReplyNoContinue, etc.
 * Renaming of all interfaces to remove preceding I in preparation of dtslint
 */

/// <reference types="node" />

import Events = require("events");
import stream = require("stream");
import http = require("http");
import https = require("https");
import url = require("url");
import zlib = require("zlib");
import domain = require("domain");

import * as Boom from 'boom';
import {
    ValidationOptions as JoiValidationOptions,
    SchemaMap as JoiSchemaMap,
    Schema as JoiSchema,
} from 'joi';
// TODO check JoiValidationObject is correct for "a Joi validation object"
type JoiValidationObject = JoiSchema | JoiSchemaMap | (JoiSchema | JoiSchemaMap)[];

import * as Catbox from 'catbox';
import { MimosOptions } from 'mimos';
import Podium = require('podium');
import * as Shot from 'shot';

export interface Dictionary<T> {
    [key: string]: T;
}

export interface ServerMethods extends Dictionary<ServerMethod> {
}

/**
 * Server
 * The Server object is the main application container. The server manages all incoming connections along with all the facilities provided by the framework. A server can contain more than one connection (e.g. listen to port 80 and 8080).
 * [See docs](https://hapijs.com/api/16.1.1#server)
 * [See docs](https://hapijs.com/api/16.1.1#server-properties)
 * [See docs](https://hapijs.com/api/16.1.1#server-events)
 */
export class Server extends Podium {
    /**
     * Creates a new Server object
     */
    constructor(options?: ServerOptions);

    /**
     * Provides a safe place to store server-specific run-time application data without potential conflicts with the framework internals. The data can be accessed whenever the server is accessible. Initialized with an empty object.
     * [See docs](https://hapijs.com/api/16.1.1#serverapp)
     */
    app?: any;
    /**
     * An array containing the server's connections. When the server object is returned from server.select(), the connections array only includes the connections matching the selection criteria.
     * [See docs](https://hapijs.com/api/16.1.1#serverconnections)
     */
    connections: ServerConnection[];
    /**
     * When the server contains exactly one connection, info is an object containing information about the sole connection
     * When the server contains more than one connection, each server.connections array member provides its own connection.info.
     * [See docs](https://hapijs.com/api/16.1.1#serverinfo)
     */
    info: ServerConnectionInfo | null;
    /**
     * An object containing the process load metrics (when load.sampleInterval is enabled):
     * [See docs](https://hapijs.com/api/16.1.1#serverload)
     */
    load: {
        /** event loop delay milliseconds. */
        eventLoopDelay: number;
        /** V8 heap usage. */
        heapUsed: number;
        /** RSS memory usage. */
        rss: number;
    };
    /**
     * When the server contains exactly one connection, listener is the node HTTP server object of the sole connection.
     * When the server contains more than one connection, each server.connections array member provides its own connection.listener.
     * [See docs](https://hapijs.com/api/16.1.1#serverlistener)
     */
    listener: ServerListener | null;
    /**
     * An object providing access to the server methods cs://hapijs.com/api/16.1.1#servermethodname-method-options} where each server method name is an object property.
     * [See docs](https://hapijs.com/api/16.1.1#servermethods)
     */
    methods: ServerMethods;
    /**
     * Provides access to the server MIME database used for setting content-type information. The object must not be modified directly but only through the mime server setting.
     * [See docs](https://hapijs.com/api/16.1.1#servermime)
     */
    readonly mime: {path(path: string): {type: string}};
    /**
     * An object containing the values exposed by each plugin registered where each key is a plugin name and the values are the exposed properties by each plugin using server.expose(). Plugins may set the value of the server.plugins[name] object directly or via the server.expose() method.
     * [See docs](https://hapijs.com/api/16.1.1#serverplugins)
     */
    plugins: PluginsStates;
    /**
     * The realm object contains server-wide or plugin-specific state that can be shared across various methods. For example, when calling server.bind(), the active realm settings.bind property is set which is then used by routes and extensions added at the same level (server root or plugin). Realms are a limited version of a sandbox where plugins can maintain state used by the framework when adding routes, extensions, and other properties.
     * [See docs](https://hapijs.com/api/16.1.1#serverrealm)
     */
    readonly realm: ServerRealm;
    /**
     * When the server contains exactly one connection, registrations is an object where each key is a registered plugin name
     * When the server contains more than one connection, each server.connections array member provides its own connection.registrations.
     * TODO check and offer PR to update Hapi docs: Assuming readonly.
     * [See docs](https://hapijs.com/api/16.1.1#serverregistrations)
     */
    readonly registrations: ServerRegisteredPlugins;
    /**
     * The root server object containing all the connections and the root server methods (e.g. start(), stop(), connection()).
     * TODO, check and offer PR to update Hapi docs: Marked as optional as presumably root server does not reference itself.
     * [See docs](https://hapijs.com/api/16.1.1#serverroot)
     */
    root?: Server;
    /**
     * The server configuration object after defaults applied.
     * [See docs](https://hapijs.com/api/16.1.1#serversettings)
     */
    settings: ServerOptions;
    /**
     * The hapi module version number.
     * [See docs](https://hapijs.com/api/16.1.1#serverversion)
     */
    version: string;

    /**
     * [See docs](https://hapijs.com/api/16.1.1#serverauthapi)
     * [See docs](https://hapijs.com/api/16.1.1#serverauthdefaultoptions)
     * [See docs](https://hapijs.com/api/16.1.1#serverauthschemename-scheme)
     * [See docs](https://hapijs.com/api/16.1.1#serverauthstrategyname-scheme-mode-options)
     * [See docs](https://hapijs.com/api/16.1.1#serverauthteststrategy-request-next)
     */
    auth: ServerAuth;

    /**
     * Sets a global context used as the default bind object when adding a route or an extension
     * When setting context inside a plugin, the context is applied only to methods set up by the plugin. Note that the context applies only to routes and extensions added after it has been set. Ignored if the method being bound is an arrow function.
     * @param context  the object used to bind this in handler and extension methods.
     * [See docs](https://hapijs.com/api/16.1.1#serverbindcontext)
     */
    bind(context: any): void;
    /**
     * [See docs](https://hapijs.com/api/16.1.1#servercacheoptions)
     * [See docs](https://hapijs.com/api/16.1.1#servercacheprovisionoptions-callback)
     */
    cache: ServerCacheMethod;
    /**
     * Adds an incoming server connection
     * Returns a server object with the new connections selected.
     * Must be called before any other server method that modifies connections is called for it to apply to the new connection (e.g. server.state())
     * Note that the options object is deeply cloned (with the exception of listener which is shallowly copied) and cannot contain any values that are unsafe to perform deep copy on.
     *
     * [See docs](https://hapijs.com/api/16.1.1#serverconnectionoptions) for various advantage topics covering usage and caveats around use of the function in plugin register(), connectionless plugins calling connection(), etc.
     * @param connection  a connection configuration object or array of objects
     */
    connection(options?: ServerConnectionOptions[]): Server;
    connection(options?: ServerConnectionOptions): Server;
    // connection: (options: ServerConnectionOptions[] | ServerConnectionOptions) => Server;
    /**
     * Registers a custom content decoding compressor to extend the built-in support for 'gzip' and 'deflate'
     * [See docs](https://hapijs.com/api/16.1.1#serverdecoderencoding-decoder)
     * @param encoding  the decoder name string.
     * @param decoder  a function using the signature function(options) where options are the encoding specific options configured in the route payload.compression configuration option, and the return value is an object compatible with the output of node's zlib.createGunzip().
     */
    decoder(encoding: string, decoder: ((options: CompressionDecoderSettings) => zlib.Gunzip)): void;
    /**
     * Extends various framework interfaces with custom methods
     * Note that decorations apply to the entire server and all its connections regardless of current selection.
     * [See docs](https://hapijs.com/api/16.1.1#serverdecoratetype-property-method-options)
     *
     * NOTE: it's not possible to type the result of this action.
     * It's advised that in a custom definition file, you extend the ReplyNoContinue
     * and ReplyWithContinue functions.  See Inert `.file` for an example.
     * Or if it is not part of a library / plugin then you use a namespace within
     * your code to type the request, server and or reply.  See
     * [tests/server/decorate.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/hapi/tests/server/decorate.ts)
     * for examples.
     * @param type  the interface being decorated. Supported types:
     *      * 'request' - adds methods to the Request object.
     *      * 'reply' - adds methods to the reply interface.
     *      * 'server' - adds methods to the Server object.
     * @param property  the object decoration key name.
     * @param method  the extension function or other value.
     * @param options  if the type is 'request', supports the following optional settings:
     *      * apply - if true, the method function is invoked using the signature function(request) where request is the current request object and the returned value is assigned as the decoration.
     */
    decorate(type: 'request' | 'reply' | 'server', property: string, method: Function): void;
    decorate(type: 'request', property: string, method: Function, options?: {apply: false}): void;
    decorate(type: 'request', property: string, method: (request: Request) => Function, options: {apply: true}): void;
    /**
     * The server.decorate('server', ...) method can modify this prototype/interface.
     * Have disabled these typings as there is a better alternative, see example in: tests/server/decorate.ts
     * [And discussion here](https://github.com/DefinitelyTyped/DefinitelyTyped/issues/14517#issuecomment-298891630)
     */
    // [index: string]: any;
    /**
     * Used within a plugin to declare a required dependency on other plugins
     * The after method is identical to setting a server extension point on 'onPreStart'. Connectionless plugins (those with attributes.connections set to false) can only depend on other connectionless plugins (server initialization will fail even of the dependency is loaded but is not connectionless).
     * Dependencies can also be set via the register attributes property (does not support setting after).
     * [See docs](https://hapijs.com/api/16.1.1#serverdependencydependencies-after)
     * @param dependencies  a single string or array of plugin name strings which must be registered in order for this plugin to operate. Plugins listed must be registered before the server is initialized or started. Does not provide version dependency which should be implemented using npm peer dependencies.
     * @param after  an optional function called after all the specified dependencies have been registered and before the server starts. The function is only called if the server is initialized or started. If a circular dependency is detected, an exception is thrown (e.g. two plugins each has an after function to be called after the other). The function signature is function(server, next)
     */
    dependency(dependencies: string | string[], after?: AfterDependencyLoadCallback): void;
    /**
     * Emits a custom application event update to all the subscribed listeners
     * Note that events must be registered before they can be emitted or subscribed to by calling server.event(events). This is done to detect event name misspelling and invalid event activities.
     * [See docs](https://hapijs.com/api/16.1.1#serveremitcriteria-data-callback)
     * @param criteria  the event update criteria which if an object can have the following optional keys (unless noted otherwise):
     *      * name - the event name string (required).
     *      * channel - the channel name string.
     *      * tags - a tag string or array of tag strings.
     * @param data  the value emitted to the subscribers. If data is a function, the function signature is function() and it called once to generate (return value) the actual data emitted to the listeners. If no listeners match the event, the data function is not invoked.
     * @param callback  an optional callback method invoked when all subscribers have been notified using the signature function(). The callback is called only after all the listeners have been notified, including any event updates emitted earlier (the order of event updates are guaranteed to be in the order they were emitted).
     */
    emit(criteria: string | {name: string, channel?: string, tags?: string | string[]}, data: any, callback?: () => void): void;
    /**
     * Registers a custom content encoding compressor to extend the built-in support for 'gzip' and 'deflate'
     * [See docs](https://hapijs.com/api/16.1.1#serverencoderencoding-encoder)
     * @param encoding  the encoder name string.
     * @param encoder  a function using the signature function(options) where options are the encoding specific options configured in the route compression configuration option, and the return value is an object compatible with the output of node's zlib.createGzip().
     */
    encoder(encoding: string, encoder: ((options: CompressionEncoderSettings) => zlib.Gzip)): void;
    /**
     * Register custom application events
     * [See docs](https://hapijs.com/api/16.1.1#servereventevents)
     * @param events  see ApplicationEvent
     */
    event(events: ApplicationEvent[]): void;
    event(events: ApplicationEvent): void;
    /**
     * Used within a plugin to expose a property via server.plugins[name]
     * [See docs](https://hapijs.com/api/16.1.1#serverexposekey-value)
     * @param key  the key assigned (server.plugins[name][key]).
     * @param value  the value assigned.
     */
    expose(key: string, value: any): void;
    /**
     * Merges an object into to the existing content of server.plugins[name]
     * Note that all properties of obj are deeply cloned into server.plugins[name], so you should avoid using this method for exposing large objects that may be expensive to clone or singleton objects such as database client objects. Instead favor the server.expose(key, value) form, which only copies a reference to value.
     * [See docs](https://hapijs.com/api/16.1.1#serverexposeobj)
     * @param obj  the object merged into the exposed properties container.
     */
    expose(obj: Object): void;
    /**
     * Registers an extension function in one of the available extension points
     * [See docs](https://hapijs.com/api/16.1.1#serverextevents)
     * @param events  see @ServerExtConfigurationObject
     */
    ext(events: ServerStartExtConfigurationObject): void;
    ext(events: ServerStartExtConfigurationObject[]): void;
    ext(events: ServerRequestExtConfigurationObjectWithRequest): void;
    ext(events: ServerRequestExtConfigurationObjectWithRequest[]): void;
    /**
     * Registers a single extension event using the same properties as used in server.ext(events), but passed as arguments.
     * [See docs](https://hapijs.com/api/16.1.1#serverextevent-method-options)
     * @param event  the extension point event name.
     * @param method  a function or an array of functions to be executed at a specified point during request processing.
     * @param options
     */
    ext(event: ServerStartExtPoints, method: ServerExtFunction[], options?: ServerExtOptions): void;
    ext(event: ServerStartExtPoints, method: ServerExtFunction, options?: ServerExtOptions): void;
    ext(event: ServerRequestExtPoints, method: ServerExtRequestHandler[], options?: ServerExtOptions): void;
    ext(event: ServerRequestExtPoints, method: ServerExtRequestHandler, options?: ServerExtOptions): void;
    /**
     * Registers a new handler type to be used in routes
     * The method function can have a defaults object or function property. If the property is set to an object, that object is used as the default route config for routes using this handler. If the property is set to a function, the function uses the signature function(method) and returns the route default configuration.
     * [See docs](https://hapijs.com/api/16.1.1#serverhandlername-method)
     * @param name  string name for the handler being registered. Cannot override any previously registered type.
     * @param method  the function used to generate the route handler using the signature function(route, options) where:
     *      * route - the route public interface object.
     *      * options - the configuration object provided in the handler config.
     */
    handler(name: string, method: MakeRouteHandler): void;
    /**
     * Initializes the server (starts the caches, finalizes plugin registration) but does not start listening on the connection ports
     * Note that if the method fails and the callback includes an error, the server is considered to be in an undefined state and should be shut down. In most cases it would be impossible to fully recover as the various plugins, caches, and other event listeners will get confused by repeated attempts to start the server or make assumptions about the healthy state of the environment. It is recommended to assert that no error has been returned after calling initialize() to abort the process when the server fails to start properly. If you must try to resume after an error, call server.stop() first to reset the server state.
     * [See docs](https://hapijs.com/api/16.1.1#serverinitializecallback)
     * @param callback  the callback method when server initialization is completed or failed with the signature function(err)
     */
    initialize(callback: (err: Error) => void): void;
    initialize(): Promise<Error>;
    /**
     * When the server contains exactly one connection, injects a request into the sole connection simulating an incoming HTTP request without making an actual socket connection. Injection is useful for testing purposes as well as for invoking routing logic internally without the overhead or limitations of the network stack. Utilizes the shot module for performing injections, with some additional options and response properties
     * If no callback is provided, a Promise object is returned.
     * When the server contains more than one connection, each server.connections array member provides its own connection.inject().
     * [See docs](https://hapijs.com/api/16.1.1#serverinjectoptions-callback)
     * @param options  can be assigned a string with the requested URI, or an object
     * @param callback  the callback function with signature function(res)
     */
    inject(options: string | InjectedRequestOptions, callback: (res: InjectedResponseObject) => void): void;
    inject(options: string | InjectedRequestOptions, ): Promise<InjectedResponseObject>;
    /**
     * Logs server events that cannot be associated with a specific request. When called the server emits a 'log' event which can be used by other listeners or plugins to record the information or output to the console.
     * [See docs](https://hapijs.com/api/16.1.1#serverlogtags-data-timestamp)
     * @param tags  a string or an array of strings (e.g. ['error', 'database', 'read']) used to identify the event. Tags are used instead of log levels and provide a much more expressive mechanism for describing and filtering events. Any logs generated by the server internally include the 'hapi' tag along with event-specific information.
     * @param data  an optional message string or object with the application data being logged. If data is a function, the function signature is function() and it called once to generate (return value) the actual data emitted to the listeners. If no listeners match the event, the data function is not invoked.
     * @param timestamp  an optional timestamp expressed in milliseconds. Defaults to Date.now() (now).
     */
    log(tags: string | string[], data?: string | Object | Function, timestamp?: number): void;
    /**
     * When the server contains exactly one connection, looks up a route configuration.
     * When the server contains more than one connection, each server.connections array member provides its own connection.lookup() method.
     * [See docs](https://hapijs.com/api/16.1.1#serverlookupid)
     * @param id  the route identifier as set in the route options.
     * @return  the route public interface object if found, otherwise null.
     */
    lookup(id: string): RoutePublicInterface | null;
    /**
     * When the server contains exactly one connection, looks up a route configuration
     * When the server contains more than one connection, each server.connections array member provides its own connection.match() method.
     * [See docs](https://hapijs.com/api/16.1.1#servermatchmethod-path-host)
     * @param method  the HTTP method (e.g. 'GET', 'POST').  TODO check if it allows HEAD
     * @param path  the requested path (must begin with '/').
     * @param host  optional hostname (to match against routes with vhost).
     * @return  the route public interface object if found, otherwise null.
     */
    match(method: HTTP_METHODS, path: string, host?: string): RoutePublicInterface | null;
    /**
     * Registers a server method. Server methods are functions registered with the server and used throughout the application as a common utility. Their advantage is in the ability to configure them to use the built-in cache and share across multiple request handlers without having to create a common module.
     * [See docs](https://hapijs.com/api/16.1.1#servermethodname-method-options)
     * @param name  a unique method name used to invoke the method via server.methods[name]. Supports using nested names such as utils.users.get which will automatically create the missing path under server.methods and can be accessed for the previous example via server.methods.utils.users.get. When configured with caching enabled, server.methods[name].cache will be an object see ServerMethodNameCacheObject
     * @param method  the method function
     * @param options  optional configuration
     */
    method(name: string, method: ServerMethod, options?: ServerMethodOptions): void;
    /**
     * Registers a server method function as described in server.method() using a configuration object
     * [See docs](https://hapijs.com/api/16.1.1#servermethodmethods)
     */
    method(methods: ServerMethodConfigurationObject[]): void;
    method(methods: ServerMethodConfigurationObject): void;
    /**
     * Subscribe a handler to an event
     * [See docs](https://hapijs.com/api/16.1.1#serveroncriteria-listener)
     * @param criteria  the subscription criteria which can be an event name string which can be any of the built-in server events or a custom application event registered with server.event(events).
     * Or an see ServerEventCriteria.
     * If 'start' - emitted when the server is started using server.start().
     * If 'stop' - emitted when the server is stopped using server.stop().
     * @param listener
     */
    on(criteria: 'start' | 'stop' | string | ServerEventCriteria, listener: Function): void;
    /**
     * The 'log' event includes the event object and a tags object (where each tag is a key with the value true)
     * [See docs](https://hapijs.com/api/16.1.1#server-events)
     */
    on(criteria: 'log', listener: (event: ServerEventObject, tags: Podium.Tags) => void): void;
    /**
     * The 'request' and 'request-internal' events include the request object, the event object, and a tags object (where each tag is a key with the value true)
     * [See docs](https://hapijs.com/api/16.1.1#server-events)
     * TODO submit issue to TypeScript.  Using 'request' | 'request-internal' removes the type
     * interference when using code like: `server.on('request', (request, event, tags) => {...}`
     * Same for 'response' | 'tail'.
     */
    on(criteria: 'request', listener: (request: Request, event: ServerEventObject, tags: Podium.Tags) => void): void;
    on(criteria: 'request-internal', listener: (request: Request, event: ServerEventObject, tags: Podium.Tags) => void): void;
    /**
     * The 'request-error' event includes the request object and the causing error err object
     * [See docs](https://hapijs.com/api/16.1.1#server-events)
     */
    on(criteria: 'request-error', listener: (request: Request, err: Error) => void): void;
    /**
     * The 'response' and 'tail' events include the request object
     * [See docs](https://hapijs.com/api/16.1.1#server-events)
     * See 'request' and 'request-internal'
     */
    on(criteria: 'response', listener: (request: Request) => void): void;
    on(criteria: 'tail', listener: (request: Request) => void): void;
    /**
     * The 'route' event includes the route public interface, the connection, and the server object used to add the route (e.g. the result of a plugin select operation)
     * [See docs](https://hapijs.com/api/16.1.1#server-events)
     */
    on(criteria: 'route', listener: (route: RoutePublicInterface, connection: ServerConnection, server: Server) => void): void;
    /**
     * Same as calling server.on() with the count option set to 1.
     * TODO type this to copy the server.on specific types for 'route', 'tail', etc.
     * [See docs](https://hapijs.com/api/16.1.1#serveroncecriteria-listener)
     * @param criteria
     * @param listener
     */
    once(criteria: string | ServerEventCriteria, listener: Function): void;
    /**
     * Sets the path prefix used to locate static resources (files and view templates) when relative paths are used
     * Note that setting a path within a plugin only applies to resources accessed by plugin methods. If no path is set, the connection files.relativeTo configuration is used. The path only applies to routes added after it has been set.
     * [See docs](https://hapijs.com/api/16.1.1#serverpathrelativeto)
     * @param relativeTo  the path prefix added to any relative file path starting with '.'.
     */
    path(relativeTo: string): void;
    /**
     * Registers a plugin
     * If no callback is provided, a Promise object is returned.
     * Note that plugin registration are recorded on each of the available connections. When plugins express a dependency on other plugins, both have to be loaded into the same connections for the dependency requirement to be fulfilled. It is recommended that plugin registration happen after all the server connections are created via server.connection().
     * [See docs](https://hapijs.com/api/16.1.1#serverregisterplugins-options-callback)
     * @param plugins
     * @param options
     * @param callback  with signature function(err) where err an error returned from the registration function. Note that exceptions thrown by the registration function are not handled by the framework.
     * A note on typings.  Common use case is:
     *     register(Plugin, (err) => {// do more stuff})
     * so these typings save passing empty `options` object or having to
     * explicity type the Error in the Callback e.g.:
     *     register(Plugin, {}, (err) => {// do more stuff})  or
     *     register(Plugin, (err: Error) => {// do more stuff})
     */
    register<OptionsPassedToPlugin>(plugins: Array<(PluginFunction<OptionsPassedToPlugin> | PluginRegistrationObject<OptionsPassedToPlugin>)>, callback: (err: Error | null) => void): void;
    register<OptionsPassedToPlugin>(plugins: Array<(PluginFunction<OptionsPassedToPlugin> | PluginRegistrationObject<OptionsPassedToPlugin>)>): Promise<Error | null>;
    register<OptionsPassedToPlugin>(plugins: PluginFunction<OptionsPassedToPlugin> | PluginRegistrationObject<OptionsPassedToPlugin>, callback: (err: Error | null) => void): void;
    register<OptionsPassedToPlugin>(plugins: PluginFunction<OptionsPassedToPlugin> | PluginRegistrationObject<OptionsPassedToPlugin>): Promise<Error | null>;
    register<OptionsPassedToPlugin>(plugins: Array<(PluginFunction<OptionsPassedToPlugin> | PluginRegistrationObject<OptionsPassedToPlugin>)>, options: PluginRegistrationOptions, callback: (err: Error | null) => void): void;
    register<OptionsPassedToPlugin>(plugins: Array<(PluginFunction<OptionsPassedToPlugin> | PluginRegistrationObject<OptionsPassedToPlugin>)>, options: PluginRegistrationOptions): Promise<Error | null>;
    register<OptionsPassedToPlugin>(plugins: PluginFunction<OptionsPassedToPlugin> | PluginRegistrationObject<OptionsPassedToPlugin>, options: PluginRegistrationOptions, callback: (err: Error | null) => void): void;
    register<OptionsPassedToPlugin>(plugins: PluginFunction<OptionsPassedToPlugin> | PluginRegistrationObject<OptionsPassedToPlugin>, options: PluginRegistrationOptions): Promise<Error | null>;
    /**
     * Adds a connection route
     * [See docs](https://hapijs.com/api/16.1.1#serverrouteoptions)
     * @param options  a route configuration object [See docs](https://hapijs.com/api/16.1.1#route-configuration) or an array of configuration objects.
     */
    route(options: RouteConfiguration[]): void;
    route(options: RouteConfiguration): void;
    /**
     * Selects a subset of the server's connections
     * Returns a server object with connections set to the requested subset. Selecting again on a selection operates as a logic AND statement between the individual selections.
     * [See docs](https://hapijs.com/api/16.1.1#serverselectlabels)
     * @param labels  a single string or array of strings of labels used as a logical OR statement to select all the connections with matching labels in their configuration.
     */
    select(labels: string | string[]): Server;
    /**
     * Starts the server connections by listening for incoming requests on the configured port of each listener (unless the connection was configured with autoListen set to false)
     * If no callback is provided, a Promise object is returned.
     * Note that if the method fails and the callback includes an error, the server is considered to be in an undefined state and should be shut down. In most cases it would be impossible to fully recover as the various plugins, caches, and other event listeners will get confused by repeated attempts to start the server or make assumptions about the healthy state of the environment. It is recommended to assert that no error has been returned after calling start() to abort the process when the server fails to start properly. If you must try to resume after a start error, call server.stop() first to reset the server state.
     * If a started server is started again, the second call to start() will only start new connections added after the initial start() was called. No events will be emitted and no extension points invoked.
     * [See docs](https://hapijs.com/api/16.1.1#serverstartcallback)
     * @param callback  the callback method when server startup is completed or failed with the signature function(err) where:
     *      * err - any startup error condition.
     */
    start(callback: (err?: Error) => void): void;
    start(): Promise<Error | null>;
    /**
     * HTTP state management [See docs](https://tools.ietf.org/html/rfc6265) uses client cookies to persist a state across multiple requests. Registers a cookie definitions
     * [See docs](https://hapijs.com/api/16.1.1#serverstatename-options)
     * @param name  the cookie name string.
     * @param options  optional cookie settings
     */
    state(name: string, options?: ServerStateCookieConfiguationObject): void;
    /**
     * Stops the server's connections by refusing to accept any new connections or requests (existing connections will continue until closed or timeout)
     * If no callback is provided, a Promise object is returned.
     * [See docs](https://hapijs.com/api/16.1.1#serverstopoptions-callback)
     * @param options  options object with:
     *      * timeout - overrides the timeout in millisecond before forcefully terminating a connection. Defaults to 5000 (5 seconds).
     * @param callback  optional callback method which is called once all the connections have ended and it is safe to exit the process with signature function(err) where:
     *      * err - any termination error condition.
     */
    stop(options: {timeout: number} | null, callback: (err?: Error) => void): void;
    stop(options?: {timeout: number}): Promise<Error | null>;
    /**
     * Returns a copy of the routing table
     * Note that if the server has not been started and multiple connections use port 0, the table items will override each other and will produce an incomplete result.
     * When calling connection.table() directly on each connection, the return value is the same as the array table item value of an individual connection
     * [See docs](https://hapijs.com/api/16.1.1#servertablehost)
     * @param host  optional host to filter routes matching a specific virtual host. Defaults to all virtual hosts.
     */
    table(host?: string): RoutingTableEntry[];
}

export interface PluginSpecificConfiguration {}

/**
 * Server Options
 * Note that the options object is deeply cloned and cannot contain any values that are unsafe to perform deep copy on.
 * [See docs](https://hapijs.com/api/16.1.1#new-serveroptions)
 */
export interface ServerOptions {
    /** app - application-specific configuration which can later be accessed via server.settings.app. Note the difference between server.settings.app which is used to store static configuration values and server.app which is meant for storing run-time state. Defaults to {}.  */
    app?: any;
    /**
     * cache - sets up server-side caching. Every server includes a default cache for storing application state. By default, a simple memory-based cache is created which has limited capacity and capabilities. hapi uses catbox for its cache which includes support for common storage solutions (e.g. Redis, MongoDB, Memcached, Riak, among others). Caching is only utilized if methods and plugins explicitly store their state in the cache. The server cache configuration only defines the storage container itself. cache can be assigned:
     *  * a prototype function (usually obtained by calling require() on a catbox strategy such as require('catbox-redis')). A new catbox client will be created internally using this function.
     *  * a CatboxServerOptionsCacheConfiguration configuration object
     *  * an array of the above object for configuring multiple cache instances, each with a unique name. When an array of objects is provided, multiple cache connections are established and each array item (except one) must include a name.
     */
    cache?: Catbox.EnginePrototype | CatboxServerOptionsCacheConfiguration | CatboxServerOptionsCacheConfiguration[];
    /** sets the default connections configuration which can be overridden by each connection */
    connections?: ConnectionConfigurationServerDefaults;
    /** determines which logged events are sent to the console (this should only be used for development and does not affect which events are actually logged internally and recorded). Set to false to disable all console logging, or to an object with: */
    debug?: false | {
        /** a string array of server log tags to be displayed via console.error() when the events are logged via server.log() as well as internally generated server logs. For example, to display all errors, set the option to ['error']. To turn off all console debug messages set it to false. Defaults to uncaught errors thrown in external code (these errors are handled automatically and result in an Internal Server Error response) or runtime errors due to developer error. */
        log?: string[] | false;
        /** a string array of request log tags to be displayed via console.error() when the events are logged via request.log() as well as internally generated request logs. For example, to display all errors, set the option to ['error']. To turn off all console debug messages set it to false. Defaults to uncaught errors thrown in external code (these errors are handled automatically and result in an Internal Server Error response) or runtime errors due to developer error. */
        request?: string[] | false;
    };
    /** process load monitoring */
    load?: {
        /** the frequency of sampling in milliseconds. Defaults to 0 (no sampling). */
        sampleInterval?: number;
    };
    /** options passed to the mimos module (https://github.com/hapijs/mimos) when generating the mime database used by the server and accessed via server.mime. */
    mime?: MimosOptions;
    /** plugin-specific configuration which can later be accessed via server.settings.plugins. plugins is an object where each key is a plugin name and the value is the configuration. Note the difference between server.settings.plugins which is used to store static configuration values and server.plugins which is meant for storing run-time state. Defaults to {}. */
    plugins?: PluginSpecificConfiguration;
    /** if false, will not use node domains to protect against exceptions thrown in handlers and other external code. Defaults to true. */
    useDomains?: boolean;
}

/**
 * The server event object
 * [See docs](https://hapijs.com/api/16.1.1#server-events)
 */
export interface ServerEventObject {
    /** the event timestamp. */
    timestamp: number;
    /** if the event relates to a request, the request id. */
    request: string;
    /** if the event relates to a server, the server.info.uri. */
    server: string;
    /** an array of tags (e.g. ['error', 'http']). */
    tags: string[];
    /** optional event-specific information. */
    data: any;
    /** true if the event was generated internally by the framework. */
    internal: boolean;
}

/**
 * [See docs](https://hapijs.com/api/16.1.1#serveroncriteria-listener)
 */
export interface ServerEventCriteria {
    /** the event name string (required). */
    name: string;
    /** if true, the listener method receives an additional callback argument which must be called when the method completes. No other event will be emitted until the callback methods is called. The method signature is function(). If block is set to a positive integer, the value is used to set a timeout after which any pending events will be emitted, ignoring the eventual call to callback. Defaults to false (non blocking). */
    block?: boolean;
    /** a string or array of strings specifying the event channels to subscribe to. If the event registration specified a list of allowed channels, the channels array must match the allowed channels. If channels are specified, event updates without any channel designation will not be included in the subscription. Defaults to no channels filter. */
    channels?: string | string[];
    /** if true, the data object passed to server.emit() is cloned before it is passed to the listener method. Defaults to the event registration option (which defaults to false). */
    clone?: boolean;
    /** a positive integer indicating the number of times the listener can be called after which the subscription is automatically removed. A count of 1 is the same as calling server.once(). Defaults to no limit. */
    count?: number;
    /**
     * the event tags (if present) to subscribe to
     * If the object is given:
     *  * tags - a tag string or array of tag strings.
     *  * all - if true, all tags must be present for the event update to match the subscription. Defaults to false (at least one matching tag).
     */
    filter?: string | string[] | {tags: string | string[], all?: boolean};
    /** if true, and the data object passed to server.emit() is an array, the listener method is called with each array element passed as a separate argument. This should only be used when the emitted data structure is known and predictable. Defaults to the event registration option (which defaults to false). */
    spread?: boolean;
    /** if true and the criteria object passed to server.emit() includes tags, the tags are mapped to an object (where each tag string is the key and the value is true) which is appended to the arguments list at the end (but before the callback argument if block is set). Defaults to the event registration option (which defaults to false). */
    tags?: boolean;
}

/**
 * Server methods, user configured
 * Related to [See docs](https://hapijs.com/api/16.1.1#servermethods)
 * Related to [See docs](https://hapijs.com/api/16.1.1#servermethodname-method-options)
 */
export interface ServerMethod {
    /** the method must return a value (result, Error, or a promise) or throw an Error. */
    (...args: any[]): any | Error | Promise<any>;
    /** Not possible to improve this typing due to this unresolvable issue:  https://github.com/Microsoft/TypeScript/issues/15190 */
    (...args: (any | ServerMethodNext)[]): void;
    /** When configured with caching enabled, server.methods[name].cache will be an object see ServerMethodNameCacheObject */
    cache?: ServerMethodNameCacheObject;
}

/**
 * Related to [See docs](https://hapijs.com/api/16.1.1#servermethodname-method-options)
 * @param err  error response if the method failed.
 * @param result  the return value.
 * @param ttl  0 if result is valid but cannot be cached. Defaults to cache policy.
 */
export interface ServerMethodNext {
    (err: Error | null, result: any, ttl?: number): void;
}

/** For context [See docs](https://hapijs.com/api/16.1.1#servermethodname-method-options) */
export interface ServerMethodNameCacheObject {
    /**
     * function that can be used to clear the cache for a given key.
     * @param ...args  any number of string, number or boolean.  If other types then generateKey function must be specified.
     * @param callback  last argument is a callback.
     * Not possible to improve this typing due to this unresolvable issue:  https://github.com/Microsoft/TypeScript/issues/15190
     */
    drop(...args: (any | Function)[]): void;
    /** an object with cache statistics, see stats documentation for catbox. */
    stats: Catbox.CacheStatisticsObject;
}

/** For context [See docs](https://hapijs.com/api/16.1.1#servermethodname-method-options) */
export interface ServerMethodOptions {
    /** a context object passed back to the method function (via this) when called. Defaults to active context (set via server.bind() when the method is registered. Ignored if the method is an arrow function. */
    bind?: any;
    /** the same cache configuration used in server.cache(). The generateTimeout option is required. */
    cache?: CatboxServerCacheConfiguration;
    /**
     * if false, expects the method to be a synchronous function. Note that using a synchronous function with caching will convert the method interface to require a callback as an additional argument with the signature function(err, result, cached, report) since the cache interface cannot return values synchronously. Defaults to true.
     * TODO: understand and type "an additional argument with the signature function(err, result, cached, report)" if appropriate.
     */
    callback?: boolean;
    /** a function used to generate a unique key (for caching) from the arguments passed to the method function (the callback argument is not passed as input). The server will automatically generate a unique key if the function's arguments are all of types 'string', 'number', or 'boolean'. However if the method uses other types of arguments, a key generation function must be provided which takes the same arguments as the function and returns a unique string (or null if no key can be generated). */
    generateKey?(args: any[]): string | null;
}

/** For context [See docs](https://hapijs.com/api/16.1.1#servermethodmethods) */
export interface ServerMethodConfigurationObject {
    name: string;
    method: ServerMethod;
    options: ServerMethodOptions;
}

/* + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + +
 +                                                                           +
 +                                                                           +
 +                                                                           +
 +                          Caching with Catbox                              +
 +                                                                           +
 +                                                                           +
 +                                                                           +
 + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + */
// TODO: move to separate file http://stackoverflow.com/questions/43276921

/**
 * TODO confirm this is the same as CatboxServerCacheConfiguration
 *
 * **
 * Server instantiation options configuration for Catbox cache
 * TODO: check it extends Catbox.PolicyOptions and this is what "other options passed to the catbox strategy used." means.
 * For context [See docs](https://hapijs.com/api/16.1.1#new-serveroptions) under: options > cache > a configuration object
 * **
 *    export interface CatboxServerOptionsCacheConfiguration extends Catbox.IPolicyOptions {
 *        // a prototype function or catbox engine object.
 *        engine: Catbox.EnginePrototypeOrObject;
 *        // an identifier used later when provisioning or configuring caching for server methods or plugins. Each cache name must be unique. A single item may omit the name option which defines the default cache. If every cache includes a name, a default memory cache is provisioned as well.
 *        name?: string;
 *        // if true, allows multiple cache users to share the same segment (e.g. multiple methods using the same cache storage container). Default to false.
 *        shared?: boolean;
 *    }
 */
export type CatboxServerOptionsCacheConfiguration = CatboxServerCacheConfiguration;

/**
 * Server cache method configuration for Catbox cache
 * Used for "Provisions a cache segment within the server cache facility"
 * For context [See docs](https://hapijs.com/api/16.1.1#servercacheoptions)
 * Also used in [See docs](https://hapijs.com/api/16.1.1#servermethodname-method-options) > options.cache
 */
export interface CatboxServerCacheConfiguration extends Catbox.PolicyOptions {
    /** the cache name configured in server.cache. Defaults to the default cache. */
    cache?: string;
    /** string segment name, used to isolate cached items within the cache partition. When called within a plugin, defaults to '!name' where 'name' is the plugin name. When called within a server method, defaults to '#name' where 'name' is the server method name. Required when called outside of a plugin. */
    segment?: string;
    /** if true, allows multiple cache provisions to share the same segment. Default to false. */
    shared?: boolean;
    /**
     * a prototype function or catbox engine object.
     * [See docs](https://hapijs.com/api/16.1.1#servercacheprovisionoptions-callback) example code includes use of `engine` option.  But server.cache.provision of `options` says "same as the server cache configuration options.".
     * TODO confirm once PR to hapi docs accepted / rejected.
     */
    engine?: Catbox.EnginePrototypeOrObject;
    /**
     * an identifier used later when provisioning or configuring caching for server methods or plugins. Each cache name must be unique. A single item may omit the name option which defines the default cache. If every cache includes a name, a default memory cache is provisioned as well.
     * [See docs](https://hapijs.com/api/16.1.1#servercacheprovisionoptions-callback) example code includes use of `name` option.  But server.cache.provision of `options` says "same as the server cache configuration options.".
     */
    name?: string;
    /**
     * Additional options to be passed to the Catbox strategy
     */
    [s: string]: any;
}

/**
 * Additional notes
 * payload - In case of an object it will be converted to a string for you. Defaults to no payload. Note that payload processing defaults to 'application/json' if no 'Content-Type' header provided.
 * [See docs](https://hapijs.com/api/16.1.1#serverinjectoptions-callback)
 */
export interface InjectedRequestOptions extends Shot.RequestOptions {
    /** an optional credentials object containing authentication information. The credentials are used to bypass the default authentication strategies, and are validated directly as if they were received via an authentication scheme. Defaults to no credentials. */
    credentials?: any;
    /** an optional artifacts object containing authentication artifact information. The artifacts are used to bypass the default authentication strategies, and are validated directly as if they were received via an authentication scheme. Ignored if set without credentials. Defaults to no artifacts. */
    artifacts?: any;
    /** sets the initial value of request.app. */
    app?: any;
    /** sets the initial value of request.plugins. */
    plugins?: PluginsStates;
    /** allows access to routes with config.isInternal set to true. Defaults to false. */
    allowInternals?: boolean;
}

/**
 * the response object from server.inject
 * [See docs](https://hapijs.com/api/16.1.1#serverinjectoptions-callback)
 */
export interface InjectedResponseObject extends Shot.ResponseObject {
    /** the raw handler response (e.g. when not a stream or a view) before it is serialized for transmission. If not available, the value is set to payload. Useful for inspection and reuse of the internal objects returned (instead of parsing the response string). */
    result: Object | string;
    /** the request object. */
    request: InjectedRequestOptions;
}

/**
 * For context [See docs](https://hapijs.com/api/16.1.1#new-serveroptions) under: options > connections
 */
export interface ConnectionConfigurationServerDefaults {
    /** application-specific connection configuration which can be accessed via connection.settings.app. Provides a safe place to store application configuration without potential conflicts with the framework internals. Should not be used to configure plugins which should use plugins[name]. Note the difference between connection.settings.app which is used to store configuration values and connection.app which is meant for storing run-time state.  */
    app?: any;
    /** if false, response content encoding is disabled. Defaults to true */
    compression?: boolean;
    /** connection load limits configuration where:  */
    load?: {
        /** maximum V8 heap size over which incoming requests are rejected with an HTTP Server Timeout (503) response. Defaults to 0 (no limit).  */
        maxHeapUsedBytes?: number;
        /** maximum process RSS size over which incoming requests are rejected with an HTTP Server Timeout (503) response. Defaults to 0 (no limit).  */
        maxRssBytes?: number;
        /** maximum event loop delay duration in milliseconds over which incoming requests are rejected with an HTTP Server Timeout (503) response. Defaults to 0 (no limit).  */
        maxEventLoopDelay?: number;
    };
    /** plugin-specific configuration which can later be accessed via connection.settings.plugins. Provides a place to store and pass connection-specific plugin configuration. plugins is an object where each key is a plugin name and the value is the configuration. Note the difference between connection.settings.plugins which is used to store configuration values and connection.plugins which is meant for storing run-time state. */
    plugins?: PluginSpecificConfiguration;
    /** controls how incoming request URIs are matched against the routing table: */
    router?: {
        /** determines whether the paths '/example' and '/EXAMPLE' are considered different resources. Defaults to true.  */
        isCaseSensitive?: boolean;
        /** removes trailing slashes on incoming paths. Defaults to false.  */
        stripTrailingSlash?: boolean;
    };
    /** a route options object used to set the default configuration for every route. */
    routes?: RouteAdditionalConfigurationOptions;
    /** sets the default configuration for every state (cookie) set explicitly via server.state() or implicitly (without definition) using the [state configuration object](https://hapijs.com/api/16.1.1#serverstatename-options). */
    state?: ServerStateCookieConfiguationObject;
}

/**
 * a connection configuration object or array of objects with the following optional keys.
 * Any connections configuration server defaults can be included to override and customize the individual connection.
 * [See docs](https://hapijs.com/api/16.1.1#serverconnectionoptions)
 */
export interface ServerConnectionOptions extends ConnectionConfigurationServerDefaults {
    /** host - the public hostname or IP address. Used only to set server.info.host and server.info.uri. If not configured, defaults to the operating system hostname and if not available, to 'localhost'. */
    host?: string;
    /** address - sets the host name or IP address the connection will listen on. If not configured, defaults to host if present, otherwise to all available network interfaces (i.e. '0.0.0.0'). Set to 127.0.0.1 or localhost to restrict connection to only those coming from the same machine. */
    address?: string;
    /** port - the TCP port the connection will listen to. Defaults to an ephemeral port (0) which uses an available port when the server is started (and assigned to server.info.port). If port is a string containing a '/' character, it is used as a UNIX domain socket path and if it starts with '\.\pipe' as a Windows named pipe. */
    port?: string | number;
    /** uri - the full public URI without the path (e.g. 'http://example.com:8080'). If present, used as the connection info.uri otherwise constructed from the connection settings. */
    uri?: string;
    /** listener - optional node.js HTTP (or HTTPS) http.Server object or any compatible object. If the listener needs to be manually started, set autoListen to false. If the listener uses TLS, set tls to true. */
    listener?: http.Server;
    /** autoListen - indicates that the connection.listener will be started manually outside the framework. Cannot be specified with a port setting. Defaults to true. */
    autoListen?: boolean;
    /** labels - a string or string array of labels used to server.select() specific connections matching the specified labels. Defaults to an empty array [] (no labels). */
    labels?: string | string[];
    /** tls - used to create an HTTPS connection. The tls object is passed unchanged as options to the node.js HTTPS server as described in the node.js HTTPS [documentation](https://nodejs.org/api/https.html#https_https_createserver_options_requestlistener})  . Set to true when passing a listener object that has been configured to use TLS directly. */
    tls?: boolean | https.RequestOptions;
}

/**
 * For context see RouteAdditionalConfigurationOptions > compression
 * For context [See docs](https://hapijs.com/api/16.1.1#serverencoderencoding-encoder)
 */
export type CompressionEncoderSettings = any;

/**
 * For context see RouteAdditionalConfigurationOptions > payload > compression
 * For context [See docs](https://hapijs.com/api/16.1.1#serverdecoderencoding-decoder)
 */
export type CompressionDecoderSettings = any;

/**
 * an optional function called after all the specified dependencies have been registered and before the server starts. The function is only called if the server is initialized or started. If a circular dependency is detected, an exception is thrown (e.g. two plugins each has an after function to be called after the other). The function signature is function(server, next) where:
 * [See docs](https://hapijs.com/api/16.1.1#serverdependencydependencies-after)
 * Also see Server.dependency
 * @param server  the server the dependency() method was called on.
 * @param next  the callback function the method must call to return control over to the application and complete the registration process. The function signature is function(err) where:
 *      * err - internal error condition, which is returned back via the server.initialize() or server.start() callback.
 */
export interface AfterDependencyLoadCallback {
    (server: Server, next: (err?: Error) => void): void;
}

/** For context see RouteAdditionalConfigurationOptions > auth */
export interface AuthOptions {
    /**
     * the authentication mode. Defaults to 'required' if a server authentication strategy is configured, otherwise defaults to no authentication. Available values:
     *  * 'required' - authentication is required.
     *  * 'optional' - authentication is optional (must be valid if present).
     *  * 'try' - same as 'optional' but allows for invalid authentication.
     */
    mode?: 'required' | 'optional' | 'try';
    /** a string array of strategy names in order they should be attempted. If only one strategy is used, strategy can be used instead with the single string value. Defaults to the default authentication strategy which is available only when a single strategy is configured.  */
    strategies?: string[];
    strategy?: string;
    /**
     * if set, the payload (in requests other than 'GET' and 'HEAD') is authenticated after it is processed. Requires a strategy with payload authentication support (e.g. Hawk). Cannot be set to a value other than 'required' when the scheme sets the options.payload to true. Available values:
     *  * false - no payload authentication. This is the default value.
     *  * 'required' - payload authentication required. This is the default value when the scheme sets options.payload to true.
     *  * 'optional' - payload authentication performed only when the client includes payload authentication information (e.g. hash attribute in Hawk).
     */
    payload?: false | 'required' | 'optional';
    /** specifying the route access rules. */
    access?: RouteAuthAccessConfiguationObject | RouteAuthAccessConfiguationObject[];
    /** (undocumented) Convenience way of setting access.scope, will over write all values in `access` */
    scope?: false | string | string[];
    /** (undocumented) Convenience way of setting access.entity, will over write all values in `access` */
    entity?: 'any' | 'user' | 'app';
}

/**
 * Each rule is evaluated against an incoming request and access is granted if at least one rule matches. Each rule object must include at least one of:
 * For context see RouteAdditionalConfigurationOptions > auth > an object > access
 */
export interface RouteAuthAccessConfiguationObject {
    /** the application scope required to access the route. Value can be a scope string or an array of scope strings. The authenticated credentials object scope property must contain at least one of the scopes defined to access the route. If a scope string begins with a + character, that scope is required. If a scope string begins with a ! character, that scope is forbidden. For example, the scope ['!a', '+b', 'c', 'd'] means the incoming request credentials' scope must not include 'a', must include 'b', and must include one of 'c' or 'd'. You may also access properties on the request object (query and params) to populate a dynamic scope by using {} characters around the property name, such as 'user-{params.id}'. Defaults to false (no scope requirements). */
    scope?: false | string | string[];
    /**
     * the required authenticated entity type. If set, must match the entity value of the authentication credentials. Available values:
     *  * any - the authentication can be on behalf of a user or application. This is the default value.
     *  * user - the authentication must be on behalf of a user which is identified by the presence of a user attribute in the credentials object returned by the authentication strategy.
     *  * app - the authentication must be on behalf of an application which is identified by the lack of presence of a user attribute in the credentials object returned by the authentication strategy.
     */
    entity?: 'any' | 'user' | 'app';
}

/**
 * For context see RouteAdditionalConfigurationOptions > cache
 */
export type RouteCacheOptions = {
    /**
     * determines the privacy flag included in client-side caching using the 'Cache-Control' header. Values are:
     *  * 'default' - no privacy flag. This is the default setting.
     *  * 'public' - mark the response as suitable for public caching.
     *  * 'private' - mark the response as suitable only for private caching.
     */
    privacy?: 'default' | 'public' | 'private';
    /** an array of HTTP response status codes (e.g. 200) which are allowed to include a valid caching directive. Defaults to [200]. */
    statuses?: number[];
    /** a string with the value of the 'Cache-Control' header when caching is disabled. Defaults to 'no-cache'. */
    otherwise?: string;
} & ({
    /** relative expiration expressed in the number of milliseconds since the item was saved in the cache. Cannot be used together with expiresAt. */
    expiresIn?: number;
    /** time of day expressed in 24h notation using the 'HH:MM' format, at which point all cache records for the route expire. Cannot be used together with expiresIn. */
    expiresAt?: undefined;
} | {
    /** relative expiration expressed in the number of milliseconds since the item was saved in the cache. Cannot be used together with expiresAt. */
    expiresIn?: undefined;
    /** time of day expressed in 24h notation using the 'HH:MM' format, at which point all cache records for the route expire. Cannot be used together with expiresIn. */
    expiresAt?: string;
} | {
    /** relative expiration expressed in the number of milliseconds since the item was saved in the cache. Cannot be used together with expiresAt. */
    expiresIn?: undefined;
    /** time of day expressed in 24h notation using the 'HH:MM' format, at which point all cache records for the route expire. Cannot be used together with expiresIn. */
    expiresAt?: undefined;
});

/**
 * For context see RouteAdditionalConfigurationOptions > cors
 */
export interface CorsConfigurationObject {
    /** a strings array of allowed origin servers ('Access-Control-Allow-Origin'). The array can contain any combination of fully qualified origins along with origin strings containing a wildcard '*' character, or a single '*' origin string. Defaults to any origin ['*']. */
    origin?: string[] | '*';
    /** number of seconds the browser should cache the CORS response ('Access-Control-Max-Age'). The greater the value, the longer it will take before the browser checks for changes in policy. Defaults to 86400 (one day). */
    maxAge?: number;
    /** a strings array of allowed headers ('Access-Control-Allow-Headers'). Defaults to ['Accept', 'Authorization', 'Content-Type', 'If-None-Match'] */
    headers?: string[];
    /** a strings array of additional headers to headers. Use this to keep the default headers in place. */
    additionalHeaders?: string[];
    /** a strings array of exposed headers ('Access-Control-Expose-Headers'). Defaults to ['WWW-Authenticate', 'Server-Authorization']. */
    exposedHeaders?: string[];
    /** a strings array of additional headers to exposedHeaders. Use this to keep the default headers in place. */
    additionalExposedHeaders?: string[];
    /** if true, allows user credentials to be sent ('Access-Control-Allow-Credentials'). Defaults to false. */
    credentials?: boolean;
}

/**
 * An object describing the extension function used whilst registering the extension function in one of the available extension points
 * [See docs](https://hapijs.com/api/16.1.1#serverextevents)
 * For context see RouteAdditionalConfigurationOptions > ext
 */
export interface ServerStartExtConfigurationObject {
    /** the extension point event name. */
    type: ServerStartExtPoints;
    /**
     * a function or an array of functions to be executed at a specified point during request processing. The required extension function signature is see ServerExtFunction or see ServerExtRequestHandler
     */
    method: ServerExtFunction | ServerExtFunction[];
    options?: ServerExtOptions;
}

/**
 * An object describing the extension function used whilst registering the extension function in one of the available extension points
 * [See docs](https://hapijs.com/api/16.1.1#serverextevents)
 * For context see RouteAdditionalConfigurationOptions > ext
 */
export interface ServerRequestExtConfigurationObject {
    /** the extension point event name. */
    type: ServerRequestExtPointsBase;
    /**
     * a function or an array of functions to be executed at a specified point during request processing. The required extension function signature is see ServerExtFunction or see ServerExtRequestHandler
     */
    method: ServerExtRequestHandler | ServerExtRequestHandler[]
    options?: ServerExtOptions;
}

/**
 * An object describing the extension function used whilst registering the extension function in one of the available extension points
 * [See docs](https://hapijs.com/api/16.1.1#serverextevents)
 * For context see RouteAdditionalConfigurationOptions > ext
 */
export interface ServerRequestExtConfigurationObjectWithRequest {
    /** the extension point event name. */
    type: ServerRequestExtPoints;
    /**
     * a function or an array of functions to be executed at a specified point during request processing. The required extension function signature is see ServerExtFunction or see ServerExtRequestHandler
     */
    method: ServerExtRequestHandler | ServerExtRequestHandler[];
    options?: ServerExtOptions;
}

/**
 * [See docs](https://hapijs.com/api/16.1.1#route-configuration) > ext
 */
export type RouteExtConfigurationObject = ServerStartExtConfigurationObject | ServerRequestExtConfigurationObject;

/**
 * [See docs](https://hapijs.com/api/16.1.1#serverextevents) > events > method
 */
export type ServerExtMethod = ServerExtFunction | ServerExtRequestHandler;

/**
 * [See docs](https://hapijs.com/api/16.1.1#serverextevents) > events > options
 */
export interface ServerExtOptions {
    /** before - a string or array of strings of plugin names this method must execute before (on the same event). Otherwise, extension methods are executed in the order added. */
    before: string | string[];
    /** after - a string or array of strings of plugin names this method must execute after (on the same event). Otherwise, extension methods are executed in the order added. */
    after: string | string[];
    /** bind - a context object passed back to the provided method (via this) when called. Ignored if the method is an arrow function. */
    bind: any;
    /** sandbox - if set to 'plugin' when adding a request extension points the extension is only added to routes defined by the current plugin. Not allowed when configuring route-level extensions, or when adding server extensions. Defaults to 'connection' which applies to any route added to the connection the extension is added to. */
    sandbox?: 'connection' | 'plugin';
}

/**
 * [See docs](https://hapijs.com/api/16.1.1#serverextevents) > events > type
 *  * 'onPreStart' - called before the connection listeners are started.
 *  * 'onPostStart' - called after the connection listeners are started.
 *  * 'onPreStop' - called before the connection listeners are stopped.
 *  * 'onPostStop' - called after the connection listeners are stopped.
 */
export type ServerStartExtPoints = 'onPreStart' | 'onPostStart' | 'onPreStop' | 'onPostStop';
/**
 * [See docs](https://hapijs.com/api/16.1.1#request-lifecycle)
 *  * The available extension points include the request extension points as well as the following server extension points:
 */
export type ServerRequestExtPointsBase = 'onPreResponse' | 'onPreAuth' | 'onPostAuth' | 'onPreHandler' | 'onPostHandler' | 'onPreResponse';

export type ServerRequestExtPoints = ServerRequestExtPointsBase | 'onRequest';

/**
 * Server extension function registered an one of the server extension points
 * [See docs](https://hapijs.com/api/16.1.1#serverextevents)
 * For context see ServerExtConfigurationObject
 * @param server - the server object.
 * @param next - the continuation method with signature function(err).
 * @param this - the object provided via options.bind or the current active context set with server.bind().
 */
export interface ServerExtFunction {
    (server: Server, next: ContinuationFunction): void;
}

/**
 * For context see RouteAdditionalConfigurationOptions > payload
 */
export interface RoutePayloadConfigurationObject {
    /**
     * the type of payload representation requested. The value must be one of:
     *  * 'data' - the incoming payload is read fully into memory. If parse is true, the payload is parsed (JSON, form-decoded, multipart) based on the 'Content-Type' header. If parse is false, the raw Buffer is returned. This is the default value except when a proxy handler is used.
     *  * 'stream' - the incoming payload is made available via a Stream.Readable interface. If the payload is 'multipart/form-data' and parse is true, fields values are presented as text while files are provided as streams. File streams from a 'multipart/form-data' upload will also have a property hapi containing filename and headers properties.
     *  * 'file' - the incoming payload is written to temporary file in the directory specified by the server's payload.uploads settings. If the payload is 'multipart/form-data' and parse is true, fields values are presented as text while files are saved. Note that it is the sole responsibility of the application to clean up the files generated by the framework. This can be done by keeping track of which files are used (e.g. using the request.app object), and listening to the server 'response' event to perform any needed cleanup.
     */
    output?: PayLoadOutputOption;
    /**
     * can be true, false, or gunzip; determines if the incoming payload is processed or presented raw. true and gunzip includes gunzipping when the appropriate 'Content-Encoding' is specified on the received request. If parsing is enabled and the 'Content-Type' is known (for the whole payload as well as parts), the payload is converted into an object when possible. If the format is unknown, a Bad Request (400) error response is sent. Defaults to true, except when a proxy handler is used. The supported mime types are:
     *  * 'application/json'
     *  * 'application/x-www-form-urlencoded'
     *  * 'application/octet-stream'
     *  * 'text/*'
     *  * 'multipart/form-data'
     */
    parse?: 'gunzip' | boolean;
    /**
     * overrides payload processing for multipart requests. Value can be one of:
     *  * false - disables multipart processing.
     *  * object with the following required options:
     *      * output - same as the payload.output option with an additional value option:
     *          * annotated - wraps each multipart part in an object with the following keys: // TODO type this?
     *              * headers - the part headers.
     *              * filename - the part file name.
     *              * payload - the processed part payload.
     */
    multipart?: false | {
        output: PayLoadOutputOption | 'annotated';
    };
    /** a string or an array of strings with the allowed mime types for the endpoint. Defaults to any of the supported mime types listed above. Note that allowing other mime types not listed will not enable them to be parsed, and that if parsing mode is 'parse', the request will result in an error response. */
    allow?: string | string[];
    /** a mime type string overriding the 'Content-Type' header value received. Defaults to no override. */
    override?: string;
    /** limits the size of incoming payloads to the specified byte count. Allowing very large payloads may cause the server to run out of memory. Defaults to 1048576 (1MB). */
    maxBytes?: number;
    /** payload reception timeout in milliseconds. Sets the maximum time allowed for the client to transmit the request payload (body) before giving up and responding with a Request Timeout (408) error response. Set to false to disable. Defaults to 10000 (10 seconds). */
    timeout?: number | false;
    /** the directory used for writing file uploads. Defaults to os.tmpdir(). */
    uploads?: string;
    /**
     * determines how to handle payload parsing errors. Allowed values are:
     *  * 'error' - return a Bad Request (400) error response. This is the default value.
     *  * 'log' - report the error but continue processing the request.
     *  * 'ignore' - take no action and continue processing the request.
     */
    failAction?: 'error' | 'log' | 'ignore';
    /** the default 'Content-Type' HTTP header value is not present. Defaults to 'application/json'. */
    defaultContentType?: string;
    /** an object where each key is a content-encoding name and each value is an object with the desired decoder settings. Note that encoder settings are set in the root option compression. */
    compression?: Dictionary<CompressionDecoderSettings>;
}

export type PayLoadOutputOption = 'data' | 'stream' | 'file';

/**
 * events must be one of:
 *  * an event name string.
 *  * an event options object see ApplicationEventOptionsObject
 * * a podium [See docs](https://github.com/hapijs/podium) emitter object.
 * For context [See docs](https://hapijs.com/api/16.1.1#servereventevents) > events parameter
 */
export type ApplicationEvent = string | ApplicationEventOptionsObject | Podium;

/**
 * an event options object
 * For context see ApplicationEvent
 * For context [See docs](https://hapijs.com/api/16.1.1#servereventevents) > events parameter
 */
export interface ApplicationEventOptionsObject {
    /** the event name string (required). */
    name: string;
    /** a string or array of strings specifying the event channels available. Defaults to no channel restrictions (event updates can specify a channel or not). */
    channels?: string | string[];
    /** if true, the data object passed to server.emit() is cloned before it is passed to the listeners (unless an override specified by each listener). Defaults to false (data is passed as-is). */
    clone?: boolean;
    /** if true, the data object passed to server.emit() must be an array and the listener method is called with each array element passed as a separate argument (unless an override specified by each listener). This should only be used when the emitted data structure is known and predictable. Defaults to false (data is emitted as a single argument regardless of its type). */
    spread?: boolean;
    /** if true and the criteria object passed to server.emit() includes tags, the tags are mapped to an object (where each tag string is the key and the value is true) which is appended to the arguments list at the end (but before the callback argument if block is set). A configuration override can be set by each listener. Defaults to false. */
    tags?: boolean;
    /** if true, the same event name can be registered multiple times where the second registration is ignored. Note that if the registration config is changed between registrations, only the first configuration is used. Defaults to false (a duplicate registration will throw an error). */
    shared?: boolean;
}

/* + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + +
 +                                                                           +
 +                                                                           +
 +                                                                           +
 +                                  Route                                    +
 +                                                                           +
 +                                                                           +
 +                                                                           +
 + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + */
// TODO: move to separate file http://stackoverflow.com/questions/43276921

/**
 * Route configuration
 * The route configuration object
 *
 * [See docs](https://hapijs.com/api/16.1.1#route-configuration)
 *
 * TODO typings check that the following refers to RouteAdditionalConfigurationOptions "Note that the options object is deeply cloned (with the exception of bind which is shallowly copied) and cannot contain any values that are unsafe to perform deep copy on."
 */
export interface RouteConfiguration {
    /** the absolute path used to match incoming requests (must begin with '/'). Incoming requests are compared to the configured paths based on the connection router configuration option. The path can include named parameters enclosed in {} which will be matched against literal values in the request as described in Path parameters. */
    path: string;
    /** the HTTP method. Typically one of 'GET', 'POST', 'PUT', 'PATCH', 'DELETE', or 'OPTIONS'. Any HTTP method is allowed, except for 'HEAD'. Use '*' to match against any HTTP method (only when an exact match was not found, and any match with a specific method will be given a higher priority over a wildcard match). Can be assigned an array of methods which has the same result as adding the same route with different methods manually. */
    method: HTTP_METHODS_PARTIAL | '*' | (HTTP_METHODS_PARTIAL | '*')[];
    /** an optional domain string or an array of domain strings for limiting the route to only requests with a matching host header field. Matching is done against the hostname part of the header only (excluding the port). Defaults to all hosts. */
    vhost?: string;
    /** the function called to generate the response after successful authentication and validation. The handler function is described in Route handler. If set to a string, the value is parsed the same way a prerequisite server method string shortcut is processed. Alternatively, handler can be assigned an object with a single key using the name of a registered handler type and value with the options passed to the registered handler. */
    handler?: string | RouteHandler | RouteHandlerPlugins;
    /** additional route options. The config value can be an object or a function that returns an object using the signature function(server) where server is the server the route is being added to and this is bound to the current realm's bind option. */
    config?: RouteAdditionalConfigurationOptions | ((server: Server) => RouteAdditionalConfigurationOptions);
}

/**
 * Route options
 * Each route can be customize to change the default behavior of the request lifecycle using the following options:
 * [See docs](https://hapijs.com/api/16.1.1#route-options)
 */
export interface RouteAdditionalConfigurationOptions {
    /** application specific configuration.Should not be used by plugins which should use plugins[name] instead. */
    app?: any;
    /**
     * Authentication configuration.  Value can be:
     *  * false to disable authentication if a default strategy is set.
     *  * a string with the name of an authentication strategy registered with server.auth.strategy().
     *  * an object
     */
    auth?: false | string | AuthOptions;
    /** an object passed back to the provided handler (via this) when called. Ignored if the method is an arrow function. */
    bind?: any;
    /**
     * Route cache options
     * if the route method is 'GET', the route can be configured to include caching directives in the response. The default Cache-Control: no-cache header can be disabled by setting cache to false. Caching can be customized using an object
     * TODO check: the default is to have 'Cache-Control: no-cache', but on first reading is a contridiction as you can disabled cache and disabled no-cache by setting RouteCacheOptions to false?
     */
    cache?: boolean | RouteCacheOptions;
    /** an object where each key is a content-encoding name and each value is an object with the desired encoder settings. Note that decoder settings are set in payload.compression. */
    compression?: Dictionary<CompressionEncoderSettings>;
    /** the Cross-Origin Resource Sharing protocol allows browsers to make cross-origin API calls. CORS is required by web applications running inside a browser which are loaded from a different domain than the API server. CORS headers are disabled by default (false). To enable, set cors to true, or to an object */
    cors?: boolean | CorsConfigurationObject;
    /** defined a route-level request extension points by setting the option to an object with a key for each of the desired extension points ('onRequest' is not allowed), and the value is the same as the [server.ext(events)](https://hapijs.com/api/16.1.1#serverextevents) event argument. */
    ext?: RouteExtConfigurationObject | RouteExtConfigurationObject[];
    /** defines the behavior for accessing files: */
    files?: {
        /** determines the folder relative paths are resolved against. */
        relativeTo: string;
    };
    /** an alternative location for the route.handler option. */
    handler?: string | RouteHandler;
    /** an optional unique identifier used to look up the route using server.lookup(). Cannot be assigned to routes with an array of methods. */
    id?: string;
    /** if true, the route cannot be accessed through the HTTP connection but only through the server.inject() interface with the allowInternals option set to true. Used for internal routes that should not be accessible to the outside world. Defaults to false. */
    isInternal?: boolean;
    /** optional arguments passed to JSON.stringify() when converting an object or error response to a string payload. Supports the following: */
    json?: Json.StringifyArguments & {
        /** string suffix added after conversion to JSON string. Defaults to no suffix. */
        suffix?: string;
    };
    /** enables JSONP support by setting the value to the query parameter name containing the function name used to wrap the response payload. For example, if the value is 'callback', a request comes in with 'callback=me', and the JSON response is '{ "a":"b" }', the payload will be 'me({ "a":"b" });'. Does not work with stream responses. Headers content-type and x-content-type-options are set to text/javascript and nosniff respectively, and will override those headers even if explicitly set by response.type() */
    jsonp?: string;
    /** if true, request level logging is enabled (accessible via request.getLog()). */
    log?: boolean;
    /**
     * determines how the request payload is processed
     * [See docs](https://hapijs.com/api/16.1.1#route-options)
     */
    payload?: RoutePayloadConfigurationObject;
    /** plugin-specific configuration. plugins is an object where each key is a plugin name and the value is the plugin configuration. */
    plugins?: PluginSpecificConfiguration;
    /** an array with [route prerequisites](https://hapijs.com/api/16.1.1#route-prerequisites) methods which are executed in serial or in parallel before the handler is called. */
    pre?: RoutePrerequisitesArray;
    /** processing rules for the outgoing response */
    response?: RouteResponseConfigurationObject;
    /** sets common security headers (disabled by default). To enable set security to true or to an object with the following options: See RouteSecurityConfigurationObject */
    security?: boolean | RouteSecurityConfigurationObject;
    /** HTTP state management (cookies) allows the server to store information on the client which is sent back to the server with every request (as defined in RFC 6265). state supports the following options: */
    state?: {
        /** determines if incoming 'Cookie' headers are parsed and stored in the request.state object. Defaults to true. */
        parse?: boolean;
        /**
         * determines how to handle cookie parsing errors. Allowed values are:
         *  * 'error' - return a Bad Request (400) error response. This is the default value.
         *  * 'log' - report the error but continue processing the request.
         *  * 'ignore' - take no action.
         */
        failAction: 'error' | 'log' | 'ignore';
    };
    /** request input validation rules for various request components. When using a Joi validation object, the values of the other inputs (i.e. headers, query, params, payload, and auth) are made available under the validation context (accessible in rules as Joi.ref('$query.key')). Note that validation is performed in order (i.e. headers, params, query, payload) and if type casting is used (converting a string to number), the value of inputs not yet validated will reflect the raw, unvalidated and unmodified values. If the validation rules for headers, params, query, and payload are defined at both the routes defaults level and an individual route, the individual route settings override the routes defaults (the rules are not merged). The validate object supports: */
    validate?: RouteValidationConfigurationObject;
    /** define timeouts for processing durations: */
    timeout?: {
        /** response timeout in milliseconds. Sets the maximum time allowed for the server to respond to an incoming client request before giving up and responding with a Service Unavailable (503) error response. Disabled by default (false). */
        server?: boolean | number;
        /** by default, node sockets automatically timeout after 2 minutes. Use this option to override this behavior. Defaults to undefined which leaves the node default unchanged. Set to false to disable socket timeouts. */
        socket?: boolean | number;
    };

    /**
     * TODO decide on moving these to an extended interface of RouteAdditionalConfigurationOptions
     */
    /**
     * ONLY WHEN ADDING NEW ROUTES (not when setting defaults).
     * route description used for generating documentation
     */
    description?: string;
    /**
     * ONLY WHEN ADDING NEW ROUTES (not when setting defaults).
     * route notes used for generating documentation
     */
    notes?: string | string[];
    /**
     * ONLY WHEN ADDING NEW ROUTES (not when setting defaults).
     * route tags used for generating documentation
     */
    tags?: string[];
}

/**
 * Route public interface
 * When route information is returned or made available as a property, it is an object with the following:
 * [See docs](https://hapijs.com/api/16.1.1#route-public-interface)
 */
export interface RoutePublicInterface {
    /** the route HTTP method. */
    method: string;
    /** the route path. */
    path: string;
    /** the route vhost option if configured. */
    vhost?: string | string[];
    /** the [active realm] [See docs](https://hapijs.com/api/16.1.1#serverrealm) associated with the route.*/
    realm: ServerRealm;
    /** the [route options] [See docs](https://hapijs.com/api/16.1.1#route-options) object with all defaults applied. */
    settings: RouteAdditionalConfigurationOptions;
    /** the route internal normalized string representing the normalized path. */
    fingerprint: string;
    /** route authentication utilities: */
    auth: {
        /** authenticates the passed request argument against the route's authentication access configuration. Returns true if the request would have passed the route's access requirements. Note that the route's authentication mode and strategies are ignored. The only match is made between the request.auth.credentials scope and entity information and the route access configuration. Also, if the route uses dynamic scopes, the scopes are constructed against the request.query and request.params which may or may not match between the route and the request's route. If this method is called using a request that has not been authenticated (yet or at all), it will return false if the route requires any authentication. */
        access(request: Request): boolean;
    };
}

export type RouteHandlerConfig = any;

/**
 * For context [See docs](https://hapijs.com/api/16.1.1#serverhandlername-method)
 * For source [See docs](https://github.com/hapijs/hapi/blob/v16.1.1/lib/handler.js#L103)
 * For source [See docs](https://github.com/hapijs/hapi/blob/v16.1.1/lib/route.js#L56-L60)
 * TODO check the type of `RouteHandlerConfig` is correct for `defaults`.
 */
export interface MakeRouteHandler {
    (route: RoutePublicInterface, options: RouteHandlerConfig): RouteHandler;
    defaults?: RouteHandlerConfig | ((method: HTTP_METHODS_PARTIAL_lowercase) => RouteHandlerConfig);
}

/**
 * [See docs](https://hapijs.com/api/16.1.1#servertablehost) > return value
 */
export interface RoutingTableEntry {
    /** the connection.info the connection the table was generated for. */
    info: ServerConnectionInfo;
    /** the connection labels. */
    labels: string[];
    /** an array of routes where each route contains: */
    table: Route[];
}

/**
 * [See docs](https://hapijs.com/api/16.1.1#servertablehost) > return value
 * For source [See source](https://github.com/hapijs/hapi/blob/v16.1.1/lib/route.js#L71)
 */
export interface Route {
    /**
     * the route config with defaults applied.
     * TODO check type of RouteConfiguration here is correct
     */
    settings: RouteAdditionalConfigurationOptions;
    /**
     * the HTTP method in lower case.
     * TODO, check if it can contain 'head' or not.
     */
    method: HTTP_METHODS_PARTIAL_lowercase;
    /** the route path. */
    path: string;

    params: string[];

    connection: ServerConnection;

    fingerprint: string;

    plugin?: any;

    public: RoutePublicInterface;

    server: Server;
}

/**
 * Route Prerequisites
 * It is often necessary to perform prerequisite actions before the handler is called (e.g. load required reference data from a database). The route pre option allows defining such pre-handler methods. The methods are called in order. If the pre array contains another array, those methods are called in parallel. pre can be assigned a mixed array of:
 *  * arrays containing the elements listed below, which are executed in parallel.
 *  * objects see RoutePrerequisiteObjects
 *  * functions - same as including an object with a single method key.
 *  * strings - special short-hand notation for registered server methods using the format 'name(args)' (e.g. 'user(params.id)') where:
 *      * 'name' - the method name. The name is also used as the default value of assign.
 *      * 'args' - the method arguments (excluding next) where each argument is a property of the request object
 * [See docs](https://hapijs.com/api/16.1.1#route-prerequisites)
 * For context see RouteAdditionalConfigurationOptions > pre
 *
 * TODO follow up on "server methods" in "special short-hand notation for registered server methods" at https://hapijs.com/api/16.1.1#servermethodname-method-options
 * TODO follow up on "request object" in "each argument is a property of the request object" at https://hapijs.com/api/16.1.1#request-object
 */
export type RoutePrerequisitesArray = RoutePrerequisitesPart[] | (RoutePrerequisitesPart[] | RoutePrerequisitesPart)[];
export type RoutePrerequisitesPart = RoutePrerequisiteObjects | RoutePrerequisiteRequestHandler | string;

/**
 * see RoutePrerequisites > objects
 */
export interface RoutePrerequisiteObjects {
    /** the function to call (or short-hand method string as described below [see RoutePrerequisitesArray]). the function signature is identical to a route handler as described in Route handler. */
    method: RoutePrerequisiteRequestHandler | string;
    /** key name to assign the result of the function to within request.pre. */
    assign: string;
    /*
     * determines how to handle errors returned by the method. Allowed values are:
     *  * 'error' - returns the error response back to the client. This is the default value.
     *  * 'log' - logs the error but continues processing the request. If assign is used, the error will be assigned.
     *  * 'ignore' - takes no special action. If assign is used, the error will be assigned.
     */
    failAction?: 'error' | 'log' | 'ignore';
}

/**
 * For context see RouteAdditionalConfigurationOptions > response
 */
export interface RouteResponseConfigurationObject<ValidationOptions = JoiValidationOptions> {
    /** the default HTTP status code when the payload is empty. Value can be 200 or 204. Note that a 200 status code is converted to a 204 only at the time or response transmission (the response status code will remain 200 throughout the request lifecycle unless manually set). Defaults to 200. */
    emptyStatusCode?: number;
    /**
     * defines what to do when a response fails payload validation. Options are:
     *  * 'error' - return an Internal Server Error (500) error response. This is the default value.
     *  * 'log' - log the error but send the response.
     *  * a custom error handler function with the signature function(request, reply, source, error) where:
     *      * 'request' - the request object.
     *      * 'reply' - the continuation reply interface.
     *      * 'error' - the error returned from the validation schema.
     * TODO update type of source once PR to hapi is concluded.
     */
    failAction?: 'error' | 'log' | ((request: Request, reply: ReplyWithContinue, source: string, error: Boom.BoomError) => void);
    /** if true, applies the validation rule changes to the response payload. Defaults to false. */
    modify?: boolean;
    /**
     * options to pass to Joi. Useful to set global options such as stripUnknown or abortEarly (the complete list is available [here](https://github.com/hapijs/joi/blob/master/API.md#validatevalue-schema-options-callback) ).
     * If a custom validation function (see `schema` or `status` below) is defined then `options` can an arbitrary object that will be passed to this function as the second parameter.
     * Defaults to no options.
     */
    options?: ValidationOptions;
    /** if false, payload range support is disabled. Defaults to true. */
    ranges?: boolean;
    /** the percent of response payloads validated (0 - 100). Set to 0 to disable all validation. Defaults to 100 (all response payloads). */
    sample?: number;
    /** the default response payload validation rules (for all non-error responses) */
    schema?: RouteResponseConfigurationScheme<ValidationOptions>;
    /** HTTP status-code-specific payload validation rules. The status key is set to an object where each key is a 3 digit HTTP status code and the value has the same definition as schema. If a response status code is not present in the status object, the schema definition is used, except for errors which are not validated by default. */
    status?: Dictionary<RouteResponseConfigurationScheme<ValidationOptions>>;
}

/**
 * the default response payload validation rules (for all non-error responses) expressed as one of:
 *  * true - any payload allowed (no validation performed). This is the default.
 *  * false - no payload allowed.
 *  * a Joi validation object. This will receive the request's headers, params, query, payload, and auth credentials and isAuthenticated flags as context.
 *  * a validation function
 *
 * TODO check JoiValidationObject is correct for "a Joi validation object"
 *
 * For context see RouteAdditionalConfigurationOptions > response > schema
 * and
 * For context see RouteAdditionalConfigurationOptions > response > status
 */
export type RouteResponseConfigurationScheme<ValidationOptions> = boolean | JoiValidationObject | ValidationFunctionForRouteResponse<ValidationOptions>;

/**
 * see RouteResponseConfigurationScheme
 *
 * a validation function using the signature function(value, options, next) where:
 *  * value - the value of the response passed to `reply(value)` in the handler.
 *  * options - the server validation options, merged with an object containing the request's headers, params, payload, and auth credentials object and `isAuthenticated` flag.
 *  * next([err, [value]]) - the callback function called when validation is completed.  `value` will be used as the response value when `err` is falsy, when `value` is not `undefined`, and when `route.settings.response.modify` is `true`.   If the response is already a `Boom` error it will be set as its `message` value.
 */
export interface ValidationFunctionForRouteResponse<ValidationOptions = {}> {
    (value: any, options: RouteResponseValidationContext & ValidationOptions, next: ContinuationValueFunction): void;
}

/**
 * A context for route input validation via a Joi schema or validation function.
 *
 * This object is merged with the route response options and passed into the validation function.
 *
 * See https://github.com/hapijs/hapi/blob/v16.1.1/lib/validation.js#L217
 */
export interface RouteResponseValidationContext {
    context: {
        /** The request headers */
        headers: Dictionary<string>;
        /** The request path parameters */
        params: any;
        /** The request query parameters */
        query: any;
        /** The request payload parameters */
        payload: any;

        /** Partial request authentication information */
        auth: {
            /** true if the request has been successfully authenticated, otherwise false. */
            isAuthenticated: boolean;
            /** the credential object received during the authentication process. The presence of an object does not mean successful authentication. */
            credentials: AuthenticatedCredentials;
        };
    }
}

/**
 * For context see RouteAdditionalConfigurationOptions > security
 */
export interface RouteSecurityConfigurationObject {
    /** controls the 'Strict-Transport-Security' header. If set to true the header will be set to max-age=15768000, if specified as a number the maxAge parameter will be set to that number. Defaults to true. You may also specify an object with the following fields: */
    hsts?: boolean | number | {
        /** the max-age portion of the header, as a number. Default is 15768000. */
        maxAge?: number;
        /** a boolean specifying whether to add the includeSubDomains flag to the header. */
        includeSubdomains?: boolean;
        /** a boolean specifying whether to add the 'preload' flag (used to submit domains inclusion in Chrome's HTTP Strict Transport Security (HSTS) preload list) to the header. */
        preload?: boolean;
    };
    /** controls the 'X-Frame-Options' header. When set to true the header will be set to DENY, you may also specify a string value of 'deny' or 'sameorigin'. Defaults to true. To use the 'allow-from' rule, you must set this to an object with the following fields: */
    xframe?: true | 'deny' | 'sameorigin' | {
        /** may also be 'deny' or 'sameorigin' but set directly as a string for xframe */
        rule: 'allow-from';
        /** when rule is 'allow-from' this is used to form the rest of the header, otherwise this field is ignored. If rule is 'allow-from' but source is unset, the rule will be automatically changed to 'sameorigin'. */
        source: string;
    };
    /** boolean that controls the 'X-XSS-PROTECTION' header for IE. Defaults to true which sets the header to equal '1; mode=block'. NOTE: This setting can create a security vulnerability in versions of IE below 8, as well as unpatched versions of IE8. See [here](https://hackademix.net/2009/11/21/ies-xss-filter-creates-xss-vulnerabilities/) and [here](https://technet.microsoft.com/library/security/ms10-002) for more information. If you actively support old versions of IE, it may be wise to explicitly set this flag to false. [Kept typing non optional to force this security related documentation to be read.] */
    xss: boolean;
    /** boolean controlling the 'X-Download-Options' header for IE, preventing downloads from executing in your context. Defaults to true setting the header to 'noopen'. */
    noOpen?: boolean;
    /** boolean controlling the 'X-Content-Type-Options' header. Defaults to true setting the header to its only and default option, 'nosniff' */
    noSniff?: boolean;
}

/**
 * request input validation rules for various request components. When using a Joi validation object, the values of the other inputs (i.e. headers, query, params, payload, and auth) are made available under the validation context (accessible in rules as Joi.ref('$query.key')). Note that validation is performed in order (i.e. headers, params, query, payload) and if type casting is used (converting a string to number), the value of inputs not yet validated will reflect the raw, unvalidated and unmodified values. If the validation rules for headers, params, query, and payload are defined at both the routes defaults level and an individual route, the individual route settings override the routes defaults (the rules are not merged). The validate object supports:
 * For context see RouteAdditionalConfigurationOptions > validate
 * TODO check JoiValidationObject is correct for "a Joi validation object"
 */
export interface RouteValidationConfigurationObject<ValidationOptions = JoiValidationOptions> {
    /**
     * validation rules for incoming request headers (note that all header field names must be in lowercase to match the headers normalized by node). Values allowed:
     *  * true - any headers allowed (no validation performed). This is the default.
     *  * false - no headers allowed (this will cause all valid HTTP requests to fail).
     *  * a Joi validation object.
     *  * a validation function using the signature function(value, options, next) where:
     *      * value - the object containing the request headers.
     *      * options - the server validation options.
     *      * next(err, value) - the callback function called when validation is completed.  `value` will be used as the `headers` value when `err` is falsy.  If `next` is called with `undefined` or no arguments then the original value of `value` will be used.
     */
    headers?: boolean | JoiValidationObject | ValidationFunctionForRouteInput<ValidationOptions>;
    /**
     * validation rules for incoming request path parameters, after matching the path against the route and extracting any parameters then stored in request.params. Values allowed:
     * Same as `headers`, see above.
     */
    params?: boolean | JoiValidationObject | ValidationFunctionForRouteInput<ValidationOptions>;
    /**
     * validation rules for an incoming request URI query component (the key-value part of the URI between '?' and '#'). The query is parsed into its individual key-value pairs and stored in request.query prior to validation. Values allowed:
     * Same as `headers`, see above.
     */
    query?: boolean | JoiValidationObject | ValidationFunctionForRouteInput<ValidationOptions>;
    /**
     * validation rules for an incoming request payload (request body). Values allowed:
     * Same as `headers`, see above, with the addition that:
     *  * a Joi validation object. Note that empty payloads are represented by a null value. If a validation schema is provided and empty payload are supported, it must be explicitly defined by setting the payload value to a joi schema with null allowed (e.g. Joi.object({ /* keys here  * / }).allow(null)).
     */
    payload?: boolean | JoiValidationObject | ValidationFunctionForRouteInput<ValidationOptions>;
    /** an optional object with error fields copied into every validation error response. */
    errorFields?: any;
    /**
     * determines how to handle invalid requests. Allowed values are:
     *  * 'error' - return a Bad Request (400) error response. This is the default value.
     *  * 'log' - log the error but continue processing the request.
     *  * 'ignore' - take no action.
     *  * a custom error handler function with the signature function(request, reply, source, error) see RouteFailFunction
     */
    failAction?: 'error' | 'log' | 'ignore' | RouteFailFunction;
    /**
     * options to pass to Joi. Useful to set global options such as stripUnknown or abortEarly (the complete list is [available here](https://github.com/hapijs/joi/blob/master/API.md#validatevalue-schema-options-callback)).
     * If a custom validation function (see `headers`, `params`, `query`, or `payload` above) is defined then `options` can an arbitrary object that will be passed to this function as the second parameter.
     * Defaults to no options.
     */
    options?: ValidationOptions;
}

/**
 * a validation function using the signature function(value, options, next) where:
 * For context see RouteAdditionalConfigurationOptions > validate (RouteValidationConfigurationObject)
 *
 * Also see ValidationFunctionForRouteResponse
 * @param value - the object containing the request headers, query, path params or payload.
 * @param options - the server validation options.
 * @param next([err, [value]]) - the callback function called when validation is completed.
 */
export interface ValidationFunctionForRouteInput<ValidationOptions = {}> {
    (value: any, options: RouteInputValidationContext & ValidationOptions, next: ContinuationValueFunction): void;
}

/**
 * A context for route input validation via a Joi schema or validation function.
 *
 * This object is merged with the route validation options and passed into the validation function.
 *
 * See https://github.com/hapijs/hapi/blob/v16.1.1/lib/validation.js#L122
 */
export interface RouteInputValidationContext {
    context: {
        // These are only set when *not* validating the respective source (e.g. params, query and payload are set when validating headers):
        // See https://github.com/hapijs/hapi/blob/v16.1.1/lib/validation.js#L132
        headers?: Dictionary<string>;
        params?: any;
        query?: any;
        payload?: any;

        /** The request authentication information */
        auth: RequestAuthenticationInformation;
    }
}

/**
 * a custom error handler function with the signature 'function(request, reply, source, error)`
 * @param request - the request object.
 * @param reply - the continuation reply interface.
 * @param source - the source of the invalid field (e.g. 'headers', 'params', 'query', 'payload').
 * @param error - the error object prepared for the client response (including the validation function error under error.data).
 */
export interface RouteFailFunction {
    (request: Request, reply: ReplyWithContinue, source: string, error: any): void;
}

/**
 * optional cookie settings
 * [See docs](https://hapijs.com/api/16.1.1#serverstatename-options)
 * Related to see ConnectionConfigurationServerDefaults
 */
export interface ServerStateCookieConfiguationObject {
    /** time-to-live in milliseconds. Defaults to null (session time-life - cookies are deleted when the browser is closed). */
    ttl?: number | null;
    /** sets the 'Secure' flag. Defaults to true. */
    isSecure?: boolean;
    /** sets the 'HttpOnly' flag. Defaults to true. */
    isHttpOnly?: boolean;
    /**
     * sets the 'SameSite' flag where the value must be one of:
     *  * false - no flag.
     *  * 'Strict' - sets the value to 'Strict' (this is the default value).
     *  * 'Lax' - sets the value to 'Lax'.
     */
    isSameSite?: false | 'Strict' | 'Lax';
    /** the path scope. Defaults to null (no path). */
    path?: string | null;
    /** the domain scope. Defaults to null (no domain). */
    domain?: string | null;
    /**
     * if present and the cookie was not received from the client or explicitly set by the route handler, the cookie is automatically added to the response with the provided value. The value can be a function with signature function(request, next) where:
     *  * request - the request object.
     *  * next - the continuation function using the function(err, value) signature.
     */
    autoValue?(request: Request, next: ContinuationValueFunction): void;
    /**
     * encoding performs on the provided value before serialization. Options are:
     *  * 'none' - no encoding. When used, the cookie value must be a string. This is the default value.
     *  * 'base64' - string value is encoded using Base64.
     *  * 'base64json' - object value is JSON-stringified then encoded using Base64.
     *  * 'form' - object value is encoded using the x-www-form-urlencoded method.
     *  * 'iron' - Encrypts and sign the value using iron.
     */
    encoding?: 'none' | 'base64' | 'base64json' | 'form' | 'iron';
    /**
     * an object used to calculate an HMAC for cookie integrity validation. This does not provide privacy, only a mean to verify that the cookie value was generated by the server. Redundant when 'iron' encoding is used. Options are:
     *  * integrity - algorithm options. Defaults to require('iron').defaults.integrity.
     *  * password - password used for HMAC key generation (must be at least 32 characters long).
     */
    sign?: {
        integrity?: any;  // TODO make iron definitions and getting typing from iron
        password: string;
    };
    /** password used for 'iron' encoding (must be at least 32 characters long). */
    password?: string;
    /** options for 'iron' encoding. Defaults to require('iron').defaults. */
    iron?: any;  // TODO make iron definitions and getting typing from iron
    /** if true, errors are ignored and treated as missing cookies. */
    ignoreErrors?: boolean;
    /** if true, automatically instruct the client to remove invalid cookies. Defaults to false. */
    clearInvalid?: boolean;
    /** if false, allows any cookie value including values in violation of RFC 6265. Defaults to true. */
    strictHeader?: boolean;
    /** used by proxy plugins (e.g. h2o2). */
    passThrough?: any;
}

/**
 * [See docs](https://hapijs.com/api/16.1.1#serverconnections)
 */
export interface ServerConnection {
    /** settings - the connection configuration object passed to server.connection() after applying the server defaults. */
    settings: ServerConnectionOptions;
    /** server - the connection's Server object. */
    server: Server;
    /** type - set to 'tcp' is the connection is listening on a TCP port, otherwise to 'socket'(a UNIX domain socket or a Windows named pipe). */
    type: 'tcp' | 'socket';
    /**
     * registrations
     * Described [See docs](https://hapijs.com/api/16.1.1#serverregistrations) "When the server contains more than one connection, each server.connections array member provides its own connection.registrations."
     */
    registrations: ServerRegisteredPlugins;
    /** states - TODO contribute docs to hapi if they want, and then update type here */
    states: any;
    /** auth - TODO contribute docs to hapi if they want, and then update type here */
    auth: any;
    /**
     * plugins
     * TODO contribute docs to hapi if they want.  Assuming similar to `registrations`, `listener`, `info`, etc
     */
    plugins: PluginsStates;
    /**
     * app
     * TODO contribute docs to hapi if they want.  Assuming similar to `registrations`, `listener`, `info`, etc
     */
    app: any;
    /** Described in server.listener [See docs](https://hapijs.com/api/16.1.1#serverlistener) */
    listener: ServerListener;
    /** Described in server.info [See docs](https://hapijs.com/api/16.1.1#serverinfo) */
    info: ServerConnectionInfo;
    /** Described in server.inject [See docs](https://hapijs.com/api/16.1.1#serverinjectoptions-callback) */
    inject(options: string | InjectedRequestOptions, callback: (res: InjectedResponseObject) => void): void;
    inject(options: string | InjectedRequestOptions, ): Promise<InjectedResponseObject>;
    /** Mentioned but not documented under server.connections [See docs](https://hapijs.com/api/16.1.1#serverconnections) */
    table(host?: string): Route[];
    /** Described in server.table [See docs](https://hapijs.com/api/16.1.1#serverlookupid) */
    lookup(id: string): RoutePublicInterface | null;
    /** Described in server.table [See docs](https://hapijs.com/api/16.1.1#servermatchmethod-path-host) */
    match(method: HTTP_METHODS, path: string, host?: string): RoutePublicInterface | null;
}

/**
 * [See docs](https://hapijs.com/api/16.1.1#serverinfo)
 */
export interface ServerConnectionInfo {
    /** a unique connection identifier (using the format '{hostname}:{pid}:{now base36}'). */
    id: string;
    /** the connection creation timestamp. */
    created: number;
    /** the connection start timestamp (0 when stopped). */
    started: number;
    /**
     * the connection port based on the following rules:
     *  * the configured port value before the server has been started.
     *  * the actual port assigned when no port is configured or set to 0 after the server has been started.
     * TODO check this type.  What happens when socket is a UNIX domain socket or Windows named pipe?
     */
    port: number | string;
    /** the host name the connection was configured to. Defaults to the operating system hostname when available, otherwise 'localhost'. */
    host: string;
    /** the active IP address the connection was bound to after starting. Set to undefined until the server has been started or when using a non TCP port (e.g. UNIX domain socket). */
    address: undefined | string;
    /** the protocol used.  'socket' when UNIX domain socket or Windows named pipe. */
    protocol: 'http' | 'https' | 'socket';
    /** a string representing the connection (e.g. 'http://example.com:8080' or 'socket:/unix/domain/socket/path'). Contains the uri setting if provided, otherwise constructed from the available settings. If no port is available or set to 0, the uri will not include a port component. */
    uri: string;
}

/**
 * [See docs](https://hapijs.com/api/16.1.1#serverlistener)
 */
export type ServerListener = http.Server;

/**
 * server.realm
 * The realm object contains server-wide or plugin-specific state that can be shared across various methods. For example, when calling server.bind(), the active realm settings.bind property is set which is then used by routes and extensions added at the same level (server root or plugin). Realms are a limited version of a sandbox where plugins can maintain state used by the framework when adding routes, extensions, and other properties.
 * [See docs](https://hapijs.com/api/16.1.1#serverrealm)
 */
export interface ServerRealm {
    /** when the server object is provided as an argument to the plugin register() method, modifiers provides the registration preferences passed the server.register() method and includes: */
    modifiers: {
        /** routes preferences: */
        route: {
            /** the route path prefix used by any calls to server.route() from the server. Note that if a prefix is used and the route path is set to '/', the resulting path will not include the trailing slash. */
            prefix: string;
            /** the route virtual host settings used by any calls to server.route() from the server. */
            vhost: string;
        }
    };
    /** the active plugin name (empty string if at the server root). */
    plugin: string;
    /** the plugin options object passed at registration. */
    pluginOptions: any;  // OptionsPassedToPlugin;
    /** plugin-specific state to be shared only among activities sharing the same active state. plugins is an object where each key is a plugin name and the value is the plugin state. */
    plugins: PluginsStates;
    /** settings overrides (from RouteAdditionalConfigurationOptions) */
    settings: {
        files: {
            relativeTo: string;
        };
        bind: any;
    };
}

/**
 * [See docs](https://hapijs.com/api/16.1.1#serverregistrations)
 */
export interface ServerRegisteredPlugins {
    [pluginName: string]: ServerRegisteredPlugin;
}

/**
 * [See docs](https://hapijs.com/api/16.1.1#serverregistrations)
 */
export interface ServerRegisteredPlugin {
    /** the plugin version. */
    version: string;
    /** the plugin name. */
    name: string;
    /**
     * options used to register the plugin.
     * TODO update with outcome of: https://github.com/hapijs/hapi/pull/3479
     */
    options: any;  // OptionsPassedToPlugin;
    /** plugin registration attributes. */
    attributes: PluginAttributes;
}

export interface ServerAuth {
    /**
     * server.auth.api
     * An object where each key is a strategy name and the value is the exposed strategy API. Available on when the authentication scheme exposes an API by returning an api key in the object returned from its implementation function.
     * When the server contains more than one connection, each server.connections array member provides its own connection.auth.api object.
     * [See docs](https://hapijs.com/api/16.1.1#serverauthapi)
     */
    api: Dictionary<Strategy>;
    /**
     * server.auth.default
     * Sets a default strategy which is applied to every route
     * The default does not apply when the route config specifies auth as false, or has an authentication strategy configured (contains the strategy or strategies authentication settings). Otherwise, the route authentication config is applied to the defaults.
     * Note that if the route has authentication config, the default only applies at the time of adding the route, not at runtime. This means that calling default() after adding a route with some authentication config will have no impact on the routes added prior. However, the default will apply to routes added before default() is called if those routes lack any authentication config.
     * The default auth strategy configuration can be accessed via connection.auth.settings.default. To obtain the active authentication configuration of a route, use connection.auth.lookup(request.route).
     * [See docs](https://hapijs.com/api/16.1.1#serverauthdefaultoptions)
     */
    default(options: string | AuthOptions): void;
    /**
     * server.auth.scheme
     * Registers an authentication scheme
     * [See docs](https://hapijs.com/api/16.1.1#serverauthschemename-scheme)
     * @param name the scheme name.
     * @param scheme the method implementing the scheme with signature function(server, options) see ServerAuthScheme
     */
    scheme(name: string, scheme: ServerAuthScheme): void;
    /**
     * Registers an authentication strategy
     * [See docs](https://hapijs.com/api/16.1.1#serverauthstrategyname-scheme-mode-options)
     * @param name  the strategy name.
     * @param scheme  the scheme name (must be previously registered using server.auth.scheme()).
     * @param mode  if set to true (which is the same as 'required') or to a valid authentication mode ('required', 'optional', 'try'), the scheme is automatically assigned as the default strategy for any route without an auth config. Can only be assigned to a single server strategy. Defaults to false (no default settings).
     * @param options  scheme options based on the scheme requirements.
     */
    strategy(name: string, scheme: string, options?: any): void;
    strategy(name: string, scheme: string, mode: boolean | 'required' | 'optional' | 'try', options?: any): void;
    /**
     * Tests a request against an authentication strategy
     * Note that the test() method does not take into account the route authentication configuration. It also does not perform payload authentication. It is limited to the basic strategy authentication execution. It does not include verifying scope, entity, or other route properties.
     * [See docs](https://hapijs.com/api/16.1.1#serverauthteststrategy-request-next)
     * @param strategy - the strategy name registered with server.auth.strategy().
     * @param request - the request object.
     * @param next - the callback function with signature function(err, credentials) where:
     *      * err - the error if authentication failed.
     *      * credentials - the authentication credentials object if authentication was successful.
     */
    test(strategy: string, request: Request, next: (err: Error | null, credentials: AuthenticatedCredentials) => void): void;
}

export type Strategy = any;
export type SchemeSettings = any;

/**
 * the method implementing the scheme with signature function(server, options) where:
 * [See docs](https://hapijs.com/api/16.1.1#serverauthschemename-scheme)
 * @param server  a reference to the server object the scheme is added to.
 * @param options  optional scheme settings used to instantiate a strategy.
 */
export interface ServerAuthScheme {
    (server: Server, options: SchemeSettings): SchemeMethodResult;
}

/**
 * The scheme method must return an object with the following
 * [See docs](https://hapijs.com/api/16.1.1#serverauthschemename-scheme)
 */
export interface SchemeMethodResult {
    /** optional object which is exposed via the server.auth.api object. */
    api?: Strategy;
    /**
     * required function called on each incoming request configured with the authentication scheme
     * When the scheme authenticate() method implementation calls reply() with an error condition, the specifics of the error affect whether additional authentication strategies will be attempted (if configured for the route). If the err passed to the reply() method includes a message, no additional strategies will be attempted. If the err does not include a message but does include the scheme name (e.g. Boom.unauthorized(null, 'Custom')), additional strategies will be attempted in the order of preference (defined in the route configuration). If authentication fails the scheme names will be present in the 'WWW-Authenticate' header.
     * @param request  the request object.
     * @param reply  the reply interface the authentication method must call when done authenticating the request
     */
    authenticate(request: Request, reply: ReplySchemeAuth): void;
    /**
     * optional function called to authenticate the request payload
     * When the scheme payload() method returns an error with a message, it means payload validation failed due to bad payload. If the error has no message but includes a scheme name (e.g. Boom.unauthorized(null, 'Custom')), authentication may still be successful if the route auth.payload configuration is set to 'optional'.
     * @param request  the request object.
     * @param reply  is called if authentication failed
     */
    payload?(request: Request, reply: ReplySchemeAuthOfPayload): void;
    /**
     * optional function called to decorate the response with authentication headers before the response headers or payload is written where:
     * @param request  the request object.
     * @param reply  is called if an error occured
     */
    response?(request: Request, reply: ReplySchemeAuthDecorateResponse): void;
    /** an optional object with the following keys: */
    options?: {
        /** if true, requires payload validation as part of the scheme and forbids routes from disabling payload auth validation. Defaults to false. */
        payload?: boolean;
    };
}

export interface ServerCacheMethod {
    /**
     * Provisions a cache segment within the server cache facility
     * [See docs](https://hapijs.com/api/16.1.1#servercacheoptions)
     */
    (options: CatboxServerCacheConfiguration): Catbox.Policy;
    /**
     * Provisions a server cache as described in server.cache
     * If no callback is provided, a Promise object is returned.
     * Note that if the server has been initialized or started, the cache will be automatically started to match the state of any other provisioned server cache.
     * [See docs](https://hapijs.com/api/16.1.1#servercacheprovisionoptions-callback)
     * @param options  same as the server cache configuration options.
     * @param callback  the callback method when cache provisioning is completed or failed with the signature function(err) where:
     *      * err - any cache startup error condition.
     */
    provision(options: CatboxServerCacheConfiguration): Promise<any>;
    provision(options: CatboxServerCacheConfiguration, callback: (err?: Error) => void): void;
}

/* + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + +
 +                                                                           +
 +                                                                           +
 +                                                                           +
 +                               Request                                     +
 +                                                                           +
 +                                                                           +
 +                                                                           +
 + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + */
// TODO: move to separate file http://stackoverflow.com/questions/43276921

/**
 * Request object
 * The request object is created internally for each incoming request. It is different from the node.js request object received from the HTTP server callback (which is available in request.raw.req). The request object methods and properties change throughout the request lifecycle.
 * [See docs](https://hapijs.com/api/16.1.1#request-object)
 * [See docs](https://hapijs.com/api/16.1.1#request-properties)
 */
export class Request extends Podium {
    /** application-specific state. Provides a safe place to store application data without potential conflicts with the framework. Should not be used by plugins which should use plugins[name]. */
    app: any;
    /** authentication information */
    auth: RequestAuthenticationInformation;
    /** the connection the request was received by. */
    connection: ServerConnection;
    /**  the node domain object used to protect against exceptions thrown in extensions, handlers and route prerequisites. Can be used to manually bind callback functions otherwise bound to other domains. Set to null when the server useDomains options is false. */
    domain: domain.Domain | null;
    /** the raw request headers (references request.raw.headers). */
    headers: Dictionary<string>;
    /** a unique request identifier (using the format '{now}:{connection.info.id}:{5 digits counter}').*/
    id: string;
    /** request information */
    info: {
        /** the request preferred encoding. */
        acceptEncoding: string;
        /** if CORS is enabled for the route, contains the following: */
        cors: {
            /**
             * true if the request 'Origin' header matches the configured CORS restrictions. Set to false if no 'Origin' header is found or if it does not match. Note that this is only available after the 'onRequest' extension point as CORS is configured per-route and no routing decisions are made at that point in the request lifecycle.
             * Note: marking as optional as "... this is only available after ..."
             */
            isOriginMatch?: boolean;
        };
        /** content of the HTTP 'Host' header (e.g. 'example.com:8080'). */
        host: string;
        /** the hostname part of the 'Host' header (e.g. 'example.com'). */
        hostname: string;
        /** request reception timestamp. */
        received: number;
        /** content of the HTTP 'Referrer' (or 'Referer') header. */
        referrer: string;
        /** remote client IP address. */
        remoteAddress: string;
        /**
         * remote client port.
         * Set to string in casethey're requesting from a UNIX domain socket.
         * TODO, what type does Hapi return, should this be number | string?
         */
        remotePort: string;
        /** request response timestamp (0 is not responded yet). */
        responded: number;
    };
    /** the request method in lower case (e.g. 'get', 'post'). */
    method: string;
    /** the parsed content-type header. Only available when payload parsing enabled and no payload error occurred. */
    mime: string;
    /** an object containing the values of params, query, and payload before any validation modifications made. Only set when input validation is performed. */
    orig: {
        params: any;
        query: any;
        payload: any;
    };
    /** an object where each key is a path parameter name with matching value as described in Path parameters [See docs](https://hapijs.com/api/16.1.1#path-parameters). */
    params: Dictionary<string>;
    /** an array containing all the path params values in the order they appeared in the path. */
    paramsArray: string[];
    /** the request URI's pathname [See docs](https://nodejs.org/api/url.html#url_urlobject_pathname) component. */
    path: string;
    /**
     * the request payload based on the route payload.output and payload.parse settings.
     * TODO check this typing and add references / links.
     */
    payload: stream.Readable | Buffer | any;
    /** plugin-specific state. Provides a place to store and pass request-level plugin data. The plugins is an object where each key is a plugin name and the value is the state. */
    plugins: PluginsStates;
    /** an object where each key is the name assigned by a route prerequisites function. The values are the raw values provided to the continuation function as argument. For the wrapped response object, use responses. */
    pre: Object;
    /** the response object when set. The object can be modified but must not be assigned another object. To replace the response with another from within an extension point, use reply(response) to override with a different response. Contains null when no response has been set (e.g. when a request terminates prematurely when the client disconnects). */
    response: Response | null;
    /** same as pre but represented as the response object created by the pre method. */
    preResponses: Object;
    /**
     * by default the object outputted from [node's URL parse()](https://nodejs.org/docs/latest/api/url.html#url_urlobject_query) method.
     * Might also be set indirectly via [request.setUrl](https://github.com/DefinitelyTyped/DefinitelyTyped/pull/17354#requestseturlurl-striptrailingslash) in which case it may be
     * a string (if url is set to an object with the query attribute as an unparsed string).
     */
    query: any;
    /** an object containing the Node HTTP server objects. **Direct interaction with these raw objects is not recommended.** */
    raw: {
        req: http.IncomingMessage; // Or http.ClientRequest http://www.apetuts.com/tutorial/node-js-http-client-request-class/ ?
        res: http.ServerResponse;
    };
    /**
     * the route public interface.
     * Optional due to "request.route is not yet populated at this point." [See docs](https://hapijs.com/api/16.1.1#request-lifecycle)
     */
    route?: RoutePublicInterface;
    /** the server object. */
    server: Server;
    /** an object containing parsed HTTP state information (cookies) where each key is the cookie name and value is the matching cookie content after processing using any registered cookie definition. */
    state: Dictionary<any>;
    /** the parsed request URI */
    url: url.Url;

    /**
     * request.setUrl(url, [stripTrailingSlash])
     * Available only in 'onRequest' extension methods.
     * Changes the request URI before the router begins processing the request
     * [See docs](https://hapijs.com/api/16.1.1#requestseturlurl-striptrailingslash)
     * @param url  the new request URI. If url is a string, it is parsed with node's URL parse() method. url can also be set to an object compatible with node's URL parse() method output.
     * @param stripTrailingSlash  if true, strip the trailing slash from the path. Defaults to false.
     */
    setUrl(url: string | url.Url, stripTrailingSlash?: boolean): void;
    /**
     * request.setMethod(method)
     * Available only in 'onRequest' extension methods.
     * Changes the request method before the router begins processing the request
     * [See docs](https://hapijs.com/api/16.1.1#requestsetmethodmethod)
     * @param method  is the request HTTP method (e.g. 'GET').
     */
    setMethod(method: HTTP_METHODS): void;
    /**
     * request.generateResponse(source, [options])
     * Always available.
     * Returns a response which you can pass into the reply interface where:
     * [See docs](https://hapijs.com/api/16.1.1#requestgenerateresponsesource-options)
     * @param source  the object to set as the source of the reply interface.  TODO, submit a PR to clarify this doc, from the source code it's clear that "the object to set" refers to something of type `ReplyValue` i.e. that can be null, string, number, object, Stream, Promise, or Buffer.
     * @param options  options for the method, optional.  Not documented yet, perhaps not very important.
     */
    generateResponse(source?: ReplyValue, options?: {marshal?: any; prepare?: any; close?: any; variety?: any}): Response;
    /**
     * request.log(tags, [data, [timestamp]])
     * Always available.
     * Logs request-specific events. When called, the server emits a 'request' event which can be used by other listeners or plugins.
     * Any logs generated by the server internally will be emitted only on the 'request-internal' channel and will include the event.internal flag set to true.
     * [See docs](https://hapijs.com/api/16.1.1#requestlogtags-data-timestamp)
     * @param tags  a string or an array of strings (e.g. ['error', 'database', 'read']) used to identify the event. Tags are used instead of log levels and provide a much more expressive mechanism for describing and filtering events.
     * @param data  an optional message string or object with the application data being logged. If data is a function, the function signature is function() and it called once to generate (return value) the actual data emitted to the listeners.
     * @param timestamp  an optional timestamp expressed in milliseconds. Defaults to Date.now() (now).
     */
    log(tags: string | string[], data?: string | Object | (() => string | Object), timestamp?: number): void;
    /**
     * request.getLog([tags], [internal])
     * Always available.
     * Returns an array containing the events matching any of the tags specified (logical OR)
     * Note that this methods requires the route log configuration set to true.
     * [See docs](https://hapijs.com/api/16.1.1#requestgetlogtags-internal)
     * @param tags  is a single tag string or array of tag strings. If no tags specified, returns all events.
     * @param internal  filters the events to only those with a matching event.internal value. If true, only internal logs are included. If false, only user event are included. Defaults to all events (undefined).
     */
    getLog(tags?: string | string[], internal?: boolean): string[];
    getLog(internal?: boolean): string[];
    /**
     * request.tail([name])
     * Available until immediately after the 'response' event is emitted.
     * Adds a request tail which has to complete before the request lifecycle is complete.
     * Returns a tail function which must be called when the tail activity is completed.
     * Tails are actions performed throughout the request lifecycle, but which may end after a response is sent back to the client. For example, a request may trigger a database update which should not delay sending back a response. However, it is still desirable to associate the activity with the request when logging it (or an error associated with it).
     * When all tails completed, the server emits a 'tail' event.
     * [See docs](https://hapijs.com/api/16.1.1#requesttailname)
     * @param name  an optional tail name used for logging purposes.
     */
    tail(name?: string): (() => void);
    /**
     * The server.decorate('request', ...) method can modify this prototype/interface.
     * Have disabled these typings as there is a better alternative, see example in: tests/server/decorate.ts
     * [And discussion here](https://github.com/DefinitelyTyped/DefinitelyTyped/issues/14517#issuecomment-298891630)
     */
    // [index: string]: any;
}

export interface RequestAuthenticationInformation {
    /** true if the request has been successfully authenticated, otherwise false. */
    isAuthenticated: boolean;
    /** the credential object received during the authentication process. The presence of an object does not mean successful authentication. */
    credentials: any;
    /** an artifact object received from the authentication strategy and used in authentication-related actions. */
    artifacts: any;
    /** the route authentication mode. */
    mode: string;
    /** the authentication error is failed and mode set to 'try'. */
    error: Error;
}

export type HTTP_METHODS_PARTIAL_lowercase = 'get' | 'post' | 'put' | 'patch' | 'delete' | 'options';
export type HTTP_METHODS_PARTIAL = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | HTTP_METHODS_PARTIAL_lowercase;
export type HTTP_METHODS = 'HEAD' | 'head' | HTTP_METHODS_PARTIAL;

/**
 * Request events
 * The request object supports the following events:
 *  * 'peek' - emitted for each chunk of payload data read from the client connection. The event method signature is function(chunk, encoding).
 *  * 'finish' - emitted when the request payload finished reading. The event method signature is function ().
 *  * 'disconnect' - emitted when a request errors or aborts unexpectedly.
 * [See docs](https://hapijs.com/api/16.1.1#request-events)
 */
export type RequestEventTypes = 'peek' | 'finish' | 'disconnect';

/* + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + +
 +                                                                           +
 +                                                                           +
 +                                                                           +
 +                         Handler functions                                 +
 +                                                                           +
 +                                                                           +
 +                                                                           +
 + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + */
// TODO: move to separate file http://stackoverflow.com/questions/43276921

/**
 * Extending RouteConfiguration.handler
 *
 * The hapi documentation allows for the RouteConfiguration.handler type to have
 * `{[pluginName: string]: pluginOptions}`
 * "handler can be assigned an object with a single key using the name of a registered handler type and value with the options passed to the registered handler"
 * This can be provided by extending the hapi module definition as follows,
 * see h2o2 for example:
 *
 *      declare module 'hapi' {
 *        interface RouteHandlerPlugins {
 *          proxy?: ...
 */
export interface RouteHandlerPlugins {
}
/**
 * The route handler function uses the signature function(request, reply) (NOTE: do not use a fat arrow style function for route handlers as they do not allow context binding and will cause problems when used in conjunction with server.bind) where:
 *  * request - is the incoming request object (this is not the node.js request object).
 *  * reply - the reply interface the handler must call to set a response and return control back to the framework.
 * [See docs](https://hapijs.com/api/16.1.1#route-handler)
 * Same function signature used by request extension point used in server.ext(event), see ServerExtConfigurationObject.method
 */
export interface RouteHandler {
    (request: Request, reply: ReplyNoContinue): void;
    // <T>(request: Request, reply: StrictReply<T>): void;
}

/**
 * "the function to call, the function signature is identical to a route handler as described in Route handler."
 * [See docs](https://hapijs.com/api/16.1.1#route-prerequisites) Route prerequisites
 */
export type RoutePrerequisiteRequestHandler = RouteHandler;

/**
 * request extension points: function(request, reply) where
 * this - the object provided via options.bind or the current active context set with server.bind().
 * [See docs](https://hapijs.com/api/16.1.1#serverextevents)
 * @param request  the request object.
 * @param reply  the reply interface which is used to return control back to the framework. To continue normal execution of the request lifecycle, reply.continue() must be called. If the extension type is 'onPostHandler' or 'onPreResponse', a single argument passed to reply.continue() will override the current set response (including all headers) but will not stop the request lifecycle execution. To abort processing and return a response to the client, call reply(value) where value is an error or any other valid response.
 */
export interface ServerExtRequestHandler {
    (request: Request, reply: ReplyWithContinue): void;
}

/**
 * Used by various extensions to handle a request and
 * synchronously return a result of some form.
 *
 * Left in for backwards compatibility of typings but according to the
 * [DefinitelyTyped Readme under common mistakes](https://github.com/DefinitelyTyped/DefinitelyTyped#common-mistakes)
 * it talks about not using generic types unless the type was used in typing one
 * or more of the function arguments. Using it to type the return was suggested
 * to be the same as a type assertion.
 */
export interface RequestHandler<T> {
    (request: Request): T;
}

/**
 * Used by server extension points
 * err can be `Boom` error or Error that will be wrapped as a `Boom` error
 * For source [See code](https://github.com/hapijs/hapi/blob/v16.1.1/lib/reply.js#L109-L118)
 * For source [See code](https://github.com/hapijs/hapi/blob/v16.1.1/lib/response.js#L60-L65)
 */
export interface ContinuationFunction {
    (err?: Boom.BoomError): void;
}
/**
 * For source [See docs](https://github.com/hapijs/hapi/blob/v16.1.1/lib/response.js#L60-L65)
 * TODO Can value be typed with a useful generic?
 */
export interface ContinuationValueFunction {
    (err: Boom.BoomError): void;
    (err: null | undefined, value: any): void;
    (): void;
}

/* + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + +
 +                                                                           +
 +                                                                           +
 +                                                                           +
 +                           Reply functions                                 +
 +                                                                           +
 +                                                                           +
 +                                                                           +
 + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + */
// TODO: move to separate file http://stackoverflow.com/questions/43276921

/**
 * Typings listed explicitly here [See docs](https://hapijs.com/api/16.1.1#replyerr-result)
 * Typings also described in part here [See docs](https://hapijs.com/api/16.1.1#response-object)
 */
export type ReplyValue = _ReplyValue | Promise<_ReplyValue>;
export type _ReplyValue = null | undefined | string | number | boolean | Buffer | Error | stream.Stream | Object; // | array;

/**
 * Reply interface
 * reply([err], [result])
 * Concludes the handler activity by setting a response and returning control over to the framework
 * When reply() is called with an error or result response, that value is used as the response sent to the client. When reply() is called within a prerequisite, the value is saved for future use and is not used as the response. In all other places except for the handler, calling reply() will be considered an error and will abort the request lifecycle, jumping directly to the 'onPreResponse' event.
 * To return control to the framework within an extension or other places other than the handler, without setting a response, the method reply.continue() must be called. Except when used within an authentication strategy, or in an 'onPostHandler' or 'onPreResponse' extension, the reply.continue() must not be passed any argument or an exception is thrown.
 * [See docs](https://hapijs.com/api/16.1.1#reply-interface)
 * [See docs](https://hapijs.com/api/16.1.1#replyerr-result)
 *
 * NOTE: modules should extend this interface to expose reply.Nnn methods
 */
export interface Base_Reply {
    (err?: ReplyValue): Response;
    (err: null, result?: ReplyValue): Response;
    /** the active realm associated with the route. */
    realm: ServerRealm;
    /** the request object */
    request: Request;

    /**
     * reply.entity(options)
     * Sets the response 'ETag' and 'Last-Modified' headers and checks for any conditional request headers to decide if the response is going to qualify for an HTTP 304 (Not Modified). If the entity values match the request conditions, reply.entity() returns control back to the framework with a 304 response. Otherwise, it sets the provided entity headers and returns null.
     * Returns a response object if the reply is unmodified or null if the response has changed. If null is returned, the developer must call reply() to continue execution. If the response is not null, the developer must not call reply().
     * [See docs](https://hapijs.com/api/16.1.1#replyentityoptions)
     * @param options  a required configuration object with:
     *      * etag - the ETag string. Required if modified is not present. Defaults to no header.
     *      * modified - the Last-Modified header value. Required if etag is not present. Defaults to no header.
     *      * vary - same as the response.etag() option. Defaults to true.
     */
    entity(options: {etag?: string, modified?: string, vary?: boolean}): Response | null;
    /**
     * reply.close([options])
     * Concludes the handler activity by returning control over to the router and informing the router that a response has already been sent back directly via request.raw.res and that no further response action is needed. Supports the following optional options:
     * The response flow control rules do not apply.
     * [See docs](https://hapijs.com/api/16.1.1#replycloseoptions)
     * @param options  options object:
     *      * end - if false, the router will not call request.raw.res.end()) to ensure the response was ended. Defaults to true.
     */
    close(options?: {end?: boolean}): void;
    /**
     * reply.redirect(uri)
     * Redirects the client to the specified uri. Same as calling reply().redirect(uri).
     * The response flow control rules apply.
     * Sets an HTTP redirection response (302) and decorates the response with additional methods for
     * changing to a permanent or non-rewritable redirect is also available see response object redirect for more information.
     * [See docs](https://hapijs.com/api/16.1.1#replyredirecturi)
     * @param uri  an absolute or relative URI used to redirect the client to another resource.
     */
    redirect(uri: string): ResponseRedirect;
    /**
     * reply.response(result)
     * Shorthand for calling `reply(null, result)`, replies with the response set to `result`.
     * [See docs](https://hapijs.com/api/16.1.1#replyresponseresult)
     * TODO likely to change.  Await approval of pull request to Hapi docs.
     */
    response(result: ReplyValue): Response;
    /**
     * Sets a cookie on the response
     * [See docs](https://hapijs.com/api/16.1.1#reply)
     * TODO likely to change.  Await approval of pull request to Hapi docs.
     */
    state(name: string, value: any, options?: any): void;
    /**
     * Clears a cookie on the response
     * [See docs](https://hapijs.com/api/16.1.1#reply)
     * TODO likely to change.  Await approval of pull request to Hapi docs.
     */
    unstate(name: string, options?: any): void;
    /**
     * The server.decorate('reply', ...) method can modify this prototype/interface.
     * Have disabled these typings as there is a better alternative, see example in: tests/server/decorate.ts
     * [And discussion here](https://github.com/DefinitelyTyped/DefinitelyTyped/issues/14517#issuecomment-298891630)
     */
    // [index: string]: any;
}
/**
 * reply.continue([result])
 * Returns control back to the framework without ending the request lifecycle
 * [See docs](https://hapijs.com/api/16.1.1#replycontinueresult)
 * [See docs](https://hapijs.com/api/16.1.1#replyerr-result) "With the exception of the handler function, all other methods provide the reply.continue() method which instructs the framework to continue processing the request without setting a response."
 * @param result  if called in the handler, prerequisites, or extension points other than the 'onPreHandler' and 'onPreResponse', the result argument is not allowed and will throw an exception if present. If called within an authentication strategy, it sets the authenticated credentials. If called by the 'onPreHandler' or 'onPreResponse' extensions, the result argument overrides the current response including all headers, and returns control back to the framework to continue processing any remaining extensions.
 */
export interface Continue_Reply {
    continue(result?: ReplyValue): Response | undefined;
}

/**
 * [See docs](https://hapijs.com/api/16.1.1#serverauthschemename-scheme) > authenticate.
 * Also [See docs](https://hapijs.com/api/16.1.1#replyerr-result).
 * TODO check it has Base_Reply methods and properties
 */
export interface ReplySchemeAuth extends Base_Reply {
    /**
     * This function is called if authentication failed.
     * TODO, check type the `response` parameter.  In https://hapijs.com/api/16.1.1#replyerr-result it is referred to as "null" but this seems to be for a third scenario where it is "used to return both an error and credentials in the authentication methods" then "reply() must be called with three arguments function(err, null, data)"
     * @param err  any authentication error.
     * @param response  any authentication response action such as redirection. Ignored if err is present, otherwise required.
     * @param result  an object containing:
     *      * credentials  the authenticated credentials.
     *      * artifacts  optional authentication artifacts.
     */
    (err: Error | null, response: AnyAuthenticationResponseAction | null, result: AuthenticationResult): void;
    /**
     * is called if authentication succeeded
     * @param result  same object as result above.
     */
    continue(result: AuthenticationResult): void;
}
/**
 * Typing as any as it's not yet clear what type this argument takes.
 * "any authentication response action such as redirection" is it equivalent to
 * `ReplyValue` ?
 * [See docs](https://hapijs.com/api/16.1.1#serverauthschemename-scheme)
 * TODO research hapi source and type this.
 */
export type AnyAuthenticationResponseAction = any;
/** [See docs](https://hapijs.com/api/16.1.1#serverauthschemename-scheme) */
export interface AuthenticationResult {
    credentials?: AuthenticatedCredentials;
    artifacts?: any;
}
export interface AuthenticatedCredentials {
    // Disabled to allow typing within a project
    // [index: string]: any;
}

/**
 * [See docs](https://hapijs.com/api/16.1.1#serverauthschemename-scheme) > payload
 * TODO check it has Base_Reply methods and properties
 */
export interface ReplySchemeAuthOfPayload extends Base_Reply {
    /**
     * function called to authenticate the request payload where:
     * @param err  any authentication error.
     * @param response  any authentication response action such as redirection. Ignored if err is present, otherwise required.
     */
    (err: Error | null, response: AnyAuthenticationResponseAction): void;
    /** is called if payload authentication succeeded */
    continue(): void;
}

/**
 * [See docs](https://hapijs.com/api/16.1.1#serverauthschemename-scheme) > response
 * TODO check it has Base_Reply methods and properties
 */
export interface ReplySchemeAuthDecorateResponse extends Base_Reply {
    /**
     * is called if an error occurred
     * @param err  any authentication error.
     * @param response  any authentication response to send instead of the current response. Ignored if err is present, otherwise required.
     */
    (err?: Error, response?: ReplyValue): void;
    /** is called if the operation succeeded. */
    continue(): void;
}

export interface ReplyWithContinue extends Continue_Reply, Base_Reply {}

export interface ReplyNoContinue extends Base_Reply {}

// TODO assess use and usefulness of StrictReply

// Concludes the handler activity by setting a response and returning control over to the framework where:
//  erran optional error response.
//     result an optional response payload.
//     Since an request can only have one response regardless if it is an error or success, the reply() method can only result in a single response value. This means that passing both an err and result will only use the err. There is no requirement for either err or result to be (or not) an Error object. The framework will simply use the first argument if present, otherwise the second. The method supports two arguments to be compatible with the common callback pattern of error first.
//     FLOW CONTROL:
//     When calling reply(), the framework waits until process.nextTick() to continue processing the request and transmit the response. This enables making changes to the returned response object before the response is sent. This means the framework will resume as soon as the handler method exits. To suspend this behavior, the returned response object supports the following methods: hold(), send()
/**
 *
 */
// export interface Reply { // extends ReplyMethods {
//     <T>(err: Error,
//         result?: string | number | boolean | Buffer | stream.Stream | Promise<T> | T,
//         /** Note that when used to return both an error and credentials in the authentication methods, reply() must be called with three arguments function(err, null, data) where data is the additional authentication information. */
//         credentialData?: any): BoomError;
//     /** Note that if result is a Stream with a statusCode property, that status code will be used as the default response code.  */
//     <T>(result: string | number | boolean | Buffer | stream.Stream | Promise<T> | T): Response;
// }

/** Concludes the handler activity by setting a response and returning control over to the framework where:
 erran optional error response.
    result an optional response payload.
    Since an request can only have one response regardless if it is an error or success, the reply() method can only result in a single response value. This means that passing both an err and result will only use the err. There is no requirement for either err or result to be (or not) an Error object. The framework will simply use the first argument if present, otherwise the second. The method supports two arguments to be compatible with the common callback pattern of error first.
    FLOW CONTROL:
    When calling reply(), the framework waits until process.nextTick() to continue processing the request and transmit the response. This enables making changes to the returned response object before the response is sent. This means the framework will resume as soon as the handler method exits. To suspend this behavior, the returned response object supports the following methods: hold(), send() */
// export interface StrictReply<T> extends ReplyMethods {
//     (err: Error,
//         result?: Promise<T> | T,
//         /** Note that when used to return both an error and credentials in the authentication methods, reply() must be called with three arguments function(err, null, data) where data is the additional authentication information. */
//         credentialData?: any): BoomError;
//     /** Note that if result is a Stream with a statusCode property, that status code will be used as the default response code.  */
//     (result: Promise<T> | T): Response;
// }

/* + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + +
 +                                                                           +
 +                                                                           +
 +                                                                           +
 +                                 Response                                  +
 +                                                                           +
 +                                                                           +
 +                                                                           +
 + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + */
// TODO: move to separate file http://stackoverflow.com/questions/43276921

/**
 * Response object
 * [See docs](https://hapijs.com/api/16.1.1#response-object)
 *
 * TODO, check extending from Podium is correct.  Extending because of "The response object supports the following events" [See docs](https://hapijs.com/api/16.1.1#response-events)
 *  * 'peek' - emitted for each chunk of data written back to the client connection. The event method signature is function(chunk, encoding).
 *  * 'finish' - emitted when the response finished writing but before the client response connection is ended. The event method signature is function ().
 */
export interface Response extends Podium {
    /** the HTTP response status code. Defaults to 200 (except for errors). */
    statusCode: number;
    /** an object containing the response headers where each key is a header field name. Note that this is an incomplete list of headers to be included with the response. Additional headers will be added once the response is prepared for transmission. */
    headers: Dictionary<string>;
    /** the value provided using the reply interface. */
    source: ReplyValue;
    /**
     * a string indicating the type of source with available values:
     *  * 'plain' - a plain response such as string, number, null, or simple object (e.g. not a Stream, Buffer, or view).
     *  * 'buffer' - a Buffer.
     *  * 'stream' - a Stream.
     *  * 'promise' - a Promise object.
     */
    variety: 'plain' | 'buffer' | 'stream' | 'promise';
    /** application-specific state. Provides a safe place to store application data without potential conflicts with the framework. Should not be used by plugins which should use plugins[name]. */
    app: any;
    /** plugin-specific state. Provides a place to store and pass request-level plugin data. The plugins is an object where each key is a plugin name and the value is the state. */
    plugins: PluginsStates;
    /** response handling flags: */
    settings: {
        /** the 'Content-Type' HTTP header 'charset' property. Defaults to 'utf-8'. */
        charset: string;
        /** the string encoding scheme used to serial data into the HTTP payload when source is a string or marshals into a string. Defaults to 'utf8'. */
        encoding: string;
        /** if true and source is a Stream, copies the statusCode and headers of the stream to the outbound response. Defaults to true. */
        passThrough: boolean;
        /** options used for source value requiring stringification. Defaults to no replacer and no space padding. */
        stringify: Json.StringifyArguments;
        /** if set, overrides the route cache expiration milliseconds value set in the route config. Defaults to no override. */
        ttl: number | null;
        /** if true, a suffix will be automatically added to the 'ETag' header at transmission time (separated by a '-' character) when the HTTP 'Vary' header is present. */
        varyEtag: boolean;
    };

    /**
     * The following attribute is present in one or more of the examples
     * TODO update once Hapi docs describes explicitly
     */
    isBoom?: boolean;
    /**
     * The following attribute is present in one or more of the examples
     * TODO update once Hapi docs describes explicitly
     */
    isMissing?: boolean;
    /**
     * The following attribute is present in one or more of the examples
     * TODO update once Hapi docs describes explicitly
     */
    output?: Boom.Output;

    /**
     * sets the HTTP 'Content-Length' header (to avoid chunked transfer encoding)
     * @param length  the header value. Must match the actual payload size.
     */
    bytes(length: number): Response;
    /**
     * sets the 'Content-Type' HTTP header 'charset' property
     * @param charset  the charset property value.
     */
    charset(charset: string): Response;
    /**
     * sets the HTTP status code
     * @param statusCode  the HTTP status code (e.g. 200).
     */
    code(statusCode: number): Response;
    /**
     * sets the HTTP status message
     * @param httpMessage  the HTTP status message (e.g. 'Ok' for status code 200).
     */
    message(httpMessage: string): Response;
    /**
     * sets the HTTP status code to Created (201) and the HTTP 'Location' header
     * @param uri  an absolute or relative URI used as the 'Location' header value.
     */
    created(uri: string): Response;
    /**
     * sets the string encoding scheme used to serial data into the HTTP payload
     * @param encoding  the encoding property value (see node Buffer encoding [See docs](https://nodejs.org/api/buffer.html#buffer_buffers_and_character_encodings)).
     *  * 'ascii' - for 7-bit ASCII data only. This encoding is fast and will strip the high bit if set.
     *  * 'utf8' - Multibyte encoded Unicode characters. Many web pages and other document formats use UTF-8.
     *  * 'utf16le' - 2 or 4 bytes, little-endian encoded Unicode characters. Surrogate pairs (U+10000 to U+10FFFF) are supported.
     *  * 'ucs2' - Alias of 'utf16le'.
     *  * 'base64' - Base64 encoding. When creating a Buffer from a string, this encoding will also correctly accept "URL and Filename Safe Alphabet" as specified in RFC4648, Section 5.
     *  * 'latin1' - A way of encoding the Buffer into a one-byte encoded string (as defined by the IANA in RFC1345, page 63, to be the Latin-1 supplement block and C0/C1 control codes).
     *  * 'binary' - Alias for 'latin1'.
     *  * 'hex' - Encode each byte as two hexadecimal characters.
     */
    encoding(encoding: 'ascii' | 'utf8' | 'utf16le' | 'ucs2' | 'base64' | 'latin1' | 'binary' | 'hex'): Response;
    /**
     * sets the representation entity tag
     * @param tag  the entity tag string without the double-quote.
     * @param options  options object
     *      * weak - if true, the tag will be prefixed with the 'W/' weak signifier. Weak tags will fail to match identical tags for the purpose of determining 304 response status. Defaults to false.
     *      * vary - if true and content encoding is set or applied to the response (e.g 'gzip' or 'deflate'), the encoding name will be automatically added to the tag at transmission time (separated by a '-' character). Ignored when weak is true. Defaults to true.
     */
    etag(tag: string, options?: {weak: boolean, vary: boolean}): Response;
    /**
     * sets an HTTP header
     * @param name  the header name.
     * @param value  the header value.
     */
    header(name: string, value: string, options?: ResponseHeaderOptionsObject): Response;
    /**
     * sets the HTTP 'Location' header
     * @param uri  an absolute or relative URI used as the 'Location' header value.
     */
    location(uri: string): Response;
    /**
     * sets an HTTP redirection response (302) and decorates the response with additional methods listed below,
     * @param uri  an absolute or relative URI used to redirect the client to another resource.
     */
    redirect(uri: string): Response;
    /**
     * sets the JSON.stringify() replacer argument
     * @param method  the replacer function or array. Defaults to none.
     */
    replacer(method: Json.StringifyReplacer): Response;
    /**
     * sets the JSON.stringify() space argument
     * @param count  the number of spaces to indent nested object keys. Defaults to no indentation.
     */
    spaces(count: Json.StringifySpace): Response;
    /**
     * sets an HTTP cookie
     * @param name  the cookie name.
     * @param value  the cookie value. If no encoding is defined, must be a string.
     * @param options  optional configuration. If the state was previously registered with the server using server.state(), the specified keys in options override those same keys in the server definition (but not others).
     */
    state(name: string, value: string | Object | any[], options?: ServerStateCookieConfiguationObject): Response;
    /**
     * sets a string suffix when the response is process via JSON.stringify().
     */
    suffix(suffix: string): Response;
    /**
     * overrides the default route cache expiration rule for this response instance
     * @param msec  the time-to-live value in milliseconds.
     */
    ttl(msec: number): Response;
    /**
     * sets the HTTP 'Content-Type' header
     * @param mimeType  is the mime type. Should only be used to override the built-in default for each response type.
     */
    type(mimeType: string): Response;
    /**
     * clears the HTTP cookie by setting an expired value
     * @param name  the cookie name.
     * @param options  optional configuration for expiring cookie. If the state was previously registered with the server using server.state(), the specified keys in options override those same keys in the server definition (but not others).
     */
    unstate(name: string, options?: ServerStateCookieConfiguationObject): Response;
    /**
     * adds the provided header to the list of inputs affected the response generation via the HTTP 'Vary' header
     * @param header  the HTTP request header name.
     */
    vary(header: string): Response;

    /**
     * Flow control - hold()
     * When calling reply(), the framework waits until process.nextTick() to continue processing the request and transmit the response. This enables making changes to the returned response object before the response is sent. This means the framework will resume as soon as the handler method exits. To suspend this behavior, the returned response object supports the following methods:
     * puts the response on hold until response.send() is called. Available only after reply() is called and until response.hold() is invoked once.
     * [See docs](https://hapijs.com/api/16.1.1#flow-control)
     */
    hold(): Response;
    /**
     * Flow control - send()
     * When calling reply(), the framework waits until process.nextTick() to continue processing the request and transmit the response. This enables making changes to the returned response object before the response is sent. This means the framework will resume as soon as the handler method exits. To suspend this behavior, the returned response object supports the following methods:
     * immediately resume the response. Available only after response.hold() is called and until response.send() is invoked once.
     * [See docs](https://hapijs.com/api/16.1.1#flow-control)
     */
    send(): Response;

    /**
     * Mentioned here: "Note that prerequisites do not follow the same rules of the normal reply interface. In all other cases, calling reply() with or without a value will use the result as the response sent back to the client. In a prerequisite method, calling reply() will assign the returned value to the provided assign key. If the returned value is an error, the failAction setting determines the behavior. To force the return value as the response and skip any other prerequisites and the handler, use the reply().takeover() method."
     * TODO prepare documentation PR and submit to hapi.
     * [See docs](https://hapijs.com/api/16.1.1#route-prerequisites)
     */
    takeover(): Response;
}

/**
 * Response Object Redirect Methods
 * When using the redirect() method, the response object provides these additional methods:
 * [See docs](https://hapijs.com/api/16.1.1#response-object-redirect-methods)
 */
export interface ResponseRedirect extends Response {
    /**
     * temporary
     * sets the status code to 302 or 307 (based on the rewritable() setting) where:
     * [See docs](https://hapijs.com/api/16.1.1#response-object-redirect-methods)
     * @param isTemporary  if false, sets status to permanent. Defaults to true.
     */
    temporary(isTemporary: boolean): Response;
    /**
     * permanent
     * sets the status code to 301 or 308 (based on the rewritable() setting) where:
     * [See docs](https://hapijs.com/api/16.1.1#response-object-redirect-methods)
     * @param isPermanent  if false, sets status to temporary. Defaults to true.
     */
    permanent(isPermanent: boolean): Response;
    /**
     * rewritable
     * sets the status code to 301/302 for rewritable (allows changing the request method from 'POST' to 'GET') or 307/308 for non-rewritable (does not allow changing the request method from 'POST' to 'GET'). Exact code based on the temporary() or permanent() setting. Arguments:
     * [See docs](https://hapijs.com/api/16.1.1#response-object-redirect-methods)
     * @param isRewritable  if false, sets to non-rewritable. Defaults to true.
     */
    rewritable(isRewritable: boolean): Response;
}

/**
 * [See docs](https://hapijs.com/api/16.1.1#response-object) under "response object provides the following methods" > header > options
 */
export interface ResponseHeaderOptionsObject {
    /** if true, the value is appended to any existing header value using separator. Defaults to false. */
    append?: boolean;
    /** string used as separator when appending to an existing value. Defaults to ','. */
    separator?: string;
    /** if false, the header value is not set if an existing value present. Defaults to true. */
    override?: boolean;
    /** if false, the header value is not modified if the provided value is already included. Does not apply when append is false or if the name is 'set-cookie'. Defaults to true. */
    duplicate?: boolean;
}

/* + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + +
 +                                                                           +
 +                                                                           +
 +                                                                           +
 +                           Plugins and register                            +
 +                                                                           +
 +                                                                           +
 +                                                                           +
 + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + */
// TODO: move to separate file http://stackoverflow.com/questions/43276921

/**
 * Plugins
 * Plugins provide a way to organize the application code by splitting the server logic into smaller components. Each plugin can manipulate the server and its connections through the standard server interface, but with the added ability to sandbox certain properties.
 * [See docs](https://hapijs.com/api/16.1.1#plugins)
 * @param server  the server object the plugin is being registered to.
 * @param options  an options object passed to the plugin during registration.
 * @param next  a callback method the function must call to return control back to the framework to complete the registration process with signature function(err)
 */
export interface PluginFunction<OptionsPassedToPlugin> {
    (server: Server, options: OptionsPassedToPlugin, next: (err?: Error) => void): void;
    /**
     * Note attributes is NOT optional but this type is easier to use.
     */
    attributes?: PluginAttributes;
}

/**
 * see Plugin
 * [See docs](https://hapijs.com/api/16.1.1#plugins)
 */
export interface PluginAttributes {
    /**
     * required plugin name string. The name is used as a unique key. Published plugins should use the same name as the name field in the 'package.json' file. Names must be unique within each application.
     * NOTE: marked as optional as `pkg` can be used instead.
     */
    name?: string;
    /** optional plugin version. The version is only used informatively to enable other plugins to find out the versions loaded. The version should be the same as the one specified in the plugin's 'package.json' file. */
    version?: string;
    /** Alternatively, the name and version can be included via the pkg attribute containing the 'package.json' file for the module which already has the name and version included */
    pkg?: any;
    /** if true, allows the plugin to be registered multiple times with the same server. Defaults to false. */
    multiple?: boolean;
    /** optional string or array of string indicating a plugin dependency. Same as setting dependencies via server.dependency(). */
    dependencies?: string | string[];
    /** if false, does not allow the plugin to call server APIs that modify the connections such as adding a route or configuring state. This flag allows the plugin to be registered before connections are added and to pass dependency requirements. When set to 'conditional', the mode is based on the presence of selected connections (if the server has connections, it is the same as true, but if no connections are available, it is the same as false). Defaults to true. */
    connections?: boolean | 'conditional';
    /** if true, will only register the plugin once per connection (or once per server for a connectionless plugin). If set, overrides the once option passed to server.register(). Defaults to undefined (registration will be based on the server.register() option once). */
    once?: boolean;
}

/**
 * Plugins State
 * Related [See docs](https://hapijs.com/api/16.1.1#serverplugins)
 * Related [See docs](https://hapijs.com/api/16.1.1#serverrealm)
 */
export interface PluginsStates {
    [pluginName: string]: any;
}

/**
 * once, select, routes - optional plugin-specific registration options as defined see PluginRegistrationOptions
 * [See docs](https://hapijs.com/api/16.1.1#serverregisterplugins-options-callback)
 */
export interface PluginRegistrationObject<OptionsPassedToPlugin> extends PluginRegistrationOptions {
    /** the plugin registration function. */
    register: PluginFunction<OptionsPassedToPlugin>;
    /** optional options passed to the registration function when called. */
    options?: OptionsPassedToPlugin;
}

/**
 * registration options (different from the options passed to the registration function):
 *  * once - if true, the registration is skipped for any connection already registered with. Cannot be used with plugin options. If the plugin does not have a connections attribute set to false and the registration selection is empty, registration will be skipped as no connections are available to register once. Defaults to false.
 *  * routes - modifiers applied to each route added by the plugin:
 *      * prefix - string added as prefix to any route path (must begin with '/'). If a plugin registers a child plugin the prefix is passed on to the child or is added in front of the child-specific prefix.
 *      * vhost - virtual host string (or array of strings) applied to every route. The outer-most vhost overrides the any nested configuration.
 *  * select - a string or array of string labels used to pre-select connections for plugin registration.
 * [See docs](https://hapijs.com/api/16.1.1#serverregisterplugins-options-callback)
 */
export interface PluginRegistrationOptions {
    once?: boolean;
    routes?: {prefix?: string, vhost?: string | string[]};
    select?: string | string[];
}

/* + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + +
 +                                                                           +
 +                                                                           +
 +                                                                           +
 +                                    JSON                                   +
 +                                                                           +
 +                                                                           +
 +                                                                           +
 + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + */
// This was in a seperate file and perhaps should move to some of the lib typings?
// https://github.com/DefinitelyTyped/DefinitelyTyped/pull/16065#issuecomment-299443673
//
// json/json-tests.ts
//
// import * as JSON from './index';
//
// var a: JSON.StringifyReplacer = function(key, value) {
//     if (key === "do not include") {
//         return undefined;
//     }
//     return value;
// };
//

export namespace Json {
    /**
     * @see {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#The_replacer_parameter}
     */
    export type StringifyReplacer = ((key: string, value: any) => any) | (string | number)[] | undefined;

    /**
     * Any value greater than 10 is truncated.
     */
    export type StringifySpace = number | string;

    export interface StringifyArguments {
        /** the replacer function or array. Defaults to no action. */
        replacer?: StringifyReplacer;
        /** number of spaces to indent nested object keys. Defaults to no indentation. */
        space?: StringifySpace;
    }
}
