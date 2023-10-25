/// <reference types="node" />

import * as http from "http";
import * as http2 from "http2";

// See https://github.com/jshttp/basic-auth/blob/v1.1.0/index.js#L49
declare function auth(req: http.IncomingMessage | http2.Http2ServerRequest): auth.BasicAuthResult | undefined;

declare namespace auth {
    interface BasicAuthResult {
        name: string;
        pass: string;
    }

    /**
     * Parse basic auth to object.
     */
    function parse(authorizationHeader: string): BasicAuthResult | undefined;
}

export = auth;
