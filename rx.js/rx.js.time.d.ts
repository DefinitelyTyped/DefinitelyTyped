///<reference path="rx.js.d.ts" />

declare module Rx {
	interface Observable {
		ifThen(condition: () => bool, thenSource: IObservable): IObservable;
		ifThen(condition: () => bool, thenSource: IObservable, elseSource: IObservable): IObservable;
		ifThen(condition: () => bool, thenSource: IObservable, scheduler: IScheduler): IObservable;
		interval(period: number, scheduler?: IScheduler): IObservable;
	}
}