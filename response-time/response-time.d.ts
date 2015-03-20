// Type definitions for response-time 2.2.0
// Project: https://github.com/expressjs/response-time
// Definitions by: Uros Smolnik <https://github.com/urossmolnik/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/* =================== USAGE ===================

    import responseTime = require('response-time');
    app.use(responseTime());

 =============================================== */

/// <reference path="../express/express.d.ts" />

declare module "response-time" {
    import express = require('express');

    /**
     * Response time header for node.js
     * Returns middleware that adds a X-Response-Time header to responses.
     */
    function responseTime(options?: {
        /**
        * The fixed number of digits to include in the output, which is always in milliseconds, defaults to 3 (ex: 2.300ms).
        */
        digits?: number;
        /**
         * The name of the header to set, defaults to X-Response-Time.
         */
        header?: string;
        /**
         * Boolean to indicate if units of measurement suffix should be added to the output, defaults to true (ex: 2.300ms vs 2.300).
         */
        suffix?: boolean;
    }): express.RequestHandler;
    
    export = responseTime;
}