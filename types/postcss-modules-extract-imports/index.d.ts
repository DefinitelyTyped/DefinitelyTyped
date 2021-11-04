// Type definitions for postcss-modules-extract-imports 3.0
// Project: https://github.com/css-modules/postcss-modules-extract-imports
// Definitions by: Jeow Li Huan <https://github.com/huan086>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import { PluginCreator } from 'postcss';

declare namespace extractImports {
    interface Options {
        failOnWrongOrder?: boolean | undefined;
        createImportedName?: ((importName: string, importPath: string) => string) | undefined;
    }
}

declare const extractImports: PluginCreator<extractImports.Options>;
export = extractImports;
