

(function () {
    'use strict';
    angular.module('login', ['http-auth-interceptor'])

        .controller('LoginController', ($scope:any, $http:any, authService:ng.httpAuth.IAuthService) => {
            $scope.submit = () => {
                $http.post('auth/login').success(() => {
                    authService.loginConfirmed();
                });
            }
        });
})();
