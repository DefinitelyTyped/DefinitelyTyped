import { Compiler, Plugin } from "webpack";

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
        chunks?: "initial" | "async" | "all" | undefined;
    };

interface Custom {
    test: ScriptMatchingPattern;
    attribute: string;
    value?: string | undefined;
}

declare namespace ScriptExtHtmlWebpackPlugin {
    interface Options {
        /**
         * scripts that should be inlined in the html (default: `[]`)
         */
        inline?: ScriptMatchingPattern | undefined;
        /**
         * script names that should have no attribute (default: `[]`)
         */
        sync?: ScriptMatchingPattern | undefined;
        /**
         * script names that should have an async attribute (default: `[]`)
         */
        async?: ScriptMatchingPattern | undefined;
        /**
         * script names that should have a defer attribute (default: `[]`)
         */
        defer?: ScriptMatchingPattern | undefined;
        /**
         * the default attribute to set - 'sync' actually results in no attribute (default: 'sync')
         */
        defaultAttribute?: "sync" | "async" | "defer" | undefined;
        /**
         * script names that should have a type="module" attribute (default: `[]`)
         */
        module?: ScriptMatchingPattern | undefined;
        /**
         * scripts that should have accompanying preload resource hints (default: `[]`)
         */
        preload?: ScriptMatchingPatternPre | undefined;
        /**
         * scripts that should have accompanying prefetch resource hints (default: `[]`)
         */
        prefetch?: ScriptMatchingPatternPre | undefined;
        /**
         * scripts that should have a custom attribute(s) added, the attribute(s), and the value(s)
         */
        custom?: Custom | Custom[] | undefined;
    }
}
