// Type definitions for connect-slashes
// Project: https://github.com/avinoamr/connect-slashes
// Definitions by: Sam Herrmann <https://github.com/samherrmann>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/* =================== USAGE ===================

    import express = require('express');
    import slashes = require('connect-slashes');

    var app = express();
    app.use(slashes());
 =============================================== */

/// <reference path="../express/express.d.ts" />


declare module "connect-slashes" {
    import express = require('express');

    /**
     * @see https://github.com/avinoamr/connect-slashes#usage
     */
    function slashes (addTrailingSlashes?: boolean, options?: slashes.Options): express.RequestHandler;

    module slashes {

        /**
         * Additional settings
         * @see https://github.com/avinoamr/connect-slashes#additional-settings
         */
        interface Options {
            base?: string;
            code?: number;
            headers?: {[field: string]: string};
        }
    }

    export = slashes;
}
