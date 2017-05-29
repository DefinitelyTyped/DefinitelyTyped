import * as auth0 from 'auth0-js';

let webAuth = new auth0.WebAuth({
    domain: 'mine.auth0.com',
    clientID: 'dsa7d77dsa7d7'
});

webAuth.authorize({
    audience: 'https://mystore.com/api/v2',
    scope: 'read:order write:order',
    responseType: 'token',
    redirectUri: 'https://example.com/auth/callback'
});

webAuth.parseHash(window.location.hash, (err, authResult) => {
    if (err) {
        return console.log(err);
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
    audience: 'https://mystore.com/api/v2',
    scope: 'read:order write:order',
    redirectUri: 'https://example.com/auth/silent-callback',

    // this will use postMessage to comunicate between the silent callback
    // and the SPA. When false the SDK will attempt to parse the url hash
    // should ignore the url hash and no extra behaviour is needed.
    usePostMessage: true
}, function (err, authResult) {
      // Renewed tokens or error
});

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
    scope: 'openid'
}, function (err, data) {

});

webAuth.client.login({
    realm: 'Username-Password-Authentication', //connection name or HRD domain
    username: 'info@auth0.com',
    password: 'areallystrongpassword',
    audience: 'https://mystore.com/api/v2',
    scope: 'read:order write:order',
}, function(err, authResult) {
    // Auth tokens in the result or an error
});

webAuth.popup.buildPopupHandler();
webAuth.popup.preload({});
webAuth.popup.authorize({}, (err, data) => {
    if (err) /* handle error */ return;
    // do something with data
});
webAuth.popup.loginWithCredentials({}, (err, data) => {
    if (err) /* handle error */ return;
    // do something with data
});
webAuth.popup.passwordlessVerify({}, (err, data) => {
    if (err) /* handle error */ return;
    // do something with data
});
webAuth.popup.signupAndLogin({}, (err, data) => {
    if (err) /* handle error */ return;
    // do something with data
});


let authentication = new auth0.Authentication({
    domain: 'me.auth0.com',
    clientID: '...',
    redirectUri: 'http://page.com/callback',
    responseType: 'code',
    _sendTelemetry: false
});

authentication.buildAuthorizeUrl({state:'1234'});
authentication.buildAuthorizeUrl({
    responseType: 'token',
    redirectUri: 'http://anotherpage.com/callback2',
    prompt: 'none',
    state: '1234',
    connection_scope: 'scope1,scope2'
});

authentication.buildLogoutUrl('asdfasdfds');
authentication.buildLogoutUrl();
authentication.userInfo('abcd1234', (err, data) => {
  //user info retrieved
});

authentication.delegation({
    grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
    refresh_token: 'your_refresh_token',
    api_type: 'app'
}, (err, data) => {
    if (!err) {
        localStorage.setItem('token', data.idToken)
    }
});

authentication.loginWithDefaultDirectory({
    username: 'someUsername',
    password: '123456'
}, (err, data) => {

});

authentication.oauthToken({
    username: 'someUsername',
    password: '123456',
    grantType: 'password'
}, (err, data) => {

});

authentication.getUserCountry((err, data) => {

});

authentication.getSSOData();
authentication.getSSOData(true, (err, data) => {});

authentication.dbConnection.signup({connection: 'bla', email: 'blabla', password: '123456'}, () => {});
authentication.dbConnection.changePassword({connection: 'bla', email: 'blabla', password: '123456'}, () => {});

authentication.passwordless.start({ connection: 'bla', send: 'blabla' }, () => {});
authentication.passwordless.verify({ connection: 'bla', send: 'link', verificationCode: 'asdfasd', email: 'me@example.com' }, () => {});

authentication.loginWithResourceOwner({
    username: 'the username',
    password: 'the password',
    connection: 'the_connection',
    scope: 'openid'
}, (err, data) => {});

let management = new auth0.Management({
    domain: 'me.auth0.com',
    token: 'token'
});

management.getUser('asd', (err, user) => {});

management.patchUserMetadata('asd', {role: 'admin'}, (err, user) => {
    if (!err && user.email_verified) return; // do something
});

management.linkUser('asd', 'eqwe', (err, user) => {});
