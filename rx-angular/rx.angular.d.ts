// Type definitions for angularjs extensions to rxjs
// Project: http://reactivex.io/
// Definitions by: Mick Delaney <https://github.com/mickdelaney/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />
/// <reference path="../rx/rx.d.ts" />
/// <reference path="../rx/rx.time.d.ts" />

declare namespace Rx {

    interface IObservable<T> {
        safeApply($scope: ng.IScope, callback: (data: T) => void): Rx.Observable<T>;
    }

    export interface ScopeScheduler extends IScheduler {
        constructor(scope: ng.IScope) : ScopeScheduler;
    }

    export interface ScopeSchedulerStatic extends SchedulerStatic {
        new ($scope: angular.IScope): ScopeScheduler;
    }

    export var ScopeScheduler: ScopeSchedulerStatic;
}

declare namespace rx.angular {

    export interface IRxScope extends ng.IScope {
        $toObservable(property: string): Rx.Observable<any>;
    }
}

