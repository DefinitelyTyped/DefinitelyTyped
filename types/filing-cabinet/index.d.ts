declare namespace cabinet {
    interface Options {
        /** the dependency path */
        partial: string;
        /** the path to all files */
        directory: string;
        /** the path to the file containing the partial */
        filename: string;
        /**
         * the parsed AST for filename
         * Useful optimization for avoiding a parse of filename
         */
        ast?: any;
        /**
         * `requirejs` config for resolving aliased JavaScript modules
         */
        config?: any;
        /**
         * `webpack` config for resolving aliased JavaScript modules
         */
        webpackConfig?: any;
        /**
         * config for resolving entry file for `node_modules`.
         * This value overrides the main attribute in the `package.json` file;
         * used in conjunction with the `packageFilter` of the resolve package
         */
        nodeModulesConfig?: any;
        /**
         * Path to a typescript configuration.
         * Could also be an object representing a pre-parsed typescript config
         */
        tsConfig?: string | object | undefined;
        /**
         * For typescript files, whether to prefer *.js over *.d.ts
         */
        noTypeDefinitions?: boolean | undefined;
    }

    type Resolver = (partial: string, filename: string, directory: string, config?: any) => void;

    /**
     * Register a custom lookup resolver for a file extension
     * If a given extension does not have a registered resolver,
     * cabinet will use a generic file resolver which is basically `require('path').join`
     * with a bit of extension defaulting logic
     * @param extension the extension of the file that should use the custom resolver (ex: '.py', '.php')
     * @param resolver  A resolver of partial paths
     */
    function register(extension: string, resolver: Resolver): void;
}

declare function cabinet(options: cabinet.Options): string;

export = cabinet;
