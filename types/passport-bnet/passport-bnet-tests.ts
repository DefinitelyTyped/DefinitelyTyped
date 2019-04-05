// Based on passport-oauth2/passport-oauth2-tests.ts

import BnetStrategy = require("passport-bnet");
import { Strategy, StrategyOptions, StrategyOptionsWithRequest } from "passport-bnet";
import { Strategy as OAuth2Strategy, VerifyCallback } from "passport-oauth2";
import { Request } from "express";

const strategyOptions1: StrategyOptions = {
    callbackURL: 'http://www.example.com/callback',
    clientID: 'dummy',
    clientSecret: 'secret',
    region: 'us',
    scope: "email",
    scopeSeparator: ' ',
    customHeaders: {}
};

function verifyFunction1(_accessToken: string, _refreshToken: string, _profile: any, verifyCallback: VerifyCallback) {
    verifyCallback(new Error('unimplemented'));
}

function verifyFunction2(_accessToken: string, _refreshToken: string, _results: any, _profile: any, verifyCallback: VerifyCallback) {
    verifyCallback(new Error('unimplemented'));
}

const strategy1: BnetStrategy = new BnetStrategy(strategyOptions1, verifyFunction1);

const strategy2: Strategy = new BnetStrategy(strategyOptions1, verifyFunction2);

function verifyFunction3(_req: Request, _accessToken: string, _refreshToken: string, _profile: any, verifyCallback: VerifyCallback) {
    verifyCallback(undefined, { userid: '1' });
}

function verifyFunction4(_req: Request, _accessToken: string, _refreshToken: string, _results: any, _profile: any, verifyCallback: VerifyCallback) {
    verifyCallback(undefined, { userid: '1' });
}

const strategyOptions2: StrategyOptionsWithRequest = {
    authorizationURL: 'http://www.example.com/auth',
    callbackURL: 'http://www.example.com/callback',
    clientID: 'dummy',
    clientSecret: 'secret',
    tokenURL: 'http://www.example.com/token',
    region: 'us',
    scope: "email",
    scopeSeparator: ' ',
    customHeaders: {},
    passReqToCallback: true
};

const strategy3: OAuth2Strategy = new BnetStrategy
(strategyOptions2, verifyFunction3);

const strategy4: Strategy = new Strategy(strategyOptions2, verifyFunction4);

class MyStrategy extends BnetStrategy {
    useProtectedProperty() {
        this._oauth2.get('http://www.example.com/profile', 'token', err => err.statusCode);
        this._oauth2.get('http://www.example.com/profile', 'token', (err, result) => result);
        this._oauth2.get('http://www.example.com/profile', 'token', (err, result, response) => response);
    }
}
