/* =================== USAGE ===================

    import responseTime = require('response-time');
    app.use(responseTime());

 =============================================== */

/// <reference types="node" />

import http = require("http");
import express = require("express");

export = responseTime;

/**
 * Response time header for node.js
 * Returns middleware that adds a X-Response-Time header to responses.
 */
declare function responseTime(
    options?: responseTime.ResponseTimeOptions,
): (request: http.IncomingMessage, response: http.ServerResponse, callback: (err: any) => void) => any;
declare function responseTime(
    fn: responseTime.ResponseTimeFunction,
): (request: http.IncomingMessage, response: http.ServerResponse, callback: (err: any) => void) => any;
declare function responseTime(
    fn: (request: express.Request, response: express.Response, time: number) => any,
): express.RequestHandler;

declare namespace responseTime {
    export interface ResponseTimeOptions {
        digits?: number | undefined;
        header?: string | undefined;
        suffix?: boolean | undefined;
    }

    export interface ResponseTimeFunction {
        (request: http.IncomingMessage, response: http.ServerResponse, time: number): any;
    }
}
