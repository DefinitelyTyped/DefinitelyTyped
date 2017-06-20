// Type definitions for fetch-mock 5.8
// Project: https://github.com/wheresrhys/fetch-mock
// Definitions by: Alexey Svetliakov <https://github.com/asvetliakov>, Tamir Duberstein <https://github.com/tamird>, Risto Keravuori <https://github.com/merrywhether>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

type MockRequest = Request | RequestInit;

/**
 * Mock matcher function
 * @param url
 * @param opts
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
    throws?: boolean;
    /**
     * This property determines whether or not the request body should be
     * JSON.stringified before being sent
     * @default true
     */
    sendAsJson?: boolean;
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
 * @param url
 * @param opts
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
     * as specified above
     */
    matcher?: MockMatcher;
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
    times?: number;
}

type MockCall = [string, MockRequest];

interface MatchedRoutes {
    matched: MockCall[];
    unmatched: MockCall[];
}

interface MockOptionsMethodGet extends MockOptions {
  method: 'GET';
}

interface MockOptionsMethodPost extends MockOptions {
  method: 'POST';
}

interface MockOptionsMethodPut extends MockOptions {
  method: 'PUT';
}

interface MockOptionsMethodDelete extends MockOptions {
  method: 'DELETE';
}

interface MockOptionsMethodHead extends MockOptions {
  method: 'HEAD';
}

interface FetchMockStatic {
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
    get(matcher: MockMatcher, reponse: MockResponse | MockResponseFunction, options?: MockOptionsMethodGet): this;
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
    getOnce(matcher: MockMatcher, reponse: MockResponse | MockResponseFunction, options?: MockOptionsMethodGet): this;

    /**
     * Replaces fetch() with a stub which records its calls, grouped by
     * route, and optionally returns a mocked Response object or passes the
     *  call through to fetch(). Shorthand for mock() restricted to the POST
     *  method. Calls to .post() can be chained.
     * @param matcher Condition for selecting which requests to mock
     * @param response Configures the http response returned by the mock
     * @param [options] Additional properties defining the route to mock
     */
    post(matcher: MockMatcher, reponse: MockResponse | MockResponseFunction, options?: MockOptionsMethodPost): this;
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
    postOnce(matcher: MockMatcher, reponse: MockResponse | MockResponseFunction, options?: MockOptionsMethodPost): this;

    /**
     * Replaces fetch() with a stub which records its calls, grouped by
     * route, and optionally returns a mocked Response object or passes the
     *  call through to fetch(). Shorthand for mock() restricted to the PUT
     *  method. Calls to .put() can be chained.
     * @param matcher Condition for selecting which requests to mock
     * @param response Configures the http response returned by the mock
     * @param [options] Additional properties defining the route to mock
     */
    put(matcher: MockMatcher, reponse: MockResponse | MockResponseFunction, options?: MockOptionsMethodPut): this;
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
    putOnce(matcher: MockMatcher, reponse: MockResponse | MockResponseFunction, options?: MockOptionsMethodPut): this;

    /**
     * Replaces fetch() with a stub which records its calls, grouped by
     * route, and optionally returns a mocked Response object or passes the
     *  call through to fetch(). Shorthand for mock() restricted to the
     *  DELETE method. Calls to .delete() can be chained.
     * @param matcher Condition for selecting which requests to mock
     * @param response Configures the http response returned by the mock
     * @param [options] Additional properties defining the route to mock
     */
    delete(matcher: MockMatcher, reponse: MockResponse | MockResponseFunction, options?: MockOptionsMethodDelete): this;
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
    deleteOnce(matcher: MockMatcher, reponse: MockResponse | MockResponseFunction, options?: MockOptionsMethodDelete): this;

    /**
     * Replaces fetch() with a stub which records its calls, grouped by
     * route, and optionally returns a mocked Response object or passes the
     *  call through to fetch(). Shorthand for mock() restricted to the HEAD
     *  method. Calls to .head() can be chained.
     * @param matcher Condition for selecting which requests to mock
     * @param response Configures the http response returned by the mock
     * @param [options] Additional properties defining the route to mock
     */
    head(matcher: MockMatcher, reponse: MockResponse | MockResponseFunction, options?: MockOptionsMethodHead): this;
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
    headOnce(matcher: MockMatcher, reponse: MockResponse | MockResponseFunction, options?: MockOptionsMethodHead): this;

    /**
     * Replaces fetch() with a stub which records its calls, grouped by
     * route, and optionally returns a mocked Response object or passes the
     *  call through to fetch(). Shorthand for mock() restricted to the PATCH
     *  method. Calls to .patch() can be chained.
     * @param matcher Condition for selecting which requests to mock
     * @param response Configures the http response returned by the mock
     * @param [options] Additional properties defining the route to mock
     */
    patch(matcher: MockMatcher, reponse: MockResponse | MockResponseFunction, options?: MockOptionsMethodHead): this;
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
    patchOnce(matcher: MockMatcher, reponse: MockResponse | MockResponseFunction, options?: MockOptionsMethodHead): this;

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
     * Chainable method that restores fetch() to its unstubbed state and
     * clears all data recorded for its calls.
     */
    restore(): this;

    /**
     * Chainable method that clears all data recorded for fetch()'s calls
     */
    reset(): this;

    /**
     * Returns all calls to fetch, grouped by whether fetch-mock matched
     * them or not.
     */
    calls(): MatchedRoutes;
    /**
     * Returns all calls to fetch matching matcherName.
     */
    calls(matcherName?: string): MockCall[];

    /**
     * Returns a Boolean indicating whether fetch was called and a route
     * was matched (or a specific route if matcherName is passed).
     * @param [matcherName] either the name of a route or equal to
     * matcher.toString() for any unnamed route
     */
    called(matcherName?: string): boolean;

    /**
     * Returns a Boolean indicating whether fetch was called the expected
     * number of times (or at least once if the route defines no expectation
     * is set) for every route (or for a specific route if matcherName is
     * passed).
     * @param [matcherName] either the name of a route or equal to
     * matcher.toString() for any unnamed route
     */
    done(matcherName?: string): boolean;

    /**
     * Returns the arguments for the last matched call to fetch (or the
     * last call to specific route is matcherName is passed).
     * @param [matcherName] either the name of a route or equal to
     * matcher.toString() for any unnamed route
     */
    lastCall(matcherName?: string): MockCall;

    /**
     * Returns the url for the last matched call to fetch (or the last
     * call to specific route is matcherName is passed).
     * @param [matcherName] either the name of a route or equal to
     * matcher.toString() for any unnamed route
     */
    lastUrl(matcherName?: string): string;

    /**
     * Returns the options for the last matched call to fetch (or the
     * last call to a specific route is matcherName is passed).
     * @param [matcherName] either the name of a route or equal to
     * matcher.toString() for any unnamed route
     */
    lastOptions(matcherName?: string): MockRequest;

    /**
     * Set some global config options, which include
     * sendAsJson [default `true`] - by default fetchMock will
     * convert objects to JSON before sending. This is overrideable
     * for each call but for some scenarios, e.g. when dealing with a
     * lot of array buffers, it can be useful to default to `false`
     */
    configure(opts: {}): void;
}

declare var fetchMock: FetchMockStatic;
export = fetchMock;
