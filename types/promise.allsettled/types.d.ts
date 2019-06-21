export interface PromiseResolution<T> {
    status: 'fulfilled';
    value: T;
}

export interface PromiseRejection<E> {
    status: 'rejected';
    reason: E;
}

export type PromiseResult<T, E> = PromiseResolution<T> | PromiseRejection<E>;

export type PromiseTuple<T extends [unknown, ...unknown[]]> = {[P in keyof T]: Promise<T[P]>};
export type PromiseResultTuple<T extends [unknown, ...unknown[]]> = {[P in keyof T]: PromiseResult<T[P], unknown>};
