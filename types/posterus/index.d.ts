export class Future<T = any, E extends Error = Error> {
    static from: <T = any, E extends Error = Error>(result?: T, error?: E) => Future<T, E>;
    static fromResult: <T = any>(...args: T extends undefined ? [] | [undefined] : [T]) => Future<T>;
    static fromError: <E extends Error = Error>(error: E) => Future<undefined, E>;
    static fromPromise: <T>(promise: Promise<T>) => Future<T>;
    static all: (values: any[]) => Future;
    static race: (values: any[]) => Future;
    static onUnhandledRejection: (future: Future) => void;
    static scheduler: Scheduler;

    map: <U = any, V extends Error = Error>(
        mapper: (error?: E, result?: T) => U | Promise<U> | Future<U, V>,
    ) => Future<U, V>;
    mapResult: <U = any, V extends Error = Error>(mapper: (result: T) => U | Promise<U> | Future<U, V>) => Future<U, V>;
    mapError: <U = any, V extends Error = Error>(mapper: (error: E) => U | Promise<U> | Future<U, V>) => Future<U, V>;
    finally: (mapper: (error?: E, result?: T) => any) => Future<T, E>;
    deinit: () => void;
    weak: () => Future<T, E>;
    settle: (error?: E, result?: T) => void;
    toPromise: () => Promise<T>;
    then: Promise<T>["then"];
    catch: Promise<T>["catch"];
    finishPending: () => void;
    deref: () => T | undefined;
}

export class Scheduler {
    tick(): void;
    deinit(): void;
    asap(callback: () => void): void;
}

export function isFuture(value: any): boolean;
export function isDeinitError(error: any): boolean;
