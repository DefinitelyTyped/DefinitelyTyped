// Type definitions for postcss-modules-scope 3.0
// Project: https://github.com/css-modules/postcss-modules-scope
// Definitions by: Jeow Li Huan <https://github.com/huan086>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { PluginCreator } from "postcss";

declare namespace scope {
    interface Options {
        generateScopedName?: ((
            name: string,
            path: string,
            css: string
        ) => string) | undefined;

        generateExportEntry?: ((
            name: string,
            scopedName: string,
            path: string,
            css: string
        ) => { key: string; value: string }) | undefined;
    }
}

declare const creator: PluginCreator<scope.Options>;
export = creator;
