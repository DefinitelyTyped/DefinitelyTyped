// Type definitions for Auth0.js 8.6
// Project: https://github.com/auth0/auth0.js
// Definitions by: Adrian Chia <https://github.com/adrianchia>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace auth0;


export class Authentication {
    constructor(options: AuthOptions);

    passwordless: PasswordlessAuthentication;
    dbConnection: DBConnection;

    /**
     * Builds and returns the `/authorize` url in order to initialize a new authN/authZ transaction
     *
     * @param {Object} options: https://auth0.com/docs/api/authentication#!#get--authorize_db
     */
    buildAuthorizeUrl(options: any): string;

    /**
     * Builds and returns the Logout url in order to initialize a new authN/authZ transaction
     *
     * @param {Object} options: https://auth0.com/docs/api/authentication#!#get--v2-logout
     */
    buildLogoutUrl(options?: LogoutOptions): string;

    /**
     * Makes a call to the `oauth/token` endpoint with `password` grant type
     *
     * @param {DefaultDirectoryLoginOptions} options: https://auth0.com/docs/api-auth/grant/password
     * @param {Function} callback
     */
    loginWithDefaultDirectory(options: DefaultDirectoryLoginOptions, callback: Auth0Callback<any>): void;

    /**
     * Makes a call to the `/ro` endpoint
     * @param {ResourceOwnerLoginOptions}      options
     * @param {Function} callback
     * @deprecated `loginWithResourceOwner` will be soon deprecated, user `login` instead.
     */
    loginWithResourceOwner(options: ResourceOwnerLoginOptions, callback: Auth0Callback<any>): void;

    /**
     * Makes a call to the `oauth/token` endpoint with `password-realm` grant type
     * @param {DefaultLoginOptions}     options
     * @param {Function} callback
     */
    login(options: DefaultLoginOptions, callback: Auth0Callback<any>): void;

    /**
     * Makes a call to the `oauth/token` endpoint
     * @param {any}      options
     * @param {Function} callback
     */
    oauthToken(options: any, callback: Auth0Callback<any>): void;

    /**
     * Makes a call to the `/ssodata` endpoint
     *
     * @param {Function} callback
     */
    getSSOData(callback?: Auth0Callback<any>): void;

    /**
     * Makes a call to the `/ssodata` endpoint
     *
     * @param {Boolean} withActiveDirectories
     * @param {Function} callback
     */
    getSSOData(withActiveDirectories: boolean, callback?: Auth0Callback<any>): void;

    /**
     * Makes a call to the `/userinfo` endpoint and returns the user profile
     *
     * @param {String} accessToken
     * @param {Function} callback
     */
    userInfo(accessToken: string, callback: Auth0Callback<Auth0UserProfile>): void;

    /**
     * Makes a call to the `/delegation` endpoint
     *
     * @param {DelegationOptions} options: https://auth0.com/docs/api/authentication#!#post--delegation
     * @param {Function} callback
     */
    delegation(options: DelegationOptions, callback: Auth0Callback<Auth0DelegationToken>): any;

    /**
     * Fetches the user country based on the ip.
     *
     * @param {Function} callback
     */
    getUserCountry(callback: Auth0Callback<{ countryCode: string }>): void;
}

export class PasswordlessAuthentication {
    constructor(request: any, option: any);

    /**
     * Builds and returns the passwordless TOTP verify url in order to initialize a new authN/authZ transaction
     *
     * @param {PasswordlessVerifyOptions} options
     * @param {Function} callback
     */
    buildVerifyUrl(options: PasswordlessVerifyOptions): string;

    /**
     * Initializes a new passwordless authN/authZ transaction
     *
     * @param {Object} options: https://auth0.com/docs/api/authentication#passwordless
     * @param {Function} callback
     */
    start(options: PasswordlessStartOptions, callback: Auth0Callback<any>): void;

    /**
     * Verifies the passwordless TOTP and returns an error if any.
     *
     * @param {PasswordlessVerifyOptions} options
     * @param {Function} callback
     */
    verify(options: PasswordlessVerifyOptions, callback: Auth0Callback<any>): void;
}

export class DBConnection {
    constructor(request: any, option: any);

    /**
     * Signup a new user
     *
     * @param {DbSignUpOptions} options: https://auth0.com/docs/api/authentication#!#post--dbconnections-signup
     * @param {Function} calback
     */
    signup(options: DbSignUpOptions, callback: Auth0Callback<any>): void;

    /**
     * Initializes the change password flow
     *
     * @param {ChangePasswordOptions} options: https://auth0.com/docs/api/authentication#!#post--dbconnections-change_password
     * @param {Function} callback
     */
    changePassword(options: ChangePasswordOptions, callback: Auth0Callback<any>): void;
}

export class Management {
    constructor(options: ManagementOptions);

    /**
     * Returns the user profile. https://auth0.com/docs/api/management/v2#!/Users/get_users_by_id
     *
     * @param {String} userId
     * @param {Function} callback
     */
    getUser(userId: string, callback: Auth0Callback<Auth0UserProfile>): void;

    /**
     * Updates the user metdata. It will patch the user metdata with the attributes sent.
     * https://auth0.com/docs/api/management/v2#!/Users/patch_users_by_id
     *
     * @param {String} userId
     * @param {Object} userMetadata
     * @param {Function} callback
     */
    patchUserMetadata(userId: string, userMetadata: any, callback: Auth0Callback<Auth0UserProfile>): void;

    /**
     * Link two users. https://auth0.com/docs/api/management/v2#!/Users/post_identities
     *
     * @param {String} userId
     * @param {String} secondaryUserToken
     * @param {Function} callback
     */
    linkUser(userId: string, secondaryUserToken: string, callback: Auth0Callback<any>): void;
}

export class WebAuth {
    constructor(options: AuthOptions);
    client: Authentication;
    popup: Popup;
    redirect: Redirect;
    crossOriginAuthentication: CrossOriginAuthentication;

    /**
     * Redirects to the hosted login page (`/authorize`) in order to initialize a new authN/authZ transaction
     *
     * @param {AuthorizeOptions} options: https://auth0.com/docs/api/authentication#!#get--authorize_db
     */
    authorize(options: AuthorizeOptions): void;

    /**
     * Parse the url hash and extract the returned tokens depending on the transaction.
     *
     * Only validates id_tokens signed by Auth0 using the RS256 algorithm using the public key exposed
     * by the `/.well-known/jwks.json` endpoint. Id tokens signed with other algorithms will not be
     * accepted.
     *
     * @param {ParseHashOptions} options
     * @param {Function} callback: any(err, token_payload)
     */
    parseHash(callback: Auth0Callback<Auth0DecodedHash>): void;

    /**
     * Parse the url hash and extract the returned tokens depending on the transaction.
     *
     * Only validates id_tokens signed by Auth0 using the RS256 algorithm using the public key exposed
     * by the `/.well-known/jwks.json` endpoint. Id tokens signed with other algorithms will not be
     * accepted.
     *
     * @param {ParseHashOptions} options
     * @param {Function} callback: any(err, token_payload)
     */
    parseHash(options: ParseHashOptions, callback: Auth0Callback<Auth0DecodedHash>): void;

    /**
     * Decodes the id_token and verifies  the nonce.
     *
     * @param {String} token
     * @param {String} nonce
     * @param {Function} callback: function(err, {payload, transaction})
     */
    validateToken(token: string, nonce: string, callback: Auth0Callback<any>): void;

    /**
     * Executes a silent authentication transaction under the hood in order to fetch a new tokens for the current session.
     * This method requires that all Auth is performed with {@link authorize}
     * Watch out! If you're not using the hosted login page to do social logins, you have to use your own [social connection keys](https://manage.auth0.com/#/connections/social). If you use Auth0's dev keys, you'll always get `login_required` as an error when calling this method.
     *
     * @param {RenewAuthOptions} options: any valid oauth2 parameter to be sent to the `/authorize` endpoint
     * @param {Function} callback
     */
    renewAuth(options: RenewAuthOptions, callback: Auth0Callback<any>): void;

    /**
     * Initialices a change password transaction
     *
     * @param {ChangePasswordOptions} options: https://auth0.com/docs/api/authentication#!#post--dbconnections-change_password
     * @param {Function} callback
     */
    changePassword(options: ChangePasswordOptions, callback: Auth0Callback<any>): void;

    /**
     * Signs up a new user
     *
     * @param {DbSignUpOptions} options: https://auth0.com/docs/api/authentication#!#post--dbconnections-signup
     * @param {Function} callback
     */
    signup(options: DbSignUpOptions, callback: Auth0Callback<any>): void;

    /**
     * Signs up a new user, automatically logs the user in after the signup and returns the user token.
     * The login will be done using /oauth/token with password-realm grant type.
     *
     * @param {DbSignUpOptions} options: https://auth0.com/docs/api/authentication#!#post--dbconnections-signup
     * @param {Function} callback
     */
    signupAndAuthorize(options: DbSignUpOptions, callback: Auth0Callback<any>): void;

    /**
     * Logs in the user with username and password using the cross origin authentication (/co/authenticate) flow. You can use either `username` or `email` to identify the user, but `username` will take precedence over `email`.
     * This only works when 3rd party cookies are enabled in the browser. After the /co/authenticate call, you'll have to use the {@link parseHash} function at the `redirectUri` specified in the constructor.
     *
     * @param {CrossOriginLoginOptions} options options used in the {@link authorize} call after the login_ticket is acquired
     * @param {crossOriginLoginCallback} cb Callback function called only when an authentication error, like invalid username or password, occurs. For other types of errors, there will be a redirect to the `redirectUri`.
     */
    login(options: CrossOriginLoginOptions, callback: Auth0Callback<any>): void;

    /**
     * Runs the callback code for the cross origin authentication call. This method is meant to be called by the cross origin authentication callback url.
     *
     */
    crossOriginAuthenticationCallback(): void;

    /**
     * Redirects to the auth0 logout endpoint
     *
     * If you want to navigate the user to a specific URL after the logout, set that URL at the returnTo parameter. The URL should be included in any the appropriate Allowed Logout URLs list:
     *
     * - If the client_id parameter is included, the returnTo URL must be listed in the Allowed Logout URLs set at the client level (see Setting Allowed Logout URLs at the App Level).
     * - If the client_id parameter is NOT included, the returnTo URL must be listed in the Allowed Logout URLs set at the account level (see Setting Allowed Logout URLs at the Account Level).
     *
     * @param {LogoutOptions} options
     * @see   {@link https://auth0.com/docs/api/authentication#logout}
     */
    logout(options: LogoutOptions): void;

    /**
     * Initialices a passwordless authentication transaction
     *
     * @param {PasswordlessStartOptions} options: https://auth0.com/docs/api/authentication#passwordless
     * @param {Function} callback
     */
    passwordlessStart(options: PasswordlessStartOptions, callback: Auth0Callback<any>): void;

    /**
     * Verifies the passwordless TOTP and redirects to finish the passwordless transaction
     *
     * @method passwordlessVerify
     * @param {PasswordlessVerifyOptions} options:
     * @param {Function} callback
     */
    passwordlessVerify(options: PasswordlessVerifyOptions, callback: Auth0Callback<any>): void;
}

export class Redirect {
    constructor(client: any, options: any);

    /**
     * Performs authentication with username/email and password with a database connection
     *
     * This method is not compatible with API Auth so if you need to fetch API tokens with audience
     * you should use {@link authorize} or {@link login}.
     *
     * @method loginWithCredentials
     * @param {Object} options
     * @param {String} [options.redirectUri] url that the Auth0 will redirect after Auth with the Authorization Response
     * @param {String} [options.responseType] type of the response used. It can be any of the values `code` and `token`
     * @param {String} [options.responseMode] how the AuthN response is encoded and redirected back to the client. Supported values are `query` and `fragment`
     * @param {String} [options.scope] scopes to be requested during AuthN. e.g. `openid email`
     * @param {credentialsCallback} cb
     */
    loginWithCredentials(options: any, callback: Auth0Callback<any>): void;

    /**
     * Signs up a new user and automatically logs the user in after the signup.
     *
     * @method signupAndLogin
     * @param {Object} options
     * @param {String} options.email user email address
     * @param {String} options.password user password
     * @param {String} options.connection name of the connection where the user will be created
     * @param {credentialsCallback} cb
     */
    signupAndLogin(options: any, callback: Auth0Callback<any>): void;
}

export class Popup {
    constructor(client: any, options: any);

    /**
     * Returns a new instance of the popup handler
     *
     * @method buildPopupHandler
     */
    buildPopupHandler(): any;

    /**
     * Initializes the popup window and returns the instance to be used later in order to avoid being blocked by the browser.
     *
     * @method preload
     * @param {Object} options: receives the window height and width and any other window feature to be sent to window.open
     */
    preload(options: any): any;

    /**
     * Handles the popup logic for the callback page.
     *
     * @method callback
     * @param {Object} options
     * @param {String} options.hash the url hash. If not provided it will extract from window.location.hash
     * @param {String} [options.state] value originally sent in `state` parameter to {@link authorize} to mitigate XSRF
     * @param {String} [options.nonce] value originally sent in `nonce` parameter to {@link authorize} to prevent replay attacks
     * @param {String} [options._idTokenVerification] makes parseHash perform or skip `id_token` verification. We **strongly** recommend validating the `id_token` yourself if you disable the verification.
     * @see   {@link parseHash}
     */
    callback(options: any): void;

    /**
     * Shows inside a new window the hosted login page (`/authorize`) in order to start a new authN/authZ transaction and post its result using `postMessage`.
     *
     * @method authorize
     * @param {Object} options
     * @param {String} [options.domain] your Auth0 domain
     * @param {String} [options.clientID] your Auth0 client identifier obtained when creating the client in the Auth0 Dashboard
     * @param {String} options.redirectUri url that the Auth0 will redirect after Auth with the Authorization Response
     * @param {String} options.responseType type of the response used by OAuth 2.0 flow. It can be any space separated list of the values `code`, `token`, `id_token`. {@link https://openid.net/specs/oauth-v2-multiple-response-types-1_0}
     * @param {String} [options.responseMode] how the Auth response is encoded and redirected back to the client. Supported values are `query`, `fragment` and `form_post`. {@link https://openid.net/specs/oauth-v2-multiple-response-types-1_0.html#ResponseModes}
     * @param {String} [options.state] value used to mitigate XSRF attacks. {@link https://auth0.com/docs/protocols/oauth2/oauth-state}
     * @param {String} [options.nonce] value used to mitigate replay attacks when using Implicit Grant. {@link https://auth0.com/docs/api-auth/tutorials/nonce}
     * @param {String} [options.scope] scopes to be requested during Auth. e.g. `openid email`
     * @param {String} [options.audience] identifier of the resource server who will consume the access token issued after Auth
     * @param {Boolean} [options.owp] determines if Auth0 should render the relay page or not and the caller is responsible of handling the response.
     * @param {authorizeCallback} cb
     * @see {@link https://auth0.com/docs/api/authentication#authorize-client}
     */
    authorize(options: any, callback: Auth0Callback<any>): void;

    /**
     * Performs authentication with username/email and password with a database connection inside a new window
     *
     * This method is not compatible with API Auth so if you need to fetch API tokens with audience
     * you should use {@link authorize} or {@link login}.
     *
     * @method loginWithCredentials
     * @param {Object} options
     * @param {String} [options.redirectUri] url that the Auth0 will redirect after Auth with the Authorization Response
     * @param {String} [options.responseType] type of the response used. It can be any of the values `code` and `token`
     * @param {String} [options.responseMode] how the AuthN response is encoded and redirected back to the client. Supported values are `query` and `fragment`
     * @param {String} [options.scope] scopes to be requested during AuthN. e.g. `openid email`
     * @param {credentialsCallback} cb
     */
    loginWithCredentials(options: any, callback: Auth0Callback<any>): void;

    /**
     * Verifies the passwordless TOTP and returns the requested token
     *
     * @method passwordlessVerify
     * @param {Object} options:
     * @param {Object} options.type: `sms` or `email`
     * @param {Object} options.phoneNumber: only if type = sms
     * @param {Object} options.email: only if type = email
     * @param {Object} options.connection: the connection name
     * @param {Object} options.verificationCode: the TOTP code
     * @param {Function} callback
     */
    passwordlessVerify(options: any, callback: Auth0Callback<any>): void;

    /**
     * Signs up a new user and automatically logs the user in after the signup.
     *
     * This method is not compatible with API Auth so if you need to fetch API tokens with audience
     * you should use {@link authorize} or {@link signupAndAuthorize}.
     *
     * @method signupAndLogin
     * @param {Object} options
     * @param {String} options.email user email address
     * @param {String} options.password user password
     * @param {String} options.connection name of the connection where the user will be created
     * @param {credentialsCallback} cb
     */
    signupAndLogin(options: any, callback: Auth0Callback<any>): void;
}

export class CrossOriginAuthentication {
    constructor(webAuth: any, options: any);

    /**
     * Logs in the user with username and password using the cross origin authentication (/co/authenticate) flow. You can use either `username` or `email` to identify the user, but `username` will take precedence over `email`.
     * This only works when 3rd party cookies are enabled in the browser. After the /co/authenticate call, you'll have to use the {@link parseHash} function at the `redirectUri` specified in the constructor.
     *
     * @param {CrossOriginLoginOptions} options options used in the {@link authorize} call after the login_ticket is acquired
     * @param {crossOriginLoginCallback} cb Callback function called only when an authentication error, like invalid username or password, occurs. For other types of errors, there will be a redirect to the `redirectUri`.
     */
    login(options: CrossOriginLoginOptions, callback: Auth0Callback<any>): void;

    /**
     * Runs the callback code for the cross origin authentication call. This method is meant to be called by the cross origin authentication callback url.
     *
     */
    callback(): void;
}

type Auth0Callback<T> = (error: null | Auth0Error, result: T) => void;

interface ManagementOptions {
    domain: string;
    token: string;
    _sendTelemetry?: boolean;
    _telemetryInfo?: any;
}

interface AuthOptions {
    domain: string;
    clientID: string;
    responseType?: string;
    responseMode?: string;
    redirectUri?: string;
    scope?: string;
    audience?: string;
    leeway?: number;
    plugins?: any[];
    _disableDeprecationWarnings?: boolean;
    _sendTelemetry?: boolean;
    _telemetryInfo?: any;
}

interface PasswordlessAuthOptions {
    connection: string;
    verificationCode: string;
    phoneNumber: string;
    email: string;
}

interface Auth0Error {
    error?: any;
    errorDescription?: string;
    code?: string;
    description?: string;
    name?: string;
    policy?: string;
    original?: any;
    statusCode?: number;
    statusText?: string;
}

interface Auth0DecodedHash {
    accessToken?: string;
    idToken?: string;
    idTokenPayload?: any;
    refreshToken?: string;
    state?: string;
    expiresIn?: number;
    tokenType?: string;
}

/** Represents the response from an API Token Delegation request. */
interface Auth0DelegationToken {
    /** The length of time in seconds the token is valid for. */
    expiresIn: number;
    /** The JWT for delegated access.  */
    idToken: string;
    /** The type of token being returned. Possible values: "Bearer"  */
    tokenType: string;
}

interface ChangePasswordOptions {
    connection: string;
    email: string;
    password?: string;
}

interface PasswordlessStartOptions {
    connection: string;
    send: string;
    phoneNumber?: string;
    email?: string;
    authParams?: any;
}

interface PasswordlessVerifyOptions {
    connection: string;
    verificationCode: string;
    phoneNumber?: string;
    email?: string;
    send?: string;
}

interface Auth0UserProfile {
    name: string;
    nickname: string;
    picture: string;
    user_id: string;
    username?: string;
    given_name?: string;
    family_name?: string;
    email?: string;
    email_verified?: string;
    clientID: string;
    gender?: string;
    locale?: string;
    identities: Auth0Identity[];
    created_at: string;
    updated_at: string;
    sub: string;
    user_metadata?: any;
    app_metadata?: any;
}

interface MicrosoftUserProfile extends Auth0UserProfile {
    emails?: string[]; //optional depending on whether email addresses permission is granted
}

interface Office365UserProfile extends Auth0UserProfile {
    tenantid: string;
    upn: string;
}

interface AdfsUserProfile extends Auth0UserProfile {
    issuer?: string;
}

interface Auth0Identity {
    connection: string;
    isSocial: boolean;
    provider: string;
    user_id: string;
}

interface LoginOptions {
    username: string;
    password: string;
    scope?: string;
}

interface DefaultLoginOptions extends LoginOptions {
    audience?: string;
    realm: string;
}

interface DefaultDirectoryLoginOptions extends LoginOptions {
    audience?: string;
}

interface ResourceOwnerLoginOptions extends LoginOptions {
    connection: string;
    device?: string;
}

interface CrossOriginLoginOptions {
    username?: string;
    email?: string;
    password: string;
    realm?: string;
}

interface LogoutOptions {
    clientID?: string;
    returnTo?: string;
    federated?: boolean;
}

interface DelegationOptions {
    client_id?: string;
    grant_type: string;
    id_token?: string;
    refresh_token?: string;
    target?: string;
    scope?: string;
    api_type?: string;
}

interface DbSignUpOptions {
    email: string;
    password: string;
    connection: string;
    scope?: string;
}

interface ParseHashOptions {
    hash?: string;
    state?: string;
    nonce?: string;
    _idTokenVerification?: boolean;
}

interface RenewAuthOptions {
    domain?: string;
    clientID?: string;
    redirectUri?: string;
    responseType?: string;
    responseMode?: string;
    state?: string;
    nonce?: string;
    scope?: string;
    audience?: string;
    usePostMessage?: boolean;
    postMessageDataType?: string;
}

interface AuthorizeOptions {
    domain?: string;
    clientID?: string;
    connection?:string;
    redirectUri?: string;
    responseType?: string;
    responseMode?: string;
    state?: string;
    nonce?: string;
    scope?: string;
    audience?: string;
}
