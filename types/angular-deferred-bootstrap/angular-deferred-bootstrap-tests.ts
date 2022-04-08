deferredBootstrapper.bootstrap(
    {
        element: window.document,
        module: "myApp",
        resolve: {
            configuration: ["$http", ($http: ng.IHttpService) => $http.get("config.json")]
        }
    });
