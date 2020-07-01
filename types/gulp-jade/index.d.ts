// Type definitions for gulp-jade
// Project: https://github.com/phated/gulp-jade
// Definitions by: berwyn <https://github.com/berwyn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped



declare function GulpJade(params?: GulpJade.Params): any;

declare namespace GulpJade {
    interface Params {
        /*******
        * JADE API OPTIONS
        *******/

        /**
        * If the doctype is not specified as part of the
        * template, you can specify it here. It is sometimes
        * useful to get self-closing tags and remove mirroring
        * of boolean attributes.
        */
        doctype?: string;

        /**
        * Adds whitespace to the resulting html to make it
        * easier for a human to read using '  ' as indentation.
        * If a string is specified, that will be used as
        * indentation instead (e.g. '\t').
        */
        pretty?: boolean | string;

        /**
        * Use a self namespace to hold the locals (false by default)
        */
        self?: boolean;

        /**
        * If set to true, the tokens and function body is logged
        * to stdout
        */
        debug?: boolean;

        /**
        * If set to true, the function source will be included in the
        * compiled template for better error messages (sometimes useful
        * in development). It is enabled by default unless used with
        * express in production mode.
        */
        compileDebug?: boolean;

        /**
        * If set to true, compiled functions are cached. filename
        * must be set as the cache key.
        */
        cache?: boolean;

        /*******
        * GULP-JADE OPTIONS
        *******/

        /**
        * Used to set a version of jade other than this library's
        * dependency, or to customise filters.
        */
        jade?: any;

        /**
        * Compile to JS instead of HTML.
        */
        client?: boolean;

        /**
        * Locals to be used while parsing jade files. Takes
        * precedence over data.
        */
        locals?: any;

        /**
        * Data to be used while parsing jade files. Has lower
        * precedence than locals.
        */
        data?: any;
    }
}

export = GulpJade;
