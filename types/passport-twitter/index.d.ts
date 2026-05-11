/// <reference types="passport"/>

import passport = require("passport");
import express = require("express");

interface Profile extends passport.Profile {
    gender: string;
    username: string;

    _raw: string;
    _json: any;
    _accessLevel: string;
}

interface IStrategyOptionBase {
    consumerKey: string;
    consumerSecret: string;
    callbackURL: string;

    includeEmail?: boolean | undefined;
    includeStatus?: boolean | undefined;
    includeEntities?: boolean | undefined;

    requestTokenURL?: string | undefined;
    accessTokenURL?: string | undefined;
    userAuthorizationURL?: string | undefined;
    sessionKey?: string | undefined;

    forceLogin?: boolean | undefined;
    screenName?: string | undefined;

    userProfileURL?: string | undefined;
    skipExtendedUserProfile?: boolean | undefined;
}

interface IStrategyOption extends IStrategyOptionBase {
    passReqToCallback?: false | undefined;
}

interface IStrategyOptionWithRequest extends IStrategyOptionBase {
    passReqToCallback: true;
}

declare class Strategy extends passport.Strategy {
    constructor(
        options: IStrategyOption,
        verify: (
            accessToken: string,
            refreshToken: string,
            profile: Profile,
            done: (error: any, user?: any) => void,
        ) => void,
    );
    constructor(
        options: IStrategyOptionWithRequest,
        verify: (
            req: express.Request,
            accessToken: string,
            refreshToken: string,
            profile: Profile,
            done: (error: any, user?: any) => void,
        ) => void,
    );

    name: string;
    authenticate(req: express.Request, options?: Object): void;
}
