// Type definitions for koa-ejs 4.2
// Project: https://github.com/koajs/ejs
// Definitions by: Matt B <https://github.com/mattb-prg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as Koa from "koa";

/**
 *  Adds render method to the app context.
 */
declare function koaEjs(app: Koa, settings: koaEjs.Settings): void;

declare namespace koaEjs {
    interface Settings {
        /** View root directory */
        root: string;
        /** Global layout file, default is layout, set false to disable layout. */
        layout?: string | false;
        /** Filename extension for the views. Defaults to html. */
        viewExt?: string;
        /** Cache compiled templates */
        cache?: boolean;
        /** Log debug messages. */
        debug?: boolean;
        /** Character to use with angle brackets for open / close (default %). */
        delimiter?: string;
        /** When true, EJS will use an async function for rendering. Depends on async/await support in the JS runtime */
        async?: boolean;
    }

    /**
     * The ejs API.
     */
    const ejs: any;
}

export = koaEjs;
