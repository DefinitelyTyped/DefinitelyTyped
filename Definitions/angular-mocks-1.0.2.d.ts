// Type definitions for Angular JS 1.0.2 (ngMock, ngMockE2E module)
// Project: http://angularjs.org
// Definitions by: Diego Vilar <http://github.com/diegovilar>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="angular-1.0.2.d.ts" />

///////////////////////////////////////////////////////////////////////////////
// ngMock module (angular-mocks.js)
///////////////////////////////////////////////////////////////////////////////
module ng {

    ///////////////////////////////////////////////////////////////////////////
    // AngularStatic
    // We reopen it to add the MockStatic definition
    ///////////////////////////////////////////////////////////////////////////
    export interface AngularStatic {
        mock: MockStatic;
    }

    interface MockStatic {
        // see http://docs.angularjs.org/api/angular.mock.debug
        debug(obj: any): string;
                
        // see http://docs.angularjs.org/api/angular.mock.inject
        inject(...fns: Function[]): void;
        
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
    export interface ExceptionHandlerProvider extends ServiceProvider {
        mode(mode: string): void;
    }

    ///////////////////////////////////////////////////////////////////////////
    // TimeoutService
    // see http://docs.angularjs.org/api/ngMock.$timeout
    // Augments the original service
    ///////////////////////////////////////////////////////////////////////////
    export interface TimeoutService {
        flush(): void;
    }

    ///////////////////////////////////////////////////////////////////////////
    // LogService
    // see http://docs.angularjs.org/api/ngMock.$log
    // Augments the original service
    ///////////////////////////////////////////////////////////////////////////
    export interface LogService {
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
    export interface HttpBackendService {
        flush(count: number): void;
        resetExpectations(): void;
        verifyNoOutstandingExpectation(): void;
        verifyNoOutstandingRequest(): void;

        expect(method: string, url: string, data?: string, headers?: any): mock.RequestHandler;
        expect(method: string, url: RegExp, data?: string, headers?: any): mock.RequestHandler;
        expect(method: string, url: string, data?: RegExp, headers?: any): mock.RequestHandler;
        expect(method: string, url: RegExp, data?: RegExp, headers?: any): mock.RequestHandler;
        expect(method: RegExp, url: string, data?: string, headers?: any): mock.RequestHandler;
        expect(method: RegExp, url: RegExp, data?: string, headers?: any): mock.RequestHandler;
        expect(method: RegExp, url: string, data?: RegExp, headers?: any): mock.RequestHandler;
        expect(method: RegExp, url: RegExp, data?: RegExp, headers?: any): mock.RequestHandler;        
        
        when(method: string, url: string, data?: string, headers?: any): mock.RequestHandler;
        when(method: string, url: RegExp, data?: string, headers?: any): mock.RequestHandler;
        when(method: string, url: string, data?: RegExp, headers?: any): mock.RequestHandler;
        when(method: string, url: RegExp, data?: RegExp, headers?: any): mock.RequestHandler;
        when(method: RegExp, url: string, data?: string, headers?: any): mock.RequestHandler;
        when(method: RegExp, url: RegExp, data?: string, headers?: any): mock.RequestHandler;
        when(method: RegExp, url: string, data?: RegExp, headers?: any): mock.RequestHandler;
        when(method: RegExp, url: RegExp, data?: RegExp, headers?: any): mock.RequestHandler;        
                
        expectDELETE(url: string, headers?: any): mock.RequestHandler;
        expectDELETE(url: RegExp, headers?: any): mock.RequestHandler;
        expectGET(url: string, headers?: any): mock.RequestHandler;
        expectGET(url: RegExp, headers?: any): mock.RequestHandler;
        expectHEAD(url: string, headers?: any): mock.RequestHandler;
        expectHEAD(url: RegExp, headers?: any): mock.RequestHandler;
        expectJSONP(url: string): mock.RequestHandler;
        expectJSONP(url: RegExp): mock.RequestHandler;
        expectPATCH(url: string, data?: string, headers?: any): mock.RequestHandler;
        expectPATCH(url: RegExp, data?: string, headers?: any): mock.RequestHandler;
        expectPATCH(url: string, data?: RegExp, headers?: any): mock.RequestHandler;
        expectPATCH(url: RegExp, data?: RegExp, headers?: any): mock.RequestHandler;
        expectPOST(url: string, data?: string, headers?: any): mock.RequestHandler;
        expectPOST(url: RegExp, data?: string, headers?: any): mock.RequestHandler;
        expectPOST(url: string, data?: RegExp, headers?: any): mock.RequestHandler;
        expectPOST(url: RegExp, data?: RegExp, headers?: any): mock.RequestHandler;
        expectPUT(url: string, data?: string, headers?: any): mock.RequestHandler;
        expectPUT(url: RegExp, data?: string, headers?: any): mock.RequestHandler;
        expectPUT(url: string, data?: RegExp, headers?: any): mock.RequestHandler;
        expectPUT(url: RegExp, data?: RegExp, headers?: any): mock.RequestHandler;

        whenDELETE(url: string, headers?: any): mock.RequestHandler;
        whenDELETE(url: RegExp, headers?: any): mock.RequestHandler;
        whenGET(url: string, headers?: any): mock.RequestHandler;
        whenGET(url: RegExp, headers?: any): mock.RequestHandler;
        whenHEAD(url: string, headers?: any): mock.RequestHandler;
        whenHEAD(url: RegExp, headers?: any): mock.RequestHandler;
        whenJSONP(url: string): mock.RequestHandler;
        whenJSONP(url: RegExp): mock.RequestHandler;
        whenPATCH(url: string, data?: string, headers?: any): mock.RequestHandler;
        whenPATCH(url: RegExp, data?: string, headers?: any): mock.RequestHandler;
        whenPATCH(url: string, data?: RegExp, headers?: any): mock.RequestHandler;
        whenPATCH(url: RegExp, data?: RegExp, headers?: any): mock.RequestHandler;
        whenPOST(url: string, data?: string, headers?: any): mock.RequestHandler;
        whenPOST(url: RegExp, data?: string, headers?: any): mock.RequestHandler;
        whenPOST(url: string, data?: RegExp, headers?: any): mock.RequestHandler;
        whenPOST(url: RegExp, data?: RegExp, headers?: any): mock.RequestHandler;
        whenPUT(url: string, data?: string, headers?: any): mock.RequestHandler;
        whenPUT(url: RegExp, data?: string, headers?: any): mock.RequestHandler;
        whenPUT(url: string, data?: RegExp, headers?: any): mock.RequestHandler;
        whenPUT(url: RegExp, data?: RegExp, headers?: any): mock.RequestHandler;
    }    

    export module mock {
        
        // returned interface by the the mocked HttpBackendService expect/when methods
        export interface RequestHandler {
            respond(func: Function): void;        
            respond(status: number, data?: any, headers?: any): void;
            respond(data: any, headers?: any): void;

            // Available wehn ngMockE2E is loaded
            passThrough(): void;
        }

    }    

}
