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
class AuthorizationCode {
  static findOne(code: string, callback: (err: Error, code: {
    clientId: string, userId: string, redirectURI: string, scope: string
  }) => void): void {}
}

server.exchange(oauth2orize.exchange.code((client, code, redirectURI, done) => {
  AuthorizationCode.findOne(code, (err, code) => {
    if (err) { return done(err); }
    if (client.id !== code.clientId) { return done(null, false); }
    if (redirectURI !== code.redirectURI) { return done(null, false); }

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
    callback(new Error(), {} as Clients);
  }
  redirectURI: string;
}

// app.get('/dialog/authorize',
  // login.ensureLoggedIn(),
  server.authorize((clientID, redirectURI, done) => {
    Clients.findOne(clientID, (err, client) => {
      if (err) { return done(err); }
      if (!client) { return done(null, false); }
      if (client.redirectURI != redirectURI) { return done(null, false); }
      return done(null, client, client.redirectURI);
    });
  }),
  (req: http.IncomingMessage, res: http.ServerResponse) => {
    // res.render('dialog', { transactionID: req.oauth2.transactionID,
    //                        user: req.user, client: req.oauth2.client });
  }
// );

// Session Serialization
server.serializeClient((client, done) => {
  return done(null, client.id);
});

server.deserializeClient((id, done) => {
  Clients.findOne(id, (err, client) => {
    if (err) { return done(err); }
    return done(null, client);
  });
});

// Implement Token Endpoint
// app.post('/token',
  // passport.authenticate(['basic', 'oauth2-client-password'], { session: false }),
  server.token(),
  server.errorHandler()
// );
