// Type definitions for protractor-http-mock 0.10
// Project: https://github.com/atecarlos/protractor-http-mock
// Definitions by: Crevil <https://github.com/Crevil>
//                 Adam Kwiatek <https://github.com/akwiatek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import * as webdriver from 'selenium-webdriver';

declare namespace mock {
    interface ProtractorHttpMock {
        /**
         * Instantiate mock module. This must be done before the browser connects.
         *
         * @param mocks An array of either mock modules or module names relative to the rootDirectory configuration to load into the application.
         * @param plugins An array of either Plugin objects or NPM modules as strings.
         * @param skipDefaults Set true to skip loading of default mocks.
         */
        (mocks?: ReadonlyArray<requests.AllRequests | string>, plugins?: ReadonlyArray<Plugin1<any> | Plugin2<any, any> | string>, skipDefaults?: boolean): ProtractorHttpMock;

        /**
         * Clean up.
         * Typically done in the afterEach call to ensure the teardown
         * is executed regardless of what happens in the test execution.
         */
        teardown(): void;

        /**
         * Returns a promise that will be resolved with an array of
         * all matched HTTP requests.
         */
        requestsMade(): webdriver.promise.Promise<Array<ReceivedRequest>>;

        /**
         * Returns a promise that will be resolved with a true boolean
         * when all matched HTTP requests are cleared.
         */
        clearRequests(): webdriver.promise.Promise<boolean>;

        /**
         * Module configuration to setup
         */
        config: {
            /**
             * Mocks directory where mock files are located.
             * Default: process.cwd()
             */
            rootDirectory?: string | undefined;

            /**
             * Path to protractor configuration file.
             * Default: protractor-conf.js
             */
            protractorConfig?: string | undefined;

            mocks?: {
                /**
                 * Name of the folder where mocks will reside.
                 * Default: 'mocks'
                 */
                dir?: string | undefined,

                /**
                 * Collection of default mocks to load for every test.
                 * Default: []
                 */
                default?: ReadonlyArray<string> | undefined
            } | undefined,

            plugins?: {
                /**
                 * Collection of default plugins to load for every test.
                 * Default: []
                 */
                default?: ReadonlyArray<string> | undefined
            } | undefined
        };

        /**
         * Add mocks during test execution.
         * Returns a promise that will be resolved with a true boolean
         * when mocks are added.
         *
         * @param mocks An array of mock modules to load into the application.
         */
        add(mocks: ReadonlyArray<requests.AllRequests>): webdriver.promise.Promise<boolean>;

        /**
         * Remove mocks during test execution.
         * Returns a promise that will be resolved with a true boolean
         * when the supplied mocks are removed.
         *
         * @param mocks An array of mock modules to remove from the application.
         */
        remove(mocks: ReadonlyArray<requests.AllRequests>): webdriver.promise.Promise<boolean>;
    }

    /**
     * Matched request.
     */
    interface ReceivedRequest {
        url: string;
        method: requests.Method;
    }

    /**
     * Plugin for custom matching logic with 1 generic type.
     */
    interface Plugin1<T1> {
        /**
         * Match function.
         * Return a truthy value to indicate successfull match.
         *
         * @param mockRequest The mock to compare request with.
         * @param requestConfig The request object to compare mock with.
         */
        match<O extends requests.Get<T1>>(mockRequest: O, requestConfig: O): boolean;
        match<O extends requests.Post<T1>>(mockRequest: O, requestConfig: O): boolean;
        match<O extends requests.Head<T1>>(mockRequest: O, requestConfig: O): boolean;
        match<O extends requests.Delete<T1>>(mockRequest: O, requestConfig: O): boolean;
        match<O extends requests.Put<T1>>(mockRequest: O, requestConfig: O): boolean;
        match<O extends requests.Patch<T1>>(mockRequest: O, requestConfig: O): boolean;
        match<O extends requests.Jsonp<T1>>(mockRequest: O, requestConfig: O): boolean;
    }

    /**
     * Plugin for custom matching logic with 2 generic types.
     */
    interface Plugin2<T1, T2> {
        /**
         * Match function.
         * Return a truthy value to indicate successfull match.
         *
         * @param mockRequest The mock to compare request with.
         * @param requestConfig The request object to compare mock with.
         */
        match<O extends requests.PostData<T1, T2>>(mockRequest: O, requestConfig: O): boolean;
        match<O extends requests.PutData<T1, T2>>(mockRequest: O, requestConfig: O): boolean;
    }

    namespace requests {
        /**
         * Request methods type
         */
        type Method = "GET" | "POST" | "DELETE" | "PUT" | "HEAD" | "PATCH" | "JSONP";

        type Headers = Record<string, string>;

        /**
         * All available request types.
         */
        type AllRequests = Get<any> |
            PostData<any, any> |
            Post<any> |
            Head<any> |
            Delete<any> |
            PutData<any, any> |
            Put<any> |
            Patch<any> |
            Jsonp<any>;

        /**
         * GET request mock.
         */
        interface Get<TResponse> {
            request: {
                method: "GET";
                path: string;
                regex?: boolean | undefined;
                params?: Object | undefined;
                queryString?: Object | undefined;
                headers?: Headers | undefined;
            };
            response: {
                status?: number | undefined;
                delay?: number | undefined;
                data: TResponse;
                headers?: Headers | undefined;
            };
        }

        /**
         * POST request mock with payload.
         */
        interface PostData<TResponse, TPayload> {
            request: {
                method: "POST";
                path: string;
                regex?: boolean | undefined;
                data: TPayload;
            };
            response: {
                status?: number | undefined;
                delay?: number | undefined;
                data: TResponse;
            };
        }

        /**
         * POST request mock.
         */
        interface Post<TResponse> {
            request: {
                method: "POST";
                path: string;
                regex?: boolean | undefined;
            };
            response: {
                status?: number | undefined;
                delay?: number | undefined;
                data: TResponse;
            };
        }

        /**
         * HEAD request mock.
         */
        interface Head<TResponse> {
            request: {
                method: "HEAD";
                path: string;
                regex?: boolean | undefined;
            };
            response: {
                status?: number | undefined;
                delay?: number | undefined;
                data: TResponse;
            };
        }

        /**
         * HTTP Delete request mock.
         */
        interface Delete<TResponse> {
            request: {
                method: "DELETE";
                path: string;
                regex?: boolean | undefined;
            };
            response: {
                status?: number | undefined;
                delay?: number | undefined;
                data: TResponse;
            };
        }

        /**
         * PUT request mock.
         */
        interface Put<TResponse> {
            request: {
                method: "PUT";
                path: string;
                regex?: boolean | undefined;
            };
            response: {
                status?: number | undefined;
                delay?: number | undefined;
                data: TResponse;
            };
        }

        /**
         * PUT request mock with payload.
         */
        interface PutData<TResponse, TPayload> {
            request: {
                method: "PUT";
                path: string;
                regex?: boolean | undefined;
                data: TPayload;
            };
            response: {
                status?: number | undefined;
                delay?: number | undefined;
                data: TResponse;
            };
        }

        /**
         * PATCH request mock.
         */
        interface Patch<TResponse> {
            request: {
                method: "PATCH";
                path: string;
                regex?: boolean | undefined;
            };
            response: {
                status?: number | undefined;
                delay?: number | undefined;
                data: TResponse;
            };
        }

        /**
         * JSONP request mock.
         */
        interface Jsonp<TResponse> {
            request: {
                method: "JSONP";
                path: string;
                regex?: boolean | undefined;
            };
            response: {
                status?: number | undefined;
                delay?: number | undefined;
                data: TResponse;
            };
        }
    }
}

declare var mock: mock.ProtractorHttpMock;
export = mock;
