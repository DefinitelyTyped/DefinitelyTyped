// Type definitions for passport-google-id-token x.x
// Project: https://github.com/baz/foo (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: Duy Nguyen <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'passport-google-id-token' {
    class GoogleTokenStrategy {
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
        getGoogleCerts: (kid: string, callback: (err: any, cert: string) => void) => void;
    }

    interface ParsedToken {}

    export interface VerifyCallback {
        (parsedToken: ParsedToken, googleId: string, done: (err: any, data: any) => void): void;
    }
}
