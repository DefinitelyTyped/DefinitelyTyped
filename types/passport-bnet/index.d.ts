// Type definitions for passport-bnet 2.0
// Project: https://github.com/Blizzard/passport-bnet#readme
// Definitions by: Ivan Fernandes <https://github.com/ivan94>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Strategy as OAuth2Strategy, VerifyFunction, VerifyFunctionWithRequest, _StrategyOptionsBase } from 'passport-oauth2';

declare class BnetStrategy extends OAuth2Strategy {
    constructor(options: BnetStrategy.StrategyOptions, verify: VerifyFunction);
    constructor(options: BnetStrategy.StrategyOptionsWithRequest, verify: VerifyFunctionWithRequest);
}

declare namespace BnetStrategy {
    // passport--bnet accepts any options that passport-oauth2 accepts, but add the option region and makes authorizationURL and tokenURL optional
    interface _BaseBnetOptions extends Partial<_StrategyOptionsBase> {
        clientID: string;
        clientSecret: string;

        region?: string;
    }

    interface StrategyOptions extends _BaseBnetOptions {
        passReqToCallback?: false;
    }

    interface StrategyOptionsWithRequest extends _BaseBnetOptions {
        passReqToCallback: true;
    }

    function getHost(region: string): string;

    type Strategy = BnetStrategy;
    const Strategy: typeof BnetStrategy;
}

export = BnetStrategy;
