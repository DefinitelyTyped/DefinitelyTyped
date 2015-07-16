/// <reference path="bardjs.d.ts" />
/// <reference path="../mocha/mocha.d.ts" />
/// <reference path="../chai/chai.d.ts" />
/// <reference path="../angularjs/angular.d.ts" />
/// <reference path="../angularjs/angular-mocks.d.ts" />

var expect = chai.expect,
  assert = chai.assert;

class MyService {
  static $inject = ['$q'];
  
  constructor(private $q: angular.IQService) {}
  
  remoteCall(): angular.IPromise<string> {
    return new this.$q((resolve, reject) => {
      resolve('Here is some data');
    });
  }
}

function myService($q: angular.IQService) {
  return new MyService($q);
}

angular
  .module('tests')
  .service('myService', myService);



module bardTests {
  /*
   * bard.$httpBackend
   */
  function test_$httpBackend() {
    var myService: MyService;
    var $rootScope: any;

    beforeEach(module(bard.$httpBackend, 'app'));

    beforeEach(inject(function(_myService_: MyService, _$rootScope_: any) {
      myService = _myService_;
      $rootScope = _$rootScope_;
    }));

    it('should return valid data', function(done) {
      myService.remoteCall()
        .then(function(data) {
          expect(data).to.exist;
        })
        .then(done, done);

      $rootScope.$apply; // because not using bard.$q, must flush the $http and $q queues
    });
  }
  
  /*
   * bard.$q
   */
  function test_$q() {
    var myService: MyService;

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
  }
  
  /*
   * bard.addGlobals
   */
  function test_addGlobals() {
    
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
    
  }

  /*
   * bard.asyncModule
   */
  function test_asyncModule() {
    beforeEach(bard.asyncModule('app'));
    ////
    beforeEach(bard.asyncModule('myModule', function() {}, {}));
  }
  
  /*
   * bard.debugging
   */
  function test_debugging() {
    
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
    beforeEach(() => bard.inject(this, '$controller', '$log', '$q', '$rootScope', 'dataservice'));
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
    
  }
  
  /*
   * bard.mockService
   */
  function test_mockService() {
    var controller;
    var avengers = [{name: 'Captain America' /* ... */}];
    var $controller, $q, $rootScope, dataservice;

    beforeEach(function() {
      bard.appModule('app.avengers');
      bard.inject(this, '$controller', '$q', '$rootScope', 'dataservice');

      bard.mockService(dataservice, {
        getAvengers: $q.when(avengers),
        _default:  $q.when([])
      });

      controller = $controller('Avengers');
      $rootScope.$apply();
    });
  }
  
  /*
   * bard.replaceAccentChars
   */
  function test_replaceAccentChars() {
    
  }
  
  /*
   * bard.verifyNoOutstandingHttpRequests
   */
  function test_verifyNoOutstandingHttpRequests() {
    
  }
  
  /*
   * bard.wrapWithDone
   */
  function test_wrapWithDone() {
    
  }
}