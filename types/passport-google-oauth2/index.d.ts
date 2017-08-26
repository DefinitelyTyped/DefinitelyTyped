// Type definitions for passport-google-oauth2 0.1
// Project: https://github.com/mstade/passport-google-oauth2
// Definitions by: Elliot Blackburn <https://github.com/bluehatbrit>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Request } from 'express';

export interface StrategyOptions {
  clientID: string;
  clientSecret: string;
  callbackURL: string;
  passReqToCallback?: true;
  scope?: string[];
}

export interface StrategyOptionsWithRequest {
  clientID: string;
  clientSecret: string;
  callbackURL: string;
  passReqToCallback: true;
  scope?: string[];
}

export interface VerifyOptions {
  message: string;
}

export type VerifyCallback = (error: any, user?: any, options?: VerifyOptions) => void;

export type VerifyFunctionWithRequest = (
    req: Request,
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback
) => void;

export type VerifyFunction = (accessToken: string, refreshToken: string, profile: any, done: VerifyCallback) => void;

export class Strategy implements Strategy {
  name: string;
  authenticate: (req: Request, options?: object) => void;

  constructor(options: StrategyOptionsWithRequest, verify: VerifyFunctionWithRequest);
  constructor(options: StrategyOptions, verify: VerifyFunction);
  constructor(verify: VerifyFunction);
}
