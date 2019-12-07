// Type definitions for subleveldown 4.1
// Project: https://github.com/level/subleveldown
// Definitions by: Carson Farmer <https://github.com/carsonfarmer>
//                 Dmitry Demensky <https://github.com/demensky>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { LevelUp } from 'levelup';
import { AbstractLevelDOWN, AbstractIterator, ErrorCallback } from 'abstract-leveldown';
import { CodecOptions } from 'level-codec';

/** @see {@link SubDownOptions#open} */
type SubDownOpenHook = (callback: ErrorCallback) => void;

/**
 * Any other options are passed along to the underlying `levelup` and `encoding-down` constructors.
 * {@link https://github.com/Level/subleveldown#api See their documentation for further details}.
 */
interface SubDownOptions extends CodecOptions {
    /**
     * Character for separating sublevel prefixes from user keys and each other. Should be outside the character (or byte) range of user keys.
     * @default '!'
     */
    separator?: string;

    /**
     * Optional open hook called when the underlying `levelup` instance has been opened.
     * The hook receives a callback which must be called to finish opening.
     */
    open?: SubDownOpenHook;

    // TODO: Remove and inherit from constructor options from levelup package
    [key: string]: any;
}

/**
 * Returns a `levelup` instance that uses subleveldown to prefix the keys of the underlying store of `db`.
 * Any layers that this instance may have (like `encoding-down` or `subleveldown` itself) are peeled off to get to the innermost `abstract-leveldown` compliant store (like `leveldown`).
 * This ensures there is no double encoding step.
 * @param db
 * @param prefix If omitted, the effective prefix is two separators, e.g. `'!!'`. If `db` is already a subleveldown-powered instance, the effective prefix is a combined prefix, e.g. `'!one!!two!'`.
 * @param opts
 * @see {@link https://github.com/Level/subleveldown#api subleveldown API}
 */
declare function sub<K = any, V = any>(
    db: LevelUp,
    prefix?: string,
    opts?: SubDownOptions | string,
): LevelUp<AbstractLevelDOWN<K, V>, AbstractIterator<K, V>>;
declare namespace sub {}

export = sub;
