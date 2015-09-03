/// <reference path="ui-router-extras.d.ts"/>

var myApp = angular.module('testModule')

myApp.config(($stateProvider: angular.ui.IStateProvider, $stickyStateProvider: angular.ui.IStickyStateProvider) => {
	var state: angular.ui.IStickyState = {
		name: 'test',
		sticky: true,
		controller: ($previousState: angular.ui.IPreviousStateService) => {
			$previousState.memo('test-memo1');
			$previousState.memo('test-memo2', 'test-state-name2');
			$previousState.memo('test-memo3', 'test-state-name3', {});
			$previousState.forget('test-memo3');
			$previousState.go('test-memo2', {
				location: true,
				notify: true
			});
		}
	};

	$stickyStateProvider.enableDebug(true);
	$stateProvider.state(state);
});
