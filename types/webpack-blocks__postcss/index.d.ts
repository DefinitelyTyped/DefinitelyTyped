// Type definitions for @webpack-blocks/postcss 2.0
// Project: https://github.com/andywer/webpack-blocks/tree/master/packages/postcss
// Definitions by: Max Boguslavskiy <https://github.com/maxbogus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import { Block } from "webpack-blocks";

declare namespace postCss {
    type FunctionType = () => string;

    interface Plugin {
        parser?: string | FunctionType | undefined;
        syntax?: string | FunctionType | undefined;
        stringifier?: string | FunctionType | undefined;
    }

    interface Options {
        parser?: string | undefined;
        stringifier?: string | undefined;
        syntax?: string | undefined;
        plugins?: any[] | undefined;
    }
}

declare function postCss(options?: postCss.Options): Block;

export = postCss;
