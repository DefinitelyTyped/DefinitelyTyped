// Type definitions for gulp-modernizr 1.0
// Project: https://github.com/doctyper/gulp-modernizr
// Definitions by: remisery <https://github.com/remisery>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import stream = require('stream');

declare function GulpModernizr(parames?: GulpModernizr.Params): stream.Transform;
declare function GulpModernizr(file?: string, parames?: GulpModernizr.Params): stream.Transform;

declare namespace GulpModernizr {
    interface Params {
        /**
         * Avoid unnecessary builds (see Caching section below)
         */
        cache?: boolean;

        /**
         * Path to the build you're using for development.
         */
        devFile?: string | false;

        /**
         * Path to save out the built file
         */
        dest?: string | false;

        /**
         * Based on default settings on http://modernizr.com/download/
         */
        options?: {
          classPrefix: string;
          enableJSClass: boolean;
          enableClasses: boolean;
        };

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
        crawl?: boolean;

        /**
         * Set to true to pass in buffers via the "files" parameter below
         */
        useBuffers?: boolean;

        /**
         * By default, this task will crawl all *.js, *.css, *.scss files.
         */
        files?: { src: string[] };

        /**
         * Have custom Modernizr tests? Add them here.
         */
        customTests?: string[];
    }
}

export = GulpModernizr;
