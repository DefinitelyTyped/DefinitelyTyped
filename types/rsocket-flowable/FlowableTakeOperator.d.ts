import { ISubscriber, ISubscription } from 'rsocket-types';
/**
 * An operator that requests a fixed number of values from its source
 * `Subscription` and forwards them to its `Subscriber`, cancelling the
 * subscription when the requested number of items has been reached.
 */
export default class FlowableTakeOperator<T> implements ISubscriber<T> {
    _subscriber: ISubscriber<T>;
    _subscription: ISubscription | null | undefined;
    _toTake: number;
    constructor(subscriber: ISubscriber<T>, toTake: number);
    onComplete(): undefined;
    onError(error: Error): undefined;
    onNext(t: T): undefined;
    onSubscribe(subscription: ISubscription): undefined;
    _cancelAndComplete(): undefined;
}
