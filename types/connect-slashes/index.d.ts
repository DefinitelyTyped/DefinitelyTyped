/* =================== USAGE ===================

    import express = require('express');
    import slashes = require('connect-slashes');

    var app = express();
    app.use(slashes());
 =============================================== */

import express = require("express");

/**
 * @see https://github.com/avinoamr/connect-slashes#usage
 */
declare function slashes(addTrailingSlashes?: boolean, options?: slashes.Options): express.RequestHandler;

declare namespace slashes {
    /**
     * Additional settings
     * @see https://github.com/avinoamr/connect-slashes#additional-settings
     */
    interface Options {
        base?: string | undefined;
        code?: number | undefined;
        headers?: { [field: string]: string } | undefined;
    }
}

export = slashes;
