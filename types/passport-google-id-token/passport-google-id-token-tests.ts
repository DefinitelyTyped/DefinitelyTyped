import GoogleTokenStrategy from 'passport-google-id-token';
import * as passport from 'passport';

interface ParsedToken {
    payload: {
        family_name: string;
        given_name: string;
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
