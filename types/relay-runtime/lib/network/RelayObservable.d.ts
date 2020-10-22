/**
 * A Subscription object is returned from .subscribe(), which can be
 * unsubscribed or checked to see if the resulting subscription has closed.
 */
export interface Subscription {
    unsubscribe(): void;
    readonly closed: boolean;
}

/**
 * An Observer is an object of optional callback functions provided to
 * .subscribe(). Each callback function is invoked when that event occurs.
 */
export interface Observer<T> {
    readonly start?: (subscription: Subscription) => void;
    readonly next?: (value: T) => void;
    readonly error?: (error: Error) => void;
    readonly complete?: () => void;
    readonly unsubscribe?: (subscription: Subscription) => void;
}

/**
 * A Sink is an object of methods provided by Observable during construction.
 * The methods are to be called to trigger each event. It also contains a closed
 * field to see if the resulting subscription has closed.
 */
export interface Sink<T> {
    next(value: T): void;
    error(error: Error, isUncaughtThrownError?: boolean): void;
    complete(): void;
    readonly closed: boolean;
}

/**
 * A Source is the required argument when constructing a new Observable. Similar
 * to a Promise constructor, this is a function which is invoked with a Sink,
 * and may return either a cleanup function or a Subscription instance (for use
 * when composing Observables).
 */
export type Source<T> = (sink: Sink<T>) => void | Subscription | (() => unknown);

/**
 * A Subscribable is an interface describing any object which can be subscribed.
 *
 * Note: A sink may be passed directly to .subscribe() as its observer,
 * allowing for easily composing Subscribables.
 */
export interface Subscribable<T> {
    subscribe(observer: Observer<T> | Sink<T>): Subscription;
}

export type ObservableFromValue<T> = Subscribable<T> | Promise<T> | T;

/**
 * Limited implementation of ESObservable, providing the limited set of behavior
 * Relay networking requires.
 *
 * Observables retain the benefit of callbacks which can be called
 * synchronously, avoiding any UI jitter, while providing a compositional API,
 * which simplifies logic and prevents mishandling of errors compared to
 * the direct use of callback functions.
 *
 * ESObservable: https://github.com/tc39/proposal-observable
 */
export class RelayObservable<T> implements Subscribable<T> {
    // Use RelayObservable.create(source);
    private constructor(source: never);

    static create<V>(source: Source<V>): RelayObservable<V>;

    /**
     * When an emitted error event is not handled by an Observer, it is reported
     * to the host environment (what the ESObservable spec refers to as
     * "HostReportErrors()").
     *
     * The default implementation in development rethrows thrown errors, and
     * logs emitted error events to the console, while in production does nothing
     * (swallowing unhandled errors).
     *
     * Called during application initialization, this method allows
     * application-specific handling of unhandled errors. Allowing, for example,
     * integration with error logging or developer tools.
     *
     * A second parameter `isUncaughtThrownError` is true when the unhandled error
     * was thrown within an Observer handler, and false when the unhandled error
     * was an unhandled emitted event.
     *
     *  - Uncaught thrown errors typically represent avoidable errors thrown from
     *    application code, which should be handled with a try/catch block, and
     *    usually have useful stack traces.
     *
     *  - Unhandled emitted event errors typically represent unavoidable events in
     *    application flow such as network failure, and may not have useful
     *    stack traces.
     */
    static onUnhandledError(callback: (error: Error, isUncaughtThrownError: boolean) => void): void;

    /**
     * Accepts various kinds of data sources, and always returns a RelayObservable
     * useful for accepting the result of a user-provided FetchFunction.
     */
    static from<V>(obj: ObservableFromValue<V>): RelayObservable<V>;

    /**
     * Similar to promise.catch(), observable.catch() handles error events, and
     * provides an alternative observable to use in it's place.
     *
     * If the catch handler throws a new error, it will appear as an error event
     * on the resulting Observable.
     */
    catch<U>(fn: (error: Error) => RelayObservable<U>): RelayObservable<T | U>;

    /**
     * Returns a new Observable which first yields values from this Observable,
     * then yields values from the next Observable. This is useful for chaining
     * together Observables of finite length.
     */
    concat<U>(next: RelayObservable<U>): RelayObservable<T | U>;

    /**
     * Returns a new Observable which returns the same values as this one, but
     * modified so that the provided Observer is called to perform a side-effects
     * for all events emitted by the source.
     *
     * Any errors that are thrown in the side-effect Observer are unhandled, and
     * do not affect the source Observable or its Observer.
     *
     * This is useful for when debugging your Observables or performing other
     * side-effects such as logging or performance monitoring.
     */
    do(observer: Observer<T>): RelayObservable<T>;

    /**
     * Returns a new Observable which returns the same values as this one, but
     * modified so that the finally callback is performed after completion,
     * whether normal or due to error or unsubscription.
     *
     * This is useful for cleanup such as resource finalization.
     */
    finally(fn: () => unknown): RelayObservable<T>;

    /**
     * Returns a new Observable which is identical to this one, unless this
     * Observable completes before yielding any values, in which case the new
     * Observable will yield the values from the alternate Observable.
     *
     * If this Observable does yield values, the alternate is never subscribed to.
     *
     * This is useful for scenarios where values may come from multiple sources
     * which should be tried in order, i.e. from a cache before a network.
     */
    ifEmpty<U>(alternate: RelayObservable<U>): RelayObservable<T | U>;

    /**
     * Observable's primary API: returns an unsubscribable Subscription to the
     * source of this Observable.
     *
     * Note: A sink may be passed directly to .subscribe() as its observer,
     * allowing for easily composing Observables.
     */
    subscribe(observer: Observer<T> | Sink<T>): Subscription;

    /**
     * Returns a new Observerable where each value has been transformed by
     * the mapping function.
     */
    map<U>(fn: (value: T) => U): RelayObservable<U>;

    /**
     * Returns a new Observable where each value is replaced with a new Observable
     * by the mapping function, the results of which returned as a single
     * merged Observable.
     */
    mergeMap<U>(fn: (value: T) => ObservableFromValue<U>): RelayObservable<U>;

    /**
     * Returns a new Observable which first mirrors this Observable, then when it
     * completes, waits for `pollInterval` milliseconds before re-subscribing to
     * this Observable again, looping in this manner until unsubscribed.
     *
     * The returned Observable never completes.
     */
    poll(pollInterval: number): RelayObservable<T>;

    /**
     * Returns a Promise which resolves when this Observable yields a first value
     * or when it completes with no value.
     */
    toPromise(): Promise<T | undefined>;
}
