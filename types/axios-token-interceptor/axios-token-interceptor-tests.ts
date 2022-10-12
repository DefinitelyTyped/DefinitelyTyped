import tokenProvider = require('axios-token-interceptor');

interface TokenData {
    access_token: string;
    expires_in: number;
}

const getToken = async (): Promise<TokenData> => ({
    access_token: 'token1',
    expires_in: 50,
});

// $ExpectType TokenCache
const cacheToken = tokenProvider.tokenCache<TokenData>(
    getToken,
    { getMaxAge: token => token.expires_in },
);

const tokenProviderOptions: tokenProvider.InterceptorOptions<TokenData> = {
    getToken: cacheToken,
    headerFormatter: (token: TokenData) => `Bearer ${token.access_token}`,
};

tokenProvider(tokenProviderOptions); // $ExpectType TokenProvider

tokenProvider.tokenCache(getToken, {
    getMaxAge: token => token.expires_in,
});

// @ts-expect-error
tokenProvider();

const validOptions1 = {
    getToken: () => 'qwerty',
};
tokenProvider(validOptions1); // $ExpectType TokenProvider

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
const cache = tokenProvider.tokenCache(validCacheGetter, validCacheOptions); // $Expect TokenCache

cache.reset(); // $ExpectType void
