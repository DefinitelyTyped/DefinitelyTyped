export type Source<T> = (subject: IFutureSubject<T>) => void;
export type CancelCallback = () => void;

export interface IFutureSubscriber<T> {
    onComplete: (value: T) => void;
    onError: (error: Error) => void;
    onSubscribe: (cancel: CancelCallback) => void;
}
export interface IFutureSubject<T> {
    onComplete: (value: T) => void;
    onError: (error: Error) => void;
    onSubscribe: (cancel: CancelCallback | null | undefined) => void;
}
/**
 * Represents a lazy computation that will either produce a value of type T
 * or fail with an error. Calling `subscribe()` starts the
 * computation and returns a subscription object, which has an `unsubscribe()`
 * method that can be called to prevent completion/error callbacks from being
 * invoked and, where supported, to also cancel the computation.
 * Implementations may optionally implement cancellation; if they do not
 * `cancel()` is a no-op.
 *
 * Note: Unlike Promise, callbacks (onComplete/onError) may be invoked
 * synchronously.
 *
 * Example:
 *
 * ```
 * const value = new Single(subscriber => {
 *   const id = setTimeout(
 *     () => subscriber.onComplete('Hello!'),
 *     250
 *   );
 *   // Optional: Call `onSubscribe` with a cancellation callback
 *   subscriber.onSubscribe(() => clearTimeout(id));
 * });
 *
 * // Start the computation. onComplete will be called after the timeout
 * // with 'hello'  unless `cancel()` is called first.
 * value.subscribe({
 *   onComplete: value => console.log(value),
 *   onError: error => console.error(error),
 *   onSubscribe: cancel => ...
 * });
 * ```
 */
export default class Single<T> {
    static of<U>(value: U): Single<U>;
    static error(error: Error): Single<never>;
    constructor(source: Source<T>);
    subscribe(partialSubscriber?: Partial<IFutureSubscriber<T>>): void;
    flatMap<R>(fn: (data: T) => Single<R>): Single<R>;
    /**
     * Return a new Single that resolves to the value of this Single applied to
     * the given mapping function.
     */
    map<R>(fn: (data: T) => R): Single<R>;
    then(successFn?: (data: T) => void, errorFn?: (error: Error) => void): void;
}
