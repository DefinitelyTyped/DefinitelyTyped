// Type definitions for postcss-modules-resolve-imports 1.3
// Project: https://github.com/css-modules/postcss-modules-resolve-imports
// Definitions by: Jeow Li Huan <https://github.com/huan086>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { Plugin } from "postcss";

declare namespace resolveImports {
    interface Resolve {
        alias?: { [alias: string]: string } | undefined;
        extensions?: string[] | undefined;
        modules?: string[] | undefined;
        mainFile?: string | undefined;
        preserveSymlinks?: boolean | undefined;
    }

    interface Options {
        icssExports?: boolean | undefined;
        resolve?: Resolve | undefined;
    }

    type ResolveImports = Plugin<Options>;
}

declare const resolveImports: resolveImports.ResolveImports;
export = resolveImports;
