// Type definitions for connect-slashes
// Project: https://github.com/avinoamr/connect-slashes
// Definitions by: Sam Herrmann <https://github.com/samherrmann>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/* =================== USAGE ===================

    import express = require('express');
    import slashes = require('connect-slashes');

    var app = express();
    app.use(slashes());
 =============================================== */





import express = require('express');

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
        base?: string;
        code?: number;
        headers?: { [field: string]: string };
    }
}

export = slashes;
