/// <reference types="angular" />
/// <reference types="rx" />

declare namespace Rx {
    interface IObservable<T> {
        safeApply($scope: ng.IScope, callback: (data: T) => void): Rx.Observable<T>;
    }

    export interface ScopeScheduler extends IScheduler {}

    export interface ScopeSchedulerStatic extends SchedulerStatic {
        new($scope: angular.IScope): ScopeScheduler;
    }

    export var ScopeScheduler: ScopeSchedulerStatic;
}

declare namespace rx.angular {
    export interface IRxScope extends ng.IScope {
        $toObservable(property: string): Rx.Observable<any>;
    }
}
