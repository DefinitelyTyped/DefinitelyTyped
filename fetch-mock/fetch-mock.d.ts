// Type definitions for fetch-mock 4.6.0
// Project: https://github.com/wheresrhys/fetch-mock
// Definitions by: Alexey Svetliakov <https://github.com/asvetliakov>, Tamir Duberstein <https://github.com/tamird>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference path="../whatwg-fetch/whatwg-fetch.d.ts" />


declare module "fetch-mock" {
    /**
     * Mock matcher function
     * @param url
     * @param opts
     */
    type MockMatcherFunction = (url: string, opts: any) => boolean;
    /**
     * Mock matcher. Can be one of following:
     * string: Either an exact url to match e.g. 'http://www.site.com/page.html' or, if the string begins with a ^, the string following the ^ must begin the url
     * e.g. '^http://www.site.com' would match 'http://www.site.com' or 'http://www.site.com/page.html'
     * RegExp: A regular expression to test the url against
     * Function(url, opts): A function (returning a Boolean) that is passed the url and opts fetch() is called with (or, if fetch() was called with one, the Request instance)
     */
    type MockMatcher = string | RegExp | Function | MockMatcherFunction;

    /**
     * Mock response function
     * @param url
     * @param opts
     */
    type MockResponseFunction = (url: string, opts: any) => MockResponse;
    /**
     * number: Creates a response with this status
     * string: Creates a 200 response with the string as the response body
     * object: As long as the object does not contain any of the properties below it is converted into a json string and returned as the body of a 200 response.
     * If MockResponseObject was given then it's used to configure response
     */
    type MockResponse = number | string | MockResponseObject | {};


    /**
     * Mock response object
     */
    interface MockResponseObject {
        /**
         * Set the response body
         */
        body?: string | {};
        /**
         * Set the response status
         * @default 200
         */
        status?: number;
        /**
         * Set the response headers.
         */
        headers?: { [key: string]: any };
        /**
         * If this property is present then a Promise rejected with the value of throws is returned
         */
        throws?: boolean;
        /**
         * This property determines whether or not the request body should be JSON.stringified before being sent
         * @default true
         */
        sendAsJson?: boolean;
    }

    interface MockCallOptions {
        [key: string]: any;
    }

    type MockCall = [string, RequestInit];

    interface MatchedRoutes {
        matched: MockCall[];
        unmatched: MockCall[];
    }

    interface FetchMockStatic {
        /**
         * When using isomorphic-fetch or node-fetch ideally fetch should be added as a global.
         * If not possible to do so you can still use fetch-mock in combination with mockery or similar in nodejs.
         * To use fetch-mock with with mockery you may use this function to prevent fetch-mock trying to mock the function globally.
         * @deprecated
         */
        useNonGlobalFetch(func?: any): void;
        /**
         * Replaces fetch() with a stub which records its calls, grouped by route, and optionally returns a mocked
         * Response object or passes the call through to fetch(). Calls to .mock() can be chained.
         * @param matcher Condition for selecting which requests to mock
         * @param response Configures the http response returned by the mock
         */
        mock(matcher: MockMatcher, response?: MockResponse | MockResponseFunction): this;
        /**
         * Replaces fetch() with a stub which records its calls, grouped by route, and optionally returns a mocked
         * Response object or passes the call through to fetch(). Calls to .mock() can be chained.
         * @param matcher Condition for selecting which requests to mock
         * @param method Only matches requests using this http method
         * @param response Configures the http response returned by the mock
         */
        mock(matcher: MockMatcher, method?: string, response?: MockResponse | MockMatcherFunction): this;
        /**
         * Restores fetch() to its unstubbed state and clears all data recorded for its calls
         */
        restore(): this;
        /**
         * Clears all data recorded for fetch()'s calls
         */
        reset(): this;
        /**
         * Calls restore() internally then calls mock(). This allows you to put some generic calls to mock() in a
         * beforeEach() while retaining the flexibility to vary the responses for some tests. reMock() can be chained.
         */
        reMock(matcher?: MockMatcher, response?: MockResponse | MockResponseFunction): this;
        reMock(matcher?: MockMatcher, method?: string, response?: MockResponse | MockMatcherFunction): this;

        /**
         * Returns an object {matched: [], unmatched: []} containing arrays of all calls to fetch, grouped by whether fetch-mock matched them or not.
         * If matcherName is specified then only calls to fetch matching that route are returned.
         */
        calls(matcher: string): MockCall[];
        calls(): MatchedRoutes;
        /**
         * Returns a Boolean indicating whether fetch was called and a route was matched. If matcherName is specified it only returns true if that particular route was matched.
         */
        called(matcher?: string): boolean;
        /**
         * Returns the arguments for the last matched call to fetch
         */
        lastCall(matcher?: string): MockCall;
        /**
         * Returns the url for the last matched call to fetch
         */
        lastUrl(matcher?: string): string;
        /**
         * Returns the options for the last matched call to fetch
         */
        lastOptions(matcher?: string): MockCallOptions;

    }

    var fetchMock: FetchMockStatic;
    export = fetchMock;

}
