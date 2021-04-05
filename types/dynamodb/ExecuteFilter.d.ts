import { Readable } from 'stream';

import { Callback } from './Callback';

export interface PromisedReadable extends Readable {
    promise(): Promise<any>;
}

export interface ExecuteFilter {
    (callback: Callback): void;
    (): PromisedReadable;
}
