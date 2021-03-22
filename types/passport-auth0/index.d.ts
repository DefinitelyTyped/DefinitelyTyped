// Type definitions for passport-auth0 1.0
// Project: https://github.com/auth0/passport-auth0
// Definitions by: John Umeh <https://github.com/johnbendi>
//                 Vishnu Sankar <https://github.com/iamvishnusankar>
//                 Duncan Hall <https://github.com/duncanhall>
//                 Karl Horky <https://github.com/karlhorky>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import passport = require('passport');
import express = require('express');

declare class StrategyInternal extends passport.Strategy {
    constructor(
        options: StrategyInternal.StrategyOptionWithRequest,
        verify: StrategyInternal.VerifyFunctionWithRequest,
    );
    constructor(options: StrategyInternal.StrategyOption, verify: StrategyInternal.VerifyFunction);

    name: string;
    authenticate(req: express.Request, options?: object): void;
}

declare namespace StrategyInternal {
    interface Profile extends passport.Profile {
        id: string;
        displayName: string;
        gender?: string;
        ageRange?: {
            min: number;
            max?: number;
        };
        profileUrl?: string;
        username?: string;
        birthday: string;

        _raw: string;
        _json: any;
    }

    interface AuthenticateOptions extends passport.AuthenticateOptions {
        authType?: string;
    }

    interface StrategyOption {
        clientID: string;
        clientSecret: string;
        callbackURL: string;
        domain: string;
        scopeSeparator?: string;
        enableProof?: boolean;
        profileFields?: string[];
        state?: boolean;
    }

    interface StrategyOptionWithRequest extends StrategyOption {
        passReqToCallback: true;
    }
    interface ExtraVerificationParams {
        audience?: string;
        connection?: string;
        prompt?: string;
    }

    type VerifyFunction = (
        accessToken: string,
        refreshToken: string,
        extraParams: ExtraVerificationParams,
        profile: Profile,
        done: (error: any, user?: any, info?: any) => void,
    ) => void;

    type VerifyFunctionWithRequest = (
        req: express.Request,
        accessToken: string,
        refreshToken: string,
        extraParams: ExtraVerificationParams,
        profile: Profile,
        done: (error: any, user?: any, info?: any) => void,
    ) => void;

    // NOTE: not true for `export import` statements
    // tslint:disable-next-line:strict-export-declare-modifiers
    export import Strategy = StrategyInternal;
}

export = StrategyInternal;
