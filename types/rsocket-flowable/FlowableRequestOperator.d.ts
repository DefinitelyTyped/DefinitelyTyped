import { ISubscriber, ISubscription } from 'rsocket-types';
/**
 * An operator that `request()`s the given number of items immediately upon
 * being subscribed.
 */
export default class FlowableRequestOperator<T> implements ISubscriber<T> {
    constructor(subscriber: ISubscriber<T>, toRequest: number);
    onComplete(): void;
    onError(error: Error): void;
    onNext(t: T): void;
    onSubscribe(subscription: ISubscription): void;
}
