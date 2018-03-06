/// <reference types="node" />

type ms = number;

import _Cookies = require('./cookies');

import * as http from 'http';
import { Writable } from 'stream';
import * as tls from 'tls';

declare namespace fetch {
    type Cookies = _Cookies;

    interface WritableResponse extends Writable {
        statusCode: number;
        headers: http.IncomingHttpHeaders;
    }

    interface Options {
        fetchRes?: Writable;
        cookies?: Cookies;
        cookie?: string;
        redirects?: number;
        maxRedirects?: number;
        method?: string;
        headers?: { [key: string]: string };
        userAgent?: string;
        body?: Buffer | string | { [key: string]: string };
        contentType?: string | false;
        tls?: tls.TlsOptions;
        timeout?: ms;
        allowErrorResponse?: boolean;
    }
}

declare function fetch(url: string, options?: fetch.Options): fetch.WritableResponse;

export = fetch;
