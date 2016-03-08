// Type definitions for glob-expand
// Project: https://github.com/anodynos/node-glob-expand
// Definitions by: vvakame <https://github.com/vvakame/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../glob/glob.d.ts" />

declare module "glob-expand" {
    import * as _glob from "glob";

    interface Option {
        filter?: string | ((filePath: string) => boolean);
        cwd?: string;
		  }

    module expand {
        var glob: typeof _glob;
        var VERSION: string;
    }

    function expand(opts: Option, patterns: (string | RegExp)[]): string[];
    function expand(opts: Option, ...patterns: (string | RegExp)[]): string[];
    function expand(patterns: (string | RegExp)[]): string[];
    function expand(...patterns: (string | RegExp)[]): string[];

    export = expand;
}
