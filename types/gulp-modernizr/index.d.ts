/// <reference types="node" />

import stream = require("stream");

declare function GulpModernizr(parames?: GulpModernizr.Params): stream.Transform;
declare function GulpModernizr(file?: string, parames?: GulpModernizr.Params): stream.Transform;

declare namespace GulpModernizr {
    interface Params {
        /**
         * Avoid unnecessary builds (see Caching section below)
         */
        cache?: boolean | undefined;

        /**
         * Path to the build you're using for development.
         */
        devFile?: string | false | undefined;

        /**
         * Path to save out the built file
         */
        dest?: string | false | undefined;

        /**
         * Based on default settings on http://modernizr.com/download/
         */
        options?: {
            classPrefix: string;
            enableJSClass: boolean;
            enableClasses: boolean;
        } | undefined;

        /**
         * By default, source is uglified before saving
         */
        uglify?: boolean | undefined;

        /**
         * Define any tests you want to explicitly include
         */
        tests?: string[] | undefined;

        /**
         * Useful for excluding any tests that this tool will match
         * e.g. you use .notification class for notification elements,
         * but don’t want the test for Notification API
         */
        excludeTests?: string[] | undefined;

        /**
         * By default, will crawl your project for references to Modernizr tests
         * Set to false to disable
         */
        crawl?: boolean | undefined;

        /**
         * Set to true to pass in buffers via the "files" parameter below
         */
        useBuffers?: boolean | undefined;

        /**
         * By default, this task will crawl all *.js, *.css, *.scss files.
         */
        files?: { src: string[] } | undefined;

        /**
         * Have custom Modernizr tests? Add them here.
         */
        customTests?: string[] | undefined;
    }
}

export = GulpModernizr;
