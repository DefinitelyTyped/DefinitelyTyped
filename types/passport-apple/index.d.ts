// Type definitions for passport-apple 1.1
// Project: https://github.com/ananay/passport-apple#readme
// Definitions by: ytkalan <https://github.com/atomyyyy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Request } from 'express';
import { Strategy } from 'passport';
import passportOAuth2 = require('passport-oauth2');

declare namespace AppleStrategy {
    interface AuthenticateOptionsBase extends Partial<passportOAuth2._StrategyOptionsBase> {
        authorizationURL?: string;
        tokenURL?: string;
        clientID: string;
        teamID: string;
        keyID: string;
        privateKeyLocation?: string;
        privateKeyString?: string;
    }

    interface AuthenticateOptions extends AuthenticateOptionsBase {
        passReqToCallback?: false;
    }

    interface AuthenticateOptionsWithRequest extends AuthenticateOptionsBase {
        passReqToCallback: true;
    }

    type AppleAuthorizationParams = object & {
        response_mode: "form_post";
        scope: "name email";
        response_type: "name email";
        state: string | undefined;
    };

    interface DecodedIdToken {
        sub: string;
        [key: string]: any;
    }

    interface Profile {
        [key: string]: any;
    }

    type VerifyCallback = (err?: Error | null, user?: object, info?: object) => void;

    type VerifyFunction = (
        accessToken: string,
        refreshToken: string,
        decodedIdToken: DecodedIdToken,
        profile: Profile,
        verified: VerifyCallback
    ) => void;

    type VerifyFunctionWithRequest = (
        req: Request,
        accessToken: string,
        refreshToken: string,
        decodedIdToken: DecodedIdToken,
        profile: Profile,
        verified: VerifyCallback
    ) => void;
}

declare class AppleStrategy extends passportOAuth2 {
    constructor(options: AppleStrategy.AuthenticateOptions, verify: AppleStrategy.VerifyFunction);
    constructor(options: AppleStrategy.AuthenticateOptionsWithRequest, verify: AppleStrategy.VerifyFunctionWithRequest);

    authorizationParams(options: object): AppleStrategy.AppleAuthorizationParams;
    name: "apple";
}

export = AppleStrategy;
