// Type definitions for RxJS
// Project: http://rx.codeplex.com/
// Definitions by: gsino <http://www.codeplex.com/site/users/view/gsino>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


declare module Rx {
	export module Internals {
		function inherits(child: Function, parent: Function): Function;
		function addProperties(obj: Object, ...sourcces: Object[]): void;
		function addRef(xs: IObservable, r: { getDisposable(): _IDisposable; }): IObservable;
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

		isHigherPriority(left: number, right: number): bool;
		percolate(index: number): void;
		heapify(index: number): void;
		peek(): IIndexedItem;
		removeAt(index: number): void;
		dequeue(): IIndexedItem;
		enqueue(item: IIndexedItem): void;
		remove(item: IIndexedItem): bool;
	}

	interface _IDisposable {
		dispose(): void;
	}

	export class CompositeDisposable {
		constructor (...disposables: _IDisposable[]);

		disposables: _IDisposable[];
		isDisposed: bool;
		length: number;

		dispose(): void;
		add(item: _IDisposable): void;
		remove(item: _IDisposable): bool;
		clear(): void;
		contains(item: _IDisposable): bool;
		toArray(): _IDisposable[];
	}

	// Main disposable class
	interface IDisposable {
		isDisposed: bool;
		action: () =>void;

		dispose(): void;
	}
	export interface Disposable {
		(action: () =>void ): IDisposable;

		create(action: () =>void ): _IDisposable;
		empty: _IDisposable;
	}

	// Single assignment
	interface ISingleAssignmentDisposable {
		isDisposed: bool;
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
		isDisposed: bool;
		current: _IDisposable;

		dispose(): void;
		getDisposable(): _IDisposable;
		setDisposable(value: _IDisposable): void;
		disposable(value?: _IDisposable): _IDisposable;
	}

	export class RefCountDisposable {
		constructor(disposable: _IDisposable);

		underlyingDisposable: _IDisposable;
		isDisposed: bool;
		isPrimaryDisposed: bool;
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
		isCancelled(): bool;
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

		catchException(handler: (exception: any) =>bool): ICatchScheduler;
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
	export interface Scheduler {
		(now: () =>number,
			schedule: (state: any, action: (scheduler: IScheduler, state: any) =>_IDisposable) => _IDisposable,
			scheduleRelative: (state: any, dueTime: number, action: (scheduler: IScheduler, state: any) =>_IDisposable) =>_IDisposable,
			scheduleAbsolute: (state: any, dueTime: number, action: (scheduler: IScheduler, state: any) =>_IDisposable) =>_IDisposable
			): IScheduler;

		now(): number;
		normalize(timeSpan: number): number;

		immediate: IScheduler;
		currentThread: ICurrentScheduler;//IScheduler;
		timeout: IScheduler;
	}

	// Current Thread IScheduler
	interface ICurrentScheduler extends IScheduler {
		scheduleRequired(): bool;
		ensureTrampoline(action: () =>_IDisposable): _IDisposable;
	}

	// Virtual IScheduler
	interface IVirtualTimeScheduler extends IScheduler {
		toRelative(duetime): number;
		toDateTimeOffset(duetime: number): number;

		clock: number;
		comparer: (x: number, y: number) =>number;
		isEnabled: bool;
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
	interface INotification {
		accept(observer: IObserver): void;
		accept(onNext: (value: any) =>void , onError?: (exception: any) =>void , onCompleted?: () =>void ): void;
		toObservable(scheduler?: IScheduler): IObservable;
		hasValue: bool;
		equals(other: INotification): bool;
		kind: string;
		value?: any;
		exception?: any;
	}
	export interface Notification {
		//abstract
		//function new (): INotification;

		createOnNext(value: any): INotification;//ON
		createOnError(exception): INotification;//OE
		createOnCompleted(): INotification;//OC
	}

	var Notification: Notification;

	export module Internals {
		// Enumerator
		interface IEnumerator {
			moveNext(): bool;
			getCurrent(): any;
			dispose(): void;
		}
		export interface Enumerator {
			(moveNext: () =>bool, getCurrent: () => any, dispose: () =>void ): IEnumerator;

			create(moveNext: () =>bool, getCurrent: () =>any, dispose?: () =>void ): IEnumerator;
		}

		// Enumerable
		interface IEnumerable {
			getEnumerator(): IEnumerator;

			concat(): IObservable;
			catchException(): IObservable;
		}
		export interface Enumerable {
			(getEnumerator: () =>IEnumerator): IEnumerable;

			repeat(value: any, repeatCount?: number): IEnumerable;
			forEach(source: any[], selector?: (element: any, index: number) =>any): IEnumerable;
			forEach(source: { length: number;[index: number]: any; }, selector?: (element: any, index: number) =>any): IEnumerable;
		}
	}

	// Observer
	interface IObserver {
		onNext(value: any): void;
		onError(exception: any): void;
		onCompleted(): void;

		toNotifier(): (notification: INotification) =>void;
		asObserver(): IObserver;
		checked(): ICheckedObserver;
	}
	export module Observer {
		//abstract
		//function new (): IObserver;

		function create(onNext: (value: any) =>void , onError?: (exception: any) =>void , onCompleted?: () =>void ): IObserver;
		function fromNotifier(handler: (notification: INotification) =>void ): IObserver;
	}

	export module Internals {
		// Abstract Observer
		interface IAbstractObserver extends IObserver {
			isStopped: bool;

			dispose(): void;
			next(value: any): void;
			error(exception: any): void;
			completed(): void;
			fail(): bool;
		}
		//export module AbstractObserver {
		//    //abstract
		//    function new (): IAbstractObserver;
		//}
	}

	export class AnonymousObserver {
		constructor(onNext: (value: any) => void , onError: (exception: any) => void , onCompleted: () => void);
	}

	interface ICheckedObserver extends IObserver {
		_observer: IObserver;
		_state: number; // 0 - idle, 1 - busy, 2 - done
		checkAccess(): void;
	}

	export module Internals {
		interface IScheduledObserver extends IAbstractObserver {
			scheduler: IScheduler;
			observer: IObserver;
			isAcquired: bool;
			hasFaulted: bool;
			//queue: { (value: any): void; (exception: any): void; (): void; }[];
			disposable: SerialDisposable;

			ensureActive(): void;
		}
		export interface ScheduledObserver {
			(scheduler: IScheduler, observer: IObserver): IScheduledObserver;
		}
	}


	interface IObservable {
		_subscribe: (observer: IObserver) =>_IDisposable;

		subscribe(observer: IObserver): _IDisposable;

		finalValue(): IObservable;
		subscribe(onNext?: (value: any) =>void , onError?: (exception: any) =>void , onCompleted?: () =>void ): _IDisposable;
		toArray(): IObservable;

		observeOn(scheduler: IScheduler): IObservable;
		subscribeOn(scheduler: IScheduler): IObservable;
		amb(rightSource: IObservable): IObservable;
		catchException(handler: (exception: any) =>IObservable): IObservable;
		catchException(second: IObservable): IObservable;
		combineLatest(second: IObservable, resultSelector: (v1: any, v2: any) =>any): IObservable;
		combineLatest(second: IObservable, third: IObservable, resultSelector: (v1: any, v2: any, v3: any) =>any): IObservable;
		combineLatest(second: IObservable, third: IObservable, fourth: IObservable, resultSelector: (v1: any, v2: any, v3: any, v4: any) =>any): IObservable;
		combineLatest(second: IObservable, third: IObservable, fourth: IObservable, fifth, IObservable, resultSelector: (v1: any, v2: any, v3: any, v4: any, v5: any) =>any): IObservable;
		combineLatest(...soucesAndResultSelector: any[]): IObservable;
		concat(...sources: IObservable[]): IObservable;
		concat(sources: IObservable[]): IObservable;
		concatIObservable(): IObservable;
		merge(maxConcurrent: number): IObservable;
		merge(other: IObservable): IObservable;
		mergeIObservable(): IObservable;
		onErrorResumeNext(second: IObservable): IObservable;
		skipUntil(other: IObservable): IObservable;
		switchLatest(): IObservable;
		takeUntil(other: IObservable): IObservable;
		zip(second: IObservable, resultSelector: (v1: any, v2: any) =>any): IObservable;
		zip(second: IObservable, third: IObservable, resultSelector: (v1: any, v2: any, v3: any) =>any): IObservable;
		zip(second: IObservable, third: IObservable, fourth: IObservable, resultSelector: (v1: any, v2: any, v3: any, v4: any) =>any): IObservable;
		zip(second: IObservable, third: IObservable, fourth: IObservable, fifth, IObservable, resultSelector: (v1: any, v2: any, v3: any, v4: any, v5: any) =>any): IObservable;
		zip(...soucesAndResultSelector: any[]): IObservable;
		zip(second: any[], resultSelector: (left: any, right: any) =>any): IObservable;
		asIObservable(): IObservable;
		bufferWithCount(count: number, skip?: number): IObservable;
		dematerialize(): IObservable;
		distinctUntilChanged(keySelector?: (value: any) =>any, comparer?: (x: any, y: any) =>bool): IObservable;
		doAction(observer: IObserver): IObservable;
		doAction(onNext: (value: any) => void , onError?: (exception: any) =>void , onCompleted?: () =>void ): IObservable;
		finallyAction(action: () =>void ): IObservable;
		ignoreElements(): IObservable;
		materialize(): IObservable;
		repeat(repeatCount?: number): IObservable;
		retry(retryCount?: number): IObservable;
		scan(seed: any, accumulator: (acc: any, value: any) =>any): IObservable;
		scan(accumulator: (acc: any, value: any) =>any): IObservable;
		skipLast(count: number): IObservable;
		startWith(...values: any[]): IObservable;
		startWith(scheduler: IScheduler, ...values: any[]): IObservable;
		takeLast(count: number, scheduler?: IScheduler): IObservable;
		takeLastBuffer(count: number): IObservable;
		windowWithCount(count: number, skip?: number): IObservable;
		defaultIfEmpty(defaultValue?: any): IObservable;
		distinct(keySelector?: (value: any) =>any, keySerializer?: (key: any) =>string): IObservable;
		groupBy(keySelector: (value: any) =>any, elementSelector?: (value: any) =>any, keySerializer?: (key: any) =>string): IGroupedObservable;
		groupByUntil(keySelector: (value: any) =>any, elementSelector: (value: any) =>any, durationSelector: (gloup: IGroupedObservable) =>IObservable, keySerializer?: (key: any) =>string): IGroupedObservable;
		select(selector: (value: any, index: number) =>any): IObservable;
		selectMany(selector: (value: any) =>IObservable, resultSelector?: (x: any, y: any) =>any): IObservable;
		selectMany(other: IObservable): IObservable;
		skip(count: number): IObservable;
		skipWhile(predicate: (value: any, index?: number) =>bool): IObservable;
		take(count: number, scheduler?: IScheduler): IObservable;
		takeWhile(predicate: (value: any, index?: number) =>bool): IObservable;
		where(predicate: (value: any, index?: number) => bool): IObservable;

		// time
		delay(dueTime: number, scheduler?: IScheduler): IObservable;
		throttle(dueTime: number, scheduler?: IScheduler): IObservable;
		windowWithTime(dueTime: number, timeShiftOrScheduler?: any, scheduler?: IScheduler): IObservable;
		timeInterval(scheduler: IScheduler): IObservable;
		sample(interval: number, scheduler?: IScheduler): IObservable;
		sample(sampler: IObservable, scheduler?: IScheduler): IObservable;
		timeout(dueTime: number, other?: IObservable, scheduler?: IScheduler): IObservable;
		delaySubscription(dueTime: number, scheduler?: IScheduler): IObservable;
	}
	interface Observable {
		(subscribe: (observer: IObserver) =>_IDisposable): IObservable;

		start(func: () =>any, scheduler?: IScheduler, context?: any): IObservable;
		toAsync(func: Function, scheduler?: IScheduler, context?: any): (...arguments: any[]) => IObservable;
		create(subscribe: (Observer) => void ): IObservable;
		create(subscribe: (Observer) => () => void ): IObservable;
		createWithDisposable(subscribe: (Observer) =>_IDisposable): IObservable;
		defer(observableFactory: () =>IObservable): IObservable;
		empty(scheduler?: IScheduler): IObservable;
		fromArray(array: any[], scheduler?: IScheduler): IObservable;
		fromArray(array: { length: number;[index: number]: any; }, scheduler?: IScheduler): IObservable;
		generate(initialState: any, condition: (state: any) =>bool, iterate: (state: any) =>any, resultSelector: (state: any) =>any, scheduler?: IScheduler): IObservable;
		never(): IObservable;
		range(start: number, count: number, scheduler?: IScheduler): IObservable;
		repeat(value: any, repeatCount?: number, scheduler?: IScheduler): IObservable;
		returnValue(value: any, scheduler?: IScheduler): IObservable;
		throwException(exception: any, scheduler?: IScheduler): IObservable;
		using(resourceFactory: () =>any, observableFactory: (resource: any) =>IObservable): IObservable;
		amb(...sources: IObservable[]): IObservable;
		catchException(sources: IObservable[]): IObservable;
		catchException(...sources: IObservable[]): IObservable;
		concat(...sources: IObservable[]): IObservable;
		concat(sources: IObservable[]): IObservable;
		merge(...sources: IObservable[]): IObservable;
		merge(sources: IObservable[]): IObservable;
		merge(scheduler: IScheduler, ...sources: IObservable[]): IObservable;
		merge(scheduler: IScheduler, sources: IObservable[]): IObservable;
		onErrorResumeNext(...sources: IObservable[]): IObservable;
		onErrorResumeNext(sources: IObservable[]): IObservable;
	}

	var Observable: Observable;

	export module Internals {
		interface IAnonymousObservable extends IObservable { }
		export interface AnonymousObservable {
			(subscribe: (observer: IObserver) =>_IDisposable): IAnonymousObservable;
		}
	}

	interface IGroupedObservable extends IObservable {
		key: any;
		underlyingObservable: IObservable;
	}

	interface ISubject extends IObservable, IObserver {
		isDisposed: bool;
		isStopped: bool;
		observers: IObserver[];

		dispose(): void;
	}
	export interface Subject {
		(): ISubject;

		create(observer?: IObserver, observable?: IObservable): ISubject;
	}

	interface IAsyncSubject extends IObservable, IObserver {
		isDisposed: bool;
		value: any;
		hasValue: bool;
		observers: IObserver[];
		exception: any;

		dispose(): void;
	}
	export interface AsyncSubject {
		(): IAsyncSubject;
	}

	interface IAnonymousSubject extends IObservable {
		onNext(value: any): void;
		onError(exception: any): void;
		onCompleted(): void;
	}
}