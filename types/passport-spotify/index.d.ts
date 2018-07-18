// Type definitions for passport-spotify 1.0.0
// Project: https://github.com/jmperez/passport-spotify
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Strategy as PassportStrategy } from "passport-strategy";

export class Strategy extends PassportStrategy {
    constructor(options: ISpotifyOptions, validate: IValidateFunction);
}

declare interface ISpotifyOptions {
    clientID: string;
    clientSecret: string;
    callbackURL: string;
    scopes?: Array<string>;
}

declare type IValidateFunction = (
    accessToken: string,
    refreshToken: string,
    expires_in: string,
    profile: any,
    done: (error: any, user?: any) => void
) => void;
