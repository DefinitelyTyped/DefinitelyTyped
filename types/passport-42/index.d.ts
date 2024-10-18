import * as express from "express";
import * as passport from "passport";
import * as oauth2 from "passport-oauth2";

interface Profile extends passport.Profile {
    id: string;
    provider: string;
    username: string;
    displayName: string;
    name: {
        familyName: string;
        givenName: string;
    };
    profileUrl: string;
    phoneNumbers: string;

    _raw: string;
    _json: any;
}

interface StrategyOptions extends Partial<passport.Strategy> {
    /**
     * clientID: your 42 application's UID
     */
    clientID: string;
    /**
     * clientSecret: your 42 application's SECRET
     */
    clientSecret: string;
    /**
     * callbackURL:  URL to which 42 will redirect the user after granting authorization
     */
    callbackURL: string;
    /**
     * userAgent: User Agent string used in all API requests. e.g: domain name of your application.
     */
    userAgent?: string;
    /**
     * profileFields:    Object specifying fields to include in the user profile
     */
    profileFields?: Record<string, string | ((json: any) => unknown)>;
}

interface StrategyOptionsWithRequest extends Omit<StrategyOptions, "passReqToCallback"> {
    passReqToCallback: true;
}

type VerifyFunctionWithRequest = (
    req: express.Request,
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: (error: any, user?: any, info?: any) => void,
) => void;

type VerifyFunction = (
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: (error: any, user?: any, info?: any) => void,
) => void;

declare class Strategy extends oauth2.Strategy {
    constructor(options: StrategyOptions, verify: VerifyFunction);
    constructor(options: StrategyOptionsWithRequest, verify: VerifyFunctionWithRequest);

    /**
     * Retrieve user profile from 42.
     *
     * This function constructs a normalized profile, with the following properties
     * (or the ones specified in `options.profileFields`):
     *
     *   - `provider`         always set to `42`
     *   - `id`               the user's 42 ID
     *   - `username`         the user's 42 xlogin
     *   - `displayName`      the user's full name
     *   - `name.familyName`  the user's last name
     *   - `name.givenName`   the user's first name
     *   - `profileUrl`       the URL of the profile for the user on 42 intra
     *   - `emails`           the user's email address
     *   - `photos      `     the user's photo
     *   - `phoneNumbers`     the user's phone number
     *
     * @access public
     */
    userProfile(accessToken: string, done: (err: any, profile?: Profile) => void): void;
}

export = Strategy;
