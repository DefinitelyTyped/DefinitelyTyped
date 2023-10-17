/// <reference types="node" />

import * as fs from "fs";
declare namespace RecursiveReaddir {
    interface readdir {
        (path: string, callback: (error: Error, files: string[]) => any): void;
        // ignorePattern supports glob syntax via https://github.com/isaacs/minimatch
        (
            path: string,
            ignorePattern: (string | ((file: string, stats: fs.Stats) => void))[],
            callback: (error: Error, files: string[]) => any,
        ): void;
        (
            path: string,
            ignoreFunction: (file: string, stats: fs.Stats) => void,
            callback: (error: Error, files: string[]) => any,
        ): void;
    }
}

declare var r: RecursiveReaddir.readdir;
export = r;
