// Type definitions for angularjs extensions to rxjs
// Project: http://reactivex.io/
// Definitions by: Mick Delaney <https://github.com/mickdelaney/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />
/// <reference path="../rx/rx.d.ts" />
/// <reference path="../rx/rx.time.d.ts" />

declare module Rx {

    interface IObservable<T> {
        safeApply($scope: ng.IScope, callback: (data: any) => void): Rx.Observable<any>;
    }
    
    export interface ScopeScheduler extends IScheduler {
        constructor(scope: ng.IScope);
    }

    export interface ScopeSchedulerStatic extends SchedulerStatic {
        new ($scope: angular.IScope): ScopeScheduler;
    }

    export var ScopeScheduler: ScopeSchedulerStatic;
}

declare module rx.angular {
    
    export interface IRxScope extends ng.IScope {
        $toObservable(property: string): Rx.Observable<any>;
    }    
}
    
