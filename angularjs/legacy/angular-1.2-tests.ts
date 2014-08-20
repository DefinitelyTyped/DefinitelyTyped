/// <reference path="angular-1.2.d.ts" />

// issue: https://github.com/borisyankov/DefinitelyTyped/issues/369
// https://github.com/witoldsz/angular-http-auth/blob/master/src/angular-http-auth.js
/**
 * @license HTTP Auth Interceptor Module for AngularJS
 * (c) 2012 Witold Szczerba
 * License: MIT
 */

class AuthService {
    /**
      * Holds all the requests which failed due to 401 response,
      * so they can be re-requested in future, once login is completed.
      */
    buffer: { config: ng.IRequestConfig; deferred: ng.IDeferred<any>; }[] = [];

    /**
     * Required by HTTP interceptor.
     * Function is attached to provider to be invisible for regular users of this service.
     */
    pushToBuffer = function(config: ng.IRequestConfig, deferred: ng.IDeferred<any>) {
        this.buffer.push({
            config: config,
            deferred: deferred
        });
    }

    $get = [
        '$rootScope', '$injector', <any>function($rootScope: ng.IScope, $injector: ng.auto.IInjectorService) {
            var $http: ng.IHttpService; //initialized later because of circular dependency problem
            function retry(config: ng.IRequestConfig, deferred: ng.IDeferred<any>) {
                $http = $http || $injector.get('$http');
                $http(config).then(function (response) {
                    deferred.resolve(response);
                });
            }
            function retryAll() {
                for (var i = 0; i < this.buffer.length; ++i) {
                    retry(this.buffer[i].config, this.buffer[i].deferred);
                }
                this.buffer = [];
            }

            return {
                loginConfirmed: function () {
                    $rootScope.$broadcast('event:auth-loginConfirmed');
                    retryAll();
                }
            }
        }
    ];
}

angular.module('http-auth-interceptor', [])

    .provider('authService', AuthService)

/**
 * $http interceptor.
 * On 401 response - it stores the request and broadcasts 'event:angular-auth-loginRequired'.
 */
    .config(['$httpProvider', 'authServiceProvider', <any>function ($httpProvider: ng.IHttpProvider, authServiceProvider: any) {

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
        snack: string;
        nothing?: string;
    }

    var someController: Function = ($scope: SomeControllerScope, $http: ng.IHttpService, $q: ng.IQService) => {
        $http.get<ExpectedResponse>("http://somewhere/some/resource")
            .success((data: ExpectedResponse) => {
                $scope.person = data;
            });

        $http.get<ExpectedResponse>("http://somewhere/some/resource")
            .then((response: ng.IHttpPromiseCallbackArg<ExpectedResponse>) => {
                // typing lost, so something like
                // var i: number = response.data
                // would type check
                $scope.person = response.data;
            });

        $http.get<ExpectedResponse>("http://somewhere/some/resource")
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

        // When $q.when is passed an IPromise<T>, it returns an IPromise<T>
        var dPromise: ng.IPromise<string> = $q.when($q.when("ALBATROSS!"));
        dPromise.then((snack: string) => {
            $scope.snack = snack;
        });

        // $q.when may be called without arguments
        var ePromise: ng.IPromise<void> = $q.when();
        ePromise.then(() => {
            $scope.nothing = "really nothing";
        });
    }

  // Test that we can pass around a type-checked success/error Promise Callback
  var anotherController: Function = ($scope: SomeControllerScope, $http:
        ng.IHttpService, $q: ng.IQService) => {

        var buildFooData: Function = () => 42;

        var doFoo: Function = (callback: ng.IHttpPromiseCallback<ExpectedResponse>) => {
            $http.get<ExpectedResponse>('/foo', buildFooData())
                .success(callback);
        }

    doFoo((data: any) => console.log(data));
    }
}

// Test for AngularJS Syntax

module My.Namespace {
    export var x: any; // need to export something for module to kick in
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
mod.provider('name', function ($scope: ng.IScope) { return { $get: () => { } } })
mod.provider('name', TestProvider);
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

class TestProvider implements ng.IServiceProvider {
    constructor(private $scope: ng.IScope) {
    }

    $get() {
    }
}

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


var httpFoo: ng.IHttpPromise<number>;
httpFoo.then((x) => {
    // When returning a promise the generic type must be inferred.
    var innerPromise : ng.IPromise<number>;
    return innerPromise;
}).then((x) => {
    // must still be number.
    x.toFixed();
});


function test_angular_forEach() {
    var values: { [key: string]: string } = { name: 'misko', gender: 'male' };
    var log: string[] = [];
    angular.forEach(values, function (value, key) {
        this.push(key + ': ' + value);
    }, log);
    //expect(log).toEqual(['name: misko', 'gender: male']);
}

// angular.element() tests
var element = angular.element("div.myApp");
var scope: ng.IScope = element.scope();
var isolateScope: ng.IScope = element.isolateScope();



function test_IAttributes(attributes: ng.IAttributes){
    return attributes;
}

test_IAttributes({
    $addClass: function (classVal){},
    $removeClass: function(classVal){},
    $set: function(key, value){},
    $observe: function(name, fn){
        return fn;
    },
    $attr: {}
});

class SampleDirective implements ng.IDirective {
    public restrict = 'A';
    name = 'doh';

    compile(templateElement: ng.IAugmentedJQuery) {
        return {
            post: this.link
        };
    }

    static instance():ng.IDirective {
        return new SampleDirective();
    }

    link(scope: ng.IScope) {

    }
}

class SampleDirective2 implements ng.IDirective {
    public restrict = 'EAC';

    compile(templateElement: ng.IAugmentedJQuery) {
        return {
            pre: this.link
        };
    }

    static instance():ng.IDirective {
        return new SampleDirective2();
    }

    link(scope: ng.IScope) {

    }
}

angular.module('SameplDirective', []).directive('sampleDirective', SampleDirective.instance).directive('sameplDirective2', SampleDirective2.instance);

// test from https://docs.angularjs.org/guide/directive
angular.module('docsSimpleDirective', [])
    .controller('Controller', ['$scope', function($scope: any) {
        $scope.customer = {
            name: 'Naomi',
            address: '1600 Amphitheatre'
        };
    }])
    .directive('myCustomer', function() {
        return {
            template: 'Name: {{customer.name}} Address: {{customer.address}}'
        };
    });

angular.module('docsTemplateUrlDirective', [])
    .controller('Controller', ['$scope', function($scope: any) {
        $scope.customer = {
            name: 'Naomi',
            address: '1600 Amphitheatre'
        };
    }])
    .directive('myCustomer', function() {
        return {
            templateUrl: 'my-customer.html'
        };
    });

angular.module('docsRestrictDirective', [])
    .controller('Controller', ['$scope', function($scope: any) {
        $scope.customer = {
            name: 'Naomi',
            address: '1600 Amphitheatre'
        };
    }])
    .directive('myCustomer', function() {
        return {
            restrict: 'E',
            templateUrl: 'my-customer.html'
        };
    });

angular.module('docsScopeProblemExample', [])
    .controller('NaomiController', ['$scope', function($scope: any) {
        $scope.customer = {
            name: 'Naomi',
            address: '1600 Amphitheatre'
        };
    }])
    .controller('IgorController', ['$scope', function($scope: any) {
        $scope.customer = {
            name: 'Igor',
            address: '123 Somewhere'
        };
    }])
    .directive('myCustomer', function() {
        return {
            restrict: 'E',
            templateUrl: 'my-customer.html'
        };
    });

angular.module('docsIsolateScopeDirective', [])
    .controller('Controller', ['$scope', function($scope: any) {
        $scope.naomi = { name: 'Naomi', address: '1600 Amphitheatre' };
        $scope.igor = { name: 'Igor', address: '123 Somewhere' };
    }])
    .directive('myCustomer', function() {
        return {
            restrict: 'E',
            scope: {
                customerInfo: '=info'
            },
            templateUrl: 'my-customer-iso.html'
        };
    });

angular.module('docsIsolationExample', [])
    .controller('Controller', ['$scope', function($scope: any) {
        $scope.naomi = { name: 'Naomi', address: '1600 Amphitheatre' };
        $scope.vojta = { name: 'Vojta', address: '3456 Somewhere Else' };
    }])
    .directive('myCustomer', function() {
        return {
            restrict: 'E',
            scope: {
                customerInfo: '=info'
            },
            templateUrl: 'my-customer-plus-vojta.html'
        };
    });

angular.module('docsTimeDirective', [])
    .controller('Controller', ['$scope', function($scope: any) {
        $scope.format = 'M/d/yy h:mm:ss a';
    }])
    .directive('myCurrentTime', ['$interval', 'dateFilter', function($interval: any, dateFilter: any) {

        return {
            link: function(scope: ng.IScope, element: ng.IAugmentedJQuery, attrs:ng.IAttributes) {
                var format: any,
                    timeoutId: any;

                function updateTime() {
                    element.text(dateFilter(new Date(), format));
                }

                scope.$watch(attrs['myCurrentTime'], function (value: any) {
                    format = value;
                    updateTime();
                });

                element.on('$destroy', function () {
                    $interval.cancel(timeoutId);
                });

                // start the UI update process; save the timeoutId for canceling
                timeoutId = $interval(function () {
                    updateTime(); // update DOM
                }, 1000);
            }
        };
    }]);

angular.module('docsTransclusionDirective', [])
    .controller('Controller', ['$scope', function($scope: any) {
        $scope.name = 'Tobias';
    }])
    .directive('myDialog', function() {
        return {
            restrict: 'E',
            transclude: true,
            templateUrl: 'my-dialog.html'
        };
    });

angular.module('docsTransclusionExample', [])
    .controller('Controller', ['$scope', function($scope: any) {
        $scope.name = 'Tobias';
    }])
    .directive('myDialog', function() {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            templateUrl: 'my-dialog.html',
            link: function (scope: ng.IScope, element: ng.IAugmentedJQuery) {
                scope['name'] = 'Jeff';
            }
        };
    });

angular.module('docsIsoFnBindExample', [])
    .controller('Controller', ['$scope', '$timeout', function($scope: any, $timeout: any) {
        $scope.name = 'Tobias';
        $scope.hideDialog = function () {
            $scope.dialogIsHidden = true;
            $timeout(function () {
                $scope.dialogIsHidden = false;
            }, 2000);
        };
    }])
    .directive('myDialog', function() {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                'close': '&onClose'
            },
            templateUrl: 'my-dialog-close.html'
        };
    });

angular.module('dragModule', [])
    .directive('myDraggable', ['$document', function($document: any) {
        return function(scope: any, element: any, attr: any) {
            var startX = 0, startY = 0, x = 0, y = 0;

            element.css({
                position: 'relative',
                border: '1px solid red',
                backgroundColor: 'lightgrey',
                cursor: 'pointer'
            });

            element.on('mousedown', function(event: any) {
                // Prevent default dragging of selected content
                event.preventDefault();
                startX = event.pageX - x;
                startY = event.pageY - y;
                $document.on('mousemove', mousemove);
                $document.on('mouseup', mouseup);
            });

            function mousemove(event: any) {
                y = event.pageY - startY;
                x = event.pageX - startX;
                element.css({
                    top: y + 'px',
                    left:  x + 'px'
                });
            }

            function mouseup() {
                $document.off('mousemove', mousemove);
                $document.off('mouseup', mouseup);
            }
        };
    }]);

angular.module('docsTabsExample', [])
    .directive('myTabs', function() {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            controller: function($scope: ng.IScope) {
                var panes: any = $scope['panes'] = [];

                $scope['select'] = function(pane: any) {
                    angular.forEach(panes, function(pane: any) {
                        pane.selected = false;
                    });
                    pane.selected = true;
                };

                this.addPane = function(pane: any) {
                    if (panes.length === 0) {
                        $scope['select'](pane);
                    }
                    panes.push(pane);
                };
            },
            templateUrl: 'my-tabs.html'
        };
    })
    .directive('myPane', function() {
        return {
            require: '^myTabs',
            restrict: 'E',
            transclude: true,
            scope: {
                title: '@'
            },
            link: function(scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, tabsCtrl: any) {
                tabsCtrl.addPane(scope);
            },
            templateUrl: 'my-pane.html'
        };
    });
