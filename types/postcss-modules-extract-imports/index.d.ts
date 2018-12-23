// Type definitions for postcss-modules-extract-imports 2.0
// Project: https://github.com/css-modules/postcss-modules-extract-imports
// Definitions by: Jeow Li Huan <https://github.com/huan086>
// Definitions: https://github.com/huan086/postcss-plugins-typings
// TypeScript Version: 2.2

import { Plugin } from "postcss";

declare namespace extractImports {
    interface Options {
        failOnWrongOrder?: boolean;
        createImportedName?: (importName: string, importPath: string) => string;
    }

    type ExtractImports = Plugin<Options>;
}

declare const extractImports: extractImports.ExtractImports;
export = extractImports;
