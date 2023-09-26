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
