import OpenIDConnectStrategy = require("passport-openidconnect");

declare namespace GoogleOidcStrategy {
    type StrategyOptions =
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

            issuer?: string | undefined;
            authorizationURL?: string | undefined;
            tokenURL?: string | undefined;
        };
}

declare class GoogleOidcStrategy extends OpenIDConnectStrategy {
    constructor(
        options: GoogleOidcStrategy.StrategyOptions,
        verify: OpenIDConnectStrategy.VerifyFunction,
    );
}

export = GoogleOidcStrategy;
