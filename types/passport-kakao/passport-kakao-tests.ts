import { Strategy as KakaoStrategy } from 'passport-kakao';
import { Request } from 'express';

new KakaoStrategy({
        clientID: 'client',
        callbackURL: 'callbackUrl',
    },
    (accessToken: string, refreshToken: string, profile: any, done: any) => {
        // signUp or signIn
    },
);

new KakaoStrategy({
        clientID: 'client',
        callbackURL: 'callbackUrl',
        passReqToCallback: false,
    },
    (accessToken: string, refreshToken: string, profile: any, done: any) => {
        // signUp or signIn
    },
);

new KakaoStrategy({
        clientID: 'client',
        callbackURL: 'callbackUrl',
        passReqToCallback: true,
    },
    (req: Request, accessToken: string, refreshToken: string, profile: any, done: any) => {
        // signUp or signIn
    },
);
