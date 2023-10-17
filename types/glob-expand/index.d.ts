/// <reference types="glob"/>

import * as glob from "glob";

interface Option {
    filter?: string | ((filePath: string) => boolean) | undefined;
    cwd?: string | undefined;
}

type _glob = typeof glob;
declare namespace expand {
    var glob: _glob;
    var VERSION: string;
}

declare function expand(opts: Option, patterns: (string | RegExp)[]): string[];
declare function expand(opts: Option, ...patterns: (string | RegExp)[]): string[];
declare function expand(patterns: (string | RegExp)[]): string[];
declare function expand(...patterns: (string | RegExp)[]): string[];

export = expand;
