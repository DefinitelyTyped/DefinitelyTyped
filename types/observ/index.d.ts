// Type definitions for observ 0.2
// Project: https://github.com/Raynos/observ
// Definitions by: Ben O'Sullivan <https://github.com/beno-coviu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Observable {
    type RemoveListener = () => void;

    interface ObservableValue<T> {
        (): T;
        (listener: (value: T) => void): RemoveListener;

        set: (value: T) => void;
    }
}

declare function Observable<T>(value: T): Observable.ObservableValue<T>;

export = Observable;
