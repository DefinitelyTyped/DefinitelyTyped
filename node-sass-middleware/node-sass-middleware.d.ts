// Type definitions for node-sass-middleware
// Project: https://github.com/sass/node-sass-middleware
// Definitions by: Pascal Garber <http://www.jumplink.eu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../express/express.d.ts" />
/// <reference path="../node-sass/node-sass.d.ts" />

declare module "node-sass-middleware" {

    import * as sass from "node-sass";
    import * as express from "express";

    interface Options extends sass.Options {
        /**
         * 
         */
        src: string;
        /**
         * 
         */
        dest?: string;
        /**
         * 
         */
        root?: string;
        /**
         * 
         */
        prefix?: string;
        /**
         * 
         */
        force?: boolean;
        /**
         * 
         */
        debug?: boolean;
        /**
         * 
         */
        indentedSyntax?: boolean;
        /**
         * 
         */
        response?: boolean;
        /**
         * 
         */
        error?: () => void;
    }

    /**
     * 
     *
     */

    function nodeSassMiddleware(options: Options): express.RequestHandler;

    /**
     * 
     */
    namespace nodeSassMiddleware { }

    /**
     * 
     */
    export = nodeSassMiddleware;
}