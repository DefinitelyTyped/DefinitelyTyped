import Observable, { Subscription, SubscriptionObserver, zip, combineLatest, merge } from 'zen-observable/esm';

// $ExpectType Subscription
let subscription = new Observable<number>(
    (
        // $ExpectType SubscriptionObserver<number>
        observer,
    ) => {
        observer.next(1);
        observer.complete();
    },
).subscribe(
    (
        // $ExpectType number
        val,
    ) => {},
);

// zip
zip(Observable.of(1, 2, 3), Observable.of('a', 'b', 'c')).subscribe(
    (
        // $ExpectType [number, string]
        val,
    ) => {},
);

zip().subscribe(
    (
        // $ExpectType never
        val,
    ) => {},
);

zip(...[Observable.of(1)]).subscribe(
    (
        // $ExpectType number[]
        val,
    ) => {},
);

// merge
merge(Observable.of(1, 2, 3), Observable.of('a', 'b', 'c')).subscribe(
    (
        // $ExpectType string | number
        val,
    ) => {},
);

merge().subscribe(
    (
        // $ExpectType never
        val,
    ) => {},
);

merge(...[Observable.of(1)]).subscribe(
    (
        // $ExpectType number
        val,
    ) => {},
);

// combineLatest
combineLatest(Observable.of(1, 2, 3), Observable.of('a', 'b', 'c')).subscribe(
    (
        // $ExpectType [number, string]
        val,
    ) => {},
);

combineLatest().subscribe(
    (
        // $ExpectType never
        val,
    ) => {},
);

combineLatest(...[Observable.of(1)]).subscribe(
    (
        // $ExpectType number[]
        val,
    ) => {},
);
