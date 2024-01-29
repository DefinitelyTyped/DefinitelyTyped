/// <reference types="passport"/>

import passport = require("passport");
import express = require("express");

interface Profile extends passport.Profile {
    gender: string;
    _raw: string;
    _json: any;
}

interface IOAuthStrategyOption {
    consumerKey: string;
    consumerSecret: string;
    callbackURL: string;
    requestTokenURL?: string | undefined;
    accessTokenURL?: string | undefined;
    userAuthorizationURL?: string | undefined;
    sessionKey?: string | undefined;
}

interface VerifyOptions {
    message: string;
}

interface VerifyFunction {
    (error: any, user?: any, msg?: VerifyOptions): void;
}

declare class OAuthStrategy implements passport.Strategy {
    constructor(
        options: IOAuthStrategyOption,
        verify: (
            accessToken: string,
            refreshToken: string,
            profile: Profile,
            done: VerifyFunction,
        ) => void,
    );
    name: string;
    authenticate(req: express.Request, options?: Object): void;
}

interface IOAuth2StrategyOption {
    clientID: string;
    clientSecret: string;
    callbackURL: string;
    authorizationURL?: string | undefined;
    tokenURL?: string | undefined;
    userProfileURL?: string | undefined;
    accessType?: string | undefined;
    approval_prompt?: string | undefined;
    prompt?: string | undefined;
    loginHint?: string | undefined;
    userID?: string | undefined;
    hostedDomain?: string | undefined;
    display?: string | undefined;
    requestVisibleActions?: string | undefined;
    openIDRealm?: string | undefined;
}

interface IOAuth2StrategyOptionWithRequest extends IOAuth2StrategyOption {
    passReqToCallback: boolean;
}

declare class OAuth2Strategy implements passport.Strategy {
    constructor(
        options: IOAuth2StrategyOption,
        verify: (
            accessToken: string,
            refreshToken: string,
            profile: Profile,
            done: VerifyFunction,
        ) => void,
    );
    constructor(
        options: IOAuth2StrategyOptionWithRequest,
        verify: (
            req: express.Request,
            accessToken: string,
            refreshToken: string,
            profile: Profile,
            done: VerifyFunction,
        ) => void,
    );

    name: string;
    authenticate: (req: express.Request, options?: Object) => void;
}
