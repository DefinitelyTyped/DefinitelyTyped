// Type definitions for basic-auth v1.1.0
// Project: https://github.com/jshttp/basic-auth
// Definitions by: Clément Bourgeois <https://github.com/moonpyk>, Vesa Poikajärvi <https://github.com/vesse>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as http from 'http';

declare function auth(req: http.IncomingMessage): auth.BasicAuthResult;

declare namespace auth {
    interface BasicAuthResult {
        name: string;
        pass: string;
    }

    /**
     * Parse basic auth to object.
     *
     * @param {string} string
     * @return {object}
     * @public
     */
    function parse(authorizationHeader: string): auth.BasicAuthResult | undefined;
}

export = auth;
