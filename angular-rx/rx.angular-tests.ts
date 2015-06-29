/// <reference path="rx.angular.d.ts" />

var app = angular.module('testModule');

interface AppScope extends rx.angular.IRxScope {
}

app.controller('Ctrl', ($scope: AppScope) => {
    	
	this.inputObservable = $scope.$toObservable('term')
								 .throttle(400)
								 .safeApply($scope, (results: any) => {
				                      this.results = results;
				                  });
				  
});
