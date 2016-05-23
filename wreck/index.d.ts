// Type definitions for wreck 7.0.0
// Project: https://github.com/hapijs/wreck
// Definitions by: Marcin Porębski <http://github.com/marcinporebski>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />


import http = require('http');
import stream = require('stream');


interface WreckObject {
    defaults: (options: any) => WreckObject;

    request: (method: string, uri: string, options: any, callback?: (err: any, response: http.IncomingMessage) => void) => http.ClientRequest;

    read: (response: http.IncomingMessage, options: any, callback: (err: any, payload: any) => void) => void;

    get: (uri: string, options: any, callback: (err: any, response: http.IncomingMessage, payload: any) => void) => http.ClientRequest;
    post: (uri: string, options: any, callback: (err: any, response: http.IncomingMessage, payload: any) => void) => http.ClientRequest;
    patch: (uri: string, options: any, callback: (err: any, response: http.IncomingMessage, payload: any) => void) => http.ClientRequest;
    put: (uri: string, options: any, callback: (err: any, response: http.IncomingMessage, payload: any) => void) => http.ClientRequest;
    delete: (uri: string, options: any, callback: (err: any, response: http.IncomingMessage, payload: any) => void) => http.ClientRequest;

    toReadableStream: (payload: any, encoding?: string) => stream.Readable;

    parseCacheControl: (field: string) => any;

    agents: {
        http: http.Agent,
        https: http.Agent
    };
}

declare var wreck: WreckObject;

export = wreck;
