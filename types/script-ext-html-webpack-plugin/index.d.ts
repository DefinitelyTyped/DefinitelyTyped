// Type definitions for script-ext-html-webpack-plugin 2.1
// Project: https://github.com/numical/script-ext-html-webpack-plugin
// Definitions by: Dave Cardwell <https://github.com/davecardwell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Compiler, Plugin } from 'webpack';

export = ScriptExtHtmlWebpackPlugin;

declare class ScriptExtHtmlWebpackPlugin extends Plugin {
    constructor(options?: ScriptExtHtmlWebpackPlugin.Options);

    apply(compiler: Compiler): void;
}

type ScriptMatchingPatternBase =
    | string
    | RegExp
    | ReadonlyArray<string | RegExp>;

interface ScriptMatchingPatternHash {
    test: ScriptMatchingPatternBase;
}

type ScriptMatchingPattern =
    | ScriptMatchingPatternBase
    | ScriptMatchingPatternHash;

type ScriptMatchingPatternPre =
    | ScriptMatchingPatternBase
    | ScriptMatchingPatternHash & {
          chunks?: "initial" | "async" | "all";
      };

interface Custom {
    test: ScriptMatchingPattern;
    attribute: string;
    value?: string;
}

declare namespace ScriptExtHtmlWebpackPlugin {
    interface Options {
        /**
         * scripts that should be inlined in the html (default: `[]`)
         */
        inline?: ScriptMatchingPattern;
        /**
         * script names that should have no attribute (default: `[]`)
         */
        sync?: ScriptMatchingPattern;
        /**
         * script names that should have an async attribute (default: `[]`)
         */
        async?: ScriptMatchingPattern;
        /**
         * script names that should have a defer attribute (default: `[]`)
         */
        defer?: ScriptMatchingPattern;
        /**
         * the default attribute to set - 'sync' actually results in no attribute (default: 'sync')
         */
        defaultAttribute?: "sync" | "async" | "defer";
        /**
         * script names that should have a type="module" attribute (default: `[]`)
         */
        module?: ScriptMatchingPattern;
        /**
         * scripts that should have accompanying preload resource hints (default: `[]`)
         */
        preload?: ScriptMatchingPatternPre;
        /**
         * scripts that should have accompanying prefetch resource hints (default: `[]`)
         */
        prefetch?: ScriptMatchingPatternPre;
        /**
         * scripts that should have a custom attribute(s) added, the attribute(s), and the value(s)
         */
        custom?: Custom | Custom[];
    }
}
