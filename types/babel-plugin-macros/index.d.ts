// Type definitions for babel-plugin-macros 2.6
// Project: https://github.com/kentcdodds/babel-plugin-macros
// Definitions by: Billy Kwok <https://github.com/billykwok>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9
import * as Babel from '@babel/core';

type References = Babel.NodePath[];

interface Options {
    configName?: string;
}

interface MacroParams {
    references: { default: References } & References;
    state: any;
    babel: typeof Babel;
}

type MacroHandler = (params: MacroParams) => void;

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
