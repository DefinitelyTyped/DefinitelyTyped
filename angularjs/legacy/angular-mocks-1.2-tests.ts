/// <reference path="angular-mocks-1.2.d.ts" />

///////////////////////////////////////
// IAngularStatic
///////////////////////////////////////
var angular: ng.IAngularStatic;
var mock: ng.IMockStatic;

mock = angular.mock;


///////////////////////////////////////
// IMockStatic
///////////////////////////////////////
var date: Date;

mock.dump({ key: 'value' });

mock.inject(
    function () { return 1; },
    function () { return 2; }
    );

mock.inject(
    ['$rootScope', function ($rootScope: ng.IRootScopeService) { return 1; }]);

// This overload is not documented on the website, but flows from
// how the injector works.
mock.inject(
    ['$rootScope', function ($rootScope: ng.IRootScopeService) { return 1; }],
    ['$rootScope', function ($rootScope: ng.IRootScopeService) { return 2; }]);

mock.module('module1', 'module2');
mock.module(
    function () { return 1; },
    function () { return 2; }
    );
mock.module({ module1: function () { return 1; } });

date = mock.TzDate(-7, '2013-1-1T15:00:00Z');
date = mock.TzDate(-8, 12345678);


///////////////////////////////////////
// IExceptionHandlerProvider
///////////////////////////////////////
var exceptionHandlerProvider: ng.IExceptionHandlerProvider;

exceptionHandlerProvider.mode('log');


///////////////////////////////////////
// ITimeoutService
///////////////////////////////////////
var timeoutService: ng.ITimeoutService;

timeoutService.flush();
timeoutService.flush(1234);
timeoutService.flushNext();
timeoutService.flushNext(1234);
timeoutService.verifyNoPendingTasks();

////////////////////////////////////////
// IIntervalService
////////////////////////////////////////
var intervalService: ng.IIntervalService;
var intervalServiceTimeActuallyAdvanced: number;

intervalServiceTimeActuallyAdvanced = intervalService.flush();
intervalServiceTimeActuallyAdvanced = intervalService.flush(1234);

///////////////////////////////////////
// ILogService, ILogCall
///////////////////////////////////////
var logService: ng.ILogService;
var logCall: ng.ILogCall;
var logs: string[];

logService.assertEmpty();
logService.reset();

logCall = logService.debug;
logCall = logService.error;
logCall = logService.info;
logCall = logService.log;
logCall = logService.warn;

logs = logCall.logs;


///////////////////////////////////////
// IHttpBackendService
///////////////////////////////////////
var httpBackendService: ng.IHttpBackendService;
var requestHandler: ng.mock.IRequestHandler;

httpBackendService.flush();
httpBackendService.flush(1234);
httpBackendService.resetExpectations();
httpBackendService.verifyNoOutstandingExpectation();
httpBackendService.verifyNoOutstandingRequest();

requestHandler = httpBackendService.expect('GET', 'http://test.local');
requestHandler = httpBackendService.expect('GET', 'http://test.local', 'response data');
requestHandler = httpBackendService.expect('GET', 'http://test.local', 'response data', { header: 'value' });
requestHandler = httpBackendService.expect('GET', 'http://test.local', 'response data', function (headers: Object): boolean { return true; });
requestHandler = httpBackendService.expect('GET', 'http://test.local', /response data/);
requestHandler = httpBackendService.expect('GET', 'http://test.local', /response data/, { header: 'value' });
requestHandler = httpBackendService.expect('GET', 'http://test.local', /response data/, function (headers: Object): boolean { return true; });
requestHandler = httpBackendService.expect('GET', 'http://test.local', function (data: string): boolean { return true; });
requestHandler = httpBackendService.expect('GET', 'http://test.local', function (data: string): boolean { return true; }, { header: 'value' });
requestHandler = httpBackendService.expect('GET', 'http://test.local', function (data: string): boolean { return true; }, function (headers: Object): boolean { return true; });
requestHandler = httpBackendService.expect('GET', 'http://test.local', { key: 'value' });
requestHandler = httpBackendService.expect('GET', 'http://test.local', { key: 'value' }, { header: 'value' });
requestHandler = httpBackendService.expect('GET', 'http://test.local', { key: 'value' }, function (headers: Object): boolean { return true; });
requestHandler = httpBackendService.expect('GET', /test.local/);
requestHandler = httpBackendService.expect('GET', /test.local/, 'response data');
requestHandler = httpBackendService.expect('GET', /test.local/, 'response data', { header: 'value' });
requestHandler = httpBackendService.expect('GET', /test.local/, 'response data', function (headers: Object): boolean { return true; });
requestHandler = httpBackendService.expect('GET', /test.local/, /response data/);
requestHandler = httpBackendService.expect('GET', /test.local/, /response data/, { header: 'value' });
requestHandler = httpBackendService.expect('GET', /test.local/, /response data/, function (headers: Object): boolean { return true; });
requestHandler = httpBackendService.expect('GET', /test.local/, function (data: string): boolean { return true; });
requestHandler = httpBackendService.expect('GET', /test.local/, function (data: string): boolean { return true; }, { header: 'value' });
requestHandler = httpBackendService.expect('GET', /test.local/, function (data: string): boolean { return true; }, function (headers: Object): boolean { return true; });
requestHandler = httpBackendService.expect('GET', /test.local/, { key: 'value' });
requestHandler = httpBackendService.expect('GET', /test.local/, { key: 'value' }, { header: 'value' });
requestHandler = httpBackendService.expect('GET', /test.local/, { key: 'value' }, function (headers: Object): boolean { return true; });

requestHandler = httpBackendService.expectDELETE('http://test.local');
requestHandler = httpBackendService.expectDELETE('http://test.local', { header: 'value' });
requestHandler = httpBackendService.expectDELETE(/test.local/, { header: 'value' });
requestHandler = httpBackendService.expectGET('http://test.local');
requestHandler = httpBackendService.expectGET('http://test.local', { header: 'value' });
requestHandler = httpBackendService.expectGET(/test.local/, { header: 'value' });
requestHandler = httpBackendService.expectHEAD('http://test.local');
requestHandler = httpBackendService.expectHEAD('http://test.local', { header: 'value' });
requestHandler = httpBackendService.expectHEAD(/test.local/, { header: 'value' });
requestHandler = httpBackendService.expectJSONP('http://test.local');
requestHandler = httpBackendService.expectJSONP(/test.local/);

requestHandler = httpBackendService.expectPATCH('http://test.local');
requestHandler = httpBackendService.expectPATCH('http://test.local', 'response data');
requestHandler = httpBackendService.expectPATCH('http://test.local', 'response data', { header: 'value' });
requestHandler = httpBackendService.expectPATCH('http://test.local', /response data/);
requestHandler = httpBackendService.expectPATCH('http://test.local', /response data/, { header: 'value' });
requestHandler = httpBackendService.expectPATCH('http://test.local', function (data: string): boolean { return true; });
requestHandler = httpBackendService.expectPATCH('http://test.local', function (data: string): boolean { return true; }, { header: 'value' });
requestHandler = httpBackendService.expectPATCH('http://test.local', { key: 'value' });
requestHandler = httpBackendService.expectPATCH('http://test.local', { key: 'value' }, { header: 'value' });
requestHandler = httpBackendService.expectPATCH(/test.local/);
requestHandler = httpBackendService.expectPATCH(/test.local/, 'response data');
requestHandler = httpBackendService.expectPATCH(/test.local/, 'response data', { header: 'value' });
requestHandler = httpBackendService.expectPATCH(/test.local/, /response data/);
requestHandler = httpBackendService.expectPATCH(/test.local/, /response data/, { header: 'value' });
requestHandler = httpBackendService.expectPATCH(/test.local/, function (data: string): boolean { return true; });
requestHandler = httpBackendService.expectPATCH(/test.local/, function (data: string): boolean { return true; }, { header: 'value' });
requestHandler = httpBackendService.expectPATCH(/test.local/, { key: 'value' });
requestHandler = httpBackendService.expectPATCH(/test.local/, { key: 'value' }, { header: 'value' });

requestHandler = httpBackendService.expectPOST('http://test.local');
requestHandler = httpBackendService.expectPOST('http://test.local', 'response data');
requestHandler = httpBackendService.expectPOST('http://test.local', 'response data', { header: 'value' });
requestHandler = httpBackendService.expectPOST('http://test.local', /response data/);
requestHandler = httpBackendService.expectPOST('http://test.local', /response data/, { header: 'value' });
requestHandler = httpBackendService.expectPOST('http://test.local', function (data: string): boolean { return true; });
requestHandler = httpBackendService.expectPOST('http://test.local', function (data: string): boolean { return true; }, { header: 'value' });
requestHandler = httpBackendService.expectPOST('http://test.local', { key: 'value' });
requestHandler = httpBackendService.expectPOST('http://test.local', { key: 'value' }, { header: 'value' });
requestHandler = httpBackendService.expectPOST(/test.local/);
requestHandler = httpBackendService.expectPOST(/test.local/, 'response data');
requestHandler = httpBackendService.expectPOST(/test.local/, 'response data', { header: 'value' });
requestHandler = httpBackendService.expectPOST(/test.local/, /response data/);
requestHandler = httpBackendService.expectPOST(/test.local/, /response data/, { header: 'value' });
requestHandler = httpBackendService.expectPOST(/test.local/, function (data: string): boolean { return true; });
requestHandler = httpBackendService.expectPOST(/test.local/, function (data: string): boolean { return true; }, { header: 'value' });
requestHandler = httpBackendService.expectPOST(/test.local/, { key: 'value' });
requestHandler = httpBackendService.expectPOST(/test.local/, { key: 'value' }, { header: 'value' });

requestHandler = httpBackendService.expectPUT('http://test.local');
requestHandler = httpBackendService.expectPUT('http://test.local', 'response data');
requestHandler = httpBackendService.expectPUT('http://test.local', 'response data', { header: 'value' });
requestHandler = httpBackendService.expectPUT('http://test.local', /response data/);
requestHandler = httpBackendService.expectPUT('http://test.local', /response data/, { header: 'value' });
requestHandler = httpBackendService.expectPUT('http://test.local', function (data: string): boolean { return true; });
requestHandler = httpBackendService.expectPUT('http://test.local', function (data: string): boolean { return true; }, { header: 'value' });
requestHandler = httpBackendService.expectPUT('http://test.local', { key: 'value' });
requestHandler = httpBackendService.expectPUT('http://test.local', { key: 'value' }, { header: 'value' });
requestHandler = httpBackendService.expectPUT(/test.local/);
requestHandler = httpBackendService.expectPUT(/test.local/, 'response data');
requestHandler = httpBackendService.expectPUT(/test.local/, 'response data', { header: 'value' });
requestHandler = httpBackendService.expectPUT(/test.local/, /response data/);
requestHandler = httpBackendService.expectPUT(/test.local/, /response data/, { header: 'value' });
requestHandler = httpBackendService.expectPUT(/test.local/, function (data: string): boolean { return true; });
requestHandler = httpBackendService.expectPUT(/test.local/, function (data: string): boolean { return true; }, { header: 'value' });
requestHandler = httpBackendService.expectPUT(/test.local/, { key: 'value' });
requestHandler = httpBackendService.expectPUT(/test.local/, { key: 'value' }, { header: 'value' });

requestHandler = httpBackendService.when('GET', 'http://test.local');
requestHandler = httpBackendService.when('GET', 'http://test.local', 'response data');
requestHandler = httpBackendService.when('GET', 'http://test.local', 'response data', { header: 'value' });
requestHandler = httpBackendService.when('GET', 'http://test.local', 'response data', function (headers: Object): boolean { return true; });
requestHandler = httpBackendService.when('GET', 'http://test.local', /response data/);
requestHandler = httpBackendService.when('GET', 'http://test.local', /response data/, { header: 'value' });
requestHandler = httpBackendService.when('GET', 'http://test.local', /response data/, function (headers: Object): boolean { return true; });
requestHandler = httpBackendService.when('GET', 'http://test.local', function (data: string): boolean { return true; });
requestHandler = httpBackendService.when('GET', 'http://test.local', function (data: string): boolean { return true; }, { header: 'value' });
requestHandler = httpBackendService.when('GET', 'http://test.local', function (data: string): boolean { return true; }, function (headers: Object): boolean { return true; });
requestHandler = httpBackendService.when('GET', 'http://test.local', { key: 'value' });
requestHandler = httpBackendService.when('GET', 'http://test.local', { key: 'value' }, { header: 'value' });
requestHandler = httpBackendService.when('GET', 'http://test.local', { key: 'value' }, function (headers: Object): boolean { return true; });
requestHandler = httpBackendService.when('GET', /test.local/);
requestHandler = httpBackendService.when('GET', /test.local/, 'response data');
requestHandler = httpBackendService.when('GET', /test.local/, 'response data', { header: 'value' });
requestHandler = httpBackendService.when('GET', /test.local/, 'response data', function (headers: Object): boolean { return true; });
requestHandler = httpBackendService.when('GET', /test.local/, /response data/);
requestHandler = httpBackendService.when('GET', /test.local/, /response data/, { header: 'value' });
requestHandler = httpBackendService.when('GET', /test.local/, /response data/, function (headers: Object): boolean { return true; });
requestHandler = httpBackendService.when('GET', /test.local/, function (data: string): boolean { return true; });
requestHandler = httpBackendService.when('GET', /test.local/, function (data: string): boolean { return true; }, { header: 'value' });
requestHandler = httpBackendService.when('GET', /test.local/, function (data: string): boolean { return true; }, function (headers: Object): boolean { return true; });
requestHandler = httpBackendService.when('GET', /test.local/, { key: 'value' });
requestHandler = httpBackendService.when('GET', /test.local/, { key: 'value' }, { header: 'value' });
requestHandler = httpBackendService.when('GET', /test.local/, { key: 'value' }, function (headers: Object): boolean { return true; });

requestHandler = httpBackendService.whenDELETE('http://test.local');
requestHandler = httpBackendService.whenDELETE('http://test.local', { header: 'value' });
requestHandler = httpBackendService.whenDELETE(/test.local/, { header: 'value' });
requestHandler = httpBackendService.whenGET('http://test.local');
requestHandler = httpBackendService.whenGET('http://test.local', { header: 'value' });
requestHandler = httpBackendService.whenGET(/test.local/, { header: 'value' });
requestHandler = httpBackendService.whenHEAD('http://test.local');
requestHandler = httpBackendService.whenHEAD('http://test.local', { header: 'value' });
requestHandler = httpBackendService.whenHEAD(/test.local/, { header: 'value' });
requestHandler = httpBackendService.whenJSONP('http://test.local');
requestHandler = httpBackendService.whenJSONP(/test.local/);

requestHandler = httpBackendService.whenPATCH('http://test.local');
requestHandler = httpBackendService.whenPATCH('http://test.local', 'response data');
requestHandler = httpBackendService.whenPATCH('http://test.local', 'response data', { header: 'value' });
requestHandler = httpBackendService.whenPATCH('http://test.local', /response data/);
requestHandler = httpBackendService.whenPATCH('http://test.local', /response data/, { header: 'value' });
requestHandler = httpBackendService.whenPATCH('http://test.local', function (data: string): boolean { return true; });
requestHandler = httpBackendService.whenPATCH('http://test.local', function (data: string): boolean { return true; }, { header: 'value' });
requestHandler = httpBackendService.whenPATCH('http://test.local', { key: 'value' });
requestHandler = httpBackendService.whenPATCH('http://test.local', { key: 'value' }, { header: 'value' });
requestHandler = httpBackendService.whenPATCH(/test.local/);
requestHandler = httpBackendService.whenPATCH(/test.local/, 'response data');
requestHandler = httpBackendService.whenPATCH(/test.local/, 'response data', { header: 'value' });
requestHandler = httpBackendService.whenPATCH(/test.local/, /response data/);
requestHandler = httpBackendService.whenPATCH(/test.local/, /response data/, { header: 'value' });
requestHandler = httpBackendService.whenPATCH(/test.local/, function (data: string): boolean { return true; });
requestHandler = httpBackendService.whenPATCH(/test.local/, function (data: string): boolean { return true; }, { header: 'value' });
requestHandler = httpBackendService.whenPATCH(/test.local/, { key: 'value' });
requestHandler = httpBackendService.whenPATCH(/test.local/, { key: 'value' }, { header: 'value' });

requestHandler = httpBackendService.whenPOST('http://test.local');
requestHandler = httpBackendService.whenPOST('http://test.local', 'response data');
requestHandler = httpBackendService.whenPOST('http://test.local', 'response data', { header: 'value' });
requestHandler = httpBackendService.whenPOST('http://test.local', /response data/);
requestHandler = httpBackendService.whenPOST('http://test.local', /response data/, { header: 'value' });
requestHandler = httpBackendService.whenPOST('http://test.local', function (data: string): boolean { return true; });
requestHandler = httpBackendService.whenPOST('http://test.local', function (data: string): boolean { return true; }, { header: 'value' });
requestHandler = httpBackendService.whenPOST('http://test.local', { key: 'value' });
requestHandler = httpBackendService.whenPOST('http://test.local', { key: 'value' }, { header: 'value' });
requestHandler = httpBackendService.whenPOST(/test.local/);
requestHandler = httpBackendService.whenPOST(/test.local/, 'response data');
requestHandler = httpBackendService.whenPOST(/test.local/, 'response data', { header: 'value' });
requestHandler = httpBackendService.whenPOST(/test.local/, /response data/);
requestHandler = httpBackendService.whenPOST(/test.local/, /response data/, { header: 'value' });
requestHandler = httpBackendService.whenPOST(/test.local/, function (data: string): boolean { return true; });
requestHandler = httpBackendService.whenPOST(/test.local/, function (data: string): boolean { return true; }, { header: 'value' });
requestHandler = httpBackendService.whenPOST(/test.local/, { key: 'value' });
requestHandler = httpBackendService.whenPOST(/test.local/, { key: 'value' }, { header: 'value' });

requestHandler = httpBackendService.whenPUT('http://test.local');
requestHandler = httpBackendService.whenPUT('http://test.local', 'response data');
requestHandler = httpBackendService.whenPUT('http://test.local', 'response data', { header: 'value' });
requestHandler = httpBackendService.whenPUT('http://test.local', /response data/);
requestHandler = httpBackendService.whenPUT('http://test.local', /response data/, { header: 'value' });
requestHandler = httpBackendService.whenPUT('http://test.local', function (data: string): boolean { return true; });
requestHandler = httpBackendService.whenPUT('http://test.local', function (data: string): boolean { return true; }, { header: 'value' });
requestHandler = httpBackendService.whenPUT('http://test.local', { key: 'value' });
requestHandler = httpBackendService.whenPUT('http://test.local', { key: 'value' }, { header: 'value' });
requestHandler = httpBackendService.whenPUT(/test.local/);
requestHandler = httpBackendService.whenPUT(/test.local/, 'response data');
requestHandler = httpBackendService.whenPUT(/test.local/, 'response data', { header: 'value' });
requestHandler = httpBackendService.whenPUT(/test.local/, /response data/);
requestHandler = httpBackendService.whenPUT(/test.local/, /response data/, { header: 'value' });
requestHandler = httpBackendService.whenPUT(/test.local/, function (data: string): boolean { return true; });
requestHandler = httpBackendService.whenPUT(/test.local/, function (data: string): boolean { return true; }, { header: 'value' });
requestHandler = httpBackendService.whenPUT(/test.local/, { key: 'value' });
requestHandler = httpBackendService.whenPUT(/test.local/, { key: 'value' }, { header: 'value' });


///////////////////////////////////////
// IRequestHandler
///////////////////////////////////////
requestHandler.passThrough();
requestHandler.respond(function () { });
requestHandler.respond({ key: 'value' });
requestHandler.respond({ key: 'value' }, { header: 'value' });
requestHandler.respond(404);
requestHandler.respond(404, { key: 'value' });
requestHandler.respond(404, { key: 'value' }, { header: 'value' });
