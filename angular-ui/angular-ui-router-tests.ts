/// <reference path="angular-ui-router.d.ts" />

var myApp = angular.module('testModule');

interface MyAppScope extends ng.IScope {
	items: string[];
	things: string[];
}

myApp.config((
    $stateProvider: ng.ui.IStateProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider,
    $urlMatcherFactory: ng.ui.IUrlMatcherFactory) => {

  var matcher: ng.ui.IUrlMatcher = $urlMatcherFactory.compile("/foo/:bar?param1");
  
  $urlRouterProvider
      .when('/test', '/list')
      .when('/test', '/list')
      .when('/test', '/list')
      .when(/\/test\d/, '/list')
      .when(/\/test\d/, ($injector: ng.auto.IInjectorService, $location: ng.ILocationService) => '/list')
      .when(/\/test\d/,['$injector', '$location', ($injector: ng.auto.IInjectorService, $location: ng.ILocationService) => '/list'])
      .when(matcher, '/list')
      .when(matcher, ($injector: ng.auto.IInjectorService, $location: ng.ILocationService) => '/list')
      .when(matcher, ['$injector', '$location', ($injector: ng.auto.IInjectorService, $location: ng.ILocationService) => '/list'])
      .otherwise("/state1");

  // Now set up the states
  $stateProvider
    .state('state1', {
      url: "/state1",
      templateUrl: "partials/state1.html"
    })
    .state('state1.list', {
      url: "/list",
      templateUrl: "partials/state1.list.html",
		controller: function ($scope: MyAppScope) {
        $scope.items = ["A", "List", "Of", "Items"];
      }
    })
    .state('state2', {
      url: "/state2",
      templateUrl: "partials/state2.html"
    })
    .state('state2.list', {
      url: "/list",
        templateUrl: "partials/state2.list.html",
		controller: function ($scope: MyAppScope) {
          $scope.things = ["A", "Set", "Of", "Things"];
        }
      }).state('index', {
      url: "",
      views: {
        "viewA": { template: "index.viewA" },
        "viewB": { template: "index.viewB" }
      }
    })
    .state('route1', {
      url: "/route1",
      views: {
        "viewA": { template: "route1.viewA" },
        "viewB": { template: "route1.viewB" }
      }
    })
    .state('route2', {
      url: "/route2",
      views: {
        "viewA": { template: "route2.viewA" },
        "viewB": { template: "route2.viewB" }
      }
    });
});
