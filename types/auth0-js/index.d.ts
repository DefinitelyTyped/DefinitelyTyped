// Type definitions for Auth0.js 8.11
// Project: https://github.com/auth0/auth0.js
// Definitions by: Adrian Chia <https://github.com/adrianchia>
//                 Matt Durrant <https://github.com/mdurrant>
//                 Peter Blazejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace auth0;

export class Authentication {
    constructor(options: AuthOptions);

    passwordless: PasswordlessAuthentication;
    dbConnection: DBConnection;

    /**
     * Builds and returns the `/authorize` url in order to initialize a new authN/authZ transaction
     *
     * @param options: https://auth0.com/docs/api/authentication#!#get--authorize_db
     */
    buildAuthorizeUrl(options: any): string;

    /**
     * Builds and returns the Logout url in order to initialize a new authN/authZ transaction
     *
     * @param options: https://auth0.com/docs/api/authentication#!#get--v2-logout
     */
    buildLogoutUrl(options?: LogoutOptions): string;

    /**
     * Makes a call to the `oauth/token` endpoint with `password` grant type
     *
     * @param options: https://auth0.com/docs/api-auth/grant/password
     */
    loginWithDefaultDirectory(options: DefaultDirectoryLoginOptions, callback: Auth0Callback<any>): void;

    /**
     * Makes a call to the `/ro` endpoint
     * @deprecated `loginWithResourceOwner` will be soon deprecated, user `login` instead.
     */
    loginWithResourceOwner(options: ResourceOwnerLoginOptions, callback: Auth0Callback<any>): void;

    /**
     * Makes a call to the `oauth/token` endpoint with `password-realm` grant type
     */
    login(options: DefaultLoginOptions, callback: Auth0Callback<any>): void;

    /**
     * Makes a call to the `oauth/token` endpoint
     */
    oauthToken(options: any, callback: Auth0Callback<any>): void;

    /**
     * Makes a call to the `/ssodata` endpoint
     *
     */
    getSSOData(callback?: Auth0Callback<any>): void;

    /**
     * Makes a call to the `/ssodata` endpoint
     *
     */
    getSSOData(withActiveDirectories: boolean, callback?: Auth0Callback<any>): void;

    /**
     * Makes a call to the `/userinfo` endpoint and returns the user profile
     *
     */
    userInfo(accessToken: string, callback: Auth0Callback<Auth0UserProfile>): void;

    /**
     * Makes a call to the `/delegation` endpoint
     *
     * @param options: https://auth0.com/docs/api/authentication#!#post--delegation
     */
    delegation(options: DelegationOptions, callback: Auth0Callback<Auth0DelegationToken>): any;

    /**
     * Fetches the user country based on the ip.
     *
     */
    getUserCountry(callback: Auth0Callback<{ countryCode: string }>): void;
}

export class PasswordlessAuthentication {
    constructor(request: any, option: any);

    /**
     * Builds and returns the passwordless TOTP verify url in order to initialize a new authN/authZ transaction
     *
     */
    buildVerifyUrl(options: PasswordlessVerifyOptions): string;

    /**
     * Initializes a new passwordless authN/authZ transaction
     *
     * @param options: https://auth0.com/docs/api/authentication#passwordless
     */
    start(options: PasswordlessStartOptions, callback: Auth0Callback<any>): void;

    /**
     * Verifies the passwordless TOTP and returns an error if any.
     *
     */
    verify(options: PasswordlessVerifyOptions, callback: Auth0Callback<any>): void;
}

export class DBConnection {
    constructor(request: any, option: any);

    /**
     * Signup a new user
     *
     * @param options: https://auth0.com/docs/api/authentication#!#post--dbconnections-signup
     */
    signup(options: DbSignUpOptions, callback: Auth0Callback<any>): void;

    /**
     * Initializes the change password flow
     *
     * @param options: https://auth0.com/docs/api/authentication#!#post--dbconnections-change_password
     */
    changePassword(options: ChangePasswordOptions, callback: Auth0Callback<any>): void;
}

export class Management {
    /**
     * Initialize your client class, by using a Non Interactive Client to fetch an access_token via the Client Credentials Grant.
     */
    constructor(options: ManagementOptions);

    /**
     * Returns the user profile. https://auth0.com/docs/api/management/v2#!/Users/get_users_by_id
     *
     */
    getUser(userId: string, callback: Auth0Callback<Auth0UserProfile>): void;

    /**
     * Updates the user metdata. It will patch the user metdata with the attributes sent.
     * https://auth0.com/docs/api/management/v2#!/Users/patch_users_by_id
     *
     */
    patchUserMetadata(userId: string, userMetadata: any, callback: Auth0Callback<Auth0UserProfile>): void;

    /**
     * Link two users. https://auth0.com/docs/api/management/v2#!/Users/post_identities
     *
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
     * @param options: https://auth0.com/docs/api/authentication#!#get--authorize_db
     */
    authorize(options?: AuthorizeOptions): void;

    /**
     * Parse the url hash and extract the returned tokens depending on the transaction.
     *
     * Only validates id_tokens signed by Auth0 using the RS256 algorithm using the public key exposed
     * by the `/.well-known/jwks.json` endpoint. Id tokens signed with other algorithms will not be
     * accepted.
     *
     * @param callback: any(err, token_payload)
     */
    parseHash(callback: Auth0Callback<Auth0DecodedHash>): void;

    /**
     * Parse the url hash and extract the returned tokens depending on the transaction.
     *
     * Only validates id_tokens signed by Auth0 using the RS256 algorithm using the public key exposed
     * by the `/.well-known/jwks.json` endpoint. Id tokens signed with other algorithms will not be
     * accepted.
     *
     * @param callback: any(err, token_payload)
     */
    parseHash(options: ParseHashOptions, callback: Auth0Callback<Auth0DecodedHash>): void;

    /**
     * Decodes the id_token and verifies  the nonce.
     *
     * @param callback: function(err, {payload, transaction})
     */
    validateToken(token: string, nonce: string, callback: Auth0Callback<any>): void;

    /**
     * Executes a silent authentication transaction under the hood in order to fetch a new tokens for the current session.
     * This method requires that all Auth is performed with {@link authorize}
     * Watch out! If you're not using the hosted login page to do social logins, you have to use your own [social connection keys](https://manage.auth0.com/#/connections/social).
     * If you use Auth0's dev keys, you'll always get `login_required` as an error when calling this method.
     *
     * @param options: any valid oauth2 parameter to be sent to the `/authorize` endpoint
     */
    renewAuth(options: RenewAuthOptions, callback: Auth0Callback<any>): void;

    /**
     * Initialices a change password transaction
     *
     * @param options: https://auth0.com/docs/api/authentication#!#post--dbconnections-change_password
     */
    changePassword(options: ChangePasswordOptions, callback: Auth0Callback<any>): void;

    /**
     * Signs up a new user
     *
     * @param options: https://auth0.com/docs/api/authentication#!#post--dbconnections-signup
     */
    signup(options: DbSignUpOptions, callback: Auth0Callback<any>): void;

    /**
     * Signs up a new user, automatically logs the user in after the signup and returns the user token.
     * The login will be done using /oauth/token with password-realm grant type.
     *
     * @param options: https://auth0.com/docs/api/authentication#!#post--dbconnections-signup
     */
    signupAndAuthorize(options: DbSignUpOptions, callback: Auth0Callback<any>): void;

    /**
     * Logs in the user with username and password using the cross origin authentication (/co/authenticate) flow.
     * You can use either `username` or `email` to identify the user, but `username` will take precedence over `email`.
     *
     * This only works when 3rd party cookies are enabled in the browser.
     * After the /co/authenticate call, you'll have to use the {@link parseHash} function at the `redirectUri` specified in the constructor.
     *
     * @param options options used in the {@link authorize} call after the login_ticket is acquired
     * @param cb Callback function called only when an authentication error, like invalid username or password, occurs.
     * For other types of errors, there will be a redirect to the `redirectUri`.
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
     * @see   {@link https://auth0.com/docs/api/authentication#logout}
     */
    logout(options: LogoutOptions): void;

    /**
     * Initialices a passwordless authentication transaction
     *
     * @param options: https://auth0.com/docs/api/authentication#passwordless
     */
    passwordlessStart(options: PasswordlessStartOptions, callback: Auth0Callback<any>): void;

    /**
     * Verifies the passwordless TOTP and redirects to finish the passwordless transaction
     *
     * @param options:
     */
    passwordlessVerify(options: PasswordlessVerifyOptions, callback: Auth0Callback<any>): void;

    /**
     * Renews an existing session on Auth0's servers using `response_mode=web_message` (i.e. Auth0's hosted login page)
     *
     * @param options options used in {@link authorize} call
     * @param callback: any(err, token_payload)
     */
    checkSession(options: CheckSessionOptions, callback: Auth0Callback<any>): void;
}

export class Redirect {
    constructor(client: any, options: any);

    /**
     * Performs authentication with username/email and password with a database connection
     *
     * This method is not compatible with API Auth so if you need to fetch API tokens with audience
     * you should use {@link authorize} or {@link login}.
     */
    loginWithCredentials(
        options: {
            /** url that the Auth0 will redirect after Auth with the Authorization Response */
            redirectUri?: string,
            /** type of the response used. It can be any of the values `code` and `token` */
            responseType?: string,
            /** how the AuthN response is encoded and redirected back to the client. */
            responseMode?: "query" | "fragment",
            /** scopes to be requested during AuthN. e.g. `openid email` */
            scope: string,
        },
        callback: Auth0Callback<any>,
    ): void;

    /**
     * Signs up a new user and automatically logs the user in after the signup.
     */
    signupAndLogin(
        options: {
            /** user email address */
            email: string,
            /** user password */
            password: string,
            /** name of the connection where the user will be created */
            connection: string,
        },
        callback: Auth0Callback<any>,
    ): void;
}

export class Popup {
    constructor(client: any, options: any);

    /**
     * Returns a new instance of the popup handler
     *
     */
    buildPopupHandler(): any;

    /**
     * Initializes the popup window and returns the instance to be used later in order to avoid being blocked by the browser.
     *
     * @param options: receives the window height and width and any other window feature to be sent to window.open
     */
    preload(options: any): any;

    /**
     * Handles the popup logic for the callback page.
     * @see {@link parseHash}
     */
    callback(options: {
        /**
         * the url hash.
         * @default window.location.hash
         */
        hash: string,
        /** value originally sent in `state` parameter to {@link authorize} to mitigate XSRF */
        state?: string,
        /** value originally sent in `nonce` parameter to {@link authorize} to prevent replay attacks */
        nonce?: string,
        /**
         * makes parseHash perform or skip `id_token` verification.
         * We **strongly** recommend validating the `id_token` yourself if you disable the verification.
         */
        _idTokenVerification?: string,
    }): void;

    /**
     * Shows inside a new window the hosted login page (`/authorize`) in order to start a new authN/authZ transaction and post its result using `postMessage`.
     * @see {@link https://auth0.com/docs/api/authentication#authorize-client}
     */
    authorize(
        options: {
            /** your Auth0 domain */
            domain: string,
            /** your Auth0 client identifier obtained when creating the client in the Auth0 Dashboard */
            clientId?: string,
            /**
             * identity provider whose login page will be displayed in the popup.
             * If omitted the hosted login page is used.
             * {@link https://auth0.com/docs/identityproviders}
             */
            connection?: string,
            /** url that the Auth0 will redirect after Auth with the Authorization Response */
            redirectUri: string,
            /**
             * type of the response used by OAuth 2.0 flow.
             * It can be any space separated list of the values `code`, `token`, `id_token`.
             * {@link https://openid.net/specs/oauth-v2-multiple-response-types-1_0}
             */
            responseType: string,
            /**
             * how the Auth response is encoded and redirected back to the client.
             * {@link https://openid.net/specs/oauth-v2-multiple-response-types-1_0.html#ResponseModes}
             */
            responseMode?: "query" | "fragment" | "form_post",
            /**
             * value used to mitigate XSRF attacks.
             * {@link https://auth0.com/docs/protocols/oauth2/oauth-state}
             */
            state?: string,
            /**
             * value used to mitigate replay attacks when using Implicit Grant.
             * {@link https://auth0.com/docs/api-auth/tutorials/nonce}
             */
            nonce?: string,
            /** scopes to be requested during Auth. e.g. `openid email` */
            scope?: string,
            /** identifier of the resource server who will consume the access token issued after Auth */
            audience?: string,
            /** determines if Auth0 should render the relay page or not and the caller is responsible of handling the response. */
            owp?: boolean,
        },
        callback: Auth0Callback<any>,
    ): void;

    /**
     * Performs authentication with username/email and password with a database connection inside a new window
     *
     * This method is not compatible with API Auth so if you need to fetch API tokens with audience
     * you should use {@link authorize} or {@link login}.
     */
    loginWithCredentials(
        options: {
            /** url that the Auth0 will redirect after Auth with the Authorization Response */
            redirectUri?: string,
            /** type of the response used. */
            responseType?: "code" | "token",
            /** how the AuthN response is encoded and redirected back to the client. */
            responseMode?: "query" | "fragment",
            /** scopes to be requested during AuthN. e.g. `openid email` */
            scope?: string,
        },
        callback: Auth0Callback<any>,
    ): void;

    /**
     * Verifies the passwordless TOTP and returns the requested token
     */
    passwordlessVerify(
        options: {
            type: "sms" | "email",
            /**  only if type = sms */
            phoneNumber?: string,
            /** only if type = email */
            email?: string,
            /** the connection name */
            connection: string,
            /** the TOTP code */
            verificationCode: string,
        },
        callback: Auth0Callback<any>,
    ): void;

    /**
     * Signs up a new user and automatically logs the user in after the signup.
     *
     * This method is not compatible with API Auth so if you need to fetch API tokens with audience
     * you should use {@link authorize} or {@link signupAndAuthorize}.
     */
    signupAndLogin(
        options: {
            /** user email address */
            email: string,
            /** user password */
            password: string,
            /** name of the connection where the user will be created */
            connection: string,
        },
        callback: Auth0Callback<any>,
    ): void;
}

export class CrossOriginAuthentication {
    constructor(webAuth: any, options: any);

    /**
     * Logs in the user with username and password using the cross origin authentication (/co/authenticate) flow.
     * You can use either `username` or `email` to identify the user, but `username` will take precedence over `email`.
     * This only works when 3rd party cookies are enabled in the browser.
     * After the /co/authenticate call, you'll have to use the {@link parseHash} function at the `redirectUri` specified in the constructor.
     *
     * @param options options used in the {@link authorize} call after the login_ticket is acquired
     * @param cb Callback function called only when an authentication error, like invalid username or password, occurs.
     * For other types of errors, there will be a redirect to the `redirectUri`.
     */
    login(options: CrossOriginLoginOptions, callback: Auth0Callback<any>): void;

    /**
     * Runs the callback code for the cross origin authentication call. This method is meant to be called by the cross origin authentication callback url.
     *
     */
    callback(): void;
}

export type Auth0Callback<T> = (error: null | Auth0Error, result: T) => void;

export interface TokenProvider {
    enableCache?: boolean;
    cacheTTLInSeconds?: number;
}

export interface ManagementOptions {
    domain: string;
    token?: string;
    clientId?: string;
    clientSecret?: string;
    audience?: string;
    scope?: string;
    tokenProvider?: TokenProvider;
    telemetry?: boolean;
}

export interface AuthOptions {
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

export interface PasswordlessAuthOptions {
    connection: string;
    verificationCode: string;
    phoneNumber: string;
    email: string;
}

export interface Auth0Error {
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

/**
 * The contents of the authResult object returned by {@link WebAuth#parseHash }
 */
export interface Auth0DecodedHash {
    accessToken?: string;
    idToken?: string;
    idTokenPayload?: any;
    appState?: any;
    refreshToken?: string;
    state?: string;
    expiresIn?: number;
    tokenType?: string;
    scope?: string;
}

/** Represents the response from an API Token Delegation request. */
export interface Auth0DelegationToken {
    /** The length of time in seconds the token is valid for. */
    expiresIn: number;
    /** The JWT for delegated access.  */
    idToken: string;
    /** The type of token being returned. Possible values: "Bearer"  */
    tokenType: string;
}

export interface ChangePasswordOptions {
    connection: string;
    email: string;
    password?: string;
}

export interface PasswordlessStartOptions {
    connection: string;
    send: string;
    phoneNumber?: string;
    email?: string;
    authParams?: any;
}

export interface PasswordlessVerifyOptions {
    connection: string;
    verificationCode: string;
    phoneNumber?: string;
    email?: string;
    send?: string;
}

export interface Auth0UserProfile {
    name: string;
    nickname: string;
    picture: string;
    user_id: string;
    username?: string;
    given_name?: string;
    family_name?: string;
    email?: string;
    email_verified?: boolean;
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

export interface MicrosoftUserProfile extends Auth0UserProfile {
    emails?: string[]; // optional depending on whether email addresses permission is granted
}

export interface Office365UserProfile extends Auth0UserProfile {
    tenantid: string;
    upn: string;
}

export interface AdfsUserProfile extends Auth0UserProfile {
    issuer?: string;
}

export interface Auth0Identity {
    connection: string;
    isSocial: boolean;
    provider: string;
    user_id: string;
}

export interface LoginOptions {
    username: string;
    password: string;
    scope?: string;
}

export interface DefaultLoginOptions extends LoginOptions {
    audience?: string;
    realm: string;
}

export interface DefaultDirectoryLoginOptions extends LoginOptions {
    audience?: string;
}

export interface ResourceOwnerLoginOptions extends LoginOptions {
    connection: string;
    device?: string;
}

export interface CrossOriginLoginOptions {
    username?: string;
    email?: string;
    password: string;
    realm?: string;
}

export interface LogoutOptions {
    clientID?: string;
    returnTo?: string;
    federated?: boolean;
}

export interface DelegationOptions {
    client_id?: string;
    grant_type: string;
    id_token?: string;
    refresh_token?: string;
    target?: string;
    scope?: string;
    api_type?: string;
}

export interface DbSignUpOptions {
    email: string;
    password: string;
    connection: string;
    scope?: string;
    user_metadata?: any;
}

export interface ParseHashOptions {
    hash?: string;
    state?: string;
    nonce?: string;
    _idTokenVerification?: boolean;
}

export interface RenewAuthOptions {
    /**
     * your Auth0 domain
     */
    domain?: string;
    /**
     * your Auth0 client identifier obtained when creating the client in the Auth0 Dashboard
     */
    clientID?: string;
    /**
     * url that the Auth0 will redirect after Auth with the Authorization Response
     */
    redirectUri?: string;
    /**
     * type of the response used by OAuth 2.0 flow. It can be any space separated
     * list of the values `code`, `token`, `id_token`.
     * {@link https://openid.net/specs/oauth-v2-multiple-response-types-1_0}
     */
    responseType?: string;
    /**
     * how the Auth response is encoded and redirected back to the client.
     * Supported values are `query`, `fragment` and `form_post`.
     * The `query` value is only supported when `responseType` is `code`.
     * {@link https://openid.net/specs/oauth-v2-multiple-response-types-1_0.html#ResponseModes}
     */
    responseMode?: string;
    /**
     * value used to mitigate XSRF attacks.
     * {@link https://auth0.com/docs/protocols/oauth2/oauth-state}
     */
    state?: string;
    /**
     * value used to mitigate replay attacks when using Implicit Grant.
     * {@link https://auth0.com/docs/api-auth/tutorials/nonce}
     */
    nonce?: string;
    /**
     * scopes to be requested during Auth. e.g. `openid email`
     */
    scope?: string;
    /**
     * identifier of the resource server who will consume the access token issued after Auth
     */
    audience?: string;
    /**
     * identifier data type to look for in postMessage event data, where events are initiated
     * from silent callback urls, before accepting a message event is the event expected.
     * A value of false means any postMessage event will trigger a callback.
     */
    postMessageDataType?: string;
    /**
     * origin of redirectUri to expect postMessage response from.
     * Defaults to the origin of the receiving window. Only used if usePostMessage is truthy.
     */
    postMessageOrigin?: string;
    /**
     * value in milliseconds used to timeout when the `/authorize` call is failing
     * as part of the silent authentication with postmessage enabled due to a configuration.
     */
    timeout?: number;
    /**
     * use postMessage to comunicate between the silent callback and the SPA.
     * When false the SDK will attempt to parse the url hash should ignore the url hash
     * and no extra behaviour is needed
     * @default false
     */
    usePostMessage?: boolean;
}

export interface AuthorizeOptions {
    domain?: string;
    clientID?: string;
    connection?: string;
    redirectUri?: string;
    responseType?: string;
    responseMode?: string;
    state?: string;
    nonce?: string;
    scope?: string;
    audience?: string;
}

export interface CheckSessionOptions extends AuthorizeOptions {
	/**
	 * optional parameter for auth0 to use postMessage to communicate between the silent callback and the SPA.
	 */
	usePostMessage?: boolean;
}
