import {ServerOptions} from "./server-options";
import {ServerRealm} from "./server-realm";
import {ServerInfo} from "./server-info";
import {Dictionary} from "../util/util";
import {Request} from "../request/request";
import * as http from "http";
import * as events from 'events';
import * as catbox from "catbox";
import * as zlib from "zlib";
import {PluginsListRegistered} from "../plugin/plugin-registered";
import {ServerState} from "./server-state";
import {MimosOptions} from "../../../../mimos/index";
import {
    ServerOptionsCache, ServerEventCriteria, ServerEventsApplication, ServerEventsApplicationObject,
    PayloadCompressionDecoderSettings
} from "hapi";


/**
 * The server object is the main application container. The server manages all incoming requests along with all
 * the facilities provided by the framework. Each server supports a single connection (e.g. listen to port 80).
 */
export class Server extends events.EventEmitter {

    /**
     Creates a new server object where:
     @param options - (optional) a server configuration object.
    */
    constructor(options: ServerOptions);

    /**
     * Provides a safe place to store server-specific run-time application data without potential conflicts with
     * the framework internals. The data can be accessed whenever the server is accessible.
     * Initialized with an empty object.
     */
    app?: any;

    /**
     * Access: authentication strategy specific.
     * An object where each key is an authentication strategy name and the value is the exposed strategy API.
     * Available only when the authentication scheme exposes an API by returning an api key in the object
     * returned from its implementation function.
     */
        // TODO is that definition right? It's need review. The v16 is very different.
    auth: {
        api: Dictionary<any>;
    }

    /**
     * Access: read only.
     * Contains the default authentication configuration is a default strategy was set via [server.auth.default()](https://github.com/hapijs/hapi/blob/master/API.md#server.auth.default()).
     */
    // TODO it needs to be implemented. I didn't understand the description yet.
    //readonly server.auth.settings.default


    /**
     * Provides access to the decorations already applied to various framework interfaces. The object must not be
     * modified directly, but only through server.decorate. Contains:
     * * request - decorations on the request object.
     * * toolkit - decorations on the response toolkit.
     * * server - decorations on the server object.
     */
    readonly decorations: {
        request: Request,
        toolkit: any, // TODO Request Toolkit (https://github.com/hapijs/hapi/blob/master/API.md#response-toolkit) needs to be implemented.
        server: Server
    }

    /**
     * Register custom application events where:
     * @param events - must be one of:
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
     */
    event(events: ServerEventsApplication): void;
    event(events: ServerEventsApplication[]): void;

    events: {

        /**
         * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-await-servereventsemitcriteria-data)
         * Emits a custom application event to all the subscribed listeners where:
         * @param criteria - the event update criteria which must be one of:
         * * the event name string.
         * * an object with the following optional keys (unless noted otherwise):
         * * * name - the event name string (required).
         * * * channel - the channel name string.
         * * * tags - a tag string or array of tag strings.
         * @param data - the value emitted to the subscribers. If data is a function, the function signature is function() and it called once to generate (return value) the actual data emitted to the listeners. If no listeners match the event, the data function is not invoked.
         * @return Return value: none.
         * Note that events must be registered before they can be emitted or subscribed to by calling server.event(events). This is done to detect event name misspelling and invalid event activities.
         */
        emit(criteria: string | {name: string, channel?: string, tags?: string | string[]}, data: any): void;

        /**
         *[See docs](https://github.com/hapijs/hapi/blob/master/API.md#-servereventsoncriteria-listener)
         * Subscribe to an event where:
         * @param criteria - the subscription criteria which must be one of:
         * * event name string which can be any of the built-in server events
         * * a custom application event registered with server.event().
         * * a criteria object
         * @param listener - the handler method set to receive event updates. The function signature depends on the event argument, and the spread and tags options.
         * @return Return value: none.
         */
        on(criteria: string, listener: Function): void;
        on(criteria: ServerEventsApplicationObject, listener: Function): void;
        on(criteria: ServerEventCriteria, listener: Function): void;

        /**
         * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-servereventsoncecriteria-listener)
         * Same as calling [server.events.on()](https://github.com/hapijs/hapi/blob/master/API.md#server.events.on()) with the count option set to 1.
         * @param criteria - the subscription criteria which must be one of:
         * * event name string which can be any of the built-in server events
         * * a custom application event registered with server.event().
         * * a criteria object
         * @param listener - the handler method set to receive event updates. The function signature depends on the event argument, and the spread and tags options.
         * @return Return value: none.
         */
        once(criteria: string, listener: Function): void;
        once(criteria: ServerEventsApplicationObject, listener: Function): void;
        once(criteria: ServerEventCriteria, listener: Function): void;

        /**
         * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-await-servereventsoncecriteria)
         * Same as calling server.events.on() with the count option set to 1.
         * @param criteria - the subscription criteria which must be one of:
         * * event name string which can be any of the built-in server events
         * * a custom application event registered with server.event().
         * * a criteria object
         * @return Return value: a promise that resolves when the event is emitted.
         */
        once(criteria: string): any;
        once(criteria: ServerEventsApplicationObject): any;
        once(criteria: ServerEventCriteria): any;

        /**
         * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverevents)
         * The follow method is only mentioned in Hapi API. The doc about that method can be found [here](https://github.com/hapijs/podium/blob/master/API.md#podiumremovelistenername-listener)
         */
        removeListener(name: string, listener: Function): void;

        /**
         * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverevents)
         * The follow method is only mentioned in Hapi API. The doc about that method can be found [here](https://github.com/hapijs/podium/blob/master/API.md#podiumremovealllistenersname)
         */
        removeAllListeners(name: string): void;

        /**
         * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverevents)
         * The follow method is only mentioned in Hapi API. The doc about that method can be found [here](https://github.com/hapijs/podium/blob/master/API.md#podiumhaslistenersname)
         */
        hasListeners(name: string): boolean;

        /**
         * The 'log' event type emits internal server events generated by the framework as well as application events
         * logged with server.log().
         * The 'log' event handler uses the function signature function(event, tags) where:
         * @param event - an object with the following properties:
         * * timestamp - the event timestamp.
         * * tags - an array of tags identifying the event (e.g. ['error', 'http']).
         * * channel - set to 'internal' for internally generated events, otherwise 'app' for events generated by server.log().
         * * data - event-specific information. Available when event data was provided and is not an error. Errors are passed via error.
         * * error - the error object related to the event if applicable. Cannot appear together with data.
         * @param tags - an object where each event.tag is a key and the value is true. Useful for quick identification of events.
         *
         */


        // TODO not ready yet



    }















    /**
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverexposekey-value)
     * Used within a plugin to expose a property via server.plugins[name] where:
     * @param key - the key assigned (server.plugins[name][key]).
     * @param value - the value assigned.
     * @return Return value: none.
     */
    expose(key: string, value: any): void;

    /**
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverexposeobj)
     * Merges an object into to the existing content of server.plugins[name] where:
     * @param obj - the object merged into the exposed properties container.
     * @return Return value: none.
     * Note that all the properties of obj are deeply cloned into server.plugins[name], so avoid using this method
     * for exposing large objects that may be expensive to clone or singleton objects such as database client
     * objects. Instead favor server.expose(key, value), which only copies a reference to value.
     */
    expose(obj: Object): void;


















    /**
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverinfo)
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
     */
    readonly info: ServerInfo;

    /**
     * Access: read only and listener public interface.
     * The node HTTP server object.
     */
    listener: http.Server;

    /**
     * An object containing the process load metrics (when load.sampleInterval is enabled):
     * * eventLoopDelay - event loop delay milliseconds.
     * * heapUsed - V8 heap usage.
     * * rss - RSS memory usage.
     */
    readonly load: {
        eventLoopDelay: number;
        heapUsed: number;
        rss: number;
    };

    /**
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-servermethods
     * Server methods are functions registered with the server and used throughout the application as a common utility.
     * Their advantage is in the ability to configure them to use the built-in cache and share across multiple request
     * handlers without having to create a common module.
     * sever.methods is an object which provides access to the methods registered via server.method() where each
     * server method name is an object property.
     */
    //methods: Dictionary<ServerMethod>;
    readonly methods: any; // TODO come back here after implements the server.method()

    /**
     * Provides access to the server MIME database used for setting content-type information. The object must not be
     * modified directly but only through the [mime](https://github.com/hapijs/hapi/blob/master/API.md#server.options.mime) server setting.
     */
    mime: MimosOptions;

    /**
     * An object containing the values exposed by each registered plugin where each key is a plugin name and the values
     * are the exposed properties by each plugin using server.expose(). Plugins may set the value of
     * the server.plugins[name] object directly or via the server.expose() method.
     */
    plugins: any;

    /**
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverrealm)
     * The realm object contains sandboxed server settings specific to each plugin or authentication strategy. When
     * registering a plugin or an authentication scheme, a server object reference is provided with a new server.realm
     * container specific to that registration. It allows each plugin to maintain its own settings without leaking
     * and affecting other plugins.
     * For example, a plugin can set a default file path for local resources without breaking other plugins' configured
     * paths. When calling server.bind(), the active realm's settings.bind property is set which is then used by
     * routes and extensions added at the same level (server root or plugin).
     */
    readonly realm: ServerRealm;

    /**
     * An object of the currently registered plugins where each key is a registered plugin name and the value is
     * an object containing:
     * * version - the plugin version.
     * * name - the plugin name.
     * * options - (optional) options passed to the plugin during registration.
     */
    readonly registrations: PluginsListRegistered;

    /**
     * The server configuration object after defaults applied.
     */
    readonly settings: ServerOptions;

    /**
     * The server cookies manager.
     * Access: read only and statehood public interface.
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





    // TODO Put SERVER AUTH here


    /**
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverbindcontext)
     * Sets a global context used as the default bind object when adding a route or an extension where:
     * @param context - the object used to bind this in lifecycle methods such as the route handler and extension methods. The context is also made available as h.context.
     * @return Return value: none.
     * When setting a context inside a plugin, the context is applied only to methods set up by the plugin. Note that the context applies only to routes and extensions added after it has been set. Ignored if the method being bound is an arrow function.
     */
    bind(context: any): void;

    /**
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-servercacheoptions)
     */
    cache: {

        /**
         * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-servercacheoptions)
         * Provisions a cache segment within the server cache facility where:
         * @param options - [catbox policy](https://github.com/hapijs/catbox#policy) configuration where:
         * * expiresIn - relative expiration expressed in the number of milliseconds since the item was saved in the cache. Cannot be used together with expiresAt.
         * * expiresAt - time of day expressed in 24h notation using the 'HH:MM' format, at which point all cache records expire. Uses local time. Cannot be used together with expiresIn.
         * * generateFunc - a function used to generate a new cache item if one is not found in the cache when calling get(). The method's signature is async function(id, flags) where:
         * - `id` - the `id` string or object provided to the `get()` method.
         * - `flags` - an object used to pass back additional flags to the cache where:
         *- `ttl` - the cache ttl value in milliseconds. Set to `0` to skip storing in the cache. Defaults to the cache global policy.
         * * staleIn - number of milliseconds to mark an item stored in cache as stale and attempt to regenerate it when generateFunc is provided. Must be less than expiresIn.
         * * staleTimeout - number of milliseconds to wait before checking if an item is stale.
         * * generateTimeout - number of milliseconds to wait before returning a timeout error when the generateFunc function takes too long to return a value. When the value is eventually returned, it is stored in the cache for future requests. Required if generateFunc is present. Set to false to disable timeouts which may cause all get() requests to get stuck forever.
         * * generateOnReadError - if false, an upstream cache read error will stop the cache.get() method from calling the generate function and will instead pass back the cache error. Defaults to true.
         * * generateIgnoreWriteError - if false, an upstream cache write error when calling cache.get() will be passed back with the generated value when calling. Defaults to true.
         * * dropOnError - if true, an error or timeout in the generateFunc causes the stale value to be evicted from the cache. Defaults to true.
         * * pendingGenerateTimeout - number of milliseconds while generateFunc call is in progress for a given id, before a subsequent generateFunc call is allowed. Defaults to 0 (no blocking of concurrent generateFunc calls beyond staleTimeout).
         * * cache - the cache name configured in server.cache. Defaults to the default cache.
         * * segment - string segment name, used to isolate cached items within the cache partition. When called within a plugin, defaults to '!name' where 'name' is the plugin name. When called within a server method, defaults to '#name' where 'name' is the server method name. Required when called outside of a plugin.
         * * shared - if true, allows multiple cache provisions to share the same segment. Default to false.
         * @return Catbox Policy.
         */
        (options: catbox.PolicyOptions): catbox.Policy;

        /**
         * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-await-servercacheprovisionoptions)
         * Provisions a server cache as described in server.cache where:
         * @param options - same as the server cache configuration options.
         * @return Return value: none.
         * Note that if the server has been initialized or started, the cache will be automatically started to match the state of any other provisioned server cache.
         */
        provision(options: ServerOptionsCache): void;

    }

    /**
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-serverdecoderencoding-decoder)
     * Registers a custom content decoding compressor to extend the built-in support for 'gzip' and 'deflate' where:
     * @param encoding - the decoder name string.
     * @param decoder - a function using the signature function(options) where options are the encoding specific options configured in the route payload.compression configuration option, and the return value is an object compatible with the output of node's zlib.createGunzip().
     * @return Return value: none.
     */
    decoder(encoding: string, decoder: ((options: PayloadCompressionDecoderSettings) => zlib.Gunzip)): void;










    // TODO It"s not finished



}
