// Type definitions for babel-plugin-macros 2.8
// Project: https://github.com/kentcdodds/babel-plugin-macros
// Definitions by: Billy Kwok <https://github.com/billykwok>
//                 Jake Runzer <https://github.com/coffee-cup>
//                 Ifiok Jr. <https://github.com/ifiokjr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.4

import * as Babel from '@babel/core';

export = babelPluginMacros;

declare namespace babelPluginMacros {
    interface References {
        [key: string]: Babel.NodePath[];
    }

    interface Options {
        configName?: string;
    }

    interface MacroParams {
        references: { default: Babel.NodePath[] } & References;
        state: Babel.PluginPass;
        babel: typeof Babel;
    }

    type MacroHandler = (params: MacroParams) => void;

    class MacroError extends Error {}

    function createMacro(handler: MacroHandler, options?: Options): any;
}

declare function babelPluginMacros(babel: typeof Babel, options: any): Babel.PluginObj;
