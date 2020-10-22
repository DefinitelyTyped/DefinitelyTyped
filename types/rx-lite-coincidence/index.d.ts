// Type definitions for rx-lite-coincidence 4.0
// Project: https://github.com/Reactive-Extensions/RxJS
// Definitions by: Carl de Billy <http://carl.debilly.net/>, Igor Oleinikov <https://github.com/Igorbek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="rx-lite" />

declare namespace Rx {
    interface Observable<T> {
        join<TRight, TDurationLeft, TDurationRight, TResult>(
            right: Observable<TRight>,
            leftDurationSelector: (leftItem: T) => Observable<TDurationLeft>,
            rightDurationSelector: (rightItem: TRight) => Observable<TDurationRight>,
            resultSelector: (leftItem: T, rightItem: TRight) => TResult): Observable<TResult>;

        groupJoin<TRight, TDurationLeft, TDurationRight, TResult>(
            right: Observable<TRight>,
            leftDurationSelector: (leftItem: T) => Observable<TDurationLeft>,
            rightDurationSelector: (rightItem: TRight) => Observable<TDurationRight>,
            resultSelector: (leftItem: T, rightItem: Observable<TRight>) => TResult): Observable<TResult>;

        window<TWindowOpening>(windowOpenings: Observable<TWindowOpening>): Observable<Observable<T>>;
        window<TWindowClosing>(windowClosingSelector: () => Observable<TWindowClosing>): Observable<Observable<T>>;
        window<TWindowOpening, TWindowClosing>(windowOpenings: Observable<TWindowOpening>, windowClosingSelector: () => Observable<TWindowClosing>): Observable<Observable<T>>;

        buffer<TBufferOpening>(bufferOpenings: Observable<TBufferOpening>): Observable<T[]>;
        buffer<TBufferClosing>(bufferClosingSelector: () => Observable<TBufferClosing>): Observable<T[]>;
        buffer<TBufferOpening, TBufferClosing>(bufferOpenings: Observable<TBufferOpening>, bufferClosingSelector: () => Observable<TBufferClosing>): Observable<T[]>;

        /**
         * Returns a new observable that triggers on the second and subsequent triggerings of the input observable.
         * The Nth triggering of the input observable passes the arguments from the N-1th and Nth triggering as a pair.
         * The argument passed to the N-1th triggering is held in hidden internal state until the Nth triggering occurs.
         * @returns An observable that triggers on successive pairs of observations from the input observable as an array.
         */
        pairwise(): Observable<T[]>;

        /**
         * Returns two observables which partition the observations of the source by the given function.
         * The first will trigger observations for those values for which the predicate returns true.
         * The second will trigger observations for those values where the predicate returns false.
         * The predicate is executed once for each subscribed observer.
         * Both also propagate all error observations arising from the source and each completes
         * when the source completes.
         * @param predicate
         *    The function to determine which output Observable will trigger a particular observation.
         * @returns
         *    An array of observables. The first triggers when the predicate returns true,
         *    and the second triggers when the predicate returns false.
         */
        partition(predicate: (value: T, index: number, source: Observable<T>) => boolean, thisArg?: any): Array<Observable<T>>;
    }
}

declare module "rx-lite-coincidence" {
    export = Rx;
}
