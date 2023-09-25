// Type definitions for @webpack-blocks/sass 2.0
// Project: https://github.com/andywer/webpack-blocks/tree/master/packages/sass
// Definitions by: Max Boguslavskiy <https://github.com/maxbogus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import { Block } from "webpack-blocks";

declare namespace sass {
    interface Options {
        includePaths?: string[] | undefined;
        indentedSyntax?: boolean | undefined;
        outputStyle?: string | undefined;
        sourceMap?: boolean | undefined;
    }
}

declare function sass(options?: sass.Options): Block;

export = sass;
