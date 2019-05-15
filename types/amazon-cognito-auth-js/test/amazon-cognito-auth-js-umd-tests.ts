AmazonCognitoIdentity.CognitoIdToken; // $ExpectType typeof CognitoIdToken
AmazonCognitoIdentity.CognitoRefreshToken; // $ExpectType typeof CognitoRefreshToken
AmazonCognitoIdentity.CognitoAccessToken; // $ExpectType typeof CognitoAccessToken
AmazonCognitoIdentity.CognitoTokenScopes; // $ExpectType typeof CognitoTokenScopes
AmazonCognitoIdentity.CognitoAuthSession; // $ExpectType typeof CognitoAuthSession
AmazonCognitoIdentity.CognitoAuth; // $ExpectType typeof CognitoAuth
AmazonCognitoIdentity.DateHelper; // $ExpectType typeof DateHelper
AmazonCognitoIdentity.StorageHelper; // $ExpectType typeof StorageHelper

const sessionData: AmazonCognitoIdentity.CognitoSessionData = {};
new AmazonCognitoIdentity.CognitoAuthSession(sessionData);

const authOptions: AmazonCognitoIdentity.CognitoAuthOptions = {
    ClientId: '1a2b3c4d5e6f7g',
    AppWebDomain: 'myapp.auth.us-east-1.amazoncognito.com',
    RedirectUriSignIn: 'https://myapp.com/login',
    RedirectUriSignOut: 'https://myapp.com/logout'
};
const auth = new AmazonCognitoIdentity.CognitoAuth(authOptions);
auth.userhandler; // $ExpectType CognitoAuthUserHandler
auth.getCognitoConstants(); // $ExpectType CognitoConstants
auth.createCORSRequest('', ''); // $ExpectType XMLHttpRequest | XDomainRequest
