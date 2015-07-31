// Type definitions for passport-facebook-token 0.4.0
// Project: https://github.com/drudge/passport-facebook-token
// Definitions by: Ray Martone <https://github.com/rmartone>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../passport/passport.d.ts"/>

declare module 'passport-facebook-token' {

    import passport = require('passport');
    import express = require('express');

    interface Profile extends passport.Profile {
        gender: string;
        profileUrl: string;
    }

    interface StrategyOptions {
        clientID: string;
        clientSecret: string;
        authorizationURL?: string;
        tokenURL?: string;
        scopeSeparator?: string;
        passReqToCallback?: Function;
        enableProof?: boolean;
        profileFields?: any[];
    }

    class Strategy implements passport.Strategy {
        constructor(options: StrategyOptions,
                    verify: (accessToken: string,
                             refreshToken: string,
                             profile: Profile,
                             done: (err: any, user?: any) => void) => void);
        name: string;
        authenticate: (req: express.Request, options?: any) => void;
    }
}
