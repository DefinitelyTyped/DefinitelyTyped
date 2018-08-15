import * as angular from 'angular';
const myApp = angular.module('testModule');

myApp.config(($stateProvider: angular.ui.IStateProvider, $stickyStateProvider: angular.ui.IStickyStateProvider) => {
    const state: angular.ui.IStickyState = {
        name: 'test',
        sticky: true,
        dsr: {
            default: 'substate',
            params: ['param1', 'param2'],
            fn: ($dsr$) => $dsr$.to,
        },
        onInactivate: ($state: angular.ui.IState) => {
            const iAmInjectedByInjector = $state;
        },
        onReactivate: ($state: angular.ui.IState) => {
            const iAmInjectedByInjector = $state;
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
                stateParam1: ['value1', 'value2'],
                stateParam2: 'value'
            });
        },
        views: {
            // named views are mandatory
            name1: {}
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
            fn: $dsr$ => $dsr$.to,
        },
        onInactivate: ($state: angular.ui.IState) => {
            const iAmInjectedByInjector = $state;
        },
        onReactivate: ($state: angular.ui.IState) => {
            const iAmInjectedByInjector = $state;
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
                stateParam1: ['value1', 'value2'],
                stateParam2: 'value'
            });
        },
        views: {
            // named views are mandatory
            name1: {}
        }
    });

    $stateProvider.state('name1', {
        name: 'test',
        sticky: true,
        dsr: {
            default: 'substate',
            params: ['param1', 'param2'],
            fn: $dsr$ => $dsr$.to,
        },
        onInactivate: ($state: angular.ui.IState) => {
            const iAmInjectedByInjector = $state;
        },
        onReactivate: ($state: angular.ui.IState) => {
            const iAmInjectedByInjector = $state;
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
                stateParam1: ['value1', 'value2'],
                stateParam2: 'value'
            });
        },
        views: {
            // named views are mandatory
            name1: {}
        }
    });
});

const templateLoadStateFactory: ng.ui.IFutureStateFactory = ($q: ng.IQService, $timeout: ng.ITimeoutService, futureState: ng.ui.IFutureState) => {
    const d = $q.defer();
    $timeout(() => {
        const fullUiRouterState = {
            name: futureState.stateName,
            url: futureState.url,
            template: '<h1>Template</h1>'
        };
        d.resolve(fullUiRouterState); // Async resolve of ui-router state promise
    }, 1000);
    return d.promise; // ui-router state promise returned
};

myApp.config(($futureStateProvider: ng.ui.IFutureStateProvider) => {
    $futureStateProvider.addResolve(($q: ng.IQService, $timeout: ng.ITimeoutService) => {
        const d = $q.defer();
        $timeout(() => {
            d.resolve("When this resolves, future state provider will re-sync the state/url");
        }, 1000);
        return d.promise;
    });

    const futureState = { type: 'ngload', stateName: 'foo', url: '/foo', src: 'foo.js' };
    $futureStateProvider.futureState(futureState);

    $futureStateProvider.stateFactory('ngload', templateLoadStateFactory);
});

const adminModuleFutureState: ng.ui.IFutureState = {
    stateName: 'app.admin',
    url: '/admin',
    type: 'ngload',
    src: 'js/modules/admin.js' // example custom attr
};
