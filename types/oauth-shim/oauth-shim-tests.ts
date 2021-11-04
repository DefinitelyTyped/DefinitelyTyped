import oauthshim = require("oauth-shim");
import express = require("express");

const app = express();
app.listen(3000);
app.all("/oauthproxy", oauthshim);

oauthshim.init([
    {
        client_id: "12345",
        client_secret: "secret678910",
        grant_url: "https://linkedIn.com",
        domain: "test.com, example.com/redirect",
    },
]);

function customHandler(req: oauthshim.Request, res: express.Response, next: express.NextFunction) {
    if (
        req.oauthshim &&
        req.oauthshim.redirect &&
        req.oauthshim.data &&
        req.oauthshim.data.access_token &&
        req.oauthshim.options &&
        !req.oauthshim.options.path
    ) {}

    next();
}

app.all(
    "/oauthproxy",
    oauthshim.interpret,
    customHandler,
    oauthshim.proxy,
    oauthshim.redirect,
    oauthshim.unhandled
);

oauthshim.credentials.get = (query, callback) => {
    if (query.client_id === "12345") {
        callback({
            client_secret: "secret678910",
        });
    } else if (query.client_id === "abcde") {
        callback({
            client_secret: "secret123456",
        });
    } else {
        callback(false);
    }
};
