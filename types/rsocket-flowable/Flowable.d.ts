import { IPublisher, ISubscriber } from 'rsocket-types';
export type Source<T> = (subscriber: ISubscriber<T>) => void;
/**
 * Implements the ReactiveStream `Publisher` interface with Rx-style operators.
 */
export default class Flowable<T> implements IPublisher<T> {
    static just<U>(...values: U[]): Flowable<U>;
    static error(error: Error): Flowable<never>;
    static never(): Flowable<never>;
    constructor(source: Source<T>, max?: number);
    subscribe(subscriberOrCallback?: Partial<ISubscriber<T>> | ((a: T) => void)): void;
    lift<R>(onSubscribeLift: (subscriber: ISubscriber<R>) => ISubscriber<T>): Flowable<R>;
    map<R>(fn: (data: T) => R): Flowable<R>;
    take(toTake: number): Flowable<T>;
}
