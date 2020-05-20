import * as ng from 'angular';
import * as angular from 'angular';

import uiRouterModule from "angular-ui-router";
var myApp = angular.module("testModule", [uiRouterModule]);

interface MyAppScope extends ng.IScope {
    items: string[];
    things: string[];
}

myApp.config((
    $stateProvider: ng.ui.IStateProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider,
    $urlMatcherFactory: ng.ui.IUrlMatcherFactory) => {

  var matcher: ng.ui.IUrlMatcher = $urlMatcherFactory.compile("/foo/:bar?param1");

  $urlMatcherFactory.caseInsensitive(false);
  var isCaseInsensitive = $urlMatcherFactory.caseInsensitive();

  $urlMatcherFactory.defaultSquashPolicy("nosquash");

  $urlMatcherFactory.strictMode(true);
  var isStrictMode = $urlMatcherFactory.strictMode();

  $urlMatcherFactory.type("myType2", {
    encode: function (item: any) { return item; },
    decode: function (item: any) { return item; },
    is: function (item: any) { return true; }
  });

  $urlMatcherFactory.type("fullType", {
    decode: (val) => parseInt(val, 10),
    encode: (val) => val && val.toString(),
    equals: function (a, b) { return this.is(a) && a === b },
    is: (val) => angular.isNumber(val) && isFinite(val) && val % 1 === 0,
    pattern: /\d+/
  });

  var obj: Object = matcher.exec('/user/bob', { x:'1', q:'hello' });
  var concat: ng.ui.IUrlMatcher = matcher.concat('/test');
  var str: string = matcher.format({ id:'bob', q:'yes' });
  var arr: string[] = matcher.parameters();

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
      templateUrl: "partials/state1.html",
      params: {
        param1: "defaultValue",
        param2: undefined
      }
    })
    .state('state1.list', {
      url: "/list",
      templateUrl: "partials/state1.list.html",
        controller: function ($scope: MyAppScope) {
        $scope.items = ["A", "List", "Of", "Items"];
      }
    })
    .state('state1.list', {
      url: "/list",
      templateUrl: "partials/state1.list.html",
      controller: ['$scope', function ($scope: MyAppScope) {
        $scope.items = ["A", "List", "Of", "Items"];
      }]
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
      })
    .state('list', {
      parent: 'state3',
      url: "/list",
      templateUrl: "partials/state3.list.html",
      controller: function ($scope: MyAppScope) {
        $scope.things = ["A", "Set", "Of", "Things"];
      }
    })
    .state('state4', {
      url: "/state4",
      templateUrl: function($stateParams: ng.ui.IStateParamsService){
        //Logic could go here based on $stateParams
        return "partials/state4.html";
      }
    })
    .state('index', {
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
    static $inject = ["$http", "$rootScope", "$urlRouter", "$state"];

    constructor(
        private readonly $http: ng.IHttpService,
        private readonly $rootScope: ng.IRootScopeService,
        private readonly $urlRouter: ng.ui.IUrlRouterService,
        private readonly $state: ng.ui.IStateService
    ) {
        $rootScope.$on("$locationChangeSuccess", (event: ng.IAngularEvent) => this.onLocationChangeSuccess(event));
        $rootScope.$on('$stateNotFound', (event: ng.IAngularEvent, unfoundState: ng.ui.IUnfoundState, fromState: ng.ui.IState, fromParams: {}) =>
                                              this.onStateNotFound(event, unfoundState, fromState, fromParams));
    }

    public currentUser: any;

    private onLocationChangeSuccess(event: ng.IAngularEvent) {
        if (!this.currentUser) {
            // If the current user is unknown, halt the state change and request current
            // user details from the server
            event.preventDefault();

            // Note that we do not concern ourselves with what to do if this request fails,
            // because if it fails, the web page will be redirected away to the login screen.
            this.$http({ url: "/api/me", method: "GET" }).then((response: ng.IHttpResponse<any>) => {
                this.currentUser = response.data;

                // sync the ui-state with the location in the browser, which effectively
                // restarts the state change that was stopped previously
                this.$urlRouter.sync();
            });
        }
    }

     private onStateNotFound(event: ng.IAngularEvent,
                             unfoundState: ng.ui.IUnfoundState,
                             fromState: ng.ui.IState,
                             fromParams: {}) {
        var unfoundTo: string = unfoundState.to;
        var unfoundToParams: {} = unfoundState.toParams;
        var unfoundOptions: ng.ui.IStateOptions = unfoundState.options
    }

    private stateServiceTest() {
        this.$state.go("myState");
        this.$state.go(this.$state.current);
        this.$state.transitionTo("myState");
        this.$state.transitionTo(this.$state.current);
        if (this.$state.includes("myState") === true) {
          //
        }
        if (this.$state.is("myState") === true) {
          //
        }
        if (this.$state.href("myState") === "/myState") {
          //
        }
        this.$state.get();
        this.$state.get("myState");
        this.$state.get("myState", "yourState");
        this.$state.get("myState", this.$state.current);
        this.$state.get(this.$state.current);
        this.$state.get(this.$state.current, "yourState");
        this.$state.get(this.$state.current, this.$state.current);

        // make sure get() accepts a discriminated union type as well
        let myState: string | ng.ui.IState;
        this.$state.get(myState);

        this.$state.reload();

        // http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.$state#properties
        if (this.$state.transition) {
          var transitionPromise: ng.IPromise<{}> = this.$state.transition;
          transitionPromise.then(() => {
            // transition success
          }, () => {
            // transition failure
          }).catch(() => {
            // transition failure
          }).finally(() => {
            // transition ended (success or failure)
          });
        }

        // Accesses the currently resolved values for the current state
        // http://stackoverflow.com/questions/28026620/is-there-a-way-to-access-resolved-state-dependencies-besides-injecting-them-into/28027023#28027023
        var resolvedValues = this.$state.$current.locals.globals;
    }
}

myApp.service("urlLocatorTest", UrlLocatorTestService);

namespace UiViewScrollProviderTests {
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

interface ITestUserService {
    isLoggedIn: () => boolean;
    handleLogin: () => ng.IPromise<{}>;
}

namespace UrlRouterProviderTests {
    var app = angular.module("urlRouterProviderTests", ["ui.router"]);

    app.config(($urlRouterProvider: ng.ui.IUrlRouterProvider) => {
        // Prevent $urlRouter from automatically intercepting URL changes;
        // this allows you to configure custom behavior in between
        // location changes and route synchronization:
        $urlRouterProvider.deferIntercept();
    }).run(($rootScope: ng.IRootScopeService, $urlRouter: ng.ui.IUrlRouterService, UserService: ITestUserService, $urlMatcher: ng.ui.IUrlMatcher) => {
        $rootScope.$on('$locationChangeSuccess', e => {
            // UserService is an example service for managing user state
            if (UserService.isLoggedIn()) return;

            // Prevent $urlRouter's default handler from firing
            e.preventDefault();

            UserService.handleLogin().then(() => {
                // Once the user has logged in, sync the current URL to the router:
                $urlRouter.sync();
            });
        });

        // Configures $urlRouter's listener *after* your custom listener
        var listen: Function = $urlRouter.listen();

        var href: string;
        href = $urlRouter.href($urlMatcher);
        href = $urlRouter.href($urlMatcher, {});
        href = $urlRouter.href($urlMatcher, {}, {});

        $urlRouter.update();
        $urlRouter.update(false);

        $urlRouter.push($urlMatcher);
        $urlRouter.push($urlMatcher, {});
        $urlRouter.push($urlMatcher, {}, {});
    });
}
