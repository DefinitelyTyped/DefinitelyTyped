// Type definitions for Angular JS (ngMock, ngMockE2E module) 1.5
// Project: http://angularjs.org
// Definitions by: Diego Vilar <http://github.com/diegovilar>, Tony Curtis <http://github.com/daltin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="angular" />
/// <reference path="mocks.d.ts" />

import * as angular from 'angular';

///////////////////////////////////////////////////////////////////////////////
// ngMock module (angular-mocks.js)
///////////////////////////////////////////////////////////////////////////////
declare module 'angular' {

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
    module: {
      (...modules: any[]): any;
      sharedInjector(): void;
    }

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
  // ControllerService mock
  // see https://docs.angularjs.org/api/ngMock/service/$controller
  // This interface extends http://docs.angularjs.org/api/ng.$controller
  ///////////////////////////////////////////////////////////////////////////
  interface IControllerService {
    // Although the documentation doesn't state this, locals are optional
    <T>(controllerConstructor: new (...args: any[]) => T, locals?: any, bindings?: any): T;
    <T>(controllerConstructor: Function, locals?: any, bindings?: any): T;
    <T>(controllerName: string, locals?: any, bindings?: any): T;
  }

  ///////////////////////////////////////////////////////////////////////////
  // ComponentControllerService
  // see https://docs.angularjs.org/api/ngMock/service/$componentController
  ///////////////////////////////////////////////////////////////////////////
  interface IComponentControllerService {
    // TBinding is an interface exposed by a component as per John Papa's style guide
    // https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#accessible-members-up-top
    <T, TBinding>(componentName: string, locals: { $scope?: IScope, [key: string]: any }, bindings?: TBinding, ident?: string): T;
  }


  ///////////////////////////////////////////////////////////////////////////
  // HttpBackendService
  // see https://docs.angularjs.org/api/ngMock/service/$httpBackend
  ///////////////////////////////////////////////////////////////////////////
  interface IHttpBackendService {
    /**
      * Flushes pending requests using the trained responses. Requests are flushed in the order they were made, but it is also possible to skip one or more requests (for example to have them flushed later). This is useful for simulating scenarios where responses arrive from the server in any order.
      *
      * If there are no pending requests to flush when the method is called, an exception is thrown (as this is typically a sign of programming error).
      * @param count Number of responses to flush. If undefined/null, all pending requests (starting after `skip`) will be flushed.
      * @param skip Number of pending requests to skip. For example, a value of 5 would skip the first 5 pending requests and start flushing from the 6th onwards. _(default: 0)_
      */
    flush(count?: number, skip?: number): void;

    /**
      * Resets all request expectations, but preserves all backend definitions.
      */
    resetExpectations(): void;

    /**
      * Verifies that all of the requests defined via the expect api were made. If any of the requests were not made, verifyNoOutstandingExpectation throws an exception.
      * @param digest Do digest before checking expectation. Pass anything except false to trigger digest. NOTE this flag is purposely undocumented by Angular, which means it's not to be used in normal client code.
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
    expect(method: string, url: string | RegExp | ((url: string) => boolean), data?: string | RegExp | Object | ((data: string) => boolean), headers?: Object | ((object: Object) => boolean), keys?: Object[]): mock.IRequestHandler;

        /**
          * Creates a new request expectation for DELETE requests.
          * Throws a preformatted error if expectation(s) don't match supplied string, regular expression, object, or if function returns false.
          * Returns an object with respond method that controls how a matched request is handled.
          * @param url HTTP url string, regular expression or function that receives a url and returns true if the url is as expected.
          * @param headers HTTP headers object to be compared with the HTTP headers in the request.
          * @param keys Array of keys to assign to regex matches in the request url.
        */
    expectDELETE(url: string | RegExp | ((url: string) => boolean), headers?: Object, keys?: Object[]): mock.IRequestHandler;

        /**
          * Creates a new request expectation for GET requests.
          * Throws a preformatted error if expectation(s) don't match supplied string, regular expression, object, or if function returns false.
          * Returns an object with respond method that controls how a matched request is handled.
          * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
          * @param headers HTTP headers object to be compared with the HTTP headers in the request.
          * @param keys Array of keys to assign to regex matches in the request url.
          */
    expectGET(url: string | RegExp | ((url: string) => boolean), headers?: Object, keys?: Object[]): mock.IRequestHandler;

        /**
          * Creates a new request expectation for HEAD requests.
          * Throws a preformatted error if expectation(s) don't match supplied string, regular expression, object, or if function returns false.
          * Returns an object with respond method that controls how a matched request is handled.
          * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
          * @param headers HTTP headers object to be compared with the HTTP headers in the request.
          * @param keys Array of keys to assign to regex matches in the request url.
          */

    expectHEAD(url: string | RegExp | ((url: string) => boolean), headers?: Object, keys?: Object[]): mock.IRequestHandler;

        /**
          * Creates a new request expectation for JSONP requests.
          * Throws a preformatted error if expectation(s) don't match supplied string, regular expression, or if function returns false.
          * Returns an object with respond method that controls how a matched request is handled.
          * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
          * @param keys Array of keys to assign to regex matches in the request url.
          */
    expectJSONP(url: string | RegExp | ((url: string) => boolean), keys?: Object[]): mock.IRequestHandler;

        /**
          * Creates a new request expectation for PATCH requests.
          * Throws a preformatted error if expectation(s) don't match supplied string, regular expression, object, or if function returns false.
          * Returns an object with respond method that controls how a matched request is handled.
          * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
          * @param data HTTP request body string, json object, regular expression or function that receives the data and returns true if the data matches the current expectation.
          * @param headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
          * @param keys Array of keys to assign to regex matches in the request url.
          */
    expectPATCH(url: string | RegExp | ((url: string) => boolean), data?: string | RegExp | Object | ((data: string) => boolean), headers?: Object, keys?: Object[]): mock.IRequestHandler;

        /**
          * Creates a new request expectation for POST requests.
          * Throws a preformatted error if expectation(s) don't match supplied string, regular expression, object, or if function returns false.
          * Returns an object with respond method that controls how a matched request is handled.
          * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
          * @param data HTTP request body string, json object, regular expression or function that receives the data and returns true if the data matches the current expectation.
          * @param headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
          * @param keys Array of keys to assign to regex matches in the request url.
          */
    expectPOST(url: string | RegExp | ((url: string) => boolean), data?: string | RegExp | Object | ((data: string) => boolean), headers?: Object, keys?: Object[]): mock.IRequestHandler;

        /**
          * Creates a new request expectation for PUT requests.
          * Throws a preformatted error if expectation(s) don't match supplied string, regular expression, object, or if function returns false.
          * Returns an object with respond method that controls how a matched request is handled.
          * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
          * @param data HTTP request body string, json object, regular expression or function that receives the data and returns true if the data matches the current expectation.
          * @param headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
          * @param keys Array of keys to assign to regex matches in the request url.
          */
    expectPUT(url: string | RegExp | ((url: string) => boolean), data?: string | RegExp | Object | ((data: string) => boolean), headers?: Object, keys?: Object[]): mock.IRequestHandler;

        /**
          * Creates a new backend definition.
          * Returns an object with respond method that controls how a matched request is handled.
          * @param method HTTP method.
          * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
          * @param data HTTP request body string, json object, regular expression or function that receives the data and returns true if the data matches the current expectation.
          * @param headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
          * @param keys Array of keys to assign to regex matches in the request url.
          */
    when(method: string, url: string | RegExp | ((url: string) => boolean), data?: string | RegExp | Object | ((data: string) => boolean), headers?: Object | ((object: Object) => boolean), keys?: Object[]): mock.IRequestHandler;

        /**
          * Creates a new backend definition for DELETE requests.
          * Returns an object with respond method that controls how a matched request is handled.
          * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
          * @param headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
          * @param keys Array of keys to assign to regex matches in the request url.
          */
    whenDELETE(url: string | RegExp | ((url: string) => boolean), headers?: Object | ((object: Object) => boolean), keys?: Object[]): mock.IRequestHandler;

        /**
          * Creates a new backend definition for GET requests.
          * Returns an object with respond method that controls how a matched request is handled.
          * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
          * @param headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
          * @param keys Array of keys to assign to regex matches in request url described above
          * @param keys Array of keys to assign to regex matches in the request url.
          */
    whenGET(url: string | RegExp | ((url: string) => boolean), headers?: Object | ((object: Object) => boolean), keys?: Object[]): mock.IRequestHandler;

        /**
          * Creates a new backend definition for HEAD requests.
          * Returns an object with respond method that controls how a matched request is handled.
          * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
          * @param headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
          * @param keys Array of keys to assign to regex matches in the request url.
          */
    whenHEAD(url: string | RegExp | ((url: string) => boolean), headers?: Object | ((object: Object) => boolean), keys?: Object[]): mock.IRequestHandler;

        /**
          * Creates a new backend definition for JSONP requests.
          * Returns an object with respond method that controls how a matched request is handled.
          * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
          * @param headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
          * @param keys Array of keys to assign to regex matches in the request url.
          */
    whenJSONP(url: string | RegExp | ((url: string) => boolean), keys?: Object[]): mock.IRequestHandler;

        /**
          * Creates a new backend definition for PATCH requests.
          * Returns an object with respond method that controls how a matched request is handled.
          * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
          * @param data HTTP request body string, json object, regular expression or function that receives the data and returns true if the data matches the current expectation.
          * @param headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
          * @param keys Array of keys to assign to regex matches in the request url.
          */
    whenPATCH(url: string | RegExp | ((url: string) => boolean), data?: string | RegExp | Object | ((data: string) => boolean), headers?: Object | ((object: Object) => boolean), keys?: Object[]): mock.IRequestHandler;

        /**
          * Creates a new backend definition for POST requests.
          * Returns an object with respond method that controls how a matched request is handled.
          * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
          * @param data HTTP request body string, json object, regular expression or function that receives the data and returns true if the data matches the current expectation.
          * @param headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
          * @param keys Array of keys to assign to regex matches in the request url.
          */
    whenPOST(url: string | RegExp | ((url: string) => boolean), data?: string | RegExp | Object | ((data: string) => boolean), headers?: Object | ((object: Object) => boolean), keys?: Object[]): mock.IRequestHandler;

        /**
          * Creates a new backend definition for PUT requests.
          * Returns an object with respond method that controls how a matched request is handled.
          * @param url HTTP url string, regular expression or function that receives a url and returns true if the url matches the current expctation.
          * @param data HTTP request body string, json object, regular expression or function that receives the data and returns true if the data matches the current expectation.
          * @param headers HTTP headers object or function that receives the headers and returns true if the headers match the current expectation.
          * @param keys Array of keys to assign to regex matches in the request url.
          */
    whenPUT(url: string | RegExp | ((url: string) => boolean), data?: string | RegExp | Object | ((data: string) => boolean), headers?: Object | ((object: Object) => boolean), keys?: Object[]): mock.IRequestHandler;
  }

  ///////////////////////////////////////////////////////////////////////////
  // AnimateService
  // see https://docs.angularjs.org/api/ngMock/service/$animate
  ///////////////////////////////////////////////////////////////////////////
  module animate {
    interface IAnimateService {

      /**
       * This method will close all pending animations (both Javascript and CSS) and it will also flush any remaining animation frames and/or callbacks.
       */
      closeAndFlush(): void;

      /**
       * This method is used to flush the pending callbacks and animation frames to either start an animation or conclude an animation. Note that this will not actually close an actively running animation (see `closeAndFlush()` for that).
       */
      flush(): void;
    }
  }

  export module mock {
    // returned interface by the the mocked HttpBackendService expect/when methods
    interface IRequestHandler {

            /**
              * Controls the response for a matched request using a function to construct the response.
              * Returns the RequestHandler object for possible overrides.
              * @param func Function that receives the request HTTP method, url, data, headers, and an array of keys to regex matches in the request url and returns an array containing response status (number), data, headers, and status text.
              */
      respond(func: ((method: string, url: string, data: string | Object, headers: Object, params?: any) => [number, string | Object, Object, string])): IRequestHandler;

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
declare global {
  export var inject: angular.IInjectStatic;
}
