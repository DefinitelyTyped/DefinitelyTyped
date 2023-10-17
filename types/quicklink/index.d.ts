export {};

/**
 * A type union of the passed type and an `ReadonlyArray` of that type.
 */
type MaybeReadonlyArray<T> = T | ReadonlyArray<T>;

interface ListenOptions {
    /**
     * Whether to switch from the default prefetching mode to the prerendering mode for the links inside the viewport.
     *
     * **Note:** The prerendering mode (when this option is set to `true`) will fallback to the prefetching mode if the
     * browser does not support prerender.
     *
     * Defaults to `false`.
     */
    prerender: boolean;
    /**
     * The _amount of time_ each link needs to stay inside the viewport before being prefetched, in milliseconds.
     *
     * Defaults to `0`.
     */
    delay: number;
    /**
     * The DOM element to observe for in-viewport links to prefetch.
     *
     * Defaults to `document.body`.
     */
    el: Element;
    /**
     * The _total_ requests that can be prefetched while observing the `options.el` container.
     *
     * Defaults to `Infinity`.
     */
    limit: number;
    /**
     * The _area percentage_ of each link that must have entered the viewport to be fetched, in its decimal form (e.g.
     * 0.25 = 25%).
     *
     * Defaults to `0`.
     */
    threshold: number;
    /**
     * The _concurrency limit_ for simultaneous requests while observing the `options.el` container.
     *
     * Defaults to `Infinity`.
     */
    throttle: number;
    /**
     * The `requestIdleCallback` timeout, in milliseconds.
     *
     * **Note:** The browser must be idle for the configured duration before prefetching.
     *
     * Defaults to `2000`.
     */
    timeout: number;
    /**
     * A function used for specifying a `timeout` delay.
     *
     * This can be swapped out for a custom function like
     * [networkIdleCallback](https://github.com/pastelsky/network-idle-callback) (see demos).
     *
     * By default, this uses
     * [`requestIdleCallback`](https://developer.mozilla.org/docs/Web/API/Window/requestIdleCallback) or the
     * embedded polyfill.
     */
    timeoutFn: (callback: () => void, options: { timeout?: number }) => number;
    /**
     * Whether or not the URLs within the `options.el` container should be treated as high priority.
     *
     * When `true`, quicklink will attempt to use the `fetch()` API if supported (rather than `link[rel=prefetch]`).
     *
     * Defaults to `false`.
     */
    priority: boolean;
    /**
     * A static array of URL hostnames that are allowed to be prefetched.
     *
     * Defaults to the same domain origin, which prevents _any_ cross-origin requests.
     *
     * **Important:** An empty array (`[]`) allows ***all origins*** to be prefetched.
     */
    origins: ReadonlyArray<string> | true;
    /**
     * Determine if a URL should be prefetched.
     *
     * When a `RegExp` tests positive, a `Function` returns `true`, or an `Array` contains the string, then the URL is _not_ prefetched.
     *
     * **Note:** An `Array` may contain `String`, `RegExp`, or `Function` values.
     *
     * **Important:** This logic is executed _after_ origin matching!
     *
     * Defaults to `[]`.
     */
    ignores:
        | RegExp
        | ((url: string, el: Element) => boolean)
        | ReadonlyArray<string | RegExp | ((url: string, el: Element) => boolean)>;
    /**
     * An optional error handler that will receive any errors from prefetched requests.
     *
     * By default, these errors are silently ignored.
     */
    onError: (error: unknown) => void;
    /**
     * An optional function to generate the URL to prefetch. It receives an
     * [Element](https://developer.mozilla.org/docs/Web/API/Element) as the argument.
     */
    hrefFn: (el: Element) => string;
}

/**
 * Prefetches an array of URLs if the user's effective connection type and data-saver preferences suggests it would be
 * useful. By default, looks at in-viewport links for `document`. Can also work off a supplied DOM element or static
 * array of URLs.
 *
 * A "reset" function is returned, which will empty the active `IntersectionObserver` and the cache of URLs that have
 * already been prefetched or prerendered. This can be used between page navigations and/or when significant DOM
 * changes have occurred.
 */
export function listen(options?: Partial<ListenOptions>): () => void;
/**
 * Prefetches a given URL with an optional preferred fetch priority.
 *
 * **Important:** You much `catch` you own request error(s).
 *
 * @param urls       One or many URLs to be prefetched. **Note:** Each `url` value is resolved from the current
 *                   location.
 * @param isPriority Whether or not the URL(s) should be treated as "high priority" targets. By default, calls to
 *                   `prefetch()` are low priority. **Note:** This behaves identically to `listen()`'s `priority`
 *                   option.
 */
export function prefetch(urls: MaybeReadonlyArray<string>, isPriority?: boolean): Promise<unknown[]>;
/**
 * Prerenders a given URL.
 *
 * **Important:** You much `catch` you own request error(s).
 *
 * @param urls       One or many URLs to be prerendered. **Note:** As prerendering using Speculative Rules API only
 *                   supports same-origin at this point, only same-origin urls are accepted. Any non same-origin urls
 *                   will return a rejected Promise.
 */
export function prerender(urls: MaybeReadonlyArray<string>): Promise<void>;

export as namespace quicklink;
