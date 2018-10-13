import ExpressOAuthServer = require("express-oauth-server");
import * as OAuth2Server from "oauth2-server";
import express = require("express");

const oauth2Model: OAuth2Server.AuthorizationCodeModel = {
    getClient: async (clientId: string, clientSecret: string): Promise<OAuth2Server.Client | OAuth2Server.Falsey> => {
        return undefined;
    },
    saveToken: async (token: OAuth2Server.Token, client: OAuth2Server.Client, user: OAuth2Server.User): Promise<OAuth2Server.Token> => {
        return token;
    },
    getAccessToken: async (accessToken: string): Promise<OAuth2Server.Token> => {
        return {
            accessToken,
            client: {id: "testClient", grants: ["access_token"]},
            user: {id: "testUser"}
        };
    },
    verifyScope: async (token: OAuth2Server.Token, scope: string): Promise<boolean> => {
        return true;
    },
    getAuthorizationCode: async (authorizationCode: string): Promise<OAuth2Server.AuthorizationCode> => {
        return {
            authorizationCode,
            expiresAt: new Date(),
            redirectUri: "www.test.com",
            client: {id: "testClient", grants: ["access_token"]},
            user: {id: "testUser"}
        };
    },
    saveAuthorizationCode: async (code: OAuth2Server.AuthorizationCode, client: OAuth2Server.Client, user: OAuth2Server.User): Promise<OAuth2Server.AuthorizationCode> => {
        return code;
    },
    revokeAuthorizationCode: async (code: OAuth2Server.AuthorizationCode): Promise<boolean> => {
        return true;
    }
};

const serverOptions: OAuth2Server.ServerOptions = {
    model: oauth2Model,
};
const expressOAuthServer: ExpressOAuthServer = new ExpressOAuthServer(serverOptions);

let oAuthServer: OAuth2Server;
let resultingTokenMiddleware: (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction,
) => Promise<OAuth2Server.Token>;
let resultingAuthorizationCodeMiddleware: (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction,
) => Promise<OAuth2Server.AuthorizationCode>;

oAuthServer = expressOAuthServer.server;
resultingTokenMiddleware = expressOAuthServer.authenticate();
resultingTokenMiddleware = expressOAuthServer.token();
resultingAuthorizationCodeMiddleware = expressOAuthServer.authorize();

// Real-life example

const expressApp = express();

expressApp.all(
    "/path",
    expressOAuthServer.authenticate(),
    (req: express.Request, res: express.Response, next: express.NextFunction) => {
        res.json({message: "Secure data"});
    },
);

expressApp.get(
    "/profile",
    expressOAuthServer.authenticate({scope: "profile"}),
    (req: express.Request & {user?: OAuth2Server.Token}, res: express.Response, next: express.NextFunction) => {
        res.json({
            profile: req.user
        });
    },
);

expressApp.listen(1234);
