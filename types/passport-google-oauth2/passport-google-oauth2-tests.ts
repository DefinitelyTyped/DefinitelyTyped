import * as express from 'express';
import * as PassportGoogle from 'passport-google-oauth2';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';

new GoogleStrategy({
  callbackURL: 'callbackurl',
  clientID: 'clientid',
  clientSecret: 'shhh',
  passReqToCallback: true,
}, (
  req: express.Request,
  accessToken: string,
  refreshToken: string,
  profile: any,
  done: PassportGoogle.VerifyCallback) => {
  // Some registration / log in logic
});
