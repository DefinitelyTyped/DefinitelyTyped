import axios from "axios";
import tokenProvider = require("axios-token-interceptor");

const getToken = async (): Promise<tokenProvider.Token> => ({
    access_token: "token1",
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
    getToken: () => "qwerty",
};
const provider1 = tokenProvider(validOptions1); // $ExpectType TokenProvider
axios.interceptors.request.use(provider1);

const validOptions2 = {
    getToken: () => Promise.resolve("qwerty"),
};
const provider2 = tokenProvider(validOptions2); // $ExpectType TokenProvider
axios.interceptors.request.use(provider2);

// @ts-expect-error
tokenProvider.tokenCache();

const validCacheGetter = () => Promise.resolve("qwerty");
const validCacheOptions = {
    maxAge: 3600,
};
const cache2 = tokenProvider.tokenCache(validCacheGetter, validCacheOptions); // $Expect TokenCache

cache2.reset(); // $ExpectType void
cache2().then((token: string) => {});
