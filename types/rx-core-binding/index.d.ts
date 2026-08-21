/// <reference types="rx-core" />

declare namespace Rx {
    interface ISubject<T> extends Observable<T>, Observer<T>, IDisposable {
        hasObservers(): boolean;
    }

    interface Subject<T> extends ISubject<T> {
    }

    interface SubjectStatic {
        new<T>(): Subject<T>;
        create<T>(observer?: Observer<T>, observable?: Observable<T>): ISubject<T>;
    }

    const Subject: SubjectStatic;

    interface AsyncSubject<T> extends Subject<T> {
    }

    interface AsyncSubjectStatic {
        new<T>(): AsyncSubject<T>;
    }

    const AsyncSubject: AsyncSubjectStatic;

    interface BehaviorSubject<T> extends Subject<T> {
        getValue(): T;
    }

    interface BehaviorSubjectStatic {
        new<T>(initialValue: T): BehaviorSubject<T>;
    }

    const BehaviorSubject: BehaviorSubjectStatic;

    interface ReplaySubject<T> extends Subject<T> {
    }

    interface ReplaySubjectStatic {
        new<T>(bufferSize?: number, window?: number, scheduler?: IScheduler): ReplaySubject<T>;
    }

    const ReplaySubject: ReplaySubjectStatic;

    interface ConnectableObservable<T> extends Observable<T> {
        connect(): IDisposable;
        refCount(): Observable<T>;
    }

    interface ConnectableObservableStatic {
        new<T>(): ConnectableObservable<T>;
    }

    const ConnectableObservable: ConnectableObservableStatic;

    interface Observable<T> {
        multicast(subject: Observable<T>): ConnectableObservable<T>;
        multicast<TResult>(
            subjectSelector: () => ISubject<T>,
            selector: (source: ConnectableObservable<T>) => Observable<T>,
        ): Observable<T>;
        publish(): ConnectableObservable<T>;
        publish<TResult>(selector: (source: ConnectableObservable<T>) => Observable<TResult>): Observable<TResult>;
        /**
         * Returns an observable sequence that shares a single subscription to the underlying sequence.
         * This operator is a specialization of publish which creates a subscription when the number of observers goes from zero to one,
         * then shares that subscription with all subsequent observers until the number of observers returns to zero, at which point the subscription is disposed.
         *
         * @example
         * var res = source.share();
         *
         * @returns An observable sequence that contains the elements of a sequence produced by multicasting the source sequence.
         */
        share(): Observable<T>;
        publishLast(): ConnectableObservable<T>;
        publishLast<TResult>(selector: (source: ConnectableObservable<T>) => Observable<TResult>): Observable<TResult>;
        publishValue(initialValue: T): ConnectableObservable<T>;
        publishValue<TResult>(
            selector: (source: ConnectableObservable<T>) => Observable<TResult>,
            initialValue: T,
        ): Observable<TResult>;
        /**
         * Returns an observable sequence that shares a single subscription to the underlying sequence and starts with an initialValue.
         * This operator is a specialization of publishValue which creates a subscription when the number of observers goes from zero to one,
         * then shares that subscription with all subsequent observers until the number of observers returns to zero, at which point the subscription is disposed.
         *
         * @example
         * var res = source.shareValue(42);
         *
         * @param initialValue Initial value received by observers upon subscription.
         * @returns An observable sequence that contains the elements of a sequence produced by multicasting the source sequence.
         */
        shareValue(initialValue: T): Observable<T>;
        replay(
            selector?: boolean,
            bufferSize?: number,
            window?: number,
            scheduler?: IScheduler,
        ): ConnectableObservable<T>; // hack to catch first omitted parameter
        replay(
            selector: (source: ConnectableObservable<T>) => Observable<T>,
            bufferSize?: number,
            window?: number,
            scheduler?: IScheduler,
        ): Observable<T>;
        shareReplay(bufferSize?: number, window?: number, scheduler?: IScheduler): Observable<T>;
    }
}

declare module "rx-core-binding" {
    export = Rx;
}
