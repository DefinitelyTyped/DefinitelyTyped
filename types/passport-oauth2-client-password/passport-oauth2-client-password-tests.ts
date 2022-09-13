/**
 * Created by Ivan Zubok <https://github.com/akaNightmare>.
 */

import express = require('express');
import passport = require('passport');
import oauth2ClientPassword = require('passport-oauth2-client-password');

//#region Test Models
interface IClient {
    clientId: string;
    clientSecret: string;
}

class Client implements IClient {
    public clientId: string;
    public clientSecret: string;

    static findOne(client: IClient, callback: (err: any, client: Client) => void): void {
        callback(null, new Client);
    }
}
//#endregion

passport.use(new oauth2ClientPassword.Strategy((clientId: string, clientSecret: string, done: any) => {
    Client.findOne({clientId, clientSecret}, function(err, client) {
        if (err) {
            return done(err);
        }

        if (!client) {
            return done(null, false);
        }

        return done(null, client);
    });
}));

passport.use(new oauth2ClientPassword.Strategy({
    passReqToCallback: false
}, function(req: express.Request, clientId: string, clientSecret: string, done: any) {
    Client.findOne({clientId, clientSecret}, function(err, client) {
        if (err) {
            return done(err, null, { message: 'Access Denied' });
        }

        if (!client) {
            return done(null, false, 'Access Denied');
        }

        return done(null, client);
    });
}));

let app = express();
app.post('/login', passport.authenticate('oauth2-client-password'), function (req: express.Request, res: express.Response) {
    res.redirect('/');
});
