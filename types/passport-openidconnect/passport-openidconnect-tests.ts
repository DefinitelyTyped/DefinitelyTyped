import { OpenIDConnectStrategy } from 'passport-openidconnect';
import { Request } from 'express';

const strategyOptions1: OpenIDConnectStrategy.StrategyOptions = {
    authorizationURL: 'https://example.com/auth',
    callbackURL: 'https://example.com/callback',
    clientID: 'dummy',
    clientSecret: 'secret',
    issuer: 'https://example.com/issuer',
    tokenURL: 'https://example.com/token',
    userInfoURL: 'https://example.com/userinfo',
};

function verifyFunction1(_issuer: string, _profile: any, verifyCallback: OpenIDConnectStrategy.VerifyCallback) {
    verifyCallback(new Error('not implemented'));
}

function verifyFunction2(
    _issuer: string,
    _profile: OpenIDConnectStrategy.Profile,
    verifyCallback: OpenIDConnectStrategy.VerifyCallback,
) {
    verifyCallback(new Error('not implemented'));
}

const strategy1: OpenIDConnectStrategy = new OpenIDConnectStrategy(strategyOptions1, verifyFunction1);
const strategy2: OpenIDConnectStrategy.Strategy = new OpenIDConnectStrategy(strategyOptions1, verifyFunction2);

function verifyFunction3(issuer: string, profile: any, verifyCallback: OpenIDConnectStrategy.VerifyCallback) {
    verifyCallback(null, { userId: '1' });
}

const err1 = new OpenIDConnectStrategy.AuthorizationError('Description', 'invalid_request');
const err2 = new OpenIDConnectStrategy.AuthorizationError('Description', 'invalid_request', undefined);
const err3 = new OpenIDConnectStrategy.TokenError('undefined', 'invalid_request');
const err4 = new OpenIDConnectStrategy.InternalOAuthError('Hello', {});

class MyStrategy extends OpenIDConnectStrategy {
    useProtectedProperty() {
        this._oauth2.get('https://example.com/profile', 'token', err => err.statusCode);
    }
}

class MyStore implements OpenIDConnectStrategy.SessionStore {
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

const strategyOptions2: OpenIDConnectStrategy.StrategyOptions = {
    ...strategyOptions1,
    scope: ['user', 'profile'],
};
