import getAuthToken = require('registry-auth-token');
import getRegistryUrl = require('registry-auth-token/registry-url');

// $ExpectType NpmCredentials | undefined
getAuthToken('url');
// $ExpectType NpmCredentials | undefined
getAuthToken({ recursive: true });
// $ExpectType NpmCredentials | undefined
getAuthToken({ npmrc: { url: 'value' } });
// $ExpectType NpmCredentials | undefined
getAuthToken({ npmrc: { registry: 'url' } });
// $ExpectType NpmCredentials | undefined
getAuthToken('url', { npmrc: { url: 'value' } });

const token = getAuthToken('url', {});

if (token) {
    token; // $ExpectType NpmCredentials
    token.password; // $ExpectType string | undefined
    token.token; // $ExpectType string
    token.type; // $ExpectType "Basic" | "Bearer"
    token.username; // $ExpectType string | undefined
} else {
    token; // $ExpectType undefined
}

// @ts-expect-error
getAuthToken();

getRegistryUrl('@foobar');
getRegistryUrl('http://registry.foobar.eu/', {
    npmrc: {
        registry: 'http://registry.foobar.eu/',
        '//registry.foobar.eu/:_authToken': 'qar',
    },
});
