declare global {
    interface SymbolConstructor {
        readonly observable: symbol;
    }
}

export interface SubscriptionObserver<T> {
    closed: boolean;
    next(value: T): void;
    error(errorValue: any): void;
    complete(): void;
}

export interface Subscription {
    closed: boolean;
    unsubscribe(): void;
}

export interface Observer<T> {
    start?(subscription: Subscription): any;
    next?(value: T): void;
    error?(errorValue: any): void;
    complete?(): void;
}

export type Subscriber<T> = (observer: SubscriptionObserver<T>) => void | (() => void) | Subscription;

export interface ObservableLike<T> {
    subscribe?: Subscriber<T>;
    [Symbol.observable](): Observable<T> | ObservableLike<T>;
}

declare class Observable<T> {
    constructor(subscriber: Subscriber<T>);

    subscribe(observer: Observer<T>): Subscription;
    subscribe(onNext: (value: T) => void, onError?: (error: any) => void, onComplete?: () => void): Subscription;

    [Symbol.observable](): Observable<T>;

    forEach(callback: (value: T) => void): Promise<void>;
    map<R>(callback: (value: T) => R): Observable<R>;
    filter(callback: (value: T) => boolean): Observable<T>;
    reduce(callback: (previousValue: T, currentValue: T) => T, initialValue?: T): Observable<T>;
    reduce<R>(callback: (previousValue: R, currentValue: T) => R, initialValue?: R): Observable<R>;
    flatMap<R>(callback: (value: T) => ObservableLike<R>): Observable<R>;
    concat<R>(...observable: Array<Observable<R>>): Observable<R>;

    static from<R>(observable: Observable<R> | ObservableLike<R> | ArrayLike<R>): Observable<R>;
    static of<R>(...items: R[]): Observable<R>;
}

export default Observable;
export { Observable };

export function merge(): Observable<never>;
export function merge<A>(a: ObservableLike<A>): Observable<A>;
export function merge<A, B>(a: ObservableLike<A>, b: ObservableLike<B>): Observable<A | B>;
export function merge<A, B, C>(a: ObservableLike<A>, b: ObservableLike<B>, c: ObservableLike<C>): Observable<A | B | C>;
export function merge<A, B, C, D>(
    a: ObservableLike<A>,
    b: ObservableLike<B>,
    c: ObservableLike<C>,
    d: ObservableLike<D>,
): Observable<A | B | C | D>;
export function merge<A, B, C, D, E>(
    a: ObservableLike<A>,
    b: ObservableLike<B>,
    c: ObservableLike<C>,
    d: ObservableLike<D>,
    e: ObservableLike<E>,
): Observable<A | B | C | D | E>;
export function merge<A, B, C, D, E, F>(
    a: ObservableLike<A>,
    b: ObservableLike<B>,
    c: ObservableLike<C>,
    d: ObservableLike<D>,
    e: ObservableLike<E>,
    f: ObservableLike<F>,
): Observable<A | B | C | D | E | F>;
export function merge<T>(...observables: Array<ObservableLike<T>>): Observable<T>;

export function combineLatest(): Observable<never>;
export function combineLatest<A>(a: ObservableLike<A>): Observable<[A]>;
export function combineLatest<A, B>(a: ObservableLike<A>, b: ObservableLike<B>): Observable<[A, B]>;
export function combineLatest<A, B, C>(
    a: ObservableLike<A>,
    b: ObservableLike<B>,
    c: ObservableLike<C>,
): Observable<[A, B, C]>;
export function combineLatest<A, B, C, D>(
    a: ObservableLike<A>,
    b: ObservableLike<B>,
    c: ObservableLike<C>,
    d: ObservableLike<D>,
): Observable<[A, B, C, D]>;
export function combineLatest<A, B, C, D, E>(
    a: ObservableLike<A>,
    b: ObservableLike<B>,
    c: ObservableLike<C>,
    d: ObservableLike<D>,
    e: ObservableLike<E>,
): Observable<[A, B, C, D, E]>;
export function combineLatest<A, B, C, D, E, F>(
    a: ObservableLike<A>,
    b: ObservableLike<B>,
    c: ObservableLike<C>,
    d: ObservableLike<D>,
    e: ObservableLike<E>,
    f: ObservableLike<F>,
): Observable<[A, B, C, D, E, F]>;
export function combineLatest<T>(...observables: Array<ObservableLike<T>>): Observable<T[]>;

export function zip(): Observable<never>;
export function zip<A>(a: ObservableLike<A>): Observable<[A]>;
export function zip<A, B>(a: ObservableLike<A>, b: ObservableLike<B>): Observable<[A, B]>;
export function zip<A, B, C>(a: ObservableLike<A>, b: ObservableLike<B>, c: ObservableLike<C>): Observable<[A, B, C]>;
export function zip<A, B, C, D>(
    a: ObservableLike<A>,
    b: ObservableLike<B>,
    c: ObservableLike<C>,
    d: ObservableLike<D>,
): Observable<[A, B, C, D]>;
export function zip<A, B, C, D, E>(
    a: ObservableLike<A>,
    b: ObservableLike<B>,
    c: ObservableLike<C>,
    d: ObservableLike<D>,
    e: ObservableLike<E>,
): Observable<[A, B, C, D, E]>;
export function zip<A, B, C, D, E, F>(
    a: ObservableLike<A>,
    b: ObservableLike<B>,
    c: ObservableLike<C>,
    d: ObservableLike<D>,
    e: ObservableLike<E>,
    f: ObservableLike<F>,
): Observable<[A, B, C, D, E, F]>;
export function zip<T>(...observables: Array<ObservableLike<T>>): Observable<T[]>;
