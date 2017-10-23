// Type definitions for protractor-http-mock
// Project: https://github.com/atecarlos/protractor-http-mock
// Definitions by: Crevil <https://github.com/Crevil>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as webdriver from 'selenium-webdriver';

declare namespace mock {
    interface ProtractorHttpMock {
        /**
         * Instantiate mock module. This must be done before the browser connects.
         *
         * @param mocks An array of mock modules to load into the application.
         * @param plugins An array of Plugin objects.
         * @param skipDefaults Set true to skip loading of default mocks.
         */
        <TResponse, TPayload>(mocks?: Array<requests.AllRequests<TResponse, TPayload>>, plugins?: Array<Plugin>, skipDefaults?: boolean): ProtractorHttpMock;

        /**
         * Instantiate mock module. This must be done before the browser connects.
         *
         * @param mocks An array of mock modules to load into the application.
         * @param plugins An array of NPM modules as strings.
         * @param skipDefaults Set true to skip loading of default mocks.
         */
        <TResponse, TPayload>(mocks?: Array<requests.AllRequests<TResponse, TPayload>>, plugins?: Array<string>, skipDefaults?: boolean): ProtractorHttpMock;

        /**
         * Instantiate mock modules from files. This must be done before the browser connects.
         *
         * @param mocks An array of mock module names relative to the rootDirectory configuration.
         * @param plugins An array of Plugin objects.
         * @param skipDefaults Set true to skip loading of default mocks.
         */
        (mocks: Array<string>, plugins?: Array<Plugin>, skipDefaults?: boolean): ProtractorHttpMock;

        /**
         * Instantiate mock modules from files. This must be done before the browser connects.
         *
         * @param mocks An array of mock module names relative to the rootDirectory configuration.
         * @param plugins An array of NPM modules as strings.
         * @param skipDefaults Set true to skip loading of default mocks.
         */
        (mocks: Array<string>, plugins?: Array<string>, skipDefaults?: boolean): ProtractorHttpMock;

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
            rootDirectory?: string;

            /**
             * Path to protractor configuration file.
             * Default: protractor.conf
             */
            protractorConfig?: string;
        };

        /**
         * Add mocks during test execution.
         * Returns a promise that will be resolved with a true boolean
         * when mocks are added.
         *
         * @param mocks An array of mock modules to load into the application.
         */
        add<T1, T2>(mocks: Array<requests.AllRequests<T1, T2>>): webdriver.promise.Promise<boolean>;

        /**
         * Remove mocks during test execution.
         * Returns a promise that will be resolved with a true boolean
         * when the supplied mocks are removed.
         *
         * @param mocks An array of mock modules to remove from the application.
         */
        remove<T1, T2>(mocks: Array<requests.AllRequests<T1, T2>>): webdriver.promise.Promise<boolean>;
    }

    /**
     * Matched request.
     */
    interface ReceivedRequest {
        url: string;
        method: requests.Method;
    }

    /**
     * Plugin for custom matching logic.
     */
    interface Plugin {
        /**
         * Match function.
         * Return a truthy value to indicate successfull match.
         *
         * @param mockRequest The mock to compare request with.
         * @param requestConfig The request object to compare mock with.
         */
        match<T1, T2>(mockRequest: requests.AllRequests<T1, T2>, requestConfig: requests.AllRequests<T1, T2>): boolean;
    }

    /**
     * Plugin for custom matching logic.
     */
    interface Plugin {
        /**
         * Match function.
         * Return a truthy value to indicate successfull match.
         *
         * @param mockRequest The mock to compare request with.
         * @param requestConfig The request object to compare mock with.
         */
        match<T1, T2>(mockRequest: requests.AllRequests<T1, T2>, requestConfig: requests.AllRequests<T1, T2>): boolean;
    }

    namespace requests {
        /**
         * Request methods type
         */
        type Method = "GET" | "POST" | "DELETE" | "PUT" | "HEAD" | "PATCH" | "JSONP";

        /**
         * All available request types.
         */
        type AllRequests<T1, T2> = Get<T1> |
            PostData<T1, T2> |
            Post<T1> |
            Head<T1> |
            Delete<T1> |
            Put<T1> |
            Patch<T1> |
            Jsonp<T1>;

        /**
         * GET request mock.
         */
        interface Get<TResponse> {
            request: {
                method: Method;
                path: string;
                regex?: boolean;
                params?: Object;
                queryString?: Object;
                headers?: Object;
                interceptedRequest?: boolean;
                interceptedAnonymousRequest?: boolean;
            };
            response: {
                status?: number;
                data: TResponse;
            };
        }

        /**
         * POST request mock with payload.
         */
        interface PostData<TResponse, TPayload> {
            request: {
                method: Method;
                path: string;
                regex?: boolean;
                data: TPayload;
            };
            response: {
                status?: number;
                data: TResponse;
            };
        }

        /**
         * POST request mock.
         */
        interface Post<TResponse> {
            request: {
                method: Method;
                path: string;
                regex?: boolean;
            };
            response: {
                status?: number;
                data: TResponse;
            };
        }

        /**
         * HEAD request mock.
         */
        interface Head<TResponse> {
            request: {
                method: Method;
                path: string;
                regex?: boolean;
            };
            response: {
                status?: number;
                data: TResponse;
            };
        }

        /**
         * HTTP Delete request mock.
         */
        interface Delete<TResponse> {
            request: {
                method: Method;
                path: string;
                regex?: boolean;
            };
            response: {
                status?: number;
                data: TResponse;
            };
        }

        /**
         * PUT request mock.
         */
        interface Put<TResponse> {
            request: {
                method: Method;
                path: string;
                regex?: boolean;
            };
            response: {
                status?: number;
                data: TResponse;
            };
        }

        /**
         * PATCH request mock.
         */
        interface Patch<TResponse> {
            request: {
                method: Method;
                path: string;
                regex?: boolean;
            };
            response: {
                status?: number;
                data: TResponse;
            };
        }

        /**
         * JSONP request mock.
         */
        interface Jsonp<TResponse> {
            request: {
                method: Method;
                path: string;
                regex?: boolean;
            };
            response: {
                status?: number;
                data: TResponse;
            };
        }
    }
}

declare var mock: mock.ProtractorHttpMock;
export = mock;
