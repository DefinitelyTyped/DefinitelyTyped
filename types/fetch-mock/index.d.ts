// Type definitions for fetch-mock 7.3
// Project: https://github.com/wheresrhys/fetch-mock, http://www.wheresrhys.co.uk/fetch-mock
// Definitions by: Alexey Svetliakov <https://github.com/asvetliakov>
//                 Tamir Duberstein <https://github.com/tamird>
//                 Risto Keravuori <https://github.com/merrywhether>
//                 Chris Sinclair <https://github.com/chrissinclair>
//                 Matt Tennison <https://github.com/matttennison>
//                 Quentin Bouygues <https://github.com/quentinbouygues>
//                 Fumiaki Matsushima <https://github.com/mtsmfm>
//                 Colin Doig <https://github.com/captain-igloo>
//                 Felix Chen <https://github.com/ChenNima>
//                 Katsuya Hino <https://github.com/dobogo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare namespace fetchMock {
    type MockRequest = Request | RequestInit;

    /**
     * Mock matcher function
     */
    type MockMatcherFunction = (url: string, opts: MockRequest) => boolean;

    /**
     * Mock matcher. Can be one of following:
     * string: Either
     *   * an exact url to match e.g. 'http://www.site.com/page.html'
     *   * if the string begins with a `^`, the string following the `^` must
     *     begin the url e.g. '^http://www.site.com' would match
     *      'http://www.site.com' or 'http://www.site.com/page.html'
     *    * '*' to match any url
     * RegExp: A regular expression to test the url against
     * Function(url, opts): A function (returning a Boolean) that is passed the
     *  url and opts fetch() is called with (or, if fetch() was called with one,
     *  the Request instance)
     */
    type MockMatcher = string | RegExp | MockMatcherFunction;

    /**
     * Inspection filter. Can be one of the following:
     * boolean:
     *   * true retrieves all calls matched by fetch.
     *     fetchMock.MATCHED is an alias for true and may be used to make tests
     *     more readable.
     *   * false retrieves all calls not matched by fetch (i.e. those handled
     *     by catch() or spy(). fetchMock.UNMATCHED is an alias for false and
     *     may be used to make tests more readable.
     * MockMatcher (routeIdentifier):
     *   All routes have an identifier:
     *    * If it’s a named route, the identifier is the route’s name
     *    * If the route is unnamed, the identifier is the matcher passed in to
     *      .mock()
     *   All calls that were handled by the route with the given identifier
     *   will be retrieved
     * MockMatcher (matcher):
     *   Any matcher compatible with the mocking api can be passed in to filter
     *   the calls arbitrarily.
     */
    type InspectionFilter = MockMatcher | boolean;

    /**
     * Either an object compatible with the mocking api or a string specifying
     * a http method to filter by. This will be used to filter the list of
     * calls further.
     */
    type InspectionOptions = MockOptions | string;

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
        headers?: { [key: string]: string };

        /**
         * If this property is present then a Promise rejected with the value
         * of throws is returned
         */
        throws?: Error;

        /**
         * The URL the response should be from (to imitate followed redirects
         *  - will set redirected: true on the response)
         */
        redirectUrl?: string;
    }

    /**
     * Response: A Response instance - will be used unaltered
     * number: Creates a response with this status
     * string: Creates a 200 response with the string as the response body
     * object: As long as the object is not a MockResponseObject it is
     *  converted into a json string and returned as the body of a 200 response
     * If MockResponseObject was given then it's used to configure response
     * Function(url, opts): A function that is passed the url and opts fetch()
     *  is called with and that returns any of the responses listed above
     */
    type MockResponse = Response | Promise<Response>
                        | number | Promise<number>
                        | string | Promise<string>
                        | {} | Promise<{}>
                        | MockResponseObject | Promise<MockResponseObject>;

    /**
     * Mock response function
     */
    type MockResponseFunction = (url: string, opts: MockRequest) => MockResponse;

    /**
     * Mock options object
     */
    interface MockOptions {
        /**
         * A unique string naming the route. Used to subsequently retrieve
         * references to the calls, grouped by name.
         * @default matcher.toString()
         *
         * Note: If a non-unique name is provided no error will be thrown
         *  (because names are optional, auto-generated ones may legitimately
         *  clash)
         */
        name?: string;

        /**
         * http method to match
         */
        method?: string;

        /**
         * key/value map of headers to match
         */
        headers?: { [key: string]: string | number };

        /**
         * body to match
         */
        body?: string | {};

        /**
         * key/value map of query strings to match, in any order
         */
        query?: { [key: string]: string };

        /**
         * key/value map of express style path params to match
         */
        params?: { [key: string]: string };

        /**
         * A function for arbitrary matching
         */
        functionMatcher?: MockMatcherFunction;

        /**
         * as specified above
         */
        matcher?: MockMatcher;

        /**
         * This option allows for existing routes in a mock to be overwritten.
         * It’s also possible to define multiple routes with ‘the same’ matcher.
         * Default behaviour is to error
         */
        overwriteRoutes?: boolean;

        /**
         * as specified above
         */
        response?: MockResponse | MockResponseFunction;

        /**
         * integer, n, limiting the number of times the matcher can be used.
         * If the route has already been called n times the route will be
         * ignored and the call to fetch() will fall through to be handled by
         * any other routes defined (which may eventually result in an error
         * if nothing matches it).
         */
        repeat?: number;

        /**
         * Convert objects into JSON before delivering as stub responses. Can
         * be useful to set to false globally if e.g. dealing with a lot of
         * array buffers. If true, will also add content-type: application/json
         * header.
         * @default true
         */
        sendAsJson?: boolean;

        /**
         * Automatically sets a content-length header on each response.
         * @default true
         */
        includeContentLength?: boolean;
    }

    interface MockCall extends Array<string | RequestInit | undefined> {
        0: string;
        1: RequestInit | undefined;
        identifier: string;
        isUnmatched: boolean | undefined;
        request: Request | undefined;
    }

    interface MockOptionsMethodGet extends MockOptions {
        method?: 'GET';
    }

    interface MockOptionsMethodPost extends MockOptions {
        method?: 'POST';
    }

    interface MockOptionsMethodPut extends MockOptions {
        method?: 'PUT';
    }

    interface MockOptionsMethodDelete extends MockOptions {
        method?: 'DELETE';
    }

    interface MockOptionsMethodHead extends MockOptions {
        method?: 'HEAD';
    }

    interface FetchMockStatic {
        MATCHED: true;
        UNMATCHED: false;

        /**
         * Replaces fetch() with a stub which records its calls, grouped by
         * route, and optionally returns a mocked Response object or passes the
         *  call through to fetch(). Calls to .mock() can be chained.
         * @param matcher Condition for selecting which requests to mock
         * @param response Configures the http response returned by the mock
         * @param [options] Additional properties defining the route to mock
         */
        mock(matcher: MockMatcher, response: MockResponse | MockResponseFunction, options?: MockOptions): this;

        /**
         * Replaces fetch() with a stub which records its calls, grouped by
         * route, and optionally returns a mocked Response object or passes the
         *  call through to fetch(). Calls to .mock() can be chained.
         * @param options The route to mock
         */
        mock(options: MockOptions): this;

        /**
         * Returns a drop-in mock for fetch which can be passed to other mocking
         * libraries. It implements the full fetch-mock api and maintains its
         * own state independent of other instances, so tests can be run in
         * parallel.
         */
        sandbox(): FetchMockSandbox;

        /**
         * Replaces fetch() with a stub which records its calls, grouped by
         * route, and optionally returns a mocked Response object or passes the
         *  call through to fetch(). Shorthand for mock() limited to being
         *  called one time only. Calls to .once() can be chained.
         * @param matcher Condition for selecting which requests to mock
         * @param response Configures the http response returned by the mock
         * @param [options] Optional additional properties defining the route to mock
         */
        once(matcher: MockMatcher, response: MockResponse | MockResponseFunction, options?: MockOptions): this;

        /**
         * Replaces fetch() with a stub which records its calls, grouped by
         * route, and optionally returns a mocked Response object or passes the
         *  call through to fetch(). Shorthand for mock() restricted to the GET
         *  method. Calls to .get() can be chained.
         * @param matcher Condition for selecting which requests to mock
         * @param response Configures the http response returned by the mock
         * @param [options] Additional properties defining the route to mock
         */
        get(matcher: MockMatcher, response: MockResponse | MockResponseFunction, options?: MockOptionsMethodGet): this;

        /**
         * Replaces fetch() with a stub which records its calls, grouped by
         * route, and optionally returns a mocked Response object or passes the
         *  call through to fetch(). Shorthand for mock() restricted to the GET
         *  method and limited to being called one time only. Calls to .getOnce()
         *  can be chained.
         * @param matcher Condition for selecting which requests to mock
         * @param response Configures the http response returned by the mock
         * @param [options] Additional properties defining the route to mock
         */
        getOnce(matcher: MockMatcher, response: MockResponse | MockResponseFunction, options?: MockOptionsMethodGet): this;

        /**
         * Replaces fetch() with a stub which records its calls, grouped by
         * route, and optionally returns a mocked Response object or passes the
         *  call through to fetch(). Shorthand for mock() restricted to the POST
         *  method. Calls to .post() can be chained.
         * @param matcher Condition for selecting which requests to mock
         * @param response Configures the http response returned by the mock
         * @param [options] Additional properties defining the route to mock
         */
        post(matcher: MockMatcher, response: MockResponse | MockResponseFunction, options?: MockOptionsMethodPost): this;

        /**
         * Replaces fetch() with a stub which records its calls, grouped by
         * route, and optionally returns a mocked Response object or passes the
         *  call through to fetch(). Shorthand for mock() restricted to the POST
         *  method and limited to being called one time only. Calls to .postOnce()
         *  can be chained.
         * @param matcher Condition for selecting which requests to mock
         * @param response Configures the http response returned by the mock
         * @param [options] Additional properties defining the route to mock
         */
        postOnce(matcher: MockMatcher, response: MockResponse | MockResponseFunction, options?: MockOptionsMethodPost): this;

        /**
         * Replaces fetch() with a stub which records its calls, grouped by
         * route, and optionally returns a mocked Response object or passes the
         *  call through to fetch(). Shorthand for mock() restricted to the PUT
         *  method. Calls to .put() can be chained.
         * @param matcher Condition for selecting which requests to mock
         * @param response Configures the http response returned by the mock
         * @param [options] Additional properties defining the route to mock
         */
        put(matcher: MockMatcher, response: MockResponse | MockResponseFunction, options?: MockOptionsMethodPut): this;

        /**
         * Replaces fetch() with a stub which records its calls, grouped by
         * route, and optionally returns a mocked Response object or passes the
         *  call through to fetch(). Shorthand for mock() restricted to the PUT
         *  method and limited to being called one time only. Calls to .putOnce()
         *  can be chained.
         * @param matcher Condition for selecting which requests to mock
         * @param response Configures the http response returned by the mock
         * @param [options] Additional properties defining the route to mock
         */
        putOnce(matcher: MockMatcher, response: MockResponse | MockResponseFunction, options?: MockOptionsMethodPut): this;

        /**
         * Replaces fetch() with a stub which records its calls, grouped by
         * route, and optionally returns a mocked Response object or passes the
         *  call through to fetch(). Shorthand for mock() restricted to the
         *  DELETE method. Calls to .delete() can be chained.
         * @param matcher Condition for selecting which requests to mock
         * @param response Configures the http response returned by the mock
         * @param [options] Additional properties defining the route to mock
         */
        delete(matcher: MockMatcher, response: MockResponse | MockResponseFunction, options?: MockOptionsMethodDelete): this;

        /**
         * Replaces fetch() with a stub which records its calls, grouped by
         * route, and optionally returns a mocked Response object or passes the
         *  call through to fetch(). Shorthand for mock() restricted to the
         *  DELETE method and limited to being called one time only. Calls to
         *  .deleteOnce() can be chained.
         * @param matcher Condition for selecting which requests to mock
         * @param response Configures the http response returned by the mock
         * @param [options] Additional properties defining the route to mock
         */
        deleteOnce(matcher: MockMatcher, response: MockResponse | MockResponseFunction, options?: MockOptionsMethodDelete): this;

        /**
         * Replaces fetch() with a stub which records its calls, grouped by
         * route, and optionally returns a mocked Response object or passes the
         *  call through to fetch(). Shorthand for mock() restricted to the HEAD
         *  method. Calls to .head() can be chained.
         * @param matcher Condition for selecting which requests to mock
         * @param response Configures the http response returned by the mock
         * @param [options] Additional properties defining the route to mock
         */
        head(matcher: MockMatcher, response: MockResponse | MockResponseFunction, options?: MockOptionsMethodHead): this;

        /**
         * Replaces fetch() with a stub which records its calls, grouped by
         * route, and optionally returns a mocked Response object or passes the
         *  call through to fetch(). Shorthand for mock() restricted to the HEAD
         *  method and limited to being called one time only. Calls to .headOnce()
         *  can be chained.
         * @param matcher Condition for selecting which requests to mock
         * @param response Configures the http response returned by the mock
         * @param [options] Additional properties defining the route to mock
         */
        headOnce(matcher: MockMatcher, response: MockResponse | MockResponseFunction, options?: MockOptionsMethodHead): this;

        /**
         * Replaces fetch() with a stub which records its calls, grouped by
         * route, and optionally returns a mocked Response object or passes the
         *  call through to fetch(). Shorthand for mock() restricted to the PATCH
         *  method. Calls to .patch() can be chained.
         * @param matcher Condition for selecting which requests to mock
         * @param response Configures the http response returned by the mock
         * @param [options] Additional properties defining the route to mock
         */
        patch(matcher: MockMatcher, response: MockResponse | MockResponseFunction, options?: MockOptionsMethodHead): this;

        /**
         * Replaces fetch() with a stub which records its calls, grouped by
         * route, and optionally returns a mocked Response object or passes the
         *  call through to fetch(). Shorthand for mock() restricted to the PATCH
         *  method and limited to being called one time only. Calls to .patchOnce()
         *  can be chained.
         * @param matcher Condition for selecting which requests to mock
         * @param response Configures the http response returned by the mock
         * @param [options] Additional properties defining the route to mock
         */
        patchOnce(matcher: MockMatcher, response: MockResponse | MockResponseFunction, options?: MockOptionsMethodHead): this;

        /**
         * Chainable method that defines how to respond to calls to fetch that
         * don't match any of the defined mocks. It accepts the same types of
         * response as a normal call to .mock(matcher, response). It can also
         * take an arbitrary function to completely customise behaviour of
         * unmatched calls. If .catch() is called without any parameters then
         * every unmatched call will receive a 200 response.
         * @param [response] Configures the http response returned by the mock
         */
        catch(response?: MockResponse | MockResponseFunction): this;

        /**
         * Chainable method that records the call history of unmatched calls,
         * but instead of responding with a stubbed response, the request is
         * passed through to native fetch() and is allowed to communicate
         * over the network. Similar to catch().
         */
        spy(response?: MockResponse | MockResponseFunction): this;

        /**
         * Restores fetch() to its unstubbed state and clears all data recorded
         * for its calls. reset() is an alias for restore().
         */
        restore(): this;

        /**
         * Restores fetch() to its unstubbed state and clears all data recorded
         * for its calls. reset() is an alias for restore().
         */
        reset(): this;

        /**
         * Clears all data recorded for fetch()’s calls. It will not restore
         * fetch to its default implementation.
         */
        resetHistory(): this;

        /**
         * Removes mocking behaviour without resetting call history.
         */
        resetBehavior(): this;

        /**
         * Returns a promise that resolves once all fetches handled by fetch-mock
         * have resolved.
         * @param [waitForBody] Wait for all body parsing methods(res.json(),
         * res.text(), etc.) to resolve too.
         */
        flush(waitForBody?: boolean): Promise<MockResponse[]>;

        /**
         * Returns an array of all calls to fetch matching the given filters.
         * Each call is returned as a [url, options] array. If fetch was called
         * using a Request instance, this will be available as a request
         * property on this array.
         * @param [filter] Allows filtering of calls to fetch based on various
         * criteria
         * @param [options] Either an object compatible with the mocking api or
         * a string specifying a http method to filter by. This will be used to
         * filter the list of calls further.
         */
        calls(filter?: InspectionFilter, options?: InspectionOptions): MockCall[];

        /**
         * Returns a Boolean indicating whether any calls to fetch matched the
         * given filter.
         * @param [filter] Allows filtering of calls to fetch based on various
         * criteria
         * @param [options] Either an object compatible with the mocking api or
         * a string specifying a http method to filter by. This will be used to
         * filter the list of calls further.
         */
        called(filter?: InspectionFilter, options?: InspectionOptions): boolean;

        /**
         * Returns a Boolean indicating whether fetch was called the expected
         * number of times (or has been called at least once if repeat is
         * undefined for the route).
         * @param [filter] Rule for matching calls to fetch.
         */
        done(filter?: InspectionFilter): boolean;

        /**
         * Returns the arguments for the last call to fetch matching the given
         * filter.
         * @param [filter] Allows filtering of calls to fetch based on various
         * criteria
         * @param [options] Either an object compatible with the mocking api or
         * a string specifying a http method to filter by. This will be used to
         * filter the list of calls further.
         */
        lastCall(
            filter?: InspectionFilter,
            options?: InspectionOptions,
        ): MockCall | undefined;

        /**
         * Returns the url for the last call to fetch matching the given
         * filter. If fetch was last called using a Request instance, the url
         * will be extracted from this.
         * @param [filter] Allows filtering of calls to fetch based on various
         * criteria
         * @param [options] Either an object compatible with the mocking api or
         * a string specifying a http method to filter by. This will be used to
         * filter the list of calls further.
         */
        lastUrl(
            filter?: InspectionFilter,
            options?: InspectionOptions,
        ): string | undefined;

        /**
         * Returns the options for the call to fetch matching the given filter.
         * If fetch was last called using a Request instance, a set of options
         * inferred from the Request will be returned.
         * @param [filter] Allows filtering of calls to fetch based on various
         * criteria
         * @param [options] Either an object compatible with the mocking api or
         * a string specifying a http method to filter by. This will be used to
         * filter the list of calls further.
         */
        lastOptions(
            filter?: InspectionFilter,
            options?: InspectionOptions,
        ): MockOptions | undefined;

        config: {
            /**
             * Convert objects into JSON before delivering as stub responses.
             * Can be useful to set to false globally if e.g. dealing with a
             * lot of array buffers. If true, will also add
             * content-type: application/json header.
             * @default true
             */
            sendAsJson?: boolean;

            /**
             * Automatically sets a content-length header on each response.
             * @default true
             */
            includeContentLength?: boolean;

            /**
             * - true: Unhandled calls fall through to the network
             * - false: Unhandled calls throw an error
             * - 'always': All calls fall through to the network, effectively
             * disabling fetch-mock.
             * @default false
             */
            fallbackToNetwork?: boolean | 'always';

            /**
             * Determines behaviour if a new route has the same name (or
             * inferred name) as an existing one
             * - undefined: An error will be throw when routes clash
             * - true: Overwrites the existing route
             * - false: Appends the new route to the list of routes
             * @default undefined
             */
            overwriteRoutes?: boolean;

            /**
             * Print a warning if any call is caught by a fallback handler (set
             * using the fallbackToNetwork option or catch())
             * @default true
             */
            warnOnFallback?: boolean;

            /**
             * Reference to the Promise constructor of a custom Promise
             * implementation.
             */
            Promise?: new (executor: (
                resolve: () => void,
                reject: () => void,
            ) => void) => Promise<Response>;

            /**
             * Reference to a custom fetch implementation.
             */
            fetch?: (
                input?: string | Request,
                init?: RequestInit,
            ) => Promise<Response>;

            /**
             * Reference to the Headers constructor of a custom fetch
             * implementation.
             */
            Headers?: new () => Headers;

            /**
             * Reference to the Request constructor of a custom fetch
             * implementation.
             */
            Request?: new (input: string | Request, init?: RequestInit) => Request;

            /**
             * Reference to the Response constructor of a custom fetch
             * implementation.
             */
            Response?: new () => Response;
        };
    }

    interface FetchMockSandbox extends FetchMockStatic {
        /**
         * Also callable as fetch(). Use `typeof fetch` in your code to define
         * a field that accepts both `fetch()` and a fetch-mock sandbox.
         */
        (input?: string | Request , init?: RequestInit): Promise<Response>;
    }
}

declare var fetchMock: fetchMock.FetchMockStatic;
export = fetchMock;
