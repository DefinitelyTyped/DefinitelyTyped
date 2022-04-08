// Type definitions for @wordpress/api-fetch 3.2
// Project: https://github.com/WordPress/gutenberg/tree/master/packages/api-fetch/README.md
// Definitions by: Derek Sifford <https://github.com/dsifford>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.6

export interface APIFetchOptions extends RequestInit {
    /**
     * Shorthand to be used in place of url, appended to the REST API root URL
     * for the current site.
     */
    path?: string;
    /**
     * Absolute URL to the endpoint from which to fetch.
     */
    url?: string;
    /**
     * Unlike `fetch`, the `Promise` return value of `apiFetch` will resolve to the
     * parsed JSON result. Disable this behavior by passing `parse` as `false`.
     *
     * @defaultValue true
     */
    parse?: boolean;
    /**
     * Shorthand to be used in place of body, accepts an object value to be
     * stringified to JSON.
     */
    data?: object;
}

export type Middleware = (options: APIFetchOptions, next: (options: APIFetchOptions) => Promise<any>) => Promise<any>;

declare namespace apiFetch {
    function use(middleware: Middleware): void;
    /**
     * The `api-fetch` package uses `window.fetch` for making the requests but you
     * can use a custom fetch handler by using the `setFetchHandler` method. The
     * custom fetch handler will receive the `options` passed to the `apiFetch`
     * calls.
     */
    function setFetchHandler(handler: (options: APIFetchOptions) => PromiseLike<any>): void;

    //
    // Built-in middleware
    //

    /**
     * The function returned by `createNonceMiddleware` includes a `nonce` property
     * corresponding to the actively used nonce. You may also assign to this
     * property if you have a fresh nonce value to use.
     */
    function createNonceMiddleware(nonce: string): Middleware;
    function createPreloadingMiddleware(data: Record<string, any>): Middleware;
    function createRootURLMiddleware(rootUrl: string): Middleware;
    const fetchAllMiddleware: Middleware;
}

declare function apiFetch(options: APIFetchOptions & { parse: false }): Promise<Response>;
declare function apiFetch<T = unknown>(options: APIFetchOptions): Promise<T>; // tslint:disable-line no-unnecessary-generics
export default apiFetch;
