import { ISubscriber, ISubscription } from 'rsocket-types';
/**
 * An operator that acts like Array.map, applying a given function to
 * all values provided by its `Subscription` and passing the result to its
 * `Subscriber`.
 */
export default class FlowableMapOperator<T, R> implements ISubscriber<T> {
    _fn: (t: T) => R;
    _subscriber: ISubscriber<R>;
    _subscription: ISubscription | null | undefined;
    constructor(subscriber: ISubscriber<R>, fn: (t: T) => R);
    onComplete(): undefined;
    onError(error: Error): undefined;
    onNext(t: T): undefined;
    onSubscribe(subscription: ISubscription): undefined;
}
