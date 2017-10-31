import OAuthStrategy = require('passport-oauth1');
import { Strategy, StrategyOptions, StrategyOptionsWithRequest, VerifyCallback, InternalOAuthError } from 'passport-oauth1';
import { Strategy as PassportStrategy } from 'passport';
import { Request } from 'express';

const strategyOptions1: StrategyOptions = {
    accessTokenURL: 'http://example.com/accessToken',
    callbackURL: 'http://example.com/callback',
    consumerKey: 'My Key',
    consumerSecret: 'My Secret',
    passReqToCallback: false,
    requestTokenURL: 'http://example.com/requestToken',
    userAuthorizationURL: 'http://example.com/userAuthorization'
};

function verifyFunction1(accessToken: string, tokenSecret: string, profile: any, callback: VerifyCallback) {
    callback(new Error('unimplemented'));
}

function verifyFunction2(accessToken: string, tokenSecret: string, params: any, profile: any, callback: VerifyCallback) {
    callback(new Error('unimplemented'));
}

const strategy1: OAuthStrategy = new OAuthStrategy(strategyOptions1, verifyFunction1);

const strategy2: OAuthStrategy = new OAuthStrategy(strategyOptions1, verifyFunction2);

function verifyFunction3(req: Request, accessToken: string, tokenSecret: string, profile: any, callback: VerifyCallback) {
    callback(undefined, { userid: '1' });
}

function verifyFunction4(req: Request, accessToken: string, tokenSecret: string, params: any, profile: any, callback: VerifyCallback) {
    callback(undefined, { userid: '1' });
}

const strategyOptions2: StrategyOptionsWithRequest = {
    accessTokenURL: 'http://example.com/accessToken',
    callbackURL: 'http://example.com/callback',
    consumerKey: 'My Key',
    consumerSecret: 'My Secret',
    passReqToCallback: true,
    requestTokenURL: 'http://example.com/requestToken',
    userAuthorizationURL: 'http://example.com/userAuthorization'
};

const strategy3: OAuthStrategy = new OAuthStrategy(strategyOptions2, verifyFunction3);

const strategy4: OAuthStrategy = new OAuthStrategy(strategyOptions2, verifyFunction4);

const err1 = new InternalOAuthError('Hello', {});
