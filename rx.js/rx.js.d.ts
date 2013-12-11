// Type definitions for RxJS
// Project: http://rx.codeplex.com/
// Definitions by: gsino <http://www.codeplex.com/site/users/view/gsino>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


declare module Rx {
	export module Internals {
		function inherits(child: Function, parent: Function): Function;
		function addProperties(obj: Object, ...sourcces: Object[]): void;
		function addRef<T>(xs: IObservable<T>, r: { getDisposable(): IDisposable; }): IObservable<T>;
	}

	//Collections
	interface IIndexedItem {
		id: number;
		value: IScheduledItem;

		compareTo(other: IIndexedItem): number;
	}

	// Priority Queue for Scheduling
	interface IPriorityQueue {
		items: IIndexedItem[];
		length: number;

		isHigherPriority(left: number, right: number): boolean;
		percolate(index: number): void;
		heapify(index: number): void;
		peek(): IIndexedItem;
		removeAt(index: number): void;
		dequeue(): IIndexedItem;
		enqueue(item: IIndexedItem): void;
		remove(item: IIndexedItem): boolean;
	}

	interface IDisposable {
		dispose(): void;
	}

	export class CompositeDisposable implements IDisposable {
		constructor (...disposables: IDisposable[]);
		constructor (disposables: IDisposable[]);

		isDisposed: boolean;
		length: number;

		dispose(): void;
		add(item: IDisposable): void;
		remove(item: IDisposable): boolean;
		clear(): void;
		contains(item: IDisposable): boolean;
		toArray(): IDisposable[];
	}

	export class Disposable implements IDisposable {
		constructor(action: () => void);

		static create(action: () => void): IDisposable;
		static empty: IDisposable;

		isDisposed: boolean;
		action: () => void;

		dispose(): void;
	}

	// Single assignment
	export class SingleAssignmentDisposable implements IDisposable {
		constructor();

		isDisposed: boolean;
		current: IDisposable;

		dispose(): void ;
		getDisposable(): IDisposable;
		setDisposable(value: IDisposable): void ;
	}

	// Multiple assignment disposable
	export class SerialDisposable implements IDisposable {
		constructor();

		isDisposed: boolean;

		dispose(): void;
		getDisposable(): IDisposable;
		setDisposable(value: IDisposable): void;
	}

	export class RefCountDisposable implements IDisposable {
		constructor(disposable: IDisposable);

		dispose(): void;

		isDisposed: boolean;
		getDisposable(): IDisposable;
	}

	interface IScheduledItem {
		scheduler: IScheduler;
		state: any;
		action: (scheduler: IScheduler, state) => IDisposable;
		dueTime: number;
		comparer: (x: number, y: number) =>number;
		disposable: SingleAssignmentDisposable;

		invoke(): void;
		compareTo(other: IScheduledItem): number;
		isCancelled(): boolean;
		invokeCore(): IDisposable;
	}

	interface IScheduler {
		now(): number;
		catch(handler: (exception: any) => boolean): IScheduler;
		catchException(handler: (exception: any) => boolean): IScheduler;

		schedule(action: () => void): IDisposable;
		scheduleWithState(state: any, action: (scheduler: IScheduler, state: any) => IDisposable): IDisposable;
		scheduleWithAbsolute(dueTime: number, action: () => void): IDisposable;
		scheduleWithAbsoluteAndState(state: any, dueTime: number, action: (scheduler: IScheduler, state: any) =>IDisposable): IDisposable;
		scheduleWithRelative(dueTime: number, action: () => void): IDisposable;
		scheduleWithRelativeAndState(state: any, dueTime: number, action: (scheduler: IScheduler, state: any) =>IDisposable): IDisposable;

		scheduleRecursive(action: (action: () =>void ) =>void ): IDisposable;
		scheduleRecursiveWithState(state: any, action: (state: any, action: (state: any) =>void ) =>void ): IDisposable;
		scheduleRecursiveWithAbsolute(dueTime: number, action: (action: (dueTime: number) => void) => void): IDisposable;
		scheduleRecursiveWithAbsoluteAndState(state: any, dueTime: number, action: (state: any, action: (state: any, dueTime: number) => void) => void): IDisposable;
		scheduleRecursiveWithRelative(dueTime: number, action: (action: (dueTime: number) =>void ) =>void ): IDisposable;
		scheduleRecursiveWithRelativeAndState(state: any, dueTime: number, action: (state: any, action: (state: any, dueTime: number) =>void ) =>void ): IDisposable;

		schedulePeriodic(period: number, action: () => void): IDisposable;
		schedulePeriodicWithState(state: any, period: number, action: (state: any) => any): IDisposable;
	}

	export class Scheduler implements IScheduler {
		constructor(
			now: () => number,
			schedule: (state: any, action: (scheduler: IScheduler, state: any) => IDisposable) => IDisposable,
			scheduleRelative: (state: any, dueTime: number, action: (scheduler: IScheduler, state: any) => IDisposable) => IDisposable,
			scheduleAbsolute: (state: any, dueTime: number, action: (scheduler: IScheduler, state: any) => IDisposable) => IDisposable);

		static normalize(timeSpan: number): number;

		static immediate: IScheduler;
		static currentThread: ICurrentThreadScheduler;
		static timeout: IScheduler;

		now(): number;
		catch(handler: (exception: any) => boolean): IScheduler;
		catchException(handler: (exception: any) => boolean): IScheduler;

		schedule(action: () => void): IDisposable;
		scheduleWithState(state: any, action: (scheduler: IScheduler, state: any) => IDisposable): IDisposable;
		scheduleWithAbsolute(dueTime: number, action: () => void): IDisposable;
		scheduleWithAbsoluteAndState(state: any, dueTime: number, action: (scheduler: IScheduler, state: any) => IDisposable): IDisposable;
		scheduleWithRelative(dueTime: number, action: () => void): IDisposable;
		scheduleWithRelativeAndState(state: any, dueTime: number, action: (scheduler: IScheduler, state: any) => IDisposable): IDisposable;

		scheduleRecursive(action: (action: () => void) => void): IDisposable;
		scheduleRecursiveWithState(state: any, action: (state: any, action: (state: any) => void) => void): IDisposable;
		scheduleRecursiveWithAbsolute(dueTime: number, action: (action: (dueTime: number) => void) => void): IDisposable;
		scheduleRecursiveWithAbsoluteAndState(state: any, dueTime: number, action: (state: any, action: (state: any, dueTime: number) => void) => void): IDisposable;
		scheduleRecursiveWithRelative(dueTime: number, action: (action: (dueTime: number) => void) => void): IDisposable;
		scheduleRecursiveWithRelativeAndState(state: any, dueTime: number, action: (state: any, action: (state: any, dueTime: number) => void) => void): IDisposable;

		schedulePeriodic(period: number, action: () => void): IDisposable;
		schedulePeriodicWithState(state: any, period: number, action: (state: any) => any): IDisposable;
	}

	// Current Thread IScheduler
	interface ICurrentThreadScheduler extends IScheduler {
		scheduleRequired(): boolean;
		ensureTrampoline(action: () =>IDisposable): IDisposable;
	}

	// Notifications
	interface INotification<T> {
		accept(observer: IObserver<T>): void;
		accept(onNext: (value: T) =>void , onError?: (exception: any) =>void , onCompleted?: () =>void ): void;
		toObservable(scheduler?: IScheduler): IObservable<any>;
		hasValue: boolean;
		equals(other: INotification<T>): boolean;
		kind: string;
		value?: T;
		exception?: any;
	}
	export interface Notification {
		//abstract
		//function new (): INotification;

		createOnNext<T>(value: T): INotification<T>;//ON
		createOnError<T>(exception): INotification<T>;//OE
		createOnCompleted<T>(): INotification<T>;//OC
	}

	var Notification: Notification;

	export module Internals {
		// Enumerator
		interface IEnumerator<T> {
			moveNext(): boolean;
			getCurrent(): T;
			dispose(): void;
		}
		export interface Enumerator<T> {
			(moveNext: () =>boolean, getCurrent: () => T, dispose: () =>void ): IEnumerator<T>;

			create(moveNext: () =>boolean, getCurrent: () => T, dispose?: () =>void ): IEnumerator<T>;
		}

		// Enumerable
		interface IEnumerable<T> {
			getEnumerator(): IEnumerator<T>;

			concat(): IObservable<T>;
			catchException(): IObservable<T>;
		}
		export interface Enumerable<T> {
			(getEnumerator: () =>IEnumerator<T>): IEnumerable<T>;

			repeat(value: T, repeatCount?: number): IEnumerable<any>;
			forEach<T2>(source: T[], selector?: (element: T, index: number) => T2): IEnumerable<T2>;
			forEach<T2>(source: { length: number; [index: number]: T; }, selector?: (element: T, index: number) => T2): IEnumerable<T2>;
		}
	}

	// Observer
	interface IObserver<T> {
		onNext(value: T): void;
		onError(exception: any): void;
		onCompleted(): void;

		toNotifier(): (notification: INotification<T>) =>void;
		asObserver(): IObserver<T>;
		checked(): ICheckedObserver<any>;
	}
	export module Observer {
		//abstract
		//function new (): IObserver;

		function create<T>(onNext: (value: T) =>void , onError?: (exception: any) =>void , onCompleted?: () =>void ): IObserver<T>;
		function fromNotifier<T>(handler: (notification: INotification<T>) =>void ): IObserver<T>;
	}

	export module Internals {
		// Abstract Observer
		interface IAbstractObserver<T> extends IObserver<T> {
			isStopped: boolean;

			dispose(): void;
			next(value: T): void;
			error(exception: any): void;
			completed(): void;
			fail(): boolean;
		}
		//export module AbstractObserver {
		//    //abstract
		//    function new (): IAbstractObserver;
		//}
	}

	export class AnonymousObserver<T> {
		constructor(onNext: (value: T) => void , onError: (exception: any) => void , onCompleted: () => void);
	}

	interface ICheckedObserver<T> extends IObserver<T> {
		_observer: IObserver<T>;
		_state: number; // 0 - idle, 1 - busy, 2 - done
		checkAccess(): void;
	}

	export module Internals {
		interface IScheduledObserver<T> extends IAbstractObserver<T> {
			scheduler: IScheduler;
			observer: IObserver<T>;
			isAcquired: boolean;
			hasFaulted: boolean;
			//queue: { (value: any): void; (exception: any): void; (): void; }[];
			disposable: SerialDisposable;

			ensureActive(): void;
		}
		export interface ScheduledObserver<T> {
			(scheduler: IScheduler, observer: IObserver<T>): IScheduledObserver<T>;
		}
	}

	interface IObservable<T> {
		_subscribe: (observer: IObserver<T>) =>IDisposable;

		subscribe(observer: IObserver<T>): IDisposable;

		finalValue(): IObservable<T>;
		subscribe(onNext?: (value: T) =>void , onError?: (exception: any) =>void , onCompleted?: () =>void ): IDisposable;
		toArray(): IObservable<T>;

		observeOn(scheduler: IScheduler): IObservable<T>;
		subscribeOn(scheduler: IScheduler): IObservable<T>;

		amb(rightSource: IObservable<T>): IObservable<T>;
		catchException(handler: (exception: any) =>IObservable<T>): IObservable<T>;
		catchException(second: IObservable<T>): IObservable<T>;
		combineLatest<T2, TResult>(second: IObservable<T2>, resultSelector: (v1: T, v2: T2) =>TResult): IObservable<TResult>;
		combineLatest<T2, T3, TResult>(second: IObservable<T2>, third: IObservable<T3>, resultSelector: (v1: T, v2: T2, v3: T3) =>TResult): IObservable<TResult>;
		combineLatest<T2, T3, T4, TResult>(second: IObservable<T2>, third: IObservable<T3>, fourth: IObservable<T4>, resultSelector: (v1: T, v2: T2, v3: T3, v4: T4) =>TResult): IObservable<TResult>;
		combineLatest<T2, T3, T4, T5, TResult>(second: IObservable<T2>, third: IObservable<T3>, fourth: IObservable<T4>, fifth: IObservable<T5>, resultSelector: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5) =>TResult): IObservable<TResult>;
		combineLatest<TResult>(...soucesAndResultSelector: any[]): IObservable<TResult>;
		concat(...sources: IObservable<T>[]): IObservable<T>;
		concat(sources: IObservable<T>[]): IObservable<T>;
		//concatIObservable(): IObservable<T>;
		merge(maxConcurrent: number): IObservable<T>;
		merge(other: IObservable<T>): IObservable<T>;
		//mergeIObservable(): IObservable<any>;
		onErrorResumeNext(second: IObservable<T>): IObservable<T>;
		skipUntil<T2>(other: IObservable<T2>): IObservable<T>;
		switchLatest(): IObservable<T>;
		takeUntil<T2>(other: IObservable<T2>): IObservable<T>;
		zip<T2, TResult>(second: IObservable<T2>, resultSelector: (v1: T, v2: T2) =>TResult): IObservable<TResult>;
		zip<T2, T3, TResult>(second: IObservable<T2>, third: IObservable<T3>, resultSelector: (v1: T, v2: T2, v3: T3) => TResult): IObservable<TResult>;
		zip<T2, T3, T4, TResult>(second: IObservable<T2>, third: IObservable<T3>, fourth: IObservable<T4>, resultSelector: (v1: T, v2: T2, v3: T3, v4: T4) => TResult): IObservable<TResult>;
		zip<T2, T3, T4, T5, TResult>(second: IObservable<T2>, third: IObservable<T3>, fourth: IObservable<T4>, fifth: IObservable<T5>, resultSelector: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5) => TResult): IObservable<TResult>;
		zip<TResult>(...soucesAndResultSelector: any[]): IObservable<TResult>;
		zip<TResult>(second: any[], resultSelector: (left: T, right: any) => TResult): IObservable<TResult>;
		asIObservable(): IObservable<any>;
		bufferWithCount(count: number, skip?: number): IObservable<T>;
		dematerialize<TOrigin>(): IObservable<TOrigin>;
		distinctUntilChanged<TValue>(keySelector?: (value: T) => TValue, comparer?: (x: TValue, y: TValue) =>boolean): IObservable<any>;
		doAction(observer: IObserver<T>): IObservable<T>;
		doAction(onNext: (value: T) => void , onError?: (exception: any) =>void , onCompleted?: () =>void ): IObservable<T>;
		finallyAction(action: () =>void): IObservable<T>;
		ignoreElements(): IObservable<T>;
		materialize(): IObservable<INotification<any>>; // IObservable<INotification<T>> not supported by TypeScript 0.9.0 !!
		repeat(repeatCount?: number): IObservable<T>;
		retry(retryCount?: number): IObservable<T>;
		scan<TAcc>(seed: TAcc, accumulator: (acc: TAcc, value: T) => TAcc): IObservable<TAcc>;
		scan<TAcc>(accumulator: (acc: TAcc, value: T) => TAcc): IObservable<TAcc>;
		skipLast(count: number): IObservable<T>;
		startWith(...values: T[]): IObservable<T>;
		startWith(scheduler: IScheduler, ...values: T[]): IObservable<T>;
		takeLast(count: number, scheduler?: IScheduler): IObservable<T>;
		takeLastBuffer(count: number): IObservable<T>;
		windowWithCount(count: number, skip?: number): IObservable<T>;
		defaultIfEmpty(defaultValue?: any): IObservable<T>;
		distinct<TKey>(keySelector?: (value: T) => TKey, keySerializer?: (key: TKey) =>string): IObservable<T>;
		groupBy<TKey, TElement>(keySelector: (value: T) => TKey, elementSelector?: (value: T) => TElement, keySerializer?: (key: TKey) => string): IGroupedObservable<TKey, TElement>;
		groupByUntil<TKey, TElement>(keySelector: (value: T) => TKey, elementSelector: (value: T) => TElement, durationSelector: (group: IGroupedObservable<TKey, TElement>) => IObservable<number>, keySerializer?: (key: TKey) => string): IGroupedObservable<TKey, TElement>;
		select<T2>(selector: (value: T, index: number) =>T2): IObservable<T2>;
		selectMany<T2>(selector: (value: T) =>IObservable<T2>, resultSelector?: (x: any, y: any) =>any): IObservable<T2>;
		selectMany<T2>(other: IObservable<T2>): IObservable<T2>;
		skip(count: number): IObservable<T>;
		skipWhile(predicate: (value: T, index?: number) =>boolean): IObservable<T>;
		take(count: number, scheduler?: IScheduler): IObservable<T>;
		takeWhile(predicate: (value: T, index?: number) =>boolean): IObservable<T>;
		where(predicate: (value: T, index?: number) => boolean): IObservable<T>;
	}

	interface Observable {
		(subscribe: (observer: IObserver<any>) =>IDisposable): IObservable<any>;

		create<T>(subscribe: (observer: IObserver<T>) => void ): IObservable<T>;
		create<T>(subscribe: (observer: IObserver<T>) => () => void ): IObservable<T>;
		createWithDisposable<T>(subscribe: (observer: IObserver<T>) =>IDisposable): IObservable<T>;
		defer<T>(observableFactory: () => IObservable<T>): IObservable<T>;
		empty<T>(scheduler?: IScheduler): IObservable<T>;
		fromArray<T>(array: T[], scheduler?: IScheduler): IObservable<T>;
		fromArray<T>(array: { length: number;[index: number]: T; }, scheduler?: IScheduler): IObservable<T>;
		generate<TState, TResult>(initialState: TState, condition: (state: TState) => boolean, iterate: (state: TState) => TState, resultSelector: (state: TState) => TResult, scheduler?: IScheduler): IObservable<TResult>;
		never<T>(): IObservable<T>;
		range(start: number, count: number, scheduler?: IScheduler): IObservable<number>;
		repeat<T>(value: T, repeatCount?: number, scheduler?: IScheduler): IObservable<T>;
		return<T>(value: T, scheduler?: IScheduler): IObservable<T>;
		returnValue<T>(value: T, scheduler?: IScheduler): IObservable<T>;
		throw<T>(exception: Error, scheduler?: IScheduler): IObservable<T>;
		throw<T>(exception: any, scheduler?: IScheduler): IObservable<T>;
		throwException<T>(exception: Error, scheduler?: IScheduler): IObservable<T>;
		throwException<T>(exception: any, scheduler?: IScheduler): IObservable<T>;
		using<TSource, TResource>(resourceFactory: () => TResource, observableFactory: (resource: TResource) => IObservable<TSource>): IObservable<TSource>;
		amb<T>(...sources: IObservable<T>[]): IObservable<T>;
		catchException<T>(sources: IObservable<T>[]): IObservable<T>;
		catchException<T>(...sources: IObservable<T>[]): IObservable<T>;
		concat<T>(...sources: IObservable<T>[]): IObservable<T>;
		concat<T>(sources: IObservable<T>[]): IObservable<T>;
		merge<T>(...sources: IObservable<T>[]): IObservable<T>;
		merge<T>(sources: IObservable<T>[]): IObservable<T>;
		merge<T>(scheduler: IScheduler, ...sources: IObservable<T>[]): IObservable<T>;
		merge<T>(scheduler: IScheduler, sources: IObservable<T>[]): IObservable<T>;
		onErrorResumeNext<T>(...sources: IObservable<T>[]): IObservable<T>;
		onErrorResumeNext<T>(sources: IObservable<T>[]): IObservable<T>;
		zip<T>(...soucesAndResultSelector: any[]): IObservable<T>;
	}

	var Observable: Observable;

	export module Internals {
		interface IAnonymousObservable<T> extends IObservable<T> { }
		export interface AnonymousObservable<T> {
			(subscribe: (observer: IObserver<T>) =>IDisposable): IAnonymousObservable<T>;
		}
	}

	interface IGroupedObservable<TKey, TElement> extends IObservable<TElement> {
		key: TKey;
		underlyingObservable: IObservable<TElement>;
	}

	interface ISubject<T> extends IObservable<T>, IObserver<T> {
		isDisposed: boolean;
		isStopped: boolean;
		//observers: IObserver<T>[];

		dispose(): void;
	}

    export interface Subject<T> extends ISubject<T> {
        create<T>(observer?: IObserver<T>, observable?: IObservable<T>): ISubject<T>;
    }

    var Subject: {
        new <T>(): Subject<T>;
    }

	interface IAsyncSubject<T> extends IObservable<T>, IObserver<T> {
		isDisposed: boolean;
		value: T;
		hasValue: boolean;
		observers: IObserver<T>[];
		exception: any;

		dispose(): void;
	}
	export interface AsyncSubject<T> {
		(): IAsyncSubject<T>;
	}

	interface IAnonymousSubject<T> extends IObservable<T> {
		onNext(value: T): void;
		onError(exception: any): void;
		onCompleted(): void;
	}
}
