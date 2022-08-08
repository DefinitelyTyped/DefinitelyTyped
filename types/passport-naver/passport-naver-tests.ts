import { Strategy as NaverStrategy } from 'passport-naver';

new NaverStrategy({
        clientID: 'client',
        clientSecret: 'clientSecret',
        callbackURL: 'callbackUrl',
    },
    (accessToken: string, refreshToken: string, profile: any, done: any) => {
        // signUp or signIn
    },
);

new NaverStrategy({
        clientID: 'client',
        clientSecret: 'clientSecret',
        callbackURL: 'callbackUrl',
        passReqToCallback: true,
    },
    (req, accessToken, refreshToken, profile, done) => {
        // signUp or signIn
    },
);
