/// <reference types="rx-lite-virtualtime" />

declare namespace Rx {
    interface TestScheduler extends VirtualTimeScheduler<number, number> {
        createColdObservable<T>(...records: Recorded[]): Observable<T>;
        createHotObservable<T>(...records: Recorded[]): Observable<T>;
        createObserver<T>(): MockObserver<T>;

        startWithTiming<T>(
            create: () => Observable<T>,
            createdAt: number,
            subscribedAt: number,
            disposedAt: number,
        ): MockObserver<T>;
        startWithDispose<T>(create: () => Observable<T>, disposedAt: number): MockObserver<T>;
        startWithCreate<T>(create: () => Observable<T>): MockObserver<T>;
    }

    const TestScheduler: {
        new(): TestScheduler;
    };

    class Recorded {
        constructor(time: number, value: any, equalityComparer?: (x: any, y: any) => boolean);
        equals(other: Recorded): boolean;
        toString(): string;
        time: number;
        value: any;
    }

    const ReactiveTest: {
        created: number;
        subscribed: number;
        disposed: number;

        onNext(ticks: number, value: any): Recorded;
        onError(ticks: number, exception: any): Recorded;
        onCompleted(ticks: number): Recorded;

        subscribe(subscribeAt: number, unsubscribeAt?: number): Subscription;
    };

    class Subscription {
        constructor(subscribeAt: number, unsubscribeAt?: number);
        equals(other: Subscription): boolean;
    }

    interface MockObserver<T> extends Observer<T> {
        messages: Recorded[];
    }

    interface MockObserverStatic extends ObserverStatic {
        new<T>(scheduler: IScheduler): MockObserver<T>;
    }

    const MockObserver: MockObserverStatic;
}

declare module "rx-lite-testing" {
    export = Rx;
}
