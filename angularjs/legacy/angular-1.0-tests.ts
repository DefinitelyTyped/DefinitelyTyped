/// <reference path="angular-1.0.d.ts" />

// issue: https://github.com/borisyankov/DefinitelyTyped/issues/369
https://github.com/witoldsz/angular-http-auth/blob/master/src/angular-http-auth.js
/**
 * @license HTTP Auth Interceptor Module for AngularJS
 * (c) 2012 Witold Szczerba
 * License: MIT
 */
angular.module('http-auth-interceptor', [])

    .provider('authService', function () {
        /**
         * Holds all the requests which failed due to 401 response,
         * so they can be re-requested in future, once login is completed.
         */
        var buffer = [];

        /**
         * Required by HTTP interceptor.
         * Function is attached to provider to be invisible for regular users of this service.
         */
        this.pushToBuffer = function (config: ng.IRequestConfig, deferred: ng.IDeferred<any>) {
            buffer.push({
                config: config,
                deferred: deferred
            });
        }

      this.$get = ['$rootScope', '$injector', <any>function ($rootScope: ng.IScope, $injector: ng.auto.IInjectorService) {
            var $http: ng.IHttpService; //initialized later because of circular dependency problem
            function retry(config: ng.IRequestConfig, deferred: ng.IDeferred<any>) {
                $http = $http || $injector.get('$http');
                $http(config).then(function (response) {
                    deferred.resolve(response);
                });
            }
            function retryAll() {
                for (var i = 0; i < buffer.length; ++i) {
                    retry(buffer[i].config, buffer[i].deferred);
                }
                buffer = [];
            }

          return {
                loginConfirmed: function () {
                    $rootScope.$broadcast('event:auth-loginConfirmed');
                    retryAll();
                }
            }
      }]
  })

/**
 * $http interceptor.
 * On 401 response - it stores the request and broadcasts 'event:angular-auth-loginRequired'.
 */
    .config(['$httpProvider', 'authServiceProvider', <any>function ($httpProvider: ng.IHttpProvider, authServiceProvider) {

        var interceptor = ['$rootScope', '$q', <any>function ($rootScope: ng.IScope, $q: ng.IQService) {
            function success(response: ng.IHttpPromiseCallbackArg<any>) {
                return response;
            }

            function error(response: ng.IHttpPromiseCallbackArg<any>) {
                if (response.status === 401) {
                    var deferred = $q.defer<void>();
                    authServiceProvider.pushToBuffer(response.config, deferred);
                    $rootScope.$broadcast('event:auth-loginRequired');
                    return deferred.promise;
                }
                // otherwise
                return $q.reject(response);
            }

          return function (promise: ng.IHttpPromise<any>) {
                return promise.then(success, error);
            }

      }];
        $httpProvider.responseInterceptors.push(interceptor);
    }]);


module HttpAndRegularPromiseTests {
    interface Person {
        firstName: string;
        lastName: string;
    }

    interface ExpectedResponse extends Person { }

    interface SomeControllerScope extends ng.IScope {
        person: Person;
        theAnswer: number;
        letters: string[];
    }

    var someController: Function = ($scope: SomeControllerScope, $http: ng.IHttpService, $q: ng.IQService) => {
        $http.get("http://somewhere/some/resource")
            .success((data: ExpectedResponse) => {
                $scope.person = data;
            });

        $http.get("http://somewhere/some/resource")
            .then((response: ng.IHttpPromiseCallbackArg<ExpectedResponse>) => {
                // typing lost, so something like
                // var i: number = response.data
                // would type check
                $scope.person = response.data;
            });

        $http.get("http://somewhere/some/resource")
            .then((response: ng.IHttpPromiseCallbackArg<ExpectedResponse>) => {
                // typing lost, so something like
                // var i: number = response.data
                // would NOT type check
                $scope.person = response.data;
            });

        var aPromise: ng.IPromise<Person> = $q.when({ firstName: "Jack", lastName: "Sparrow" });
        aPromise.then((person: Person) => {
            $scope.person = person;
        });

        var bPromise: ng.IPromise<number> = $q.when(42);
        bPromise.then((answer: number) => {
            $scope.theAnswer = answer;
        });

        var cPromise: ng.IPromise<string[]> = $q.when(["a", "b", "c"]);
        cPromise.then((letters: string[]) => {
            $scope.letters = letters;
        });
    }

  // Test that we can pass around a type-checked success/error Promise Callback
  var anotherController: Function = ($scope: SomeControllerScope, $http:
        ng.IHttpService, $q: ng.IQService) => {

        var buildFooData: Function = () => 42;

        var doFoo: Function = (callback: ng.IHttpPromiseCallback<ExpectedResponse>) => {
            $http.get('/foo', buildFooData())
                .success(callback);
        }

    doFoo((data) => console.log(data));
    }
}

// Test for AngularJS Syntax

module My.Namespace {
    export var x; // need to export something for module to kick in
}

// IModule Registering Test
var mod = angular.module('tests', []);
mod.controller('name', function ($scope: ng.IScope) { })
mod.controller('name', ['$scope', <any>function ($scope: ng.IScope) { }])
mod.controller(My.Namespace);
mod.directive('name', <any>function ($scope: ng.IScope) { })
mod.directive('name', ['$scope', <any>function ($scope: ng.IScope) { }])
mod.directive(My.Namespace);
mod.factory('name', function ($scope: ng.IScope) { })
mod.factory('name', ['$scope', <any>function ($scope: ng.IScope) { }])
mod.factory(My.Namespace);
mod.filter('name', function ($scope: ng.IScope) { })
mod.filter('name', ['$scope', <any>function ($scope: ng.IScope) { }])
mod.filter(My.Namespace);
mod.provider('name', function ($scope: ng.IScope) { })
mod.provider('name', ['$scope', <any>function ($scope: ng.IScope) { }])
mod.provider(My.Namespace);
mod.service('name', function ($scope: ng.IScope) { })
mod.service('name', ['$scope', <any>function ($scope: ng.IScope) { }])
mod.service(My.Namespace);
mod.constant('name', 23);
mod.constant('name', "23");
mod.constant(My.Namespace);
mod.value('name', 23);
mod.value('name', "23");
mod.value(My.Namespace);

// Promise signature tests
var foo: ng.IPromise<number>;
foo.then((x) => {
    // x is inferred to be a number
    return "asdf";
}).then((x) => {
    // x is inferred to be string
    x.length;
    return 123;
}).then((x) => {
    // x is infered to be a number
    x.toFixed();
    return;
}).then((x) => {
    // x is infered to be void
    // Typescript will prevent you to actually use x as a local variable
    // Try object:
    return { a: 123 };
}).then((x) => {
    // Object is inferred here
    x.a = 123;
    //Try a promise
    var y: ng.IPromise<number>;
    return y;
}).then((x) => {
    // x is infered to be a number, which is the resolved value of a promise
    x.toFixed();
});


// angular.element() tests
var element = angular.element("div.myApp");
var scope: ng.IScope = element.scope();


