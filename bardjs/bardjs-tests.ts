/// <reference path="bardjs.d.ts" />
/// <reference path="../mocha/mocha.d.ts" />
/// <reference path="../chai/chai.d.ts" />
/// <reference path="../angularjs/angular.d.ts" />
/// <reference path="../angularjs/angular-mocks.d.ts" />

var expect = chai.expect, assert = chai.assert;

function someFunction() { }
var someObject = { };
var myService;

/*
 * bard.$httpBackend
 */
var myService;

beforeEach(module(bard.$httpBackend, 'app'));

beforeEach(inject(function(_myService_) {
    myService = _myService_;
}));

it('should return valid data', function(done) {
    myService.remoteCall()
        .then(function(data) {
            expect(data).to.exist;
        })
        .then(done, done);

    $rootScope.$apply; // because not using bard.$q, must flush the $http and $q queues
});

/*
 * bard.$q
 */
beforeEach(module(bard.$q, bard.$httpBackend, 'app'));

beforeEach(inject(function(_myService_) {
    myService = _myService_;
}));

it('should return valid data', (done) => {
    myService.remoteCall()
        .then((data) => {
            expect(data).to.exist;
        })
        .then(done, done);

    // no need to flush
});

/*
 * bard.addGlobals
 */

/*
 * bard.appModule
 */
beforeEach(bard.appModule('myModule'));

beforeEach(bard.appModule('myModule', someFunction, someObject));

/*
 * bard.assertFail
 */

/*
 * bard.asyncModule
 */
beforeEach(bard.asyncModule('app'));

beforeEach(bard.asyncModule('myModule', someFunction, someObject));

/*
 * bard.debugging
 */

/*
 * bard.fakeLogger
 */
beforeEach(module('myModule', bard.fakeLogger));
beforeEach(bard.appModule('myModule', bard.fakeLogger));
beforeEach(bard.asyncModule('myModule', bard.fakeLogger));

/*
 * bard.fakeRouteHelperProvider
 */
beforeEach(module('myModule', bard.fakeRouteHelperProvider));
beforeEach(bard.appModule('myModule', bard.fakeRouteHelperProvider));
beforeEach(bard.asyncModule('myModule', bard.fakeRouteHelperProvider));

/*
 * bard.fakeRouteProvider
 */
beforeEach(module('myModule', bard.fakeRouteProvider));
beforeEach(bard.appModule('myModule', bard.fakeRouteProvider));
beforeEach(bard.asyncModule('myModule', bard.fakeRouteProvider));

/*
 * bard.fakeStateProvider
 */
beforeEach(module('myModule', bard.fakeStateProvider));
beforeEach(bard.appModule('myModule', bard.fakeStateProvider));
beforeEach(bard.asyncModule('myModule', bard.fakeStateProvider));

/*
 * bard.fakeToastr
 */
beforeEach(module('myModule', bard.fakeToastr));
beforeEach(bard.appModule('myModule', bard.fakeToastr));
beforeEach(bard.asyncModule('myModule', bard.fakeToastr));

/*
 * bard.inject
 */
beforeEach(() => bard.inject(this, '$controller', '$log', '$q', '$rootScope', 'dataservice'));

/*
 * bard.log
 */
bard.log('We got the goods');

/*
 * bard.mochaRunnerListener
 */

/*
 * bard.mockService
 */
var controller;
var avengers = [{name: 'Captain America' /* ... */}];
var $controller, $q, $rootScope, dataservice;

beforeEach(function() {
    bard.appModule('app.avengers');
    bard.inject(this, '$controller', '$q', '$rootScope', 'dataservice');

    bard.mockService(dataservice, {
        getAvengers: $q.when(avengers),
        _default:    $q.when([])
    });

    controller = $controller('Avengers');
    $rootScope.$apply();
});

/*
 * bard.replaceAccentChars
 */

/*
 * bard.verifyNoOutstandingHttpRequests
 */

/*
 * bard.wrapWithDone
 */
