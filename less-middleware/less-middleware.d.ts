// Type definitions for less-middleware 2.0.1
// Project: https://github.com/emberfeather/less.js-middleware
// Definitions by: Federico Bond <https://github.com/federicobond/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/* =================== USAGE ===================

    import lessMiddleware = require('less-middleware');
    app.use(lessMiddleware(source, options));

 =============================================== */

/// <reference path="../express/express.d.ts" />

declare module "less-middleware" {
    import express = require('express');

    /**
     * Middleware created to allow processing of Less files for Connect JS framework
     * and by extension the Express JS framework
     */
    function lessMiddleware(source: string, options?: {
        /**
        * Show more verbose logging?
        */
        debug?: boolean;

        /**
        * Destination directory to output the compiled .css files.
        */
        dest?: string;

        /**
         * Always re-compile less files on each request.
         */
        force?: boolean;

        /**
         * Only recompile once after each server restart.
         * Useful for reducing disk i/o on production.
         */
        once?: boolean;

        /**
         * Common root of the source and destination.
         * It is prepended to both the source and destination before being used.
         */
        pathRoot?: string;

        /**
         * Object containing functions relevant to preprocessing data.
         */
        postprocess?: {

          /**
           * Function that modifies the compiled css output before being stored.
           */
          css?(css: string, req: express.Request): string;
        };

        /**
         * Object containing functions relevant to preprocessing data.
         */
        preprocess?: {

            /**
             * Function that modifies the raw less output before being parsed and compiled.
             */
            less?(css: string, req: express.Request): string;

            /**
             * Function that modifies the less pathname before being loaded from the filesystem.
             */
            path?(pathname: string, req: express.Request): string;

            /**
             * Function that modifies the import paths used by the less parser per request.
             */
            importPaths?(paths: string[], req: express.Request): string[];
        };

        /**
         * Options for the less render.
         */
        render?: {

            compress?: string;
            yuicompress?: boolean;
            paths?: string[];
        };

        /**
         * Function that is in charge of storing the css in the filesystem.
         */
        storeCss?(pathname: string, css: string, req: express.Request, next: Function): void;

        /**
         * Path to a JSON file that will be used to cache less data across server restarts.
         * This can greatly speed up initial load time after a server restart - if the less
         * files haven't changed and the css files still exist, specifying this option will
         * mean that the less files don't need to be recompiled after a server restart.  
         */
        cacheFile?: string;

    }): express.RequestHandler;

    export = lessMiddleware;
}
