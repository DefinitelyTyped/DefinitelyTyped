import { Strategy as KakaoStrategy } from 'passport-kakao';

new KakaoStrategy({
        clientID: 'client',
        clientSecret: 'clientSecret',
        callbackURL: 'callbackUrl',
    },
    (accessToken: string, refreshToken: string, profile: any, done: any) => {
        // signUp or signIn
    },
);
