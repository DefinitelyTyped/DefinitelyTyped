// Type definitions for passport-cognito 0.1.13
// Project: https://github.com/kndt84/passport-cognito
// Definitions by: Maksym Butsykin <https://github.com/mbutsykin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import passport = require('passport');
import express = require('express');

interface CognitoStrategyOptions {
  userPoolId: string;
  clientId: string;
  region: string;
}

type CognitoVerifyFunction = (
  accessToken: string,
  idToken: string,
  refreshToken: string,
  user: object,
  done: (error: any, user?: any | false) => void,
) => any;

export class Strategy extends passport.Strategy {
  constructor(options: CognitoStrategyOptions, verify: CognitoVerifyFunction);

  name: string;
  authenticate(req: express.Request, options?: object): void;
}
