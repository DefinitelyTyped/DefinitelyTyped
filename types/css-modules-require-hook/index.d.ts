declare module "css-modules-require-hook" {
    interface Options {
        /** Helps you to invalidate cache of all require calls. */
        devMode?: boolean | undefined;
        /** Attach the require hook to additional file extensions. */
        extensions?: string | string[] | undefined;
        /** Provides possibility to exclude particular files from processing. */
        ignore?: string | RegExp | ((filepath: string) => boolean) | undefined;
        /** In rare cases you may want to precompile styles, before they will be passed to the PostCSS pipeline. */
        preprocessCss?: Function | undefined;
        /** In rare cases you may want to get compiled styles in runtime, so providing this option helps. */
        processCss?: Function | undefined;
        /** Provides possibility to pass custom options to the LazyResult instance. */
        processorOpts?: Object | undefined;
        /** Camelizes exported class names. */
        camelCase?: boolean | undefined;
        /** Appends custom plugins to the end of the PostCSS pipeline. */
        append?: any[] | undefined;
        /** Prepends custom plugins to the beginning of the PostCSS pipeline. */
        prepend?: any[] | undefined;
        /** Provides the full list of PostCSS plugins to the pipeline. */
        use?: any[] | undefined;
        /** Short alias for the postcss-modules-extract-imports plugin's createImportedName option. */
        createImportedName?: Function | undefined;
        /** Short alias for the postcss-modules-scope plugin's option. */
        generateScopedName?: string | Function | undefined;
        /** Short alias for the generic-names helper option. */
        hashPrefix?: string | undefined;
        /** Short alias for the postcss-modules-local-by-default plugin's option. */
        mode?: string | undefined;
        /** Provides absolute path to the project directory. */
        rootDir?: string | undefined;
    }

    var requireHook: (options?: Options) => void;

    export = requireHook;
}
