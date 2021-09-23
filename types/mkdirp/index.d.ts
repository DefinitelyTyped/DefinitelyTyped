// Type definitions for mkdirp 1.0
// Project: https://github.com/substack/node-mkdirp
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
//                 mrmlnc <https://github.com/mrmlnc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import fs = require('fs');

/**
 * Create a new directory and any necessary subdirectories at dir with octal
 * permission string `opts.mode`. If opts is a string or number, it will be
 * treated as the `opts.mode`. If opts.mode isn't specified, it defaults to
 * 0o777 & (~`process.umask()`).
 *
 * Promise resolves to first directory made that had to be created, or
 * undefined if everything already exists. Promise rejects if any errors are
 * encountered. Note that, in the case of promise rejection, some directories
 * may have been created, as recursive directory creation is not an atomic operation.
 * You can optionally pass in an alternate fs implementation by passing in
 * opts.fs.
 *
 * Your implementation should have `opts.fs.mkdir(path, opts, cb)` and
 * `opts.fs.stat(path, cb)`.
 *
 * You can also override just one or the other of mkdir and stat by passing in
 * `opts.stat` or `opts.mkdir`, or providing an fs option that only overrides one
 * of these.
 */
declare function mkdirp(dir: string, opts?: mkdirp.Mode | mkdirp.Options): Promise<string|undefined>;

declare namespace mkdirp {
    type Mode = number | string | undefined;

    interface FsImplementation {
        mkdir: typeof fs.mkdir;
        stat: typeof fs.stat;
    }

    interface FsImplementationSync {
        mkdirSync: typeof fs.mkdirSync;
        statSync: typeof fs.statSync;
    }

    interface Options {
        mode?: Mode | undefined;
        fs?: FsImplementation | undefined;
    }

    interface OptionsSync {
        mode?: Mode | undefined;
        fs?: FsImplementationSync | undefined;
    }

    /**
     * Synchronously create a new directory and any necessary subdirectories at
     * dir with octal permission string `opts.mode`. If opts is a string or number,
     * it will be treated as the `opts.mode`. If `opts.mode` isn't specified, it
     * defaults to 0o777 & (~`process.umask()`).
     * You can optionally pass in an alternate fs implementation by passing in
     * `opts.fs`. Your implementation should have `opts.fs.mkdirSync(path, mode)`
     * and `opts.fs.statSync(path)`. You can also override just one or the other
     * of `mkdirSync` and `statSync` by passing in `opts.statSync` or `opts.mkdirSync`,
     * or providing an fs option that only overrides one of these.
     * @returns Returns the first directory that had to be created, or undefined if everything already exists.
     */
    function sync(dir: string, opts?: Mode | OptionsSync): string|undefined;

    /**
     * Use the manual implementation (not the native one). This is the default
     * when the native implementation is not available or the stat/mkdir
     * implementation is overridden.
     */
    function manual(dir: string, opts?: Mode | Options): Promise<string|undefined>;

    /**
     * Use the manual implementation (not the native one). This is the default
     * when the native implementation is not available or the stat/mkdir
     * implementation is overridden.
     */
    function manualSync(dir: string, opts?: Mode | OptionsSync): string|undefined;

    /**
     * Use the native implementation (not the manual one). This is the default
     * when the native implementation is available and stat/mkdir are not
     * overridden.
     */
    function native(dir: string, opts?: Mode | Options): Promise<string|undefined>;

    /**
     * Use the native implementation (not the manual one). This is the default
     * when the native implementation is available and stat/mkdir are not
     * overridden.
     */
    function nativeSync(dir: string, opts?: Mode | OptionsSync): string|undefined;
}
export = mkdirp;
