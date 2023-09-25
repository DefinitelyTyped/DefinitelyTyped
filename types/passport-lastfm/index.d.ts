// Type definitions for passport-lastfm 1.0
// Project: https://github.com/kizzlebot/passport-lastfm#readme
// Definitions by: anyo <https://github.com/nyo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import type { Request } from "express";

declare class Strategy {
    constructor(options: Strategy.StrategyOptions, verify: Strategy.VerifyFunction);

    name: string;
    authenticate(req: Request, options?: object): void;
    static Strategy: { new(options: Strategy.StrategyOptions, verify: Strategy.VerifyFunction): Strategy };
}

declare namespace Strategy {
    interface Profile {
        name: string;
        key: string;
        subscriber: number;
    }

    type VerifyCallback = (error?: Error | null, user?: object) => void;

    interface StrategyOptions {
        api_key?: string;
        clientID?: string;
        secret?: string;
        clientSecret?: string;
        callback_url?: string;
        callbackURL?: string;
    }

    type VerifyFunction = (
        req: Request,
        sessionKey: Profile,
        done: VerifyCallback,
    ) => void;
}

export = Strategy;
