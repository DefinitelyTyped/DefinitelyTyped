import { Strategy as OAuth2Strategy, StrategyOptions, VerifyCallback } from 'passport-oauth2';
import { use, requestNewAccessToken } from 'passport-oauth2-refresh';

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

const strategy1: OAuth2Strategy = new OAuth2Strategy(strategyOptions1, verifyFunction1);

use('strategy1', strategy1);

requestNewAccessToken('strategy1', 'exampleRefreshToken', (err, accessToken, refreshToken, results) => {});
requestNewAccessToken('strategy1', 'exampleRefreshToken', {}, (err, accessToken, refreshToken, results) => {});
