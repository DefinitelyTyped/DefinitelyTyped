// Type definitions for passport-slack 0.0.7
// Project: https://github.com/mjpearson/passport-slack#readme
// Definitions by: Jip Sterk <https://github.com/JipSterk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="passport" />

import passport = require("passport");
import express = require("express");

export interface StrategyOptions {
    clientID: string;
    clientSecret: string;
    callbackURL: string;
    passReqToCallback?: true;
    scope?: string[];
}

export interface StrategyOptionsWithRequest {
    clientID: string;
    clientSecret: string;
    callbackURL: string;
    passReqToCallback: true;
    scope?: string[];
}

export interface Profile extends passport.Profile {
    user: {
        name: string;
        id: string;
        email: string;
        image_24: string;
        image_32: string;
        image_48: string;
        image_72: string;
        image_192: string;
        image_512: string;
    };
    team: {
        name: string;
        id: string;
        domain: string;
        image_34: string;
        image_44: string;
        image_68: string;
        image_88: string;
        image_102: string;
        image_132: string;
        image_230: string;
        image_default: boolean;
    };
}

export class Strategy extends passport.Strategy {
    constructor(
        options: StrategyOptions,
        verify: (
            accessToken: string,
            refreshToken: string,
            profile: Profile,
            done: (error: any, user?: any) => void
        ) => void
    );
    constructor(
        options: StrategyOptions,
        verify: (
            req: express.Request,
            accessToken: string,
            refreshToken: string,
            profile: Profile,
            done: (error: any, user?: any) => void
        ) => void
    );
}
