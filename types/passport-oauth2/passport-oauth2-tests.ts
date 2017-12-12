import OAuth2Strategy = require('passport-oauth2');
import { Strategy, StrategyOptions, StrategyOptionsWithRequest, VerifyCallback, AuthorizationError, TokenError, InternalOAuthError } from 'passport-oauth2';
import { Strategy as PassportStrategy } from 'passport';
import { Request } from 'express';

const strategyOptions1: StrategyOptions = {
    authorizationURL: 'http://www.example.com/auth',
    callbackURL: 'http://www.example.com/callback',
    clientID: 'dummy',
    clientSecret: 'secret',
    tokenURL: 'http://www.example.com/token'
};

function verifyFunction1(_accessToken: string, _refreshToken: string, _profile: any, verifyCallback: VerifyCallback) {
    verifyCallback(new Error('unimplemented'));
}

function verifyFunction2(_accessToken: string, _refreshToken: string, _results: any, _profile: any, verifyCallback: VerifyCallback) {
    verifyCallback(new Error('unimplemented'));
}

const strategy1: OAuth2Strategy = new OAuth2Strategy(strategyOptions1, verifyFunction1);

const strategy2: Strategy = new OAuth2Strategy(strategyOptions1, verifyFunction2);

function verifyFunction3(_req: Request, _accessToken: string, _refreshToken: string, _profile: any, verifyCallback: VerifyCallback) {
    verifyCallback(undefined, {userid: '1'});
}

function verifyFunction4(_req: Request, _accessToken: string, _refreshToken: string, _results: any, _profile: any, verifyCallback: VerifyCallback) {
    verifyCallback(undefined, {userid: '1'});
}

const strategyOptions2: StrategyOptionsWithRequest = {
    authorizationURL: 'http://www.example.com/auth',
    callbackURL: 'http://www.example.com/callback',
    clientID: 'dummy',
    clientSecret: 'secret',
    tokenURL: 'http://www.example.com/token',
    passReqToCallback: true
};

const strategy3: PassportStrategy = new OAuth2Strategy(strategyOptions2, verifyFunction3);

const strategy4: Strategy = new Strategy(strategyOptions2, verifyFunction4);

const err1 = new AuthorizationError('Description', 'invalid_request', undefined);

const err2 = new TokenError(undefined, 'invalid_request', undefined);

const err3 = new InternalOAuthError('Hello', {});
