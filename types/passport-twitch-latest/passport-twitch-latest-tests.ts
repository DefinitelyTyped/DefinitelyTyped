import {
    Strategy as TwitchStrategy,
    OAuth2Strategy as OtherStrategy,
    StrategyOptions,
    StrategyOptionsWithRequest,
    TwitchProfile,
    VerifyFunctionWithResults,
    VerifyFunctionWithRequestResults,
} from 'passport-twitch-latest';
import { VerifyCallback } from 'passport-oauth2';
import { Request } from 'express';

const exampleStrategy = new TwitchStrategy(
    {
        clientID: '',
        clientSecret: '',
        callbackURL: '',
        scope: '',
    },
    (accessToken, refreshToken, profile, done) => {
        done(new Error(), {});
    },
);

const exampleStrategyResults = new TwitchStrategy(
    {
        clientID: '',
        clientSecret: '',
        callbackURL: '',
        scope: '',
    },
    ((accessToken, refreshToken, results, profile, done) => {
        done(new Error(), {});
    }) as VerifyFunctionWithResults, // We must cast this due to type inference: https://github.com/Microsoft/TypeScript/issues/16867
);

const exampleStrategyRequest = new TwitchStrategy(
    {
        clientID: '',
        clientSecret: '',
        callbackURL: '',
        scope: '',
        passReqToCallback: true,
    },
    (req, accessToken, refreshToken, profile, done) => {
        done(new Error(), {});
    },
);

const exampleStrategyRequestResults = new TwitchStrategy(
    {
        clientID: '',
        clientSecret: '',
        callbackURL: '',
        scope: '',
        passReqToCallback: true,
    },
    ((req, accessToken, refreshToken, results, profile, done) => {
        done(new Error(), {});
    }) as VerifyFunctionWithRequestResults, // We must cast this due to type inference: https://github.com/Microsoft/TypeScript/issues/16867
);

const strategyOptions1: StrategyOptions = {
    callbackURL: 'http://www.example.com/callback',
    clientID: 'dummy',
    clientSecret: 'secret',
};

const twitchProfile: TwitchProfile = {
    id: '',
    login: '',
    display_name: '',
    type: '',
    broadcaster_type: '',
    description: '',
    profile_image_url: '',
    offline_image_url: '',
    view_count: 0,
    provider: '',
};

function verifyFunction1(
    _accessToken: string,
    _refreshToken: string,
    _profile: TwitchProfile,
    verifyCallback: VerifyCallback,
) {
    verifyCallback(new Error('unimplemented'));
}

function verifyFunction2(
    _accessToken: string,
    _refreshToken: string,
    _results: any,
    _profile: TwitchProfile,
    verifyCallback: VerifyCallback,
) {
    verifyCallback(new Error('unimplemented'));
}

const strategy1: TwitchStrategy = new TwitchStrategy(strategyOptions1, verifyFunction1);

const strategy2: TwitchStrategy = new TwitchStrategy(strategyOptions1, verifyFunction2);

function verifyFunction3(
    _req: Request,
    _accessToken: string,
    _refreshToken: string,
    _profile: TwitchProfile,
    verifyCallback: VerifyCallback,
) {
    verifyCallback(undefined, { userid: '1' });
}

function verifyFunction4(
    _req: Request,
    _accessToken: string,
    _refreshToken: string,
    _results: any,
    _profile: TwitchProfile,
    verifyCallback: VerifyCallback,
) {
    verifyCallback(undefined, { userid: '1' });
}

const strategyOptions2: StrategyOptionsWithRequest = {
    clientID: 'dummy',
    clientSecret: 'secret',
    passReqToCallback: true,
};

const strategy3 = new OtherStrategy(strategyOptions2, verifyFunction3);

const strategy4 = new OtherStrategy(strategyOptions2, verifyFunction4);

class MyStrategy extends TwitchStrategy {
    useProtectedProperty() {
        this._oauth2.get('http://www.example.com/profile', 'token', err => err.statusCode);
        this._oauth2.get('http://www.example.com/profile', 'token', (err, result) => result);
        this._oauth2.get('http://www.example.com/profile', 'token', (err, result, response) => response);
    }
}

const strategyOptions3: StrategyOptions = {
    authorizationURL: 'http://www.example.com/auth',
    clientID: 'dummy',
    clientSecret: 'secret',
    tokenURL: 'http://www.example.com/token',
    callbackURL: 'http://www.example.com/callback',
    customHeaders: {
        'content-type': 'text/html',
    },
    scope: ['scope1', 'scope2'],
    scopeSeparator: ' ',
    sessionKey: 'oauth',
    state: { id: 1 },
    skipUserProfile: true,
    pkce: false,
};

const strategy5: TwitchStrategy = new TwitchStrategy(strategyOptions3, verifyFunction2);
