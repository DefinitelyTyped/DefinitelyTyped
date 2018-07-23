import * as authToken from 'registry-auth-token';

// $ExpectType NpmCredentials
authToken('url');
// $ExpectType NpmCredentials
authToken({ recursive: true });
// $ExpectType NpmCredentials
authToken({ npmrc: { url: 'value' } });
// $ExpectType NpmCredentials
authToken({ npmrc: { registry: 'url' } });
// $ExpectType NpmCredentials
authToken('url', { npmrc: { url: 'value' } });

// $ExpectError
authToken();
