import { Readable } from "stream";

import { Callback } from "./Callback";

export interface PromisedReadable<T> extends Readable {
    // DevNote: Promise function in dynamodb wraps results in an array
    promise(): Promise<T[]>;
}

export interface ExecuteFilter<T> {
    (callback: Callback<T>): void;
    (): PromisedReadable<T>;
}
