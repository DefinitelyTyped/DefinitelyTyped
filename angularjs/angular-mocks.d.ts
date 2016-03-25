// Type definitions for Angular JS 1.3 (ngMock, ngMockE2E module)
// Project: http://angularjs.org
// Definitions by: Diego Vilar <http://github.com/diegovilar>, Tony Curtis <http://github.com/daltin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="angular.d.ts" />

declare module "angular-mocks/ngMock" {
    var _: string;
    export = _;
}

declare module "angular-mocks/ngMockE2E" {
    var _: string;
    export = _;
}

declare module "angular-mocks/ngAnimateMock" {
    var _: string;
    export = _;
}

///////////////////////////////////////////////////////////////////////////////
// ngMock module (angular-mocks.js)
///////////////////////////////////////////////////////////////////////////////
declare namespace angular {

    ///////////////////////////////////////////////////////////////////////////
    // AngularStatic
    // We reopen it to add the MockStatic definition
    ///////////////////////////////////////////////////////////////////////////
    interface IAngularStatic {
        mock: IMockStatic;
    }

    // see https://docs.angularjs.org/api/ngMock/function/angular.mock.inject
    interface IInjectStatic {
        (...fns: Function[]): any;
        (...inlineAnnotatedConstructor: any[]): any; // this overload is undocumented, but works
        strictDi(val?: boolean): void;
    }

    interface IMockStatic {
        // see https://docs.angularjs.org/api/ngMock/function/angular.mock.dump
        dump(obj: any): string;

        inject: IInjectStatic

        // see https://docs.angularjs.org/api/ngMock/function/angular.mock.module
        module(...modules: any[]): any;

        // see https://docs.angularjs.org/api/ngMock/type/angular.mock.TzDate
        TzDate(offset: number, timestamp: number): Date;
        TzDate(offset: number, timestamp: string): Date;
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
        flush(delay?: number): void;
        flushNext(expectedDelay?: number): void;
        verifyNoPendingTasks(): void;
    }

    ///////////////////////////////////////////////////////////////////////////
    // IntervalService
    // see https://docs.angularjs.org/api/ngMock/service/$interval
    // Augments the original service
    ///////////////////////////////////////////////////////////////////////////
    interface IIntervalService {
        flush(millis?: number): number;
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
    // HttpBackendService
    // see https://docs.angularjs.org/api/ngMock/service/$httpBackend
    ///////////////////////////////////////////////////////////////////////////
    interface IHttpBackendService {
        /**
          * Flushes all pending requests using the trained responses.
          * @param count Number of responses to flush (in the order they arrived). If undefined, all pending requests will be flushed.
          */
        flush(count?: number): void;

        /**
          * Resets all request expectations, but preserves all backend definitions.
          */
        resetExpectations(): void;

        /**
          * Verifies that all of the requests defined via the expect api were made. If any of the requests were not made, verifyNoOutstandingExpectation throws an exception.
          */
        verifyNoOutstandingExpectation(): void;

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
          */
        expect(method: string, url: string | RegExp | ((url: string) => boolean), data?: string | RegExp | Object | ((data: string) => boolean), headers?: Object | ((object: Object) => boolean)) :mock.IRequestHandler;

        /**
          * Creates a new request expectation for DELETE requests.
          * Throws a preformatted error if expectation(s) don't match supplied string, regular expression, object, or if function returns false.
          * Returns an object with respond method that controls how a matched request is handled.
          * @param url HTTP url string, regular expression or function that receives a url and returns true if the url is as expected.
          * @param headers HTTP headers object to be compared with the HTTP headers in the request.
        */
        expectDELETE(url: string | RegExp | ((url: string) => boolean), headers?: Object): mock.IRequestHandler;

        /**
          * Creates a new request expectation for GET requests.
          * Throws a preformatted error if expectation(s) don't match supplied string, regular expression, object, or if function returns false.
          * Returns an object with respond method that controls how a matched request is handled.
          * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
          * @param headers HTTP headers object to be compared with the HTTP headers in the request.
          */
        expectGET(url: string | RegExp | ((url: string) => boolean), headers?: Object): mock.IRequestHandler;

        /**
          * Creates a new request expectation for HEAD requests.
          * Throws a preformatted error if expectation(s) don't match supplied string, regular expression, object, or if function returns false.
          * Returns an object with respond method that controls how a matched request is handled.
          * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
          * @param headers HTTP headers object to be compared with the HTTP headers in the request.
          */
        expectHEAD(url: string | RegExp | ((url: string) => boolean), headers?: Object): mock.IRequestHandler;

        /**
          * Creates a new request expectation for JSONP requests.
          * Throws a preformatted error if expectation(s) don't match supplied string, regular expression, or if function returns false.
          * Returns an object with respond method that controls how a matched request is handled.
          * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
          */
        expectJSONP(url: string | RegExp | ((url: string) => boolean)): mock.IRequestHandler;

        /**
          * Creates a new request expectation for PATCH requests.
          * Throws a preformatted error if expectation(s) don't match supplied string, regular expression, object, or if function returns false.
          * Returns an object with respond method that controls how a matched request is handled.
          * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
          * @param data HTTP request body string, json object, regular expression or function that receives the data and returns true if the data matches the current expectation.
          * @param headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
          */
        expectPATCH(url: string | RegExp | ((url: string) => boolean), data?: string | RegExp | Object | ((data: string) => boolean), headers?: Object): mock.IRequestHandler;

        /**
          * Creates a new request expectation for POST requests.
          * Throws a preformatted error if expectation(s) don't match supplied string, regular expression, object, or if function returns false.
          * Returns an object with respond method that controls how a matched request is handled.
          * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
          * @param data HTTP request body string, json object, regular expression or function that receives the data and returns true if the data matches the current expectation.
          * @param headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
          */
        expectPOST(url: string | RegExp | ((url: string) => boolean), data?: string | RegExp | Object | ((data: string) => boolean), headers?: Object): mock.IRequestHandler;

        /**
          * Creates a new request expectation for PUT requests.
          * Throws a preformatted error if expectation(s) don't match supplied string, regular expression, object, or if function returns false.
          * Returns an object with respond method that controls how a matched request is handled.
          * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
          * @param data HTTP request body string, json object, regular expression or function that receives the data and returns true if the data matches the current expectation.
          * @param headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
          */
        expectPUT(url: string | RegExp | ((url: string) => boolean), data?: string | RegExp | Object | ((data: string) => boolean), headers?: Object): mock.IRequestHandler;

        /**
          * Creates a new backend definition.
          * Returns an object with respond method that controls how a matched request is handled.
          * @param method HTTP method.
          * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
          * @param data HTTP request body string, json object, regular expression or function that receives the data and returns true if the data matches the current expectation.
          * @param headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
          */
        when(method: string, url: string | RegExp | ((url: string) => boolean), data?: string | RegExp | Object | ((data: string) => boolean), headers?: Object | ((object: Object) => boolean)): mock.IRequestHandler;

        /**
          * Creates a new backend definition for DELETE requests.
          * Returns an object with respond method that controls how a matched request is handled.
          * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
          * @param headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
          */
        whenDELETE(url: string | RegExp | ((url: string) => boolean), headers?: Object | ((object: Object) => boolean)): mock.IRequestHandler;

        /**
          * Creates a new backend definition for GET requests.
          * Returns an object with respond method that controls how a matched request is handled.
          * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
          * @param headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
          */
        whenGET(url: string | RegExp | ((url: string) => boolean), headers?: Object | ((object: Object) => boolean)): mock.IRequestHandler;

        /**
          * Creates a new backend definition for HEAD requests.
          * Returns an object with respond method that controls how a matched request is handled.
          * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
          * @param headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
          */
        whenHEAD(url: string | RegExp | ((url: string) => boolean), headers?: Object | ((object: Object) => boolean)): mock.IRequestHandler;

        /**
          * Creates a new backend definition for JSONP requests.
          * Returns an object with respond method that controls how a matched request is handled.
          * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
          * @param headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
          */
        whenJSONP(url: string | RegExp | ((url: string) => boolean)): mock.IRequestHandler;

        /**
          * Creates a new backend definition for PATCH requests.
          * Returns an object with respond method that controls how a matched request is handled.
          * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
          * @param data HTTP request body string, json object, regular expression or function that receives the data and returns true if the data matches the current expectation.
          * @param headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
          */
        whenPATCH(url: string | RegExp | ((url: string) => boolean), data?: string | RegExp | Object | ((data: string) => boolean), headers?: Object | ((object: Object) => boolean)): mock.IRequestHandler;

        /**
          * Creates a new backend definition for POST requests.
          * Returns an object with respond method that controls how a matched request is handled.
          * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
          * @param data HTTP request body string, json object, regular expression or function that receives the data and returns true if the data matches the current expectation.
          * @param headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
          */
        whenPOST(url: string | RegExp | ((url: string) => boolean), data?: string | RegExp | Object | ((data: string) => boolean), headers?: Object | ((object: Object) => boolean)): mock.IRequestHandler;

        /**
          * Creates a new backend definition for PUT requests.
          * Returns an object with respond method that controls how a matched request is handled.
          * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
          * @param data HTTP request body string, json object, regular expression or function that receives the data and returns true if the data matches the current expectation.
          * @param headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
          */
        whenPUT(url: string | RegExp | ((url: string) => boolean), data?: string | RegExp | Object | ((data: string) => boolean), headers?: Object | ((object: Object) => boolean)): mock.IRequestHandler;
    }

    export module mock {
        // returned interface by the the mocked HttpBackendService expect/when methods
        interface IRequestHandler {

            /**
              * Controls the response for a matched request using a function to construct the response.
              * Returns the RequestHandler object for possible overrides.
              * @param func Function that receives the request HTTP method, url, data, and headers and returns an array containing response status (number), data, headers, and status text.
              */
            respond(func: ((method: string, url: string, data: string | Object, headers: Object) => [number, string | Object, Object, string])): IRequestHandler;

            /**
              * Controls the response for a matched request using supplied static data to construct the response.
              * Returns the RequestHandler object for possible overrides.
              * @param status HTTP status code to add to the response.
              * @param data Data to add to the response.
              * @param headers Headers object to add to the response.
              * @param responseText Response text to add to the response.
              */
            respond(status: number, data: string | Object, headers?: Object, responseText?: string): IRequestHandler;

            /**
              * Controls the response for a matched request using the HTTP status code 200 and supplied static data to construct the response.
              * Returns the RequestHandler object for possible overrides.
              * @param data Data to add to the response.
              * @param headers Headers object to add to the response.
              * @param responseText Response text to add to the response.
              */
            respond(data: string | Object, headers?: Object, responseText?: string): IRequestHandler;

            // Available when ngMockE2E is loaded
            /**
              * Any request matching a backend definition or expectation with passThrough handler will be passed through to the real backend (an XHR request will be made to the server.)
              */
            passThrough(): IRequestHandler;
        }

    }

}

///////////////////////////////////////////////////////////////////////////////
// functions attached to global object (window)
///////////////////////////////////////////////////////////////////////////////
//Use `angular.mock.module` instead of `module`, as `module` conflicts with commonjs.
//declare var module: (...modules: any[]) => any;
declare var inject: angular.IInjectStatic;
