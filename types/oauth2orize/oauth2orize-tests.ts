import * as oauth2orize from 'oauth2orize';
import * as http from 'http';

// from https://github.com/jaredhanson/oauth2orize/

// Create an OAuth Server
const server = oauth2orize.createServer();

// Register Grants
server.grant(oauth2orize.grant.code((client, redirectURI, user, ares, done) => {
  // var code = utils.uid(16);

  // var ac = new AuthorizationCode(code, client.id, redirectURI, user.id, ares.scope);
  // ac.save(function(err) {
  //   if (err) { return done(err); }
  //   return done(null, code);
  // });
}));

// Register Exchanges
function findOne(code: string, callback: (err: Error, code: {
  clientId: string, userId: string, redirectURI: string, scope: string
}) => void): void {}

server.exchange(oauth2orize.exchange.code((client, code, redirectURI, done) => {
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
}));

// Implement Authorization Endpoint
class Clients {
  static findOne(id: string, callback: (err: Error, client?: Clients) => void): void {
    callback(new Error(), {} as Clients); // tslint:disable-line no-object-literal-type-assertion
  }
  redirectURI: string;
}

// app.get('/dialog/authorize',
  // login.ensureLoggedIn(),
  server.authorize((clientID, redirectURI, done) => {
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
  });
  (req: http.IncomingMessage, res: http.ServerResponse) => {
    // res.render('dialog', { transactionID: req.oauth2.transactionID,
    //                        user: req.user, client: req.oauth2.client });
  };
// );

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
const tokenError = new oauth2orize.TokenError('Incorrect token', 'invalid_grant');
const code: string = tokenError.code;
new oauth2orize.AuthorizationError('Incorrect token', 'access_denied');
new oauth2orize.OAuth2Error();
