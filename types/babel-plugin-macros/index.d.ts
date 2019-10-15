// Type definitions for babel-plugin-macros 2.6.1
// Project: https://github.com/kentcdodds/babel-plugin-macros
// Definitions by: Billy Kwok <https://github.com/billykwok>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.6
import * as Babel from 'babel__core';

declare type References = Babel.NodePath[];

declare interface Options {
    configName?: string;
}

declare function babel_plugin_macros(
    babel: typeof Babel,
    ref: {
        require: (path: string) => any;
        resolvePath: (src: string, baseDir: string) => any;
    },
): Babel.PluginObj;

declare namespace babel_plugin_macros {
    interface MacroParams<S = {}> {
        references: { default: References } & References;
        state: S;
        babel: typeof Babel;
    }

    type MacroHandler<S = {}> = (params: MacroParams<S>) => void;

    class MacroError extends Error {}

    function createMacro<M, S = {}>(handler: MacroHandler<S>, options?: Options): M;
}

export = babel_plugin_macros;
