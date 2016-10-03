/// <reference path="angular.d.ts" />
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
        templateUrl: "So am I",
        caseInsensitiveMatch: true,
        reloadOnSearch: false
    })
    .when('/projects/:projectId/dashboard2', {
        controller: function () {
            //Look at me - I'm a function!
        },
        template: function ($routeParams?: ng.route.IRouteParamsService) {
            return "I return a string"
        }
    })
    .when('/projects/:projectId/dashboard3', {
        controllerAs: 'I am a string',
        template: "Yup.  String"
    })
    .when('/projects/:projectId/dashboard4', {
        controller: 'I am a string',
        templateUrl: function ($routeParams?: ng.route.IRouteParamsService) {
            return "I return a string"
        }
    })
    .when('/projects/:projectId/dashboard5', {
        controller: ['$log',function($log:ng.ILogService){
            $log.info('I am array')
        }],
        templateUrl: function ($routeParams?: ng.route.IRouteParamsService) {
            return "I return a string"
        }
    })
    .otherwise({ redirectTo: '/' })
    .otherwise({ redirectTo: ($routeParams?: ng.route.IRouteParamsService, $locationPath?: string, $locationSearch?: any) => "" });


var current: ng.route.ICurrentRoute;
current.locals['test-key'] = 'test-value';
