import { Request } from "express";
import { Strategy as KakaoStrategy } from "passport-kakao";

new KakaoStrategy({
    clientID: "client",
    callbackURL: "callbackUrl",
}, (accessToken, refreshToken, profile, done) => {
    // signUp or signIn
    console.log(accessToken, refreshToken, profile, done);
});

new KakaoStrategy({
    clientID: "client",
    callbackURL: "callbackUrl",
}, (accessToken, refreshToken, profile, done) => {
    // signUp or signIn
    console.log(accessToken, refreshToken, profile, done);
});

new KakaoStrategy({
    clientID: "client",
    callbackURL: "callbackUrl",
    passReqToCallback: true,
}, (req: Request, accessToken, refreshToken, profile, done) => {
    // signUp or signIn
    console.log(req, accessToken, refreshToken, profile, done);
});
