// Type definitions for moxios 0.4
// Project: https://github.com/mzabriskie/moxios
// Definitions by: Asuka Ito <https://github.com/itoasuka/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import {AxiosInstance} from "axios";

interface Item {
    response?: any;
    responseText?: string;
    status?: number;
    statusText?: string;
    headers?: any;
}

declare class Tracker {
    constructor();

    /**
     * Reset all the items being tracked
     */
    reset(): void;

    /**
     * Add an item to be tracked
     *
     * @param {Object} item An item to be tracked
     */
    track(item: Item): void;

    /**
     * The count of items being tracked
     *
     * @return {number}
     */
    count(): number;

    /**
     * Get an item being tracked at a given index
     *
     * @param {number} index The index for the item to retrieve
     * @return {Object}
     */
    at(index: number): Request;

    /**
     * Get the first item being tracked
     *
     * @return {Object}
     */
    first(): Request;

    /**
     * Get the most recent (last) item being tracked
     *
     * @return {Object}
     */
    mostRecent(): Request;

    /**
     * Dump the items being tracked to the console.
     */
    debug(): void;

    /**
     * Find and return element given the HTTP method and the URL.
     */
    get(method: string, url?: string): Request;

    /**
     * Stop an element from being tracked by removing it. Finds and returns the element,
     * given the HTTP method and the URL.
     */
    remove(method: string, url: string): Request;
}

declare class Request {
    /**
     * Create a new Request object
     *
     * @param {Function} resolve The function to call when Promise is resolved
     * @param {Function} reject The function to call when Promise is rejected
     * @param {Object} config The config object to be used for the request
     */
    constructor(resolve: (arg: any) => void, reject: (arg: any) => void, config: any);

    /**
     * Respond to this request with a timeout result
     *
     * @return {Promise} A Promise that rejects with a timeout result
     */
    respondWithTimeout(): Promise<Response>;

    /**
     * Respond to this request with a specified result
     *
     * @param {Object} res The data representing the result of the request
     * @return {Promise} A Promise that resolves once the response is ready
     */
    respondWith(res: Item): Promise<Response>;
}

declare class Response {
    /**
     * Create a new Response object
     *
     * @param {Request} req The Request that this Response is associated with
     * @param {Object} res The data representing the result of the request
     */
    constructor(req: Request, res: any);

    config: any;
    data?: any;
    status?: number;
    statusText?: string;
    headers: any;
    request: Request;
}

declare let moxios: {
    stubs: Tracker;
    requests: Tracker;
    delay: number;
    timeoutException: Error;

    /**
     * Install the mock adapter for axios
     */
    install(instance?: AxiosInstance): void;

    /**
     * Uninstall the mock adapter and reset state
     */
    uninstall(instance?: AxiosInstance): void;

    /**
     * Stub a response to be used to respond to a request matching a URL or RegExp
     *
     * @param {string|RegExp} urlOrRegExp A URL or RegExp to test against
     * @param {Object} response The response to use when a match is made
     */
    stubRequest(urlOrRegExp: string | RegExp, response: Item): void;

    /**
     * Stub a response to be used one or more times to respond to a request matching a
     * method and a URL or RegExp.
     *
     * @param {string} method An axios command
     * @param {string|RegExp} urlOrRegExp A URL or RegExp to test against
     * @param {Object} response The response to use when a match is made
     */
    stubOnce(method: string, urlOrRegExp: string | RegExp, response: Item): Promise<void>;

    /**
     * Stub a timed response to a request matching a method and a URL or RegExp. If
     * timer fires, reject with a TimeoutException for simple assertions. The goal is
     * to show that a certain request was not made.
     *
     * @param {string} method An axios command
     * @param {string|RegExp} urlOrRegExp A URL or RegExp to test against
     * @param {Object} response The response to use when a match is made
     */
    stubFailure(method: string, urlOrRegExp: string | RegExp, response: Item): Promise<void>;

    /**
     * Stub a timeout to be used to respond to a request matching a URL or RegExp
     *
     * @param {string|RegExp} urlOrRegExp A URL or RegExp to test against
     */
    stubTimeout(urlOrRegExp: string | RegExp): string;

    /**
     * Run a single test with mock adapter installed.
     * This will install the mock adapter, execute the function provided,
     * then uninstall the mock adapter once complete.
     *
     * @param {Function} fn The function to be executed
     */
    withMock(fn: () => void): void;

    /**
     * Wait for request to be made before proceding.
     * This is naively using a `setTimeout`.
     * May need to beef this up a bit in the future.
     *
     * @param {Function} fn The function to execute once waiting is over
     * @param {number} delay How much time in milliseconds to wait
     */
    wait(fn: () => void, delay?: number): void;
};

export = moxios;
