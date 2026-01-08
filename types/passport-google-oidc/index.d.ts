import OpenIDConnectStrategy = require("passport-openidconnect");

type GoogleOidcStrategyOptions =
    & Omit<
        OpenIDConnectStrategy.StrategyOptions,
        "issuer" | "authorizationURL" | "tokenURL" | "userInfoURL"
    >
    & {
        // In the example from the repo, these are the only required properties
        // https://github.com/jaredhanson/passport-google-openidconnect/blob/master/lib/strategy.js
        clientID: string;
        clientSecret: string;
        callbackURL: string;

        issuer?: string;
        authorizationURL?: string;
        tokenURL?: string;
    };

declare namespace GoogleOidcStrategy {
    type StrategyOptions = GoogleOidcStrategyOptions;
}

declare class GoogleOidcStrategy extends OpenIDConnectStrategy {
    constructor(
        options: GoogleOidcStrategyOptions,
        verify: OpenIDConnectStrategy.VerifyFunction,
    );
}

export = GoogleOidcStrategy;
