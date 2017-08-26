// Type definitions for glob-stream v3.1.12
// Project: https://github.com/wearefractal/glob-stream
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
/// <reference types="glob" />

import glob = require('glob');

export interface Options extends glob.IOptions {
    cwd?: string;
    base?: string;
    cwdbase?: boolean;
}

export interface Element {
    cwd: string;
    base: string;
    path: string;
}

export declare function create(glob: string, opts?: Options): NodeJS.ReadableStream;
export declare function create(globs: string[], opts?: Options): NodeJS.ReadableStream;
