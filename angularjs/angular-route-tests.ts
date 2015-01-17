/// <reference path="angular-route.d.ts" />

/**
 * @license HTTP Auth Interceptor Module for AngularJS
 * (c) 2013 Jonathan Park @ Daptiv Solutions Inc
 * License: MIT
 */

declare var $routeProvider: ng.route.IRouteProvider;
$routeProvider
    .when('/projects/:projectId/dashboard', {
        controller: 'I am a string',
        templateUrl: '',
        caseInsensitiveMatch: true,
        reloadOnSearch: false
    })
    .when('/projects/:projectId/dashboard', {
        controller: function() {
            //Look at me - I'm a function!
        },
        templateUrl: '',
        caseInsensitiveMatch: true,
        reloadOnSearch: false
    })
        .otherwise({redirectTo: '/'});
