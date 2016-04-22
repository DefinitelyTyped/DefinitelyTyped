// Type definitions for glob-expand
// Project: https://github.com/anodynos/node-glob-expand
// Definitions by: vvakame <https://github.com/vvakame/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../glob/glob.d.ts" />


import * as _glob from "glob";

interface Option {
    filter?: string | ((filePath: string) => boolean);
    cwd?: string;
}

declare namespace expand {
    var glob: typeof _glob;
    var VERSION: string;
}

declare function expand(opts: Option, patterns: (string | RegExp)[]): string[];
declare function expand(opts: Option, ...patterns: (string | RegExp)[]): string[];
declare function expand(patterns: (string | RegExp)[]): string[];
declare function expand(...patterns: (string | RegExp)[]): string[];

export = expand;
