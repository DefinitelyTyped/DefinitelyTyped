// Type definitions for passport-windowsauth 3.0
// Project: https://github.com/auth0/passport-windowsauth#readme
// Definitions by: Emily Marigold Klassen <https://github.com/forivall>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as express from 'express';
import * as passport from 'passport';
import * as ldapjs from 'ldapjs';
import { TlsOptions } from 'tls';

declare namespace windowsauth {
    interface Options {
        ldap?: {
            url?: string
            maxConnections?: number
            base?: string
            bindDN?: string
            bindCredentials?: string
            tlsOptions?: TlsOptions;
            reconnect?: boolean | {
                initialDelay?: number,
                maxDelay?: number,
                failAfter?: number
            };
            timeout?: number;
            connectTimeout?: number;
            idleTimeout?: number;
            binder?: ldapjs.Client
            client?: ldapjs.Client
        };
        integrated?: boolean;
        getUserNameFromHeader?(req: express.Request): string;
        passReqToCallback?: boolean;
        usernameField?: string;
        passwordField?: string;
    }
    type Verified = (err: Error | undefined | null, user?: object, info?: object) => void;
    type Verify = (profile: passport.Profile, done: Verified) => void;
    type VerifyWithReq = (req: express.Request, profile: passport.Profile, done: Verified) => void;
}

declare class windowsauth extends passport.Strategy {
    constructor(options: windowsauth.Options & {passReqToCallback: true}, verify: windowsauth.VerifyWithReq);
    constructor(options: windowsauth.Options, verify: windowsauth.Verify);
    constructor(verify: windowsauth.Verify);
}

export = windowsauth;
