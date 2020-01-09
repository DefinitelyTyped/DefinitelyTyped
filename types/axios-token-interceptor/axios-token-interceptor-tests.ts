import tokenProvider = require('axios-token-interceptor');

tokenProvider(); // $ExpectError

const validOptions1 = {
	getToken: () => 'qwerty',
};
tokenProvider(validOptions1); // $ExpectType TokenProvider

const validOptions2 = {
	getToken: () => Promise.resolve('qwerty'),
};
tokenProvider(validOptions2); // $ExpectType TokenProvider

tokenProvider.tokenCache(); // $ExpectError

const validCacheGetter = () => Promise.resolve('qwerty');
const validCacheOptions = {
	maxAge: 3600,
};
const cache = tokenProvider.tokenCache(validCacheGetter, validCacheOptions); // $Expect TokenCache

cache.reset(); // $ExpectType void
