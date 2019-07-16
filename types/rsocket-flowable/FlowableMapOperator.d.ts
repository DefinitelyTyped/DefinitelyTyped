import { ISubscriber, ISubscription } from 'rsocket-types';
/**
 * An operator that acts like Array.map, applying a given function to
 * all values provided by its `Subscription` and passing the result to its
 * `Subscriber`.
 */
export default class FlowableMapOperator<T, R> implements ISubscriber<T> {
    constructor(subscriber: ISubscriber<R>, fn: (t: T) => R);
    onComplete(): void;
    onError(error: Error): void;
    onNext(t: T): void;
    onSubscribe(subscription: ISubscription): void;
}
