import * as express from "express";
import * as OAuth2Server from "oauth2-server";

declare namespace ExpressOAuthServer {
    interface Options extends OAuth2Server.ServerOptions {
        useErrorHandler?: boolean | undefined;
        continueMiddleware?: boolean | undefined;
    }
}

declare class ExpressOAuthServer {
    server: OAuth2Server;

    constructor(options: ExpressOAuthServer.Options);

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
