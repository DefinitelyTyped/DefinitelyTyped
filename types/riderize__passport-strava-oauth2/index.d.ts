// Type definitions for @riderize/passport-strava-oauth2 2.1
// Project: https://github.com/Riderize/passport-strava-oauth2
// Definitions by: edilson <https://github.com/edilson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// tslint:disable-next-line:no-single-declare-module
declare module '@riderize/passport-strava-oauth2' {
    import { Request } from 'express';

    interface Profile {
        provider: string;
        id: string;
        fullName: string;
        name: {
            familyName: string;
            givenName: string;
        };
        photos?: Array<{
            value: string;
        }>;
        token?: string;

        _raw: string;
        _json: any;
    }

    interface StrategyOption {
        clientID: string;
        clientSecret: string;
        callbackURL: string;

        authorizationURL?: string;
        tokenURL?: string;
        profileURL?: string;
    }

    interface StrategyOptionWithRequest extends StrategyOption {
        passReqToCallback: true;
    }

    type VerifyFunction = (
        accessToken: string,
        refreshToken: string,
        profile: Profile,
        done: (error: any, user?: any, info?: any) => void,
    ) => void;

    type VerifyFunctionWithRequest = (
        req: Request,
        accessToken: string,
        refreshToken: string,
        profile: Profile,
        done: (error: any, user?: any, info?: any) => void,
    ) => void;

    class Strategy {
        constructor(options: StrategyOption, verify: VerifyFunction);
        constructor(options: StrategyOptionWithRequest, verify: VerifyFunctionWithRequest);

        name: string;
        authenticate(req: Request, options?: object): void;
    }
}
