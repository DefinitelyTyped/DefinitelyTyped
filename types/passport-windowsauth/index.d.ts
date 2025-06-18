import * as express from "express";
import * as ldapjs from "ldapjs";
import * as passport from "passport";
import { TlsOptions } from "tls";

declare namespace windowsauth {
    interface Options {
        ldap?: {
            url?: string | undefined;
            maxConnections?: number | undefined;
            base?: string | undefined;
            bindDN?: string | undefined;
            bindCredentials?: string | undefined;
            tlsOptions?: TlsOptions | undefined;
            reconnect?: boolean | {
                initialDelay?: number | undefined;
                maxDelay?: number | undefined;
                failAfter?: number | undefined;
            } | undefined;
            timeout?: number | undefined;
            connectTimeout?: number | undefined;
            idleTimeout?: number | undefined;
            binder?: ldapjs.Client | undefined;
            client?: ldapjs.Client | undefined;
        } | undefined;
        integrated?: boolean | undefined;
        getUserNameFromHeader?(req: express.Request): string;
        passReqToCallback?: boolean | undefined;
        usernameField?: string | undefined;
        passwordField?: string | undefined;
    }
    type Verified = (err: Error | undefined | null, user?: object, info?: object) => void;
    type Verify = (profile: passport.Profile, done: Verified) => void;
    type VerifyWithReq = (req: express.Request, profile: passport.Profile, done: Verified) => void;
}

declare class windowsauth extends passport.Strategy {
    constructor(options: windowsauth.Options & { passReqToCallback: true }, verify: windowsauth.VerifyWithReq);
    constructor(options: windowsauth.Options, verify: windowsauth.Verify);
    constructor(verify: windowsauth.Verify);
}

export = windowsauth;
