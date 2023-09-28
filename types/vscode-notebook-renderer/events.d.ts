export interface Disposable {
    dispose(): void;
}

export interface VSCodeEvent<T> {
    (listener: (e: T) => any, thisArgs?: any, disposables?: Disposable[]): Disposable;
}
