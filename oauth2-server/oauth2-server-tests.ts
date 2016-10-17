

import * as express from "express";
import * as oauthserver from "oauth2-server";

var oauth = oauthserver({
    model: {},
    grants: ['password'],
    debug: true
});

var app = express();

app.all('/oauth/token', oauth.grant());
app.get('/', oauth.authorise(), function (req, res) {
    res.send('Secret area');
});
app.use(oauth.errorHandler());
