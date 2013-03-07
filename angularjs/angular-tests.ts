/// <reference path="angular.d.ts" />

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
      this.pushToBuffer = function (config: ng.IRequestConfig, deferred: ng.IDeferred) {
          buffer.push({
              config: config,
              deferred: deferred
          });
      }

      this.$get = ['$rootScope', '$injector', <any>function ($rootScope: ng.IScope, $injector: ng.auto.IInjectorService) {
          var $http: ng.IHttpService; //initialized later because of circular dependency problem
          function retry(config: ng.IRequestConfig, deferred: ng.IDeferred) {
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
          function success(response: ng.PromiseCallbackArg) {
              return response;
          }

          function error(response: ng.PromiseCallbackArg) {
              if (response.status === 401) {
                  var deferred = $q.defer();
                  authServiceProvider.pushToBuffer(response.config, deferred);
                  $rootScope.$broadcast('event:auth-loginRequired');
                  return deferred.promise;
              }
              // otherwise
              return $q.reject(response);
          }

          return function (promise: ng.IHttpPromise) {
              return promise.then(success, error);
          }

      }];
      $httpProvider.responseInterceptors.push(interceptor);
  }]);