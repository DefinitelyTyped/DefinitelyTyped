import passport = require("passport");
import express = require("express");

export interface CognitoStrategyOptions {
    userPoolId: string;
    clientId: string;
    region: string;
}

export type CognitoVerifyFunction = (
    accessToken: string,
    idToken: string,
    refreshToken: string,
    user: object,
    done: (error: any, user?: any) => void,
) => any;

export class Strategy extends passport.Strategy {
    constructor(options: CognitoStrategyOptions, verify: CognitoVerifyFunction);

    name: string;
    authenticate(req: express.Request, options?: object): void;
}
