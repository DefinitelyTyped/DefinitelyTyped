// Type definitions for request-promise v0.4.2
// Project: https://www.npmjs.com/package/request-promise
// Definitions by: Christopher Glantschnig <https://github.com/cglantschnig/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

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

    function RequestPromiseAPI(options: RequestPromiseAPI.Options): Promise<any>;
    function RequestPromiseAPI(uri: string): Promise<request.Request>;

    module RequestPromiseAPI {
        export interface Options extends request.Options {
            simple?: boolean;
            transform?: (body: any, response: http.IncomingMessage) => number;
            resolveWithFullResponse?: boolean;
        }
    }
}
