import passport = require("passport");
import express = require("express");

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
        gender?: string | undefined;
        ageRange?: {
            min: number;
            max?: number | undefined;
        } | undefined;
        profileUrl?: string | undefined;
        username?: string | undefined;
        birthday: string;

        _raw: string;
        _json: any;
    }

    interface AuthenticateOptions extends passport.AuthenticateOptions {
        authType?: string | undefined;
    }

    interface StrategyOption {
        clientID: string;
        clientSecret: string;
        callbackURL: string;
        domain: string;
        scopeSeparator?: string | undefined;
        enableProof?: boolean | undefined;
        profileFields?: string[] | undefined;
        state?: boolean | undefined;
    }

    interface StrategyOptionWithRequest extends StrategyOption {
        passReqToCallback: true;
    }
    interface ExtraVerificationParams {
        audience?: string | undefined;
        connection?: string | undefined;
        prompt?: string | undefined;
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
    // eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
    export import Strategy = StrategyInternal;
}

export = StrategyInternal;
