// Type definitions for passport-facebook-token 0.4.0
// Project: https://github.com/drudge/passport-facebook-token
// Definitions by: Ray Martone <https://github.com/rmartone>, Michael Randolph <https://github.com/mrand01>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="passport"/>

import passport = require('passport');
import express = require('express');

declare class Strategy implements passport.Strategy {
    constructor(options: Strategy.StrategyOptions,
        verify: (accessToken: string,
            refreshToken: string,
            profile: Strategy.Profile,
            done: (err: any, user?: any) => void) => void);
    name: string;
    authenticate: (req: express.Request, options?: any) => void;
}

declare namespace Strategy {
    export interface Profile extends passport.Profile {
        gender: string;
        profileUrl: string;
    }
    
    export interface StrategyOptions {
        clientID: string;
        clientSecret: string;
        authorizationURL?: string;
        tokenURL?: string;
        scopeSeparator?: string;
        passReqToCallback?: Function;
        enableProof?: boolean;
        profileFields?: any[];
    }
}

export = Strategy;
