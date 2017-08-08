// Type definitions for rimraf
// Project: https://github.com/isaacs/rimraf
// Definitions by: Carlos Ballesteros Velasco <https://github.com/soywiz>, e-cloud <https://github.com/e-cloud>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/rimraf.d.ts

/// <reference types="node" />
/// <reference types="glob" />

import glob = require('glob');
import fs = require('fs');

declare function rimraf(path: string, options: rimraf.Options, callback: (error: Error) => void): void;
declare function rimraf(path: string, callback: (error: Error) => void): void;
declare namespace rimraf {
    export function sync(path: string, options: rimraf.Options): void;
    export function sync(path: string): void;
    export var EMFILE_MAX: number;
    export var BUSYTRIES_MAX: number;
    export interface Options {
        maxBusyTries?: number;
        emfileWait?: boolean;
        disableGlob?: boolean;
        glob?: glob.IOptions | false;

        unlink?: typeof fs.unlink
        chmod?: typeof fs.chmod
        stat?: typeof fs.stat
        lstat?: typeof fs.lstat
        rmdir?: typeof fs.rmdir
        readdir?: typeof fs.readdir

        unlinkSync?: typeof fs.unlinkSync
        chmodSync?: typeof fs.chmodSync
        statSync?: typeof fs.statSync
        lstatSync?: typeof fs.lstatSync
        rmdirSync?: typeof fs.rmdirSync
        readdirSync?: typeof fs.readdirSync
    }
}
export = rimraf;
