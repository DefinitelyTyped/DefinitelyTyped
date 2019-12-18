// Type definitions for postcss-modules-local-by-default 1.2
// Project: https://github.com/css-modules/postcss-modules-local-by-default
// Definitions by: Jeow Li Huan <https://github.com/huan086>
// Definitions: https://github.com/huan086/postcss-plugins-typings
// TypeScript Version: 2.2

import { Plugin } from "postcss";

declare namespace localByDefault {
    interface Options {
        mode?: "global" | "local" | "pure";
        rewriteUrl?: (global: boolean, url: string) => string;
    }

    type LocalByDefault = Plugin<Options>;
}

declare const localByDefault: localByDefault.LocalByDefault;
export = localByDefault;
