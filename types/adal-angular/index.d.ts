// In module contexts the class constructor function is the exported object
export = AuthenticationContext;

// This class is defined globally in not in a module context
declare class AuthenticationContext {
    instance: string;
    config: AuthenticationContext.Options;
    callback: AuthenticationContext.TokenCallback;
    popUp: boolean;
    isAngular: boolean;

    /**
     * Enum for request type
     */
    REQUEST_TYPE: AuthenticationContext.RequestType;
    RESPONSE_TYPE: AuthenticationContext.ResponseType;
    CONSTANTS: AuthenticationContext.Constants;

    constructor(options: AuthenticationContext.Options);
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
    getCachedUser(): AuthenticationContext.UserInfo;
    /**
     * Adds the passed callback to the array of callbacks for the specified resource.
     * @param resource A URI that identifies the resource for which the token is requested.
     * @param expectedState A unique identifier (guid).
     * @param callback The callback provided by the caller. It will be called with token or error.
     */
    registerCallback(
        expectedState: string,
        resource: string,
        callback: AuthenticationContext.TokenCallback,
    ): void;
    /**
     * Acquires token from the cache if it is not expired. Otherwise sends request to AAD to obtain a new token.
     * @param resource Resource URI identifying the target resource.
     * @param callback The callback provided by the caller. It will be called with token or error.
     */
    acquireToken(resource: string, callback: AuthenticationContext.TokenCallback): void;
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
        callback: AuthenticationContext.TokenCallback,
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
        claims?: string | null,
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
    getUser(callback: AuthenticationContext.UserCallback): void;
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
    getRequestInfo(hash: string): AuthenticationContext.RequestInfo;
    /**
     * Saves token or error received in the response from AAD in the cache. In case of `id_token`, it also creates the user object.
     */
    saveTokenFromHash(requestInfo: AuthenticationContext.RequestInfo): void;
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
    log(level: AuthenticationContext.LoggingLevel, message: string, error: any): void;
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

    /**
     * Logs Pii messages when Logging Level is set to 0 and window.piiLoggingEnabled is set to true.
     * @param message Message to log.
     * @param error Error to log.
     */
    errorPii(message: string, error: any): void;

    /**
     * Logs  Pii messages when Logging Level is set to 1 and window.piiLoggingEnabled is set to true.
     * @param message Message to log.
     */
    warnPii(message: string): void;

    /**
     * Logs messages when Logging Level is set to 2 and window.piiLoggingEnabled is set to true.
     * @param message Message to log.
     */
    infoPii(message: string): void;

    /**
     * Logs messages when Logging Level is set to 3 and window.piiLoggingEnabled is set to true.
     * @param message Message to log.
     */
    verbosePii(message: string): void;
}

declare namespace AuthenticationContext {
    function inject(config: Options): AuthenticationContext;

    type LoggingLevel = 0 | 1 | 2 | 3;

    type RequestType = "LOGIN" | "RENEW_TOKEN" | "UNKNOWN";

    type ResponseType = "id_token token" | "token";

    interface RequestInfo {
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

    interface UserInfo {
        /**
         * Username assigned from UPN or email.
         */
        userName: string;
        /**
         * Properties parsed from `id_token`.
         */
        profile: any;
    }

    type TokenCallback = (
        errorDesc: string | null,
        token: string | null,
        error: any,
    ) => void;

    type UserCallback = (errorDesc: string | null, user: UserInfo | null) => void;

    /**
     * Configuration options for Authentication Context
     */
    interface Options {
        /**
         * Client ID assigned to your app by Azure Active Directory.
         */
        clientId: string;
        /**
         * Endpoint at which you expect to receive tokens.Defaults to `window.location.href`.
         */
        redirectUri?: string | undefined;
        /**
         * Azure Active Directory instance. Defaults to `https://login.microsoftonline.com/`.
         */
        instance?: string | undefined;
        /**
         * Your target tenant. Defaults to `common`.
         */
        tenant?: string | undefined;
        /**
         * Query parameters to add to the authentication request.
         */
        extraQueryParameter?: string | undefined;
        /**
         * Unique identifier used to map the request with the response. Defaults to RFC4122 version 4 guid (128 bits).
         */
        correlationId?: string | undefined;
        /**
         * User defined function of handling the navigation to Azure AD authorization endpoint in case of login.
         */
        displayCall?: ((url: string) => void) | undefined;
        /**
         * Set this to true to enable login in a popup winodow instead of a full redirect. Defaults to `false`.
         */
        popUp?: boolean | undefined;
        /**
         * Set this to the resource to request on login. Defaults to `clientId`.
         */
        loginResource?: string | undefined;
        /**
         * Set this to redirect the user to a custom login page.
         */
        localLoginUrl?: string | undefined;
        /**
         * Redirects to start page after login. Defaults to `true`.
         */
        navigateToLoginRequestUrl?: boolean | undefined;
        /**
         * Set this to redirect the user to a custom logout page.
         */
        logOutUri?: string | undefined;
        /**
         * Redirects the user to postLogoutRedirectUri after logout. Defaults to `redirectUri`.
         */
        postLogoutRedirectUri?: string | undefined;
        /**
         * Sets browser storage to either 'localStorage' or sessionStorage'. Defaults to `sessionStorage`.
         */
        cacheLocation?: "localStorage" | "sessionStorage" | undefined;
        /**
         * Array of keywords or URIs. Adal will attach a token to outgoing requests that have these keywords or URIs.
         */
        endpoints?: { [resource: string]: string } | undefined;
        /**
         * Array of keywords or URIs. Adal will not attach a token to outgoing requests that have these keywords or URIs.
         */
        anonymousEndpoints?: string[] | undefined;
        /**
         * If the cached token is about to be expired in the expireOffsetSeconds (in seconds), Adal will renew the token instead of using the cached token. Defaults to 300 seconds.
         */
        expireOffsetSeconds?: number | undefined;
        /**
         * The number of milliseconds of inactivity before a token renewal response from AAD should be considered timed out. Defaults to 6 seconds.
         */
        loadFrameTimeout?: number | undefined;
        /**
         * Callback to be invoked when a token is acquired.
         */
        callback?: TokenCallback | undefined;
    }

    interface LoggingConfig {
        level: LoggingLevel;
        log: (message: string) => void;
        piiLoggingEnabled: boolean;
    }

    /**
     * Enum for storage constants
     */
    interface Constants {
        ACCESS_TOKEN: "access_token";
        EXPIRES_IN: "expires_in";
        ID_TOKEN: "id_token";
        ERROR_DESCRIPTION: "error_description";
        SESSION_STATE: "session_state";
        STORAGE: {
            TOKEN_KEYS: "adal.token.keys";
            ACCESS_TOKEN_KEY: "adal.access.token.key";
            EXPIRATION_KEY: "adal.expiration.key";
            STATE_LOGIN: "adal.state.login";
            STATE_RENEW: "adal.state.renew";
            NONCE_IDTOKEN: "adal.nonce.idtoken";
            SESSION_STATE: "adal.session.state";
            USERNAME: "adal.username";
            IDTOKEN: "adal.idtoken";
            ERROR: "adal.error";
            ERROR_DESCRIPTION: "adal.error.description";
            LOGIN_REQUEST: "adal.login.request";
            LOGIN_ERROR: "adal.login.error";
            RENEW_STATUS: "adal.token.renew.status";
        };
        RESOURCE_DELIMETER: "|";
        LOADFRAME_TIMEOUT: "6000";
        TOKEN_RENEW_STATUS_CANCELED: "Canceled";
        TOKEN_RENEW_STATUS_COMPLETED: "Completed";
        TOKEN_RENEW_STATUS_IN_PROGRESS: "In Progress";
        LOGGING_LEVEL: {
            ERROR: 0;
            WARN: 1;
            INFO: 2;
            VERBOSE: 3;
        };
        LEVEL_STRING_MAP: {
            0: "ERROR:";
            1: "WARNING:";
            2: "INFO:";
            3: "VERBOSE:";
        };
        POPUP_WIDTH: 483;
        POPUP_HEIGHT: 600;
    }
}

declare global {
    interface Window {
        Logging: AuthenticationContext.LoggingConfig;
    }
}
