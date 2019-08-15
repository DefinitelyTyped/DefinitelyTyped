// Type definitions for recursive-readdir 2.2
// Project: https://github.com/jergason/recursive-readdir/
// Definitions by: Elisée Maurer <https://github.com/elisee>, Micah Zoltu <https://github.com/MicahZoltu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as fs from "fs";
declare namespace RecursiveReaddir {
    type IgnoreFunction = (file: string, stats: fs.Stats) => boolean;
    type Ignores = ReadonlyArray<string|IgnoreFunction>;
    type Callback = (error: Error, files: string[]) => void;
    interface readDir {
        (path: string, ignores?: Ignores): Promise<string[]>;
        (path: string, callback: Callback): void;
        (path: string, ignores: Ignores, callback: Callback): void;
    }
}

declare var recursiveReadDir: RecursiveReaddir.readDir;
export = recursiveReadDir;
