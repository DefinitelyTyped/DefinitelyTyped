declare namespace Rx {
    /**
     * Promise A+
     */
    interface IPromise<T> {
        then<R>(onFulfilled: (value: T) => IPromise<R>, onRejected: (reason: any) => IPromise<R>): IPromise<R>;
        then<R>(onFulfilled: (value: T) => IPromise<R>, onRejected?: (reason: any) => R): IPromise<R>;
        then<R>(onFulfilled: (value: T) => R, onRejected: (reason: any) => IPromise<R>): IPromise<R>;
        then<R>(onFulfilled?: (value: T) => R, onRejected?: (reason: any) => R): IPromise<R>;
    }

    interface IDisposable {
        dispose(): void;
    }

    interface IScheduler {
        catch(handler: (exception: any) => boolean): IScheduler;
        catchException(handler: (exception: any) => boolean): IScheduler;
    }

    // Observer
    interface Observer<T> {
        checked(): Observer<any>;
    }

    interface ObserverStatic {
        /**
         * Schedules the invocation of observer methods on the given scheduler.
         * @param scheduler Scheduler to schedule observer messages on.
         * @returns Observer whose messages are scheduled on the given scheduler.
         */
        notifyOn<T>(scheduler: IScheduler): Observer<T>;
    }

    interface Observable<T> {
        observeOn(scheduler: IScheduler): Observable<T>;
        subscribeOn(scheduler: IScheduler): Observable<T>;

        amb(rightSource: IPromise<T> | Observable<T>): Observable<T>;
        onErrorResumeNext(second: IPromise<T> | Observable<T>): Observable<T>;
        bufferWithCount(count: number, skip?: number): Observable<T[]>;
        windowWithCount(count: number, skip?: number): Observable<Observable<T>>;
        defaultIfEmpty(defaultValue?: T): Observable<T>;
        distinct(skipParameter: boolean, valueSerializer: (value: T) => string): Observable<T>;
        distinct<TKey>(keySelector?: (value: T) => TKey, keySerializer?: (key: TKey) => string): Observable<T>;
        groupBy<TKey, TElement>(
            keySelector: (value: T) => TKey,
            skipElementSelector?: boolean,
            keySerializer?: (key: TKey) => string,
        ): Observable<GroupedObservable<TKey, T>>;
        groupBy<TKey, TElement>(
            keySelector: (value: T) => TKey,
            elementSelector: (value: T) => TElement,
            keySerializer?: (key: TKey) => string,
        ): Observable<GroupedObservable<TKey, TElement>>;
        groupByUntil<TKey, TDuration>(
            keySelector: (value: T) => TKey,
            skipElementSelector: boolean,
            durationSelector: (group: GroupedObservable<TKey, T>) => Observable<TDuration>,
            keySerializer?: (key: TKey) => string,
        ): Observable<GroupedObservable<TKey, T>>;
        groupByUntil<TKey, TElement, TDuration>(
            keySelector: (value: T) => TKey,
            elementSelector: (value: T) => TElement,
            durationSelector: (group: GroupedObservable<TKey, TElement>) => Observable<TDuration>,
            keySerializer?: (key: TKey) => string,
        ): Observable<GroupedObservable<TKey, TElement>>;
    }

    interface ObservableStatic {
        using<TSource, TResource extends IDisposable>(
            resourceFactory: () => TResource,
            observableFactory: (resource: TResource) => Observable<TSource>,
        ): Observable<TSource>;
        amb<T>(...sources: Array<IPromise<T>>): Observable<T>;
        amb<T>(...sources: Array<Observable<T>>): Observable<T>;
        amb<T>(sources: Array<IPromise<T>> | Array<Observable<T>>): Observable<T>;
        onErrorResumeNext<T>(...sources: Array<IPromise<T>>): Observable<T>;
        onErrorResumeNext<T>(...sources: Array<Observable<T>>): Observable<T>;
        onErrorResumeNext<T>(sources: Array<IPromise<T>> | Array<Observable<T>>): Observable<T>;
    }

    interface GroupedObservable<TKey, TElement> extends Observable<TElement> {
        key: TKey;
        underlyingObservable: Observable<TElement>;
    }
}

declare module "rx-core" {
    export = Rx;
}
