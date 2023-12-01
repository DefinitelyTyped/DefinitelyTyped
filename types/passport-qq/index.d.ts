import { Profile } from "passport";
import { Strategy as OAuth2Strategy } from "passport-oauth2";

export interface Options {
    clientID: string;
    clientSecret: string;
    callbackURL: string;
    authorizationURL?: string;
    tokenURL?: string;
    scopeSeparator?: string;
}

export type Callback = (err: Error | null, user: unknown) => void;

export type VerifyCallback = (accessToken: string, refreshToken: string, profile: Profile, done: Callback) => void;

export class Strategy extends OAuth2Strategy {
    constructor(options: Options, verify: VerifyCallback);

    userProfile(accessToken: string, done: Callback): void;
}
