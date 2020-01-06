// Type definitions for babel-plugin-macros 2.6
// Project: https://github.com/kentcdodds/babel-plugin-macros
// Definitions by: Billy Kwok <https://github.com/billykwok>
//                 Jake Runzer <https://github.com/coffee-cup>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9
import * as Babel from '@babel/core';

export interface References {
    [key: string]: Babel.NodePath[];
}

export interface Options {
    configName?: string;
}

export interface MacroParams {
    references: { default: Babel.NodePath[] } & References;
    state: any;
    babel: typeof Babel;
}

export type MacroHandler = (params: MacroParams) => void;

declare function babel_plugin_macros(
    babel: typeof Babel,
    ref: {
        require: (path: string) => any;
        resolvePath: (src: string, baseDir: string) => any;
    },
): Babel.PluginObj;

declare namespace babel_plugin_macros {
    class MacroError extends Error {}

    function createMacro(handler: MacroHandler, options?: Options): any;
}

export = babel_plugin_macros;
