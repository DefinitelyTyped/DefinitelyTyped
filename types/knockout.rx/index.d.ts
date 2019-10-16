// Type definitions for knockout.rx 1.0
// Project: https://github.com/Igorbek/knockout.rx
// Definitions by: Igor Oleinikov <https://github.com/Igorbek>
//                 Michael Kriese <https://github.com/viceice>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

/// <reference types="knockout"/>
/// <reference types="rx"/>

declare namespace ko {
    interface SubscribableFunctions<T> {
        toObservable(event?: string): Rx.Observable<T>;
        toObservable<TEvent>(event: string): Rx.Observable<TEvent>;
    }

    interface ObservableFunctions<T> {
        toObservableWithReplyLatest(): Rx.Observable<T>;
        toSubject(): Rx.ISubject<T>;
    }

    interface ComputedFunctions<T> {
        toObservableWithReplyLatest(): Rx.Observable<T>;
    }
}

declare namespace Rx {
    interface Observable<T> {
        toKoSubscribable(): ko.Subscribable<T>;
        toKoObservable(initialValue?: T): ko.Subscribable<T>;
    }

    interface Subject<T> {
        toKoObservable(initialValue?: T): ko.Subscribable<T>;
    }
}
