// Type definitions for make-dir 1.0
// Project: https://github.com/sindresorhus/make-dir
// Definitions by: Ika <https://github.com/ikatyang>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node"/>
import * as fs from 'fs';

export = makeDir;

/**
 * Returns a `Promise` for the path to the created directory.
 * @param path Directory to create.
 */
declare function makeDir(path: string, options?: makeDir.Options): Promise<string>;

declare namespace makeDir {
    /**
     * Returns the path to the created directory.
     * @param path Directory to create.
     */
    function sync(path: string, options?: Options): string;

    interface Options {
        /**
         * Default: `0o777 & (~process.umask())`
         *
         * Directory [permissions](https://x-team.com/blog/file-system-permissions-umask-node-js/).
         */
        mode?: number;

        /**
         * Default: `require('fs')`
         *
         * Use a custom `fs` implementation. For example [`graceful-fs`](https://github.com/isaacs/node-graceful-fs).
         */
        fs?: typeof fs;
    }
}
