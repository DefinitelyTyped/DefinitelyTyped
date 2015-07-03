// Type definitions for angularjs extensions to rxjs
// Project: http://reactivex.io/
// Definitions by: Mick Delaney <https://github.com/mickdelaney/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

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
