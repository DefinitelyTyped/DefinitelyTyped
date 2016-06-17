/// <reference path='../angularjs/angular.d.ts'/>
/// <reference path="ng-notify.d.ts" />

class NgNotifyTestController {

    static $inject = ['$scope', 'ngNotify'];

    constructor($scope:ng.IScope, ngNotify:ngNotify.INotifyService) {
		ngNotify.set('Your error message goes here!', 'error');
    }
};