// Type definitions for oauth-shim 1.1
// Project: https://github.com/MrSwitch/node-oauth-shim
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as express from "express";

export = oauthShim;

declare const oauthShim: oauthShim.Handler;

declare namespace oauthShim {
    interface Handler extends express.RequestHandler {
        interpret: express.RequestHandler;
        proxy: express.RequestHandler;
        redirect: express.RequestHandler;
        unhandled: express.RequestHandler;

        credentials: {
            get(query: any, cb: (success: false | object) => void): void;
        };

        init(configs: Config[]): void;
    }

    interface Request extends express.Request {
        oauthshim?: {
            options?: {
                [key: string]: any;
                path?: string;
            };
            redirect?: string;
            data?: {
                [key: string]: any;
                access_token?: string;
            };
        };
    }

    interface Config {
        client_id: string;
        client_secret: string;
        grant_url: string;
        domain: string;
    }
}
