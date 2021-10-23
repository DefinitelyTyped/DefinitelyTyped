// Type definitions for passport-google-oauth 2.0
// Project: https://github.com/jaredhanson/passport-google-oauth2
// Definitions by: Yasunori Ohoka <https://github.com/yasupeke>
//                 Eduard Zintz <https://github.com/ezintz>
//                 Tan Nguyen <https://github.com/ngtan>
//                 Gleb Varenov <https://github.com/acerbic>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.1

import * as passport from 'passport';
import * as express from 'express';
import * as oauth2 from 'passport-oauth2';

export type OAuth2StrategyOptionsWithoutRequiredURLs = Pick<
    oauth2._StrategyOptionsBase,
    Exclude<keyof oauth2._StrategyOptionsBase, 'authorizationURL' | 'tokenURL'>
>;

export interface _StrategyOptionsBase extends OAuth2StrategyOptionsWithoutRequiredURLs {
    authorizationURL?: string | undefined;
    callbackURL?: string | undefined;
    clientID: string;
    clientSecret: string;
    /**
     * Scopes (permissions) you might need to request to access Google APIs,
     * depending on the level of access you need. Sensitive scopes require
     * review by Google and have a _sensitive_ indicator on the Google Cloud
     * Platform (GCP) Console OAuth consent screen configuration page.
     *
     * One or many of these [Google
     * Scopes](https://developers.google.com/identity/protocols/oauth2/scopes)
     *
     * For a basic auth scenario, this is typically `['email', 'profile']` which
     * is an accepted abbreviation for `['https://www.googleapis.com/auth/userinfo.email',
     * 'https://www.googleapis.com/auth/userinfo.profile']`.
     */
    scope?: string | string[] | undefined;
    tokenURL?: string | undefined;
    userProfileURL?: string | undefined;
}

export interface StrategyOptions extends _StrategyOptionsBase {
    passReqToCallback?: false | undefined;
}

export interface StrategyOptionsWithRequest extends _StrategyOptionsBase {
    passReqToCallback: true;
}

export interface Profile extends passport.Profile {
    profileUrl: string;

    /**
     * An identifier for the user, unique among all Google accounts and
     * never reused. A Google account can have multiple email addresses at
     * different points in time, but the sub value is never changed. Use sub
     * within your application as the unique-identifier key for the user.
     * Maximum length of 255 case-sensitive ASCII characters.
     *
     * Ex: `"10769150350006150715113082367"`
     */
    id: string;
    emails?: Array<{ value: string; verified: 'true' | 'false' }>;

    _raw: string;
    /**
     * ID Token payload, adhering to Google's implementation of the OpenID
     * Connect standard See
     * [documentation](https://developers.google.com/identity/protocols/oauth2/openid-connect#an-id-tokens-payload)
     *
     * An ID token is a JSON object containing a set of name/value pairs. Here's an example, formatted for readability:
     * ```json
     * {
     *   "iss": "https://accounts.google.com",
     *   "azp": "1234987819200.apps.googleusercontent.com",
     *   "aud": "1234987819200.apps.googleusercontent.com",
     *   "sub": "10769150350006150715113082367",
     *   "at_hash": "HK6E_P6Dh8Y93mRNtsDB1Q",
     *   "hd": "example.com",
     *   "email": "jsmith@example.com",
     *   "email_verified": "true",
     *   "iat": 1353601026,
     *   "exp": 1353604926,
     *   "nonce": "0394852-3190485-2490358"
     * }
     * ```
     */
    _json: {
        /**
         * The Issuer Identifier for the Issuer of the response. Always
         * https://accounts.google.com or accounts.google.com for Google ID
         * tokens.
         *
         * Ex: `"https://accounts.google.com"`
         */
        iss: string;
        /**
         * The client_id of the authorized presenter. This claim is only needed when the
         * party requesting the ID token is not the same as the audience of the ID
         * token. This may be the case at Google for hybrid apps where a web application
         * and Android app have a different OAuth 2.0 client_id but share the same
         * Google APIs project.
         *
         * Ex: `"1234987819200.apps.googleusercontent.com"`
         */
        azp?: string;
        /**
         * The audience that this ID token is intended for. It must be one of
         * the OAuth 2.0 client IDs of your application.
         *
         * Ex: `"1234987819200.apps.googleusercontent.com"`
         */
        aud: string;
        /**
         * An identifier for the user, unique among all Google accounts and
         * never reused. A Google account can have multiple email addresses at
         * different points in time, but the sub value is never changed. Use sub
         * within your application as the unique-identifier key for the user.
         * Maximum length of 255 case-sensitive ASCII characters.
         *
         * Ex: `"10769150350006150715113082367"`
         */
        sub: string;
        /**
         * Access token hash. Provides validation that the access token is tied to the
         * identity token. If the ID token is issued with an access_token value in the
         * server flow, this claim is always included. This claim can be used as an
         * alternate mechanism to protect against cross-site request forgery attacks,
         * but if you follow Step 1 and Step 3 it is not necessary to verify the access
         * token.
         *
         * Ex: `"HK6E_P6Dh8Y93mRNtsDB1Q"`
         */
        at_hash?: string;
        /**
         * The time the ID token was issued. Represented in Unix time (integer
         * seconds).
         *
         * Ex: `1353601026`
         */
        iat: number;
        /**
         * Expiration time on or after which the ID token must not be accepted.
         * Represented in Unix time (integer seconds).
         *
         * Ex: `1353604926`
         */
        exp: number;
        /**
         * The user's email address. This value may not be unique to this user and is
         * not suitable for use as a primary key. Provided only if your scope included
         * the email scope value.
         *
         * Ex: `"jsmith@example.com"`
         */
        email?: string;
        /**
         * True if the user's e-mail address has been verified; otherwise false.
         *
         * _Note:_ This comes as the string "true" or "false", not as a boolean!
         *
         * Ex: `"true"`
         */
        email_verified?: 'true' | 'false';
        /**
         * The user's given name(s) or first name(s). Might be provided when a name
         * claim is present.
         */
        given_name?: string;
        /**
         * The user's surname(s) or last name(s). Might be provided when a name claim is
         * present.
         */
        family_name?: string;
        /**
         * The user's full name, in a displayable form. Might be provided when:
         *
         * - The request scope included the string "profile"
         * - The ID token is returned from a token refresh
         *
         * When name claims are present, you can use them to update your app's user records. Note that this claim is never guaranteed to be present.
         */
        name?: string;
        /**
         * The hosted G Suite domain of the user. Provided only if the user belongs to a
         * hosted domain.
         *
         * Ex: `"example.com"`
         */
        hd?: string;
        /**
         * The user's locale, represented by a [BCP 47](https://www.rfc-editor.org/info/bcp47) language tag. Might be provided
         * when a name claim is present.
         *
         * Ex: `"en"`
         */
        locale?: string;
        /**
         * The value of the nonce supplied by your app in the authentication
         * request. You should enforce protection against replay attacks by ensuring
         * it is presented only once.
         *
         * Ex: `"0394852-3190485-2490358"`
         */
        nonce?: string;
        /**
         * The URL of the user's profile picture. Might be provided when:
         * - The request scope included the string "profile"
         * - The ID token is returned from a token refresh When picture claims
         *   are present, you can use them to update your app's user records.
         *   Note that this claim is never guaranteed to be present.
         *
         * Ex: `"https://lh4.googleusercontent.com/-aBcDeFG/ABCDEFGHI/JSKLMNO/pQRstuv/s99-c/photo.jpg"`
         */
        picture?: string;
        /**
         * The URL of the user's profile page. Might be provided when:
         * - The request scope included the string "profile"
         * - The ID token is returned from a token refresh When profile claims
         *   are present, you can use them to update your app's user records.
         *   Note that this claim is never guaranteed to be present.
         */
        profile?: string;
    };
}

export type VerifyCallback = (err?: string | Error | null, user?: Express.User, info?: any) => void;

export class Strategy extends oauth2.Strategy {
    constructor(
        options: StrategyOptions,
        verify: (accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback) => void,
    );
    constructor(
        options: StrategyOptions,
        verify: (
            accessToken: string,
            refreshToken: string,
            params: GoogleCallbackParameters,
            profile: Profile,
            done: VerifyCallback,
        ) => void,
    );
    constructor(
        options: StrategyOptionsWithRequest,
        verify: (
            req: express.Request,
            accessToken: string,
            refreshToken: string,
            profile: Profile,
            done: VerifyCallback,
        ) => void,
    );
    constructor(
        options: StrategyOptionsWithRequest,
        verify: (
            req: express.Request,
            accessToken: string,
            refreshToken: string,
            params: GoogleCallbackParameters,
            profile: Profile,
            done: VerifyCallback,
        ) => void,
    );
}

// additional Google-specific options
export interface AuthenticateOptionsGoogle extends passport.AuthenticateOptions {
    accessType?: 'offline' | 'online' | undefined;
    prompt?: string | undefined;
    loginHint?: string | undefined;
    includeGrantedScopes?: boolean | undefined;
    display?: string | undefined;
    hostedDomain?: string | undefined;
    hd?: string | undefined;
    requestVisibleActions?: any;
    openIDRealm?: any;
}

export interface GoogleCallbackParameters {
    access_token: string;
    refresh_token?: string | undefined;
    id_token?: string | undefined;
    expires_in: number;
    scope: string;
    token_type: string;
}

// allow Google-specific options when using "google" strategy
declare module 'passport' {
    interface Authenticator<
        InitializeRet = express.Handler,
        AuthenticateRet = any,
        AuthorizeRet = AuthenticateRet,
        AuthorizeOptions = AuthenticateOptions,
    > {
        authenticate(
            strategy: 'google',
            options: AuthenticateOptionsGoogle,
            callback?: (...args: any[]) => any,
        ): AuthenticateRet;
        authorize(
            strategy: 'google',
            options: AuthenticateOptionsGoogle,
            callback?: (...args: any[]) => any,
        ): AuthorizeRet;
    }
}
