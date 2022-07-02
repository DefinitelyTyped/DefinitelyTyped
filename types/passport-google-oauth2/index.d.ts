// Type definitions for passport-google-oauth2 0.1
// Project: https://github.com/mstade/passport-google-oauth2
// Definitions by: Elliot Blackburn <https://github.com/bluehatbrit>
//                 Mike Francis <https://github.com/mikefrancis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Request } from 'express';

export interface StrategyOptions {
  clientID: string;
  clientSecret: string;
  callbackURL: string;
  passReqToCallback?: true | undefined;
  scope?: string[] | string | undefined;
  proxy?: boolean | undefined;
}

export interface StrategyOptionsWithRequest {
  clientID: string;
  clientSecret: string;
  callbackURL: string;
  passReqToCallback: true;
  scope?: string[] | string | undefined;
}

export interface VerifyOptions {
  message: string;
}

export type VerifyCallback = (error: any, user?: any, options?: VerifyOptions) => void;

export type VerifyFunctionWithRequestAndParams = (
  req: Request,
  accessToken: string,
  refreshToken: string,
  params: {
    access_token: string;
    expires_in: number;
    scope: string;
    token_type: 'Bearer';
    id_token: string;
  },
  profile: any,
  done: VerifyCallback,
) => void;

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

  constructor(options: StrategyOptionsWithRequest, verify: VerifyFunctionWithRequest | VerifyFunctionWithRequestAndParams);
  constructor(options: StrategyOptions, verify: VerifyFunction);
  constructor(verify: VerifyFunction);
}
