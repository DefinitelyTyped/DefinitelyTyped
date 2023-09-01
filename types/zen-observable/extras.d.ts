import Observable = require(".");

export function merge(): Observable<never>;
export function merge<A>(a: ZenObservable.ObservableLike<A>): Observable<A>;
export function merge<A, B>(a: ZenObservable.ObservableLike<A>, b: ZenObservable.ObservableLike<B>): Observable<A | B>;
export function merge<A, B, C>(
    a: ZenObservable.ObservableLike<A>,
    b: ZenObservable.ObservableLike<B>,
    c: ZenObservable.ObservableLike<C>,
): Observable<A | B | C>;
export function merge<A, B, C, D>(
    a: ZenObservable.ObservableLike<A>,
    b: ZenObservable.ObservableLike<B>,
    c: ZenObservable.ObservableLike<C>,
    d: ZenObservable.ObservableLike<D>,
): Observable<A | B | C | D>;
export function merge<A, B, C, D, E>(
    a: ZenObservable.ObservableLike<A>,
    b: ZenObservable.ObservableLike<B>,
    c: ZenObservable.ObservableLike<C>,
    d: ZenObservable.ObservableLike<D>,
    e: ZenObservable.ObservableLike<E>,
): Observable<A | B | C | D | E>;
export function merge<A, B, C, D, E, F>(
    a: ZenObservable.ObservableLike<A>,
    b: ZenObservable.ObservableLike<B>,
    c: ZenObservable.ObservableLike<C>,
    d: ZenObservable.ObservableLike<D>,
    e: ZenObservable.ObservableLike<E>,
    f: ZenObservable.ObservableLike<F>,
): Observable<A | B | C | D | E | F>;
export function merge<T>(...observables: Array<ZenObservable.ObservableLike<T>>): Observable<T>;

export function combineLatest(): Observable<never>;
export function combineLatest<A>(a: ZenObservable.ObservableLike<A>): Observable<[A]>;
export function combineLatest<A, B>(
    a: ZenObservable.ObservableLike<A>,
    b: ZenObservable.ObservableLike<B>,
): Observable<[A, B]>;
export function combineLatest<A, B, C>(
    a: ZenObservable.ObservableLike<A>,
    b: ZenObservable.ObservableLike<B>,
    c: ZenObservable.ObservableLike<C>,
): Observable<[A, B, C]>;
export function combineLatest<A, B, C, D>(
    a: ZenObservable.ObservableLike<A>,
    b: ZenObservable.ObservableLike<B>,
    c: ZenObservable.ObservableLike<C>,
    d: ZenObservable.ObservableLike<D>,
): Observable<[A, B, C, D]>;
export function combineLatest<A, B, C, D, E>(
    a: ZenObservable.ObservableLike<A>,
    b: ZenObservable.ObservableLike<B>,
    c: ZenObservable.ObservableLike<C>,
    d: ZenObservable.ObservableLike<D>,
    e: ZenObservable.ObservableLike<E>,
): Observable<[A, B, C, D, E]>;
export function combineLatest<A, B, C, D, E, F>(
    a: ZenObservable.ObservableLike<A>,
    b: ZenObservable.ObservableLike<B>,
    c: ZenObservable.ObservableLike<C>,
    d: ZenObservable.ObservableLike<D>,
    e: ZenObservable.ObservableLike<E>,
    f: ZenObservable.ObservableLike<F>,
): Observable<[A, B, C, D, E, F]>;
export function combineLatest<T>(...observables: Array<ZenObservable.ObservableLike<T>>): Observable<T[]>;

export function zip(): Observable<never>;
export function zip<A>(a: ZenObservable.ObservableLike<A>): Observable<[A]>;
export function zip<A, B>(a: ZenObservable.ObservableLike<A>, b: ZenObservable.ObservableLike<B>): Observable<[A, B]>;
export function zip<A, B, C>(
    a: ZenObservable.ObservableLike<A>,
    b: ZenObservable.ObservableLike<B>,
    c: ZenObservable.ObservableLike<C>,
): Observable<[A, B, C]>;
export function zip<A, B, C, D>(
    a: ZenObservable.ObservableLike<A>,
    b: ZenObservable.ObservableLike<B>,
    c: ZenObservable.ObservableLike<C>,
    d: ZenObservable.ObservableLike<D>,
): Observable<[A, B, C, D]>;
export function zip<A, B, C, D, E>(
    a: ZenObservable.ObservableLike<A>,
    b: ZenObservable.ObservableLike<B>,
    c: ZenObservable.ObservableLike<C>,
    d: ZenObservable.ObservableLike<D>,
    e: ZenObservable.ObservableLike<E>,
): Observable<[A, B, C, D, E]>;
export function zip<A, B, C, D, E, F>(
    a: ZenObservable.ObservableLike<A>,
    b: ZenObservable.ObservableLike<B>,
    c: ZenObservable.ObservableLike<C>,
    d: ZenObservable.ObservableLike<D>,
    e: ZenObservable.ObservableLike<E>,
    f: ZenObservable.ObservableLike<F>,
): Observable<[A, B, C, D, E, F]>;
export function zip<T>(...observables: Array<ZenObservable.ObservableLike<T>>): Observable<T[]>;
