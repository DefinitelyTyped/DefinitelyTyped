// Type definitions for zen-observable 0.5
// Project: https://github.com/zenparsing/zen-observable
// Definitions by: Kombu <https://github.com/aicest>
//                 JounQin <https://github.com/JounQin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare global {
    interface SymbolConstructor {
        readonly observable: symbol;
    }

    namespace ZenObservable {
        interface SubscriptionObserver<T> {
            closed: boolean;
            next(value: T): void;
            error(errorValue: any): void;
            complete(): void;
        }

        interface Subscription {
            closed: boolean;
            unsubscribe(): void;
        }

        interface Observer<T> {
            start?(subscription: Subscription): any;
            next?(value: T): void;
            error?(errorValue: any): void;
            complete?(): void;
        }

        type Subscriber<T> = (observer: SubscriptionObserver<T>) => void | (() => void) | Subscription;

        interface ObservableLike<T> {
            subscribe?: Subscriber<T>;
            [Symbol.observable](): Observable<T> | ObservableLike<T>;
        }
    }
}

declare class Observable<T> {
    constructor(subscriber: ZenObservable.Subscriber<T>)

    subscribe(observer: ZenObservable.Observer<T>): ZenObservable.Subscription;
    subscribe(onNext: (value: T) => void, onError?: (error: any) => void, onComplete?: () => void): ZenObservable.Subscription;

    [Symbol.observable](): Observable<T>;

    forEach(callback: (value: T) => void): Promise<void>;
    map<R>(callback: (value: T) => R): Observable<R>;
    filter(callback: (value: T) => boolean): Observable<T>;
    reduce(callback: (previousValue: T, currentValue: T) => T, initialValue?: T): Observable<T>;
    reduce<R>(callback: (previousValue: R, currentValue: T) => R, initialValue?: R): Observable<R>;
    flatMap<R>(callback: (value: T) => ZenObservable.ObservableLike<R>): Observable<R>;

    static from<R>(observable: Observable<R> | ZenObservable.ObservableLike<R> | ArrayLike<R>): Observable<R>;
    static of<R>(...items: R[]): Observable<R>;
}

declare namespace Observable {
}

export = Observable;
