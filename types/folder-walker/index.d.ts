// Type definitions for folder-walker 3.2
// Project: https://github.com/okdistribute/folder-walker (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: bfsgr <https://github.com/bfsgr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

import * as fs from 'fs';

interface WalkerOptions {
    fs?: NodeRequire;
    maxDepth?: number;
    filter: (filename: string) => boolean;
}

declare function walker(dirs: ReadonlyArray<string>, opts?: WalkerOptions): NodeJS.ReadableStream;

declare namespace walker {
    interface Entry {
        basename: string;
        relname: string;
        root: string;
        filepath: string;
        stat: fs.Stats;
        type: "file" | "directory";
    }
}

export = walker;
