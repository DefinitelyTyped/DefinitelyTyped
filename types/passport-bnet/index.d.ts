import {
    _StrategyOptionsBase,
    Strategy as OAuth2Strategy,
    VerifyFunction,
    VerifyFunctionWithRequest,
} from "passport-oauth2";

declare class BnetStrategy extends OAuth2Strategy {
    constructor(options: BnetStrategy.StrategyOptions, verify: VerifyFunction);
    constructor(options: BnetStrategy.StrategyOptionsWithRequest, verify: VerifyFunctionWithRequest);
}

declare namespace BnetStrategy {
    // passport--bnet accepts any options that passport-oauth2 accepts, but add the option region and makes authorizationURL and tokenURL optional
    interface _BaseBnetOptions extends Partial<_StrategyOptionsBase> {
        clientID: string;
        clientSecret: string;

        region?: string | undefined;
    }

    interface StrategyOptions extends _BaseBnetOptions {
        passReqToCallback?: false | undefined;
    }

    interface StrategyOptionsWithRequest extends _BaseBnetOptions {
        passReqToCallback: true;
    }

    function getHost(region: string): string;

    type Strategy = BnetStrategy;
    const Strategy: typeof BnetStrategy;
}

export = BnetStrategy;
