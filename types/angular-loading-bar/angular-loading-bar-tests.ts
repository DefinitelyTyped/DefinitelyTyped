
var app = angular.module('testModule', ['angular-loading-bar']);

class TestController {

	constructor($http: ng.IHttpService) {

		$http.get("http://xyz.com", { ignoreLoadingBar: true })

	}

}

app.controller('TestController', TestController);

var barConfig: angular.loadingBar.ILoadingBarProvider;

barConfig.includeSpinner = false;
barConfig.includeBar = false;
barConfig.spinnerTemplate = 'someOtherTemplateString';
barConfig.latencyThreshold = 70;
barConfig.startSize = 0.05;
barConfig.loadingBarTemplate = 'anotherTemplateString';
barConfig.autoIncrement = false;
