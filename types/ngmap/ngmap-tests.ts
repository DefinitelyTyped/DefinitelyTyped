class NgMapTestController implements ng.IController {
    constructor(public $scope: ng.IScope, public $window: ng.IWindowService, public NgMap: angular.map.INgMap) {
        this.showMap();
    }

    public showMap() {
        this.NgMap.getMap().then(function(map) {
            console.log(map.getCenter());
        });
    }
    $onInit() {
    }
}

var app = angular.module('angularLocalStorageTests', ['ngMap']);

app.config(function(NgMapProvider: angular.map.INgMapProvider) {
   NgMapProvider.setDefaultOptions({
         marker: {
               optimized: false
        }
       });
 });

app.controller('testCtrl', ['$scope', '$window', 'ngMap',
    ($scope: ng.IScope, $window: ng.IWindowService, NgMap: angular.map.INgMap) => new NgMapTestController($scope, $window, NgMap)]);
