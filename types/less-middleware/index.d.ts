/* =================== USAGE ===================

    import lessMiddleware = require('less-middleware');
    app.use(lessMiddleware(source, options));

 =============================================== */

import express = require("express");

/**
 * Middleware created to allow processing of Less files for Connect JS framework
 * and by extension the Express JS framework
 */
declare function lessMiddleware(source: string, options?: {
    /**
     * Show more verbose logging?
     */
    debug?: boolean | undefined;

    /**
     * Destination directory to output the compiled .css files.
     */
    dest?: string | undefined;

    /**
     * Always re-compile less files on each request.
     */
    force?: boolean | undefined;

    /**
     * Only recompile once after each server restart.
     * Useful for reducing disk i/o on production.
     */
    once?: boolean | undefined;

    /**
     * Common root of the source and destination.
     * It is prepended to both the source and destination before being used.
     */
    pathRoot?: string | undefined;

    /**
     * Object containing functions relevant to preprocessing data.
     */
    postprocess?: {
        /**
         * Function that modifies the compiled css output before being stored.
         */
        css?(css: string, req: express.Request): string;
    } | undefined;

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
    } | undefined;

    /**
     * Options for the less render.
     */
    render?: {
        compress?: string | boolean | undefined;
        yuicompress?: boolean | undefined;
        paths?: string[] | undefined;
    } | undefined;

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
    cacheFile?: string | undefined;
}): express.RequestHandler;

export = lessMiddleware;
