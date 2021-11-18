// Type definitions for postcss-modules-values 4.0
// Project: https://github.com/css-modules/postcss-modules-values#readme
// Definitions by: Bob Matcuk <https://github.com/bmatcuk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { PluginCreator } from "postcss";

declare namespace values {
    interface Options {
        createImportedName(name: string): string;
    }
}

declare const creator: PluginCreator<values.Options>;

export = creator;
