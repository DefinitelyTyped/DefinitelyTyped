/// <reference path="angular-loading-bar.d.ts" />

var app = angular.module('testModule', ['angular-loading-bar']);

class TestController {

	constructor($http: ng.IHttpService) {

		$http.get("http://xyz.com", { ignoreLoadingBar: true })
		
	}

}

app.controller('TestController', TestController);
