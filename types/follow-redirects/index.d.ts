// Type definitions for follow-redirects 1.13
// Project: https://github.com/follow-redirects/follow-redirects
// Definitions by: Emily Klassen <https://github.com/forivall>
//                 Claas Ahlrichs <https://github.com/claasahl>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

import coreHttp = require('http');
import coreHttps = require('https');
import { Agent, IncomingHttpHeaders, RequestOptions } from 'http';

/**
 * Drop-in replacement for Node's http and https modules that automatically follows redirects.
 */

export as namespace followRedirects;

declare module 'http' {
    // tslint:disable-next-line no-empty-interface
    interface RequestOptions extends RedirectOptions {}

    interface IncomingMessage {
        responseUrl?: string;
        redirects: Redirect[];
    }
}

declare module 'url' {
    // tslint:disable-next-line no-empty-interface
    interface UrlWithStringQuery extends RedirectOptions {}
}

interface RedirectOptions {
    /**
     * whether redirects should be followed
     * @default true
     */
    followRedirects?: boolean;
    /**
     * sets the maximum number of allowed redirects;
     * if exceeded, an error will be emitted.
     * @default 21
     */
    maxRedirects?: number;
    /**
     * sets the maximum size of the request body; if exceeded, an error will be emitted.
     * @default 10 * 1024 * 1024
     */
    maxBodyLength?: number;
    /**
     * Optionally change the request options on redirects, or abort the request by throwing an error.
     */
    beforeRedirect?: BeforeRedirect;
    /**
     * sets the agent option per protocol, since HTTP and HTTPS use different agents.
     * Example value: `{ http: new http.Agent(), https: new https.Agent() }`
     */
    agents?: Agents;
    /**
     * whether to store the redirected response details into the redirects array on the response object.
     * @default false
     */
    trackRedirects?: boolean;
}

interface BeforeRedirect {
    /**
     * Use this function to adjust the options upon redirecting,
     * or to cancel the request by throwing an error
     */
    (options: RequestOptions, responseDetails: ResponseDetails): void;
}

interface Agents {
    http?: Agent;
    https?: Agent;
}

interface Redirect {
    url: string;
    headers: IncomingHttpHeaders;
    statusCode: number;
}

interface ResponseDetails {
    headers: coreHttp.IncomingHttpHeaders;
}

interface Protocols {
    http: typeof coreHttp;
    https: typeof coreHttps;
}

/**
 * Drop-in replacement for Node's http and https modules that automatically follows redirects.
 */
interface FollowRedirects {
    wrap(protocols: Protocols): FollowRedirects;
    /**
     * sets the maximum number of allowed redirects; if exceeded, an error will be emitted.
     * @default 10 * 1024 * 1024
     */
    maxBodyLength: number;

    /**
     * sets the maximum number of allowed redirects; if exceeded, an error will be emitted.
     * @default 21
     */
    maxRedirects: number;

    http: typeof coreHttp;

    https: typeof coreHttps;
}

declare const followRedirects: FollowRedirects;

export = followRedirects;
