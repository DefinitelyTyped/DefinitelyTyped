import { Readable } from 'stream';

import { Callback } from './Callback';

export interface ExecuteFilter {
    (callback: Callback): void;
    (): Readable;
}
