// TypeScript Version: 2.3

import passport = require("passport");
import express = require("express");

export interface Profile extends passport.Profile {
    id: string;
    displayName: string;
    name: { familyName: string; givenName: string };
    username: string;

    _raw: string;
    _json: any;
}

export interface StrategyOptionBase {
    clientID: string;
    clientSecret: string;
    callbackURL: string;
    tokenURL?: string | undefined;
    authorizationURL?: string | undefined;
}

export interface StrategyOption extends StrategyOptionBase {
    passReqToCallback?: false | undefined;
}

export interface StrategyOptionWithRequest extends StrategyOptionBase {
    passReqToCallback: true;
}

export class Strategy extends passport.Strategy {
    constructor(
        options: StrategyOption,
        verify: (
            accessToken: string,
            refreshToken: string,
            profile: Profile,
            done: (error: any, user?: any) => void,
        ) => void,
    );
    constructor(
        options: StrategyOptionWithRequest,
        verify: (
            req: express.Request,
            accessToken: string,
            refreshToken: string,
            profile: Profile,
            done: (error: any, user?: any) => void,
        ) => void,
    );

    name: string;
    authenticate(req: express.Request, options?: object): void;
}
