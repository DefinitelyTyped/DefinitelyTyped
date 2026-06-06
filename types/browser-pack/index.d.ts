/// <reference types="node" />

/**
 * pack node-style source files from a json stream into a browser bundle
 */
declare namespace browserPack {
    interface Options {
        /**
         * Whether the bundle should include require= (or the opts.externalRequireName) so that
         * require() is available outside the bundle
         */
        hasExports?: boolean | undefined;

        /**
         * A string to use in place of 'require' if opts.hasExports is specified, default is 'require'
         */
        externalRequireName?: string | undefined;

        /**
         * Specify a custom prelude, but know what you're doing first. See the prelude.js file in
         * this repo for the default prelude. If you specify a custom prelude, you must also specify
         * a valid opts.preludePath to the prelude source file for sourcemaps to work
         */
        prelude?: string | undefined;

        /**
         * prelude.js path if a custom opts.prelude is specified
         */
        preludePath?: string | undefined;

        /**
         * Used if opts.preludePath is undefined, this is used to resolve the prelude.js file location, default: 'process.cwd()'
         */
        basedir?: string | undefined;

        /**
         * If given, the writable end of the stream will expect objects to be written to
         * it instead of expecting a stream of json text it will need to parse, default false
         */
        raw?: boolean | undefined;

        /**
         * External string name to use for UMD, if not provided, UMD declaration is not wrapped around output
         */
        standalone?: string | undefined;

        /**
         * Sets the internal module name to export for standalone
         */
        standaloneModule?: string | undefined;

        /**
         * If given and source maps are computed, the opts.sourceMapPrefix string will be used instead of default: '//#'
         */
        sourceMapPrefix?: string | undefined;

        /**
         * If given and source maps are computed, the root for the output source map will be defined. (default is no root)
         */
        sourceRoot?: string | undefined;
    }
}

/**
 * Pack node-style source files from a json stream into a browser bundle.
 * Source objects are written to browser-pack using 'write(row)'. browser-pack uses these properties of each row:
 *  - 'id' - A unique ID for this module.
 *  - 'deps' - An object mapping 'require()' argument strings to dependency row IDs, used for resolution at runtime.
 *  - 'entry' - When true, this module will be executed when the bundle loads. Otherwise, it will only be executed once some other module 'require()'s it.
 *  - 'order' - When 'row.entry' is true, this number indicates the order in which different entry modules are executed.
 *  - 'source' - The contents of the module.
 *  - 'nomap' - When true, a source map is not generated for this module.
 *  - 'sourceFile' - The file name to use for this module in the source map.
 */
declare function browserPack(opts?: browserPack.Options): NodeJS.ReadWriteStream;
export = browserPack;
export as namespace browserPack;
