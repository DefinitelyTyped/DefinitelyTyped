import * as Observable from "zen-observable";

declare class PushStream<T> {
    readonly observable: Observable<T>;
    readonly observed: number;
    next(x: T): void;
    error(e: Error): void;
    complete(x?: any): void;
}

export = PushStream;
