import * as auth0 from 'auth0-js';

auth0.version.raw; // $ExpectType string
auth0.version; // $ExpectType { raw: string; }

const webAuth = new auth0.WebAuth({
    domain: 'mine.auth0.com',
    clientID: 'dsa7d77dsa7d7',
    maxAge: 40,
    responseType: "code",
    responseMode: "mode",
    redirectUri: "http://example.com/redirect",
    scope: "openid offline_access",
    audience: "http://audience.com/aud",
    leeway: 50,
    jwksURI: "./well-known/jwks.json",
    overrides: {
        __tenant: "tenant",
        __token_issuer: "mine.auth0.com",
        __jwks_uri: "/jwks.json"
    },
    plugins: {
        plugins: []
    },
    popupOrigin: "http://example.com/popup",
    protocol: "oauth2",
    response_type: "code",
    state: "G96SDdfQW01SmVKcXdlVjRN",
    tenant: "tenant",
    universalLoginPage: true,
    _csrf: "vMSoQzzI",
    _intstate: "deprecated",
    _timesToRetryFailedRequests: 1,
    _disableDeprecationWarnings: false,
    _sendTelemetry: true,
    _telemetryInfo: {},
    __tryLocalStorageFirst: true,
});

webAuth.authorize({
    audience: 'https://mystore.com/api/v2',
    scope: 'read:order write:order',
    responseType: 'token',
    redirectUri: 'https://example.com/auth/callback',
    language: 'en',
    login_hint: "email@email.com",
    prompt: 'login',
});

webAuth.parseHash((err, authResult) => {
    if (err) {
        console.log(err);
    }

  // The contents of authResult depend on which authentication parameters were used.
  // It can include the following:
  // authResult.accessToken - access token for the API specified by `audience`
  // authResult.expiresIn - string with the access token's expiration time in seconds
  // authResult.idToken - ID token JWT containing user profile information

    webAuth.client.userInfo(authResult.accessToken, (err, user) => {
        // Now you have the user's information
    });
});

webAuth.parseHash((err, authResult) => {
    if (err) {
        console.log(err);
    }

  // The contents of authResult depend on which authentication parameters were used.
  // It can include the following:
  // authResult.accessToken - access token for the API specified by `audience`
  // authResult.expiresIn - string with the access token's expiration time in seconds
  // authResult.idToken - ID token JWT containing user profile information

    webAuth.client.userInfo(authResult.accessToken, (err, user) => {
        // Now you have the user's information
    });
});

webAuth.parseHash(
    {
        nonce: 'asfd',
        hash: "#access_token=VjubIMBmpgQ2W2& \
            id_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlF6RTROMFpCTTBWRFF6RTJSVVUwTnpJMVF6WTFNelE0UVRrMU16QXdNRUk0UkRneE56RTRSZyJ9. \
            eyJpc3MiOiJodHRwczovL3dwdGVzdC5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NTVkNDhjNTdkNWIwYWQwMjIzYzQwOGQ3IiwiYXVkIjoiZ1lTTmxVNFlDNFYxWVBkcXE \
            4elBRY3VwNnJKdzFNYnQiLCJleHAiOjE0ODI5NjkwMzEsImlhdCI6MTQ4MjkzMzAzMSwibm9uY2UiOiJhc2ZkIn0. \
            PPoh-pITcZ8qbF5l5rMZwXiwk5efbESuqZ0IfMUcamB6jdgLwTxq-HpOT_x5q6-sO1PBHchpSo1WHeDYMlRrOFd9bh741sUuBuXdPQZ3Zb0i2sNOAC2RFB \
            1E11mZn7uNvVPGdPTg-Y5xppz30GSXoOJLbeBszfrVDCmPhpHKGGMPL1N6HV-3EEF77L34YNAi2JQ-b70nFK_dnYmmv0cYTGUxtGTHkl64UEDLi3u7bV- \
            kbGky3iOOCzXKzDDY6BBKpCRTc2KlbrkO2A2PuDn27WVv1QCNEFHvJN7HxiDDzXOsaUmjrQ3sfrHhzD7S9BcCRkekRfD9g95SKD5J0Fj8NA& \
            token_type=Bearer&state=theState&refresh_token=kajshdgfkasdjhgfas&scope=foo",
        __enableIdPInitiatedLogin: true,
    },
    (err, authResult) => {
    if (err) {
        console.log(err);
    }

  // The contents of authResult depend on which authentication parameters were used.
  // It can include the following:
  // authResult.accessToken - access token for the API specified by `audience`
  // authResult.expiresIn - string with the access token's expiration time in seconds
  // authResult.idToken - ID token JWT containing user profile information

    webAuth.client.userInfo(authResult.accessToken, (err, user) => {
        // Now you have the user's information
    });
});

webAuth.parseHash(
    {
        nonce: 'asfd'
    },
    (err, authResult) => {
    if (err) {
        console.log(err);
    }

  // The contents of authResult depend on which authentication parameters were used.
  // It can include the following:
  // authResult.accessToken - access token for the API specified by `audience`
  // authResult.expiresIn - string with the access token's expiration time in seconds
  // authResult.idToken - ID token JWT containing user profile information

    webAuth.client.userInfo(authResult.accessToken, (err, user) => {
        // Now you have the user's information
    });
});

webAuth.renewAuth({
}, (err, authResult) => {
      // Renewed tokens or error
});

webAuth.renewAuth({
    nonce: '123',
    state: '456'
}, (err, authResult)  => {
      // Renewed tokens or error
});

webAuth.renewAuth({}, (err, authResult) => {});

webAuth.renewAuth({
    nonce: '123',
    state: '456',
    postMessageDataType: 'auth0:silent-authentication',
    usePostMessage: true,
    timeout: 30 * 1000
}, (err, authResult) => {
      // Renewed tokens or error
});

webAuth.renewAuth({
  audience: 'urn:site:demo:blog',
  redirectUri: 'http://page.com/callback',
  usePostMessage: true
}, (err, authResult) => {});

webAuth.changePassword({connection: 'the_connection',
    email: 'me@example.com'
}, (err) => {});

webAuth.passwordlessStart({
    connection: 'the_connection',
    email: 'me@example.com',
    send: 'code'
}, (err, data) => {});

webAuth.passwordlessLogin({
    connection: 'the_connection',
    phoneNumber: '123',
    verificationCode: '456',
    state: '12313eqwasdadaasd'
}, (err, data) => {});

webAuth.signupAndAuthorize({
    connection: 'the_connection',
    email: 'me@example.com',
    password: '123456',
    scope: 'openid',
    username: "blabla",
    userMetadata: {
        foo: 'bar'
    }
}, (err, data) => {});

webAuth.client.login({
    realm: 'Username-Password-Authentication', // connection name or HRD domain
    username: 'info@auth0.com',
    password: 'areallystrongpassword',
    audience: 'https://mystore.com/api/v2',
    scope: 'read:order write:order',
}, (err, authResult) => {/*Auth tokens in the result or an error*/});

webAuth.popup.buildPopupHandler(); // $ExpectError
webAuth.popup.preload({});
webAuth.popup.authorize({ domain: "", redirectUri: "", responseType: "code" }, (err, result) => {
    if (err) /* handle error */ return;
    // do something with results
    if (result) {
        // ...
    }
});
webAuth.popup.loginWithCredentials({}, (err, data) => {
    if (err) /* handle error */ return;
    // do something with data
});
webAuth.popup.passwordlessVerify({ type: "sms", phoneNumber: "", connection: "", verificationCode: "" }, (err, data) => {
    if (err) /* handle error */ return;
    // do something with data
});
webAuth.popup.signupAndLogin({ email: "", password: "", connection: "" }, (err, data) => {
    if (err) /* handle error */ return;
    // do something with data
});

webAuth.login({username: 'bar', password: 'foo', state: '1234'}, (err, data) => {});

// cross-origin verification
webAuth.crossOriginVerification();

webAuth.checkSession({
  audience: 'https://mystore.com/api/v2',
  scope: 'read:order write:order',
  redirectUri: 'https://example.com/auth/silent-callback'
  }, (err, authResult) => {
    // Authentication tokens or error
});

webAuth.checkSession({
  audience: 'https://mystore.com/api/v2',
  scope: 'read:order write:order',
  redirectUri: 'https://example.com/auth/silent-callback',
  usePostMessage: true
  }, (err, authResult) => {
    // Renewed tokens or error
});

//  use case; get a new token for the API
webAuth.checkSession({}, (err, authResult: auth0.Auth0Result) => {
    if (err) {
        err; // $ExpectType Auth0Error
    } else {
        authResult.accessToken; // $ExpectType string
    }
});

const input: HTMLInputElement = document.querySelector('input[name="captcha"]');
webAuth.renderCaptcha(input);
webAuth.renderCaptcha(input, {});
webAuth.renderCaptcha(input, {
    lang: 'pl',
    templates: {
        error: error => {
            return 'error';
        },
        auth0: challenge => 'auth0',
        recaptcha_v2: challenge => 'recaptcha_v2',
    },
});
webAuth.renderCaptcha(input, {
    lang: 'pl',
    templates: {
        error: error => {
            return 'error';
        },
        auth0: challenge => 'auth0',
        recaptcha_v2: challenge => 'recaptcha_v2',
    },
}, error => {
    if (error) {
        // handle error
    }
});

const authentication = new auth0.Authentication({
    domain: 'me.auth0.com',
    clientID: '...',
    redirectUri: 'http://page.com/callback',
    responseType: 'code',
    _sendTelemetry: false
});

// $ExpectError
authentication.buildAuthorizeUrl({state: '1234'});
// $ExpectError
authentication.buildAuthorizeUrl();
// $ExpectType string
authentication.buildAuthorizeUrl({
    audience: 'audience',
    clientID: 'clientID',
    nonce: '1234',
    redirectUri: 'http://anotherpage.com/callback2',
    responseMode: 'query',
    responseType: 'code token',
    scope: 'openid email',
    state: '1234',
});

authentication.buildLogoutUrl({ clientID: 'asdfasdfds' });
authentication.buildLogoutUrl();
authentication.userInfo('abcd1234', (err, data) => {
  // user info retrieved
});

authentication.delegation({
    grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
    refresh_token: 'your_refresh_token',
    api_type: 'app'
}, (err, data) => {
    if (!err) {
        localStorage.setItem('token', data.idToken);
    }
});

authentication.loginWithDefaultDirectory({
    username: 'someUsername',
    password: '123456'
}, (err, data) => {});

authentication.oauthToken({
    username: 'someUsername',
    password: '123456',
    grantType: 'password'
}, (err, data) => {});

authentication.getUserCountry((err, data) => {});

authentication.getSSOData();
authentication.getSSOData(true, (err, data) => {});

// $ExpectError
authentication.dbConnection.signup();
// $ExpectError
authentication.dbConnection.signup({});
// $ExpectError
authentication.dbConnection.signup({ connection: 'bla', email: 'blabla' });
// $ExpectError
authentication.dbConnection.signup({ connection: 'bla', email: 'blabla', password: '123456' });
authentication.dbConnection.signup(
    { connection: 'bla', email: 'blabla', password: '123456', username: 'blabla' },
    (auth0Error, results) => {
        if (auth0Error) {
            const { error, errorDescription } = auth0Error;
        }
        if (results) {
            const { email, emailVerified } = results;
        }
    },
);
authentication.dbConnection.signup(
    {
        email: 'the email',
        password: 'the password',
        connection: 'the_connection',
        userMetadata: {
            firstName: 'Toon',
            lastName: 'De Coninck',
            last_location: 'Mexico',
        },
    },
    (err, data) => {
        console.assert(err === null);
        console.assert(data.email !== null);
    },
);
authentication.dbConnection.changePassword({connection: 'bla', email: 'blabla'}, () => {});

authentication.passwordless.start({ connection: 'bla', send: 'blabla' }, () => {});
authentication.passwordless.verify({ connection: 'bla', verificationCode: 'asdfasd', email: 'me@example.com' }, () => {});

authentication.loginWithResourceOwner({
    username: 'the username',
    password: 'the password',
    connection: 'the_connection',
    scope: 'openid'
}, (err, data) => {});

const management = new auth0.Management({
    domain: 'me.auth0.com',
    token: 'token'
});

management.getUser('asd', (err, user) => {});

management.patchUserMetadata('asd', {role: 'admin'}, (err, user) => {
    if (!err && user.email_verified) return; // do something
});

// tslint:disable-next-line: prefer-const
let user: auth0.Auth0UserProfile;
management.patchUserAttributes(); // $ExpectError
management.patchUserAttributes('...'); // $ExpectError
management.patchUserAttributes('...', {}); // $ExpectError
management.patchUserAttributes('auth0|123', user, (err, user) => {}); // $ExpectType void
