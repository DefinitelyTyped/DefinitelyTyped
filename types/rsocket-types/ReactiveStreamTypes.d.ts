/**
 * Core types per the [ReactiveStreams specification](http://www.reactive-streams.org/)
 */
/**
 * Represents an asynchronous, pull-based stream of values. Calling
 * `subscribe()` causes the subscriber's `onSubscribe()` method to be be invoked
 * with a Subscription object that has two methods:
 * - `cancel()`: stops the publisher from publishing any more values.
 * - `request(n)`: requests `n` additional values.
 *
 * The subscriber can use `request(n)` to pull additional values from the
 * stream.
 */

export interface IPublisher<T> {
    subscribe: (subscriber?: Partial<ISubscriber<T>>) => void;
    map: <R>(fn: (data: T) => R) => IPublisher<R>;
}
/**
 * An underlying source of values for a Publisher.
 */
export interface ISubscription {
    cancel: () => void;
    request: (n: number) => void;
}
/**
 * A handler for values provided by a Publisher.
 */
export interface ISubscriber<T> {
    onComplete: () => void;
    onError: (error: Error) => void;
    onNext: (value: T) => void;
    onSubscribe: (subscription: ISubscription) => void;
}
/**
 * Similar to Subscriber, but without onSubscribe.
 */
export interface ISubject<T> {
    onComplete: () => void;
    onError: (error: Error) => void;
    onNext: (value: T) => void;
}
