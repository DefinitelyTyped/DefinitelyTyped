import * as http from "http";
import * as zlib from "zlib";
import * as Podium from "podium";
import {
    ApplicationState,
    Lifecycle,
    PayloadCompressionDecoderSettings,
    Plugin,
    PluginsListRegistered,
    Request,
    RequestRoute,
    ResponseToolkit,
    RouteCompressionEncoderSettings,
    ServerAuth,
    ServerCache,
    ServerEvents,
    ServerEventsApplication,
    ServerExtEventsObject,
    ServerExtEventsRequestObject,
    ServerExtOptions,
    ServerExtPointFunction,
    ServerExtType,
    ServerInfo,
    ServerInjectOptions,
    ServerInjectResponse,
    ServerMethod,
    ServerMethodConfigurationObject,
    ServerMethodOptions,
    ServerOptions,
    ServerRealm,
    ServerRegisterOptions,
    ServerRegisterPluginObject,
    ServerRegisterPluginObjectArray,
    ServerRoute,
    ServerState,
    ServerStateCookieOptions,
    Util,
} from "hapi";

/**
 * The server object is the main application container. The server manages all incoming requests along with all
 * the facilities provided by the framework. Each server supports a single connection (e.g. listen to port 80).
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#server)
 */
export class Server extends Podium {

    /**
     * Creates a new server object
     * @constructor
     */
    constructor();

    /**
     * Creates a new server object where:
     * @constructor
     * @param options server configuration object.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serveroptions)
     */
    constructor(options: ServerOptions);

    /**
     * Provides a safe place to store server-specific run-time application data without potential conflicts with
     * the framework internals. The data can be accessed whenever the server is accessible.
     * Initialized with an empty object.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverapp)
     */
    app?: ApplicationState;

    /**
     * Server Auth: properties and methods
     */
    auth: ServerAuth;

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
     * * * clone - if true, the data object passed to server.events.emit() is cloned before it is passed to the listeners (unless an override specified by each listener). Defaults to false (data is passed as-is).
     * * * spread - if true, the data object passed to server.event.emit() must be an array and the listener method is called with each array element passed as a separate argument (unless an override specified by each listener). This should only be used when the emitted data structure is known and predictable. Defaults to false (data is emitted as a single argument regardless of its type).
     * * * tags - if true and the criteria object passed to server.event.emit() includes tags, the tags are mapped to an object (where each tag string is the key and the value is true) which is appended to the arguments list at the end. A configuration override can be set by each listener. Defaults to false.
     * * * shared - if true, the same event name can be registered multiple times where the second registration is ignored. Note that if the registration config is changed between registrations, only the first configuration is used. Defaults to false (a duplicate registration will throw an error).
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
     * * uri - a string representing the connection (e.g. 'http://example.com:8080' or 'socket:/unix/domain/socket/path'). Contains the uri value if set, otherwise constructed from the available settings. If no port is configured or is set to 0, the uri will not include a port component until the server is started.
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
    readonly methods: Util.Dictionary<ServerMethod>;

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
    plugins: any;

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
     * When setting a context inside a plugin, the context is applied only to methods set up by the plugin. Note that the context applies only to routes and extensions added after it has been set. Ignored if the method being bound is an arrow function.
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
     * @param decoder - a function using the signature function(options) where options are the encoding specific options configured in the route payload.compression configuration option, and the return value is an object compatible with the output of node's zlib.createGunzip().
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
     * apply - when the type is 'request', if true, the method function is invoked using the signature function(request) where request is the current request object and the returned value is assigned as the decoration.
     * extend - if true, overrides an existing decoration. The method must be a function with the signature function(existing) where:
     * existing - is the previously set decoration method value.
     * must return the new decoration function or value.
     * cannot be used to extend handler decorations.
     * @return void;
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverdecoratetype-property-method-options)
     */
    decorate(type: 'request', property: string, method: ((request: Request) => Function), options?: {apply: true;  extend: false} ): void;
    decorate(type: 'handler' | 'request' | 'server' | 'toolkit', property: string, method: Function, options?: {apply: boolean;  extend: boolean} ): void;

    /**
     * Used within a plugin to declare a required dependency on other plugins where:
     * @param dependencies - a single string or an array of plugin name strings which must be registered in order for this plugin to operate. Plugins listed must be registered before the server is initialized or started.
     * @param after - (optional) a function that is called after all the specified dependencies have been registered and before the server starts. The function is only called if the server is initialized or started. The function signature is async function(server) where:
     * server - the server the dependency() method was called on.
     * @return Return value: none.
     * The after method is identical to setting a server extension point on 'onPreStart'.
     * If a circular dependency is detected, an exception is thrown (e.g. two plugins each has an after function to be called after the other).
     * The method does not provide version dependency which should be implemented using npm peer dependencies.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverdependencydependencies-after)
     */
    dependency(dependencies: string | string[], after?: ((server: Server) => void)): void;

    /**
     * Registers a custom content encoding compressor to extend the built-in support for 'gzip' and 'deflate' where:
     * @param encoding - the encoder name string.
     * @param encoder - a function using the signature function(options) where options are the encoding specific options configured in the route compression option, and the return value is an object compatible with the output of node's zlib.createGzip().
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
     * * * sandbox - if set to 'plugin' when adding a request extension points the extension is only added to routes defined by the current plugin. Not allowed when configuring route-level extensions, or when adding server extensions. Defaults to 'server' which applies to any route added to the server the extension is added to.
     * @return void
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverextevents)
     */
    ext(events: ServerExtEventsObject | ServerExtEventsObject[]): void;
    ext(events: ServerExtEventsRequestObject | ServerExtEventsRequestObject[]): void;

    /**
     * Registers a single extension event using the same properties as used in server.ext(events), but passed as arguments.
     * @return Return value: none.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverextevent-method-options)
     */
    ext(event: ServerExtType, method: ServerExtPointFunction | Lifecycle.Method | Function, options?: ServerExtOptions): void;

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
     * Injects a request into the server simulating an incoming HTTP request without making an actual socket connection. Injection is useful for testing purposes as well as for invoking routing logic internally without the overhead and limitations of the network stack.
     * The method utilizes the shot module for performing injections, with some additional options and response properties:
     * @param options - can be assigned a string with the requested URI, or an object with:
     * * method - (optional) the request HTTP method (e.g. 'POST'). Defaults to 'GET'.
     * * url - (required) the request URL. If the URI includes an authority (e.g. 'example.com:8080'), it is used to automatically set an HTTP 'Host' header, unless one was specified in headers.
     * * headers - (optional) an object with optional request headers where each key is the header name and the value is the header content. Defaults to no additions to the default shot headers.
     * * payload - (optional) an string, buffer or object containing the request payload. In case of an object it will be converted to a string for you. Defaults to no payload. Note that payload processing defaults to 'application/json' if no 'Content-Type' header provided.
     * * credentials - (optional) an credentials object containing authentication information. The credentials are used to bypass the default authentication strategies, and are validated directly as if they were received via an authentication scheme. Defaults to no credentials.
     * * artifacts - (optional) an artifacts object containing authentication artifact information. The artifacts are used to bypass the default authentication strategies, and are validated directly as if they were received via an authentication scheme. Ignored if set without credentials. Defaults to no artifacts.
     * * app - (optional) sets the initial value of request.app, defaults to {}.
     * * plugins - (optional) sets the initial value of request.plugins, defaults to {}.
     * * allowInternals - (optional) allows access to routes with config.isInternal set to true. Defaults to false.
     * * remoteAddress - (optional) sets the remote address for the incoming connection.
     * * simulate - (optional) an object with options used to simulate client request stream conditions for testing:
     * * error - if true, emits an 'error' event after payload transmission (if any). Defaults to false.
     * * close - if true, emits a 'close' event after payload transmission (if any). Defaults to false.
     * * end - if false, does not end the stream. Defaults to true.
     * * split - indicates whether the request payload will be split into chunks. Defaults to undefined, meaning payload will not be chunked.
     * * validate - (optional) if false, the options inputs are not validated. This is recommended for run-time usage of inject() to make it perform faster where input validation can be tested separately.
     * @return Return value: a response object with the following properties:
     * * statusCode - the HTTP status code.
     * * headers - an object containing the headers set.
     * * payload - the response payload string.
     * * rawPayload - the raw response payload buffer.
     * * raw - an object with the injection request and response objects:
     * * req - the simulated node request object.
     * * res - the simulated node response object.
     * * result - the raw handler response (e.g. when not a stream or a view) before it is serialized for transmission. If not available, the value is set to payload. Useful for inspection and reuse of the internal objects returned (instead of parsing the response string).
     * * request - the request object.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-await-serverinjectoptions)
     */
    inject(options: string | ServerInjectOptions): Promise<ServerInjectResponse>;

    /**
     * Logs server events that cannot be associated with a specific request. When called the server emits a 'log' event which can be used by other listeners or plugins to record the information or output to the console. The arguments are:
     * @param tags - (required) a string or an array of strings (e.g. ['error', 'database', 'read']) used to identify the event. Tags are used instead of log levels and provide a much more expressive mechanism for describing and filtering events. Any logs generated by the server internally include the 'hapi' tag along with event-specific information.
     * @param data - (optional) an message string or object with the application data being logged. If data is a function, the function signature is function() and it called once to generate (return value) the actual data emitted to the listeners. If no listeners match the event, the data function is not invoked.
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
     * * bind - a context object passed back to the method function (via this) when called. Defaults to active context (set via server.bind() when the method is registered. Ignored if the method is an arrow function.
     * * cache - the same cache configuration used in server.cache(). The generateTimeout option is required.
     * * generateKey - a function used to generate a unique key (for caching) from the arguments passed to the method function (the flags argument is not passed as input). The server will automatically generate a unique key if the function's arguments are all of types 'string', 'number', or 'boolean'. However if the method uses other types of arguments, a key generation function must be provided which takes the same arguments as the function and returns a unique string (or null if no key can be generated).
     * @return Return value: none.
     * Method names can be nested (e.g. utils.users.get) which will automatically create the full path under server.methods (e.g. accessed via server.methods.utils.users.get).
     * When configured with caching enabled, server.methods[name].cache is assigned an object with the following properties and methods: - await drop(...args) - a function that can be used to clear the cache for a given key. - stats - an object with cache statistics, see catbox for stats documentation.
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
     * Note that setting a path within a plugin only applies to resources accessed by plugin methods. If no path is set, the server default route configuration files.relativeTo settings is used. The path only applies to routes added after it has been set.
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
     * * once - if true, subsequent registrations of the same plugin are skipped without error. Cannot be used with plugin options. Defaults to false. If not set to true, an error will be thrown the second time a plugin is registered on the server.
     * * routes - modifiers applied to each route added by the plugin:
     * * * prefix - string added as prefix to any route path (must begin with '/'). If a plugin registers a child plugin the prefix is passed on to the child or is added in front of the child-specific prefix.
     * * * vhost - virtual host string (or array of strings) applied to every route. The outer-most vhost overrides the any nested configuration.
     * @return Return value: none.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-await-serverregisterplugins-options)
     */
    register(plugins: Plugin<any> | Plugin<any>[], options?: ServerRegisterOptions): Promise<void>;
    register<T, U, V, W, X, Y, Z>(plugins: ServerRegisterPluginObject<T> | ServerRegisterPluginObjectArray<T, U, V, W, X, Y, Z>, options?: ServerRegisterOptions): Promise<void>;

    /**
     * Adds a route where:
     * @param route - a route configuration object or an array of configuration objects where each object contains:
     * * path - (required) the absolute path used to match incoming requests (must begin with '/'). Incoming requests are compared to the configured paths based on the server's router configuration. The path can include named parameters enclosed in {} which will be matched against literal values in the request as described in Path parameters.
     * * method - (required) the HTTP method. Typically one of 'GET', 'POST', 'PUT', 'PATCH', 'DELETE', or 'OPTIONS'. Any HTTP method is allowed, except for 'HEAD'. Use '*' to match against any HTTP method (only when an exact match was not found, and any match with a specific method will be given a higher priority over a wildcard match). Can be assigned an array of methods which has the same result as adding the same route with different methods manually.
     * * vhost - (optional) a domain string or an array of domain strings for limiting the route to only requests with a matching host header field. Matching is done against the hostname part of the header only (excluding the port). Defaults to all hosts.
     * * handler - (required when handler is not set) the route handler function called to generate the response after successful authentication and validation.
     * * options - additional route options. The options value can be an object or a function that returns an object using the signature function(server) where server is the server the route is being added to and this is bound to the current realm's bind option.
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
     * Note that the root server and each plugin server instance can only register one rules processor. If a route is added after the rules are configured, it will not include the rules config. Routes added by plugins apply the rules to each of the parent realms' rules from the root to the route's realm. This means the processor defined by the plugin override the config generated by the root processor if they overlap. The route config overrides the rules config if the overlap.
     * @return void
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverrulesprocessor-options)
     */
    rules(processor: (rules: object, info: {method: string, path: string, vhost?: string}) => object, options?: {validate: object}): void; // TODO needs implementation

    /**
     * Starts the server by listening for incoming requests on the configured port (unless the connection was configured with autoListen set to false).
     * @return Return value: none.
     * Note that if the method fails and throws an error, the server is considered to be in an undefined state and should be shut down. In most cases it would be impossible to fully recover as the various plugins, caches, and other event listeners will get confused by repeated attempts to start the server or make assumptions about the healthy state of the environment. It is recommended to abort the process when the server fails to start properly. If you must try to resume after an error, call server.stop() first to reset the server state.
     * If a started server is started again, the second call to server.start() is ignored. No events will be emitted and no extension points invoked.
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
    table(host?: string): {settings: ServerRoute; method: Util.HTTP_METHODS_PARTIAL_LOWERCASE, path: string}[]; // TODO I am not sure if the ServerRoute is the object expected here

}
