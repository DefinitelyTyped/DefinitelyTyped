import { Node, PluginCreator } from "postcss";

declare namespace advancedVariables {
    type Features = "@content" | "@each" | "@else" | "@if" | "@include" | "@import" | "@for" | "@mixin";

    interface Options {
        /**
         * Define global variables when they cannot be resolved automatically.
         * Can be a function, which should return the value when given the variable name
         * @see {@link <https://github.com/csstools/postcss-advanced-variables#variables-1>}
         */
        variables?: Record<string, string> | ((name: string, node: Node) => string | undefined) | undefined;
        /**
         * How unresolved variables, mixins, and imports should be handled
         * @default 'throw'
         * @see {@link <https://github.com/csstools/postcss-advanced-variables#unresolved>}
         */
        unresolved?: "throw" | "warn" | "ignore" | undefined;
        /**
         * Features that should be disabled. Can be a string listing the elements or an array
         * @see {@link <https://github.com/csstools/postcss-advanced-variables#disable>}
         */
        disable?: string | readonly Features[] | undefined;
        /**
         * Defines a path or paths used to look up files when they cannot be found automatically.
         * By default, imports are resolved using the
         * {@link https://jonathantneal.github.io/sass-import-resolve/ Sass Import Resolve Specification}
         * @see {@link <https://github.com/csstools/postcss-advanced-variables#importpaths>}
         */
        importPaths?: string | readonly string[] | undefined;
        /**
         * The file resolver used by imports
         * @param id The URL ID
         * @param cwd The current working directory
         * @param opts Options processed by the package
         * @returns An object containing the full path and the contents of the file
         * @see {@link <https://github.com/csstools/postcss-advanced-variables#importresolve>}
         */
        importResolve?(id: string, cwd: string, opts: Options): Promise<{ file: string; contents: string }>;
        /**
         * Determines whether an import will be inlined.
         * The value can be a function or a regular expression. When providing a function,
         * it is called with a single string argument and returns true when the import should be inlined.
         *
         * When providing a regular expression, if the `id` matches the expression,
         * the import will be inlined
         * @see {@link <https://github.com/csstools/postcss-advanced-variables#importfilter>}
         */
        importFilter?: RegExp | ((id: string) => boolean) | undefined;
        /**
         * The root directory used by imports when the current dircetory cannot be detected
         * @default process.cwd()
         * @see {@link <https://github.com/csstools/postcss-advanced-variables#importroot>}
         */
        importRoot?: string | undefined;
        /**
         * Defines a cache made available to the options object that may be used
         * by the {@link importResolve file resolver}
         * @see {@link <https://github.com/csstools/postcss-advanced-variables#importcache>}
         */
        importCache?: Record<string, unknown> | undefined;
    }
}

declare const advancedVariables: PluginCreator<advancedVariables.Options>;

export = advancedVariables;
