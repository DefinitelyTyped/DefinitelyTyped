import { JSONValue } from ".";

/**
 * Make GET request.
 * https://mokapi.io/docs/javascript-api/mokapi-http/get
 * @param url url - Request URL.
 * @param args args - Request arguments.
 * @returns Resulting response.
 * @example
 * get('https://mokapi.io')
 */
export function get(url: string, args?: Args): Response;

/**
 * Make POST request.
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
export function post(url: string, body?: JSONValue, args?: Args): Response;

/**
 * Make PUT request.
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
export function put(url: string, body?: JSONValue, args?: Args): Response;

/**
 * Make HEAD request.
 * https://mokapi.io/docs/javascript-api/mokapi-http/head
 * @param url url - Request URL.
 * @param args args - Request arguments.
 * @returns Resulting response.
 * @example
 * head("https://foo.bar/foo")
 */
export function head(url: string, args?: Args): Response;

/**
 * Make PATCH request.
 * https://mokapi.io/docs/javascript-api/mokapi-http/patch
 * @param url url - Request URL.
 * @param body body - Request body.
 * @param args args - Request arguments.
 * @returns Resulting response.
 * @example
 * patch("https://foo.bar/foo")
 */
export function patch(url: string, body?: JSONValue, args?: Args): Response;

/**
 * Make PATCH request.
 * https://mokapi.io/docs/javascript-api/mokapi-http/delete
 * @param url url - Request URL.
 * @param body body - Request body.
 * @param args args - Request arguments.
 * @returns Resulting response.
 * @example
 * del("https://foo.bar/foo")
 */
export function del(url: string, body?: JSONValue, args?: Args): Response;

/**
 * Make OPTIONS request.
 * https://mokapi.io/docs/javascript-api/mokapi-http/options
 * @param url url - Request URL.
 * @param body body - Request body.
 * @param args args - Request arguments.
 * @returns Resulting response.
 * @example
 * options("https://foo.bar/foo")
 */
export function options(url: string, body?: JSONValue, args?: Args): Response;

/**
 * Request arguments.
 * Used to add headers to a request.
 */
export interface Args {
    /** Request headers. */
    header?: { [name: string]: string };
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
    json(): JSONValue;
}
