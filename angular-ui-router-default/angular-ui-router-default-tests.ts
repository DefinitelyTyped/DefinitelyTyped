import * as angular from "angular";

angular.module("test", [
	"ui.router",
	"ui.router.default"
])
	.config(function($stateProvider: angular.ui.IStateProvider) {
		$stateProvider
			.state('concrete', {
				// no abstract or default
			})
			.state('string', {
				abstract: true,
				default: 'concrete'
			})
			.state('func_str', {
				abstract: true,
				default: function($rootScope): string { return $rootScope.test; }
			})
			.state('func_promise', {
				abstract: true,
				default: function($q: ng.IQService): ng.IPromise<string> {
					return $q.when("concrete");
				}
			})
			.state('injection_str', {
				abstract: true,
				default: ["$rootScope", function($rootScope) {
					return $rootScope.test;
				}]
			})
			.state('injection_promise', {
				abstract: true,
				default: ["$q", function($q: ng.IQService) {
					return $q.when("concrete");
				}]
			})
		;
	});
