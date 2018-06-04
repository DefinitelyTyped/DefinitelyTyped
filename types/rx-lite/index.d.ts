// Type definitions for rx-lite 4.0
// Project: https://github.com/Reactive-Extensions/RxJS
// Definitions by: gsino <http://www.codeplex.com/site/users/view/gsino>, Igor Oleinikov <https://github.com/Igorbek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="rx-core" />
/// <reference types="rx-core-binding" />

declare namespace Rx {
    namespace internals {
        function isEqual(left: any, right: any): boolean;
        function addRef<T>(xs: Observable<T>, r: { getDisposable(): IDisposable; }): Observable<T>;

        // Priority Queue for Scheduling
        class PriorityQueue<TTime> {
            constructor(capacity: number);

            length: number;

            isHigherPriority(left: number, right: number): boolean;
            percolate(index: number): void;
            heapify(index: number): void;
            peek(): ScheduledItem<TTime>;
            removeAt(index: number): void;
            dequeue(): ScheduledItem<TTime>;
            enqueue(item: ScheduledItem<TTime>): void;
            remove(item: ScheduledItem<TTime>): boolean;

            static count: number;
        }

        class ScheduledItem<TTime> {
            constructor(scheduler: IScheduler, state: any, action: (scheduler: IScheduler, state: any) => IDisposable, dueTime: TTime, comparer?: (x: TTime, y: TTime) => number);

            scheduler: IScheduler;
            state: TTime;
            action: (scheduler: IScheduler, state: any) => IDisposable;
            dueTime: TTime;
            comparer: (x: TTime, y: TTime) => number;
            disposable: SingleAssignmentDisposable;

            invoke(): void;
            compareTo(other: ScheduledItem<TTime>): number;
            isCancelled(): boolean;
            invokeCore(): IDisposable;
        }
    }

    namespace config {
        let Promise: { new <T>(resolver: (resolvePromise: (value: T) => void, rejectPromise: (reason: any) => void) => void): IPromise<T>; };
    }

    namespace helpers {
        function noop(): void;
        function notDefined(value: any): boolean;
        function identity<T>(value: T): T;
        function defaultNow(): number;
        function defaultComparer(left: any, right: any): boolean;
        function defaultSubComparer(left: any, right: any): number;
        function defaultKeySerializer(key: any): string;
        function defaultError(err: any): void;
        function isPromise(p: any): boolean;
        function asArray<T>(...args: T[]): T[];
        function not(value: any): boolean;
        function isFunction(value: any): boolean;
    }

    class CompositeDisposable implements IDisposable {
        constructor(...disposables: IDisposable[]);
        constructor(disposables: IDisposable[]);

        isDisposed: boolean;
        length: number;

        dispose(): void;
        add(item: IDisposable): void;
        remove(item: IDisposable): boolean;
        toArray(): IDisposable[];
    }

    class Disposable implements IDisposable {
        constructor(action: () => void);

        static create(action: () => void): IDisposable;
        static empty: IDisposable;

        dispose(): void;
    }

    // Single assignment
    class SingleAssignmentDisposable implements IDisposable {
        constructor();

        isDisposed: boolean;
        current: IDisposable;

        dispose(): void;
        getDisposable(): IDisposable;
        setDisposable(value: IDisposable): void;
    }

    // SerialDisposable it's an alias of SingleAssignmentDisposable
    class SerialDisposable extends SingleAssignmentDisposable {
        constructor();
    }

    class RefCountDisposable implements IDisposable {
        constructor(disposable: IDisposable);

        dispose(): void;

        isDisposed: boolean;
        getDisposable(): IDisposable;
    }

    interface IScheduler {
        now(): number;
        isScheduler(value: any): boolean;

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

    interface Scheduler extends IScheduler {
    }

    interface SchedulerStatic {
        new (
            now: () => number,
            schedule: (state: any, action: (scheduler: IScheduler, state: any) => IDisposable) => IDisposable,
            scheduleRelative: (state: any, dueTime: number, action: (scheduler: IScheduler, state: any) => IDisposable) => IDisposable,
            scheduleAbsolute: (state: any, dueTime: number, action: (scheduler: IScheduler, state: any) => IDisposable) => IDisposable): Scheduler;

        normalize(timeSpan: number): number;

        immediate: IScheduler;
        currentThread: ICurrentThreadScheduler;
        default: IScheduler; // alias for Scheduler.timeout
        timeout: IScheduler;
    }

    const Scheduler: SchedulerStatic;

    // Current Thread IScheduler
    interface ICurrentThreadScheduler extends IScheduler {
        scheduleRequired(): boolean;
    }

    // Notifications
    class Notification<T> {
        accept(observer: IObserver<T>): void;
        accept<TResult>(onNext: (value: T) => TResult, onError?: (exception: any) => TResult, onCompleted?: () => TResult): TResult;
        toObservable(scheduler?: IScheduler): Observable<T>;
        hasValue: boolean;
        equals(other: Notification<T>): boolean;
        kind: string;
        value: T;
        exception: any;

        static createOnNext<T>(value: T): Notification<T>;
        static createOnError<T>(exception: any): Notification<T>;
        static createOnCompleted<T>(): Notification<T>;
    }

    // Observer
    interface IObserver<T> {
        onNext(value: T): void;
        onError(exception: any): void;
        onCompleted(): void;
    }

    interface Observer<T> extends IObserver<T> {
        toNotifier(): (notification: Notification<T>) => void;
        asObserver(): Observer<T>;
    }

    interface ObserverStatic {
        create<T>(onNext?: (value: T) => void, onError?: (exception: any) => void, onCompleted?: () => void): Observer<T>;
        fromNotifier<T>(handler: (notification: Notification<T>, thisArg?: any) => void): Observer<T>;
    }

    const Observer: ObserverStatic;

    interface IObservable<T> {
        subscribe(observer: Observer<T>): IDisposable;
        subscribe(onNext?: (value: T) => void, onError?: (exception: any) => void, onCompleted?: () => void): IDisposable;

        subscribeOnNext(onNext: (value: T) => void, thisArg?: any): IDisposable;
        subscribeOnError(onError: (exception: any) => void, thisArg?: any): IDisposable;
        subscribeOnCompleted(onCompleted: () => void, thisArg?: any): IDisposable;
    }

    interface Observable<T> extends IObservable<T> {
        forEach(onNext?: (value: T) => void, onError?: (exception: any) => void, onCompleted?: () => void): IDisposable;    // alias for subscribe
        toArray(): Observable<T[]>;

        catch(handler: (exception: Error) => IPromise<T> | Observable<T>): Observable<T>;
        catch(second: Observable<T>): Observable<T>;
        catchException(handler: (exception: Error) => IPromise<T> | Observable<T>): Observable<T>;    // alias for catch
        catchException(second: Observable<T>): Observable<T>;    // alias for catch
        combineLatest<T2>(second: Observable<T2> | IPromise<T2>): Observable<[T, T2]>;
        combineLatest<T2, TResult>(second: Observable<T2> | IPromise<T2>, resultSelector: (v1: T, v2: T2) => TResult): Observable<TResult>;
        combineLatest<T2, T3>(second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>): Observable<[T, T2, T3]>;
        combineLatest<T2, T3, TResult>(second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>, resultSelector: (v1: T, v2: T2, v3: T3) => TResult): Observable<TResult>;
        combineLatest<T2, T3, T4>(second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>, fourth: Observable<T4> | IPromise<T4>): Observable<[T, T2, T3, T4]>;
        combineLatest<T2, T3, T4, TResult>(second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>, fourth: Observable<T4> | IPromise<T4>, resultSelector: (v1: T, v2: T2, v3: T3, v4: T4) => TResult): Observable<TResult>;
        combineLatest<T2, T3, T4, T5>(second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>, fourth: Observable<T4> | IPromise<T4>, fifth: Observable<T5> | IPromise<T5>): Observable<[T, T2, T3, T4, T5]>;
        combineLatest<T2, T3, T4, T5, TResult>(second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>, fourth: Observable<T4> | IPromise<T4>, fifth: Observable<T5> | IPromise<T5>, resultSelector: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5) => TResult): Observable<TResult>;
        combineLatest<TOther, TResult>(souces: (Observable<TOther> | IPromise<TOther>)[], resultSelector: (firstValue: T, ...otherValues: TOther[]) => TResult): Observable<TResult>;
        withLatestFrom<T2>(second: Observable<T2> | IPromise<T2>): Observable<[T, T2]>;
        withLatestFrom<T2, TResult>(second: Observable<T2> | IPromise<T2>, resultSelector: (v1: T, v2: T2) => TResult): Observable<TResult>;
        withLatestFrom<T2, T3>(second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>): Observable<[T, T2, T3]>;
        withLatestFrom<T2, T3, TResult>(second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>, resultSelector: (v1: T, v2: T2, v3: T3) => TResult): Observable<TResult>;
        withLatestFrom<T2, T3, T4>(second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>, fourth: Observable<T4> | IPromise<T4>): Observable<[T, T2, T3, T4]>;
        withLatestFrom<T2, T3, T4, TResult>(second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>, fourth: Observable<T4> | IPromise<T4>, resultSelector: (v1: T, v2: T2, v3: T3, v4: T4) => TResult): Observable<TResult>;
        withLatestFrom<T2, T3, T4, T5>(second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>, fourth: Observable<T4> | IPromise<T4>, fifth: Observable<T5> | IPromise<T5>): Observable<[T, T2, T3, T4, T5]>;
        withLatestFrom<T2, T3, T4, T5, TResult>(second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>, fourth: Observable<T4> | IPromise<T4>, fifth: Observable<T5> | IPromise<T5>, resultSelector: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5) => TResult): Observable<TResult>;
        withLatestFrom<TOther, TResult>(souces: (Observable<TOther> | IPromise<TOther>)[], resultSelector: (firstValue: T, ...otherValues: TOther[]) => TResult): Observable<TResult>;
        concat(...sources: (Observable<T> | IPromise<T>)[]): Observable<T>;
        concat(sources: (Observable<T> | IPromise<T>)[]): Observable<T>;
        concatAll(): T;
        concatObservable(): Observable<T>;    // alias for concatAll
        concatMap<T2, R>(selector: (value: T, index: number) => Observable<T2>, resultSelector: (value1: T, value2: T2, index: number) => R): Observable<R>;    // alias for selectConcat
        concatMap<T2, R>(selector: (value: T, index: number) => IPromise<T2>, resultSelector: (value1: T, value2: T2, index: number) => R): Observable<R>;    // alias for selectConcat
        concatMap<R>(selector: (value: T, index: number) => Observable<R>): Observable<R>;    // alias for selectConcat
        concatMap<R>(selector: (value: T, index: number) => IPromise<R>): Observable<R>;    // alias for selectConcat
        concatMap<R>(selector: (value: T, index: number) => R[]): Observable<R>;    // alias for selectConcat
        concatMap<R>(sequence: Observable<R>): Observable<R>;    // alias for selectConcat
        concatMap<R>(sequence: R[]): Observable<R>;    // alias for selectConcat
        merge(maxConcurrent: number): T;
        merge(other: Observable<T>): Observable<T>;
        merge(other: IPromise<T>): Observable<T>;
        mergeAll(): Observable<T>;
        mergeObservable(): Observable<T>;    // alias for mergeAll
        skipUntil<T2>(other: Observable<T2>): Observable<T>;
        skipUntil<T2>(other: IPromise<T2>): Observable<T>;
        switch(): T;
        switchLatest(): T;    // alias for switch
        takeUntil<T2>(other: Observable<T2>): Observable<T>;
        takeUntil<T2>(other: IPromise<T2>): Observable<T>;
        zip<T2>(second: Observable<T2> | IPromise<T2>): Observable<[T, T2]>;
        zip<T2, TResult>(second: Observable<T2> | IPromise<T2>, resultSelector: (v1: T, v2: T2) => TResult): Observable<TResult>;
        zip<T2, T3>(second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>): Observable<[T, T2, T3]>;
        zip<T2, T3, TResult>(second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>, resultSelector: (v1: T, v2: T2, v3: T3) => TResult): Observable<TResult>;
        zip<T2, T3, T4>(second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>, fourth: Observable<T4> | IPromise<T4>): Observable<[T, T2, T3, T4]>;
        zip<T2, T3, T4, TResult>(second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>, fourth: Observable<T4> | IPromise<T4>, resultSelector: (v1: T, v2: T2, v3: T3, v4: T4) => TResult): Observable<TResult>;
        zip<T2, T3, T4, T5>(second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>, fourth: Observable<T4> | IPromise<T4>, fifth: Observable<T5> | IPromise<T5>): Observable<[T, T2, T3, T4, T5]>;
        zip<T2, T3, T4, T5, TResult>(second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>, fourth: Observable<T4> | IPromise<T4>, fifth: Observable<T5> | IPromise<T5>, resultSelector: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5) => TResult): Observable<TResult>;
        zip<TOther, TResult>(second: (Observable<TOther> | IPromise<TOther>)[], resultSelector: (left: T, ...right: TOther[]) => TResult): Observable<TResult>;

        asObservable(): Observable<T>;
        dematerialize<TOrigin>(): Observable<TOrigin>;
        distinctUntilChanged(skipParameter: boolean, comparer: (x: T, y: T) => boolean): Observable<T>;
        distinctUntilChanged<TValue>(keySelector?: (value: T) => TValue, comparer?: (x: TValue, y: TValue) => boolean): Observable<T>;
        do(observer: Observer<T>): Observable<T>;
        do(onNext?: (value: T) => void, onError?: (exception: Error) => void, onCompleted?: () => void): Observable<T>;
        doAction(observer: Observer<T>): Observable<T>;    // alias for do
        doAction(onNext?: (value: T) => void, onError?: (exception: Error) => void, onCompleted?: () => void): Observable<T>;    // alias for do
        tap(observer: Observer<T>): Observable<T>;    // alias for do
        tap(onNext?: (value: T) => void, onError?: (exception: Error) => void, onCompleted?: () => void): Observable<T>;    // alias for do

        doOnNext(onNext: (value: T) => void, thisArg?: any): Observable<T>;
        doOnError(onError: (exception: any) => void, thisArg?: any): Observable<T>;
        doOnCompleted(onCompleted: () => void, thisArg?: any): Observable<T>;
        tapOnNext(onNext: (value: T) => void, thisArg?: any): Observable<T>;
        tapOnError(onError: (exception: any) => void, thisArg?: any): Observable<T>;
        tapOnCompleted(onCompleted: () => void, thisArg?: any): Observable<T>;

        finally(action: () => void): Observable<T>;
        finallyAction(action: () => void): Observable<T>;    // alias for finally
        ignoreElements(): Observable<T>;
        materialize(): Observable<Notification<T>>;
        repeat(repeatCount?: number): Observable<T>;
        retry(retryCount?: number): Observable<T>;
        retryWhen<TError>(notifier: (errors: Observable<TError>) => Observable<any>): Observable<T>;

        /**
         *  Applies an accumulator function over an observable sequence and returns each intermediate result. The optional seed value is used as the initial accumulator value.
         *  For aggregation behavior with no intermediate results, see Observable.aggregate.
         * @example
         *  var res = source.scan(function (acc, x) { return acc + x; });
         *  var res = source.scan(function (acc, x) { return acc + x; }, 0);
         * @param accumulator An accumulator function to be invoked on each element.
         * @param seed The initial accumulator value.
         * @returns An observable sequence containing the accumulated values.
         */
        scan<TAcc>(accumulator: (acc: TAcc, value: T, index?: number, source?: Observable<TAcc>) => TAcc, seed: TAcc): Observable<TAcc>;
        scan(accumulator: (acc: T, value: T, index?: number, source?: Observable<T>) => T): Observable<T>;

        skipLast(count: number): Observable<T>;
        startWith(...values: T[]): Observable<T>;
        startWith(scheduler: IScheduler, ...values: T[]): Observable<T>;
        takeLast(count: number): Observable<T>;
        takeLastBuffer(count: number): Observable<T[]>;

        select<TResult>(selector: (value: T, index: number, source: Observable<T>) => TResult, thisArg?: any): Observable<TResult>;
        map<TResult>(selector: (value: T, index: number, source: Observable<T>) => TResult, thisArg?: any): Observable<TResult>;    // alias for select
        pluck<TResult>(prop: string): Observable<TResult>;
        selectMany<TOther, TResult>(selector: (value: T) => Observable<TOther>, resultSelector: (item: T, other: TOther) => TResult): Observable<TResult>;
        selectMany<TOther, TResult>(selector: (value: T) => IPromise<TOther>, resultSelector: (item: T, other: TOther) => TResult): Observable<TResult>;
        selectMany<TResult>(selector: (value: T) => Observable<TResult>): Observable<TResult>;
        selectMany<TResult>(selector: (value: T) => IPromise<TResult>): Observable<TResult>;
        selectMany<TResult>(other: Observable<TResult>): Observable<TResult>;
        selectMany<TResult>(other: IPromise<TResult>): Observable<TResult>;
        selectMany<TResult>(selector: (value: T) => TResult[]): Observable<TResult>;    // alias for selectMany
        flatMap<TOther, TResult>(selector: (value: T) => Observable<TOther>, resultSelector: (item: T, other: TOther) => TResult): Observable<TResult>;    // alias for selectMany
        flatMap<TOther, TResult>(selector: (value: T) => IPromise<TOther>, resultSelector: (item: T, other: TOther) => TResult): Observable<TResult>;    // alias for selectMany
        flatMap<TResult>(selector: (value: T) => Observable<TResult>): Observable<TResult>;    // alias for selectMany
        flatMap<TResult>(selector: (value: T) => IPromise<TResult>): Observable<TResult>;    // alias for selectMany
        flatMap<TResult>(other: Observable<TResult>): Observable<TResult>;    // alias for selectMany
        flatMap<TResult>(other: IPromise<TResult>): Observable<TResult>;    // alias for selectMany
        flatMap<TResult>(selector: (value: T) => TResult[]): Observable<TResult>;    // alias for selectMany

        /**
         * Projects each notification of an observable sequence to an observable sequence and merges the resulting observable sequences into one observable sequence.
         * @param onNext A transform function to apply to each element; the second parameter of the function represents the index of the source element.
         * @param onError A transform function to apply when an error occurs in the source sequence.
         * @param onCompleted A transform function to apply when the end of the source sequence is reached.
         * @param [thisArg] An optional "this" to use to invoke each transform.
         * @returns An observable sequence whose elements are the result of invoking the one-to-many transform function corresponding to each notification in the input sequence.
         */
        selectManyObserver<T2, T3, T4>(onNext: (value: T, index: number) => Observable<T2>, onError: (exception: any) => Observable<T3>, onCompleted: () => Observable<T4>, thisArg?: any): Observable<T2 | T3 | T4>;

        /**
         * Projects each notification of an observable sequence to an observable sequence and merges the resulting observable sequences into one observable sequence.
         * @param onNext A transform function to apply to each element; the second parameter of the function represents the index of the source element.
         * @param onError A transform function to apply when an error occurs in the source sequence.
         * @param onCompleted A transform function to apply when the end of the source sequence is reached.
         * @param [thisArg] An optional "this" to use to invoke each transform.
         * @returns An observable sequence whose elements are the result of invoking the one-to-many transform function corresponding to each notification in the input sequence.
         */
        flatMapObserver<T2, T3, T4>(onNext: (value: T, index: number) => Observable<T2>, onError: (exception: any) => Observable<T3>, onCompleted: () => Observable<T4>, thisArg?: any): Observable<T2 | T3 | T4>;

        selectConcat<T2, R>(selector: (value: T, index: number) => Observable<T2>, resultSelector: (value1: T, value2: T2, index: number) => R): Observable<R>;
        selectConcat<T2, R>(selector: (value: T, index: number) => IPromise<T2>, resultSelector: (value1: T, value2: T2, index: number) => R): Observable<R>;
        selectConcat<R>(selector: (value: T, index: number) => Observable<R>): Observable<R>;
        selectConcat<R>(selector: (value: T, index: number) => IPromise<R>): Observable<R>;
        selectConcat<R>(sequence: Observable<R>): Observable<R>;

        /**
         *  Projects each element of an observable sequence into a new sequence of observable sequences by incorporating the element's index and then
         *  transforms an observable sequence of observable sequences into an observable sequence producing values only from the most recent observable sequence.
         * @param selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
         * @param [thisArg] Object to use as this when executing callback.
         * @returns An observable sequence whose elements are the result of invoking the transform function on each element of source producing an Observable of Observable sequences
         *  and that at any point in time produces the elements of the most recent inner observable sequence that has been received.
         */
        selectSwitch<TResult>(selector: (value: T, index: number, source: Observable<T>) => Observable<TResult>, thisArg?: any): Observable<TResult>;
        /**
         *  Projects each element of an observable sequence into a new sequence of observable sequences by incorporating the element's index and then
         *  transforms an observable sequence of observable sequences into an observable sequence producing values only from the most recent observable sequence.
         * @param selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
         * @param [thisArg] Object to use as this when executing callback.
         * @returns An observable sequence whose elements are the result of invoking the transform function on each element of source producing an Observable of Observable sequences
         *  and that at any point in time produces the elements of the most recent inner observable sequence that has been received.
         */
        flatMapLatest<TResult>(selector: (value: T, index: number, source: Observable<T>) => Observable<TResult>, thisArg?: any): Observable<TResult>;    // alias for selectSwitch
        /**
         *  Projects each element of an observable sequence into a new sequence of observable sequences by incorporating the element's index and then
         *  transforms an observable sequence of observable sequences into an observable sequence producing values only from the most recent observable sequence.
         * @param selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
         * @param [thisArg] Object to use as this when executing callback.
         * @since 2.2.28
         * @returns An observable sequence whose elements are the result of invoking the transform function on each element of source producing an Observable of Observable sequences
         *  and that at any point in time produces the elements of the most recent inner observable sequence that has been received.
         */
        switchMap<TResult>(selector: (value: T, index: number, source: Observable<T>) => TResult, thisArg?: any): Observable<TResult>;    // alias for selectSwitch

        skip(count: number): Observable<T>;
        skipWhile(predicate: (value: T, index: number, source: Observable<T>) => boolean, thisArg?: any): Observable<T>;
        take(count: number, scheduler?: IScheduler): Observable<T>;
        takeWhile(predicate: (value: T, index: number, source: Observable<T>) => boolean, thisArg?: any): Observable<T>;
        where(predicate: (value: T, index: number, source: Observable<T>) => boolean, thisArg?: any): Observable<T>;
        filter(predicate: (value: T, index: number, source: Observable<T>) => boolean, thisArg?: any): Observable<T>; // alias for where

        /**
         * Converts an existing observable sequence to an ES6 Compatible Promise
         * @example
         * var promise = Rx.Observable.return(42).toPromise(RSVP.Promise);
         * @param promiseCtor The constructor of the promise.
         * @returns An ES6 compatible promise with the last value from the observable sequence.
         */
        toPromise<TPromise extends IPromise<T>>(promiseCtor: { new (resolver: (resolvePromise: (value: T) => void, rejectPromise: (reason: any) => void) => void): TPromise; }): TPromise;
        /**
         * Converts an existing observable sequence to an ES6 Compatible Promise
         * @example
         * var promise = Rx.Observable.return(42).toPromise(RSVP.Promise);
         *
         * // With config
         * Rx.config.Promise = RSVP.Promise;
         * var promise = Rx.Observable.return(42).toPromise();
         * @param [promiseCtor] The constructor of the promise. If not provided, it looks for it in Rx.config.Promise.
         * @returns An ES6 compatible promise with the last value from the observable sequence.
         */
        toPromise(promiseCtor?: { new (resolver: (resolvePromise: (value: T) => void, rejectPromise: (reason: any) => void) => void): IPromise<T>; }): IPromise<T>;

        // Experimental Flattening

        /**
         * Performs a exclusive waiting for the first to finish before subscribing to another observable.
         * Observables that come in between subscriptions will be dropped on the floor.
         * Can be applied on `Observable<Observable<R>>` or `Observable<IPromise<R>>`.
         * @since 2.2.28
         * @returns A exclusive observable with only the results that happen when subscribed.
         */
        exclusive<R>(): Observable<R>;

        /**
         * Performs a exclusive map waiting for the first to finish before subscribing to another observable.
         * Observables that come in between subscriptions will be dropped on the floor.
         * Can be applied on `Observable<Observable<I>>` or `Observable<IPromise<I>>`.
         * @since 2.2.28
         * @param selector Selector to invoke for every item in the current subscription.
         * @param [thisArg] An optional context to invoke with the selector parameter.
         * @returns An exclusive observable with only the results that happen when subscribed.
         */
        exclusiveMap<I, R>(selector: (value: I, index: number, source: Observable<I>) => R, thisArg?: any): Observable<R>;

        publish(): ConnectableObservable<T>;
    }

    interface ConnectableObservable<T> extends Observable<T> {
        connect(): Disposable;
    }

    interface ObservableStatic {
        create<T>(subscribe: (observer: Observer<T>) => IDisposable): Observable<T>;
        create<T>(subscribe: (observer: Observer<T>) => () => void): Observable<T>;
        create<T>(subscribe: (observer: Observer<T>) => void): Observable<T>;
        createWithDisposable<T>(subscribe: (observer: Observer<T>) => IDisposable): Observable<T>;
        defer<T>(observableFactory: () => Observable<T>): Observable<T>;
        defer<T>(observableFactory: () => IPromise<T>): Observable<T>;
        empty<T>(scheduler?: IScheduler): Observable<T>;

        /**
         * This method creates a new Observable sequence from an array object.
         * @param array An array-like or iterable object to convert to an Observable sequence.
         * @param mapFn Map function to call on every element of the array.
         * @param [thisArg] The context to use calling the mapFn if provided.
         * @param [scheduler] Optional scheduler to use for scheduling.  If not provided, defaults to Scheduler.currentThread.
         */
        from<T, TResult>(array: T[], mapFn: (value: T, index: number) => TResult, thisArg?: any, scheduler?: IScheduler): Observable<TResult>;
        /**
         * This method creates a new Observable sequence from an array object.
         * @param array An array-like or iterable object to convert to an Observable sequence.
         * @param [mapFn] Map function to call on every element of the array.
         * @param [thisArg] The context to use calling the mapFn if provided.
         * @param [scheduler] Optional scheduler to use for scheduling.  If not provided, defaults to Scheduler.currentThread.
         */
        from<T>(array: T[], mapFn?: (value: T, index: number) => T, thisArg?: any, scheduler?: IScheduler): Observable<T>;

        /**
         * This method creates a new Observable sequence from an array-like object.
         * @param array An array-like or iterable object to convert to an Observable sequence.
         * @param mapFn Map function to call on every element of the array.
         * @param [thisArg] The context to use calling the mapFn if provided.
         * @param [scheduler] Optional scheduler to use for scheduling.  If not provided, defaults to Scheduler.currentThread.
         */
        from<T, TResult>(array: { length: number; [index: number]: T; }, mapFn: (value: T, index: number) => TResult, thisArg?: any, scheduler?: IScheduler): Observable<TResult>;
        /**
         * This method creates a new Observable sequence from an array-like object.
         * @param array An array-like or iterable object to convert to an Observable sequence.
         * @param [mapFn] Map function to call on every element of the array.
         * @param [thisArg] The context to use calling the mapFn if provided.
         * @param [scheduler] Optional scheduler to use for scheduling.  If not provided, defaults to Scheduler.currentThread.
         */
        from<T>(array: { length: number; [index: number]: T; }, mapFn?: (value: T, index: number) => T, thisArg?: any, scheduler?: IScheduler): Observable<T>;

        /**
         * This method creates a new Observable sequence from an array-like or iterable object.
         * @param array An array-like or iterable object to convert to an Observable sequence.
         * @param [mapFn] Map function to call on every element of the array.
         * @param [thisArg] The context to use calling the mapFn if provided.
         * @param [scheduler] Optional scheduler to use for scheduling.  If not provided, defaults to Scheduler.currentThread.
         */
        from<T>(iterable: any, mapFn?: (value: any, index: number) => T, thisArg?: any, scheduler?: IScheduler): Observable<T>;

        fromArray<T>(array: T[], scheduler?: IScheduler): Observable<T>;
        fromArray<T>(array: { length: number; [index: number]: T; }, scheduler?: IScheduler): Observable<T>;

        generate<TState, TResult>(initialState: TState, condition: (state: TState) => boolean, iterate: (state: TState) => TState, resultSelector: (state: TState) => TResult, scheduler?: IScheduler): Observable<TResult>;
        never<T>(): Observable<T>;

        /**
         *  This method creates a new Observable instance with a variable number of arguments, regardless of number or type of the arguments.
         *
         * @example
         *  var res = Rx.Observable.of(1, 2, 3);
         * @since 2.2.28
         * @returns The observable sequence whose elements are pulled from the given arguments.
         */
        of<T>(...values: T[]): Observable<T>;

        /**
         *  This method creates a new Observable instance with a variable number of arguments, regardless of number or type of the arguments.
         * @example
         *  var res = Rx.Observable.ofWithScheduler(Rx.Scheduler.timeout, 1, 2, 3);
         * @since 2.2.28
         * @param [scheduler] A scheduler to use for scheduling the arguments.
         * @returns The observable sequence whose elements are pulled from the given arguments.
         */
        ofWithScheduler<T>(scheduler?: IScheduler, ...values: T[]): Observable<T>;
        range(start: number, count: number, scheduler?: IScheduler): Observable<number>;
        repeat<T>(value: T, repeatCount?: number, scheduler?: IScheduler): Observable<T>;
        return<T>(value: T, scheduler?: IScheduler): Observable<T>;
        /**
         * @since 2.2.28
         */
        just<T>(value: T, scheduler?: IScheduler): Observable<T>;    // alias for return
        returnValue<T>(value: T, scheduler?: IScheduler): Observable<T>;    // alias for return
        throw<T>(exception: Error, scheduler?: IScheduler): Observable<T>;
        throwException<T>(exception: Error, scheduler?: IScheduler): Observable<T>;    // alias for throw
        throwError<T>(error: Error, scheduler?: IScheduler): Observable<T>;    // alias for throw

        catch<T>(sources: IPromise<T>[] | Observable<T>[]): Observable<T>;
        catch<T>(...sources: Observable<T>[]): Observable<T>;
        catch<T>(...sources: IPromise<T>[]): Observable<T>;
        catchException<T>(sources: IPromise<T>[] | Observable<T>[]): Observable<T>;    // alias for catch
        catchException<T>(...sources: Observable<T>[]): Observable<T>;    // alias for catch
        catchException<T>(...sources: IPromise<T>[]): Observable<T>;    // alias for catch
        catchError<T>(sources: IPromise<T>[] | Observable<T>[]): Observable<T>;    // alias for catch
        catchError<T>(...sources: Observable<T>[]): Observable<T>;    // alias for catch
        catchError<T>(...sources: IPromise<T>[]): Observable<T>;    // alias for catch

        combineLatest<T, T2>(first: Observable<T> | IPromise<T>, second: Observable<T2> | IPromise<T2>): Observable<[T, T2]>;
        combineLatest<T, T2, TResult>(first: Observable<T> | IPromise<T>, second: Observable<T2> | IPromise<T2>, resultSelector: (v1: T, v2: T2) => TResult): Observable<TResult>;
        combineLatest<T, T2, T3>(first: Observable<T> | IPromise<T>, second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>): Observable<[T, T2, T3]>;
        combineLatest<T, T2, T3, TResult>(first: Observable<T> | IPromise<T>, second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>, resultSelector: (v1: T, v2: T2, v3: T3) => TResult): Observable<TResult>;
        combineLatest<T, T2, T3, T4>(first: Observable<T> | IPromise<T>, second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>, fourth: Observable<T4> | IPromise<T4>): Observable<[T, T2, T3, T4]>;
        combineLatest<T, T2, T3, T4, TResult>(first: Observable<T> | IPromise<T>, second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>, fourth: Observable<T4> | IPromise<T4>, resultSelector: (v1: T, v2: T2, v3: T3, v4: T4) => TResult): Observable<TResult>;
        combineLatest<T, T2, T3, T4, T5>(first: Observable<T> | IPromise<T>, second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>, fourth: Observable<T4> | IPromise<T4>, fifth: Observable<T5> | IPromise<T5>): Observable<[T, T2, T3, T4, T5]>;
        combineLatest<T, T2, T3, T4, T5, TResult>(first: Observable<T> | IPromise<T>, second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>, fourth: Observable<T4> | IPromise<T4>, fifth: Observable<T5> | IPromise<T5>, resultSelector: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5) => TResult): Observable<TResult>;
        combineLatest<T>(sources: (Observable<T> | IPromise<T>)[]): Observable<T[]>;
        combineLatest<TOther, TResult>(sources: (Observable<TOther> | IPromise<TOther>)[], resultSelector: (...otherValues: TOther[]) => TResult): Observable<TResult>;

        withLatestFrom<T, T2>(first: Observable<T> | IPromise<T>, second: Observable<T2> | IPromise<T2>): Observable<[T, T2]>;
        withLatestFrom<T, T2, TResult>(first: Observable<T> | IPromise<T>, second: Observable<T2> | IPromise<T2>, resultSelector: (v1: T, v2: T2) => TResult): Observable<TResult>;
        withLatestFrom<T, T2, T3>(first: Observable<T> | IPromise<T>, second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>): Observable<[T, T2, T3]>;
        withLatestFrom<T, T2, T3, TResult>(first: Observable<T> | IPromise<T>, second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>, resultSelector: (v1: T, v2: T2, v3: T3) => TResult): Observable<TResult>;
        withLatestFrom<T, T2, T3, T4>(first: Observable<T> | IPromise<T>, second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>, fourth: Observable<T4> | IPromise<T4>): Observable<[T, T2, T3, T4]>;
        withLatestFrom<T, T2, T3, T4, TResult>(first: Observable<T> | IPromise<T>, second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>, fourth: Observable<T4> | IPromise<T4>, resultSelector: (v1: T, v2: T2, v3: T3, v4: T4) => TResult): Observable<TResult>;
        withLatestFrom<T, T2, T3, T4, T5>(first: Observable<T> | IPromise<T>, second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>, fourth: Observable<T4> | IPromise<T4>, fifth: Observable<T5> | IPromise<T5>): Observable<[T, T2, T3, T4, T5]>;
        withLatestFrom<T, T2, T3, T4, T5, TResult>(first: Observable<T> | IPromise<T>, second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>, fourth: Observable<T4> | IPromise<T4>, fifth: Observable<T5> | IPromise<T5>, resultSelector: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5) => TResult): Observable<TResult>;
        withLatestFrom<TOther, TResult>(souces: (Observable<TOther> | IPromise<TOther>)[], resultSelector: (...otherValues: TOther[]) => TResult): Observable<TResult>;

        concat<T>(...sources: Observable<T>[]): Observable<T>;
        concat<T>(...sources: IPromise<T>[]): Observable<T>;
        concat<T>(sources: IPromise<T>[] | Observable<T>[]): Observable<T>;
        merge<T>(...sources: Observable<T>[]): Observable<T>;
        merge<T>(...sources: IPromise<T>[]): Observable<T>;
        merge<T>(sources: IPromise<T>[] | Observable<T>[]): Observable<T>;
        merge<T>(scheduler: IScheduler, ...sources: Observable<T>[]): Observable<T>;
        merge<T>(scheduler: IScheduler, ...sources: IPromise<T>[]): Observable<T>;
        merge<T>(scheduler: IScheduler, sources: IPromise<T>[] | Observable<T>[]): Observable<T>;

        pairs<T>(obj: { [key: string]: T }, scheduler?: IScheduler): Observable<[string, T]>;

        zip<T1, T2>(first: Observable<T1> | IPromise<T1>, sources: Observable<T2> | IPromise<T2> | (Observable<T2> | IPromise<T2>)[]): Observable<[T1, T2]>;
        zip<T1, T2, TResult>(first: Observable<T1> | IPromise<T1>, sources: (Observable<T2> | IPromise<T2>)[], resultSelector: (item1: T1, ...right: T2[]) => TResult): Observable<TResult>;
        zip<T1, T2, TResult>(source1: Observable<T1> | IPromise<T1>, source2: Observable<T2> | IPromise<T2>, resultSelector: (item1: T1, item2: T2) => TResult): Observable<TResult>;
        zip<T1, T2, T3>(source1: Observable<T1> | IPromise<T1>, source2: Observable<T2> | IPromise<T2>, source3: Observable<T3> | IPromise<T3>): Observable<[T1, T2, T3]>;
        zip<T1, T2, T3, TResult>(source1: Observable<T1> | IPromise<T1>, source2: Observable<T2> | IPromise<T2>, source3: Observable<T3> | IPromise<T3>, resultSelector: (item1: T1, item2: T2, item3: T3) => TResult): Observable<TResult>;
        zip<T1, T2, T3, T4>(source1: Observable<T1> | IPromise<T1>, source2: Observable<T2> | IPromise<T2>, source3: Observable<T3> | IPromise<T3>, source4: Observable<T4> | IPromise<T4>): Observable<[T1, T2, T3, T4]>;
        zip<T1, T2, T3, T4, TResult>(source1: Observable<T1> | IPromise<T1>, source2: Observable<T2> | IPromise<T2>, source3: Observable<T3> | IPromise<T3>, source4: Observable<T4> | IPromise<T4>, resultSelector: (item1: T1, item2: T2, item3: T3, item4: T4) => TResult): Observable<TResult>;
        zip<T1, T2, T3, T4, T5>(source1: Observable<T1> | IPromise<T1>, source2: Observable<T2> | IPromise<T2>, source3: Observable<T3> | IPromise<T3>, source4: Observable<T4> | IPromise<T4>, source5: Observable<T5> | IPromise<T5>): Observable<[T1, T2, T3, T4, T5]>;
        zip<T1, T2, T3, T4, T5, TResult>(source1: Observable<T1> | IPromise<T1>, source2: Observable<T2> | IPromise<T2>, source3: Observable<T3> | IPromise<T3>, source4: Observable<T4> | IPromise<T4>, source5: Observable<T5> | IPromise<T5>, resultSelector: (item1: T1, item2: T2, item3: T3, item4: T4, item5: T5) => TResult): Observable<TResult>;
        zipArray<T>(...sources: (Observable<T> | IPromise<T>)[]): Observable<T[]>;
        zipArray<T>(sources: (Observable<T> | IPromise<T>)[]): Observable<T[]>;

        /**
         * Converts a Promise to an Observable sequence
         * @param promise An ES6 Compliant promise.
         * @returns An Observable sequence which wraps the existing promise success and failure.
         */
        fromPromise<T>(promise: IPromise<T>): Observable<T>;

        prototype: any;
    }

    const Observable: ObservableStatic;
}

// Async

declare namespace Rx {
    namespace config {
        /**
         * Configuration option to determine whether to use native events only
         */
        const useNativeEvents: boolean;
    }

    interface ObservableStatic {
        fromCallback: {
            // with single result callback without selector
            <TResult>(func: (callback: (result: TResult) => any) => any, context?: any): () => Observable<TResult>;
            <T1, TResult>(func: (arg1: T1, callback: (result: TResult) => any) => any, context?: any): (arg1: T1) => Observable<TResult>;
            <T1, T2, TResult>(func: (arg1: T1, arg2: T2, callback: (result: TResult) => any) => any, context?: any): (arg1: T1, arg2: T2) => Observable<TResult>;
            <T1, T2, T3, TResult>(func: (arg1: T1, arg2: T2, arg3: T3, callback: (result: TResult) => any) => any, context?: any): (arg1: T1, arg2: T2, arg3: T3) => Observable<TResult>;
            // with any callback with selector
            <TCallbackResult, TResult>(func: (callback: Function) => any, context: any, selector: (args: TCallbackResult[]) => TResult): () => Observable<TResult>;
            <T1, TCallbackResult, TResult>(func: (arg1: T1, callback: Function) => any, context: any, selector: (args: TCallbackResult[]) => TResult): (arg1: T1) => Observable<TResult>;
            <T1, T2, TCallbackResult, TResult>(func: (arg1: T1, arg2: T2, callback: Function) => any, context: any, selector: (args: TCallbackResult[]) => TResult): (arg1: T1, arg2: T2) => Observable<TResult>;
            <T1, T2, T3, TCallbackResult, TResult>(func: (arg1: T1, arg2: T2, arg3: T3, callback: Function) => any, context: any, selector: (args: TCallbackResult[]) => TResult): (arg1: T1, arg2: T2, arg3: T3) => Observable<TResult>;
            // with any callback without selector
            <TResult>(func: (callback: Function) => any, context?: any): () => Observable<TResult>;
            <T1, TResult>(func: (arg1: T1, callback: Function) => any, context?: any): (arg1: T1) => Observable<TResult>;
            <T1, T2, TResult>(func: (arg1: T1, arg2: T2, callback: Function) => any, context?: any): (arg1: T1, arg2: T2) => Observable<TResult>;
            <T1, T2, T3, TResult>(func: (arg1: T1, arg2: T2, arg3: T3, callback: Function) => any, context?: any): (arg1: T1, arg2: T2, arg3: T3) => Observable<TResult>;
            // with any function with selector
            <TCallbackResult, TResult>(func: Function, context: any, selector: (args: TCallbackResult[]) => TResult): (...args: any[]) => Observable<TResult>;
            // with any function without selector
            <TResult>(func: Function, context?: any): (...args: any[]) => Observable<TResult>;
        };

        fromNodeCallback: {
            // with single result callback without selector
            <T>(func: (callback: (err: any, result: T) => any) => any, context?: any): () => Observable<T>;
            <T1, T>(func: (arg1: T1, callback: (err: any, result: T) => any) => any, context?: any): (arg1: T1) => Observable<T>;
            <T1, T2, T>(func: (arg1: T1, arg2: T2, callback: (err: any, result: T) => any) => any, context?: any): (arg1: T1, arg2: T2) => Observable<T>;
            <T1, T2, T3, T>(func: (arg1: T1, arg2: T2, arg3: T3, callback: (err: any, result: T) => any) => any, context?: any): (arg1: T1, arg2: T2, arg3: T3) => Observable<T>;
            // with any callback with selector
            <TC, TR>(func: (callback: Function) => any, context: any, selector: (results: TC[]) => TR): () => Observable<TR>;
            <T1, TC, TR>(func: (arg1: T1, callback: Function) => any, context: any, selector: (results: TC[]) => TR): (arg1: T1) => Observable<TR>;
            <T1, T2, TC, TR>(func: (arg1: T1, arg2: T2, callback: Function) => any, context: any, selector: (results: TC[]) => TR): (arg1: T1, arg2: T2) => Observable<TR>;
            <T1, T2, T3, TC, TR>(func: (arg1: T1, arg2: T2, arg3: T3, callback: Function) => any, context: any, selector: (results: TC[]) => TR): (arg1: T1, arg2: T2, arg3: T3) => Observable<TR>;
            // with any callback without selector
            <TR>(func: (callback: Function) => any, context?: any): () => Observable<TR>;
            <T1, TR>(func: (arg1: T1, callback: Function) => any, context?: any): (arg1: T1) => Observable<TR>;
            <T1, T2, TR>(func: (arg1: T1, arg2: T2, callback: Function) => any, context?: any): (arg1: T1, arg2: T2) => Observable<TR>;
            <T1, T2, T3, TR>(func: (arg1: T1, arg2: T2, arg3: T3, callback: Function) => any, context?: any): (arg1: T1, arg2: T2, arg3: T3) => Observable<TR>;
            // with any function with selector
            <TC, T>(func: Function, context: any, selector: (results: TC[]) => T): (...args: any[]) => Observable<T>;
            // with any function without selector
            <T>(func: Function, context?: any): (...args: any[]) => Observable<T>;
        };

        fromEvent<T>(element: ArrayLike<DOMEventTarget> | DOMEventTarget | NodeEventTarget| NativeEventTarget, eventName: string, selector?: (...args: any[]) => T): Observable<T>;

        fromEventPattern<T>(addHandler: (handler: Function) => void, removeHandler: (handler: Function) => void, selector?: (...args: any[]) => T): Observable<T>;
    }

    interface NodeEventTarget {
        addListener(name: string, cb: (e: any) => any): void;
    }

    interface NativeEventTarget {
        on(name: string, cb: (e: any) => any): void;
        off(name: string, cb: (e: any) => any): void;
    }

    interface DOMEventTarget {
        addEventListener(type: string, listener: (e: any) => any, useCapture: boolean): void;
        removeEventListener(type: string, listener: (e: any) => any, useCapture: boolean): void;
    }
}

// time

declare namespace Rx {
    interface TimeInterval<T> {
        value: T;
        interval: number;
    }

    interface Timestamp<T> {
        value: T;
        timestamp: number;
    }

    interface Observable<T> {
        delay(dueTime: Date, scheduler?: IScheduler): Observable<T>;
        delay(dueTime: number, scheduler?: IScheduler): Observable<T>;

        debounce(dueTime: number, scheduler?: IScheduler): Observable<T>;
        throttleWithTimeout(dueTime: number, scheduler?: IScheduler): Observable<T>;
        /**
         * @deprecated use #debounce or #throttleWithTimeout instead.
         */
        throttle(dueTime: number, scheduler?: IScheduler): Observable<T>;

        timeInterval(scheduler?: IScheduler): Observable<TimeInterval<T>>;

        timestamp(scheduler?: IScheduler): Observable<Timestamp<T>>;

        sample(interval: number, scheduler?: IScheduler): Observable<T>;
        sample<TSample>(sampler: Observable<TSample>, scheduler?: IScheduler): Observable<T>;

        timeout(dueTime: Date, other?: Observable<T>, scheduler?: IScheduler): Observable<T>;
        timeout(dueTime: number, other?: Observable<T>, scheduler?: IScheduler): Observable<T>;
    }

    interface ObservableStatic {
        interval(period: number, scheduler?: IScheduler): Observable<number>;
        interval(dutTime: number, period: number, scheduler?: IScheduler): Observable<number>;
        timer(dueTime: number, period: number, scheduler?: IScheduler): Observable<number>;
        timer(dueTime: number, scheduler?: IScheduler): Observable<number>;
    }
}

declare module "rx-lite" {
    export = Rx;
}
