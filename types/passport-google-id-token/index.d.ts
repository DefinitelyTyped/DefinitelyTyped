// Type definitions for passport-google-id-token 0.4
// Project: https://github.com/jmreyes/passport-google-id-token
// Definitions by: Duy Nguyen <https://github.com/Wyfy0107>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Strategy as PassportStrategy } from 'passport';

declare class GoogleTokenStrategy extends PassportStrategy {
    constructor(opt: StrategyOptions, verify: VerifyCallback);
}

interface StrategyOptions {
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
     * @param kid The key id specified in the token
     * @param callback
     */
    getGoogleCerts?: (kid: string, callback: (err: any, cert: string) => void) => void;
}

/**
 * The decoded token from google that includes basic user information
 */
interface ParsedToken {
    payload: {
        email: string;
        email_verified: string;
        name: string;
        picture: string;
        given_name: string;
        family_name: string;
        locale: string;
    };
}

interface VerifyCallback {
    (parsedToken: ParsedToken, googleId: string, done: VerifiedCallback): void;
}

interface VerifiedCallback {
    (error: any, user?: any, info?: any): void;
}

export = GoogleTokenStrategy;
