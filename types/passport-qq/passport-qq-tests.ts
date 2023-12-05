import { Strategy } from "passport-qq";

const qqStrategy = new Strategy({
    clientID: "123",
    clientSecret: "123",
    callbackURL: "http://127.0.0.1:3000/auth/qq/callback",
}, function(accessToken, refreshToken, profile, done) {
    done(null, profile);
});
