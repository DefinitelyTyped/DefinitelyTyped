/*~ If this module is a UMD module that exposes a global variable 'myLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
import * as express from "express";
import * as passport from "passport";

/*~ If there are types, properties, or methods inside dotted names
 *~ of the module, declare them inside a 'namespace'.
 */
declare namespace PassportTwitterToken {
    interface StrategyOptions {
        requestTokenURL?: string;
        accessTokenURL?: string;
        userAuthorizationURL?: string;
        userProfileURL?: string;

        sessionKey?: string;

        consumerKey: string;
        consumerSecret: string;

        oauthTokenField?: string;
        oauthTokenSecretField?: string;

        userIdField?: string;

        includeEmail?: boolean;
        includeStatus?: boolean;
        includeEntities?: boolean;
    }

    interface StrategyOptionsWithRequest extends StrategyOptions {
        passReqToCallback: true;
    }

    interface TwitterProfileJsonResponse {
        id: number;
        id_str: string;
        name: string;
        screen_name: string;
        description: string;
        profile_background_image_url_https: string;
        profile_image_url_https: string;
        email: string;
    }

    interface TwitterProfile extends passport.Profile {
        provider: string;
        id: string;
        displayName: string;
        username: string;
        _json: TwitterProfileJsonResponse;
    }

    interface DoneCallback {
        (error: any, user?: any, info?: any): void;
    }

    interface VerifyFunction {
        (accessToken: string, accessTokenSecret: string, profile: TwitterProfile, done: DoneCallback): void;
    }

    interface VerifyFunctionWithRequest {
        (
            req: express.Request,
            accessToken: string,
            accessTokenSecret: string,
            profile: TwitterProfile,
            done: DoneCallback,
        ): void;
    }

    interface StrategyInstance {
        name: string;
        authenticate: (req: express.Request, options?: any) => void;
        userProfile: (accessToken: string, accessTokenSecret: string, params: any, done: DoneCallback) => void;
    }

    interface StrategyStatic {
        new(options: StrategyOptions, verify: VerifyFunction): StrategyInstance;

        new(options: StrategyOptionsWithRequest, verify: VerifyFunctionWithRequest): StrategyInstance;
    }
}

declare const PassportTwitterToken: PassportTwitterToken.StrategyStatic;
export = PassportTwitterToken;
