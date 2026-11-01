/**
 * Make a GET request.
 * https://mokapi.io/docs/javascript-api/mokapi-http/get
 * @param url url - Request URL.
 * @param args args - Request arguments.
 * @returns Resulting response.
 * @example
 * get('https://mokapi.io')
 */
export function get(url: string, args?: Args): Response;

/**
 * Make a POST request.
 * https://mokapi.io/docs/javascript-api/mokapi-http/post
 * @param url url - Request URL.
 * @param body body - Request body.
 * @param args args - Request arguments.
 * @returns Resulting response.
 * @example
 * post("https://foo.bar/foo", { "foo":"bar" }, {
 *   headers: { 'Content-Type': "application/json" }
 * })
 */
export function post(url: string, body?: any, args?: Args): Response;

/**
 * Make a PUT request.
 * https://mokapi.io/docs/javascript-api/mokapi-http/put
 * @param url url - Request URL.
 * @param body body - Request body.
 * @param args args - Request arguments.
 * @returns Resulting response.
 * @example
 * post("https://foo.bar/foo", { "foo":"bar" }, {
 *   headers: { 'Content-Type': "application/json" }
 * })
 */
export function put(url: string, body?: any, args?: Args): Response;

/**
 * Make a HEAD request.
 * https://mokapi.io/docs/javascript-api/mokapi-http/head
 * @param url url - Request URL.
 * @param args args - Request arguments.
 * @returns Resulting response.
 * @example
 * head("https://foo.bar/foo")
 */
export function head(url: string, args?: Args): Response;

/**
 * Make a PATCH request.
 * https://mokapi.io/docs/javascript-api/mokapi-http/patch
 * @param url url - Request URL.
 * @param body body - Request body.
 * @param args args - Request arguments.
 * @returns Resulting response.
 * @example
 * patch("https://foo.bar/foo")
 */
export function patch(url: string, body?: any, args?: Args): Response;

/**
 * Make a PATCH request.
 * https://mokapi.io/docs/javascript-api/mokapi-http/delete
 * @param url url - Request URL.
 * @param body body - Request body.
 * @param args args - Request arguments.
 * @returns Resulting response.
 * @example
 * del("https://foo.bar/foo")
 */
export function del(url: string, body?: any, args?: Args): Response;

/**
 * Make an OPTIONS request.
 * https://mokapi.io/docs/javascript-api/mokapi-http/options
 * @param url url - Request URL.
 * @param body body - Request body.
 * @param args args - Request arguments.
 * @returns Resulting response.
 * @example
 * options("https://foo.bar/foo")
 */
export function options(url: string, body?: any, args?: Args): Response;

/**
 * Sends an HTTP request and returns a Promise resolving to the response.
 *
 * @param {string} url - The URL to request.
 * @param {FetchOptions} opts - Optional fetch configuration.
 * @returns {Promise<Response>} A Promise that resolves with the response.
 *
 * @example
 * // Simple GET request
 * const res = await fetch('https://foo.bar/api');
 * const data = await res.json();
 *
 * @example
 * // POST request with JSON body
 * const res = await fetch('https://foo.bar/api', {
 *   method: 'POST',
 *   headers: { 'Content-Type': 'application/json' },
 *   body: { name: 'Alice' }
 * });
 *
 * @example
 * // Request with timeout and redirect settings
 * const res = await fetch('https://foo.bar/api', {
 *   timeout: '5s',
 *   maxRedirects: 2
 * });
 */
export function fetch(url: string, opts?: FetchOptions): Promise<Response>;

/**
 * Options for the {@link fetch} function.
 */
export interface FetchOptions {
    /**
     * HTTP method to use for the request.
     * @default "GET"
     * @example
     * const res = await fetch(url, { method: 'POST' });
     */
    method?: string;

    /**
     * The body of the request, such as a string or object.
     * @example
     * const res = await fetch(url, { body: JSON.stringify({ name: 'Alice' }) });
     */
    body?: any;

    /**
     * Request headers.
     * @example
     * const res = await fetch(url, {
     *   headers: { 'Authorization': 'Bearer token123' }
     * });
     */
    headers?: { [name: string]: string };

    /**
     * The number of redirects to follow for this request.
     * @default 5
     * @example
     * const res = await fetch(url, { maxRedirects: 1 });
     */
    maxRedirects?: number;

    /**
     * Maximum time to wait for the request to complete. Default
     * timeout is 60 seconds ("60s"). The type can also be a number, in which
     * case Mokapi interprets it as milliseconds
     * @default "60s"
     * @example
     * const res = fetch(url, { timeout: '5m' })
     * @example
     * // Timeout as milliseconds
     * const res = await fetch(url, { timeout: 3000 });
     */
    timeout?: number | string;

    /**
     * If set to true, TLS certificate verification is skipped. This allows connections
     * to servers with self-signed or invalid certificates. Default is false.
     * @example
     * const res = fetch(url, { insecure: true })
     */
    insecure?: boolean;
}

/**
 * Request arguments.
 * Used to add headers to a request.
 */
export interface Args {
    /** Request headers. */
    headers?: { [name: string]: string };
    /**
     * The number of redirects to follow for this request.
     * @default 5
     */
    maxRedirects?: number;
    /**
     * Maximum time to wait for the request to complete. Default
     * timeout is 60 seconds ("60s"). The type can also be a number, in which
     * case Mokapi interprets it as milliseconds
     * @example
     * const res = get(url, { timeout: '5m' })
     */
    timeout?: number | string;

    /**
     * If set to true, TLS certificate verification is skipped. This allows connections
     * to servers with self-signed or invalid certificates. Default is false.
     * @example
     * const res = get(url, { insecure: true })
     */
    insecure?: boolean;
}

/**
 * Response of an HTTP request
 * https://mokapi.io/docs/javascript-api/mokapi-http/httpresponse
 */
export interface Response {
    /** Response body */
    body: string;

    /** HTTP status code */
    statusCode: number;

    /** Response headers */
    headers: { [name: string]: string[] };

    /**
     * Parse body as JSON
     * @returns Returns a JS object, array or value
     * @example
     * const res = get(url)
     * res.json()
     */
    json(): any;
}
