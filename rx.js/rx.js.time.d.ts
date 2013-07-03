///<reference path="rx.js.d.ts" />

declare module Rx {
	interface IObservable<T> {
		ifThen(condition: () => bool, thenSource: IObservable<T>): IObservable<T>;
		ifThen(condition: () => bool, thenSource: IObservable<T>, elseSource: IObservable<T>): IObservable<T>;
		ifThen(condition: () => bool, thenSource: IObservable<T>, scheduler: IScheduler): IObservable<T>;
	}
	interface Observable {
		interval(period: number, scheduler?: IScheduler): IObservable<number>;
		interval(dutTime: number, period: number, scheduler?: IScheduler): IObservable<number>;
	}
}