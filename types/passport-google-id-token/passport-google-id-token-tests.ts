import GoogleTokenStrategy = require('passport-google-id-token');
import * as passport from 'passport';

interface ParsedToken {
    payload: {
        email: string;
        email_verified: string;
        name: string;
        picture: string;
        given_name: string;
        family_name: string;
        locale: string;
    };
}

passport.use(
    new GoogleTokenStrategy(
        {
            clientID: 'sdjasldajsd',
        },
        (parsedToken: ParsedToken, googleId: string, done: any) => {
            const user = {
                firstName: parsedToken.payload.given_name,
                lastName: parsedToken.payload.family_name,
            };
            done(null, user);
        },
    ),
);
