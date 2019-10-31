import { IPublisher, ISubscription, ISubscriber } from 'rsocket-types';
export default class FlowableProcessor<T, R> implements IPublisher<R>, ISubscriber<T>, ISubscription {
    constructor(source: IPublisher<T>, fn?: (a: T) => R);
    onSubscribe(subscription: ISubscription): void;
    onNext(t: T): void;
    onError(error: Error): void;
    onComplete(): void;
    subscribe(subscriber?: Partial<ISubscriber<R>>): void;
    map<S>(fn: (a: R) => S): IPublisher<S>;
    request(n: number): void;
    cancel(): void;
}
