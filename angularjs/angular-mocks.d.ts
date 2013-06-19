// Type definitions for Angular JS 1.0 (ngMock, ngMockE2E module)
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
        // see http://docs.angularjs.org/api/angular.mock.debug
        debug(obj: any): string;
                
        // see http://docs.angularjs.org/api/angular.mock.inject
        inject(...fns: Function[]): any;
        
        // see http://docs.angularjs.org/api/angular.mock.module
        module(...modules: any[]): any;

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
        flush(): void;
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

    interface LogCall {
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

        expect(method: string, url: string, data?: string, headers?: any): mock.IRequestHandler;
        expect(method: string, url: RegExp, data?: string, headers?: any): mock.IRequestHandler;
        expect(method: string, url: string, data?: RegExp, headers?: any): mock.IRequestHandler;
        expect(method: string, url: RegExp, data?: RegExp, headers?: any): mock.IRequestHandler;
        expect(method: RegExp, url: string, data?: string, headers?: any): mock.IRequestHandler;
        expect(method: RegExp, url: RegExp, data?: string, headers?: any): mock.IRequestHandler;
        expect(method: RegExp, url: string, data?: RegExp, headers?: any): mock.IRequestHandler;
        expect(method: RegExp, url: RegExp, data?: RegExp, headers?: any): mock.IRequestHandler;        
        
        when(method: string, url: string, data?: string, headers?: any): mock.IRequestHandler;
        when(method: string, url: RegExp, data?: string, headers?: any): mock.IRequestHandler;
        when(method: string, url: string, data?: RegExp, headers?: any): mock.IRequestHandler;
        when(method: string, url: RegExp, data?: RegExp, headers?: any): mock.IRequestHandler;
        when(method: RegExp, url: string, data?: string, headers?: any): mock.IRequestHandler;
        when(method: RegExp, url: RegExp, data?: string, headers?: any): mock.IRequestHandler;
        when(method: RegExp, url: string, data?: RegExp, headers?: any): mock.IRequestHandler;
        when(method: RegExp, url: RegExp, data?: RegExp, headers?: any): mock.IRequestHandler;        
                
        expectDELETE(url: string, headers?: any): mock.IRequestHandler;
        expectDELETE(url: RegExp, headers?: any): mock.IRequestHandler;
        expectGET(url: string, headers?: any): mock.IRequestHandler;
        expectGET(url: RegExp, headers?: any): mock.IRequestHandler;
        expectHEAD(url: string, headers?: any): mock.IRequestHandler;
        expectHEAD(url: RegExp, headers?: any): mock.IRequestHandler;
        expectJSONP(url: string): mock.IRequestHandler;
        expectJSONP(url: RegExp): mock.IRequestHandler;
        expectPATCH(url: string, data?: string, headers?: any): mock.IRequestHandler;
        expectPATCH(url: RegExp, data?: string, headers?: any): mock.IRequestHandler;
        expectPATCH(url: string, data?: RegExp, headers?: any): mock.IRequestHandler;
        expectPATCH(url: RegExp, data?: RegExp, headers?: any): mock.IRequestHandler;
        expectPOST(url: string, data?: string, headers?: any): mock.IRequestHandler;
        expectPOST(url: RegExp, data?: string, headers?: any): mock.IRequestHandler;
        expectPOST(url: string, data?: RegExp, headers?: any): mock.IRequestHandler;
        expectPOST(url: RegExp, data?: RegExp, headers?: any): mock.IRequestHandler;
        expectPUT(url: string, data?: string, headers?: any): mock.IRequestHandler;
        expectPUT(url: RegExp, data?: string, headers?: any): mock.IRequestHandler;
        expectPUT(url: string, data?: RegExp, headers?: any): mock.IRequestHandler;
        expectPUT(url: RegExp, data?: RegExp, headers?: any): mock.IRequestHandler;

        whenDELETE(url: string, headers?: any): mock.IRequestHandler;
        whenDELETE(url: RegExp, headers?: any): mock.IRequestHandler;
        whenGET(url: string, headers?: any): mock.IRequestHandler;
        whenGET(url: RegExp, headers?: any): mock.IRequestHandler;
        whenHEAD(url: string, headers?: any): mock.IRequestHandler;
        whenHEAD(url: RegExp, headers?: any): mock.IRequestHandler;
        whenJSONP(url: string): mock.IRequestHandler;
        whenJSONP(url: RegExp): mock.IRequestHandler;
        whenPATCH(url: string, data?: string, headers?: any): mock.IRequestHandler;
        whenPATCH(url: RegExp, data?: string, headers?: any): mock.IRequestHandler;
        whenPATCH(url: string, data?: RegExp, headers?: any): mock.IRequestHandler;
        whenPATCH(url: RegExp, data?: RegExp, headers?: any): mock.IRequestHandler;
        whenPOST(url: string, data?: string, headers?: any): mock.IRequestHandler;
        whenPOST(url: RegExp, data?: string, headers?: any): mock.IRequestHandler;
        whenPOST(url: string, data?: RegExp, headers?: any): mock.IRequestHandler;
        whenPOST(url: RegExp, data?: RegExp, headers?: any): mock.IRequestHandler;
        whenPUT(url: string, data?: string, headers?: any): mock.IRequestHandler;
        whenPUT(url: RegExp, data?: string, headers?: any): mock.IRequestHandler;
        whenPUT(url: string, data?: RegExp, headers?: any): mock.IRequestHandler;
        whenPUT(url: RegExp, data?: RegExp, headers?: any): mock.IRequestHandler;
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
