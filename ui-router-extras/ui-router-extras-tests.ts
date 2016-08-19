/// <reference path="ui-router-extras.d.ts"/>

var myApp = angular.module('testModule')

myApp.config(($stateProvider: angular.ui.IStateProvider, $stickyStateProvider: angular.ui.IStickyStateProvider) => {
    var state: angular.ui.IStickyState = {
		name: 'test',
        sticky: true,
        dsr: {
            default: 'substate',
            params: ['param1', 'param2'],
            fn: function ($dsr$) {

                return $dsr$.to;
            }
        },
        onInactivate: function ($state: angular.ui.IState) {
            var iAmInjectedByInjector = $state;
        },
        onReactivate: function ($state: angular.ui.IState) {
            var iAmInjectedByInjector = $state;
        },
        controller: ($previousState: angular.ui.IPreviousStateService, $deepstateRedirect: angular.ui.IDeepStateRedirectService) => {
			$previousState.memo('test-memo1');
			$previousState.memo('test-memo2', 'test-state-name2');
			$previousState.memo('test-memo3', 'test-state-name3', {});
			$previousState.forget('test-memo3');
			$previousState.go('test-memo2', {
				location: true,
				notify: true
            });
            $previousState.get();
            $previousState.get('test-memo1');

            $deepstateRedirect.reset('statename1', {
                'stateParam1': ['value1', 'value2'],
                'stateParam2': 'value'
            });
        },
        views: {
            //named views are mandatory
            'name1': {}
        }
	};

	$stickyStateProvider.enableDebug(true);
	$stateProvider.state(state);
    
    $stateProvider.state({
		name: 'test',
        sticky: true,
        dsr: {
            default: 'substate',
            params: ['param1', 'param2'],
            fn: function ($dsr$) {

                return $dsr$.to;
            }
        },
        onInactivate: function ($state: angular.ui.IState) {
            var iAmInjectedByInjector = $state;
        },
        onReactivate: function ($state: angular.ui.IState) {
            var iAmInjectedByInjector = $state;
        },
        controller: ($previousState: angular.ui.IPreviousStateService, $deepstateRedirect: angular.ui.IDeepStateRedirectService) => {
			$previousState.memo('test-memo1');
			$previousState.memo('test-memo2', 'test-state-name2');
			$previousState.memo('test-memo3', 'test-state-name3', {});
			$previousState.forget('test-memo3');
			$previousState.go('test-memo2', {
				location: true,
				notify: true
            });
            $previousState.get();
            $previousState.get('test-memo1');

            $deepstateRedirect.reset('statename1', {
                'stateParam1': ['value1', 'value2'],
                'stateParam2': 'value'
            });
        },
        views: {
            //named views are mandatory
            'name1': {}
        }
	});
    
    $stateProvider.state('name1', {
		name: 'test',
        sticky: true,
        dsr: {
            default: 'substate',
            params: ['param1', 'param2'],
            fn: function ($dsr$) {

                return $dsr$.to;
            }
        },
        onInactivate: function ($state: angular.ui.IState) {
            var iAmInjectedByInjector = $state;
        },
        onReactivate: function ($state: angular.ui.IState) {
            var iAmInjectedByInjector = $state;
        },
        controller: ($previousState: angular.ui.IPreviousStateService, $deepstateRedirect: angular.ui.IDeepStateRedirectService) => {
			$previousState.memo('test-memo1');
			$previousState.memo('test-memo2', 'test-state-name2');
			$previousState.memo('test-memo3', 'test-state-name3', {});
			$previousState.forget('test-memo3');
			$previousState.go('test-memo2', {
				location: true,
				notify: true
            });
            $previousState.get();
            $previousState.get('test-memo1');

            $deepstateRedirect.reset('statename1', {
                'stateParam1': ['value1', 'value2'],
                'stateParam2': 'value'
            });
        },
        views: {
            //named views are mandatory
            'name1': {}
        }
	});
    
});
