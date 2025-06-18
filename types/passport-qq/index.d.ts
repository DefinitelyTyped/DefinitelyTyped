import { Profile } from "passport";
import { Strategy as OAuth2Strategy, VerifyCallback } from "passport-oauth2";

export interface Options {
    clientID: string;
    clientSecret: string;
    callbackURL: string;
    authorizationURL?: string;
    tokenURL?: string;
    scopeSeparator?: string;
}

export interface QQUserProfile {
    ret: number;
    msg: string;
    nickname: string;
    figureurl: string;
    figureurl_1: string;
    figureurl_2: string;
    figureurl_qq_1: string;
    figureurl_qq_2: string;
    figureurl_qq: string;
    gender: string;
}

export interface User extends Profile {
    provider: "qq";
    id: string;
    nickname: string;
    _raw: string;
    _json: QQUserProfile;
}

export type UserProfileCallback = (err: Error | null, user: User) => void;

export type VerifyFunction = (accessToken: string, refreshToken: string, profile: User, done: VerifyCallback) => void;

export class Strategy extends OAuth2Strategy {
    constructor(options: Options, verify: VerifyFunction);

    userProfile(accessToken: string, done: UserProfileCallback): void;
}
