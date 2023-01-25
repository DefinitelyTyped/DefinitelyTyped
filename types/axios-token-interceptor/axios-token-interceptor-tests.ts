import tokenProvider = require('axios-token-interceptor');
import { AxiosHeaders, AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';

const getToken = async (): Promise<tokenProvider.Token> => ({
    access_token: 'token1',
    expires_in: 50,
});

const cache = tokenProvider.tokenCache(getToken, {
    getMaxAge: token => token.expires_in,
});

cache().then((token: tokenProvider.Token) => {
    token.access_token; // $ExpectType string
    token.expires_in; // $ExpectType number
});

// @ts-expect-error
tokenProvider();

const validOptions1 = {
    getToken: () => 'qwerty',
};
const provider = tokenProvider(validOptions1); // $ExpectType TokenProvider
const oldConfig: AxiosRequestConfig = {
    headers: {}
};
const newConfig: InternalAxiosRequestConfig = {
    headers: new AxiosHeaders()
};
provider(oldConfig); // $ExpectType Promise<AxiosRequestConfig<any>>
provider(newConfig); // $ExpectType Promise<InternalAxiosRequestConfig<any>>

const validOptions2 = {
    getToken: () => Promise.resolve('qwerty'),
};
tokenProvider(validOptions2); // $ExpectType TokenProvider

// @ts-expect-error
tokenProvider.tokenCache();

const validCacheGetter = () => Promise.resolve('qwerty');
const validCacheOptions = {
    maxAge: 3600,
};
const cache2 = tokenProvider.tokenCache(validCacheGetter, validCacheOptions); // $Expect TokenCache

cache2.reset(); // $ExpectType void
cache2().then((token: string) => {});
