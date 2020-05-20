// Type definitions for rimraf 3.0
// Project: https://github.com/isaacs/rimraf
// Definitions by: Carlos Ballesteros Velasco <https://github.com/soywiz>
//                 e-cloud <https://github.com/e-cloud>
//                 Ruben Schmidmeister <https://github.com/bash>
//                 Oganexon <https://github.com/oganexon>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import glob = require('glob');
import fs = require('fs');

declare function rimraf(path: string, options: rimraf.Options, callback: (error: Error) => void): void;
declare function rimraf(path: string, callback: (error: Error) => void): void;
declare namespace rimraf {
    /**
     * It can remove stuff synchronously, too.
     * But that's not so good. Use the async API.
     * It's better.
     */
    function sync(path: string, options?: Options): void;

    /**
     * see {@link https://github.com/isaacs/rimraf/blob/79b933fb362b2c51bedfa448be848e1d7ed32d7e/README.md#options}
     */
    interface Options {
        maxBusyTries?: number;
        emfileWait?: number;
        /** @default false */
        disableGlob?: boolean;
        glob?: glob.IOptions | false;

        unlink?: typeof fs.unlink;
        chmod?: typeof fs.chmod;
        stat?: typeof fs.stat;
        lstat?: typeof fs.lstat;
        rmdir?: typeof fs.rmdir;
        readdir?: typeof fs.readdir;
        unlinkSync?: typeof fs.unlinkSync;
        chmodSync?: typeof fs.chmodSync;
        statSync?: typeof fs.statSync;
        lstatSync?: typeof fs.lstatSync;
        rmdirSync?: typeof fs.rmdirSync;
        readdirSync?: typeof fs.readdirSync;
    }
}
export = rimraf;
