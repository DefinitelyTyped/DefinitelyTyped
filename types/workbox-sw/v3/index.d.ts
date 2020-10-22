// Type definitions for workbox-sw 3.2
// Project: https://github.com/GoogleChrome/workbox
// Definitions by: Frederik Wessberg <https://github.com/wessberg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/**
 * ===== BroadcastCacheUpdate =====
 */

interface IBroadcastCacheUpdateOptions {
    /**
     * A list of headers that will be used to determine whether the responses differ.
     */
    headersToCheck: string[];

    /**
     * An attribution value that indicates where the update originated.
     */
    source: string;
}

/**
 * Uses the Broadcast Channel API to notify interested parties when a cached response has been updated.
 * For efficiency's sake, the underlying response bodies are not compared; only specific response headers are checked
 */
declare class BroadcastCacheUpdate {
    /**
     * Compare two Responses and send a message via the Broadcast Channel API if they differ.
     * Neither of the Responses can be opaque.
     * @param {Response} firstResponse - First response to compare.
     * @param {Response} secondResponse - Second response to compare.
     * @param {string} url - The URL of the updated request.
     * @param {string} cacheName - Name of the cache the responses belong to. This is included in the message posted on the broadcast channel.
     */
    notifyIfUpdated (firstResponse: Response, secondResponse: Response, url: string, cacheName: string): void;
}

/**
 * Construct a BroadcastCacheUpdate instance with a specific channelName to broadcast messages on
 */
interface IBroadcastCacheUpdateConstructor {
    new (channelName: string, options: Partial<IBroadcastCacheUpdateOptions>): BroadcastCacheUpdate;
}

/**
 * ===== CacheableResponse =====
 */

interface ICacheableResponseOptions {
    statuses: number[];
    headers: { [key: string]: string };
}

/**
 * This class allows you to set up rules determining what status codes and/or headers need to be present in order for a Response to be considered cacheable.
 */
declare class CacheableResponse {
    /**
     * Checks a response to see whether it's cacheable or not, based on this object's configuration.
     * @param {Response} response - The response whose cacheability is being checked.
     * @returns {boolean}
     */
    isResponseCacheable (response: Response): boolean;
}

/**
 * To construct a new CacheableResponse instance you must provide at least one of the config properties.
 * If both statuses and headers are specified, then both conditions must be met for the Response to be considered cacheable.
 */
interface ICacheableResponseConstructor {
    new (options: Partial<ICacheableResponseOptions>): CacheableResponse;
}

/**
 * ===== CacheExpiration =====
 */

interface ICacheExpirationOptions {
    /**
     * The maximum number of entries to store in a cache.
     */
    maxEntries: number;

    /**
     * The maximum lifetime of a request to stay in the cache before it's removed.
     */
    maxAgeSeconds: number;
}

/**
 * The CacheExpiration class allows you define an expiration and / or limit on the number of responses stored in a Cache.
 */
declare class CacheExpiration {
    /**
     * Expires entries for the given cache and given criteria.
     * @returns {Promise<void>}
     */
    expireEntries (): Promise<void>;

    /**
     * Can be used to check if a URL has expired or not before it's used.
     * This requires a look up from IndexedDB, so can be slow.
     * Note: This method will not remove the cached entry, call expireEntries() to remove indexedDB and Cache entries.
     * @param {string} url
     * @returns {Promise<boolean>}
     */
    isURLExpired (url: string): Promise<boolean>;

    /**
     * Update the timestamp for the given URL.
     * This ensures the when removing entries based on maximum entries, most recently used is accurate or when expiring, the timestamp is up-to-date.
     * @param {string} url
     * @returns {Promise<void>}
     */
    updateTimestamp (url: string): Promise<void>;
}

/**
 * To construct a new CacheExpiration instance you must provide at least one of the config properties.
 */
interface ICacheExpirationConstructor {
    new (cacheName: string, config: Partial<ICacheExpirationOptions>): CacheExpiration;
}

/**
 * ===== Strategies =====
 */

interface ICacheStrategyHandleOptions {
    event: FetchEvent;
}

interface ICacheStrategyMakeRequestOptions {
    request: Request|string;
    event?: FetchEvent;
}

declare class CacheStrategy {
    /**
     * This method will perform a request strategy and follows an API that will work with the Workbox Router.
     * @param {ICacheStrategyHandleOptions} input
     * @returns {Promise<Response>}
     */
    handle (input: ICacheStrategyHandleOptions): Promise<Response>;

    /**
     * This method can be used to perform a make a standalone request outside the context of the Workbox Router.
     * @param {ICacheStrategyMakeRequestOptions} input
     * @returns {Promise<Response>}
     */
    makeRequest (input: ICacheStrategyMakeRequestOptions): Promise<Response>;
}

/**
 * ===== CacheOnly strategy =====
 */

interface ICacheOnlyOptions {
    /**
     * Cache name to store and retrieve requests. Defaults to cache names provided by workbox-core.
     */
    cacheName: string;
    /**
     * Plugins to use in conjunction with this caching strategy.
     */
    plugins: Plugin[];
}

/**
 * An implementation of a cache-only request strategy.
 * This class is useful if you want to take advantage of any Workbox plugins.
 */
declare class CacheOnly extends CacheStrategy {
}

/**
 * Instantiates a new CacheOnly strategy
 */
interface ICacheOnlyConstructor {
    new (options?: Partial<ICacheOnlyOptions>): CacheOnly;
}

/**
 * ===== CacheFirst strategy =====
 */

interface ICacheFirstOptions extends ICacheOnlyOptions {
    /**
     * Values passed along to the init of all fetch() requests made by this strategy.
     */
    fetchOptions: RequestInit;
}

/**
 * An implementation of a cache-first request strategy.
 * A cache first strategy is useful for assets that have been revisioned, such as URLs like /styles/example.a8f5f1.css, since they can be cached for long periods of time.
 */
declare class CacheFirst extends CacheStrategy {
}

/**
 * Instantiates a new CacheFirst strategy
 */
interface ICacheFirstConstructor {
    new (options?: Partial<ICacheFirstOptions>): CacheFirst;
}

/**
 * ===== NetworkOnly strategy =====
 */

interface INetworkOnlyOptions extends ICacheFirstOptions {
}

/**
 * An implementation of a network-only request strategy.
 * This class is useful if you want to take advantage of any Workbox plugins.
 */
declare class NetworkOnly extends CacheStrategy {
}

/**
 * Instantiates a new NetworkOnly strategy
 */
interface INetworkOnlyConstructor {
    new (options?: Partial<INetworkOnlyOptions>): NetworkOnly;
}

/**
 * ===== NetworkFirst strategy =====
 */

interface INetworkFirstOptions extends ICacheFirstOptions {
    networkTimeoutSeconds: number;
}

/**
 * An implementation of a network first request strategy.
 * By default, this strategy will cache responses with a 200 status code as well as opaque responses.
 * Opaque responses are are cross-origin requests where the response doesn't support CORS.
 */
declare class NetworkFirst extends CacheStrategy {
}

/**
 * Instantiates a new NetworkFirst strategy
 */
interface INetworkFirstConstructor {
    new (options?: Partial<INetworkFirstOptions>): NetworkFirst;
}

/**
 * ===== StaleWhileRevalidate strategy =====
 */

interface IStaleWhileRevalidateOptions extends ICacheFirstOptions {
}

/**
 * An implementation of a stale-while-revalidate request strategy.
 * Resources are requested from both the cache and the network in parallel.
 * The strategy will respond with the cached version if available, otherwise wait for the network response.
 * The cache is updated with the network response with each successful request.
 * By default, this strategy will cache responses with a 200 status code as well as opaque responses.
 * Opaque responses are are cross-origin requests where the response doesn't support CORS.
 */
declare class StaleWhileRevalidate extends CacheStrategy {
}

/**
 * Instantiates a new StaleWhileRevalidate strategy
 */
interface IStaleWhileRevalidateConstructor {
    new (options?: Partial<IStaleWhileRevalidateOptions>): StaleWhileRevalidate;
}

/**
 * ===== MatchCallback =====
 */

interface IMatchContext extends IURLContext {
    /**
     * The service workers' fetch event.
     */
    event: FetchEvent;
}

/**
 * To signify a match, return anything other than null. Return null if the route shouldn't match.
 */
type MatchCallback = (context: IMatchContext) => {}|null;

/**
 * ===== HandlerCallback =====
 */

interface IHandlerContext extends IMatchContext {
    /**
     * Parameters returned by the Route's match callback function. This will be undefined if nothing was returned.
     */
    params?: {};
}

/**
 * The "handler" callback is called when a service worker's fetch event has been matched by a Route. This callback should return a Promise that resolves with a Response.
 * If a value is returned by the match callback it will be passed in as the context.params argument.
 */
type HandlerCallback = (context: IHandlerContext) => Promise<Response>;

/**
 * ===== NavigationRoute =====
 */

interface IHandlerOptions {
    url: string;
    event: FetchEvent;
    params: URLSearchParams;
}

interface INavigationRouteOptions {
    /**
     * If any of these patterns match, the route will not handle the request (even if a whitelist RegExp matches).
     */
    blacklist: RegExp[];

    /**
     * If any of these patterns match the URL's pathname and search parameter,
     * the route will handle the request (assuming the blacklist doesn't match).
     */
    whitelist: RegExp[];
}

/**
 * NavigationRoute makes it easy to create a Route that matches for browser navigation requests.
 * It will only match incoming Requests whose mode is set to navigate.
 * You can optionally only apply this route to a subset of navigation requests by using one or both of the blacklist and whitelist parameters.
 */
declare class NavigationRoute {
}

/**
 * If both blacklist and whitelist are provided, the blacklist will take precedence and the request will not match this route.
 * The regular expressions in whitelist and blacklist are matched against the concatenated pathname and search portions of the requested URL.
 */
interface INavigationRouteConstructor {
    new (handler: HandlerCallback, options: Partial<INavigationRouteOptions>): NavigationRoute;
}

/**
 * ===== BroadcastUpdatePlugin =====
 */

/**
 * This plugin will automatically broadcast a message whenever a cached response is updated.
 */
declare class BroadcastUpdatePlugin {
}

/**
 * Construct a new instance with a specific channelName to broadcast messages on
 */
interface IBroadcastUpdatePluginConstructor {
    new (channelName: string, options?: Partial<IBroadcastCacheUpdateOptions>): BroadcastUpdatePlugin;
}

/**
 * ===== BroadcastUpdatePlugin =====
 */

/**
 * The range request plugin makes it easy for a request with a 'Range' header to be fulfilled by a cached response.
 * It does this by intercepting the cachedResponseWillBeUsed plugin callback and returning the appropriate subset of the cached response body.
 */
declare class RangeRequestsPlugin {
}

/**
 * Instantiates a new RangeRequestsPlugin
 */
interface IRangeRequestsPluginConstructor {
    new (): RangeRequestsPlugin;
}

/**
 * ===== CacheableResponsePlugin =====
 */

/**
 * A class implementing the cacheWillUpdate lifecycle callback.
 * This makes it easier to add in cacheability checks to requests made via Workbox's built-in strategies.
 */
declare class CacheableResponsePlugin {
}

/**
 * To construct a new cacheable response Plugin instance you must provide at least one of the config properties.
 * If both statuses and headers are specified, then both conditions must be met for the Response to be considered cacheable.
 */
interface ICacheableResponsePluginConstructor {
    new (config: Partial<ICacheableResponseOptions>): CacheableResponsePlugin;
}

/**
 * ===== BackgroundSyncPlugin =====
 */

/**
 * A class implementing the fetchDidFail lifecycle callback.
 * This makes it easier to add failed requests to a background sync Queue.
 */
declare class BackgroundSyncPlugin {
}

/**
 * Instantiates a new BackgroundSyncPlugin
 */
interface IBackgroundSyncPluginConstructor {
    new (...queueArgs: any[]): BackgroundSyncPlugin;
}

/**
 * ===== ExpirationPlugin =====
 */

/**
 * This plugin can be used in the Workbox API's to regularly enforce a limit on the age and / or the number of cached requests.
 * Whenever a cached request is used or updated, this plugin will look at the used Cache and remove any old or extra requests.
 * When using maxAgeSeconds, requests may be used once after expiring because the expiration clean up will not have occurred
 * until after the cached request has been used. If the request has a "Date" header, then a light weight expiration check is
 * performed and the request will not be used immediately.
 * When using maxEntries, the last request to be used will be the request that is removed from the Cache.
 */
declare class ExpirationPlugin {
}

/**
 * Instantiates a new ExpirationPlugin
 */
interface IExpirationPluginConstructor {
    new (config: Partial<ICacheExpirationOptions>): ExpirationPlugin;
}

/**
 * ===== ExpirationPlugin =====
 */

type Plugin = BroadcastUpdatePlugin|RangeRequestsPlugin|CacheableResponsePlugin|BackgroundSyncPlugin|ExpirationPlugin|WorkboxPlugin;

/**
 * ===== BackgroundSync =====
 */

interface IStorableRequestOptions {
    url: string;

    /**
     * See: https://fetch.spec.whatwg.org/#requestinit
     */
    requestInit: RequestInit;

    /**
     * The time the request was created, defaulting to the current time if not specified.
     */
    timestamp: number;
}

/**
 *  A class to make it easier to serialize and de-serialize requests so they can be stored in IndexedDB.
 */
declare class StorableRequest {
    readonly timestamp: number;

    toObject (): IStorableRequestOptions;

    toRequest (): Request;

    clone (): StorableRequest;
}

/**
 * Accepts a URL and RequestInit dictionary that can be used to create a
 * new Request object. A timestamp is also generated so consumers can
 * reference when the object was created.
 */
interface IStorableRequestConstructor {
    new (options: IStorableRequestOptions): StorableRequest;
    fromRequest (request: Request): StorableRequest;
}

/**
 * ===== PrecacheController =====
 */

interface ICleanupResult {
    /**
     * List of URLs that were deleted from the precache cache.
     */
    deletedCacheRequests: string[];
    /**
     * List of URLs that were deleted from the precache cache.
     */
    deletedRevisionDetails: string[];
}

interface IActivateOptions {
    /**
     * Plugins to be used for fetching and caching during install.
     */
    plugins: Plugin[];
}

interface IInstallOptions {
    /**
     * Suppress warning messages.
     */
    suppressWarnings: boolean;

    /**
     * Plugins to be used for fetching and caching during install.
     */
    plugins: Plugin[];
}

interface IPrecacheEntry {
    url: string;
    revision: string;
}

interface IInstallResult {
    /**
     * List of entries supplied for precaching that were precached.
     */
    updatedEntries: (string|IPrecacheEntry)[];

    /**
     * List of entries supplied for precaching that were already precached.
     */
    notUpdatedEntries: (string|IPrecacheEntry)[];
}

/**
 * Performs efficient precaching of assets.
 */
declare class PrecacheController {
    /**
     * Takes the current set of temporary files and moves them to the final cache, deleting the temporary cache once copying is complete.
     * @param {IActivateOptions} options
     * @returns {Promise<ICleanupResult>} Resolves with an object containing details of the deleted cache requests and precache revision details.
     */
    activate (options: Partial<IActivateOptions>): Promise<ICleanupResult>;

    /**
     * This method will add items to the precache list, removing duplicates and ensuring the information is valid.
     * @param {(string | IPrecacheEntry)[]} entries - Array of entries to precache.
     */
    addToCacheList (entries: (string|IPrecacheEntry)[]): void;

    /**
     * Returns an array of fully qualified URL's that will be precached.
     * @returns {string[]} An array of URLs.
     */
    getCachedUrls (): string[];

    /**
     * Call this method from a service work install event to start precaching assets.
     * @param {Partial<IInstallOptions>} options
     * @returns {Promise<IInstallResult>}
     */
    install (options?: Partial<IInstallOptions>): Promise<IInstallResult>;
}

/**
 * Create a new PrecacheController.
 */
interface IPrecacheControllerConstructor {
    new (cacheName?: string): PrecacheController;
}

/**
 * ===== Queue =====
 */

interface IQueueCallback {
    /**
     * Invoked immediately before the request is stored to IndexedDB. Use this callback to modify request data at store time.
     * @param {StorableRequest} request
     */
    requestWillEnqueue (request: StorableRequest): void;
    /**
     * Invoked immediately before the request is re-fetched. Use this callback to modify request data at fetch time.
     * @param {StorableRequest} request
     */
    requestWillReplay (request: StorableRequest): void;

    /**
     * Invoked after all requests in the queue have successfully replayed.
     * @param {StorableRequest[]} requests
     */
    queueDidReplay (requests: StorableRequest[]): void;
}

interface IQueueOptions {
    /**
     * The amount of time (in minutes) a request may be retried. After this amount of time has passed, the request will be deleted from the queue.
     */
    maxRetentionTime: number;
    /**
     * Callbacks to observe the lifecycle of queued requests. Use these to respond to or modify the requests during the replay process.
     */
    callbacks: Partial<IQueueCallback>;
}

/**
 * A class to manage storing failed requests in IndexedDB and retrying them later.
 * All parts of the storing and replaying process are observable via callbacks.
 */
declare class Queue {
    readonly name: string;

    /**
     * Stores the passed request into IndexedDB. The database used is workbox-background-sync and
     * the object store name is the same as the name this instance was created with (to guarantee it's unique).
     * @param {Request} request - The request object to store.
     * @returns {Promise<void>}
     */
    addRequest (request: Request): Promise<void>;

    /**
     * Retrieves all stored requests in IndexedDB and retries them. If the queue contained requests that
     * were successfully replayed, the queueDidReplay callback is invoked (which implies the queue is now empty).
     * If any of the requests fail, a new sync registration is created to retry again later.
     * @returns {Promise<void>}
     */
    replayRequests (): Promise<void>;
}

/**
 * Creates an instance of Queue with the given options
 */
interface IQueueConstructor {
    /**
     * @param {string} name - The unique name for this queue. This name must be unique as it's used to register
     * sync events and store requests in IndexedDB specific to this instance. An error will be thrown if a
     * duplicate name is detected.
     * @param {Partial<IQueueOptions>} options
     * @returns {Queue}
     */
    new (name: string, options?: Partial<IQueueOptions>): Queue;
}

/**
 * ===== Route =====
 */

/**
 * A Route consists of a pair of callback functions, "match" and "handler".
 * The "match" callback determine if a route should be used to "handle" a request by
 * returning a non-falsy value if it can. The "handler" callback is called when there is a match
 * and should return a Promise that resolves to a Response.
 */
declare class Route {
}

/**
 * Constructor for Route class.
 */
interface IRouteConstructor {
    /**
     *
     * @param {MatchCallback} match - A callback function that determines whether the route matches a given fetch event by returning a non-falsy value.
     * @param {HandlerCallback} handler - A callback function that returns a Promise resolving to a Response.
     * @param {string} [method] - The HTTP method to match the Route against.
     * @returns {Route}
     */
    new (match: MatchCallback, handler: HandlerCallback, method?: string): Route;
}

/**
 * ===== RegExpRoute =====
 */

/**
 * RegExpRoute makes it easy to create a regular expression based Route.
 * For same-origin requests the RegExp only needs to match part of the URL. For requests against third-party servers, you must define a RegExp that matches the start of the URL.
 */
declare class RegExpRoute extends Route {
}

/**
 * If the regular expression contains capture groups, the captured values will be passed to the handler's params argument.
 */
interface IRegExpRouteConstructor {
    /**
     *
     * @param {RegExp} regExp - The regular expression to match against URLs.
     * @param {HandlerCallback} handler - A callback function that returns a Promise resulting in a Response.
     * @param {string} [method] - The HTTP method to match the Route against.
     * @returns {RegExpRoute}
     */
    new (regExp: RegExp, handler: HandlerCallback, method?: string): RegExpRoute;
}

/**
 * ===== Router =====
 */

/**
 * The Router can be used to process a FetchEvent through one or more Routes responding with a Request if a matching route exists.
 * If no route matches a given a request, the Router will use a "default" handler if one is defined.
 * Should the matching Route throw an error, the Router will use a "catch" handler if one is defined to gracefully deal with issues and respond with a Request.
 * If a request matches multiple routes, the earliest registered route will be used to respond to the request.
 */
declare class Router {
    /**
     * Apply the routing rules to a FetchEvent object to get a Response from an appropriate Route's handler.
     * @param {FetchEvent} event - The event from a service worker's 'fetch' event listener.
     * @returns {Promise<Response>?} A promise is returned if a registered route can handle the FetchEvent's request.
     *                               If there is no matching route and there's no defaultHandler, undefined is returned.
     */
    handleRequest (event: FetchEvent): Promise<Response>|undefined;

    /**
     * Registers a route with the router.
     * @param {Route} route
     */
    registerRoute (route: Route): void;

    /**
     * If a Route throws an error while handling a request, this handler will be called and given a chance to provide a response.
     * @param {HandlerCallback} handler - A callback function that returns a Promise resulting in a Response.
     */
    setCatchHandler (handler: HandlerCallback): void;

    /**
     * Define a default handler that's called when no routes explicitly match the incoming request.
     * Without a default handler, unmatched requests will go against the network as if there were no service worker present.
     * @param {HandlerCallback} handler - A callback function that returns a Promise resulting in a Response.
     */
    setDefaultHandler (handler: HandlerCallback): void;

    /**
     * Unregisters a route with the router.
     * @param {Route} route - The route to unregister.
     */
    unregisterRoute (route: Route): void;
}

/**
 * Initializes a new Router.
 */
interface IRouterConstructor {
    new (): Router;
}

/**
 * ===== CoreNamespace =====
 */

interface ICacheNames {
    precache: string;
    runtime: string;
    googleAnalytics: string;
}

interface ILogLevel {
    /**
     * Prints all logs from Workbox. Useful for debugging.
     */
    debug: 0;

    /**
     * Prints console log, warn, error and groups. Default for debug builds.
     */
    log: 1;

    /**
     * Prints console warn, error and groups. Default for non-debug builds.
     */
    warn: 2;

    /**
     * Print console error and groups.
     */
    error: 3;

    /**
     * Force no logging from Workbox.
     */
    silent: 4;
}

interface ICacheNameDetails {
    prefix: string;
    suffix: string;
    precache: string;
    runtime: string;
    googleAnalytics: string;
}

/**
 * All of the Workbox service worker libraries use workbox-core for shared code as well as setting default values that need to be shared (like cache names).
 */
declare class CoreNamespace {
    /**
     * cacheNames.precache is used for precached assets, cacheNames.googleAnalytics is used by workbox-google-analytics to store analytics.js, and cacheNames.runtime is used for everything else.
     */
    static readonly cacheNames: ICacheNames;

    /**
     * The available log levels in Workbox: debug, log, warn, error and silent.
     */
    static readonly LOG_LEVELS: ILogLevel;

    /**
     * Get the current log level.
     */
    static readonly logLevel: ILogLevel[keyof ILogLevel];

    /**
     * You can alter the default cache names used by the Workbox modules by changing the cache name details.
     * Cache names are generated as <prefix>-<Cache Name>-<suffix>.
     * @param {Partial<ICacheNameDetails>} details
     */
    static setCacheNameDetails (details: Partial<ICacheNameDetails>): void;

    /**
     * Set the current log level passing in one of the values from LOG_LEVELS.
     * @param {number} logLevel - The new log level to use.
     */
    static setLogLevel (logLevel: ILogLevel[keyof ILogLevel]): void;
}

/**
 * ===== PrecachingNamespace =====
 */

interface IURLContext {
    /**
     * The request's URL.
     */
    url: URL;
}

/**
 * The "urlManipulation" callback can be used to determine if there are any additional permutations of a URL that should be used to check against the available precached files.
 * For example, Workbox supports checking for '/index.html' when the URL '/' is provided. This callback allows additional, custom checks.
 * @param {IURLContext} context
 * @returns {URL[]} To add additional urls to test, return an Array of URL's. Please note that these should not be Strings, but URL objects.
 */
type UrlManipulation = (context: IURLContext) => URL[];

interface IRouteOptions {
    /**
     * The directoryIndex will check cache entries for a URLs ending with '/' to see if there is a hit when appending the directoryIndex value.
     */
    directoryIndex: string|null;

    /**
     * An array of regex's to remove search params when looking for a cache match.
     */
    ignoreUrlParametersMatching: RegExp[];

    /**
     * The cleanUrls option will check the cache for the URL with a .html added to the end of the end.
     */
    cleanUrls: boolean;

    /**
     * This is a function that should take a URL and return an array of alternative URL's that should be checked for precache matches.
     */
    urlManipulation: UrlManipulation;
}

/**
 * Most consumers of this module will want to use the precacheAndRoute() method to add assets to the Cache and respond to network requests with these cached assets.
 * If you require finer grained control, you can use the PrecacheController to determine when performed.
 */
declare class PrecachingNamespace {
    /**
     * Performs efficient precaching of assets.
     */
    static readonly PrecacheController: IPrecacheControllerConstructor;

    /**
     * Add plugins to precaching.
     * @param {Plugin[]} newPlugins
     */
    static addPlugins (newPlugins: Plugin[]): void;

    /**
     * Add a fetch listener to the service worker that will respond to network requests with precached assets.
     * Requests for assets that aren't precached, the FetchEvent will not be responded to, allowing the event to fall through to other fetch event listeners.
     * @param {Partial<IRouteOptions>} route
     */
    static addRoute (route: Partial<IRouteOptions>): void;

    /**
     * Add items to the precache list, removing any duplicates and store the files in the "precache cache" when the service worker installs.
     * This method can be called multiple times.
     * Please note: This method will not serve any of the cached files for you, it only precaches files. To respond to a network request you call addRoute().
     * If you have a single array of files to precache, you can just call precacheAndRoute().
     * @param {(string | IPrecacheEntry)[]} entries
     */
    static precache (entries: (string|IPrecacheEntry)[]): void;

    /**
     * This method will add entries to the precache list and add a route to respond to fetch events.
     * This is a convenience method that will call precache() and addRoute() in a single call.
     * @param {(string | IPrecacheEntry)[]} entries - Array of entries to precache.
     * @param {Partial<IRouteOptions>} [route] - see addRoute() options
     */
    static precacheAndRoute (entries: (string|IPrecacheEntry)[], route?: Partial<IRouteOptions>): void;

    /**
     * Warnings will be logged if any of the precached assets are entered without a revision property.
     * This is extremely dangerous if the URL's aren't revisioned.
     * However, the warnings can be supressed with this method.
     * @param {boolean} suppress
     */
    static suppressWarnings (suppress: boolean): void;
}

/**
 * ===== RoutingNamespace =====
 */

interface IRegisterNavigationRouteOptions extends INavigationRouteOptions {
    cacheName: string;
}

declare class RoutingNamespace {
    /**
     * NavigationRoute makes it easy to create a Route that matches for browser navigation requests.
     * It will only match incoming Requests whose mode is set to navigate.
     * You can optionally only apply this route to a subset of navigation requests by using one or
     * both of the blacklist and whitelist parameters.
     */
    static readonly NavigationRoute: INavigationRouteConstructor;

    /**
     * RegExpRoute makes it easy to create a regular expression based Route.
     * For same-origin requests the RegExp only needs to match part of the URL. For requests against third-party servers, you must define a RegExp that matches the start of the URL.
     */
    static readonly RegExpRoute: IRegExpRouteConstructor;

    /**
     * A Route consists of a pair of callback functions, "match" and "handler". The "match" callback determine if a
     * route should be used to "handle" a request by returning a non-falsy value if it can.
     * The "handler" callback is called when there is a match and should return a Promise that resolves to a Response.
     */
    static readonly Route: IRouteConstructor;

    /**
     * The Router can be used to process a FetchEvent through one or more Routes responding with a Request if a matching route exists.
     * If no route matches a given a request, the Router will use a "default" handler if one is defined.
     * Should the matching Route throw an error, the Router will use a "catch" handler if one is defined to gracefully deal with issues and respond with a Request.
     * If a request matches multiple routes, the earliest registered route will be used to respond to the request.
     */
    static readonly Router: IRouterConstructor;

    /**
     * Register a route that will return a precached file for a navigation request. This is useful for the application shell pattern.
     * This method will generate a NavigationRoute and call Router.registerRoute().
     * @param {string} cachedAssetUrl
     * @param {Partial<IRegisterNavigationRouteOptions>} [options]
     * @returns {NavigationRoute} Returns the generated Route.
     */
    static registerNavigationRoute (cachedAssetUrl: string, options?: Partial<IRegisterNavigationRouteOptions>): NavigationRoute;

    /**
     * Easily register a RegExp, string, or function with a caching strategy to the Router.
     * This method will generate a Route for you if needed and call Router.registerRoute().
     * @param {string | RegExp | MatchCallback | Route} capture - If the capture param is a Route, all other arguments will be ignored.
     * @param {HandlerCallback} handler - A callback function that returns a Promise resulting in a Response.
     * @param {string} method - The HTTP method to match the Route against.
     * @returns {Route} The generated Route(Useful for unregistering).
     */
    static registerRoute (capture: string|RegExp|MatchCallback|Route, handler: HandlerCallback, method?: string): Route;

    /**
     * If a Route throws an error while handling a request, this handler will be called and given a chance to provide a response.
     * @param {IHandlerOptions} handler - A callback function that returns a Promise resulting in a Response.
     * @returns {Promise<Response>}
     */
    static setCatchHandler (handler: IHandlerOptions): Promise<Response>;

    /**
     * Define a default handler that's called when no routes explicitly match the incoming request.
     * Without a default handler, unmatched requests will go against the network as if there were no service worker present.
     * @param {IHandlerOptions} handler - A callback function that returns a Promise resulting in a Response.
     * @returns {Promise<Response>}
     */
    static setDefaultHandler (handler: IHandlerOptions): Promise<Response>;

    /**
     * Unregisters a route with the router.
     * @param {Route} route - The route to unregister
     */
    static unregisterRoute (route: Route): void;
}

/**
 * ===== StrategiesNamespace =====
 */

interface IStrategyOptions {
    /**
     * Name of cache to use for caching (both lookup and updating).
     */
    cacheName: string;

    /**
     * Defining this object will add a cache expiration plugins to this strategy.
     */
    cacheExpiration: Partial<ICacheExpirationOptions>;

    /**
     * The Plugins to use along with the Strategy
     */
    plugins: Plugin[];
}

/**
 * There are common caching strategies that most service workers will need and use. This module provides simple implementations of these strategies.
 */
declare class StrategiesNamespace {
    /**
     * An implementation of a cache-first request strategy.
     * A cache first strategy is useful for assets that have been revisioned, such as URLs like /styles/example.a8f5f1.css, since they can be cached for long periods of time.
     */
    static readonly CacheFirst: ICacheFirstConstructor;

    /**
     * An implementation of a cache-only request strategy.
     * This class is useful if you want to take advantage of any Workbox plugins.
     */
    static readonly CacheOnly: ICacheOnlyConstructor;

    /**
     * An implementation of a network first request strategy.
     * By default, this strategy will cache responses with a 200 status code as well as opaque responses. Opaque responses are are cross-origin requests where the response doesn't support CORS.
     */
    static readonly NetworkFirst: INetworkFirstConstructor;

    /**
     * An implementation of a network-only request strategy.
     * This class is useful if you want to take advantage of any Workbox plugins.
     */
    static readonly NetworkOnly: INetworkOnlyConstructor;

    /**
     * An implementation of a stale-while-revalidate request strategy.
     * Resources are requested from both the cache and the network in parallel.
     * The strategy will respond with the cached version if available, otherwise wait for the network response.
     * The cache is updated with the network response with each successful request.
     * By default, this strategy will cache responses with a 200 status code as well as opaque responses.
     * Opaque responses are are cross-origin requests where the response doesn't support CORS.
     */
    static readonly StaleWhileRevalidate: IStaleWhileRevalidateConstructor;

    /**
     * Instantiates a new CacheFirst strategy
     * @param {Partial<IStrategyOptions>} [options]
     * @returns {HandlerCallback}
     */
    static cacheFirst (options?: Partial<IStrategyOptions>): HandlerCallback;

    /**
     * Instantiates a new CacheOnly strategy
     * @param {Partial<IStrategyOptions>} [options]
     * @returns {HandlerCallback}
     */
    static cacheOnly (options?: Partial<IStrategyOptions>): HandlerCallback;

    /**
     * Instantiates a new NetworkFirst strategy
     * @param {Partial<IStrategyOptions>} [options]
     * @returns {HandlerCallback}
     */
    static networkFirst (options?: Partial<IStrategyOptions>): HandlerCallback;

    /**
     * Instantiates a new NetworkOnly strategy
     * @param {Partial<IStrategyOptions>} [options]
     * @returns {HandlerCallback}
     */
    static networkOnly (options?: Partial<IStrategyOptions>): HandlerCallback;

    /**
     * Instantiates a new StaleWhileRevalidate strategy
     * @param {Partial<IStrategyOptions>} [options]
     * @returns {StaleWhileRevalidate}
     */
    static staleWhileRevalidate (options?: Partial<IStrategyOptions>): HandlerCallback;
}

/**
 * ===== StreamsNamespace =====
 */

type StreamSource = Response|ReadableStream|BodyInit;

interface IConcatenateResult {
    done: Promise<StreamSource>;
    stream: ReadableStream;
}

interface IConcatenateToResponseResult {
    done: Promise<StreamSource>;
    response: Response;
}

declare class StreamsNamespace {
    /**
     * Takes multiple source Promises, each of which could resolve to a Response, a ReadableStream, or a BodyInit.
     * Returns an object exposing a ReadableStream with each individual stream's data returned in sequence,
     * along with a Promise which signals when the stream is finished (useful for passing to a FetchEvent's waitUntil()).
     * @param {Promise<StreamSource>[]} sourcePromises - Array of Promise containing StreamSource
     * @returns {IConcatenateResult}
     */
    static concatenate (sourcePromises: Promise<StreamSource>[]): IConcatenateResult;

    /**
     * Takes multiple source Promises, each of which could resolve to a Response, a ReadableStream, or a BodyInit,along with a HeadersInit.
     * Returns an object exposing a Response whose body consists of each individual stream's data returned in sequence,
     * along with a Promise which signals when the stream is finished (useful for passing to a FetchEvent's waitUntil()).
     * @param {Promise<StreamSource>[]} sourcePromises - Array of Promise containing StreamSource
     * @param {HeadersInit} [headersInit] - If there's no Content-Type specified, 'text/html' will be used by default.
     * @returns {IConcatenateToResponseResult}
     */
    static concatenateToResponse (sourcePromises: Promise<StreamSource>[], headersInit?: HeadersInit): IConcatenateToResponseResult;

    /**
     * This is a utility method that determines whether the current browser supports the features required to create streamed responses. Currently, it checks if ReadableStream is available.
     * @param {HeadersInit} [headersInit] - If there's no Content-Type specified, 'text/html' will be used by default.
     * @returns {boolean} - true, if the current browser meets the requirements for streaming responses, and false otherwise.
     */
    static createHeaders (headersInit?: HeadersInit): boolean;

    /**
     * This is a utility method that determines whether the current browser supports the features required to create streamed responses. Currently, it checks if ReadableStream is available.
     * @returns {boolean} - true, if the current browser meets the requirements for streaming responses, and false otherwise.
     */
    static isSupported (): boolean;

    /**
     * A shortcut to create a strategy that could be dropped-in to Workbox's router.
     * On browsers that do not support constructing new ReadableStreams, this strategy will automatically wait for
     * all the sourceFunctions to complete, and create a final response that concatenates their values together.
     * @param {HandlerCallback[]} sourceFunctions - Each function should return a workbox.streams.StreamSource (or a Promise which resolves to one).
     * @param {HeadersInit} headersInit . If there's no Content-Type specified, 'text/html' will be used by default.
     * @returns {HandlerCallback}
     */
    static strategy (sourceFunctions: HandlerCallback[], headersInit?: HeadersInit): HandlerCallback;
}

/**
 * ===== ExpirationNamespace =====
 */

declare class ExpirationNamespace {
    /**
     * The CacheExpiration class allows you define an expiration and / or limit on the number of responses stored in a Cache.
     */
    static readonly CacheExpiration: ICacheExpirationConstructor;

    /**
     * This plugin can be used in the Workbox API's to regularly enforce a limit on the age and / or the number of cached requests.
     * Whenever a cached request is used or updated, this plugin will look at the used Cache and remove any old or extra requests.
     * When using maxAgeSeconds, requests may be used once after expiring because the expiration clean up will not
     * have occurred until after the cached request has been used. If the request has a "Date" header, then a light weight
     * expiration check is performed and the request will not be used immediately.
     * When using maxEntries, the last request to be used will be the request that is removed from the Cache.
     */
    static readonly Plugin: IExpirationPluginConstructor;
}

/**
 * ===== BackgroundSyncNamespace =====
 */

declare class BackgroundSyncNamespace {
    /**
     * A class implementing the fetchDidFail lifecycle callback. This makes it easier to add failed requests to a background sync Queue.
     */
    static readonly Plugin: IBackgroundSyncPluginConstructor;

    /**
     * A class to manage storing failed requests in IndexedDB and retrying them later. All parts of the storing and replaying process are observable via callbacks.
     */
    static readonly Queue: IQueueConstructor;
}

/**
 * ===== GoogleAnalyticsNamespace =====
 */

interface IGoogleAnalyticsInitializeOptions {
    /**
     * The cache name to store and retrieve analytics.js. Defaults to the cache names provided by workbox-core.
     */
    cacheName: string;

    /**
     * Measurement Protocol parameters, expressed as key/value pairs, to be added to replayed Google Analytics requests.
     * This can be used to, e.g., set a custom dimension indicating that the request was replayed.
     */
    parameterOverrides: { [key: string]: string };

    /**
     * A function that allows you to modify the hit parameters prior to replaying the hit. The function is invoked with the original hit's URLSearchParams object as its only argument.
     * @param {URLSearchParams} params
     */
    hitFilter (params: URLSearchParams): void;
}

declare class GoogleAnalyticsNamespace {
    static initialize (options: Partial<IGoogleAnalyticsInitializeOptions>): void;
}

/**
 * ===== CacheableResponseNamespace =====
 */

declare class CacheableResponseNamespace {
    /**
     * This class allows you to set up rules determining what status codes and/or headers need to be present in order for a Response to be considered cacheable.
     */
    static readonly CacheableResponse: ICacheableResponseConstructor;

    /**
     * A class implementing the cacheWillUpdate lifecycle callback. This makes it easier to add in cacheability checks to requests made via Workbox's built-in strategies.
     */
    static readonly Plugin: ICacheableResponsePluginConstructor;
}

/**
 * ===== BroadcastUpdateNamespace =====
 */

declare class BroadcastUpdateNamespace {
    /**
     * Uses the Broadcast Channel API to notify interested parties when a cached response has been updated.
     * For efficiency's sake, the underlying response bodies are not compared; only specific response headers are checked.
     */
    static readonly BroadcastCacheUpdate: IBroadcastCacheUpdateConstructor;

    /**
     * This plugin will automatically broadcast a message whenever a cached response is updated.
     */
    static readonly Plugin: IBroadcastUpdatePluginConstructor;

    /**
     * You would not normally call this method directly;
     * it's called automatically by an instance of the BroadcastCacheUpdate class.
     * It's exposed here for the benefit of developers who would rather not use the full BroadcastCacheUpdate implementation.
     * Calling this will dispatch a message on the provided Broadcast Channel to notify interested subscribers about a
     * change to a cached resource.
     * The message that's posted has a formation inspired by the Flux standard action format like so:
     * @param {BroadcastChannel} channel - The BroadcastChannel to use.
     * @param {string} cacheName - The name of the cache in which the updated Response was stored.
     * @param {string} url - The URL associated with the updated Response.
     * @param {string} source - A string identifying this library as the source of the update message.
     */
    static broadCastUpdate (channel: BroadcastChannel, cacheName: string, url: string, source: string): void;
}

/**
 * ===== RangeRequestsNamespace =====
 */

declare class RangeRequestsNamespace {
    /**
     * The range request plugin makes it easy for a request with a 'Range' header to be fulfilled by a cached response.
     * It does this by intercepting the cachedResponseWillBeUsed plugin callback and returning the appropriate subset of the cached response body.
     */
    static readonly Plugin: IRangeRequestsPluginConstructor;

    /**
     * Given a Request and Response objects as input, this will return a promise for a new Response.
     * @param {Request} request - A request, which should contain a Range: header.
     * @param {Response} originalResponse - An original response containing the full content.
     * @returns {Promise<Response>} Either a 206 Partial Content response, with the response body set to the slice of
     * content specified by the request's Range: header, or a 416 Range Not Satisfiable response if the conditions of
     * the Range: header can't be met.
     */
    static createPartialResponse (request: Request, originalResponse: Response): Promise<Response>;
}

/**
 * ===== Workbox Plugin =====
 */
interface WorkboxPlugin {
    /**
     * Called before a Response is used to update a cache. You can alter the Response before it’s added to the cache or return null to avoid updating the cache at all.
     * @param {CacheWillUpdatePluginContext} context
     * @returns {Promise<Response>|Response|null}
     */
    readonly cacheWillUpdate?: (context: CacheWillUpdatePluginContext) => Promise<Response>|Response|null;

    /**
     * Called when a new entry is added to a cache or it’s updated. Useful if you wish to perform an action after a cache update.
     * @param {CacheDidUpdatePluginContext} context
     * @returns {void}
     */
    readonly cacheDidUpdate?: (context: CacheDidUpdatePluginContext) => void;

    /**
     * Before a cached Response is used to respond to a fetch event, this callback can be used to allow or block the Response from being used.
     * @param {CacheResponseWillBeUsedPluginContext} context
     * @returns {Promise<Response>|Response|null}
     */
    readonly cachedResponseWillBeUsed?: (context: CacheResponseWillBeUsedPluginContext) => Promise<Response>|Response|null;

    /**
     * This is called whenever a fetch event is about to be made. You can alter the Request in this callback.
     * @param {RequestWillFetchPluginContext} context
     * @returns {Request}
     */
    readonly requestWillFetch?: (context: RequestWillFetchPluginContext) => Request;

    /**
     * Called when a fetch event fails (note this is when the network request can’t be made at all and not when a request is a non-200 request).
     * @param {FetchDidFailPluginContext}
     * @returns {void}
     */
    readonly fetchDidFail?: (context: FetchDidFailPluginContext) => void;
}

interface CacheWillUpdatePluginContext {
    readonly request: Request;
    readonly response: Response;
}

interface CacheDidUpdatePluginContext {
    readonly cacheName: string;
    readonly request: Request;
    readonly oldResponse: Response;
    readonly newResponse: Response;
}

interface CacheResponseWillBeUsedPluginContext {
    readonly cacheName: string;
    readonly request: Request;
    readonly matchOptions: any;
    readonly cachedResponse: Response;
}

interface RequestWillFetchPluginContext {
    readonly request: Request;
}

interface FetchDidFailPluginContext {
    readonly originalRequest: Request;
    readonly request: Request;
    readonly error: Error;
}

/**
 * ===== WorkboxNamespace =====
 */

/**
 * A ModulePathCallback function can be used to modify the modify the where Workbox modules are loaded.
 * @param {string} moduleName - The name of the module to load (i.e. 'workbox-core', 'workbox-precaching' etc.).
 * @param {boolean} debug - When true, dev builds should be loaded, otherwise load prod builds.
 * @returns {string} This callback should return a path of module. This will be passed to importScripts().
 */
type ModulePathCallback = (moduleName: string, debug: boolean) => string;

interface IConfigOptions {
    /**
     * If true, dev builds are using, otherwise prod builds are used. By default, prod is used unless on localhost.
     */
    debug: boolean;

    /**
     * To avoid using the CDN with workbox-sw set the path prefix of where modules should be loaded from. For example modulePathPrefix: '/third_party/workbox/v3.0.0/'.
     */
    modulePathPrefix: string;

    /**
     * If defined, this callback will be responsible for determining the path of each workbox module.
     */
    modulePathCb: ModulePathCallback;
}

declare class WorkboxNamespace {
    static readonly backgroundSync: typeof BackgroundSyncNamespace;
    static readonly broadcastUpdate: typeof BroadcastUpdateNamespace;
    static readonly cacheableResponse: typeof CacheableResponseNamespace;
    static readonly core: typeof CoreNamespace;
    static readonly expiration: typeof ExpirationNamespace;
    static readonly googleAnalytics: typeof GoogleAnalyticsNamespace;
    static readonly precaching: typeof PrecachingNamespace;
    static readonly rangeRequests: typeof RangeRequestsNamespace;
    static readonly routing: typeof RoutingNamespace;
    static readonly strategies: typeof StrategiesNamespace;
    static readonly streams: typeof StreamsNamespace;

    /**
     * Claim any currently available clients once the service worker becomes active. This is normally used in conjunction with skipWaiting().
     */
    static clientsClaim (): void;

    /**
     * Load a Workbox module by passing in the appropriate module name.
     * This is not generally needed unless you know there are modules that are dynamically used and you want to safe guard use of the module while the user may be offline.
     * @param {string} moduleName
     */
    static loadModule (moduleName: string): void;

    /**
     * Updates the configuration options. You can specify whether to treat as a debug build and whether to use a CDN or a specific path when importing other workbox-modules
     * @param {Partial<IConfigOptions>} config
     */
    static setConfig (config?: Partial<IConfigOptions>): void;

    /**
     * Force a service worker to become active, instead of waiting. This is normally used in conjunction with clientsClaim().
     */
    static skipWaiting (): void;
}

export = WorkboxNamespace;
