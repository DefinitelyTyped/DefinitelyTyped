import { Request } from 'express';
import { Strategy as GoogleStrategy, VerifyCallback } from 'passport-google-oauth2';

new GoogleStrategy({
  callbackURL: 'callbackurl',
  clientID: 'clientid',
  clientSecret: 'shhh',
  passReqToCallback: true,
  scope: "scope",
}, (
  req: Request,
  accessToken: string,
  refreshToken: string,
  profile: any,
  done: VerifyCallback) => {
  // Some registration / log in logic
});
