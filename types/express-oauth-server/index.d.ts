// Type definitions for express-oauth-server 2.0
// Project: https://github.com/oauthjs/express-oauth-server#readme, https://github.com/seegno/express-oauth-server
// Definitions by: Arne Schubert <https://github.com/atd-schubert>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as express from 'express';
import * as OAuth2Server from 'oauth2-server';

declare class ExpressOAuthServer {
    server: OAuth2Server;

    constructor(options: OAuth2Server.ServerOptions);

    authenticate(options?: OAuth2Server.AuthenticateOptions): (
        request: express.Request,
        response: express.Response,
        next: express.NextFunction,
    ) => Promise<OAuth2Server.Token>;

    authorize(options?: OAuth2Server.AuthorizeOptions): (
        request: express.Request,
        response: express.Response,
        next: express.NextFunction,
    ) => Promise<OAuth2Server.AuthorizationCode>;

    token(options?: OAuth2Server.TokenOptions): (
        request: express.Request,
        response: express.Response,
        next: express.NextFunction,
    ) => Promise<OAuth2Server.Token>;
}

export = ExpressOAuthServer;
