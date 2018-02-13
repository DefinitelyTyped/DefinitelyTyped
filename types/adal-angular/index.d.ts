// Type definitions for adal-angular 1.0
// Project: https://github.com/AzureAD/azure-activedirectory-library-for-js#readme
// Definitions by: Daniel Perez Alvarez <https://github.com/unindented>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export enum LoggingLevel {
    ERROR = 0,
    WARNING = 1,
    INFO = 2,
    VERBOSE = 3
}

export type RequestType = "LOGIN" | "RENEW_TOKEN" | "UNKNOWN";

export type ResponseType = "id_token token" | "token";

export interface RequestInfo {
    /**
     * Object comprising of fields such as id_token/error, session_state, state, e.t.c.
     */
    parameters: any;
    /**
     * Request type.
     */
    requestType: RequestType;
    /**
     * Whether state is valid.
     */
    stateMatch: boolean;
    /**
     * Unique guid used to match the response with the request.
     */
    stateResponse: string;
    /**
     * Whether `requestType` contains `id_token`, `access_token` or error.
     */
    valid: boolean;
}

export interface UserInfo {
    /**
     * Username assigned from UPN or email.
     */
    userName: string;
    /**
     * Properties parsed from `id_token`.
     */
    profile: any;
}

export type TokenCallback = (
    errorDesc: string | null,
    token: string,
    error: any
) => void;

export type UserCallback = (errorDesc: string | null, user: UserInfo) => void;

export interface AuthenticationContextOptions {
    /**
     * Client ID assigned to your app by Azure Active Directory.
     */
    clientId: string;
    /**
     * Endpoint at which you expect to receive tokens.Defaults to `window.location.href`.
     */
    redirectUri: string;
    /**
     * Azure Active Directory instance. Defaults to `https://login.microsoftonline.com/`.
     */
    instance?: string;
    /**
     * Your target tenant. Defaults to `common`.
     */
    tenant?: string;
    /**
     * Query parameters to add to the authentication request.
     */
    extraQueryParameter?: string;
    /**
     * Unique identifier used to map the request with the response. Defaults to RFC4122 version 4 guid (128 bits).
     */
    correlationId?: string;
    /**
     * User defined function of handling the navigation to Azure AD authorization endpoint in case of login.
     */
    displayCall?: (url: string) => void;
    /**
     * Set this to true to enable login in a popup winodow instead of a full redirect. Defaults to `false`.
     */
    popUp?: boolean;
    /**
     * Set this to the resource to request on login. Defaults to `clientId`.
     */
    loginResource?: string;
    /**
     * Set this to redirect the user to a custom login page.
     */
    localLoginUrl?: string;
    /**
     * Redirects to start page after login. Defaults to `true`.
     */
    navigateToLoginRequestUrl?: boolean;
    /**
     * Set this to redirect the user to a custom logout page.
     */
    logOutUri?: string;
    /**
     * Redirects the user to postLogoutRedirectUri after logout. Defaults to `redirectUri`.
     */
    postLogoutRedirectUri?: string;
    /**
     * Sets browser storage to either 'localStorage' or sessionStorage'. Defaults to `sessionStorage`.
     */
    cacheLocation?: "localStorage" | "sessionStorage";
    /**
     * Array of keywords or URIs. Adal will attach a token to outgoing requests that have these keywords or URIs.
     */
    endpoints?: { [resource: string]: string };
    /**
     * Array of keywords or URIs. Adal will not attach a token to outgoing requests that have these keywords or URIs.
     */
    anonymousEndpoints?: string[];
    /**
     * If the cached token is about to be expired in the expireOffsetSeconds (in seconds), Adal will renew the token instead of using the cached token. Defaults to 300 seconds.
     */
    expireOffsetSeconds?: number;
    /**
     * The number of milliseconds of inactivity before a token renewal response from AAD should be considered timed out. Defaults to 6 seconds.
     */
    loadFrameTimeout?: number;
    /**
     * Callback to be invoked when a token is acquired.
     */
    callback?: TokenCallback;
}

export default class AuthenticationContext {
    constructor(options: AuthenticationContextOptions);
    /**
     * Initiates the login process by redirecting the user to Azure AD authorization endpoint.
     */
    login(): void;
    /**
     * Returns whether a login is in progress.
     */
    loginInProgress(): boolean;
    /**
     * Gets token for the specified resource from the cache.
     * @param resource A URI that identifies the resource for which the token is requested.
     */
    getCachedToken(resource: string): string;
    /**
     * If user object exists, returns it. Else creates a new user object by decoding `id_token` from the cache.
     */
    getCachedUser(): UserInfo;
    /**
     * Adds the passed callback to the array of callbacks for the specified resource.
     * @param resource A URI that identifies the resource for which the token is requested.
     * @param expectedState A unique identifier (guid).
     * @param callback The callback provided by the caller. It will be called with token or error.
     */
    registerCallback(
        expectedState: string,
        resource: string,
        callback: TokenCallback
    ): void;
    /**
     * Acquires token from the cache if it is not expired. Otherwise sends request to AAD to obtain a new token.
     * @param resource Resource URI identifying the target resource.
     * @param callback The callback provided by the caller. It will be called with token or error.
     */
    acquireToken(resource: string, callback: TokenCallback): void;
    /**
     * Acquires token (interactive flow using a popup window) by sending request to AAD to obtain a new token.
     * @param resource Resource URI identifying the target resource.
     * @param extraQueryParameters Query parameters to add to the authentication request.
     * @param claims Claims to add to the authentication request.
     * @param callback The callback provided by the caller. It will be called with token or error.
     */
    acquireTokenPopup(
        resource: string,
        extraQueryParameters: string | null | undefined,
        claims: string | null | undefined,
        callback: TokenCallback
    ): void;
    /**
     * Acquires token (interactive flow using a redirect) by sending request to AAD to obtain a new token. In this case the callback passed in the authentication request constructor will be called.
     * @param resource Resource URI identifying the target resource.
     * @param extraQueryParameters Query parameters to add to the authentication request.
     * @param claims Claims to add to the authentication request.
     */
    acquireTokenRedirect(
        resource: string,
        extraQueryParameters?: string | null,
        claims?: string | null
    ): void;
    /**
     * Redirects the browser to Azure AD authorization endpoint.
     * @param urlNavigate URL of the authorization endpoint.
     */
    promptUser(urlNavigate: string): void;
    /**
     * Clears cache items.
     */
    clearCache(): void;
    /**
     * Clears cache items for a given resource.
     * @param resource Resource URI identifying the target resource.
     */
    clearCacheForResource(resource: string): void;
    /**
     * Redirects user to logout endpoint. After logout, it will redirect to `postLogoutRedirectUri` if added as a property on the config object.
     */
    logOut(): void;
    /**
     * Calls the passed in callback with the user object or error message related to the user.
     * @param callback The callback provided by the caller. It will be called with user or error.
     */
    getUser(callback: UserCallback): void;
    /**
     * Checks if the URL fragment contains access token, id token or error description.
     * @param hash Hash passed from redirect page.
     */
    isCallback(hash: string): boolean;
    /**
     * Gets login error.
     */
    getLoginError(): string;
    /**
     * Creates a request info object from the URL fragment and returns it.
     */
    getRequestInfo(hash: string): RequestInfo;
    /**
     * Saves token or error received in the response from AAD in the cache. In case of `id_token`, it also creates the user object.
     */
    saveTokenFromHash(requestInfo: RequestInfo): void;
    /**
     * Gets resource for given endpoint if mapping is provided with config.
     * @param endpoint Resource URI identifying the target resource.
     */
    getResourceForEndpoint(resource: string): string;
    /**
     * This method must be called for processing the response received from AAD. It extracts the hash, processes the token or error, saves it in the cache and calls the callbacks with the result.
     * @param hash Hash fragment of URL. Defaults to `window.location.hash`.
     */
    handleWindowCallback(hash?: string): void;

    /**
     * Checks the logging Level, constructs the log message and logs it. Users need to implement/override this method to turn on logging.
     * @param level Level can be set 0, 1, 2 and 3 which turns on 'error', 'warning', 'info' or 'verbose' level logging respectively.
     * @param message Message to log.
     * @param error Error to log.
     */
    log(level: LoggingLevel, message: string, error: any): void;
    /**
     * Logs messages when logging level is set to 0.
     * @param message Message to log.
     * @param error Error to log.
     */
    error(message: string, error: any): void;
    /**
     * Logs messages when logging level is set to 1.
     * @param message Message to log.
     */
    warn(message: string): void;
    /**
     * Logs messages when logging level is set to 2.
     * @param message Message to log.
     */
    info(message: string): void;
    /**
     * Logs messages when logging level is set to 3.
     * @param message Message to log.
     */
    verbose(message: string): void;
}
