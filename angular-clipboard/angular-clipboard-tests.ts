/// <reference path="angular-clipboard.d.ts" />
/// <reference path="../angularjs/angular.d.ts" />

const app = angular.module('testModule', ['angular-clipboard']);
app.controller('TestController', ($scope: ng.IScope, clipboard: angular.clipboard.IClipboardService) => {
	$scope['testCopy'] = () => {
		if (clipboard.supported) {
			clipboard.copyText('hiiiiiii');
		}
	};
});
