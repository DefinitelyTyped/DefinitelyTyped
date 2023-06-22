import type { Observer, Sink, Subscription, RelayObservable } from '../network/RelayObservable';

export type Event<T> = { kind: 'next'; data: T } | { kind: 'error'; error: Error } | { kind: 'complete' };

/**
 * An implementation of a `ReplaySubject` for Relay Observables.
 *
 * Records events provided and synchronously plays them back to new subscribers,
 * as well as forwarding new asynchronous events.
 */
export class RelayReplaySubject<T> {
    complete(): void;
    error(error: Error): void;
    next(data: T): void;
    subscribe(observer: Observer<T> | Sink<T>): Subscription;
    unsubscribe(): void;
    getObserverCount(): number;
}
