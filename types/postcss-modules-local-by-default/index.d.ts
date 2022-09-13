// Type definitions for postcss-modules-local-by-default 4.0
// Project: https://github.com/css-modules/postcss-modules-local-by-default
// Definitions by: Jeow Li Huan <https://github.com/huan086>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { PluginCreator } from "postcss";

declare namespace localByDefault {
    interface Options {
        mode?: "global" | "local" | "pure" | undefined;
        rewriteUrl?: ((global: boolean, url: string) => string) | undefined;
    }
}

declare const creator: PluginCreator<localByDefault.Options>;

export = creator;
