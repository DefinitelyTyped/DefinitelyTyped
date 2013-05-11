///<reference path="rx.js.d.ts" />

declare module Rx {
	export module Observable {
		function ifThen(condition: () => bool, thenSource: IObservable): IObservable;
		function ifThen(condition: () => bool, thenSource: IObservable, elseSource: IObservable): IObservable;
		function ifThen(condition: () => bool, thenSource: IObservable, scheduler: IScheduler): IObservable;
		function interval(period: number, scheduler?: IScheduler): IObservable;
	}
}