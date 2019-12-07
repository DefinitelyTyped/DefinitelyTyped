// Type definitions for subleveldown 4.1
// Project: https://github.com/level/subleveldown
// Definitions by: Carson Farmer <https://github.com/carsonfarmer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { LevelUp } from 'levelup';
import { AbstractLevelDOWN, AbstractIterator, ErrorCallback } from 'abstract-leveldown';

type SubDownOpenHook = (callback: ErrorCallback) => void;

interface SubDownOptions {
    separator?: string;
    open?: SubDownOpenHook;
    [key: string]: any;
}

declare function sub<K = any, V = any>(
    db: LevelUp,
    prefix?: string,
    opts?: SubDownOptions | string,
): LevelUp<AbstractLevelDOWN<K, V>, AbstractIterator<K, V>>;
declare namespace sub {}
export = sub;
