// Type definitions for subleveldown 4.1
// Project: https://github.com/level/subleveldown
// Definitions by: Carson Farmer <https://github.com/carsonfarmer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { LevelUp } from 'levelup';
import { ErrorCallback, AbstractOptions } from 'abstract-leveldown';
import { KeyObject } from 'crypto';

declare namespace sub {
    interface Options {
        separator?: string;
        open?: ((callback: ErrorCallback) => void);
        // Any other options are passed along to the underlying levelup and encoding-down constructors.
        [key: string]: any;
    }

    interface SubDown<DB, Iterator> extends LevelUp<DB, Iterator> {}
}

declare function sub<DB, Iterator>(db: LevelUp<DB, Iterator>, prefix?: string, opts?: sub.Options | string): sub.SubDown<DB, Iterator>;

export = sub;
