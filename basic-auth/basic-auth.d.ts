// Type definitions for basic-auth
// Project: https://github.com/jshttp/basic-auth
// Definitions by: Clément Bourgeois <https://github.com/moonpyk>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../express/express.d.ts" />

declare module "basic-auth" {
    function auth(req: Express.Request): auth.BasicAuthResult;

    namespace auth {
        interface BasicAuthResult {
            name: string;
            pass: string;
        }
    }

    export = auth;
}
