// Type definitions for passport-deezer 0.2
// Project: https://github.com/krachot/passport-deezer
// Definitions by: anyo <https://github.com/nyo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import type { Request } from "express";
import type { OutgoingHttpHeaders } from "http";

declare class Strategy {
    constructor(options: Strategy.StrategyOptions, verify: Strategy.VerifyFunction);

    name: string;
    authenticate(req: Request, options?: object): void;
    static Strategy: { new(options: Strategy.StrategyOptions, verify: Strategy.VerifyFunction): Strategy };
}

declare namespace Strategy {
    interface Profile {
        provider: string;
        id: number;
        displayName: string;
        name: {
            familyName: string;
            givenName: string;
        };
        emails: Array<{ value: string }>;
        photos: Array<{ value: string }>;
        _raw: string;
        _json: any;
    }

    type VerifyCallback = (error?: Error | null, user?: object) => void;

    interface StrategyOptions {
        clientID: string;
        clientSecret: string;
        callbackURL: string;
        scope: string[];
        authorizationURL?: string;
        tokenURL?: string;
        scopeSeparator?: string;
        customHeaders?: OutgoingHttpHeaders;
    }

    type VerifyFunction = (
        accessToken: string,
        refreshToken: string | undefined,
        profile: Profile,
        done: VerifyCallback,
    ) => void;
}

export = Strategy;
