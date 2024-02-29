import * as express from "express";
import * as sass from "node-sass";

interface Options extends sass.Options {
    /** */
    src: string;
    /** */
    dest?: string | undefined;
    /** */
    root?: string | undefined;
    /** */
    prefix?: string | undefined;
    /** */
    force?: boolean | undefined;
    /** */
    debug?: boolean | undefined;
    /** */
    indentedSyntax?: boolean | undefined;
    /** */
    response?: boolean | undefined;
    /** */
    error?: (() => void) | undefined;
}

/** */

declare function nodeSassMiddleware(options: Options): express.RequestHandler;

/** */
declare namespace nodeSassMiddleware {}

/** */
export = nodeSassMiddleware;
