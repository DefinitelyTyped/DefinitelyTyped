// Type definitions for basic-auth
// Project: https://github.com/jshttp/basic-auth
// Definitions by: Clément Bourgeois <https://github.com/moonpyk>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../express/express.d.ts" />

declare module BasicAuth {
    export interface BasicAuthResult {
        name:string;
        pass:string;
    }
}

declare module "basic-auth" {
    function auth(req: Express.Request): BasicAuth.BasicAuthResult;

    export = auth;
}
