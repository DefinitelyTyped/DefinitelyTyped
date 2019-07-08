import { ISubscriber, ISubscription } from 'rsocket-types';
/**
 * An operator that requests a fixed number of values from its source
 * `Subscription` and forwards them to its `Subscriber`, cancelling the
 * subscription when the requested number of items has been reached.
 */
export default class FlowableTakeOperator<T> implements ISubscriber<T> {
    constructor(subscriber: ISubscriber<T>, toTake: number);
    onComplete(): void;
    onError(error: Error): void;
    onNext(t: T): void;
    onSubscribe(subscription: ISubscription): void;
}
