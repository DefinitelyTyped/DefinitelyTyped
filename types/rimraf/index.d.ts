// Type definitions for rimraf 2.0
// Project: https://github.com/isaacs/rimraf
// Definitions by: Carlos Ballesteros Velasco <https://github.com/soywiz>
//                 e-cloud <https://github.com/e-cloud>
//                 Ruben Schmidmeister <https://github.com/bash>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/rimraf.d.ts

/// <reference types="node" />

import glob = require('glob');
import fs = require('fs');

declare function rimraf(path: string, options: rimraf.Options, callback: (error: Error) => void): void;
declare function rimraf(path: string, callback: (error: Error) => void): void;
declare namespace rimraf {
    function __promisify__(path: string, options?: Options): Promise<void>;
    function sync(path: string, options?: Options): void;
    let EMFILE_MAX: number;
    let BUSYTRIES_MAX: number;
    interface Options {
        maxBusyTries?: number;
        emfileWait?: boolean;
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
