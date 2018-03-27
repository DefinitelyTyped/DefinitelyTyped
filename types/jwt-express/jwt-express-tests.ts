import express = require("express");
import jwt = require("jwt-express");

const app = express();

app.use(jwt.active());
app.use(jwt.clear());
let jwtObj = jwt.create("Secret", { });
jwtObj = jwt.create((p) => "Secret", { });
app.use(jwt.init("Secret"));
app.use(jwt.init(req => "Secret"));
app.use(jwt.init("Secret", {
    cookie: "jwt-express",
    cookieOptions: {
        httpOnly: true
    },
    cookies: true,
    refresh: true,
    reqProperty: "jwt",
    revoke: (revokeJWT) => { jwtObj = revokeJWT; },
    signOptions: {
        expiresIn: "1h"
    },
    stales: 1000,
    verify: (verifyJWT) => { jwtObj = verifyJWT; return true; },
    verifyOptions: {
        ignoreExpiration: true
    }
}));
app.use(jwt.require("key"));
app.use(jwt.require("key", "==", "value"));
app.use(jwt.valid());

let resObj: express.Response = <any> {};
app.use((err: jwt.JWTExpressError, req: express.Request, res: express.Response, next: express.NextFunction) => {
    err.message.startsWith("");
    err.name.startsWith("");
    resObj = res;
});

jwtObj.expired.valueOf();
app.use(jwt.init(req => "Secret", jwtObj.options));
jwtObj.payload;
jwtObj.secret.startsWith("");
jwtObj.stale.valueOf();
jwtObj.token.startsWith("");
jwtObj.valid.valueOf();

jwtObj = jwtObj.resign();
jwtObj = jwtObj.revoke();
jwtObj = jwtObj.sign(jwtObj.payload);
jwtObj = jwtObj.store(resObj);
jwtObj = jwtObj.verify(jwtObj.token);
jwtObj.toJSON();
