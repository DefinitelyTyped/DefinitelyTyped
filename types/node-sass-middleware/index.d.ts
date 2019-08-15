// Type definitions for node-sass-middleware
// Project: https://github.com/sass/node-sass-middleware
// Definitions by: Pascal Garber <http://www.jumplink.eu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7



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

declare function nodeSassMiddleware(options: Options): express.RequestHandler;

/**
 * 
 */
declare namespace nodeSassMiddleware { }

/**
 * 
 */
export = nodeSassMiddleware;
