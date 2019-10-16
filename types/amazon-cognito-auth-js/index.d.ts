// Type definitions for amazon-cognito-auth-js 1.2
// Project: https://github.com/aws/amazon-cognito-auth-js, http://aws.amazon.com/cognito
// Definitions by: Scott Escue <https://github.com/scottescue>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/*
 * Create global variable to provide access to types when used without module
 * loading.
 */
export as namespace AmazonCognitoIdentity;

// Stubs the XDomainRequest built-in from older IE browsers, does not follow the project's interface naming convention
export interface XDomainRequest {
    readonly responseText: string;
    timeout: number;
    onprogress: () => void;
    ontimeout: () => void;
    onerror: () => void;
    onload: () => void;

    open(method: string, url: string): void;
    send(data: string): void;
    abort(): void;
}

export interface CognitoSessionData {
    /**
     * The session's Id token.
     */
    IdToken?: CognitoIdToken;

    /**
     * The session's refresh token.
     */
    RefreshToken?: CognitoRefreshToken;

    /**
     * The session's access token.
     */
    AccessToken?: CognitoAccessToken;

    /**
     * The session's token scopes.
     */
    TokenScopes?: CognitoTokenScopes;

    /**
     * The session's state.
     */
    State?: string;
}

export interface CognitoAuthOptions {
    /**
     * Required: User pool application client id.
     */
    ClientId: string;

    /**
     * Required: The application/user-pools Cognito web hostname,this is set at the Cognito console.
     */
    AppWebDomain: string;

    /**
     * Optional: The token scopes
     */
    TokenScopesArray?: ReadonlyArray<string>;

    /**
     * Required: Required: The redirect Uri, which will be launched after authentication as signed in.
     */
    RedirectUriSignIn: string;

    /**
     * Required: The redirect Uri, which will be launched when signed out.
     */
    RedirectUriSignOut: string;

    /**
     * Optional: Pre-selected identity provider (this allows to automatically trigger social provider authentication flow).
     */
    IdentityProvider?: string;

    /**
     * Optional: UserPoolId for the configured cognito userPool.
     */
    UserPoolId?: string;

    /**
     * Optional: boolean flag indicating if the data collection is enabled to support cognito advanced security features. By default, this flag is set to true.
     */
    AdvancedSecurityDataCollectionFlag?: boolean;
}

export interface CognitoAuthUserHandler {
    onSuccess: (authSession: CognitoAuthSession) => void;
    onFailure: (err: any) => void;
}

export interface CognitoConstants {
    DOMAIN_SCHEME: string;
    DOMAIN_PATH_SIGNIN: string;
    DOMAIN_PATH_TOKEN: string;
    DOMAIN_PATH_SIGNOUT: string;
    DOMAIN_QUERY_PARAM_REDIRECT_URI: string;
    DOMAIN_QUERY_PARAM_SIGNOUT_URI: string;
    DOMAIN_QUERY_PARAM_RESPONSE_TYPE: string;
    DOMAIN_QUERY_PARAM_IDENTITY_PROVIDER: string;
    DOMAIN_QUERY_PARAM_USERCONTEXTDATA: string;
    CLIENT_ID: string;
    STATE: string;
    SCOPE: string;
    TOKEN: string;
    CODE: string;
    POST: string;
    PARAMETERERROR: string;
    SCOPETYPEERROR: string;
    QUESTIONMARK: string;
    POUNDSIGN: string;
    COLONDOUBLESLASH: string;
    SLASH: string;
    AMPERSAND: string;
    EQUALSIGN: string;
    SPACE: string;
    CONTENTTYPE: string;
    CONTENTTYPEVALUE: string;
    AUTHORIZATIONCODE: string;
    IDTOKEN: string;
    ACCESSTOKEN: string;
    REFRESHTOKEN: string;
    ERROR: string;
    ERROR_DESCRIPTION: string;
    STRINGTYPE: string;
    STATELENGTH: number;
    STATEORIGINSTRING: string;
    WITHCREDENTIALS: string;
    UNDEFINED: string;
    SELF: string;
    HOSTNAMEREGEX: RegExp;
    QUERYPARAMETERREGEX1: RegExp;
    QUERYPARAMETERREGEX2: RegExp;
    HEADER: { 'Content-Type': string };
}

export class CognitoIdToken {
    /**
     * Constructs a new CognitoIdToken object
     * @param IdToken The JWT Id token
     */
    constructor(IdToken: string);

    /**
     * @returns the record's token.
     */
    getJwtToken(): string;

    /**
     * Sets new value for id token.
     * @param idToken The JWT Id token
     */
    setJwtToken(idToken: string): void;

    /**
     * @returns the token's expiration (exp member).
     */
    getExpiration(): number;

    /**
     * @returns the token's payload.
     */
    decodePayload(): object;
}

export class CognitoRefreshToken {
    /**
     * Constructs a new CognitoRefreshToken object
     * @param RefreshToken The JWT refresh token.
     */
    constructor(RefreshToken: string);

    /**
     * @returns the record's token.
     */
    getToken(): string;

    /**
     * Sets new value for refresh token.
     * @param refreshToken The JWT refresh token.
     */
    setToken(refreshToken: string): void;
}

export class CognitoAccessToken {
    /**
     * Constructs a new CognitoAccessToken object
     * @param AccessToken The JWT access token.
     */
    constructor(AccessToken: string);

    /**
     * @returns the record's token.
     */
    getJwtToken(): string;

    /**
     * Sets new value for access token.
     * @param accessToken The JWT access token.
     */
    setJwtToken(accessToken: string): void;

    /**
     * @returns the token's expiration (exp member).
     */
    getExpiration(): number;

    /**
     * @returns the username from payload.
     */
    getUsername(): string;

    /**
     * @returns the token's payload.
     */
    decodePayload(): object;
}

export class CognitoTokenScopes {
    /**
     * Constructs a new CognitoTokenScopes object
     * @param TokenScopesArray The token scopes
     */
    constructor(TokenScopesArray: ReadonlyArray<string>);

    /**
     * @returns the token scopes.
     */
    getScopes(): string[];

    /**
     * Sets new value for token scopes.
     * @param tokenScopes The token scopes
     */
    setTokenScopes(tokenScopes: ReadonlyArray<string>): void;
}

export class CognitoAuthSession {
    /**
     * Constructs a new CognitoUserSession object
     * @param sessionData The session's tokens, scopes, and state.
     */
    constructor(sessionData: CognitoSessionData);

    /**
     *  @returns the session's Id token
     */
    getIdToken(): CognitoIdToken;

    /**
     * Set a new Id token
     * @param IdToken The session's Id token.
     */
    setIdToken(IdToken: CognitoIdToken): void;

    /**
     * @returns the session's refresh token
     */
    getRefreshToken(): CognitoRefreshToken;

    /**
     * Set a new Refresh token
     * @param RefreshToken The session's refresh token.
     */
    setRefreshToken(RefreshToken: CognitoRefreshToken): void;

    /**
     * @returns the session's access token
     */
    getAccessToken(): CognitoAccessToken;

    /**
     * Set a new Access token
     * @param AccessToken The session's access token.
     */
    setAccessToken(AccessToken: CognitoAccessToken): void;

    /**
     * @returns the session's token scopes
     */
    getTokenScopes(): CognitoTokenScopes;

    /**
     * Set new token scopes
     * @param tokenScopes The session's token scopes.
     */
    setTokenScopes(tokenScopes: CognitoTokenScopes): void;

    /**
     * @returns the session's state
     */
    getState(): string;

    /**
     * Set new state
     * @param state The session's state.
     */
    setState(State: string): void;

    /**
     * Checks to see if the session is still valid based on session expiry information found
     * in Access and Id Tokens and the current time
     * @returns if the session is still valid
     */
    isValid(): boolean;
}

export class CognitoAuth {
    /**
     * Called on success or error.
     */
    userhandler: CognitoAuthUserHandler;

    /**
     * Constructs a new CognitoAuth object
     * @param options Creation options
     */
    constructor(options: CognitoAuthOptions);

    /**
     * @returns the constants
     */
    getCognitoConstants(): CognitoConstants;

    /**
     * @returns the client id
     */
    getClientId(): string;

    /**
     * @returns the app web domain
     */
    getAppWebDomain(): string;

    /**
     * method for getting the current user of the application from the local storage
     *
     * @returns the user retrieved from storage
     */
    getCurrentUser(): string;

    /**
     * method for setting the current user's name
     * @param Username the user's name
     */
    setUser(Username: string): void;

    /**
     * sets response type to 'code'
     */
    useCodeGrantFlow(): void;

    /**
     * sets response type to 'token'
     */
    useImplicitFlow(): void;

    /**
     * @returns the current session for this user
     */
    getSignInUserSession(): CognitoAuthSession;

    /**
     * @returns the user's username
     */
    getUsername(): string;

    /**
     * @param Username the user's username
     */
    setUsername(Username: string): void;

    /**
     * @returns the user's state
     */
    getState(): string;

    /**
     * @param State the user's state
     */
    setState(State: string): void;

    /**
     * This is used to get a session, either from the session object or from the local storage, or by using a refresh token
     * @param RedirectUriSignIn Required: The redirect Uri, which will be launched after authentication.
     * @param TokenScopesArray Required: The token scopes, it is an array of strings specifying all scopes for the tokens.
     */
    getSession(): void;

    /**
     * Parse the http request response and proceed according to different response types.
     * @param httpRequestResponse the http request response
     */
    parseCognitoWebResponse(httpRequestResponse: string): void;

    /**
     * Get the query parameter map and proceed according to code response type.
     * @param Query parameter map
     */
    getCodeQueryParameter(map: ReadonlyMap<string, string>): void;

    /**
     * Get the query parameter map and proceed according to token response type.
     * @param Query parameter map
     */
    getTokenQueryParameter(map: ReadonlyMap<string, string>): void;

    /**
     * Get cached tokens and scopes and return a new session using all the cached data.
     * @returns the auth session
     */
    getCachedSession(): CognitoAuthSession;

    /**
     * This is used to get last signed in user from local storage
     * @returns the last user name
     */
    getLastUser(): string;

    /**
     * This is used to save the session tokens and scopes to local storage.
     */
    cacheTokensScopes(): void;

    /**
     * Compare two sets if they are identical.
     * @param set1 one set
     * @param set2 the other set
     * @returns boolean value is true if two sets are identical
     */
    compareSets(set1: ReadonlySet<any>, set2: ReadonlySet<any>): boolean;

    /**
     * Get the hostname from url.
     * @param url the url string
     * @returns hostname string
     */
    getHostName(url: string): string;

    /**
     * Get http query parameters and return them as a map.
     * @param url the url string
     * @param splitMark query parameters split mark (prefix)
     * @returns map
     */
    getQueryParameters(url: string, splitMark: string): Map<string, string>;

    /**
     * helper function to generate a random string
     * @param length the length of string
     * @param chars a original string
     * @returns a random value.
     */
    generateRandomString(length: number, chars: string): string;

    /**
     * This is used to clear the session tokens and scopes from local storage
     */
    clearCachedTokensScopes(): void;

    /**
     * This is used to build a user session from tokens retrieved in the authentication result
     * @param refreshToken Successful auth response from server.
     */
    refreshSession(refreshToken: string): void;

    /**
     * Make the http POST request.
     * @param header header JSON object
     * @param body body JSON object
     * @param url string
     * @param onSuccess callback
     * @param onFailure callback
     */
    makePOSTRequest(header: object, body: object, url: string,
        onSuccess: (responseText: string) => void,
        onFailure: (responseText: string) => void): void;

    /**
     * Create the XHR object
     * @param method which method to call
     * @param url the url string
     * @returns xhr
     */
    createCORSRequest(method: string, url: string): XMLHttpRequest | XDomainRequest;

    /**
     * The http POST request onFailure callback.
     * @param err the error object
     */
    onFailure(err: any): void;

    /**
     * The http POST request onSuccess callback when refreshing tokens.
     * @param jsonData tokens
     */
    onSuccessRefreshToken(jsonData: string): void;

    /**
     * The http POST request onSuccess callback when exchanging code for tokens.
     * @param jsonData tokens
     */
    onSuccessExchangeForToken(jsonData: string): void;

    /**
     * Launch Cognito Auth UI page.
     * @param URL the url to launch
     */
    launchUri(URL: string): void;

    /**
     * @returns scopes string
     */
    getSpaceSeperatedScopeString(): string;

    /**
     * Create the FQDN(fully qualified domain name) for authorization endpoint.
     * @returns url
     */
    getFQDNSignIn(): string;

    /**
     * Sign out the user.
     */
    signOut(): void;

    /**
     * Create the FQDN(fully qualified domain name) for signout endpoint.
     * @returns url
     */
    getFQDNSignOut(): string;

    /**
     * This method returns the encoded data string used for cognito advanced security feature.
     * This would be generated only when developer has included the JS used for collecting the
     * data on their client. Please refer to documentation to know more about using AdvancedSecurity
     * features
     */
    getUserContextData(): string;

    /**
     * Helper method to let the user know if they have either a valid cached session
     * or a valid authenticated session from the app integration callback.
     * @returns userSignedIn
     */
    isUserSignedIn(): boolean;
}

export class DateHelper {
    /**
     * @returns The current time in "ddd MMM D HH:mm:ss UTC YYYY" format.
     */
    getNowString(): string;
}

export class StorageHelper {
    /**
     * This is used to get a storage object
     * @returns the storage
     */
    constructor();

    /**
     * This is used to return the storage
     * @returns the storage
     */
    getStorage(): Storage;
}
