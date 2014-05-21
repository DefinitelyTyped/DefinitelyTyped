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

interface IUrlLocatorTestService {
    currentUser: any;
}

// Service for determining who the currently logged on user is.
class UrlLocatorTestService implements IUrlLocatorTestService {
    static $inject = ["$http", "$rootScope", "$urlRouter"];

    constructor(
        private $http: ng.IHttpService,
        private $rootScope: ng.IRootScopeService,
        private $urlRouter: ng.ui.IUrlRouterService
    ) {
        $rootScope.$on("$locationChangeSuccess", (event: ng.IAngularEvent) => this.onLocationChangeSuccess(event));
    }

    public currentUser: any;

    private onLocationChangeSuccess(event: ng.IAngularEvent) {
        if (!this.currentUser) {
            // If the current user is unknown, halt the state change and request current
            // user details from the server
            event.preventDefault();

            // Note that we do not concern ourselves with what to do if this request fails,
            // because if it fails, the web page will be redirected away to the login screen.
            this.$http({ url: "/api/me", method: "GET" }).success((user: any) => {
                this.currentUser = user;

                // sync the ui-state with the location in the browser, which effectively
                // restarts the state change that was stopped previously
                this.$urlRouter.sync();
            });
        }
    }
}

myApp.service("urlLocatorTest", UrlLocatorTestService);

module UiViewScrollProviderTests {
    var app = angular.module("uiViewScrollProviderTests", ["ui.router"]);
    
    app.config(['$uiViewScrollProvider', function($uiViewScrollProvider: ng.ui.IUiViewScrollProvider) {
        // This prevents unwanted scrolling to the active nested state view.
        // Use this when you have nested states, but you don't want the browser to scroll down the page
        // to the nested state view.
        //
        // See https://github.com/angular-ui/ui-router/issues/848
        // And https://github.com/angular-ui/ui-router/releases/tag/0.2.8
        $uiViewScrollProvider.useAnchorScroll();
    }]);
}

