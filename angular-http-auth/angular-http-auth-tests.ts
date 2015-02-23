/// <reference path="./angular-http-auth.d.ts" />

(function () {
    'use strict';
    angular.module('login', ['http-auth-interceptor'])

        .controller('LoginController', ($scope:any, $http:any, authService:angular.httpAuth.IAuthService) => {
            $scope.submit = () => {
                $http.post('auth/login').success(() => {
                    authService.loginConfirmed();
                });
            }
        });
})();
