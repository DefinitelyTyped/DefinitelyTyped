import OAuth2Strategy = require("passport-oauth2");

type OrcidStrategyOptions<
    T extends Omit<OAuth2Strategy.StrategyOptions, "passReqToCallback">,
> = Omit<T, "authorizationURL" | "tokenURL"> & {
    sandbox?: boolean;
};

declare class OrcidStrategy extends OAuth2Strategy {
    name: "orcid";

    constructor(
        options: OrcidStrategy.StrategyOptions,
        verify: OrcidStrategy.VerifyFunction,
    );
    constructor(
        options: OrcidStrategy.StrategyOptionsWithRequest,
        verify: OrcidStrategy.VerifyFunctionWithRequest,
    );
}

declare namespace OrcidStrategy {
    type StrategyOptions = OrcidStrategyOptions<OAuth2Strategy.StrategyOptions>;
    type StrategyOptionsWithRequest = OrcidStrategyOptions<OAuth2Strategy.StrategyOptionsWithRequest>;

    type VerifyFunction = OAuth2Strategy.VerifyFunction;
    type VerifyFunctionWithRequest = OAuth2Strategy.VerifyFunctionWithRequest;

    type Strategy = OrcidStrategy;
    const Strategy: typeof OrcidStrategy;
}

export = OrcidStrategy;
