// Type definitions for gulp-modernizr 1.0
// Project: https://github.com/doctyper/gulp-modernizr
// Definitions by: remisery <https://github.com/remisery>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function GulpModernizr(fileOrParams?: string | GulpModernizr.Params, parames?: GulpModernizr.Params): any;

declare namespace GulpModernizr {
    interface Params {
        /**
         * Avoid unnecessary builds (see Caching section below)
         */
        cache?: boolean;

        /**
         * Path to the build you're using for development.
         */
        devFile?: boolean;

        /**
         * Path to save out the built file
         */
        dest?: boolean;

        /**
         * Based on default settings on http://modernizr.com/download/
         */
        options?: string[];

        /**
         * By default, source is uglified before saving
         */
        uglify?: boolean;

        /**
         * Define any tests you want to explicitly include
         */
        tests?: string[];

        /**
         * Useful for excluding any tests that this tool will match
         * e.g. you use .notification class for notification elements,
         * but don’t want the test for Notification API
         */
        excludeTests?: string[];

        /**
         * By default, will crawl your project for references to Modernizr tests
         * Set to false to disable
         */
        crawl?: true;

        /**
         * Set to true to pass in buffers via the "files" parameter below
         */
        useBuffers?: false;

        /**
         * By default, this task will crawl all *.js, *.css, *.scss files.
         */
        files?: any;

        /**
         * Have custom Modernizr tests? Add them here.
         */
        customTests?: string[];
    }
}

export = GulpModernizr;
