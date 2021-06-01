import { Readable } from 'stream';

import { Callback } from './Callback';

export interface PromisedReadable<T> extends Readable {
    promise(): Promise<T>;
}

export interface ExecuteFilter<T> {
    (callback: Callback<T>): void;
    (): PromisedReadable<T>;
}
