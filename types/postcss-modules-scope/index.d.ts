// Type definitions for postcss-modules-scope 1.1
// Project: https://github.com/css-modules/postcss-modules-scope
// Definitions by: Jeow Li Huan <https://github.com/huan086>
// Definitions: https://github.com/huan086/postcss-plugins-typings
// TypeScript Version: 2.2

import { Plugin } from "postcss";

declare namespace scope {
    interface Options {
        generateScopedName?: (exportedName: string, path: string, css: string) => string;
    }

    type Scope = Plugin<Options>;
}

declare const scope: scope.Scope;
export = scope;
