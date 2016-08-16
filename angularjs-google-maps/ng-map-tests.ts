/// <reference path="ng-map.d.ts" />
class NgMapTestController {
    constructor(public $scope: ng.IScope, public $window: ng.IWindowService, public NgMap: ngMap.INgMap) {
        this.showMap();
    }

    public showMap() {
    	this.NgMap.getMap().then(function(map) {
		    console.log(map.getCenter());
		});
    }
}

var app = angular.module('angularLocalStorageTests', ['ngMap']);

app.config(function(NgMapProvider: ngMap.INgMapProvider) {
   NgMapProvider.setDefaultOptions({
     	marker: {
       		optimized: false
    	} 
   	});
 });

app.controller('testCtrl', ['$scope', '$window', 'ngMap',  
	($scope: ng.IScope, $window: ng.IWindowService, NgMap: ngMap.INgMap) => new NgMapTestController($scope, $window, NgMap)]);