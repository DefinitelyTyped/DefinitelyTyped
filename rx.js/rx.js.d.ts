// Type definitions for RxJS
// Project: http://rx.codeplex.com/
// Definitions by: gsino <http://www.codeplex.com/site/users/view/gsino>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


declare module Rx {
	export module Internals {
		function inherits(child: Function, parent: Function): Function;
		function addProperties(obj: Object, ...sourcces: Object[]): void;
		function addRef<T>(xs: Observable<T>, r: { getDisposable(): IDisposable; }): Observable<T>;
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

	export interface IDisposable {
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

	export interface IScheduler {
		now(): number;
		catch(handler: (exception: any) => boolean): IScheduler;
		catchException(handler: (exception: any) => boolean): IScheduler;

		schedule(action: () => void): IDisposable;
		scheduleWithState<TState>(state: TState, action: (scheduler: IScheduler, state: TState) => IDisposable): IDisposable;
		scheduleWithAbsolute(dueTime: number, action: () => void): IDisposable;
		scheduleWithAbsoluteAndState<TState>(state: TState, dueTime: number, action: (scheduler: IScheduler, state: TState) =>IDisposable): IDisposable;
		scheduleWithRelative(dueTime: number, action: () => void): IDisposable;
		scheduleWithRelativeAndState<TState>(state: TState, dueTime: number, action: (scheduler: IScheduler, state: TState) =>IDisposable): IDisposable;

		scheduleRecursive(action: (action: () =>void ) =>void ): IDisposable;
		scheduleRecursiveWithState<TState>(state: TState, action: (state: TState, action: (state: TState) =>void ) =>void ): IDisposable;
		scheduleRecursiveWithAbsolute(dueTime: number, action: (action: (dueTime: number) => void) => void): IDisposable;
		scheduleRecursiveWithAbsoluteAndState<TState>(state: TState, dueTime: number, action: (state: TState, action: (state: TState, dueTime: number) => void) => void): IDisposable;
		scheduleRecursiveWithRelative(dueTime: number, action: (action: (dueTime: number) =>void ) =>void ): IDisposable;
		scheduleRecursiveWithRelativeAndState<TState>(state: TState, dueTime: number, action: (state: TState, action: (state: TState, dueTime: number) =>void ) =>void ): IDisposable;

		schedulePeriodic(period: number, action: () => void): IDisposable;
		schedulePeriodicWithState<TState>(state: TState, period: number, action: (state: TState) => TState): IDisposable;
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
		scheduleWithState<TState>(state: TState, action: (scheduler: IScheduler, state: TState) => IDisposable): IDisposable;
		scheduleWithAbsolute(dueTime: number, action: () => void): IDisposable;
		scheduleWithAbsoluteAndState<TState>(state: TState, dueTime: number, action: (scheduler: IScheduler, state: TState) => IDisposable): IDisposable;
		scheduleWithRelative(dueTime: number, action: () => void): IDisposable;
		scheduleWithRelativeAndState<TState>(state: TState, dueTime: number, action: (scheduler: IScheduler, state: TState) => IDisposable): IDisposable;

		scheduleRecursive(action: (action: () => void) => void): IDisposable;
		scheduleRecursiveWithState<TState>(state: TState, action: (state: TState, action: (state: TState) => void) => void): IDisposable;
		scheduleRecursiveWithAbsolute(dueTime: number, action: (action: (dueTime: number) => void) => void): IDisposable;
		scheduleRecursiveWithAbsoluteAndState<TState>(state: TState, dueTime: number, action: (state: TState, action: (state: TState, dueTime: number) => void) => void): IDisposable;
		scheduleRecursiveWithRelative(dueTime: number, action: (action: (dueTime: number) => void) => void): IDisposable;
		scheduleRecursiveWithRelativeAndState<TState>(state: TState, dueTime: number, action: (state: TState, action: (state: TState, dueTime: number) => void) => void): IDisposable;

		schedulePeriodic(period: number, action: () => void): IDisposable;
		schedulePeriodicWithState<TState>(state: TState, period: number, action: (state: TState) => TState): IDisposable;
	}

	// Current Thread IScheduler
	interface ICurrentThreadScheduler extends IScheduler {
		scheduleRequired(): boolean;
		ensureTrampoline(action: () =>IDisposable): IDisposable;
	}

	// Notifications
	export class Notification<T> {
		accept(observer: Observer<T>): void;
		accept<TResult>(onNext: (value: T) => TResult, onError?: (exception: any) => TResult, onCompleted?: () => TResult): TResult;
		toObservable(scheduler?: IScheduler): Observable<T>;
		hasValue: boolean;
		equals(other: Notification<T>): boolean;
		kind: string;
		value: T;
		exception: any;

		static createOnNext<T>(value: T): Notification<T>;
		static createOnError<T>(exception): Notification<T>;
		static createOnCompleted<T>(): Notification<T>;
	}

	// Observer
	export class Observer<T> {
		onNext(value: T): void;
		onError(exception: any): void;
		onCompleted(): void;

		toNotifier(): (notification: Notification<T>) =>void;
		asObserver(): Observer<T>;
		checked(): Observer<any>;

		static create<T>(onNext?: (value: T) => void, onError?: (exception: any) => void, onCompleted?: () => void): Observer<T>;
		static fromNotifier<T>(handler: (notification: Notification<T>) => void): Observer<T>;
	}

	export interface Observable<T> {
		_subscribe: (observer: Observer<T>) => IDisposable;

		subscribe(observer: Observer<T>): IDisposable;

		finalValue(): Observable<T>;
		subscribe(onNext?: (value: T) => void, onError?: (exception: any) => void, onCompleted?: () => void): IDisposable;
		toArray(): Observable<T>;

		observeOn(scheduler: IScheduler): Observable<T>;
		subscribeOn(scheduler: IScheduler): Observable<T>;

		amb(rightSource: Observable<T>): Observable<T>;
		catchException(handler: (exception: any) => Observable<T>): Observable<T>;
		catchException(second: Observable<T>): Observable<T>;
		combineLatest<T2, TResult>(second: Observable<T2>, resultSelector: (v1: T, v2: T2) => TResult): Observable<TResult>;
		combineLatest<T2, T3, TResult>(second: Observable<T2>, third: Observable<T3>, resultSelector: (v1: T, v2: T2, v3: T3) => TResult): Observable<TResult>;
		combineLatest<T2, T3, T4, TResult>(second: Observable<T2>, third: Observable<T3>, fourth: Observable<T4>, resultSelector: (v1: T, v2: T2, v3: T3, v4: T4) => TResult): Observable<TResult>;
		combineLatest<T2, T3, T4, T5, TResult>(second: Observable<T2>, third: Observable<T3>, fourth: Observable<T4>, fifth: Observable<T5>, resultSelector: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5) => TResult): Observable<TResult>;
		combineLatest<TResult>(...soucesAndResultSelector: any[]): Observable<TResult>;
		concat(...sources: Observable<T>[]): Observable<T>;
		concat(sources: Observable<T>[]): Observable<T>;
		concatObservable(): T;
		concatAll(): T;
		merge(maxConcurrent: number): Observable<T>;
		merge(other: Observable<T>): Observable<T>;
		mergeObservable(): T;
		mergeAll(): T;
		onErrorResumeNext(second: Observable<T>): Observable<T>;
		skipUntil<T2>(other: Observable<T2>): Observable<T>;
		switchLatest(): Observable<T>;
		takeUntil<T2>(other: Observable<T2>): Observable<T>;
		zip<T2, TResult>(second: Observable<T2>, resultSelector: (v1: T, v2: T2) => TResult): Observable<TResult>;
		zip<T2, T3, TResult>(second: Observable<T2>, third: Observable<T3>, resultSelector: (v1: T, v2: T2, v3: T3) => TResult): Observable<TResult>;
		zip<T2, T3, T4, TResult>(second: Observable<T2>, third: Observable<T3>, fourth: Observable<T4>, resultSelector: (v1: T, v2: T2, v3: T3, v4: T4) => TResult): Observable<TResult>;
		zip<T2, T3, T4, T5, TResult>(second: Observable<T2>, third: Observable<T3>, fourth: Observable<T4>, fifth: Observable<T5>, resultSelector: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5) => TResult): Observable<TResult>;
		zip<TResult>(...soucesAndResultSelector: any[]): Observable<TResult>;
		zip<TResult>(second: any[], resultSelector: (left: T, right: any) => TResult): Observable<TResult>;
		asIObservable(): Observable<any>;
		bufferWithCount(count: number, skip?: number): Observable<T>;
		dematerialize<TOrigin>(): Observable<TOrigin>;
		distinctUntilChanged<TValue>(keySelector?: (value: T) => TValue, comparer?: (x: TValue, y: TValue) => boolean): Observable<any>;
		doAction(observer: Observer<T>): Observable<T>;
		doAction(onNext: (value: T) => void, onError?: (exception: any) => void, onCompleted?: () => void): Observable<T>;
		finallyAction(action: () => void): Observable<T>;
		ignoreElements(): Observable<T>;
		materialize(): Observable<Notification<T>>;
		repeat(repeatCount?: number): Observable<T>;
		retry(retryCount?: number): Observable<T>;
		scan<TAcc>(seed: TAcc, accumulator: (acc: TAcc, value: T) => TAcc): Observable<TAcc>;
		scan<TAcc>(accumulator: (acc: TAcc, value: T) => TAcc): Observable<TAcc>;
		skipLast(count: number): Observable<T>;
		startWith(...values: T[]): Observable<T>;
		startWith(scheduler: IScheduler, ...values: T[]): Observable<T>;
		takeLast(count: number, scheduler?: IScheduler): Observable<T>;
		takeLastBuffer(count: number): Observable<T>;
		windowWithCount(count: number, skip?: number): Observable<T>;
		defaultIfEmpty(defaultValue?: T): Observable<T>;
		distinct<TKey>(keySelector?: (value: T) => TKey, keySerializer?: (key: TKey) => string): Observable<T>;
		groupBy<TKey, TElement>(keySelector: (value: T) => TKey, elementSelector?: (value: T) => TElement, keySerializer?: (key: TKey) => string): GroupedObservable<TKey, TElement>;
		groupByUntil<TKey, TElement>(keySelector: (value: T) => TKey, elementSelector: (value: T) => TElement, durationSelector: (group: GroupedObservable<TKey, TElement>) => Observable<number>, keySerializer?: (key: TKey) => string): GroupedObservable<TKey, TElement>;
		select<T2>(selector: (value: T, index: number) => T2): Observable<T2>;
		selectMany<T2>(selector: (value: T) => Observable<T2>, resultSelector?: (x: any, y: any) => any): Observable<T2>;
		selectMany<T2>(other: Observable<T2>): Observable<T2>;
		skip(count: number): Observable<T>;
		skipWhile(predicate: (value: T, index?: number) => boolean): Observable<T>;
		take(count: number, scheduler?: IScheduler): Observable<T>;
		takeWhile(predicate: (value: T, index?: number) => boolean): Observable<T>;
		where(predicate: (value: T, index?: number) => boolean): Observable<T>;
	}

	interface ObservableStatic {
		create<T>(subscribe: (observer: Observer<T>) => void): Observable<T>;
		create<T>(subscribe: (observer: Observer<T>) => () => void): Observable<T>;
		createWithDisposable<T>(subscribe: (observer: Observer<T>) => IDisposable): Observable<T>;
		defer<T>(observableFactory: () => Observable<T>): Observable<T>;
		empty<T>(scheduler?: IScheduler): Observable<T>;
		fromArray<T>(array: T[], scheduler?: IScheduler): Observable<T>;
		fromArray<T>(array: { length: number;[index: number]: T; }, scheduler?: IScheduler): Observable<T>;
		generate<TState, TResult>(initialState: TState, condition: (state: TState) => boolean, iterate: (state: TState) => TState, resultSelector: (state: TState) => TResult, scheduler?: IScheduler): Observable<TResult>;
		never<T>(): Observable<T>;
		range(start: number, count: number, scheduler?: IScheduler): Observable<number>;
		repeat<T>(value: T, repeatCount?: number, scheduler?: IScheduler): Observable<T>;
		return<T>(value: T, scheduler?: IScheduler): Observable<T>;
		returnValue<T>(value: T, scheduler?: IScheduler): Observable<T>;
		throw<T>(exception: Error, scheduler?: IScheduler): Observable<T>;
		throw<T>(exception: any, scheduler?: IScheduler): Observable<T>;
		throwException<T>(exception: Error, scheduler?: IScheduler): Observable<T>;
		throwException<T>(exception: any, scheduler?: IScheduler): Observable<T>;
		using<TSource, TResource extends IDisposable>(resourceFactory: () => TResource, observableFactory: (resource: TResource) => Observable<TSource>): Observable<TSource>;
		amb<T>(...sources: Observable<T>[]): Observable<T>;
		amb<T>(sources: Observable<T>[]): Observable<T>;
		catch<T>(sources: Observable<T>[]): Observable<T>;
		catchException<T>(sources: Observable<T>[]): Observable<T>;
		catch<T>(...sources: Observable<T>[]): Observable<T>;
		catchException<T>(...sources: Observable<T>[]): Observable<T>;
		concat<T>(...sources: Observable<T>[]): Observable<T>;
		concat<T>(sources: Observable<T>[]): Observable<T>;
		merge<T>(...sources: Observable<T>[]): Observable<T>;
		merge<T>(sources: Observable<T>[]): Observable<T>;
		merge<T>(scheduler: IScheduler, ...sources: Observable<T>[]): Observable<T>;
		merge<T>(scheduler: IScheduler, sources: Observable<T>[]): Observable<T>;
		onErrorResumeNext<T>(...sources: Observable<T>[]): Observable<T>;
		onErrorResumeNext<T>(sources: Observable<T>[]): Observable<T>;
		zip<T, TResult>(sources: Observable<T>[], resultSelector: (...items: T[]) => TResult): Observable<TResult>;
		zip<T1, T2, TResult>(source1: Observable<T1>, source2: Observable<T2>, resultSelector: (item1: T1, item2: T2) => TResult): Observable<TResult>;
		zip<T1, T2, T3, TResult>(source1: Observable<T1>, source2: Observable<T2>, source3: Observable<T3>, resultSelector: (item1: T1, item2: T2, item3: T3) => TResult): Observable<TResult>;
		zip<T1, T2, T3, T4, TResult>(source1: Observable<T1>, source2: Observable<T2>, source3: Observable<T3>, source4: Observable<T4>, resultSelector: (item1: T1, item2: T2, item3: T3, item4: T4) => TResult): Observable<TResult>;
		zip<T1, T2, T3, T4, T5, TResult>(source1: Observable<T1>, source2: Observable<T2>, source3: Observable<T3>, source4: Observable<T4>, source5: Observable<T5>, resultSelector: (item1: T1, item2: T2, item3: T3, item4: T4, item5: T5) => TResult): Observable<TResult>;
		zipArray<T>(...sources: Observable<T>[]): Observable<T[]>;
		zipArray<T>(sources: Observable<T>[]): Observable<T[]>;
	}

	export var Observable: ObservableStatic;

	interface GroupedObservable<TKey, TElement> extends Observable<TElement> {
		key: TKey;
		underlyingObservable: Observable<TElement>;
	}

	interface ISubject<T> extends Observable<T>, Observer<T>, IDisposable {
		hasObservers(): boolean;
	}

    export interface Subject<T> extends ISubject<T> {
    }

    interface SubjectStatic {
        new <T>(): Subject<T>;
		create<T>(observer?: Observer<T>, observable?: Observable<T>): ISubject<T>;
	}

	export var Subject: SubjectStatic;

	export interface AsyncSubject<T> extends Subject<T> {
	}

	interface AsyncSubjectStatic {
		new <T>(): AsyncSubject<T>;
	}

	export var AsyncSubject: AsyncSubjectStatic;

	export interface BehaviorSubject<T> extends Subject<T> {
	}

	interface BehaviorSubjectStatic {
		new <T>(initialValue: T): BehaviorSubject<T>;
	}

	export var BehaviorSubject: BehaviorSubjectStatic;

	export interface ReplaySubject<T> extends Subject<T> {
	}

	interface ReplaySubjectStatic {
		new <T>(initialValue: T): ReplaySubject<T>;
	}

	export var ReplaySubject: ReplaySubjectStatic;
}
