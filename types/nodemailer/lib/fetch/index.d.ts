/// <reference types="node" />

type ms = number;

import _Cookies = require('./cookies');

import { Writable } from 'stream';
import * as tls from 'tls';

declare namespace fetch {
    type Cookies = _Cookies;

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
        tls?: tls.TlsServerOptions;
        timeout?: ms;
        allowErrorResponse?: boolean;
    }
}

declare function fetch(url: string, options?: fetch.Options): Writable;

export = fetch;
