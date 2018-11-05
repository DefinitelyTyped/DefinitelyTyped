// Type definitions for postcss-modules-resolve-imports 1.3
// Project: https://github.com/css-modules/postcss-modules-resolve-imports
// Definitions by: Jeow Li Huan <https://github.com/huan086>
// Definitions: https://github.com/huan086/postcss-plugins-typings
// TypeScript Version: 2.2

import { Plugin } from "postcss";

declare namespace resolveImports {
    interface Resolve {
        alias?: { [alias: string]: string };
        extensions?: string[];
        modules?: string[];
        mainFile?: string;
        preserveSymlinks?: boolean;
    }

    interface Options {
        icssExports?: boolean;
        resolve?: Resolve;
    }

    type ResolveImports = Plugin<Options>;
}

declare const resolveImports: resolveImports.ResolveImports;
export = resolveImports;
