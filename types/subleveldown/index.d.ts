// Type definitions for subleveldown 4.1
// Project: https://github.com/level/subleveldown
// Definitions by: Carson Farmer <https://github.com/carsonfarmer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { LevelUp } from 'levelup';
import { AbstractLevelDOWN, AbstractIterator, ErrorCallback } from 'abstract-leveldown';

declare namespace sub {
    interface Options {
        separator?: string;
        open?: ((callback: ErrorCallback) => void);
        // Any other options are passed along to the underlying levelup and encoding-down constructors.
        [key: string]: any;
    }

    class SubIterator<K = any, V = any> extends AbstractIterator<K, V> {
        iterator: AbstractIterator<K, V>;
        prefix: string;
        constructor(db: LevelUp<AbstractLevelDOWN<K, V>, AbstractIterator<K, V>>, ite: AbstractIterator<K, V>, prefix: string);
    }
}

declare function sub<K = any, V = any>(db: LevelUp, prefix?: string, opts?: sub.Options | string): LevelUp<AbstractLevelDOWN<K, V>, sub.SubIterator<K, V>>;

export = sub;
