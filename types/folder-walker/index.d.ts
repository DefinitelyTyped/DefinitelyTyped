/// <reference types="node"/>

import fs = require("fs");

interface WalkerOptions {
    fs?: NodeRequire;
    maxDepth?: number;
    filter: (filename: string) => boolean;
}

declare function walker(dirs: readonly string[], opts?: WalkerOptions): NodeJS.ReadableStream;

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
