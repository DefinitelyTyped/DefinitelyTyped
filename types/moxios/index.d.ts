// Type definitions for moxios 0.4
// Project: https://github.com/mzabriskie/moxios
// Definitions by: Asuka Ito <https://github.com/itoasuka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { AxiosInstance, AxiosRequestConfig } from "axios";

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
     * @param item An item to be tracked
     */
    track(item: Item): void;

    /**
     * The count of items being tracked
     */
    count(): number;

    /**
     * Get an item being tracked at a given index
     *
     * @param index The index for the item to retrieve
     */
    at(index: number): Request;

    /**
     * Get the first item being tracked
     */
    first(): Request;

    /**
     * Get the most recent (last) item being tracked
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
     * @param resolve The function to call when Promise is resolved
     * @param reject The function to call when Promise is rejected
     * @param config The config object to be used for the request
     */
    constructor(resolve: (arg: any) => void, reject: (arg: any) => void, config: AxiosRequestConfig);

    config: AxiosRequestConfig;
    headers: any;
    url: string;
    timeout: number;
    withCredentials: boolean;
    responseType: string;

    /**
     * Respond to this request with a timeout result
     *
     * @return A Promise that rejects with a timeout result
     */
    respondWithTimeout(): Promise<Response>;

    /**
     * Respond to this request with a specified result
     *
     * @param res The data representing the result of the request
     * @return A Promise that resolves once the response is ready
     */
    respondWith(res: Item): Promise<Response>;
}

declare class Response {
    /**
     * Create a new Response object
     *
     * @param req The Request that this Response is associated with
     * @param res The data representing the result of the request
     */
    constructor(req: Request, res: any);

    config: AxiosRequestConfig;
    data?: any;
    status?: number;
    statusText?: string;
    headers: any;
    request: Request;
    code?: string;
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
     * @param urlOrRegExp A URL or RegExp to test against
     * @param response The response to use when a match is made
     */
    stubRequest(urlOrRegExp: string | RegExp, response: Item): void;

    /**
     * Stub a response to be used one or more times to respond to a request matching a
     * method and a URL or RegExp.
     *
     * @param method An axios command
     * @param urlOrRegExp A URL or RegExp to test against
     * @param response The response to use when a match is made
     */
    stubOnce(method: string, urlOrRegExp: string | RegExp, response: Item): Promise<void>;

    /**
     * Stub a timed response to a request matching a method and a URL or RegExp. If
     * timer fires, reject with a TimeoutException for simple assertions. The goal is
     * to show that a certain request was not made.
     *
     * @param method An axios command
     * @param urlOrRegExp A URL or RegExp to test against
     * @param response The response to use when a match is made
     */
    stubFailure(method: string, urlOrRegExp: string | RegExp, response: Item): Promise<void>;

    /**
     * Stub a timeout to be used to respond to a request matching a URL or RegExp
     *
     * @param urlOrRegExp A URL or RegExp to test against
     */
    stubTimeout(urlOrRegExp: string | RegExp): string;

    /**
     * Run a single test with mock adapter installed.
     * This will install the mock adapter, execute the function provided,
     * then uninstall the mock adapter once complete.
     *
     * @param fn The function to be executed
     */
    withMock(fn: () => void): void;

    /**
     * Wait for request to be made before proceding.
     * This is naively using a `setTimeout`.
     * May need to beef this up a bit in the future.
     *
     * @param fn The function to execute once waiting is over
     * @param delay How much time in milliseconds to wait
     */
    wait(fn: () => void, delay?: number): void;
};

export = moxios;
