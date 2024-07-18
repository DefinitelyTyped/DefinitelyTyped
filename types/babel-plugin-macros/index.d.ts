import * as Babel from "@babel/core";

export = babelPluginMacros;

declare namespace babelPluginMacros {
    interface References {
        [key: string]: Babel.NodePath[];
    }

    interface Options {
        configName?: string | undefined;
    }

    interface MacroParams {
        references: { default: Babel.NodePath[] } & References;
        state: Babel.PluginPass;
        babel: typeof Babel;
        config?: { [key: string]: any } | undefined;
        source: string;
        isBabelMacrosCall: boolean;
    }

    type MacroHandler = (params: MacroParams) => void;

    class MacroError extends Error {}

    function createMacro(handler: MacroHandler, options?: Options): any;
}

declare function babelPluginMacros(babel: typeof Babel, options: any): Babel.PluginObj;
