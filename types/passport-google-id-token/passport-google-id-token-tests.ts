import GoogleTokenStrategy, { ParsedToken, StrategyOptions, VerifiedCallback } from 'passport-google-id-token';
import * as passport from 'passport';

const opts: StrategyOptions = {
    clientID: 'sdjasldajsd',
};

passport.use(
    new GoogleTokenStrategy(opts, (parsedToken: ParsedToken, googleId: string, done: VerifiedCallback) => {
        const user = {
            firstName: parsedToken.payload.given_name,
            lastName: parsedToken.payload.family_name,
        };
        done(null, user);
    }),
);
