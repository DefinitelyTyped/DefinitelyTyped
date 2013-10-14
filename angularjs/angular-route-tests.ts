/// <reference path="angular-route.d.ts" />

/**
 * @license HTTP Auth Interceptor Module for AngularJS
 * (c) 2013 Jonathan Park @ Daptiv Solutions Inc
 * License: MIT
 */

declare var $routProvider: ng.route.IRouteProvider;
$routeProvider
        .when('/projects/:projectId/dashboard',{
            controller: ''
        })
        .otherwise({redirectTo: '/'});
