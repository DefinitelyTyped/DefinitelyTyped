import * as auth0 from 'auth0-js';

const webAuth = new auth0.WebAuth({
    domain: 'mine.auth0.com',
    clientID: 'dsa7d77dsa7d7'
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
            token_type=Bearer&state=theState&refresh_token=kajshdgfkasdjhgfas&scope=foo"
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
    email: 'me@example.com',
    password: '123456'
}, (err) => {});

webAuth.passwordlessStart({
    connection: 'the_connection',
    email: 'me@example.com',
    send: 'code'
}, (err, data) => {});

webAuth.signupAndAuthorize({
    connection: 'the_connection',
    email: 'me@example.com',
    password: '123456',
    scope: 'openid',
    user_metadata: {
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

webAuth.popup.buildPopupHandler();
webAuth.popup.preload({});
webAuth.popup.authorize({ domain: "", redirectUri: "", responseType: "code" }, (err, data) => {
    if (err) /* handle error */ return;
    // do something with data
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

webAuth.login({username: 'bar', password: 'foo'}, (err, data) => {});

webAuth.crossOriginAuthenticationCallback();

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

const authentication = new auth0.Authentication({
    domain: 'me.auth0.com',
    clientID: '...',
    redirectUri: 'http://page.com/callback',
    responseType: 'code',
    _sendTelemetry: false
});

authentication.buildAuthorizeUrl({state: '1234'});
authentication.buildAuthorizeUrl({
    responseType: 'token',
    redirectUri: 'http://anotherpage.com/callback2',
    prompt: 'none',
    state: '1234',
    connection_scope: 'scope1,scope2'
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

authentication.dbConnection.signup({connection: 'bla', email: 'blabla', password: '123456'}, () => {});
authentication.dbConnection.changePassword({connection: 'bla', email: 'blabla', password: '123456'}, () => {});

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

management.linkUser('asd', 'eqwe', (err, user) => {});
