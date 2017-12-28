// Type definitions for bardjs 0.1.4
// Project: https://github.com/wardbell/bardjs
// Definitions by: Andrew Archibald <https://github.com/TepigMC>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="mocha" />
/// <reference types="chai" />

/**
 * Module for bardjs functions
 */
declare namespace bard {
    /**
     *  Replaces the ngMock'ed $httpBackend with the real one from ng thus
     *  restoring the ability to issue AJAX calls to the backend with $http.
     *
     *  Note that $q remains ngMocked so you must flush $http calls ($rootScope.$digest).
     *  Use $rootScope.$apply() for this purpose.
     *
     *  Could restore $q with $qReal in which case don't need to flush.
     */
    function $httpBackend($provide: angular.auto.IProvideService): any;

    /**
     *  Replaces the ngMock'ed $q with the real one from ng thus
     *  obviating the need to flush $http and $q queues
     *  at the expense of ability to control $q timing.
     */
    function $q($provide: angular.auto.IProvideService): any;

    /**
     * Add names of globals to list of OK globals for this mocha spec
     * NB: Call this method ONLY if you're using mocha!
     * NB: Turn off browser-sync else mocha detects the browser-sync globals
     * like ` ___browserSync___`
     */
    function addGlobals(...globals: any[]): void;

    /**
     * Prepare ngMocked application feature module
     * along with faked toastr, routehelper,
     * and faked router services.
     * Especially useful for controller testing
     * Use it as you would the ngMocks#module method
     *
     * DO NOT USE IF YOU NEED THE REAL ROUTER SERVICES!
     * Fall back to `angular.mock.module(...)` or just `module(...)`
     */
    function appModule(...fns: (string | Function | Object)[]): () => void;

    /**
     * Assert a failure in mocha, without condition
     */
    function assertFail(message: string): chai.AssertionError;

    /**
     * Prepare ngMocked module definition that makes real $http and $q calls
     * Also adds fakeLogger to the end of the definition
     * Use it as you would the ngMocks#module method
     */
    function asyncModule(...fns: (string | Function | Object)[]): () => void;

    /**
     * Get or set bard debugging flag
     */
    function debugging(newFlag?: any): boolean;

    /**
     * Registers a fake logger service that you can spy on
     */
    function fakeLogger($provide: angular.auto.IProvideService): void;

    /**
     * Registers a fake route helper provider service that you can spy on
     */
    function fakeRouteHelperProvider($provide: angular.auto.IProvideService): void;

    /**
     * Stub out the $routeProvider so we avoid
     * all routing calls, including the default route
     * which runs on every test otherwise.
     * Make sure this goes before the inject in the spec.
     */
    function fakeRouteProvider($provide: angular.auto.IProvideService): void;

    /**
     * Stub out the $stateProvider so we avoid
     * all routing calls, including the default state
     * which runs on every test otherwise.
     * Make sure this goes before the inject in the spec.
     */
    function fakeStateProvider($provide: angular.auto.IProvideService): void;

    /**
     * Registers a fake toastr service that you can spy on
     */
    function fakeToastr($provide: angular.auto.IProvideService): void;

    /**
     * Inject selected services into the windows object during test
     * then remove them when test ends with an `afterEach`.
     *
     * spares us the repetition of creating common service vars and injecting them
     *
     * Option: the first argument may be the mocha spec context object (`this`)
     *         It MUST be `this` if you what to check for mocha global leaks.
     *         Do NOT supply `this` as the first arg if you're not running mocha specs.
     *
     * remaining inject arguments may take one of 3 forms :
     *
     *    function    - This fn will be passed to ngMocks.inject.
     *                  Annotations extracted after inject does its thing.
     *    [strings]   - same string array you'd use to set fn.$inject
     *    (...string) - string arguments turned into a string array
     */
    function inject(context?: Function | Mocha.IHookCallbackContext, ...args: string[]): void;

    /**
     * Write to console if bard debugging flag is on
     */
    function log(message: any): void;

    /**
     *  Listen to mocha test runner events
     *  Usage in browser:
     *     var runner = mocha.run();
     *     bard.mochaRunnerListener(runner);
     */
    function mochaRunnerListener(runner: Mocha.IRunner): void;

    /**
     * Mocks out a service with sinon stubbed functions
     * that return the values specified in the config
     *
     * If the config value is `undefined`,
     * stub the service method with a dummy that doesn't return a value
     *
     * If the config value is a function, set service property with it
     *
     * If a service member is a property, not a function,
     * set it with the config value
     * If a service member name is not a key in config,
     * follow the same logic as above to set its members
     * using the config._default value (which is `undefined` if omitted)
     *
     * If there is a config entry that is NOT a member of the service
     * add mocked function to the service using the config value
     */
    function mockService(service: any, config: any): any;

    /**
     * Replaces the accented characters of many European languages w/ unaccented chars
     * Use it in JavaScript string sorts where such characters may be encountered
     * Matches the default string comparers of most databases.
     * Ex: replaceAccentChars(a.Name) < replaceAccentChars(b.Name)
     * instead of:            a.Name  <                    b.Name
     */
    function replaceAccentChars(text: string): string;

    /**
     *  Assert that there are no outstanding HTTP requests after test is complete
     *  For use with ngMocks; doesn't work for async server integration tests
     */
    function verifyNoOutstandingHttpRequests(): void;

    /**
     * Returns a function that execute a callback function
     * (typically a fn making asserts) within a try/catch
     * The try/catch then calls the ambient "done" function
     * in the appropriate way for both success and failure
     */
    function wrapWithDone(callback: Function, done: Function): Function;
}
