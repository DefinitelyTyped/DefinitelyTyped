// Type definitions for workbox-sw 4.2
// Project: https://github.com/GoogleChrome/workbox
// Definitions by: Frederik Wessberg <https://github.com/wessberg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

/**
 * ===== BroadcastCacheUpdate =====
 */

interface BroadcastCacheUpdateOptions {
	/**
	 * The name that will be used when creating the `BroadcastChannel`,
	 * which defaults to 'workbox' (the channel name used by the `workbox-window` package).
	 */
	channelName: string;

	/**
	 * A list of headers that will be used to determine whether the responses differ.
	 */
	headersToCheck: string[];

	/**
	 * The amount of time to wait for a ready message from the window on navigation requests
	 * before sending the update.
	 */
	deferNoticationTimeout: number;
}

interface NotifyIfUpdatedOptions {
	/**
	 * Cached response to compare.
	 */
	oldResponse: Response;

	/**
	 * Possibly updated response to compare.
	 */
	newResponse: Response;

	/**
	 * The URL of the request.
	 */
	url: string;

	/**
	 * Name of the cache the responses belong to. This is included in the broadcast message.
	 */
	cacheName: string;

	/**
	 * An optional event that triggered this possible cache update.
	 */
	event?: Event;
}

/**
 * Uses the [Broadcast Channel API]{@link https://developers.google.com/web/updates/2016/09/broadcastchannel}
 * to notify interested parties when a cached response has been updated.
 * In browsers that do not support the Broadcast Channel API, the instance
 * falls back to sending the update via `postMessage()` to all window clients.
 *
 * For efficiency's sake, the underlying response bodies are not compared;
 * only specific response headers are checked.
 */
declare class BroadcastCacheUpdate {
	/**
	 * Compare two [Responses](https://developer.mozilla.org/en-US/docs/Web/API/Response) and send a message via the
	 * {@link https://developers.google.com/web/updates/2016/09/broadcastchannel|Broadcast Channel API}
	 * if they differ.
	 * Neither of the Responses can be {@link http://stackoverflow.com/questions/39109789|opaque}.
	 *
	 * @param {NotifyIfUpdatedOptions} options
	 * @returns {Promise<void>} Resolves once the update is sent.
	 */
	notifyIfUpdated (options: NotifyIfUpdatedOptions): Promise<void>;
}

/**
 * Construct a BroadcastCacheUpdate instance with a specific channelName to broadcast messages on
 */
interface BroadcastCacheUpdateConstructor {
	/**
	 * Construct a BroadcastCacheUpdate instance with a specific `channelName` to
	 * broadcast messages on
	 * @param {Partial<BroadcastCacheUpdateOptions>} options
	 * @return {BroadcastCacheUpdate}
	 */
	new (options?: Partial<BroadcastCacheUpdateOptions>): BroadcastCacheUpdate;
}

/**
 * ===== CacheableResponse =====
 */

interface CacheableResponseOptions {
	/**
	 * One or more status codes that a `Response` can have and be considered cacheable.
	 */
	statuses: number[];
	/**
	 * A mapping of header names and expected values that a `Response` can have and be considered cacheable.
	 * If multiple headers are provided, only one needs to be present.
	 */
	headers: Record<string, string>;
}

/**
 * This class allows you to set up rules determining what status codes and/or headers need to be present in order for a
 * [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) to be considered cacheable.
 */
declare class CacheableResponse {
	/**
	 * Checks a response to see whether it's cacheable or not, based on this object's configuration.
	 * @param {Response} response - The response whose cacheability is being checked.
	 * @returns {boolean} `true` if the `Response` is cacheable, and `false` otherwise.
	 */
	isResponseCacheable (response: Response): boolean;
}

interface CacheableResponseConstructor {
	/**
	 * To construct a new CacheableResponse instance you must provide at least
	 * one of the `config` properties.
	 *
	 * If both `statuses` and `headers` are specified, then both conditions must
	 * be met for the `Response` to be considered cacheable.
	 * @param {Partial<CacheableResponseOptions>} options
	 * @return {CacheableResponse}
	 */
	new (options: Partial<CacheableResponseOptions>): CacheableResponse;
}

/**
 * ===== CacheExpiration =====
 */

interface CacheExpirationOptions {
	/**
	 * The maximum number of entries to cache.
	 * Entries used the least will be removed as the maximum is reached.
	 */
	maxEntries: number;

	/**
	 * The maximum age of an entry before it's treated as stale and removed.
	 */
	maxAgeSeconds: number;
}

/**
 * The `CacheExpiration` class allows you define an expiration and / or limit on the number of responses
 * stored in a [`Cache`](https://developer.mozilla.org/en-US/docs/Web/API/Cache).
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
	 *
	 * Note: This method will not remove the cached entry, call
	 * `expireEntries()` to remove indexedDB and Cache entries.
	 * @param {string} url
	 * @returns {Promise<boolean>}
	 */
	isURLExpired (url: string): Promise<boolean>;

	/**
	 * Update the timestamp for the given URL. This ensures the when
	 * removing entries based on maximum entries, most recently used
	 * is accurate or when expiring, the timestamp is up-to-date.
	 * @param {string} url
	 * @returns {Promise<void>}
	 */
	updateTimestamp (url: string): Promise<void>;

	/**
	 * Removes the IndexedDB object store used to keep track of
	 * cache expiration metadata.
	 * @return {Promise<void>}
	 */
	delete (): Promise<void>;
}

interface CacheExpirationConstructor {
	/**
	 * To construct a new CacheExpiration instance you must provide at least
	 * one of the `config` properties.
	 * @param {string} cacheName - Name of the cache to apply restrictions to.
	 * @param {Partial<CacheExpirationOptions>} config
	 * @return {CacheExpiration}
	 */
	new (cacheName: string, config: Partial<CacheExpirationOptions>): CacheExpiration;
}

/**
 * ===== Strategies =====
 */

interface CacheStrategyHandleOptions {
	/**
	 * The request to run this strategy for.
	 */
	request: Request;

	/**
	 * The event that triggered the request.
	 */
	event: FetchEvent;
}

interface CacheStrategyMakeRequestOptions {
	/**
	 * Either a [`Request`]{@link https://developer.mozilla.org/en-US/docs/Web/API/Request} object,
	 * or a string URL, corresponding to the request to be made.
	 */
	request: Request|string;

	/**
	 * If provided, `event.waitUntil()` will
	 * be called automatically to extend the service worker's lifetime.
	 */
	event?: FetchEvent;
}

declare class CacheStrategy {
	/**
	 * This method will perform a request strategy and follows an API that will work with the Workbox Router.
	 * @param {CacheStrategyHandleOptions} input
	 * @returns {Promise<Response>}
	 */
	handle (input: CacheStrategyHandleOptions): Promise<Response>;

	/**
	 * This method can be used to perform a make a standalone request outside the
	 * context of the Workbox Router.
	 *
	 * See "[Advanced Recipes](https://developers.google.com/web/tools/workbox/guides/advanced-recipes#make-requests)"
	 * for more usage information.
	 * @param {CacheStrategyMakeRequestOptions} input
	 * @returns {Promise<Response>}
	 */
	makeRequest (input: CacheStrategyMakeRequestOptions): Promise<Response>;
}

/**
 * ===== CacheOnly strategy =====
 */

interface CacheOnlyOptions {
	/**
	 * Cache name to store and retrieve requests. Defaults to cache names provided by workbox-core.
	 */
	cacheName: string;
	/**
	 * [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
	 * to use in conjunction with this caching strategy.
	 */
	plugins: Plugin[];

	/**
	 * [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
	 */
	matchOptions: CacheQueryOptions;
}

/**
 *  An implementation of a
 * [cache-only]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-only}
 * request strategy.
 *
 * This class is useful if you want to take advantage of any
 * [Workbox plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}.
 *
 * If there is no cache match, this will throw a `WorkboxError` exception.
 */
declare class CacheOnly extends CacheStrategy {
}

interface CacheOnlyConstructor {
	/**
	 * Instantiates a new CacheOnly strategy
	 * @param {Partial<CacheOnlyOptions>} options
	 * @return {CacheOnly}
	 */
	new (options?: Partial<CacheOnlyOptions>): CacheOnly;
}

/**
 * ===== CacheFirst strategy =====
 */

interface CacheFirstOptions extends CacheOnlyOptions {
	/**
	 * Values passed along to the
	 * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
	 */
	fetchOptions: RequestInit;
}

/**
 * An implementation of a [cache-first]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-falling-back-to-network}
 * request strategy.
 *
 * A cache first strategy is useful for assets that have been revisioned,
 * such as URLs like `/styles/example.a8f5f1.css`, since they
 * can be cached for long periods of time.
 *
 * If the network request fails, and there is no cache match, this will throw
 * a `WorkboxError` exception.
 */
declare class CacheFirst extends CacheStrategy {
}

interface CacheFirstConstructor {
	/**
	 * Instantiates a new CacheFirst strategy
	 * @param {Partial<CacheFirstOptions>} options
	 * @return {CacheFirst}
	 */
	new (options?: Partial<CacheFirstOptions>): CacheFirst;
}

/**
 * ===== NetworkOnly strategy =====
 */

interface NetworkOnlyOptions extends CacheFirstOptions {
}

/**
 * An implementation of a
 * [network-only]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#network-only}
 * request strategy.
 *
 * This class is useful if you want to take advantage of any
 * [Workbox plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}.
 *
 * If the network request fails, this will throw a `WorkboxError` exception.
 */
declare class NetworkOnly extends CacheStrategy {
}

interface NetworkOnlyConstructor {
	/**
	 * Instantiates a new NetworkOnly strategy
	 * @param {Partial<NetworkOnlyOptions>} options
	 * @return {NetworkOnly}
	 */
	new (options?: Partial<NetworkOnlyOptions>): NetworkOnly;
}

/**
 * ===== NetworkFirst strategy =====
 */

interface NetworkFirstOptions extends CacheFirstOptions {
	/**
	 * If set, any network requests
	 * that fail to respond within the timeout will fallback to the cache.
	 */
	networkTimeoutSeconds: number;
}

/**
 * An implementation of a
 * [network first]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#network-falling-back-to-cache}
 * request strategy.
 *
 * By default, this strategy will cache responses with a 200 status code as
 * well as [opaque responses]{@link https://developers.google.com/web/tools/workbox/guides/handle-third-party-requests}.
 * Opaque responses are are cross-origin requests where the response doesn't
 * support [CORS]{@link https://enable-cors.org/}.
 *
 * If the network request fails, and there is no cache match, this will throw
 * a `WorkboxError` exception.
 */
declare class NetworkFirst extends CacheStrategy {
}

interface NetworkFirstConstructor {
	/**
	 * Instantiates a new NetworkFirst strategy
	 * @param {Partial<NetworkFirstOptions>} options
	 * @return {NetworkFirst}
	 */
	new (options?: Partial<NetworkFirstOptions>): NetworkFirst;
}

/**
 * ===== StaleWhileRevalidate strategy =====
 */

interface StaleWhileRevalidateOptions extends CacheFirstOptions {
}

/**
 * An implementation of a
 * [stale-while-revalidate]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#stale-while-revalidate}
 * request strategy.
 *
 * Resources are requested from both the cache and the network in parallel.
 * The strategy will respond with the cached version if available, otherwise
 * wait for the network response. The cache is updated with the network response
 * with each successful request.
 *
 * By default, this strategy will cache responses with a 200 status code as
 * well as [opaque responses]{@link https://developers.google.com/web/tools/workbox/guides/handle-third-party-requests}.
 * Opaque responses are are cross-origin requests where the response doesn't
 * support [CORS]{@link https://enable-cors.org/}.
 *
 * If the network request fails, and there is no cache match, this will throw
 * a `WorkboxError` exception.
 */
declare class StaleWhileRevalidate extends CacheStrategy {
}

interface StaleWhileRevalidateConstructor {
	/**
	 * Instantiates a new StaleWhileRevalidate strategy
	 * @param {Partial<StaleWhileRevalidateOptions>} options
	 * @return {StaleWhileRevalidate}
	 */
	new (options?: Partial<StaleWhileRevalidateOptions>): StaleWhileRevalidate;
}

/**
 * ===== MatchCallback =====
 */

interface MatchContext extends URLContext {
	/**
	 * The service workers' fetch event.
	 */
	event: FetchEvent;
}

/**
 * To signify a match, return anything other than null. Return null if the route shouldn't match.
 */
type MatchCallback = (context: MatchContext) => {}|null;

/**
 * ===== HandlerCallback =====
 */

interface HandlerContext extends MatchContext {
	/**
	 * Parameters returned by the Route's match callback function. This will be undefined if nothing was returned.
	 */
	params?: {};
}

/**
 * The "handler" callback is called when a service worker's fetch event has been matched by a Route. This callback should return a Promise that resolves with a Response.
 * If a value is returned by the match callback it will be passed in as the context.params argument.
 */
type HandlerCallback = CacheStrategy|((context: HandlerContext) => Promise<Response>);

/**
 * ===== NavigationRoute =====
 */

interface NavigationRouteOptions {
	/**
	 * If any of these patterns match,
	 * the route will not handle the request (even if a whitelist RegExp matches).
	 */
	blacklist: RegExp[];

	/**
	 * If any of these patterns match the URL's pathname and search parameter,
	 * the route will handle the request (assuming the blacklist doesn't match).
	 */
	whitelist: RegExp[];
}

/**
 * NavigationRoute makes it easy to create a Route that matches for browser
 * [navigation requests]{@link https://developers.google.com/web/fundamentals/primers/service-workers/high-performance-loading#first_what_are_navigation_requests}.
 *
 * It will only match incoming Requests whose
 * [`mode`]{@link https://fetch.spec.whatwg.org/#concept-request-mode}
 * is set to `navigate`.
 *
 * You can optionally only apply this route to a subset of navigation requests
 * by using one or both of the `blacklist` and `whitelist` parameters.
 */
declare class NavigationRoute {
}

interface NavigationRouteConstructor {
	/**
	 * If both `blacklist` and `whitelist` are provided, the `blacklist` will
	 * take precedence and the request will not match this route.
	 *
	 * The regular expressions in `whitelist` and `blacklist`
	 * are matched against the concatenated
	 * [`pathname`]{@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/pathname}
	 * and [`search`]{@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/search}
	 * portions of the requested URL.
	 * @param {HandlerCallback} handler
	 * @param {Partial<NavigationRouteOptions>} options
	 * @returns {NavigationRoute}
	 */
	new (handler: HandlerCallback, options: Partial<NavigationRouteOptions>): NavigationRoute;
}

/**
 * ===== BroadcastUpdatePlugin =====
 */

/**
 * This plugin will automatically broadcast a message whenever a cached response is updated.
 */
declare class BroadcastUpdatePlugin {
}

interface BroadcastUpdatePluginConstructor {
	/**
	 * Construct a BroadcastCacheUpdate instance with the passed options and
	 * calls its `notifyIfUpdated()` method whenever the plugin's
	 * `cacheDidUpdate` callback is invoked.
	 * @param {Partial<BroadcastCacheUpdateOptions>} options
	 * @return {BroadcastUpdatePlugin}
	 */
	new (options?: Partial<BroadcastCacheUpdateOptions>): BroadcastUpdatePlugin;
}

/**
 * ===== RangeRequestsPlugin =====
 */

/**
 * The range request plugin makes it easy for a request with a 'Range' header to
 * be fulfilled by a cached response.
 *
 * It does this by intercepting the `cachedResponseWillBeUsed` plugin callback
 * and returning the appropriate subset of the cached response body.
 */
declare class RangeRequestsPlugin {
}

interface RangeRequestsPluginConstructor {
	/**
	 * Instantiates a new RangeRequestsPlugin
	 * @return {RangeRequestsPlugin}
	 */
	new (): RangeRequestsPlugin;
}

/**
 * ===== CacheableResponsePlugin =====
 */

/**
 * A class implementing the `cacheWillUpdate` lifecycle callback. This makes it
 * easier to add in cacheability checks to requests made via Workbox's built-in
 * strategies.
 */
declare class CacheableResponsePlugin {
}

interface CacheableResponsePluginConstructor {
	/**
	 * To construct a new cacheable response Plugin instance you must provide at
	 * least one of the `config` properties.
	 *
	 * If both `statuses` and `headers` are specified, then both conditions must
	 * be met for the `Response` to be considered cacheable.
	 * @param {Partial<CacheableResponseOptions>} config
	 * @return {CacheableResponsePlugin}
	 */
	new (config: Partial<CacheableResponseOptions>): CacheableResponsePlugin;
}

/**
 * ===== BackgroundSyncPlugin =====
 */

/**
 * A class implementing the `fetchDidFail` lifecycle callback. This makes it
 * easier to add failed requests to a background sync Queue.
 */
declare class BackgroundSyncPlugin {
}

interface BackgroundSyncPluginConstructor {
	/**
	 * Instantiates a new BackgroundSyncPlugin
	 * @param {*} queueArgs - Args to forward to the composed Queue instance.
	 * @return {BackgroundSyncPlugin}
	 */
	new (...queueArgs: any[]): BackgroundSyncPlugin;
}

/**
 * ===== ExpirationPlugin =====
 */

interface CacheExpirationPluginOptions extends CacheExpirationOptions {
	/**
	 * Whether to opt this cache in to automatic deletion
	 * if the available storage quota has been exceeded.
	 */
	purgeOnQuotaError: boolean;
}

/**
 * This plugin can be used in the Workbox APIs to regularly enforce a
 * limit on the age and / or the number of cached requests.
 *
 * Whenever a cached request is used or updated, this plugin will look
 * at the used Cache and remove any old or extra requests.
 *
 * When using `maxAgeSeconds`, requests may be used *once* after expiring
 * because the expiration clean up will not have occurred until *after* the
 * cached request has been used. If the request has a "Date" header, then
 * a light weight expiration check is performed and the request will not be
 * used immediately.
 *
 * When using `maxEntries`, the last request to be used will be the request
 * that is removed from the Cache.
 */
declare class ExpirationPlugin {
	/**
	 * This is a helper method that performs two operations:
	 *
	 * - Deletes *all* the underlying Cache instances associated with this plugin
	 * instance, by calling caches.delete() on your behalf.
	 * - Deletes the metadata from IndexedDB used to keep track of expiration
	 * details for each Cache instance.
	 *
	 * When using cache expiration, calling this method is preferable to calling
	 * `caches.delete()` directly, since this will ensure that the IndexedDB
	 * metadata is also cleanly removed and open IndexedDB instances are deleted.
	 *
	 * Note that if you're *not* using cache expiration for a given cache, calling
	 * `caches.delete()` and passing in the cache's name should be sufficient.
	 * There is no Workbox-specific method needed for cleanup in that case.
	 * @return {Promise<void>}
	 */
	deleteCacheAndMetadata(): Promise<void>;
}

interface ExpirationPluginConstructor {
	/**
	 * Instantiates a new ExpirationPlugin
	 * @param {Partial<CacheExpirationPluginOptions>} config
	 * @return {ExpirationPlugin}
	 */
	new (config: Partial<CacheExpirationPluginOptions>): ExpirationPlugin;
}

/**
 * ===== ExpirationPlugin =====
 */

type Plugin = BroadcastUpdatePlugin|RangeRequestsPlugin|CacheableResponsePlugin|BackgroundSyncPlugin|ExpirationPlugin|WorkboxPlugin;

/**
 * ===== BackgroundSync =====
 */

interface StorableRequestOptions {
	url: string;

	/**
	 * See: https://fetch.spec.whatwg.org/#requestinit
	 */
	requestInit: RequestInit;
}

/**
 *  A class to make it easier to serialize and de-serialize requests so they can be stored in IndexedDB.
 *  @private
 */
declare class StorableRequest {
	/**
	 * Returns a deep clone of the instances `_requestData` object.
	 * @private
	 * @return {StorableRequestOptions}
	 */
	toObject (): StorableRequestOptions;

	/**
	 * Converts this instance to a Request.
	 * @private
	 * @return {Request}
	 */
	toRequest (): Request;

	/**
	 * Creates and returns a deep clone of the instance.
	 * @private
	 * @return {StorableRequest}
	 */
	clone (): StorableRequest;
}

/**
 * ===== PrecacheController =====
 */

interface CleanupResult {
	/**
	 * List of URLs that were deleted from the precache cache.
	 */
	deletedCacheRequests: string[];
	/**
	 * List of URLs that were deleted from the precache cache.
	 */
	deletedRevisionDetails: string[];
}

interface InstallOptions {
	/**
	 * The install event (if needed).
	 */
	event: Event;

	/**
	 * Plugins to be used for fetching and caching during install.
	 */
	plugins: Plugin[];
}

interface PrecacheEntry {
	url: string;
	revision: string;
}

interface InstallResult {
	/**
	 * List of entries supplied for precaching that were precached.
	 */
	updatedEntries: (string|PrecacheEntry)[];

	/**
	 * List of entries supplied for precaching that were already precached.
	 */
	notUpdatedEntries: (string|PrecacheEntry)[];
}

/**
 * Performs efficient precaching of assets.
 */
declare class PrecacheController {
	/**
	 * Deletes assets that are no longer present in the current precache manifest.
	 * Call this method from the service worker activate event.
	 * @returns {Promise<CleanupResult>}
	 */
	activate (): Promise<CleanupResult>;

	/**
	 * This method will add items to the precache list, removing duplicates
	 * and ensuring the information is valid.
	 * @param {(string | PrecacheEntry)[]} entries - Array of entries to precache.
	 */
	addToCacheList (entries: (string|PrecacheEntry)[]): void;

	/**
	 * Returns a mapping of a precached URL to the corresponding cache key, taking
	 * into account the revision information for the URL.
	 *
	 * @returns {Map<string, string>} A URL to cache key mapping.
	 */
	getURLsToCacheKeys(): Map<string, string>;

	/**
	 * Returns the cache key used for storing a given URL. If that URL is
	 * unversioned, like `/index.html', then the cache key will be the original
	 * URL with a search parameter appended to it.
	 *
	 * @param {string} url A URL whose cache key you want to look up.
	 * @returns {string} The versioned URL that corresponds to a cache key
	 * for the original URL, or undefined if that URL isn't precached.
	 */
	getCacheKeyForURL(url: string): string;

	/**
	 * Returns a list of all the URLs that have been precached by the current
	 * service worker.
	 * @returns {string[]} An array of URLs.
	 */
	getCachedUrls (): string[];

	/**
	 * Precaches new and updated assets. Call this method from the service worker
	 * install event.
	 * @param {Partial<InstallOptions>} options
	 * @returns {Promise<InstallResult>}
	 */
	install (options?: Partial<InstallOptions>): Promise<InstallResult>;
}

interface PrecacheControllerConstructor {
	/**
	 * Create a new PrecacheController.
	 * @param {string} cacheName - An optional name for the cache, to override the default precache name.
	 * @return {PrecacheController}
	 */
	new (cacheName?: string): PrecacheController;
}

/**
 * ===== Queue =====
 */

interface QueueOptions {
	/**
	 * A function that gets invoked whenever the 'sync' event fires. The function is invoked with an object
	 * containing the `queue` property (referencing this instance), and you
	 * can use the callback to customize the replay behavior of the queue.
	 * When not set the `replayRequests()` method is called.
	 * Note: if the replay fails after a sync event, make sure you throw an
	 * error, so the browser knows to retry the sync event later.
	 */
	onSync: (queue: Queue) => void;

	/**
	 * The amount of time (in minutes) a request may be retried. After this amount of time has
	 * passed, the request will be deleted from the queue.
	 */
	maxRetentionTime: number;
}

interface QueueEntry {
	/**
	 * The request to store in the queue.
	 */
	request: Request;

	/**
	 * Any metadata you want associated with the
	 * stored request. When requests are replayed you'll have access to this
	 * metadata object in case you need to modify the request beforehand.
	 */
	metadata: any;

	/**
	 * The timestamp (Epoch time in milliseconds) when the request was first added to the queue.
	 * This is used along with `maxRetentionTime` to remove outdated requests.
	 * In general you don't need to set this value, as it's automatically set for you (defaulting to `Date.now()`),
	 * but you can update it if you don't want particular requests to expire.
	 */
	timestamp: number;
}

/**
 * A class to manage storing failed requests in IndexedDB and retrying them
 * later. All parts of the storing and replaying process are observable via
 * callbacks.
 */
declare class Queue {
	readonly name: string;

	/**
	 * Stores the passed request in IndexedDB (with its timestamp and any
	 * metadata) at the end of the queue.
	 * @param {QueueEntry} entry
	 * @returns {Promise<void>}
	 */
	pushRequest (entry: QueueEntry): Promise<void>;

	/**
	 * Stores the passed request in IndexedDB (with its timestamp and any
	 * metadata) at the beginning of the queue.
	 * @param {QueueEntry} entry
	 * @return {Promise<void>}
	 */
	unshiftRequest (entry: QueueEntry): Promise<void>;

	/**
	 * Removes and returns the last request in the queue (along with its
	 * timestamp and any metadata). The returned object takes the form:
	 * `{request, timestamp, metadata}`.
	 * @return {Promise<QueueEntry>}
	 */
	popRequest (): Promise<QueueEntry>;

	/**
	 * Removes and returns the first request in the queue (along with its
	 * timestamp and any metadata). The returned object takes the form:
	 * `{request, timestamp, metadata}`.
	 * @return {Promise<QueueEntry>}
	 */
	shiftRequest (): Promise<QueueEntry>;

	/**
	 * Loops through each request in the queue and attempts to re-fetch it.
	 * If any request fails to re-fetch, it's put back in the same position in
	 * the queue (which registers a retry for the next sync event).
	 * @returns {Promise<void>}
	 */
	replayRequests (): Promise<void>;

	/**
	 * Registers a sync event with a tag unique to this instance.
	 * @return {Promise<void>}
	 */
	registerSync (): Promise<void>;
}

/**
 * Creates an instance of Queue with the given options
 */
interface QueueConstructor {
	/**
	 * Creates an instance of Queue with the given options
	 * @param {string} name - The unique name for this queue. This name must be unique as it's used to register sync events
	 *                        and store requests in IndexedDB specific to this instance. An error will be thrown if a duplicate
	 *                        name is detected.
	 * @param {Partial<QueueOptions>} options
	 * @return {Queue}
	 */
	new (name: string, options?: Partial<QueueOptions>): Queue;
}

/**
 * ===== Route =====
 */

/**
 * A `Route` consists of a pair of callback functions, "match" and "handler".
 * The "match" callback determine if a route should be used to "handle" a
 * request by returning a non-falsy value if it can. The "handler" callback
 * is called when there is a match and should return a Promise that resolves
 * to a `Response`.
 */
declare class Route {
}

interface RouteConstructor {
	/**
	 * Constructor for Route class.
	 * @param {MatchCallback} match - A callback function that determines whether the route matches a given `fetch` event by returning a non-falsy value.
	 * @param {HandlerCallback} handler - A callback function that returns a Promise resolving to a Response.
	 * @param {string} [method="GET"] - The HTTP method to match the Route
	 * @returns {Route}
	 */
	new (match: MatchCallback, handler: HandlerCallback, method?: string): Route;
}

/**
 * ===== RegExpRoute =====
 */

/**
 * RegExpRoute makes it easy to create a regular expression based Route.
 *
 * For same-origin requests the RegExp only needs to match part of the URL. For
 * requests against third-party servers, you must define a RegExp that matches
 * the start of the URL.
 *
 * [See the module docs for info.]{@link https://developers.google.com/web/tools/workbox/modules/workbox-routing}
 */
declare class RegExpRoute extends Route {
}

interface RegExpRouteConstructor {
	/**
	 *
	 * @param {RegExp} regExp - The regular expression to match against URLs.
	 * @param {HandlerCallback} handler - A callback function that returns a Promise resulting in a Response.
	 * @param {string} [method] - The HTTP method to match the Route against.
	 * @returns {RegExpRoute}
	 */

	/**
	 * If the regular expression contains
	 * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
	 * the captured values will be passed to the handler's `params`
	 * argument.
	 * @param {RegExp} regExp - The regular expression to match against URLs.
	 * @param {HandlerCallback} handler - A callback function that returns a Promise resulting in a Response.
	 * @param {string} [method="GET"] - The HTTP method to match the Route against.
	 * @return {RegExpRoute}
	 */
	new (regExp: RegExp, handler: HandlerCallback, method?: string): RegExpRoute;
}

/**
 * ===== Router =====
 */

interface HandleRequestOptions {
	/**
	 * The request to handle (this is usually from a fetch event, but it does not have to be).
	 */
	request: Request;

	/**
	 * The event that triggered the request, if applicable.
	 */
	event?: FetchEvent;
}

interface FindMatchingRouteOptions {
	url: URL;

	/**
	 * The request to match.
	 */
	request: Request;

	/**
	 * The corresponding event (unless N/A).
	 */
	event?: FetchEvent;
}

interface FindMatchingRouteResult {
	route: Route;
	params: URLSearchParams;
}

/**
 * The Router can be used to process a FetchEvent through one or more
 * Routes responding  with a Request if
 * a matching route exists.
 *
 * If no route matches a given a request, the Router will use a "default"
 * handler if one is defined.
 *
 * Should the matching Route throw an error, the Router will use a "catch"
 * handler if one is defined to gracefully deal with issues and respond with a
 * Request.
 *
 * If a request matches multiple routes, the **earliest** registered route will
 * be used to respond to the request.
 */
declare class Router {
	/**
	 * A `Map` of HTTP method name ('GET', etc.) to an array of all the corresponding `Route`
	 * instances that are registered.
	 * @type {Map<string, Route[]>}
	 */
	readonly routes: Map<string, Route[]>;

	/**
	 * Adds a fetch event listener to respond to events when a route matches
	 * the event's request.
	 */
	addFetchListener(): void;

	/**
	 * Adds a message event listener for URLs to cache from the window.
	 * This is useful to cache resources loaded on the page prior to when the
	 * service worker started controlling it.
	 *
	 * The format of the message data sent from the window should be as follows.
	 * Where the `urlsToCache` array may consist of URL strings or an array of
	 * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
	 *
	 * ```
	 * {
	 *   type: 'CACHE_URLS',
	 *   payload: {
	 *     urlsToCache: [
	 *       './script1.js',
	 *       './script2.js',
	 *       ['./script3.js', {mode: 'no-cors'}],
	 *     ],
	 *   },
	 * }
	 * ```
	 */
	addCacheListener (): void;

	/**
	 * Apply the routing rules to a FetchEvent object to get a Response from an
	 * appropriate Route's handler.
	 * @param {HandleRequestOptions} options
	 * @returns {Promise<Response>?} A promise is returned if a registered route can handle the request. If there is no matching route and there's no `defaultHandler`, `undefined` is returned.
	 */
	handleRequest (options: HandleRequestOptions): Promise<Response>|undefined;

	/**
	 * Checks a request and URL (and optionally an event) against the list of
	 * registered routes, and if there's a match, returns the corresponding
	 * route along with any params generated by the match.
	 * @param {FindMatchingRouteOptions} options
	 * @return {Partial<FindMatchingRouteResult>}
	 */
	findMatchingRoute (options: FindMatchingRouteOptions): Partial<FindMatchingRouteResult>;

	/**
	 * Define a default `handler` that's called when no routes explicitly
	 * match the incoming request.
	 *
	 * Without a default handler, unmatched requests will go against the
	 * network as if there were no service worker present.
	 * @param {HandlerCallback} handler -    * @param {workbox.routing.Route~handlerCallback} handler A callback function that returns a Promise resulting in a Response.
	 */
	setDefaultHandler (handler: HandlerCallback): void;

	/**
	 * If a Route throws an error while handling a request, this `handler`
	 * will be called and given a chance to provide a response.
	 * @param {HandlerCallback} handler - A callback function that returns a Promise resulting in a Response.
	 */
	setCatchHandler (handler: HandlerCallback): void;

	/**
	 * Registers a route with the router.
	 * @param {Route} route - The route to register.
	 */
	registerRoute (route: Route): void;

	/**
	 * Unregisters a route with the router.
	 * @param {Route} route - The route to unregister.
	 */
	unregisterRoute (route: Route): void;
}

interface RouterConstructor {
	/**
	 * Initializes a new Router.
	 * @return {Router}
	 */
	new (): Router;
}

/**
 * ===== CoreNamespace =====
 */

interface CacheNames {
	precache: string;
	runtime: string;
	prefix: string;
	suffix: string;
	googleAnalytics: string;
}

/**
 * All of the Workbox service worker libraries use workbox-core for shared code as well as setting default values that need to be shared (like cache names).
 */
declare class CoreNamespace {
	/**
	 * Get the current cache names and prefix/suffix used by Workbox.
	 *
	 * `cacheNames.precache` is used for precached assets,
	 * `cacheNames.googleAnalytics` is used by `workbox-google-analytics` to
	 * store `analytics.js`, and `cacheNames.runtime` is used for everything else.
	 *
	 * `cacheNames.prefix` can be used to retrieve just the current prefix value.
	 * `cacheNames.suffix` can be used to retrieve just the current suffix value.
	 */
	static readonly cacheNames: CacheNames;

	/**
	 * Claim any currently available clients once the service worker
	 * becomes active. This is normally used in conjunction with `skipWaiting()`.
	 */
	static clientsClaim (): void;

	/**
	 * Adds a function to the set of callbacks that will be executed when there's
	 * a quota error.
	 * @param {() => *} callback
	 */
	static registerQuotaErrorCallback (callback: () => any): void;

	/**
	 * Modifies the default cache names used by the Workbox packages.
	 * Cache names are generated as `<prefix>-<Cache Name>-<suffix>`.
	 * @param {Partial<CacheNames>} details
	 */
	static setCacheNameDetails (details: Partial<CacheNames>): void;

	/**
	 * Force a service worker to become active, instead of waiting. This is
	 * normally used in conjunction with `clientsClaim()`.
	 */
	static skipWaiting (): void;
}

/**
 * ===== PrecachingNamespace =====
 */

interface URLContext {
	/**
	 * The request's URL.
	 */
	url: URL;
}

/**
 * The "urlManipulation" callback can be used to determine if there are any additional permutations of a URL that should be used to check against the available precached files.
 * For example, Workbox supports checking for '/index.html' when the URL '/' is provided. This callback allows additional, custom checks.
 * @param {URLContext} context
 * @returns {URL[]} To add additional urls to test, return an Array of URL's. Please note that these should not be Strings, but URL objects.
 */
type UrlManipulation = (context: URLContext) => URL[];

interface RouteOptions {
	/**
	 * The `directoryIndex` will check cache entries for a URLs ending with '/' to see if there is a hit when
	 * appending the `directoryIndex` value.
	 */
	directoryIndex: string|null;

	/**
	 * An array of regex's to remove search params when looking for a cache match.
	 */
	ignoreUrlParametersMatching: RegExp[];

	/**
	 * The `cleanURLs` option will check the cache for the URL with a `.html` added to the end of the end.
	 */
	cleanUrls: boolean;

	/**
	 * This is a function that should take a URL and return an array of
	 * alternative URL's that should be checked for precache matches.
	 */
	urlManipulation: UrlManipulation;
}

/**
 * Most consumers of this module will want to use the precacheAndRoute() method to add assets to the Cache and respond to network requests with these cached assets.
 * If you require finer grained control, you can use the PrecacheController to determine when performed.
 */
declare class PrecachingNamespace {
	/**
	 * Add plugins to precaching.
	 * @param {Plugin[]} newPlugins
	 */
	static addPlugins (newPlugins: Plugin[]): void;

	/**
	 * Add a `fetch` listener to the service worker that will respond to
	 * [network requests]{@link https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Custom_responses_to_requests}
	 * with precached assets.
	 *
	 * Requests for assets that aren't precached, the `FetchEvent` will not be
	 * responded to, allowing the event to fall through to other `fetch` event
	 * listeners.
	 * @param {Partial<RouteOptions>} [route]
	 */
	static addRoute (route?: Partial<RouteOptions>): void;

	/**
	 * Adds an `activate` event listener which will clean up incompatible
	 * precaches that were created by older versions of Workbox.
	 */
	static cleanupOutdatedCaches (): void;

	/**
	 * Takes in a URL, and returns the corresponding URL that could be used to
	 * lookup the entry in the precache.
	 *
	 * If a relative URL is provided, the location of the service worker file will
	 * be used as the base.
	 *
	 * For precached entries without revision information, the cache key will be the
	 * same as the original URL.
	 *
	 * For precached entries with revision information, the cache key will be the
	 * original URL with the addition of a query parameter used for keeping track of
	 * the revision info.
	 * @param {string} url - The URL whose cache key to look up.
	 * @returns {string} The cache key that corresponds to that URL.
	 */
	static getCacheKeyForURL (url: string): string;

	/**
	 * Adds items to the precache list, removing any duplicates and
	 * stores the files in the
	 * "precache cache" when the service
	 * worker installs.
	 *
	 * This method can be called multiple times.
	 *
	 * Please note: This method **will not** serve any of the cached files for you.
	 * It only precaches files. To respond to a network request you call
	 * addRoute().
	 *
	 * If you have a single array of files to precache, you can just call
	 * precacheAndRoute().
	 * @param {(string | PrecacheEntry)[]} entries - Array of entries to precache.
	 */
	static precache (entries: (string|PrecacheEntry)[]): void;

	/**
	 * This method will add entries to the precache list and add a route to
	 * respond to fetch events.
	 *
	 * This is a convenience method that will call precache() and
	 * addRoute() in a single call.
	 * @param {(string | PrecacheEntry)[]} entries - Array of entries to precache.
	 * @param {Partial<RouteOptions>} [options] - see addRoute() options
	 */
	static precacheAndRoute (entries: (string|PrecacheEntry)[], options?: Partial<RouteOptions>): void;

	/**
	 * Performs efficient precaching of assets.
	 */
	static readonly PrecacheController: PrecacheControllerConstructor;
}

/**
 * ===== RoutingNamespace =====
 */

interface RegisterNavigationRouteOptions extends NavigationRouteOptions {
	/**
	 *  Cache name to store and retrieve requests. Defaults to precache cache name provided by `cacheNames`.
	 */
	cacheName: string;
}

declare class RoutingNamespace {
	/**
	 * NavigationRoute makes it easy to create a Route that matches for browser
	 * [navigation requests]{@link https://developers.google.com/web/fundamentals/primers/service-workers/high-performance-loading#first_what_are_navigation_requests}.
	 *
	 * It will only match incoming Requests whose
	 * [`mode`]{@link https://fetch.spec.whatwg.org/#concept-request-mode}
	 * is set to `navigate`.
	 *
	 * You can optionally only apply this route to a subset of navigation requests
	 * by using one or both of the `blacklist` and `whitelist` parameters.
	 */
	static readonly NavigationRoute: NavigationRouteConstructor;

	/**
	 * RegExpRoute makes it easy to create a regular expression based
	 * Route.
	 *
	 * For same-origin requests the RegExp only needs to match part of the URL. For
	 * requests against third-party servers, you must define a RegExp that matches
	 * the start of the URL.
	 *
	 * [See the module docs for info.]{@link https://developers.google.com/web/tools/workbox/modules/workbox-routing}
	 */
	static readonly RegExpRoute: RegExpRouteConstructor;

	/**
	 * Registers a route that will return a precached file for a navigation
	 * request. This is useful for the
	 * [application shell pattern]{@link https://developers.google.com/web/fundamentals/architecture/app-shell}.
	 *
	 * When determining the URL of the precached HTML document, you will likely need
	 * to call `workbox.precaching.getCacheKeyForURL(originalUrl)`, to account for
	 * the fact that Workbox's precaching naming conventions often results in URL
	 * cache keys that contain extra revisioning info.
	 *
	 * This method will generate a NavigationRoute and call Router.registerRoute() on a singleton Router instance.
	 * @param {string} cachedAssetUrl - The cache key to use for the HTML file.
	 * @param {Partial<RegisterNavigationRouteOptions>} [options]
	 * @returns {NavigationRoute} Returns the generated Route.
	 */
	static registerNavigationRoute (cachedAssetUrl: string, options?: Partial<RegisterNavigationRouteOptions>): NavigationRoute;

	/**
	 * Easily register a RegExp, string, or function with a caching
	 * strategy to a singleton Router instance.
	 *
	 * This method will generate a Route for you if needed and
	 * call Router.registerRoute().
	 * @param {string | RegExp | MatchCallback | Route} capture - If the capture param is a `Route`, all other arguments will be ignored.
	 * @param {HandlerCallback} handler - A callback function that returns a Promise resulting in a Response.
	 * @param {string} [method="GET"] - The HTTP method to match the Route against.
	 * @returns {Route} The generated `Route` (Useful for unregistering).
	 */
	static registerRoute (capture: string|RegExp|MatchCallback|Route, handler: HandlerCallback, method?: string): Route;

	/**
	 * A `Route` consists of a pair of callback functions, "match" and "handler".
	 * The "match" callback determine if a route should be used to "handle" a
	 * request by returning a non-falsy value if it can. The "handler" callback
	 * is called when there is a match and should return a Promise that resolves
	 * to a `Response`.
	 */
	static readonly Route: RouteConstructor;

	/**
	 * The Router can be used to process a FetchEvent through one or more
	 * Routes responding  with a Request if
	 * a matching route exists.
	 *
	 * If no route matches a given a request, the Router will use a "default"
	 * handler if one is defined.
	 *
	 * Should the matching Route throw an error, the Router will use a "catch"
	 * handler if one is defined to gracefully deal with issues and respond with a
	 * Request.
	 *
	 * If a request matches multiple routes, the **earliest** registered route will
	 * be used to respond to the request.
	 */
	static readonly Router: RouterConstructor;

	/**
	 * If a Route throws an error while handling a request, this `handler`
	 * will be called and given a chance to provide a response.
	 * @param {HandlerCallback} handler - A callback function that returns a Promise resulting in a Response.
	 */
	static setCatchHandler (handler: HandlerCallback): void;

	/**
	 * Define a default `handler` that's called when no routes explicitly
	 * match the incoming request.
	 *
	 * Without a default handler, unmatched requests will go against the
	 * network as if there were no service worker present.
	 * @param {HandlerCallback} handler - A callback function that returns a Promise resulting in a Response.
	 */
	static setDefaultHandler (handler: HandlerCallback): Promise<Response>;
}

/**
 * ===== StrategiesNamespace =====
 */

interface StrategyOptions {
	/**
	 * Name of cache to use for caching (both lookup and updating).
	 */
	cacheName: string;

	/**
	 * Defining this object will add a cache expiration plugins to this strategy.
	 */
	cacheExpiration: Partial<CacheExpirationOptions>;

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
	 * An implementation of a [cache-first]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-falling-back-to-network}
	 * request strategy.
	 *
	 * A cache first strategy is useful for assets that have been revisioned,
	 * such as URLs like `/styles/example.a8f5f1.css`, since they
	 * can be cached for long periods of time.
	 *
	 * If the network request fails, and there is no cache match, this will throw
	 * a `WorkboxError` exception.
	 */
	static readonly CacheFirst: CacheFirstConstructor;

	/**
	 * An implementation of a
	 * [cache-only]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-only}
	 * request strategy.
	 *
	 * This class is useful if you want to take advantage of any
	 * [Workbox plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}.
	 *
	 * If there is no cache match, this will throw a `WorkboxError` exception.
	 */
	static readonly CacheOnly: CacheOnlyConstructor;

	/**
	 * An implementation of a
	 * [network first]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#network-falling-back-to-cache}
	 * request strategy.
	 *
	 * By default, this strategy will cache responses with a 200 status code as
	 * well as [opaque responses]{@link https://developers.google.com/web/tools/workbox/guides/handle-third-party-requests}.
	 * Opaque responses are are cross-origin requests where the response doesn't
	 * support [CORS]{@link https://enable-cors.org/}.
	 *
	 * If the network request fails, and there is no cache match, this will throw
	 * a `WorkboxError` exception.
	 */
	static readonly NetworkFirst: NetworkFirstConstructor;

	/**
	 * An implementation of a
	 * [network-only]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#network-only}
	 * request strategy.
	 *
	 * This class is useful if you want to take advantage of any
	 * [Workbox plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}.
	 *
	 * If the network request fails, this will throw a `WorkboxError` exception.
	 */
	static readonly NetworkOnly: NetworkOnlyConstructor;

	/**
	 * An implementation of a
	 * [stale-while-revalidate]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#stale-while-revalidate}
	 * request strategy.
	 *
	 * Resources are requested from both the cache and the network in parallel.
	 * The strategy will respond with the cached version if available, otherwise
	 * wait for the network response. The cache is updated with the network response
	 * with each successful request.
	 *
	 * By default, this strategy will cache responses with a 200 status code as
	 * well as [opaque responses]{@link https://developers.google.com/web/tools/workbox/guides/handle-third-party-requests}.
	 * Opaque responses are are cross-origin requests where the response doesn't
	 * support [CORS]{@link https://enable-cors.org/}.
	 *
	 * If the network request fails, and there is no cache match, this will throw
	 * a `WorkboxError` exception.
	 */
	static readonly StaleWhileRevalidate: StaleWhileRevalidateConstructor;

	/**
	 * Instantiates a new CacheFirst strategy
	 * @deprecated use new workbox.strategies.CacheFirst() syntax
	 * @param {Partial<StrategyOptions>} [options]
	 * @returns {HandlerCallback}
	 */
	static cacheFirst (options?: Partial<StrategyOptions>): HandlerCallback;

	/**
	 * Instantiates a new CacheOnly strategy
	 * @deprecated use new workbox.strategies.CacheOnly() syntax
	 * @param {Partial<StrategyOptions>} [options]
	 * @returns {HandlerCallback}
	 */
	static cacheOnly (options?: Partial<StrategyOptions>): HandlerCallback;

	/**
	 * Instantiates a new NetworkFirst strategy
	 * @deprecated use new workbox.strategies.NetworkFirst() syntax
	 * @param {Partial<StrategyOptions>} [options]
	 * @returns {HandlerCallback}
	 */
	static networkFirst (options?: Partial<StrategyOptions>): HandlerCallback;

	/**
	 * Instantiates a new NetworkOnly strategy
	 * @deprecated use new workbox.strategies.NetworkOnly() syntax
	 * @param {Partial<StrategyOptions>} [options]
	 * @returns {HandlerCallback}
	 */
	static networkOnly (options?: Partial<StrategyOptions>): HandlerCallback;

	/**
	 * Instantiates a new StaleWhileRevalidate strategy
	 * @deprecated use new workbox.strategies.StaleWhileRevalidate() syntax
	 * @param {Partial<StrategyOptions>} [options]
	 * @returns {StaleWhileRevalidate}
	 */
	static staleWhileRevalidate (options?: Partial<StrategyOptions>): HandlerCallback;
}

/**
 * ===== StreamsNamespace =====
 */

type StreamSource = Response|ReadableStream|BodyInit;

interface ConcatenateResult {
	done: Promise<StreamSource>;
	stream: ReadableStream;
}

interface ConcatenateToResponseResult {
	done: Promise<StreamSource>;
	response: Response;
}

declare class StreamsNamespace {
	/**
	 * Takes multiple source Promises, each of which could resolve to a Response, a
	 * ReadableStream, or a [BodyInit](https://fetch.spec.whatwg.org/#bodyinit).
	 *
	 * Returns an object exposing a ReadableStream with each individual stream's
	 * data returned in sequence, along with a Promise which signals when the
	 * stream is finished (useful for passing to a FetchEvent's waitUntil()).
	 * @param {Promise<StreamSource>[]} sourcePromises - Array of Promise containing StreamSource
	 * @returns {ConcatenateResult}
	 */
	static concatenate (sourcePromises: Promise<StreamSource>[]): ConcatenateResult;

	/**
	 * Takes multiple source Promises, each of which could resolve to a Response, a
	 * ReadableStream, or a [BodyInit](https://fetch.spec.whatwg.org/#bodyinit),
	 * along with a
	 * [HeadersInit](https://fetch.spec.whatwg.org/#typedefdef-headersinit).
	 *
	 * Returns an object exposing a Response whose body consists of each individual
	 * stream's data returned in sequence, along with a Promise which signals when
	 * the stream is finished (useful for passing to a FetchEvent's waitUntil()).
	 * @param {Promise<StreamSource>[]} sourcePromises - Array of Promise containing StreamSource
	 * @param {HeadersInit} [headersInit] - If there's no `Content-Type` specified, `'text/html'` will be used by default.
	 * @returns {ConcatenateToResponseResult}
	 */
	static concatenateToResponse (sourcePromises: Promise<StreamSource>[], headersInit?: HeadersInit): ConcatenateToResponseResult;

	/**
	 * This is a utility method that determines whether the current browser supports
	 * the features required to create streamed responses. Currently, it checks if
	 * [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream/ReadableStream)
	 * can be created.
	 * @returns {boolean} `true`, if the current browser meets the requirements for streaming responses, and `false` otherwise.
	 */
	static isSupported (): boolean;

	/**
	 * A shortcut to create a strategy that could be dropped-in to Workbox's router.
	 *
	 * On browsers that do not support constructing new `ReadableStream`s, this
	 * strategy will automatically wait for all the `sourceFunctions` to complete,
	 * and create a final response that concatenates their values together.
	 * @param {HandlerCallback[]} sourceFunctions - Each function should return a StreamSource (or a Promise which resolves to one).
	 * @param {HeadersInit} headersInit - If there's no `Content-Type` specified, `'text/html'` will be used by default.
	 * @returns {HandlerCallback}
	 */
	static strategy (sourceFunctions: HandlerCallback[], headersInit?: HeadersInit): HandlerCallback;
}

/**
 * ===== ExpirationNamespace =====
 */

declare class ExpirationNamespace {
	/**
	 * The `CacheExpiration` class allows you define an expiration and / or
	 * limit on the number of responses stored in a [`Cache`](https://developer.mozilla.org/en-US/docs/Web/API/Cache).
	 */
	static readonly CacheExpiration: CacheExpirationConstructor;

	/**
	 * This plugin can be used in the Workbox APIs to regularly enforce a
	 * limit on the age and / or the number of cached requests.
	 *
	 * Whenever a cached request is used or updated, this plugin will look
	 * at the used Cache and remove any old or extra requests.
	 *
	 * When using `maxAgeSeconds`, requests may be used *once* after expiring
	 * because the expiration clean up will not have occurred until *after* the
	 * cached request has been used. If the request has a "Date" header, then
	 * a light weight expiration check is performed and the request will not be
	 * used immediately.
	 *
	 * When using `maxEntries`, the last request to be used will be the request
	 * that is removed from the Cache.
	 */
	static readonly Plugin: ExpirationPluginConstructor;
}

/**
 * ===== BackgroundSyncNamespace =====
 */

declare class BackgroundSyncNamespace {
	/**
	 * A class implementing the `fetchDidFail` lifecycle callback. This makes it
	 * easier to add failed requests to a background sync Queue.
	 */
	static readonly Plugin: BackgroundSyncPluginConstructor;

	/**
	 * A class to manage storing failed requests in IndexedDB and retrying them
	 * later. All parts of the storing and replaying process are observable via
	 * callbacks.
	 */
	static readonly Queue: QueueConstructor;
}

/**
 * ===== GoogleAnalyticsNamespace =====
 */

interface GoogleAnalyticsInitializeOptions {
	/**
	 * The cache name to store and retrieve analytics.js.
	 * Defaults to the cache names provided by `workbox-core`.
	 */
	cacheName: string;

	/**
	 * [Measurement Protocol parameters](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters),
	 * expressed as key/value pairs, to be added to replayed Google Analytics
	 * requests. This can be used to, e.g., set a custom dimension indicating
	 * that the request was replayed.
	 */
	parameterOverrides: Record<string, string>;

	/**
	 * A function that allows you to modify the hit parameters prior to replaying
	 * the hit. The function is invoked with the original hit's URLSearchParams
	 * object as its only argument.
	 * @param {URLSearchParams} params
	 */
	hitFilter (params: URLSearchParams): void;
}

declare class GoogleAnalyticsNamespace {
	/**
	 *
	 * @param {Partial<GoogleAnalyticsInitializeOptions>} options
	 */
	static initialize (options?: Partial<GoogleAnalyticsInitializeOptions>): void;
}

/**
 * ===== NavigationPreloadNamespace =====
 */

declare class NavigationPreloadNamespace {
	/**
	 * If the browser supports Navigation Preload, then this will disable it.
	 */
	static disable (): void;

	/**
	 * If the browser supports Navigation Preload, then this will enable it.
	 * @param {string} [headerValue] - Optionally, allows developers to
	 *                                 [override](https://developers.google.com/web/updates/2017/02/navigation-preload#changing_the_header)
	 *                                 the value of the `Service-Worker-Navigation-Preload` header which will be sent to the server when making
	 *                                 the navigation request.
	 */
	static enable (headerValue?: string): void;

	/**
	 * @return {boolean} Whether or not the current browser supports enabling navigation preload.
	 */
	static isSupported (): boolean;
}

/**
 * ===== CacheableResponseNamespace =====
 */

declare class CacheableResponseNamespace {
	/**
	 * This class allows you to set up rules determining what
	 * status codes and/or headers need to be present in order for a
	 * [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response)
	 * to be considered cacheable.
	 */
	static readonly CacheableResponse: CacheableResponseConstructor;

	/**
	 * A class implementing the `cacheWillUpdate` lifecycle callback. This makes it
	 * easier to add in cacheability checks to requests made via Workbox's built-in
	 * strategies.
	 */
	static readonly Plugin: CacheableResponsePluginConstructor;
}

/**
 * ===== BroadcastUpdateNamespace =====
 */

interface BroadcastUpdateOptions {
	/**
	 * The name of the cache in which the updated `Response` was stored.
	 */
	cacheName: string;

	/**
	 * The URL associated with the updated `Response`.
	 */
	url: string;

	/**
	 * The `BroadcastChannel` to use. If no channel is set or the browser doesn't support the BroadcastChannel
	 * api, then an attempt will be made to `postMessage` each window client.
	 */
	channel?: BroadcastChannel;
}

declare class BroadcastUpdateNamespace {
	/**
	 * Uses the [Broadcast Channel API]{@link https://developers.google.com/web/updates/2016/09/broadcastchannel}
	 * to notify interested parties when a cached response has been updated.
	 * In browsers that do not support the Broadcast Channel API, the instance
	 * falls back to sending the update via `postMessage()` to all window clients.
	 *
	 * For efficiency's sake, the underlying response bodies are not compared;
	 * only specific response headers are checked.
	 */
	static readonly BroadcastCacheUpdate: BroadcastCacheUpdateConstructor;

	/**
	 * Construct a BroadcastCacheUpdate instance with the passed options and
	 * calls its `notifyIfUpdated()` method whenever the plugin's
	 * `cacheDidUpdate` callback is invoked.
	 */
	static readonly Plugin: BroadcastUpdatePluginConstructor;

	/**
	 * You would not normally call this method directly; it's called automatically
	 * by an instance of the {@link BroadcastCacheUpdate} class. It's exposed here
	 * for the benefit of developers who would rather not use the full
	 * `BroadcastCacheUpdate` implementation.
	 *
	 * Calling this will dispatch a message on the provided
	 * {@link https://developers.google.com/web/updates/2016/09/broadcastchannel|Broadcast Channel}
	 * to notify interested subscribers about a change to a cached resource.
	 *
	 * The message that's posted has a formation inspired by the
	 * [Flux standard action](https://github.com/acdlite/flux-standard-action#introduction)
	 * format like so:
	 *
	 * ```
	 * {
	 *   type: 'CACHE_UPDATED',
	 *   meta: 'workbox-broadcast-update',
	 *   payload: {
	 *     cacheName: 'the-cache-name',
	 *     updatedURL: 'https://example.com/'
	 *   }
	 * }
	 * ```
	 *
	 * (Usage of [Flux](https://facebook.github.io/flux/) itself is not at
	 * all required.)
	 * @param {BroadcastUpdateOptions} options
	 * @returns {Promise<void>}
	 */
	static broadCastUpdate (options: BroadcastUpdateOptions): Promise<void>;

	/**
	 * Given two `Response's`, compares several header values to see if they are
	 * the same or not.
	 * @param {Response} firstResponse
	 * @param {Response} secondResponse
	 * @param {string[]} headersToCheck
	 * @return {boolean}
	 */
	static responsesAreSame (firstResponse: Response, secondResponse: Response, headersToCheck: string[]): boolean;
}

/**
 * ===== RangeRequestsNamespace =====
 */

declare class RangeRequestsNamespace {
	/**
	 * Given a `Request` and `Response` objects as input, this will return a
	 * promise for a new `Response`.
	 *
	 * If the original `Response` already contains partial content (i.e. it has
	 * a status of 206), then this assumes it already fulfills the `Range:`
	 * requirements, and will return it as-is.
	 *
	 * @param {Request} request A request, which should contain a Range:
	 * header.
	 * @param {Response} originalResponse A response.
	 * @return {Promise<Response>} Either a `206 Partial Content` response, with
	 * the response body set to the slice of content specified by the request's
	 * `Range:` header, or a `416 Range Not Satisfiable` response if the
	 * conditions of the `Range:` header can't be met.
	 *
	 * @param {Request} request - A request, which should contain a Range: header.
	 * @param {Response} originalResponse - A response.
	 * @returns {Promise<Response>} Either a `206 Partial Content` response, with the response body
	 *                              set to the slice of content specified by the request's `Range:` header,
	 *                              or a `416 Range Not Satisfiable` response if the conditions of the `Range:`
	 *                              header can't be met.
	 */
	static createPartialResponse (request: Request, originalResponse: Response): Promise<Response>;

	/**
	 * The range request plugin makes it easy for a request with a 'Range' header to
	 * be fulfilled by a cached response.
	 *
	 * It does this by intercepting the `cachedResponseWillBeUsed` plugin callback
	 * and returning the appropriate subset of the cached response body.
	 */
	static readonly Plugin: RangeRequestsPluginConstructor;
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
	 * This allows developers to override the default cache key for reads or writes (or both).
	 * @param {CacheKeyWillBeUsedPluginContext} context
	 * @returns {Promise<string|Request>|string|Request}
	 */
	readonly cacheKeyWillBeUsed?: (context: CacheKeyWillBeUsedPluginContext) => Promise<string|Request>|string|Request;

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

	/**
	 * Called when a network request is successful, regardless of what the HTTP status is of the response.
	 * @param {FetchDidSucceedPluginContext}
	 * @returns {Promise<Response>|Response}
	 */
	readonly fetchDidSucceed?: (context: FetchDidSucceedPluginContext) => Promise<Response>|Response;
}

interface CacheWillUpdatePluginContext {
	readonly request: Request;
	readonly response: Response;
}

interface CacheKeyWillBeUsedPluginContext {
	readonly request: Request;
	readonly mode: string;
}

interface CacheDidUpdatePluginContext {
	readonly event: Event;
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

interface FetchDidSucceedPluginContext {
	readonly request: Request;
	readonly response: Response;
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

interface ConfigOptions {
	/**
	 * If true, `dev` builds are used, otherwise `prod` builds are used.
	 * By default, `prod` is used unless on localhost.
	 */
	debug: boolean;

	/**
	 * To avoid using the CDN with `workbox-sw`
	 * set the path prefix of where modules should be loaded from.
	 * For example `modulePathPrefix: '/third_party/workbox/v3.0.0/'`.
	 */
	modulePathPrefix: string;

	/**
	 * If defined,
	 * this callback will be responsible for determining the path of each
	 * workbox module.
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
	static readonly navigationPreload: typeof NavigationPreloadNamespace;
	static readonly precaching: typeof PrecachingNamespace;
	static readonly rangeRequests: typeof RangeRequestsNamespace;
	static readonly routing: typeof RoutingNamespace;
	static readonly strategies: typeof StrategiesNamespace;
	static readonly streams: typeof StreamsNamespace;

	/**
	 * Load a Workbox module by passing in the appropriate module name.
	 *
	 * This is not generally needed unless you know there are modules that are
	 * dynamically used and you want to safe guard use of the module while the
	 * user may be offline.
	 * @param {string} moduleName
	 */
	static loadModule (moduleName: string): void;

	/**
	 * Updates the configuration options. You can specify whether to treat as a
	 * debug build and whether to use a CDN or a specific path when importing
	 * other workbox-modules
	 * @param {Partial<ConfigOptions>} config
	 */
	static setConfig (config?: Partial<ConfigOptions>): void;
}

export = WorkboxNamespace;
