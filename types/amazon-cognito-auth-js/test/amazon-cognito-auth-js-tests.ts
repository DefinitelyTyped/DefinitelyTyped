import * as lib from 'amazon-cognito-auth-js';

const idToken: lib.CognitoIdToken = new lib.CognitoIdToken('fak3T0ken1==');
idToken.decodePayload(); // $ExpectType object
idToken.setJwtToken('fak3T0ken2=='); // $ExpectType void
idToken.getJwtToken(); // $ExpectType string
idToken.getExpiration(); // $ExpectType number

const refreshToken: lib.CognitoRefreshToken = new lib.CognitoRefreshToken('refreshplease==');
refreshToken.setToken('refreshagainplease=='); // $ExpectType void
refreshToken.getToken(); // $ExpectType string

const accessToken: lib.CognitoAccessToken = new lib.CognitoAccessToken('fak3T0ken3==');
accessToken.decodePayload(); // $ExpectType object
accessToken.setJwtToken('fak3T0ken4=='); // $ExpectType void
accessToken.getJwtToken(); // $ExpectType string
accessToken.getExpiration(); // $ExpectType number
accessToken.getUsername(); // $ExpectType string

const tokenScopes: lib.CognitoTokenScopes = new lib.CognitoTokenScopes(['email', 'custom1']);
tokenScopes.setTokenScopes(['openid']); // $ExpectType void
tokenScopes.getScopes(); // $ExpectType string[]

let sessionData: lib.CognitoSessionData = {};
let authSession: lib.CognitoAuthSession = new lib.CognitoAuthSession(sessionData);

sessionData = {
    IdToken: idToken,
    RefreshToken: refreshToken,
    AccessToken: accessToken,
    TokenScopes: tokenScopes,
    State: '/myapp/home'
};
authSession = new lib.CognitoAuthSession(sessionData);

authSession.setIdToken(new lib.CognitoIdToken('fak3T0ken5==')); // $ExpectType void
authSession.setRefreshToken(new lib.CognitoRefreshToken('refreshmeyetagain==')); // $ExpectType void
authSession.setAccessToken(new lib.CognitoAccessToken('fak3T0ken6==')); // $ExpectType void
authSession.setTokenScopes(new lib.CognitoTokenScopes(['email'])); // $ExpectType void
authSession.setState('/myapp/login'); // $ExpectType void
authSession.getIdToken(); // $ExpectType CognitoIdToken
authSession.getRefreshToken(); // $ExpectType CognitoRefreshToken
authSession.getAccessToken(); // $ExpectType CognitoAccessToken
authSession.getTokenScopes(); // $ExpectType CognitoTokenScopes
authSession.getState(); // $ExpectType string

let authOptions: lib.CognitoAuthOptions = {
    ClientId: '1a2b3c4d5e6f7g',
    AppWebDomain: 'myapp.auth.us-east-1.amazoncognito.com',
    RedirectUriSignIn: 'https://myapp.com/login',
    RedirectUriSignOut: 'https://myapp.com/logout'
};
let auth: lib.CognitoAuth = new lib.CognitoAuth(authOptions);

authOptions = {
    ClientId: '1a2b3c4d5e6f7g',
    AppWebDomain: 'myapp.auth.us-east-1.amazoncognito.com',
    TokenScopesArray: ['email', 'openid'],
    RedirectUriSignIn: 'https://myapp.com/login',
    RedirectUriSignOut: 'https://myapp.com/logout',
    IdentityProvider: 'Facebook',
    UserPoolId: 'us-east-1_faKE4ReAl',
    AdvancedSecurityDataCollectionFlag: true
};
auth = new lib.CognitoAuth(authOptions);

auth.getClientId(); // $ExpectType string
auth.getAppWebDomain(); // $ExpectType string
auth.getCurrentUser(); // $ExpectType string
auth.setUser('jane.doe'); // $ExpectType void
auth.useCodeGrantFlow(); // $ExpectType void
auth.useImplicitFlow(); // $ExpectType void
auth.getSignInUserSession(); // $ExpectType CognitoAuthSession
auth.getUsername(); // $ExpectType string
auth.setUsername('john.doe'); // $ExpectType void
auth.getState(); // $ExpectType string
auth.setState('/myhost/default.htm'); // $ExpectType void
auth.getSession(); // $ExpectType void
auth.parseCognitoWebResponse('url&stuff=true'); // $ExpectType void
auth.getCodeQueryParameter(new Map());  // $ExpectType void
auth.getTokenQueryParameter(new Map()); // $ExpectType void
auth.getCachedSession(); // $ExpectType CognitoAuthSession
auth.getLastUser(); // $ExpectType string
auth.cacheTokensScopes(); // $ExpectType void
auth.compareSets(new Set(['1']), new Set(['1'])); // $ExpectType boolean
auth.getHostName('https://site.com/page?size=10'); // $ExpectType string
auth.getQueryParameters('http://site.com?1=1&2=2', '?'); // $ExpectType Map<string, string>
auth.generateRandomString(5, '159erf'); // $ExpectType string
auth.clearCachedTokensScopes(); // $ExpectType void
auth.refreshSession('refreshToken=='); // $ExpectType void
// $ExpectType void
auth.makePOSTRequest({ 'Content-Type': 'application/json' }, { pool: '2' },
    'https://auth.com/signin',
    (data) => console.log(data),
    (error) => console.log(error));
auth.createCORSRequest('POST', '/myapp/login'); // $ExpectType XMLHttpRequest | XDomainRequest
auth.onFailure('request failed'); // $ExpectType void
auth.onSuccessRefreshToken('{"name":"John", "age":31}'); // $ExpectType void
auth.onSuccessExchangeForToken('{"name":"Jane", "age":30}'); // $ExpectType void
auth.launchUri('https://auth.com/login'); // $ExpectType void
auth.getSpaceSeperatedScopeString(); // $ExpectType string
auth.getFQDNSignIn(); // $ExpectType string
auth.signOut(); // $ExpectType void
auth.getFQDNSignOut(); // $ExpectType string
auth.getUserContextData(); // $ExpectType string
auth.isUserSignedIn(); // $ExpectType boolean

const userHandler: lib.CognitoAuthUserHandler = {
    onSuccess: (authSession: lib.CognitoAuthSession) => console.log(authSession),
    onFailure: (error: any) => console.log(error)
};
auth.userhandler = userHandler;

const constants: lib.CognitoConstants = auth.getCognitoConstants();
constants.DOMAIN_SCHEME; // $ExpectType string
constants.DOMAIN_PATH_SIGNIN; // $ExpectType string
constants.DOMAIN_PATH_TOKEN; // $ExpectType string
constants.DOMAIN_PATH_SIGNOUT; // $ExpectType string
constants.DOMAIN_QUERY_PARAM_REDIRECT_URI; // $ExpectType string
constants.DOMAIN_QUERY_PARAM_SIGNOUT_URI; // $ExpectType string
constants.DOMAIN_QUERY_PARAM_RESPONSE_TYPE; // $ExpectType string
constants.DOMAIN_QUERY_PARAM_IDENTITY_PROVIDER; // $ExpectType string
constants.DOMAIN_QUERY_PARAM_USERCONTEXTDATA; // $ExpectType string
constants.CLIENT_ID; // $ExpectType string
constants.STATE; // $ExpectType string
constants.SCOPE; // $ExpectType string
constants.TOKEN; // $ExpectType string
constants.CODE; // $ExpectType string
constants.POST; // $ExpectType string
constants.PARAMETERERROR; // $ExpectType string
constants.SCOPETYPEERROR; // $ExpectType string
constants.QUESTIONMARK; // $ExpectType string
constants.POUNDSIGN; // $ExpectType string
constants.COLONDOUBLESLASH; // $ExpectType string
constants.SLASH; // $ExpectType string
constants.AMPERSAND; // $ExpectType string
constants.EQUALSIGN; // $ExpectType string
constants.SPACE; // $ExpectType string
constants.CONTENTTYPE; // $ExpectType string
constants.CONTENTTYPEVALUE; // $ExpectType string
constants.AUTHORIZATIONCODE; // $ExpectType string
constants.IDTOKEN; // $ExpectType string
constants.ACCESSTOKEN; // $ExpectType string
constants.REFRESHTOKEN; // $ExpectType string
constants.ERROR; // $ExpectType string
constants.ERROR_DESCRIPTION; // $ExpectType string
constants.STRINGTYPE; // $ExpectType string
constants.STATELENGTH; // $ExpectType number
constants.STATEORIGINSTRING; // $ExpectType string
constants.WITHCREDENTIALS; // $ExpectType string
constants.UNDEFINED; // $ExpectType string
constants.SELF; // $ExpectType string
constants.HOSTNAMEREGEX; // $ExpectType RegExp
constants.QUERYPARAMETERREGEX1; // $ExpectType RegExp
constants.QUERYPARAMETERREGEX2; // $ExpectType RegExp
constants.HEADER['Content-Type']; // $ExpectType string

const dateHelper: lib.DateHelper = new lib.DateHelper();
dateHelper.getNowString(); // $ExpectType string

const storageHelper: lib.StorageHelper = new lib.StorageHelper();
storageHelper.getStorage(); // $ExpectType Storage
