// Type definitions for passport-facebook 1.0.3
// Project:  https://github.com/jaredhanson/passport-facebook
// Definitions by: James Roland Cabresos <https://github.com/staticfunction>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../passport/passport.d.ts"/>

declare module 'passport-facebook' {

    import passport = require('passport');
    import express = require('express');

    interface Profile {
        id:string;
        provider:string;
        displayName:string;
        name:{familyName:string; givenName:string; middleName:string};
        profileUrl:string;
    }

    class Strategy implements passport.Strategy{
        constructor(options:{clientID:string; clientSecret:string; callbackURL:string},
                    verify:(accessToken:string, refreshToken:string, profile:Profile, done:(error:any, user?:any) => void) => void);
        name: string;
        authenticate:(req: express.Request, options?: Object) => void;
    }
}