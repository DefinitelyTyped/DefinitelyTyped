import * as angular from 'angular';
var myApp = angular.module('testModule')

myApp.config(($stateProvider: angular.ui.IStateProvider, $stickyStateProvider: angular.ui.IStickyStateProvider) => {
    var state: angular.ui.IStickyState = {
        name: 'test',
        sticky: true,
        dsr: {
            default: 'substate',
            params: ['param1', 'param2'],
            fn: ($dsr$) => {

                return $dsr$.to;
            }
        },
        onInactivate: ($state: angular.ui.IState) => {
            var iAmInjectedByInjector = $state;
        },
        onReactivate: ($state: angular.ui.IState) => {
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
            fn: ($dsr$) => {

                return $dsr$.to;
            }
        },
        onInactivate: ($state: angular.ui.IState) => {
            var iAmInjectedByInjector = $state;
        },
        onReactivate: ($state: angular.ui.IState) => {
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
            fn: ($dsr$) => {

                return $dsr$.to;
            }
        },
        onInactivate: ($state: angular.ui.IState) => {
            var iAmInjectedByInjector = $state;
        },
        onReactivate: ($state: angular.ui.IState) => {
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

var templateLoadStateFactory: ng.ui.IFutureStateFactory = ($q: ng.IQService, $timeout: ng.ITimeoutService, futureState: ng.ui.IFutureState) => {
    var d = $q.defer();
    $timeout(() => {
        var fullUiRouterState = {
            name: futureState.stateName,
            url: futureState.url,
            template: '<h1>Template</h1>'
        }
        d.resolve(fullUiRouterState); // Async resolve of ui-router state promise
    }, 1000);
    return d.promise; // ui-router state promise returned
}

myApp.config(($futureStateProvider: ng.ui.IFutureStateProvider) => {
    $futureStateProvider.addResolve(($q: ng.IQService, $timeout: ng.ITimeoutService) => {
        var d = $q.defer();
        $timeout(() => {
            d.resolve("When this resolves, future state provider will re-sync the state/url");
        }, 1000);
        return d.promise;
    });

    var futureState = { type: 'ngload', stateName: 'foo', url: '/foo', src: 'foo.js' };
    $futureStateProvider.futureState(futureState);

    $futureStateProvider.stateFactory('ngload', templateLoadStateFactory);
});

var adminModuleFutureState: ng.ui.IFutureState = {
    stateName: 'app.admin',
    url: '/admin',
    type: 'ngload',
    src: 'js/modules/admin.js' // example custom attr
}
