// Type definitions for bardjs 0.1.4
// Project: https://github.com/wardbell/bardjs
// Definitions by: Andrew Archibald <https://github.com/TepigMC>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />
/// <reference path="../chai/chai.d.ts" />
/// <reference path="../mocha/mocha.d.ts" />

declare module bard {
    function $httpBackend($provide: angular.auto.IProvideService);
    function $q($provide: angular.auto.IProvideService);
    function addGlobals(...args: any[]): void;
    function appModule(...args: any[]);
    function assertFail(message: string): Chai.AssertionError;
    function asyncModule(...args: any[]);
    function debugging(x);
    function fakeLogger($provide: angular.auto.IProvideService): void;
    function fakeRouteHelperProvider($provide: angular.auto.IProvideService): void;
    function fakeRouteProvider($provide: angular.auto.IProvideService): void;
    function fakeStateProvider($provide: angular.auto.IProvideService): void;
    function fakeToastr($provide: angular.auto.IProvideService): void;
    function inject(...args: any[]): void;
    function log(msg);
    function mochaRunnerListener(runner: Mocha.IRunner): void;
    function mockService(service, config);
    function replaceAccentChars(s: string): string;
    function verifyNoOutstandingHttpRequests(): void;
    function wrapWithDone(callback: Function, done: Function);
}
