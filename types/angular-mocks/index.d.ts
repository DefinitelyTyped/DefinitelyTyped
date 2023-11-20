/// <reference path="mocks.d.ts" />

import * as angular from "angular";

///////////////////////////////////////////////////////////////////////////////
// ngMock module (angular-mocks.js)
///////////////////////////////////////////////////////////////////////////////
declare module "angular" {
    ///////////////////////////////////////////////////////////////////////////
    // AngularStatic
    // We reopen it to add the MockStatic definition
    ///////////////////////////////////////////////////////////////////////////
    interface IAngularStatic {
        mock: IMockStatic;
    }

    // see https://docs.angularjs.org/api/ngMock/function/angular.mock.inject
    // Depending on context, it might return a function, however having `void | (() => void)`
    // as a return type seems to be not useful. E.g. it requires type assertions in `beforeEach(inject(...))`.
    interface IInjectStatic {
        (...fns: Array<Injectable<(...args: any[]) => void>>): any; // void | (() => void);
        strictDi(val?: boolean): any; // void | (() => void);
    }

    interface IMockStatic {
        // see https://docs.angularjs.org/api/ngMock/function/angular.mock.dump
        dump(obj: any): string;

        inject: IInjectStatic;

        // see https://docs.angularjs.org/api/ngMock/function/angular.mock.module
        module: {
            (...modules: any[]): any;
            sharedInjector(): void;
        };

        // see https://docs.angularjs.org/api/ngMock/type/angular.mock.TzDate
        TzDate(offset: number, timestamp: number | string): Date;
    }

    ///////////////////////////////////////////////////////////////////////////
    // ExceptionHandlerService
    // see https://docs.angularjs.org/api/ngMock/service/$exceptionHandler
    // see https://docs.angularjs.org/api/ngMock/provider/$exceptionHandlerProvider
    ///////////////////////////////////////////////////////////////////////////
    interface IExceptionHandlerProvider extends IServiceProvider {
        mode(mode: string): void;
    }

    ///////////////////////////////////////////////////////////////////////////
    // TimeoutService
    // see https://docs.angularjs.org/api/ngMock/service/$timeout
    // Augments the original service
    ///////////////////////////////////////////////////////////////////////////
    interface ITimeoutService {
        /**
         * **Deprecated** since version 1.7.3. (Use `$flushPendingTasks` instead.)
         *
         * ---
         * Flushes the queue of pending tasks.
         *
         * _This method is essentially an alias of `$flushPendingTasks`._
         *
         * > For historical reasons, this method will also flush non-`$timeout` pending tasks, such as
         * > `$q` promises and tasks scheduled via `$applyAsync` and `$evalAsync`.
         *
         * @param delay - The maximum timeout amount to flush up until.
         */
        flush(delay?: number): void;

        /**
         * **Deprecated** since version 1.7.3. (Use `$verifyNoPendingTasks` instead.)
         *
         * ---
         * Verifies that there are no pending tasks that need to be flushed. It throws an error if there
         * are still pending tasks.
         *
         * _This method is essentially an alias of `$verifyNoPendingTasks` (called with no arguments)._
         *
         * > For historical reasons, this method will also verify non-`$timeout` pending tasks, such as
         * > pending `$http` requests, in-progress `$route` transitions, unresolved `$q` promises and
         * > tasks scheduled via `$applyAsync` and `$evalAsync`.
         * >
         * > It is recommended to use `$verifyNoPendingTasks` instead, which additionally supports
         * > verifying a specific type of tasks. For example, you can verify there are no pending
         * > timeouts with `$verifyNoPendingTasks('$timeout')`.
         */
        verifyNoPendingTasks(): void;
    }

    ///////////////////////////////////////////////////////////////////////////
    // IntervalService
    // see https://docs.angularjs.org/api/ngMock/service/$interval
    // Augments the original service
    ///////////////////////////////////////////////////////////////////////////
    interface IIntervalService {
        /**
         * Runs interval tasks scheduled to be run in the next `millis` milliseconds.
         *
         * @param millis - The maximum timeout amount to flush up until.
         * @return The amount of time moved forward.
         */
        flush(millis: number): number;
    }

    ///////////////////////////////////////////////////////////////////////////
    // LogService
    // see https://docs.angularjs.org/api/ngMock/service/$log
    // Augments the original service
    ///////////////////////////////////////////////////////////////////////////
    interface ILogService {
        assertEmpty(): void;
        reset(): void;
    }

    interface ILogCall {
        logs: string[];
    }

    ///////////////////////////////////////////////////////////////////////////
    // ControllerService mock
    // see https://docs.angularjs.org/api/ngMock/service/$controller
    // This interface extends http://docs.angularjs.org/api/ng.$controller
    ///////////////////////////////////////////////////////////////////////////
    interface IControllerService {
        // Although the documentation doesn't state this, locals are optional
        <T>(
            controllerConstructor: (new(...args: any[]) => T) | ((...args: any[]) => T) | string,
            locals?: any,
            bindings?: any,
        ): T;
    }

    ///////////////////////////////////////////////////////////////////////////
    // ComponentControllerService
    // see https://docs.angularjs.org/api/ngMock/service/$componentController
    ///////////////////////////////////////////////////////////////////////////
    interface IComponentControllerService {
        // TBinding is an interface exposed by a component as per John Papa's style guide
        // https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#accessible-members-up-top
        <T, TBinding>(
            componentName: string,
            locals: { $scope?: IScope | undefined; [key: string]: any },
            bindings?: TBinding,
            ident?: string,
        ): T;
    }

    ///////////////////////////////////////////////////////////////////////////
    // HttpBackendService
    // see https://docs.angularjs.org/api/ngMock/service/$httpBackend
    ///////////////////////////////////////////////////////////////////////////
    interface IHttpBackendService {
        /**
         * Flushes pending requests using the trained responses. Requests are flushed in the order they
         * were made, but it is also possible to skip one or more requests (for example to have them
         * flushed later). This is useful for simulating scenarios where responses arrive from the server
         * in any order.
         *
         * If there are no pending requests to flush when the method is called, an exception is thrown (as
         * this is typically a sign of programming error).
         *
         * @param count Number of responses to flush. If undefined/null, all pending requests (starting
         * after `skip`) will be flushed.
         * @param skip Number of pending requests to skip. For example, a value of 5 would skip the first 5 pending requests and start flushing from the 6th onwards. _(default: 0)_
         */
        flush(count?: number, skip?: number): void;

        /**
         * Resets all request expectations, but preserves all backend definitions.
         */
        resetExpectations(): void;

        /**
         * Verifies that all of the requests defined via the `expect` api were made. If any of the
         * requests were not made, verifyNoOutstandingExpectation throws an exception.
         * @param digest Do digest before checking expectation. Pass anything except false to trigger digest.
         * NOTE: this flag is purposely undocumented by Angular, which means it's not to be used in normal client code.
         */
        verifyNoOutstandingExpectation(digest?: boolean): void;

        /**
         * Verifies that there are no outstanding requests that need to be flushed.
         */
        verifyNoOutstandingRequest(): void;

        /**
         * Creates a new request expectation.
         * Throws a preformatted error if expectation(s) don't match supplied string, regular expression, object, or if function returns false.
         * Returns an object with respond method that controls how a matched request is handled.
         * @param method HTTP method.
         * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
         * @param data HTTP request body string, json object, regular expression or function that receives the data and returns true if the data matches the current expectation.
         * @param headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
         * @param keys Array of keys to assign to regex matches in the request url.
         */
        expect(
            method: string,
            url: string | RegExp | ((url: string) => boolean),
            data?: string | RegExp | object | ((data: string) => boolean),
            headers?: mock.IHttpHeaders | ((headers: mock.IHttpHeaders) => boolean),
            keys?: string[],
        ): mock.IRequestHandler;

        /**
         * Creates a new request expectation for DELETE requests.
         * Throws a preformatted error if expectation(s) don't match supplied string, regular expression, object, or if function returns false.
         * Returns an object with respond method that controls how a matched request is handled.
         * @param url HTTP url string, regular expression or function that receives a url and returns true if the url is as expected.
         * @param headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
         * @param keys Array of keys to assign to regex matches in the request url.
         */
        expectDELETE(
            url: string | RegExp | ((url: string) => boolean),
            headers?: mock.IHttpHeaders | ((headers: mock.IHttpHeaders) => boolean),
            keys?: string[],
        ): mock.IRequestHandler;

        /**
         * Creates a new request expectation for GET requests.
         * Throws a preformatted error if expectation(s) don't match supplied string, regular expression, object, or if function returns false.
         * Returns an object with respond method that controls how a matched request is handled.
         * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
         * @param headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
         * @param keys Array of keys to assign to regex matches in the request url.
         */
        expectGET(
            url: string | RegExp | ((url: string) => boolean),
            headers?: mock.IHttpHeaders | ((headers: mock.IHttpHeaders) => boolean),
            keys?: string[],
        ): mock.IRequestHandler;

        /**
         * Creates a new request expectation for HEAD requests.
         * Throws a preformatted error if expectation(s) don't match supplied string, regular expression, object, or if function returns false.
         * Returns an object with respond method that controls how a matched request is handled.
         * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
         * @param headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
         * @param keys Array of keys to assign to regex matches in the request url.
         */

        expectHEAD(
            url: string | RegExp | ((url: string) => boolean),
            headers?: mock.IHttpHeaders | ((headers: mock.IHttpHeaders) => boolean),
            keys?: string[],
        ): mock.IRequestHandler;

        /**
         * Creates a new request expectation for JSONP requests.
         * Throws a preformatted error if expectation(s) don't match supplied string, regular expression, or if function returns false.
         * Returns an object with respond method that controls how a matched request is handled.
         * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
         * @param keys Array of keys to assign to regex matches in the request url.
         */
        expectJSONP(
            url: string | RegExp | ((url: string) => boolean),
            keys?: string[],
        ): mock.IRequestHandler;

        /**
         * Creates a new request expectation for PATCH requests.
         * Throws a preformatted error if expectation(s) don't match supplied string, regular expression, object, or if function returns false.
         * Returns an object with respond method that controls how a matched request is handled.
         * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
         * @param data HTTP request body string, json object, regular expression or function that receives the data and returns true if the data matches the current expectation.
         * @param headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
         * @param keys Array of keys to assign to regex matches in the request url.
         */
        expectPATCH(
            url: string | RegExp | ((url: string) => boolean),
            data?: string | RegExp | object | ((data: string) => boolean),
            headers?: mock.IHttpHeaders | ((headers: mock.IHttpHeaders) => boolean),
            keys?: string[],
        ): mock.IRequestHandler;

        /**
         * Creates a new request expectation for POST requests.
         * Throws a preformatted error if expectation(s) don't match supplied string, regular expression, object, or if function returns false.
         * Returns an object with respond method that controls how a matched request is handled.
         * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
         * @param data HTTP request body string, json object, regular expression or function that receives the data and returns true if the data matches the current expectation.
         * @param headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
         * @param keys Array of keys to assign to regex matches in the request url.
         */
        expectPOST(
            url: string | RegExp | ((url: string) => boolean),
            data?: string | RegExp | object | ((data: string) => boolean),
            headers?: mock.IHttpHeaders | ((headers: mock.IHttpHeaders) => boolean),
            keys?: string[],
        ): mock.IRequestHandler;

        /**
         * Creates a new request expectation for PUT requests.
         * Throws a preformatted error if expectation(s) don't match supplied string, regular expression, object, or if function returns false.
         * Returns an object with respond method that controls how a matched request is handled.
         * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
         * @param data HTTP request body string, json object, regular expression or function that receives the data and returns true if the data matches the current expectation.
         * @param headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
         * @param keys Array of keys to assign to regex matches in the request url.
         */
        expectPUT(
            url: string | RegExp | ((url: string) => boolean),
            data?: string | RegExp | object | ((data: string) => boolean),
            headers?: mock.IHttpHeaders | ((headers: mock.IHttpHeaders) => boolean),
            keys?: string[],
        ): mock.IRequestHandler;

        /**
         * Creates a new request expectation that compares only with the requested route.
         * This method offers colon delimited matching of the url path, ignoring the query string.
         * This allows declarations similar to how application routes are configured with `$routeProvider`.
         * As this method converts the definition url to regex, declaration order is important.
         * @param method HTTP method
         * @param url HTTP url string that supports colon param matching
         */
        expectRoute(method: string, url: string): mock.IRequestHandler;

        /**
         * Creates a new backend definition.
         * Returns an object with respond method that controls how a matched request is handled.
         * @param method HTTP method.
         * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
         * @param data HTTP request body string, json object, regular expression or function that receives the data and returns true if the data matches the current expectation.
         * @param headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
         * @param keys Array of keys to assign to regex matches in the request url.
         */
        when(
            method: string,
            url: string | RegExp | ((url: string) => boolean),
            data?: string | RegExp | object | ((data: string) => boolean),
            headers?: mock.IHttpHeaders | ((headers: mock.IHttpHeaders) => boolean),
            keys?: string[],
        ): mock.IRequestHandler;

        /**
         * Creates a new backend definition for DELETE requests.
         * Returns an object with respond method that controls how a matched request is handled.
         * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
         * @param headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
         * @param keys Array of keys to assign to regex matches in the request url.
         */
        whenDELETE(
            url: string | RegExp | ((url: string) => boolean),
            headers?: mock.IHttpHeaders | ((headers: mock.IHttpHeaders) => boolean),
            keys?: string[],
        ): mock.IRequestHandler;

        /**
         * Creates a new backend definition for GET requests.
         * Returns an object with respond method that controls how a matched request is handled.
         * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
         * @param headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
         * @param keys Array of keys to assign to regex matches in request url described above
         * @param keys Array of keys to assign to regex matches in the request url.
         */
        whenGET(
            url: string | RegExp | ((url: string) => boolean),
            headers?: mock.IHttpHeaders | ((headers: mock.IHttpHeaders) => boolean),
            keys?: string[],
        ): mock.IRequestHandler;

        /**
         * Creates a new backend definition for HEAD requests.
         * Returns an object with respond method that controls how a matched request is handled.
         * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
         * @param headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
         * @param keys Array of keys to assign to regex matches in the request url.
         */
        whenHEAD(
            url: string | RegExp | ((url: string) => boolean),
            headers?: mock.IHttpHeaders | ((headers: mock.IHttpHeaders) => boolean),
            keys?: string[],
        ): mock.IRequestHandler;

        /**
         * Creates a new backend definition for JSONP requests.
         * Returns an object with respond method that controls how a matched request is handled.
         * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
         * @param headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
         * @param keys Array of keys to assign to regex matches in the request url.
         */
        whenJSONP(
            url: string | RegExp | ((url: string) => boolean),
            keys?: string[],
        ): mock.IRequestHandler;

        /**
         * Creates a new backend definition for PATCH requests.
         * Returns an object with respond method that controls how a matched request is handled.
         * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
         * @param data HTTP request body string, json object, regular expression or function that receives the data and returns true if the data matches the current expectation.
         * @param headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
         * @param keys Array of keys to assign to regex matches in the request url.
         */
        whenPATCH(
            url: string | RegExp | ((url: string) => boolean),
            data?: string | RegExp | object | ((data: string) => boolean),
            headers?: mock.IHttpHeaders | ((headers: mock.IHttpHeaders) => boolean),
            keys?: string[],
        ): mock.IRequestHandler;

        /**
         * Creates a new backend definition for POST requests.
         * Returns an object with respond method that controls how a matched request is handled.
         * @param url HTTP url string, regular expression or function that receives a url and returns true
         * if the url matches the current definition.
         * @param data HTTP request body string, json object, regular expression or function that receives the data and returns true if the data matches the current expectation.
         * @param headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
         * @param keys Array of keys to assign to regex matches in the request url.
         */
        whenPOST(
            url: string | RegExp | ((url: string) => boolean),
            data?: string | RegExp | object | ((data: string) => boolean),
            headers?: mock.IHttpHeaders | ((headers: mock.IHttpHeaders) => boolean),
            keys?: string[],
        ): mock.IRequestHandler;

        /**
         * Creates a new backend definition for PUT requests.
         * Returns an object with respond method that controls how a matched request is handled.
         * @param url HTTP url string, regular expression or function that receives a url and returns true
         * if the url matches the current definition.
         * @param data HTTP request body or function that receives data string and returns true if the data
         * is as expected.
         * @param headers HTTP headers or function that receives http header object and returns true if the
         * headers match the current definition.
         * @param keys Array of keys to assign to regex matches in the request url.
         */
        whenPUT(
            url: string | RegExp | ((url: string) => boolean),
            data?: string | RegExp | object | ((data: string) => boolean),
            headers?: mock.IHttpHeaders | ((headers: mock.IHttpHeaders) => boolean),
            keys?: string[],
        ): mock.IRequestHandler;

        /**
         * Creates a new backend definition that compares only with the requested route.
         * This method offers colon delimited matching of the url path, ignoring the query string.
         * This allows declarations similar to how application routes are configured with `$routeProvider`.
         * As this method converts the definition url to regex, declaration order is important.
         * @param method HTTP method.
         * @param url HTTP url string that supports colon param matching.
         */
        whenRoute(method: string, url: string): mock.IRequestHandler;
    }

    ///////////////////////////////////////////////////////////////////////////
    // FlushPendingTasksService
    // see https://docs.angularjs.org/api/ngMock/service/$flushPendingTasks
    ///////////////////////////////////////////////////////////////////////////
    interface IFlushPendingTasksService {
        /**
         * Flushes all currently pending tasks and executes the corresponding callbacks.
         *
         * Optionally, you can also pass a `delay` argument to only flush tasks that are scheduled to be
         * executed within `delay` milliseconds. Currently, `delay` only applies to timeouts, since all
         * other tasks have a delay of 0 (i.e. they are scheduled to be executed as soon as possible, but
         * still asynchronously).
         *
         * If no delay is specified, it uses a delay such that all currently pending tasks are flushed.
         *
         * The types of tasks that are flushed include:
         *
         * - Pending timeouts (via `$timeout`).
         * - Pending tasks scheduled via `$applyAsync`.
         * - Pending tasks scheduled via `$evalAsync`.
         *   These include tasks scheduled via `$evalAsync()` indirectly (such as `$q` promises).
         *
         * > Periodic tasks scheduled via `$interval` use a different queue and are not flushed by
         * > `$flushPendingTasks()`. Use `$interval.flush(millis)` instead.
         *
         * @param millis - The number of milliseconds to flush.
         */
        (delay?: number): void;
    }

    ///////////////////////////////////////////////////////////////////////////
    // VerifyNoPendingTasksService
    // see https://docs.angularjs.org/api/ngMock/service/$verifyNoPendingTasks
    ///////////////////////////////////////////////////////////////////////////
    interface IVerifyNoPendingTasksService {
        /**
         * Verifies that there are no pending tasks that need to be flushed. It throws an error if there
         * are still pending tasks.
         *
         * You can check for a specific type of tasks only, by specifying a `taskType`.
         *
         * Available task types:
         *
         * - `$timeout`: Pending timeouts (via `$timeout`).
         * - `$http`: Pending HTTP requests (via `$http`).
         * - `$route`: In-progress route transitions (via `$route`).
         * - `$applyAsync`: Pending tasks scheduled via `$applyAsync`.
         * - `$evalAsync`: Pending tasks scheduled via `$evalAsync`.
         *   These include tasks scheduled via `$evalAsync()` indirectly (such as `$q` promises).
         *
         * > Periodic tasks scheduled via `$interval` use a different queue and are not taken into
         * > account by `$verifyNoPendingTasks()`. There is currently no way to verify that there are no
         * > pending `$interval` tasks.
         *
         * @param taskType - The type of tasks to check for.
         */
        (taskType?: string): void;
    }

    ///////////////////////////////////////////////////////////////////////////
    // AnimateService
    // see https://docs.angularjs.org/api/ngMock/service/$animate
    ///////////////////////////////////////////////////////////////////////////
    namespace animate {
        interface IAnimateService {
            /**
             * This method will close all pending animations (both Javascript and CSS) and it will also flush any remaining
             * animation frames and/or callbacks.
             */
            closeAndFlush(): void;

            /**
             * This method is used to flush the pending callbacks and animation frames to either start
             * an animation or conclude an animation. Note that this will not actually close an
             * actively running animation (see `closeAndFlush()`} for that).
             */
            flush(): void;
        }
    }

    namespace mock {
        /** Object returned by the the mocked HttpBackendService expect/when methods */
        interface IRequestHandler {
            /**
             * Controls the response for a matched request using a function to construct the response.
             * Returns the RequestHandler object for possible overrides.
             * @param func Function that receives the request HTTP method, url, data, headers, and an array of keys
             * to regex matches in the request url and returns an array containing response status (number), data,
             * headers, and status text.
             */
            respond(
                func: (
                    method: string,
                    url: string,
                    data: string | object,
                    headers: IHttpHeaders,
                    params: { [key: string]: string },
                ) => [number, string | object, IHttpHeaders, string],
            ): IRequestHandler;

            /**
             * Controls the response for a matched request using supplied static data to construct the response.
             * Returns the RequestHandler object for possible overrides.
             * @param status HTTP status code to add to the response.
             * @param data Data to add to the response.
             * @param headers Headers object to add to the response.
             * @param responseText Response text to add to the response.
             */
            respond(
                status: number,
                data?: string | object,
                headers?: IHttpHeaders,
                responseText?: string,
            ): IRequestHandler;

            /**
             * Controls the response for a matched request using the HTTP status code 200 and supplied static data to construct the response.
             * Returns the RequestHandler object for possible overrides.
             * @param data Data to add to the response.
             * @param headers Headers object to add to the response.
             * @param responseText Response text to add to the response.
             */
            respond(
                data: string | object,
                headers?: IHttpHeaders,
                responseText?: string,
            ): IRequestHandler;

            /**
             * Any request matching a backend definition or expectation with passThrough handler will be
             * passed through to the real backend (an XHR request will be made to the server.)
             * Available when ngMockE2E is loaded
             */
            passThrough(): IRequestHandler;
        }

        interface IHttpHeaders {
            [headerName: string]: any;
        }

        /**
         * Contains additional event data used by the `browserTrigger` function when creating an event.
         */
        interface IBrowserTriggerEventData {
            /**
             * [Event.bubbles](https://developer.mozilla.org/docs/Web/API/Event/bubbles).
             * Not applicable to all events.
             */
            bubbles?: boolean | undefined;
            /**
             * [Event.cancelable](https://developer.mozilla.org/docs/Web/API/Event/cancelable).
             * Not applicable to all events.
             */
            cancelable?: boolean | undefined;
            /**
             * [charCode](https://developer.mozilla.org/docs/Web/API/KeyboardEvent/charcode)
             * for keyboard events (keydown, keypress, and keyup).
             */
            charcode?: number | undefined;
            /**
             * [data](https://developer.mozilla.org/en-US/docs/Web/API/CompositionEvent/data) for
             * [CompositionEvents](https://developer.mozilla.org/en-US/docs/Web/API/CompositionEvent).
             */
            data?: string | undefined;
            /**
             * The elapsedTime for
             * [TransitionEvent](https://developer.mozilla.org/docs/Web/API/TransitionEvent)
             * and [AnimationEvent](https://developer.mozilla.org/docs/Web/API/AnimationEvent).
             */
            elapsedTime?: number | undefined;
            /**
             * [keyCode](https://developer.mozilla.org/docs/Web/API/KeyboardEvent/keycode)
             * for keyboard events (keydown, keypress, and keyup).
             */
            keycode?: number | undefined;
            /**
             * An array of possible modifier keys (ctrl, alt, shift, meta) for
             * [MouseEvent](https://developer.mozilla.org/docs/Web/API/MouseEvent) and
             * keyboard events (keydown, keypress, and keyup).
             */
            keys?: Array<"ctrl" | "alt" | "shift" | "meta"> | undefined;
            /**
             * The [relatedTarget](https://developer.mozilla.org/docs/Web/API/MouseEvent/relatedTarget)
             * for [MouseEvent](https://developer.mozilla.org/docs/Web/API/MouseEvent).
             */
            relatedTarget?: Node | undefined;
            /**
             * [which](https://developer.mozilla.org/docs/Web/API/KeyboardEvent/which)
             * for keyboard events (keydown, keypress, and keyup).
             */
            which?: number | undefined;
            /**
             * x-coordinates for [MouseEvent](https://developer.mozilla.org/docs/Web/API/MouseEvent)
             * and [TouchEvent](https://developer.mozilla.org/docs/Web/API/TouchEvent).
             */
            x?: number | undefined;
            /**
             * y-coordinates for [MouseEvent](https://developer.mozilla.org/docs/Web/API/MouseEvent)
             * and [TouchEvent](https://developer.mozilla.org/docs/Web/API/TouchEvent).
             */
            y?: number | undefined;
        }
    }
}

///////////////////////////////////////////////////////////////////////////////
// functions attached to global object (window)
///////////////////////////////////////////////////////////////////////////////
// Use `angular.mock.module` instead of `module`, as `module` conflicts with commonjs.
// declare var module: (...modules: any[]) => any;
declare global {
    const inject: angular.IInjectStatic;

    /**
     * This is a global (window) function that is only available when the `ngMock` module is included.
     * It can be used to trigger a native browser event on an element, which is useful for unit testing.
     *
     * @param element Either a wrapped jQuery/jqLite node or a DOM element.
     * @param eventType Optional event type. If none is specified, the function tries to determine the
     *     right event type for the element, e.g. `change` for `input[text]`.
     * @param eventData An optional object which contains additional event data used when creating the
     *     event.
     */
    function browserTrigger(
        element: JQuery | Element,
        eventType?: string,
        eventData?: angular.mock.IBrowserTriggerEventData,
    ): void;
}
