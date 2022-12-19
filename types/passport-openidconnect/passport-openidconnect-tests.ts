import OpenIDConnectStrategy = require('passport-openidconnect');
import {
    Strategy,
    StrategyOptions,
    VerifyCallback,
    AuthorizationError,
    TokenError,
    InternalOAuthError,
    VerifyFunction,
    Profile,
    SessionStore,
} from 'passport-openidconnect';
import { Request } from 'express';

const strategyOptions1: StrategyOptions = {
    authorizationURL: 'https://example.com/auth',
    callbackURL: 'https://example.com/callback',
    clientID: 'dummy',
    clientSecret: 'secret',
    issuer: 'https://example.com/issuer',
    tokenURL: 'https://example.com/token',
    userInfoURL: 'https://example.com/userinfo',
};

function verifyFunction1(_issuer: string, _profile: any, verifyCallback: VerifyCallback) {
    verifyCallback(new Error('not implemented'));
}

function verifyFunction2(_issuer: string, _profile: Profile, verifyCallback: VerifyCallback) {
    verifyCallback(new Error('not implemented'));
}

const strategy1: OpenIDConnectStrategy = new OpenIDConnectStrategy(strategyOptions1, verifyFunction1);
const strategy2: Strategy = new OpenIDConnectStrategy(strategyOptions1, verifyFunction2);

function verifyFunction3(issuer: string, profile: any, verifyCallback: VerifyCallback) {
    verifyCallback(null, { userId: '1' });
}

const err1 = new AuthorizationError('Description', 'invalid_request');
const err2 = new AuthorizationError('Description', 'invalid_request', undefined);
const err3 = new TokenError('undefined', 'invalid_request');
const err4 = new InternalOAuthError('Hello', {});

class MyStrategy extends OpenIDConnectStrategy {
    useProtectedProperty() {
        this._oauth2.get('https://example.com/profile', 'token', err => err.statusCode);
    }
}

class MyStore implements SessionStore {
    store(
        req: Request,
        ctx: OpenIDConnectStrategy.SessionStoreContext,
        appState: any,
        meta: any,
        callback: OpenIDConnectStrategy.SessionStoreStoreCallback,
    ): void {}

    verify(req: Request, handle: string, callback: OpenIDConnectStrategy.SessionStoreVerifyCallback): void {}
}

const myStore = new MyStore();

const strategyOptions2: StrategyOptions = {
    ...strategyOptions1,
    scope: ['user', 'profile'],
};
