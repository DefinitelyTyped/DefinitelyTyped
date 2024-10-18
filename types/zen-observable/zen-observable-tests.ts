import Observable = require("zen-observable");

// $ExpectType Subscription
new Observable<number>(
    (
        // $ExpectType SubscriptionObserver<number>
        observer,
    ) => {
        observer.next(0);
        observer.complete();
    },
).subscribe(
    (
        // $ExpectType number
        value,
    ) => {},
);

/**
 * Observable.of
 */
// $ExpectType Observable<number>
Observable.of(1, 2, 3);

/**
 * Observable.from
 */

// $ExpectType Observable<number>
Observable.from(Observable.of(1, 2, 3));

// $ExpectType Observable<number>
Observable.from([1, 2, 3]);

// $ExpectType Observable<number>
Observable.from({
    subscribe(observer: ZenObservable.SubscriptionObserver<number>) {
        [1, 2, 3].forEach(one => observer.next(one));
        observer.complete();
    },
    [Symbol.observable](this: ZenObservable.ObservableLike<number>) {
        return this;
    },
});

// $ExpectType Observable<number>
Observable.from({
    [Symbol.observable]() {
        return Observable.of(1, 2, 3);
    },
});

/**
 * observable.forEach
 */
// $ExpectType Promise<void>
Observable.of(1, 2, 3).forEach(
    (
        // $ExpectType number
        val,
    ) => {},
);

/**
 * observable.map
 */

// $ExpectType Observable<string>
Observable.of(1, 2, 3).map((
    // $ExpectType number
    val,
) => val.toString());

/**
 * observable.filter
 */
// $ExpectType Observable<number>
Observable.of(1, 2, 3).filter(
    (
        // $ExpectType number
        val,
    ) => false,
);

// $ExpectType Observable<number>
Observable.of(1, 2, 3, null).filter(
    (
        // $ExpectType number | null
        val,
    ): val is number => false,
);

/**
 * observable.reduce
 */
// $ExpectType Observable<number>
Observable.of(1, 2, 3).reduce(
    // $ExpectType (acc: number, val: number) => number
    (acc, val) => acc + val,
);

// $ExpectType Observable<string>
Observable.of(1, 2, 3).reduce(
    // $ExpectType (acc: string, val: number) => string
    (acc, val) => acc + val,
    "",
);

/**
 * observable.flatMap
 */

// $ExpectType Observable<string>
Observable.of(1, 2, 3).flatMap((
    // $ExpectType number
    val,
) => Observable.of(val.toString()));

/**
 * observable.concat
 */
// $ExpectType Observable<number>
Observable.of(1, 2, 3).concat(Observable.of(4, 5, 6), Observable.of(7, 8, 9));
