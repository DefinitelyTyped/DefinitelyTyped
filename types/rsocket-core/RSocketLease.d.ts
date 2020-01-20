import { Encodable, LeaseFrame } from 'rsocket-types';
import { Flowable } from 'rsocket-flowable';

export type EventType = 'Accept' | 'Reject' | 'Terminate';

export interface LeaseStats {
    onEvent(event: EventType): void;
}

export interface Disposable {
    dispose(): void;

    isDisposed(): boolean;
}

export class Lease {
    allowedRequests: number;
    startingAllowedRequests: number;
    timeToLiveMillis: number;
    expiry: number;
    metadata?: Encodable;

    constructor(timeToLiveMillis: number, allowedRequests: number, metadata?: Encodable);

    expired(): boolean;

    valid(): boolean;
}

export class Leases<T extends LeaseStats> {
    sender(sender: (t?: T) => Flowable<Lease>): Leases<T>;

    receiver(receiver: (flowable: Flowable<Lease>) => void): Leases<T>;

    stats(stats: T): Leases<T>;
}

export interface LeaseHandler {
    use(): boolean;

    errorMessage(): string;
}

export class RequesterLeaseHandler implements LeaseHandler, Disposable {
    constructor(leaseReceiver: (flowable: Flowable<Lease>) => void);

    use(): boolean;

    errorMessage(): string;

    receive(frame: LeaseFrame): void;

    availability(): number;

    dispose(): void;

    isDisposed(): boolean;
}

export class ResponderLeaseHandler implements LeaseHandler {
    constructor(
        leaseSender: (leaseStats?: LeaseStats) => Flowable<Lease>,
        stats?: LeaseStats,
        errorConsumer?: (e: Error) => void
    );

    use(): boolean;

    errorMessage(): string;

    send(send: (lease: Lease) => void): Disposable;
}
