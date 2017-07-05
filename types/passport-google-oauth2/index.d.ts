// Type definitions for passport-google-oauth2 0.1.6
// Project: https://github.com/mstade/passport-google-oauth2
// Definitions by: Elliot Blackburn <https://github.com/bluehatbrit>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import {Request} from 'express';
import * as passport from 'passport';

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

export interface VerifyCallback {
  (error: any, user?: any, options?: VerifyOptions): void;
}

export interface VerifyFunctionWithRequest {
  (req: Request, accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): void;
}

export interface VerifyFunction {
  (accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): void;
}

declare class Strategy implements Strategy {
  public name: string;
  public authenticate: (req: Request, options?: object) => void;

  constructor(options: StrategyOptionsWithRequest, verify: VerifyFunctionWithRequest);
  constructor(options: StrategyOptions, verify: VerifyFunction);
  constructor(verify: VerifyFunction);
}
