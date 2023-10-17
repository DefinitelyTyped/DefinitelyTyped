/// <reference types="node"/>

import * as fs from "fs";

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
