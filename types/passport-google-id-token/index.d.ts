// Type definitions for passport-google-id-token 0.4.7
// Project: https://github.com/jmreyes/passport-google-id-token
// Definitions by: Duy Nguyen <https://github.com/Wyfy0107>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Strategy as PassportStrategy } from 'passport';

declare class GoogleTokenStrategy extends PassportStrategy {
    constructor(opt: StrategyOptions, verify: VerifyCallback);
}

export interface StrategyOptions {
    /**
     * Google client id
     */
    clientID: string;
    /**
     * Return the Google certificate that will be used for signature validation.
     *
     * A custom function can be used instead when passed as an option in the Strategy
     * constructor. It can be interesting e.g. if caching is needed.
     *
     * @param {String} kid The key id specified in the token
     * @param {Function} callback
     */
    getGoogleCerts?: (kid: string, callback: (err: any, cert: string) => void) => void;
}

export interface ParsedToken {
    payload: {
        family_name: string;
        given_name: string;
    };
}

export interface VerifyCallback {
    (parsedToken: ParsedToken, googleId: string, done: VerifiedCallback): void;
}

export interface VerifiedCallback {
    (error: any, user?: any, info?: any): void;
}

export default GoogleTokenStrategy;
