import * as express from "express";
import * as OAuth2Server from "oauth2-server";

const oauth2Model: OAuth2Server.AuthorizationCodeModel = {
        getClient: async (clientId: string, clientSecret: string): Promise<OAuth2Server.Client | OAuth2Server.Falsey> => {
            return undefined;
        },
        saveToken: async (token: OAuth2Server.Token, client: OAuth2Server.Client, user: OAuth2Server.User): Promise<OAuth2Server.Token> => {
            return token;
        },
        getAccessToken: async (accessToken: string): Promise<OAuth2Server.Token> => {
            return {
                accessToken: accessToken,
                client: {id: "testClient", grants: ["access_token"]},
                user: {id: "testUser"}
            };
        },
        verifyScope: async (token: OAuth2Server.Token, scope: string): Promise<boolean> => {
            return true;
        },
        getAuthorizationCode: async (authorizationCode: string): Promise<OAuth2Server.AuthorizationCode> => {
            return {
                authorizationCode: authorizationCode,
                expiresAt: new Date(),
                redirectUri: "www.test.com",
                client: {id: "testClient", grants: ["access_token"]},
                user: {id: "testUser"}
            }
        },
        saveAuthorizationCode: async (code: OAuth2Server.AuthorizationCode, client: OAuth2Server.Client, user: OAuth2Server.User): Promise<OAuth2Server.AuthorizationCode> => {
            return code;
        },
        revokeAuthorizationCode: async (code: OAuth2Server.AuthorizationCode): Promise<boolean> => {
            return true;
        }
}

var oauth2Server = new OAuth2Server({
    model: oauth2Model
});

// Authenticate user with supplied bearer token
const authenticate = (options?: {}) => {
    var options: undefined | {} = options || {};
    return async function(req: express.Request & {user: OAuth2Server.Token}, res: express.Response, next: express.NextFunction) {
        var request = new OAuth2Server.Request({
            headers: {authorization: req.headers.authorization},
            method: req.method,
            query: req.query,
            body: req.body
        });
        var response = new OAuth2Server.Response(res);

        try {
            // Test async method of accessing oauth2Server
            const token = await oauth2Server.authenticate(request, response, options);
            req.user = token;
            next();
        }
        catch (err) {
            res.status(err.code || 500).json(err);
        }
    }
}

var app = express();
app.all('/oauth2/token', (req: express.Request, res: express.Response, next:express.NextFunction) => {
    var request: OAuth2Server.Request = new OAuth2Server.Request(req);
    var response: OAuth2Server.Response = new OAuth2Server.Response(res);

    oauth2Server.token(request,response)
        .then(function(token: OAuth2Server.Token) {
            res.json(token);
        }).catch(function(err: any){
            res.status(err.code || 500).json(err);
        });
});

app.post('/oauth2/authorize', (req, res) => {
    var request: OAuth2Server.Request = new OAuth2Server.Request(req);
    var response: OAuth2Server.Response = new OAuth2Server.Response(res);

    oauth2Server.authorize(request, response)
        .then(function(success: OAuth2Server.AuthorizationCode) {
            res.json(success)
        }).catch(function(err: any){
            res.status(err.code || 500).json(err);
        });
});

app.get('/secure', authenticate(), (req: express.Request & {user: OAuth2Server.Token}, res: express.Response, next: express.NextFunction) => {
    res.json({message: 'Secure data'})
});

app.get('/profile', authenticate({scope:'profile'}), (req: express.Request & {user: OAuth2Server.Token}, res: express.Response, next: express.NextFunction) => {
    res.json({
        profile: req.user
    })
});

app.listen(3000);