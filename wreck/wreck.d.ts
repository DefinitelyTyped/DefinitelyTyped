// Type definitions for wreck 7.0.0
// Project: https://github.com/hapijs/wreck
// Definitions by: Marcin Porębski <http://github.com/marcinporebski>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module Wreck
{
    import http = require('http');
    import stream = require('stream');


    interface IWreckObject
    {
        defaults: (options: any) => IWreckObject;

        request: (method: string, uri: string, options: any = null, callback: (err: any, response: http.IncomingMessage) => void = null) => http.ClientRequest;

        read: (response: http.IncomingMessage, options: any, callback: (err: any, payload: any) => void) => void;

        get: (uri: string, options: any = null, callback: (err: any, response: http.IncomingMessage, payload: any) => void = null) => http.ClientRequest;
        post: (uri: string, options: any = null, callback: (err: any, response: http.IncomingMessage, payload: any) => void = null) => http.ClientRequest;
        patch: (uri: string, options: any = null, callback: (err: any, response: http.IncomingMessage, payload: any) => void = null) => http.ClientRequest;
        put: (uri: string, options: any = null, callback: (err: any, response: http.IncomingMessage, payload: any) => void = null) => http.ClientRequest;
        delete: (uri: string, options: any = null, callback: (err: any, response: http.IncomingMessage, payload: any) => void = null) => http.ClientRequest;

        toReadableStream: (payload: any, encoding: string = null) => stream.Readable;

        parseCacheControl: (field: string) => any;

        agents: {
            http: http.Agent,
            https: http.Agent
        };
    }

}

declare module "wreck"
{
    var wreck: Wreck.IWreckObject;

    export = wreck;
}
