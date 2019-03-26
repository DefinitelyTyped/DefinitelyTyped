// Type definitions for nise 1.4
// Project: https://github.com/sinonjs/nise#readme
// Definitions by: Alexander T. <https://github.com/a-tarasyuk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export interface FakeUploadProgress {
    eventListeners: {
        progress: any[];
        load: any[];
        abort: any[];
        error: any[];
    };

    addEventListener(event: string, listener: (e: Event) => any): void;
    removeEventListener(event: string, listener: (e: Event) => any): void;
    dispatchEvent(event: Event): void;
}

export interface FakeXMLHttpRequest {
    /**
     * The URL set on the request object.
     */
    url: string;
    /**
     * The request method as a string.
     */
    method: string;
    /**
     * An object of all request headers, i.e.:
     */
    requestHeaders: any;
    /**
     * The request body
     */
    requestBody: string;
    /**
     * The request’s status code.
     * undefined if the request has not been handled (see respond below)
     */
    status: number;
    /**
     * Only populated if the respond method is called (see below).
     */
    statusText: string;
    /**
     * Whether or not the request is asynchronous.
     */
    async: boolean;
    /**
     * Username, if any.
     */
    username: string;
    /**
     * Password, if any.
     */
    password: string;
    withCredentials: boolean;
    upload: FakeUploadProgress;
    /**
     * When using respond, this property is populated with a parsed document if response headers indicate as much (see the spec)
     */
    responseXML: Document;
    /**
     * The value of the given response header, if the request has been responded to (see respond).
     * @param header
     */
    getResponseHeader(header: string): string;
    /**
     * All response headers as an object.
     */
    getAllResponseHeaders(): any;

    /**
     * Sets response headers (e.g. { "Content-Type": "text/html", ... }, updates the readyState property and fires onreadystatechange.
     * @param headers
     */
    setResponseHeaders(headers: any): void;
    /**
     * Sets the respond body, updates the readyState property and fires onreadystatechange.
     * Additionally, populates responseXML with a parsed document if response headers indicate as much.
     */
    setResponseBody(body: string): void;
    /**
     * Calls the above three methods.
     */
    respond(status: number, headers?: any, body?: string): void;
    autoRespond(ms: number): void;
    /**
     * Simulates a network error on the request. The onerror handler will be called and the status will be 0.
     */
    error(): void;

    onloadstart(e: Event): void;
    onprogress(e: Event): void;
    ontimeout(e: Event): void;
    onloadend(e: Event): void;
    onerror(e: Event): void;
    onabort(e: Event): void;
    onload(e: Event): void;
}

export interface FakeServerOptions {
    /**
     * When set to true, causes the server to automatically respond to incoming requests after a timeout.
     * The default timeout is 10ms but you can control it through the autoRespondAfter property.
     * Note that this feature is intended to help during mockup development, and is not suitable for use in tests.
     */
    autoRespond: boolean;
    /**
     * When autoRespond is true, respond to requests after this number of milliseconds. Default is 10.
     */
    autoRespondAfter: number;
    /**
     * If set to true, server will find _method parameter in POST body and recognize that as the actual method.
     * Supports a pattern common to Ruby on Rails applications. For custom HTTP method faking, override server.getHTTPMethod(request).
     */
    fakeHTTPMethods: boolean;
    /**
     * If set, the server will respond to every request immediately and synchronously.
     * This is ideal for faking the server from within a test without having to call server.respond() after each request made in that test.
     * As this is synchronous and immediate, this is not suitable for simulating actual network latency in tests or mockups.
     * To simulate network latency with automatic responses, see server.autoRespond and server.autoRespondAfter.
     */
    respondImmediately: boolean;
}

export interface FakeServer extends FakeServerOptions {
    lastRequest: FakeXMLHttpRequest | undefined;
    firstRequest: FakeXMLHttpRequest | undefined;
    secondRequest: FakeXMLHttpRequest | undefined;
    thirdRequest: FakeXMLHttpRequest | undefined;

    /**
     * Used internally to determine the HTTP method used with the provided request.
     * By default this method simply returns request.method.
     * When server.fakeHTTPMethods is true, the method will return the value of the _method parameter if the method is “POST”.
     * This method can be overridden to provide custom behavior.
     * @param request
     */
    getHTTPMethod(request: FakeXMLHttpRequest): string;

    /**
     * You can inspect the server.requests to verify request ordering, find unmatched requests or check that no requests has been done.
     * server.requests is an array of all the FakeXMLHttpRequest objects that have been created.
     */
    requests: FakeXMLHttpRequest[];

    /**
     * Causes the server to respond to any request not matched by another response with the provided data. The default catch-all response is [404, {}, ""].
     * A String representing the response body
     * An Array with status, headers and response body, e.g. [200, { "Content-Type": "text/html", "Content-Length": 2 }, "OK"]
     * A Function.
     * Default status is 200 and default headers are none.
     * When the response is a Function, it will be passed the request object. You must manually call respond on it to complete the request.
     * @param body A String representing the response body
     */
    respondWith(body: string): void;
    /**
     * Causes the server to respond to any request not matched by another response with the provided data. The default catch-all response is [404, {}, ""].
     * Default status is 200 and default headers are none.
     * When the response is a Function, it will be passed the request object. You must manually call respond on it to complete the request.
     * @param response An Array with status, headers and response body, e.g. [200, { "Content-Type": "text/html", "Content-Length": 2 }, "OK"]
     */
    respondWith(response: any[]): void;
    /**
     * Causes the server to respond to any request not matched by another response with the provided data. The default catch-all response is [404, {}, ""].
     * Default status is 200 and default headers are none.
     * When the response is a Function, it will be passed the request object. You must manually call respond on it to complete the request.
     * @param fn A Function.
     */
    respondWith(fn: (xhr: FakeXMLHttpRequest) => void): void;
    /**
     * Responds to all requests to given URL, e.g. /posts/1.
     */
    respondWith(url: string, body: string): void;
    /**
     * Responds to all requests to given URL, e.g. /posts/1.
     */
    respondWith(url: string, response: any[]): void;
    /**
     * Responds to all requests to given URL, e.g. /posts/1.
     */
    respondWith(url: string, fn: (xhr: FakeXMLHttpRequest) => void): void;
    /**
     * Responds to all method requests to the given URL with the given response.
     * method is an HTTP verb.
     */
    respondWith(method: string, url: string, body: string): void;
    /**
     * Responds to all method requests to the given URL with the given response.
     * method is an HTTP verb.
     */
    respondWith(method: string, url: string, response: any[]): void;
    /**
     * Responds to all method requests to the given URL with the given response.
     * method is an HTTP verb.
     */
    respondWith(method: string, url: string, fn: (xhr: FakeXMLHttpRequest) => void): void;
    /**
     * URL may be a regular expression, e.g. /\\/post\\//\\d+
     * If the response is a Function, it will be passed any capture groups from the regular expression along with the XMLHttpRequest object:
     */
    respondWith(url: RegExp, body: string): void;
    /**
     * URL may be a regular expression, e.g. /\\/post\\//\\d+
     * If the response is a Function, it will be passed any capture groups from the regular expression along with the XMLHttpRequest object:
     */
    respondWith(url: RegExp, response: any[]): void;
    /**
     * URL may be a regular expression, e.g. /\\/post\\//\\d+
     * If the response is a Function, it will be passed any capture groups from the regular expression along with the XMLHttpRequest object:
     */
    respondWith(url: RegExp, fn: (xhr: FakeXMLHttpRequest) => void): void;
    /**
     * Responds to all method requests to URLs matching the regular expression.
     */
    respondWith(method: string, url: RegExp, body: string): void;
    /**
     * Responds to all method requests to URLs matching the regular expression.
     */
    respondWith(method: string, url: RegExp, response: any[]): void;
    /**
     * Responds to all method requests to URLs matching the regular expression.
     */
    respondWith(method: string, url: RegExp, fn: (xhr: FakeXMLHttpRequest) => void): void;
    respondWith(...args: any[]): void;

    /**
     * Causes all queued asynchronous requests to receive a response.
     * If none of the responses added through respondWith match, the default response is [404, {}, ""].
     * Synchronous requests are responded to immediately, so make sure to call respondWith upfront.
     * If called with arguments, respondWith will be called with those arguments before responding to requests.
     */
    respond(): void;
    restore(): void;

    getRequest(): FakeXMLHttpRequest | undefined;
    reset(): void;
    resetBehavior(): void;
    resetHistory(): void;
}

export interface FakeXMLHttpRequestStatic {
    new(): FakeXMLHttpRequest;
    /**
     * Default false.
     * When set to true, Sinon will check added filters if certain requests should be “unfaked”
     */
    useFilters: boolean;
    /**
     * Add a filter that will decide whether or not to fake a request.
     * The filter will be called when xhr.open is called, with the exact same arguments (method, url, async, username, password).
     * If the filter returns true, the request will not be faked.
     * @param filter
     */
    addFilter(filter: (method: string, url: string, async: boolean, username: string, password: string) => boolean): void;
    /**
     * By assigning a function to the onCreate property of the returned object from useFakeXMLHttpRequest()
     * you can subscribe to newly created FakeXMLHttpRequest objects. See below for the fake xhr object API.
     * Using this observer means you can still reach objects created by e.g. jQuery.ajax (or other abstractions/frameworks).
     * @param xhr
     */
    onCreate(xhr: FakeXMLHttpRequest): void;
    /**
     * Restore original function(s).
     */
    restore(): void;
}

export interface FakeServerStatic {
    create(options?: Partial<FakeServerOptions>): FakeServer;
}

export interface FakeXHR {
    useFakeXMLHttpRequest(): FakeXMLHttpRequestStatic;
    FakeXMLHttpRequest: FakeXMLHttpRequestStatic;
}

export const fakeServerWithClock: FakeServerStatic;
export const fakeServer: FakeServerStatic;
export const fakeXhr: FakeXHR;
