/// <reference path="angular-route-1.2.d.ts" />

/**
 * @license HTTP Auth Interceptor Module for AngularJS
 * (c) 2013 Jonathan Park @ Daptiv Solutions Inc
 * License: MIT
 */

declare var $routeProvider: ng.route.IRouteProvider;
$routeProvider
        .when('/projects/:projectId/dashboard',{
            controller: '',
            templateUrl: '',
            caseInsensitiveMatch: true,
            reloadOnSearch: false
        })
        .otherwise({redirectTo: '/'});
