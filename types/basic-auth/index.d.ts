// Type definitions for basic-auth 1.1
// Project: https://github.com/jshttp/basic-auth
// Definitions by: Clément Bourgeois <https://github.com/moonpyk>, Vesa Poikajärvi <https://github.com/vesse>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as http from 'http';

// See https://github.com/jshttp/basic-auth/blob/v1.1.0/index.js#L49
declare function auth(req: http.IncomingMessage): auth.BasicAuthResult | undefined;

declare namespace auth {
    interface BasicAuthResult {
        name: string;
        pass: string;
    }

    /**
     * Parse basic auth to object.
     */
    function parse(authorizationHeader: string): auth.BasicAuthResult | undefined;
}

export = auth;
