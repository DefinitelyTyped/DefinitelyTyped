import passport = require("passport");
import SteamStrategy = require("passport-steam");

const strategy = new SteamStrategy({
    returnURL: "http://localhost:3100",
    realm: "http://localhost:3100/login/steam/callback",
    apiKey: "12345",
    passReqToCallback: true,
}, async (req, identifier, profile, done) => {
    const steamId = profile.id;

    const user = { id: steamId };

    return done(null, user);
});

passport.use(strategy);
