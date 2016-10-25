/// <reference path="../angularjs/angular.d.ts" />
/// <reference path="./angular-deferred-bootstrap.d.ts" />

deferredBootstrapper.bootstrap(
    {
        element: window.document,
        module: "myApp",
        resolve: {
            configuration: ["$http", ($http: ng.IHttpService) => $http.get("config.json")]
        }
    });
