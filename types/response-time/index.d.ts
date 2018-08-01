// Type definitions for response-time 2.3.2
// Project: https://github.com/expressjs/response-time
// Definitions by: Uros Smolnik <https://github.com/urossmolnik>, TonyYang <https://github.com/TonyPythoneer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2


/* =================== USAGE ===================

    import responseTime = require('response-time');
    app.use(responseTime());

 =============================================== */


/// <reference types="node" />


import http = require("http");


export = responseTime;

/**
 * Response time header for node.js
 * Returns middleware that adds a X-Response-Time header to responses.
 */
declare function responseTime(options?: responseTime.ResponseTimeOptions):
    (request: http.IncomingMessage, response: http.ServerResponse, callback: (err: any) => void) => any;
declare function responseTime(fn: responseTime.ResponseTimeFunction):
    (request: http.IncomingMessage, response: http.ServerResponse, callback: (err: any) => void) => any;


declare namespace responseTime {
    export interface ResponseTimeOptions {
        digits?: number;
        header?: string;
        suffix?: boolean;
    }

    export interface ResponseTimeFunction {
        (request: http.IncomingMessage, response: http.ServerResponse, time: number ): any;
    }
}
