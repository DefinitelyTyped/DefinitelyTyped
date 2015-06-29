/// <reference path="../angularjs/angular.d.ts" />
/// <reference path="../rx/rx.d.ts" />
/// <reference path="../rx/rx.time.d.ts" />

declare module Rx {

    interface IObservable<T> {
        safeApply($scope: ng.IScope, callback: (data: any) => void);
    }
}

declare module rx.angular {
    
    export interface IRxScope extends ng.IScope {
        $toObservable(property: string): Rx.Observable<any>;
    }    
}
    
