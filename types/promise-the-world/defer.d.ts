declare namespace defer {
    class Deferred<T> {
        promise: Promise<T>;
        resolve(resolved?: T): void;
        reject(error: Error): void;
    }
}

// tslint:disable-next-line no-unnecessary-generics
declare function defer<T = any>(): defer.Deferred<T>;

export = defer;
