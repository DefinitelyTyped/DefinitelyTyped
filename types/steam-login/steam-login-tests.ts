// Port of https://github.com/cpancake/steam-login/blob/master/example.js

import * as express from 'express';
import * as steam from 'steam-login';
import * as session from 'express-session';

const app = express();

app.use(session({ resave: false, saveUninitialized: false, secret: 'a secret' }));
app.use(steam.middleware({
    realm: 'http://localhost:3000/',
    verify: 'http://localhost:3000/verify',
    apiKey: process.argv[2]
}
));

app.get('/', (req: steam.SteamRequest, res) => {
    res.send(req.user == null ? 'not logged in' : 'hello ' + req.user.username).end();
});

app.get('/authenticate', steam.authenticate(), (req, res) => {
    res.redirect('/');
});

app.get('/verify', steam.verify(), (req: steam.SteamRequest, res) => {
    res.send(req.user).end();
});

app.get('/logout', steam.enforceLogin('/'), (req: steam.SteamRequest, res) => {
    req.logout ? req.logout() : null;
    res.redirect('/');
});

app.listen(3000);
console.log('listening');
