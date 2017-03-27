

var app = angular.module('testModule', ['angular-loading-bar']);

class TestController {

	constructor($http: ng.IHttpService) {

		$http.get("http://xyz.com", { ignoreLoadingBar: true })

	}

}

app.controller('TestController', TestController);

var barConfig: angular.loadingBar.ILoadingBarProvider[] = [];
barConfig.push({
    includeSpinner: true,
    includeBar: true,
    spinnerTemplate: 'template',
    latencyThreshold: 100
});
