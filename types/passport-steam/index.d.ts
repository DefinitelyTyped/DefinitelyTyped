// Type definitions for passport-steam 1.0
// Project: https://github.com/liamcurry/passport-steam
// Definitions by: Gonthier Renaud <https://github.com/kzay>, Djobbo Maïga <https://github.com/AlfieGoldson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import passport = require("passport");
import express = require("express");

export = passport_steam;

declare function passport_steam(
    options: passport_steam.StrategyOptions,
    validate: passport_steam.ValidateFunction,
): passport_steam.Strategy;

declare function passport_steam(
    options: passport_steam.StrategyOptionsWithRequest,
    validate: passport_steam.ValidateFunctionWithRequest,
): passport_steam.Strategy;

declare namespace passport_steam {
    interface Profile extends passport.Profile {
        _json: any;
    }

    interface StrategyOptionsBase {
        returnURL: string;
        realm: string;
        apiKey: string;
        providerURL?: string;
        profile?: boolean;
        stateless?: boolean;
    }

    interface StrategyOptions extends StrategyOptionsBase {
        passReqToCallback?: false;
    }

    interface StrategyOptionsWithRequest extends StrategyOptionsBase {
        passReqToCallback: true;
    }

    type VerifyCallback = (error?: Error | null, user?: object, info?: object) => void;

    type ValidateFunction = (identifier: string, profile: Profile, done: VerifyCallback) => void;

    type ValidateFunctionWithRequest = (
        req: express.Request,
        identifier: string,
        profile: Profile,
        done: VerifyCallback,
    ) => void;

    class Strategy extends passport.Strategy {
        constructor(options: StrategyOptions, validate: ValidateFunction);
        constructor(options: StrategyOptionsWithRequest, validate: ValidateFunctionWithRequest);

        name: string;
        authenticate(req: express.Request, options?: object): void;
    }
}
