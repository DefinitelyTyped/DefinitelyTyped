// Type definitions for Angular JS 1.2 (ngMock, ngMockE2E module)
// Project: http://angularjs.org
// Definitions by: Diego Vilar <http://github.com/diegovilar>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="angular.d.ts" />

///////////////////////////////////////////////////////////////////////////////
// functions attached to global object (window)
///////////////////////////////////////////////////////////////////////////////
declare var module: (...modules: any[]) => any;
declare var inject: (...fns: Function[]) => any;

///////////////////////////////////////////////////////////////////////////////
// ngMock module (angular-mocks.js)
///////////////////////////////////////////////////////////////////////////////
declare module ng {

    ///////////////////////////////////////////////////////////////////////////
    // AngularStatic
    // We reopen it to add the MockStatic definition
    ///////////////////////////////////////////////////////////////////////////
    interface IAngularStatic {
        mock: IMockStatic;
    }

    interface IMockStatic {
        // see http://docs.angularjs.org/api/angular.mock.dump
        dump(obj: any): string;

        // see http://docs.angularjs.org/api/angular.mock.inject
        inject(...fns: Function[]): any;
        inject(...inlineAnnotatedConstructor: any[]): any; // this overload is undocumented, but works

        // see http://docs.angularjs.org/api/angular.mock.module
        module(...modules: string[]): any;
        module(...modules: Function[]): any;
        module(modules: Object): any;

        // see http://docs.angularjs.org/api/angular.mock.TzDate
        TzDate(offset: number, timestamp: number): Date;
        TzDate(offset: number, timestamp: string): Date;
    }

    ///////////////////////////////////////////////////////////////////////////
    // ExceptionHandlerService
    // see http://docs.angularjs.org/api/ngMock.$exceptionHandler
    // see http://docs.angularjs.org/api/ngMock.$exceptionHandlerProvider
    ///////////////////////////////////////////////////////////////////////////
    interface IExceptionHandlerProvider extends IServiceProvider {
        mode(mode: string): void;
    }

    ///////////////////////////////////////////////////////////////////////////
    // TimeoutService
    // see http://docs.angularjs.org/api/ngMock.$timeout
    // Augments the original service
    ///////////////////////////////////////////////////////////////////////////
    interface ITimeoutService {
        flush(delay?: number): void;
        flushNext(expectedDelay?: number): void;
        verifyNoPendingTasks(): void;
    }

    ///////////////////////////////////////////////////////////////////////////
    // LogService
    // see http://docs.angularjs.org/api/ngMock.$log
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
    // see http://docs.angularjs.org/api/ngMock.$httpBackend
    ///////////////////////////////////////////////////////////////////////////
    interface IHttpBackendService {
        flush(count?: number): void;
        resetExpectations(): void;
        verifyNoOutstandingExpectation(): void;
        verifyNoOutstandingRequest(): void;

        expect(method: string, url: string, data?: string, headers?: Object): mock.IRequestHandler;
        expect(method: string, url: string, data?: string, headers?: (object: Object) => boolean): mock.IRequestHandler;
        expect(method: string, url: string, data?: RegExp, headers?: Object): mock.IRequestHandler;
        expect(method: string, url: string, data?: RegExp, headers?: (object: Object) => boolean): mock.IRequestHandler;
        expect(method: string, url: string, data?: (data: string) => boolean, headers?: Object): mock.IRequestHandler;
        expect(method: string, url: string, data?: (data: string) => boolean, headers?: (object: Object) => boolean): mock.IRequestHandler;
        expect(method: string, url: string, data?: Object, headers?: Object): mock.IRequestHandler;
        expect(method: string, url: string, data?: Object, headers?: (object: Object) => boolean): mock.IRequestHandler;
        expect(method: string, url: RegExp, data?: string, headers?: Object): mock.IRequestHandler;
        expect(method: string, url: RegExp, data?: string, headers?: (object: Object) => boolean): mock.IRequestHandler;
        expect(method: string, url: RegExp, data?: RegExp, headers?: Object): mock.IRequestHandler;
        expect(method: string, url: RegExp, data?: RegExp, headers?: (object: Object) => boolean): mock.IRequestHandler;
        expect(method: string, url: RegExp, data?: (data: string) => boolean, headers?: Object): mock.IRequestHandler;
        expect(method: string, url: RegExp, data?: (data: string) => boolean, headers?: (object: Object) => boolean): mock.IRequestHandler;
        expect(method: string, url: RegExp, data?: Object, headers?: Object): mock.IRequestHandler;
        expect(method: string, url: RegExp, data?: Object, headers?: (object: Object) => boolean): mock.IRequestHandler;

        expectDELETE(url: string, headers?: Object): mock.IRequestHandler;
        expectDELETE(url: RegExp, headers?: Object): mock.IRequestHandler;
        expectGET(url: string, headers?: Object): mock.IRequestHandler;
        expectGET(url: RegExp, headers?: Object): mock.IRequestHandler;
        expectHEAD(url: string, headers?: Object): mock.IRequestHandler;
        expectHEAD(url: RegExp, headers?: Object): mock.IRequestHandler;
        expectJSONP(url: string): mock.IRequestHandler;
        expectJSONP(url: RegExp): mock.IRequestHandler;

        expectPATCH(url: string, data?: string, headers?: Object): mock.IRequestHandler;
        expectPATCH(url: string, data?: RegExp, headers?: Object): mock.IRequestHandler;
        expectPATCH(url: string, data?: (data: string) => boolean, headers?: Object): mock.IRequestHandler;
        expectPATCH(url: string, data?: Object, headers?: Object): mock.IRequestHandler;
        expectPATCH(url: RegExp, data?: string, headers?: Object): mock.IRequestHandler;
        expectPATCH(url: RegExp, data?: RegExp, headers?: Object): mock.IRequestHandler;
        expectPATCH(url: RegExp, data?: (data: string) => boolean, headers?: Object): mock.IRequestHandler;
        expectPATCH(url: RegExp, data?: Object, headers?: Object): mock.IRequestHandler;

        expectPOST(url: string, data?: string, headers?: Object): mock.IRequestHandler;
        expectPOST(url: string, data?: RegExp, headers?: Object): mock.IRequestHandler;
        expectPOST(url: string, data?: (data: string) => boolean, headers?: Object): mock.IRequestHandler;
        expectPOST(url: string, data?: Object, headers?: Object): mock.IRequestHandler;
        expectPOST(url: RegExp, data?: string, headers?: Object): mock.IRequestHandler;
        expectPOST(url: RegExp, data?: RegExp, headers?: Object): mock.IRequestHandler;
        expectPOST(url: RegExp, data?: (data: string) => boolean, headers?: Object): mock.IRequestHandler;
        expectPOST(url: RegExp, data?: Object, headers?: Object): mock.IRequestHandler;

        expectPUT(url: string, data?: string, headers?: Object): mock.IRequestHandler;
        expectPUT(url: string, data?: RegExp, headers?: Object): mock.IRequestHandler;
        expectPUT(url: string, data?: (data: string) => boolean, headers?: Object): mock.IRequestHandler;
        expectPUT(url: string, data?: Object, headers?: Object): mock.IRequestHandler;
        expectPUT(url: RegExp, data?: string, headers?: Object): mock.IRequestHandler;
        expectPUT(url: RegExp, data?: RegExp, headers?: Object): mock.IRequestHandler;
        expectPUT(url: RegExp, data?: (data: string) => boolean, headers?: Object): mock.IRequestHandler;
        expectPUT(url: RegExp, data?: Object, headers?: Object): mock.IRequestHandler;

        when(method: string, url: string, data?: string, headers?: Object): mock.IRequestHandler;
        when(method: string, url: string, data?: string, headers?: (object: Object) => boolean): mock.IRequestHandler;
        when(method: string, url: string, data?: RegExp, headers?: Object): mock.IRequestHandler;
        when(method: string, url: string, data?: RegExp, headers?: (object: Object) => boolean): mock.IRequestHandler;
        when(method: string, url: string, data?: (data: string) => boolean, headers?: Object): mock.IRequestHandler;
        when(method: string, url: string, data?: (data: string) => boolean, headers?: (object: Object) => boolean): mock.IRequestHandler;
        when(method: string, url: string, data?: Object, headers?: Object): mock.IRequestHandler;
        when(method: string, url: string, data?: Object, headers?: (object: Object) => boolean): mock.IRequestHandler;
        when(method: string, url: RegExp, data?: string, headers?: Object): mock.IRequestHandler;
        when(method: string, url: RegExp, data?: string, headers?: (object: Object) => boolean): mock.IRequestHandler;
        when(method: string, url: RegExp, data?: RegExp, headers?: Object): mock.IRequestHandler;
        when(method: string, url: RegExp, data?: RegExp, headers?: (object: Object) => boolean): mock.IRequestHandler;
        when(method: string, url: RegExp, data?: (data: string) => boolean, headers?: Object): mock.IRequestHandler;
        when(method: string, url: RegExp, data?: (data: string) => boolean, headers?: (object: Object) => boolean): mock.IRequestHandler;
        when(method: string, url: RegExp, data?: Object, headers?: Object): mock.IRequestHandler;
        when(method: string, url: RegExp, data?: Object, headers?: (object: Object) => boolean): mock.IRequestHandler;

        whenDELETE(url: string, headers?: Object): mock.IRequestHandler;
        whenDELETE(url: string, headers?: (object: Object) => boolean): mock.IRequestHandler;
        whenDELETE(url: RegExp, headers?: Object): mock.IRequestHandler;
        whenDELETE(url: RegExp, headers?: (object: Object) => boolean): mock.IRequestHandler;

        whenGET(url: string, headers?: Object): mock.IRequestHandler;
        whenGET(url: string, headers?: (object: Object) => boolean): mock.IRequestHandler;
        whenGET(url: RegExp, headers?: Object): mock.IRequestHandler;
        whenGET(url: RegExp, headers?: (object: Object) => boolean): mock.IRequestHandler;

        whenHEAD(url: string, headers?: Object): mock.IRequestHandler;
        whenHEAD(url: string, headers?: (object: Object) => boolean): mock.IRequestHandler;
        whenHEAD(url: RegExp, headers?: Object): mock.IRequestHandler;
        whenHEAD(url: RegExp, headers?: (object: Object) => boolean): mock.IRequestHandler;

        whenJSONP(url: string): mock.IRequestHandler;
        whenJSONP(url: RegExp): mock.IRequestHandler;

        whenPATCH(url: string, data?: string, headers?: Object): mock.IRequestHandler;
        whenPATCH(url: string, data?: RegExp, headers?: Object): mock.IRequestHandler;
        whenPATCH(url: string, data?: (data: string) => boolean, headers?: Object): mock.IRequestHandler;
        whenPATCH(url: string, data?: Object, headers?: Object): mock.IRequestHandler;
        whenPATCH(url: RegExp, data?: string, headers?: Object): mock.IRequestHandler;
        whenPATCH(url: RegExp, data?: RegExp, headers?: Object): mock.IRequestHandler;
        whenPATCH(url: RegExp, data?: (data: string) => boolean, headers?: Object): mock.IRequestHandler;
        whenPATCH(url: RegExp, data?: Object, headers?: Object): mock.IRequestHandler;

        whenPOST(url: string, data?: string, headers?: Object): mock.IRequestHandler;
        whenPOST(url: string, data?: RegExp, headers?: Object): mock.IRequestHandler;
        whenPOST(url: string, data?: (data: string) => boolean, headers?: Object): mock.IRequestHandler;
        whenPOST(url: string, data?: Object, headers?: Object): mock.IRequestHandler;
        whenPOST(url: RegExp, data?: string, headers?: Object): mock.IRequestHandler;
        whenPOST(url: RegExp, data?: RegExp, headers?: Object): mock.IRequestHandler;
        whenPOST(url: RegExp, data?: (data: string) => boolean, headers?: Object): mock.IRequestHandler;
        whenPOST(url: RegExp, data?: Object, headers?: Object): mock.IRequestHandler;

        whenPUT(url: string, data?: string, headers?: Object): mock.IRequestHandler;
        whenPUT(url: string, data?: RegExp, headers?: Object): mock.IRequestHandler;
        whenPUT(url: string, data?: (data: string) => boolean, headers?: Object): mock.IRequestHandler;
        whenPUT(url: string, data?: Object, headers?: Object): mock.IRequestHandler;
        whenPUT(url: RegExp, data?: string, headers?: Object): mock.IRequestHandler;
        whenPUT(url: RegExp, data?: RegExp, headers?: Object): mock.IRequestHandler;
        whenPUT(url: RegExp, data?: (data: string) => boolean, headers?: Object): mock.IRequestHandler;
        whenPUT(url: RegExp, data?: Object, headers?: Object): mock.IRequestHandler;
    }

    export module mock {

        // returned interface by the the mocked HttpBackendService expect/when methods
        interface IRequestHandler {
            respond(func: Function): void;
            respond(status: number, data?: any, headers?: any): void;
            respond(data: any, headers?: any): void;

            // Available wehn ngMockE2E is loaded
            passThrough(): void;
        }

    }

}
