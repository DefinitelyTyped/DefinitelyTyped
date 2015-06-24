// Type definitions for request-promise (v0.4.2)
// Definitions by: Christopher Glantschnig <https://github.com/cglantschnig>

/// <reference path="../node/node.d.ts" />
/// <reference path="../form-data/form-data.d.ts" />
/// <reference path="../request/request.d.ts" />
/// <reference path="../bluebird/bluebird.d.ts" />

declare module 'request-promise' {
    import request = require('request');
    import stream = require('stream');
    import http = require('http');
    import FormData = require('form-data');

    export = RequestPromiseAPI;

    function RequestPromiseAPI(uri: string, options?: RequestPromiseAPI.Options): Promise<any>;
    function RequestPromiseAPI(uri: string): Promise<request.Request>;
    function RequestPromiseAPI(options: RequestPromiseAPI.Options, callback?: (error: any, response: http.IncomingMessage, body: any) => void): request.Request;

    module RequestPromiseAPI {
        export interface Options extends request.Options {
            simple?: boolean;
            transform?: (body: any, response: http.IncomingMessage) => number;
            resolveWithFullResponse?: boolean;
        }
    }
}
