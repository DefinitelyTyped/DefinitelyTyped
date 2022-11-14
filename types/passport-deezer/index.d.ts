// Type definitions for passport-deezer 0.2
// Project: https://github.com/krachot/passport-deezer
// Definitions by: anyo <https://github.com/nyo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import type { OutgoingHttpHeaders } from 'http';
import type { Request } from 'express';

export = PassportDeezer;
export as namespace PassportDeezer;

declare namespace PassportDeezer {
    interface Profile {
        provider: string;
        id: string;
        displayName: string;
        name: {
            familyName: string;
            givenName: string;
        };
        emails: [{ value: string }];
        photos: [{ value: string }];
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

    class Strategy {
        constructor(options: StrategyOptions, verify: VerifyFunction);

        name: string;
        authenticate(req: Request, options?: object): void;
    }
}
