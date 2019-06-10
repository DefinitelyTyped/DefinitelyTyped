import { ISubscriber, ISubscription } from 'rsocket-types';
/**
 * An operator that `request()`s the given number of items immediately upon
 * being subscribed.
 */
export default class FlowableRequestOperator<T> implements ISubscriber<T> {
    _subscriber: ISubscriber<T>;
    _toRequest: number;
    constructor(subscriber: ISubscriber<T>, toRequest: number);
    onComplete(): undefined;
    onError(error: Error): undefined;
    onNext(t: T): undefined;
    onSubscribe(subscription: ISubscription): undefined;
}
