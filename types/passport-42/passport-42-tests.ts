import * as passport from "passport";
import FortyTwoStrategy = require("passport-42");

const FORTYTWO_APP_ID = "intra client id";
const FORTYTWO_APP_SECRET = "intra client secret";

const ftStrategy = new FortyTwoStrategy({
    clientID: FORTYTWO_APP_ID,
    clientSecret: FORTYTWO_APP_SECRET,
    callbackURL: "http://127.0.0.1:3000/auth/42/callback",
}, (accessToken, refreshToken, profile, cb) => {
    accessToken; // $ExpectType string
    refreshToken; // $ExpectType string
    profile; // $ExpectType Profile
});

passport.use(ftStrategy);
passport.use(
    new FortyTwoStrategy({
        clientID: FORTYTWO_APP_ID,
        clientSecret: FORTYTWO_APP_SECRET,
        callbackURL: "http://127.0.0.1:3000/auth/42/callback",
        passReqToCallback: true,
    }, (req, accessToken, refreshToken, profile, cb) => {
        req; // $ExpectType Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>
        accessToken; // $ExpectType string
        refreshToken; // $ExpectType string
        profile; // $ExpectType Profile
    }),
);
