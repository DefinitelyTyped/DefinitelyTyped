import { Profile } from "passport";
import { Strategy as OAuth2Strategy, VerifyCallback } from "passport-oauth2";

declare namespace PassportWeibo {
    interface Options {
        clientID: string;
        clientSecret: string;
        callbackURL: string;
        authorizationURL?: string;
        tokenURL?: string;
        scopeSeparator?: string;
        customHeaders?: Record<string, string>;
    }

    interface User extends Profile {
        provider: "weibo";
        id: string;
        displayName: string;
        _raw: object;
        _json: object;
    }

    type UserProfileCallback = (err: Error | null, user: User) => void;

    type VerifyFunction = (accessToken: string, refreshToken: string, profile: User, done: VerifyCallback) => void;

    class Strategy extends OAuth2Strategy {
        constructor(options: Options, verify: VerifyFunction);

        userProfile(accessToken: string, done: UserProfileCallback): void;
    }
}
export = PassportWeibo.Strategy;
