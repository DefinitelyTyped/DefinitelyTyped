
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
mock.module.sharedInjector();

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
// ControllerService mock
///////////////////////////////////////
var $controller: ng.IControllerService;
$controller(class TestController {}, {}, {myBinding: 'works!'});
$controller(function TestController() {}, {someLocal: 42}, {myBinding: 'works!'});
$controller('TestController', {}, {myBinding: 'works!'});


///////////////////////////////////////
// IComponentControllerService
///////////////////////////////////////
var $componentController: ng.IComponentControllerService;
$componentController<{}, {}>('Test controller', { $scope: <ng.IScope>{} });
$componentController<{}, {}>('Test controller', { $scope: <ng.IScope>{}, test: true });
$componentController<{}, { test: boolean }>('Test controller', { $scope: <ng.IScope>{} }, { test: true});
$componentController<{}, { test?: boolean }>('Test controller', { $scope: <ng.IScope>{} }, {});
$componentController<{}, {}>('Test controller', { $scope: <ng.IScope>{} }, {}, 'identity');
$componentController<{ cb: () => void }, {}>('Test controller', { $scope: <ng.IScope>{} });
$componentController<{}, { test: {name: string} }>('Test controller', { test: {name: 'Test Local'} });

///////////////////////////////////////
// IHttpBackendService
///////////////////////////////////////
var httpBackendService: ng.IHttpBackendService;
var requestHandler: ng.mock.IRequestHandler;

httpBackendService.flush();
httpBackendService.flush(1234);
httpBackendService.resetExpectations();
httpBackendService.verifyNoOutstandingExpectation();
httpBackendService.verifyNoOutstandingExpectation(false);
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
requestHandler = httpBackendService.expect('GET', /test.local\/(\d+)/, 'response data', function (headers: Object): boolean { return true; }, ['id']);
requestHandler = httpBackendService.expect('GET', /test.local/, /response data/);
requestHandler = httpBackendService.expect('GET', /test.local/, /response data/, { header: 'value' });
requestHandler = httpBackendService.expect('GET', /test.local/, /response data/, function (headers: Object): boolean { return true; });
requestHandler = httpBackendService.expect('GET', /test.local\/(\d+)/, /response data/, function (headers: Object): boolean { return true; }, ['id']);
requestHandler = httpBackendService.expect('GET', /test.local/, function (data: string): boolean { return true; });
requestHandler = httpBackendService.expect('GET', /test.local/, function (data: string): boolean { return true; }, { header: 'value' });
requestHandler = httpBackendService.expect('GET', /test.local/, function (data: string): boolean { return true; }, function (headers: Object): boolean { return true; });
requestHandler = httpBackendService.expect('GET', /test.local\/(\d+)/, function (data: string): boolean { return true; }, function (headers: Object): boolean { return true; }, ['id']);
requestHandler = httpBackendService.expect('GET', /test.local/, { key: 'value' });
requestHandler = httpBackendService.expect('GET', /test.local/, { key: 'value' }, { header: 'value' });
requestHandler = httpBackendService.expect('GET', /test.local/, { key: 'value' }, function (headers: Object): boolean { return true; });
requestHandler = httpBackendService.expect('GET', /test.local\/(\d+)/, { key: 'value' }, function (headers: Object): boolean { return true; }, ['id']);
requestHandler = httpBackendService.expect('GET', (url: string) => { return true; });
requestHandler = httpBackendService.expect('GET', (url: string) => { return true; }, 'response data');
requestHandler = httpBackendService.expect('GET', (url: string) => { return true; }, 'response data', { header: 'value' });
requestHandler = httpBackendService.expect('GET', (url: string) => { return true; }, 'response data', function (headers: Object): boolean { return true; });
requestHandler = httpBackendService.expect('GET', (url: string) => { return true; }, /response data/);
requestHandler = httpBackendService.expect('GET', (url: string) => { return true; }, /response data/, { header: 'value' });
requestHandler = httpBackendService.expect('GET', (url: string) => { return true; }, /response data/, function (headers: Object): boolean { return true; });
requestHandler = httpBackendService.expect('GET', (url: string) => { return true; }, function (data: string): boolean { return true; });
requestHandler = httpBackendService.expect('GET', (url: string) => { return true; }, function (data: string): boolean { return true; }, { header: 'value' });
requestHandler = httpBackendService.expect('GET', (url: string) => { return true; }, function (data: string): boolean { return true; }, function (headers: Object): boolean { return true; });
requestHandler = httpBackendService.expect('GET', (url: string) => { return true; }, { key: 'value' });
requestHandler = httpBackendService.expect('GET', (url: string) => { return true; }, { key: 'value' }, { header: 'value' });
requestHandler = httpBackendService.expect('GET', (url: string) => { return true; }, { key: 'value' }, function (headers: Object): boolean { return true; });

requestHandler = httpBackendService.expectDELETE('http://test.local');
requestHandler = httpBackendService.expectDELETE('http://test.local', { header: 'value' });
requestHandler = httpBackendService.expectDELETE(/test.local/, { header: 'value' });
requestHandler = httpBackendService.expectDELETE(/test.local\/(\d+)/, { header: 'value' }, ['id']);
requestHandler = httpBackendService.expectDELETE((url: string) => { return true; }, { header: 'value' });
requestHandler = httpBackendService.expectGET('http://test.local');
requestHandler = httpBackendService.expectGET('http://test.local', { header: 'value' });
requestHandler = httpBackendService.expectGET(/test.local/, { header: 'value' });
requestHandler = httpBackendService.expectGET(/test.local\/(\d+)/, { header: 'value' }, ['id']);
requestHandler = httpBackendService.expectGET((url: string) => { return true; }, { header: 'value' });
requestHandler = httpBackendService.expectHEAD('http://test.local');
requestHandler = httpBackendService.expectHEAD('http://test.local', { header: 'value' });
requestHandler = httpBackendService.expectHEAD(/test.local/, { header: 'value' });
requestHandler = httpBackendService.expectHEAD(/test.local\/(\d+)/, { header: 'value' }, ['id']);
requestHandler = httpBackendService.expectHEAD((url: string) => { return true; }, { header: 'value' });
requestHandler = httpBackendService.expectJSONP('http://test.local');
requestHandler = httpBackendService.expectJSONP(/test.local/);
requestHandler = httpBackendService.expectJSONP(/test.local\/(\d+)/, ['id']);
requestHandler = httpBackendService.expectJSONP((url: string) => { return true; });

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
requestHandler = httpBackendService.expectPATCH(/test.local\/(\d+)/, 'response data', { header: 'value' }, ['id']);
requestHandler = httpBackendService.expectPATCH(/test.local/, /response data/);
requestHandler = httpBackendService.expectPATCH(/test.local/, /response data/, { header: 'value' });
requestHandler = httpBackendService.expectPATCH(/test.local/, function (data: string): boolean { return true; });
requestHandler = httpBackendService.expectPATCH(/test.local/, function (data: string): boolean { return true; }, { header: 'value' });
requestHandler = httpBackendService.expectPATCH(/test.local\/(\d+)/, function (data: string): boolean { return true; }, { header: 'value' }, ['id']);
requestHandler = httpBackendService.expectPATCH(/test.local/, { key: 'value' });
requestHandler = httpBackendService.expectPATCH(/test.local/, { key: 'value' }, { header: 'value' });
requestHandler = httpBackendService.expectPATCH(/test.local\/(\d+)/, { key: 'value' }, { header: 'value' }, ['id']);
requestHandler = httpBackendService.expectPATCH((url: string) => { return true; });
requestHandler = httpBackendService.expectPATCH((url: string) => { return true; }, 'response data');
requestHandler = httpBackendService.expectPATCH((url: string) => { return true; }, 'response data', { header: 'value' });
requestHandler = httpBackendService.expectPATCH((url: string) => { return true; }, /response data/);
requestHandler = httpBackendService.expectPATCH((url: string) => { return true; }, /response data/, { header: 'value' });
requestHandler = httpBackendService.expectPATCH((url: string) => { return true; }, function (data: string): boolean { return true; });
requestHandler = httpBackendService.expectPATCH((url: string) => { return true; }, function (data: string): boolean { return true; }, { header: 'value' });
requestHandler = httpBackendService.expectPATCH((url: string) => { return true; }, { key: 'value' });
requestHandler = httpBackendService.expectPATCH((url: string) => { return true; }, { key: 'value' }, { header: 'value' });

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
requestHandler = httpBackendService.expectPOST(/test.local\/(\d+)/, 'response data', { header: 'value' }, ['id']);
requestHandler = httpBackendService.expectPOST(/test.local/, /response data/);
requestHandler = httpBackendService.expectPOST(/test.local/, /response data/, { header: 'value' });
requestHandler = httpBackendService.expectPOST(/test.local\/(\d+)/, /response data/, { header: 'value' }, ['id']);
requestHandler = httpBackendService.expectPOST(/test.local/, function (data: string): boolean { return true; });
requestHandler = httpBackendService.expectPOST(/test.local/, function (data: string): boolean { return true; }, { header: 'value' });
requestHandler = httpBackendService.expectPOST(/test.local/, { key: 'value' });
requestHandler = httpBackendService.expectPOST(/test.local/, { key: 'value' }, { header: 'value' });
requestHandler = httpBackendService.expectPOST(/test.local\/(\d+)/, { key: 'value' }, { header: 'value' }, ['id']);
requestHandler = httpBackendService.expectPOST((url: string) => { return true; });
requestHandler = httpBackendService.expectPOST((url: string) => { return true; }, 'response data');
requestHandler = httpBackendService.expectPOST((url: string) => { return true; }, 'response data', { header: 'value' });
requestHandler = httpBackendService.expectPOST((url: string) => { return true; }, /response data/);
requestHandler = httpBackendService.expectPOST((url: string) => { return true; }, /response data/, { header: 'value' });
requestHandler = httpBackendService.expectPOST((url: string) => { return true; }, function (data: string): boolean { return true; });
requestHandler = httpBackendService.expectPOST((url: string) => { return true; }, function (data: string): boolean { return true; }, { header: 'value' });
requestHandler = httpBackendService.expectPOST((url: string) => { return true; }, { key: 'value' });
requestHandler = httpBackendService.expectPOST((url: string) => { return true; }, { key: 'value' }, { header: 'value' });

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
requestHandler = httpBackendService.expectPUT(/test.local\/(\d+)/, 'response data', { header: 'value' }, ['id']);
requestHandler = httpBackendService.expectPUT(/test.local/, /response data/);
requestHandler = httpBackendService.expectPUT(/test.local/, /response data/, { header: 'value' });
requestHandler = httpBackendService.expectPUT(/test.local\/(\d+)/, /response data/, { header: 'value' }, ['id']);
requestHandler = httpBackendService.expectPUT(/test.local/, function (data: string): boolean { return true; });
requestHandler = httpBackendService.expectPUT(/test.local/, function (data: string): boolean { return true; }, { header: 'value' });
requestHandler = httpBackendService.expectPUT(/test.local\/(\d+)/, function (data: string): boolean { return true; }, { header: 'value' }, ['id']);
requestHandler = httpBackendService.expectPUT(/test.local/, { key: 'value' });
requestHandler = httpBackendService.expectPUT(/test.local/, { key: 'value' }, { header: 'value' });
requestHandler = httpBackendService.expectPUT(/test.local\/(\d+)/, { key: 'value' }, { header: 'value' }, ['id']);
requestHandler = httpBackendService.expectPUT((url: string) => { return true; });
requestHandler = httpBackendService.expectPUT((url: string) => { return true; }, 'response data');
requestHandler = httpBackendService.expectPUT((url: string) => { return true; }, 'response data', { header: 'value' });
requestHandler = httpBackendService.expectPUT((url: string) => { return true; }, /response data/);
requestHandler = httpBackendService.expectPUT((url: string) => { return true; }, /response data/, { header: 'value' });
requestHandler = httpBackendService.expectPUT((url: string) => { return true; }, function (data: string): boolean { return true; });
requestHandler = httpBackendService.expectPUT((url: string) => { return true; }, function (data: string): boolean { return true; }, { header: 'value' });
requestHandler = httpBackendService.expectPUT((url: string) => { return true; }, { key: 'value' });
requestHandler = httpBackendService.expectPUT((url: string) => { return true; }, { key: 'value' }, { header: 'value' });

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
requestHandler = httpBackendService.when('GET', /test.local\/(\d+)/, 'response data', { header: 'value' }, ['id']);
requestHandler = httpBackendService.when('GET', /test.local/, 'response data', function (headers: Object): boolean { return true; });
requestHandler = httpBackendService.when('GET', /test.local\/(\d+)/, 'response data', function (headers: Object): boolean { return true; }, ['id']);
requestHandler = httpBackendService.when('GET', /test.local/, /response data/);
requestHandler = httpBackendService.when('GET', /test.local/, /response data/, { header: 'value' });
requestHandler = httpBackendService.when('GET', /test.local\/(\d+)/, /response data/, { header: 'value' }, ['id']);
requestHandler = httpBackendService.when('GET', /test.local/, /response data/, function (headers: Object): boolean { return true; });
requestHandler = httpBackendService.when('GET', /test.local\/(\d+)/, /response data/, function (headers: Object): boolean { return true; }, ['id']);
requestHandler = httpBackendService.when('GET', /test.local/, function (data: string): boolean { return true; });
requestHandler = httpBackendService.when('GET', /test.local/, function (data: string): boolean { return true; }, { header: 'value' });
requestHandler = httpBackendService.when('GET', /test.local\/(\d+)/, function (data: string): boolean { return true; }, { header: 'value' }, ['id']);
requestHandler = httpBackendService.when('GET', /test.local/, function (data: string): boolean { return true; }, function (headers: Object): boolean { return true; });
requestHandler = httpBackendService.when('GET', /test.local\/(\d+)/, function (data: string): boolean { return true; }, function (headers: Object): boolean { return true; }, ['id']);
requestHandler = httpBackendService.when('GET', /test.local/, { key: 'value' });
requestHandler = httpBackendService.when('GET', /test.local/, { key: 'value' }, { header: 'value' });
requestHandler = httpBackendService.when('GET', /test.local\/(\d+)/, { key: 'value' }, { header: 'value' }, ['id']);
requestHandler = httpBackendService.when('GET', /test.local/, { key: 'value' }, function (headers: Object): boolean { return true; });
requestHandler = httpBackendService.when('GET', /test.local\/(\d+)/, { key: 'value' }, function (headers: Object): boolean { return true; }, ['id']);
requestHandler = httpBackendService.when('GET', (url: string) => { return true; });
requestHandler = httpBackendService.when('GET', (url: string) => { return true; }, 'response data');
requestHandler = httpBackendService.when('GET', (url: string) => { return true; }, 'response data', { header: 'value' });
requestHandler = httpBackendService.when('GET', (url: string) => { return true; }, 'response data', function (headers: Object): boolean { return true; });
requestHandler = httpBackendService.when('GET', (url: string) => { return true; }, /response data/);
requestHandler = httpBackendService.when('GET', (url: string) => { return true; }, /response data/, { header: 'value' });
requestHandler = httpBackendService.when('GET', (url: string) => { return true; }, /response data/, function (headers: Object): boolean { return true; });
requestHandler = httpBackendService.when('GET', (url: string) => { return true; }, function (data: string): boolean { return true; });
requestHandler = httpBackendService.when('GET', (url: string) => { return true; }, function (data: string): boolean { return true; }, { header: 'value' });
requestHandler = httpBackendService.when('GET', (url: string) => { return true; }, function (data: string): boolean { return true; }, function (headers: Object): boolean { return true; });
requestHandler = httpBackendService.when('GET', (url: string) => { return true; }, { key: 'value' });
requestHandler = httpBackendService.when('GET', (url: string) => { return true; }, { key: 'value' }, { header: 'value' });
requestHandler = httpBackendService.when('GET', (url: string) => { return true; }, { key: 'value' }, function (headers: Object): boolean { return true; });

requestHandler = httpBackendService.whenDELETE('http://test.local');
requestHandler = httpBackendService.whenDELETE('http://test.local', { header: 'value' });
requestHandler = httpBackendService.whenDELETE(/test.local/, { header: 'value' });
requestHandler = httpBackendService.whenDELETE(/test.local\/(\d+)/, { header: 'value' }, ['id']);
requestHandler = httpBackendService.whenDELETE((url: string) => { return true; }, { header: 'value' });
requestHandler = httpBackendService.whenGET('http://test.local');
requestHandler = httpBackendService.whenGET('http://test.local', { header: 'value' });
requestHandler = httpBackendService.whenGET(/test.local/, { header: 'value' });
requestHandler = httpBackendService.whenGET(/test.local\/(\d+)/, { header: 'value' }, ['id']);
requestHandler = httpBackendService.whenGET((url: string) => { return true; }, { header: 'value' });
requestHandler = httpBackendService.whenHEAD('http://test.local');
requestHandler = httpBackendService.whenHEAD('http://test.local', { header: 'value' });
requestHandler = httpBackendService.whenHEAD(/test.local/, { header: 'value' });
requestHandler = httpBackendService.whenHEAD(/test.local\/(\d+)/, { header: 'value' }, ['id']);
requestHandler = httpBackendService.whenHEAD((url: string) => { return true; }, { header: 'value' });
requestHandler = httpBackendService.whenJSONP('http://test.local');
requestHandler = httpBackendService.whenJSONP(/test.local/);
requestHandler = httpBackendService.whenJSONP(/test.local\/(\d+)/, ['id']);
requestHandler = httpBackendService.whenJSONP((url: string) => { return true; });

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
requestHandler = httpBackendService.whenPATCH(/test.local\/(\d+)/, 'response data', { header: 'value' }, ['id']);
requestHandler = httpBackendService.whenPATCH(/test.local/, /response data/);
requestHandler = httpBackendService.whenPATCH(/test.local/, /response data/, { header: 'value' });
requestHandler = httpBackendService.whenPATCH(/test.local\/(\d+)/, /response data/, { header: 'value' }, ['id']);
requestHandler = httpBackendService.whenPATCH(/test.local/, function (data: string): boolean { return true; });
requestHandler = httpBackendService.whenPATCH(/test.local/, function (data: string): boolean { return true; }, { header: 'value' });
requestHandler = httpBackendService.whenPATCH(/test.local\/(\d+)/, function (data: string): boolean { return true; }, { header: 'value' }, ['id']);
requestHandler = httpBackendService.whenPATCH(/test.local/, { key: 'value' });
requestHandler = httpBackendService.whenPATCH(/test.local/, { key: 'value' }, { header: 'value' });
requestHandler = httpBackendService.whenPATCH(/test.local\/(\d+)/, { key: 'value' }, { header: 'value' }, ['id']);
requestHandler = httpBackendService.whenPATCH((url: string) => { return true; });
requestHandler = httpBackendService.whenPATCH((url: string) => { return true; }, 'response data');
requestHandler = httpBackendService.whenPATCH((url: string) => { return true; }, 'response data', { header: 'value' });
requestHandler = httpBackendService.whenPATCH((url: string) => { return true; }, /response data/);
requestHandler = httpBackendService.whenPATCH((url: string) => { return true; }, /response data/, { header: 'value' });
requestHandler = httpBackendService.whenPATCH((url: string) => { return true; }, function (data: string): boolean { return true; });
requestHandler = httpBackendService.whenPATCH((url: string) => { return true; }, function (data: string): boolean { return true; }, { header: 'value' });
requestHandler = httpBackendService.whenPATCH((url: string) => { return true; }, { key: 'value' });
requestHandler = httpBackendService.whenPATCH((url: string) => { return true; }, { key: 'value' }, { header: 'value' });

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
requestHandler = httpBackendService.whenPOST(/test.local\/(\d+)/, 'response data', { header: 'value' }, ['id']);
requestHandler = httpBackendService.whenPOST(/test.local/, /response data/);
requestHandler = httpBackendService.whenPOST(/test.local/, /response data/, { header: 'value' });
requestHandler = httpBackendService.whenPOST(/test.local\/(\d+)/, /response data/, { header: 'value' }, ['id']);
requestHandler = httpBackendService.whenPOST(/test.local/, function (data: string): boolean { return true; });
requestHandler = httpBackendService.whenPOST(/test.local/, function (data: string): boolean { return true; }, { header: 'value' });
requestHandler = httpBackendService.whenPOST(/test.local\/(\d+)/, function (data: string): boolean { return true; }, { header: 'value' }, ['id']);
requestHandler = httpBackendService.whenPOST(/test.local/, { key: 'value' });
requestHandler = httpBackendService.whenPOST(/test.local/, { key: 'value' }, { header: 'value' });
requestHandler = httpBackendService.whenPOST(/test.local\/(\d+)/, { key: 'value' }, { header: 'value' }, ['id']);
requestHandler = httpBackendService.whenPOST((url: string) => { return true; });
requestHandler = httpBackendService.whenPOST((url: string) => { return true; }, 'response data');
requestHandler = httpBackendService.whenPOST((url: string) => { return true; }, 'response data', { header: 'value' });
requestHandler = httpBackendService.whenPOST((url: string) => { return true; }, /response data/);
requestHandler = httpBackendService.whenPOST((url: string) => { return true; }, /response data/, { header: 'value' });
requestHandler = httpBackendService.whenPOST((url: string) => { return true; }, function (data: string): boolean { return true; });
requestHandler = httpBackendService.whenPOST((url: string) => { return true; }, function (data: string): boolean { return true; }, { header: 'value' });
requestHandler = httpBackendService.whenPOST((url: string) => { return true; }, { key: 'value' });
requestHandler = httpBackendService.whenPOST((url: string) => { return true; }, { key: 'value' }, { header: 'value' });

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
requestHandler = httpBackendService.whenPUT(/test.local\/(\d+)/, 'response data', { header: 'value' }, ['id']);
requestHandler = httpBackendService.whenPUT(/test.local/, /response data/);
requestHandler = httpBackendService.whenPUT(/test.local/, /response data/, { header: 'value' });
requestHandler = httpBackendService.whenPUT(/test.local\/(\d+)/, /response data/, { header: 'value' }, ['id']);
requestHandler = httpBackendService.whenPUT(/test.local/, function (data: string): boolean { return true; });
requestHandler = httpBackendService.whenPUT(/test.local/, function (data: string): boolean { return true; }, { header: 'value' });
requestHandler = httpBackendService.whenPUT(/test.local\/(\d+)/, function (data: string): boolean { return true; }, { header: 'value' }, ['id']);
requestHandler = httpBackendService.whenPUT(/test.local/, { key: 'value' });
requestHandler = httpBackendService.whenPUT(/test.local/, { key: 'value' }, { header: 'value' });
requestHandler = httpBackendService.whenPUT(/test.local\/(\d+)/, { key: 'value' }, { header: 'value' }, ['id']);
requestHandler = httpBackendService.whenPUT((url: string) => { return true; });
requestHandler = httpBackendService.whenPUT((url: string) => { return true; }, 'response data');
requestHandler = httpBackendService.whenPUT((url: string) => { return true; }, 'response data', { header: 'value' });
requestHandler = httpBackendService.whenPUT((url: string) => { return true; }, /response data/);
requestHandler = httpBackendService.whenPUT((url: string) => { return true; }, /response data/, { header: 'value' });
requestHandler = httpBackendService.whenPUT((url: string) => { return true; }, function (data: string): boolean { return true; });
requestHandler = httpBackendService.whenPUT((url: string) => { return true; }, function (data: string): boolean { return true; }, { header: 'value' });
requestHandler = httpBackendService.whenPUT((url: string) => { return true; }, { key: 'value' });
requestHandler = httpBackendService.whenPUT((url: string) => { return true; }, { key: 'value' }, { header: 'value' });


///////////////////////////////////////
// IRequestHandler
///////////////////////////////////////
var expectedData = { key: 'value'};
requestHandler.passThrough();
requestHandler.passThrough().passThrough();
requestHandler.respond((method, url, data, headers) => [404, 'data', { header: 'value' }, 'responseText']);
requestHandler.respond((method, url, data, headers) => [404, 'data', { header: 'value' }, 'responseText']).respond({});
requestHandler.respond((method, url, data, headers) => { return [404, { key: 'value' }, { header: 'value' }, 'responseText']; });
requestHandler.respond((method, url, data, headers, params) => {
    if(params.id === 1) {
        return [200, { key: 'value'}, { header: 'value'}, 'responseText'];
    } else {
        return [404, { key: 'value' }, { header: 'value' }, 'responseText'];
    }
});
requestHandler.respond('data');
requestHandler.respond('data').respond({});
requestHandler.respond(expectedData);
requestHandler.respond({ key: 'value' });
requestHandler.respond({ key: 'value' }, { header: 'value' });
requestHandler.respond({ key: 'value' }, { header: 'value' }, 'responseText');
requestHandler.respond(404, 'data');
requestHandler.respond(404, 'data').respond({});
requestHandler.respond(404, { key: 'value' });
requestHandler.respond(404, { key: 'value' }, { header: 'value' });
requestHandler.respond(404, { key: 'value' }, { header: 'value' }, 'responseText');
