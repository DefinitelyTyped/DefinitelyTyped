/// <reference path="bardjs.d.ts" />
/// <reference path="../mocha/mocha.d.ts" />
/// <reference path="../chai/chai.d.ts" />
/// <reference path="../angularjs/angular.d.ts" />
/// <reference path="../angularjs/angular-mocks.d.ts" />

module bardTests {
    var expect = chai.expect,
        assert = chai.assert;

    class MyService {
        constructor(private $q: angular.IQService) {}

        remoteCall(): angular.IPromise<string[]> {
            return new this.$q((resolve, reject) => {
                resolve(['Hello', 'World']);
            });
        }
    }

    myService.$inject = ['$q'];
    function myService($q: angular.IQService) {
        return new MyService($q);
    }

    class MyController {
        myProperty: string;
    }

    angular
        .module('myModule')
        .service('myService', myService)
        .controller('MyController', MyController);

    /*
     * bard.$httpBackend
     */
    function test_$httpBackend() {
        var myService: MyService;
        var $rootScope: angular.IRootScopeService;

        beforeEach(module(bard.$httpBackend, 'myModule'));

        beforeEach(inject(function(_myService_: MyService, _$rootScope_: angular.IRootScopeService) {
            myService = _myService_;
            $rootScope = _$rootScope_;
        }));

        it('should return valid data', function(done) {
            myService.remoteCall()
                .then(function(data) {
                    expect(data).to.exist;
                })
                .then(done, done);

            $rootScope.$apply; // Because not using bard.$q, must flush the $http and $q queues
        });
    }

    /*
     * bard.$q
     */
    function test_$q() {
        var myService: MyService;

        beforeEach(module(bard.$q, bard.$httpBackend, 'myModule'));

        beforeEach(inject(function(_myService_: MyService) {
            myService = _myService_;
        }));

        it('should return valid data', (done) => {
            myService.remoteCall()
                .then((data) => {
                    expect(data).to.exist;
                })
                .then(done, done);

            // No need to flush
        });
    }

    /*
     * bard.addGlobals
     */
    function test_addGlobals() {
        describe('someting', function() {
            var ctx = this;

            it('should work', function() {
                var bar = 'bar';
                bard.addGlobals(this, 'foo');        // where `this` is the spec context
                bard.addGlobals(this, 'foo', bar);
                bard.addGlobals.bind(this)('foo', 'bar');
                bard.addGlobals(ctx, ['foo', 'bar']) // where ctx is the spec context
            });
        })
    }

    /*
     * bard.appModule
     */
    function test_appModule() {
        beforeEach(bard.appModule('myModule'));
        ////
        beforeEach(bard.appModule('myModule', function() {}, {}));
    }

    /*
     * bard.assertFail
     */
    function test_assertFail() {
        bard.assertFail('FAIL!');
    }

    /*
     * bard.asyncModule
     */
    function test_asyncModule() {
        beforeEach(bard.asyncModule('myModule'));
        ////
        beforeEach(bard.asyncModule('myModule', function() {}, {}));
    }

    /*
     * bard.debugging
     */
    function test_debugging() {
        console.log(
            bard.debugging(true),  // should return true
            bard.debugging(false), // should return false
            bard.debugging(42),    // should return true
            bard.debugging(''),    // should return false
            bard.debugging()       // should return false
        );
    }

    /*
     * bard.fakeLogger
     */
    function test_fakeLogger() {
        beforeEach(module('myModule', bard.fakeLogger));
        ////
        beforeEach(bard.appModule('myModule', bard.fakeLogger));
        ////
        beforeEach(bard.asyncModule('myModule', bard.fakeLogger));
    }

    /*
     * bard.fakeRouteHelperProvider
     */
    function test_fakeRouteHelperProvider() {
        beforeEach(module('myModule', bard.fakeRouteHelperProvider));
        ////
        beforeEach(bard.appModule('myModule', bard.fakeRouteHelperProvider));
        ////
        beforeEach(bard.asyncModule('myModule', bard.fakeRouteHelperProvider));
    }

    /*
     * bard.fakeRouteProvider
     */
    function test_fakeRouteProvider() {
        beforeEach(module('myModule', bard.fakeRouteProvider));
        ////
        beforeEach(bard.appModule('myModule', bard.fakeRouteProvider));
        ////
        beforeEach(bard.asyncModule('myModule', bard.fakeRouteProvider));
    }

    /*
     * bard.fakeStateProvider
     */
    function test_fakeStateProvider() {
        beforeEach(module('myModule', bard.fakeStateProvider));
        ////
        beforeEach(bard.appModule('myModule', bard.fakeStateProvider));
        ////
        beforeEach(bard.asyncModule('myModule', bard.fakeStateProvider));
    }

    /*
     * bard.fakeToastr
     */
    function test_fakeToastr() {
        beforeEach(module('myModule', bard.fakeToastr));
        ////
        beforeEach(bard.appModule('myModule', bard.fakeToastr));
        ////
        beforeEach(bard.asyncModule('myModule', bard.fakeToastr));
    }

    /*
     * bard.inject
     */
    function test_inject() {
        beforeEach(() => bard.inject(this, '$controller', '$log', '$q', '$rootScope', 'myService'));
    }

    /*
     * bard.log
     */
    function test_log() {
        bard.log('We got the goods');
    }

    /*
     * bard.mochaRunnerListener
     */
    function test_mochaRunnerListener() {
        var runner = mocha.run();
        bard.mochaRunnerListener(runner);
    }

    /*
     * bard.mockService
     */
    function test_mockService() {
        var controller: MyController,
            myArray = ['This', 'is', 'some', 'mocked', 'data'];
        var $controller: angular.IControllerService,
            $q: angular.IQService,
            $rootScope: angular.IRootScopeService,
            myService: MyService;

        beforeEach(function() {
            bard.appModule('myModule');
            bard.inject(this, '$controller', '$q', '$rootScope', 'myService');

            bard.mockService(myService, {
                remoteCall: $q.when(myArray),
                _default: $q.when([])
            });

            controller = $controller('MyController');
            $rootScope.$apply();
        });
    }

    /*
     * bard.replaceAccentChars
     */
    function test_replaceAccentChars() {
        console.log(bard.replaceAccentChars('àáâãäåèéêëìíîïòóôõöùúûüýÿ') === 'aaaaaaeeeeeeeeooooouuuuyy');
    }

    /*
     * bard.verifyNoOutstandingHttpRequests
     */
    function test_verifyNoOutstandingHttpRequests() {
        var controller: MyController,
            myArray = ['This', 'is', 'some', 'mocked', 'data'];
        var $controller: angular.IControllerService,
            $q: angular.IQService,
            $rootScope: angular.IRootScopeService,
            myService: MyService;

        beforeEach(function() {
            bard.appModule('myModule');
            bard.inject(this, '$controller', '$q', '$rootScope', 'myService');

            bard.mockService(myService, {
                remoteCall: $q.when(myArray),
                _default: $q.when([])
            });

            controller = $controller('MyController');
            $rootScope.$apply();
        });

        bard.verifyNoOutstandingHttpRequests();
    }

    /*
     * bard.wrapWithDone
     */
    function test_wrapWithDone() {
        function callback() { console.log('Doing something...'); }
        function done() { console.log('...Done'); }
        bard.wrapWithDone(callback, done);
    }
}
