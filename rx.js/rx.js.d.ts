// Type definitions for RxJS
// Project: http://rx.codeplex.com/
// Definitions by: gsino <http://www.codeplex.com/site/users/view/gsino>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


declare module Rx {
	export module Internals {
		function inherits(child: Function, parent: Function): Function;
		function addProperties(obj: Object, ...sourcces: Object[]): void;
		function addRef<T>(xs: IObservable<T>, r: { getDisposable(): _IDisposable; }): IObservable<T>;
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

	interface _IDisposable {
		dispose(): void;
	}

	export class CompositeDisposable {
		constructor (...disposables: _IDisposable[]);

		disposables: _IDisposable[];
		isDisposed: boolean;
		length: number;

		dispose(): void;
		add(item: _IDisposable): void;
		remove(item: _IDisposable): boolean;
		clear(): void;
		contains(item: _IDisposable): boolean;
		toArray(): _IDisposable[];
	}

	// Main disposable class
	interface IDisposable {
		isDisposed: boolean;
		action: () =>void;

		dispose(): void;
	}

	export interface Disposable {
		new (action: () =>void ): IDisposable;
	}

	var Disposable: {
		create(action: () => void): _IDisposable;
		empty: _IDisposable;
	}

	// Single assignment
	interface ISingleAssignmentDisposable {
		isDisposed: boolean;
		current: _IDisposable;

		dispose(): void;
		disposable(value?: _IDisposable): _IDisposable;
		getDisposable(): _IDisposable;
		setDisposable(value: _IDisposable): void;
	}
	export interface SingleAssignmentDisposable {
		(): ISingleAssignmentDisposable;
	}

	// Multiple assignment disposable
	export class SerialDisposable {
		isDisposed: boolean;
		current: _IDisposable;

		dispose(): void;
		getDisposable(): _IDisposable;
		setDisposable(value: _IDisposable): void;
		disposable(value?: _IDisposable): _IDisposable;
	}

	export class RefCountDisposable {
		constructor(disposable: _IDisposable);

		underlyingDisposable: _IDisposable;
		isDisposed: boolean;
		isPrimaryDisposed: boolean;
		count: number;

		dispose(): void;
		getDisposable(): _IDisposable;
	}

	interface IScheduledItem {
		scheduler: IScheduler;
		state: any;
		action: (scheduler: IScheduler, state) => _IDisposable;
		dueTime: number;
		comparer: (x: number, y: number) =>number;
		disposable: ISingleAssignmentDisposable;

		invoke(): void;
		compareTo(other: IScheduledItem): number;
		isCancelled(): boolean;
		invokeCore(): _IDisposable;
	}

	interface IScheduler {
		_schedule: (state: any, action: (scheduler: IScheduler, state: any) =>_IDisposable) => _IDisposable;
		_scheduleRelative: (state: any, dueTime: number, action: (scheduler: IScheduler, state: any) =>_IDisposable) =>_IDisposable;
		_scheduleAbsolute: (state: any, dueTime: number, action: (scheduler: IScheduler, state: any) =>_IDisposable) =>_IDisposable;

		now(): number;
		scheduleWithState(state: any, action: (scheduler: IScheduler, state: any) =>_IDisposable): _IDisposable;
		scheduleWithAbsoluteAndState(state: any, dueTime: number, action: (scheduler: IScheduler, state: any) =>_IDisposable): _IDisposable;
		scheduleWithRelativeAndState(state: any, dueTime: number, action: (scheduler: IScheduler, state: any) =>_IDisposable): _IDisposable;

		catchException(handler: (exception: any) =>boolean): ICatchScheduler;
		schedulePeriodic(period: number, action: () =>void ): _IDisposable;
		schedulePeriodicWithState(state: any, period: number, action: (state: any) =>any): _IDisposable;//returns {Disposable|SingleAssignmentDisposable}
		schedule(action: () =>void ): _IDisposable;
		scheduleWithRelative(dueTime: number, action: () =>void ): _IDisposable;
		scheduleWithAbsolute(dueTime: number, action: () =>void ): _IDisposable;
		scheduleRecursive(action: (action: () =>void ) =>void ): _IDisposable;
		scheduleRecursiveWithState(state: any, action: (state: any, action: (state: any) =>void ) =>void ): _IDisposable;
		scheduleRecursiveWithRelative(dueTime: number, action: (action: (dueTime: number) =>void ) =>void ): _IDisposable;
		scheduleRecursiveWithRelativeAndState(state: any, dueTime: number, action: (state: any, action: (state: any, dueTime: number) =>void ) =>void ): _IDisposable;
		scheduleRecursiveWithAbsolute(dueTime: number, action: (action: (dueTime: number) =>void ) =>void ): _IDisposable;
		scheduleRecursiveWithAbsoluteAndState(state: any, dueTime: number, action: (state: any, action: (state: any, dueTime: number) =>void ) =>void ): _IDisposable;
	}

	var Scheduler: {
		//(now: () =>number,
		//	schedule: (state: any, action: (scheduler: IScheduler, state: any) =>_IDisposable) => _IDisposable,
		//	scheduleRelative: (state: any, dueTime: number, action: (scheduler: IScheduler, state: any) =>_IDisposable) =>_IDisposable,
		//	scheduleAbsolute: (state: any, dueTime: number, action: (scheduler: IScheduler, state: any) =>_IDisposable) =>_IDisposable
		//	): IScheduler;

		now(): number;
		normalize(timeSpan: number): number;

		immediate: IScheduler;
		currentThread: ICurrentScheduler;//IScheduler;
		timeout: IScheduler;
	}

	// Current Thread IScheduler
	interface ICurrentScheduler extends IScheduler {
		scheduleRequired(): boolean;
		ensureTrampoline(action: () =>_IDisposable): _IDisposable;
	}

	// Virtual IScheduler
	interface IVirtualTimeScheduler extends IScheduler {
		toRelative(duetime): number;
		toDateTimeOffset(duetime: number): number;

		clock: number;
		comparer: (x: number, y: number) =>number;
		isEnabled: boolean;
		queue: IPriorityQueue;
		scheduleRelativeWithState(state: any, dueTime: number, action: (scheduler: IScheduler, state: any) =>_IDisposable): _IDisposable;
		scheduleRelative(dueTime: number, action: () =>void ): _IDisposable;
		start(): _IDisposable;
		stop(): void;
		advanceTo(time: number);
		advanceBy(time: number);
		sleep(time: number);
		getNext(): IScheduledItem;
		scheduleAbsolute(dueTime: number, action: () =>void );
		scheduleAbsoluteWithState(state: any, dueTime: number, action: (scheduler: IScheduler, state: any) =>_IDisposable): _IDisposable;
	}
	//export module VirtualTimeScheduler {
	//    //absract
	//    function new (initialClock: number, comparer: (x: number, y: number) =>number): IVirtualTimeScheduler;
	//}


	// CatchScheduler
	interface ICatchScheduler extends IScheduler { }

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
		_subscribe: (observer: IObserver<T>) =>_IDisposable;

		subscribe(observer: IObserver<T>): _IDisposable;

		finalValue(): IObservable<T>;
		subscribe(onNext?: (value: T) =>void , onError?: (exception: any) =>void , onCompleted?: () =>void ): _IDisposable;
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
		(subscribe: (observer: IObserver<any>) =>_IDisposable): IObservable<any>;

		start<T>(func: () =>T, scheduler?: IScheduler, context?: any): IObservable<T>;
		toAsync<T>(func: Function, scheduler?: IScheduler, context?: any): (...arguments: any[]) => IObservable<T>;
		create<T>(subscribe: (observer: IObserver<T>) => void ): IObservable<T>;
		//create<T>(subscribe: (observer: IObserver<T>) => () => void ): IObservable<T>;
		createWithDisposable<T>(subscribe: (observer: IObserver<T>) =>_IDisposable): IObservable<T>;
		defer<T>(observableFactory: () => IObservable<T>): IObservable<T>;
		empty<T>(scheduler?: IScheduler): IObservable<T>;
		fromArray<T>(array: T[], scheduler?: IScheduler): IObservable<T>;
		fromArray<T>(array: { length: number;[index: number]: T; }, scheduler?: IScheduler): IObservable<T>;
		generate<TState, TResult>(initialState: TState, condition: (state: TState) => boolean, iterate: (state: TState) => TState, resultSelector: (state: TState) => TResult, scheduler?: IScheduler): IObservable<TResult>;
		never<T>(): IObservable<T>;
		range(start: number, count: number, scheduler?: IScheduler): IObservable<number>;
		repeat<T>(value: T, repeatCount?: number, scheduler?: IScheduler): IObservable<T>;
		returnValue<T>(value: T, scheduler?: IScheduler): IObservable<T>;
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
	}

	var Observable: Observable;

	export module Internals {
		interface IAnonymousObservable<T> extends IObservable<T> { }
		export interface AnonymousObservable<T> {
			(subscribe: (observer: IObserver<T>) =>_IDisposable): IAnonymousObservable<T>;
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

	export interface Subject {
		create<T>(observer?: IObserver<T>, observable?: IObservable<T>): ISubject<T>;
	}

	var Subject: {
		new<T> (): ISubject<T>;
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