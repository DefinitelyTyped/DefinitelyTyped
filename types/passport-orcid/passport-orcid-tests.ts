import OrcidStrategy = require('passport-orcid');
import {
    Strategy,
    StrategyOptions,
    StrategyOptionsWithRequest,
    VerifyFunction,
    VerifyFunctionWithRequest,
} from 'passport-orcid';

const strategy: OrcidStrategy = {} as any;
const options1: StrategyOptions = {} as any;
const options2: StrategyOptionsWithRequest = {} as any;
const verify1: VerifyFunction = {} as any;
const verify2: VerifyFunctionWithRequest = {} as any;

// $ExpectType OrcidStrategy
new OrcidStrategy(options1, verify1);
// $ExpectType OrcidStrategy
new OrcidStrategy(options2, verify2);

const strategy3: Strategy = strategy;
const strategy4: Strategy = strategy;

// @ts-expect-error
new OrcidStrategy(options1, verify2);
// @ts-expect-error
new OrcidStrategy(options2, verify1);

const options1WithNoClientId: StrategyOptions = {
    ...options1,
    // @ts-expect-error
    clientID: undefined,
};

const options1WithNoClientSecret: StrategyOptions = {
    ...options1,
    // @ts-expect-error
    clientSecret: undefined,
};

const options1withAuthorizationUrl: StrategyOptions = {
    ...options1,
    // @ts-expect-error
    authorizationURL: 'http://www.example.com/auth',
};

const options1withTokenUrl: StrategyOptions = {
    ...options1,
    // @ts-expect-error
    tokenURL: 'http://www.example.com/token',
};

const options2withAuthorizationUrl: StrategyOptionsWithRequest = {
    ...options2,
    // @ts-expect-error
    authorizationURL: 'http://www.example.com/auth',
};

const options2withTokenUrl: StrategyOptionsWithRequest = {
    ...options2,
    // @ts-expect-error
    tokenURL: 'http://www.example.com/token',
};
