import * as http from "http";
import * as oauth2orize from "oauth2orize";

// from https://github.com/jaredhanson/oauth2orize/

// Create an OAuth Server
const server = oauth2orize.createServer();

// Register Grants
server.grant(oauth2orize.grant.code(
    ((client, redirectURI, user, ares, done) => {
        // var code = utils.uid(16);

        // var ac = new AuthorizationCode(code, client.id, redirectURI, user.id, ares.scope);
        // ac.save(function(err) {
        //   if (err) { return done(err); }
        //   return done(null, code);
        // });

        done; // $ExpectType IssueGrantCodeDoneFunction
    }) as oauth2orize.IssueGrantCodeFunction,
));

server.grant(oauth2orize.grant.code({
    modes: {
        query: (txn, res, params) => {
            txn.redirectURI;
            Object.entries(params);
            res.write("");
        },
    },
    scopeSeparator: " ",
}, (client, redirectURI, user, ares, done) => {}));

server.grant(oauth2orize.grant.code((client, redirectURI, user, ares, areq, locals, done) => {
    areq.scope; // $ExpectType string[]
    done; // $ExpectType IssueGrantCodeDoneFunction
}));
server.grant(oauth2orize.grant.code(
    ((client, redirectURI, user, ares, areq, done) => {
        done; // $ExpectType IssueGrantCodeDoneFunction
    }) as oauth2orize.IssueGrantCodeFunctionArity6,
));
server.grant(oauth2orize.grant.code(
    ((client, redirectURI, user, done) => {
        done; // $ExpectType IssueGrantCodeDoneFunction
    }) as oauth2orize.IssueGrantCodeFunctionArity4,
));

// Register Exchanges
function findOne(
    code: string,
    callback: (err: Error, code: {
        clientId: string;
        userId: string;
        redirectURI: string;
        scope: string;
    }) => void,
): void {}

server.exchange(oauth2orize.exchange.code(
    ((client, code, redirectURI, done) => {
        done; // $ExpectType ExchangeDoneFunction
        findOne(code, (err, code) => {
            if (err) {
                done(err);
            } else if (client.id !== code.clientId) {
                done(null, false);
            } else if (redirectURI !== code.redirectURI) {
                done(null, false);
            }

            // var token = utils.uid(256);
            // var at = new AccessToken(token, code.userId, code.clientId, code.scope);
            // at.save(function(err) {
            //   if (err) { return done(err); }
            //   return done(null, token);
            // });
        });
    }) as oauth2orize.IssueExchangeCodeFunction,
));

server.exchange(oauth2orize.exchange.code((client, code, redirectURI, body, authInfo, done) => {
    done; // $ExpectType ExchangeDoneFunction
}));
server.exchange(oauth2orize.exchange.code(
    ((client, code, redirectURI, body, done) => {
        done; // $ExpectType ExchangeDoneFunction
    }) as oauth2orize.IssueExchangeCodeFunctionArity5,
));

server.exchange(oauth2orize.exchange.authorizationCode(
    ((client, code, redirectURI, done) => {
        done; // $ExpectType ExchangeDoneFunction
    }) as oauth2orize.IssueExchangeCodeFunction,
));

// Implement Authorization Endpoint
class Clients {
    static findOne(id: string, callback: (err: Error, client?: Clients) => void): void {
        callback(new Error(), {} as Clients); // tslint:disable-line no-object-literal-type-assertion
    }
    redirectURI: string;
}

// app.get('/dialog/authorize',
// login.ensureLoggedIn(),
server.authorize(
    ((clientID, redirectURI, done) => {
        Clients.findOne(clientID, (err, client) => {
            if (err) {
                done(err);
            } else if (!client) {
                done(null, false);
            } else if (client.redirectURI !== redirectURI) {
                done(null, false);
            } else {
                done(null, client, client.redirectURI);
            }
        });
    }) as oauth2orize.ValidateFunction,
);
((req: http.IncomingMessage, res: http.ServerResponse) => {
    // res.render('dialog', { transactionID: req.oauth2.transactionID,
    //                        user: req.user, client: req.oauth2.client });
});
// );

server.authorize((clientID, redirectURI, scope, type, done) => {
    done; // $ExpectType ValidateDoneFunction
});
server.authorize(
    ((clientID, redirectURI, scope, done) => {
        done; // $ExpectType ValidateDoneFunction
    }) as oauth2orize.ValidateFunctionArity4,
);
server.authorize(
    ((areq, done) => {
        done; // $ExpectType ValidateDoneFunction
    }) as oauth2orize.ValidateFunctionArity2,
);

server.authorization((clientId, redirectURI, done) => {});

// Session Serialization
server.serializeClient((client, done) => {
    done(null, client.id);
});

server.deserializeClient((id, done) => {
    Clients.findOne(id, (err, client) => {
        if (err) {
            done(err);
        } else {
            done(null, client);
        }
    });
});

// Implement Token Endpoint
// app.post('/token',
// passport.authenticate(['basic', 'oauth2-client-password'], { session: false }),
server.token();
server.errorHandler();
// );

// Test errors
const tokenError = new oauth2orize.TokenError("Incorrect token", "invalid_grant");
const code: string = tokenError.code;
new oauth2orize.AuthorizationError("Incorrect token", "access_denied");
new oauth2orize.OAuth2Error();
