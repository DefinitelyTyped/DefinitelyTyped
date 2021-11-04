// Type definitions for rimraf 2.0
// Project: https://github.com/isaacs/rimraf
// Definitions by: Carlos Ballesteros Velasco <https://github.com/soywiz>
//                 e-cloud <https://github.com/e-cloud>
//                 Ruben Schmidmeister <https://github.com/bash>
//                 Oganexon <https://github.com/oganexon>
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
        maxBusyTries?: number | undefined;
        emfileWait?: number | undefined;
        disableGlob?: boolean | undefined;
        glob?: glob.IOptions | false | undefined;

        unlink?: typeof fs.unlink | undefined;
        chmod?: typeof fs.chmod | undefined;
        stat?: typeof fs.stat | undefined;
        lstat?: typeof fs.lstat | undefined;
        rmdir?: typeof fs.rmdir | undefined;
        readdir?: typeof fs.readdir | undefined;

        unlinkSync?: typeof fs.unlinkSync | undefined;
        chmodSync?: typeof fs.chmodSync | undefined;
        statSync?: typeof fs.statSync | undefined;
        lstatSync?: typeof fs.lstatSync | undefined;
        rmdirSync?: typeof fs.rmdirSync | undefined;
        readdirSync?: typeof fs.readdirSync | undefined;
    }
}
export = rimraf;
