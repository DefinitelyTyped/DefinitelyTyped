// Type definitions for neo-async 2.5
// Project: https://github.com/suguru03/neo-async
// Definitions by: Mohsen Azimi <https://github.com/mohsen1>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Dictionary<T> {
    [key: string]: T;
}
export type IterableCollection<T> = T[] | IterableIterator<T> | Dictionary<T>;

export interface ErrorCallback<T> {
    (err?: T): void;
}
export interface AsyncBooleanResultCallback<E> {
    (err?: E, truthValue?: boolean): void;
}
export interface AsyncResultCallback<T, E> {
    (err?: E, result?: T): void;
}
export interface AsyncResultArrayCallback<T, E> {
    (err?: E, results?: Array<T | undefined>): void;
}
export interface AsyncResultObjectCallback<T, E> {
    (err: E | undefined, results: Dictionary<T | undefined>): void;
}

export interface AsyncFunction<T, E> {
    (callback: (err?: E, result?: T) => void): void;
}
export interface AsyncFunctionEx<T, E> {
    (callback: (err?: E, ...results: T[]) => void): void;
}
export interface AsyncIterator<T, E> {
    (item: T, callback: ErrorCallback<E>): void;
}
export interface AsyncForEachOfIterator<T, E> {
    (item: T, key: number | string, callback: ErrorCallback<E>): void;
}
export interface AsyncResultIterator<T, R, E> {
    (item: T, callback: AsyncResultCallback<R, E>): void;
}
export interface AsyncMemoIterator<T, R, E> {
    (memo: R | undefined, item: T, callback: AsyncResultCallback<R, E>): void;
}
export interface AsyncBooleanIterator<T, E> {
    (item: T, callback: AsyncBooleanResultCallback<E>): void;
}

export interface AsyncWorker<T, E> {
    (task: T, callback: ErrorCallback<E>): void;
}
export interface AsyncVoidFunction<E> {
    (callback: ErrorCallback<E>): void;
}

export type AsyncAutoTasks<R extends Dictionary<any>, E> = {
    [K in keyof R]: AsyncAutoTask<R[K], R, E>
};
export type AsyncAutoTask<R1, R extends Dictionary<any>, E> =
    | AsyncAutoTaskFunctionWithoutDependencies<R1, E>
    | (keyof R | AsyncAutoTaskFunction<R1, R, E>)[];
export interface AsyncAutoTaskFunctionWithoutDependencies<R1, E> {
    (cb: AsyncResultCallback<R1, E> | ErrorCallback<E>): void;
}
export interface AsyncAutoTaskFunction<R1, R extends Dictionary<any>, E> {
    (results: R, cb: AsyncResultCallback<R1, E> | ErrorCallback<E>): void;
}

export function each<T, E>(
    arr: IterableCollection<T>,
    iterator: AsyncIterator<T, E>,
    callback?: ErrorCallback<E>
): void;

export function map<T, R, E>(
    arr: T[] | IterableIterator<T>,
    iterator: AsyncResultIterator<T, R, E>,
    callback?: AsyncResultArrayCallback<R, E>
): void;
export function map<T, R, E>(
    arr: Dictionary<T>,
    iterator: AsyncResultIterator<T, R, E>,
    callback?: AsyncResultArrayCallback<R, E>
): void;

export function parallel<T, E>(
    tasks: Array<AsyncFunction<T, E>>,
    callback?: AsyncResultArrayCallback<T, E>
): void;
export function parallel<T, E>(
    tasks: Dictionary<AsyncFunction<T, E>>,
    callback?: AsyncResultObjectCallback<T, E>
): void;

export const forEach: typeof each;
