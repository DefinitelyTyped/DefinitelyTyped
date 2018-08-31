import tokenProvider = require('axios-token-interceptor');

tokenProvider(); // $ExpectError

const validOptions = {
	getToken: () => Promise.resolve('qwerty'),
};
tokenProvider(validOptions); // $ExpectType TokenProvider

tokenCache(); // $ExpectError

const getToken = Promise.resolve('qwerty');
const validCacheOptions = {
	maxAge: 3600,
};
const cache = tokenProvider.tokenCache(getToken, validCacheOptions); // $Expect TokenCache

cache.reset(); // $ExpectType void
